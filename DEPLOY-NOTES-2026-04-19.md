# Deploy Notes — 2026-04-19 02:00 (nightly auto-deploy)

Terminal access approval timed out at 02:00 — you were asleep, so I couldn't push the one-liner to your clipboard.
The deploy command is already saved in `.deploy-queued` (unchanged from yesterday, same form).

## Paste-and-run when you wake up

```
cd ~/Documents/Raw && node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod && date > .last-deploy
```

## Why a deploy is needed

- Last deploy: **Thu Apr 16 08:22:06 EEST 2026**
- Commits since: **5**
- Wiki file changes since: **1,994**
- Top commit: `432d7cea` — semantic integrity pass (10 interventions, 31 STOPs, 2 supersessions, keystone revalidation)

## Commit list

- `432d7cea` semantic integrity pass: boundary fixes, 10 interventions, 31 STOPs, 2 supersessions, keystone revalidation
- `9a13b7c8` cycle 2: clean check + overnight resume file
- `db335ed3` cycle 1: health check + lint fixes + 8 ingests + 2 stubs + gestational-diabetes signature
- `1a6ceda2` pre-overnight checkpoint 2026-04-18
- `d841ae09` Deepen 8 concept pages + 2 CP source pages

## Lint gate check

Reviewed `wiki/analyses/lint-report-2026-04-12.md` (most recent Sunday lint). No factual contradictions flagged (16 issues are structural: stale index, duplicate filenames, missing frontmatter fields). Deploy is **not** blocked.

## To skip this dance tomorrow night

`touch ~/Documents/Raw/.auto-deploy-approved` — the scheduled task will then deploy directly via Bash without needing Terminal approval. (It will still refuse if Sunday lint flags ≥5 contradictions.)
