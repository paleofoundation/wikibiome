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
 * Host + path-alias 301 location, or null if the request should continue
 * (already on www with a canonical path, preview host with no alias, or 410).
 */
function canonicalRedirectUrl(requestUrl, hostHeader) {
  const result = resolveSeoRedirect(requestUrl, hostHeader);
  if (result && result.status === 301) return result.location;
  return null;
}

/**
 * Known request paths that must 301 to a real indexable URL.
 * Looked up after trailing-slash strip; keys are lowercase.
 * Redirect only when the request path is not already the destination
 * (so `/article/dna-damage` does not loop).
 */
const PATH_ALIASES = {
  '/signature-explorer': '/signatures',
  '/signature-explorer.html': '/signatures',
  '/article/autism-spectrum-disorder-microbiome-signature': '/article/autism-spectrum-disorder-signature',
  '/article/dna-damage': '/article/dna-damage',
};

/**
 * GSC soft-404 sample slugs that were never public encyclopedia articles
 * (source filenames under /article/, invented STOP index, missing entity).
 * 410 tells Google they are gone; do not 200 and do not canonical to `/`.
 */
const GONE_PATHS = new Set([
  '/article/li-2026-ibd-erectile-dysfunction-mechanistic-link',
  '/article/pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis',
  '/article/chen2023-gut-microbiota-inflammatory-mendelian-covid',
  '/article/male-infertility',
  '/article/iron-supplementation-stops-across-conditions',
]);

function pathAlias(pathname) {
  const p = normalizePath(pathname);
  const dest = PATH_ALIASES[p] || PATH_ALIASES[p.toLowerCase()];
  if (!dest) return null;
  return dest !== p ? dest : null;
}

function isGonePath(pathname) {
  const p = normalizePath(pathname);
  return GONE_PATHS.has(p) || GONE_PATHS.has(p.toLowerCase());
}

const GONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gone — WikiBiome</title>
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="${CANONICAL_ORIGIN}/404" />
</head>
<body>
  <h1>This URL is gone.</h1>
  <p>It was never a public encyclopedia article.</p>
  <p><a href="/">Return home</a></p>
</body>
</html>
`;

/**
 * Single-hop SEO response: host + path alias combined, or 410 for gone slugs.
 * Returns { status: 301, location } | { status: 410, gone: true } | null.
 */
function resolveSeoRedirect(requestUrl, hostHeader) {
  let url;
  try {
    url = new URL(requestUrl);
  } catch {
    url = new URL(`${CANONICAL_ORIGIN}/`);
  }
  const host = requestHost(hostHeader, requestUrl);
  if (isGonePath(url.pathname)) {
    return { status: 410, gone: true };
  }
  const alias = pathAlias(url.pathname);
  const isApex = host === APEX_HOST;
  if (!alias && !isApex) return null;
  if (isApex) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
  }
  if (alias) url.pathname = alias;
  return { status: 301, location: url.toString() };
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
  pathAlias,
  isGonePath,
  resolveSeoRedirect,
  PATH_ALIASES,
  GONE_PATHS,
  GONE_HTML,
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
