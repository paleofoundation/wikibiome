---
title: Fibromyalgia — Microbiome Signature
type: signature
created: 2026-04-18T00:00:00.000Z
updated: 2026-04-18T00:00:00.000Z
last_substantive_update: 2026-04-18T00:00:00.000Z
sources: []
source_count: 0
tags:
  - fibromyalgia
  - chronic-pain
  - central-sensitization
  - gut-brain-axis
  - copper
  - iron
  - butyrate-paradox
metallomic_signature:
  elevated:
    - copper
  depleted:
    - iron
    - magnesium
    - selenium
taxonomic_signature:
  enriched:
    - taxon: '[[eggerthella-lenta]]'
      role: MR-validated causal risk taxon (OR=1.897); produces neurotoxic metabolites; activates pro-inflammatory pathways
    - taxon: Flavonifractor
      role: Enriched in FM; associated with oxidative stress and depression comorbidity
    - taxon: Coprococcus 2
      role: >-
        MR-validated causal risk (OR=2.317); paradoxically butyrate-associated genus, suggesting strain-level functional
        divergence
    - taxon: '[[collinsella]]'
      role: Pro-inflammatory; enriched in FM and rheumatoid arthritis; promotes gut permeability
    - taxon: '[[streptococcus]]'
      role: S. salivarius enriched in oral and gut communities of FM patients
  depleted:
    - taxon: '[[faecalibacterium-prausnitzii]]'
      role: >-
        Most consistently depleted taxon across 5+ independent studies; primary butyrate producer; loss is the core
        taxonomic finding
    - taxon: '[[bifidobacterium]]'
      role: Depleted; loss reduces lactate cross-feeding and barrier support
    - taxon: Bacteroides uniformis
      role: Depleted; loss impairs polysaccharide degradation and immune regulation
    - taxon: '[[lachnospiraceae]]'
      role: SCFA-producing family; depletion reduces colonocyte nutrition
    - taxon: '[[roseburia]]'
      role: Butyrate producer; loss contributes to barrier dysfunction
nutritional_immunity:
  elevated:
    - copper
    - serum-butyrate
    - TNF-alpha
    - IL-6
  depleted:
    - iron
    - ferritin
    - selenium
    - glutathione-peroxidase-3
    - serotonin
ecological_features:
  - SCFA-depletion
  - butyrate-paradox
  - central-sensitization
  - tryptophan-kynurenine-shunting
  - gut-barrier-dysfunction
  - copper-iron-axis-imbalance
virulence_enzymes:
  - indoleamine-2-3-dioxygenase
  - LPS-biosynthesis
  - neurotoxic-metabolite-production
confidence:
  metallomic: moderate
  taxonomic: high
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: preliminary
associated_conditions:
  - condition: '[[depression]]'
    shared_metals:
      - magnesium-depleted
      - selenium-depleted
    shared_taxa:
      - faecalibacterium-depleted
      - bifidobacterium-depleted
      - lachnospiraceae-depleted
    shared_ecological:
      - SCFA-depletion
      - tryptophan-kynurenine-shunting
    overlap_score: 0.6
  - condition: '[[ibs|irritable-bowel-syndrome]]'
    shared_metals:
      - magnesium-depleted
    shared_taxa:
      - faecalibacterium-depleted
      - bifidobacterium-depleted
    shared_ecological:
      - gut-barrier-dysfunction
      - SCFA-depletion
    overlap_score: 0.55
  - condition: '[[fibromyalgia|chronic-fatigue-syndrome]]'
    shared_metals: []
    shared_taxa:
      - faecalibacterium-depleted
    shared_ecological:
      - SCFA-depletion
      - central-sensitization
    overlap_score: 0.4
  - condition: '[[anxiety]]'
    shared_metals:
      - magnesium-depleted
    shared_taxa:
      - faecalibacterium-depleted
      - bifidobacterium-depleted
      - lachnospiraceae-depleted
    shared_ecological:
      - SCFA-depletion
      - tryptophan-kynurenine-shunting
    overlap_score: 0.5
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

