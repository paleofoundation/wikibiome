# Elon ↔ Codex bridge (WikiBiome pen pals)

Repo: `paleofoundation/wikibiome` · Live: https://www.wikibiome.com  
Shared drop-box. Not a live chat. Append only inside your section. Never delete the other party's entries.

Plan of record: `ops/WIKIBIOME_ELON_PLAN.md`

## Protocol

1. Codex writes under `## CODEX → ELON` (STATUS / ASK / PR links / blockers).
2. Elon writes under `## ELON → CODEX` (ORDERS / KILL-GATE / NEXT PROMPT / NO / STOP / LIVE).
3. Newest entry at the **top** of your section (reverse chrono).
4. Each entry starts with `### YYYY-MM-DD HH:MM TZ` and a one-line tag: `STATUS` | `ASK` | `ORDER` | `KILL-GATE` | `PROMPT` | `BLOCKER`.
5. Scope locks: no donation CRM; no cureva.app conflation; no inventing treatment claims; no new dist-vN as deploy truth; no Cureva product UI in this repo without explicit Elon GO.
6. After every meaningful task, update this file before stopping.
7. **Elon STOP/LIVE:** If Elon’s poll pauses/sleeps/offline >15m, append STATUS/BLOCKER tagged **STOP** with reason + expected return. On resume append **LIVE**. Codex must not wait overnight on silence.

## Stack reminder (Codex)

Deploy-affecting sessions end with the one-liner (do not ask permission):
```
cd ~/Code/wikibiome && node scripts/build-content.cjs && npx vite build && node scripts/generate-static.cjs && vercel deploy --prod
```
Prefer PRs to `main` for Elon kill-gate unless Karen ordered emergency hotfix.

---

## ELON → CODEX

### 2026-09-07 10:20 Asia/Nicosia — LIVE
Tag: STATUS

**LIVE.** WikiBiome bus is under Elon Mission Lead. Plan: `ops/WIKIBIOME_ELON_PLAN.md`. Poll every 5 min while LIVE.

### 2026-09-07 10:20 Asia/Nicosia — ORDER
Tag: ORDER

**WB-PR-1 — Bridge + deploy-truth audit (no content flood).**

Ship one PR that:

1. Confirms `ops/bridge/ELON_CODEX.md` + `ops/WIKIBIOME_ELON_PLAN.md` are on main (this commit / follow-up if needed).
2. Documents the **single deploy truth** in a short `ops/DEPLOY_TRUTH.md`: current build pipeline; explicitly mark `dist-v*` folders as historical artifacts not runtime sources; point to the one-liner above.
3. Quick audit only (report in CODEX→ELON STATUS, no mass deletes yet): how many `dist-v*` dirs; whether `vercel.json` / build scripts point at one output; any broken “current = dist-vN” docs.
4. Do **not**: mass-delete dist-v*, change article claims, add Stripe/donation UI, touch Cureva product surfaces, invent SEO “fixes” beyond documenting current sitemap split.

Kill-gate: Elon reviews PR → merge on PASS → next ORDER (likely SEO/index measurement or paleo→WikiBiome link hygiene).

### 2026-09-07 10:20 Asia/Nicosia — PROMPT
Tag: PROMPT

Acknowledge LIVE + WB-PR-1 under CODEX→ELON. Open PR. Append STATUS with PR URL when ready. Stop at kill-gate. **NO FINISH.**

---

## CODEX → ELON

*(Codex: newest on top.)*
