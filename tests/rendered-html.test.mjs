import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import sharp from "sharp";
import { articleMediaFileNames, articleMediaPolicy, articleMediaRegistry } from "../lib/article-media-registry.mjs";
import { ARTICLE_ALIAS_SUFFIXES, articleAliasRedirects } from "../lib/article-alias-redirects.mjs";
import {
  AUDITED_GONE_ARTICLE_PATHS,
  NEVER_PUBLIC_ARTICLE_PATHS,
  PUBLIC_ORIGIN,
  ROUTING_ROBOTS_DISALLOWS,
} from "../lib/routing-policy.mjs";
import { classifySearchReferrer } from "../lib/search-observability.mjs";
import { getArticleAliases, getArticleIdentityRegistry, validateArticleIdentityPolicy } from "../scripts/article-identity-policy.mjs";
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

function htmlTitle(html) {
  return html.match(/<title>(.*?)<\/title>/i)?.[1];
}

function htmlCanonical(html) {
  return html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
}

function htmlRobotsMeta(html) {
  return [...html.matchAll(/<meta name="robots" content="([^"]+)"/gi)].map((match) => match[1]);
}

function assertBoundaryMetadata(html, { title }) {
  assert.equal(htmlTitle(html), title);
  assert.equal(htmlCanonical(html), `${PUBLIC_ORIGIN}/404`);
  assert.deepEqual(htmlRobotsMeta(html), ["noindex, follow"]);
  assert.doesNotMatch(html, /<link rel="canonical" href="https:\/\/www\.wikibiome\.com"\/?>/);
  assert.doesNotMatch(html, /<meta name="robots" content="index, follow"/);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

test("rejects retired, obsolete, duplicate, or unsupported taxonomic identities during public generation", () => {
  const generated = JSON.parse(readFileSync(new URL("../data/content.generated.json", import.meta.url), "utf8"));
  const aliases = getArticleAliases();
  const audit = validateArticleIdentityPolicy(generated);

  assert.equal(audit.aliasCount, 13);
  assert.equal(audit.canonicalTaxonCount, 13);
  for (const [alias, target] of Object.entries(aliases)) {
    assert.equal(generated.pages.some((page) => page.id === alias), false, `${alias} must not remain indexable`);
    assert.equal(generated.pages.filter((page) => page.id === target).length, 1, `${target} must be unique`);
  }

  const retiredReentry = structuredClone(generated);
  retiredReentry.pages.push({ ...retiredReentry.pages.find((page) => page.id === "akkermansia-muciniphila"), id: "akkermansia-mucinicola" });
  assert.throws(() => validateArticleIdentityPolicy(retiredReentry), /re-entered public generation/);

  const obsoleteTitle = structuredClone(generated);
  obsoleteTitle.pages.find((page) => page.id === "lancefieldella-parvula").title = "Atopobium parvulum";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteTitle), /has title|Obsolete taxon titles/);

  const duplicateAliasTarget = structuredClone(generated);
  duplicateAliasTarget.pages.push({ ...duplicateAliasTarget.pages.find((page) => page.id === "fannyhessea-vaginae") });
  assert.throws(() => validateArticleIdentityPolicy(duplicateAliasTarget), /exactly one canonical page|exactly one public record/);

  const identityRegistry = getArticleIdentityRegistry();
  identityRegistry.aliases["lachnospira-eligens"] = "eubacterium-eligens";
  try {
    assert.throws(() => validateArticleIdentityPolicy(generated), /targets another alias|alias chains are not allowed/);
  } finally {
    delete identityRegistry.aliases["lachnospira-eligens"];
  }

  const unsupportedIdentity = structuredClone(generated);
  unsupportedIdentity.pages.find((page) => page.id === "dialister-histaminiformans").overview += " Allisonella hiatal";
  assert.throws(() => validateArticleIdentityPolicy(unsupportedIdentity), /Unsupported retired identities/);

  const unsupportedSourceLabelIdentity = structuredClone(generated);
  unsupportedSourceLabelIdentity.pages.find((page) => page.id === "barnesiella").overview += " Barnesella is a genus of bacteria.";
  assert.throws(() => validateArticleIdentityPolicy(unsupportedSourceLabelIdentity), /Unsupported retired identities/);

  const obsoleteBasionymClaim = structuredClone(generated);
  obsoleteBasionymClaim.pages.find((page) => page.id === "bifidobacterium-longum-subsp-infantis").overview += " Bifidobacterium infantis is the current species name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteBasionymClaim), /Unsupported retired identities/);

  const obsoleteCandidozymaClaim = structuredClone(generated);
  obsoleteCandidozymaClaim.pages.find((page) => page.id === "candidozyma-auris").overview += " Candida auris is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteCandidozymaClaim), /Unsupported retired identities/);

  const obsoleteNakaseomycesClaim = structuredClone(generated);
  obsoleteNakaseomycesClaim.pages.find((page) => page.id === "nakaseomyces-glabratus").overview += " Candida glabrata is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteNakaseomycesClaim), /Unsupported retired identities/);

  const obsoleteEubacterialesClaim = structuredClone(generated);
  obsoleteEubacterialesClaim.pages.find((page) => page.id === "eubacteriales").overview += " Clostridiales is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteEubacterialesClaim), /Unsupported retired identities/);

  const obsoleteClostridioidesClaim = structuredClone(generated);
  obsoleteClostridioidesClaim.pages.find((page) => page.id === "clostridioides-difficile").overview += " Clostridium difficile is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteClostridioidesClaim), /Unsupported retired identities/);

  const obsoleteCladosporiumClaim = structuredClone(generated);
  obsoleteCladosporiumClaim.pages.find((page) => page.id === "cladosporium").overview += " Davidiella is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteCladosporiumClaim), /Unsupported retired identities/);

  const obsoleteLachnospiraClaim = structuredClone(generated);
  obsoleteLachnospiraClaim.pages.find((page) => page.id === "lachnospira-eligens").overview += " Eubacterium eligens is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteLachnospiraClaim), /Unsupported retired identities/);

  const obsoleteAgathobacterClaim = structuredClone(generated);
  obsoleteAgathobacterClaim.pages.find((page) => page.id === "agathobacter-rectalis").overview += " Eubacterium rectale is the current name.";
  assert.throws(() => validateArticleIdentityPolicy(obsoleteAgathobacterClaim), /Unsupported retired identities/);
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
  assert.match(html, /1,939/);
  assert.match(html, /817/);
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
  assert.match(directory, /229/);
  assert.match(directory, /records in this view/);
  assert.match(directory, /href="\/article\/akkermansia-muciniphila"/);
  assert.match(directory, /class="directory-record-media"[\s\S]*src="\/media\/image\/akkermansia-muciniphila-morphology-v2\.webp"/);
  assert.match(directory, /wikibiome-logo\.png/);
});

test("permanently redirects retired taxon URLs to one current-name canonical record", async () => {
  const aliases = getArticleAliases();
  for (const [legacyId, canonicalId] of Object.entries(aliases)) {
    for (const suffix of ["", "/history", "/suggest"]) {
      const response = await render(`/article/${legacyId}${suffix}`);
      assert.equal(response.status, 308, `${legacyId}${suffix} must be a permanent redirect`);
      assert.equal(response.headers.get("location"), `/article/${canonicalId}${suffix}`);
    }
  }

  const currentIds = ["akkermansia-muciniphila", "dialister-histaminiformans", "lancefieldella-parvula", "fannyhessea-vaginae", "barnesiella", "bifidobacterium-longum-subsp-infantis", "candidozyma-auris", "nakaseomyces-glabratus", "eubacteriales", "clostridioides-difficile", "cladosporium", "lachnospira-eligens", "agathobacter-rectalis"];
  const currentResponses = await Promise.all(currentIds.map((id) => render(`/article/${id}`)));
  currentResponses.forEach((response) => assert.equal(response.status, 200));
  const currentPages = await Promise.all(currentResponses.map((response) => response.text()));
  assert.match(currentPages[0], /<title>Akkermansia muciniphila — WikiBiome<\/title>/i);
  assert.match(currentPages[1], /<title>Dialister histaminiformans — WikiBiome<\/title>/i);
  assert.match(currentPages[2], /<title>Lancefieldella parvula — WikiBiome<\/title>/i);
  assert.match(currentPages[3], /<title>Fannyhessea vaginae — WikiBiome<\/title>/i);
  assert.match(currentPages[4], /<title>Barnesiella — WikiBiome<\/title>/i);
  assert.match(currentPages[4], /NCBITaxon:397864/);
  assert.match(currentPages[4], /source-transcription or source-label alias/);
  assert.match(currentPages[4], /does not by itself prove/);
  assert.doesNotMatch(currentPages[4], /Barnesella is a genus of/);
  assert.match(currentPages[4], /class="article-media-figure"/);
  assert.match(currentPages[4], /barnesiella-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry.barnesella, undefined);
  assert.ok(articleMediaRegistry.barnesiella);
  assert.match(currentPages[5], /<title>Bifidobacterium longum subsp\. infantis — WikiBiome<\/title>/i);
  assert.match(currentPages[5], /NCBITaxon:1682/);
  assert.match(currentPages[5], /basionym, not a separate current species/);
  assert.match(currentPages[5], /Strain 35624 must not be treated as evidence for this subspecies/);
  assert.match(currentPages[5], /do not transfer to NCBITaxon:1682/);
  assert.doesNotMatch(currentPages[5], /Bifidobacterium infantis is the current/);
  assert.match(currentPages[5], /class="article-media-figure"/);
  assert.match(currentPages[5], /bifidobacterium-longum-subsp-infantis-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry["bifidobacterium-infantis"], undefined);
  assert.ok(articleMediaRegistry["bifidobacterium-longum-subsp-infantis"]);
  assert.match(currentPages[6], /<title>Candidozyma auris — WikiBiome<\/title>/i);
  assert.match(currentPages[6], /NCBITaxon:498019/);
  assert.match(currentPages[6], /MycoBank MB 848169/);
  assert.match(currentPages[6], /Candida auris[\s\S]{0,120}basionym, not a separate species/);
  assert.match(currentPages[6], /historical name[\s\S]{0,60}Candida auris/);
  assert.doesNotMatch(currentPages[6], /Candida auris is the current name/);
  assert.match(currentPages[6], /class="article-media-figure"/);
  assert.match(currentPages[6], /candidozyma-auris-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry["candida-auris"], undefined);
  assert.ok(articleMediaRegistry["candidozyma-auris"]);
  assert.match(currentPages[7], /<title>Nakaseomyces glabratus — WikiBiome<\/title>/i);
  assert.match(currentPages[7], /NCBITaxon:5478/);
  assert.match(currentPages[7], /MycoBank MB 843854/);
  assert.match(currentPages[7], /Candida glabrata[\s\S]{0,80}homotypic synonym and former combination/);
  assert.match(currentPages[7], /Cryptococcus glabratus[\s\S]{0,80}basionym/);
  assert.doesNotMatch(currentPages[7], /Candida glabrata is the current name/);
  assert.match(currentPages[7], /class="article-media-figure"/);
  assert.match(currentPages[7], /nakaseomyces-glabratus-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry["candida-glabrata"], undefined);
  assert.ok(articleMediaRegistry["nakaseomyces-glabratus"]);
  assert.match(currentPages[8], /<title>Eubacteriales — WikiBiome<\/title>/i);
  assert.match(currentPages[8], /NCBITaxon:186802/);
  assert.match(currentPages[8], /Clostridiales[\s\S]{0,140}validly published heterotypic synonym/);
  assert.match(currentPages[8], /preserves those source labels/);
  assert.match(currentPages[8], /"@id":"https:\/\/www\.wikibiome\.com\/article\/eubacteriales#article"/);
  assert.match(currentPages[8], /"headline":"Eubacteriales"/);
  assert.match(currentPages[8], /"description":"Eubacteriales Buchanan 1917[^"]*NCBITaxon:186802/);
  assert.doesNotMatch(currentPages[8], /Clostridiales is the current name/);
  assert.match(currentPages[8], /class="article-media-figure"/);
  assert.match(currentPages[8], /eubacteriales-microbial-community-v1\.webp/);
  assert.equal(articleMediaRegistry.clostridiales, undefined);
  assert.ok(articleMediaRegistry.eubacteriales);
  assert.match(currentPages[9], /<title>Clostridioides difficile — WikiBiome<\/title>/i);
  assert.match(currentPages[9], /NCBITaxon:1496/);
  assert.match(currentPages[9], /Clostridium difficile[\s\S]{0,140}validly published homotypic synonym/);
  assert.match(currentPages[9], /preserves that wording when it is the name printed by a source/);
  assert.match(currentPages[9], /href="\/source\/lawson-2016-clostridioides-difficile-reclassification"/);
  assert.match(currentPages[9], /"@id":"https:\/\/www\.wikibiome\.com\/article\/clostridioides-difficile#article"/);
  assert.match(currentPages[9], /"headline":"Clostridioides difficile"/);
  assert.match(currentPages[9], /"description":"Clostridioides difficile is the current NCBI name for NCBITaxon:1496/);
  assert.doesNotMatch(currentPages[9], /Clostridium difficile is the current name/);
  assert.match(currentPages[9], /class="article-media-figure"/);
  assert.match(currentPages[9], /clostridioides-difficile-morphology-v1\.webp/);
  assert.match(currentPages[9], /Spores do not permit visual diagnosis/);
  assert.equal(articleMediaRegistry["clostridium-difficile"], undefined);
  assert.ok(articleMediaRegistry["clostridioides-difficile"]);
  assert.match(currentPages[10], /<title>Cladosporium — WikiBiome<\/title>/i);
  assert.match(currentPages[10], /NCBITaxon:5498/);
  assert.match(currentPages[10], /Davidiella[\s\S]{0,160}historical synonym/);
  assert.match(currentPages[10], /Unclassified Davidiella/);
  assert.match(currentPages[10], /should not be read as a resolved species identification/);
  assert.doesNotMatch(currentPages[10], /Davidiella is the current name/);
  assert.match(currentPages[10], /class="article-media-figure"/);
  assert.match(currentPages[10], /cladosporium-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry.davidiella, undefined);
  assert.ok(articleMediaRegistry.cladosporium);
  assert.match(currentPages[11], /<title>Lachnospira eligens — WikiBiome<\/title>/i);
  assert.match(currentPages[11], /NCBITaxon:39485/);
  assert.match(currentPages[11], /Eubacterium eligens[\s\S]{0,100}basionym/);
  assert.match(currentPages[11], /group label is broader than a verified species assignment/);
  assert.doesNotMatch(currentPages[11], /Eubacterium eligens is the current name/);
  assert.match(currentPages[11], /class="article-media-figure"/);
  assert.match(currentPages[11], /lachnospira-eligens-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry["eubacterium-eligens"], undefined);
  assert.ok(articleMediaRegistry["lachnospira-eligens"]);
  assert.match(currentPages[12], /<title>Agathobacter rectalis — WikiBiome<\/title>/i);
  assert.match(currentPages[12], /NCBITaxon:39491/);
  assert.match(currentPages[12], /Eubacterium rectale[\s\S]{0,100}homotypic synonym/);
  assert.match(currentPages[12], /not claim unanimous phylogenetic agreement/);
  assert.doesNotMatch(currentPages[12], /Eubacterium rectale is the current name/);
  assert.match(currentPages[12], /class="article-media-figure"/);
  assert.match(currentPages[12], /agathobacter-rectalis-morphology-v1\.webp/);
  assert.equal(articleMediaRegistry["eubacterium-rectale"], undefined);
  assert.ok(articleMediaRegistry["agathobacter-rectalis"]);

  const mergedHistoryResponse = await render("/article/clostridioides-difficile/history");
  assert.equal(mergedHistoryResponse.status, 200);
  const mergedHistory = await mergedHistoryResponse.text();
  assert.match(mergedHistory, /Tracked source files<\/span><strong>2<\/strong>/);
  assert.match(mergedHistory, /wiki\/entities\/clostridium-difficile\.md/);

  const cladosporiumHistoryResponse = await render("/article/cladosporium/history");
  assert.equal(cladosporiumHistoryResponse.status, 200);
  const cladosporiumHistory = await cladosporiumHistoryResponse.text();
  assert.match(cladosporiumHistory, /Tracked source files<\/span><strong>2<\/strong>/);
  assert.match(cladosporiumHistory, /wiki\/entities\/davidiella\.md/);

  for (const [id, legacyPath] of [["lachnospira-eligens", "eubacterium-eligens"], ["agathobacter-rectalis", "eubacterium-rectale"]]) {
    const historyResponse = await render(`/article/${id}/history`);
    assert.equal(historyResponse.status, 200);
    const history = await historyResponse.text();
    assert.match(history, /Tracked source files<\/span><strong>2<\/strong>/);
    assert.match(history, new RegExp(`wiki\\/entities\\/${legacyPath}\\.md`));
  }

  const sitemap = await (await render("/sitemap.xml")).text();
  for (const [legacyId, canonicalId] of Object.entries(aliases)) {
    assert.doesNotMatch(sitemap, new RegExp(`<loc>https://www\\.wikibiome\\.com/article/${legacyId}</loc>`));
    assert.match(sitemap, new RegExp(`<loc>https://www\\.wikibiome\\.com/article/${canonicalId}</loc>`));
  }
});

