#!/usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const {
  ARTICLE_DIRS,
  SOURCE_DIR,
  MIN_DIRECT_SOURCES,
  MAX_REPORTED_PAGES,
  MAX_REPORTED_SOURCES,
  normalizeId,
  unique,
  proseForMentions,
  countTerm,
  hasTerm,
  extractLinkTargets,
  articleLead,
  articleHeadings,
  passageRecord,
  firstMeaningfulOccurrence,
  priorityScore,
} = require('./concept-coverage-policy.cjs');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DEFAULT_CATALOG = path.join(__dirname, 'concept-coverage-candidates.json');
const DEFAULT_DECISIONS = path.join(__dirname, 'concept-coverage-decisions.json');
const DEFAULT_JSON = path.join(PROJECT_ROOT, 'reports', 'concept-coverage-program.json');
const DEFAULT_MARKDOWN = path.join(PROJECT_ROOT, 'reports', 'concept-coverage-program.md');

function valueAfter(args, flag, fallback) {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

function readJson(filePath, fallback = null) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function markdownFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory)
    .filter((name) => name.endsWith('.md') && !name.startsWith('_'))
    .sort()
    .map((name) => path.join(directory, name));
}

function parseDocument(filePath, group) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  let frontmatter = {};
  if (match) {
    try {
      frontmatter = yaml.load(match[1]) || {};
    } catch (error) {
      throw new Error(`Unable to parse YAML in ${filePath}: ${error.message}`);
    }
  }
  return {
    id: path.basename(filePath, '.md'),
    title: String(frontmatter.title || path.basename(filePath, '.md').replace(/-/g, ' ')),
    filePath,
    relativePath: path.relative(PROJECT_ROOT, filePath),
    group,
    raw,
    frontmatter,
    links: extractLinkTargets(raw),
  };
}

function isStub(document) {
  return document.frontmatter.stub === true || document.frontmatter.stub === 'true';
}

function isPublicArticle(document) {
  const platform = String(document.frontmatter.platform || '').toLowerCase();
  const type = String(document.frontmatter.type || '').toLowerCase();
  return !isStub(document)
    && platform !== 'cureva'
    && !['internal', 'template', 'operational', 'source', 'signature', 'intervention', 'stop'].includes(type)
    && ['entity', 'concept'].includes(type);
}

function frontmatterAliases(document) {
  const value = document.frontmatter.aliases;
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
}

function mergeCandidate(existing, incoming) {
  if (!existing) return {
    ...incoming,
    aliases: unique([incoming.title, ...(incoming.aliases || [])]),
    excludePhrases: unique(incoming.excludePhrases || []),
  };
  return {
    ...existing,
    ...incoming,
    aliases: unique([existing.title, incoming.title, ...(existing.aliases || []), ...(incoming.aliases || [])]),
    excludePhrases: unique([...(existing.excludePhrases || []), ...(incoming.excludePhrases || [])]),
    scopeFit: Math.max(existing.scopeFit || 0, incoming.scopeFit || 0),
    ambiguityPenalty: Math.max(existing.ambiguityPenalty || 0, incoming.ambiguityPenalty || 0),
    reason: incoming.reason || existing.reason,
  };
}

