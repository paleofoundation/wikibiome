---
title: "Semantic Integrity Pass Log — 2026-04-18"
type: analysis
platform: cureva
created: 2026-04-18
updated: 2026-04-18
---

# Semantic Integrity Pass Log — 2026-04-18

## Audit 1 — Cureva/WikiBiome Boundary

- **Scanned:** ~409 pages (entities, concepts, analyses)
- **Violations detected:** 43 across 18 pages
- **Fixed:** 9 violations across 8 pages (mechanical rewrites to factual framing)
- **Verified factual (no fix needed):** 34 violations across 10 pages (study-result dosage reporting)
- **Remaining:** 0
- **Report:** `wiki/analyses/boundary-violations-2026-04-18.md`

## Audit 2 — Missing Intervention and STOP Pages

### Interventions
- **Scanned:** 1,714 source pages for named interventions
- **Missing intervention pages detected:** 15 (≥2 sources each)
- **Intervention stubs created:** 10
  1. omega-3-fatty-acids (33 sources discuss)
  2. chelation-therapy (45 sources)
  3. glutathione-supplementation (32 sources)
  4. metformin-intervention (25 sources)
  5. statin-therapy (18 sources)
  6. berberine (16 sources)
  7. gluten-free-diet (7 sources)
  8. melatonin (7 sources)
  9. resveratrol (5 sources)
  10. curcumin (4 sources)
- **Deferred:** 5 lower-priority interventions (vitamin-e, vitamin-c, plant-based-diet, butyrate-supplementation — <5 sources or overlaps with existing pages)

### STOPs
- **Existing wiki/stops/ files:** 8
- **STOP pages in dist-v28 (from build JSON):** 39
- **Missing wiki/stops/ files regenerated from content.generated.json:** 31
- **Total wiki/stops/ now:** 39

## Audit 3 — Supersession Compliance

- **Entity/concept pages scanned:** ~389 (all with ≥2 sources)
- **Paragraphs with contradiction language:** 30
- **Genuine supersessions applied:** 2
  - Copper in RA: arshad-2023 (case-control) supersedes yang-2016 (cross-sectional)
  - Copper in ASD: lin-2024 (meta-analysis, null) supersedes zhou-2025 (cross-sectional)
- **Source pages annotated:** 4 (both sides of each conflict)
- **Biological complexity / already annotated:** 28 (no action needed)
- **Report:** `wiki/analyses/supersessions-2026-04-18.md`

## Audit 4 — Keystone Re-Validation

- **Total keystone: true sources:** 68
- **Already had ≥3 criteria listed:** 5
- **Auto-evaluated (no criteria field):** 63
  - **Retained (≥3 criteria verified):** 32 (criteria field added)
  - **Demoted (<3 criteria):** 31 (set keystone: false, demotion note added)
- **Total keystones retained:** 37
- **Total keystones demoted:** 31

Top keystones by criteria count:
- scholefield-2024 (5/5): Cross-Domain, Signature Dependency, Cross-Condition, Mechanistic Linchpin, Paradigm Reframe
- ghosh-2023 (4/5), giambo-2021 (4/5), jaishankar-2014 (4/5), patil-2021 (4/5), maier-2019 (4/5), pendergrass-2026-parkinsons (4/5)

Demoted sources retain all content; only `keystone: true` → `keystone: false` with a dated audit note in the body.