test("exports build-level redirects for retired article aliases", () => {
  const aliases = getArticleAliases();
  const expectedCount = Object.keys(aliases).length * ARTICLE_ALIAS_SUFFIXES.length;
  assert.equal(articleAliasRedirects.length, expectedCount);

  for (const [legacyId, canonicalId] of Object.entries(aliases)) {
    for (const suffix of ARTICLE_ALIAS_SUFFIXES) {
      assert.deepEqual(
        articleAliasRedirects.find((rule) => rule.source === `/article/${legacyId}${suffix}`),
        {
          source: `/article/${legacyId}${suffix}`,
          destination: `/article/${canonicalId}${suffix}`,
          permanent: true,
        },
      );
    }
  }
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
  const batch012 = batches.find((batch) => batch.batchId === "microorganisms-012");
  assert.equal(batch012?.status, "reviewed");
  assert.deepEqual(
    batch012?.assets.filter((asset) => asset.assetType && asset.revision).map((asset) => asset.pageId),
    ["clostridioides-difficile", "clostridium", "clostridium-butyricum", "clostridium-perfringens", "clostridium-symbiosum"],
  );
  const difficileV2 = batch012?.assets.find((asset) => asset.pageId === "clostridioides-difficile" && asset.assetType);
  assert.equal(difficileV2?.draft, "work/media-drafts/microorganisms-batch-012/clostridioides-difficile-draft-v2.png");
  assert.equal(difficileV2?.sha256, "b53e405ce495ce0873b63f477a7d21ee5ce8ef7a4e3571c142bfbce8ada42053");
  assert.equal(difficileV2?.outputAudit?.observedSubjectDescription, "Ten elongated rod bodies in eight groupings: six isolated singles and two touching two-body pairs.");
  assert.equal(difficileV2?.outputAudit?.observedVisibleSporeCount, 2);
  assert.equal(difficileV2?.outputAudit?.metadataConsistency, "pass");
  const difficileV1 = batch012?.rejectedVariants?.find((asset) => asset.pageId === "clostridioides-difficile");
  assert.equal(difficileV1?.draft, "work/media-drafts/microorganisms-batch-012/clostridioides-difficile-draft.png");
  assert.equal(difficileV1?.sha256, "619879df51d07e7927e585c0ccfc14378bc26b7f71808d3a8d2b30cdd6ee8f6c");
  assert.equal(difficileV1?.disposition, "rejected");
  const difficileReview = reviewLog.reviews["clostridioides-difficile|clostridioides-difficile-morphology-v1.webp"];
  assert.equal(difficileReview?.revisionLinkage?.sourceDraft, "clostridioides-difficile-draft-v2.png");
  assert.equal(difficileReview?.revisionLinkage?.sourceSha256, difficileV2?.sha256);
  assert.equal(difficileReview?.revisionLinkage?.rejectedDraftSha256, difficileV1?.sha256);
  assert.ok(reviewLog.revisedAssets.some((asset) => asset.pageId === "clostridioides-difficile" && asset.sha256 === difficileV1?.sha256));
  const batch013 = batches.find((batch) => batch.batchId === "microorganisms-013");
  assert.equal(batch013?.status, "reviewed");
  assert.equal(batch013?.routeDecisionCount, 6);
  assert.equal(batch013?.candidateCount, 5);
  assert.equal(batch013?.scientificHoldCount, 0);
  assert.equal(batch013?.generationCallCount, 5);
  assert.equal(batch013?.revisionCount, 0);
  const batch013Candidates = batch013?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch013Candidates.map((asset) => asset.pageId), [
    "collinsella",
    "coprococcus",
    "corynebacterium",
    "cryptococcus-neoformans",
    "debaryomyces",
  ]);
  const batch013ExpectedOutputs = new Map([
    ["collinsella", ["defe4488d16fb9f63a085a69ff9db506b1efaf17fd581fcaf7f6828564ed94a6", "Nine short pleomorphic rod-to-coccobacillus bodies in seven groupings: five isolated singles and two touching two-body pairs."]],
    ["coprococcus", ["46b1f421f86c1c34629d76d108858759913e62c7f00c6f9497f302cdbd0f479e", "Eight coccoid-to-short-ovoid bodies in four widely separated touching two-body pairs."]],
    ["corynebacterium", ["0d23b84ec6d82a5994a25f484866a1601c4d26a390e142bd63bb1f4fb700738d", "Nine pleomorphic club-shaped rod bodies in six groupings: three isolated singles, one open-V pair, one near-parallel palisade pair, and one shallow angled two-body grouping."]],
    ["cryptococcus-neoformans", ["3fd06f1855e644f3624df66585834d47bab3f07075a1f1b84f585a24f5fa2781", "Ten encapsulated round-to-ovoid yeast bodies in eight groupings: six isolated singles and two narrow-based budding pairs; the transparent halo forms a continuous lobed contour around each attached mother-bud pair."]],
    ["debaryomyces", ["5c6a0517e702e70e4fbd92d5737073f2e0a25b565e8799b152a90194ddc3a02e", "Eight round-to-oval yeast bodies in six groupings: four isolated singles and two touching mother-and-bud pairs."]],
  ]);
  for (const asset of batch013Candidates) {
    const [expectedSha256, expectedObservation] = batch013ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.sha256, expectedSha256);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedSubjectDescription, expectedObservation);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
  }
  const cryptococcusCandidate = batch013Candidates.find((asset) => asset.pageId === "cryptococcus-neoformans");
  assert.match(cryptococcusCandidate?.outputAudit?.promptConstraintDisposition ?? "", /scientific reconstruction, not a micrograph/);
  const davidiellaDecision = batch013?.assets.find((asset) => asset.pageId === "davidiella");
  assert.equal(davidiellaDecision?.decision, "scientific-identity-hold-resolved");
  assert.equal(davidiellaDecision?.generationStatus, "withheld-no-call");
  assert.equal(davidiellaDecision?.canonicalIdentifier, "NCBITaxon:5498");
  assert.equal(davidiellaDecision?.canonicalPageId, "cladosporium");
  assert.equal(davidiellaDecision?.resolutionStatus, "resolved-before-promotion");
  assert.equal(davidiellaDecision?.draft, undefined);
  assert.equal(davidiellaDecision?.generationRecord, undefined);
  const batch014 = batches.find((batch) => batch.batchId === "microorganisms-014");
  assert.equal(batch014?.status, "reviewed");
  assert.equal(batch014?.routeDecisionCount, 6);
  assert.equal(batch014?.candidateCount, 6);
  assert.equal(batch014?.scientificHoldCount, 0);
  assert.equal(batch014?.generationCallCount, 6);
  assert.equal(batch014?.revisionCount, 0);
  const batch014Candidates = batch014?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch014Candidates.map((asset) => asset.pageId), [
    "deinococcus",
    "desulfovibrio",
    "desulfovibrionales",
    "dialister",
    "dialister-histaminiformans",
    "dorea",
  ]);
  const batch014ExpectedOutputs = new Map([
    ["deinococcus", ["430bee991e31c195903f4034378db5a1d6fc0041a7e89c39f76d3d371d1e87fa", 11, 6]],
    ["desulfovibrio", ["07d4e482e1d54da247ff43456dbf04dd935efe008ff703c52d5beb986e460a2d", 9, 7]],
    ["desulfovibrionales", ["3f95260fd37496a36a3c368a01f80845987abc35d6824f693ad91620ffadc711", 9, 6]],
    ["dialister", ["781687df0251db8f98192901dc31c2db39bc36df7ae026bcc56f6d2c707d8135", 9, 7]],
    ["dialister-histaminiformans", ["ab6e503f8b3402db9b74fa8bc3afd820233f7a044c113529b74c78e4ebc5f82e", 9, 7]],
    ["dorea", ["0a003a76e51ff6c568d3780072e72bf41936f73f217ed6d6084c66b773ff7a7c", 9, 6]],
  ]);
  const batch014PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  for (const asset of batch014Candidates) {
    const [expectedSha256, expectedBodyCount, expectedGroupingCount] = batch014ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.sha256, expectedSha256);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.ok(articleMediaRegistry[asset.pageId], `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(articleMediaRegistry[asset.pageId].reviewedOn, "2026-09-01");
    assert.ok(batch014PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].publishedFile), `${asset.pageId} article derivative must exist`);
    assert.ok(batch014PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].socialFile), `${asset.pageId} social derivative must exist`);
  }
  assert.equal(batch014Candidates.find((asset) => asset.pageId === "deinococcus")?.outputAudit?.observedTetradCount, 1);
  assert.equal(batch014Candidates.find((asset) => asset.pageId === "desulfovibrionales")?.assetType, "microbial-community");
  assert.equal(batch014Candidates.find((asset) => asset.pageId === "dorea")?.outputAudit?.observedLooseTwoBodyArrangementCount, 2);
  assert.match(articleMediaRegistry.desulfovibrionales?.caption ?? "", /representative morphology diversity reconstruction for the order, not a universal order-level form/);
  assert.equal(articleMediaRegistry["dialister-histaminiformans"]?.scientificIdentifiers[0]?.compact, "NCBITaxon:209880");
  assert.equal(articleMediaRegistry.allisonella, undefined);
  assert.ok(!batch014PublicMediaFiles.some((filename) => filename.startsWith("allisonella-")));
  const batch015 = batches.find((batch) => batch.batchId === "microorganisms-015");
  assert.equal(batch015?.status, "reviewed");
  assert.equal(batch015?.routeDecisionCount, 6);
  assert.equal(batch015?.candidateCount, 6);
  assert.equal(batch015?.scientificHoldCount, 0);
  assert.equal(batch015?.generationCallCount, 6);
  assert.equal(batch015?.revisionCount, 0);
  const batch015Candidates = batch015?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch015Candidates.map((asset) => asset.pageId), [
    "eggerthella",
    "eggerthella-lenta",
    "enterobacter",
    "enterobacter-cloacae",
    "enterobacteriaceae",
    "enterococcus",
  ]);
  const batch015ExpectedOutputs = new Map([
    ["eggerthella", ["NCBITaxon:84111", "66060793895f232562cad09080fecc7c5b4bba75b482a4c4a121c199542c597b", 10, 7]],
    ["eggerthella-lenta", ["NCBITaxon:84112", "5f8f31f823a78d52eb746dba30adf7dfc43eeb1b23eeddff9a13385768d8b0b2", 9, 7]],
    ["enterobacter", ["NCBITaxon:547", "116cf9d92287d316f2556e37a710af093f46c8bd5b404f69916144bb58284dbf", 8, 6]],
    ["enterobacter-cloacae", ["NCBITaxon:550", "545fbb5f18479bd34fb88d334cb49a9c1d06073eb228240c66d6d7652b8e63e6", 7, 6]],
    ["enterobacteriaceae", ["NCBITaxon:543", "093ed1f0621ca5bcd416254fd0fe47bcfc4beff58df78906f8ddfd66bdcb24bf", 10, 6]],
    ["enterococcus", ["NCBITaxon:1350", "35188c4cf97c53f99f2932abfbf91943b5cd502b97aced756222752e8d591e27", 11, 7]],
  ]);
  const batch015PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  for (const asset of batch015Candidates) {
    const [expectedIdentifier, expectedSha256, expectedBodyCount, expectedGroupingCount] = batch015ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.sha256, expectedSha256);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.ok(articleMediaRegistry[asset.pageId], `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(articleMediaRegistry[asset.pageId].reviewedOn, "2026-09-01");
    assert.equal(articleMediaRegistry[asset.pageId].scientificIdentifiers[0]?.compact, expectedIdentifier);
    assert.ok(batch015PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].publishedFile), `${asset.pageId} article derivative must exist`);
    assert.ok(batch015PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].socialFile), `${asset.pageId} social derivative must exist`);
  }
  const eggerthellaCandidate = batch015Candidates.find((asset) => asset.pageId === "eggerthella");
  assert.equal(eggerthellaCandidate?.outputAudit?.observedTouchingPairCount, 1);
  assert.equal(eggerthellaCandidate?.outputAudit?.observedThreeBodyChainCount, 1);
  assert.equal(batch015Candidates.find((asset) => asset.pageId === "enterobacteriaceae")?.assetType, "microbial-community");
  assert.equal(batch015Candidates.find((asset) => asset.pageId === "enterobacteriaceae")?.outputAudit?.observedTouchingPairCount, 3);
  assert.equal(batch015Candidates.find((asset) => asset.pageId === "enterobacteriaceae")?.outputAudit?.observedLooseTwoBodyArrangementCount, 1);
  assert.match(articleMediaRegistry.enterobacteriaceae?.caption ?? "", /representative bacillary family-level reconstruction, not a universal morphology/);
  const enterococcusCandidate = batch015Candidates.find((asset) => asset.pageId === "enterococcus");
  assert.equal(enterococcusCandidate?.outputAudit?.observedTouchingPairCount, 2);
  assert.equal(batch015Candidates.find((asset) => asset.pageId === "enterococcus")?.outputAudit?.observedThreeBodyChainCount, 1);
  assert.match(articleMediaRegistry.eggerthella?.scientificReferences[0]?.role ?? "", /retained current genus taxon record/);
  assert.match(articleMediaRegistry.eggerthella?.scientificReferences[1]?.role ?? "", /nomenclatural priority treatment/);
  const batch016 = batches.find((batch) => batch.batchId === "microorganisms-016");
  assert.equal(batch016?.status, "reviewed");
  assert.equal(batch016?.routeDecisionCount, 6);
  assert.equal(batch016?.candidateCount, 6);
  assert.equal(batch016?.scientificHoldCount, 0);
  assert.equal(batch016?.generationCallCount, 6);
  assert.equal(batch016?.revisionCount, 0);
  const batch016Candidates = batch016?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch016Candidates.map((asset) => asset.pageId), [
    "enterococcus-faecalis",
    "enterococcus-faecium",
    "erysipelotrichaceae",
    "escherichia",
    "eubacteriales",
    "eubacterium",
  ]);
  const batch016ExpectedOutputs = new Map([
    ["enterococcus-faecalis", ["NCBITaxon:1351", "090e932a8addbab0edf73c3da241347f423afa4f52524849875732abc0b95629", 10, 7]],
    ["enterococcus-faecium", ["NCBITaxon:1352", "c0a0543329a25ef7dc651c8d8fd0e94005493e11110dc874fe4db652bb42078b", 12, 7]],
    ["erysipelotrichaceae", ["NCBITaxon:128827", "9ac0f6a2597b65856832855f5e5d0e9e86360b6b185b302a51b66b0aec913882", 10, 6]],
    ["escherichia", ["NCBITaxon:561", "356ac08340612c43a4fb36372b741a9e8710d5844f9c69869a9b7ed48a1351de", 8, 6]],
    ["eubacteriales", ["NCBITaxon:186802", "834720a2695f431d3cab7a83b30b22cd10fb69bc661b6c1ce747d067437598cd", 10, 6]],
    ["eubacterium", ["NCBITaxon:1730", "39ca3065835e23fcc702e3a190d2ce753922f5eed1d780ac008a77baca5157be", 9, 6]],
  ]);
  const batch016PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  for (const asset of batch016Candidates) {
    const [expectedIdentifier, expectedSha256, expectedBodyCount, expectedGroupingCount] = batch016ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.sha256, expectedSha256);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.ok(articleMediaRegistry[asset.pageId], `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(articleMediaRegistry[asset.pageId].reviewedOn, "2026-09-01");
    assert.equal(articleMediaRegistry[asset.pageId].scientificIdentifiers[0]?.compact, expectedIdentifier);
    assert.ok(batch016PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].publishedFile), `${asset.pageId} article derivative must exist`);
    assert.ok(batch016PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].socialFile), `${asset.pageId} social derivative must exist`);
  }
  assert.equal(batch016Candidates.find((asset) => asset.pageId === "erysipelotrichaceae")?.assetType, "microbial-community");
  assert.equal(batch016Candidates.find((asset) => asset.pageId === "eubacteriales")?.assetType, "microbial-community");
  assert.match(articleMediaRegistry.erysipelotrichaceae?.caption ?? "", /representative higher-rank morphology-diversity reconstruction, not a universal family form/);
  assert.match(articleMediaRegistry.eubacteriales?.caption ?? "", /representative higher-rank morphology-diversity reconstruction, not a universal order form/);
  assert.equal(articleMediaRegistry.eubacteriales?.scientificIdentifiers[0]?.compact, "NCBITaxon:186802");
  assert.equal(batch016Candidates.some((asset) => asset.pageId === "clostridiales"), false);
  assert.equal(articleMediaRegistry.clostridiales, undefined);
  assert.ok(!readdirSync(new URL("../public/media-files/", import.meta.url)).some((filename) => filename.startsWith("clostridiales-")));
  assert.ok(!readdirSync(new URL("../media/masters/", import.meta.url)).some((filename) => filename.startsWith("clostridiales-")));
  const batch017 = batches.find((batch) => batch.batchId === "microorganisms-017");
  assert.equal(batch017?.status, "reviewed");
  assert.equal(batch017?.routeDecisionCount, 6);
  assert.equal(batch017?.candidateCount, 4);
  assert.equal(batch017?.scientificHoldCount, 0);
  assert.equal(batch017?.generationCallCount, 4);
  assert.equal(batch017?.revisionCount, 0);
  const batch017Candidates = batch017?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch017Candidates.map((asset) => asset.pageId), [
    "faecalibacterium",
    "faecalibacterium-prausnitzii",
    "fannyhessea-vaginae",
    "finegoldia",
  ]);
  const batch017ExpectedOutputs = new Map([
    ["faecalibacterium", ["NCBITaxon:216851", "b4ff14128327d59e4043d675165f3b36b9129bff8cf04dad568c835d052885c1", 11, 7]],
    ["faecalibacterium-prausnitzii", ["NCBITaxon:853", "75644357f48fa7887fe692d7bd8f207ab2c400adf349205c19c450f024b918d6", 9, 7]],
    ["fannyhessea-vaginae", ["NCBITaxon:82135", "3746111829afa1d6e3f9d574cb391e8b96ab89e86ec11ceccc32dc1d1bb8a603", 11, 7]],
    ["finegoldia", ["NCBITaxon:150022", "7a0431c895654980a80e0dcd12df235d3ebdc2277c5db0f3490e65f9fccbcd31", 12, 8]],
  ]);
  const batch017PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  for (const asset of batch017Candidates) {
    const [expectedIdentifier, expectedSha256, expectedBodyCount, expectedGroupingCount] = batch017ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.sha256, expectedSha256);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.ok(articleMediaRegistry[asset.pageId], `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(articleMediaRegistry[asset.pageId].reviewedOn, "2026-09-01");
    assert.equal(articleMediaRegistry[asset.pageId].scientificIdentifiers[0]?.compact, expectedIdentifier);
    assert.ok(batch017PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].publishedFile), `${asset.pageId} article derivative must exist`);
    assert.ok(batch017PublicMediaFiles.includes(articleMediaRegistry[asset.pageId].socialFile), `${asset.pageId} social derivative must exist`);
  }
  assert.equal(batch017Candidates.find((asset) => asset.pageId === "faecalibacterium")?.outputAudit?.observedHourglassLikeConnectedPairCount, 1);
  assert.equal(batch017Candidates.find((asset) => asset.pageId === "fannyhessea-vaginae")?.outputAudit?.observedThreeBodyChainCount, 1);
  assert.equal(batch017Candidates.find((asset) => asset.pageId === "finegoldia")?.outputAudit?.observedThreeBodyChainCount, 1);
  assert.match(articleMediaRegistry.faecalibacterium?.caption ?? "", /type-species-anchored/);
  assert.match(articleMediaRegistry.faecalibacterium?.caption ?? "", /representative, non-diagnostic, and not a micrograph/);
  assert.match(articleMediaRegistry["faecalibacterium-prausnitzii"]?.caption ?? "", /does not claim a species-exclusive silhouette/);
  assert.match(articleMediaRegistry["fannyhessea-vaginae"]?.caption ?? "", /keyed only to the current combination/);
  assert.match(articleMediaRegistry.finegoldia?.caption ?? "", /type-species-anchored/);
  const batch017ResolvedRoutes = new Map([
    ["eubacterium-eligens", ["lachnospira-eligens", "NCBITaxon:39485"]],
    ["eubacterium-rectale", ["agathobacter-rectalis", "NCBITaxon:39491"]],
  ]);
  for (const [obsoleteId, [canonicalId, identifier]] of batch017ResolvedRoutes) {
    const decision = batch017?.assets.find((asset) => asset.pageId === obsoleteId);
    assert.equal(decision?.decision, "scientific-identity-hold-resolved");
    assert.equal(decision?.generationStatus, "withheld-no-call");
    assert.equal(decision?.canonicalPageId, canonicalId);
    assert.equal(decision?.canonicalIdentifier, identifier);
    assert.equal(articleMediaRegistry[obsoleteId], undefined);
    assert.ok(!batch017PublicMediaFiles.some((filename) => filename.startsWith(`${obsoleteId}-`)));
    assert.ok(!readdirSync(new URL("../media/masters/", import.meta.url)).some((filename) => filename.startsWith(`${obsoleteId}-`)));
    assert.ok(articleMediaRegistry[canonicalId]);
    assert.ok(batch017PublicMediaFiles.some((filename) => filename.startsWith(`${canonicalId}-`)));
    assert.ok(readdirSync(new URL("../media/masters/", import.meta.url)).some((filename) => filename.startsWith(`${canonicalId}-`)));
  }
  const batch018 = batches.find((batch) => batch.batchId === "microorganisms-018");
  assert.equal(batch018?.status, "reviewed");
  assert.equal(batch018?.routeDecisionCount, 6);
  assert.equal(batch018?.candidateCount, 6);
  assert.equal(batch018?.scientificHoldCount, 0);
  assert.equal(batch018?.generationCallCount, 6);
  assert.equal(batch018?.revisionCount, 0);
  assert.equal(batch018?.controlReviewRequired, false);
  assert.equal(batch018?.controlAcceptedReviewManifestSha256, "cc049461dbd466ea0df1c4ed3bd4914b7136ca764df46b1b63ec90cefd2c25fd");
  const batch018Candidates = batch018?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch018Candidates.map((asset) => asset.pageId), [
    "agathobacter-rectalis",
    "firmicutes",
    "flavobacterium",
    "flavonifractor",
    "fusarium",
    "fusicatenibacter",
  ]);
  const batch018ExpectedOutputs = new Map([
    ["agathobacter-rectalis", ["NCBITaxon:39491", "94f06ae8c30d7940b9dbadc9a562bdc878ac189b7656e822390bbc12dcdd5883", "3659945e786ad32494030a6cc15eb745ffc65d5b4d90753d116f210c68df0fcc", 1705472, 9, 7]],
    ["firmicutes", ["NCBITaxon:1239", "fa6d18ca02c2f8dfe90f761da5f735100511ada3112985f6bbd8c6090a2b2032", "8212e377fb61342dbfd993fa3dbb4ecefb5299cbe4a5963dae0bfbe051cf6582", 1852052, 11, 7]],
    ["flavobacterium", ["NCBITaxon:237", "536f9a1d5e85506a494f4f198f3acad46cfb61cbb94110614ea81e5d4df99569", "c73322076ec02d76aa33a8da77d6fe8266b94c0b4dacc80c129de267864ea80a", 1766237, 8, 6]],
    ["flavonifractor", ["NCBITaxon:946234", "a89aaf4bba7c51dc2c25eb3e09a199c8e1b4050aa9097528a467de47fb9de0db", "c1192d138773251510def604f3570deb3a4515f2bc83020cc7a3117784c3794b", 1879137, 8, 6]],
    ["fusarium", ["NCBITaxon:5506", "fb6a73d1a76db64af5e39c18ab8237456e5c9b60baa163acc7c0e5684684b798", "57c507790948ea0618a518dc1e0d2e1120cf637cf82040fa5fef7ffadec79123", 1791399, 4, 5]],
    ["fusicatenibacter", ["NCBITaxon:1407607", "41ce67fa1e7bf603d5f7ef79823121a279ecfe44d181d4a979ce0da2dfd0473a", "a80be8bd3e076403135cb59375d8c0573a0141cfd53af31fd5c91dba97361be9", 1687840, 10, 6]],
  ]);
  const batch018PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-018.md", import.meta.url), "utf8");
  const batch018PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch018MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  for (const asset of batch018Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch018ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assertMediaOutputAudit(asset, "microorganisms-018");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch018PromptRecord.match(new RegExp("### `" + asset.pageId + "-draft\\.png`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(media.reviewedOn, "2026-09-01");
    assert.equal(media.embeddedCreationDate, "2026-09-01");
    assert.equal(media.scientificIdentifiers[0]?.compact, expectedIdentifier);
    assert.ok(batch018PublicMediaFiles.includes(expectedFiles.publishedFile));
    assert.ok(batch018PublicMediaFiles.includes(expectedFiles.socialFile));
    assert.ok(batch018MasterFiles.includes(expectedFiles.masterSource));
    assert.ok(!batch018PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft must not become a public file`);
    assert.ok(!media.src.includes("work/media-drafts"));
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.disposition, "approved");
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.revisionLinkage?.sourceSha256, expectedSha256);
  }
  assert.equal(batch018Candidates.find((asset) => asset.pageId === "firmicutes")?.assetType, "microbial-community");
  assert.match(batch018Candidates.find((asset) => asset.pageId === "firmicutes")?.proposedCaption ?? "", /representative, non-exhaustive, non-diagnostic/);
  assert.equal(batch018Candidates.find((asset) => asset.pageId === "fusarium")?.outputAudit?.observedMajorStructureCount, 5);
  assert.equal(batch018Candidates.find((asset) => asset.pageId === "fusarium")?.outputAudit?.observedFrameContactCount, 1);
  assert.match(batch018Candidates.find((asset) => asset.pageId === "fusarium")?.visualReview ?? "", /intentionally continues beyond the bottom specimen frame/);
  assert.match(articleMediaRegistry.firmicutes?.caption ?? "", /representative, non-exhaustive, non-diagnostic/);
  assert.match(articleMediaRegistry.firmicutes?.caption ?? "", /never a universal phylum form/);
  assert.match(articleMediaRegistry.fusarium?.caption ?? "", /may show six septa/);
  assert.match(articleMediaRegistry.fusarium?.caption ?? "", /does not imply a universal septation pattern/);
  assert.equal(articleMediaRegistry.fusarium?.scientificIdentifiers[1]?.compact, "IndexFungorum:8284");
  assert.equal(articleMediaRegistry["eubacterium-rectale"], undefined);
  assert.ok(!batch018PublicMediaFiles.some((filename) => filename.startsWith("eubacterium-rectale-")));
  assert.ok(!batch018MasterFiles.some((filename) => filename.startsWith("eubacterium-rectale-")));
  const batch019 = batches.find((batch) => batch.batchId === "microorganisms-019");
  assert.equal(batch019?.status, "reviewed");
  assert.equal(batch019?.routeDecisionCount, 6);
  assert.equal(batch019?.candidateCount, 6);
  assert.equal(batch019?.scientificHoldCount, 0);
  assert.equal(batch019?.generationCallCount, 6);
  assert.equal(batch019?.revisionCount, 0);
  assert.equal(batch019?.controlReviewRequired, false);
  assert.equal(batch019?.controlAcceptedReviewManifestSha256, "3af15c28b71466839c25c392c23668fa7b4343ec8d2e9d20864fc4ab583bd959");
  const batch019Candidates = batch019?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch019Candidates.map((asset) => asset.pageId), [
    "fusobacteriales",
    "fusobacterium",
    "fusobacterium-nucleatum",
    "fusobacterium-varium",
    "gardnerella",
    "gardnerella-vaginalis",
  ]);
  const batch019ExpectedOutputs = new Map([
    ["fusobacteriales", ["NCBITaxon:203491", "f02f821214c0ddbc0c0618e23cc7806c5b9d531fba11e97d4cc5e9d4252e3100", "5c3f0a57f607c2711c4592956b2c2376be8e04d8188071120aed678795a9e359", 1742233, 10, 6]],
    ["fusobacterium", ["NCBITaxon:848", "d88f02f4d83c4c6302e6eabf0e08f4e7dc653dadeee05add4c55d3ca65b891e7", "7fd036a2bda5159c44b08f2a3f822b9622cb095587784c89597d5f0602d1d11c", 1746995, 10, 8]],
    ["fusobacterium-nucleatum", ["NCBITaxon:851", "6e30acb9059cb9474a0330419cc1d420356198336f4f09f09bee893eb11ffdba", "be2e4fb2ec1ed45435ca2b82be36003bb6ab142f6dd5e0632afef1826efaff18", 1708646, 8, 6]],
    ["fusobacterium-varium", ["NCBITaxon:856", "c115f679e9cb10ea45baacb39211d0b6f0ef11a14f9dc77ddbf2e7b14bec9255", "4f1f72906eb78f25848af24f8c8a2314933762f5d1880fbe13433678bf17f177", 1736018, 8, 7]],
    ["gardnerella", ["NCBITaxon:2701", "721e476a8430452ed4c480630d973687c8bc8208b27705ec143474f91b592a9c", "fd37be7994a7eb9a0da92c2aff11979d052bca8c02df234ab42798594e4ee3a1", 1718851, 11, 8]],
    ["gardnerella-vaginalis", ["NCBITaxon:2702", "d92d47ef6492057dc9488f6088b143f8e9319291aafd1113452022cdcb56cb9b", "a658b8ac4b097bdced6fcea237765c029a9495972aa6b6be128abf3d83ad8ef7", 1734207, 10, 8]],
  ]);
  const batch019PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-019.md", import.meta.url), "utf8");
  const batch019PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch019MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  for (const asset of batch019Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch019ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assertMediaOutputAudit(asset, "microorganisms-019");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch019PromptRecord.match(new RegExp("### `" + asset.pageId + "-draft\\.png`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(media.reviewedOn, "2026-09-01");
    assert.equal(media.embeddedCreationDate, "2026-09-01");
    assert.equal(media.scientificIdentifiers[0]?.compact, expectedIdentifier);
    assert.equal(media.socialResizeFit, "contain");
    assert.equal(media.socialBackground, "#f3f7fb");
    assert.ok(batch019PublicMediaFiles.includes(expectedFiles.publishedFile));
    assert.ok(batch019PublicMediaFiles.includes(expectedFiles.socialFile));
    assert.ok(batch019MasterFiles.includes(expectedFiles.masterSource));
    assert.ok(!batch019PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft must not become a public file`);
    assert.ok(!media.src.includes("work/media-drafts"));
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.disposition, "approved");
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.revisionLinkage?.sourceSha256, expectedSha256);
  }
  assert.equal(batch019Candidates.find((asset) => asset.pageId === "fusobacteriales")?.assetType, "microbial-community");
  assert.match(batch019Candidates.find((asset) => asset.pageId === "fusobacteriales")?.proposedCaption ?? "", /representative, non-exhaustive, non-diagnostic/);
  assert.match(batch019Candidates.find((asset) => asset.pageId === "fusobacteriales")?.proposedCaption ?? "", /never a universal order form/);
  assert.match(batch019Candidates.find((asset) => asset.pageId === "fusobacterium")?.proposedCaption ?? "", /Type-species-anchored/);
  assert.match(batch019Candidates.find((asset) => asset.pageId === "fusobacterium-varium")?.proposedCaption ?? "", /distinct from the long pointed F\. nucleatum treatment/);
  assert.match(batch019Candidates.find((asset) => asset.pageId === "gardnerella")?.proposedCaption ?? "", /not a universal genus form/);
  assert.match(batch019Candidates.find((asset) => asset.pageId === "gardnerella-vaginalis")?.proposedCaption ?? "", /does not imply visual separation from other Gardnerella species or diagnosis/);
  assert.match(articleMediaRegistry.fusobacteriales?.caption ?? "", /never a universal order form/);
  assert.match(articleMediaRegistry.fusobacterium?.caption ?? "", /Type-species-anchored/);
  assert.match(articleMediaRegistry["fusobacterium-nucleatum"]?.caption ?? "", /evolving nomenclatural boundary/);
  assert.match(articleMediaRegistry["fusobacterium-varium"]?.caption ?? "", /Continuous constricted bodies remain single cells/);
  assert.match(articleMediaRegistry.gardnerella?.caption ?? "", /not a universal genus form/);
  assert.match(articleMediaRegistry["gardnerella-vaginalis"]?.caption ?? "", /does not imply visual separation from other Gardnerella species or diagnosis/);
  const batch020 = batches.find((batch) => batch.batchId === "microorganisms-020");
  assert.equal(batch020?.status, "reviewed");
  assert.equal(batch020?.routeDecisionCount, 6);
  assert.equal(batch020?.candidateCount, 6);
  assert.equal(batch020?.scientificHoldCount, 0);
  assert.equal(batch020?.generationCallCount, 6);
  assert.equal(batch020?.revisionCount, 0);
  assert.equal(batch020?.controlReviewRequired, false);
  assert.equal(batch020?.controlAcceptedReviewManifestSha256, "14ee3951fb9db48705b7d81b8cf24e228198bf1c6ca649c4f050e066c6808f21");
  const batch020Candidates = batch020?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch020Candidates.map((asset) => asset.pageId), [
    "gemella",
    "gordonibacter",
    "gordonibacter-urolithinfaciens",
    "haemophilus",
    "helicobacter-hepaticus",
    "holdemanella",
  ]);
  const batch020ExpectedOutputs = new Map([
    ["gemella", ["NCBITaxon:1378", "0deee4445f4e7b1ad0021d096b0761f4ab9b31ac6068bf12b38f43486a1da3f3", "204d7c4ae03f3dad4bd988040278140fb80a8476220767d040dec1b1b422c42f", 1805508, 11, 6]],
    ["gordonibacter", ["NCBITaxon:644652", "2ca2739153b67f42491d7f347d0ca3bfb0a0a952eef54a362ad89654a3c23aa2", "a2b173859e74fae5013539cb0c4101b5c6fa80f6d1db8053e6e0174aba345220", 1664580, 8, 6]],
    ["gordonibacter-urolithinfaciens", ["NCBITaxon:1335613", "8045f4e3d233194aa43cdee0400e79b7627ed9d890a16f1ec2fd48003ffbf7ab", "a8371093207e499e64545f889d7a971934df48a0c2adc04c0d89d5be41456759", 1683122, 9, 7]],
    ["haemophilus", ["NCBITaxon:724", "a703e16b6a7308a8d1257c562ffcfb321685d65a7cbbbb227119e213d6966b52", "eca159a8fd4ec5f822134843065aa46f2fb2dd2b86b9bb9258494b3575c78f9b", 1662891, 10, 7]],
    ["helicobacter-hepaticus", ["NCBITaxon:32025", "4be6fa417d2d1ec078220327140a59789aba9aa80180fa9d4b292eb1ef743d54", "ffa5b34f13f50c4d9ff898ab2462d69e6f0a2f2fba93555f7eca9f352d458bc2", 1566743, 6, 6]],
    ["holdemanella", ["NCBITaxon:1573535", "ff4aa64cdfe76e84889ccb55bb0e00f7ed540acddf933e540ee610328e4bb987", "41df66ae44aeb5a7d080a82ec2f15e722be22eb8f7e0e23639b9710cdbed219e", 1791334, 10, 6]],
  ]);
  const batch020PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-020.md", import.meta.url), "utf8");
  const batch020PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch020MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  for (const asset of batch020Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch020ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assertMediaOutputAudit(asset, "microorganisms-020");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch020PromptRecord.match(new RegExp("### `" + asset.pageId + "-draft\\.png`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} control-approved asset must enter the reviewed registry`);
    assert.equal(media.reviewedOn, "2026-09-01");
    assert.equal(media.embeddedCreationDate, "2026-09-01");
    assert.equal(media.scientificIdentifiers[0]?.compact, expectedIdentifier);
    assert.equal(media.socialResizeFit, "cover");
    assert.ok(batch020PublicMediaFiles.includes(expectedFiles.publishedFile));
    assert.ok(batch020PublicMediaFiles.includes(expectedFiles.socialFile));
    assert.ok(batch020MasterFiles.includes(expectedFiles.masterSource));
    assert.ok(!batch020PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.disposition, "approved");
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.revisionLinkage?.sourceSha256, expectedSha256);
  }
  assert.equal(batch020Candidates.find((asset) => asset.pageId === "helicobacter-hepaticus")?.outputAudit?.observedVisibleAppendageCount, 12);
  assert.equal(batch020Candidates.find((asset) => asset.pageId === "helicobacter-hepaticus")?.outputAudit?.observedBipolarSingleFlagellumBodyCount, 6);
  assert.equal(batch020Candidates.find((asset) => asset.pageId === "helicobacter-hepaticus")?.outputAudit?.observedPeriplasmicFiberCount, 0);
  assert.match(batch020Candidates.find((asset) => asset.pageId === "gemella")?.proposedCaption ?? "", /not a universal genus arrangement/);
  assert.match(batch020Candidates.find((asset) => asset.pageId === "gordonibacter-urolithinfaciens")?.proposedCaption ?? "", /does not imply visual separation from other Gordonibacter/);
  assert.match(batch020Candidates.find((asset) => asset.pageId === "haemophilus")?.proposedCaption ?? "", /not a universal genus form/);
  assert.match(batch020Candidates.find((asset) => asset.pageId === "helicobacter-hepaticus")?.proposedCaption ?? "", /not a generic H\. pylori portrait/);
  assert.match(batch020Candidates.find((asset) => asset.pageId === "holdemanella")?.proposedCaption ?? "", /not a universal genus arrangement/);
  assert.match(articleMediaRegistry.gemella?.caption ?? "", /not a universal genus arrangement/);
  assert.match(articleMediaRegistry.gordonibacter?.caption ?? "", /exactly three restrained conical-apex treatments/);
  assert.match(articleMediaRegistry["gordonibacter-urolithinfaciens"]?.caption ?? "", /does not imply visual separation from other Gordonibacter/);
  assert.match(articleMediaRegistry.haemophilus?.caption ?? "", /not a universal genus form, pathology image, or micrograph/);
  assert.match(articleMediaRegistry["helicobacter-hepaticus"]?.caption ?? "", /explicitly not a generic H\. pylori portrait/);
  assert.match(articleMediaRegistry.holdemanella?.caption ?? "", /not a universal genus arrangement/);
  const batch021 = batches.find((batch) => batch.batchId === "microorganisms-021");
  assert.equal(batch021?.status, "reviewed");
  assert.equal(batch021?.routeDecisionCount, 6);
  assert.equal(batch021?.candidateCount, 5);
  assert.equal(batch021?.scientificHoldCount, 1);
  assert.equal(batch021?.generationCallCount, 7);
  assert.equal(batch021?.revisionCount, 2);
  assert.equal(batch021?.controlReviewRequired, false);
  const batch021Candidates = batch021?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch021Candidates.map((asset) => asset.pageId), [
    "intestinimonas",
    "klebsiella",
    "klebsiella-pneumoniae",
    "lachnobacterium",
    "lachnospira",
  ]);
  const batch021ExpectedOutputs = new Map([
    ["intestinimonas", { identifier: "NCBITaxon:1392389", revision: 1, decision: "approved-after-output-audit", rootDisposition: "accepted", promptSha256: "bf8e7b99a93c1b82b8b4a62e631a92939f27c8f93dd6e671770b5687a9d96de5", sha256: "49aa2443bc087d72a66a23847205cb4cad8d55aba0bfef42f2df89fbe9875b11", fileSize: 1784006, bodyCount: 9, groupingCount: 7 }],
    ["klebsiella", { identifier: "NCBITaxon:570", revision: 2, decision: "approved-after-output-audit", rootDisposition: "accepted", promptSha256: "a9b701d01b619b6d5517b4e32081c270642a6d4545066b3d2208ce7781dbdc93", sha256: "4e9b5d1b55f38f8072205642c3b8527eb8cddc443eabac7579b3e7f4bcb65cfc", fileSize: 1417803, bodyCount: 10, groupingCount: 8, outerMinRgb: [237, 244, 251] }],
    ["klebsiella-pneumoniae", { identifier: "NCBITaxon:573", revision: 1, decision: "approved-after-output-audit", rootDisposition: "accepted", promptSha256: "04985162ec7f8e4991000d7c38aff70a07664bf908db288c781642b728f602b9", sha256: "19f66d75ac14033971bea381df9736e3d25015a6eb79af578c182d041770640c", fileSize: 1724421, bodyCount: 8, groupingCount: 8 }],
    ["lachnobacterium", { identifier: "NCBITaxon:140625", revision: 1, decision: "approved-after-output-audit", rootDisposition: "accepted", promptSha256: "27c4ec2f029fcb3ead3dc60c8284866e70a25c5dff84aef2d8db0a46c2fdf328", sha256: "1728aa663695b2f61648403f14df520cfaeed934e51de7c90c60c860da267107", fileSize: 1661972, bodyCount: 11, groupingCount: 8 }],
    ["lachnospira", { identifier: "NCBITaxon:28050", revision: 2, decision: "approved-after-output-audit", rootDisposition: "accepted", promptSha256: "0ecfb0cada573ba0c16ee226038ad81ece877e30dc14cb5a9037b6faa0968818", sha256: "348d799050ccc7a0fde18578bf209c821c8ef1ab27e1331ca8d5edef366a4cd7", fileSize: 1308090, bodyCount: 9, groupingCount: 7, outerMinRgb: [235, 244, 251] }],
  ]);
  const batch021PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-021.md", import.meta.url), "utf8");
  const batch021PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch021MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  const batch021DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-021/", import.meta.url)).sort();
  assert.deepEqual(batch021DraftFileNames, [
    "intestinimonas-draft.png",
    "klebsiella-draft-v2.png",
    "klebsiella-draft.png",
    "klebsiella-pneumoniae-draft.png",
    "lachnobacterium-draft.png",
    "lachnospira-draft-v2.png",
    "lachnospira-draft.png",
  ]);
  for (const asset of batch021Candidates) {
    const expected = batch021ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.revision, expected.revision);
    assert.equal(asset.decision, expected.decision);
    assert.equal(asset.rootReviewDisposition, expected.rootDisposition);
    assert.equal(asset.controlledIdentifier, expected.identifier);
    assert.equal(asset.promptSha256, expected.promptSha256);
    assert.equal(asset.sha256, expected.sha256);
    assert.equal(asset.fileSizeBytes, expected.fileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expected.bodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expected.groupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assertMediaOutputAudit(asset, "microorganisms-021");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expected.fileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expected.sha256);

    const promptFilename = `${asset.pageId}-draft${asset.revision === 1 ? "" : `-v${asset.revision}`}.png`;
    const promptMatch = batch021PromptRecord.match(new RegExp("### `" + promptFilename.replaceAll(".", "\\.") + "`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expected.promptSha256);

    if (asset.revision === 2) {
      const { data: pixels, info } = await sharp(draftBytes).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      const band = 96;
      const minRgb = [255, 255, 255];
      let outerPixelCount = 0;
      let darkPixelCount = 0;
      for (let y = 0; y < info.height; y += 1) {
        for (let x = 0; x < info.width; x += 1) {
          if (x >= band && x < info.width - band && y >= band && y < info.height - band) continue;
          const offset = (y * info.width + x) * info.channels;
          const rgb = [pixels[offset], pixels[offset + 1], pixels[offset + 2]];
          const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
          if (luminance < 128) darkPixelCount += 1;
          for (let channel = 0; channel < 3; channel += 1) minRgb[channel] = Math.min(minRgb[channel], rgb[channel]);
          outerPixelCount += 1;
        }
      }
      assert.equal(outerPixelCount, 454656);
      assert.equal(darkPixelCount, 0, `${asset.pageId} v2 outer canvas band must remain uniformly pale`);
      assert.deepEqual(minRgb, expected.outerMinRgb);
      assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, darkPixelCount);
      assert.deepEqual(asset.outputAudit?.outerBackgroundMinRgb, minRgb);
    }

    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} root-approved asset must enter the reviewed registry`);
    assert.equal(media.revision, 1, `${asset.pageId} receives canonical public media revision 1 independent of source-draft lineage`);
    assert.equal(media.reviewedOn, "2026-09-02");
    assert.equal(media.scientificIdentifiers[0]?.compact, expected.identifier);
    assert.equal(media.socialResizeFit, "cover");
    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, media.revision);
    assert.ok(batch021PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have its reviewed article derivative`);
    assert.ok(batch021PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have its reviewed social derivative`);
    assert.ok(batch021MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have its canonical lossless master`);
    assert.ok(!batch021PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.disposition, "approved");
    assert.equal(reviewLog.reviews[media.reviewLogKey]?.revisionLinkage?.sourceSha256, expected.sha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the root-accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

  }
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "intestinimonas")?.outputAudit?.observedVisibleSporeCount, 0);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "klebsiella")?.outputAudit?.observedCapsuleHaloBodyCount, 3);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "klebsiella")?.outputAudit?.observedSharedHaloGroupingCount, 0);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "klebsiella")?.outputAudit?.observedDarkMarginCount, 0);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "klebsiella-pneumoniae")?.outputAudit?.observedCapsuleHaloBodyCount, 8);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "klebsiella-pneumoniae")?.outputAudit?.observedSharedHaloGroupingCount, 0);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "lachnospira")?.outputAudit?.observedVisibleAppendageCount, 0);
  assert.equal(batch021Candidates.find((asset) => asset.pageId === "lachnospira")?.outputAudit?.observedDarkMarginCount, 0);
  assert.match(batch021Candidates.find((asset) => asset.pageId === "intestinimonas")?.proposedCaption ?? "", /does not assert a universal sporulation form/);
  assert.match(batch021Candidates.find((asset) => asset.pageId === "klebsiella")?.proposedCaption ?? "", /does not imply that bodies without an emphasized envelope lack capsules in nature/);
  assert.match(batch021Candidates.find((asset) => asset.pageId === "klebsiella-pneumoniae")?.proposedCaption ?? "", /does not imply visual separation from other Klebsiella/);
  assert.match(batch021Candidates.find((asset) => asset.pageId === "lachnobacterium")?.proposedCaption ?? "", /does not turn colony-form etymology into cellular morphology/);
  assert.match(batch021Candidates.find((asset) => asset.pageId === "lachnospira")?.proposedCaption ?? "", /does not imply a universal shape or flagellar arrangement/);
  const batch021RejectedVariants = batch021?.rejectedVariants ?? [];
  assert.deepEqual(batch021RejectedVariants.map((asset) => asset.pageId), ["klebsiella", "lachnospira"]);
  const batch021ExpectedRejected = new Map([
    ["klebsiella", ["64d126f988de4e76d0dbcfc4eb0ce084d80a010806e6678ec9f9fa7787064f25", 1878122, "work/media-drafts/microorganisms-batch-021/klebsiella-draft-v2.png"]],
    ["lachnospira", ["cc3b9b522259ed3fe2cca3702ffc1d4dbe3c3eeca8c4ba8edd1ad277d3ad2f2f", 2003167, "work/media-drafts/microorganisms-batch-021/lachnospira-draft-v2.png"]],
  ]);
  for (const rejected of batch021RejectedVariants) {
    const [expectedSha256, expectedFileSize, expectedSupersededBy] = batch021ExpectedRejected.get(rejected.pageId);
    assert.equal(rejected.revision, 1);
    assert.equal(rejected.disposition, "rejected");
    assert.equal(rejected.sha256, expectedSha256);
    assert.equal(rejected.fileSizeBytes, expectedFileSize);
    assert.equal(rejected.supersededBy, expectedSupersededBy);
    assert.match(rejected.reason, /dark top and bottom vignette|dark upper and lower vignette/);
    const rejectedBytes = readFileSync(new URL(`../${rejected.draft}`, import.meta.url));
    assert.equal(rejectedBytes.length, expectedFileSize);
    assert.equal(createHash("sha256").update(rejectedBytes).digest("hex"), expectedSha256);
    assert.ok(!batch021PublicMediaFiles.includes(rejected.draft.split("/").at(-1)), `${rejected.pageId} rejected v1 draft must own no public endpoint`);
  }
  const batch021RevisionRecords = reviewLog.revisedAssets.filter((asset) => asset.batchId === "microorganisms-021");
  assert.deepEqual(batch021RevisionRecords.map((asset) => asset.pageId), ["klebsiella", "lachnospira"]);
  for (const revisionRecord of batch021RevisionRecords) {
    const rejected = batch021RejectedVariants.find((asset) => asset.pageId === revisionRecord.pageId);
    assert.equal(revisionRecord.disposition, "revise");
    assert.equal(revisionRecord.sha256, rejected.sha256);
    assert.equal(revisionRecord.supersededBy, rejected.supersededBy);
    assert.match(revisionRecord.outcome, /Root accepted the exact v2 hash for promotion/);
  }
  assert.equal(program.current.revised, 11);
  const batch021Hold = batch021?.assets.find((asset) => asset.pageId === "lachnoclostridium");
  assert.equal(batch021Hold?.decision, "scientific-identity-hold");
  assert.equal(batch021Hold?.generationStatus, "withheld-no-call");
  assert.equal(batch021Hold?.sourceEraIdentifier, "NCBITaxon:1506553");
  assert.equal(batch021Hold?.assetType, undefined);
  assert.equal(batch021Hold?.revision, undefined);
  assert.equal(batch021Hold?.draft, undefined);
  assert.equal(batch021Hold?.generationRecord, undefined);
  assert.ok(batch021Hold?.reason.includes("not validly published"));
  assert.ok(batch021Hold?.reason.includes("zero validly published correct-name children"));
  assert.ok(!batch021PromptRecord.includes("### `lachnoclostridium-draft.png`"));
  assert.ok(!batch021DraftFileNames.some((name) => name.startsWith("lachnoclostridium-")));
  assert.equal(articleMediaRegistry.lachnoclostridium, undefined);
  assert.ok(!batch021PublicMediaFiles.some((name) => name.startsWith("lachnoclostridium-")));
  assert.ok(!batch021MasterFiles.some((name) => name.startsWith("lachnoclostridium-")));
  const batch022 = batches.find((batch) => batch.batchId === "microorganisms-022");
  assert.equal(batch022?.status, "reviewed");
  assert.equal(batch022?.routeDecisionCount, 6);
  assert.equal(batch022?.candidateCount, 5);
  assert.equal(batch022?.scientificHoldCount, 1);
  assert.equal(batch022?.generationCallCount, 5);
  assert.equal(batch022?.revisionCount, 0);
  assert.equal(batch022?.controlReviewRequired, false);
  const batch022Candidates = batch022?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch022Candidates.map((asset) => asset.pageId), [
    "lachnospira-eligens",
    "lachnospiraceae",
    "lactobacillaceae",
    "lactobacillus",
    "lactobacillus-acidophilus",
  ]);
  const batch022ExpectedOutputs = new Map([
    ["lachnospira-eligens", ["NCBITaxon:39485", "90979cba61809b6358e64d3fece98866ee0679b27b3cb6d5a9102a9632166443", "8e990663e1f86cec18922fbddbfc64e0fc1fecb8bb4cc081ca658e7c1ccda115", 1225905, 10, 8]],
    ["lachnospiraceae", ["NCBITaxon:186803", "4ddb605cede123ebdbd6c0997984e4e9a44cec6b5671c90a2421699e666fcec1", "942f2a03382ad7eec0c89b87149126febd06fdae033d0a69c8f7909cfb89030c", 1437679, 10, 6]],
    ["lactobacillaceae", ["NCBITaxon:33958", "e52b7c90076c955c4b99197d97692ade37bac2d05798e0855783c53d0dce6d8f", "ad2540a9b76c63d2f2749696a3483a600170552a4d5ded6de63551306344e5ec", 1226568, 10, 6]],
    ["lactobacillus", ["NCBITaxon:1578", "dfee51a825f7f63a1bad136b0e08b6b33db4b556c2e55b8ad0d7501bdd1010c1", "ac85178ad6c673aaf6bd657ef579b7e0b80e7d621283a25491b395c7abc7057f", 1304479, 9, 7]],
    ["lactobacillus-acidophilus", ["NCBITaxon:1579", "21deda5c8912c7c1491fa860296fd48d7e274e237ab4fde9907a7ebff6db2ef7", "7b11c1e7487412163550223eef1c051fa62130c965a9ef40f9cb3e2b3dbafcc3", 1339460, 10, 7]],
  ]);
  const batch022PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-022.md", import.meta.url), "utf8");
  const batch022PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch022MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  const batch022DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-022/", import.meta.url)).sort();
  assert.deepEqual(batch022DraftFileNames, [
    "lachnospira-eligens-draft.png",
    "lachnospiraceae-draft.png",
    "lactobacillaceae-draft.png",
    "lactobacillus-acidophilus-draft.png",
    "lactobacillus-draft.png",
  ]);
  for (const asset of batch022Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch022ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assertMediaOutputAudit(asset, "microorganisms-022");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch022PromptRecord.match(new RegExp("### `" + asset.pageId + "-draft\\.png`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} must enter the reviewed registry after root approval`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.ok(batch022PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch022PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch022MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);
    assert.ok(!batch022PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
  }
  assert.equal(articleMediaRegistry["lachnospira-eligens"].socialResizeFit, "cover");
  assert.equal(articleMediaRegistry.lachnospiraceae.socialResizeFit, "cover");
  assert.equal(articleMediaRegistry.lactobacillaceae.socialResizeFit, "cover");
  assert.equal(articleMediaRegistry.lactobacillus.socialResizeFit, "contain");
  assert.equal(articleMediaRegistry.lactobacillus.socialBackground, "#f3f7fb");
  assert.equal(articleMediaRegistry["lactobacillus-acidophilus"].socialResizeFit, "cover");
  assert.equal(batch022Candidates.find((asset) => asset.pageId === "lachnospira-eligens")?.outputAudit?.observedCentrallyBroadenedSingleCount, 2);
  assert.equal(batch022Candidates.find((asset) => asset.pageId === "lachnospira-eligens")?.outputAudit?.observedVisibleAppendageCount, 0);
  assert.equal(batch022Candidates.find((asset) => asset.pageId === "lachnospiraceae")?.outputAudit?.observedCoccoidPairCount, 1);
  assert.equal(batch022Candidates.find((asset) => asset.pageId === "lactobacillaceae")?.outputAudit?.observedThreeRodChainCount, 1);
  assert.equal(batch022Candidates.find((asset) => asset.pageId === "lactobacillus")?.outputAudit?.observedGentlyCurvedSingleCount, 1);
  assert.equal(batch022Candidates.find((asset) => asset.pageId === "lactobacillus-acidophilus")?.outputAudit?.observedLooseParallelTwoRodGroupingCount, 1);
  assert.match(batch022Candidates.find((asset) => asset.pageId === "lachnospiraceae")?.proposedCaption ?? "", /representative, non-exhaustive, non-universal, non-diagnostic/);
  assert.match(batch022Candidates.find((asset) => asset.pageId === "lactobacillaceae")?.proposedCaption ?? "", /post-2020 Lactobacillaceae circumscription/);
  assert.match(batch022Candidates.find((asset) => asset.pageId === "lactobacillus")?.proposedCaption ?? "", /does not represent every organism historically called a lactobacillus/);
  const batch022Hold = batch022?.assets.find((asset) => asset.pageId === "lachnospiraceae-family");
  assert.equal(batch022Hold?.decision, "scientific-identity-hold");
  assert.equal(batch022Hold?.generationStatus, "withheld-no-call");
  assert.equal(batch022Hold?.sourceEraIdentifier, "NCBITaxon:186803");
  assert.equal(batch022Hold?.assetType, undefined);
  assert.equal(batch022Hold?.revision, undefined);
  assert.equal(batch022Hold?.draft, undefined);
  assert.equal(batch022Hold?.generationRecord, undefined);
  assert.ok(batch022Hold?.reason.includes("same current family"));
  assert.ok(!batch022PromptRecord.includes("### `lachnospiraceae-family-draft.png`"));
  assert.ok(!batch022DraftFileNames.some((name) => name.startsWith("lachnospiraceae-family-")));
  assert.equal(articleMediaRegistry["lachnospiraceae-family"], undefined);
  assert.ok(!batch022PublicMediaFiles.some((name) => name.startsWith("lachnospiraceae-family-")));
  assert.ok(!batch022MasterFiles.some((name) => name.startsWith("lachnospiraceae-family-")));
  const batch023 = batches.find((batch) => batch.batchId === "microorganisms-023");
  assert.equal(batch023?.status, "reviewed");
  assert.equal(batch023?.routeDecisionCount, 6);
  assert.equal(batch023?.candidateCount, 4);
  assert.equal(batch023?.scientificHoldCount, 2);
  assert.equal(batch023?.generationCallCount, 4);
  assert.equal(batch023?.revisionCount, 0);
  assert.equal(batch023?.controlReviewRequired, false);
  const batch023Candidates = batch023?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch023Candidates.map((asset) => asset.pageId), [
    "lactobacillus-crispatus",
    "lactobacillus-gasseri",
    "lactobacillus-iners",
    "lactobacillus-jensenii",
  ]);
  const batch023ExpectedOutputs = new Map([
    ["lactobacillus-crispatus", ["NCBITaxon:47770", "a610dd67ed898769dd61dbd1a65cfc9b0e752e89d8e3a771179a957922d53a08", "763b002168255468b259624f3ef29d546c51a979b809cec396f23fbf5aefd3c7", 1286041, 11, 8]],
    ["lactobacillus-gasseri", ["NCBITaxon:1596", "ebb6a0c376fc6f204bfeff4b3d9e968839de6bccdd7efcaf4ab714c8e3a3a5c5", "85dfa2a02e52e9b8e7188abba1b7d8bf328d7e7c3d3ae4e1030b097bba85b041", 1206992, 9, 7]],
    ["lactobacillus-iners", ["NCBITaxon:147802", "e8a944e60c5d3793658a44501c7b8bbde3dad66885b584b41ccce40614883eb3", "73f7a21c663f4ed73d1ac65ded950a6482c50b58ff364d069a39841210b1194f", 1190987, 11, 8]],
    ["lactobacillus-jensenii", ["NCBITaxon:109790", "04ff0042678065b4611a6a7a3bcf686b87191758b31daa822785d05cffefa006", "6496b4dbcdb232b7faee082385fc334491a5c423297141d5196d1671ddd7900b", 1236326, 8, 6]],
  ]);
  const batch023PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-023.md", import.meta.url), "utf8");
  const batch023PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch023MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  const batch023DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-023/", import.meta.url)).sort();
  assert.deepEqual(batch023DraftFileNames, [
    "lactobacillus-crispatus-draft.png",
    "lactobacillus-gasseri-draft.png",
    "lactobacillus-iners-draft.png",
    "lactobacillus-jensenii-draft.png",
  ]);
  const batch023GenerationRecords = new Set();
  for (const asset of batch023Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch023ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.equal(asset.outputAudit?.observedDarkMarginCount, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch023GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch023GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-023");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch023PromptRecord.match(new RegExp("### `" + asset.pageId + "-draft\\.png`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} root-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.ok(batch023PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch023PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch023MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch023PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the root-accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch023GenerationRecords.size, 4);
  assert.equal(batch023Candidates.find((asset) => asset.pageId === "lactobacillus-crispatus")?.outputAudit?.observedGentlyCurvedSingleCount, 2);
  assert.equal(batch023Candidates.find((asset) => asset.pageId === "lactobacillus-gasseri")?.outputAudit?.observedCloseTwoRodGroupingCount, 1);
  assert.equal(batch023Candidates.find((asset) => asset.pageId === "lactobacillus-iners")?.outputAudit?.observedContinuousCentrallyConstrictedRodCount, 1);
  assert.equal(batch023Candidates.find((asset) => asset.pageId === "lactobacillus-iners")?.outputAudit?.observedCoccobacillaryBodyCount, 6);
  assert.equal(batch023Candidates.find((asset) => asset.pageId === "lactobacillus-jensenii")?.outputAudit?.observedGentlyCurvedSingleCount, 1);
  assert.match(batch023Candidates.find((asset) => asset.pageId === "lactobacillus-iners")?.proposedCaption ?? "", /not a micrograph or Gram-stained field/);
  const batch023Holds = batch023?.assets.filter((asset) => asset.decision === "scientific-identity-hold") ?? [];
  assert.deepEqual(batch023Holds.map((asset) => asset.pageId), ["lactobacillus-plantarum", "lactobacillus-reuteri"]);
  const batch023HoldExpectations = new Map([
    ["lactobacillus-plantarum", ["NCBITaxon:1590", "Lactiplantibacillus plantarum", "lactiplantibacillus-plantarum"]],
    ["lactobacillus-reuteri", ["NCBITaxon:1598", "Limosilactobacillus reuteri", "limosilactobacillus-reuteri"]],
  ]);
  for (const hold of batch023Holds) {
    const [expectedIdentifier, expectedCurrentName, expectedCanonicalPageId] = batch023HoldExpectations.get(hold.pageId);
    assert.equal(hold.generationStatus, "withheld-no-call");
    assert.equal(hold.sourceEraIdentifier, expectedIdentifier);
    assert.equal(hold.currentAcceptedName, expectedCurrentName);
    assert.equal(hold.proposedCanonicalPageId, expectedCanonicalPageId);
    assert.equal(hold.assetType, undefined);
    assert.equal(hold.revision, undefined);
    assert.equal(hold.draft, undefined);
    assert.equal(hold.generationRecord, undefined);
    assert.ok(hold.reason.includes("homotypic synonym"));
    assert.ok(hold.requiredResolution.includes("308 alias"));
    assert.ok(!batch023PromptRecord.includes(`### \`${hold.pageId}-draft.png\``));
    assert.ok(!batch023DraftFileNames.some((name) => name.startsWith(`${hold.pageId}-`)));
    assert.equal(articleMediaRegistry[hold.pageId], undefined);
    assert.ok(!batch023PublicMediaFiles.some((name) => name.startsWith(`${hold.pageId}-`)));
    assert.ok(!batch023MasterFiles.some((name) => name.startsWith(`${hold.pageId}-`)));
  }
  const batch024 = batches.find((batch) => batch.batchId === "microorganisms-024");
  assert.equal(batch024?.status, "reviewed");
  assert.equal(batch024?.routeDecisionCount, 6);
  assert.equal(batch024?.candidateCount, 5);
  assert.equal(batch024?.scientificHoldCount, 1);
  assert.equal(batch024?.generationCallCount, 5);
  assert.equal(batch024?.revisionCount, 0);
  assert.equal(batch024?.controlReviewRequired, false);
  const batch024Candidates = batch024?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch024Candidates.map((asset) => asset.pageId), [
    "lactococcus",
    "lancefieldella-parvula",
    "leptotrichia",
    "listeria",
    "lodderomyces-elongisporus",
  ]);
  const batch024ExpectedOutputs = new Map([
    ["lactococcus", ["NCBITaxon:1357", "70347305d2c6e57aba2fac144febe3bb39ed6a066049363921a26487d40762bf", "882cc3169d7cfcf9f06ef835cb0196fc75de0a20d662705f65c5b2be5c9de652", 1248896, 11, 7]],
    ["lancefieldella-parvula", ["NCBITaxon:1382", "8a555837eb24b2dc0c5829705c14c8f20d13946f25936ae73d0ebbee5108b89c", "8ded6b438d3cea7d2457e5497a536cc00e0172b20bc72d5a845b8726222614b9", 1245485, 10, 8]],
    ["leptotrichia", ["NCBITaxon:32067", "17823dd2290c97cce0d0f56709ed46a816659ea0f13d1644ea54be56e19a1a61", "27743b823e083cfbebc8c2e7e5dad67dd97c7be0207b286546ae520af160866b", 1240981, 8, 6]],
    ["listeria", ["NCBITaxon:1637", "5fb9bbd060782c3b68ee247e9ebcf2d5eff6423498f3a90a55e888acd99c52db", "a7c60bdb7c7fac6d11cb8db066bc872f77bd8111eee49aeb91ddf9491c051755", 1150657, 11, 8]],
    ["lodderomyces-elongisporus", ["NCBITaxon:36914", "2671fa285780d089a77eaac8d9e38964c598c6dcfb070e83ce2720620f7c3210", "1e0f642c3b04b9427d68959c6f90047781422831a3e52667f03bf210a28a56f2", 1377092, 9, 8]],
  ]);
  const batch024PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-024.md", import.meta.url), "utf8");
  const batch024PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch024MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  const batch024DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-024/", import.meta.url)).sort();
  assert.deepEqual(batch024DraftFileNames, [
    "lactococcus-draft.png",
    "lancefieldella-parvula-draft.png",
    "leptotrichia-draft.png",
    "listeria-draft.png",
    "lodderomyces-elongisporus-draft.png",
  ]);
  const batch024GenerationRecords = new Set();
  for (const asset of batch024Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch024ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.equal(asset.outputAudit?.observedDarkMarginCount, 0);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch024GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch024GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-024");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch024PromptRecord.match(new RegExp("### `" + asset.pageId + "-draft\\.png`\\n\\n```text\\n([\\s\\S]*?)\\n```"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} root-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, asset.socialResizeFit);
    assert.ok(batch024PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch024PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch024MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch024PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the root-accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch024GenerationRecords.size, 5);
  assert.ok(batch024Candidates.every((asset) => asset.socialResizeFit === "cover"));
  assert.equal(batch024Candidates.find((asset) => asset.pageId === "lactococcus")?.outputAudit?.observedTouchingThreeCellChainCount, 1);
  assert.equal(batch024Candidates.find((asset) => asset.pageId === "lancefieldella-parvula")?.outputAudit?.observedAsymmetricallyBroadenedContinuousSingleCount, 2);
  assert.equal(batch024Candidates.find((asset) => asset.pageId === "leptotrichia")?.outputAudit?.observedFusiformRodCount, 8);
  assert.equal(batch024Candidates.find((asset) => asset.pageId === "listeria")?.outputAudit?.observedSingleCount, 5);
  assert.equal(batch024Candidates.find((asset) => asset.pageId === "lodderomyces-elongisporus")?.outputAudit?.observedYeastCellBodyCount, 6);
  assert.equal(batch024Candidates.find((asset) => asset.pageId === "lodderomyces-elongisporus")?.outputAudit?.observedElongatedAscosporeFormCount, 3);
  assert.match(batch024Candidates.find((asset) => asset.pageId === "lactococcus")?.proposedCaption ?? "", /representative, non-universal, non-diagnostic/);
  assert.match(batch024Candidates.find((asset) => asset.pageId === "lancefieldella-parvula")?.proposedCaption ?? "", /pleomorphic coccobacillary, ovoid, and very-short-rod variation/);
  assert.match(batch024Candidates.find((asset) => asset.pageId === "leptotrichia")?.proposedCaption ?? "", /representative, non-universal, non-diagnostic/);
  assert.match(batch024Candidates.find((asset) => asset.pageId === "listeria")?.proposedCaption ?? "", /representative, non-universal, non-diagnostic/);
  assert.match(batch024Candidates.find((asset) => asset.pageId === "lodderomyces-elongisporus")?.proposedCaption ?? "", /not a micrograph/);
  assert.match(batch024Candidates.find((asset) => asset.pageId === "lodderomyces-elongisporus")?.proposedCaption ?? "", /no universal sporulation claim/);
  const batch024Hold = batch024?.assets.find((asset) => asset.pageId === "lactobacillus-rhamnosus");
  assert.equal(batch024Hold?.decision, "scientific-identity-hold");
  assert.equal(batch024Hold?.generationStatus, "withheld-no-call");
  assert.equal(batch024Hold?.sourceEraIdentifier, "NCBITaxon:47715");
  assert.equal(batch024Hold?.currentAcceptedName, "Lacticaseibacillus rhamnosus");
  assert.equal(batch024Hold?.proposedCanonicalPageId, "lacticaseibacillus-rhamnosus");
  assert.equal(batch024Hold?.assetType, undefined);
  assert.equal(batch024Hold?.revision, undefined);
  assert.equal(batch024Hold?.draft, undefined);
  assert.equal(batch024Hold?.generationRecord, undefined);
  assert.match(batch024Hold?.reason ?? "", /homotypic synonym/);
  assert.match(batch024Hold?.reason ?? "", /taxonomic-opinion/);
  assert.match(batch024Hold?.requiredResolution ?? "", /permanent 308 alias/);
  assert.ok(!batch024PromptRecord.includes("### `lactobacillus-rhamnosus-draft.png`"));
  assert.ok(!batch024DraftFileNames.some((name) => name.startsWith("lactobacillus-rhamnosus-")));
  assert.equal(articleMediaRegistry["lactobacillus-rhamnosus"], undefined);
  assert.ok(!batch024PublicMediaFiles.some((name) => name.startsWith("lactobacillus-rhamnosus-")));
  assert.ok(!batch024MasterFiles.some((name) => name.startsWith("lactobacillus-rhamnosus-")));
  const batch024HoldLog = reviewLog.rejectedAssets.find((asset) => asset.pageId === "lactobacillus-rhamnosus");
  assert.equal(batch024HoldLog?.batchId, "microorganisms-024");
  assert.equal(batch024HoldLog?.disposition, "scientific-identity-hold");
  assert.equal(batch024HoldLog?.sourceEraIdentifier, "NCBITaxon:47715");
  assert.equal(batch024HoldLog?.currentAcceptedName, "Lacticaseibacillus rhamnosus");
  assert.equal(batch024HoldLog?.proposedCanonicalPageId, "lacticaseibacillus-rhamnosus");
  const batch025 = batches.find((batch) => batch.batchId === "microorganisms-025");
  assert.equal(batch025?.status, "reviewed");
  assert.equal(batch025?.routeDecisionCount, 6);
  assert.equal(batch025?.candidateCount, 6);
  assert.equal(batch025?.scientificHoldCount, 0);
  assert.equal(batch025?.generationCallCount, 6);
  assert.equal(batch025?.revisionCount, 0);
  assert.equal(batch025?.controlReviewRequired, false);
  const batch025Candidates = batch025?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch025Candidates.map((asset) => asset.pageId), [
    "malassezia",
    "mediterraneibacter",
    "megamonas",
    "megasphaera",
    "methanobrevibacter",
    "methylobacterium",
  ]);
  const batch025ExpectedOutputs = new Map([
    ["malassezia", ["NCBITaxon:55193", "864736e6e726c937036407eb5e3fd5988be8ea3908f842ba07c020fccbf9f0fb", "5cda6a682d0a55bf7ff06eeac47a27ceda8aeead55639f663f2505bc61e9ec47", 1336136, 9, 7]],
    ["mediterraneibacter", ["NCBITaxon:2316020", "f0011aafa3b50c16c4df60689ba3205754f4093c3de137a8cb8bf14a449d2147", "5363112200a6502616931b713fd3b7d53b164ea759bb302da1dfb8b3efbaa5bf", 1207760, 9, 7]],
    ["megamonas", ["NCBITaxon:158846", "25bb00a3ca1f6eea57a13731e63ae78041a3b685b90ceaa9abf395946d37dee7", "81cc2e79b9c183a5d442528379c48d04dbab79377b2a95bb5e8b686cd2482e71", 1339448, 9, 7]],
    ["megasphaera", ["NCBITaxon:906", "29fb6a8edd7162c7d14cc070c03e5e32af3e952e07deb3c4c4c8b5f380c08764", "423c5dc4e58dc6acef58282073fa38bf13772741c341f5840abd3701fce74a9b", 1306776, 11, 7]],
    ["methanobrevibacter", ["NCBITaxon:2172", "048e0df56d2e73b6d689cf6277bc573f3612081caccb4099b005406ddfea9d0b", "ef1b9783f82c28b1cc98b2a8c7257933c0530fc3db92554e8efcd744fa237adb", 1128688, 10, 7]],
    ["methylobacterium", ["NCBITaxon:407", "19f1fcfca97d305a1a0b2739aa42ca5839f9a0ed8f0487290b91a914bdad5243", "3159833f48682330877d219d73cf2dc6d90c740696dec074edb5e8cbaf5600c5", 1144450, 9, 7]],
  ]);
  const batch025PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-025.md", import.meta.url), "utf8");
  const batch025PublicMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  const batch025MasterFiles = readdirSync(new URL("../media/masters/", import.meta.url));
  const batch025DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-025/", import.meta.url)).sort();
  assert.deepEqual(batch025DraftFileNames, [
    "malassezia-draft.png",
    "mediterraneibacter-draft.png",
    "megamonas-draft.png",
    "megasphaera-draft.png",
    "methanobrevibacter-draft.png",
    "methylobacterium-draft.png",
  ]);
  const batch025GenerationRecords = new Set();
  for (const asset of batch025Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch025ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.equal(asset.outputAudit?.observedDarkMarginCount, 0);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch025GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch025GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-025");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch025PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, asset.socialResizeFit);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch025GenerationRecords.size, 6);
  assert.ok(batch025Candidates.every((asset) => asset.socialResizeFit === "cover"));
  assert.equal(batch025Candidates.find((asset) => asset.pageId === "malassezia")?.outputAudit?.observedBuddingPairCount, 2);
  assert.equal(batch025Candidates.find((asset) => asset.pageId === "megasphaera")?.outputAudit?.observedTouchingThreeCellChainCount, 1);
  assert.equal(batch025Candidates.find((asset) => asset.pageId === "methanobrevibacter")?.domain, "Archaea");
  assert.equal(batch025Candidates.find((asset) => asset.pageId === "methylobacterium")?.outputAudit?.observedThreeBodyRosetteCount, 1);
  assert.ok(batch025Candidates.every((asset) => /representative, non-universal, non-diagnostic/.test(asset.proposedCaption ?? "")));
  const batch026 = batches.find((batch) => batch.batchId === "microorganisms-026");
  assert.equal(batch026?.status, "reviewed");
  assert.equal(batch026?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch026?.routeDecisionCount, 6);
  assert.equal(batch026?.candidateCount, 4);
  assert.equal(batch026?.scientificHoldCount, 1);
  assert.equal(batch026?.generationCallCount, 5);
  assert.equal(batch026?.revisionCount, 0);
  assert.equal(batch026?.controlReviewRequired, false);
  const batch026Candidates = batch026?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch026Candidates.map((asset) => asset.pageId), [
    "mollicutes",
    "morganella-morganii",
    "mycobacterium-tuberculosis",
    "mycoplasma",
  ]);
  const batch026ExpectedOutputs = new Map([
    ["mollicutes", ["NCBITaxon:31969", "eb21dbfcdf359bfbcae339aef5f70e4c59e8b1b50b2b5b9447ce12e83e745349", "4e653aa8b1b59b56c3cf2edd972905a94feabcbcb688f6ff6b9fc41bbad41e95", 1608798, 9, 7, false, "contain"]],
    ["morganella-morganii", ["NCBITaxon:582", "a97793987d2d66c81dd4a07671951c0f2b59723da3095ef165d6a6c03eccebc3", "5cfad5bdd3a3c8faa411c71020a13f06d038f2ff2ce57e12209f169c95f0fd71", 1369671, 8, 6, true, "cover"]],
    ["mycobacterium-tuberculosis", ["NCBITaxon:1773", "bf28eb032957538e070a901803343ad35833262bf9df9f176f63501ecf5f7ecf", "13b7bb8779d04623268d66c035b513ea38c530134bd7646e95e470c7d3091a95", 1319131, 9, 7, false, "contain"]],
    ["mycoplasma", ["NCBITaxon:2093", "53437d37041b18878130e43d632b7654e176921ad518483ff03f1c8d6a3ff49d", "ba6f067147b795bead11c6003dc1b135ff8fe8957db10bed72b3dfedbdfedddb", 1458852, 11, 8, false, "contain"]],
  ]);
  const batch026PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-026.md", import.meta.url), "utf8");
  const batch026DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-026/", import.meta.url)).sort();
  assert.deepEqual(batch026DraftFileNames, [
    "mollicutes-draft.png",
    "morganella-morganii-draft.png",
    "mortierella-draft.png",
    "mycobacterium-tuberculosis-draft.png",
    "mycoplasma-draft.png",
  ]);
  const batch026GenerationRecords = new Set();
  for (const asset of batch026Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount, expectedCoverSafe, expectedSocialFit] = batch026ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.socialResizeFit, expectedSocialFit);
    assert.equal(asset.socialBackground, expectedSocialFit === "contain" ? "#f3f7fb" : undefined);
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.observedDarkMarginCount, 0);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, expectedCoverSafe);
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch026GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch026GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-026");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch026PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, expectedSocialFit);
    assert.equal(media.socialBackground, expectedSocialFit === "contain" ? "#f3f7fb" : undefined);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch026GenerationRecords.size, 4);
  assert.deepEqual(batch026Candidates.map((asset) => [asset.pageId, asset.socialResizeFit]), [
    ["mollicutes", "contain"],
    ["morganella-morganii", "cover"],
    ["mycobacterium-tuberculosis", "contain"],
    ["mycoplasma", "contain"],
  ]);
  assert.equal(batch026Candidates.find((asset) => asset.pageId === "mollicutes")?.outputAudit?.observedShortHelicalSingleCount, 1);
  assert.equal(batch026Candidates.find((asset) => asset.pageId === "mycoplasma")?.outputAudit?.observedVisibleBodyCount, 11);
  assert.equal(batch026Candidates.find((asset) => asset.pageId === "mycoplasma")?.outputAudit?.observedSpatialGroupingCount, 8);
  const batch026RejectedMortierella = batch026?.assets.find((asset) => asset.pageId === "mortierella");
  assert.equal(batch026RejectedMortierella?.decision, "rejected-after-original-resolution-review");
  assert.equal(batch026RejectedMortierella?.rootReviewDisposition, "rejected");
  assert.equal(batch026RejectedMortierella?.disposition, "rejected");
  assert.equal(batch026RejectedMortierella?.assetType, undefined);
  assert.equal(batch026RejectedMortierella?.revision, undefined);
  assert.equal(batch026RejectedMortierella?.rejectedAssetType, "morphology");
  assert.equal(batch026RejectedMortierella?.rejectedRevision, 1);
  assert.equal(batch026RejectedMortierella?.sha256, "dbfc343c267433e00c26f9afdc08a08772a7805c7fae197cda9b87afbe4e9bd5");
  assert.match(batch026RejectedMortierella?.rejectionReason ?? "", /externally beaded or conidial clusters/);
  assert.equal(articleMediaRegistry.mortierella?.revision, 2);
  assert.equal(articleMediaRegistry.mortierella?.publishedFile, "mortierella-morphology-v2.webp");
  assert.ok(!batch025PublicMediaFiles.includes("mortierella-morphology-v1.webp"));
  assert.ok(!batch025PublicMediaFiles.includes("mortierella-morphology-v1-social.webp"));
  assert.ok(!batch025MasterFiles.includes("mortierella-morphology-v1-master.png"));
  const mortierellaRejection = reviewLog.rejectedAssets.find((asset) => asset.pageId === "mortierella" && asset.batchId === "microorganisms-026");
  assert.equal(mortierellaRejection?.disposition, "rejected");
  assert.equal(mortierellaRejection?.sha256, batch026RejectedMortierella?.sha256);
  assert.equal(mortierellaRejection?.subjectReview?.status, "fail");
  assert.match(mortierellaRejection?.routingImpact ?? "", /no registry key, master, derivative/);
  const batch026Hold = batch026?.assets.find((asset) => asset.pageId === "mycoplasma-hominis");
  assert.equal(batch026Hold?.decision, "scientific-identity-hold");
  assert.equal(batch026Hold?.generationStatus, "withheld-no-call");
  assert.equal(batch026Hold?.sourceEraIdentifier, "NCBITaxon:2098");
  assert.equal(batch026Hold?.currentAcceptedName, "Metamycoplasma hominis");
  assert.equal(batch026Hold?.proposedCanonicalPageId, "metamycoplasma-hominis");
  assert.equal(batch026Hold?.assetType, undefined);
  assert.equal(batch026Hold?.revision, undefined);
  assert.equal(batch026Hold?.draft, undefined);
  assert.equal(batch026Hold?.generationRecord, undefined);
  assert.match(batch026Hold?.reason ?? "", /homotypic synonym/);
  assert.match(batch026Hold?.requiredResolution ?? "", /permanent asset-free 308 alias/);
  assert.ok(!batch026DraftFileNames.some((name) => name.startsWith("mycoplasma-hominis-")));
  assert.equal(articleMediaRegistry["mycoplasma-hominis"], undefined);
  assert.equal(articleMediaRegistry["metamycoplasma-hominis"], undefined);
  assert.ok(!batch025PublicMediaFiles.some((name) => name.startsWith("mycoplasma-hominis-")));
  assert.ok(!batch025MasterFiles.some((name) => name.startsWith("mycoplasma-hominis-")));
  const batch026HoldLog = reviewLog.rejectedAssets.find((asset) => asset.pageId === "mycoplasma-hominis");
  assert.equal(batch026HoldLog?.batchId, "microorganisms-026");
  assert.equal(batch026HoldLog?.disposition, "scientific-identity-hold");
  assert.equal(batch026HoldLog?.sourceEraIdentifier, "NCBITaxon:2098");
  assert.equal(batch026HoldLog?.currentAcceptedName, "Metamycoplasma hominis");
  assert.equal(batch026HoldLog?.proposedCanonicalPageId, "metamycoplasma-hominis");
  const batch027 = batches.find((batch) => batch.batchId === "microorganisms-027");
  assert.equal(batch027?.status, "reviewed");
  assert.equal(batch027?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch027?.routeDecisionCount, 6);
  assert.equal(batch027?.candidateCount, 6);
  assert.equal(batch027?.scientificHoldCount, 0);
  assert.equal(batch027?.generationCallCount, 7);
  assert.equal(batch027?.reviewableGenerationCount, 6);
  assert.equal(batch027?.quarantinedGenerationCount, 1);
  assert.equal(batch027?.revisionCount, 1);
  assert.equal(batch027?.controlReviewRequired, false);
  const batch027Candidates = batch027?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch027Candidates.map((asset) => asset.pageId), [
    "mortierella",
    "nakaseomyces-glabratus",
    "odoribacter",
    "olsenella",
    "oscillibacter",
    "oscillospiraceae",
  ]);
  const batch027ExpectedOutputs = new Map([
    ["mortierella", ["NCBITaxon:4855", 2, "1ef90d8aba4f265c0bf58599d055df891d5e0e29420a23221ec6bfbc71aa709b", "ae70a134619a4715d43670e144bf93fd879c70edda15b385ce7f4aa627f699a8", 1330375, 1, 1, false, "contain"]],
    ["nakaseomyces-glabratus", ["NCBITaxon:5478", 1, "c4c335263d80ff37c80ecacb4737c1e7c4b292fc7ac386b1d279b32e18670366", "273bfd1018215ab8289d31c619b164ad3279e75f70cf48a0cc335fcc0adc3bb4", 1480372, 12, 9, false, "contain"]],
    ["odoribacter", ["NCBITaxon:283168", 1, "ba9b795889968a3e299ed22cc2e574e7d81a91e437d73f27e76c34d9e91105b8", "6536ddaf5283651585414b02cb25769a892c74e23c0e90c13542d995b961c9a2", 1348167, 10, 8, true, "cover"]],
    ["olsenella", ["NCBITaxon:133925", 1, "40d058c1e6cdd65cf680962498e2da5b3c3db892c4130d1cf8f8a6d1d4814e7b", "fabcaec1294b478877b740d321062d52cf56690c4a8f5f79effe187f694df02b", 1231039, 11, 8, true, "cover"]],
    ["oscillibacter", ["NCBITaxon:459786", 1, "28aa6cf110f3823a101273cc27de0a5b237f030839e2119d675f28ddd22cf6c0", "7419e9bd8b0165db560eb6a5069c41b0eb2a10fd76561b324594bbc3ad32aa49", 1278999, 10, 8, false, "contain"]],
    ["oscillospiraceae", ["NCBITaxon:216572", 1, "d9ad722f7a89dab6d6a138bcfeb5f6b43cb0d8ca6636867e6b39fa093d402523", "91447adfb1668b6438014a22e21f79fcfbc2305487d6a49c950c1a1907248aad", 1294879, 11, 7, true, "cover"]],
  ]);
  const batch027PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-027.md", import.meta.url), "utf8");
  const batch027DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-027/", import.meta.url)).sort();
  assert.deepEqual(batch027DraftFileNames, [
    "mortierella-draft-v2.png",
    "nakaseomyces-glabratus-draft.png",
    "odoribacter-draft.png",
    "olsenella-draft.png",
    "oscillibacter-draft.png",
    "oscillospiraceae-draft.png",
  ]);
  const batch027QuarantineFileNames = readdirSync(new URL("../work/media-quarantine/microorganisms-batch-027/", import.meta.url)).sort();
  assert.deepEqual(batch027QuarantineFileNames, ["oscillibacter-stale-authority-draft.png"]);
  const batch027GenerationRecords = new Set();
  for (const asset of batch027Candidates) {
    const [expectedIdentifier, expectedRevision, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount, expectedCoverSafe, expectedSocialFit] = batch027ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.revision, expectedRevision);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.socialResizeFit, expectedSocialFit);
    assert.equal(asset.proposedSocialResizeFit, expectedSocialFit);
    assert.equal(asset.socialBackground, expectedSocialFit === "contain" ? "#f3f7fb" : undefined);
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.promptCountTrusted, false);
    assert.equal(asset.outputAudit?.observedDarkMarginCount, 0);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, expectedCoverSafe);
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch027GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct reviewable generation record`);
    batch027GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-027");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(draftBytes.readUInt32BE(16), 1536);
    assert.equal(draftBytes.readUInt32BE(20), 1024);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);

    const promptMatch = batch027PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} immutable prompt must remain in the prompt record`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, expectedSocialFit);
    assert.equal(media.socialBackground, expectedSocialFit === "contain" ? "#f3f7fb" : undefined);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch027GenerationRecords.size, 6);
  assert.equal(batch027Candidates.find((asset) => asset.pageId === "mortierella")?.outputAudit?.observedVisibleTransverseTonalSeamCount, 11);
  assert.equal(batch027Candidates.find((asset) => asset.pageId === "mortierella")?.revisionLinkage?.rejectedDraftSha256, "dbfc343c267433e00c26f9afdc08a08772a7805c7fae197cda9b87afbe4e9bd5");
  assert.equal(batch027Candidates.find((asset) => asset.pageId === "nakaseomyces-glabratus")?.outputAudit?.observedVisibleBodyCount, 12);
  assert.equal(batch027Candidates.find((asset) => asset.pageId === "olsenella")?.outputAudit?.observedDistinctCentralSwellingCount, 0);
  assert.equal(batch027Candidates.find((asset) => asset.pageId === "oscillospiraceae")?.socialResizePosition, "centre");
  assert.equal(articleMediaRegistry.oscillospiraceae?.socialResizePosition, "centre");
  assert.match(batch027PromptRecord, /10\.1099\/ijs\.0\.64717-0/);
  assert.match(batch027PromptRecord, /corbicula clam/);
  const batch027Quarantine = batch027?.quarantinedGenerations?.[0];
  assert.equal(batch027Quarantine?.pageId, "oscillibacter");
  assert.equal(batch027Quarantine?.decision, "generation-invalidated-stale-authority");
  assert.equal(batch027Quarantine?.generationStatus, "quarantined-not-reviewable");
  assert.equal(batch027Quarantine?.sha256, "a208e8aedc061ce1b4b151e4bae5c7283385ab50c5002b2b3a4b053cae519520");
  assert.equal(batch027Quarantine?.stalePromptSha256, "1c54f8b54b475229e119c08793b5d731720c5336e78b3f72804c1afb653ed302");
  assert.ok(!batch027GenerationRecords.has(batch027Quarantine?.generationRecord));
  const batch027QuarantineBytes = readFileSync(new URL(`../${batch027Quarantine.quarantinedFile}`, import.meta.url));
  assert.equal(batch027QuarantineBytes.length, 1503631);
  assert.equal(createHash("sha256").update(batch027QuarantineBytes).digest("hex"), batch027Quarantine.sha256);
  assert.ok(articleMediaRegistry.oscillibacter);
  assert.ok(batch025PublicMediaFiles.includes("oscillibacter-morphology-v1.webp"));
  assert.ok(batch025PublicMediaFiles.includes("oscillibacter-morphology-v1-social.webp"));
  assert.ok(batch025MasterFiles.includes("oscillibacter-morphology-v1-master.png"));
  assert.ok(!batch025PublicMediaFiles.includes("oscillibacter-stale-authority-draft.png"));
  assert.ok(!batch025MasterFiles.includes("oscillibacter-stale-authority-draft.png"));
  const oscillibacterQuarantineLog = reviewLog.rejectedAssets.find((asset) => asset.pageId === "oscillibacter" && asset.batchId === "microorganisms-027");
  assert.equal(oscillibacterQuarantineLog?.disposition, "quarantined-stale-authority");
  assert.equal(oscillibacterQuarantineLog?.sha256, batch027Quarantine.sha256);
  assert.match(oscillibacterQuarantineLog?.scientificReferenceCheck?.notes ?? "", /64717-0/);
  const mortierellaRevision = reviewLog.revisedAssets.find((asset) => asset.pageId === "mortierella" && asset.batchId === "microorganisms-027");
  assert.equal(mortierellaRevision?.disposition, "revise");
  assert.equal(mortierellaRevision?.sha256, "dbfc343c267433e00c26f9afdc08a08772a7805c7fae197cda9b87afbe4e9bd5");
  assert.equal(mortierellaRevision?.supersededBy, "work/media-drafts/microorganisms-batch-027/mortierella-draft-v2.png");
  const batch028 = batches.find((batch) => batch.batchId === "microorganisms-028");
  assert.equal(batch028?.status, "reviewed");
  assert.equal(batch028?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch028?.routeDecisionCount, 6);
  assert.equal(batch028?.candidateCount, 5);
  assert.equal(batch028?.scientificHoldCount, 1);
  assert.equal(batch028?.generationCallCount, 5);
  assert.equal(batch028?.reviewableGenerationCount, 5);
  assert.equal(batch028?.revisionCount, 0);
  assert.equal(batch028?.controlReviewRequired, false);
  assert.equal(batch028?.controlPreliminaryVisualReview?.status, "preliminary-pass-promotion-not-authorized");
  assert.equal(batch028?.controlFinalReview?.status, "accepted-exact-hashes");
  assert.equal(batch028?.controlFinalReview?.integratedReviewCommit, "54fa40561da12722447c7f87b06102d5b953830d");
  const batch028Candidates = batch028?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch028Candidates.map((asset) => asset.pageId), [
    "parabacteroides",
    "parabacteroides-distasonis",
    "paraprevotella",
    "parasutterella",
    "parvimonas-micra",
  ]);
  const batch028ExpectedOutputs = new Map([
    ["parabacteroides", ["NCBITaxon:375288", "20be61c163dbf7da920f6069b14fffcf568d838bd0bc5ee4401620571514e0ac", "1cc4b3d5f99b4f9fde9be00da8ad50e6135c113fdc6b6e13501edf9ff55c6cd5", 1240713, 11, 8, "cover"]],
    ["parabacteroides-distasonis", ["NCBITaxon:823", "b7db307efbe9017e9e17c63920d38ad3a520ac2a21c5875fbfdcf8060f128cd7", "da5445fe14f58726c3de0cd571f0dda9753674a93efee6ba71ee095759e656a4", 1227583, 8, 6, "cover"]],
    ["paraprevotella", ["NCBITaxon:577309", "e74f5db2d0342b4519bf0b0becd815f4be8a5af846453ce6f32c59c4032a83d6", "13cfc54663766b41db4855abfe7fc10a23b04babb427d854347c1a1d3b95b641", 1360432, 11, 9, "cover"]],
    ["parasutterella", ["NCBITaxon:577310", "822ecd047013f3403df249581f58814b6b6c81d9d1a2c2200c46019784415618", "677a02452875c7133066b9426ce285a9dc4da3e2ebc84e5a5c05dee9969778cc", 1241353, 10, 8, "cover"]],
    ["parvimonas-micra", ["NCBITaxon:33033", "ca2db51a670d4688d9c75681b8d2e9668692184021761bef24ee360dc812d648", "4abe92aded0e1827946887b9b20485f6ff59a3a284991761246a758213d0df46", 1227073, 12, 8, "cover"]],
  ]);
  const batch028PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-028.md", import.meta.url), "utf8");
  const batch028DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-028/", import.meta.url)).sort();
  assert.deepEqual(batch028DraftFileNames, [
    "parabacteroides-distasonis-draft.png",
    "parabacteroides-draft.png",
    "paraprevotella-draft.png",
    "parasutterella-draft.png",
    "parvimonas-micra-draft.png",
  ]);
  const batch028GenerationRecords = new Set();
  for (const asset of batch028Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount, expectedSocialFit] = batch028ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /retains all/);
    assert.equal(asset.socialResizeFit, expectedSocialFit);
    assert.equal(asset.socialResizePosition, "centre");
    assert.equal(asset.proposedSocialResizeFit, expectedSocialFit);
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch028GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch028GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-028");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    const draftMetadata = await sharp(draftBytes).metadata();
    assert.deepEqual([draftMetadata.width, draftMetadata.height], [1536, 1024]);

    const promptMatch = batch028PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, expectedSocialFit);
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch028GenerationRecords.size, 5);
  assert.equal(batch028Candidates.find((asset) => asset.pageId === "parabacteroides")?.outputAudit?.observedTouchingPairCount, 3);
  assert.equal(batch028Candidates.find((asset) => asset.pageId === "parabacteroides-distasonis")?.outputAudit?.observedCloseParallelTwoRodArrangementCount, 1);
  assert.equal(batch028Candidates.find((asset) => asset.pageId === "paraprevotella")?.outputAudit?.observedSingleCount, 7);
  assert.equal(batch028Candidates.find((asset) => asset.pageId === "parasutterella")?.outputAudit?.observedTouchingPairCount, 2);
  assert.equal(batch028Candidates.find((asset) => asset.pageId === "parvimonas-micra")?.outputAudit?.observedTouchingThreeCellChainCount, 1);
  assert.match(batch028PromptRecord, /Assembly of hundreds of novel bacterial genomes from the chicken caecum/);
  assert.match(batch028PromptRecord, /10\.1186\/s13059-020-1947-1/);
  assert.match(batch028PromptRecord, /10\.1099\/ijs\.0\.64192-0/);
  assert.match(batch028PromptRecord, /10\.1128\/jb\.25\.4\.389-413\.1933/);
  assert.match(batch028PromptRecord, /10\.1099\/ijs\.0\.008169-0/);
  assert.match(batch028PromptRecord, /10\.1099\/ijs\.0\.002519-0/);
  assert.match(batch028PromptRecord, /10\.1099\/ijs\.0\.64338-0/);
  assert.match(batch028PromptRecord, /10\.1099\/00207713-43-4-787/);
  const batch028Hold = batch028?.assets.find((asset) => asset.pageId === "oscillospirales");
  assert.equal(batch028Hold?.decision, "scientific-identity-hold");
  assert.equal(batch028Hold?.generationStatus, "withheld-no-call");
  assert.equal(batch028Hold?.sourceEraIdentifier, "uncontrolled-order-name:Oscillospirales");
  assert.equal(batch028Hold?.currentAcceptedName, "Eubacteriales");
  assert.equal(batch028Hold?.canonicalIdentifier, "NCBITaxon:186802");
  assert.equal(batch028Hold?.proposedCanonicalPageId, "eubacteriales");
  assert.equal(batch028Hold?.assetType, undefined);
  assert.equal(batch028Hold?.revision, undefined);
  assert.equal(batch028Hold?.draft, undefined);
  assert.equal(batch028Hold?.generationRecord, undefined);
  assert.match(batch028Hold?.reason ?? "", /not validly published/);
  assert.match(batch028Hold?.reason ?? "", /synonym without standing/);
  assert.match(batch028Hold?.requiredResolution ?? "", /permanent asset-free 308 alias/);
  assert.doesNotMatch(batch028PromptRecord, /<!-- PROMPT oscillospirales START -->/);
  assert.ok(!batch028DraftFileNames.some((name) => name.startsWith("oscillospirales-")));
  assert.equal(articleMediaRegistry.oscillospirales, undefined);
  assert.ok(articleMediaRegistry.eubacteriales);
  assert.ok(!batch025PublicMediaFiles.some((name) => name.startsWith("oscillospirales-")));
  assert.ok(!batch025MasterFiles.some((name) => name.startsWith("oscillospirales-")));
  const batch028HoldLog = reviewLog.rejectedAssets.find((asset) => asset.pageId === "oscillospirales" && asset.batchId === "microorganisms-028");
  assert.equal(batch028HoldLog?.disposition, "scientific-identity-hold");
  assert.equal(batch028HoldLog?.canonicalIdentifier, "NCBITaxon:186802");
  assert.equal(batch028HoldLog?.proposedCanonicalPageId, "eubacteriales");
  const batch029 = batches.find((batch) => batch.batchId === "microorganisms-029");
  assert.equal(batch029?.status, "reviewed");
  assert.equal(batch029?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch029?.routeDecisionCount, 6);
  assert.equal(batch029?.candidateCount, 5);
  assert.equal(batch029?.scientificHoldCount, 0);
  assert.equal(batch029?.generationCallCount, 6);
  assert.equal(batch029?.reviewableGenerationCount, 5);
  assert.equal(batch029?.quarantinedGenerationCount, 1);
  assert.equal(batch029?.revisionCount, 0);
  assert.equal(batch029?.controlReviewRequired, false);
  assert.equal(batch029?.controlPreliminaryVisualReview?.status, "preliminary-pass-five-candidates-promotion-not-authorized");
  assert.equal(batch029?.controlFinalReview?.status, "accepted-five-exact-hashes");
  assert.equal(batch029?.controlFinalReview?.acceptedReviewCommit, "c125acb114cb7fe13ff8edabc9fd62850110f605");
  assert.equal(batch029?.controlFinalReview?.integratedReviewCommit, "573790304b0871814eec760f63015b485d12779a");
  const batch029Candidates = batch029?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch029Candidates.map((asset) => asset.pageId), [
    "penicillium",
    "peptostreptococcus",
    "peptostreptococcus-anaerobius",
    "peptostreptococcus-stomatis",
    "phascolarctobacterium",
  ]);
  const batch029ExpectedOutputs = new Map([
    ["penicillium", ["NCBITaxon:5073", "5ef1997ceea314fee2c4190fce5489f90897596ada3de081e49a7fe6126a9b55", "a2c5e3804f1850c98480b03e6c5c5cb51fd563de09fdccbc3bdcc7050016c94e", 1334210, undefined, 1]],
    ["peptostreptococcus", ["NCBITaxon:1257", "ca9e390e0e3b4a8e27b7431d7b83167a8030468bd64587b09ef10808ebfa67c8", "6d6fa887f663937912b1bd217cc721ae41ab84bf2d2b72f3fb28300f40dd2d5e", 1218893, 12, 8]],
    ["peptostreptococcus-anaerobius", ["NCBITaxon:1261", "9d7b572ec6be842598d2d38cb0b871fd82e1929d474c95dcf201b0f2074d75ab", "7bd26a89215321db432120096ce09e42efd79e383203460100935dc30cb60040", 1190587, 10, 6]],
    ["peptostreptococcus-stomatis", ["NCBITaxon:341694", "19cf8659acab1804862d95746bab6e63cdb85797bca9f045686834ee1d816263", "1f013139155709ad17cff10d213b7baf732c4f4febb6bad32a7d16ddd74bc741", 1245832, 12, 7]],
    ["phascolarctobacterium", ["NCBITaxon:33024", "66800fbfe346034bb8bec0e8f434cd0dc966d6fd606debe1bb50de2cf2a671bb", "e3f44a0af5eaff6de9da6cc99f1cb298ce259b5ea15e5a341ea4dbcf4216babc", 1276067, 11, 8]],
  ]);
  const batch029PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-029.md", import.meta.url), "utf8");
  const batch029DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-029/", import.meta.url)).sort();
  assert.deepEqual(batch029DraftFileNames, [
    "penicillium-draft.png",
    "peptostreptococcus-anaerobius-draft.png",
    "peptostreptococcus-draft.png",
    "peptostreptococcus-stomatis-draft.png",
    "phascolarctobacterium-draft.png",
  ]);
  const batch029GenerationRecords = new Set();
  for (const asset of batch029Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch029ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    if (expectedBodyCount !== undefined) assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /retains/);
    assert.equal(asset.socialResizeFit, "cover");
    assert.equal(asset.socialResizePosition, "centre");
    assert.equal(asset.proposedSocialResizeFit, "cover");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch029GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch029GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-029");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    const draftMetadata = await sharp(draftBytes).metadata();
    assert.deepEqual([draftMetadata.width, draftMetadata.height], [1536, 1024]);

    const promptMatch = batch029PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch029GenerationRecords.size, 5);
  assert.equal(batch029Candidates.find((asset) => asset.pageId === "penicillium")?.outputAudit?.observedConidiophoreCount, 2);
  assert.equal(batch029Candidates.find((asset) => asset.pageId === "penicillium")?.outputAudit?.observedBrushHeadCount, 2);
  assert.equal(batch029Candidates.find((asset) => asset.pageId === "peptostreptococcus")?.outputAudit?.observedSingleCount, 5);
  assert.equal(batch029Candidates.find((asset) => asset.pageId === "peptostreptococcus-anaerobius")?.outputAudit?.observedThreeBodyChainCount, 1);
  assert.equal(batch029Candidates.find((asset) => asset.pageId === "peptostreptococcus-stomatis")?.outputAudit?.observedTouchingPairCount, 3);
  assert.equal(batch029Candidates.find((asset) => asset.pageId === "phascolarctobacterium")?.outputAudit?.observedTouchingPairCount, 3);
  assert.match(batch029PromptRecord, /Identification and nomenclature of the genus Penicillium/);
  assert.match(batch029PromptRecord, /10\.1016\/j\.simyco\.2014\.09\.001/);
  assert.match(batch029PromptRecord, /10\.1006\/anae\.2000\.0344/);
  assert.match(batch029PromptRecord, /10\.1128\/CMR\.11\.1\.81/);
  assert.match(batch029PromptRecord, /10\.1099\/ijs\.0\.64041-0/);
  assert.match(batch029PromptRecord, /10\.1016\/S0723-2020\(11\)80269-9/);
  assert.match(batch029PromptRecord, /10\.1099\/ijs\.0\.007823-0/);
  assert.match(batch029PromptRecord, /10\.3389\/fmicb\.2019\.02083/);
  const batch029Quarantine = batch029?.quarantinedGenerations?.[0];
  assert.equal(batch029Quarantine?.pageId, "phocaeicola");
  assert.equal(batch029Quarantine?.decision, "generation-rejected-scientific-interpretation-conflict");
  assert.equal(batch029Quarantine?.generationStatus, "quarantined-not-reviewable");
  assert.equal(batch029Quarantine?.rootReviewDisposition, "rejected");
  assert.equal(batch029Quarantine?.promptSha256, "5f0e9c232492506c5a3f237bccabb70c6f7d9884ddc017c641f293bf9c4dfe91");
  assert.equal(batch029Quarantine?.sha256, "32096db802a887550de5af864a0b3018c568c6ce89af7aef9b72ce06932c2921");
  assert.equal(batch029Quarantine?.fileSizeBytes, 1148636);
  assert.match(batch029Quarantine?.authorityConflict ?? "", /exopolysaccharide/);
  assert.match(batch029Quarantine?.quarantineAudit ?? "", /four visible filaments/);
  assert.match(batch029Quarantine?.retryStatus ?? "", /No retry/);
  assert.ok(!batch029GenerationRecords.has(batch029Quarantine?.generationRecord));
  batch029GenerationRecords.add(batch029Quarantine.generationRecord);
  assert.equal(batch029GenerationRecords.size, 6);
  const batch029QuarantineBytes = readFileSync(new URL(`../${batch029Quarantine.quarantinedFile}`, import.meta.url));
  assert.equal(batch029QuarantineBytes.length, 1148636);
  assert.equal(createHash("sha256").update(batch029QuarantineBytes).digest("hex"), batch029Quarantine.sha256);
  assert.equal(batch029QuarantineBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  const batch029QuarantineMetadata = await sharp(batch029QuarantineBytes).metadata();
  assert.deepEqual([batch029QuarantineMetadata.width, batch029QuarantineMetadata.height], [1536, 1024]);
  const phocaeicolaPromptMatch = batch029PromptRecord.match(/<!-- PROMPT phocaeicola START -->\n```text\n([\s\S]*?)\n```\n<!-- PROMPT phocaeicola END -->/);
  assert.ok(phocaeicolaPromptMatch);
  assert.equal(createHash("sha256").update(phocaeicolaPromptMatch[1]).digest("hex"), batch029Quarantine.promptSha256);
  assert.equal(articleMediaRegistry.phocaeicola, undefined);
  assert.ok(!batch025PublicMediaFiles.some((name) => name.startsWith("phocaeicola-")));
  assert.ok(!batch025MasterFiles.some((name) => name.startsWith("phocaeicola-")));
  const phocaeicolaQuarantineLog = reviewLog.rejectedAssets.find((asset) => asset.pageId === "phocaeicola" && asset.batchId === "microorganisms-029");
  assert.equal(phocaeicolaQuarantineLog?.disposition, "quarantined-scientific-interpretation-conflict");
  assert.equal(phocaeicolaQuarantineLog?.sha256, batch029Quarantine.sha256);
  assert.match(phocaeicolaQuarantineLog?.scientificReferenceCheck?.notes ?? "", /exopolysaccharide/);
  assert.match(phocaeicolaQuarantineLog?.subjectReview?.notes ?? "", /four visible filaments/);
  const batch030 = batches.find((batch) => batch.batchId === "microorganisms-030");
  assert.equal(batch030?.status, "reviewed");
  assert.equal(batch030?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch030?.routeDecisionCount, 6);
  assert.equal(batch030?.candidateCount, 6);
  assert.equal(batch030?.scientificHoldCount, 0);
  assert.equal(batch030?.generationCallCount, 6);
  assert.equal(batch030?.reviewableGenerationCount, 6);
  assert.equal(batch030?.quarantinedGenerationCount, 0);
  assert.equal(batch030?.revisionCount, 0);
  assert.equal(batch030?.controlReviewRequired, false);
  assert.equal(batch030?.controlPreliminaryVisualReview?.status, "preliminary-pass-six-candidates-promotion-not-authorized");
  assert.equal(batch030?.controlFinalReview?.status, "accepted-six-exact-hashes");
  assert.equal(batch030?.controlFinalReview?.acceptedReviewCommit, "7213dd53a51ba206ec74f8a212f14be227687f1a");
  assert.equal(batch030?.controlFinalReview?.integratedReviewCommit, "7213dd53a51ba206ec74f8a212f14be227687f1a");
  assert.equal(batch030?.controlAcceptedReviewManifestSha256, "7be34e193c6b8bdfcc194c2ffa5c205efa476c8b50f025c00707622a12a925e8");
  assert.equal(batch030?.controlAcceptedPromptEvidenceSha256, "800a1d010b717990f7fb9d21e0aa5e919acdafd4f71e00259b62944cc25d2a92");
  const batch030Candidates = batch030?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch030Candidates.map((asset) => asset.pageId), [
    "porphyromonas",
    "porphyromonas-bennonis",
    "porphyromonas-gingivalis",
    "prevotella",
    "prevotella-copri",
    "prevotella-intermedia",
  ]);
  const batch030ExpectedOutputs = new Map([
    ["porphyromonas", ["NCBITaxon:836", "527251880e7354df1ae32ed851cae1aa447c05a1046ec71f913613c342d622f4", "6c7ca8444c87b4b3ec9978230f837368af3678eb745eadd3347b8a7a20b4d384", 1242357, 11, 8]],
    ["porphyromonas-bennonis", ["NCBITaxon:501496", "38adeb9b67642208ae7d46c5fd0d200eb970feeb1a44f523b2f6e6aafe2aeee6", "8b8758da33cad783d2ca7077225fa19143e9e7e28866c7793e204ceee38fab42", 1146957, 9, 7]],
    ["porphyromonas-gingivalis", ["NCBITaxon:837", "6cf04917596b18f8a8a21c1c529bf15f8f650aefe1b6552e1abd90f50cff3b9f", "8bff14de1a510b071e6819a6d812925a37ae7e983c6f0a8c9e539b8de55d6b38", 1182926, 8, 6]],
    ["prevotella", ["NCBITaxon:838", "b85ee5c77f201e4a469133fcf23c9e38affb59e339b7118512c7186180f11032", "61f08154223d4620a5e85bcbaf19d03555f8e80fde1d72e607a398a24d87e16e", 1295968, 12, 8]],
    ["prevotella-copri", ["NCBITaxon:165179", "6648bd1c9670a8babd71146762542aecd93d1e2c0c2cc2940bb13c8f31665c48", "44d4e85c2b68d1b08a11b925872cc36dbf24345c3d6c4605fa3e7d5652d03181", 1129382, 10, 8]],
    ["prevotella-intermedia", ["NCBITaxon:28131", "10522987e1ca3ee7de42dc0e3e4e8c0e6f3171fec52f0216eed847c79e8b5152", "d388aa48e029941b8466269da2dc4a0fd8c0a0e10812c9caf3970f9fb223bbb2", 1223346, 9, 7]],
  ]);
  const batch030PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-030.md", import.meta.url), "utf8");
  const batch030DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-030/", import.meta.url)).sort();
  assert.deepEqual(batch030DraftFileNames, [
    "porphyromonas-bennonis-draft.png",
    "porphyromonas-draft.png",
    "porphyromonas-gingivalis-draft.png",
    "prevotella-copri-draft.png",
    "prevotella-draft.png",
    "prevotella-intermedia-draft.png",
  ]);
  const batch030GenerationRecords = new Set();
  for (const asset of batch030Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch030ExpectedOutputs.get(asset.pageId);
    assert.match(asset.decision, /^approved-after-output-audit/);
    assert.equal(asset.generationStatus, "complete-single-call");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /retains/);
    assert.equal(asset.proposedSocialResizeFit, "cover");
    assert.equal(asset.socialResizeFit, "cover");
    assert.equal(asset.socialResizePosition, "centre");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch030GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch030GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-030");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    const draftMetadata = await sharp(draftBytes).metadata();
    assert.deepEqual([draftMetadata.width, draftMetadata.height], [1536, 1024]);

    const promptMatch = batch030PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch030GenerationRecords.size, 6);
  assert.equal(batch030Candidates.find((asset) => asset.pageId === "porphyromonas")?.outputAudit?.observedSingleCount, 5);
  assert.equal(batch030Candidates.find((asset) => asset.pageId === "prevotella")?.outputAudit?.observedTouchingPairCount, 4);
  const batch030Copri = batch030Candidates.find((asset) => asset.pageId === "prevotella-copri");
  assert.match(batch030Copri?.authorityDisplayDiscrepancy ?? "", /LPSN treats Prevotella copri/);
  assert.match(batch030Copri?.authorityDisplayDiscrepancy ?? "", /NCBI displays.*Segatella copri/);
  assert.match(articleMediaRegistry["prevotella-copri"]?.caption ?? "", /LPSN treats Prevotella copri/);
  assert.match(articleMediaRegistry["prevotella-copri"]?.caption ?? "", /NCBI displays.*Segatella copri/);
  assert.match(reviewLog.reviews[articleMediaRegistry["prevotella-copri"]?.reviewLogKey]?.scientificReferenceCheck?.notes ?? "", /LPSN.*NCBI.*Segatella copri/);
  assert.equal(batch030Copri?.outputAudit?.observedSingleCount, 6);
  assert.match(batch030Candidates.find((asset) => asset.pageId === "prevotella-intermedia")?.outputAudit?.promptDeviation ?? "", /one fewer body/i);
  assert.match(batch030PromptRecord, /10\.1099\/00207713-38-1-128/);
  assert.match(batch030PromptRecord, /10\.1099\/ijs\.0\.001909-0/);
  assert.match(batch030PromptRecord, /10\.1099\/00207713-40-2-205/);
  assert.match(batch030PromptRecord, /10\.1099\/ijs\.0\.64778-0/);
  assert.match(batch030PromptRecord, /10\.1099\/00207713-45-3-429/);
  assert.doesNotMatch(batch030PromptRecord, /<!-- PROMPT phocaeicola START -->/);
  assert.equal(batch030?.excludedPriorQuarantine?.pageId, "phocaeicola");
  assert.equal(batch030?.excludedPriorQuarantine?.sha256, batch029Quarantine.sha256);
  assert.equal(articleMediaRegistry.phocaeicola, undefined);
  const batch031 = batches.find((batch) => batch.batchId === "microorganisms-031");
  assert.equal(batch031?.status, "reviewed");
  assert.equal(batch031?.authorizedParent, "5a68dae126e39891faace6bb8b376763c1ff6ddf");
  assert.equal(batch031?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch031?.routeDecisionCount, 6);
  assert.equal(batch031?.candidateCount, 6);
  assert.equal(batch031?.scientificHoldCount, 0);
  assert.equal(batch031?.generationCallCount, 6);
  assert.equal(batch031?.reviewableGenerationCount, 6);
  assert.equal(batch031?.quarantinedGenerationCount, 0);
  assert.equal(batch031?.revisionCount, 0);
  assert.equal(batch031?.controlReviewRequired, false);
  assert.equal(batch031?.controlPreliminaryVisualReview?.status, "preliminary-pass-six-candidates-promotion-not-authorized");
  assert.match(batch031?.controlPreliminaryVisualReview?.notes ?? "", /exactly one stalk/);
  assert.equal(batch031?.controlFinalReview?.status, "accepted-six-exact-hashes");
  assert.equal(batch031?.controlFinalReview?.acceptedReviewCommit, "253bf91c543d482a928b59d755f8aad8f68d2f00");
  assert.equal(batch031?.controlFinalReview?.integratedReviewCommit, "253bf91c543d482a928b59d755f8aad8f68d2f00");
  assert.equal(batch031?.controlSocialCropReview?.status, "accepted-six-centered-cover-derivatives");
  assert.match(batch031?.controlSocialCropReview?.notes ?? "", /single Pseudomonadota stalk/);
  assert.equal(batch031?.controlAcceptedReviewManifestSha256, "285f8ca681ba86ed7a5d4edbf276a57724b596cf2608323ba4210e9f3dc4448b");
  assert.equal(batch031?.controlAcceptedPromptEvidenceSha256, "2b1cf8a1e4dcae3de995dfe9a5f5764928845c85f13d5c029e1b60e38f59c6c5");
  assert.equal(batch031?.excludedPriorQuarantine?.pageId, "phocaeicola");
  assert.equal(batch031?.excludedPriorQuarantine?.sha256, batch029Quarantine.sha256);
  assert.deepEqual(batch031?.preservedScientificHolds, [
    "lachnoclostridium",
    "lachnospiraceae-family",
    "lactobacillus-plantarum",
    "lactobacillus-reuteri",
    "lactobacillus-rhamnosus",
    "mycoplasma-hominis",
    "oscillospirales",
  ]);
  const batch031Candidates = batch031?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch031Candidates.map((asset) => asset.pageId), [
    "prevotellaceae",
    "propionibacterium",
    "proteobacteria",
    "proteus",
    "proteus-mirabilis",
    "pseudomonas",
  ]);
  const batch031ExpectedOutputs = new Map([
    ["prevotellaceae", ["NCBITaxon:171552", "7a55f54d59663266f953ea6e50dfa1c93a4259d44b3d2e3bda652198c10a47ec", "703c21dcac8ea686072a0901d3fb7b49c34e6115fea8be27147af34d46708a48", 1350452, 13, 9]],
    ["propionibacterium", ["NCBITaxon:1743", "0073ce58089fcfdbd304ba54606f48f4acb0a8296a70ef422ddd89b2bd799c1c", "ca72e2e2b9039756f3810fed4382d08b1e9eb6d63fdb9d612f011d632aecf5c1", 1279479, 9, 6]],
    ["proteobacteria", ["NCBITaxon:1224", "fac97b789d9feebaca4342c8b765f3873f986bfa35fa367a25201f687cf5e426", "4afcdeda68c35a1c435e7cf729ad896a8a5bfc2383c54107db767a1ac9ec95e6", 1233037, 11, 7]],
    ["proteus", ["NCBITaxon:583", "035eda829c98889aa35a58aa5a09a105a0a60e69cdf99db655eb74240adaa97d", "a0afe46ddd2bc97a69e6764e921e61d8889a77b5fb657ae79a17abeb8651387d", 1115655, 9, 7]],
    ["proteus-mirabilis", ["NCBITaxon:584", "a297838b479f4870a1fd370872509849a729a359c683a3faaf4d064369cd1d7b", "8b3354c43708de55a672aa5ad47aceb81085cc1ba48fe51482c0b899abf2978f", 1248934, 9, 7]],
    ["pseudomonas", ["NCBITaxon:286", "74d3a5c801714831549bc83312690b87fcdfb3d4b0cd3ad34ed751fc8bc5b9e5", "705266270572ff961d3b71f7aa61df7a3d75bc2c2591e8b0300785356a1d0729", 1145212, 9, 7]],
  ]);
  const batch031PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-031.md", import.meta.url), "utf8");
  const batch031DraftFileNames = readdirSync(new URL("../work/media-drafts/microorganisms-batch-031/", import.meta.url)).sort();
  assert.deepEqual(batch031DraftFileNames, [
    "prevotellaceae-draft.png",
    "propionibacterium-draft.png",
    "proteobacteria-draft.png",
    "proteus-draft.png",
    "proteus-mirabilis-draft.png",
    "pseudomonas-draft.png",
  ]);
  const batch031GenerationRecords = new Set();
  for (const asset of batch031Candidates) {
    const [expectedIdentifier, expectedPromptSha256, expectedSha256, expectedFileSize, expectedBodyCount, expectedGroupingCount] = batch031ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.generationStatus, "complete-single-call");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, expectedIdentifier);
    assert.equal(asset.promptSha256, expectedPromptSha256);
    assert.equal(asset.sha256, expectedSha256);
    assert.equal(asset.fileSizeBytes, expectedFileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, expectedBodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, expectedGroupingCount);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.equal(asset.outputAudit?.metadataConsistency, "pass");
    assert.match(asset.outputAudit?.proposedSocialCropAudit ?? "", /retains/);
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /Control Tower accepted/);
    assert.equal(asset.proposedSocialResizeFit, "cover");
    assert.equal(asset.socialResizeFit, "cover");
    assert.equal(asset.socialResizePosition, "centre");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch031GenerationRecords.has(asset.generationRecord), `${asset.pageId} must own one distinct generation record`);
    batch031GenerationRecords.add(asset.generationRecord);
    assertMediaOutputAudit(asset, "microorganisms-031");

    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, expectedFileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), expectedSha256);
    assert.equal(draftBytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    const draftMetadata = await sharp(draftBytes).metadata();
    assert.deepEqual([draftMetadata.width, draftMetadata.height], [1536, 1024]);

    const promptMatch = batch031PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), expectedPromptSha256);

    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, expectedSha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(expectedIdentifier));
  }
  assert.equal(batch031GenerationRecords.size, 6);
  assert.equal(batch031Candidates.find((asset) => asset.pageId === "prevotellaceae")?.outputAudit?.observedSingleCount, 5);
  assert.match(batch031Candidates.find((asset) => asset.pageId === "prevotellaceae")?.outputAudit?.promptDeviation ?? "", /Two additional isolated singles/);
  assert.equal(batch031Candidates.find((asset) => asset.pageId === "proteobacteria")?.outputAudit?.observedVisibleStalkCount, 1);
  assert.equal(batch031Candidates.find((asset) => asset.pageId === "proteus-mirabilis")?.outputAudit?.observedModestlyElongatedRodCount, 2);
  assert.match(batch031Candidates.find((asset) => asset.pageId === "proteus-mirabilis")?.outputAudit?.promptDeviation ?? "", /One additional short-to-moderate isolated rod/);
  assert.match(batch031PromptRecord, /10\.1099\/00207713-40-2-205/);
  assert.match(batch031PromptRecord, /10\.1099\/ijs\.0\.008169-0/);
  assert.match(batch031PromptRecord, /10\.1099\/ijsem\.0\.001367/);
  assert.match(batch031PromptRecord, /10\.1128\/AEM\.67\.5\.2029-2036\.2001/);
  assert.match(batch031PromptRecord, /10\.1099\/ijsem\.0\.005056/);
  assert.match(batch031PromptRecord, /10\.1099\/ijsem\.0\.001002/);
  assert.doesNotMatch(batch031PromptRecord, /<!-- PROMPT phocaeicola START -->/);
  assert.equal(articleMediaRegistry.phocaeicola, undefined);
  const batch032 = batches.find((batch) => batch.batchId === "microorganisms-032");
  assert.equal(batch032?.status, "reviewed");
  assert.equal(batch032?.authorizedParent, "ab2ecb0a7146e7a2e85ca491c9c88e2da9e98ef1");
  assert.equal(batch032?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch032?.routeDecisionCount, 6);
  assert.equal(batch032?.candidateCount, 6);
  assert.equal(batch032?.scientificHoldCount, 0);
  assert.equal(batch032?.generationCallCount, 6);
  assert.equal(batch032?.reviewableGenerationCount, 6);
  assert.equal(batch032?.quarantinedGenerationCount, 0);
  assert.equal(batch032?.revisionCount, 0);
  assert.equal(batch032?.controlReviewRequired, false);
  assert.equal(batch032?.controlPreliminaryVisualReview?.status, "preliminary-pass-six-candidates-promotion-not-authorized");
  assert.equal(batch032?.controlFinalReview?.status, "accepted-six-exact-hashes");
  assert.equal(batch032?.controlFinalReview?.acceptedReviewCommit, "66c54c6d43190091ff1655ce23a215626d36118e");
  assert.equal(batch032?.controlFinalReview?.integratedReviewCommit, "66c54c6d43190091ff1655ce23a215626d36118e");
  assert.equal(batch032?.controlSocialCropReview?.status, "accepted-five-centered-cover-one-contained-derivatives");
  assert.match(batch032?.controlSocialCropReview?.notes ?? "", /all four phialides, and all twelve conidia/);
  assert.equal(batch032?.controlAcceptedReviewManifestSha256, "b85d2bed4dc3c649c458f5b3d6448894845fe370d7c0451995a8ed621f3d474c");
  assert.equal(batch032?.controlAcceptedPromptEvidenceSha256, "1ddc2f8ee9ab2cdf0159db176f1994631245a01f6cecbe67b523edf8a94ce8d2");
  const batch032Candidates = batch032?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch032Candidates.map((asset) => asset.pageId), [
    "pseudomonas-aeruginosa",
    "purpureocillium",
    "ralstonia",
    "rikenella",
    "roseburia",
    "roseburia-intestinalis",
  ]);
  const batch032ExpectedOutputs = new Map([
    ["pseudomonas-aeruginosa", ["NCBITaxon:287", "048b7e1b33c82e70d5206813fae58e9e26473e6a01c86f1b41fcf13ff519d771", "182b991b4390d7829e9393e75256a5bfedcb42c7a031cc694fc4eca0e90543b9", 1161914, 8, 6]],
    ["purpureocillium", ["NCBITaxon:1052105", "1b650361f9c345e7cfe82a613d6dc60d2cca9eecadcadbb51b7e54b82962fc35", "75df06d8b9c45726272b89bc3adc20c6a553cf0a8f170f0d7bf5146eb2c1076b", 1125258, 12, 2]],
    ["ralstonia", ["NCBITaxon:48736", "54ab9d4f5a6e0ec38ad3b5bd37d9fa6c068847beafc2e3d8918da5bcec585426", "dcba7131c29f52e8f7a9f0819219b56c936d562f53fd03c9f016cdbee6766c63", 1290815, 10, 8]],
    ["rikenella", ["NCBITaxon:28138", "fd7449d895dc7d05b68401424a0198cc646cd74df4e01939496e008f62cae527", "fa982e47e9972e446e69c933a22f4e75440271c447055f932440ab9d0cc78e96", 1223680, 10, 8]],
    ["roseburia", ["NCBITaxon:841", "789bf703a8c4e709fd1f48ddd882265fb415817e9c3328150e5eb9794d19b9fc", "cb37815856e831529554f5dfbe0a57ba265c9406ff7ebfa5cce8960b80d75876", 1233956, 10, 8]],
    ["roseburia-intestinalis", ["NCBITaxon:166486", "0ee7ce62781e6cc786f9afd73da338d51acd45e5052d36237fec1f4166adac41", "e3f4bba84fedb5be866883415318df2007d1a6dbf3470ea65a7fdb2de4d05463", 1171296, 9, 7]],
  ]);
  const batch032PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-032.md", import.meta.url), "utf8");
  assert.deepEqual(readdirSync(new URL("../work/media-drafts/microorganisms-batch-032/", import.meta.url)).sort(), [
    "pseudomonas-aeruginosa-draft.png",
    "purpureocillium-draft.png",
    "ralstonia-draft.png",
    "rikenella-draft.png",
    "roseburia-draft.png",
    "roseburia-intestinalis-draft.png",
  ]);
  const batch032GenerationRecords = new Set();
  for (const asset of batch032Candidates) {
    const [identifier, promptSha256, sha256, fileSize, bodyCount, groupingCount] = batch032ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.generationStatus, "complete-single-call");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, identifier);
    assert.equal(asset.promptSha256, promptSha256);
    assert.equal(asset.sha256, sha256);
    assert.equal(asset.fileSizeBytes, fileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, bodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, groupingCount);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /Control Tower approved/);
    assertMediaOutputAudit(asset, "microorganisms-032");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch032GenerationRecords.has(asset.generationRecord));
    batch032GenerationRecords.add(asset.generationRecord);
    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, fileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), sha256);
    const metadata = await sharp(draftBytes).metadata();
    assert.deepEqual([metadata.width, metadata.height], [1536, 1024]);
    const promptMatch = batch032PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), promptSha256);
    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, asset.socialResizeFit);
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile), `${asset.pageId} must have a public article derivative`);
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile), `${asset.pageId} must have a public social derivative`);
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource), `${asset.pageId} must have a canonical master`);
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)), `${asset.pageId} review draft path must not become public`);
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, sha256);

    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);

    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`name="twitter:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(identifier));
  }
  assert.equal(batch032GenerationRecords.size, 6);
  assert.equal(batch032Candidates.find((asset) => asset.pageId === "purpureocillium")?.outputAudit?.observedPhialideCount, 4);
  assert.equal(batch032Candidates.find((asset) => asset.pageId === "purpureocillium")?.outputAudit?.observedConidiumCount, 12);
  assert.match(batch032PromptRecord, /10\.1111\/j\.1574-6968\.2011\.02322\.x/);
  assert.match(batch032PromptRecord, /10\.1111\/j\.1348-0421\.1995\.tb03275\.x/);
  assert.match(batch032PromptRecord, /10\.1016\/S0723-2020\(85\)80015-1/);
  assert.match(batch032PromptRecord, /10\.1099\/00207713-33-3-618/);
  assert.match(batch032PromptRecord, /10\.1099\/00207713-52-5-1615/);
  assert.deepEqual(program.nextBatch.map((record) => record.id), [
    "phocaeicola",
    "sphingobium",
    "sphingomonas",
    "staphylococcus",
    "staphylococcus-aureus",
    "staphylococcus-epidermidis",
  ]);
  assert.equal(program.current.completed, 192);
  assert.equal(program.current.remaining, 518);
  assert.equal(program.current.rejected, 27);
  assert.equal(program.current.revised, 11);
  assert.equal(program.current.inReview, 0);
  assert.equal(program.current.scientificHolds, 11);
  const activeReviewStatuses = new Set(["awaiting-control-review", "approved-awaiting-promotion"]);
  const pendingAssets = batches
    .filter((batch) => activeReviewStatuses.has(batch.status))
    .flatMap((batch) => batch.assets.filter((asset) => asset.assetType && asset.revision && asset.draft));
  const pendingIds = pendingAssets.map((asset) => asset.pageId);
  const publishedMediaFiles = readdirSync(new URL("../public/media-files/", import.meta.url));
  assert.equal(program.current.inReview, pendingIds.length);
  for (const asset of pendingAssets) {
    const id = asset.pageId;
    const expectedFiles = articleMediaFileNames(id, asset.assetType, asset.revision);
    assert.equal(program.queue.find((record) => record.id === id)?.status, "in-review", `${id} remains explicitly in review`);
    assert.equal(articleMediaRegistry[id], undefined, `${id} must not enter the reviewed registry before approval`);
    assert.ok(!publishedMediaFiles.includes(expectedFiles.publishedFile), `${id} draft must not enter public article media files`);
    assert.ok(!publishedMediaFiles.includes(expectedFiles.socialFile), `${id} draft must not enter public social media files`);
  }
  const batch033 = batches.find((batch) => batch.batchId === "microorganisms-033");
  assert.equal(batch033?.status, "reviewed");
  assert.equal(batch033?.authorizedParent, "4607d41ffd3dae563013849cc56374b896c37c17");
  assert.equal(batch033?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch033?.routeDecisionCount, 6);
  assert.equal(batch033?.candidateCount, 3);
  assert.equal(batch033?.scientificHoldCount, 3);
  assert.equal(batch033?.generationCallCount, 3);
  assert.equal(batch033?.reviewableGenerationCount, 3);
  assert.equal(batch033?.quarantinedGenerationCount, 0);
  assert.equal(batch033?.revisionCount, 0);
  assert.equal(batch033?.controlReviewRequired, false);
  assert.equal(batch033?.controlFinalReview?.status, "accepted-three-exact-hashes");
  assert.equal(batch033?.controlFinalReview?.acceptedReviewCommit, "3cb45191eb83dfe815aa3dd382ab6615321d5764");
  assert.equal(batch033?.controlFinalReview?.integratedReviewCommit, "3cb45191eb83dfe815aa3dd382ab6615321d5764");
  assert.equal(batch033?.controlSocialCropReview?.status, "accepted-three-centered-cover-derivatives");
  assert.equal(batch033?.controlAcceptedReviewManifestSha256, "4e20edc53b1191e0454b15364d491386458953c6524fc8c4ce447e41bd775f9c");
  assert.equal(batch033?.controlAcceptedPromptEvidenceSha256, "fc462f1410b63b4a7afb2abcb69e4f6cd5b423b35a779e6e41b5f2210addca6d");
  const batch033Candidates = batch033?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch033Candidates.map((asset) => asset.pageId), ["rothia", "ruminococcus", "ruminococcus-bromii"]);
  const batch033ExpectedOutputs = new Map([
    ["rothia", ["NCBITaxon:32207", "812f372a4731bc95e4799cc1d00985864c5fa5fcbcdd56b4751307ae479c2f66", "bd1dccff45991f983c13c48a9ba115112fc09c254697b5c23b005662902ec6e1", 1350597, 11, 8]],
    ["ruminococcus", ["NCBITaxon:1263", "c7b88f69419d206450f8a1aeb98318c3d4e7161615a403c61968d1984a4d25e8", "b9adc04842e8c7d68d49326d71da274d981b46a1b5967abb16395cff94787390", 1181278, 11, 7]],
    ["ruminococcus-bromii", ["NCBITaxon:40518", "feda8708bd09f6d7bd5bbe1e324aaf3977b4c0e2370a081760ce9b5f3d56b5e9", "8c00d3f7f5bab64d07aa0983f3dc66bf109378622fdf7ba511025dd7e1b53fe5", 1241515, 11, 8]],
  ]);
  const batch033PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-033.md", import.meta.url), "utf8");
  assert.deepEqual(readdirSync(new URL("../work/media-drafts/microorganisms-batch-033/", import.meta.url)).sort(), [
    "rothia-draft.png",
    "ruminococcus-bromii-draft.png",
    "ruminococcus-draft.png",
  ]);
  const batch033GenerationRecords = new Set();
  for (const asset of batch033Candidates) {
    const [identifier, promptSha256, sha256, fileSize, bodyCount, groupingCount] = batch033ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.generationStatus, "complete-single-call");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, identifier);
    assert.equal(asset.promptSha256, promptSha256);
    assert.equal(asset.sha256, sha256);
    assert.equal(asset.fileSizeBytes, fileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, bodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, groupingCount);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /Control Tower approved/);
    assertMediaOutputAudit(asset, "microorganisms-033");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch033GenerationRecords.has(asset.generationRecord));
    batch033GenerationRecords.add(asset.generationRecord);
    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, fileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), sha256);
    const metadata = await sharp(draftBytes).metadata();
    assert.deepEqual([metadata.width, metadata.height], [1536, 1024]);
    const promptMatch = batch033PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), promptSha256);
    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile));
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile));
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource));
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)));
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, sha256);
    assert.deepEqual(new Set(review.scientificReferenceCheck.checkedUrls), new Set(media.scientificReferences.map((reference) => reference.url)));
    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);
    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(identifier));
  }
  assert.equal(batch033GenerationRecords.size, 3);
  assert.equal(batch033Candidates.find((asset) => asset.pageId === "rothia")?.outputAudit?.observedShortRodCount, 6);
  assert.equal(batch033Candidates.find((asset) => asset.pageId === "rothia")?.outputAudit?.observedOvoidCoccoidCount, 5);
  assert.match(batch033Candidates.find((asset) => asset.pageId === "rothia")?.outputAudit?.promptDeviation ?? "", /One additional compact ovoid single/);
  assert.equal(batch033Candidates.find((asset) => asset.pageId === "ruminococcus")?.outputAudit?.observedThreeBodyChainCount, 1);
  assert.match(batch033PromptRecord, /10\.1128\/am\.17\.1\.150-156\.1969/);
  assert.match(batch033PromptRecord, /10\.1099\/mgen\.0\.000099/);
  assert.match(batch033PromptRecord, /10\.1099\/00207713-22-2-78/);
  assert.doesNotMatch(batch033PromptRecord, /<!-- PROMPT (ruminococcaceae|ruminococcus-albus|ruminococcus-gnavus) START -->/);
  const batch034 = batches.find((batch) => batch.batchId === "microorganisms-034");
  assert.equal(batch034?.status, "reviewed");
  assert.equal(batch034?.authorizedParent, "3bfb732476b051ad5fb450b3c5f93638e386bea8");
  assert.equal(batch034?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch034?.routeDecisionCount, 6);
  assert.equal(batch034?.candidateCount, 5);
  assert.equal(batch034?.scientificHoldCount, 1);
  assert.equal(batch034?.generationCallCount, 5);
  assert.equal(batch034?.reviewableGenerationCount, 5);
  assert.equal(batch034?.quarantinedGenerationCount, 0);
  assert.equal(batch034?.revisionCount, 0);
  assert.equal(batch034?.controlReviewRequired, false);
  assert.equal(batch034?.controlFinalReview?.status, "accepted-five-exact-hashes");
  assert.equal(batch034?.controlFinalReview?.acceptedReviewCommit, "48a3170d2773785925269a6b2d2d4001294a9aa2");
  assert.equal(batch034?.controlFinalReview?.integratedReviewCommit, "48a3170d2773785925269a6b2d2d4001294a9aa2");
  assert.equal(batch034?.controlSocialCropReview?.status, "accepted-five-centered-cover-derivatives");
  assert.equal(batch034?.controlAcceptedReviewManifestSha256, "6d368f903334a346f6e44ea29419e9dd52e8ea43df65374e1f53294b0933cf2d");
  assert.equal(batch034?.controlAcceptedPromptEvidenceSha256, "2474a656ff9ad7e09bd1c5d1f46dc24c640a7dc8bb455f86bf28c3a976511db6");
  const batch034Candidates = batch034?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch034Candidates.map((asset) => asset.pageId), [
    "saccharomyces",
    "saccharomyces-cerevisiae",
    "salmonella",
    "salmonella-typhimurium",
    "selenomonas",
  ]);
  const batch034ExpectedOutputs = new Map([
    ["saccharomyces", ["NCBITaxon:4930", "23c57afe0f9542c09793c09b379dd1592bcbd3cdb7948f7b95a7e32366ed45cb", "00d22676c8cc49be8478547aece169f55b6e967def982de05b194f16335641a8", 1444268, 10, 7]],
    ["saccharomyces-cerevisiae", ["NCBITaxon:4932", "ae6d38cc358f506458aa9d5f5d956585ecb2457849737becc16fabaa315b60da", "4f1199e465c5880cd5a5fa051cf13a503ea0c026f386403e3949daabd4653030", 1373365, 9, 7]],
    ["salmonella", ["NCBITaxon:590", "31b95ed4de6b4bfefa095c5d301f12c6efc07573857ff912445311270f708500", "c2c3e98c96e1f7b8ddeda5d2474c955df2f16ca14c27f163dcb003ef9d3d973a", 1176931, 9, 7]],
    ["salmonella-typhimurium", ["NCBITaxon:90371", "603b86c4e4dd7ee70aef57d2079812e6820ba377a7db7e4a430aa1baa92103fa", "cb52fe38bd2b5bdb10e2bdf78faa60883560a87e3bbc36be2325f9e37b53d51f", 1267871, 8, 6]],
    ["selenomonas", ["NCBITaxon:970", "5050c6e0792799f3cc90382313345eeeeb59da2e5c1f073bbbde45ede0c911b2", "c9f0d228cce8006438527b4e3ac6960883e97eef09d03d196debda927778676b", 1305537, 7, 7]],
  ]);
  const batch034PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-034.md", import.meta.url), "utf8");
  assert.deepEqual(readdirSync(new URL("../work/media-drafts/microorganisms-batch-034/", import.meta.url)).sort(), [
    "saccharomyces-cerevisiae-draft.png",
    "saccharomyces-draft.png",
    "salmonella-draft.png",
    "salmonella-typhimurium-draft.png",
    "selenomonas-draft.png",
  ]);
  const batch034GenerationRecords = new Set();
  for (const asset of batch034Candidates) {
    const [identifier, promptSha256, sha256, fileSize, bodyCount, groupingCount] = batch034ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.generationStatus, "complete-single-call");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, identifier);
    assert.equal(asset.promptSha256, promptSha256);
    assert.equal(asset.sha256, sha256);
    assert.equal(asset.fileSizeBytes, fileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, bodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, groupingCount);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /Control Tower approved/);
    assertMediaOutputAudit(asset, "microorganisms-034");
    assert.match(asset.generationRecord, /^exec-[0-9a-f-]+\.png$/);
    assert.ok(!batch034GenerationRecords.has(asset.generationRecord));
    batch034GenerationRecords.add(asset.generationRecord);
    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, fileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), sha256);
    const metadata = await sharp(draftBytes).metadata();
    assert.deepEqual([metadata.width, metadata.height], [1536, 1024]);
    const promptMatch = batch034PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), promptSha256);
    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile));
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile));
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource));
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)));
    assert.ok(!media.src.includes("work/media-drafts"));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.scientificReferenceCheck?.status, "pass");
    assert.equal(review?.subjectReview?.status, "pass");
    assert.equal(review?.accessibilityReview?.status, "pass");
    assert.equal(review?.revisionLinkage?.sourceSha256, sha256);
    assert.deepEqual(new Set(review.scientificReferenceCheck.checkedUrls), new Set(media.scientificReferences.map((reference) => reference.url)));
    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([
      sharp(draftBytes).removeAlpha().raw().toBuffer(),
      sharp(masterBytes).removeAlpha().raw().toBuffer(),
    ]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);
    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(identifier));
  }
  assert.equal(batch034GenerationRecords.size, 5);
  assert.equal(batch034Candidates.find((asset) => asset.pageId === "selenomonas")?.outputAudit?.observedVisibleFilamentCount, 9);
  assert.match(batch034Candidates.find((asset) => asset.pageId === "selenomonas")?.outputAudit?.promptDeviation ?? "", /upper bundle contains five/);
  assert.doesNotMatch(batch034PromptRecord, /<!-- PROMPT saccharomyces-boulardii START -->/);
  const batch034Hold = batch034?.assets.find((asset) => asset.pageId === "saccharomyces-boulardii");
  assert.equal(batch034Hold?.decision, "scientific-identity-hold");
  assert.equal(batch034Hold?.generationStatus, "withheld-no-call");
  assert.equal(batch034Hold?.canonicalIdentifier, "NCBITaxon:4932");
  const batch035 = batches.find((batch) => batch.batchId === "microorganisms-035");
  assert.equal(batch035?.status, "reviewed");
  assert.equal(batch035?.authorizedParent, "a69f0ddc548801bdd9d34e5a321c066165522be3");
  assert.equal(batch035?.publicationMetadataPlan?.reviewOnly, false);
  assert.equal(batch035?.routeDecisionCount, 6);
  assert.equal(batch035?.candidateCount, 6);
  assert.equal(batch035?.scientificHoldCount, 0);
  assert.equal(batch035?.generationCallCount, 6);
  assert.equal(batch035?.reviewableGenerationCount, 6);
  assert.equal(batch035?.controlReviewRequired, false);
  assert.equal(batch035?.controlFinalReview?.status, "accepted-six-exact-hashes");
  assert.equal(batch035?.controlFinalReview?.acceptedReviewCommit, "9f4607093260370d35255aa46398b1a93b9afab2");
  assert.equal(batch035?.controlFinalReview?.integratedReviewCommit, "9f4607093260370d35255aa46398b1a93b9afab2");
  assert.equal(batch035?.controlSocialCropReview?.status, "accepted-six-centered-cover-derivatives");
  assert.equal(batch035?.controlAcceptedReviewManifestSha256, "ca0f8ddab0b92e38c9d793a136115fe21c7fd1dd2c93ea0212f00694d8328655");
  assert.equal(batch035?.controlAcceptedPromptEvidenceSha256, "81435a18796c857ffb6d5114b7bca6aeba5aae9c785c553f54d762966a79b9d6");
  const batch035Candidates = batch035?.assets.filter((asset) => asset.assetType && asset.revision) ?? [];
  assert.deepEqual(batch035Candidates.map((asset) => asset.pageId), ["senegalimassilia", "serratia", "serratia-marcescens", "shigella", "shigella-flexneri", "sneathia"]);
  const batch035ExpectedOutputs = new Map([
    ["senegalimassilia", ["NCBITaxon:1473205", "059ef863514b65818e85af17fb8d599bd6447d40ba4434407894e0624cc5fe4b", "047eb81dbd58fc5f647ace765bdf4015735738940f6659f308a4466e63c47d5f", 1224301, 11, 9]],
    ["serratia", ["NCBITaxon:613", "aea3f6d47a02fc191e110f0e77f33d0bda7e2771313c80704d4876e7a66403a7", "fc5139fe66350f09fc036b401c6bcc341ac2e5058fcd00fa4686424a43d4d640", 1241125, 9, 7]],
    ["serratia-marcescens", ["NCBITaxon:615", "55749d5ea6f0c40ac5bb6034ad3cd5559686aec3a6887a2fe3a4680d41603ae5", "2161208965352ae763604abc92f09e2afa58c89b3f8f86126ad234c19cd10ec4", 1276803, 9, 7]],
    ["shigella", ["NCBITaxon:620", "4402a66cee1db032450532849cbd4dd616ae91ad0b2873f97e271c1fa246d298", "b8d142d732b3b2da5d766e85095e521ded80c2b929df87ae84fe55e0a411b275", 1174999, 11, 9]],
    ["shigella-flexneri", ["NCBITaxon:623", "e19d96f1d1e3191322097bbe1feb07ddadada4cba637844856ec8b30aaed87f5", "1258b982a7db0a3ae7709670696b1c236d19329a0796f1b51968cdc7b2c562b1", 1246817, 9, 7]],
    ["sneathia", ["NCBITaxon:168808", "70ca7ce3e2ef2187e590a520f61bcec50b82c2d26579db4dee5354167a25afbc", "d2f166c3f287aa792945bc3cc0865cad7d2802449f011d409328bc64cfae0a00", 1203620, 7, 7]],
  ]);
  const batch035PromptRecord = readFileSync(new URL("../docs/operations/media-prompts/microorganisms-035.md", import.meta.url), "utf8");
  const batch035GenerationRecords = new Set();
  for (const asset of batch035Candidates) {
    const [identifier, promptSha256, sha256, fileSize, bodyCount, groupingCount] = batch035ExpectedOutputs.get(asset.pageId);
    assert.equal(asset.decision, "approved-after-output-audit");
    assert.equal(asset.generationStatus, "complete-single-call");
    assert.equal(asset.rootReviewDisposition, "accepted");
    assert.equal(asset.controlledIdentifier, identifier);
    assert.equal(asset.promptSha256, promptSha256);
    assert.equal(asset.sha256, sha256);
    assert.equal(asset.fileSizeBytes, fileSize);
    assert.deepEqual(asset.dimensions, { width: 1536, height: 1024 });
    assert.equal(asset.outputAudit?.observedVisibleBodyCount, bodyCount);
    assert.equal(asset.outputAudit?.observedSpatialGroupingCount, groupingCount);
    assert.equal(asset.outputAudit?.outerBackgroundDarkPixelCountBelowLuma128, 0);
    assert.equal(asset.outputAudit?.coverSafe, true);
    assert.match(asset.outputAudit?.publishedSocialCropAudit ?? "", /Control Tower approved/);
    assertMediaOutputAudit(asset, "microorganisms-035");
    assert.ok(!batch035GenerationRecords.has(asset.generationRecord));
    batch035GenerationRecords.add(asset.generationRecord);
    const draftBytes = readFileSync(new URL(`../${asset.draft}`, import.meta.url));
    assert.equal(draftBytes.length, fileSize);
    assert.equal(createHash("sha256").update(draftBytes).digest("hex"), sha256);
    const metadata = await sharp(draftBytes).metadata();
    assert.deepEqual([metadata.width, metadata.height], [1536, 1024]);
    const promptMatch = batch035PromptRecord.match(new RegExp("<!-- PROMPT " + asset.pageId + " START -->\\n```text\\n([\\s\\S]*?)\\n```\\n<!-- PROMPT " + asset.pageId + " END -->"));
    assert.ok(promptMatch, `${asset.pageId} exact immutable prompt must remain recoverable`);
    assert.equal(createHash("sha256").update(promptMatch[1]).digest("hex"), promptSha256);
    const expectedFiles = articleMediaFileNames(asset.pageId, asset.assetType, asset.revision);
    const media = articleMediaRegistry[asset.pageId];
    assert.ok(media, `${asset.pageId} Control Tower-approved asset must enter the reviewed registry`);
    assert.equal(media.publishedFile, expectedFiles.publishedFile);
    assert.equal(media.socialFile, expectedFiles.socialFile);
    assert.equal(media.masterSource, expectedFiles.masterSource);
    assert.equal(media.canonicalArticleUrl, `https://www.wikibiome.com/article/${asset.pageId}`);
    assert.equal(media.socialResizeFit, "cover");
    assert.equal(media.socialResizePosition, "centre");
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.publishedFile));
    assert.ok(batch025PublicMediaFiles.includes(expectedFiles.socialFile));
    assert.ok(batch025MasterFiles.includes(expectedFiles.masterSource));
    assert.ok(!batch025PublicMediaFiles.includes(asset.draft.split("/").at(-1)));
    const review = reviewLog.reviews[media.reviewLogKey];
    assert.equal(review?.disposition, "approved");
    assert.equal(review?.revisionLinkage?.sourceSha256, sha256);
    assert.deepEqual(new Set(review.scientificReferenceCheck.checkedUrls), new Set(media.scientificReferences.map((reference) => reference.url)));
    const masterBytes = readFileSync(new URL(`../media/masters/${expectedFiles.masterSource}`, import.meta.url));
    const [draftPixels, masterPixels] = await Promise.all([sharp(draftBytes).removeAlpha().raw().toBuffer(), sharp(masterBytes).removeAlpha().raw().toBuffer()]);
    assert.equal(Buffer.compare(draftPixels, masterPixels), 0, `${asset.pageId} master must decode pixel-identically to the accepted source`);
    const [articleMetadata, socialMetadata] = await Promise.all([
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.publishedFile}`, import.meta.url))).metadata(),
      sharp(readFileSync(new URL(`../public/media-files/${expectedFiles.socialFile}`, import.meta.url))).metadata(),
    ]);
    assert.deepEqual([articleMetadata.width, articleMetadata.height], [1536, 1024]);
    assert.deepEqual([socialMetadata.width, socialMetadata.height], [1200, 630]);
    const articleResponse = await render(`/article/${asset.pageId}`);
    assert.equal(articleResponse.status, 200);
    const articleHtml = await articleResponse.text();
    assert.match(articleHtml, new RegExp(`src="/media/image/${expectedFiles.publishedFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, new RegExp(`property="og:image" content="https://www\\.wikibiome\\.com/media/social/${expectedFiles.socialFile.replaceAll(".", "\\.")}"`));
    assert.match(articleHtml, /primaryImageOfPage/);
    assert.match(articleHtml, /trainedAlgorithmicMedia/);
    assert.match(articleHtml, new RegExp(identifier));
  }
  assert.equal(batch035GenerationRecords.size, 6);
  assert.doesNotMatch(batch035PromptRecord, /<!-- PROMPT phocaeicola START -->/);
  const resolvedHeldIds = ["akkermansia-mucinicola", "allisonella", "atopobium-parvulum", "atopobium-vaginae", "barnesella", "candida-auris", "candida-glabrata", "clostridiales", "clostridium-difficile", "davidiella", "eubacterium-eligens", "eubacterium-rectale"];
  const activeScientificHolds = reviewLog.rejectedAssets.filter((asset) => asset.disposition === "scientific-identity-hold");
  assert.deepEqual(activeScientificHolds.map((asset) => asset.pageId), [
    "lachnoclostridium",
    "lachnospiraceae-family",
    "lactobacillus-plantarum",
    "lactobacillus-reuteri",
    "lactobacillus-rhamnosus",
    "mycoplasma-hominis",
    "oscillospirales",
    "ruminococcaceae",
    "ruminococcus-albus",
    "ruminococcus-gnavus",
    "saccharomyces-boulardii",
  ]);
  assert.equal(program.current.scientificHolds, activeScientificHolds.length);
  for (const hold of activeScientificHolds) {
    const queueRecord = program.queue.find((record) => record.id === hold.pageId);
    assert.equal(queueRecord?.status, "scientific-hold", `${hold.pageId} remains explicitly held in the canonical media queue`);
    assert.equal(articleMediaRegistry[hold.pageId], undefined, `${hold.pageId} must not enter the reviewed registry while held`);
    assert.ok(!publishedMediaFiles.some((filename) => filename.startsWith(`${hold.pageId}-`)), `${hold.pageId} must not enter public media files while held`);
    assert.ok(hold.requiredResolution, `${hold.pageId} requires an explicit resolution path`);
    assert.ok(hold.routingImpact, `${hold.pageId} requires an explicit public-routing impact`);
  }
  const infantisResolution = reviewLog.rejectedAssets.find((asset) => asset.pageId === "bifidobacterium-infantis");
  assert.equal(infantisResolution?.disposition, "scientific-identity-hold-resolved");
  assert.equal(infantisResolution?.canonicalPageId, "bifidobacterium-longum-subsp-infantis");
  assert.equal(infantisResolution?.canonicalIdentifier, "NCBITaxon:1682");
  assert.ok(infantisResolution?.excludedIdentityReferences?.some((item) => item.identifier === "NCBITaxon:35624"));
  assert.equal(program.queue.find((record) => record.id === "bifidobacterium-infantis"), undefined);
  const infantisQueueRecord = program.queue.find((record) => record.id === "bifidobacterium-longum-subsp-infantis");
  assert.equal(infantisQueueRecord?.status, "reviewed");
  assert.equal(infantisQueueRecord?.controlledIdentifier, "NCBITaxon:1682");
  assert.equal(infantisQueueRecord?.media?.publishedFile, "bifidobacterium-longum-subsp-infantis-morphology-v1.webp");
  assert.ok(!program.nextBatch.some((record) => record.id === "bifidobacterium-longum-subsp-infantis"));
  const currentNameMediaMappings = [
    ["candida-auris", "candidozyma-auris", "NCBITaxon:498019", "reviewed"],
    ["candida-glabrata", "nakaseomyces-glabratus", "NCBITaxon:5478", "reviewed"],
    ["clostridiales", "eubacteriales", "NCBITaxon:186802", "reviewed"],
    ["clostridium-difficile", "clostridioides-difficile", "NCBITaxon:1496", "reviewed"],
    ["davidiella", "cladosporium", "NCBITaxon:5498", "reviewed"],
    ["eubacterium-eligens", "lachnospira-eligens", "NCBITaxon:39485", "reviewed"],
    ["eubacterium-rectale", "agathobacter-rectalis", "NCBITaxon:39491", "reviewed"],
  ];
  for (const [obsoleteId, canonicalId, identifier, expectedStatus] of currentNameMediaMappings) {
    const resolution = reviewLog.rejectedAssets.find((asset) => asset.pageId === obsoleteId);
    assert.equal(resolution?.disposition, "scientific-identity-hold-resolved");
    assert.equal(resolution?.canonicalPageId, canonicalId);
    assert.equal(resolution?.canonicalIdentifier, identifier);
    assert.equal(resolution?.queueReplacement?.pageId, canonicalId);
    assert.equal(resolution?.queueReplacement?.controlledIdentifier, identifier);
    assert.equal(program.queue.find((record) => record.id === obsoleteId), undefined);
    const canonicalQueueRecord = program.queue.find((record) => record.id === canonicalId);
    assert.equal(canonicalQueueRecord?.status, expectedStatus);
    assert.equal(canonicalQueueRecord?.controlledIdentifier, identifier);
    assert.equal(articleMediaRegistry[obsoleteId], undefined);
    assert.ok(!publishedMediaFiles.some((filename) => filename.startsWith(`${obsoleteId}-`)));
    if (expectedStatus === "reviewed") {
      assert.ok(articleMediaRegistry[canonicalId], `${canonicalId} should have reviewed current-name media`);
      assert.ok(publishedMediaFiles.some((filename) => filename.startsWith(`${canonicalId}-`)));
    } else {
      assert.equal(articleMediaRegistry[canonicalId], undefined);
      assert.ok(!publishedMediaFiles.some((filename) => filename.startsWith(`${canonicalId}-`)));
    }
  }
  for (const id of resolvedHeldIds) {
    const canonicalId = getArticleAliases()[id];
    assert.equal(program.queue.find((record) => record.id === id), undefined, `${id} must remain outside the canonical media queue`);
    assert.ok(program.queue.some((record) => record.id === canonicalId), `${canonicalId} must be represented in the canonical media queue`);
    assert.equal(articleMediaRegistry[id], undefined);
    assert.ok(!publishedMediaFiles.some((filename) => filename.startsWith(`${id}-`)));
    const resolution = reviewLog.rejectedAssets.find((asset) => asset.pageId === id);
    assert.equal(resolution?.disposition, "scientific-identity-hold-resolved");
    assert.equal(resolution?.canonicalPageId, canonicalId);
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
  assert.match(html, /13[\s\S]{0,80}generated references/);
  assert.match(html, /13[\s\S]{0,80}unique references/);
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
  assert.match(readiness, /817[\s\S]{0,110}records[\s\S]{0,110}710[\s\S]{0,80}canonical article routes/);
  assert.match(
    readiness,
    new RegExp(`${Object.keys(articleMediaRegistry).length} of 710 canonical article routes currently have reviewed`),
  );
  assert.match(readiness, /Attach wikibiome\.com and www to the new Site/);
  assert.match(readiness, /former Vercel deployment remains intact as a rollback target but no longer handles the production apex route/);
  assert.match(readiness, /weekly WikiBiome upstream refresh gate now compares paleofoundation\/wikibiome origin\/main/);
  assert.match(readiness, /observation window began August 31, 2026/);
  assert.match(readiness, /Keep the rollback target through at least September 7/);
  assert.match(readiness, /Owner review of privacy and terms copy/);
  assert.match(readiness, /All cited source identifiers resolve through the canonical registry or its 55-entry audited alias map/);
  assert.match(readiness, /All 41 Keystone records have verified DOI and publication metadata/);
  assert.match(readiness, /449e8005c315/);

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
  assert.match(contribute, /Continue with ORCID to propose/);
  assert.match(contribute, /Choose microbiome, metallomics, or both/);
  assert.match(contribute, /DOI or PMID records/);
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
  assert.doesNotMatch(sitemap, /<image:loc>[^<]*(?:akkermansia-mucinicola|allisonella|atopobium-parvulum|atopobium-vaginae|bifidobacterium-infantis|candida-auris|candida-glabrata|clostridiales|clostridium-difficile)[^<]*<\/image:loc>/);
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

test("enforces worker-level routing parity for legacy redirects", async () => {
  const cases = [
    ["/signature-explorer", 308, "/signatures"],
    ["/signature-explorer.html?disease=autism-spectrum-disorder", 308, "/signatures?disease=autism-spectrum-disorder"],
    ["/article/DNA-damage?utm_source=console&checked=1", 301, "/article/dna-damage?utm_source=console&checked=1"],
    ["/article/autism-spectrum-disorder-signature", 308, "/article/autism-spectrum-disorder#signature"],
    ["/article/autism-spectrum-disorder-signature?from=bing", 308, "/article/autism-spectrum-disorder?from=bing#signature"],
  ];

  for (const [path, status, location] of cases) {
    const response = await render(path);
    assert.equal(response.status, status, `${path} must use HTTP ${status}`);
    assert.equal(response.headers.get("location"), location);
  }
});

test("publishes route-appropriate noindex boundaries for missing and gone records", async () => {
  assert.ok(NEVER_PUBLIC_ARTICLE_PATHS.length >= AUDITED_GONE_ARTICLE_PATHS.length);
  for (const path of AUDITED_GONE_ARTICLE_PATHS) {
    assert.ok(NEVER_PUBLIC_ARTICLE_PATHS.includes(path), `${path} must be backed by the generated public-exclusion manifest`);
    const response = await render(`${path}?from=search-console`);
    assert.equal(response.status, 410, `${path} must be explicitly Gone`);
    assertBoundaryMetadata(await response.text(), { title: "Article gone — WikiBiome" });
  }

  const article404 = await render("/article/not-a-real-record?from=search-console");
  assert.equal(article404.status, 404);
  assertBoundaryMetadata(await article404.text(), { title: "Article not found — WikiBiome" });

  const category404 = await render("/category/not-a-public-domain");
  assert.equal(category404.status, 404);
  assertBoundaryMetadata(await category404.text(), { title: "Category not found — WikiBiome" });

  const generic404 = await render("/not-real-route");
  assert.equal(generic404.status, 404);
  assertBoundaryMetadata(await generic404.text(), { title: "Page not found — WikiBiome" });
});

test("serves sitemap compatibility and merged robots exclusions at the worker boundary", async () => {
  const [canonicalSitemapResponse, compatibilitySitemapResponse, robotsResponse] = await Promise.all([
    render("/sitemap.xml"),
    render("/sitemap-full.xml"),
    render("/robots.txt"),
  ]);
  assert.equal(canonicalSitemapResponse.status, 200);
  assert.equal(compatibilitySitemapResponse.status, 200);
  assert.match(compatibilitySitemapResponse.headers.get("content-type") ?? "", /^application\/xml/);
  assert.equal(await compatibilitySitemapResponse.text(), await canonicalSitemapResponse.text());

  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  for (const path of ROUTING_ROBOTS_DISALLOWS) {
    assert.match(robots, new RegExp(`^Disallow: ${escapeRegExp(path)}$`, "m"));
  }
  assert.equal((robots.match(/^Disallow: /gm) ?? []).length, new Set(ROUTING_ROBOTS_DISALLOWS).size);
  assert.match(robots, new RegExp(`^Sitemap: ${escapeRegExp(PUBLIC_ORIGIN)}/sitemap\\.xml$`, "m"));
  assert.match(robots, new RegExp(`^Sitemap: ${escapeRegExp(PUBLIC_ORIGIN)}/image-sitemap\\.xml$`, "m"));
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
  assert.match(network, /1,939[\s\S]{0,30}evidence records/);
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
  assert.equal(hiddenResponse.status, 410);
  assert.equal(hiddenOutreachResponse.status, 410);

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
  assert.equal(content._stats.totalPages, 817);
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
  assert.equal(suggestResponse.headers.get("location"), "/propose?target=nickel");

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
  assert.equal(manifest.source.commit, "449e8005c3156d1b7943d2cdedd5b4386b9f5703");
  assert.equal(manifest.content.sha256, digest);
  assert.equal(manifest.content.pages, 817);
  assert.equal(manifest.content.sources, 1939);
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
  assert.equal(manifest.editorialNormalization.leadPromotionCount, 343);
  assert.ok(manifest.editorialNormalization.leadPromotionSamples.some((page) => page.id === "actinobacteria"));
  assert.equal(manifest.editorialStatusPolicy.version, 1);
  assert.equal(manifest.editorialStatusPolicy.sourceCommit, manifest.source.commit);
  assert.equal(manifest.editorialStatusPolicy.registeredCount, 112);
  assert.equal(manifest.editorialStatusPolicy.appliedRecordCount, 121);
  const statusRegistry = readFileSync(new URL("../data/editorial-statuses.json", import.meta.url));
  assert.equal(manifest.editorialStatusPolicy.registrySha256, createHash("sha256").update(statusRegistry).digest("hex"));
  assert.equal(manifest.articleIdentityPolicy.version, 1);
  assert.equal(manifest.articleIdentityPolicy.aliasCount, 13);
  assert.equal(manifest.articleIdentityPolicy.retiredCanonicalCount, 13);
  assert.equal(manifest.articleIdentityPolicy.canonicalTaxonCount, 13);
  const identityRegistry = readFileSync(new URL("../data/article-id-aliases.json", import.meta.url));
  assert.equal(manifest.articleIdentityPolicy.registrySha256, createHash("sha256").update(identityRegistry).digest("hex"));
  assert.equal(manifest.audit.generatedReferences, 6447);
  assert.equal(manifest.audit.recoveredInlineReferences, 349);
  assert.equal(manifest.audit.missingSourceMetadataIds.length, 0);
  assert.equal(manifest.audit.malformedDois.length, 0);
  assert.equal(manifest.audit.invalidSourceYears.length, 0);
  assert.equal(manifest.audit.resolvedSourceAliasIds.length, 55);
});
