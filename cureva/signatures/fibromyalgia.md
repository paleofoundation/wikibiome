---
title: Fibromyalgia — Microbiome Signature
type: signature
created: 2026-04-15T00:00:00.000Z
updated: 2026-04-15T00:00:00.000Z
last_substantive_update: 2026-04-15T00:00:00.000Z
sources: []
source_count: 0
tags:
  - fibromyalgia
  - chronic-pain
  - central-sensitization
  - gut-brain-axis
  - metallomic
platform: both
cureva_status: partial
validated_interventions:
  - mediterranean-diet-fibromyalgia
stops: []
confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: preliminary
  virulence_enzymes: preliminary
associated_conditions:
  - condition: '[[depression]]'
    shared_metals:
      - magnesium
      - selenium
    shared_taxa:
      - faecalibacterium-prausnitzii
      - bifidobacterium
      - lachnospiraceae
    shared_ecological:
      - tryptophan-kynurenine-shunting
      - SCFA-depletion
      - leaky-gut
    overlap_score: 0.62
  - condition: '[[irritable-bowel-syndrome]]'
    shared_metals:
      - magnesium
    shared_taxa:
      - faecalibacterium-prausnitzii
      - bifidobacterium
      - eggerthella
    shared_ecological:
      - visceral-hypersensitivity
      - SCFA-depletion
      - barrier-dysfunction
    overlap_score: 0.58
  - condition: '[[chronic-fatigue-syndrome]]'
    shared_metals:
      - magnesium
      - selenium
    shared_taxa:
      - faecalibacterium-prausnitzii
      - bifidobacterium
    shared_ecological:
      - SCFA-depletion
      - mitochondrial-dysfunction
    overlap_score: 0.52
karen_brain_primitives:
  - 1
  - 2
  - 3
  - 5
metallomic_signature:
  elevated:
    - copper
  depleted:
    - iron
    - magnesium
    - selenium
    - glutathione
taxonomic_signature:
  enriched:
    - taxon: '[[eggerthella]]'
      role: >-
        MR-validated causal taxon (OR=1.897) — neurotoxic metabolites, pro-inflammatory activation, enriched across
        neuropsychiatric conditions
    - taxon: '[[flavonifractor]]'
      role: Enriched in FM — associated with oxidative stress, tryptophan catabolism
    - taxon: '[[coprococcus]]'
      role: >-
        Coprococcus 2 — MR causal (OR=2.317); paradoxical enrichment of butyrate-associated genus suggests strain-level
        functional divergence
    - taxon: '[[streptococcus]]'
      role: Streptococcus salivarius — enriched in oral and gut communities; may reflect oral-gut axis
    - taxon: '[[collinsella]]'
      role: Pro-inflammatory; promotes IL-17A signaling; enriched in FM and rheumatoid arthritis
  depleted:
    - taxon: '[[faecalibacterium-prausnitzii|faecalibacterium]]'
      role: >-
        Most consistently depleted taxon (5+ studies) — primary colonic butyrate producer; loss impairs
        anti-inflammatory signaling and barrier integrity
    - taxon: '[[bifidobacterium]]'
      role: Depleted — loss reduces lactate cross-feeding, barrier support, and pathogen exclusion
    - taxon: '[[bacteroides-vulgatus|Bacteroides uniformis]]'
      role: Depleted — impaired polysaccharide degradation and immune regulation
    - taxon: '[[lachnospiraceae]]'
      role: SCFA-producing family depleted — reduced colonocyte nutrition and immune tolerance
    - taxon: '[[roseburia]]'
      role: Butyrate producer — depletion compounds SCFA deficit and barrier dysfunction
nutritional_immunity:
  elevated:
    - ceruloplasmin
    - pro-inflammatory-cytokines
  depleted:
    - glutathione
    - GPX3
    - ferritin
ecological_features:
  - SCFA-depletion
  - butyrate-paradox
  - barrier-dysfunction
  - tryptophan-kynurenine-shunting
  - copper-iron-axis-imbalance
  - central-sensitization
virulence_enzymes:
  - tryptophanase
  - pro-inflammatory-metabolite-synthesis
  - copper-dependent-oxidases
stub: true
stub_reason: §2f auto-demotion 2026-04-19 — 0 sources, signature minimum 10
---

## Overview

**Fibromyalgia (FM)** presents as widespread chronic pain with fatigue, cognitive dysfunction, and sleep disturbance. The microbiome signature reveals FM as an ecosystem disorder driven by copper excess, iron-magnesium-selenium depletion, and a distinctive taxonomic shift favoring pro-inflammatory taxa (Eggerthella, Flavonifractor, Collinsella) at the expense of SCFA producers (Faecalibacterium, Bifidobacterium, Roseburia). Mendelian randomization validates both the metallomic (Cu causal, Fe protective) and taxonomic (Eggerthella, Coprococcus 2) components, elevating the evidence beyond association.

The signature's most distinctive feature is the **butyrate paradox**: elevated serum butyrate despite profound depletion of butyrate-producing taxa, suggesting barrier dysfunction permits butyrate leakage into systemic circulation rather than absorption at the colonocyte.

## Metallomic Signature

