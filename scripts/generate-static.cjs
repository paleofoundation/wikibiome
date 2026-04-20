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

const DOMAIN = 'https://www.wikibiome.com';
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

// Category descriptions for richer homepage/category page content
function getCategoryDescription(cat) {
  const descs = {
    microbe: 'Bacteria, fungi, and archaea — their metal dependencies, virulence enzymes, and ecological roles in the human microbiome',
    mechanism: 'Biological mechanisms connecting heavy metals to microbiome disruption, including nutritional immunity, mis-metallation, and siderophore competition',
    disease: 'Conditions linked to heavy metal exposure and microbiome disruption, from autoimmune to neurodegenerative disorders',
    metal: 'Essential and toxic metals — their biological roles, exposure routes, and impact on microbial ecology',
    defense: 'Host defense systems including calprotectin, lactoferrin, hepcidin, and other nutritional immunity proteins',
    signature: 'Multi-layer disease signatures mapping metallomic, taxonomic, ecological, and virulence features',
    stop: 'Interventions that are counterproductive despite conventional wisdom — where standard-of-care may feed the disease',
    intervention: 'Evidence-based therapeutic approaches validated through the Triangle Test framework',
    analysis: 'Cross-cutting comparisons and syntheses across conditions, metals, and mechanisms',
  };
  return descs[cat] || '';
}

// Convert markdown-ish text to rich HTML for crawlers
function markdownToHtml(text) {
  if (!text) return '';

  // Process block-level elements first, then inline
  const lines = text.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line — skip
    if (line.trim() === '') { i++; continue; }

    // Table detection: line with | characters, followed by separator row
    if (line.includes('|') && i + 1 < lines.length && /^\|?\s*[-:]+[-| :]*$/.test(lines[i + 1]?.trim())) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      blocks.push(renderTable(tableLines));
      continue;
    }

    // Unordered list item
    if (/^[-*]\s+/.test(line.trim())) {
      const listItems = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push('<ul>' + listItems.map(li => `<li>${inlineMarkdown(escapeHtml(li))}</li>`).join('') + '</ul>');
      continue;
    }

    // Ordered list item
    if (/^\d+[.)]\s+/.test(line.trim())) {
      const listItems = [];
      while (i < lines.length && /^\d+[.)]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+[.)]\s+/, ''));
        i++;
      }
      blocks.push('<ol>' + listItems.map(li => `<li>${inlineMarkdown(escapeHtml(li))}</li>`).join('') + '</ol>');
      continue;
    }

    // Regular paragraph — collect consecutive non-blank, non-special lines
    const paraLines = [];
    while (i < lines.length && lines[i].trim() !== '' &&
           !/^[-*]\s+/.test(lines[i].trim()) &&
           !/^\d+[.)]\s+/.test(lines[i].trim()) &&
           !(lines[i].includes('|') && i + 1 < lines.length && /^\|?\s*[-:]+[-| :]*$/.test(lines[i + 1]?.trim()))) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length) {
      blocks.push(`<p>${inlineMarkdown(escapeHtml(paraLines.join(' ')))}</p>`);
    }
  }

  return blocks.join('\n');
}

// Render a markdown table to HTML
function renderTable(tableLines) {
  if (tableLines.length < 2) return '';
  const parseRow = (line) => line.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  const headers = parseRow(tableLines[0]);
  // Skip separator row (index 1)
  const rows = tableLines.slice(2).map(parseRow);

  let html = '<table><thead><tr>';
  html += headers.map(h => `<th>${inlineMarkdown(escapeHtml(h))}</th>`).join('');
  html += '</tr></thead><tbody>';
  for (const row of rows) {
    html += '<tr>' + row.map(c => `<td>${inlineMarkdown(escapeHtml(c))}</td>`).join('') + '</tr>';
  }
  html += '</tbody></table>';
  return html;
}