# Fibromyalgia — Microbiome Signature

## Overview

**Fibromyalgia (FM)** affects 2-4% of the global population (Heidari et al. 2017), characterized by widespread musculoskeletal pain, fatigue, cognitive dysfunction ("fibro fog"), and sleep disturbances. The microbiome offers both a **diagnostic biomarker** (AUC=87.8%, Minerbi et al. 2019 — outperforming most conventional diagnostic approaches) and a mechanistic explanation linking metal dysregulation, microbial ecology, and neurotransmitter imbalance through the gut-brain axis.

FM has the most well-characterized metallomic signature among the diseases in this batch, with MR-validated causal roles for copper (risk factor, OR=1.095) and iron (protective, OR=0.440) (Zeng et al. 2025). The **copper-iron axis** is particularly informative and mechanistically links the metallomic and taxonomic layers.

This signature lacks dedicated ingested source pages but draws from richly detailed entity page synthesis of multiple external references. Confidence levels reflect the strength of the underlying evidence despite the source page gap.

## Metallomic Signature

**Confidence: moderate**

| Metal | Direction | Evidence | Mechanism |
|-------|-----------|----------|-----------|
| **Copper (Cu)** | Elevated (causal) | MR OR=1.095 (Zeng et al. 2025) | Promotes oxidative stress, displaces zinc in metalloenzymes, amplifies neuroinflammation. Elevated Cu/Zn ratio correlates with pain severity |
| **Iron (Fe)** | Depleted (protective when present) | MR OR=0.440 (protective, Zeng et al. 2025); ferritin <50 ng/mL = 6.5x FM risk (Shtrozberg et al. 2025) | Impairs mitochondrial function and dopamine synthesis. Hepcidin-mediated sequestration may explain functional iron deficiency |
| **Magnesium (Mg)** | Depleted | Observational studies | Cofactor for >300 enzymes; deficiency amplifies NMDA receptor activation, central sensitization, and muscle hyperexcitability |
| **Selenium (Se)** | Depleted | Observational studies | Cofactor for glutathione peroxidase (GPX); depletion impairs antioxidant defense. GPX3 expression decreased 0.85x in FM (Duran-Gonzalez et al. 2025) |

The **copper-iron axis** is the defining metallomic feature: elevated copper competes with iron for transport and binding sites, potentially explaining functional iron deficiency in FM patients even when serum iron appears normal. This creates a mis-metallation scenario where copper displaces iron in critical metalloenzymes.

## Environmental Exposures

Copper exposure sources include drinking water from copper pipes, copper-rich foods, and occupational exposure. The interaction between copper excess and iron deficiency creates a metabolic environment favoring copper-tolerant organisms ([[eggerthella-lenta]], [[collinsella]]) while iron-dependent commensals ([[faecalibacterium-prausnitzii]]) lose competitive advantage. Chronic stress (a common FM trigger) elevates cortisol, which increases gut permeability and alters metal absorption.

## Nutritional Immunity Response

**Confidence: moderate**

- **Elevated copper**: Promotes oxidative stress that selectively favors copper-tolerant taxa while suppressing copper-sensitive commensals [[haddad-2024-heavy-metals-vitamin-d-pth-ra-fibromyalgia]].
- **Elevated serum butyrate** (paradoxical): FM patients show elevated serum butyrate despite depletion of canonical butyrate-producing taxa. This likely reflects impaired colonocyte butyrate uptake (barrier dysfunction causes butyrate to "leak" into systemic circulation) rather than increased production.
- **Depleted ferritin**: Ferritin <50 ng/mL creates 6.5x FM risk. Iron restriction by hepcidin starves iron-dependent beneficial taxa (Faecalibacterium requires iron for butyrate synthesis) while sparing iron-independent opportunists.
- **Depleted glutathione peroxidase 3 (GPX3)**: Expression decreased 0.85x in FM (Duran-Gonzalez et al. 2025), reducing capacity to neutralize oxidative stress from copper excess.
- **Depleted serotonin**: Tryptophan-kynurenine shunting via IDO upregulation from pro-inflammatory cytokines reduces serotonin availability, contributing to pain amplification and mood disturbance.

