#!/usr/bin/env node
/**
 * WikiBiome Static HTML Generator
 *
 * Generates crawlable HTML pages for every route so Google/Bing/LLMs
 * can index the full content without executing JavaScript.
 *
 * Runs AFTER `vite build` and writes HTML files into the dist folder.
 * The SPA bundle still loads for interactive users — the static HTML
 * is the "first paint" that search engines see.
 */

const fs = require('fs');
const path = require('path');

// Read the generated content
const CONTENT = require('../src/content.generated.json');

// Resolve dist directory from vite.config.js
const viteConfig = fs.readFileSync(path.join(__dirname, '..', 'vite.config.js'), 'utf8');
const distMatch = viteConfig.match(/outDir:\s*['"]([^'"]+)['"]/);
const DIST_DIR = path.join(__dirname, '..', distMatch ? distMatch[1] : 'dist');

const DOMAIN = 'https://wikibiome.com';
const GA_MEASUREMENT_ID = 'G-H480L4E9JF';
const GA_SNIPPET = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  </script>`;

// Read the built index.html to get the actual script/asset references
const indexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
const scriptTag = indexHtml.match(/<script[^>]*type="module"[^>]*src="([^"]+)"[^>]*>/)?.[0] || '';
// Add closing tag if we captured only the opening tag
const scriptTagFull = scriptTag ? scriptTag + '</script>' : '';
const cssLink = indexHtml.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*\/?>/)?.[0] || '';

console.log('=== WikiBiome Static HTML Generator ===');
console.log('Dist directory:', DIST_DIR);
console.log('Script tag:', scriptTag ? 'found' : 'not found');

// ---- Helpers ----

function escapeHtml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function stripMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')  // [[target|display]] -> display
    .replace(/\[\[([^\]]+)\]\]/g, '$1')                // [[target]] -> target
    .replace(/\*\*([^*]+)\*\*/g, '$1')                 // **bold** -> bold
    .replace(/\*([^*]+)\*/g, '$1')                      // *italic* -> italic
    .replace(/-/g, ' ')                                  // hyphens to spaces in slugs
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(text, len) {
  if (!text || text.length <= len) return text || '';
  return text.substring(0, len - 3) + '...';
}

function getPageDescription(page) {
  // Try overview first, then first section body
  let text = page.overview || '';
  if (!text && page.sections && page.sections[0]) {
    text = page.sections[0].body || '';
  }
  return truncate(stripMarkdown(text), 160);
}

function getPageTitle(page) {
  const title = (page.title || page.id || '').replace(/-/g, ' ');
  // Capitalize each word
  const capitalized = title.replace(/\b\w/g, c => c.toUpperCase());
  return capitalized;
}

// Convert markdown-ish text to basic HTML for crawlers
function markdownToHtml(text) {
  if (!text) return '';
  let html = escapeHtml(text);
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Wikilinks with display text
  html = html.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, target, display) => {
    const slug = target.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `<a href="/article/${slug}">${display}</a>`;
  });
  // Wikilinks without display text
  html = html.replace(/\[\[([^\]]+)\]\]/g, (_, target) => {
    const slug = target.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const display = target.replace(/-/g, ' ');
    return `<a href="/article/${slug}">${display}</a>`;
  });
  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br/>');
  return `<p>${html}</p>`;
}

// Generate JSON-LD structured data
function getJsonLd(page, url) {
  const base = {
    '@context': 'https://schema.org',
    'url': url,
    'publisher': {
      '@type': 'Organization',
      'name': 'Paleo Foundation',
      'url': 'https://paleofoundation.com'
    },
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'WikiBiome',
      'url': DOMAIN
    }
  };

  if (page.type === 'entity' && (page.subtype === 'microbe' || page.subtype === 'fungus')) {
    return {
      ...base,
      '@type': 'Article',
      'name': getPageTitle(page),
      'headline': `${getPageTitle(page)} — Microbiome Metallomics`,
      'description': getPageDescription(page),
      'about': {
        '@type': 'Thing',
        'name': getPageTitle(page),
        'description': `Microorganism involved in human microbiome metallomics`
      },
      'dateModified': page.updated || page.created || '2026-04-10',
    };
  }

  if (page.type === 'entity' && page.subtype === 'metal') {
    return {
      ...base,
      '@type': 'Article',
      'name': getPageTitle(page),
      'headline': `${getPageTitle(page)} — Heavy Metal Biology & Microbiome Impact`,
      'description': getPageDescription(page),
      'about': {
        '@type': 'ChemicalSubstance',
        'name': getPageTitle(page),
      },
      'dateModified': page.updated || page.created || '2026-04-10',
    };
  }

  if (page.type === 'signature') {
    return {
      ...base,
      '@type': 'MedicalScholarlyArticle',
      'name': getPageTitle(page),
      'headline': `${getPageTitle(page)} — Microbiome Signature`,
      'description': getPageDescription(page),
      'about': {
        '@type': 'MedicalCondition',
        'name': getPageTitle(page).replace(' Microbiome Signature', ''),
      },
      'dateModified': page.updated || page.created || '2026-04-10',
    };
  }

  // Default article
  return {
    ...base,
    '@type': 'Article',
    'name': getPageTitle(page),
    'headline': `${getPageTitle(page)} — WikiBiome`,
    'description': getPageDescription(page),
    'dateModified': page.updated || page.created || '2026-04-10',
  };
}

// ---- HTML Template ----

function generatePageHtml(page, urlPath) {
  const title = getPageTitle(page);
  const description = getPageDescription(page);
  const fullTitle = `${title} — WikiBiome`;
  const canonicalUrl = `${DOMAIN}${urlPath}`;
  const jsonLd = JSON.stringify(getJsonLd(page, canonicalUrl));

  // Build the article body HTML from sections
  let bodyHtml = '';
  if (page.overview) {
    bodyHtml += markdownToHtml(page.overview);
  }
  if (page.sections) {
    for (const section of page.sections) {
      if (section.heading) {
        bodyHtml += `<h2>${escapeHtml(section.heading)}</h2>\n`;
      }
      if (section.body) {
        bodyHtml += markdownToHtml(section.body) + '\n';
      }
    }
  }

  // Build internal link list for crawlers
  const relatedLinks = (page.wikilinks || [])
    .filter(link => CONTENT.pages.some(p => p.id === link))
    .slice(0, 30)
    .map(link => {
      const linked = CONTENT.pages.find(p => p.id === link);
      const linkTitle = linked ? getPageTitle(linked) : link.replace(/-/g, ' ');
      return `<li><a href="/article/${link}">${escapeHtml(linkTitle)}</a></li>`;
    })
    .join('\n');

  // Breadcrumb
  const categoryName = page.category ? page.category.charAt(0).toUpperCase() + page.category.slice(1) : 'Articles';
  const categorySlug = page.category || 'other';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${GA_SNIPPET}
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Open Graph -->
  <meta property="og:title" content="${escapeHtml(fullTitle)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="WikiBiome" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />

  <!-- Structured Data -->
  <script type="application/ld+json">${jsonLd}</script>

  ${cssLink}
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    /* Static content styling for crawlers — hidden once SPA hydrates */
    .static-content { max-width: 800px; margin: 0 auto; padding: 40px 20px; line-height: 1.7; color: #2c2c2c; }
    .static-content h1 { font-size: 28px; margin-bottom: 16px; color: #1a1a1a; }
    .static-content h2 { font-size: 20px; margin: 24px 0 12px; color: #333; }
    .static-content p { margin: 12px 0; }
    .static-content a { color: #b87333; text-decoration: underline; }
    .static-content nav { font-size: 14px; margin-bottom: 24px; color: #888; }
    .static-content nav a { color: #b87333; }
    .static-content ul, .static-content ol { margin: 12px 0 12px 24px; }
    .static-content li { margin-bottom: 6px; }
    .static-content .related { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8e4df; }
    .static-content .related h3 { font-size: 16px; margin-bottom: 12px; color: #666; }
  </style>
</head>
<body>
  <div id="root">
    <!-- Static HTML for search engines — replaced by React SPA on hydration -->
    <article class="static-content" itemscope itemtype="https://schema.org/Article">
      <nav aria-label="Breadcrumb">
        <a href="/">WikiBiome</a> &rsaquo;
        <a href="/category/${categorySlug}">${escapeHtml(categoryName)}</a> &rsaquo;
        <span>${escapeHtml(title)}</span>
      </nav>

      <h1 itemprop="headline">${escapeHtml(title)}</h1>

      <div itemprop="articleBody">
        ${bodyHtml}
      </div>

      ${relatedLinks ? `
      <div class="related">
        <h3>Related Articles</h3>
        <ul>${relatedLinks}</ul>
      </div>` : ''}

      <footer style="margin-top:40px;padding-top:20px;border-top:1px solid #e8e4df;font-size:13px;color:#888;">
        <p>WikiBiome is a project of the <a href="https://paleofoundation.com">Paleo Foundation</a>, advancing microbiome medicine through open scientific education.</p>
      </footer>
    </article>
  </div>
  ${scriptTagFull}
</body>
</html>`;
}

