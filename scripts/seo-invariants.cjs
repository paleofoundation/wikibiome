#!/usr/bin/env node
/**
 * Technical SEO invariants for WikiBiome.
 * Run: node scripts/seo-invariants.cjs
 */

const fs = require('fs');
const path = require('path');
const {
  CANONICAL_ORIGIN,
  INDEXABLE_SPECIAL_PATHS,
  NOINDEX_SPECIAL_PATHS,
  ROBOTS_DISALLOW,
  canonicalUrl,
  normalizePath,
  isIndexableContentPage,
  robotsDirectiveForPage,
  generateRobotsTxt,
  generateImageSitemapXml,
  defaultImageSitemapEntries,
  sitemapEntry,
} = require('./seo-config.cjs');

let failed = 0;
function assert(cond, message) {
  if (!cond) {
    failed += 1;
    console.error(`FAIL  ${message}`);
  } else {
    console.log(`ok    ${message}`);
  }
}

assert(CANONICAL_ORIGIN === 'https://www.wikibiome.com', 'canonical origin is www');
assert(canonicalUrl('/') === 'https://www.wikibiome.com/', 'homepage canonical has trailing slash');
assert(canonicalUrl('/article/nickel') === 'https://www.wikibiome.com/article/nickel', 'article canonical has no trailing slash');
assert(canonicalUrl('/article/nickel/') === 'https://www.wikibiome.com/article/nickel', 'trailing slash is stripped off article paths');
assert(normalizePath('about') === '/about', 'normalizePath adds a leading slash');
assert(sitemapEntry('/about').loc === 'https://www.wikibiome.com/about', 'sitemap entries use www host');

assert(isIndexableContentPage({ id: 'nickel', isStub: false, belowThreshold: false }) === true, 'complete pages are indexable');
assert(isIndexableContentPage({ id: 'thin', isStub: true }) === false, 'stubs are not indexable');
assert(isIndexableContentPage({ id: 'thin', belowThreshold: true }) === false, 'below-threshold pages are not indexable');
assert(robotsDirectiveForPage({ id: 'thin', isStub: true }) === 'noindex, follow', 'stubs emit noindex');
assert(robotsDirectiveForPage({ id: 'nickel' }) === 'index, follow', 'complete pages emit index');

const robots = generateRobotsTxt();
assert(robots.includes('Allow: /'), 'robots allows the public tree');
assert(robots.includes('Disallow: /api/'), 'robots blocks API');
assert(robots.includes('Disallow: /outreach'), 'robots blocks outreach dashboard');
assert(!/Disallow: \/article\s*$/m.test(robots), 'robots does not block /article');
assert(!robots.includes('Disallow: /category'), 'robots does not block categories');
assert(robots.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`), 'robots lists sitemap.xml on www');
assert(robots.includes(`Sitemap: ${CANONICAL_ORIGIN}/image-sitemap.xml`), 'robots lists image-sitemap.xml on www');
assert(!robots.includes('https://wikibiome.com/sitemap'), 'robots does not advertise the apex host');
for (const rule of ROBOTS_DISALLOW) {
  assert(robots.includes(`Disallow: ${rule}`), `robots contains ${rule}`);
}

const imageXml = generateImageSitemapXml(defaultImageSitemapEntries());
assert(imageXml.includes('https://www.wikibiome.com/'), 'image sitemap uses www');
assert(imageXml.includes('xmlns:image='), 'image sitemap declares the image namespace');

const vercel = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vercel.json'), 'utf8'));
assert(vercel.trailingSlash === false, 'vercel.json forces no trailing slash');
const catchAll = (vercel.rewrites || []).filter((r) => /index\.html/.test(r.destination) && r.source.includes('(?!'));
assert(catchAll.length === 0, 'vercel.json has no catch-all rewrite to index.html');
const apex = (vercel.redirects || []).find((r) => r.has && r.has.some((h) => h.value === 'wikibiome.com'));
assert(!!apex, 'apex host redirects to www');
assert(apex && apex.destination.startsWith('https://www.wikibiome.com/'), 'apex redirect target is www');
assert((vercel.rewrites || []).some((r) => r.source === '/article/:id'), 'article rewrite remains for static HTML');

const spa = fs.readFileSync(path.join(__dirname, '..', 'wikibiome-v8.jsx'), 'utf8');
assert(spa.includes('path="*" element={<NotFoundView'), 'SPA unknown routes render NotFoundView');
assert(!spa.includes('path="*" element={<HomeView'), 'SPA unknown routes no longer render the homepage');
assert(spa.includes('const NotFoundView'), 'NotFoundView is defined');

const publicRobots = fs.readFileSync(path.join(__dirname, '..', 'public/robots.txt'), 'utf8');
assert(publicRobots.includes('Sitemap: https://www.wikibiome.com/sitemap.xml'), 'public/robots.txt sitemap uses www');
assert(publicRobots.includes('Disallow: /api/'), 'public/robots.txt blocks API');
assert(publicRobots.includes('Disallow: /outreach'), 'public/robots.txt blocks outreach');

const checkout = fs.readFileSync(path.join(__dirname, '..', 'api/create-checkout.js'), 'utf8');
assert(checkout.includes('function getStripe'), 'Stripe client is lazily constructed');
assert(checkout.includes("req.method !== 'POST'"), 'checkout rejects non-POST without crashing');
assert(checkout.includes('X-Robots-Tag'), 'checkout sends noindex header');

assert(INDEXABLE_SPECIAL_PATHS.some((p) => p.path === '/about'), 'about is an indexable special page');
assert(NOINDEX_SPECIAL_PATHS.includes('/outreach'), 'outreach is noindex');
assert(NOINDEX_SPECIAL_PATHS.includes('/search'), 'search is noindex');
assert(!NOINDEX_SPECIAL_PATHS.includes('/about'), 'about is not noindex');

if (failed) {
  console.error(`\n${failed} SEO invariant(s) failed`);
  process.exit(1);
}
console.log('\nAll SEO invariants passed');
