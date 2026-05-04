#!/usr/bin/env node
/*
 * generate-sitemap.cjs
 *
 * Standalone sitemap generator. Reads wiki/ directly, applies WikiBiome
 * platform/stub/threshold filtering logic (mirrors build-content.cjs), and
 * writes a single comprehensive sitemap.xml at the project root.
 *
 * Why this exists: the flagship-only sitemap strategy (23 URLs, from the
 * 2026-04-15 SEO plan) failed to move Google's crawl count off 39 pages after
 * a full week. Reversing course — Google gets the complete list and decides.
 *
 * Output:
 *   sitemap.xml       — every publishable WikiBiome URL
 *   Also refreshes dist/sitemap.xml and dist/sitemap-full.xml to match.
 *
 * Usage: node scripts/generate-sitemap.cjs
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WIKI = path.join(ROOT, 'wiki');
const DIST = path.join(ROOT, 'dist');
const DOMAIN = 'https://www.wikibiome.com';

// ---- Minimal YAML frontmatter parser (matches existing build-content.cjs behavior) ----
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const fm = {};
  const lines = yaml.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^([a-zA-Z_][\w-]*):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if (val === '') {
      // possible multi-line list — skip, we don't need list values for sitemap decisions
      fm[key] = '';
      continue;
    }
    // strip quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    // booleans
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    fm[key] = val;
  }
  return fm;
}

// ---- Directory → category map ----
const DIRS = [
  { dir: 'entities', defaultType: 'entity' },
  { dir: 'concepts', defaultType: 'concept' },
  { dir: 'signatures', defaultType: 'signature' },
  { dir: 'interventions', defaultType: 'intervention' },
  { dir: 'stops', defaultType: 'stop' },
  { dir: 'analyses', defaultType: 'analysis' },
];

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, '').toLowerCase();
}

function isPublishable(fm, defaultType) {
  // Stubs excluded from sitemap (matches generate-static.cjs behavior)
  if (fm.stub === true) return false;
  // Internal/template pages excluded
  const type = String(fm.type || defaultType).toLowerCase();
  if (['internal', 'template', 'operational'].includes(type)) return false;
  // Platform filter: wikibiome or both, or unset (default is public)
  const platform = fm.platform ? String(fm.platform).toLowerCase() : null;
  if (platform && !['wikibiome', 'both'].includes(platform)) return false;
  return true;
}

function priorityFor(type) {
  const t = String(type).toLowerCase();
  if (t === 'signature') return '0.9';
  if (t === 'entity') return '0.7';
  if (t === 'concept') return '0.7';
  if (t === 'intervention' || t === 'stop') return '0.6';
  return '0.5';
}

// ---- Collect URLs ----
const urls = [];
const seen = new Set();

// Homepage + special pages (these are always in the SPA)
urls.push({ path: '/', priority: '1.0', changefreq: 'daily', lastmod: new Date().toISOString().slice(0, 10) });
for (const special of ['signatures', 'explore', 'matrix', 'tags', 'about', 'submit', 'support', 'contact', 'compare']) {
  urls.push({ path: `/${special}`, priority: special === 'signatures' ? '0.8' : '0.5', changefreq: 'monthly' });
}

// Articles
let skipped = { stub: 0, platform: 0, duplicate: 0 };
for (const { dir, defaultType } of DIRS) {
  const dirPath = path.join(WIKI, dir);
  if (!fs.existsSync(dirPath)) continue;
  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    let content;
    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (err) {
      console.warn(`  ! could not read ${fullPath}: ${err.message}`);
      continue;
    }
    const fm = parseFrontmatter(content);
    if (fm.stub === true) {
      skipped.stub++;
      continue;
    }
    if (!isPublishable(fm, defaultType)) {
      skipped.platform++;
      continue;
    }
    const slug = slugFromFilename(file);
    const urlPath = `/article/${slug}`;
    if (seen.has(urlPath)) {
      skipped.duplicate++;
      continue;
    }
    seen.add(urlPath);
    urls.push({
      path: urlPath,
      lastmod: fm.updated || fm.last_substantive_update || fm.created || '2026-04-22',
      priority: priorityFor(fm.type || defaultType),
      changefreq: 'weekly',
    });
  }
}

// Categories
const categoryPaths = ['signature', 'metal', 'microbe', 'disease', 'concept', 'mechanism', 'entity'];
for (const cat of categoryPaths) {
  urls.push({ path: `/category/${cat}`, priority: '0.6', changefreq: 'weekly' });
}

// ---- Emit sitemap XML ----
function toXml(list) {
  const entries = list
    .map(
      (u) => `  <url>
    <loc>${DOMAIN}${u.path}</loc>
    <lastmod>${u.lastmod || '2026-04-22'}</lastmod>
    <changefreq>${u.changefreq || 'weekly'}</changefreq>
    <priority>${u.priority || '0.5'}</priority>
  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

const xml = toXml(urls);

// Write to project root (source of truth for next build)
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(ROOT, 'sitemap-full.xml'), xml);

// Also refresh dist/ if it exists so the next Vercel deploy ships the update
if (fs.existsSync(DIST)) {
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
  fs.writeFileSync(path.join(DIST, 'sitemap-full.xml'), xml);
}

console.log(`\n=== Sitemap regenerated ===`);
console.log(`  Total URLs: ${urls.length}`);
console.log(`    Homepage: 1`);
console.log(`    Special pages: 9`);
console.log(`    Articles: ${seen.size}`);
console.log(`    Categories: ${categoryPaths.length}`);
console.log(`  Skipped: ${skipped.stub} stubs, ${skipped.platform} non-WikiBiome, ${skipped.duplicate} duplicates`);
console.log(`\n  Wrote: sitemap.xml (root)`);
console.log(`  Wrote: sitemap-full.xml (root)`);
if (fs.existsSync(DIST)) {
  console.log(`  Wrote: dist/sitemap.xml`);
  console.log(`  Wrote: dist/sitemap-full.xml`);
}
