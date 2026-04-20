---
title: Erectile Dysfunction — Microbiome Signature
type: signature
created: 2026-04-15T00:00:00.000Z
updated: 2026-04-15T00:00:00.000Z
last_substantive_update: 2026-04-15T00:00:00.000Z
sources: []
source_count: 0
tags:
  - erectile-dysfunction
  - gut-penis-axis
  - testosterone
  - cadmium
  - eNOS
  - vascular
platform: both
cureva_status: partial
validated_interventions: []
stops: []
confidence:
  metallomic: preliminary
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary
associated_conditions:
  - condition: '[[cardiovascular-disease]]'
    shared_metals:
      - cadmium
    shared_taxa:
      - lachnospiraceae
      - ruminococcus-gnavus
    shared_ecological:
      - endothelial-dysfunction
      - LPS-translocation
      - chronic-inflammation
    overlap_score: 0.55
  - condition: '[[type-2-diabetes]]'
    shared_metals: []
    shared_taxa:
      - lachnospiraceae
    shared_ecological:
      - endothelial-dysfunction
      - insulin-resistance
      - chronic-inflammation
    overlap_score: 0.42
  - condition: '[[depression]]'
    shared_metals: []
    shared_taxa:
      - lachnospiraceae
    shared_ecological:
      - gut-brain-axis-dysfunction
      - chronic-inflammation
    overlap_score: 0.35
karen_brain_primitives:
  - 1
  - 5
  - 7
metallomic_signature:
  elevated:
    - cadmium
  depleted: []
taxonomic_signature:
  enriched:
    - taxon: '[[lachnospiraceae]]'
      role: >-
        MR-validated causal risk taxon (OR=1.265 across 3 concordant studies) — family-level enrichment; specific
        pro-inflammatory species likely drive the association
    - taxon: '[[senegalimassilia]]'
      role: MR causal (OR=1.355) — enriched in ED; functional role under investigation
    - taxon: '[[oscillibacter]]'
      role: MR causal (OR=1.201) — associated with metabolic dysfunction and inflammation
    - taxon: '[[tyzzerella]]'
      role: Tyzzerella 3 — enriched in ED; associated with cardiovascular risk
    - taxon: '[[ruminococcus-gnavus|Ruminococcus gnavus]]'
      role: Pro-inflammatory; produces inflammatory polysaccharides; enriched in multiple inflammatory conditions
  depleted:
    - taxon: '[[ruminococcaceae]]'
      role: >-
        Ruminococcaceae UCG013 — MR-validated protective (OR=0.761-0.827 across 3 studies); most consistently protective
        taxon in ED
    - taxon: '[[bacteroides]]'
      role: Bacteroides intestinalis — protective association; loss impairs polysaccharide fermentation
nutritional_immunity:
  elevated:
    - TNF-alpha
    - IL-6
    - LPS
    - CRP
  depleted: []
ecological_features:
  - gut-penis-axis
  - LPS-mediated-eNOS-suppression
  - endothelial-dysfunction
  - testosterone-modulation-by-HSDH
  - H2S-signaling-disruption
  - chronic-low-grade-inflammation
virulence_enzymes:
  - LPS-biosynthesis
  - hydroxysteroid-dehydrogenase
  - pro-inflammatory-polysaccharide-synthesis
stub: true
stub_reason: §2f auto-demotion 2026-04-19 — 0 sources, signature minimum 10
---

## Overview

**Erectile Dysfunction (ED)** affects 30-50% of men aged 40-70 and serves as a 3-5 year sentinel for cardiovascular disease. The microbiome signature reveals the **gut-penis axis** -- a systemic inflammatory pathway where LPS translocation from a dysbiotic gut suppresses endothelial nitric oxide synthase (eNOS) in penile vasculature, impairing the NO-mediated smooth muscle relaxation required for erection.

The signature's strength lies in the **three concordant Mendelian randomization studies** validating Lachnospiraceae as a causal risk taxon and Ruminococcaceae UCG013 as consistently protective. This level of MR concordance is unusual in microbiome-disease associations and elevates the taxonomic layer to moderate confidence.

## Metallomic Signature

**Confidence: Preliminary**

Cadmium is the primary metal of concern:

| Metal | Status | Mechanism |
|-------|--------|-----------|
| **Cadmium (Cd)** | Elevated (reproductive toxicant) | Accumulates in testicular tissue, disrupts testosterone biosynthesis, damages penile endothelium, impairs NO-mediated vasodilation. **FMT rescues cadmium-induced ED in animal models**, demonstrating the microbiome mediates Cd's reproductive toxicity |

