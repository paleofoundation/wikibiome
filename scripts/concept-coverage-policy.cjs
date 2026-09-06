const crypto = require('crypto');

const ARTICLE_DIRS = Object.freeze(['entities', 'concepts']);
const SOURCE_DIR = 'sources';
const MIN_DIRECT_SOURCES = 3;
const MAX_REPORTED_PAGES = 24;
const MAX_REPORTED_SOURCES = 12;

function normalizeId(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\.md$/i, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function termRegex(aliases, flags = 'giu') {
  const alternatives = unique(aliases)
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .map(escapeRegex);
  if (!alternatives.length) return /$a/gu;
  return new RegExp(`(?<![\\p{L}\\p{N}])(?:${alternatives.join('|')})(?![\\p{L}\\p{N}])`, flags);
}

function hasMeaningfulInternalCase(value) {
  const letters = String(value).replace(/[^A-Za-z]/g, '');
  if (!letters) return false;
  const conventionalTitle = `${letters[0].toUpperCase()}${letters.slice(1).toLowerCase()}`;
  return letters !== letters.toLowerCase()
    && letters !== letters.toUpperCase()
    && letters !== conventionalTitle;
}

function allowedCaseVariant(value, aliases) {
  const matchingAliases = aliases.filter((alias) => String(alias).toLocaleLowerCase() === String(value).toLocaleLowerCase());
  return matchingAliases.some((alias) => {
    const candidate = String(alias);
    if (hasMeaningfulInternalCase(candidate)) return String(value) === candidate;
    const lower = candidate.toLocaleLowerCase();
    const sentence = lower.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase());
    const title = lower.replace(/(^|[^\p{L}])(\p{L})/gu, (_match, prefix, letter) => `${prefix}${letter.toLocaleUpperCase()}`);
    return String(value) === lower || String(value) === lower.toLocaleUpperCase() || String(value) === sentence || String(value) === title;
  });
}

function termMatches(text, aliases) {
  return [...String(text).matchAll(termRegex(aliases))].filter((match) => allowedCaseVariant(match[0], aliases));
}

function splitFrontmatter(raw) {
  const match = String(raw).match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return { yaml: '', body: String(raw), prefix: '' };
  return { yaml: match[1], body: String(raw).slice(match[0].length), prefix: match[0] };
}

function replaceWithLineBreaks(value) {
  return String(value).replace(/[^\n]/g, ' ');
}

function maskPhrases(text, phrases = []) {
  if (!phrases.length) return String(text);
  return String(text).replace(termRegex(phrases), replaceWithLineBreaks);
}

function proseForMentions(raw, { includeWikilinkLabels = false, includeHeadings = true } = {}) {
  let { body } = splitFrontmatter(raw);
  body = body.replace(/<!--[\s\S]*?-->/g, replaceWithLineBreaks);
  body = body.replace(/```[\s\S]*?```/g, replaceWithLineBreaks);
  body = body.replace(/~~~[\s\S]*?~~~/g, replaceWithLineBreaks);
  body = body.replace(/`[^`\n]*`/g, replaceWithLineBreaks);
  body = body.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');
  body = body.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  body = body.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, target, label) => (
    includeWikilinkLabels ? (label || String(target).replace(/-/g, ' ')) : ' '
  ));
  if (!includeHeadings) body = body.replace(/^\s*#{1,6}\s+.*$/gm, replaceWithLineBreaks);
  return body;
}

function countTerm(text, aliases, { excludePhrases = [] } = {}) {
  return termMatches(maskPhrases(text, excludePhrases), aliases).length;
}

function hasTerm(text, aliases, { excludePhrases = [] } = {}) {
  return termMatches(maskPhrases(text, excludePhrases), aliases).length > 0;
}

function extractLinkTargets(raw) {
  const targets = [];
  const regex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  let match;
  while ((match = regex.exec(String(raw))) !== null) targets.push(normalizeId(match[1]));
  return unique(targets);
}

function articleLead(raw) {
  const prose = proseForMentions(raw);
  const withoutTitle = prose.replace(/^#\s+[^\n]+\n?/, '');
  return withoutTitle.split(/^##\s+/m)[0];
}

function articleHeadings(raw) {
  return proseForMentions(raw)
    .split(/\r?\n/)
    .filter((line) => /^#{2,6}\s+/.test(line))
    .map((line) => line.replace(/^#{2,6}\s+/, ''))
    .join('\n');
}

function paragraphForFirstMention(raw, aliases, { excludePhrases = [] } = {}) {
  const prose = maskPhrases(
    proseForMentions(raw, { includeWikilinkLabels: true, includeHeadings: false }),
    excludePhrases,
  );
  const paragraphs = prose.split(/\n\s*\n/).map((value) => value.replace(/\s+/g, ' ').trim()).filter(Boolean);
  return paragraphs.find((paragraph) => hasTerm(paragraph, aliases)) || '';
}

function passageRecord(raw, aliases, options = {}) {
  const paragraph = paragraphForFirstMention(raw, aliases, options);
  if (!paragraph) return null;
  const excerpt = paragraph.length > 260 ? `${paragraph.slice(0, 257).trimEnd()}...` : paragraph;
  return {
    excerpt,
    sha256: crypto.createHash('sha256').update(paragraph).digest('hex'),
  };
}

function lineIsHeading(body, offset) {
  const lineStart = body.lastIndexOf('\n', offset) + 1;
  const lineEnd = body.indexOf('\n', offset);
  const line = body.slice(lineStart, lineEnd < 0 ? body.length : lineEnd);
  return /^\s*#{1,6}\s+/.test(line);
}

function firstMeaningfulOccurrence(raw, aliases, targetIds = [], { excludePhrases = [] } = {}) {
  const { body } = splitFrontmatter(raw);
  const protectedRanges = [];
  const protect = (regex) => {
    let match;
    while ((match = regex.exec(body)) !== null) protectedRanges.push([match.index, regex.lastIndex]);
  };
  protect(/<!--[\s\S]*?-->/g);
  protect(/```[\s\S]*?```/g);
  protect(/~~~[\s\S]*?~~~/g);
  protect(/`[^`\n]*`/g);
  protect(/!?\[[^\]]*\]\([^)]*\)/g);
  protect(/\[\[[^\]]+\]\]/g);

  if (excludePhrases.length) {
    const excluded = termRegex(excludePhrases);
    let match;
    while ((match = excluded.exec(body)) !== null) protectedRanges.push([match.index, excluded.lastIndex]);
  }

  const overlapsProtectedRange = (start, end) => protectedRanges.some(([left, right]) => start < right && end > left);
  const regex = termRegex(aliases);
  let firstPlain = null;
  let match;
  while ((match = regex.exec(body)) !== null) {
    if (!allowedCaseVariant(match[0], aliases)) continue;
    if (overlapsProtectedRange(match.index, regex.lastIndex)) continue;
    if (lineIsHeading(body, match.index)) continue;
    firstPlain = { linked: false, label: match[0], offset: match.index, end: regex.lastIndex };
    break;
  }

  const normalizedTargets = new Set(targetIds.map(normalizeId));
  const wikilinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  let firstLink = null;
  while ((match = wikilinkRegex.exec(body)) !== null) {
    if (!normalizedTargets.has(normalizeId(match[1]))) continue;
    if (lineIsHeading(body, match.index)) continue;
    firstLink = {
      linked: true,
      label: match[2] || match[1].replace(/-/g, ' '),
      offset: match.index,
      end: wikilinkRegex.lastIndex,
    };
    break;
  }

  if (!firstPlain) return firstLink;
  if (!firstLink) return firstPlain;
  return firstLink.offset <= firstPlain.offset ? firstLink : firstPlain;
}

