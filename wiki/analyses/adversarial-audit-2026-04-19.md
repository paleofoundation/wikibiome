---
title: "Adversarial Audit — 2026-04-19"
type: analysis
platform: cureva
created: 2026-04-19
---

# Adversarial Audit — 2026-04-19

5 publishable pages sampled (none had prior `audit_passed`). All audited as hostile reviewer per Rule 12.

## Results Summary

| Page | Type | Citations/Paragraphs | Ratio | Verdict | Key Issues |
|------|------|---------------------|-------|---------|------------|
| depression.md | entity | 14/18 | 0.78 | REMEDIATE | Copper/Iron/Comorbidity sections unsourced; broken wikilink fixed |
| anxiety.md | entity | 1/9 | 0.11 | DEMOTE | Catastrophically below citation threshold; demoted to stub |
| dysbiosis.md | concept | 11/30 | 0.37 | REMEDIATE | Barely passes; 13+ unsourced claims; borderline boundary violation |
| gut-brain-axis.md | concept | 13/30 | 0.43 | REMEDIATE | ~50% body unsourced; "Therapeutic Implications" was Rule 8 violation — rewritten to "Research Directions" |
| metal-disease-matrix.md | analysis | 93/109 | 0.85 | REMEDIATE | Section 7 "Therapeutic Implications" was critical Rule 8 violation — 90 lines of clinical guidance removed, replaced with Cureva redirect |

## Actions Taken

### Immediate fixes applied this cycle:
1. **anxiety.md** — demoted to `stub: true` (citation ratio 0.11)
2. **depression.md** — fixed broken wikilink `ogundare-2024-metals-behavioral-depression-women` → `ogundare-2024-metals-behavioral-factors-depression-women` (3 occurrences)
3. **gut-brain-axis.md** — rewrote "Therapeutic Implications" → "Research Directions" to remove clinical recommendation language (Rule 8)
4. **metal-disease-matrix.md** — replaced Section 7 (90 lines of clinical intervention guidance) with Cureva redirect note (Rule 8)

### Deferred to next cycle:
- **depression.md** — add inline citations to Copper, Iron, and Comorbidity sections from existing vault sources
- **dysbiosis.md** — add inline citations to Diet, Stress, Metabolite Shifts, Systemic Inflammation sections; rename "Restoration Strategies" to factual framing
- **gut-brain-axis.md** — add inline citations to tryptophan, bile acid, SCFA, and ENS sections
- **depression.md** — create or remove phantom source pages (capuco-2020, zhu-2025) — capuco-2020 exists, zhu-2025 needs verification
- **metal-disease-matrix.md** — add inline citations for schizophrenia, T1D, ferroptosis claims

### No pages passed clean audit — `audit_passed` not set on any page this cycle.

## Observations

- None of the 5 sampled pages had prior `audit_passed` dates — this is the first adversarial audit cycle.
- The dominant failure pattern is **sections of well-structured content with zero inline citations**. Pages pass the aggregate citation threshold but fail claim-level scrutiny in specific sections.
- Rule 8 boundary violations are concentrated in "Therapeutic Implications" and "Clinical Implications" sections. A vault-wide scan for these section headers on wikibiome pages is recommended.
- The anxiety page demonstrates that `source_count` meeting threshold (5 sources, minimum 5) is not sufficient — claim-level citation density is the binding constraint.
