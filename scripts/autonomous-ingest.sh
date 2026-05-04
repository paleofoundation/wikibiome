#!/bin/bash
# Autonomous ingest watcher.
# Polled by launchd every 10 minutes. Single-instance. Skips if another
# Claude session is mid-commit. Invokes Claude headless with the standing
# ingest prompt only when un-ingested PDFs are detected.

set -euo pipefail

# ROOT is derived from this script's own location so the project is
# relocatable: scripts/autonomous-ingest.sh -> $ROOT. No hardcoded path.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
LOCKDIR="$ROOT/.autonomous-ingest.lock.d"
MARKER="$ROOT/.autonomous-ingest.marker"
LOG="$ROOT/wiki/autonomous-ingest.log"
PROMPT="$ROOT/scripts/ingest-prompt.md"

# Resolve claude binary (Homebrew on Apple Silicon, Intel, or user install).
# Edit this if `which claude` returns a different path on Karen's machine.
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

# Single-instance lock (mkdir is atomic on every Unix).
if ! mkdir "$LOCKDIR" 2>/dev/null; then
  exit 0
fi
trap "rmdir '$LOCKDIR'" EXIT

# Defer if another git process is mid-commit (avoid index.lock contention
# with an interactive Claude Code session).
if [[ -f "$ROOT/.git/index.lock" ]]; then
  echo "[$(date)] Git lock present — deferring to interactive session." >> "$LOG"
  exit 0
fi

cd "$ROOT"

# Find the newest PDF under raw/ that is newer than the last marker.
# If no marker exists (first run), any PDF triggers a cycle.
if [[ -f "$MARKER" ]]; then
  newest=$(find raw -type f -iname "*.pdf" -newer "$MARKER" -print -quit 2>/dev/null || true)
else
  newest=$(find raw -type f -iname "*.pdf" -print -quit 2>/dev/null || true)
fi

if [[ -z "$newest" ]]; then
  exit 0
fi

echo "[$(date)] Un-ingested PDF detected (e.g. $newest). Launching Claude." >> "$LOG"

# Run Claude headless with the standing ingest prompt.
# --dangerously-skip-permissions: no per-action approval prompts.
# -p: non-interactive mode; reads prompt as argument, exits when done.
"$CLAUDE_BIN" --dangerously-skip-permissions --model sonnet -p "$(cat "$PROMPT")" \
  >> "$LOG" 2>&1 || {
    echo "[$(date)] Claude exited non-zero. See log above." >> "$LOG"
    exit 1
  }

# Push any new commits to GitHub so the work doesn't live only on this disk.
# Soft-fail: if push errors (network, auth), log and continue. Commits are local;
# next cycle will retry. The marker still advances on a clean Claude exit so we
# don't re-ingest the same PDFs.
if git -C "$ROOT" rev-parse --quiet --verify HEAD >/dev/null 2>&1; then
  if git -C "$ROOT" push 2>>"$LOG"; then
    echo "[$(date)] git push succeeded." >> "$LOG"
  else
    echo "[$(date)] git push failed (commits are local; will retry next cycle)." >> "$LOG"
  fi
fi

# Marker advances only on successful run, so a failed cycle re-attempts next tick.
touch "$MARKER"
echo "[$(date)] Cycle complete." >> "$LOG"
