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
const CUREVA_ROOT = path.join(__dirname, '..', 'cureva');
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
    links.add(match[1].toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
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

  if (type === 'reference' || type === 'overview') return 'reference';

  return 'other';
}

// ─── Platform Visibility Filter ────────────────────────────────────────
// Internal types (operational templates, outreach drafts, build artifacts)
// never render on WikiBiome — only on Cureva or when explicitly requested.
// This is a §9 boundary defense: the default for an untagged file is
// "do NOT publish publicly." See Rule 2 (fail loud, not silent) and Rule 8
// (boundary discipline) in CLAUDE.md.
const INTERNAL_TYPES = new Set(['internal', 'template', 'operational']);

function isVisibleOnPlatform(category, frontmatter, platform) {
  if (platform === 'all') return true;

  // type: internal / template / operational — never public
  const fmType = String(frontmatter.type || '').toLowerCase();
  if (INTERNAL_TYPES.has(fmType) && platform === 'wikibiome') return false;

  // Explicit platform tag in frontmatter overrides category rules
  if (frontmatter.platform) {
    if (frontmatter.platform === 'both') return true;
    return frontmatter.platform === platform;
  }

  if (platform === 'wikibiome') {
    // WikiBiome: entities, concepts, analyses — NO interventions, stops, or full signatures
    return ['metal', 'microbe', 'disease', 'entity', 'mechanism', 'defense', 'analysis', 'reference'].includes(category);
  }

  if (platform === 'cureva') {
    // Cureva: everything
    return true;
  }

  return true;
}

// ─── §2f Source Density Thresholds ─────────────────────────────────────
// Per CLAUDE.md §2f. `build-content.cjs` MUST refuse to render sub-threshold
// non-stub pages as publishable to WikiBiome. Stubs (stub:true) are allowed
// but carry a visible banner in the UI (see wikibiome-v8.jsx).
const SECTION_2F_THRESHOLDS = {
  metal: 5,
  microbe: 3, fungus: 3, archaeon: 3,
  disease: 5,
  person: 2, organization: 2,
  concept: 3,
  signature: 10,
  intervention: 3,
  stop: 2,
  // Fallback: 'entity' without subtype
  entity: 3,
};

function sourceCountFor(page) {
  const fm = page.frontmatter || {};
  const sources = Array.isArray(fm.sources) ? fm.sources.filter(Boolean) : [];
  return sources.length;
}

function thresholdFor(page) {
  const fm = page.frontmatter || {};
  const subtype = fm.subtype || '';
  const type = fm.type || '';
  return SECTION_2F_THRESHOLDS[subtype] || SECTION_2F_THRESHOLDS[type] || 3;
}

function isStub(page) {
  const fm = page.frontmatter || {};
  return fm.stub === true || fm.stub === 'true';
}