// ---- Homepage ----

function generateHomepageHtml() {
  const categories = {};
  for (const p of CONTENT.pages) {
    const cat = p.category || 'other';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(p);
  }

  let categoryLinks = '';
  for (const [cat, pages] of Object.entries(categories).sort((a, b) => b[1].length - a[1].length)) {
    const catTitle = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryLinks += `<li><a href="/category/${cat}">${catTitle}</a> (${pages.length} articles)</li>\n`;
  }

  let recentPages = CONTENT.pages
    .filter(p => p.updated || p.created)
    .sort((a, b) => (b.updated || b.created || '').localeCompare(a.updated || a.created || ''))
    .slice(0, 20)
    .map(p => `<li><a href="/article/${p.id}">${escapeHtml(getPageTitle(p))}</a></li>`)
    .join('\n');

  const signatureLinks = CONTENT.pages
    .filter(p => p.type === 'signature')
    .map(p => `<li><a href="/article/${p.id}">${escapeHtml(getPageTitle(p))}</a></li>`)
    .join('\n');

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'WikiBiome',
    'url': DOMAIN,
    'description': 'The open encyclopedia of microbiome metallomics — exploring how heavy metals shape the human microbiome, drive disease, and reveal new therapeutic targets.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Paleo Foundation',
      'url': 'https://paleofoundation.com'
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${GA_SNIPPET}
  <title>WikiBiome — The Microbiome Metallomics Encyclopedia</title>
  <meta name="description" content="The open encyclopedia of microbiome metallomics. Explore how heavy metals shape the human microbiome, drive disease, and reveal new therapeutic targets. ${CONTENT.pages.length} articles on metals, microbes, disease signatures, and mechanisms." />
  <link rel="canonical" href="${DOMAIN}/" />

  <meta property="og:title" content="WikiBiome — The Microbiome Metallomics Encyclopedia" />
  <meta property="og:description" content="Explore how heavy metals shape the human microbiome, drive disease, and reveal new therapeutic targets." />
  <meta property="og:url" content="${DOMAIN}/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="WikiBiome" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="WikiBiome — The Microbiome Metallomics Encyclopedia" />
  <meta name="twitter:description" content="The open encyclopedia of microbiome metallomics." />

  <script type="application/ld+json">${jsonLd}</script>

  ${cssLink}
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .static-content { max-width: 800px; margin: 0 auto; padding: 40px 20px; line-height: 1.7; color: #2c2c2c; }
    .static-content h1 { font-size: 32px; margin-bottom: 8px; color: #1a1a1a; }
    .static-content h2 { font-size: 20px; margin: 28px 0 12px; color: #333; }
    .static-content p { margin: 12px 0; }
    .static-content a { color: #b87333; text-decoration: underline; }
    .static-content ul { margin: 12px 0 12px 24px; }
    .static-content li { margin-bottom: 6px; }
  </style>
</head>
<body>
  <div id="root">
    <div class="static-content">
      <h1>WikiBiome</h1>
      <p><strong>The open encyclopedia of microbiome metallomics.</strong></p>
      <p>WikiBiome explores how heavy metals shape the human microbiome, drive disease, and reveal new therapeutic targets. A project of the <a href="https://paleofoundation.com">Paleo Foundation</a>.</p>

      <h2>Disease Signatures</h2>
      <p>Multi-layer microbiome signatures mapping metallomic, taxonomic, and ecological features of disease.</p>
      <ul>${signatureLinks}</ul>

      <h2>Browse by Category</h2>
      <ul>${categoryLinks}</ul>

      <h2>Recent Articles</h2>
      <ul>${recentPages}</ul>

      <p style="margin-top:40px;font-size:13px;color:#888;">WikiBiome contains ${CONTENT.pages.length} articles across ${Object.keys(categories).length} categories. <a href="/explore">Explore the knowledge graph</a> or <a href="/signatures">view disease signatures</a>.</p>
    </div>
  </div>
  ${scriptTagFull}
</body>
</html>`;
}

// ---- Category pages ----

function generateCategoryHtml(category, pages) {
  const catTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const description = `Browse ${pages.length} WikiBiome articles about ${catTitle.toLowerCase()} — microbiome metallomics research on ${catTitle.toLowerCase()}.`;

  const articleLinks = pages
    .sort((a, b) => (a.title || a.id).localeCompare(b.title || b.id))
    .map(p => {
      const desc = getPageDescription(p);
      return `<li><a href="/article/${p.id}">${escapeHtml(getPageTitle(p))}</a>${desc ? ` — ${escapeHtml(truncate(desc, 100))}` : ''}</li>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${GA_SNIPPET}
  <title>${escapeHtml(catTitle)} — WikiBiome</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${DOMAIN}/category/${category}" />

  <meta property="og:title" content="${escapeHtml(catTitle)} — WikiBiome" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${DOMAIN}/category/${category}" />

  ${cssLink}
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .static-content { max-width: 800px; margin: 0 auto; padding: 40px 20px; line-height: 1.7; color: #2c2c2c; }
    .static-content h1 { font-size: 28px; margin-bottom: 16px; color: #1a1a1a; }
    .static-content a { color: #b87333; text-decoration: underline; }
    .static-content ul { margin: 12px 0 12px 24px; }
    .static-content li { margin-bottom: 8px; }
    .static-content nav { font-size: 14px; margin-bottom: 24px; color: #888; }
    .static-content nav a { color: #b87333; }
  </style>
</head>
<body>
  <div id="root">
    <div class="static-content">
      <nav><a href="/">WikiBiome</a> &rsaquo; <span>${escapeHtml(catTitle)}</span></nav>
      <h1>${escapeHtml(catTitle)}</h1>
      <p>${pages.length} articles in this category.</p>
      <ul>${articleLinks}</ul>
    </div>
  </div>
  ${scriptTagFull}
</body>
</html>`;
}

// ---- Sitemap ----

function generateSitemap(urls) {
  const entries = urls.map(u => `  <url>
    <loc>${DOMAIN}${u.path}</loc>
    <lastmod>${u.lastmod || '2026-04-10'}</lastmod>
    <changefreq>${u.changefreq || 'weekly'}</changefreq>
    <priority>${u.priority || '0.5'}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

// ---- Robots.txt ----

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
}

// ---- Main execution ----

const urls = [];

// 1. Homepage
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), generateHomepageHtml());
urls.push({ path: '/', priority: '1.0', changefreq: 'daily' });
console.log('  Generated: / (homepage)');

// 2. Article pages
const articleDir = path.join(DIST_DIR, 'article');
if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });

let articleCount = 0;
for (const page of CONTENT.pages) {
  const pageDir = path.join(articleDir, page.id);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });

  const html = generatePageHtml(page, `/article/${page.id}`);
  fs.writeFileSync(path.join(pageDir, 'index.html'), html);

  urls.push({
    path: `/article/${page.id}`,
    lastmod: page.updated || page.created || '2026-04-10',
    priority: page.type === 'signature' ? '0.9' : page.type === 'entity' ? '0.7' : '0.6',
    changefreq: 'weekly'
  });
  articleCount++;
}
console.log(`  Generated: ${articleCount} article pages`);

// 3. Category pages
const categories = {};
for (const p of CONTENT.pages) {
  const cat = p.category || 'other';
  if (!categories[cat]) categories[cat] = [];
  categories[cat].push(p);
}

const categoryDir = path.join(DIST_DIR, 'category');
if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir, { recursive: true });

let catCount = 0;
for (const [cat, pages] of Object.entries(categories)) {
  const catDir = path.join(categoryDir, cat);
  if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

  fs.writeFileSync(path.join(catDir, 'index.html'), generateCategoryHtml(cat, pages));
  urls.push({ path: `/category/${cat}`, priority: '0.6', changefreq: 'weekly' });
  catCount++;
}
console.log(`  Generated: ${catCount} category pages`);

// 4. Special pages (signatures, explore, matrix)
for (const special of ['signatures', 'explore', 'matrix']) {
  const specialDir = path.join(DIST_DIR, special);
  if (!fs.existsSync(specialDir)) fs.mkdirSync(specialDir, { recursive: true });
  // Copy the main index.html for SPA fallback — these are interactive and don't benefit as much from static HTML
  fs.copyFileSync(path.join(DIST_DIR, 'index.html'), path.join(specialDir, 'index.html'));
  urls.push({ path: `/${special}`, priority: special === 'signatures' ? '0.8' : '0.4', changefreq: 'weekly' });
}
console.log('  Generated: 3 special pages (signatures, explore, matrix)');

// 5. Sitemap
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), generateSitemap(urls));
console.log(`  Generated: sitemap.xml (${urls.length} URLs)`);

// 6. Robots.txt
fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), generateRobotsTxt());
console.log('  Generated: robots.txt');

console.log(`\n=== Static generation complete ===`);
console.log(`Total crawlable URLs: ${urls.length}`);
console.log(`  Homepage: 1`);
console.log(`  Articles: ${articleCount}`);
console.log(`  Categories: ${catCount}`);
console.log(`  Special: 3`);
