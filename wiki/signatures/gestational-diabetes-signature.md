---
title: "Gestational Diabetes — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - fungal-dysbiosis-2023-gdm-pregnancy-microbiome
  - fungal-dysbiosis-2026-pregnancy-gdm-reference
  - susarla-2024-microbiome-derived-metabolites-gestational-diabetes-risk
  - vavreckova-2022-gut-bacterial-fungal-microbiota-pregnancy-gdm
  - wang-2026-intestinal-fungal-dysbiosis-gdm-adverse-pregnancy-outcomes
  - wei-2022-16s-rrna-gut-microbiota-gestational-diabetes
source_count: 6
tags: [gestational-diabetes, pregnancy, metabolic, signature]

metallomic_signature:
  elevated: [iron]
  depleted: [zinc, selenium]

taxonomic_signature:
  enriched:
    - taxon: "[[bacteroides]]"
      role: "Altered carbohydrate metabolism, bile acid modulation"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Lost SCFA production, reduced anti-inflammatory capacity"

nutritional_immunity:
  elevated: [hepcidin, ferritin]
  depleted: [glutathione]

ecological_features: [metabolite-driven-insulin-resistance, fungal-dysbiosis]

virulence_enzymes: [beta-glucuronidase]

confidence:
  metallomic: preliminary
  taxonomic: preliminary
  nutritional_immunity: preliminary
  ecological: preliminary
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[type-2-diabetes]]"
    shared_metals: [iron, zinc]
    shared_taxa: [bacteroides]
    shared_ecological: [metabolite-driven-insulin-resistance]
    overlap_score: 0.45
  - condition: "[[pcos]]"
    shared_metals: [iron]
    shared_taxa: [bacteroides]
    shared_ecological: []
    overlap_score: 0.30
  - condition: "[[obesity]]"
    shared_metals: [iron, zinc]
    shared_taxa: [bacteroides]
    shared_ecological: []
    overlap_score: 0.35

cureva_status: in-progress
validated_interventions: []
stops: []
karen_brain_primitives: [1, 3, 5, 6]
stub: true
---

# Gestational Diabetes — Microbiome Signature

<!-- STUB: needs expansion -->

## Overview

**Gestational diabetes mellitus (GDM)** affects ~14% of pregnancies and represents a critical window where metabolic, microbial, and metal factors converge. This signature is preliminary, built from 6 sources emphasizing fungal dysbiosis and microbiome-derived metabolite pathways.

## Metallomic Signature

**Confidence: preliminary**

Iron elevation and zinc/selenium depletion patterns are inferred from overlap with [[type-2-diabetes-signature]] and limited GDM-specific metal data. Direct metallomic studies in GDM pregnancy cohorts are needed.

## Taxonomic Analysis

**Confidence: preliminary**

Enrichment of [[bacteroides]] and depletion of [[faecalibacterium-prausnitzii]] observed across multiple studies ([[wei-2022-16s-rrna-gut-microbiota-gestational-diabetes]], [[vavreckova-2022-gut-bacterial-fungal-microbiota-pregnancy-gdm]]). Fungal dysbiosis — particularly shifts in *Candida* and *Saccharomyces* — is a distinctive feature ([[wang-2026-intestinal-fungal-dysbiosis-gdm-adverse-pregnancy-outcomes]]).

## Associated Conditions

GDM shares overlapping signatures with:
- **[[type-2-diabetes]]** — shared iron/zinc patterns, Bacteroides enrichment (overlap 0.45)
- **[[pcos]]** — shared iron patterns, insulin resistance mechanisms (overlap 0.30)
- **[[obesity]]** — shared iron/zinc patterns (overlap 0.35)

## Open Questions

- What is the complete metallomic signature specific to GDM (vs. inherited from T2D)?
- How does fungal-bacterial cross-kingdom interaction drive GDM pathophysiology?
- Can preconception microbiome interventions prevent GDM in high-risk women?

## Cross-References

- [[gestational-diabetes]]
- [[type-2-diabetes-signature]]
- [[pcos-signature]]
- [[developmental-metal-vulnerability]]
