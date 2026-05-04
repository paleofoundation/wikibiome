---
title: "Author Outreach Campaign — Operational Plan"
type: analysis
platform: cureva
created: 2026-04-15
updated: 2026-04-15
tags: [outreach, keystone, fundraising, authors, campaign, operations]
---

# Author Outreach Campaign — Operational Plan

## 1. Strategic Premise

Every paper in WikiBiome represents a relationship we have not yet opened. The ingestion step — reading the source carefully, summarizing it faithfully, cross-referencing it into the knowledge graph, and placing it in context with related work — is already a meaningful act of service to the author. Most researchers publish into a void. WikiBiome has made their work more findable, more interpretable, and more connected.

Reciprocity is therefore not a tactic we must manufacture. It is a condition we have already created. The campaign's job is to make that existing reciprocity visible, then extend it.

Two outcomes matter:

Keystone pool expansion. The connective integrity of WikiBiome depends on keystone studies. Today the pool is small. Growing it is the single highest-leverage activity for the knowledge graph and for the credibility of the platform among researchers.

Author engagement at scale. The ~1,515 ingested source authors — plus cited-but-not-yet-ingested authors in reference lists — represent WikiBiome's natural first community. The stated goal is to eventually email every author whose paper has been ingested and/or cited on WikiBiome. Inviting them to review, correct, and (optionally) support the platform produces three compounding effects: improved accuracy, a foundation of advocates, and a sustainable funding base that is independent of industry. This is also the mechanism by which the program funds itself — see §8 on financial requirements.

These two tracks run on different tempos and different rules. They must not be collapsed into a single campaign.

---

## 2. Audience Tiers

| Tier | Who | Track | First-touch ask | Donation ask |
|------|-----|-------|-----------------|--------------|
| 0 — Keystone (verified) | Authors whose papers already meet ≥3 of 5 keystone criteria | High-touch | Notification + review invitation | Never in first email; optional later, always soft |
| 1 — Keystone candidates | Authors whose papers are plausibly keystone but not yet verified | High-touch | Review invitation framed as expert consultation | No |
| 2 — Multi-paper authors | 3+ papers ingested across conditions | Medium-touch | Recognition of full body of work, review invitation | Follow-up only, if engaged |
| 3 — General ingested authors | Single paper ingested | Scaled | First-touch template | Follow-up only, if engaged |
| 4 — Cold prospects | Authors whose work we want but have not ingested | Future | Submission invitation | Never |

Tiers are not static. A Tier 3 author who responds substantively may be promoted to Tier 2 or, if their work fits, become a Tier 1 keystone candidate.

---

## 3. The Reciprocity Sequence

The emotional shape of the campaign — what a researcher experiences from first contact through donation — is the campaign. Content, timing, and tone all serve this shape.

Gift. The first touch is a gift made tangible. Their paper was read, summarized, linked. The email includes direct links to the source summary page and to the entity or signature pages their work informs. Before any ask, the researcher sees that something of value has already been built around their work.

Agency. The first touch invites review and correction. This is not a formality. It flatters expertise, gives the researcher editorial influence over their own representation, and opens a two-way channel. It is the single highest-converting element of the sequence.

Extension. Follow-up (only to engaged authors) introduces two pathways: submit related work, or support the platform. Both framed as extensions of an existing relationship, not as cold asks.

Recognition. Donors and engaged authors receive a small reciprocal gesture — a supporting contributor listing, early access to new content, or similar. This closes a third loop and seeds advocacy.

The sequence never compresses. A donation ask in the first email to this audience reads as transactional and collapses the entire reciprocity structure.

---

## 4. Donation Framing

Based on audience analysis, the recommended suggested contribution is $100, not $50.

Research-adjacent professionals (tenured faculty, postdocs, research scientists, senior industry scientists) sit in a demographic where $50 reads as a token. More importantly, the suggested amount anchors the *perceived value of the work*: $50 implies the synthesis is worth roughly that, while $100 signals the infrastructure is substantive. A/B data from comparable educated-donor campaigns (alumni giving, public radio major-donor tiers, museum memberships) consistently places the sweet spot at $75–$150 for this audience.

Recommended phrasing, carried forward from prior conversation:

> Suggested contribution: $100 — gifts of any size welcome.

This phrasing anchors, preserves autonomy, and explicitly lowers the floor. Do not use "requested" — it shifts the frame toward obligation and underperforms in cold-to-warm contexts.

For keystone authors, the donation ask is decoupled from first contact entirely (see §6).

---

## 5. Growing the Keystone Pool — Identification Workflow