function buildCandidates(articleDocuments, catalog) {
  const candidates = new Map();
  for (const document of articleDocuments.filter((item) => item.frontmatter.type === 'concept')) {
    const id = normalizeId(document.id);
    candidates.set(id, mergeCandidate(candidates.get(id), {
      id,
      title: document.title,
      aliases: [document.title, document.id.replace(/-/g, ' '), ...frontmatterAliases(document)],
      type: 'concept',
      scopeFit: 3,
      ambiguityPenalty: 0,
      reason: 'Existing public concept with eligible plain-text mentions.',
      existingDocument: document,
    }));
  }
  for (const entry of catalog.terms || []) {
    const id = normalizeId(entry.id);
    const existingDocument = articleDocuments.find((document) => normalizeId(document.id) === id);
    candidates.set(id, mergeCandidate(candidates.get(id), {
      ...entry,
      id,
      existingDocument: existingDocument || candidates.get(id)?.existingDocument,
    }));
  }
  return [...candidates.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function documentCategory(document) {
  return String(document.frontmatter.subtype || document.frontmatter.type || document.group || 'other');
}

function buildInboundCounts(articleDocuments) {
  const inbound = new Map();
  for (const document of articleDocuments) {
    for (const target of unique(document.links)) inbound.set(target, (inbound.get(target) || 0) + 1);
  }
  return inbound;
}

function sourceRecord(document, aliases, excludePhrases) {
  const passage = passageRecord(document.raw, aliases, { excludePhrases });
  if (!passage) return null;
  return {
    id: document.id,
    title: document.title,
    evidenceLevel: document.frontmatter.evidence_level || null,
    year: document.frontmatter.year || null,
    path: document.relativePath,
    passage,
  };
}

function scanCandidate(candidate, articleDocuments, sourceDocuments, inboundCounts, decision) {
  const aliases = unique([candidate.title, ...(candidate.aliases || [])]);
  const excludePhrases = unique(candidate.excludePhrases || []);
  const linkedTargetIds = new Set(unique([candidate.id, ...(candidate.equivalentTargetIds || [])]).map(normalizeId));
  const mentions = [];
  const unlinked = [];
  const linked = [];
  const categories = new Set();
  let leadCount = 0;
  let headingCount = 0;
  let totalPlainMentions = 0;

  for (const document of articleDocuments) {
    if (normalizeId(document.id) === candidate.id) continue;
    const prose = proseForMentions(document.raw, { includeHeadings: false });
    const plainMentionCount = countTerm(prose, aliases, { excludePhrases });
    const firstOccurrence = firstMeaningfulOccurrence(
      document.raw,
      aliases,
      [...linkedTargetIds],
      { excludePhrases },
    );
    const hasLink = firstOccurrence?.linked === true;
    if (!plainMentionCount && !hasLink) continue;
    const leadMention = hasTerm(articleLead(document.raw), aliases, { excludePhrases });
    const headingMention = hasTerm(articleHeadings(document.raw), aliases, { excludePhrases });
    const inboundLinks = inboundCounts.get(normalizeId(document.id)) || 0;
    const record = {
      id: document.id,
      title: document.title,
      path: document.relativePath,
      category: documentCategory(document),
      plainMentions: plainMentionCount,
      linked: hasLink,
      leadMention,
      headingMention,
      inboundLinks,
    };
    mentions.push(record);
    categories.add(record.category);
    totalPlainMentions += plainMentionCount;
    if (leadMention) leadCount += 1;
    if (headingMention) headingCount += 1;
    if (hasLink) linked.push(record);
    else if (plainMentionCount) unlinked.push(record);
  }

  const sourceMatches = [];
  for (const document of sourceDocuments) {
    const prose = proseForMentions(document.raw, { includeWikilinkLabels: true, includeHeadings: false });
    if (!hasTerm(prose, aliases, { excludePhrases })) continue;
    const record = sourceRecord(document, aliases, excludePhrases);
    if (record) sourceMatches.push(record);
  }

  const sortAffected = (a, b) => (
    Number(b.leadMention) - Number(a.leadMention)
    || Number(b.headingMention) - Number(a.headingMention)
    || b.inboundLinks - a.inboundLinks
    || b.plainMentions - a.plainMentions
    || a.title.localeCompare(b.title)
  );
  unlinked.sort(sortAffected);
  linked.sort(sortAffected);
  sourceMatches.sort((a, b) => String(b.year || '').localeCompare(String(a.year || '')) || a.id.localeCompare(b.id));

  const weightedGraphGain = unlinked.reduce((sum, page) => sum + 1 + Math.log2(page.inboundLinks + 1), 0);
  const score = priorityScore({
    articleCount: mentions.length,
    sourceCount: sourceMatches.length,
    weightedGraphGain,
    categoryCount: categories.size,
    leadCount,
    headingCount,
    scopeFit: candidate.scopeFit || 3,
    ambiguityPenalty: candidate.ambiguityPenalty || 0,
  });
  const existingPage = Boolean(candidate.existingDocument);
  let lane;
  if (existingPage && unlinked.length) lane = 'backfill_links';
  else if (!existingPage && sourceMatches.length >= MIN_DIRECT_SOURCES && mentions.length) lane = 'create_page';
  else if (!existingPage && mentions.length) lane = 'evidence_hold';
  else return null;
  const key = `${lane}:${candidate.id}`;
  const reviewedDecision = decision.jobs?.[key] || null;

  return {
    key,
    lane,
    state: reviewedDecision?.state || 'queued',
    decision: reviewedDecision,
    id: candidate.id,
    title: candidate.title,
    pageType: candidate.type || 'concept',
    aliases,
    excludePhrases,
    reason: candidate.reason || null,
    existingPage: existingPage
      ? {
          path: candidate.existingDocument.relativePath,
          sourceCount: Array.isArray(candidate.existingDocument.frontmatter.sources)
            ? candidate.existingDocument.frontmatter.sources.length
            : 0,
        }
      : null,
    priority: score.total,
    scoreComponents: score.components,
    metrics: {
      distinctArticles: mentions.length,
      totalPlainMentions,
      linkedArticles: linked.length,
      unlinkedArticles: unlinked.length,
      linkCoveragePercent: mentions.length ? Math.round((linked.length / mentions.length) * 100) : 0,
      leadMentions: leadCount,
      headingMentions: headingCount,
      articleCategories: [...categories].sort(),
      candidateEvidenceSources: sourceMatches.length,
      minimumDirectSources: MIN_DIRECT_SOURCES,
      weightedGraphGain: Number(weightedGraphGain.toFixed(3)),
    },
    affectedPages: unlinked.slice(0, MAX_REPORTED_PAGES),
    candidateSources: sourceMatches.slice(0, MAX_REPORTED_SOURCES),
  };
}

function hashCorpus(documents) {
  const hash = crypto.createHash('sha256');
  for (const document of [...documents].sort((a, b) => a.relativePath.localeCompare(b.relativePath))) {
    hash.update(document.relativePath);
    hash.update('\0');
    hash.update(document.raw);
    hash.update('\0');
  }
  return hash.digest('hex');
}

function parseDecisionKey(key) {
  const match = String(key).match(/^(create_page|backfill_links|evidence_hold):(.+)$/);
  return match ? { lane: match[1], id: normalizeId(match[2]) } : null;
}

function validateCreatedPage(document, sourceDocuments, decisionKey, decision) {
  if (!document || !isPublicArticle(document) || String(document.frontmatter.type) !== 'concept') {
    throw new Error(`${decisionKey} cannot be promoted: a public, non-stub concept page does not exist.`);
  }
  const sources = unique((document.frontmatter.sources || []).map((value) => normalizeId(value)));
  const declaredCount = Number(document.frontmatter.source_count);
  if (sources.length < MIN_DIRECT_SOURCES || declaredCount !== sources.length) {
    throw new Error(`${decisionKey} cannot be promoted: source_count must match at least ${MIN_DIRECT_SOURCES} declared sources.`);
  }
  if (decision.validatedSourceCount !== undefined && Number(decision.validatedSourceCount) !== sources.length) {
    throw new Error(`${decisionKey} cannot be promoted: validatedSourceCount does not match the page.`);
  }
  const sourceIds = new Set(sourceDocuments.map((source) => normalizeId(source.id)));
  const missing = sources.filter((source) => !sourceIds.has(source));
  if (missing.length) {
    throw new Error(`${decisionKey} cannot be promoted: unresolved sources ${missing.join(', ')}.`);
  }
  const citedIds = new Set(document.links.map(normalizeId));
  const uncited = sources.filter((source) => !citedIds.has(source));
  if (uncited.length) {
    throw new Error(`${decisionKey} cannot be promoted: declared sources are not cited inline (${uncited.join(', ')}).`);
  }
}

function decisionLifecycle({ decisions, jobs, articleDocuments, sourceDocuments }) {
  const currentJobKeys = new Set(jobs.map((job) => job.key));
  const articlesById = new Map(articleDocuments.map((document) => [normalizeId(document.id), document]));
  const completedJobs = [];
  const activeReviews = [];

  for (const [key, decision] of Object.entries(decisions.jobs || {})) {
    const parsed = parseDecisionKey(key);
    const topLevelActive = ['accepted', 'promoted'].includes(decision?.state);
    const activeBatches = Array.isArray(decision?.batches)
      ? decision.batches.filter((batch) => ['accepted', 'promoted'].includes(batch?.state))
      : [];
    if (!parsed) {
      if (topLevelActive || activeBatches.length) throw new Error(`Unrecognized active concept-coverage decision key: ${key}.`);
      continue;
    }

    const canonicalPage = articlesById.get(parsed.id);
    if (decision.state === 'accepted') {
      if (parsed.lane === 'backfill_links') {
        throw new Error(`${key} must use an accepted scoped batch with explicit target pages.`);
      }
      if (!currentJobKeys.has(key)) {
        throw new Error(`${key} is accepted but no longer appears in the active queue; validate and explicitly promote or hold it.`);
      }
      activeReviews.push({ key, jobKey: key, state: 'accepted', targets: decision.targets || [] });
    } else if (decision.state === 'promoted') {
      if (parsed.lane !== 'create_page') {
        throw new Error(`${key} must use scoped batches for backfill promotion.`);
      }
      validateCreatedPage(canonicalPage, sourceDocuments, key, decision);
      if (currentJobKeys.has(key)) throw new Error(`${key} is marked promoted but remains in its original queue lane.`);
      completedJobs.push({ ...decision, key, jobKey: key, id: parsed.id });
    }

    for (const batch of activeBatches) {
      if (parsed.lane !== 'backfill_links') {
        throw new Error(`${key} uses a scoped batch outside the backfill_links lane.`);
      }
      if (!canonicalPage) throw new Error(`${key} cannot be reviewed: canonical page ${parsed.id} does not exist.`);
      if (!batch.id || !Array.isArray(batch.targets) || !batch.targets.length) {
        throw new Error(`${key} has an active batch without an id and non-empty targets array.`);
      }
      const batchKey = `${key}#${batch.id}`;
      const targetResults = batch.targets.map((targetId) => {
        const article = articlesById.get(normalizeId(targetId));
        if (!article) throw new Error(`${batchKey} references unknown public article ${targetId}.`);
        const linked = article.links.some((target) => normalizeId(target) === parsed.id);
        return { id: normalizeId(targetId), linked };
      });
      if (batch.state === 'promoted') {
        const unlinked = targetResults.filter((target) => !target.linked).map((target) => target.id);
        if (unlinked.length) throw new Error(`${batchKey} cannot be promoted: targets are not linked (${unlinked.join(', ')}).`);
        completedJobs.push({
          ...batch,
          key: batchKey,
          jobKey: key,
          id: parsed.id,
          batchId: batch.id,
          targets: targetResults.map((target) => target.id),
        });
      } else {
        activeReviews.push({
          ...batch,
          key: batchKey,
          jobKey: key,
          id: parsed.id,
          batchId: batch.id,
          targets: targetResults.map((target) => target.id),
        });
      }
    }
  }

  const completionSort = (a, b) => (
    String(b.promotedAt || '').localeCompare(String(a.promotedAt || ''))
    || a.key.localeCompare(b.key)
  );
  completedJobs.sort(completionSort);
  activeReviews.sort((a, b) => a.key.localeCompare(b.key));
  return { completedJobs, activeReviews };
}

function buildProgram({ wikiRoot, catalog, decisions }) {
  const articleDocuments = ARTICLE_DIRS
    .flatMap((directory) => markdownFiles(path.join(wikiRoot, directory)).map((filePath) => parseDocument(filePath, directory)))
    .filter(isPublicArticle);
  const sourceDocuments = markdownFiles(path.join(wikiRoot, SOURCE_DIR))
    .map((filePath) => parseDocument(filePath, SOURCE_DIR));
  const candidates = buildCandidates(articleDocuments, catalog);
  const inboundCounts = buildInboundCounts(articleDocuments);
  const jobs = candidates
    .map((candidate) => scanCandidate(candidate, articleDocuments, sourceDocuments, inboundCounts, decisions))
    .filter(Boolean)
    .sort((a, b) => (
      b.priority - a.priority
      || b.metrics.weightedGraphGain - a.metrics.weightedGraphGain
      || b.metrics.unlinkedArticles - a.metrics.unlinkedArticles
      || b.metrics.candidateEvidenceSources - a.metrics.candidateEvidenceSources
      || a.lane.localeCompare(b.lane)
      || a.title.localeCompare(b.title)
    ));
  const { completedJobs, activeReviews } = decisionLifecycle({
    decisions,
    jobs,
    articleDocuments,
    sourceDocuments,
  });
  const byLane = (lane) => jobs.filter((job) => job.lane === lane).length;
  return {
    schemaVersion: 1,
    source: {
      corpusSha256: hashCorpus([...articleDocuments, ...sourceDocuments]),
      catalogSha256: crypto.createHash('sha256').update(JSON.stringify(catalog)).digest('hex'),
      decisionsSha256: crypto.createHash('sha256').update(JSON.stringify(decisions)).digest('hex'),
      publicArticles: articleDocuments.length,
      sourceRecords: sourceDocuments.length,
    },
    policy: {
      minimumDirectSources: MIN_DIRECT_SOURCES,
      lanes: {
        create_page: 'No canonical page exists and at least three candidate source records mention the term. Direct support still requires editorial review.',
        backfill_links: 'A canonical page exists, but reader-facing articles contain eligible plain-text mentions without an explicit wikilink.',
        evidence_hold: 'No canonical page exists and the current evidence-candidate count is below the public concept threshold.',
      },
      publicationGate: [
        'Resolve aliases, parent-page overlap, and duplicate identities before drafting.',
        'Validate at least three independent sources as directly supporting the page, not merely mentioning the term.',
        'Cite every material claim inline and preserve the WikiBiome/Cureva boundary.',
        'Backfill only the first contextually meaningful occurrence in a reviewed article.',
        'Require clean content, editorial, routing, and rendered-page checks before publication.',
      ],
    },
    summary: {
      totalJobs: jobs.length,
      createPage: byLane('create_page'),
      backfillLinks: byLane('backfill_links'),
      evidenceHold: byLane('evidence_hold'),
      accepted: activeReviews.length,
      promoted: completedJobs.length,
    },
    activeReviews,
    completedJobs,
    jobs,
  };
}

function tableForJobs(jobs) {
  if (!jobs.length) return '_No candidates in this lane._';
  const rows = jobs.slice(0, 30).map((job) => {
    const pageMetric = job.lane === 'backfill_links'
      ? `${job.metrics.unlinkedArticles} unlinked / ${job.metrics.distinctArticles} mentioning`
      : `${job.metrics.distinctArticles} articles`;
    return `| ${job.priority.toFixed(2)} | \`${job.key}\` | ${job.title} | ${job.state} | ${pageMetric} | ${job.metrics.weightedGraphGain.toFixed(1)} | ${job.metrics.candidateEvidenceSources} |`;
  });
  return ['| Score | Job | Term | State | Reader demand | Graph gain | Candidate sources |', '|---:|---|---|---|---:|---:|---:|', ...rows].join('\n');
}

function reviewList(records) {
  if (!records.length) return '_No explicitly accepted work is awaiting promotion._';
  return records.map((record) => {
    const targets = record.targets?.length ? ` — targets: ${record.targets.map((target) => `\`${target}\``).join(', ')}` : '';
    return `- \`${record.key}\`${targets}`;
  }).join('\n');
}

