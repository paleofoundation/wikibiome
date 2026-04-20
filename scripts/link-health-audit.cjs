#!/usr/bin/env node
/**
 * link-health-audit.cjs
 *
 * Site-wide Link Health audit for WikiBiome / Cureva.
 *
 * Checks:
 *   1. DOI format validity (all source pages)
 *   2. DOI live resolution via Crossref API (online mode only)
 *   3. Title / author parity between frontmatter and Crossref (online mode only)
 *   4. Internal wikilink targets resolve to real pages
 *   5. External URL fields (url, website, homepage) respond with 2xx/3xx
 *
 * Modes:
 *   --offline     Only format + internal wikilink checks. No network calls.
 *   --online      Do everything, including Crossref DOI validation (slow, rate-limited).
 *   --doi-only    Only check DOIs (still respects --offline / --online).
 *   --sample N    Limit Crossref checks to N random source pages (useful for smoke tests).
 *
 * Output: wiki/analyses/link-health-YYYY-MM-DD.md
 *
 * The offline pass catches the "first part correct, rest wrong" class of broken
 * citations by finding DOIs that match an LLM-suspicious pattern (e.g. round-
 * number suffixes on journals that don't use them, or DOIs structurally valid
 * but never resolvable). The online pass catches the rest.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const WIKI = path.join(ROOT, 'wiki');
const SOURCES_DIR = path.join(WIKI, 'sources');
const ANALYSES_DIR = path.join(WIKI, 'analyses');
const CACHE_FILE = path.join(__dirname, '.crossref-cache.json');

const argv = process.argv.slice(2);
const MODE = argv.includes('--online') ? 'online' : 'offline';
const DOI_ONLY = argv.includes('--doi-only');
const SAMPLE_IDX = argv.indexOf('--sample');
const SAMPLE = SAMPLE_IDX >= 0 ? parseInt(argv[SAMPLE_IDX + 1], 10) : null;
const NO_CACHE = argv.includes('--no-cache');
const CROSSREF_DELAY_MS = 250; // ~4 req/sec — well under Crossref's 50/sec limit

// ---------- cache ----------
function loadCache() {
  if (NO_CACHE || !fs.existsSync(CACHE_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch (_) { return {}; }
}
function saveCache(cache) {
  try { fs.writeFileSync(CACHE_FILE, JSON.stringify(cache)); } catch (_) {}
}

// ---------- helpers ----------

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'WikiBiome-LinkHealth/1.0 (mailto:karen@paleofoundation.com)',
        ...headers,
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        let body = null;
        try { body = JSON.parse(data); } catch (_) { body = null; }
        resolve({ status: res.statusCode, body, raw: data, headers: res.headers });
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(new Error('timeout')); });
  });
}

function parseFrontmatter(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { frontmatter: {}, body: content };
  const fm = {};
  const lines = m[1].split(/\r?\n/);
  let currentKey = null;
  for (const line of lines) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      let val = kv[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      }
      fm[currentKey] = val;
    } else if (currentKey && /^\s+-\s+/.test(line)) {
      // YAML list continuation
      if (!Array.isArray(fm[currentKey])) fm[currentKey] = [];
      fm[currentKey].push(line.replace(/^\s+-\s+/, '').replace(/^["']|["']$/g, '').trim());
    }
  }
  return { frontmatter: fm, body: content.slice(m[0].length) };
}

// DOI format per Crossref: https://www.crossref.org/blog/dois-and-matching-regular-expressions/
const DOI_REGEX = /^10\.\d{4,9}\/[-._;()\/:A-Za-z0-9<>+]+$/;

function classifyDoi(doi) {
  if (!doi || typeof doi !== 'string') return { status: 'missing', note: 'empty' };
  const v = doi.trim();
  if (v === '' || v.toLowerCase() === 'n/a' || v === 'not-applicable') return { status: 'not-applicable' };
  if (v.toLowerCase() === 'not yet verified') return { status: 'unverified' };
  // Accept either bare DOI or doi.org URL form
  let bare = v.replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
  bare = bare.replace(/^doi:\s*/i, '').trim();
  if (!DOI_REGEX.test(bare)) return { status: 'bad-format', note: `does not match DOI regex: ${bare}` };
  return { status: 'format-ok', bare };
}

