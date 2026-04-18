#!/usr/bin/env node
/**
 * verify-dois.cjs
 *
 * Scans wiki/sources/ for markdown files with doi: "not yet verified"
 * and attempts to extract DOIs from the body content. Also checks all
 * source pages for suspicious DOI values.
 */

const fs = require('fs');
const path = require('path');

const SOURCES_DIR = path.resolve(__dirname, '..', 'sources');
const RAW_DIR = path.resolve(__dirname, '..', '..', 'raw');

// DOI regex: matches patterns like 10.1234/anything-until-whitespace-or-quote
const DOI_REGEX = /\b(10\.\d{4,}\/[^\s"',;)\]}>]+)/g;

// Clean trailing punctuation from extracted DOIs
function cleanDoi(doi) {
  // Remove trailing periods, colons, parentheses that are likely not part of the DOI
  return doi.replace(/[.),:;]+$/, '');
}

// Check if a DOI looks suspicious
function checkSuspiciousDoi(doi) {
  const issues = [];
  if (doi === 'not yet verified') return []; // skip, handled separately
  if (doi.length < 10) issues.push('too short');
  if (doi.includes(' ')) issues.push('contains spaces');
  if (!doi.startsWith('10.')) issues.push('does not start with 10.');
  if (/[<>{}|\\^~`]/.test(doi)) issues.push('contains unusual characters');
  if (doi.endsWith('.')) issues.push('ends with period');
  if (doi.endsWith(',')) issues.push('ends with comma');
  if (doi.endsWith(')')) issues.push('ends with closing paren');
  // Check for DOIs that are actually PMIDs or PMCIDs
  if (/^PMC?\d+$/i.test(doi)) issues.push('looks like a PMID/PMCID, not a DOI');
  // Check for URLs that aren't DOIs
  if (doi.startsWith('http') && !doi.includes('doi.org')) issues.push('URL but not a DOI URL');
  // Check for truncated DOIs (no slash after prefix)
  if (doi.startsWith('10.') && !doi.includes('/')) issues.push('missing slash - possibly truncated');
  return issues;
}

// Extract frontmatter from markdown content
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: null, body: content, raw: '' };
  return {
    raw: match[0],
    frontmatter: match[1],
    body: content.slice(match[0].length)
  };
}

// Extract current DOI value from frontmatter
function extractDoi(frontmatter) {
  // Match doi: "value" or doi: value (unquoted)
  const match = frontmatter.match(/^doi:\s*"?([^"#\n]*?)"?\s*(?:#.*)?$/m);
  if (!match) return null;
  return match[1].trim();
}

// Extract journal from frontmatter
function extractJournal(frontmatter) {
  const match = frontmatter.match(/^journal:\s*"?([^"#\n]*?)"?\s*(?:#.*)?$/m);
  if (!match) return null;
  return match[1].trim();
}

// Extract year from frontmatter
function extractYear(frontmatter) {
  const match = frontmatter.match(/^year:\s*(\d{4})/m);
  if (!match) return null;
  return match[1];
}

// Check if a corresponding PDF exists in raw/
function findMatchingPdf(sourceFilename) {
  // Strip .md extension
  const baseName = sourceFilename.replace(/\.md$/, '');
  const parts = baseName.split('-');

  try {
    const rawFiles = fs.readdirSync(RAW_DIR);

    // Strategy 1: exact match (unlikely but check)
    const exactMatch = rawFiles.find(f => f.toLowerCase().replace(/\.pdf$/, '') === baseName.toLowerCase());
    if (exactMatch) return path.join(RAW_DIR, exactMatch);

    // Strategy 2: first author + year match
    if (parts.length >= 2) {
      const author = parts[0].toLowerCase();
      const year = parts.find(p => /^\d{4}$/.test(p));
      if (author && year) {
        const pdfMatch = rawFiles.find(f => {
          const fl = f.toLowerCase();
          return fl.endsWith('.pdf') && fl.includes(author) && fl.includes(year);
        });
        if (pdfMatch) return path.join(RAW_DIR, pdfMatch);
      }
    }
  } catch (e) {
    // raw dir might not exist
  }

  return null;
}

// Check if the doi: line is unquoted
function isDoiUnquoted(frontmatter) {
  const match = frontmatter.match(/^doi:\s*(.*)$/m);
  if (!match) return false;
  const value = match[1].trim();
  // If it starts with a quote, it's quoted
  if (value.startsWith('"')) return false;
  // If it starts with 10. it's an unquoted DOI
  if (value.startsWith('10.')) return true;
  return false;
}

function main() {
  const files = fs.readdirSync(SOURCES_DIR).filter(f => f.endsWith('.md'));

  let totalFiles = 0;
  let unverifiedCount = 0;
  let fixedCount = 0;
  let remainingCount = 0;
  let commentAddedCount = 0;
  const fixed = [];
  const remaining = [];
  const suspicious = [];
  const pdfMatches = [];
  const unquotedDois = [];
  let noDoisAtAll = 0;

  console.log(`Scanning ${files.length} source files in ${SOURCES_DIR}\n`);

  for (const file of files) {
    const filePath = path.join(SOURCES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { raw, frontmatter, body } = parseFrontmatter(content);

    if (!frontmatter) continue;
    totalFiles++;

    const currentDoi = extractDoi(frontmatter);

    // Check for missing doi field entirely
    if (!currentDoi) {
      noDoisAtAll++;
    }

    // Check for unquoted DOIs (formatting inconsistency)
    if (isDoiUnquoted(frontmatter)) {
      unquotedDois.push({ file, doi: currentDoi });
    }

    // Check ALL files for suspicious DOIs
    if (currentDoi && currentDoi !== 'not yet verified') {
      const issues = checkSuspiciousDoi(currentDoi);
      if (issues.length > 0) {
        suspicious.push({ file, doi: currentDoi, issues });
      }
    }

    // Only process "not yet verified" files for DOI extraction
    if (!currentDoi || !currentDoi.includes('not yet verified')) continue;

    unverifiedCount++;

    // Check for matching PDF
    const pdfPath = findMatchingPdf(file);
    if (pdfPath) {
      pdfMatches.push({ file, pdf: path.basename(pdfPath) });
    }

    // Try to find DOI in body text
    const bodyDois = [];
    let match;
    const doiRegex = new RegExp(DOI_REGEX.source, 'g');
    while ((match = doiRegex.exec(body)) !== null) {
      const cleaned = cleanDoi(match[1]);
      if (!bodyDois.includes(cleaned)) {
        bodyDois.push(cleaned);
      }
    }

    // Also check frontmatter comments for DOIs (sometimes in comments)
    const fmDois = [];
    const fmDoiRegex = new RegExp(DOI_REGEX.source, 'g');
    while ((match = fmDoiRegex.exec(frontmatter)) !== null) {
      const cleaned = cleanDoi(match[1]);
      if (!fmDois.includes(cleaned)) {
        fmDois.push(cleaned);
      }
    }

    const allFoundDois = [...new Set([...fmDois, ...bodyDois])];

    if (allFoundDois.length > 0) {
      // Use the first found DOI (most likely the paper's own DOI)
      const newDoi = allFoundDois[0];

      // Replace in the frontmatter line
      const updatedContent = content.replace(
        /^(doi:\s*)"not yet verified".*$/m,
        `$1"${newDoi}"`
      );

      if (updatedContent !== content) {
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        fixedCount++;
        fixed.push({ file, doi: newDoi, source: fmDois.includes(newDoi) ? 'frontmatter-comment' : 'body-text' });
      }
    } else {
      // No DOI found - add lookup hint if journal/year available
      const journal = extractJournal(frontmatter);
      const year = extractYear(frontmatter);

      if (journal && year) {
        // Check if comment already exists
        const doiLine = content.match(/^doi:\s*"not yet verified"(.*)$/m);
        const existingComment = doiLine ? doiLine[1].trim() : '';

        if (!existingComment.includes('DOI lookup needed')) {
          const updatedContent = content.replace(
            /^(doi:\s*"not yet verified").*$/m,
            `$1  # <!-- DOI lookup needed: ${journal} ${year} -->`
          );
          if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent, 'utf-8');
            commentAddedCount++;
          }
        }
      }

      remainingCount++;
      remaining.push({ file, journal: journal || 'unknown', year: year || 'unknown', hasPdf: !!pdfPath });
    }
  }

  // Print results
  console.log('='.repeat(70));
  console.log('DOI VERIFICATION REPORT');
  console.log('='.repeat(70));
  console.log(`\nTotal source files scanned: ${totalFiles}`);
  console.log(`Files with "not yet verified" DOI: ${unverifiedCount}`);
  console.log(`\n--- FIXED (DOI extracted from body/comments) ---`);
  console.log(`Fixed: ${fixedCount}`);
  if (fixed.length > 0) {
    for (const f of fixed) {
      console.log(`  [${f.source}] ${f.file} => ${f.doi}`);
    }
  }

  console.log(`\n--- REMAINING UNVERIFIED ---`);
  console.log(`Still unverified: ${remainingCount}`);
  console.log(`Lookup comments added: ${commentAddedCount}`);
  if (remaining.length > 0) {
    console.log('\nRemaining files (with journal/year for manual lookup):');
    for (const r of remaining) {
      const pdfNote = r.hasPdf ? ' [PDF exists in raw/]' : '';
      console.log(`  ${r.file} — ${r.journal} (${r.year})${pdfNote}`);
    }
  }

  console.log(`\n--- PDF MATCHES ---`);
  console.log(`Source files with matching PDFs in raw/: ${pdfMatches.length}`);
  if (pdfMatches.length > 0) {
    for (const p of pdfMatches) {
      console.log(`  ${p.file} => ${p.pdf}`);
    }
  }

  console.log(`\n--- SUSPICIOUS DOIs (across ALL source files) ---`);
  console.log(`Suspicious DOIs found: ${suspicious.length}`);
  if (suspicious.length > 0) {
    for (const s of suspicious) {
      console.log(`  ${s.file}`);
      console.log(`    DOI: ${s.doi}`);
      console.log(`    Issues: ${s.issues.join(', ')}`);
    }
  }

  console.log(`\n--- UNQUOTED DOIs (formatting inconsistency) ---`);
  console.log(`Unquoted DOIs: ${unquotedDois.length}`);
  if (unquotedDois.length > 0 && unquotedDois.length <= 20) {
    for (const u of unquotedDois) {
      console.log(`  ${u.file} — doi: ${u.doi}`);
    }
  } else if (unquotedDois.length > 20) {
    console.log(`  (showing first 20 of ${unquotedDois.length})`);
    for (const u of unquotedDois.slice(0, 20)) {
      console.log(`  ${u.file} — doi: ${u.doi}`);
    }
  }

  if (noDoisAtAll > 0) {
    console.log(`\n--- MISSING DOI FIELD ---`);
    console.log(`Files with no doi: field at all: ${noDoisAtAll}`);
  }

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`  Fixed:          ${fixedCount}`);
  console.log(`  Remaining:      ${remainingCount}`);
  console.log(`  Suspicious:     ${suspicious.length}`);
  console.log(`  Unquoted DOIs:  ${unquotedDois.length}`);
  console.log(`  No DOI field:   ${noDoisAtAll}`);
  console.log(`  Total:          ${totalFiles} source files`);
}

main();
