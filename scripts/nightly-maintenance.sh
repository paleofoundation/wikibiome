#!/bin/bash
# Nightly maintenance cycle.
# Polled by launchd once per night. Runs lint, phantom-page repair,
# keystone re-audit, supersession sweep, build, preview deploy.

set -euo pipefail

# ROOT is derived from this script's own location so the project is
# relocatable: scripts/nightly-maintenance.sh -> $ROOT. No hardcoded path.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
LOCKDIR="$ROOT/.nightly-maintenance.lock.d"
LOG="$ROOT/wiki/nightly-maintenance.log"
PROMPT="$ROOT/scripts/maintenance-prompt.md"

CLAUDE_BIN="$(command -v claude || true)"
if [[ -z "$CLAUDE_BIN" ]]; then
  for candidate in /opt/homebrew/bin/claude /usr/local/bin/claude "$HOME/.claude/local/claude"; do
    if [[ -x "$candidate" ]]; then CLAUDE_BIN="$candidate"; break; fi
  done
fi
if [[ -z "$CLAUDE_BIN" ]]; then
  echo "[$(date)] claude binary not found on PATH" >> "$LOG"
  exit 1
fi

if ! mkdir "$LOCKDIR" 2>/dev/null; then
  exit 0
fi
trap "rmdir '$LOCKDIR'" EXIT

# Run every other night to halve token burn. Odd day-of-year = run, even = skip.
# Maintenance work (lint, adversarial audit, scope discovery) is low-urgency and
# accumulates gracefully across 48h gaps.
if (( 10#$(date +%j) % 2 == 0 )); then
  echo "[$(date)] Even day-of-year — skipping maintenance cycle to conserve tokens." >> "$LOG"
  exit 0
fi

if [[ -f "$ROOT/.git/index.lock" ]]; then
  echo "[$(date)] Git lock present — deferring." >> "$LOG"
  exit 0
fi

cd "$ROOT"

echo "[$(date)] Starting nightly maintenance cycle." >> "$LOG"

"$CLAUDE_BIN" --dangerously-skip-permissions --model sonnet -p "$(cat "$PROMPT")" \
  >> "$LOG" 2>&1 || {
    echo "[$(date)] Claude exited non-zero. See log above." >> "$LOG"
    exit 1
  }

# Push any new commits to GitHub. Soft-fail (see autonomous-ingest.sh for rationale).
if git -C "$ROOT" rev-parse --quiet --verify HEAD >/dev/null 2>&1; then
  if git -C "$ROOT" push 2>>"$LOG"; then
    echo "[$(date)] git push succeeded." >> "$LOG"
  else
    echo "[$(date)] git push failed (commits are local; will retry next cycle)." >> "$LOG"
  fi
fi

echo "[$(date)] Maintenance cycle complete." >> "$LOG"