The FMT rescue experiment is particularly significant: it demonstrates that cadmium's effect on erectile function operates at least partly through the microbiome rather than through direct tissue toxicity alone (Primitive 1: Metals as Selective Pressures).

## Taxonomic Analysis

**Confidence: Moderate** (3 concordant MR studies)

### Causal Risk Taxa

**Lachnospiraceae** (OR = 1.265 across 3 independent MR analyses) is the most robust finding. This family-level association is notable because Lachnospiraceae is typically considered beneficial (butyrate production). The ED association likely reflects:
- Specific pro-inflammatory species within the family
- Ecological context where Lachnospiraceae displaces more protective taxa
- Strain-level functional variation between health-associated and ED-associated populations

**Senegalimassilia** (OR = 1.355) and **Oscillibacter** (OR = 1.201) are additional MR-validated risk taxa, both associated with metabolic dysfunction and chronic inflammation.

**Ruminococcus gnavus** produces pro-inflammatory polysaccharides that activate TNF-alpha, contributing to the systemic inflammation that impairs endothelial function.

### Protective Taxa

**Ruminococcaceae UCG013** (OR = 0.761-0.827 across 3 studies) is the most consistently validated protective taxon in ED. Its enrichment correlates with reduced systemic inflammation and better endothelial function. This makes it a prime candidate for probiotic development.

## Ecological State

**Confidence: Moderate**

### The Gut-Penis Axis

The mechanistic pathway from gut to penis operates through five steps:

1. **Dysbiotic communities** (Lachnospiraceae enrichment, Ruminococcaceae depletion) produce excess LPS
2. **Barrier dysfunction** permits LPS translocation into systemic circulation
3. **LPS activates TLR4** on vascular endothelium, upregulating TNF-alpha and IL-6
4. **TNF-alpha/IL-6 suppress eNOS expression** in penile corporal smooth muscle
5. **Reduced NO synthesis** impairs vasodilation, preventing tumescence

This pathway explains the well-established clinical observation that ED precedes coronary artery disease by 3-5 years -- the same endothelial dysfunction affects penile arteries first (smaller diameter, more sensitive to NO reduction).

### Testosterone Regulation by Gut Bacteria

Gut bacteria express **hydroxysteroid dehydrogenase (HSDH) enzymes** that interconvert active and inactive steroid hormones. Dysbiotic communities with altered HSDH activity may reduce bioavailable testosterone, contributing to both ED and the associated metabolic syndrome (Primitive 7: Estrobolome and Hormone Recirculation -- applied to androgens).

### H2S as Secondary Erectogenic Pathway

**Desulfovibrio** and other sulfate-reducing bacteria produce hydrogen sulfide (H2S), a gasotransmitter that relaxes corporal smooth muscle independently of NO. Depletion of H2S-producing taxa compounds the NO deficit, removing a backup pathway for erection.

## Validated Interventions

No interventions have completed full triangle validation for ED specifically. Promising directions:

- **Ruminococcaceae UCG013 supplementation** -- strongest protective MR evidence across 3 studies
- **FMT** -- rescues cadmium-induced ED in animal models; human trials needed
- **Dietary patterns** that reduce Lachnospiraceae and promote Ruminococcaceae
- **Cadmium exposure reduction** -- dietary and environmental

## STOPs

No condition-specific STOPs formally identified. However:
- **PDE5 inhibitors alone** address the downstream NO deficit without correcting the upstream dysbiosis -- functional but not curative
- **Testosterone supplementation** without addressing gut HSDH activity may produce suboptimal results if gut bacteria are actively deactivating supplemented testosterone

## Open Questions

1. Which specific Lachnospiraceae species drive the causal risk association -- can strain-level resolution identify the culprit?
2. Does FMT rescue of cadmium-induced ED translate to human interventions?
3. Can Ruminococcaceae UCG013 be developed as a next-generation probiotic for ED prevention?
4. Is H2S from Desulfovibrio therapeutically targetable without increasing sulfide toxicity?
5. Do gut HSDH enzymes explain testosterone therapy non-responders?

## Knowledge Primitives Applied

- **Primitive 1 (Metals as Selective Pressures)**: Cadmium selects for Cd-tolerant taxa while suppressing Cd-sensitive commensals; FMT rescue demonstrates this is microbiome-mediated
- **Primitive 5 (Two-Sided Ecological Engineering)**: Must both suppress Lachnospiraceae-driven inflammation AND restore Ruminococcaceae UCG013 protection
- **Primitive 7 (Estrobolome and Hormone Recirculation)**: Applied to androgens -- gut bacterial HSDH enzymes modulate testosterone bioavailability