function markdownReport(program) {
  const groups = [
    ['Create-page queue', 'create_page'],
    ['Internal-link backfill queue', 'backfill_links'],
    ['Evidence hold', 'evidence_hold'],
  ];
  const sections = groups.map(([heading, lane]) => {
    const jobs = program.jobs.filter((job) => job.lane === lane);
    return `## ${heading}\n\n${tableForJobs(jobs)}`;
  }).join('\n\n');
  const completed = program.completedJobs.length
    ? program.completedJobs.map((job) => {
        const destination = job.path
          ? ` — \`${job.path}\``
          : job.targets?.length
            ? ` — targets: ${job.targets.map((target) => `\`${target}\``).join(', ')}`
            : '';
        return `- \`${job.key}\` — ${job.promotedAt || 'date not recorded'}${destination}`;
      }).join('\n')
    : '_No completed jobs recorded._';
  return `# WikiBiome concept coverage program\n\nGenerated deterministically from corpus \`${program.source.corpusSha256.slice(0, 12)}\`, catalog \`${program.source.catalogSha256.slice(0, 12)}\`, and decisions \`${program.source.decisionsSha256.slice(0, 12)}\`. This is an editorial queue, not an auto-publishing instruction. Candidate-source counts identify records to inspect; they do not certify that every record directly supports a future page.\n\n## Summary\n\n- ${program.summary.createPage} create-page candidates\n- ${program.summary.backfillLinks} existing pages with contextual-link debt\n- ${program.summary.evidenceHold} candidates held for evidence\n- ${program.summary.accepted} explicitly accepted jobs\n- ${program.summary.promoted} completed jobs recorded\n\n## Active reviewed batch\n\n${reviewList(program.activeReviews)}\n\n## Completed jobs\n\n${completed}\n\n${sections}\n\n## Publication gate\n\n${program.policy.publicationGate.map((item) => `- ${item}`).join('\n')}\n`;
}

