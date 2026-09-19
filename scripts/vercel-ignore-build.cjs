#!/usr/bin/env node
// WB-COST-KILL-1: this is the retained Vite/content repository. The public
// application is published through Sites (see ops/DEPLOY_TRUTH.md).
// Vercel ignoreCommand uses exit 0 to CANCEL a build. Keep this unconditional:
// neither a heartbeat, branch push, merged PR, nor retry should build the legacy
// app while Sites owns production. Reopening requires a real ORDER and PR.
console.log('[WB-COST-KILL-1] SKIP: legacy Vercel builds locked; one Sites publish per merged release PR');
process.exit(0);
