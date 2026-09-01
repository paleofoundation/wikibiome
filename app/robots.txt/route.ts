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
    "Disallow: /media-files/",
    "",
    "Sitemap: https://www.wikibiome.com/sitemap.xml",
    "Sitemap: https://www.wikibiome.com/image-sitemap.xml",
    "",
  ].join("\n"), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