function writeFile(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === value) return false;
  fs.writeFileSync(filePath, value);
  return true;
}

function comparableProgram(program) {
  return JSON.parse(JSON.stringify(program));
}

function comparableMarkdown(value) {
  return String(value);
}

function main() {
  const args = process.argv.slice(2);
  const wikiRoot = path.resolve(valueAfter(args, '--wiki', path.join(PROJECT_ROOT, 'wiki')));
  const catalogPath = path.resolve(valueAfter(args, '--catalog', DEFAULT_CATALOG));
  const decisionsPath = path.resolve(valueAfter(args, '--decisions', DEFAULT_DECISIONS));
  const jsonPath = path.resolve(valueAfter(args, '--json', DEFAULT_JSON));
  const markdownPath = path.resolve(valueAfter(args, '--markdown', DEFAULT_MARKDOWN));
  const catalog = readJson(catalogPath);
  if (!catalog || catalog.schemaVersion !== 1 || !Array.isArray(catalog.terms)) {
    throw new Error(`Invalid concept coverage catalog: ${catalogPath}`);
  }
  const decisions = readJson(decisionsPath, { schemaVersion: 1, jobs: {} });
  const program = buildProgram({ wikiRoot, catalog, decisions });
  const json = `${JSON.stringify(program, null, 2)}\n`;
  const markdown = markdownReport(program);

  if (args.includes('--check')) {
    if (!fs.existsSync(jsonPath) || !fs.existsSync(markdownPath)) {
      throw new Error('Concept coverage program is missing. Run with --write first.');
    }
    const current = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    if (JSON.stringify(comparableProgram(current)) !== JSON.stringify(comparableProgram(program))) {
      throw new Error('Concept coverage program is stale. Run with --write and review the diff.');
    }
    const currentMarkdown = fs.readFileSync(markdownPath, 'utf8');
    if (comparableMarkdown(currentMarkdown) !== comparableMarkdown(markdown)) {
      throw new Error('Concept coverage Markdown report is stale. Run with --write and review the diff.');
    }
    console.log(`Concept coverage program is current (${program.summary.totalJobs} jobs).`);
    return;
  }

  if (args.includes('--write')) {
    const changed = [writeFile(jsonPath, json), writeFile(markdownPath, markdown)].filter(Boolean).length;
    console.log(changed
      ? `Updated ${changed} concept coverage report file(s).`
      : 'Concept coverage report is byte-identical; no files changed.');
  }
  console.log(JSON.stringify(program.summary));
  for (const job of program.jobs.slice(0, 12)) {
    console.log(`${String(job.priority).padStart(3)}  ${job.lane.padEnd(15)}  ${job.title}`);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  parseDocument,
  isPublicArticle,
  buildCandidates,
  scanCandidate,
  buildProgram,
  decisionLifecycle,
  markdownReport,
  comparableProgram,
  comparableMarkdown,
  writeFile,
};
