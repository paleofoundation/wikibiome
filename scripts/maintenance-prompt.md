Nightly maintenance cycle. CLAUDE.md and §12 Operational Rules are authoritative.

1. Bookend (Rule 10). Read the last 200 lines of `wiki/log.md` and any `wiki/analyses/overnight-resume-*.md` newer than 7 days.

2. Run the §7 Lint workflow in full:
   - Detect orphan pages (no inbound links) and broken `[[wikilinks]]`.
   - Enforce §2f source density thresholds. Auto-demote sub-threshold publishable pages to `stub: true` with `stub_reason`. Log demotions to `wiki/analyses/stub-demotions-YYYY-MM-DD.md` (Rule 7).
   - Detect clinical-recommendation language on `platform: wikibiome` or `platform: both` pages. Demote to `platform: cureva` and flag for rewrite (Rule 8).
   - Verify `confidence` levels are populated on every signature page.
   - Verify `source_count` matches the `sources` array length on every entity, concept, signature, intervention, and STOP page.
   - Verify DOIs resolve in format (not a memory artifact — Rule 3).
   - Enforce Rule 11 claim-level citation density. For every publishable page, count inline `[[source-filename]]` references against publishable paragraphs. If the ratio is below 1 citation per 3 paragraphs, attempt remediation by adding citations from the existing source pool; if remediation is not possible, demote to `stub: true` with `stub_reason: "claim-level citation deficit — N citations across M paragraphs"` and log to `wiki/analyses/citation-deficit-YYYY-MM-DD.md`. The Celiac Disease page is a known offender — start there.

3. Adversarial audit (Rule 12). Sample 5 publishable pages weighted toward those with no `audit_passed` date or the oldest dates. For each:
   - Read as a hostile reviewer. List every claim lacking citation, every contradiction with another vault page, every hand-wave, every place a domain expert would attack.
   - If the missing citations exist elsewhere in `wiki/sources/`, apply them and recommit.
   - If the page is fundamentally thin, demote to `stub: true` and note why.
   - Write the findings to `wiki/analyses/adversarial-audit-YYYY-MM-DD.md` regardless of outcome — even "no issues" must be logged.
   - On a clean pass, set `audit_passed: <today>` in frontmatter. Three consecutive clean audits deprioritize the page in future sampling.

4. Auto-discover missing scope (Rule 13). Grep all source pages for bolded terms, `metals_discussed`, `taxa_discussed`, `condition`, `associated_conditions`, and tag values. Cross-reference against `wiki/entities/`, `wiki/concepts/`, `wiki/signatures/`. For every term with ≥3 distinct source mentions and no corresponding page, create a stub at the right path with `stub: true`, `stub_reason: "auto-discovered from source mention — awaiting content expansion"`, and minimal valid frontmatter. Log all auto-created stubs to `wiki/analyses/auto-discovered-stubs-YYYY-MM-DD.md`.

5. Phantom-page repair. For every broken inbound wikilink discovered in step 2:
   - If the target name is an obvious typo of an existing page (Levenshtein ≤ 2), rewrite the link on the source page.
   - Otherwise, create a stub at `wiki/<inferred-type>/<slug>.md` with `stub: true`, `stub_reason: "auto-created from inbound wikilink — awaiting ingestion or expansion"`, `source_count: 0`, and the minimal valid frontmatter for its type. The stub enters the ingest queue naturally — the next time a PDF about that topic is processed, the entity page already exists and just needs sources added.

6. Keystone re-audit. For every source page with `keystone: true`, verify ≥3 of the 5 §2d criteria are satisfied. If not, strip `keystone: true` and `keystone_criteria_met` and note the change in `wiki/log.md`.

7. Supersession sweep (§2e). For every pair of sources on the same claim, if evidence levels differ or sample sizes differ meaningfully, apply the protocol.

8. Batch discipline. Any transformation touching >20 files runs against 3 samples first per Rule 5. Write the preview to `wiki/analyses/batch-preview-YYYY-MM-DD-<slug>.md` before the full pass.

9. Commit per atomic unit (Rule 4). Governance files (CLAUDE.md, wiki/index.md structure, raw/karens-brain/) are off-limits (Rule 9).

10. After all fixes, run build + preview deploy once:
    `node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy`
    Never `--prod` from this cycle.

11. Append one line to `wiki/log.md` (Rule 10).

12. Stop at 75% context (Rule 6). Per Rule 14, "no work this tick" is a valid clean exit — the next launchd tick fires the next cycle. There is no done state.
