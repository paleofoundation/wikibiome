#!/usr/bin/env node

import { articleMediaRegistry } from "../lib/article-media-registry.mjs";

const PUBLIC_ORIGIN = "https://www.wikibiome.com";
const baseUrlArg = process.argv.find((argument) => argument.startsWith("--base-url="));
const externalBaseUrl = baseUrlArg?.slice("--base-url=".length).replace(/\/+$/, "");
const mode = externalBaseUrl ? "external" : "rendered-local";
const failures = [];

let worker;
async function localFetch(pathname, init) {
  if (!worker) {
    const workerUrl = new URL("../dist/server/index.js", import.meta.url);
    workerUrl.searchParams.set("search-audit", `${process.pid}-${Date.now()}`);
    ({ default: worker } = await import(workerUrl.href));
  }
  return worker.fetch(
    new Request(`http://localhost${pathname}`, init),
    {
      ASSETS: {
        fetch: async () => new Response("webp", { headers: { "content-type": "application/octet-stream" } }),
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function fetchPath(pathname, init) {
  return externalBaseUrl
    ? fetch(`${externalBaseUrl}${pathname}`, { ...init, redirect: "manual" })
    : localFetch(pathname, init);
}

function canonicalKey(value) {
  try {
    const url = new URL(value, PUBLIC_ORIGIN);
    const pathname = url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
    return `${url.origin}${pathname}`;
  } catch {
    return undefined;
  }
}

function metaContent(html, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.match(new RegExp(`<meta [^>]*(?:property|name)="${escaped}"[^>]*content="([^"]*)"`, "i"))?.[1];
}

function structuredTypes(html) {
  const types = new Set();
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(match[1].replaceAll("&quot;", '"').replaceAll("&amp;", "&"));
      const nodes = data["@graph"] ?? [data];
      for (const node of nodes) {
        for (const type of Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]) {
          if (type) types.add(type);
        }
      }
    } catch (error) {
      failures.push(`invalid JSON-LD: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  return types;
}

const representatives = [
  { path: "/article/akkermansia-muciniphila", type: "article", schema: ["WebPage", "Article", "ImageObject"] },
  { path: "/source/amadi-2022-dietary-interventions-asd-systematic-review", type: "source", schema: ["WebPage", "ScholarlyArticle"] },
  { path: "/category/microbe", type: "category", schema: ["CollectionPage"] },
  { path: "/explore", type: "research-tool", schema: ["WebApplication"] },
];

const representativeMetrics = {
  total: representatives.length,
  status200: 0,
  selfCanonical: 0,
  socialPreview: 0,
  structuredData: 0,
};

for (const representative of representatives) {
  const response = await fetchPath(representative.path, { headers: { accept: "text/html" } });
  const html = await response.text();
  if (response.status === 200) representativeMetrics.status200 += 1;
  else failures.push(`${representative.path}: HTTP ${response.status}`);

  const expectedCanonical = canonicalKey(`${PUBLIC_ORIGIN}${representative.path}`);
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  if (canonicalKey(canonical) === expectedCanonical) representativeMetrics.selfCanonical += 1;
  else failures.push(`${representative.path}: canonical ${canonical ?? "missing"}, expected ${expectedCanonical}`);

  const openGraphUrl = metaContent(html, "og:url");
  const openGraphImage = metaContent(html, "og:image");
  const twitterImage = metaContent(html, "twitter:image");
  if (canonicalKey(openGraphUrl) === expectedCanonical && openGraphImage?.startsWith(`${PUBLIC_ORIGIN}/`) && twitterImage?.startsWith(`${PUBLIC_ORIGIN}/`)) {
    representativeMetrics.socialPreview += 1;
  } else {
    failures.push(`${representative.path}: incomplete canonical Open Graph/X preview`);
  }

  const types = structuredTypes(html);
  if (representative.schema.every((type) => types.has(type))) representativeMetrics.structuredData += 1;
  else failures.push(`${representative.path}: missing Schema.org type(s) ${representative.schema.filter((type) => !types.has(type)).join(", ")}`);
}

const [robotsResponse, sitemapResponse, imageSitemapResponse, searchResponse] = await Promise.all([
  fetchPath("/robots.txt"),
  fetchPath("/sitemap.xml"),
  fetchPath("/image-sitemap.xml"),
  fetchPath("/search?q=nickel", { headers: { accept: "text/html" } }),
]);
const [robots, sitemap, imageSitemap, searchHtml] = await Promise.all([
  robotsResponse.text(),
  sitemapResponse.text(),
  imageSitemapResponse.text(),
  searchResponse.text(),
]);

if (robotsResponse.status !== 200) failures.push(`/robots.txt: HTTP ${robotsResponse.status}`);
if (sitemapResponse.status !== 200) failures.push(`/sitemap.xml: HTTP ${sitemapResponse.status}`);
if (imageSitemapResponse.status !== 200) failures.push(`/image-sitemap.xml: HTTP ${imageSitemapResponse.status}`);
if (!robots.includes(`Sitemap: ${PUBLIC_ORIGIN}/sitemap.xml`)) failures.push("robots.txt does not advertise the ordinary sitemap");
if (!robots.includes(`Sitemap: ${PUBLIC_ORIGIN}/image-sitemap.xml`)) failures.push("robots.txt does not advertise the image sitemap");
if (!robots.includes("Disallow: /media-files/")) failures.push("robots.txt does not exclude duplicate raw media storage URLs");

const ordinaryUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (ordinaryUrls.length !== new Set(ordinaryUrls).size) failures.push("ordinary sitemap contains duplicate URLs");
if (ordinaryUrls.some((url) => !url.startsWith(`${PUBLIC_ORIGIN}/`))) failures.push("ordinary sitemap contains a non-canonical origin");

const imagePageUrls = [...imageSitemap.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<image:loc>([^<]+)<\/image:loc>[\s\S]*?<\/url>/g)]
  .map((match) => ({ page: match[1], image: match[2] }));
const expectedImageEntries = Object.values(articleMediaRegistry)
  .map((media) => ({ page: `${PUBLIC_ORIGIN}/article/${media.pageId}`, image: `${PUBLIC_ORIGIN}${media.src}` }))
  .sort((a, b) => a.page.localeCompare(b.page));
const actualImageEntries = imagePageUrls.toSorted((a, b) => a.page.localeCompare(b.page));
if (JSON.stringify(actualImageEntries) !== JSON.stringify(expectedImageEntries)) failures.push("image sitemap does not exactly match the reviewed media registry");
if (/image:(?:title|caption|license)/.test(imageSitemap)) failures.push("image sitemap emits deprecated metadata tags");

const imageChecks = await Promise.all(expectedImageEntries.map(async (entry) => {
  const path = new URL(entry.image).pathname;
  const response = await fetchPath(path, { method: "HEAD" });
  return {
    path,
    status: response.status,
    contentType: response.headers.get("content-type"),
    cacheControl: response.headers.get("cache-control"),
  };
}));
for (const image of imageChecks) {
  if (image.status !== 200 || image.contentType !== "image/webp" || !image.cacheControl?.includes("immutable")) {
    failures.push(`${image.path}: expected 200 image/webp with immutable caching`);
  }
}

const searchCanonical = searchHtml.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
if (canonicalKey(searchCanonical) !== `${PUBLIC_ORIGIN}/search`) failures.push("parameterized search does not canonicalize to /search");
if (!/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(searchHtml)) failures.push("parameterized search is not noindex");

const report = {
  mode,
  baseUrl: externalBaseUrl ?? "built worker",
  representative: representativeMetrics,
  ordinarySitemapUrls: ordinaryUrls.length,
  reviewedImageSitemapEntries: actualImageEntries.length,
  reviewedRegistryEntries: expectedImageEntries.length,
  canonicalImageEndpointsHealthy: imageChecks.filter((image) => image.status === 200 && image.contentType === "image/webp" && image.cacheControl?.includes("immutable")).length,
  robotsSitemapsAdvertised: ["sitemap.xml", "image-sitemap.xml"].filter((name) => robots.includes(`Sitemap: ${PUBLIC_ORIGIN}/${name}`)).length,
  parameterizedSearchNoindex: /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(searchHtml),
  failures,
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exit(1);
