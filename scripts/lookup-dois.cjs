const fs = require('fs');
const path = require('path');
const https = require('https');

const SOURCES_DIR = path.join(__dirname, '..', 'wiki', 'sources');
const RESULTS_FILE = path.join(__dirname, '..', 'doi-lookup-results.json');

// Rate limit: CrossRef asks for max 50 req/sec, we'll do 1 per 200ms to be polite
const DELAY_MS = 250;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'WikiBiome/1.0 (mailto:karen@paleofoundation.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch (e) { resolve({ status: res.statusCode, body: null, raw: data }); }
      });
    }).on('error', reject);
  });
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const m = line.match(/^(\w[\w-]*):\s*(.+)/);
    if (m) {
      let val = m[2].trim();
      // Strip quotes
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      // Parse arrays
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      }
      fm[m[1]] = val;
    }
  }
  return fm;
}

async function lookupCrossRef(title, firstAuthor) {
  const q = encodeURIComponent(title.substring(0, 200));
  const url = `https://api.crossref.org/works?query.title=${q}&rows=3&select=DOI,title,author`;
  try {
    const res = await httpsGet(url);
    if (res.status !== 200 || !res.body?.message?.items) return null;
    
    const items = res.body.message.items;
    for (const item of items) {
      // Check title similarity
      const itemTitle = (item.title?.[0] || '').toLowerCase();
      const searchTitle = title.toLowerCase();
      // Require at least 60% overlap of words
      const searchWords = searchTitle.split(/\s+/).filter(w => w.length > 3);
      const matchCount = searchWords.filter(w => itemTitle.includes(w)).length;
      if (matchCount / searchWords.length >= 0.6) {
        return item.DOI;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function lookupZenodo(title) {
  const q = encodeURIComponent(title.substring(0, 200));
  const url = `https://zenodo.org/api/records?q=title:"${q}"&size=3`;
  try {
    const res = await httpsGet(url);
    if (res.status !== 200 || !res.body?.hits?.hits) return null;
    
    const hits = res.body.hits.hits;
    for (const hit of hits) {
      const hitTitle = (hit.metadata?.title || '').toLowerCase();
      const searchTitle = title.toLowerCase();
      const searchWords = searchTitle.split(/\s+/).filter(w => w.length > 3);
      const matchCount = searchWords.filter(w => hitTitle.includes(w)).length;
      if (matchCount / searchWords.length >= 0.6) {
        return hit.doi || null;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  const files = fs.readdirSync(SOURCES_DIR).filter(f => f.endsWith('.md'));
  console.log(`Total source files: ${files.length}`);
  
  // Find files missing DOIs
  const needsDoi = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(SOURCES_DIR, file), 'utf8');
    const fm = parseFrontmatter(content);
    if (!fm) continue;
    
    // Skip if already has a real DOI
    if (fm.doi && fm.doi.length > 5) continue;
    
    if (fm.title) {
      const firstAuthor = Array.isArray(fm.authors) ? fm.authors[0]?.split(/\s+/).pop() : '';
      needsDoi.push({ file, title: fm.title, firstAuthor, year: fm.year });
    }
  }
  
  console.log(`Files needing DOI lookup: ${needsDoi.length}`);
  
  const results = { found: [], notFound: [], errors: [] };
  let done = 0;
  
  for (const item of needsDoi) {
    done++;
    if (done % 20 === 0) console.log(`  Progress: ${done}/${needsDoi.length}`);
    
    // Try CrossRef first
    let doi = await lookupCrossRef(item.title, item.firstAuthor);
    let source = 'crossref';
    
    // Fall back to Zenodo
    if (!doi) {
      doi = await lookupZenodo(item.title);
      source = 'zenodo';
    }
    
    if (doi) {
      results.found.push({ file: item.file, doi, source, title: item.title });
    } else {
      results.notFound.push({ file: item.file, title: item.title });
    }
    
    await sleep(DELAY_MS);
  }
  
  console.log(`\nResults:`);
  console.log(`  Found: ${results.found.length}`);
  console.log(`  Not found: ${results.notFound.length}`);
  
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(results, null, 2));
  console.log(`Results saved to ${RESULTS_FILE}`);
}

main().catch(console.error);
