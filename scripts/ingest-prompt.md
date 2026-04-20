Autonomous ingest cycle. Project rules in CLAUDE.md are authoritative. Operate under §12 Operational Rules without deviation.

1. Bookend (Rule 10). Read the last 200 lines of `wiki/log.md` and any `wiki/analyses/overnight-resume-*.md` newer than 7 days.

2. Find PDFs in `raw/` (recursive) that have not been ingested. A PDF is considered ingested if a page in `wiki/sources/` references it via `pdf_source:` frontmatter or has a slug derived from the PDF filename. Compare normalized slugs.

3. Process up to 10 un-ingested PDFs this cycle. Stop sooner if context approaches 75% (Rule 6). For each PDF:
   a. Read it fully. Extract DOI, authors, journal, year directly from the document. Rule 3: never fabricate. If a field is unreadable, set `doi: "not yet verified"` and add `<!-- NEEDS VERIFICATION -->`.
   b. Create `wiki/sources/<slug>.md` with full v2 frontmatter per §4 (evidence_level, karen_brain_primitives, metals_discussed, taxa_discussed, key_findings, library_category, platform, condition).
   c. Update or create the entity, concept, and signature pages affected by this source per the §7 Ingest Source workflow. Run cross-condition pattern detection per step 7 of that workflow.
   d. Run `node scripts/build-content.cjs`. If it fails, `git checkout` the affected paths, log to `wiki/log.md`, and skip this PDF (Rule 4).
   e. If it passes, `git add` the changed paths and commit as `ingest: <source-slug>` (Rule 4 atomicity).

4. Source density check. Any newly-created entity, concept, or signature page that is below the §2f threshold must carry `stub: true` and `stub_reason` (Rule 7). Do not publish thin content as a finished page.

4a. Claim-level citation self-check (Rule 11). Before committing any newly-written or updated page, count inline `[[source-filename]]` references against publishable paragraphs. If the ratio is below 1 citation per 3 paragraphs, revise the page — either tighten the prose to remove unsupported claims, add citations from the existing source pool, or demote the page to `stub: true` with a citation-deficit `stub_reason`. Wikipedia-parity is the standard: every material claim resolves to its source at the point of the claim.

5. After the batch, run the build pipeline once: `node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy` — preview deployment, not `--prod`. Karen promotes to prod manually after review.

6. Append one line to `wiki/log.md` (Rule 10) summarizing: PDFs ingested this cycle, signature pages touched, contradictions flagged, stubs created, errors encountered.

7. If context reaches 75%, write `wiki/analyses/overnight-resume-YYYY-MM-DD.md` naming the last completed commit and the next intended PDF, then exit (Rule 6).

If zero un-ingested PDFs are found at step 2, exit immediately. Do not invent work.
