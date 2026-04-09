#!/usr/bin/env node
/**
 * WikiBiome / Cureva Build Script
 *
 * Reads the Obsidian vault (wiki/) and generates structured JSON data
 * that the React app consumes. This makes the vault the single source
 * of truth — edit in Obsidian, build, deploy.
 *
 * Usage:
 *   node scripts/build-content.js [--platform wikibiome|cureva|all]
 *
 * Output:
 *   src/content.generated.json
 *
 * The platform flag controls visibility filtering:
 *   - wikibiome: entities, concepts, analyses, disease overviews (NO interventions/stops/clinical)
 *   - cureva: everything including signatures, interventions, stops
 *   - all: everything (for development/preview)
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Parse command line args
const args = process.argv.slice(2);
const platformFlag = args.includes('--platform')
  ? args[args.indexOf('--platform') + 1]
  : 'all';

const WIKI_ROOT = path.join(__dirname, '..', 'wiki');
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'content.generated.json');

// ─── YAML Frontmatter Parser ───────────────────────────────────────────
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, body: content };

  const yamlStr = match[1];
  const body = content.slice(match[0].length).trim();

  let frontmatter = {};
  try {
    frontmatter = yaml.load(yamlStr) || {};
  } catch (e) {
    console.warn('YAML parse error:', e.message);
    frontmatter = {};
  }

  return { frontmatter, body };
}

// ─── Markdown Section Parser ───────────────────────────────────────────
function parseSections(body) {
  const sections = [];
  const lines = body.split('\n');
  let currentHeading = null;
  let currentLevel = 0;
  let currentBody = [];
  let overview = '';

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)/);
    const h3Match = line.match(/^### (.+)/);
    const h1Match = line.match(/^# (.+)/);

    if (h1Match) {
      // Skip the title heading — it duplicates frontmatter title
      continue;
    }

    if (h2Match || h3Match) {
      // Save previous section
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          level: currentLevel,
          body: currentBody.join('\n').trim(),
        });
      } else if (currentBody.length > 0) {
        // Content before first heading = overview
        overview = currentBody.join('\n').trim();
      }

      currentHeading = (h2Match || h3Match)[1];
      currentLevel = h2Match ? 2 : 3;
      currentBody = [];
    } else {
      currentBody.push(line);
    }
  }

  // Save last section
  if (currentHeading) {
    sections.push({
      heading: currentHeading,
      level: currentLevel,
      body: currentBody.join('\n').trim(),
    });
  } else if (currentBody.length > 0) {
    overview = currentBody.join('\n').trim();
  }

  return { overview, sections };
}

// ─── Wikilink Extractor ────────────────────────────────────────────────
function extractWikilinks(text) {
  const links = new Set();
  const regex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    links.add(match[1].toLowerCase().replace(/\s+/g, '-'));
  }
  return Array.from(links);
}

// ─── Category Classifier ──────────────────────────────────────────────
function classifyCategory(frontmatter, dirName) {
  const type = frontmatter.type;
  const subtype = frontmatter.subtype;
  const tags = frontmatter.tags || [];

  if (dirName === 'signatures') return 'signature';
  if (dirName === 'interventions') return 'intervention';
  if (dirName === 'stops') return 'stop';
  if (dirName === 'analyses') return 'analysis';

  if (type === 'entity') {
    if (subtype === 'metal' || ['heavy-metal', 'essential-element', 'non-essential-metal', 'purely-toxic', 'metalloid'].some(t => tags.includes(t))) {
      return 'metal';
    }
    if (subtype === 'microbe' || subtype === 'fungus' || ['pathogen', 'gram-negative', 'gram-positive'].some(t => tags.includes(t))) {
      return 'microbe';
    }
    // Disease entities — check subtype first, then tags (including compound tags like 'neurodevelopmental-disease')
    if (subtype === 'disease' || subtype === 'condition') return 'disease';
    if (['disease', 'condition', 'gynecological', 'autoimmune', 'metabolic', 'neurodegenerative', 'renal'].some(t => tags.includes(t))) {
      return 'disease';
    }
    // Catch compound disease tags like 'neurodevelopmental-disease', 'endocrine-disease', etc.
    if (tags.some(t => t.endsWith('-disease') || t.endsWith('-disorder') || t.endsWith('-syndrome') || t.endsWith('-condition'))) {
      return 'disease';
    }
    // Default entity — check if the title suggests a metal by common names
    const metalNames = ['nickel','cadmium','lead','arsenic','chromium','copper','zinc','iron','manganese','aluminum','selenium','mercury'];
    if (metalNames.includes(frontmatter.title?.toLowerCase())) return 'metal';

    return 'entity';
  }

  if (type === 'concept') {
    // Defensive mechanisms
    if (['nutritional-immunity', 'calprotectin', 'lactoferrin', 'hepcidin', 'glutathione'].some(t => tags.includes(t) || frontmatter.title?.toLowerCase().includes(t))) {
      return 'defense';
    }
    return 'mechanism';
  }

  return 'other';
}

// ─── Platform Visibility Filter ────────────────────────────────────────
function isVisibleOnPlatform(category, frontmatter, platform) {
  if (platform === 'all') return true;

  // Explicit platform tag in frontmatter overrides category rules
  if (frontmatter.platform) {
    if (frontmatter.platform === 'both') return true;
    return frontmatter.platform === platform;
  }

  if (platform === 'wikibiome') {
    // WikiBiome: entities, concepts, analyses — NO interventions, stops, or full signatures
    return ['metal', 'microbe', 'disease', 'entity', 'mechanism', 'defense', 'analysis'].includes(category);
  }

  if (platform === 'cureva') {
    // Cureva: everything
    return true;
  }

  return true;
}

// ─── Read All Pages from a Directory ───────────────────────────────────
function readDirectory(dirPath, dirName) {
  const pages = [];

  if (!fs.existsSync(dirPath)) return pages;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && !f.startsWith('_'));

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(raw);
    const { overview, sections } = parseSections(body);
    const wikilinks = extractWikilinks(raw);
    const category = classifyCategory(frontmatter, dirName);
    const id = file.replace('.md', '');

    pages.push({
      id,
      title: frontmatter.title || id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      type: frontmatter.type || dirName,
      category,
      tags: frontmatter.tags || [],
      sources: frontmatter.sources || [],
      created: frontmatter.created,
      updated: frontmatter.updated,
      frontmatter, // full frontmatter for signature layers, etc.
      overview,
      sections,
      wikilinks,
      sourceDir: dirName,
    });
  }

  return pages;
}

// ─── Build Knowledge Graph ─────────────────────────────────────────────
function buildGraph(pages) {
  const nodes = [];
  const links = [];
  const pageIds = new Set(pages.map(p => p.id));

  for (const page of pages) {
    nodes.push({
      id: page.id,
      label: page.title,
      category: page.category,
      sourceCount: page.sources.length,
    });

    // Create links from wikilinks
    for (const target of page.wikilinks) {
      if (pageIds.has(target) && target !== page.id) {
        links.push({
          source: page.id,
          target: target,
        });
      }
    }
  }

  // Deduplicate links
  const linkSet = new Set();
  const uniqueLinks = links.filter(l => {
    const key = [l.source, l.target].sort().join('→');
    if (linkSet.has(key)) return false;
    linkSet.add(key);
    return true;
  });

  return { nodes, links: uniqueLinks };
}

// ─── Build Evidence Matrix ─────────────────────────────────────────────
function buildEvidenceMatrix(pages) {
  // Evidence matrix derived from actual vault grep counts — each cell = number of
  // source files in wiki/sources/ that mention BOTH the metal AND the condition.
  // Generated 2026-04-09 from 224 source files. Rebuild by re-running grep audit.
  const metals = ["Ni", "Cd", "Pb", "As", "Cr", "Cu", "Zn", "Fe", "Mn", "Al", "Se", "Hg"];
  const diseases = ["Endometriosis", "Crohn's", "Graves'", "PCOS", "Cancer", "Alzheimer's", "RA", "Kidney", "ASD", "Obesity", "Diabetes", "Thyroid"];
  const data = [
    [11, 1, 1, 8, 30, 6, 6, 19, 7, 10, 10, 7],   // Ni
    [2, 2, 2, 12, 24, 10, 7, 23, 7, 4, 7, 6],     // Cd
    [4, 1, 2, 12, 20, 15, 8, 20, 7, 4, 7, 5],     // Pb
    [0, 0, 0, 4, 14, 6, 2, 11, 3, 2, 6, 1],       // As
    [0, 1, 0, 2, 12, 2, 5, 12, 0, 1, 4, 3],       // Cr
    [0, 2, 2, 9, 17, 8, 4, 9, 4, 3, 3, 5],        // Cu
    [4, 2, 2, 14, 17, 7, 4, 8, 6, 2, 3, 5],       // Zn
    [5, 2, 2, 12, 29, 18, 7, 24, 4, 8, 7, 7],     // Fe
    [0, 2, 1, 5, 11, 6, 0, 4, 2, 3, 1, 2],        // Mn
    [0, 0, 0, 0, 5, 5, 0, 1, 1, 0, 0, 0],         // Al
    [0, 1, 3, 3, 14, 3, 2, 5, 1, 0, 0, 5],        // Se
    [1, 0, 2, 6, 8, 8, 2, 6, 5, 1, 2, 2],         // Hg
  ];

  // Convert to the nested object format the app expects
  const matrix = {};
  for (let mi = 0; mi < metals.length; mi++) {
    const metalId = metals[mi];
    matrix[metalId] = {};
    for (let di = 0; di < diseases.length; di++) {
      matrix[metalId][diseases[di]] = data[mi][di];
    }
  }

  return {
    metalIds: metals,
    diseaseIds: diseases,
    data: matrix,
  };
}

// ─── Extract Signature Data for Radar Charts ───────────────────────────
function extractSignatures(pages) {
  const signatures = {};
  const sigPages = pages.filter(p => p.sourceDir === 'signatures');

  for (const page of sigPages) {
    const fm = page.frontmatter;
    signatures[page.id] = {
      id: page.id,
      name: page.title.replace(/ — Microbiome Signature$/, ''),
      paperCount: page.sources.length,
      metallomicSignature: fm.metallomic_signature || {},
      taxonomicSignature: fm.taxonomic_signature || {},
      nutritionalImmunity: fm.nutritional_immunity || {},
      ecologicalFeatures: fm.ecological_features || [],
      virulenceEnzymes: fm.virulence_enzymes || [],
      curevaStatus: fm.cureva_status || 'unknown',
      validatedInterventions: fm.validated_interventions || [],
      stops: fm.stops || [],
    };
  }

  return signatures;
}

// ─── Compute Stats ─────────────────────────────────────────────────────
function computeStats(allPages, sourcesCount) {
  return {
    sources: sourcesCount,
    entities: allPages.filter(p => ['metal', 'microbe', 'disease', 'entity'].includes(p.category)).length,
    concepts: allPages.filter(p => ['mechanism', 'defense'].includes(p.category)).length,
    signatures: allPages.filter(p => p.sourceDir === 'signatures').length,
    interventions: allPages.filter(p => p.sourceDir === 'interventions').length,
    stops: allPages.filter(p => p.sourceDir === 'stops').length,
    analyses: allPages.filter(p => p.sourceDir === 'analyses').length,
    totalPages: allPages.length,
  };
}

// ─── MAIN ──────────────────────────────────────────────────────────────
function main() {
  console.log(`Building WikiBiome content (platform: ${platformFlag})...`);
  console.log(`Reading vault from: ${WIKI_ROOT}`);

  // Read all directories
  const entities = readDirectory(path.join(WIKI_ROOT, 'entities'), 'entities');
  const concepts = readDirectory(path.join(WIKI_ROOT, 'concepts'), 'concepts');
  const signatures = readDirectory(path.join(WIKI_ROOT, 'signatures'), 'signatures');
  const interventions = readDirectory(path.join(WIKI_ROOT, 'interventions'), 'interventions');
  const stops = readDirectory(path.join(WIKI_ROOT, 'stops'), 'stops');
  const analyses = readDirectory(path.join(WIKI_ROOT, 'analyses'), 'analyses');

  // Parse source pages for citation metadata (title, authors, journal, year, DOI)
  const sourcesDir = path.join(WIKI_ROOT, 'sources');
  const sourceLookup = {};
  let sourcesCount = 0;
  if (fs.existsSync(sourcesDir)) {
    const sourceFiles = fs.readdirSync(sourcesDir).filter(f => f.endsWith('.md'));
    sourcesCount = sourceFiles.length;
    for (const file of sourceFiles) {
      const content = fs.readFileSync(path.join(sourcesDir, file), 'utf8');
      const { frontmatter: fm } = parseFrontmatter(content);
      const slug = file.replace(/\.md$/, '');
      sourceLookup[slug] = {
        title: fm.title || slug.replace(/-/g, ' '),
        authors: Array.isArray(fm.authors) ? fm.authors : (fm.authors ? [fm.authors] : []),
        year: fm.year || '',
        journal: fm.journal || '',
        doi: fm.doi || '',
      };
    }
    console.log(`  Source metadata: ${Object.keys(sourceLookup).length} entries`);
  }

  const allPages = [...entities, ...concepts, ...signatures, ...interventions, ...stops, ...analyses];

  console.log(`  Entities: ${entities.length}`);
  console.log(`  Concepts: ${concepts.length}`);
  console.log(`  Signatures: ${signatures.length}`);
  console.log(`  Interventions: ${interventions.length}`);
  console.log(`  STOPs: ${stops.length}`);
  console.log(`  Analyses: ${analyses.length}`);
  console.log(`  Sources: ${sourcesCount}`);
  console.log(`  Total: ${allPages.length} content pages`);

  // Filter by platform visibility
  const visiblePages = allPages.filter(p => isVisibleOnPlatform(p.category, p.frontmatter, platformFlag));
  console.log(`  Visible on ${platformFlag}: ${visiblePages.length}`);

  // Build derived data structures
  const graph = buildGraph(visiblePages);
  const evidenceMatrix = buildEvidenceMatrix(allPages); // matrix uses all pages for completeness
  const signatureData = extractSignatures(allPages);
  const stats = computeStats(allPages, sourcesCount);

  // ── Backlinks: for each page, find all other pages that link TO it ──
  const visibleIds = new Set(visiblePages.map(p => p.id));
  const backlinksMap = {};
  for (const page of visiblePages) {
    backlinksMap[page.id] = [];
  }
  for (const page of visiblePages) {
    for (const link of (page.wikilinks || [])) {
      if (visibleIds.has(link) && link !== page.id) {
        if (!backlinksMap[link]) backlinksMap[link] = [];
        if (!backlinksMap[link].includes(page.id)) {
          backlinksMap[link].push(page.id);
        }
      }
    }
  }
  let totalBacklinks = 0;
  for (const page of visiblePages) {
    page.backlinks = backlinksMap[page.id] || [];
    totalBacklinks += page.backlinks.length;
  }

  // ── Related articles: score by shared tags + shared sources + shared backlinks ──
  for (const page of visiblePages) {
    const pageTags = new Set(page.tags || []);
    const pageSources = new Set((page.sources || []).map(s => s.replace(/\.md$/, '')));
    const pageBacklinks = new Set(page.backlinks || []);
    const pageLinks = new Set(page.wikilinks || []);

    const scores = [];
    for (const other of visiblePages) {
      if (other.id === page.id) continue;

      // Don't suggest pages already directly linked
      if (pageLinks.has(other.id)) continue;

      let score = 0;

      // Shared tags (weighted by tag rarity)
      const otherTags = new Set(other.tags || []);
      for (const tag of pageTags) {
        if (otherTags.has(tag)) score += 2;
      }

      // Shared sources
      const otherSources = new Set((other.sources || []).map(s => s.replace(/\.md$/, '')));
      for (const src of pageSources) {
        if (otherSources.has(src)) score += 3;
      }

      // Shared backlinks (pages that reference both)
      const otherBacklinks = new Set(other.backlinks || []);
      for (const bl of pageBacklinks) {
        if (otherBacklinks.has(bl)) score += 2;
      }

      // Same category bonus
      if (other.category === page.category) score += 1;

      if (score > 0) {
        scores.push({ id: other.id, score });
      }
    }

    // Top 8 related articles, sorted by score descending
    page.related = scores
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(s => ({ id: s.id, score: s.score }));
  }

  console.log(`  Graph: ${graph.nodes.length} nodes, ${graph.links.length} links`);
  console.log(`  Backlinks: ${totalBacklinks} total`);

  // Assemble output
  const output = {
    _generated: new Date().toISOString(),
    _platform: platformFlag,
    _stats: stats,
    pages: visiblePages,
    graph,
    evidenceMatrix,
    signatures: signatureData,
    sourceLookup,
  };

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write JSON
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`\nOutput written to: ${OUTPUT_PATH}`);
  console.log(`File size: ${(fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)} KB`);
}

main();
