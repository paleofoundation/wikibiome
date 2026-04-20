---
title: Erectile Dysfunction — Microbiome Signature
type: signature
created: 2026-04-18T00:00:00.000Z
updated: 2026-04-18T00:00:00.000Z
last_substantive_update: 2026-04-18T00:00:00.000Z
sources: []
source_count: 0
tags:
  - erectile-dysfunction
  - gut-penis-axis
  - eNOS
  - testosterone
  - cadmium
  - SCFA
  - endothelial-dysfunction
metallomic_signature:
  elevated:
    - cadmium
    - lead
    - mercury
  depleted:
    - zinc
taxonomic_signature:
  enriched:
    - taxon: '[[lachnospiraceae]]'
      role: >-
        Family-level MR-validated causal risk (OR=1.265 across 3 independent MR studies); most consistently validated
        risk taxon; may reflect pro-inflammatory species within a normally beneficial family
    - taxon: Senegalimassilia
      role: MR-validated risk taxon (OR=1.355)
    - taxon: Oscillibacter
      role: MR-validated risk taxon (OR=1.201)
    - taxon: Tyzzerella 3
      role: Enriched in ED; pro-inflammatory
    - taxon: '[[ruminococcus-gnavus]]'
      role: Pro-inflammatory; enriched in multiple inflammatory conditions including CVD
  depleted:
    - taxon: Ruminococcaceae UCG013
      role: MR-validated protective taxon (OR=0.761-0.827 across 3 studies); most consistently validated protective taxon
    - taxon: Bacteroides intestinalis
      role: Protective association; polysaccharide fermenter
    - taxon: '[[desulfovibrio]]'
      role: H2S producer; H2S relaxes corporal smooth muscle independently of NO; depletion compounds NO deficit
nutritional_immunity:
  elevated:
    - LPS
    - TNF-alpha
    - IL-6
    - cadmium-testicular
  depleted:
    - nitric-oxide
    - testosterone
    - hydrogen-sulfide
    - zinc
ecological_features:
  - endothelial-dysfunction
  - LPS-translocation
  - eNOS-suppression
  - gut-barrier-dysfunction
  - testosterone-dysregulation
virulence_enzymes:
  - LPS-biosynthesis
  - hydroxysteroid-dehydrogenase-dysregulation
confidence:
  metallomic: preliminary
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary
associated_conditions:
  - condition: '[[cardiovascular-disease]]'
    shared_metals:
      - cadmium-elevated
    shared_taxa:
      - lachnospiraceae-enriched
      - ruminococcus-gnavus-enriched
    shared_ecological:
      - endothelial-dysfunction
      - LPS-translocation
    overlap_score: 0.6
  - condition: '[[type-2-diabetes]]'
    shared_metals: []
    shared_taxa:
      - lachnospiraceae-enriched
    shared_ecological:
      - endothelial-dysfunction
      - gut-barrier-dysfunction
    overlap_score: 0.35
  - condition: '[[depression]]'
    shared_metals: []
    shared_taxa:
      - lachnospiraceae-enriched
    shared_ecological:
      - gut-barrier-dysfunction
    overlap_score: 0.25
cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives:
  - 1
  - 3
  - 4
  - 5
stub: true
stub_reason: §2f auto-demotion 2026-04-19 — 0 sources, signature minimum 10
---

# Erectile Dysfunction — Microbiome Signature

## Overview

**Erectile dysfunction (ED)** affects 30-50% of men aged 40-70 (Feldman et al. 1994). Conventionally understood as a vascular and/or neurogenic disorder, ED is now recognized as a condition with significant gut microbiome involvement through the emerging **gut-penis axis** concept (Li et al. 2026). The strength of evidence comes from an unusually convergent set of three independent Mendelian randomization studies (Zhang et al. 2023, Chen et al. 2024, Su et al. 2023) that validate specific causal taxa, and from animal models where **fecal microbiota transplantation rescues cadmium-induced ED** (Cai et al. 2022), demonstrating microbiome mediation of metal toxicity.

ED serves as a **sentinel marker for cardiovascular disease** — the same endothelial dysfunction affecting penile arteries precedes coronary artery disease by 3-5 years. The gut-penis axis is mechanistically a vascular extension of the gut-brain inflammatory signaling pathway.

This signature lacks dedicated ingested source pages but draws from the richly detailed entity page synthesis. Confidence levels reflect the strength of MR evidence despite the source page gap.

## Metallomic Signature

**Confidence: preliminary**

