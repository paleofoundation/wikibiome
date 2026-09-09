# WB-AUTHOR-1 review packet

Review PR: https://github.com/paleofoundation/wikibiome/pull/6

## Production and candidate

- Live Sites version 69: `37d2f8464785b62d6723da19df35213025573b1a`.
- Author candidate: `3a13c0243d85f0bbff3e0556283533544fcff7b5`, based directly on the live version.
- Candidate checkout: `/Users/karenpendergrass/Documents/ChatGPT/Wikibiome/wb-deploy-4-sites`, branch `codex/wb-author-1-sites`.
- Sites review branch: `codex/wb-author-1`; source main remains the live tip-jar-only commit.
- GitHub is the legacy Vite/content repository. This PR contains exact mail-format source patches for the separate Sites application so Elon can review the real implementation before release.
- `patches/WB-DEPLOY-4-sites.patch` records the already-deployed hotfix. `patches/WB-AUTHOR-1-sites.patch` is the unmerged, undeployed candidate.

## Ranked acceptance table

| Rank | Capability | Change and validation | Release state |
| --- | --- | --- | --- |
| 0 | Tip-jar kill | Live support/home 200; no payment/coffee CTA; support becomes explore/collaborate; old thank-you route redirects | Live version 69; `evidence/WB-DEPLOY-4-live.json` |
| 1 | Profile editor | `/researcher/profile` offers public name, biography, affiliations, expertise; ORCID session owns every update; email verification is separate; login preserves edits | Local persistence, public-rendering, privacy, cross-origin, ownership and role checks pass |
| 2 | Claim UX | Visible steps, status, separate context review, and explicit no-guaranteed-turnaround statement | Rendered checks pass; no invented SLA or instant publication |
| 3 | Discussion | Captures form before async call; handles transport/refresh failures without recommending duplicate submission; explains premoderation | Local trusted post/reply persisted and rendered on source; new-researcher post persisted pending and stayed nonpublic |
| 4 | Roundtable | Explicit interest registry, no reserved place/date or scheduled registration; navigation matches | Rendered boundary check passes |
| 5 | Institutions | Explicit organization pilot, no institutional/license/API entitlement promise | Rendered boundary check passes |
| 6 | Pricing | `/pricing` explains free participation and unavailable paid institutional/API plans; footer points there | Rendered 200; no invented prices, launch date, or paid citation |

## Verification

Production build and typecheck passed. Targeted rendered suite: 3/3. Researcher network contracts: 18/18. Changed author files lint: zero errors/warnings. Seven local authenticated-session workflow checks passed; see `evidence/WB-AUTHOR-1-local-workflow.json`.

The integration script `scripts/verify-author-workflow.mjs` only accepts localhost HTTP and a database under that checkout's `.wrangler`. It uses clearly labeled fixture accounts, applies existing migrations only to an empty local DB, and deletes its records afterward. It does not exercise the external ORCID OAuth exchange, send email, alter production records, change trust rules, or enable outreach.

## Review and apply

Inspect the author patch or compare the candidate checkout against `37d2f84`. On a clean checkout of the live Sites source, `git am /path/to/WB-AUTHOR-1-sites.patch` applies the single author commit. Do not apply it to the Vite app. For the media integration branch, include the existing tip-jar merge, apply the author commit only after PASS, then rebuild and rerun relevant checks on the combined candidate; the old `b2d3810` archive is superseded.

Before release/outreach approval, Elon must review the copy and implementation. A real ORCID user still needs to exercise sign-in, save/reload public profile, claim status, and source posting on staging/production. New users remain premoderated, and email verification remains required for participation. A local fixture success is not production sign-off. No author outreach may promise capabilities beyond the accepted live state.

No donation CRM, pay-to-cite, treatment-claim additions, cureva.app links, new Cureva product UI, prices, scheduled events, institutional license, schema migration, DNS, email-provider, or outreach-flag change is included.
