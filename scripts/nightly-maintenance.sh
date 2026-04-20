#!/bin/bash
# Nightly maintenance cycle.
# Polled by launchd once per night. Runs lint, phantom-page repair,
# keystone re-audit, supersession sweep, build, preview deploy.

set -euo pipefail

ROOT="$HOME/Documents/Claude/Raw"
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

if [[ -f "$ROOT/.git/index.lock" ]]; then
  echo "[$(date)] Git lock present — deferring." >> "$LOG"
  exit 0
fi

cd "$ROOT"

echo "[$(date)] Starting nightly maintenance cycle." >> "$LOG"

"$CLAUDE_BIN" --dangerously-skip-permissions -p "$(cat "$PROMPT")" \
  >> "$LOG" 2>&1 || {
    echo "[$(date)] Claude exited non-zero. See log above." >> "$LOG"
    exit 1
  }

echo "[$(date)] Maintenance cycle complete." >> "$LOG"
