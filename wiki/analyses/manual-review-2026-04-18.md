---
title: "Manual Review Items — 2026-04-18"
type: analysis
created: 2026-04-18
updated: 2026-04-18
---

# Manual Review Items — 2026-04-18

## Sources needing evidence_level (223 pages — could not auto-infer)

These source pages lack `evidence_level` and the body text didn't contain clear study-design keywords. Manual review of the PDF is needed to assign the correct level.

Run to find them:
```bash
cd ~/Documents/Claude/Raw && grep -rL '^evidence_level:' wiki/sources/*.md | wc -l
```

## Orphan Pages (14 — no inbound wikilinks)

These pages exist but no other page links to them. They may need wikilinks added from related entities/concepts, or they may be candidates for deletion if truly irrelevant.

- wiki/concepts/colonization-resistance.md
- wiki/concepts/essential-oils.md
- wiki/concepts/hyperparathyroidism.md
- wiki/concepts/immunotherapy.md
- wiki/concepts/outer-membrane.md
- wiki/concepts/parenteral-nutrition.md
- wiki/concepts/premenstrual-syndrome.md
- wiki/concepts/riboswitch.md
- wiki/entities/akkermansia-mucinicola.md
- wiki/entities/chronic-fatigue-syndrome.md
- wiki/entities/coronary-artery-disease.md
- wiki/entities/diabetic-kidney-disease.md
- wiki/entities/psoriasis.md
- wiki/entities/staphylococcus.md
