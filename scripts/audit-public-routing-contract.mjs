#!/usr/bin/env node

const DEFAULT_APEX_ORIGIN = "https://wikibiome.com";
const DEFAULT_CANONICAL_ORIGIN = "https://www.wikibiome.com";

export const LEGACY_REDIRECTS = Object.freeze([
  { path: "/signature-explorer", status: 308, destination: "/signatures" },
  { path: "/signature-explorer.html", status: 308, destination: "/signatures" },
  { path: "/article/DNA-damage", status: 301, destination: "/article/dna-damage" },
  {
    path: "/article/autism-spectrum-disorder-microbiome-signature",
    status: 308,
    destination: "/article/autism-spectrum-disorder-signature",
  },
]);

export const GONE_PATHS = Object.freeze([
  "/article/li-2026-ibd-erectile-dysfunction-mechanistic-link",
  "/article/pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis",
  "/article/chen2023-gut-microbiota-inflammatory-mendelian-covid",
  "/article/iron-supplementation-stops-across-conditions",
  "/article/male-infertility",
]);

const REPRESENTATIVES = Object.freeze([
  { path: "/article/akkermansia-muciniphila", schema: ["WebPage", "Article", "ImageObject"] },
  { path: "/source/amadi-2022-dietary-interventions-asd-systematic-review", schema: ["WebPage", "ScholarlyArticle"] },
  { path: "/category/microbe", schema: ["CollectionPage"] },
  { path: "/explore", schema: ["WebApplication"] },
]);

const REQUIRED_ROBOTS_RULES = Object.freeze([
  "Disallow: /api/",
  "Disallow: /outreach",
  "Disallow: /contributions",
  "Disallow: /article/*/suggest",
  "Disallow: /media-files/",
]);

function trimOrigin(value) {
  return value.replace(/\/+$/, "");
}

function option(arguments_, name, fallback) {
  const value = arguments_.find((argument) => argument.startsWith(`--${name}=`))?.slice(name.length + 3);
  return value === undefined ? fallback : value;
}

export function parseArguments(arguments_) {
  const expectedImages = Number(option(arguments_, "images", "134"));
  const apexStatus = Number(option(arguments_, "apex-status", "308"));
  if (!Number.isInteger(expectedImages) || expectedImages < 0) throw new Error("--images must be a non-negative integer");
  if (![301, 308].includes(apexStatus)) throw new Error("--apex-status must be 301 or 308");
  return {
    apexOrigin: trimOrigin(option(arguments_, "apex", DEFAULT_APEX_ORIGIN)),
    canonicalOrigin: trimOrigin(option(arguments_, "canonical", DEFAULT_CANONICAL_ORIGIN)),
    expectedImages,
    apexStatus,
    checkAllImages: !arguments_.includes("--sample-images"),
  };
}

function canonicalKey(value) {
  try {
    const url = new URL(value);
    const pathname = url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
    return `${url.origin}${pathname}${url.search}`;
  } catch {
    return undefined;
  }
}

function canonicalHref(html) {
  return html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1]
    ?? html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i)?.[1];
}

function metaContent(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.match(new RegExp(`<meta\\s+[^>]*(?:name|property)=["']${escaped}["'][^>]*content=["']([^"']*)["']`, "i"))?.[1]
    ?? html.match(new RegExp(`<meta\\s+[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["']${escaped}["']`, "i"))?.[1];
}

function robotsDirectives(html) {
  return [...html.matchAll(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/gi)].map((match) => match[1].toLowerCase());
}

function schemaTypes(html, failures, path) {
  const types = new Set();
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const value = JSON.parse(match[1].replaceAll("&quot;", '"').replaceAll("&amp;", "&"));
      for (const node of value["@graph"] ?? [value]) {
        for (const type of Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]) if (type) types.add(type);
      }
    } catch (error) {
      failures.push(`${path}: invalid JSON-LD (${error instanceof Error ? error.message : String(error)})`);
    }
  }
  return types;
}

function locationKey(response, requestUrl) {
  const location = response.headers.get("location");
  if (!location) return undefined;
  return canonicalKey(new URL(location, requestUrl).toString());
}

function sitemapLocations(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function imageSitemapEntries(xml) {
  return [...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<image:loc>([^<]+)<\/image:loc>[\s\S]*?<\/url>/g)]
    .map((match) => ({ page: match[1], image: match[2] }));
}

async function request(fetchImpl, url, init, failures) {
  try {
    return await fetchImpl(url, { ...init, redirect: "manual" });
  } catch (error) {
    failures.push(`${url}: request failed (${error instanceof Error ? error.message : String(error)})`);
    return new Response(null, { status: 599 });
  }
}

