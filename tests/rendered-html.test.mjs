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