The bottleneck today is not outreach; it is *identification*. Keystone candidates must be surfaced before they can be verified and contacted.

### 5a. Candidate surfacing queries

Run these against the existing source corpus on a recurring basis. Each query targets one or more of the five keystone criteria.

1. Cross-domain bridges. Sources whose `metals_discussed` and `taxa_discussed` fields are both populated with ≥2 entries each, AND whose `karen_brain_primitives` span ≥3 primitives. These sources structurally bridge fields.
2. Signature layer dependencies. For each signature page, grep the `sources:` list and identify any source whose removal would drop a confidence tier from `high` to `moderate` or below. Those sources are load-bearing.
3. Cross-condition pattern enablers. Sources that appear in the `sources:` list of ≥3 signature pages. These are connective across conditions by definition.
4. Mechanistic linchpins. Sources whose body text contains explanatory mechanism language (grep for "because", "mechanism", "explains", "via", combined with metal + enzyme + taxon co-mention). Manual review required.
5. Paradigm reframes. Hardest to automate. Surface through lint output: sources flagged under the Supersession Protocol that *won* against higher-evidence-level predecessors, or sources that introduced a new concept page rather than extending an existing one.

### 5b. Verification

Each candidate is evaluated against the five criteria in §2d of the schema. At least three must be verifiably met. This review is manual and non-delegable. Rushing it dilutes the designation and damages credibility — the very risk the criteria exist to prevent.

### 5c. Cadence

Status as of 2026-04-15: ~65 keystone papers already identified. This exceeds the original 60/year conservative target in a single identification pass, which reshapes the plan: verification (not identification) is now the near-term bottleneck, and outreach can begin on a rolling basis as each keystone is verified rather than waiting for a monthly batch.

Revised cadence:
- Verify 65 existing candidates over Weeks 1–8 (~8/week), prioritizing by signature-layer dependency and cross-condition enablement.
- Sustain 5–10 new keystone surfacings/month thereafter as the corpus grows.
- Target: 100 verified keystones by Year 1 end, with outreach sent to each within 14 days of verification.

Quality bar remains unchanged. A candidate that fails the ≥3-of-5 test does not become a keystone; it becomes a "notable" or "influential" source. Better to drop to 95 verified than to dilute to 100.

---

## 6. Email Sequences by Tier

All templates already exist or are partially drafted in the vault. This plan specifies how they are sequenced, not their full text.

### 6a. Keystone (Tier 0) — high-touch, no initial donation ask

Email 1 (Day 0) — Keystone Notification.
Uses [[landmark-outreach-email]]. Personalized with criteria met. Includes links to the source page and the signature/entity pages their work informs. Invites review and correction. No donation mention.

Email 2 (Day 14) — Follow-up if no response.
One soft reminder. No new ask.

Email 3 (Day 45) — Engagement-only.
Only sent if the author responded to Email 1 or 2. Thanks for engagement. Mentions the platform's growth. Introduces the supporter pathway gently: "If you find value in what we're building and would like to support its continuation, suggested contribution is $100 — gifts of any size welcome." One sentence. No pressure.

Email 4 (Day 180) — Annual update.
Year-end email to all engaged keystone authors. Summary of platform growth, their paper's continued role, renewed invitation to contribute papers or support. This is where renewable donor behavior is cultivated.

### 6b. Multi-paper authors (Tier 2) — medium-touch

Email 1 (Day 0) — Recognition of body of work.
Modified first-touch: "Your body of work informs [N] source pages across [N] conditions on WikiBiome." Lists the pages. Invites review.

Email 2 (Day 21) — Submission + donation pathway.
Uses [[outreach-email-followup-donation]] with $100 suggested (update from current $50).

### 6c. General authors (Tier 3) — scaled

Email 1 (Day 0) — First touch.
Uses [[outreach-email-first-touch]]. Single paper, one entity page, review invitation.

Email 2 (Day 21) — Follow-up, engaged only.
Uses [[outreach-email-followup-donation]] with $100 suggested. Only sent if the author engaged with Email 1 (reply, source page visit, correction submission).

### 6d. Required template updates

Before launch, update in the vault:
- [[outreach-email-followup-donation]] — change suggested amount from $50 to $100.
- [[outreach-email-first-touch]] — add an explicit link slot for the source page and at least one downstream entity/signature page.
- [[landmark-outreach-email]] — add a line pointing to the signature or entity page the keystone study underpins, not just the source summary page. Reciprocity is strongest when the researcher sees the *structural role* their work plays.

---

