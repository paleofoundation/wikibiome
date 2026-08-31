export function GET() {
  return new Response([
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /contributions",
    "Disallow: /article/*/suggest",
    "Disallow: /signin-with-chatgpt",
    "Disallow: /signout-with-chatgpt",
    "Disallow: /callback",
    "",
    "Sitemap: https://www.wikibiome.com/sitemap.xml",
    "",
  ].join("\n"), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