## Taxonomic Analysis

**Confidence: high**

### Enriched Taxa

**[[eggerthella-lenta]]** is MR-validated as causal (OR=1.897, Wang et al. 2024) — the strongest validated risk taxon. Eggerthella produces neurotoxic metabolites, activates pro-inflammatory pathways, and is enriched in multiple neuropsychiatric conditions. Its copper tolerance may explain its competitive advantage in the copper-elevated FM environment.

**Coprococcus 2** has MR causal association (OR=2.317, Wang et al. 2024), creating the **Coprococcus paradox**: this butyrate-associated genus is enriched in a butyrate-depleted state, suggesting strain-level functional divergence where FM-enriched strains may not produce butyrate or may produce alternative metabolites.

**Flavonifractor** is enriched and associated with oxidative stress and depression — bridging the FM-depression comorbidity at the taxonomic level.

**[[collinsella]]** is pro-inflammatory, enriched in FM and rheumatoid arthritis, and promotes gut permeability through tight junction disruption.

### Depleted Taxa

**[[faecalibacterium-prausnitzii]]** depletion is the most consistent finding in FM, reported across **5+ independent studies** (Goudman et al. 2024, meta-analysis). This is the single most replicated taxonomic finding in FM. F. prausnitzii is the primary butyrate producer; its depletion reduces anti-inflammatory signaling and compromises intestinal barrier integrity. Iron is required for F. prausnitzii butyrate synthesis — the hepcidin-mediated iron restriction in FM may directly cause this depletion.

**[[bifidobacterium]]**, **Bacteroides uniformis**, **[[lachnospiraceae]]**, and **[[roseburia]]** are all depleted, compounding the SCFA deficit and barrier dysfunction.

### Diagnostic Classifier

Minerbi et al. 2019 demonstrated that a microbiome-based classifier (primarily using Faecalibacterium depletion and Eggerthella/Flavonifractor enrichment) achieves **AUC=87.8%** for distinguishing FM from healthy controls — outperforming most conventional approaches for a condition that currently lacks any objective biomarker.

## Virulence Enzymes and Features

**Confidence: preliminary**

- **Neurotoxic metabolite production (Eggerthella)**: Eggerthella produces metabolites that activate pro-inflammatory pathways and may directly sensitize nociceptive neurons. The specific metabolites are under investigation but include phenol and p-cresol derivatives.
- **Indoleamine 2,3-dioxygenase (IDO)**: Upregulated by pro-inflammatory cytokines from dysbiotic community; shunts tryptophan from serotonin toward neurotoxic quinolinic acid.
- **LPS translocation**: Barrier dysfunction from butyrate depletion and Collinsella tight junction disruption permits endotoxin entry, activating TLR4 on microglia and amplifying central sensitization.

## Ecological State

**Confidence: moderate**

### The Copper-Iron Axis

The defining ecological feature of FM is the **copper-iron imbalance** that creates two simultaneous selective pressures: (1) elevated copper favors copper-tolerant organisms (Eggerthella, Collinsella) while suppressing copper-sensitive commensals, and (2) iron restriction (hepcidin-mediated) starves iron-dependent beneficial taxa (Faecalibacterium) while sparing iron-independent opportunists. The result is a community restructured around metal tolerance rather than metabolic function.

### The Butyrate Paradox