## 7. Tracking Schema

Per-source frontmatter (schema already supports most of this):

```yaml
outreach_tier: 0 | 1 | 2 | 3
outreach_email_1_sent: YYYY-MM-DD
outreach_email_1_status: sent | opened | responded | corrections-applied | declined | bounced
outreach_email_2_sent: YYYY-MM-DD
outreach_email_2_status: sent | opened | responded | corrections-applied | declined
outreach_email_3_sent: YYYY-MM-DD
outreach_email_3_status: sent | opened | responded | corrections-applied | declined
donation_received: YYYY-MM-DD        # if applicable
donation_amount: USD                 # if applicable
```

`keystone_outreach_date` and `keystone_outreach_status` already defined in schema §4; extend to cover the full sequence.

A rolling campaign dashboard page at `wiki/analyses/outreach-dashboard.md` should aggregate:
- Emails sent by tier, by week
- Engagement rate by tier
- Corrections received and applied
- Keystone candidates surfaced, verified, contacted
- Donations received (count, total, average, distribution)

Numbers derived from grep, never from memory.

---

## 8. Success Metrics — Year 1

This program has to pay for itself. WikiBiome is already expensive to operate, and the ambition is to fund at minimum one dedicated platform operator (Divine) and ideally a second hire, without dependence on industry sponsorship. That constraint reshapes the targets: relationship quality remains the primary driver, but revenue is a real and non-negotiable output. A campaign that produces excellent relationships but insufficient revenue fails the mission.

### 8a. Revenue requirement (reverse-engineered)

| Line item | Annual | Notes |
|-----------|--------|-------|
| Platform operator (Divine or equivalent) | $65,000–$90,000 | Full-time, research-literate, relationship-capable |
| Second hire (editorial / outreach / dev) | $50,000–$80,000 | Phased; likely Month 6+ once funding stabilizes |
| Infrastructure (Vercel, Stripe fees, Supabase, tooling) | $6,000–$12,000 | Scales with traffic |
| Author outreach infrastructure (email platform, tracking) | $2,000–$4,000 | Modest |
| Contingency + overhead | $10,000 | — |
| Total minimum viable Year 1 | ~$130,000 | Single hire scenario |
| Total two-hire Year 1 | ~$200,000 | Two-hire scenario |

Outreach-driven donations will not, on their own, hit this number in Year 1. The campaign is one pillar of a portfolio that must also include HMTc certification revenue, Cureva practitioner subscriptions (when live), and targeted major-donor / institutional outreach outside this plan. What this campaign must do is (a) generate meaningful recurring revenue of its own and (b) build the audience, credibility, and advocacy base that the other pillars depend on.

### 8b. Campaign-specific revenue targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| Keystone verifications | 65 already identified; target 100 by Year 1 end | Existing pool exceeds original 60/year goal — accelerate |
| Keystone author outreach sent | 100 | 1:1 with verifications |
| Keystone author engagement rate | 40%+ | This audience cares about representation |
| Keystone corrections applied | 15–25 | Each one is a citation integrity win and a relationship deepener |
| Tier 2/3 first-touch sent | 1,500 (full ingested corpus) | Eventually all ingested/cited authors |
| Tier 2/3 engagement rate | 8–12% | Standard for warm academic outreach |
| One-time donations received | 120–180 | Against ~1,600 total emails, with follow-up only to engaged |
| Average one-time gift | $85–$140 | $100 suggested anchors upward from prior $50 |
| One-time donation revenue | $12,000–$22,000 | Primary direct output |
| Monthly recurring donors (MRD) signups | 30–60 | Monthly toggle on support page — this is the real multiplier |
| Average MRD contribution | $15–$30/month | Academic-tier recurring giving |
| MRD annualized revenue (Year 1, partial ramp) | $5,000–$12,000 | Ramp-weighted; full-year value of Y1 cohort ~$10k–$20k |
| Major-donor conversions (from engaged keystone authors) | 3–8 | Gifts of $1,000+; typically from retired faculty or funded labs |
| Major-donor revenue | $5,000–$25,000 | Widest variance; highest asymmetry |
| Total Year 1 campaign revenue (range) | $22,000–$59,000 | Direct outreach-attributable only |
| Total Year 1 campaign revenue (target) | $35,000 | Midpoint, realistic with disciplined execution |
| New papers submitted via outreach | 60–120 | Each a potential future keystone; also extends corpus breadth |

### 8c. Revenue sufficiency — honest read

$35,000 in Year 1 from this campaign funds roughly one-quarter to one-third of a single operator's salary. It does not, by itself, pay for Divine. That is important to state plainly.

