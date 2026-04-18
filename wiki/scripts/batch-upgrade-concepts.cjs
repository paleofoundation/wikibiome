#!/usr/bin/env node
/**
 * Batch upgrade concept pages:
 * - Add karen_brain_primitives (inferred from content)
 * - Add seo_target (inferred from title + tags)
 * - Add last_substantive_update (set to updated date)
 */

const fs = require('fs');
const path = require('path');

const CONCEPTS_DIR = path.join(__dirname, '..', 'concepts');

function inferKBP(content) {
  const primitives = new Set();

  if (/\b(selective pressure|metal.*(select|enrich)|heavy metal.*microb|metal.*dysbiosis|metal.*gut|metal.*microbiome)\b/i.test(content))
    primitives.add(1);
  if (/\b(nutritional immunity|calprotectin|lactoferrin|hepcidin|lipocalin|transferrin|metal sequestration|iron withholding)\b/i.test(content))
    primitives.add(2);
  if (/\b(mis-metallation|mismetallation|cadmium.*calcium|lead.*calcium|toxic metal.*entry|molecular mimicry.*metal)\b/i.test(content))
    primitives.add(3);
  if (/\b(metal.*(depend|requir|cofactor|enzyme)|urease|hydrogenase|siderophore|metalloprotease|zinc.*enzyme|nickel.*enzyme|metal.*virulence)\b/i.test(content))
    primitives.add(4);
  if (/\b(ecological engineer|suppress.*pathogen|probiotic|prebiotic|synbiotic|FMT|fecal.*transplant|competitive exclusion|restore.*commensal|SCFA)\b/i.test(content))
    primitives.add(5);
  if (/\b(interkingdom|inter-kingdom|fungal.*bacterial|biofilm.*protect|functional shielding|polymicrobial|cross-kingdom)\b/i.test(content))
    primitives.add(6);
  if (/\b(estrobolome|beta-glucuronidase|β-glucuronidase|estrogen.*recirculation|estrogen.*deconjugat)\b/i.test(content))
    primitives.add(7);
  if (/\b(siderophore|iron.*competition|enterobactin|yersiniabactin|aerobactin|iron.*piracy)\b/i.test(content))
    primitives.add(8);
  if (/\b(hypoxia|anaerob|oxygen.*state|oxygenation|dysoxia|redox.*potential|oxygen.*gradient|butyrate.*oxygen)\b/i.test(content))
    primitives.add(9);

  return [...primitives].sort((a, b) => a - b);
}

function generateSeoTarget(title, tags) {
  // Create an SEO-friendly target from title
  const clean = title
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  // Add "microbiome" or "gut" context if not already present
  if (/microb|gut|dysbiosis/.test(clean)) {
    return clean;
  }
  return `${clean} microbiome`;
}

function processFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return { changed: false };

  let fm = match[1];
  const raw = match[0];
  let changed = false;

  // Extract title
  const titleMatch = fm.match(/^title:\s*"?(.+?)"?\s*$/m);
  const title = titleMatch ? titleMatch[1] : path.basename(filepath, '.md');

  // Extract tags
  const tagsMatch = fm.match(/^tags:\s*\[(.+?)\]/m);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : [];

  // Extract updated date
  const updatedMatch = fm.match(/^updated:\s*(\S+)/m);
  const updated = updatedMatch ? updatedMatch[1] : '2026-04-09';

  // 1. karen_brain_primitives
  const hasKBP = /^karen_brain_primitives:/m.test(fm);
  const hasOldKBP = /^karen_brain_primitive:/m.test(fm);  // old singular format

  if (!hasKBP) {
    const kbp = inferKBP(content);
    if (kbp.length > 0) {
      fm += `\nkaren_brain_primitives: [${kbp.join(', ')}]`;
    } else {
      fm += `\nkaren_brain_primitives: []`;
    }
    changed = true;
  }

  // 2. seo_target
  if (!/^seo_target:/m.test(fm)) {
    const seo = generateSeoTarget(title, tags);
    fm += `\nseo_target: "${seo}"`;
    changed = true;
  }

  // 3. last_substantive_update
  if (!/^last_substantive_update:/m.test(fm)) {
    fm += `\nlast_substantive_update: ${updated}`;
    changed = true;
  }

  if (changed) {
    const newContent = content.replace(raw, '---\n' + fm + '\n---');
    fs.writeFileSync(filepath, newContent, 'utf8');
  }

  return { changed };
}

// Main
const files = fs.readdirSync(CONCEPTS_DIR).filter(f => f.endsWith('.md'));
let updated = 0;
let skipped = 0;
let errors = 0;

for (const file of files) {
  try {
    const result = processFile(path.join(CONCEPTS_DIR, file));
    if (result.changed) updated++;
    else skipped++;
  } catch (err) {
    errors++;
    if (errors <= 5) console.error(`Error: ${file}: ${err.message}`);
  }
}

console.log(`Concept batch upgrade complete:`);
console.log(`  Updated: ${updated}`);
console.log(`  Skipped: ${skipped}`);
console.log(`  Errors: ${errors}`);
console.log(`  Total: ${files.length}`);
