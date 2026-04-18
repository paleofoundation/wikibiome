#!/usr/bin/env node
/**
 * Fix ghost wikilinks by:
 * 1. Resolving space-vs-hyphen mismatches ([[heavy metals]] → [[heavy-metals]])
 * 2. Resolving case mismatches ([[Tryptophan]] → [[tryptophan]])
 * 3. Resolving plurals ([[siderophores]] → [[siderophore-competition]] or entity)
 * 4. Resolving known aliases ([[gut-brain axis]] → [[gut-brain-axis]])
 */

const fs = require('fs');
const path = require('path');

const WIKI_DIR = path.join(__dirname, '..');
const DIRS = ['entities', 'concepts', 'sources', 'interventions', 'signatures', 'stops'];

// Build index of all existing pages
const existingPages = new Set();
for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath)) {
    if (file.endsWith('.md') && !file.startsWith('_')) {
      existingPages.add(dir + '/' + file.replace('.md', ''));
      existingPages.add(file.replace('.md', '')); // slug only
    }
  }
}

// Known redirects: ghost slug → actual slug that exists
const REDIRECTS = {};

// Auto-generate redirects for space→hyphen, case normalization
function findTarget(ghost) {
  // 1. Direct hyphenated version
  const hyphenated = ghost.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  if (existingPages.has(hyphenated)) return hyphenated;

  // 2. Common suffixes/prefixes
  const variants = [
    hyphenated,
    hyphenated + '-supplementation',
    hyphenated + '-metabolism',
    hyphenated.replace(/-/g, ''),
  ];
  for (const v of variants) {
    if (existingPages.has(v)) return v;
  }

  return null;
}

// Scan all markdown files and fix wikilinks
let totalFixes = 0;
let filesChanged = 0;
const unfixable = new Map(); // ghost → count

for (const dir of DIRS) {
  const dirPath = path.join(WIKI_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;

  for (const file of fs.readdirSync(dirPath)) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const filepath = path.join(dirPath, file);
    let content = fs.readFileSync(filepath, 'utf8');
    let changed = false;

    // Find all wikilinks
    const regex = /\[\[([^\]|]+)(\|[^\]]+)?\]\]/g;
    let match;
    const replacements = [];

    while ((match = regex.exec(content)) !== null) {
      const slug = match[1];
      const display = match[2] || '';
      const fullMatch = match[0];

      // Skip if page exists
      if (existingPages.has(slug)) continue;

      // Try to find target
      const target = findTarget(slug);
      if (target && target !== slug) {
        const newLink = display ? `[[${target}${display}]]` : `[[${target}]]`;
        replacements.push({ from: fullMatch, to: newLink });
      } else if (!target) {
        unfixable.set(slug, (unfixable.get(slug) || 0) + 1);
      }
    }

    // Apply replacements (reverse order to preserve positions)
    if (replacements.length > 0) {
      for (const { from, to } of replacements) {
        content = content.split(from).join(to);
      }
      fs.writeFileSync(filepath, content, 'utf8');
      totalFixes += replacements.length;
      filesChanged++;
    }
  }
}

console.log(`Wikilink fixes complete:`);
console.log(`  Links fixed: ${totalFixes}`);
console.log(`  Files changed: ${filesChanged}`);
console.log(`  Unfixable ghosts: ${unfixable.size}`);
console.log('');

// Sort unfixable by count
const sorted = [...unfixable.entries()].sort((a, b) => b[1] - a[1]);
console.log('=== Top 50 unfixable ghosts (need new pages) ===');
for (const [slug, count] of sorted.slice(0, 50)) {
  console.log(`  ${count} ${slug}`);
}
console.log('');
console.log(`=== Full unfixable list (${sorted.length} ghosts) ===`);
for (const [slug, count] of sorted) {
  console.log(`${count}\t${slug}`);
}
