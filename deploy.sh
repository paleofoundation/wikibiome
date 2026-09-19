#!/usr/bin/env bash
# WB-COST-KILL-1: keep the old entry point so existing callers stop safely.
set -euo pipefail

cat >&2 <<'EOF'
WB-COST-KILL-1: direct deployment is disabled.
Batch changes in one PR, validate locally, then merge once.
Publish the public Sites application exactly once from its owning checkout.
Legacy Vercel builds are locked; do not also deploy this repository.
See DEPLOY.md and ops/DEPLOY_TRUTH.md for project ownership.
Do not retry deployments or publish heartbeat/status-only changes.
EOF
exit 64
