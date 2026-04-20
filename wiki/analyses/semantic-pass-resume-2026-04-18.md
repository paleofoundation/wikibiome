---
title: "Semantic Pass Resume — 2026-04-18"
type: analysis
platform: cureva
created: 2026-04-18
updated: 2026-04-18
---

# Semantic Pass Resume — 2026-04-18

## Audits Completed: All 4

| Audit | Detected | Fixed | Deferred |
|-------|----------|-------|----------|
| 1. Cureva/WikiBiome Boundary | 43 violations | 9 rewrites | 0 (34 verified factual) |
| 2. Missing Interventions | 15 missing | 10 stubs created | 5 lower-priority |
| 2. Missing STOPs | 31 missing wiki files | 31 regenerated from JSON | 0 |
| 3. Supersession Compliance | 30 contradiction candidates | 2 supersessions applied | 28 (biological complexity) |
| 4. Keystone Re-Validation | 68 keystones | 37 retained, 31 demoted | 0 |

## Total Changes

- **Boundary rewrites:** 9 entity/concept pages
- **New intervention stubs:** 10
- **Regenerated STOP files:** 31
- **Supersession annotations:** 2 entity pages + 4 source pages
- **Keystone criteria added:** 32 source pages
- **Keystone demotions:** 31 source pages
- **Reports written:** 3 (boundary-violations, supersessions, this resume)

## Remaining Work

1. **5 deferred intervention stubs** (vitamin-e, vitamin-c, plant-based-diet, butyrate-supplementation, synbiotics as intervention — concept page exists but intervention page doesn't)
2. **10 intervention stubs need triangle evidence** populated from source literature
3. **31 demoted keystones** — Karen may want to manually review some for reinstatement if they meet criteria not detectable by keyword scan (especially Criterion 5: Paradigm Reframe)
4. **223 source pages** still need manual `evidence_level` assignment (from overnight pass)
5. **14 orphan pages** need review (from overnight pass)

## Resume Command

```
# Continue with: "Populate triangle evidence for the 10 new intervention stubs. For each, read the top 3 sources discussing the intervention, extract I→f (intervention affects signature feature), I→D (clinical evidence for condition), and f→D (mechanistic link) edges with evidence grades and source citations."
```
