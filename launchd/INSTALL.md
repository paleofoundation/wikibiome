# Autonomous Ingest — One-Time Install

Two launchd jobs run in the background on Karen's Mac:

- **`com.wikibiome.ingest`** — polls `raw/` every 10 minutes. If a new PDF appears anywhere under `raw/`, it launches Claude headless (`claude --dangerously-skip-permissions -p`) with the standing prompt at `scripts/ingest-prompt.md`. Claude ingests up to 5 PDFs per cycle, commits atomically, and deploys a Vercel preview.
- **`com.wikibiome.maintenance`** — runs every night at 2:30am. Executes the full §7 Lint workflow, repairs phantom pages, re-audits keystones, applies supersession, deploys a Vercel preview.

Neither job promotes to production. You promote to prod manually after reviewing the preview URL.

## Install

From `~/Code/wikibiome`:

```bash
chmod +x scripts/autonomous-ingest.sh scripts/nightly-maintenance.sh
cp launchd/com.wikibiome.ingest.plist ~/Library/LaunchAgents/
cp launchd/com.wikibiome.maintenance.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.wikibiome.ingest.plist
launchctl load ~/Library/LaunchAgents/com.wikibiome.maintenance.plist
```

That's it. Drop PDFs into `raw/` and walk away.

## Verify it's running

```bash
launchctl list | grep wikibiome
```

Should show both labels with a PID (if mid-cycle) or `-` (between cycles). A number in the status column means the last run exited non-zero — check the logs below.

## Watch it work

```bash
tail -f ~/Code/wikibiome/wiki/autonomous-ingest.log
tail -f ~/Code/wikibiome/wiki/nightly-maintenance.log
tail -f /tmp/wikibiome-ingest.err.log
```

## Kill switch

```bash
launchctl unload ~/Library/LaunchAgents/com.wikibiome.ingest.plist
launchctl unload ~/Library/LaunchAgents/com.wikibiome.maintenance.plist
```

Unload stops future runs. A cycle already in flight finishes.

## Promote a preview to prod

When you review a preview and want it live:

```bash
cd ~/Code/wikibiome && vercel promote <preview-url> --prod
```

Or just rerun the full pipeline manually with `--prod`:

```bash
cd ~/Code/wikibiome && node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod
```

## What the jobs will and will not do

Will:
- Ingest new PDFs per CLAUDE.md §7.
- Commit atomically (Rule 4) — each ingest is a separate `ingest: <slug>` commit.
- Auto-demote sub-threshold pages to `stub: true` (§2f, Rule 7).
- Repair phantom wikilinks by rewriting typos and stub-creating genuine gaps.
- Rebalance boundary violations — clinical language on WikiBiome pages moves to Cureva (Rule 8).
- Log every cycle to `wiki/log.md`.

Will not:
- Promote to production. Preview deploys only.
- Delete pages (Rule 1).
- Edit CLAUDE.md, wiki/index.md structure, or raw/karens-brain/ (Rule 9).
- Fabricate DOIs, authors, or metadata (Rule 3).
- Run a bulk transform on >20 files without a 3-file preview first (Rule 5).

## What happens if it breaks

- Build failure: the cycle reverts affected paths and logs to `wiki/log.md`. The broken PDF is marked and left alone; subsequent cycles skip it until a human intervenes.
- Lock contention with an interactive Claude session: the script detects `.git/index.lock` and defers to the next tick.
- Claude exits non-zero: the marker does not advance, so the next tick retries.
- Context cap (75%): Claude writes `wiki/analyses/overnight-resume-YYYY-MM-DD.md` and exits clean. The next tick picks up where it left off.
