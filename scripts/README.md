# Autonomous Ingest Architecture

Four layers. Each is independent; change one without touching the others. This is the reusable skeleton for any knowledge-base build driven by a corpus of source documents.

## Layer 1 — Governance (`CLAUDE.md`)

The durable rules. Every autonomous Claude session reads this at start (it's auto-loaded as project instructions). Describes the schema, workflows, quality gates, and operational constraints. Changes per project but the *shape* is stable:

- Page types and frontmatter schema (what a "source" page looks like, what an "entity" page looks like).
- Evidence taxonomy (what kinds of sources count, ranked).
- Quality gates (source density thresholds, citation density, confidence grading).
- Workflow steps (how to ingest, how to lint, how to audit).
- Operational rules (never delete, fail loud, no fabrication, atomicity, context budget, etc.).

**Carries to next project with edits to:** schema (legal filings look different from scientific papers), evidence taxonomy (case law has its own hierarchy), and boundary rules (what's public-facing vs. gated).

**Carries unchanged:** the operational rules (§12 in this project). Those are architecture-level and apply to any autonomous corpus build.

## Layer 2 — Standing Prompts (`scripts/*.md`)

One prompt per cycle type. A prompt is the complete instruction set that a fresh Claude session receives when woken up. No conversation memory, no prior context — just the prompt plus whatever it reads from the filesystem.

Two cycle types here:

- `ingest-prompt.md` — runs when new source documents appear. Processes N documents, builds, commits atomically, preview-deploys, exits.
- `maintenance-prompt.md` — runs on a schedule. Lints, audits, repairs phantom pages, discovers missing scope, exits.

**Design principle:** every prompt names the rules it enforces and the exit conditions. No "done" state — only "no work this tick." Cycles exit cleanly so the next tick can fire.

**Carries to next project with edits to:** batch sizes, specific checks, and the names of rules referenced.

## Layer 3 — Workers (`scripts/*.sh`)

Shell scripts that wrap the Claude CLI call. Responsibilities:

- Single-instance lock (`mkdir` is atomic on every Unix). Prevents two cycles of the same type from running concurrently.
- Precondition checks (is there actually work to do? is another git process already committing?).
- Claude invocation with the right flags (`--dangerously-skip-permissions`, `--model sonnet` for volume work, `-p` for non-interactive).
- Logging to a file the human can `tail -f`.
- Marker file updated only on successful cycles, so failed cycles re-attempt on the next tick.

**Carries to next project unchanged** except for paths and prompt filenames.

## Layer 4 — Scheduler (`launchd/*.plist`)

The OS glue that wakes the workers. On macOS this is `launchd`; on Linux it would be `systemd timers` or cron; on Windows it would be Task Scheduler. The concept is the same: a registered agent with a schedule that fires a command.

Two schedulers here:

- `com.wikibiome.ingest.plist` — `StartInterval: 300` (every 5 minutes). Polls for new documents.
- `com.wikibiome.maintenance.plist` — `StartCalendarInterval: 02:30`. Nightly audit and repair.

**Carries to next project unchanged** except for the Label and the script path.

---

## How to replicate this for a new corpus

1. **Start with a new working directory.** Clone this repo's skeleton: `CLAUDE.md`, `scripts/`, `launchd/`. Delete the WikiBiome-specific content; keep the structure.

2. **Rewrite `CLAUDE.md`** for the new corpus's schema, evidence taxonomy, and platform boundary. Keep §12 Operational Rules — they're architecture-level, not project-level.

3. **Edit the two prompts** to reference the new directory structure and page types. Rules 1–14 references stay the same.

4. **Edit the two shell scripts** to point at the new working directory.

5. **Edit the two plists** to new Labels (`com.<project>.ingest`, `com.<project>.maintenance`) and the new script paths.

6. **Install the agents** (`cp` + `launchctl load`). Drop documents into the corpus folder. Walk away.

That's it. The mental model transfers completely.

---

## Scaling: what changes between 4,700 and 27,000 documents

Not every part of this architecture scales linearly. The pieces that bite at 27K:

### Throughput

At 10 PDFs/cycle × 12 ticks/hour = 120/hour ceiling with one worker. Realistic sustained rate is 60–80/hour. 27,000 documents at 70/hour is ~16 days of continuous operation.

**Lever:** parallel workers. Clone the ingest plist to a second label (`com.<project>.ingest-2.plist`), use a different lock directory in the worker script, and have each worker claim PDFs from a different partition (e.g. even vs. odd hash of the filename). 2 workers ≈ 1.8× throughput (small overhead from git-commit serialization). 4 workers ≈ 3.3×. Beyond 4 you start hitting diminishing returns because Vercel preview deploys queue up.

### Git repository size

27,000 PDFs at typical academic-PDF sizes (5–15 MB each) is 130–400 GB. Git was not built for this. Options:

- **Git LFS** for PDFs in `raw/`. Markdown stays in regular git. Works but adds complexity.
- **PDFs outside git entirely.** Store PDFs on S3 or a local-only directory that isn't tracked. Source pages reference them by path or URL. Simpler long-term.

I recommend option 2 for 27K. Source pages don't need the PDFs — they just need the *content*, which they've already extracted.

### Filename-based deduplication

The current worker checks "is there a wiki/sources/ page whose slug derives from this PDF filename." At 27K this will false-negative on rename collisions and duplicate-content-different-filename cases. **Fix:** add a content hash check. After ingest, record `pdf_sha256:` in frontmatter. The un-ingested query becomes "any PDF whose hash is not in any source page."

### Build pipeline bottleneck

`build-content.cjs` + `vite build` + `generate-static.cjs` is currently a few minutes on ~460 pages. At 27,000 pages, expect 30+ minutes per full build. This becomes painful when the ingest cycle runs `vercel deploy` after each batch.

**Fix:** incremental builds. Only re-render pages that changed since the last build. `build-content.cjs` needs a "since last commit" mode. This is a moderate engineering task — not trivial, not scary.

### Vercel per-project limits

There's a static-page ceiling per Vercel project. At 27K pages you're close to or past it. **Fix:** split by corpus subdomain (e.g. `<topic1>.yoursite.com`, `<topic2>.yoursite.com`), each deployed as its own Vercel project. Or switch to a proper CMS backend — at that scale, static generation's advantage (simplicity) is outweighed by its disadvantage (rebuild cost).

### Observability

`tail -f` doesn't scale. With many cycles running across multiple workers, you want structured metrics: PDFs ingested per hour, stubs auto-created per day, citation-deficit demotions, adversarial-audit pass rate. **Fix:** workers append a single JSON line per cycle to `metrics.jsonl`. A 30-line Node script aggregates it into a daily summary. Later: pipe to Grafana or similar, but that's overkill until you actually need it.

### Contradiction and audit load

Adversarial audit samples 5 pages per nightly cycle. At 460 pages that's a complete sweep every 92 days — fine. At 27,000 pages it's a sweep every 5,400 days — not fine. **Fix:** raise the sample size, or run multiple audit cycles per night, or partition by section so each section gets its own audit agent.

---

## The meta-lesson

What's portable is the **architecture**, not the code. The four-layer separation — governance / prompt / worker / scheduler — is the reusable thing. Each layer has a clean interface with the next:

- Governance is read by Claude at the start of every session (auto-loaded).
- Prompts invoke workflows defined in governance.
- Workers invoke Claude with a prompt.
- Schedulers invoke workers on a cadence.

Every corpus build of this shape has these four layers, whether you call them that or not. Making them explicit and file-separated is what lets you swap the governance for a legal-documents schema or a financial-filings schema without rewriting the shell scripts.

Training-wheels insight: the first run teaches you which assumptions in the governance don't generalize. The second run rewrites the governance with that wisdom. By the third run, governance is stable and you just change the corpus.
