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
  CANONICAL_HOST,
  APEX_HOST,
  canonicalRedirectUrl,
  pathAlias,
  isGonePath,
  resolveSeoRedirect,
  GONE_HTML,
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
assert(CANONICAL_HOST === 'www.wikibiome.com', 'canonical host is www');
assert(APEX_HOST === 'wikibiome.com', 'apex host is bare wikibiome.com');
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

assert(canonicalRedirectUrl('https://wikibiome.com/', 'wikibiome.com') === 'https://www.wikibiome.com/', 'apex homepage 301s to www /');
assert(canonicalRedirectUrl('https://wikibiome.com/article/nickel', 'wikibiome.com') === 'https://www.wikibiome.com/article/nickel', 'apex article 301s to www article');
assert(canonicalRedirectUrl('https://wikibiome.com/about?ref=gsc', 'wikibiome.com') === 'https://www.wikibiome.com/about?ref=gsc', 'apex redirect preserves query string');
assert(canonicalRedirectUrl('http://wikibiome.com/about', 'wikibiome.com') === 'https://www.wikibiome.com/about', 'http apex upgrades to https www in one hop');
assert(canonicalRedirectUrl('https://www.wikibiome.com/', 'www.wikibiome.com') === null, 'www homepage is not redirected');
assert(canonicalRedirectUrl('https://www.wikibiome.com/article/nickel', 'www.wikibiome.com') === null, 'www articles are not redirected');
assert(canonicalRedirectUrl('https://project-qzasd.vercel.app/', 'project-qzasd.vercel.app') === null, 'preview hosts are not redirected to www');

assert(pathAlias('/signature-explorer') === '/signatures', 'signature-explorer aliases to /signatures');
assert(pathAlias('/signature-explorer.html') === '/signatures', 'signature-explorer.html aliases to /signatures');
assert(pathAlias('/signature-explorer/') === '/signatures', 'signature-explorer trailing slash aliases');
assert(pathAlias('/article/DNA-damage') === '/article/dna-damage', 'DNA-damage case alias');
assert(pathAlias('/article/dna-damage') === null, 'canonical dna-damage is not redirected');
assert(pathAlias('/article/autism-spectrum-disorder-microbiome-signature') === '/article/autism-spectrum-disorder-signature', 'ASD microbiome-signature alias');
assert(pathAlias('/article/nickel') === null, 'real articles are not aliased');

assert(isGonePath('/article/li-2026-ibd-erectile-dysfunction-mechanistic-link') === true, 'li-2026 source slug is gone');
assert(isGonePath('/article/pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis') === true, 'pendergrass source slug is gone');
assert(isGonePath('/article/chen2023-gut-microbiota-inflammatory-mendelian-covid') === true, 'chen2023 source slug is gone');
assert(isGonePath('/article/Chen2023-gut-microbiota-inflammatory-mendelian-covid') === true, 'Chen2023 case variant is gone');
assert(isGonePath('/article/male-infertility') === true, 'male-infertility is gone (no entity page)');
assert(isGonePath('/article/iron-supplementation-stops-across-conditions') === true, 'invented STOP index is gone');
assert(isGonePath('/article/nickel') === false, 'real articles are not gone');
assert(GONE_HTML.includes('noindex'), '410 body is noindex');
assert(GONE_HTML.includes(`${CANONICAL_ORIGIN}/404`), '410 canonical is /404, not homepage');
assert(!GONE_HTML.includes(`${CANONICAL_ORIGIN}/"`) && !GONE_HTML.includes('href="https://www.wikibiome.com/"'), '410 does not canonical to homepage');

const explorerHop = resolveSeoRedirect('https://wikibiome.com/signature-explorer', 'wikibiome.com');
assert(explorerHop && explorerHop.status === 301, 'apex signature-explorer is 301');
assert(explorerHop.location === 'https://www.wikibiome.com/signatures', 'apex + explorer is one hop to www/signatures');

const explorerWww = resolveSeoRedirect('https://www.wikibiome.com/signature-explorer', 'www.wikibiome.com');
assert(explorerWww && explorerWww.status === 301 && explorerWww.location === 'https://www.wikibiome.com/signatures', 'www signature-explorer 301s to /signatures');

const dnaHop = resolveSeoRedirect('https://www.wikibiome.com/article/DNA-damage', 'www.wikibiome.com');
assert(dnaHop && dnaHop.status === 301 && dnaHop.location === 'https://www.wikibiome.com/article/dna-damage', 'DNA-damage 301s to lowercase');

const asdHop = resolveSeoRedirect('https://wikibiome.com/article/autism-spectrum-disorder-microbiome-signature', 'wikibiome.com');
assert(asdHop && asdHop.location === 'https://www.wikibiome.com/article/autism-spectrum-disorder-signature', 'apex + ASD alias is one hop');

const glyox = resolveSeoRedirect('https://wikibiome.com/article/glyoxalase', 'wikibiome.com');
assert(glyox && glyox.status === 301 && glyox.location === 'https://www.wikibiome.com/article/glyoxalase', 'GSC apex glyoxalase 301s to www (host split)');