**Confidence: Moderate** (MR-validated for Cu and Fe; observational for Mg and Se)

| Metal | Status | MR Evidence | Mechanism |
|-------|--------|-------------|-----------|
| **Copper** | Elevated (causal) | OR = 1.095 | Oxidative stress, metalloenzyme displacement, neuroinflammation amplification |
| **Iron** | Depleted (protective when present) | OR = 0.440 | Mitochondrial dysfunction, impaired dopamine synthesis; hepcidin-mediated sequestration |
| **Magnesium** | Depleted | Observational | NMDA receptor hyperactivation, central sensitization, muscle hyperexcitability |
| **Selenium** | Depleted | Observational | GPX3 decreased 0.85x; impaired antioxidant defense against Cu-mediated oxidative stress |
| **Glutathione** | Depleted | Observational | Primary intracellular antioxidant; depletion compounds Cu toxicity |

The copper-iron axis is the defining metallomic feature: elevated copper competes with iron for transport, potentially explaining functional iron deficiency even at normal serum iron levels (Primitive 2: Nutritional Immunity as Interpretive Constraint). Copper also displaces zinc in metalloenzymes (Primitive 3: Mis-metallation).

## Taxonomic Analysis

**Confidence: Moderate** (multiple independent studies + MR validation for key taxa)

The taxonomic signature shows a clear pattern: loss of anti-inflammatory SCFA producers replaced by pro-inflammatory taxa with neurotoxic metabolic capacity.

**Eggerthella** (MR OR = 1.897) is the signature pathobiont -- an Actinobacterium that produces neurotoxic metabolites, activates NF-kB signaling, and is enriched across FM, depression, and anxiety. Its consistent enrichment across neuropsychiatric conditions suggests it may be a general marker of gut-brain axis dysfunction.

**Faecalibacterium** depletion across 5+ independent studies is the most robust taxonomic finding. Loss of this primary butyrate producer initiates a cascade: reduced butyrate at the colonocyte impairs barrier integrity, reduces anti-inflammatory IL-10 signaling, and compromises vagal afferent tone -- all contributing to central sensitization.

The **Coprococcus 2 paradox** (MR causal OR = 2.317 for a butyrate-associated genus) likely reflects strain-level functional divergence, where FM-enriched strains differ metabolically from health-associated strains despite shared taxonomy.

## Ecological State

**Confidence: Preliminary**

The FM gut ecosystem is characterized by:

- **SCFA depletion at the colonocyte** with paradoxical systemic elevation (barrier leakage)
- **Tryptophan-kynurenine shunting**: pro-inflammatory cytokines upregulate IDO, diverting tryptophan from serotonin toward neurotoxic quinolinic acid
- **Copper-iron axis imbalance**: copper excess selects for copper-tolerant taxa while iron restriction starves iron-dependent commensals (Faecalibacterium)
- **Barrier dysfunction**: enables LPS translocation, activating TLR4 on microglia and amplifying central sensitization
- **Diagnostic classifier**: microbiome-based model achieves AUC = 87.8% (Minerbi 2019)

## Validated Interventions

### Mediterranean Diet (RCT, n=84)
- **I to f**: Mediterranean diet increases dietary fiber, polyphenols, and omega-3 fatty acids, promoting SCFA-producing taxa (Faecalibacterium, Roseburia) and reducing pro-inflammatory taxa
- **I to f evidence**: Moderate
- **I to D**: Reduced FM symptom scores in RCT (n=84)
- **I to D evidence**: RCT
- **Status**: Validated

### Probiotics (Pilot RCT, n=40)
- **I to f**: Multi-strain probiotic aimed at restoring depleted taxa
- **I to D**: Improved cognitive function ("fibro fog") but not pain scores
- **I to D evidence**: Pilot RCT
- **Status**: Promising (partial response)

## STOPs

No condition-specific STOPs identified. However, iron supplementation should be approached cautiously given the copper-iron axis: supplemental iron may not address the functional deficiency if copper-mediated competition is the root cause (Primitive 2).

## Open Questions

1. Does copper chelation restore iron bioavailability and reduce FM symptoms?
2. What drives the Coprococcus 2 strain-level divergence between health-associated and FM-associated populations?
3. Is the butyrate paradox a cause or consequence of barrier dysfunction?
4. Can the AUC = 87.8% microbiome classifier be validated in independent cohorts for clinical use?
5. Would FMT from healthy donors reduce FM symptoms?

## Knowledge Primitives Applied

- **Primitive 1 (Metals as Selective Pressures)**: Copper excess selects for copper-tolerant Eggerthella/Collinsella while suppressing copper-sensitive commensals
- **Primitive 2 (Nutritional Immunity as Interpretive Constraint)**: Iron depletion may be host defense (hepcidin-mediated) rather than true deficiency -- iron supplementation may feed pathogens rather than help the host
- **Primitive 3 (Mis-metallation)**: Copper displaces zinc in metalloenzymes, impairing antioxidant defense (GPX) and immune function
- **Primitive 5 (Two-Sided Ecological Engineering)**: Intervention must both suppress Eggerthella/Flavonifractor AND restore Faecalibacterium/Bifidobacterium/Roseburia
