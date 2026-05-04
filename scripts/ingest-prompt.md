Autonomous ingest cycle. Project rules in CLAUDE.md are authoritative. Operate under §12 Operational Rules without deviation.

1. Bookend (Rule 10). Read the last 200 lines of `wiki/log.md` and any `wiki/analyses/overnight-resume-*.md` newer than 7 days.

2. Find PDFs in `raw/` (recursive) that have not been ingested. A PDF is considered ingested if a page in `wiki/sources/` references it via `pdf_source:` frontmatter or has a slug derived from the PDF filename. Compare normalized slugs.

2a. **Priority routing.** The un-ingested queue is not first-come-first-served — it is prioritized by folder. Select the next 5 PDFs to ingest this cycle by walking down this priority list and taking the first 5 un-ingested PDFs you encounter:

   **Tier 1 — DARK folders (highest priority).** These folders have severe content gaps and must be closed first:
   - `raw/Necrotizing Enterocolitis NEC/`
   - `raw/Cerebral Palsy/`
   - `raw/Fibromyalgia/`

   **Tier 2 — THIN folders with large gaps.** After Tier 1 is empty:
   - `raw/Postpartum Depression/`
   - `raw/Food Metal Contamination/`
   - `raw/GERD/`
   - `raw/Schizophrenia/`
   - `raw/Ovarian Cancer/`
   - `raw/Hashimoto's/` (or `Hashimotos/` — match whichever folder exists)
   - `raw/Pancreatic Cancer/`

   **Tier 3 — remaining autism queue.** After Tier 1 and 2 are empty:
   - `raw/Autism papers, but disorganized. Not yet added or ingested/`
   - `raw/Autism spectrum disorder (ASD)/`

   **Tier 4 — everything else.** Any remaining un-ingested PDFs under `raw/`.

2b. **Exclusions.** Do NOT ingest PDFs from these folders — they are being worked on by a parallel interactive Claude session and would collide on git lock and source-page writes:
   - (none currently)

   Also skip any PDF larger than 18 MB — they blow Claude's read cap (20 MB). Log the skip to `wiki/log.md` with filename and size so it can be manually handled (OCR/compress/split).

3. Process up to 5 un-ingested PDFs this cycle, drawn from the priority tiers above. Stop sooner if context approaches 75% (Rule 6). For each PDF:
   a. Read it fully. Extract DOI, authors, journal, year directly from the document. Rule 3: never fabricate. If a field is unreadable, set `doi: "not yet verified"` and add `<!-- NEEDS VERIFICATION -->`.
   b. Create `wiki/sources/<slug>.md` with full v2 frontmatter per §4 (evidence_level, karen_brain_primitives, metals_discussed, taxa_discussed, key_findings, library_category, platform, condition).
   c. Update or create the entity, concept, and signature pages affected by this source per the §7 Ingest Source workflow. Run cross-condition pattern detection per step 7 of that workflow.
   d. Run `node scripts/build-content.cjs`. If it fails, `git checkout` the affected paths, log to `wiki/log.md`, and skip this PDF (Rule 4).
   e. If it passes, `git add` the changed paths and commit as `ingest: <source-slug>` (Rule 4 atomicity).

4. Source density check. Any newly-created entity, concept, or signature page that is below the §2f threshold must carry `stub: true` and `stub_reason` (Rule 7). Do not publish thin content as a finished page.

4a. Claim-level citation self-check (Rule 11). Before committing any newly-written or updated page, count inline `[[source-filename]]` references against publishable paragraphs. If the ratio is below 1 citation per 3 paragraphs, revise the page — either tighten the prose to remove unsupported claims, add citations from the existing source pool, or demote the page to `stub: true` with a citation-deficit `stub_reason`. Wikipedia-parity is the standard: every material claim resolves to its source at the point of the claim.

5. After the batch, run the build pipeline once: `node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod` — direct production deploy. wikibiome.com updates with every cycle. (Changed 2026-05-04 from preview-only after Karen verified autonomous output quality on today first end-to-end cycle.)

6. Append one line to `wiki/log.md` (Rule 10) summarizing: PDFs ingested this cycle, signature pages touched, contradictions flagged, stubs created, errors encountered.

7. If context reaches 75%, write `wiki/analyses/overnight-resume-YYYY-MM-DD.md` naming the last completed commit and the next intended PDF, then exit (Rule 6).

If zero un-ingested PDFs are found at step 2, exit immediately. Do not invent work.
