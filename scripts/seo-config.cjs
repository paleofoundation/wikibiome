/**
 * Shared technical-SEO constants for WikiBiome static generation and tests.
 *
 * Canonical host is www.wikibiome.com — matching robots.txt, sitemap <loc>
 * values, and existing <link rel="canonical"> tags. Apex (wikibiome.com)
 * must 301 to www; never the reverse.
 */

const CANONICAL_ORIGIN = 'https://www.wikibiome.com';
const CANONICAL_HOST = 'www.wikibiome.com';
const APEX_HOST = 'wikibiome.com';

function requestHost(hostHeader, requestUrl) {
  const fromHeader = String(hostHeader || '').split(':')[0].toLowerCase().replace(/\.$/, '');
  if (fromHeader) return fromHeader;
  try {
    return new URL(requestUrl).hostname.toLowerCase().replace(/\.$/, '');
  } catch {
    return '';
  }
}

/**
 * If the request is on the apex host, return the https://www URL (path + query
 * preserved). Returns null when the host is already canonical (or a preview
 * host) so the request can continue.
 */
function canonicalRedirectUrl(requestUrl, hostHeader) {
  const host = requestHost(hostHeader, requestUrl);
  if (host !== APEX_HOST) return null;
  let url;
  try {
    url = new URL(requestUrl);
  } catch {
    return `${CANONICAL_ORIGIN}/`;
  }
  url.protocol = 'https:';
  url.hostname = CANONICAL_HOST;
  url.port = '';
  return url.toString();
}

const INDEXABLE_SPECIAL_PATHS = [
  { path: '/', title: 'WikiBiome — The Microbiome Metallomics Encyclopedia', changefreq: 'daily', priority: '1.0' },
  { path: '/signatures', title: 'Disease signatures — WikiBiome', changefreq: 'weekly', priority: '0.8' },
  { path: '/explore', title: 'Explore the knowledge graph — WikiBiome', changefreq: 'monthly', priority: '0.5' },
  { path: '/about', title: 'About WikiBiome', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy', title: 'Privacy — WikiBiome', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', title: 'Terms — WikiBiome', changefreq: 'yearly', priority: '0.3' },
  { path: '/contact', title: 'Contact — WikiBiome', changefreq: 'yearly', priority: '0.4' },
  { path: '/support', title: 'Support WikiBiome', changefreq: 'monthly', priority: '0.5' },
  { path: '/submit', title: 'Submit research — WikiBiome', changefreq: 'monthly', priority: '0.4' },
  { path: '/keystone', title: 'Keystone studies — WikiBiome', changefreq: 'monthly', priority: '0.5' },
];

const NOINDEX_SPECIAL_PATHS = [
  '/search',
  '/vote',
  '/compare',
  '/matrix',
  '/clusters',
  '/tags',
  '/outreach',
];

const ROBOTS_DISALLOW = [
  '/api/',
  '/outreach',
  '/contributions',
  '/article/*/suggest',
];

function normalizePath(path) {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.replace(/\/+$/, '') || '/';
}

function canonicalUrl(path) {
  const p = normalizePath(path);
  return p === '/' ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${p}`;
}

function isIndexableContentPage(page) {
  if (!page || !page.id) return false;
  if (page.isStub === true) return false;
  if (page.belowThreshold === true) return false;
  return true;
}

function robotsDirectiveForPage(page) {
  return isIndexableContentPage(page) ? 'index, follow' : 'noindex, follow';
}

function generateRobotsTxt() {
  const disallows = ROBOTS_DISALLOW.map((p) => `Disallow: ${p}`).join('\n');
  return `User-agent: *
Allow: /
${disallows}

# LLM crawlers — public encyclopedia is intentionally crawlable
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml
Sitemap: ${CANONICAL_ORIGIN}/image-sitemap.xml
`;
}

function assertSitemapUrl(loc) {
  if (typeof loc !== 'string') {
    throw new Error(`Sitemap loc must be a string: ${loc}`);
  }
  if (!loc.startsWith(`${CANONICAL_ORIGIN}/`)) {
    throw new Error(`Sitemap loc must use canonical host with a path: ${loc}`);
  }
  if (/^https:\/\/wikibiome\.com(\/|$)/.test(loc)) {
    throw new Error(`Sitemap loc used apex host: ${loc}`);
  }
  return true;
}

function sitemapEntry(path, extras = {}) {
  const loc = canonicalUrl(path);
  assertSitemapUrl(loc);
  return {
    path: normalizePath(path),
    loc,
    lastmod: extras.lastmod || null,
    changefreq: extras.changefreq || 'weekly',
    priority: extras.priority || '0.5',
  };
}

function generateImageSitemapXml(images) {
  const entries = (images || []).map((img) => {
    const page = canonicalUrl(img.pagePath || '/');
    const imageLoc = img.loc.startsWith('http') ? img.loc : canonicalUrl(img.loc);
    const caption = img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : '';
    const title = img.title ? `\n      <image:title>${escapeXml(img.title)}</image:title>` : '';
    return `  <url>
    <loc>${page}</loc>
    <image:image>
      <image:loc>${imageLoc}</image:loc>${title}${caption}
    </image:image>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>
`;
}

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function defaultImageSitemapEntries() {
  return [
    { pagePath: '/', loc: '/favicon.png', title: 'WikiBiome', caption: 'WikiBiome mark' },
    { pagePath: '/', loc: '/Favicon.svg', title: 'WikiBiome icon', caption: 'WikiBiome favicon' },
  ];
}

module.exports = {
  CANONICAL_ORIGIN,
  CANONICAL_HOST,
  APEX_HOST,
  requestHost,
  canonicalRedirectUrl,
  INDEXABLE_SPECIAL_PATHS,
  NOINDEX_SPECIAL_PATHS,
  ROBOTS_DISALLOW,
  normalizePath,
  canonicalUrl,
  isIndexableContentPage,
  robotsDirectiveForPage,
  generateRobotsTxt,
  assertSitemapUrl,
  sitemapEntry,
  generateImageSitemapXml,
  defaultImageSitemapEntries,
};
