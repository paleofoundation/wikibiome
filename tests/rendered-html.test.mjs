import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

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
  assert.match(html, /1,887/);
  assert.match(html, /867/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("server-renders real article and directory pages through the shared redesign", async () => {
  const [articleResponse, directoryResponse] = await Promise.all([
    render("/article/nickel"),
    render("/category/microbe"),
  ]);

  assert.equal(articleResponse.status, 200);
  assert.equal(directoryResponse.status, 200);

  const article = await articleResponse.text();
  assert.match(article, /<title>Nickel — WikiBiome<\/title>/i);
  assert.match(article, /class="article-system-art"/);
  assert.match(article, /class="infobox-visual infobox-metal"/);
  assert.match(article, /143/);
  assert.match(article, /generated references/);
  assert.match(article, /href="\/source\/braud-2010-siderophores-pseudomonas-metal-tolerance"/);

  const directory = await directoryResponse.text();
  assert.match(directory, /<title>Microorganisms — WikiBiome<\/title>/i);
  assert.match(directory, /233/);
  assert.match(directory, /records in this view/);
  assert.match(directory, /href="\/article\/akkermansia-muciniphila"/);
  assert.match(directory, /wikibiome-logo\.png/);
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
  assert.match(developmentalNarrative, /symptom onset\. Early-life lead \(Pb\) exposure/);
  assert.doesNotMatch(developmentalNarrative, /<(?:ul|ol)>/);
  assert.match(paradoxNarrative, /class="paradox-grid paradox-count-3"/);
  assert.equal((paradoxNarrative.match(/<article>/g) ?? []).length, 3);

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

  assert.equal(legacy.status, 307);
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

test("adapts dietary paradoxes to every content shape in the corpus", async () => {
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
  assert.equal((breastParadox.match(/<article>/g) ?? []).length, 2);
  assert.match(breastParadox, /The zinc supplementation question/);
  assert.match(breastParadox, /The plant-based diet dilemma/);

  const endometriosisParadox = endometriosis.slice(endometriosis.indexOf('id="article-dietary-metal-paradoxes"'), endometriosis.indexOf('id="article-current-interventions'));
  assert.equal((endometriosisParadox.match(/<article>/g) ?? []).length, 3);
  assert.match(endometriosisParadox, /The Plant-Based Diet Paradox/);
  assert.match(endometriosisParadox, /The Zinc-MMP Tissue Invasion Paradox/);
  assert.match(endometriosisParadox, /The H2S\/NF-kB Amplification Loop/);

  const pcosParadox = pcos.slice(pcos.indexOf('id="article-dietary-metal-paradoxes"'), pcos.indexOf('id="article-insulin-resistance-as-central-mediator'));
  assert.equal((pcosParadox.match(/<article>/g) ?? []).length, 5);
  assert.doesNotMatch(pcosParadox, />Paradox 0\d</);

  const diabetesParadox = diabetes.slice(diabetes.indexOf('id="article-dietary-metal-paradoxes"'), diabetes.indexOf('id="article-current-interventions-with-metal-relevance'));
  assert.equal((diabetesParadox.match(/<article>/g) ?? []).length, 2);
  assert.match(diabetesParadox, /The iron overload paradox/);
  assert.match(diabetesParadox, /The chromium supplementation paradox/);

  const lowNickelParadox = lowNickel.slice(lowNickel.indexOf('id="the-dietary-paradox"'), lowNickel.indexOf('id="diagnosis-when-to-recommend-a-low-nickel-diet"'));
  assert.equal((lowNickelParadox.match(/<article>/g) ?? []).length, 3);
  assert.match(lowNickelParadox, /Paradox 1: Plant-Based Diets/);
  assert.match(lowNickelParadox, /Paradox 3: The Commensal Casualty/);
  assert.match(matrix, /id="5-3-nickel-in-food-the-dietary-paradox"[\s\S]{0,3000}class="paradox-note"/);
  assert.equal((dietaryAnalysis.match(/class="wiki-section level-2 paradox-dossier"/g) ?? []).length, 9);
  assert.match(dietaryAnalysis, /id="paradox-1-the-plant-based-diet-nickel-trap-the-contradiction"/);
  assert.match(dietaryAnalysis, /id="paradox-9-the-nickel-restriction-commensal-casualty-clinical-implication"/);
});

test("binds generated content to the fetched upstream commit", () => {
  const content = readFileSync(new URL("../data/content.generated.json", import.meta.url));
  const manifest = JSON.parse(readFileSync(new URL("../data/content-manifest.generated.json", import.meta.url), "utf8"));
  const digest = createHash("sha256").update(content).digest("hex");

  assert.equal(manifest.source.repository, "https://github.com/paleofoundation/wikibiome.git");
  assert.equal(manifest.source.commit, "9cba6ad9aac5ab4c30d22c8070052111b9ec2f03");
  assert.equal(manifest.content.sha256, digest);
  assert.equal(manifest.content.pages, 867);
  assert.equal(manifest.content.sources, 1887);
  assert.ok(manifest.audit.recoveredInlineReferences >= 449);
});
