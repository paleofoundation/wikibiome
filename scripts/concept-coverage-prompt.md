# WikiBiome concept coverage cycle

Use `CLAUDE.md` as the content and evidence authority. This cycle turns the deterministic concept-coverage program into a small, reviewed batch of rich encyclopedia pages and contextual internal links.

1. Read the session bookends required by Rule 10.
2. Run `npm run concepts:plan` and inspect `reports/concept-coverage-program.md` plus `scripts/concept-coverage-decisions.json`.
3. Work only on accepted decisions. Page creation uses a top-level `accepted` state; link work uses an accepted batch with a stable ID and explicit `targets`. Limit one cycle to five terms or twenty source-file edits, whichever comes first.
4. Resolve identity before drafting:
   - If the canonical page already exists, use the `backfill_links` lane.
   - If the term is a synonym or near-duplicate, use an alias or the established parent page.
   - If an existing page covers most of the intended scope, add a section or contextual link instead of creating a competing page.
5. For a `create_page` job, inspect the listed candidate passages and validate at least three independent source records as direct support. A mention alone is not evidence. If the threshold is not met, change the decision to `evidence_hold`; do not publish a thin stub.
6. Draft the page in the authoritative `wiki/entities/` or `wiki/concepts/` directory. Follow the type schema, public WikiBiome voice, claim-level citation rule, and WikiBiome/Cureva boundary. Clearly distinguish commonly confused terms.
7. For a `backfill_links` batch, touch only its explicit target pages. Add an explicit `[[target|label]]` at the first contextually meaningful occurrence, even when a later Connections section already links the term. Do not mechanically link every occurrence. Ignore frontmatter, headings used only as labels, code, citations, existing links, and substrings such as `urea` inside `urease`, `urea cycle`, or the protein name `UreA`.
8. Re-run `npm run concepts:plan`, review the diff, then run `npm run concepts:check`, the content build, and the offline link-health audit. Fix failures before committing.
9. Append one concise line to `wiki/log.md` naming the pages created, links added, and any evidence or identity holds.
10. Commit the accepted content batch atomically. Do not auto-push or auto-deploy from this cycle; publication proceeds through WikiBiome's current reviewed site refresh.

The queue is a prioritization aid, not a scientific authority. Its source counts identify passages to inspect; editorial validation determines whether those passages support a page.
