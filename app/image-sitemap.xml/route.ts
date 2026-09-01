import { getArticleMediaEntries } from "@/lib/article-media";
import { absolutePublicUrl } from "@/lib/search-discovery";

export function GET() {
  const entries = getArticleMediaEntries()
    .toSorted((a, b) => a.pageId.localeCompare(b.pageId))
    .map((media) => [
      "  <url>",
      `    <loc>${escapeXml(absolutePublicUrl(`/article/${media.pageId}`))}</loc>`,
      `    <lastmod>${escapeXml(`${media.reviewedOn}T00:00:00.000Z`)}</lastmod>`,
      "    <image:image>",
      `      <image:loc>${escapeXml(absolutePublicUrl(media.src))}</image:loc>`,
      "    </image:image>",
      "  </url>",
    ].join("\n"));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
