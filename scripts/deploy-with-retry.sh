#!/usr/bin/env bash
# Retired retry entry point. A network timeout can occur after Vercel accepted
# a deployment, so automatic retries can create duplicate billable builds.
set -euo pipefail

script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
exec bash "$script_dir/../deploy.sh" "$@"
