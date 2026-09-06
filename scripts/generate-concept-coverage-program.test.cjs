const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const {
  buildProgram,
  comparableProgram,
  comparableMarkdown,
  markdownReport,
  writeFile,
} = require('./generate-concept-coverage-program.cjs');

function write(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, value);
}

function page(frontmatter, body) {
  return `---\n${frontmatter}\n---\n\n${body}\n`;
}

test('planner separates page creation, contextual linking, and evidence holds deterministically', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'wikibiome-concept-coverage-'));
  const wiki = path.join(root, 'wiki');
  try {
    write(path.join(wiki, 'entities', 'helicobacter-pylori.md'), page(
      'title: Helicobacter pylori\ntype: entity\nsubtype: microbe\nplatform: wikibiome\nsources: [one, two, three]',
      '# Helicobacter pylori\n\nUrease hydrolyzes urea. Bicarbonate is produced.',
    ));
    write(path.join(wiki, 'entities', 'private-stub.md'), page(
      'title: Private stub\ntype: entity\nsubtype: microbe\nplatform: wikibiome\nstub: true',
      '# Private stub\n\nUrea should not increase public demand.',
    ));
    write(path.join(wiki, 'concepts', 'urease.md'), page(
      'title: Urease\ntype: concept\nplatform: wikibiome\nsources: [one, two, three]',
      '# Urease\n\nThis enzyme acts on its substrate.',
    ));
    for (const id of ['one', 'two', 'three']) {
      write(path.join(wiki, 'sources', `${id}.md`), page(
        `title: Source ${id}\ntype: source\nplatform: wikibiome\nyear: 2020\nevidence_level: in-vitro`,
        `# Source ${id}\n\nThe study discusses urea and urease.`,
      ));
    }
    write(path.join(wiki, 'sources', 'bicarbonate-only.md'), page(
      'title: Bicarbonate source\ntype: source\nplatform: wikibiome',
      '# Bicarbonate source\n\nBicarbonate appears here.',
    ));
    write(path.join(wiki, 'sources', 'title-only.md'), page(
      'title: Urea title only\ntype: source\nplatform: wikibiome',
      '# Urea title only\n\nThis body does not name the candidate molecule.',
    ));
    const catalog = {
      schemaVersion: 1,
      terms: [
        { id: 'urea', title: 'Urea', aliases: ['urea'], type: 'concept', scopeFit: 5 },
        { id: 'urease', title: 'Urease', aliases: ['urease'], type: 'concept', scopeFit: 5 },
        { id: 'bicarbonate', title: 'Bicarbonate', aliases: ['bicarbonate'], type: 'concept', scopeFit: 3 },
      ],
    };
    const decisions = { schemaVersion: 1, jobs: {} };
    const first = buildProgram({ wikiRoot: wiki, catalog, decisions });
    const second = buildProgram({ wikiRoot: wiki, catalog, decisions });
    const byId = Object.fromEntries(first.jobs.map((job) => [job.id, job]));

    assert.equal(byId.urea.lane, 'create_page');
    assert.equal(byId.urea.metrics.candidateEvidenceSources, 3);
    assert.equal(byId.urea.metrics.distinctArticles, 1, 'stub demand must be excluded');
    assert.equal(byId.urease.lane, 'backfill_links');
    assert.equal(byId.bicarbonate.lane, 'evidence_hold');
    assert.deepEqual(comparableProgram(first), comparableProgram(second));

    assert.equal(JSON.stringify(first), JSON.stringify(second), 'unchanged inputs must produce byte-identical JSON');
    assert.equal(
      comparableMarkdown(markdownReport(first)),
      comparableMarkdown(markdownReport(second)),
      'unchanged inputs must produce byte-identical Markdown',
    );

    const output = path.join(root, 'report.json');
    assert.equal(writeFile(output, `${JSON.stringify(first)}\n`), true);
    assert.equal(writeFile(output, `${JSON.stringify(second)}\n`), false, 'unchanged report writes must be no-ops');

    const acceptedProgram = buildProgram({
      wikiRoot: wiki,
      catalog,
      decisions: {
        schemaVersion: 1,
        jobs: {
          'backfill_links:urease': {
            state: 'queued',
            batches: [{ id: 'hp', state: 'accepted', targets: ['helicobacter-pylori'] }],
          },
        },
      },
    });
    assert.match(markdownReport(acceptedProgram), /`backfill_links:urease#hp`/);
    assert.equal(acceptedProgram.summary.accepted, 1);

    write(path.join(wiki, 'entities', 'helicobacter-pylori.md'), page(
      'title: Helicobacter pylori\ntype: entity\nsubtype: microbe\nplatform: wikibiome\nsources: [one, two, three]',
      '# Helicobacter pylori\n\n[[urease|Urease]] hydrolyzes [[urea]].',
    ));
    write(path.join(wiki, 'concepts', 'urea.md'), page(
      'title: Urea\ntype: concept\nplatform: wikibiome\nsources: [one, two, three]\nsource_count: 3',
      '# Urea\n\nUrea is an enzyme substrate [[one]] [[two]] [[three]].',
    ));
    const promotedProgram = buildProgram({
      wikiRoot: wiki,
      catalog,
      decisions: {
        schemaVersion: 1,
        jobs: {
          'create_page:urea': { state: 'promoted', promotedAt: '2026-09-06', path: 'wiki/concepts/urea.md' },
          'backfill_links:urease': {
            state: 'queued',
            batches: [{ id: 'hp', state: 'promoted', promotedAt: '2026-09-06', targets: ['helicobacter-pylori'] }],
          },
        },
      },
    });
    assert.deepEqual(promotedProgram.completedJobs.map((job) => job.key).sort(), [
      'backfill_links:urease#hp',
      'create_page:urea',
    ]);

    assert.throws(() => buildProgram({
      wikiRoot: wiki,
      catalog,
      decisions: { schemaVersion: 1, jobs: { 'create_page:urea': { state: 'accepted' } } },
    }), /accepted but no longer appears/);
    assert.throws(() => buildProgram({
      wikiRoot: wiki,
      catalog,
      decisions: { schemaVersion: 1, jobs: { 'create_page:typo': { state: 'promoted' } } },
    }), /public, non-stub concept page does not exist/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