// Attach audit flags to every page. The renderer uses page.isStub and
// page.belowThreshold to decide whether to show the stub banner.
function annotatePageWithThreshold(page) {
  const count = sourceCountFor(page);
  const threshold = thresholdFor(page);
  page.sourceCount = count;
  page.threshold = threshold;
  page.belowThreshold = count < threshold;
  page.isStub = isStub(page);
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
    const id = file.replace('.md', '').toLowerCase();

    pages.push({
      id,
      title: frontmatter.title || file.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
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

// ─── Compute Associated Conditions (Pairwise Signature Overlap) ───────
function computeAssociatedConditions(signatureData) {
  const sigIds = Object.keys(signatureData);
  if (sigIds.length < 2) return { pairs: [], clusters: [] };

  // Helper: extract taxon IDs from enriched/depleted arrays
  function extractTaxonIds(taxonArray) {
    if (!Array.isArray(taxonArray)) return [];
    return taxonArray.map(t => {
      const raw = typeof t === 'string' ? t : (t.taxon || '');
      return raw.replace(/\[\[|\]\]/g, '').toLowerCase().replace(/\s+/g, '-');
    }).filter(Boolean);
  }

  // Helper: compute set intersection
  function intersect(a, b) {
    const setB = new Set(b.map(x => (x || '').toLowerCase().replace(/\s+/g, '-')));
    return a.filter(x => setB.has((x || '').toLowerCase().replace(/\s+/g, '-')));
  }

  // Compute pairwise overlap
  const pairs = [];
  for (let i = 0; i < sigIds.length; i++) {
    for (let j = i + 1; j < sigIds.length; j++) {
      const a = signatureData[sigIds[i]];
      const b = signatureData[sigIds[j]];

      const aMetalsUp = (a.metallomicSignature?.elevated || []);
      const bMetalsUp = (b.metallomicSignature?.elevated || []);
      const aMetalsDown = (a.metallomicSignature?.depleted || []);
      const bMetalsDown = (b.metallomicSignature?.depleted || []);

      const sharedMetalsElevated = intersect(aMetalsUp, bMetalsUp);
      const sharedMetalsDepleted = intersect(aMetalsDown, bMetalsDown);

      const aTaxaUp = extractTaxonIds(a.taxonomicSignature?.enriched || []);
      const bTaxaUp = extractTaxonIds(b.taxonomicSignature?.enriched || []);
      const aTaxaDown = extractTaxonIds(a.taxonomicSignature?.depleted || []);
      const bTaxaDown = extractTaxonIds(b.taxonomicSignature?.depleted || []);

      const sharedTaxaEnriched = intersect(aTaxaUp, bTaxaUp);
      const sharedTaxaDepleted = intersect(aTaxaDown, bTaxaDown);

      const aEco = Array.isArray(a.ecologicalFeatures) ? a.ecologicalFeatures : [];
      const bEco = Array.isArray(b.ecologicalFeatures) ? b.ecologicalFeatures : [];
      const sharedEcological = intersect(aEco, bEco);

      const aVir = Array.isArray(a.virulenceEnzymes) ? a.virulenceEnzymes : [];
      const bVir = Array.isArray(b.virulenceEnzymes) ? b.virulenceEnzymes : [];
      const sharedVirulence = intersect(aVir, bVir);

      const aNutUp = (a.nutritionalImmunity?.elevated || []);
      const bNutUp = (b.nutritionalImmunity?.elevated || []);
      const aNutDown = (a.nutritionalImmunity?.depleted || []);
      const bNutDown = (b.nutritionalImmunity?.depleted || []);
      const sharedNutritionalElevated = intersect(aNutUp, bNutUp);
      const sharedNutritionalDepleted = intersect(aNutDown, bNutDown);

      // Weighted overlap score: metals and taxa matter most
      const score =
        sharedMetalsElevated.length * 3 +
        sharedMetalsDepleted.length * 2 +
        sharedTaxaEnriched.length * 4 +
        sharedTaxaDepleted.length * 3 +
        sharedEcological.length * 2 +
        sharedVirulence.length * 2 +
        sharedNutritionalElevated.length * 1 +
        sharedNutritionalDepleted.length * 1;

      if (score > 0) {
        pairs.push({
          conditions: [sigIds[i], sigIds[j]],
          names: [a.name, b.name],
          score,
          sharedMetals: [...sharedMetalsElevated, ...sharedMetalsDepleted],
          sharedTaxa: [...sharedTaxaEnriched, ...sharedTaxaDepleted],
          sharedEcological,
          sharedVirulence,
          sharedNutritional: [...sharedNutritionalElevated, ...sharedNutritionalDepleted],
          details: {
            metalsElevated: sharedMetalsElevated,
            metalsDepleted: sharedMetalsDepleted,
            taxaEnriched: sharedTaxaEnriched,
            taxaDepleted: sharedTaxaDepleted,
          }
        });
      }
    }
  }

  // Sort by overlap score descending
  pairs.sort((a, b) => b.score - a.score);

  // Compute per-condition associations (for sidebar display on each signature)
  const perCondition = {};
  for (const id of sigIds) {
    const related = pairs
      .filter(p => p.conditions.includes(id))
      .map(p => {
        const otherId = p.conditions[0] === id ? p.conditions[1] : p.conditions[0];
        const otherName = p.names[0] === signatureData[id].name ? p.names[1] : p.names[0];
        return {
          id: otherId,
          name: otherName,
          score: p.score,
          sharedMetals: p.sharedMetals,
          sharedTaxa: p.sharedTaxa,
          sharedEcological: p.sharedEcological,
          sharedVirulence: p.sharedVirulence,
        };
      })
      .sort((a, b) => b.score - a.score);
    perCondition[id] = related;
  }

  // Hierarchical cluster detection: use a high threshold so we get
  // meaningful sub-clusters (estrobolome, neurodegeneration, gut inflammation)
  // rather than one mega-cluster. Conditions can appear in multiple clusters
  // if they bridge two groups (which is itself an interesting finding).
  const maxScore = pairs.length > 0 ? pairs[0].score : 0;
  const highThreshold = maxScore * 0.7;  // tight clusters
  const midThreshold = maxScore * 0.55;  // broader groupings
  const clusters = [];

  // Pass 1: tight clusters (high overlap)
  const tightClusters = [];
  for (const pair of pairs) {
    if (pair.score < highThreshold) continue;
    const [a, b] = pair.conditions;
    let found = null;
    for (const cluster of tightClusters) {
      if (cluster.members.has(a) || cluster.members.has(b)) {
        // Only merge if the new member also has high overlap with existing members
        const newMember = cluster.members.has(a) ? b : a;
        const existingMembers = Array.from(cluster.members);
        const avgOverlap = existingMembers.reduce((sum, m) => {
          const p = pairs.find(p =>
            (p.conditions[0] === m && p.conditions[1] === newMember) ||
            (p.conditions[0] === newMember && p.conditions[1] === m)
          );
          return sum + (p ? p.score : 0);
        }, 0) / existingMembers.length;
        if (avgOverlap >= midThreshold) {
          found = cluster;
          break;
        }
      }
    }
    if (found) {
      found.members.add(a);
      found.members.add(b);
    } else {
      tightClusters.push({ members: new Set([a, b]) });
    }
  }
  clusters.push(...tightClusters);

  // Label clusters by dominant shared features
  const labeledClusters = clusters.map((c, idx) => {
    const memberIds = Array.from(c.members);
    // Find most common shared features
    const metalCounts = {};
    const taxaCounts = {};
    const ecoCounts = {};
    for (const pair of pairs) {
      if (c.members.has(pair.conditions[0]) && c.members.has(pair.conditions[1])) {
        for (const m of pair.sharedMetals) metalCounts[m] = (metalCounts[m] || 0) + 1;
        for (const t of pair.sharedTaxa) taxaCounts[t] = (taxaCounts[t] || 0) + 1;
        for (const e of pair.sharedEcological) ecoCounts[e] = (ecoCounts[e] || 0) + 1;
      }
    }
    const topMetals = Object.entries(metalCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(e => e[0]);
    const topTaxa = Object.entries(taxaCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(e => e[0]);
    const topEco = Object.entries(ecoCounts).sort((a, b) => b[1] - a[1]).slice(0, 2).map(e => e[0]);

    return {
      id: `cluster-${idx + 1}`,
      members: memberIds,
      memberNames: memberIds.map(id => signatureData[id]?.name || id),
      dominantMetals: topMetals,
      dominantTaxa: topTaxa,
      dominantEcological: topEco,
    };
  });

  console.log(`  Associated conditions: ${pairs.length} pairs, ${labeledClusters.length} clusters`);

  return {
    pairs,
    perCondition,
    clusters: labeledClusters,
    maxScore,
  };
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
  // Signatures/interventions/stops now live under cureva/ (single source of truth for clinical layers).
  // Fall back to wiki/ for backwards-compat if cureva/ is missing.
  const sigWiki = readDirectory(path.join(WIKI_ROOT, 'signatures'), 'signatures');
  const sigCureva = readDirectory(path.join(CUREVA_ROOT, 'signatures'), 'signatures');
  const signatures = [...sigCureva, ...sigWiki];
  const intWiki = readDirectory(path.join(WIKI_ROOT, 'interventions'), 'interventions');
  const intCureva = readDirectory(path.join(CUREVA_ROOT, 'interventions'), 'interventions');
  const interventions = [...intCureva, ...intWiki];
  const stopWiki = readDirectory(path.join(WIKI_ROOT, 'stops'), 'stops');
  const stopCureva = readDirectory(path.join(CUREVA_ROOT, 'stops'), 'stops');
  const stops = [...stopCureva, ...stopWiki];
  const analyses = readDirectory(path.join(WIKI_ROOT, 'analyses'), 'analyses');

  // Read root-level wiki pages (glossary, overview) — skip index.md and log.md
  const rootPages = [];
  const rootSkip = new Set(['index.md', 'log.md']);
  const rootFiles = fs.readdirSync(WIKI_ROOT).filter(f => f.endsWith('.md') && !f.startsWith('_') && !rootSkip.has(f));
  for (const file of rootFiles) {
    const filePath = path.join(WIKI_ROOT, file);
    if (fs.statSync(filePath).isFile()) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { frontmatter, body } = parseFrontmatter(raw);
      const { overview, sections } = parseSections(body);
      const wikilinks = extractWikilinks(raw);
      const id = file.replace('.md', '').toLowerCase();
      const category = classifyCategory(frontmatter, 'reference');
      rootPages.push({
        id,
        title: frontmatter.title || file.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        type: frontmatter.type || 'reference',
        category,
        tags: frontmatter.tags || [],
        sources: frontmatter.sources || [],
        created: frontmatter.created,
        updated: frontmatter.updated,
        frontmatter,
        overview,
        sections,
        wikilinks,
        sourceDir: 'wiki',
      });
    }
  }
  console.log(`  Root pages: ${rootPages.length}`);

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
        keystone: fm.keystone === true,
        keystone_criteria_met: Array.isArray(fm.keystone_criteria_met) ? fm.keystone_criteria_met : [],
        why_keystone: fm.why_keystone || '',
      };
    }
    console.log(`  Source metadata: ${Object.keys(sourceLookup).length} entries`);
  }

  const allPages = [...entities, ...concepts, ...signatures, ...interventions, ...stops, ...analyses, ...rootPages];

  console.log(`  Entities: ${entities.length}`);
  console.log(`  Concepts: ${concepts.length}`);
  console.log(`  Signatures: ${signatures.length}`);
  console.log(`  Interventions: ${interventions.length}`);
  console.log(`  STOPs: ${stops.length}`);
  console.log(`  Analyses: ${analyses.length}`);
  console.log(`  Sources: ${sourcesCount}`);
  console.log(`  Total: ${allPages.length} content pages`);

  // Annotate every page with §2f source-density flags so the renderer can
  // show a stub banner. This runs before filtering so cureva builds also
  // get the flags.
  for (const p of allPages) annotatePageWithThreshold(p);

  // Filter by platform visibility
  let visiblePages = allPages.filter(p => isVisibleOnPlatform(p.category, p.frontmatter, platformFlag));

  // §2f enforcement (WikiBiome only): refuse sub-threshold non-stub pages.
  // Sub-threshold pages may publish ONLY if they carry stub:true + stub_reason.
  // This is the fix for the 2026-04-19 zero-reference embarrassment:
  // https://www.wikibiome.com/article/acidic-microenvironment had 0 sources
  // and was published anyway because the build had no threshold check.
  //
  // Primary content types (entity/concept/signature/intervention/stop) are
  // enforced. Operational types (analysis/reference/overview) are exempt —
  // they serve as internal logs or navigation pages and should be routed via
  // explicit platform: cureva rather than via source-density refusal.
  const PRIMARY_CONTENT_TYPES = new Set(['entity', 'concept', 'signature', 'intervention', 'stop']);
  if (platformFlag === 'wikibiome') {
    const refused = [];
    const kept = [];
    for (const p of visiblePages) {
      const fmType = p.frontmatter?.type || '';
      const isPrimary = PRIMARY_CONTENT_TYPES.has(fmType);
      if (isPrimary && p.belowThreshold && !p.isStub) {
        refused.push({
          id: p.id,
          file: `${p.sourceDir}/${p.id}.md`,
          type: p.frontmatter?.subtype || fmType || 'unknown',
          sources: p.sourceCount,
          threshold: p.threshold,
          reason: `§2f violation — ${p.sourceCount} sources, minimum ${p.threshold}, not marked stub:true`,
        });
      } else {
        kept.push(p);
      }
    }
    visiblePages = kept;
    if (refused.length > 0) {
      console.warn(`  §2f REFUSED: ${refused.length} page(s) below threshold without stub:true`);
      const today = new Date().toISOString().slice(0, 10);
      const refusalPath = path.join(__dirname, '..', 'wiki', 'analyses', `build-refusals-${today}.md`);
      const lines = [
        '---',
        `title: "Build Refusals — ${today}"`,
        'type: analysis',
        `created: ${today}`,
        `updated: ${today}`,
        'sources: []',
        'tags: [build-refusal, section-2f, quality-control]',
        'platform: cureva',
        '---',
        '',
        '## Refused pages',
        '',
        'These pages were excluded from the WikiBiome build because they are below their §2f source-density threshold and are not marked `stub: true`. Per §2f, sub-threshold pages may only publish as explicit stubs.',
        '',
        '| File | Type | Sources | Minimum | Reason |',
        '|---|---|---:|---:|---|',
      ];
      for (const r of refused.sort((a, b) => a.file.localeCompare(b.file))) {
        lines.push(`| ${r.file} | ${r.type} | ${r.sources} | ${r.threshold} | ${r.reason} |`);
      }
      fs.writeFileSync(refusalPath, lines.join('\n'));
      console.warn(`  Logged to ${path.relative(path.join(__dirname, '..'), refusalPath)}`);
    }
  }

  console.log(`  Visible on ${platformFlag}: ${visiblePages.length}`);

  // Build derived data structures
  const graph = buildGraph(visiblePages);
  const evidenceMatrix = buildEvidenceMatrix(allPages); // matrix uses all pages for completeness
  const signatureData = extractSignatures(allPages);
  const associatedConditions = computeAssociatedConditions(signatureData);
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
    associatedConditions,
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