const crcApex = resolveSeoRedirect('https://wikibiome.com/article/colorectal-cancer', 'wikibiome.com');
assert(crcApex && crcApex.location === 'https://www.wikibiome.com/article/colorectal-cancer', 'GSC apex CRC 301s to www');

const gone = resolveSeoRedirect('https://www.wikibiome.com/article/male-infertility', 'www.wikibiome.com');
assert(gone && gone.status === 410 && gone.gone === true, 'male-infertility is HTTP 410');

const goneApex = resolveSeoRedirect('https://wikibiome.com/article/li-2026-ibd-erectile-dysfunction-mechanistic-link', 'wikibiome.com');
assert(goneApex && goneApex.status === 410, 'gone slugs 410 on apex too (no 301 chain)');

const previewAlias = resolveSeoRedirect('https://project-qzasd.vercel.app/signature-explorer', 'project-qzasd.vercel.app');
assert(previewAlias && previewAlias.location === 'https://project-qzasd.vercel.app/signatures', 'preview hosts keep their host on path aliases');

const vercel = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vercel.json'), 'utf8'));
assert(vercel.trailingSlash === false, 'vercel.json forces no trailing slash');
const catchAll = (vercel.rewrites || []).filter((r) => /index\.html/.test(r.destination) && r.source.includes('(?!'));
assert(catchAll.length === 0, 'vercel.json has no catch-all rewrite to index.html');
const apexRedirects = (vercel.redirects || []).filter((r) => r.has && r.has.some((h) => h.value === 'wikibiome.com'));
assert(apexRedirects.some((r) => r.source === '/'), 'vercel.json has an explicit / apex→www 301 (/:path* misses root)');
assert(apexRedirects.some((r) => r.source === '/:path*'), 'vercel.json has /:path* apex→www 301');
assert(apexRedirects.every((r) => r.destination.startsWith('https://www.wikibiome.com/')), 'apex redirect targets are www');
assert(apexRedirects.every((r) => r.statusCode === 301 || r.permanent === true), 'apex redirects are permanent');
assert(apexRedirects.every((r) => r.statusCode === 301), 'apex redirects advertise HTTP 301');
assert((vercel.rewrites || []).some((r) => r.source === '/article/:id'), 'article rewrite remains for static HTML');
assert(!(vercel.rewrites || []).some((r) => r.source.includes('signature-explorer')), 'signature-explorer is not rewritten to Babel HTML');
const explorerRedirects = (vercel.redirects || []).filter((r) => String(r.source).includes('signature-explorer'));
assert(explorerRedirects.length >= 2, 'vercel.json 301s signature-explorer and .html');
assert(explorerRedirects.every((r) => r.destination === 'https://www.wikibiome.com/signatures'), 'explorer redirects land on www/signatures');
assert(explorerRedirects.every((r) => r.statusCode === 301), 'explorer redirects are 301');
assert((vercel.redirects || []).some((r) => r.source === '/article/autism-spectrum-disorder-microbiome-signature' && r.destination === 'https://www.wikibiome.com/article/autism-spectrum-disorder-signature'), 'ASD soft-404 slug 301s to the signature page');

const middleware = fs.readFileSync(path.join(__dirname, '..', 'middleware.js'), 'utf8');
assert(middleware.includes('resolveSeoRedirect'), 'middleware uses shared SEO redirect helper');
assert(middleware.includes('status: 301'), 'middleware returns HTTP 301');
assert(middleware.includes('status: 410') || middleware.includes('status === 410'), 'middleware can return HTTP 410');
assert(middleware.includes("runtime: 'nodejs'"), 'middleware uses Node.js / Fluid Compute');

const spa = fs.readFileSync(path.join(__dirname, '..', 'wikibiome-v8.jsx'), 'utf8');
assert(spa.includes('path="*" element={<NotFoundView'), 'SPA unknown routes render NotFoundView');
assert(!spa.includes('path="*" element={<HomeView'), 'SPA unknown routes no longer render the homepage');
assert(spa.includes('const NotFoundView'), 'NotFoundView is defined');
assert(!spa.includes('href="/signature-explorer"'), 'SPA no longer links crawlers to the Babel explorer');
assert(!spa.includes('href={`/signature-explorer'), 'SPA disease CTA no longer uses the Babel explorer URL');

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

const explorerHtml = fs.readFileSync(path.join(__dirname, '..', 'public/signature-explorer.html'), 'utf8');
assert(explorerHtml.includes('noindex'), 'leftover explorer HTML is noindex if still fetched');

const { generateNotFoundHtml } = require('./generate-static.cjs');
const notFound = generateNotFoundHtml();
assert(notFound.includes('noindex'), '404.html is noindex');
assert(notFound.includes(`${CANONICAL_ORIGIN}/404`), '404.html canonical is /404');
assert(!notFound.includes(`rel="canonical" href="${CANONICAL_ORIGIN}/"`), '404.html does not canonical to the homepage');

if (failed) {
  console.error(`\n${failed} SEO invariant(s) failed`);
  process.exit(1);
}
console.log('\nAll SEO invariants passed');