- **Cadmium (elevated)**: Established reproductive toxicant. Cadmium accumulates in testicular tissue, disrupts testosterone biosynthesis, damages penile endothelium, and disrupts the blood-testis barrier [[ghosh-2023-heavy-metals-gut-barrier-integrity]]. The finding that FMT rescues cadmium-induced ED (Cai et al. 2022) demonstrates that the microbiome mediates at least part of cadmium's reproductive toxicity.
- **Lead (elevated)**: Impairs endothelial function systemically, including penile vasculature. Lead crosses the blood-testis barrier and disrupts spermatogenesis.
- **Mercury (elevated)**: Impairs endothelial NO production and contributes to vascular dysfunction.
- **Zinc (depleted)**: Essential for testosterone synthesis, immune tolerance, and antioxidant defense (SOD). Zinc deficiency compounds both the hormonal deficit and the immune dysregulation in ED.

## Environmental Exposures

Cadmium exposure from smoking (the dominant source), occupational exposure, and contaminated food is the primary metal exposure. Smoking-associated ED has traditionally been attributed to vascular damage, but the cadmium-microbiome-ED pathway suggests a gut-mediated mechanism. The metabolic syndrome context — obesity, insulin resistance, hypertension — provides compounding vascular and inflammatory insult that synergizes with dysbiosis-driven endothelial dysfunction.

## Nutritional Immunity Response

**Confidence: preliminary**

- **Elevated LPS**: From dysbiotic gut communities, particularly Lachnospiraceae and Ruminococcus gnavus. LPS activates TLR4 on endothelial cells throughout the vasculature, including penile arteries.
- **Elevated TNF-alpha and IL-6**: TLR4-driven cytokines that suppress endothelial nitric oxide synthase (eNOS) in penile vasculature, reducing NO-mediated vasodilation required for erection.
- **Elevated testicular cadmium**: Accumulates and directly disrupts testosterone biosynthesis and the blood-testis barrier.
- **Depleted nitric oxide**: The functional endpoint. eNOS suppression by TNF-alpha/IL-6 reduces NO production, impairing smooth muscle relaxation in corporal tissue.
- **Depleted testosterone**: Gut bacteria regulate testosterone levels through hydroxysteroid dehydrogenase (HSDH) enzymes that interconvert active and inactive steroid hormones (Lv et al. 2024). Dysbiotic communities with altered HSDH activity reduce bioavailable testosterone.
- **Depleted hydrogen sulfide (H2S)**: Desulfovibrio and other sulfate-reducing bacteria produce H2S, which functions as a gasotransmitter relaxing corporal smooth muscle independently of NO (Cai et al. 2022). H2S depletion compounds the NO deficit.

## Taxonomic Analysis

**Confidence: moderate**

### Enriched Taxa — Three Concordant MR Studies

The strength of the gut-ED connection lies in remarkable consistency across three independent MR analyses:

**[[lachnospiraceae]]** (family level) is the most consistently validated risk taxon — OR=1.265 across all 3 MR studies (Zhang et al. 2023, Chen et al. 2024, Su et al. 2023). The enrichment of Lachnospiraceae in ED is notable because this family is typically considered beneficial (butyrate production) in other contexts. The ED-associated enrichment may reflect specific pro-inflammatory species within the family, or an ecological shift where Lachnospiraceae displaces more protective taxa.

**Senegalimassilia** (OR=1.355), **Oscillibacter** (OR=1.201), and **Tyzzerella 3** are enriched.

**[[ruminococcus-gnavus]]** is pro-inflammatory and enriched in multiple inflammatory conditions including cardiovascular disease, bridging the ED-CVD comorbidity at the microbial level.

### Depleted Taxa

**Ruminococcaceae UCG013** is the most consistently validated protective taxon — OR=0.761-0.827 across all 3 MR studies (Zhang et al. 2023, Chen et al. 2024, Su et al. 2023). Its protective mechanism likely involves SCFA production and anti-inflammatory metabolite generation.

**Bacteroides intestinalis** has a protective association.

**[[desulfovibrio]]** depletion is functionally significant because these sulfate-reducing bacteria produce H2S, which relaxes corporal smooth muscle independently of NO. Their loss removes a secondary pathway for erection, compounding the NO deficit from LPS-mediated eNOS suppression.

## Virulence Enzymes and Features

**Confidence: preliminary**

- **LPS biosynthesis**: Enriched pro-inflammatory taxa produce endotoxin that activates TLR4 → TNF-alpha/IL-6 → eNOS suppression → reduced NO → erectile dysfunction. This is the core mechanistic cascade.
- **Hydroxysteroid dehydrogenase (HSDH) dysregulation**: Gut bacteria regulate testosterone through HSDH enzymes (Lv et al. 2024). Dysbiotic communities shift the HSDH balance toward testosterone inactivation, reducing bioavailable hormone.

