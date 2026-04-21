---
title: "Berberine"
type: intervention
created: 2026-04-18
updated: 2026-04-21
last_substantive_update: 2026-04-21
sources: [han-2022-berberine-methimazole-graves-microbiome, zhu-2022-berberine-uc-cancer-therapy]
tags: [supplement, alkaloid, anti-inflammatory, microbiome-modulator, prebiotic, isoquinoline, traditional-chinese-medicine]
intervention_class: supplement
cureva_status: in-progress

triangles:
  - condition: "[[graves-disease]]"
    I_to_f: "Berberine (2.7g/day) significantly altered gut microbiota structure (Bray-Curtis P=0.013 at 6 months), increasing Lactococcus lactis and Enterococcus hirae while decreasing Enterobacter hormaechei. Upregulated enterobactin biosynthesis for iron acquisition."
    I_to_f_evidence: "moderate"
    I_to_f_sources: [han-2022-berberine-methimazole-graves-microbiome]
    I_to_D: "Berberine + methimazole restored TSH to healthy threshold (4.2 IU/L) and shifted TRAb toward normal; methimazole alone only restored FT3."
    I_to_D_evidence: "quasi-experimental"
    I_to_D_sources: [han-2022-berberine-methimazole-graves-microbiome]
    f_to_D: "Faecalibacterium prausnitzii and Lactococcus lactis negatively correlated with FT3, FT4, TRAb but positively correlated with TSH; enterobactin-mediated iron uptake supports Fe-dependent thyroid peroxidase activity."
    f_to_D_sources: [han-2022-berberine-methimazole-graves-microbiome]
    status: promising

targets:
  taxa: [fusobacterium-nucleatum, helicobacter-pylori, lactococcus, enterococcus, faecalibacterium-prausnitzii, enterobacter]
  enzymes: []
  metals: [iron]
  ecological: [biofilm-disruption, SCFA-enhancement, siderophore-upregulation]
karen_brain_primitives: [4, 5, 8]
---

# Berberine

## Overview

**Berberine** is an isoquinoline alkaloid from traditional Chinese medicine (Coptis chinensis, Berberis species) that acts as a **prebiotic microbiome modulator** rather than a direct antimicrobial at gut-relevant concentrations. It is discussed across 16+ sources in the WikiBiome vault spanning Graves' disease, ulcerative colitis, and colorectal cancer.

## Triangle Evidence

### Graves' Disease — Promising

The strongest triangle comes from a 6-month controlled clinical trial (n=18) comparing methimazole alone vs. methimazole + berberine (2.7g/day) [[han-2022-berberine-methimazole-graves-microbiome]]:

**I → f (Intervention to feature):** Berberine significantly restructured the gut microbiota (Bray-Curtis P=0.013), increasing beneficial [[lactococcus]] (*L. lactis*) and [[enterococcus]] (*E. hirae*) while decreasing pathogenic *Enterobacter hormaechei*. Critically, berberine upregulated **enterobactin biosynthesis** — a siderophore pathway essential for iron acquisition — and vitamin K2 biosynthesis pathways [[han-2022-berberine-methimazole-graves-microbiome]].

**I → D (Intervention to disease):** The combination group restored TSH to the 4.2 IU/L healthy threshold and shifted TRAb toward normal (1.75 IU/mL); methimazole alone only restored FT3. The differences in TSH trajectory were statistically significant [[han-2022-berberine-methimazole-graves-microbiome]].

**f → D (Feature to disease):** [[faecalibacterium-prausnitzii]] and *L. lactis* were negatively correlated with FT3, FT4, and TRAb but positively correlated with TSH — connecting specific microbial shifts to thyroid function recovery. The enterobactin-iron-thyroid link is mechanistically coherent: iron is required for thyroid peroxidase (TPO) activity, and improved microbial iron acquisition may support host iron availability for thyroid hormone synthesis [[han-2022-berberine-methimazole-graves-microbiome]].

**Limitations:** Small sample size (n=8 vs. n=10), non-randomized allocation, high berberine dose (2.7g/day) with unreported GI side effects, and the enterobactin-iron-thyroid causal chain is plausible but not directly demonstrated.

## Mechanism

Berberine's primary action is **prebiotic ecosystem reshaping**, not direct pathogen killing:
- Shifts microbiota composition toward SCFA producers and beneficial commensals
- Upregulates siderophore (enterobactin) biosynthesis — Karen's Brain Primitive 8 ([[siderophore-competition]])
- Modulates TCA cycle and amino acid metabolism pathways
- The ecological engineering is two-sided (Primitive 5): suppresses pathobionts while promoting beneficial taxa

## Cross-References

- [[graves-disease]] — primary condition with triangle evidence
- [[faecalibacterium-prausnitzii]] — key taxon correlated with thyroid recovery
- [[lactococcus]] — increased by berberine; correlated with TSH normalization
- [[siderophores]] — enterobactin upregulation as mechanism
- [[iron]] — enterobactin-iron-thyroid peroxidase connection
- [[polyphenols]] — berberine shares prebiotic mechanisms with other plant alkaloids
