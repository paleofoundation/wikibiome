import { allSources, allWikiPages, canonicalArticleId, categories, generatedAt } from "@/lib/wikibiome";

const ORIGIN = "https://www.wikibiome.com";
const publicRoutes = [
  "/",
  ...[...categories.map((category) => `/category/${category.id}`), "/category/other", "/category/reference"],
  "/search",
  "/explore",
  "/clusters",
  "/compare",
  "/keystone",
  "/about",
  "/readiness",
  "/support",
  "/contribute",
  "/researchers",
  "/submit-work",
  "/institutions",
  "/research-standard",
  "/privacy",
  "/terms",
  "/contact",
];

export function GET() {
  const articleMap = new Map<string, string>();
  for (const page of allWikiPages) {
    const id = canonicalArticleId(page.id);
    const updated = validDate(page.updated) ?? validDate(generatedAt) ?? new Date().toISOString();
    const existing = articleMap.get(id);
    if (!existing || updated > existing) articleMap.set(id, updated);
  }

  const entries = [
    ...publicRoutes.map((path) => ({ path, lastmod: validDate(generatedAt), priority: path === "/" ? "1.0" : "0.7" })),
    ...[...articleMap.entries()].map(([id, lastmod]) => ({ path: `/article/${id}`, lastmod, priority: "0.8" })),
    ...Object.keys(allSources).map((id) => ({ path: `/source/${id}`, lastmod: validDate(generatedAt), priority: "0.5" })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((entry) => `  <url><loc>${escapeXml(`${ORIGIN}${entry.path}`)}</loc>${entry.lastmod ? `<lastmod>${escapeXml(entry.lastmod)}</lastmod>` : ""}<changefreq>${entry.path === "/" ? "daily" : "weekly"}</changefreq><priority>${entry.priority}</priority></url>`).join("\n")}\n</urlset>\n`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
}

function validDate(value: string | undefined) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? undefined : date.toISOString();
}

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