## Ecological State

**Confidence: moderate**

### The Gut-Penis Axis

The gut-penis axis operates through a systemic inflammatory pathway:

1. **Dysbiotic gut communities** (enriched Lachnospiraceae, R. gnavus) produce excess LPS and pro-inflammatory metabolites.
2. **Intestinal barrier dysfunction** permits LPS translocation into systemic circulation.
3. **Circulating LPS activates TLR4** on endothelial cells throughout the vasculature, upregulating TNF-alpha and IL-6.
4. **TNF-alpha and IL-6 suppress eNOS** in penile vasculature specifically.
5. **Reduced NO synthesis** impairs smooth muscle relaxation and vasodilation required for erection.

This explains why ED is a sentinel marker for cardiovascular disease — the same endothelial dysfunction affects penile arteries first (smaller diameter, more sensitive to NO reduction) and coronary arteries 3-5 years later.

### Cadmium-Microbiome-ED Triangle

The FMT rescue of cadmium-induced ED (Cai et al. 2022) demonstrates that cadmium's reproductive toxicity is at least partially microbiome-mediated. Cadmium disrupts gut barrier integrity, alters microbial composition, and damages the blood-testis barrier. Restoring a healthy microbiome via FMT reverses at least the gut-mediated component of cadmium's effects, even while tissue cadmium remains elevated.

### Testosterone Regulation

Gut bacteria regulate testosterone through HSDH enzymes that interconvert active and inactive steroid hormones. Dysbiotic communities with altered HSDH activity reduce bioavailable testosterone, contributing to both ED and the associated metabolic syndrome. This is a bidirectional relationship — testosterone also shapes gut microbial composition.

## Associated Conditions

### [[cardiovascular-disease]] — Overlap Score: 0.60

ED precedes CVD by 3-5 years as a sentinel marker. Shared cadmium elevation, Lachnospiraceae and R. gnavus enrichment, endothelial dysfunction, and LPS-mediated inflammatory pathway. Treating the shared microbiome disruption could address both conditions.

### [[type-2-diabetes]] — Overlap Score: 0.35

Shared insulin resistance, endothelial dysfunction, and Lachnospiraceae enrichment. The metabolic syndrome triad (ED + T2D + CVD) may share a common gut-mediated inflammatory driver.

### [[depression]] — Overlap Score: 0.25

Bidirectional comorbidity with shared inflammatory pathways and Lachnospiraceae enrichment. Depression and ED share serotonin pathway disruption and chronic inflammatory signaling.

## Open Questions

1. What specific Lachnospiraceae species drive the causal risk association — can strain-level resolution identify the culprit vs. beneficial members of the family?
2. Does the FMT rescue of cadmium-induced ED translate to human interventions?
3. Can Ruminococcaceae UCG013 supplementation prevent or reverse ED in a clinical trial?
4. Is the H2S pathway from Desulfovibrio therapeutically targetable — would H2S donors or sulfate-reducing bacteria supplementation improve erectile function?
5. Does zinc supplementation (to counter cadmium-induced zinc displacement) improve ED outcomes through both hormonal and microbiome mechanisms?
6. Can microbiome-based biomarkers predict ED onset and serve as early warning for cardiovascular risk?

## Karen's Brain Primitives Active

- **Primitive 1 (Metals as Selective Pressures)**: Cadmium disrupts gut microbial ecology, creating a dysbiotic community that produces inflammatory mediators affecting penile vasculature. The FMT rescue proves that cadmium's selective pressure on the microbiome is a mediating mechanism.
- **Primitive 3 (Mis-metallation and Toxic Metal Entry)**: Cadmium enters cells via zinc and calcium transporters, displacing correct cofactors in metalloenzymes critical for testosterone synthesis and endothelial function. The zinc-cadmium antagonism is a classic mis-metallation.
- **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels)**: If the pro-inflammatory Lachnospiraceae species driving ED have specific metal dependencies, targeting those dependencies could shift the competitive landscape. This requires strain-level metabolic profiling.
- **Primitive 5 (Two-Sided Ecological Engineering)**: ED intervention requires both reducing pro-inflammatory taxa (specific Lachnospiraceae, R. gnavus) and restoring protective taxa (Ruminococcaceae UCG013, Desulfovibrio for H2S production). Cadmium chelation addresses the upstream metal driver.