// Process inline markdown: bold, italic, wikilinks, source refs, em dashes
function inlineMarkdown(html) {
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Triple-bracket source citations → remove brackets, keep as plain text
  html = html.replace(/\[\[\[([^\]]+)\]\]\]/g, '($1)');
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
  // Double-dash to em-dash
  html = html.replace(/--/g, '&mdash;');
  return html;
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
    },
    'inLanguage': 'en',
  };

  const dateModified = page.updated || page.created || '2026-04-10';

  // Disease entity pages — MedicalCondition + MedicalWebPage
  if (page.type === 'entity' && page.subtype === 'disease') {
    const condName = getPageTitle(page);
    const sigKey = (page.id || '').replace(/^disease-/, '') + '-signature';
    const sig = CONTENT.signatures?.[sigKey] || null;
    const jsonLd = {
      ...base,
      '@type': ['MedicalWebPage', 'Article'],
      'name': condName,
      'headline': `${condName} — Microbiome & Metallomic Associations`,
      'description': getPageDescription(page),
      'dateModified': dateModified,
      'about': {
        '@type': 'MedicalCondition',
        'name': condName,
        ...(page.frontmatter?.icd_10 ? { 'code': { '@type': 'MedicalCode', 'code': page.frontmatter.icd_10, 'codingSystem': 'ICD-10' } } : {}),
        ...(page.frontmatter?.global_prevalence ? { 'epidemiology': page.frontmatter.global_prevalence } : {}),
      },
      'citation': (page.sources || []).slice(0, 10).map(s => {
        const sp = CONTENT.pages.find(p => p.id === s);
        if (!sp) return null;
        return {
          '@type': 'ScholarlyArticle',
          'name': sp.title || s,
          ...(sp.frontmatter?.doi && sp.frontmatter.doi !== 'not yet verified' ? { 'url': sp.frontmatter.doi.startsWith('http') ? sp.frontmatter.doi : `https://doi.org/${sp.frontmatter.doi}` } : {}),
          ...(sp.frontmatter?.authors ? { 'author': sp.frontmatter.authors.map(a => ({ '@type': 'Person', 'name': a })) } : {}),
          ...(sp.frontmatter?.year ? { 'datePublished': String(sp.frontmatter.year) } : {}),
          ...(sp.frontmatter?.journal ? { 'isPartOf': { '@type': 'Periodical', 'name': sp.frontmatter.journal } } : {}),
        };
      }).filter(Boolean),
    };
    // Add associated conditions
    if (page.frontmatter?.associated_conditions) {
      jsonLd.about.relatedCondition = Object.keys(page.frontmatter.associated_conditions).map(c => ({
        '@type': 'MedicalCondition',
        'name': c.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      }));
    }
    return jsonLd;
  }

  // Microbe/fungus/archaeon entity pages
  if (page.type === 'entity' && ['microbe', 'fungus', 'archaeon'].includes(page.subtype)) {
    return {
      ...base,
      '@type': ['Article', 'MedicalWebPage'],
      'name': getPageTitle(page),
      'headline': `${getPageTitle(page)} — Microbiome Role & Metal Dependencies`,
      'description': getPageDescription(page),
      'dateModified': dateModified,
      'about': {
        '@type': 'Thing',
        'name': getPageTitle(page),
        'description': `Microorganism in the human microbiome with documented metal dependencies and roles in health and disease`,
        'additionalType': 'https://www.wikidata.org/wiki/Q36747', // microorganism
      },
    };
  }

  // Metal entity pages — ChemicalSubstance
  if (page.type === 'entity' && page.subtype === 'metal') {
    return {
      ...base,
      '@type': 'Article',
      'name': getPageTitle(page),
      'headline': `${getPageTitle(page)} — Biological Roles & Microbiome Impact`,
      'description': getPageDescription(page),
      'dateModified': dateModified,
      'about': {
        '@type': 'ChemicalSubstance',
        'name': getPageTitle(page),
        ...(page.frontmatter?.symbol ? { 'alternateName': page.frontmatter.symbol } : {}),
      },
    };
  }

  // Signature pages — MedicalScholarlyArticle
  if (page.type === 'signature') {
    const condName = getPageTitle(page).replace(/ Microbiome Signature$/, '').replace(/ Metallomic Signature$/, '');
    return {
      ...base,
      '@type': 'MedicalScholarlyArticle',
      'name': getPageTitle(page),
      'headline': `${condName} — Metallomic & Taxonomic Microbiome Signature`,
      'description': getPageDescription(page),
      'dateModified': dateModified,
      'about': {
        '@type': 'MedicalCondition',
        'name': condName,
      },
      'publicationType': 'Review',
    };
  }

  // Source pages — ScholarlyArticle
  if (page.type === 'source') {
    const doi = page.frontmatter?.doi;
    return {
      ...base,
      '@type': 'ScholarlyArticle',
      'name': getPageTitle(page),
      'headline': getPageTitle(page),
      'description': getPageDescription(page),
      'dateModified': dateModified,
      ...(page.frontmatter?.authors ? { 'author': page.frontmatter.authors.map(a => ({ '@type': 'Person', 'name': a })) } : {}),
      ...(page.frontmatter?.year ? { 'datePublished': String(page.frontmatter.year) } : {}),
      ...(page.frontmatter?.journal ? { 'isPartOf': { '@type': 'Periodical', 'name': page.frontmatter.journal } } : {}),
      ...(doi && doi !== 'not yet verified' ? { 'sameAs': doi.startsWith('http') ? doi : `https://doi.org/${doi}` } : {}),
      ...(page.frontmatter?.evidence_level ? { 'learningResourceType': page.frontmatter.evidence_level } : {}),
    };
  }

  // Default article
  return {
    ...base,
    '@type': 'Article',
    'name': getPageTitle(page),
    'headline': `${getPageTitle(page)} — WikiBiome`,
    'description': getPageDescription(page),
    'dateModified': dateModified,
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
    .static-content table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 14px; }
    .static-content th, .static-content td { border: 1px solid #e0dcd7; padding: 8px 12px; text-align: left; }
    .static-content th { background: #f8f6f3; font-weight: 600; color: #333; }
    .static-content tr:nth-child(even) { background: #faf9f7; }
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
    const catDesc = getCategoryDescription(cat);
    categoryLinks += `<li><a href="/category/${cat}"><strong>${catTitle}</strong></a> (${pages.length} articles)${catDesc ? ` — ${catDesc}` : ''}</li>\n`;
  }

  let recentPages = CONTENT.pages
    .filter(p => p.updated || p.created)
    .sort((a, b) => (b.updated || b.created || '').localeCompare(a.updated || a.created || ''))
    .slice(0, 20)
    .map(p => {
      const desc = getPageDescription(p);
      return `<li><a href="/article/${p.id}">${escapeHtml(getPageTitle(p))}</a>${desc ? ` — ${escapeHtml(truncate(desc, 120))}` : ''}</li>`;
    })
    .join('\n');

  const signatureLinks = CONTENT.pages
    .filter(p => p.type === 'signature')
    .map(p => {
      const desc = getPageDescription(p);
      return `<li><a href="/article/${p.id}"><strong>${escapeHtml(getPageTitle(p))}</strong></a>${desc ? `<br/><span style="font-size:14px;color:#555;">${escapeHtml(truncate(desc, 160))}</span>` : ''}</li>`;
    })
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

      <h2>What is Microbiome Metallomics?</h2>
      <p>Microbiome metallomics is the study of how metals — both essential (iron, zinc, manganese) and toxic (lead, cadmium, mercury, arsenic) — shape the composition and behavior of human-associated microbial communities. Heavy metals act as selective pressures on the microbiome, favoring metal-tolerant or metal-dependent organisms and suppressing sensitive beneficial species. This field integrates toxicology, microbial ecology, nutritional immunology, and clinical medicine to reveal how environmental metal exposures contribute to chronic disease through microbial mechanisms.</p>
      <p>WikiBiome currently contains <strong>${CONTENT.pages.length} articles</strong> covering ${CONTENT.pages.filter(p => p.category === 'microbe').length} microorganisms, ${CONTENT.pages.filter(p => p.category === 'metal').length} metals, ${CONTENT.pages.filter(p => p.category === 'mechanism').length} biological mechanisms, and ${CONTENT.pages.filter(p => p.type === 'signature').length} disease signatures — all sourced from peer-reviewed research.</p>

      <h2>Disease Signatures</h2>
      <p>Each disease signature maps five layers of evidence: the metallomic profile (which metals are elevated or depleted), the taxonomic signature (which microbes are enriched or lost), the nutritional immunity response (how the host fights back), the ecological state (oxygen, pH, biofilm), and the virulence enzymes that connect metal availability to pathogenic function.</p>
      <ul>${signatureLinks}</ul>

      <h2>Browse by Category</h2>
      <ul>${categoryLinks}</ul>

      <h2>Recent Articles</h2>
      <ul>${recentPages}</ul>

      <footer style="margin-top:40px;padding-top:20px;border-top:1px solid #e8e4df;font-size:13px;color:#888;">
        <p>WikiBiome is a project of the <a href="https://paleofoundation.com">Paleo Foundation</a>, advancing microbiome medicine through open scientific education. <a href="/explore">Explore the knowledge graph</a> or <a href="/signatures">view disease signatures</a>.</p>
      </footer>
    </div>
  </div>
  ${scriptTagFull}
</body>
</html>`;
}

// ---- Category pages ----

function generateCategoryHtml(category, pages) {
  const catTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const catDesc = getCategoryDescription(category);
  const description = catDesc
    ? `${catTitle} — ${catDesc}. Browse ${pages.length} WikiBiome articles.`
    : `Browse ${pages.length} WikiBiome articles about ${catTitle.toLowerCase()} — microbiome metallomics research.`;

  const articleLinks = pages
    .sort((a, b) => (a.title || a.id).localeCompare(b.title || b.id))
    .map(p => {
      const desc = getPageDescription(p);
      return `<li><a href="/article/${p.id}"><strong>${escapeHtml(getPageTitle(p))}</strong></a>${desc ? `<br/><span style="font-size:14px;color:#555;">${escapeHtml(truncate(desc, 160))}</span>` : ''}</li>`;
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
      <p>${catDesc ? escapeHtml(catDesc) + '. ' : ''}${pages.length} articles in this category.</p>
      <ul>${articleLinks}</ul>
      <footer style="margin-top:40px;padding-top:20px;border-top:1px solid #e8e4df;font-size:13px;color:#888;">
        <p><a href="/">WikiBiome</a> is a project of the <a href="https://paleofoundation.com">Paleo Foundation</a>.</p>
      </footer>
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
Disallow: /outreach

Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-full.xml
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
let stubExcludedFromSitemap = 0;
const seenArticleIds = new Set();
for (const page of CONTENT.pages) {
  const pageDir = path.join(articleDir, page.id);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });

  const html = generatePageHtml(page, `/article/${page.id}`);
  fs.writeFileSync(path.join(pageDir, 'index.html'), html);

  // §2f: stubs render (so direct links work and the UI banner can admit the
  // stub status) but they are excluded from sitemaps so Google does not index
  // thin or zero-reference pages. `isStub` is set by build-content.cjs.
  if (page.isStub) {
    stubExcludedFromSitemap++;
    articleCount++;
    continue;
  }

  // Deduplicate sitemap entries — keep the highest priority version
  if (!seenArticleIds.has(page.id)) {
    seenArticleIds.add(page.id);
    urls.push({
      path: `/article/${page.id}`,
      lastmod: page.updated || page.created || '2026-04-10',
      priority: page.type === 'signature' ? '0.9' : page.type === 'entity' ? '0.7' : '0.6',
      changefreq: 'weekly'
    });
  } else {
    // Update priority if this version is higher (e.g., signature > entity)
    const existing = urls.find(u => u.path === `/article/${page.id}`);
    if (existing) {
      const newPriority = page.type === 'signature' ? '0.9' : page.type === 'entity' ? '0.7' : '0.6';
      if (parseFloat(newPriority) > parseFloat(existing.priority)) {
        existing.priority = newPriority;
      }
      // Also update lastmod if newer
      const newDate = page.updated || page.created || '2026-04-10';
      if (newDate > existing.lastmod) {
        existing.lastmod = newDate;
      }
    }
  }
  articleCount++;
}
console.log(`  Generated: ${articleCount} article pages (${stubExcludedFromSitemap} stubs excluded from sitemap)`);

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
// NOTE: /outreach is intentionally excluded — it is an internal author-contact
// dashboard (exposes corresponding-author emails) and must not be indexed or
// discoverable via navigation. The route still resolves in the SPA for direct
// URL access during local work.
for (const special of ['signatures', 'explore', 'matrix', 'tags', 'about', 'privacy', 'terms', 'contact', 'support', 'submit', 'vote', 'compare']) {
  const specialDir = path.join(DIST_DIR, special);
  if (!fs.existsSync(specialDir)) fs.mkdirSync(specialDir, { recursive: true });
  // Copy the main index.html for SPA fallback — these are interactive and don't benefit as much from static HTML
  fs.copyFileSync(path.join(DIST_DIR, 'index.html'), path.join(specialDir, 'index.html'));
  const prio = special === 'signatures' ? '0.8' : ['about', 'support', 'submit'].includes(special) ? '0.6' : '0.4';
  urls.push({ path: `/${special}`, priority: prio, changefreq: 'monthly' });
}
console.log('  Generated: 12 special pages (signatures, explore, matrix, tags, about, privacy, terms, contact, support, submit, vote, compare)');

// 5. Sitemaps — focused flagship + full
// Strategy: a new domain with no backlinks cannot get 270 URLs crawled. We submit
// a tiny flagship sitemap so Google spends crawl budget on the pages that matter.
// The full sitemap stays available for discovery but is deprioritized.
const FLAGSHIP_SLUGS = new Set([
  // Signatures (priority 1.0 — most commercially and narratively important)
  'cerebral-palsy', 'depression', 'erectile-dysfunction', 'fibromyalgia',
  'necrotizing-enterocolitis', 'pmdd', 'female-infertility',
  // Metal anchors
  'lead', 'cadmium', 'mercury', 'arsenic', 'nickel', 'iron', 'zinc', 'copper',
  // Microbe anchors (highest-traffic search potential)
  'escherichia-coli', 'candida-albicans', 'akkermansia-muciniphila',
  'bacteroides-fragilis', 'fusobacterium-nucleatum', 'pseudomonas-aeruginosa',
  // Concept anchors
  'nutritional-immunity', 'heavy-metals', 'mis-metallation',
]);
const FLAGSHIP_PATHS = new Set([
  '/', '/signatures',
  '/category/signature', '/category/metal', '/category/microbe', '/category/disease',
  ...Array.from(FLAGSHIP_SLUGS).map(s => `/article/${s}`),
]);

const flagshipUrls = urls
  .filter(u => FLAGSHIP_PATHS.has(u.path))
  .map(u => ({ ...u, priority: u.path === '/' ? '1.0' : '0.9', changefreq: 'daily' }));

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), generateSitemap(flagshipUrls));
console.log(`  Generated: sitemap.xml — FLAGSHIP (${flagshipUrls.length} URLs)`);

fs.writeFileSync(path.join(DIST_DIR, 'sitemap-full.xml'), generateSitemap(urls));
console.log(`  Generated: sitemap-full.xml (${urls.length} URLs)`);

// 6. Robots.txt
fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), generateRobotsTxt());
console.log('  Generated: robots.txt');

console.log(`\n=== Static generation complete ===`);
console.log(`Total crawlable URLs: ${urls.length}`);
console.log(`  Homepage: 1`);
console.log(`  Articles: ${articleCount}`);
console.log(`  Categories: ${catCount}`);
console.log(`  Special: 3`);
