---
title: Eubacterium eligens
type: entity
subtype: microbe
created: 2026-04-17T00:00:00.000Z
updated: 2026-04-17T00:00:00.000Z
last_substantive_update: 2026-04-17T00:00:00.000Z
sources:
  - luo-2023-gut-microbiota-t1d-bidirectional-mendelian-randomization
source_count: 1
tags:
  - Eubacterium
  - Lachnospiraceae
  - butyrate-producer
  - type-1-diabetes
  - protective
  - pectin-degrader
  - SCFA
seo_target: Eubacterium eligens butyrate type 1 diabetes microbiome
wikipedia_differentiation: >-
  FDR-significant Mendelian randomization evidence for causal protection against type 1 diabetes (OR 0.64, P_FDR 0.031)
  — the most statistically robust causal protective gut taxon identified for T1D; pectin-specialist fermentation profile
  distinguishing it from other Lachnospiraceae butyrate producers
gram_stain: positive
oxygen_requirement: obligate anaerobe
metal_dependencies:
  - iron
key_enzymes:
  - butyryl-CoA-dehydrogenase
  - pectinase
pathogenic_potential: commensal
conditions_enriched_in: []
conditions_depleted_in:
  - type-1-diabetes
platform: wikibiome
stub: true
stub_reason: §2f auto-demotion 2026-04-19 — 1 sources, minimum 3
---

# Eubacterium eligens

## Overview

***Eubacterium eligens*** is a Gram-positive, obligate anaerobic bacterium within the [[lachnospiraceae]] family and a significant butyrate producer in the human colon. While less well-known than *Faecalibacterium prausnitzii* or *Roseburia*, *E. eligens* has emerged as one of the most statistically robust causally protective organisms against [[type-1-diabetes]] in Mendelian randomization (MR) studies — a finding that has received surprisingly little attention given its significance.

## Metal Dependencies

As a member of the Firmicutes, *E. eligens* likely depends on iron for iron-sulfur cluster enzymes in its butyrate biosynthesis pathway (butyryl-CoA dehydrogenase). This iron dependency makes it vulnerable to both iron restriction by host nutritional immunity and iron-sulfur cluster damage by toxic metals — a pattern shared across the butyrate-producing Firmicutes guild.

## Key Enzymes and Virulence Factors

*E. eligens* has no virulence factors. Its functional significance derives from:

- **Butyryl-CoA dehydrogenase** — Central enzyme in the butyrate synthesis pathway; produces butyrate from dietary fiber fermentation
- **Pectinase and pectin lyase** — *E. eligens* is a pectin specialist, distinguishing its substrate niche from resistant-starch degraders like [[ruminococcus-bromii]] or xylan degraders like *Roseburia*. This pectin specificity means its abundance responds to fruit and vegetable intake rather than whole grain consumption.

## Ecological Role

In the healthy gut, *E. eligens* occupies the pectin-degradation niche within the broader butyrate-producing community. Its butyrate output contributes to:

- Colonocyte energy metabolism and [[oxygen-state]] maintenance
- Tight junction protein expression and barrier integrity
- Regulatory T cell induction and anti-inflammatory signaling
- Competitive exclusion of pathobionts through SCFA-mediated pH reduction

The pectin-specialist strategy means *E. eligens* abundance is particularly sensitive to fruit and vegetable diversity in the diet — a dietary pattern independently associated with reduced autoimmune risk.

## Conditions Associated

### Type 1 Diabetes — Causal Protection

The *Eubacterium eligens* group shows the most robust causal protective signal in the T1D MR dataset:

| Metric | Value |
|--------|-------|
| OR (95% CI) | **0.64 (0.50-0.81)** |
| P-value | **2.84 x 10^-4** |
| FDR-adjusted P | **0.031** |
| Heterogeneity | None detected |
| Pleiotropy | None detected |

This is FDR-significant with no confounding detected — the gold standard for MR evidence [[luo-2023-gut-microbiota-t1d-bidirectional-mendelian-randomization]]. Whether the protective mechanism operates through butyrate production, immune modulation, or pectin-derived metabolites remains unknown and represents a major open question.

### Chronic Kidney Disease — Context-Dependent

Nominally significant as a risk-increasing taxon for CKD (OR 1.19), illustrating that the same organism can be protective in one disease context and detrimental in another — likely reflecting the different ecological and immunological environments of autoimmune versus metabolic-renal disease.

## Interkingdom Relationships

No documented interkingdom interactions. As an obligate anaerobe, *E. eligens* is likely excluded from oxygenated biofilm environments where fungal-bacterial partnerships predominate.

## Cross-References

- [[type-1-diabetes]] — causal MR protection (FDR-significant)
- [[lachnospiraceae]] — parent family; multiple protective genera in MR data
- [[butyrate]] — primary metabolic product
- [[faecalibacterium-prausnitzii]] — complementary butyrate producer with different substrate niche
- [[oxygen-state]] — butyrate maintains colonocyte oxygen consumption