What this campaign *does* do financially:
- Establishes recurring revenue (MRD cohort) that compounds in Year 2 to $20,000–$40,000 annualized with continued growth.
- Identifies 3–8 major donors whose gifts and referrals become a Year 2 / Year 3 lever.
- Produces a corrected, author-validated knowledge base that makes Cureva practitioner subscriptions and HMTc certification materially easier to sell.
- Generates the credibility signal (keystone authors publicly supporting WikiBiome) that converts institutional funders who will not give to a platform that lacks researcher endorsement.

The campaign is therefore best evaluated not as a standalone revenue line but as the audience-building and credibility engine that makes the $130K–$200K target achievable across the full portfolio. If it hits $35,000 directly *and* generates the keystone endorsements that unlock a $50K institutional grant and a $30K major-donor gift, it has fulfilled its financial mandate.

### 8d. Non-financial metrics (still primary for daily operations)

Revenue is the Year 1 *outcome* metric. The *leading* metrics that day-to-day work optimizes for remain relational:
- Corrections applied (integrity signal)
- Papers submitted by outreach recipients (corpus growth + advocacy signal)
- Keystone authors who publicly cite or link WikiBiome (credibility signal)
- Response depth (one-line acknowledgment vs. substantive engagement)

Chasing donations directly degrades these. The reciprocity sequence in §3 is the mechanism by which relational effort becomes revenue — shortcutting it destroys both.

---

## 9. Guardrails

These rules exist to protect the integrity of the platform and the trust of the community. Violating them damages WikiBiome's core asset, which is credibility.

Editorial independence. Submissions and donations are evaluated separately. Every outreach email must state this explicitly. Never imply that donation influences citation, designation, or visibility.

No industry capture. Outreach language should continue to note that WikiBiome receives no supplement, pharmaceutical, or food industry sponsorship. This is a differentiator with researchers specifically.

No aggressive sequencing. Maximum three emails in any 90-day window. Authors who do not engage are not re-contacted for at least 6 months.

Corrections always honored. If an author requests corrections, apply within 48 hours and confirm. If an author requests removal, comply immediately. Non-negotiable.

No fabricated personalization. Every `[ENTITY]`, `[CONDITION]`, `[N pages]` slot must be filled from the actual vault state. A template with an unfilled or hallucinated slot must never be sent.

Keystone designation is structural, not honorific. Never label a study keystone to flatter an author into engagement. The designation is a load-bearing claim about the knowledge graph; inflating it collapses its meaning.

---

## 10. Phased Rollout

Phase 1 — Foundation (Weeks 1–2).
Update three existing templates per §6d. Build the outreach-dashboard page. Confirm tracking frontmatter on a sample of 20 source pages.

Phase 2 — Keystone pilot (Weeks 3–6).
Surface 20 keystone candidates via §5a queries. Verify 10. Send Tier 0 Email 1 to the 10 verified. Measure response rate, correction rate, and qualitative feedback. Adjust template based on responses.

Phase 3 — General pilot (Weeks 7–10).
Send Tier 3 Email 1 to 100 authors. Measure engagement rate. Send Email 2 to engaged subset. Compare donation conversion at $100 vs $75 if enough volume for a split test.

Phase 4 — Scale (Week 11 onward).
Expand to full sequenced rollout. Monthly keystone verification cadence. Weekly batches of 50–100 Tier 3 first-touch emails. Quarterly review of metrics against §8 targets.

---

## 11. Open Questions

- Should donation recognition create a public supporters page, or stay private? Public signals legitimacy but may deter some academic donors.
- Is there value in a named program for the top reciprocal gesture (e.g., "WikiBiome Founding Contributor" for first 100 donors)?
- Should the Tier 0 keystone Email 3 donation line be A/B tested against a no-ask variant? Measuring cost of the ask on keystone relationships.
- What is the right cadence for re-verifying keystone status as new sources are ingested? Criteria 2 and 3 are sensitive to corpus growth.
- Should non-English-speaking authors receive translated outreach, and at what corpus volume does translation become worth the infrastructure cost?

---

## 12. Related Pages

- [[landmark-outreach-email]] — Keystone notification template (Tier 0 Email 1)
- [[outreach-email-first-touch]] — General first-touch template (Tier 3 Email 1)
- [[outreach-email-followup-donation]] — Donation follow-up template (Tier 2/3 Email 2)
- Schema §2d — Keystone Study Criteria
- Schema §1 — Strategic Context / Flywheel