export async function auditPublicRoutingContract({
  apexOrigin = DEFAULT_APEX_ORIGIN,
  canonicalOrigin = DEFAULT_CANONICAL_ORIGIN,
  expectedImages = 134,
  apexStatus = 308,
  checkAllImages = true,
  fetchImpl = fetch,
} = {}) {
  apexOrigin = trimOrigin(apexOrigin);
  canonicalOrigin = trimOrigin(canonicalOrigin);
  const failures = [];

  const apexProbePath = "/article/akkermansia-muciniphila?lineage-audit=1";
  const apexProbeUrl = `${apexOrigin}${apexProbePath}`;
  const apexResponse = await request(fetchImpl, apexProbeUrl, { method: "HEAD" }, failures);
  if (apexResponse.status !== apexStatus) failures.push(`apex host: HTTP ${apexResponse.status}, expected ${apexStatus}`);
  if (locationKey(apexResponse, apexProbeUrl) !== canonicalKey(`${canonicalOrigin}${apexProbePath}`)) {
    failures.push("apex host: redirect does not preserve the path and query on the canonical host");
  }

  for (const redirect of LEGACY_REDIRECTS) {
    const url = `${canonicalOrigin}${redirect.path}`;
    const response = await request(fetchImpl, url, { method: "HEAD" }, failures);
    if (response.status !== redirect.status) failures.push(`${redirect.path}: HTTP ${response.status}, expected ${redirect.status}`);
    if (locationKey(response, url) !== canonicalKey(`${canonicalOrigin}${redirect.destination}`)) {
      failures.push(`${redirect.path}: redirect target is not ${redirect.destination}`);
    }
  }

  for (const path of GONE_PATHS) {
    const response = await request(fetchImpl, `${canonicalOrigin}${path}`, { headers: { accept: "text/html" } }, failures);
    const html = await response.text();
    if (response.status !== 410) failures.push(`${path}: HTTP ${response.status}, expected 410`);
    const directives = robotsDirectives(html);
    if (directives.length !== 1 || directives[0] !== "noindex, follow") failures.push(`${path}: expected exactly one noindex, follow directive`);
    if (canonicalKey(canonicalHref(html)) !== `${canonicalOrigin}/404`) failures.push(`${path}: canonical is not ${canonicalOrigin}/404`);
    if (!/<title>Gone — WikiBiome<\/title>/i.test(html)) failures.push(`${path}: Gone title is missing`);
    if (!/noindex/i.test(response.headers.get("x-robots-tag") ?? "")) failures.push(`${path}: X-Robots-Tag noindex is missing`);
  }

  const missingPath = "/article/lineage-audit-record-that-does-not-exist";
  const missingResponse = await request(fetchImpl, `${canonicalOrigin}${missingPath}`, { headers: { accept: "text/html" } }, failures);
  const missingHtml = await missingResponse.text();
  if (missingResponse.status !== 404) failures.push(`${missingPath}: HTTP ${missingResponse.status}, expected 404`);
  const missingDirectives = robotsDirectives(missingHtml);
  if (missingDirectives.length !== 1 || !missingDirectives[0].split(",").map((value) => value.trim()).includes("noindex")) {
    failures.push(`${missingPath}: missing page must emit one unambiguous noindex directive`);
  }
  if (canonicalKey(canonicalHref(missingHtml)) !== `${canonicalOrigin}/404`) failures.push(`${missingPath}: canonical is not ${canonicalOrigin}/404`);

  const representativeMetrics = { total: REPRESENTATIVES.length, status200: 0, selfCanonical: 0, socialPreview: 0, structuredData: 0 };
  for (const representative of REPRESENTATIVES) {
    const response = await request(fetchImpl, `${canonicalOrigin}${representative.path}`, { headers: { accept: "text/html" } }, failures);
    const html = await response.text();
    if (response.status === 200) representativeMetrics.status200 += 1;
    else failures.push(`${representative.path}: HTTP ${response.status}`);
    if (canonicalKey(canonicalHref(html)) === `${canonicalOrigin}${representative.path}`) representativeMetrics.selfCanonical += 1;
    else failures.push(`${representative.path}: missing self-canonical URL`);
    if (
      canonicalKey(metaContent(html, "og:url")) === `${canonicalOrigin}${representative.path}`
      && metaContent(html, "og:image")?.startsWith(`${canonicalOrigin}/`)
      && metaContent(html, "twitter:image")?.startsWith(`${canonicalOrigin}/`)
    ) representativeMetrics.socialPreview += 1;
    else failures.push(`${representative.path}: incomplete canonical Open Graph/X preview`);
    const types = schemaTypes(html, failures, representative.path);
    if (representative.schema.every((type) => types.has(type))) representativeMetrics.structuredData += 1;
    else failures.push(`${representative.path}: missing Schema.org type(s) ${representative.schema.filter((type) => !types.has(type)).join(", ")}`);
  }

  const [robotsResponse, sitemapResponse, fullSitemapResponse, imageSitemapResponse, supportResponse, thankYouResponse, checkoutResponse] = await Promise.all([
    request(fetchImpl, `${canonicalOrigin}/robots.txt`, undefined, failures),
    request(fetchImpl, `${canonicalOrigin}/sitemap.xml`, undefined, failures),
    request(fetchImpl, `${canonicalOrigin}/sitemap-full.xml`, undefined, failures),
    request(fetchImpl, `${canonicalOrigin}/image-sitemap.xml`, undefined, failures),
    request(fetchImpl, `${canonicalOrigin}/support`, { headers: { accept: "text/html" } }, failures),
    request(fetchImpl, `${canonicalOrigin}/support/thank-you`, { headers: { accept: "text/html" } }, failures),
    request(fetchImpl, `${canonicalOrigin}/api/create-checkout`, undefined, failures),
  ]);
  const [robots, sitemap, fullSitemap, imageSitemap, supportHtml, thankYouHtml] = await Promise.all([
    robotsResponse.text(), sitemapResponse.text(), fullSitemapResponse.text(), imageSitemapResponse.text(), supportResponse.text(), thankYouResponse.text(),
  ]);

  for (const [path, response] of [["/robots.txt", robotsResponse], ["/sitemap.xml", sitemapResponse], ["/sitemap-full.xml", fullSitemapResponse], ["/image-sitemap.xml", imageSitemapResponse]]) {
    if (response.status !== 200) failures.push(`${path}: HTTP ${response.status}`);
  }
  for (const rule of REQUIRED_ROBOTS_RULES) if (!robots.includes(rule)) failures.push(`robots.txt: missing ${rule}`);
  for (const name of ["sitemap.xml", "image-sitemap.xml"]) {
    if (!robots.includes(`Sitemap: ${canonicalOrigin}/${name}`)) failures.push(`robots.txt: missing canonical ${name} declaration`);
  }

  const ordinaryUrls = sitemapLocations(sitemap);
  const fullSitemapUrls = sitemapLocations(fullSitemap);
  if (ordinaryUrls.length !== new Set(ordinaryUrls).size) failures.push("sitemap.xml: duplicate URLs");
  if (ordinaryUrls.some((url) => !url.startsWith(`${canonicalOrigin}/`))) failures.push("sitemap.xml: non-canonical origin");
  if (JSON.stringify(fullSitemapUrls) !== JSON.stringify(ordinaryUrls)) failures.push("sitemap-full.xml: compatibility alias differs from sitemap.xml");
  const retiredPaths = new Set([...LEGACY_REDIRECTS.map((item) => item.path), ...GONE_PATHS]);
  if (ordinaryUrls.some((url) => retiredPaths.has(new URL(url).pathname))) failures.push("sitemap.xml: redirect or Gone URL is advertised");
  for (const prefix of ["/article/", "/source/", "/category/"]) {
    if (!ordinaryUrls.some((url) => new URL(url).pathname.startsWith(prefix))) failures.push(`sitemap.xml: no ${prefix} records`);
  }

  const imageEntries = imageSitemapEntries(imageSitemap);
  if (imageEntries.length !== expectedImages) failures.push(`image-sitemap.xml: ${imageEntries.length} entries, expected ${expectedImages}`);
  if (/image:(?:title|caption|license)/.test(imageSitemap)) failures.push("image-sitemap.xml: deprecated metadata tags are present");
  if (imageEntries.some(({ page }) => !page.startsWith(`${canonicalOrigin}/article/`))) failures.push("image-sitemap.xml: non-canonical article URL");
  if (imageEntries.some(({ image }) => !image.startsWith(`${canonicalOrigin}/media/image/`))) failures.push("image-sitemap.xml: non-canonical image URL");

  const imageChecks = checkAllImages ? imageEntries : imageEntries.slice(0, Math.min(5, imageEntries.length));
  let healthyImages = 0;
  for (const entry of imageChecks) {
    const response = await request(fetchImpl, entry.image, { method: "HEAD" }, failures);
    if (response.status === 200 && response.headers.get("content-type")?.startsWith("image/webp") && response.headers.get("cache-control")?.includes("immutable")) healthyImages += 1;
    else failures.push(`${entry.image}: expected 200 image/webp with immutable caching`);
  }

  if (supportResponse.status !== 200 || canonicalKey(canonicalHref(supportHtml)) !== `${canonicalOrigin}/support`) failures.push("/support: expected a self-canonical 200 page");
  if (!/https:\/\/buy\.stripe\.com\/[A-Za-z0-9]+/.test(supportHtml)) failures.push("/support: approved Stripe Payment Link is missing");
  if (thankYouResponse.status !== 200 || canonicalKey(canonicalHref(thankYouHtml)) !== `${canonicalOrigin}/support/thank-you` || !robotsDirectives(thankYouHtml).some((value) => value.includes("noindex"))) {
    failures.push("/support/thank-you: expected a self-canonical noindex 200 page");
  }
  if (checkoutResponse.status !== 404) failures.push(`/api/create-checkout: HTTP ${checkoutResponse.status}, expected 404 while Payment Link is authoritative`);

  return {
    apexOrigin,
    canonicalOrigin,
    expectedImages,
    representative: representativeMetrics,
    ordinarySitemapUrls: ordinaryUrls.length,
    fullSitemapUrls: fullSitemapUrls.length,
    imageSitemapEntries: imageEntries.length,
    imageEndpointsChecked: imageChecks.length,
    healthyImageEndpoints: healthyImages,
    failures,
  };
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const report = await auditPublicRoutingContract(options);
  console.log(JSON.stringify(report, null, 2));
  if (report.failures.length) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === new URL(process.argv[1], "file:").href) await main();