function firstMeaningfulLink(raw, aliases, targetId, options = {}) {
  const { body, prefix } = splitFrontmatter(raw);
  const occurrence = firstMeaningfulOccurrence(raw, aliases, [targetId], options);
  if (!occurrence || occurrence.linked) return { changed: false, value: raw, label: null, offset: -1 };
  const replacement = normalizeId(occurrence.label) === normalizeId(targetId)
    ? `[[${targetId}]]`
    : `[[${targetId}|${occurrence.label}]]`;
  const linkedBody = `${body.slice(0, occurrence.offset)}${replacement}${body.slice(occurrence.end)}`;
  return {
    changed: true,
    value: `${prefix}${linkedBody}`,
    label: occurrence.label,
    offset: occurrence.offset,
  };
}

function clamp01(value) {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
}

function priorityScore({ articleCount, sourceCount, weightedGraphGain, categoryCount, leadCount, headingCount, scopeFit, ambiguityPenalty }) {
  const demand = clamp01(Math.log2(articleCount + 1) / Math.log2(51));
  const evidence = clamp01(sourceCount / 8);
  const graph = clamp01((Math.log2(weightedGraphGain + 1) / Math.log2(101)) * 0.75 + (categoryCount / 4) * 0.25);
  const fit = clamp01(scopeFit / 5);
  const readiness = clamp01((sourceCount >= MIN_DIRECT_SOURCES ? 0.55 : sourceCount * 0.12) + (leadCount > 0 ? 0.2 : 0) + (headingCount > 0 ? 0.15 : 0));
  const risk = clamp01((ambiguityPenalty || 0) / 5);
  const components = {
    demand: Number((demand * 25).toFixed(2)),
    evidence: Number((evidence * 25).toFixed(2)),
    graphGain: Number((graph * 20).toFixed(2)),
    scopeFit: Number((fit * 15).toFixed(2)),
    outlineReadiness: Number((readiness * 15).toFixed(2)),
    ambiguityPenalty: -Number((risk * 15).toFixed(2)),
  };
  return {
    total: Number(Object.values(components).reduce((sum, value) => sum + value, 0).toFixed(2)),
    components,
  };
}

module.exports = {
  ARTICLE_DIRS,
  SOURCE_DIR,
  MIN_DIRECT_SOURCES,
  MAX_REPORTED_PAGES,
  MAX_REPORTED_SOURCES,
  normalizeId,
  unique,
  termRegex,
  allowedCaseVariant,
  termMatches,
  splitFrontmatter,
  maskPhrases,
  proseForMentions,
  countTerm,
  hasTerm,
  extractLinkTargets,
  articleLead,
  articleHeadings,
  passageRecord,
  firstMeaningfulOccurrence,
  firstMeaningfulLink,
  priorityScore,
};
