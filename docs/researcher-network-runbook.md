# WikiBiome researcher network runbook

## Launch gates

1. Apply the latest D1 migration and provision the private `MANUSCRIPTS` R2 binding.
2. Register the exact ORCID callback at `/api/auth/orcid/callback`, beginning with the ORCID sandbox.
3. Verify the Resend sending domain, add secrets, and point Resend webhooks to `/api/webhooks/resend`.
4. Connect an asynchronous R2 event/queue scanner before enabling manuscript uploads in production. The application already quarantines uploads, validates the PDF signature, and rejects common active-content markers. The scanner reports to `/api/work-submissions/manuscripts/scan-result` with `WIKIBIOME_SCAN_WEBHOOK_SECRET`; a clean result must be the only path out of quarantine.
5. Have counsel approve the outreach jurisdiction matrix and every cold-notice template before creating pilot contacts.

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
