const assert = require('node:assert/strict');
const test = require('node:test');
const {
  normalizeId,
  countTerm,
  extractLinkTargets,
  proseForMentions,
  firstMeaningfulLink,
  priorityScore,
} = require('./concept-coverage-policy.cjs');

test('normalizes page identities without conflating adjacent terms', () => {
  assert.equal(normalizeId('NiFe-Hydrogenase.md'), 'nife-hydrogenase');
  assert.equal(normalizeId('pH sensing'), 'ph-sensing');
  assert.notEqual(normalizeId('urea'), normalizeId('urease'));
});

test('matches urea as a molecule but not inside urease or the UreA protein name', () => {
  const source = 'Urea is hydrolyzed by urease. UreA is a protein subunit; a urea-cycle label remains distinct.';
  assert.equal(countTerm(source, ['urea'], { excludePhrases: ['urea cycle', 'urea-cycle'] }), 1);
  assert.equal(countTerm(source, ['urease']), 1);
});

test('plain-mention scanning excludes existing wikilinks, code, and frontmatter', () => {
  const source = `---\ntags: [urea]\n---\n# Urea\n\n[[urea]] and \`urea\` are protected. Plain urea remains.`;
  const prose = proseForMentions(source);
  assert.equal(countTerm(prose, ['urea']), 2, 'heading and plain prose should remain');
  assert.deepEqual(extractLinkTargets(source), ['urea']);
});

test('first-use linker skips headings and protected spans and is idempotent', () => {
  const source = `---\ntitle: Example\n---\n# Urea\n\n\`urea\` is code. [[urease|Urease]] acts on urea in this paragraph.`;
  const linked = firstMeaningfulLink(source, ['urea'], 'urea');
  assert.equal(linked.changed, true);
  assert.match(linked.value, /acts on \[\[urea\]\] in this paragraph/);
  const second = firstMeaningfulLink(linked.value, ['urea'], 'urea');
  assert.equal(second.changed, false);
  assert.equal(second.value, linked.value);
});

test('first-use linker backfills prose before a later Connections link but respects an earlier link', () => {
  const lateLink = '# Example\n\nPlain urea belongs here.\n\n## Connections\n\n- [[urea]]';
  const backfilled = firstMeaningfulLink(lateLink, ['urea'], 'urea');
  assert.equal(backfilled.changed, true);
  assert.match(backfilled.value, /Plain \[\[urea\]\] belongs here/);

  const earlyLink = '# Example\n\n[[urea|Urea]] is linked first. Later urea can remain plain.';
  assert.equal(firstMeaningfulLink(earlyLink, ['urea'], 'urea').changed, false);
});

test('priority score rewards reader demand and source readiness', () => {
  const readyInput = {
    articleCount: 30,
    sourceCount: 8,
    weightedGraphGain: 80,
    categoryCount: 4,
    leadCount: 3,
    headingCount: 3,
    scopeFit: 5,
    ambiguityPenalty: 0,
  };
  const ready = priorityScore(readyInput);
  const thin = priorityScore({
    articleCount: 2,
    sourceCount: 1,
    weightedGraphGain: 2,
    categoryCount: 1,
    leadCount: 0,
    headingCount: 0,
    scopeFit: 2,
    ambiguityPenalty: 2,
  });
  assert.ok(ready.total > thin.total);
  assert.equal(ready.components.evidence, 25);
  assert.ok(thin.components.ambiguityPenalty < 0);

  const mediumGraph = priorityScore({ ...readyInput, weightedGraphGain: 40 });
  const highGraph = priorityScore(readyInput);
  assert.ok(highGraph.total > mediumGraph.total, 'unrounded scoring must preserve graph-gain differences');
});
