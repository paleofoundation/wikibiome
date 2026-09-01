import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import { articleMediaFileNames, articleMediaPolicy, articleMediaRegistry } from "../lib/article-media-registry.mjs";
import { classifySearchReferrer } from "../lib/search-observability.mjs";
import { applyPublicContentPolicy, publicContentExclusionReason } from "../scripts/public-content-policy.mjs";
import { normalizeSourceMetadata } from "../scripts/source-metadata-policy.mjs";
import { assertMediaOutputAudit } from "../scripts/article-media-batch-validation.mjs";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function structuredData(html, marker) {
  const block = [...html.matchAll(/<script\b([^>]*)type="application\/ld\+json"([^>]*)>([\s\S]*?)<\/script>/g)]
    .find((match) => `${match[1]} ${match[2]}`.includes(marker));
  assert.ok(block, `expected structured-data block marked ${marker}`);
  return JSON.parse(block[3].replaceAll("&quot;", '"').replaceAll("&amp;", "&"));
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    return entry.isDirectory() ? sourceFiles(path) : [path];
  });
}

test("keeps internal navigation independent of the vinext client-link runtime", () => {
  const appDirectory = new URL("../app/", import.meta.url);
  const offenders = sourceFiles(appDirectory)
    .filter((file) => /\.tsx?$/.test(file.pathname))
    .filter((file) => /from\s+["']next\/link["']/.test(readFileSync(file, "utf8")))
    .map((file) => file.pathname.replace(appDirectory.pathname, "app/"));

  assert.deepEqual(offenders, []);
});

test("counts only recognized search-engine referrers as search landings", () => {
  assert.equal(classifySearchReferrer("https://www.google.com/search?q=nickel"), "google");
  assert.equal(classifySearchReferrer("https://www.google.co.uk/search?q=nickel"), "google");
  assert.equal(classifySearchReferrer("https://search.yahoo.com/search?p=microbiome"), "yahoo");
  assert.equal(classifySearchReferrer("https://search.brave.com/search?q=dysbiosis"), "other-search");
  assert.equal(classifySearchReferrer("https://example.org/research-links"), undefined);
  assert.equal(classifySearchReferrer("https://microbiomemedicine.com/resources"), undefined);
  assert.equal(classifySearchReferrer("https://google.evil.example/search?q=nickel"), undefined);
  assert.equal(classifySearchReferrer("not a URL"), undefined);
});

test("accepts only privacy-limited search observability events", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-observability`);
  const { default: worker } = await import(workerUrl.href);
  const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
  const ctx = { waitUntil() {}, passThroughOnException() {} };
  const captured = [];
  const originalInfo = console.info;
  console.info = (...items) => captured.push(items);
  try {
    const accepted = await worker.fetch(new Request("http://localhost/api/search-observability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ version: 1, event: "search_landing", path: "/article/nickel", source: "google" }),
    }), env, ctx);
    const rejectedSource = await worker.fetch(new Request("http://localhost/api/search-observability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ version: 1, event: "search_landing", path: "/article/nickel", source: "ordinary-referral" }),
    }), env, ctx);
    const rejectedQuery = await worker.fetch(new Request("http://localhost/api/search-observability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ version: 1, event: "search_landing", path: "/article/nickel?q=private", source: "google" }),
    }), env, ctx);
    const rejectedCrossOrigin = await worker.fetch(new Request("http://localhost/api/search-observability", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "https://example.org",
        "sec-fetch-site": "cross-site",
      },
      body: JSON.stringify({ version: 1, event: "search_landing", path: "/article/nickel", source: "google" }),
    }), env, ctx);

    assert.equal(accepted.status, 202);
    assert.equal(rejectedSource.status, 400);
    assert.equal(rejectedQuery.status, 400);
    assert.equal(rejectedCrossOrigin.status, 403);
    assert.equal(captured.length, 1);
    assert.deepEqual(JSON.parse(captured[0][1]), { version: 1, event: "search_landing", path: "/article/nickel", source: "google" });
  } finally {
    console.info = originalInfo;
  }
});

test("normalizes source-authored lead sections without inventing or duplicating prose", () => {
  const sourceLead = "The exact source-authored introduction with [[verified-source]].";
  const input = {
    _stats: {},
    pages: [{
      id: "lead-normalization-fixture",
      title: "Lead normalization fixture",
      category: "mechanism",
      overview: "<!-- source maintenance marker -->",
      sections: [
        { heading: "Overview", level: 2, body: sourceLead },
        { heading: "Evidence", level: 2, body: "Evidence remains in its source section." },
      ],
    }],
  };
  const { content, normalizations } = applyPublicContentPolicy(input);

  assert.equal(content.pages[0].overview, sourceLead);
  assert.deepEqual(content.pages[0].sections.map((section) => section.heading), ["Evidence"]);
  assert.equal(normalizations.leadPromotions.length, 1);
  assert.equal(input.pages[0].sections[0].body, sourceLead, "normalization must not mutate the upstream snapshot");
});

test("omits invalid source years and placeholder DOIs without inventing metadata", () => {
  const input = {
    pages: [],
    sourceLookup: {
      invalid: { title: "Unverified source", year: "Unknown", doi: "not yet verified" },
      malformed: { title: "Malformed DOI", year: 2023, doi: "example.org/not-a-doi" },
      normalized: { title: "Prefixed DOI", year: "2024", doi: "https://doi.org/10.1234/ABC.5" },
    },
  };
  const { content, audit } = normalizeSourceMetadata(input);

  assert.deepEqual(content.sourceLookup.invalid, { title: "Unverified source" });
  assert.deepEqual(content.sourceLookup.malformed, { title: "Malformed DOI", year: 2023 });
  assert.deepEqual(content.sourceLookup.normalized, { title: "Prefixed DOI", year: 2024, doi: "10.1234/ABC.5" });
  assert.deepEqual(audit.omittedYears, [{ id: "invalid", value: "Unknown", reason: "not-a-finite-integer" }]);
  assert.deepEqual(audit.omittedDois, [
    { id: "invalid", value: "not yet verified", reason: "placeholder" },
    { id: "malformed", value: "example.org/not-a-doi", reason: "malformed" },
  ]);
  assert.equal(input.sourceLookup.invalid.year, "Unknown", "normalization must not mutate the upstream snapshot");
  assert.equal(input.sourceLookup.invalid.doi, "not yet verified");
});

test("rejects prompt-derived or unreconciled generated-media counts", () => {
  const valid = {
    pageId: "example-route",
    outputAudit: {
      reviewedBy: "named reviewing authority",
      reviewedOn: "2026-09-01",
      promptCountTrusted: false,
      observedSubjectDescription: "Six visible cellular bodies.",
      metadataConsistency: "pass",
    },
  };
  assert.doesNotThrow(() => assertMediaOutputAudit(valid, "example-batch"));
  assert.throws(
    () => assertMediaOutputAudit({ ...valid, outputAudit: { ...valid.outputAudit, promptCountTrusted: true } }, "example-batch"),
    /generated prompt cannot serve as count evidence/,
  );
  assert.throws(
    () => assertMediaOutputAudit({ ...valid, outputAudit: { ...valid.outputAudit, observedSubjectDescription: "", metadataConsistency: "fail" } }, "example-batch"),
    /does not have a passing metadata reconciliation/,
  );
});

test("serves versioned scientific WebPs with an explicit image MIME type", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-media-headers`);
  const { default: worker } = await import(workerUrl.href);
  const fetchedAssetUrls = [];
  const assets = {
    fetch: async (assetRequest) => {
      fetchedAssetUrls.push(assetRequest.url);
      return new Response("webp", {
        headers: { "content-type": "application/octet-stream" },
      });
    },
  };
  const response = await worker.fetch(
    new Request("http://localhost/media/image/nickel-technical-specimen-v2.webp"),
    { ASSETS: assets },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const legacyResponse = await worker.fetch(
    new Request("http://localhost/media/nickel-technical-specimen-v2.webp"),
    { ASSETS: assets },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "image/webp");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("cache-control"), "public, max-age=31536000, immutable");
  assert.equal(legacyResponse.status, 308);
  assert.equal(legacyResponse.headers.get("location"), "http://localhost/media/image/nickel-technical-specimen-v2.webp");
  assert.deepEqual(fetchedAssetUrls, [
    "http://localhost/media-files/nickel-technical-specimen-v2.webp",
  ]);

  const unregisteredResponse = await worker.fetch(
    new Request("http://localhost/media/image/unreviewed-draft-v1.webp"),
    { ASSETS: assets },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(unregisteredResponse.status, 404);
});

test("server-renders the WikiBiome portal and anatomical knowledge map", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>WikiBiome — The Human Microbiome Encyclopedia<\/title>/i);
  assert.match(html, /Every body/);
  assert.match(html, /wikibiome-logo\.png/);
  assert.match(html, /wikibiome-human-system-v2\.png/);
  assert.match(html, /The current corpus, reimagined/);
  assert.match(html, /href="\/article\/akkermansia-muciniphila"/);
  assert.match(html, /href="\/article\/nickel"/);
  assert.match(html, /src="\/media\/image\/akkermansia-muciniphila-morphology-v2\.webp"/);
  assert.match(html, /src="\/media\/image\/nickel-technical-specimen-v2\.webp"/);
  assert.match(html, /src="\/media\/image\/alzheimers-disease-pathology-v2\.webp"/);
  assert.match(html, /src="\/media\/image\/dysbiosis-microbial-community-v2\.webp"/);
  const portalMarkup = html.match(/<section class="home-portals"[\s\S]*?<section class="home-trail"/)?.[0] ?? "";
  assert.doesNotMatch(portalMarkup, /wikibiome-human-system-v2\.png/, "the article cards never reuse the anatomical hero fallback");
  assert.match(html, /A project of[\s\S]{0,80}Microbiome Medicine/);
  assert.match(html, /href="https:\/\/microbiomemedicine\.com"/);
  assert.doesNotMatch(html, /A project of the Paleo Foundation/);
  assert.doesNotMatch(html, /class="home-footer"/, "the homepage must not render a second, legacy footer");
  assert.equal((html.match(/class="wiki-footer"/g) ?? []).length, 1, "the homepage must render exactly one global footer");
  assert.match(html, /1,891/);
  assert.match(html, /821/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("server-renders real article and directory pages through the shared redesign", async () => {
  const [articleResponse, directoryResponse, regulationResponse, interventionResponse] = await Promise.all([
    render("/article/nickel"),
    render("/category/microbe"),
    render("/article/environmental-metal-exposure"),
    render("/article/enterohepatic-circulation"),
  ]);

  assert.equal(articleResponse.status, 200);
  assert.equal(directoryResponse.status, 200);
  assert.equal(regulationResponse.status, 200);
  assert.equal(interventionResponse.status, 200);

  const article = await articleResponse.text();
  assert.match(article, /<title>Nickel — WikiBiome<\/title>/i);
  assert.match(article, /class="article-system-art"/);
  assert.match(article, /class="article-media-figure"/);
  assert.match(article, /src="\/media\/image\/nickel-technical-specimen-v2\.webp"/);
  assert.match(article, /143/);
  assert.match(article, /generated references/);
  assert.match(article, /href="\/source\/braud-2010-siderophores-pseudomonas-metal-tolerance"/);
  const chemicalStart = article.indexOf('id="chemical-properties"');
  const metabolismStart = article.indexOf('id="nickel-metabolism-and-biomarkers"');
  const chemicalSection = article.slice(chemicalStart, metabolismStart);
  const chemicalParagraphs = [...chemicalSection.matchAll(/<p class="continuous-prose">([\s\S]*?)<\/p>/g)];
  assert.ok(chemicalStart >= 0 && metabolismStart > chemicalStart);
  assert.ok(chemicalParagraphs.length >= 6, "dense evidence lists must preserve their topical boundaries as readable prose paragraphs");
  assert.match(chemicalSection, /64Ni\)\.<sup class="article-citation"/, "sentence punctuation must precede its citation marker");
  assert.doesNotMatch(chemicalSection, /<\/sup>[,\s]+<sup class="article-citation"/, "adjacent citation markers must not be separated by commas or spaces");
  assert.doesNotMatch(chemicalSection, /\s--\s/, "typewriter double hyphens must not leak into article prose");
  assert.doesNotMatch(chemicalSection, /<p(?:\s+class="[^"]*")?>\s*---+\s*<\/p>/, "Markdown thematic breaks must not render as prose");
  chemicalParagraphs.forEach(([, paragraph]) => {
    const visibleWords = paragraph
      .replace(/<span class="citation-preview"[\s\S]*?<\/span>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[^;]+;/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    assert.ok(visibleWords.length <= 60, `generated prose paragraph is too long (${visibleWords.length} words)`);
  });

  const [regulationArticle, interventionArticle] = await Promise.all([
    regulationResponse.text(),
    interventionResponse.text(),
  ]);
  assert.match(regulationArticle, /A patchwork of regulations exists\. Drinking water:/);
  assert.match(regulationArticle, /Occupational: OSHA PELs, NIOSH RELs\.<\/p><p class="continuous-prose">Food:/);
  assert.match(interventionArticle, /Intervention implications\.<\/p><p>β-Glucuronidase inhibitors:/);
  assert.match(interventionArticle, /could dampen dysbiotic EHC\. Dysbiosis correction:/);

  const directory = await directoryResponse.text();
  assert.match(directory, /<title>Microorganisms — WikiBiome<\/title>/i);
  assert.match(directory, /233/);
  assert.match(directory, /records in this view/);
  assert.match(directory, /href="\/article\/akkermansia-muciniphila"/);
  assert.match(directory, /class="directory-record-media"[\s\S]*src="\/media\/image\/akkermansia-muciniphila-morphology-v2\.webp"/);
  assert.match(directory, /wikibiome-logo\.png/);
});

test("applies literal, provenance-labeled image standards only to reviewed article subjects", async () => {
  const pilot = [
    ["nickel", "nickel-technical-specimen-v2", "Material specimen", "Technical specimen visualization", "PubChem CID:935", "ChemicalSubstance"],
    ["akkermansia-muciniphila", "akkermansia-muciniphila-morphology-v2", "Morphology reconstruction", "Microscopy-informed reconstruction", "NCBITaxon:239935", "Taxon"],
    ["alzheimers-disease", "alzheimers-disease-pathology-v2", "Pathology reconstruction", "Pathology-informed reconstruction", "MeSH:D000544", "MedicalCondition"],
    ["dysbiosis", "dysbiosis-microbial-community-v2", "Community reconstruction", "Microscopy-informed community reconstruction", "MeSH:D064806", "MedicalCondition"],
    ["escherichia-coli", "escherichia-coli-morphology-v1", "Morphology reconstruction", "Microscopy-informed reconstruction", "NCBITaxon:562", "Taxon"],
    ["helicobacter-pylori", "helicobacter-pylori-morphology-v1", "Morphology reconstruction", "Microscopy-informed reconstruction", "NCBITaxon:210", "Taxon"],
    ["bifidobacterium", "bifidobacterium-morphology-v1", "Morphology reconstruction", "Microscopy-informed reconstruction", "NCBITaxon:1678", "Taxon"],
    ["candida-albicans", "candida-albicans-morphology-v1", "Morphology reconstruction", "Microscopy-informed fungal morphology reconstruction", "NCBITaxon:5476", "Taxon"],
  ];
  const responses = await Promise.all(pilot.map(([id]) => render(`/article/${id}`)));
  responses.forEach((response) => assert.equal(response.status, 200));
  const pages = await Promise.all(responses.map((response) => response.text()));

  for (const [index, [id, stem, label, provenance, identifier, subjectType]] of pilot.entries()) {
    const html = pages[index];
    assert.match(html, /class="article-system-art(?: |")/, `${id} keeps the large decorative article hero`);
    assert.match(html, /class="article-media-figure"/, `${id} renders the page-specific sidebar plate`);
    assert.match(html, /class="article-media-caption-head"/, `${id} presents the image as an editorial plate`);
    assert.match(html, /<details class="article-media-ledger">/, `${id} keeps the technical record available without crowding the caption`);
    assert.match(html, /Scientific media record/);
    assert.match(html, new RegExp(`src="/media/image/${stem}\\.webp"`));
    assert.match(html, new RegExp(label));
    assert.match(html, new RegExp(provenance));
    assert.doesNotMatch(html, /Conceptual illustration|Original AI-generated artwork/);
    assert.match(html, /data-article-media-schema/);
    assert.match(html, /primaryImageOfPage/);
    assert.match(html, /trainedAlgorithmicMedia/);
    assert.match(html, new RegExp(identifier));
    assert.match(html, new RegExp(`"@type":"${subjectType}"`));
    assert.match(html, /Editorial review complete/);
    assert.match(html, /Identifiers authority-verified/);
    assert.match(html, /Accessibility validated/);
    assert.match(html, /Trained-algorithmic media/);
    assert.match(html, /Created with a trained generative algorithm/);
    assert.match(html, /CC BY-SA 4\.0/);
    assert.match(html, /creativecommons\.org\/licenses\/by-sa\/4\.0/);
    assert.match(html, /creativeWorkStatus/);
    assert.match(html, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${stem}-social\\.webp"`));
    assert.match(html, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${stem}-social\\.webp"`));

    for (const suffix of [".webp", "-social.webp"]) {
      const asset = readFileSync(new URL(`../public/media-files/${stem}${suffix}`, import.meta.url));
      assert.ok(asset.byteLength > 40_000, `${stem}${suffix} should be a nontrivial optimized image`);
      assert.ok(asset.includes(Buffer.from("trainedAlgorithmicMedia")), `${stem}${suffix} should retain embedded digital-source metadata`);
      assert.ok(asset.includes(Buffer.from(identifier)), `${stem}${suffix} should embed its controlled scientific identifier`);
      assert.ok(asset.includes(Buffer.from(articleMediaPolicy.license.url)), `${stem}${suffix} should embed its reusable license`);
      assert.ok(asset.includes(Buffer.from("authority-verified")), `${stem}${suffix} should embed identifier-review status`);
    }
  }

  assert.ok(Object.keys(articleMediaRegistry).length >= pilot.length);
  for (const [id, media] of Object.entries(articleMediaRegistry)) {
    assert.deepEqual(
      { publishedFile: media.publishedFile, socialFile: media.socialFile, src: media.src, socialSrc: media.socialSrc, masterSource: media.masterSource },
      articleMediaFileNames(media.pageId, media.assetType, media.revision),
      `${id} must use generator-derived canonical filenames`,
    );
    assert.ok(media.scientificIdentifiers.length > 0, `${id} requires a controlled scientific identifier`);
    assert.equal(media.license, articleMediaPolicy.license.url);
    assert.equal(media.reviewStatus, "editorial-review-complete");
    assert.equal(media.identifierReviewStatus, "authority-verified");
    assert.equal(media.accessibilityReviewStatus, "validated");
    assert.equal(media.publicationStatus, "published-reviewed");
    assert.equal(media.reviewLogKey, `${media.pageId}|${media.publishedFile}`);
    assert.ok(media.scientificReferences.length >= 2, `${id} requires at least two scientific visual references`);
    const authorities = new Set(media.scientificIdentifiers.map((item) => item.authority));
    for (const required of articleMediaPolicy.requiredAuthorities[media.subjectKind]) {
      assert.ok(authorities.has(required), `${id} requires ${required}`);
    }
    const propertyIDs = new Set(media.scientificIdentifiers.map((item) => item.propertyID));
    for (const required of articleMediaPolicy.requiredPropertyIDs[media.subjectKind]) {
      assert.ok(propertyIDs.has(required), `${id} requires ${required}`);
    }
  }
  const registeredPublishedFiles = Object.values(articleMediaRegistry)
    .flatMap((media) => [media.publishedFile, media.socialFile])
    .sort();
  const publiclyStoredMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url))
    .filter((filename) => filename.endsWith(".webp"))
    .sort();
  assert.deepEqual(publiclyStoredMediaFiles, registeredPublishedFiles, "public media storage must contain only registered reviewed derivatives");

  const reviewLog = JSON.parse(readFileSync(new URL("../data/article-media-review-log.json", import.meta.url), "utf8"));
  for (const media of Object.values(articleMediaRegistry)) {
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved", `${media.pageId} requires an approved review-log entry`);
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    const master = readFileSync(new URL(`../media/masters/${media.masterSource}`, import.meta.url));
    assert.ok(master.includes(Buffer.from("trainedAlgorithmicMedia")), `${media.pageId} master should embed digital-source metadata`);
    assert.ok(master.includes(Buffer.from(media.reviewLogKey)), `${media.pageId} master should embed its review-log key`);
  }

  const program = JSON.parse(readFileSync(new URL("../data/article-media-coverage.generated.json", import.meta.url), "utf8"));
  const batchDirectory = new URL("../data/article-media-batches/", import.meta.url);
  const batches = readdirSync(batchDirectory)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => JSON.parse(readFileSync(new URL(name, batchDirectory), "utf8")));
  const activeReviewStatuses = new Set(["awaiting-control-review", "approved-awaiting-promotion"]);
  const pendingIds = batches
    .filter((batch) => activeReviewStatuses.has(batch.status))
    .flatMap((batch) => batch.assets.filter((asset) => asset.assetType && asset.revision && asset.draft).map((asset) => asset.pageId));
  const publishedMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  assert.equal(program.current.inReview, pendingIds.length);
  for (const id of pendingIds) {
    assert.equal(program.queue.find((record) => record.id === id)?.status, "in-review", `${id} remains explicitly in review`);
    assert.equal(articleMediaRegistry[id], undefined, `${id} must not enter the reviewed registry before approval`);
    assert.ok(!publishedMediaFiles.some((filename) => filename.startsWith(`${id}-`)), `${id} draft must not enter public media files`);
  }
  const heldIds = ["akkermansia-mucinicola", "allisonella", "atopobium-parvulum", "atopobium-vaginae"];
  for (const id of heldIds) {
    const heldRoute = program.queue.find((record) => record.id === id);
    assert.equal(heldRoute?.status, "scientific-hold");
    assert.equal(articleMediaRegistry[id], undefined);
    assert.ok(!publishedMediaFiles.some((filename) => filename.startsWith(`${id}-`)));
    assert.equal(reviewLog.rejectedAssets.find((asset) => asset.pageId === id)?.disposition, "scientific-identity-hold");
  }

  const batchIds = batches
    .filter((batch) => batch.status === "reviewed")
    .flatMap((batch) => batch.assets.filter((asset) => asset.assetType && asset.revision).map((asset) => asset.pageId));
  for (const batch of batches.filter((item) => item.status === "reviewed" || item.status === "approved-awaiting-promotion")) {
    for (const asset of batch.assets.filter((candidate) => candidate.assetType && candidate.revision)) {
      assert.ok(asset.outputAudit?.reviewedBy, `${asset.pageId} requires an identified human output audit`);
      assert.equal(asset.outputAudit?.promptCountTrusted, false, `${asset.pageId} cannot treat a generated prompt as count evidence`);
      assert.equal(asset.outputAudit?.metadataConsistency, "pass", `${asset.pageId} visible subjects must match its metadata`);
    }
  }
  const batchResponses = await Promise.all(batchIds.map((id) => render(`/article/${id}`)));
  const batchPages = await Promise.all(batchResponses.map((response) => response.text()));
  for (const [index, id] of batchIds.entries()) {
    assert.equal(batchResponses[index].status, 200);
    assert.ok(batchPages[index].includes(`src="${articleMediaRegistry[id].src}"`), `${id} renders its reviewed primary media`);
    assert.match(batchPages[index], new RegExp(articleMediaRegistry[id].reviewLogKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.throws(
    () => articleMediaFileNames("Escherichia Coli", "morphology", 1),
    /Invalid canonical article slug/,
  );
  assert.throws(
    () => articleMediaFileNames("escherichia-coli", "concept-art", 1),
    /Unsupported article media asset type/,
  );
  assert.throws(
    () => articleMediaFileNames("escherichia-coli", "morphology", 0),
    /Invalid article media revision/,
  );

  const staticHeaders = readFileSync(new URL("../dist/client/_headers", import.meta.url), "utf8");
  assert.match(staticHeaders, /\/media-files\/\*\.webp[\s\S]*Content-Type:\s*image\/webp/i);
  assert.match(staticHeaders, /X-Content-Type-Options:\s*nosniff/i);

  const unverified = ["low-nickel-diet", "paradox-plant-based-diet-nickel-trap"];
  const unverifiedResponses = await Promise.all(unverified.map((id) => render(`/article/${id}`)));
  const unverifiedPages = await Promise.all(unverifiedResponses.map((response) => response.text()));
  for (const [index, html] of unverifiedPages.entries()) {
    assert.equal(unverifiedResponses[index].status, 200);
    assert.match(html, /class="article-system-art(?: |")/, `${unverified[index]} keeps the decorative page hero`);
    assert.match(html, /class="infobox-visual infobox-/);
    assert.doesNotMatch(html, /class="article-media-figure"/);
    assert.doesNotMatch(html, /data-article-media-schema/);
  }

  const fallbackResponse = await render("/article/cadmium");
  const fallback = await fallbackResponse.text();
  assert.match(fallback, /class="infobox-visual infobox-metal"/);
  assert.doesNotMatch(fallback, /class="article-media-figure"/);
});

test("generates Akkermansia citations, reconciles source drift, and renders full references", async () => {
  const response = await render("/article/akkermansia-muciniphila");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Akkermansia muciniphila — WikiBiome<\/title>/i);
  assert.match(html, /10[\s\S]{0,80}generated references/);
  assert.match(html, /10[\s\S]{0,80}unique references/);
  assert.match(html, /\+2[\s\S]{0,100}inline sources recovered beyond frontmatter/);
  assert.match(html, /href="#reference-1"[\s\S]*Reference 1/);
  assert.match(html, /id="references"/);
  assert.match(html, /id="reference-2"/);
  assert.match(html, /Akkermansia muciniphila Alters Gut Microbiota and Immune System/);
  assert.match(html, /doi:[\s\S]{0,40}10\.3389\/fmicb\.2022\.906920/);
  assert.match(html, /href="\/source\/amadi-2022-dietary-interventions-asd-systematic-review"/);
});

test("reconciles Alzheimer's disease and signature records into one generated disease atlas", async () => {
  const response = await render("/article/alzheimers-disease");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Alzheimer(?:&#x27;|')s Disease — WikiBiome<\/title>/i);
  assert.match(html, /One disease\. Five evidence layers\./);
  assert.match(html, /3[\s\S]{0,80}existing vault records/);
  assert.match(html, /31[\s\S]{0,80}combined references/);
  assert.match(html, /5[\s\S]{0,30}\/5[\s\S]{0,30}layers populated/);
  assert.match(html, /id="metallomic-layer"/);
  assert.match(html, /id="taxonomic-layer"/);
  assert.match(html, /id="immunity-layer"/);
  assert.match(html, /id="ecological-layer"/);
  assert.match(html, /id="virulence-layer"/);
  assert.match(html, /href="\/article\/akkermansia-muciniphila"/);
  assert.match(html, /curli amyloid/i);
  assert.match(html, /The Copper Paradox: Brain Depletion, Peripheral Excess/);
  assert.doesNotMatch(html, /id="article-key-sources"/);
  assert.doesNotMatch(html, /<br\s*\/><br\s*\/>/);
  assert.match(html, /class="open-question-list"/);
  assert.match(html, /<details><summary><span>01<\/span><strong>Can brain Cu be restored without raising peripheral levels\?/);

  const enrichedStart = html.indexOf("Enriched taxa");
  const depletedStart = html.indexOf("Depleted taxa");
  const saccharomyces = html.indexOf(">Saccharomyces<");
  assert.ok(enrichedStart >= 0 && depletedStart > enrichedStart);
  assert.ok(saccharomyces > depletedStart, "Saccharomyces should render in the depleted AD column");

  const metallomicStart = html.indexOf('id="article-metallomic-signature"');
  const mechanisticStart = html.indexOf('id="article-shared-mechanistic-pathways"');
  const metallomicNarrative = html.slice(metallomicStart, mechanisticStart);
  assert.ok(metallomicStart >= 0 && mechanisticStart > metallomicStart);
  assert.match(metallomicNarrative, /continuous-prose-section/);
  assert.match(metallomicNarrative, /class="continuous-prose"/);
  assert.doesNotMatch(metallomicNarrative, /<(?:ul|ol)>/);

  const environmentalStart = html.indexOf('id="article-environmental-metal-exposure-links"');
  const developmentalStart = html.indexOf('id="article-developmental-vulnerability"');
  const paradoxStart = html.indexOf('id="article-dietary-metal-paradoxes"');
  const interventionStart = html.indexOf('id="article-current-interventions-with-metal-relevance"');
  const environmentalNarrative = html.slice(environmentalStart, developmentalStart);
  const developmentalNarrative = html.slice(developmentalStart, paradoxStart);
  const paradoxNarrative = html.slice(paradoxStart, interventionStart);

  assert.match(environmentalNarrative, /class="continuous-prose"/);
  assert.doesNotMatch(environmentalNarrative, /<(?:ul|ol)>/);
  assert.match(environmentalNarrative, /lead \(Pb\) and manganese \(Mn\) exposure/);
  assert.match(environmentalNarrative, /arsenic \(As\) in water/);
  assert.match(environmentalNarrative, /methylmercury \(MeHg\)/);
  assert.match(developmentalNarrative, /symptom onset\.<\/p><p class="continuous-prose">Early-life lead \(Pb\) exposure/);
  assert.ok((developmentalNarrative.match(/<p class="continuous-prose">/g) ?? []).length >= 3, "dense disease evidence must be grouped into multiple prose paragraphs");
  assert.doesNotMatch(developmentalNarrative, /<(?:ul|ol)>/);
  assert.match(paradoxNarrative, /class="paradox-link-panel"/);
  assert.equal((paradoxNarrative.match(/Read paradox →/g) ?? []).length, 3);
  assert.match(paradoxNarrative, /href="\/article\/paradox-fish-consumption-mercury-confound"/);
  assert.match(paradoxNarrative, /href="\/article\/paradox-plant-based-diet-nickel-trap"/);
  assert.match(paradoxNarrative, /href="\/article\/paradox-alzheimers-disease-zinc-supplementation"/);
  assert.doesNotMatch(paradoxNarrative, /<article>/);

  assert.match(html, /class="ecology-console"/);
  assert.match(html, /WB\.ECO \/ SYSTEM MODEL/);
  assert.equal((html.match(/class="ecology-node"/g) ?? []).length, 14);
  assert.doesNotMatch(html, /class="ecology-path"/);
});

test("canonicalizes legacy signature URLs and applies the generator to every disease state", async () => {
  const [legacy, parkinsons, unpaired, nonexistentSignature, directory] = await Promise.all([
    render("/article/alzheimers-disease-signature"),
    render("/article/parkinsons-disease"),
    render("/article/bipolar-disorder"),
    render("/article/bipolar-disorder-signature"),
    render("/category/signature"),
  ]);

  assert.equal(legacy.status, 308);
  assert.equal(legacy.headers.get("location"), "/article/alzheimers-disease#signature");

  assert.equal(parkinsons.status, 200);
  const parkinsonsHtml = await parkinsons.text();
  assert.match(parkinsonsHtml, /One disease\. Five evidence layers\./);
  assert.match(parkinsonsHtml, /Canonical disease record/);
  assert.match(parkinsonsHtml, /five-layer microbiome signature/);

  assert.equal(unpaired.status, 200);
  const unpairedHtml = await unpaired.text();
  assert.match(unpairedHtml, /signature scaffold ready/i);
  assert.match(unpairedHtml, /No signature file is paired yet/);
  assert.match(unpairedHtml, /0[\s\S]{0,30}\/5[\s\S]{0,30}layers populated/);
  assert.match(unpairedHtml, /No structured signals indexed yet/);
  assert.equal(nonexistentSignature.status, 404);

  assert.equal(directory.status, 200);
  const directoryHtml = await directory.text();
  assert.match(directoryHtml, /42[\s\S]{0,60}records in this view/);
  assert.match(directoryHtml, /each signature opens inside its canonical disease record/i);
  assert.match(directoryHtml, /href="\/article\/alzheimers-disease"/);
  assert.doesNotMatch(directoryHtml, /href="\/article\/alzheimers-disease-signature"/);
});

test("links every dietary paradox section to generated canonical articles", async () => {
  const paths = [
    "/article/breast-cancer",
    "/article/endometriosis",
    "/article/pcos",
    "/article/type-2-diabetes",
    "/article/low-nickel-diet",
    "/article/metal-disease-matrix",
    "/article/dietary-metal-paradoxes",
  ];
  const responses = await Promise.all(paths.map(render));
  responses.forEach((response) => assert.equal(response.status, 200));
  const [breast, endometriosis, pcos, diabetes, lowNickel, matrix, dietaryAnalysis] = await Promise.all(responses.map((response) => response.text()));

  const breastParadox = breast.slice(breast.indexOf('id="article-dietary-metal-paradoxes"'), breast.indexOf('id="article-current-interventions'));
  assert.equal((breastParadox.match(/Read paradox →/g) ?? []).length, 2);
  assert.match(breastParadox, /href="\/article\/paradox-breast-cancer-the-zinc-supplementation-question"/);
  assert.match(breastParadox, /href="\/article\/paradox-plant-based-diet-nickel-trap"/);

  const endometriosisParadox = endometriosis.slice(endometriosis.indexOf('id="article-dietary-metal-paradoxes"'), endometriosis.indexOf('id="article-current-interventions'));
  assert.equal((endometriosisParadox.match(/Read paradox →/g) ?? []).length, 3);
  assert.match(endometriosisParadox, /href="\/article\/paradox-plant-based-diet-nickel-trap"/);
  assert.match(endometriosisParadox, /href="\/article\/paradox-zinc-endometriosis-reversal"/);
  assert.match(endometriosisParadox, /href="\/article\/paradox-endometriosis-the-h2snf-kb-amplification-loop"/);

  const pcosParadox = pcos.slice(pcos.indexOf('id="article-dietary-metal-paradoxes"'), pcos.indexOf('id="article-insulin-resistance-as-central-mediator'));
  assert.equal((pcosParadox.match(/Read paradox →/g) ?? []).length, 1);
  assert.match(pcosParadox, /href="\/article\/paradox-plant-based-diet-nickel-trap"/);

  const diabetesParadox = diabetes.slice(diabetes.indexOf('id="article-dietary-metal-paradoxes"'), diabetes.indexOf('id="article-current-interventions-with-metal-relevance'));
  assert.equal((diabetesParadox.match(/Read paradox →/g) ?? []).length, 2);
  assert.match(diabetesParadox, /href="\/article\/paradox-iron-supplementation-double-edged-sword"/);
  assert.match(diabetesParadox, /href="\/article\/paradox-type-2-diabetes-the-chromium-supplementation-paradox"/);

  const lowNickelParadox = lowNickel.slice(lowNickel.indexOf('id="the-dietary-paradox"'), lowNickel.indexOf('id="diagnosis-when-to-recommend-a-low-nickel-diet"'));
  assert.equal((lowNickelParadox.match(/Read paradox →/g) ?? []).length, 3);
  assert.match(lowNickelParadox, /href="\/article\/paradox-plant-based-diet-nickel-trap"/);
  assert.match(lowNickelParadox, /href="\/article\/paradox-gluten-free-diet-nickel-load-switch"/);
  assert.match(lowNickelParadox, /href="\/article\/paradox-nickel-restriction-commensal-casualty"/);
  assert.match(matrix, /id="5-3-nickel-in-food-the-dietary-paradox"[\s\S]{0,3000}href="\/article\/paradox-plant-based-diet-nickel-trap"/);
  assert.equal((dietaryAnalysis.match(/class="paradox-directory-entry"/g) ?? []).length, 9);
  assert.match(dietaryAnalysis, /href="\/article\/paradox-plant-based-diet-nickel-trap"/);
  assert.match(dietaryAnalysis, /href="\/article\/paradox-nickel-restriction-commensal-casualty"/);
});

test("renders generated paradox detail pages with focused evidence and metadata", async () => {
  const [canonicalResponse, contextualResponse] = await Promise.all([
    render("/article/paradox-plant-based-diet-nickel-trap"),
    render("/article/paradox-alzheimers-disease-zinc-supplementation"),
  ]);
  assert.equal(canonicalResponse.status, 200);
  assert.equal(contextualResponse.status, 200);

  const canonical = await canonicalResponse.text();
  const contextual = await contextualResponse.text();
  assert.match(canonical, /<title>The Plant-Based Diet \/ Nickel Trap — WikiBiome<\/title>/);
  assert.match(canonical, /The Evidence/);
  assert.match(canonical, /Why It Matters/);
  assert.match(canonical, /href="\/article\/dietary-metal-paradoxes"/);
  assert.match(contextual, /<title>Zinc supplementation — Alzheimer(?:&#x27;|')s Disease — WikiBiome<\/title>/i);
  assert.match(contextual, /Could counter zinc \(Zn\) depletion/);
  assert.match(contextual, /href="\/article\/alzheimers-disease"/);
});

test("renders the production discovery, provenance, support, and participation surfaces", async () => {
  const [exploreResponse, readinessResponse, historyResponse, supportResponse, supportThankYouResponse, contributeResponse] = await Promise.all([
    render("/explore"),
    render("/readiness"),
    render("/article/akkermansia-muciniphila/history"),
    render("/support"),
    render("/support/thank-you"),
    render("/contribute"),
  ]);
  for (const response of [exploreResponse, readinessResponse, historyResponse, supportResponse, supportThankYouResponse, contributeResponse]) {
    assert.equal(response.status, 200);
  }

  const [explore, readiness, history, support, supportThankYou, contribute] = await Promise.all([
    exploreResponse.text(), readinessResponse.text(), historyResponse.text(), supportResponse.text(), supportThankYouResponse.text(), contributeResponse.text(),
  ]);

  assert.match(explore, /Knowledge graph/);
  assert.match(explore, /Evidence neighborhood/);
  assert.match(explore, /canonical nodes/);
  assert.match(explore, /deduplicated connections/);
  assert.match(explore, /href="\/clusters"/);

  assert.match(readiness, /Every route accounted for/);
  assert.match(readiness, /46 internal maintenance, audit, outreach, and operational records are deliberately excluded/);
  assert.match(readiness, /821[\s\S]{0,110}records[\s\S]{0,110}714[\s\S]{0,80}canonical article routes/);
  assert.match(
    readiness,
    new RegExp(`${Object.keys(articleMediaRegistry).length} of 714 canonical article routes currently have reviewed`),
  );
  assert.match(readiness, /Attach wikibiome\.com and www to the new Site/);
  assert.match(readiness, /former Vercel deployment remains intact as a rollback target but no longer handles the production apex route/);
  assert.match(readiness, /weekly WikiBiome upstream refresh gate now compares paleofoundation\/wikibiome origin\/main/);
  assert.match(readiness, /observation window began August 31, 2026/);
  assert.match(readiness, /Keep the rollback target through at least September 7/);
  assert.match(readiness, /Owner review of privacy and terms copy/);
  assert.match(readiness, /All cited source identifiers resolve through the canonical registry or its 55-entry audited alias map/);
  assert.match(readiness, /All 41 Keystone records have verified DOI and publication metadata/);
  assert.match(readiness, /62e006cf0ced/);

  assert.match(history, /Revision history:[\s\S]*Akkermansia muciniphila/);
  assert.match(history, /official upstream repository/);
  assert.match(history, /Recorded revisions/);
  assert.match(history, /github\.com\/paleofoundation\/wikibiome\/commit\/[a-f0-9]{40}/);
  assert.match(history, /Inspect exact diff/);

  assert.match(support, /Buy the research team a coffee/);
  assert.match(support, /Support cannot buy a citation/);
  assert.match(support, /href="https:\/\/buy\.stripe\.com\/bJefZjaif6IFd8Z4PL6EU03"/);
  assert.match(support, /Payments are securely processed by Stripe for Microbiome Signatures LLC/);
  assert.doesNotMatch(support, /mailto:|Request a secure support link|Start a support conversation|tax-deductible/i);
  assert.match(support, /Source repository/);
  assert.match(supportThankYou, /Thank you for helping WikiBiome keep reading/);
  assert.match(supportThankYou, /href="\/"/);
  assert.match(supportThankYou, /Financial support never purchases citations/);

  assert.match(contribute, /Wikipedia-like participation, with an evidence gate/);
  assert.match(contribute, /Sign in with ChatGPT to contribute/);
  assert.match(contribute, /Scientific corrections and new claims require a DOI, PMID, or source URL/);
});

test("preserves legacy utility routes and publishes the canonical indexing contract", async () => {
  const [privacyResponse, termsResponse, contactResponse, sitemapResponse, imageSitemapResponse, robotsResponse] = await Promise.all([
    render("/privacy"),
    render("/terms"),
    render("/contact"),
    render("/sitemap.xml"),
    render("/image-sitemap.xml"),
    render("/robots.txt"),
  ]);
  for (const response of [privacyResponse, termsResponse, contactResponse, sitemapResponse, imageSitemapResponse, robotsResponse]) {
    assert.equal(response.status, 200);
  }

  const [privacy, terms, contact, sitemap, imageSitemap, robots] = await Promise.all([
    privacyResponse.text(), termsResponse.text(), contactResponse.text(), sitemapResponse.text(), imageSitemapResponse.text(), robotsResponse.text(),
  ]);
  assert.match(privacy, /Signed-in contributions/);
  assert.match(privacy, /privacy@wikibiome\.com/);
  assert.match(privacy, /Search and performance measurement/);
  assert.match(privacy, /does not record a search query, full referrer, cookie, account or session identifier/);
  assert.match(terms, /Educational information/);
  assert.match(terms, /Creative Commons Attribution-ShareAlike 4\.0/);
  assert.match(terms, /Financial support cannot purchase citations/);
  assert.match(contact, /Contact WikiBiome/);
  assert.match(contact, /hello@wikibiome\.com/);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /^application\/xml/);
  assert.match(sitemap, /<loc>https:\/\/www\.wikibiome\.com\/article\/nickel<\/loc>/);
  assert.match(sitemap, /xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/);
  assert.equal((sitemap.match(/<image:image>/g) ?? []).length, Object.keys(articleMediaRegistry).length);
  assert.match(sitemap, /<image:loc>https:\/\/www\.wikibiome\.com\/media\/image\/nickel-technical-specimen-v2\.webp<\/image:loc>/);
  assert.doesNotMatch(sitemap, /<image:loc>[^<]*(?:akkermansia-mucinicola|allisonella|atopobium-parvulum|atopobium-vaginae)[^<]*<\/image:loc>/);
  assert.match(sitemap, /<loc>https:\/\/www\.wikibiome\.com\/source\/ahmed-2025-metals-alzheimers-mechanistic-review<\/loc>/);
  assert.ok((sitemap.match(/<url>/g) ?? []).length > 2_500);
  assert.match(imageSitemapResponse.headers.get("content-type") ?? "", /^application\/xml/);
  assert.equal((imageSitemap.match(/<image:image>/g) ?? []).length, Object.keys(articleMediaRegistry).length);
  assert.equal((imageSitemap.match(/<url>/g) ?? []).length, Object.keys(articleMediaRegistry).length);
  assert.match(imageSitemap, /<loc>https:\/\/www\.wikibiome\.com\/article\/akkermansia-muciniphila<\/loc>/);
  assert.match(imageSitemap, /<image:loc>https:\/\/www\.wikibiome\.com\/media\/image\/akkermansia-muciniphila-morphology-v2\.webp<\/image:loc>/);
  assert.doesNotMatch(imageSitemap, /image:(?:title|caption|license)/);
  assert.doesNotMatch(imageSitemap, /social\.webp|unreviewed|draft/i);
  assert.match(robots, /Disallow: \/api\//);
  assert.match(robots, /Disallow: \/media-files\//);
  assert.match(robots, /Sitemap: https:\/\/www\.wikibiome\.com\/sitemap\.xml/);
  assert.match(robots, /Sitemap: https:\/\/www\.wikibiome\.com\/image-sitemap\.xml/);

  const redirects = [
    ["/matrix", "/clusters"],
    ["/signatures?disease=alzheimers-disease", "/article/alzheimers-disease#signature"],
    ["/tags?tags=nickel,gut", "/search?q=nickel%20gut"],
    ["/submit", "/submit-work"],
    ["/vote", "/contributions"],
  ];
  for (const [path, destination] of redirects) {
    const response = await render(path);
    assert.equal(response.status, 307);
    assert.equal(response.headers.get("location"), destination);
  }

  const stylesheet = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const contrastOverride = stylesheet.lastIndexOf("High-contrast cool register");
  assert.ok(contrastOverride > stylesheet.indexOf(".home-hero"));
  assert.match(stylesheet.slice(contrastOverride), /\.home-hero \{ background:radial-gradient[\s\S]*#fff/);
  assert.match(stylesheet.slice(contrastOverride), /\.article-media-stage \{ padding:0[\s\S]*background:#eef2f5/);
  assert.match(stylesheet, /\.infobox \{ position:static;/, "article infoboxes must remain in flow above connected records");
  assert.doesNotMatch(stylesheet, /\.infobox \{ position:sticky;/, "sticky infoboxes must not cover connected records while scrolling");
  const mobileReadingMode = stylesheet.lastIndexOf("Mobile reading mode");
  assert.ok(mobileReadingMode > contrastOverride);
  assert.match(stylesheet.slice(mobileReadingMode), /\.wiki-header \{ height:58px;min-height:58px/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.article-page,\.disease-page \{ padding:0 0 50px;background:#fff/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.article-system-art,\.disease-system-art \{ display:none/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.article-body p,\.continuous-prose-section \.continuous-prose \{[^}]*font-family:Arial[^}]*font-size:18px[^}]*line-height:1\.64/);
  assert.match(stylesheet, /\.wiki-section > p,\.lead-copy > p \{ max-width:72ch/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.wiki-section > p,\.lead-copy > p,\.continuous-prose-section \.continuous-prose \{ max-width:none;margin:0 0 1\.2em/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.lead-copy p:first-child::first-letter \{ float:none/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.reference-list p \{ font-family:Arial[^}]*font-size:16px/);
  assert.match(stylesheet.slice(mobileReadingMode), /\.citation-preview \{ display:none!important/);
});

test("publishes self-canonical metadata, social previews, and representative Schema.org graphs", async () => {
  const routes = [
    ["/article/akkermansia-muciniphila", "data-article-media-schema", ["WebPage", "Article", "ImageObject"]],
    ["/source/amadi-2022-dietary-interventions-asd-systematic-review", "data-source-schema", ["WebPage", "ScholarlyArticle"]],
    ["/category/microbe", "data-category-schema", ["CollectionPage"]],
    ["/explore", "data-research-tool-schema", ["WebApplication"]],
  ];

  for (const [path, marker, expectedTypes] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    const canonical = `https://www.wikibiome.com${path}`;
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical.replaceAll("/", "\\/")}"`));
    assert.match(html, new RegExp(`property="og:url" content="${canonical.replaceAll("/", "\\/")}"`));
    assert.match(html, /property="og:image" content="https:\/\/www\.wikibiome\.com\//);
    assert.match(html, /name="twitter:image" content="https:\/\/www\.wikibiome\.com\//);
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/);

    const schema = structuredData(html, marker);
    const nodes = schema["@graph"] ?? [schema];
    const types = nodes.flatMap((node) => Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]);
    for (const type of expectedTypes) assert.ok(types.includes(type), `${path} should publish ${type}`);
  }

  const articleResponse = await render("/article/akkermansia-muciniphila");
  const articleHtml = await articleResponse.text();
  const articleSchema = structuredData(articleHtml, "data-article-media-schema");
  const image = articleSchema["@graph"].find((node) => node["@type"] === "ImageObject");
  assert.equal(image.contentUrl, "https://www.wikibiome.com/media/image/akkermansia-muciniphila-morphology-v2.webp");
  assert.match(image.name, /Akkermansia muciniphila morphology/);
  assert.match(image.caption, /Representative morphology/);
  assert.equal(image.license, articleMediaPolicy.license.url);
  assert.equal(image.creditText, "WikiBiome / Microbiome Medicine");
  assert.equal(image.representativeOfPage, true);

  const signatureResponse = await render("/category/signature");
  const signatureHtml = await signatureResponse.text();
  const signatureSchema = structuredData(signatureHtml, "data-category-schema");
  const signatureUrls = signatureSchema.mainEntity.itemListElement.map((item) => item.url);
  assert.ok(signatureUrls.includes("https://www.wikibiome.com/article/alzheimers-disease"));
  assert.ok(!signatureUrls.includes("https://www.wikibiome.com/article/alzheimers-disease-signature"), "collection schema must resolve known signature aliases to canonical articles");

  const noMediaResponse = await render("/article/cadmium");
  const noMediaHtml = await noMediaResponse.text();
  const noMediaSchema = structuredData(noMediaHtml, "data-article-schema");
  assert.ok(noMediaSchema["@graph"].some((node) => node["@type"] === "Article"));
  assert.ok(!noMediaSchema["@graph"].some((node) => node["@type"] === "ImageObject"));

  const [searchResponse, invalidCategoryResponse] = await Promise.all([
    render("/search?q=nickel"),
    render("/category/not-a-public-domain"),
  ]);
  const searchHtml = await searchResponse.text();
  assert.match(searchHtml, /<link rel="canonical" href="https:\/\/www\.wikibiome\.com\/search"/);
  assert.match(searchHtml, /<meta name="robots" content="noindex, follow"/);
  assert.equal(invalidCategoryResponse.status, 404);

  const sourceAlias = await render("/source/abraham-2005-drug-therapy-graves");
  assert.equal(sourceAlias.status, 308);
  assert.equal(sourceAlias.headers.get("location"), "/source/azizi-2017-systematic-review-drug-therapy-graves");
});

test("renders the claim, contribute, collaborate researcher network", async () => {
  const [networkResponse, standardResponse, submitResponse, institutionsResponse, sourceResponse, dashboardResponse] = await Promise.all([
    render("/researchers"),
    render("/research-standard"),
    render("/submit-work"),
    render("/institutions"),
    render("/source/ahmed-2025-metals-alzheimers-mechanistic-review"),
    render("/researcher/dashboard"),
  ]);
  for (const response of [networkResponse, standardResponse, submitResponse, institutionsResponse, sourceResponse, dashboardResponse]) assert.equal(response.status, 200);

  const [network, standard, submit, institutions, source, dashboard] = await Promise.all([
    networkResponse.text(), standardResponse.text(), submitResponse.text(), institutionsResponse.text(), sourceResponse.text(), dashboardResponse.text(),
  ]);
  assert.match(network, /Claim → Contribute → Collaborate/);
  assert.match(network, /1,891[\s\S]{0,30}evidence records/);
  assert.match(network, /Identity earns attribution—not control/);
  assert.match(network, /href="\/api\/auth\/orcid\/start\?returnTo=\/researcher\/dashboard"/);

  assert.match(standard, /WikiBiome-Ready Research/);
  assert.match(standard, /Metallomics module/);
  assert.match(standard, /whether metal speciation was measured/);
  assert.match(standard, /At least three of five graph-based criteria/);
  assert.match(standard, /Completing it does not guarantee citation/);
  assert.match(standard, /href="\/wikibiome-ready-research-template\.md"/);

  assert.match(submit, /Add evidence without bypassing editorial review/);
  assert.match(submit, /Continue with ORCID/);
  assert.match(submit, /Acceptance creates an editorial change packet/);
  assert.match(institutions, /ROR-identified institutions|Institution network/);
  assert.match(institutions, /without paid placement, citation guarantees, or competitive rankings/);

  assert.match(source, /Are you an author of this work\?/);
  assert.match(source, /href="\/source\/ahmed-2025-metals-alzheimers-mechanistic-review\/claim"/);
  assert.match(source, /Researcher discussion/);
  assert.match(source, /Researchers participate with ORCID/);
  assert.match(dashboard, /Connect your ORCID iD/);
  assert.match(dashboard, /ORCID establishes researcher identity/);
});

test("keeps internal operational records out of the public encyclopedia", async () => {
  const [directoryResponse, searchResponse, sitemapResponse, hiddenResponse, hiddenOutreachResponse] = await Promise.all([
    render("/category/analysis"),
    render("/search?q=lint"),
    render("/sitemap.xml"),
    render("/article/lint-report-2026-04-19"),
    render("/article/landmark-outreach-email"),
  ]);
  assert.equal(directoryResponse.status, 200);
  assert.equal(searchResponse.status, 200);
  assert.equal(sitemapResponse.status, 200);
  assert.equal(hiddenResponse.status, 404);
  assert.equal(hiddenOutreachResponse.status, 404);

  const [directory, search, sitemap] = await Promise.all([
    directoryResponse.text(), searchResponse.text(), sitemapResponse.text(),
  ]);
  assert.match(directory, /Dietary Metal Exposure by Life Stage/);
  assert.match(directory, /Dietary Metal Paradoxes/);
  assert.match(directory, /Metal-Disease Matrix/);
  assert.match(directory, /Shared Pathobionts Across Disease Signatures/);
  assert.doesNotMatch(directory, /Lint Report|Health Check|Batch Preview|Adversarial Audit/);
  assert.doesNotMatch(search, /href="\/article\/(?:lint|health-check|gaps-and-improvements|adversarial-audit)[^"]*"/);
  assert.doesNotMatch(sitemap, /article\/(?:lint|health-check|gaps-and-improvements|adversarial-audit)/);

  const content = JSON.parse(readFileSync(new URL("../data/content.generated.json", import.meta.url), "utf8"));
  assert.equal(content._stats.analyses, 4);
  assert.equal(content._stats.totalPages, 821);
  assert.ok(!content.pages.some((page) => publicContentExclusionReason(page)));
  assert.equal(publicContentExclusionReason({
    id: "weekly-content-maintenance-2026-06-01",
    title: "Automated scheduled task — weekly content maintenance",
    category: "analysis",
    sourceCount: 6,
  }), "internal-operational-analysis");
  assert.equal(publicContentExclusionReason({
    id: "outreach-email-first-touch",
    title: "Author outreach template",
    category: "other",
  }), "internal-operational-template");
  assert.equal(publicContentExclusionReason({
    id: "cross-condition-microbial-metabolites",
    title: "Shared microbial metabolites across conditions",
    category: "analysis",
    sourceCount: 3,
  }), null);
  assert.equal(publicContentExclusionReason({
    id: "microbiome-health-check-biomarkers",
    title: "Microbiome health-check biomarkers: a cross-study synthesis",
    category: "analysis",
    sourceCount: 8,
  }), null);
});

test("generates the restored research tools and current About page from canonical data", async () => {
  const [graphResponse, clustersResponse, compareResponse, keystoneResponse, aboutResponse] = await Promise.all([
    render("/explore?focus=nickel"),
    render("/clusters?condition=alzheimers-disease"),
    render("/compare?a=alzheimers-disease&b=parkinsons-disease"),
    render("/keystone"),
    render("/about"),
  ]);
  for (const response of [graphResponse, clustersResponse, compareResponse, keystoneResponse, aboutResponse]) {
    assert.equal(response.status, 200);
  }

  const [graph, clusters, compare, keystone, about] = await Promise.all([
    graphResponse.text(), clustersResponse.text(), compareResponse.text(), keystoneResponse.text(), aboutResponse.text(),
  ]);

  assert.match(graph, /<title>Explore the knowledge system — WikiBiome<\/title>/);
  assert.match(graph, /Knowledge graph/);
  assert.match(graph, /Nickel/);
  assert.match(graph, /Relationship graph centered on Nickel/);
  assert.match(graph, /Legacy signature slugs are resolved to their canonical disease pages/);
  assert.match(graph, /href="\/article\//);

  assert.match(clusters, /<title>Condition clusters — WikiBiome<\/title>/);
  assert.match(clusters, /41[\s\S]{0,80}canonical signatures/);
  assert.match(
    clusters,
    /Alzheimer(?:&#x27;|')s Disease[\s\S]{0,80}neighborhood/,
  );
  assert.match(clusters, /opposite-direction signals do not count as a match/);
  assert.match(clusters, /href="\/compare\?a=alzheimers-disease&amp;b=/);
  assert.doesNotMatch(clusters, /value="pancreatic-cancer-signature"/);

  assert.match(compare, /<title>Compare condition signatures — WikiBiome<\/title>/);
  assert.match(compare, /weighted overlap/);
  assert.match(compare, /shared signals/);
  assert.match(compare, /Metals elevated or accumulated/);
  assert.match(compare, /Taxa depleted/);
  assert.match(compare, /Shared signals do not establish shared causes, diagnoses, or treatments/);
  assert.match(compare, /href="\/article\/alzheimers-disease"/);
  assert.match(compare, /href="\/article\/parkinsons-disease"/);

  assert.match(keystone, /<title>Keystone studies — WikiBiome<\/title>/);
  assert.match(keystone, /41[\s\S]{0,70}designated studies/);
  assert.match(keystone, /At least three of five criteria/);
  assert.match(keystone, /Cross-domain bridge/);
  assert.match(keystone, /href="\/source\/ahmed-2025-metals-alzheimers-mechanistic-review"/);
  assert.match(keystone, /41[\s\S]{0,70}verified DOI records/);
  assert.doesNotMatch(keystone, /DOI review needed/);
  assert.match(keystone, /All [\s\S]{0,40}41[\s\S]{0,40} currently designated studies have verified DOI and publication identity metadata/);

  assert.match(about, /<title>About WikiBiome<\/title>/);
  assert.match(about, /karen-pendergrass\.avif/);
  assert.match(about, /ORCID 0000-0002-2348-7259/);
  assert.match(about, /project of[\s\S]{0,120}Microbiome Medicine/);
  assert.match(about, /Microbiome Signatures LLC/);
  assert.match(about, /Support cannot purchase influence/);
  assert.doesNotMatch(about, /project of the Paleo Foundation/i);
  const portrait = readFileSync(new URL("../public/karen-pendergrass.avif", import.meta.url));
  assert.ok(
    portrait.byteLength > 40_000,
    "About portrait should retain the supplied full-resolution AVIF asset",
  );
});

test("applies global evidence and interaction rules across article templates", async () => {
  const [microbeResponse, stopResponse, interventionResponse, analysisResponse, suggestResponse] = await Promise.all([
    render("/article/akkermansia-muciniphila"),
    render("/article/stop-iron-supplementation-alzheimers"),
    render("/article/low-nickel-diet"),
    render("/article/metal-disease-matrix"),
    render("/article/nickel/suggest"),
  ]);

  for (const response of [microbeResponse, stopResponse, interventionResponse, analysisResponse]) {
    assert.equal(response.status, 200);
  }
  assert.equal(suggestResponse.status, 307);
  assert.equal(suggestResponse.headers.get("location"), "/signin-with-chatgpt?return_to=%2Farticle%2Fnickel%2Fsuggest");

  const [microbe, stop, intervention, analysis] = await Promise.all([
    microbeResponse.text(), stopResponse.text(), interventionResponse.text(), analysisResponse.text(),
  ]);
  assert.match(microbe, /class="citation-preview"/);
  assert.match(microbe, /Claim provenance map/);
  assert.match(microbe, /Share &amp; cite/);
  assert.match(microbe, /linkedin\.com\/sharing\/share-offsite/);
  assert.match(microbe, /href="\/article\/akkermansia-muciniphila\/history"/);
  assert.match(microbe, /href="\/article\/akkermansia-muciniphila\/suggest"/);
  assert.match(microbe, /class="wiki-footer"/);
  assert.match(stop, /template-stop/);
  assert.match(stop, /Clinical caution record/);
  assert.match(intervention, /template-intervention/);
  assert.match(intervention, /Intervention evidence/);
  assert.match(analysis, /template-analysis/);
  assert.match(analysis, /Cross-record synthesis/);
});

test("publishes source-bound editorial limitations on every affected canonical template", async () => {
  const [limitedResponse, structureResponse, referenceResponse, diseaseResponse, readyResponse, readinessResponse] = await Promise.all([
    render("/article/aip-diet-hashimotos"),
    render("/article/microbiome-diversity-metrics"),
    render("/article/glossary"),
    render("/article/barretts-esophagus"),
    render("/article/nickel"),
    render("/readiness?status=documented"),
  ]);

  for (const response of [limitedResponse, structureResponse, referenceResponse, diseaseResponse, readyResponse, readinessResponse]) {
    assert.equal(response.status, 200);
  }

  const [limited, structure, reference, disease, ready, readiness] = await Promise.all([
    limitedResponse.text(), structureResponse.text(), referenceResponse.text(), diseaseResponse.text(), readyResponse.text(), readinessResponse.text(),
  ]);
  assert.match(limited, /Editorial evidence status/);
  assert.match(limited, /Evidence-limited source record/);
  assert.match(limited, /no resolvable references/);
  assert.match(structure, /Source structure awaiting an upstream lead/);
  assert.match(structure, /No lead was synthesized or inferred/);
  assert.match(reference, /Reference index/);
  assert.match(reference, /navigation\/reference indexes rather than claim-bearing articles/);
  assert.match(disease, /Evidence-limited source record/);
  assert.match(disease, /type-specific declared-source thresholds/);
  assert.doesNotMatch(ready, /Editorial evidence status/);
  assert.match(readiness, /Documented limitation/);
  assert.doesNotMatch(readiness, /ledger-state review/);
  assert.doesNotMatch(readiness, /ledger-state blocked/);
});

test("renders invalid upstream source metadata as absent rather than as a year or DOI", async () => {
  const response = await render("/source/note-evaluation-risk-ptes-italy-fish-products");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<dt>Year<\/dt><dd>Not recorded<\/dd>/);
  assert.match(html, /<dt>DOI<\/dt><dd>Not yet verified<\/dd>/);
  assert.doesNotMatch(html, /href="https:\/\/doi\.org\/not/);
  assert.doesNotMatch(html, /<dt>Year<\/dt><dd>Unknown<\/dd>/);
});

test("binds generated content to the fetched upstream commit", () => {
  const content = readFileSync(new URL("../data/content.generated.json", import.meta.url));
  const generatedContent = JSON.parse(content.toString("utf8"));
  const manifest = JSON.parse(readFileSync(new URL("../data/content-manifest.generated.json", import.meta.url), "utf8"));
  const digest = createHash("sha256").update(content).digest("hex");

  assert.equal(manifest.source.repository, "https://github.com/paleofoundation/wikibiome.git");
  assert.equal(manifest.source.commit, "62e006cf0ced1dce706a6438f6461602229a9f26");
  assert.equal(manifest.content.sha256, digest);
  assert.equal(manifest.content.pages, 821);
  assert.equal(manifest.content.sources, 1891);
  assert.equal(manifest.sourceMetadataPolicy.version, 1);
  assert.equal(manifest.sourceMetadataPolicy.normalizedYearCount, 0);
  assert.equal(manifest.sourceMetadataPolicy.omittedYearCount, 3);
  assert.equal(manifest.sourceMetadataPolicy.normalizedDoiCount, 9);
  assert.equal(manifest.sourceMetadataPolicy.omittedDoiCount, 217);
  assert.ok(manifest.sourceMetadataPolicy.omittedYears.some((entry) => entry.id === "NOTE-evaluation-risk-ptes-italy-fish-products" && entry.value === "Unknown"));
  assert.ok(manifest.sourceMetadataPolicy.omittedDois.some((entry) => entry.id === "NOTE-evaluation-risk-ptes-italy-fish-products" && entry.value === "not yet verified"));
  assert.equal(generatedContent.sourceLookup["NOTE-evaluation-risk-ptes-italy-fish-products"].year, undefined);
  assert.equal(generatedContent.sourceLookup["NOTE-evaluation-risk-ptes-italy-fish-products"].doi, undefined);
  assert.equal(manifest.publicContentPolicy.version, 3);
  assert.equal(manifest.publicContentPolicy.excludedCount, 46);
  assert.ok(manifest.publicContentPolicy.excludedPages.some((page) => page.id === "lint-report-2026-04-19"));
  assert.equal(manifest.editorialNormalization.leadPromotionCount, 347);
  assert.ok(manifest.editorialNormalization.leadPromotionSamples.some((page) => page.id === "actinobacteria"));
  assert.equal(manifest.editorialStatusPolicy.version, 1);
  assert.equal(manifest.editorialStatusPolicy.sourceCommit, manifest.source.commit);
  assert.equal(manifest.editorialStatusPolicy.registeredCount, 113);
  assert.equal(manifest.editorialStatusPolicy.appliedRecordCount, 122);
  const statusRegistry = readFileSync(new URL("../data/editorial-statuses.json", import.meta.url));
  assert.equal(manifest.editorialStatusPolicy.registrySha256, createHash("sha256").update(statusRegistry).digest("hex"));
  assert.ok(manifest.audit.recoveredInlineReferences >= 348);
  assert.equal(manifest.audit.missingSourceMetadataIds.length, 0);
  assert.equal(manifest.audit.malformedDois.length, 0);
  assert.equal(manifest.audit.invalidSourceYears.length, 0);
  assert.equal(manifest.audit.resolvedSourceAliasIds.length, 55);
});
