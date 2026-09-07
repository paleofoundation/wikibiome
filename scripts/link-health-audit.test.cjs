const assert = require('node:assert/strict');
const test = require('node:test');

const { shouldSkipWikilinkAuditFile } = require('./link-health-audit.cjs');

test('excludes generated link-health reports from their own wikilink audit', () => {
  assert.equal(shouldSkipWikilinkAuditFile('analyses', 'link-health-2026-09-07.md'), true);
  assert.equal(shouldSkipWikilinkAuditFile('analyses', 'link-health-2026-04-19.md'), true);
  assert.equal(shouldSkipWikilinkAuditFile('analyses', 'lint-report-2026-09-07.md'), false);
  assert.equal(shouldSkipWikilinkAuditFile('sources', 'link-health-2026-09-07.md'), false);
});