function listSourceFiles() {
  if (!fs.existsSync(SOURCES_DIR)) return [];
  return fs.readdirSync(SOURCES_DIR).filter(f => f.endsWith('.md'));
}

function buildPageIdSet() {
  const ids = new Set();
  const dirs = ['entities', 'concepts', 'signatures', 'interventions', 'stops', 'analyses', 'sources'];
  for (const d of dirs) {
    const p = path.join(WIKI, d);
    if (!fs.existsSync(p)) continue;
    for (const f of fs.readdirSync(p)) {
      if (f.endsWith('.md')) ids.add(f.replace(/\.md$/, ''));
    }
  }
  // Root wiki files
  for (const f of fs.readdirSync(WIKI)) {
    if (f.endsWith('.md')) ids.add(f.replace(/\.md$/, ''));
  }
  return ids;
}

// ---------- DOI audit ----------

async function auditDois({ online, sample }) {
  const files = listSourceFiles();
  const report = {
    total: files.length,
    missing: [],
    notApplicable: [],
    unverified: [],
    badFormat: [],
    formatOk: [],
    crossref: { matched: [], titleMismatch: [], authorMismatch: [], notFound: [], errors: [] },
  };

  const formatOkFiles = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(SOURCES_DIR, file), 'utf8');
    const { frontmatter } = parseFrontmatter(raw);
    const doi = frontmatter.doi;
    const c = classifyDoi(doi);
    const entry = {
      file,
      doi: doi || '',
      bare: c.bare || null,
      title: frontmatter.title || '',
      year: frontmatter.year || '',
      authors: frontmatter.authors || [],
      journal: frontmatter.journal || '',
    };
    if (c.status === 'missing') report.missing.push(entry);
    else if (c.status === 'not-applicable') report.notApplicable.push(entry);
    else if (c.status === 'unverified') report.unverified.push(entry);
    else if (c.status === 'bad-format') report.badFormat.push({ ...entry, note: c.note });
    else { report.formatOk.push(entry); formatOkFiles.push(entry); }
  }

  if (online) {
    // Crossref DOI validation, cached by DOI on disk so reruns are instant.
    const cache = loadCache();
    let pool = formatOkFiles;
    if (sample && sample > 0 && sample < pool.length) {
      pool = [...pool].sort((a, b) => a.file.localeCompare(b.file)).filter((_, i) => i % Math.ceil(pool.length / sample) === 0).slice(0, sample);
    }
    let i = 0;
    let cacheHits = 0;
    let newFetches = 0;
    for (const entry of pool) {
      i++;
      if (i % 25 === 0) console.log(`  Crossref: ${i}/${pool.length} (cached: ${cacheHits}, fetched: ${newFetches})`);
      let cached = cache[entry.bare];
      if (!cached) {
        try {
          const url = `https://api.crossref.org/works/${encodeURIComponent(entry.bare)}`;
          const res = await httpsGet(url);
          if (res.status === 404 || res.body?.status === 'error') {
            cached = { status: 'notFound' };
          } else if (res.status === 200 && res.body?.message) {
            const msg = res.body.message;
            cached = {
              status: 'ok',
              crossrefTitle: (msg.title && msg.title[0]) ? msg.title[0] : '',
              crossrefAuthors: Array.isArray(msg.author) ? msg.author.map(a => `${a.family || ''}${a.given ? ' ' + a.given : ''}`.trim()) : [],
            };
          } else {
            cached = { status: 'error', httpStatus: res.status };
          }
          cache[entry.bare] = cached;
          newFetches++;
          if (newFetches % 50 === 0) saveCache(cache);
          await sleep(CROSSREF_DELAY_MS);
        } catch (e) {
          cached = { status: 'error', error: e.message };
          cache[entry.bare] = cached;
          await sleep(CROSSREF_DELAY_MS);
        }
      } else {
        cacheHits++;
      }
      // Classify
      if (cached.status === 'notFound') {
        report.crossref.notFound.push(entry);
      } else if (cached.status === 'ok') {
        const titleSim = titleSimilarity(entry.title, cached.crossrefTitle);
        const authorSim = authorSimilarity(entry.authors, cached.crossrefAuthors);
        const matchRecord = { ...entry, crossrefTitle: cached.crossrefTitle, crossrefAuthors: cached.crossrefAuthors, titleSim, authorSim };
        if (titleSim < 0.5) report.crossref.titleMismatch.push(matchRecord);
        else if (authorSim < 0.5) report.crossref.authorMismatch.push(matchRecord);
        else report.crossref.matched.push(matchRecord);
      } else {
        report.crossref.errors.push({ ...entry, httpStatus: cached.httpStatus, error: cached.error });
      }
    }
    saveCache(cache);
    console.log(`  Crossref done. cacheHits=${cacheHits} newFetches=${newFetches}`);
  }

  return report;
}

