#!/usr/bin/env node

import content from "../data/content.generated.json" with { type: "json" };

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("audit", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const diseaseIds = new Set(content.pages.filter((page) => page.category === "disease").map((page) => page.id));
const normalizeId = (value) => String(value).replace(/\.md$/i, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
const articleIds = new Set();
for (const page of content.pages) {
  const base = page.id.replace(/-signature$/, "");
  articleIds.add(page.category === "signature" && diseaseIds.has(base) ? base : page.id);
}

const initialRoutes = [
  "/",
  "/search?q=nickel",
  "/readiness",
  "/explore",
  "/contribute",
  "/support",
  ...[...new Set(content.pages.map((page) => page.category))].map((category) => `/category/${category}`),
  ...[...articleIds].map((id) => `/article/${id}`),
  ...Object.keys(content.sourceLookup).map((id) => `/source/${normalizeId(id)}`),
];

const queued = new Set(initialRoutes);
const pending = [...initialRoutes];
const failures = [];
let checked = 0;
let articleRoutes = 0;
let sourceRoutes = 0;
let articleParagraphs = 0;

function visibleWordCount(markup) {
  return markup
    .replace(/<span class="citation-preview"[\s\S]*?<\/span>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/&[^;]+;/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function visibleText(markup) {
  return markup
    .replace(/<span class="citation-preview"[\s\S]*?<\/span>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function auditArticleReadability(pathname, html) {
  const articleBody = html.match(/<article class="article-body[^"]*"[\s\S]*?(?=<section class="references-section"|<footer class="article-provenance"|<\/article>)/)?.[0];
  if (!articleBody) return;
  for (const paragraph of articleBody.matchAll(/<p(?:\s+class="[^"]*")?>([\s\S]*?)<\/p>/g)) {
    const wordCount = visibleWordCount(paragraph[1]);
    articleParagraphs += 1;
    if (wordCount > 90) failures.push(`${pathname}: generated article paragraph has ${wordCount} words (90 maximum): ${visibleText(paragraph[1]).slice(0, 140)}…`);
  }
}

async function render(pathname) {
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();
  checked += 1;
  if (pathname.startsWith("/article/")) articleRoutes += 1;
  if (pathname.startsWith("/source/")) sourceRoutes += 1;

  const redirect = response.status >= 300 && response.status < 400 ? response.headers.get("location") : null;
  const platformAuthRedirect = redirect && /^\/(?:signin-with-chatgpt|signout-with-chatgpt|callback)(?:[/?#]|$)/.test(redirect);
  if (redirect) {
    if (redirect.startsWith("/") && !platformAuthRedirect && !queued.has(redirect)) {
      queued.add(redirect);
      pending.push(redirect);
    }
  } else if (response.status !== 200) failures.push(`${pathname}: HTTP ${response.status}`);
  if (response.status === 200 && !/<title>[^<]+<\/title>/i.test(html)) failures.push(`${pathname}: document title missing`);
  if (/Server error 500|Oops, an error occurred|Internal Server Error/i.test(html)) failures.push(`${pathname}: runtime error marker rendered`);
  if (response.status === 200 && pathname.startsWith("/article/")) auditArticleReadability(pathname, html);

  for (const match of html.matchAll(/href="(\/(?:article|source)\/[^"?#]+)[^"]*"/g)) {
    const target = match[1];
    // The authenticated suggestion generator is exercised once in the focused
    // suite; rendering it for every article only repeats the same auth redirect.
    if (target.endsWith("/suggest")) continue;
    if (!queued.has(target)) {
      queued.add(target);
      pending.push(target);
    }
  }
}

const concurrency = 32;
async function workerLoop() {
  while (pending.length) {
    const route = pending.shift();
    if (route) await render(route);
  }
}

await Promise.all(Array.from({ length: concurrency }, workerLoop));

const uniqueFailures = [...new Set(failures)];
console.log(`Rendered corpus audit: ${checked} routes checked (${articleRoutes} articles, ${sourceRoutes} source records, ${articleParagraphs} article paragraphs).`);
if (uniqueFailures.length) {
  console.error(`${uniqueFailures.length} route failures detected:`);
  uniqueFailures.slice(0, 50).forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("All discovered internal article and source links resolve successfully.");
