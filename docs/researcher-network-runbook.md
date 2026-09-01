# WikiBiome researcher network runbook

## Launch gates

1. Apply the latest D1 migration and provision the private `MANUSCRIPTS` R2 binding.
2. Register the exact ORCID callback at `/api/auth/orcid/callback`, beginning with the ORCID sandbox.
3. Verify the Resend sending domain, add secrets, and point Resend webhooks to `/api/webhooks/resend`.
4. Connect an asynchronous R2 event/queue scanner before setting `WIKIBIOME_MANUSCRIPT_UPLOADS_ENABLED=1`. Uploads fail closed unless this flag and `WIKIBIOME_SCAN_WEBHOOK_SECRET` are both configured. The application quarantines uploads, validates the PDF signature, and rejects common active-content markers. The scanner reports to `/api/work-submissions/manuscripts/scan-result`; a clean result must be the only path out of quarantine.
5. Have counsel approve the outreach jurisdiction matrix and every cold-notice template before setting `WIKIBIOME_OUTREACH_ENABLED=1`. Outreach also fails closed unless Resend, sender identity, and unsubscribe signing are configured.
6. Set `WIKIBIOME_MODERATOR_IDS` to the existing ChatGPT contributor IDs that should become research-network moderators when they link ORCID. Direct database role changes remain an audited site-administrator operation.

## Production configuration

- Bindings: D1 as `DB`; private R2 as `MANUSCRIPTS`.
- ORCID: `ORCID_CLIENT_ID`, `ORCID_CLIENT_SECRET`, `ORCID_REDIRECT_URI`, and `ORCID_ENVIRONMENT=production` after sandbox acceptance.
- Email: `RESEND_API_KEY`, `WIKIBIOME_EMAIL_FROM`, `RESEND_WEBHOOK_SECRET`, and `WIKIBIOME_UNSUBSCRIBE_SECRET`.
- Safety gates: `WIKIBIOME_SCAN_WEBHOOK_SECRET`, `WIKIBIOME_MANUSCRIPT_UPLOADS_ENABLED`, and `WIKIBIOME_OUTREACH_ENABLED`.
- Administration: `WIKIBIOME_MODERATOR_IDS`. Never enable `WIKIBIOME_EMAIL_DEBUG` in production.

ORCID's current OpenID discovery document does not advertise PKCE support. WikiBiome therefore uses the confidential authorization-code flow with an expiring, hashed, single-use state record and a server-held client secret. Re-check ORCID discovery before enabling PKCE in a future integration revision.

## Security, privacy, and accessibility review

- Researcher sessions and one-time tokens are stored hashed; production cookies are HTTP-only, Secure, SameSite=Lax, and expiring.
- Browser mutations enforce same-origin requests. Resend and scanner callbacks use independently verified signatures or secrets.
- Private email is held separately from the public profile. Research activity, community digest, and fundraising choices are separate and unchecked by default; suppression disables all three.
- Claims verify identity but do not transfer copyright or editorial control. Author context and new-researcher posts remain moderated, and accepted submissions create change packets instead of changing the public corpus.
- Forms use programmatic labels, status regions, keyboard-native controls, and responsive layouts. Private dashboards and moderation pages are `noindex`; public profiles, discussions, institutions, and the research standard remain indexable.
- Legal release remains account-gated: counsel must approve the jurisdiction matrix, privacy notice, terms, and cold-notice template before outreach is enabled.

## Author outreach pilot

- Select no more than 100 high-confidence corresponding-author contacts from Keystone and heavily reused sources.
- Record address provenance, jurisdictional rule, purpose, and approval in the outreach ledger.
- Send one factual `citation_notice` only. It must identify the cited work and placements, require ORCID at claim time, provide an opt-out, and contain no marketing, donation, coffee, or fundraising request.
- Treat the signed link as navigation, never as authorship proof.
- Stop delivery immediately for suppression, bounce, complaint, or unsubscribe events.

## Editorial boundaries

- A claim is non-exclusive and verifies identity, not ownership or control.
- Author context supplements the independent synthesis and remains pending until reviewed.
- Accepted research creates an upstream change packet; it cannot write into the generated public corpus.
- Institution approval does not approve its members or batches automatically.
- Support status never changes role, moderation, citation, visibility, or Keystone eligibility.

## Expansion thresholds

Do not expand beyond the pilot unless at least 10% of delivered notices lead to verified claims, 25% of claimers make a second substantive contribution, moderation remains below a seven-day SLA, and no systemic impersonation, copyright, or deliverability problem appears.

## Rollback

- Leave `WIKIBIOME_MANUSCRIPT_UPLOADS_ENABLED` and `WIKIBIOME_OUTREACH_ENABLED` unset to disable the two externally sensitive workflows without removing public researcher pages.
- Revoke ORCID or Resend secrets to stop those integrations; existing public evidence pages fail open without the dynamic overlay.
- Roll back the application release and D1 binding together. Do not delete the new D1 tables or the private R2 quarantine bucket during rollback; they preserve claims, consent, suppression, audit, and manuscript evidence needed for incident review.