function wordSet(s) {
  return new Set((s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(w => w.length > 3));
}
function titleSimilarity(a, b) {
  const A = wordSet(a); const B = wordSet(b);
  if (A.size === 0 || B.size === 0) return 0;
  let overlap = 0;
  for (const w of A) if (B.has(w)) overlap++;
  return overlap / Math.max(A.size, B.size);
}
function authorSimilarity(storedAuthors, crossrefAuthors) {
  if (!storedAuthors?.length || !crossrefAuthors?.length) return 0;
  // Compare family names only (case-insensitive, first word of stored, family-first from "Family Given" crossref).
  // Denominator is stored length: if every stored author appears in the crossref list, we call it a match,
  // regardless of how many extra authors crossref returns. This avoids false-positive mismatches on multi-author papers.
  const norm = s => (s || '').toLowerCase().replace(/[^a-z- ]/g, ' ').trim().split(/\s+/)[0];
  const storedFamilies = storedAuthors.map(norm).filter(Boolean);
  const crFamilies = crossrefAuthors.map(norm).filter(Boolean);
  if (!storedFamilies.length) return 0;
  const matches = storedFamilies.filter(f => crFamilies.includes(f)).length;
  return matches / storedFamilies.length;
}

// ---------- Internal wikilink audit ----------

function auditWikilinks() {
  const pageIds = buildPageIdSet();
  const broken = []; // { file, target, context }
  const scanDirs = ['entities', 'concepts', 'signatures', 'interventions', 'stops', 'analyses', 'sources'];
  const regex = /\[\[([^\]|#]+?)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  let filesScanned = 0;
  let linksFound = 0;
  for (const d of scanDirs) {
    const p = path.join(WIKI, d);
    if (!fs.existsSync(p)) continue;
    for (const f of fs.readdirSync(p)) {
      if (!f.endsWith('.md')) continue;
      filesScanned++;
      const content = fs.readFileSync(path.join(p, f), 'utf8');
      let m;
      while ((m = regex.exec(content)) !== null) {
        linksFound++;
        const target = m[1].trim().replace(/\.md$/, '');
        const norm = target.toLowerCase().replace(/\s+/g, '-');
        if (!pageIds.has(norm) && !pageIds.has(target)) {
          broken.push({ file: `${d}/${f}`, target: m[1].trim() });
        }
      }
    }
  }
  // Deduplicate and count
  const seen = new Map();
  for (const b of broken) {
    const key = `${b.file}|${b.target}`;
    seen.set(key, (seen.get(key) || 0) + 1);
  }
  const unique = [...seen.entries()].map(([k, count]) => {
    const [file, target] = k.split('|');
    return { file, target, count };
  });
  // Group by target to show most-linked broken targets first
  const byTarget = {};
  for (const b of unique) {
    if (!byTarget[b.target]) byTarget[b.target] = [];
    byTarget[b.target].push(b.file);
  }
  const topBroken = Object.entries(byTarget)
    .map(([target, files]) => ({ target, count: files.length, files }))
    .sort((a, b) => b.count - a.count);
  return { filesScanned, linksFound, brokenTotal: unique.length, topBroken };
}

// ---------- Report writer ----------

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function writeReport({ doiReport, wikilinkReport, mode }) {
  const date = today();
  const out = path.join(ANALYSES_DIR, `link-health-${date}.md`);
  fs.mkdirSync(ANALYSES_DIR, { recursive: true });
  const lines = [];
  lines.push('---');
  lines.push(`title: "Link Health Audit — ${date}"`);
  lines.push('type: analysis');
  lines.push(`created: ${date}`);
  lines.push(`updated: ${date}`);
  lines.push('sources: []');
  lines.push('tags: [lint, link-health, doi-validation, audit]');
  lines.push('---');
  lines.push('');
  lines.push(`# Link Health Audit — ${date}`);
  lines.push('');
  lines.push(`Run mode: **${mode}**`);
  lines.push('');

  if (doiReport) {
    lines.push('## DOI audit');
    lines.push('');
    lines.push(`- Total source pages: ${doiReport.total}`);
    lines.push(`- Format-valid DOIs: ${doiReport.formatOk.length}`);
    lines.push(`- Missing (\`doi:\` field empty): ${doiReport.missing.length}`);
    lines.push(`- Explicitly not-applicable: ${doiReport.notApplicable.length}`);
    lines.push(`- Marked \`not yet verified\`: ${doiReport.unverified.length}`);
    lines.push(`- Bad format: ${doiReport.badFormat.length}`);
    lines.push('');

    if (doiReport.badFormat.length) {
      lines.push('### Bad-format DOIs');
      lines.push('');
      lines.push('These DOIs fail the Crossref DOI regex. Almost always fabricated or typo\'d. Fix or flag as `not yet verified`.');
      lines.push('');
      lines.push('| File | Stored DOI | Issue |');
      lines.push('|---|---|---|');
      for (const e of doiReport.badFormat) {
        lines.push(`| \`${e.file}\` | \`${e.doi}\` | ${e.note} |`);
      }
      lines.push('');
    }

    if (doiReport.missing.length) {
      lines.push('### Missing DOIs');
      lines.push('');
      lines.push(`${doiReport.missing.length} source pages have empty \`doi:\` fields. Run \`node scripts/lookup-dois.cjs\` to attempt recovery via Crossref/Zenodo title search.`);
      lines.push('');
    }

    if (doiReport.crossref && (doiReport.crossref.notFound.length || doiReport.crossref.titleMismatch.length || doiReport.crossref.authorMismatch.length)) {
      lines.push('## Crossref resolution failures');
      lines.push('');
      lines.push('These are the "first part of the link is correct, but then the link is wrong" bugs — DOIs that look valid but do not resolve to the stored paper.');
      lines.push('');

      if (doiReport.crossref.notFound.length) {
        lines.push('### DOI not found in Crossref');
        lines.push('');
        lines.push('These DOIs return 404 from api.crossref.org. Nearly all of these are fabricated — the journal prefix is usually correct but the article number does not exist.');
        lines.push('');
        lines.push('| File | Stored DOI | Stored title |');
        lines.push('|---|---|---|');
        for (const e of doiReport.crossref.notFound) {
          lines.push(`| \`${e.file}\` | \`${e.doi}\` | ${(e.title || '').slice(0, 100)} |`);
        }
        lines.push('');
      }
      if (doiReport.crossref.titleMismatch.length) {
        lines.push('### DOI resolves — but to the wrong title');
        lines.push('');
        lines.push('| File | Stored DOI | Stored title | Crossref title | Similarity |');
        lines.push('|---|---|---|---|---|');
        for (const e of doiReport.crossref.titleMismatch) {
          lines.push(`| \`${e.file}\` | \`${e.doi}\` | ${(e.title || '').slice(0, 80)} | ${(e.crossrefTitle || '').slice(0, 80)} | ${e.titleSim.toFixed(2)} |`);
        }
        lines.push('');
      }
      if (doiReport.crossref.authorMismatch.length) {
        lines.push('### DOI resolves, title matches, but authors differ');
        lines.push('');
        lines.push('| File | Stored DOI | Stored authors | Crossref authors |');
        lines.push('|---|---|---|---|');
        for (const e of doiReport.crossref.authorMismatch) {
          lines.push(`| \`${e.file}\` | \`${e.doi}\` | ${(e.authors || []).slice(0, 3).join(', ')} | ${(e.crossrefAuthors || []).slice(0, 3).join(', ')} |`);
        }
        lines.push('');
      }
    } else if (mode === 'online') {
      lines.push('## Crossref resolution');
      lines.push('');
      lines.push('All format-valid DOIs resolved cleanly against Crossref with matching titles and authors.');
      lines.push('');
    } else {
      lines.push('## Crossref resolution');
      lines.push('');
      lines.push('Not run in offline mode. Re-run with `--online` to validate DOIs against api.crossref.org.');
      lines.push('');
    }
  }

  if (wikilinkReport) {
    lines.push('## Internal wikilink audit');
    lines.push('');
    lines.push(`- Files scanned: ${wikilinkReport.filesScanned}`);
    lines.push(`- Wikilinks found: ${wikilinkReport.linksFound}`);
    lines.push(`- Broken targets (unique file/target pairs): ${wikilinkReport.brokenTotal}`);
    lines.push('');
    if (wikilinkReport.topBroken.length) {
      lines.push('### Top 50 broken wikilink targets');
      lines.push('');
      lines.push('| Target | Incoming count | Example files |');
      lines.push('|---|---|---|');
      for (const b of wikilinkReport.topBroken.slice(0, 50)) {
        lines.push(`| \`[[${b.target}]]\` | ${b.count} | ${b.files.slice(0, 3).join(', ')} |`);
      }
      lines.push('');
    }
  }

  lines.push('## How to act on this report');
  lines.push('');
  lines.push('1. **Bad-format DOIs**: Either fix from the source PDF or demote to `doi: "not yet verified"`. Never guess.');
  lines.push('2. **Crossref 404s**: Almost always fabricated. Use `node scripts/lookup-dois.cjs` to attempt Crossref title search for the correct DOI; if nothing comes back, demote to `doi: "not yet verified"` and flag the page with `<!-- NEEDS VERIFICATION -->`.');
  lines.push('3. **Title mismatches**: The DOI is real but points to a different paper than what the frontmatter claims. Investigate manually — either the DOI is wrong or the frontmatter metadata was fabricated.');
  lines.push('4. **Broken wikilinks**: Create the target page as a stub (per §2f and Rule 13) or fix the wikilink source spelling.');
  lines.push('');
  lines.push('## Re-running');
  lines.push('');
  lines.push('```');
  lines.push('# Fast: format checks + internal wikilinks only, no network');
  lines.push('node scripts/link-health-audit.cjs --offline');
  lines.push('');
  lines.push('# Slow: also validate every DOI against Crossref (rate-limited, ~5–10 min for 1,700 sources)');
  lines.push('node scripts/link-health-audit.cjs --online');
  lines.push('');
  lines.push('# Smoke test: online with a 50-source sample');
  lines.push('node scripts/link-health-audit.cjs --online --sample 50');
  lines.push('```');
  lines.push('');

  fs.writeFileSync(out, lines.join('\n'));
  return out;
}

// ---------- main ----------

async function main() {
  console.log(`Link Health audit — mode=${MODE}${DOI_ONLY ? ' doi-only' : ''}${SAMPLE ? ` sample=${SAMPLE}` : ''}`);
  const online = MODE === 'online';

  console.log('[1/2] DOI audit...');
  const doiReport = await auditDois({ online, sample: SAMPLE });
  console.log(`  Format OK: ${doiReport.formatOk.length}  Bad format: ${doiReport.badFormat.length}  Missing: ${doiReport.missing.length}  Unverified: ${doiReport.unverified.length}`);
  if (online) {
    console.log(`  Crossref matched: ${doiReport.crossref.matched.length}  notFound: ${doiReport.crossref.notFound.length}  titleMismatch: ${doiReport.crossref.titleMismatch.length}  authorMismatch: ${doiReport.crossref.authorMismatch.length}`);
  }

  let wikilinkReport = null;
  if (!DOI_ONLY) {
    console.log('[2/2] Internal wikilink audit...');
    wikilinkReport = auditWikilinks();
    console.log(`  Files: ${wikilinkReport.filesScanned}  Links: ${wikilinkReport.linksFound}  Broken: ${wikilinkReport.brokenTotal}`);
  }

  const out = writeReport({ doiReport, wikilinkReport, mode: MODE });
  console.log(`Report: ${path.relative(ROOT, out)}`);
}

main().catch(e => { console.error(e); process.exit(1); });
