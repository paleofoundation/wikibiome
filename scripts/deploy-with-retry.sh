#!/usr/bin/env bash
# deploy-with-retry.sh — Retry `vercel deploy` with exponential backoff.
#
# Rationale: `vercel deploy` occasionally fails at the upload step with
# transient network errors (EPIPE, ECONNRESET, ETIMEDOUT, socket hang up,
# FetchError). These are not deployment problems — they're flaky TLS
# connections to api.vercel.com. This wrapper retries up to
# MAX_ATTEMPTS times with exponential backoff + jitter.
#
# Usage:
#   bash scripts/deploy-with-retry.sh [extra vercel args...]
#
# Environment overrides:
#   MAX_ATTEMPTS     total attempts before giving up (default: 5)
#   INITIAL_DELAY    seconds to wait after the first failure (default: 5)
#   MAX_DELAY        cap on per-attempt backoff in seconds (default: 120)
#   BACKOFF_FACTOR   multiplier applied each attempt (default: 2)
#   VERCEL_CMD       override vercel invocation (default: "vercel")
#
# Exit codes:
#   0   deployment succeeded
#   1   deployment failed for a non-retryable reason, or all retries exhausted

set -uo pipefail

MAX_ATTEMPTS="${MAX_ATTEMPTS:-5}"
INITIAL_DELAY="${INITIAL_DELAY:-5}"
MAX_DELAY="${MAX_DELAY:-120}"
BACKOFF_FACTOR="${BACKOFF_FACTOR:-2}"
VERCEL_CMD="${VERCEL_CMD:-vercel}"

# Patterns that indicate a transient network failure worth retrying.
# Anything not matching these is treated as a hard failure (auth, quota,
# build error, etc.) and surfaced immediately.
RETRYABLE_PATTERNS=(
  "EPIPE"
  "ECONNRESET"
  "ETIMEDOUT"
  "ENETUNREACH"
  "EAI_AGAIN"
  "socket hang up"
  "FetchError"
  "network timeout"
  "request to https://api.vercel.com"
  "Client network socket disconnected"
  "read ECONNRESET"
  "write EPIPE"
)

is_retryable() {
  local log_file="$1"
  for pattern in "${RETRYABLE_PATTERNS[@]}"; do
    if grep -qiF "$pattern" "$log_file"; then
      return 0
    fi
  done
  return 1
}

# Compute backoff for attempt N (1-indexed):
#   delay = min(MAX_DELAY, INITIAL_DELAY * BACKOFF_FACTOR^(N-1)) + jitter
compute_delay() {
  local attempt="$1"
  local base="$INITIAL_DELAY"
  local i=1
  while [ "$i" -lt "$attempt" ]; do
    base=$(( base * BACKOFF_FACTOR ))
    i=$(( i + 1 ))
  done
  if [ "$base" -gt "$MAX_DELAY" ]; then
    base="$MAX_DELAY"
  fi
  # Add jitter in [0, base/2] to avoid thundering herd.
  local jitter=$(( RANDOM % (base / 2 + 1) ))
  echo $(( base + jitter ))
}

log() {
  printf '[deploy-with-retry] %s\n' "$*" >&2
}

LOG_DIR="$(mktemp -d -t vercel-deploy-XXXXXX)"
trap 'rm -rf "$LOG_DIR"' EXIT

attempt=1
last_exit=1

while [ "$attempt" -le "$MAX_ATTEMPTS" ]; do
  log "Attempt $attempt/$MAX_ATTEMPTS: $VERCEL_CMD $*"
  log_file="$LOG_DIR/attempt-$attempt.log"

  # Stream output to the user live AND capture it for pattern matching.
  # `PIPESTATUS[0]` gives us the exit code of vercel, not tee.
  set +e
  "$VERCEL_CMD" "$@" 2>&1 | tee "$log_file"
  last_exit="${PIPESTATUS[0]}"
  set -e

  # The vercel CLI sometimes exits 0 even when it prints a fatal
  # "Error:" line (observed with FetchError / EPIPE). Promote those to
  # failures so the retry loop engages.
  if [ "$last_exit" -eq 0 ] && grep -qE '^Error:' "$log_file"; then
    log "Exit was 0 but log contains 'Error:' — treating as failure."
    last_exit=1
  fi

  if [ "$last_exit" -eq 0 ]; then
    log "Success on attempt $attempt."
    exit 0
  fi

  if ! is_retryable "$log_file"; then
    log "Non-retryable failure (exit=$last_exit). Aborting."
    exit "$last_exit"
  fi

  if [ "$attempt" -eq "$MAX_ATTEMPTS" ]; then
    log "All $MAX_ATTEMPTS attempts exhausted. Last exit code: $last_exit."
    exit "$last_exit"
  fi

  delay="$(compute_delay "$attempt")"
  log "Retryable error detected. Backing off ${delay}s before attempt $((attempt + 1))."
  sleep "$delay"
  attempt=$(( attempt + 1 ))
done

exit "$last_exit"
