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

# Capture source count before Claude runs, for backlog detection at cycle end.
sources_before=$(find wiki/sources -name "*.md" -type f 2>/dev/null | wc -l | tr -d ' ')

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

# Marker advance is conditional: only advance when no progress was made
# OR when the backlog has been fully drained. This turns single-trigger cycles
# into a draining loop -- every 5-min tick keeps firing until raw/ is fully ingested.
sources_after=$(find wiki/sources -name "*.md" -type f 2>/dev/null | wc -l | tr -d ' ')
pdf_count=$(find raw -type f -iname "*.pdf" 2>/dev/null | wc -l | tr -d ' ')

if [[ "$sources_after" -gt "${sources_before:-0}" ]] && [[ "$pdf_count" -gt "$sources_after" ]]; then
  echo "[$(date)] Progress: $((sources_after - ${sources_before:-0})) new sources. Backlog remains ($pdf_count PDFs / $sources_after sources). Marker NOT advanced; next tick will re-fire." >> "$LOG"
else
  touch "$MARKER"
  echo "[$(date)] Marker advanced (sources_before=${sources_before:-0} sources_after=$sources_after pdf_count=$pdf_count)." >> "$LOG"
fi
echo "[$(date)] Cycle complete." >> "$LOG"