Elevated serum butyrate despite depleted butyrate-producing taxa is explained by **impaired colonocyte butyrate uptake**. Barrier dysfunction from Collinsella tight junction disruption and butyrate-producer depletion causes butyrate to "leak" into systemic circulation rather than being consumed by colonocytes. This paradox is clinically important: serum butyrate measurement is misleading if not interpreted in the context of colonocyte function.

### Central Sensitization from the Gut

Central sensitization in FM is driven in part by peripheral gut signals: LPS translocation activates TLR4 on microglia, tryptophan-kynurenine shunting produces quinolinic acid (NMDA agonist amplifying pain), reduced SCFA signaling disrupts the anti-inflammatory cholinergic pathway via vagal afferents, and oxidative stress from copper excess and GPX3 depletion damages neural tissue.

### FM-IBS Overlap

28-59% of FM patients meet IBS diagnostic criteria (Bheemanenni et al. 2025). Shared visceral hypersensitivity, altered gut motility, mast cell activation, and overlapping taxonomic signatures (Faecalibacterium depletion, Eggerthella enrichment) suggest a common gut-brain axis disruption manifesting as central pain (FM) and visceral pain (IBS).

## Associated Conditions

### [[depression]] — Overlap Score: 0.60

Shared Faecalibacterium/Bifidobacterium/Lachnospiraceae depletion, magnesium and selenium depletion, tryptophan-kynurenine shunting, and Flavonifractor enrichment. The overlap suggests shared pathophysiology through SCFA depletion and neurotransmitter deficit.

### [[ibs|irritable-bowel-syndrome]] — Overlap Score: 0.55

28-59% comorbidity. Shared Faecalibacterium/Bifidobacterium depletion, gut barrier dysfunction, and visceral hypersensitivity. The gut-brain axis provides a unifying mechanism for both central and visceral pain.

### [[anxiety]] — Overlap Score: 0.50

20-60% comorbidity. Shared magnesium depletion, SCFA-producer depletion, and tryptophan-kynurenine shunting. All three conditions (FM, IBS, anxiety) may represent different clinical presentations of the same underlying dysbiotic state.

### [[fibromyalgia|chronic-fatigue-syndrome]] — Overlap Score: 0.40

Overlapping fatigue, cognitive dysfunction, and Faecalibacterium depletion. FM and CFS share enough clinical features that diagnostic overlap is common.

## Open Questions

1. Does the elevated serum butyrate in FM reflect impaired colonocyte uptake, altered bacterial production, or both? Colonocyte butyrate transporter expression studies are needed.
2. Can the MR-validated copper-iron axis be targeted therapeutically (e.g., copper chelation + iron repletion)? What are the microbiome consequences?
3. What drives the strain-level functional divergence in Coprococcus 2 — why is a butyrate-associated genus enriched in a butyrate-depleted state?
4. Is the FM microbiome signature causal, consequential, or both? FMT studies are needed.
5. Can the AUC=87.8% microbiome classifier be validated in diverse populations and serve as a clinical diagnostic tool?

## Karen's Brain Primitives Active

- **Primitive 1 (Metals as Selective Pressures)**: Copper excess selects for copper-tolerant taxa (Eggerthella, Collinsella) while iron restriction via hepcidin selects against iron-dependent commensals (Faecalibacterium). The metal landscape determines community composition.
- **Primitive 3 (Mis-metallation and Toxic Metal Entry)**: Copper displacing zinc and iron in metalloenzymes is a mis-metallation event. Elevated copper competes with iron for transport proteins, creating functional iron deficiency even when dietary iron is adequate.
- **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels)**: Faecalibacterium's iron dependence is its vulnerability in the FM context. If iron can be selectively delivered to the colonic lumen (bypassing hepcidin) or copper can be chelated, the competitive landscape shifts back toward commensals.
- **Primitive 5 (Two-Sided Ecological Engineering)**: FM intervention requires both copper reduction/iron restoration (metal axis normalization) and direct microbial support (Faecalibacterium, Bifidobacterium supplementation with dietary fiber substrate).
