---
title: Premenstrual Dysphoric Disorder — Microbiome Signature
type: signature
created: 2026-04-18T00:00:00.000Z
updated: 2026-04-18T00:00:00.000Z
last_substantive_update: 2026-04-18T00:00:00.000Z
sources: []
source_count: 0
tags:
  - pmdd
  - premenstrual
  - estrobolome
  - tryptophan-kynurenine
  - GABA
  - neuroinflammation
  - luteal-phase
metallomic_signature:
  elevated:
    - copper
  depleted:
    - magnesium
    - zinc
taxonomic_signature:
  enriched:
    - taxon: '[[escherichia-coli]]'
      role: MR-validated causal association (OR=1.004); LPS production drives inflammatory signaling during luteal phase
    - taxon: Anaerotaenia
      role: Enriched in PMDD, correlated with symptom severity (r=0.292)
  depleted:
    - taxon: '[[blautia]]'
      role: MR-validated protective taxon (OR=0.994); acetate/propionate producer; loss reduces anti-inflammatory signaling
    - taxon: Parabacteroides
      role: Depleted; abundance inversely predicts symptom severity (R2=0.29 combined with Megasphaera)
    - taxon: Megasphaera
      role: Depleted; produces valerate and SCFAs supporting barrier integrity
    - taxon: Butyricicoccus
      role: Depleted; butyrate producer whose loss reduces colonocyte health
    - taxon: '[[faecalibacterium-prausnitzii]]'
      role: Presumed depleted based on shared signature with depression; butyrate producer
nutritional_immunity:
  elevated:
    - IL-8
    - TNF-alpha
    - copper-zinc-ratio
  depleted:
    - serotonin
    - GABA
    - allopregnanolone-sensitivity
    - butyrate
ecological_features:
  - estrogen-recirculation
  - beta-glucuronidase-activity
  - tryptophan-kynurenine-shunting
  - SCFA-depletion
  - GABA-A-receptor-modulation
virulence_enzymes:
  - beta-glucuronidase
  - indoleamine-2-3-dioxygenase
  - tryptophanase
confidence:
  metallomic: preliminary
  taxonomic: preliminary
  nutritional_immunity: preliminary
  ecological: preliminary
  virulence_enzymes: preliminary
associated_conditions:
  - condition: '[[depression]]'
    shared_metals:
      - magnesium-depleted
    shared_taxa:
      - faecalibacterium-depleted
      - blautia-depleted
    shared_ecological:
      - tryptophan-kynurenine-shunting
      - SCFA-depletion
    overlap_score: 0.55
  - condition: '[[endometriosis]]'
    shared_metals: []
    shared_taxa: []
    shared_ecological:
      - estrogen-recirculation
      - beta-glucuronidase-activity
    overlap_score: 0.35
  - condition: '[[anxiety]]'
    shared_metals:
      - magnesium-depleted
    shared_taxa:
      - blautia-depleted
      - faecalibacterium-depleted
    shared_ecological:
      - tryptophan-kynurenine-shunting
      - SCFA-depletion
    overlap_score: 0.45
cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives:
  - 1
  - 5
  - 7
stub: true
stub_reason: §2f auto-demotion 2026-04-19 — 0 sources, signature minimum 10
---

# Premenstrual Dysphoric Disorder — Microbiome Signature

## Overview

**Premenstrual Dysphoric Disorder (PMDD)** affects 3-8% of menstruating individuals, causing severe mood disturbances, irritability, anxiety, and physical symptoms during the luteal phase. PMDD is increasingly recognized as a neuroimmune disorder where gut microbiome composition modulates hormonal sensitivity, tryptophan metabolism, and GABAergic neurotransmission. The [[estrobolome]] — the collection of gut microbial genes capable of metabolizing estrogens — is directly relevant, as bacterial [[beta-glucuronidase]] activity drives estrogen recirculation that may amplify luteal-phase hormonal sensitivity.

This signature is at **preliminary** confidence across all layers due to the absence of dedicated source studies in the current knowledge base. The taxonomic and mechanistic data derive from the entity page synthesis of external literature (Takeda et al. 2022, Yao et al. 2024, Etyemez et al. 2025, Cheng et al. 2025) referenced in the PMDD entity but not yet ingested as source pages. Dedicated source ingestion is needed to elevate confidence.

## Metallomic Signature

**Confidence: preliminary**

- **Magnesium (depleted)**: Documented in premenstrual disorders broadly. Magnesium is an NMDA receptor antagonist and cofactor for serotonin synthesis — its depletion during the luteal phase amplifies excitatory neurotransmission and reduces serotonin availability.
- **Copper (elevated)**: Copper-zinc ratio fluctuations across the menstrual cycle may modulate PMDD symptom expression. Elevated copper promotes oxidative stress and displaces zinc in metalloenzymes.
- **Zinc (depleted)**: Essential for GABA-A receptor function. Zinc deficiency may compound the reduced allopregnanolone sensitivity that characterizes PMDD.

## Environmental Exposures

Hormonal fluctuations during the menstrual cycle are the primary environmental driver. The luteal phase produces progesterone (metabolized to allopregnanolone) and estrogen fluctuations that are amplified by estrobolome activity. Dietary fiber intake shows a protective association: women consuming >10 g/day of dietary fiber have reduced PMDD symptom severity (OR=0.483, Li et al. 2020), consistent with fiber's role in supporting the depleted SCFA-producing taxa.

## Nutritional Immunity Response

**Confidence: preliminary**

- **Elevated IL-8 and TNF-alpha**: Both elevated in PMDD during the luteal phase (Etyemez et al. 2025). These cytokines upregulate IDO, shunting tryptophan from serotonin toward kynurenine.
- **Elevated copper-zinc ratio**: Fluctuates across the menstrual cycle; elevated ratio correlates with neuropsychiatric symptom severity.
- **Depleted serotonin**: Created by dual mechanism — reduced Bacteroidetes/SCFA-producer support for enterochromaffin cell function AND IDO-mediated tryptophan diversion to kynurenine.
- **Depleted GABA**: Loss of GABA-producing taxa (Lactobacillus, Bifidobacterium presumed depleted) reduces inhibitory neurotransmitter availability.
- **Reduced allopregnanolone sensitivity**: Inflammatory cytokines from gut dysbiosis alter GABA-A receptor subunit expression, converting the normally anxiolytic progesterone metabolite signal into an insufficient or paradoxically anxiogenic one.

## Taxonomic Analysis

**Confidence: preliminary**

### Enriched Taxa

**Escherichia/Shigella** has MR-validated causal association with PMDD (OR=1.004, Yao et al. 2024). LPS production from these organisms drives the inflammatory signaling that upregulates IDO and disrupts GABA-A receptor sensitivity during the luteal phase.

**Anaerotaenia** is enriched in PMDD and correlated with symptom severity (r=0.292, Takeda et al. 2022), though its functional significance remains under investigation.

### Depleted Taxa

**Bacteroidetes** (phylum-level) depletion correlates with symptom severity (P=0.015, Takeda et al. 2022), suggesting a dose-response relationship between microbial diversity loss and mood disruption.

**[[blautia]]** is MR-validated as protective (OR=0.994, Yao et al. 2024), producing acetate and propionate that support anti-inflammatory signaling.

**Parabacteroides** and **Megasphaera** are depleted, with their combined abundance inversely predicting symptom severity (R2=0.29, Takeda et al. 2022). Megasphaera produces valerate and other SCFAs supporting barrier integrity.

**Butyricicoccus** depletion reduces butyrate production and colonocyte health.

## Virulence Enzymes and Features

**Confidence: preliminary**

- **[[beta-glucuronidase]]**: The key estrobolome enzyme. Bacterial beta-glucuronidase deconjugates estrogens in the gut, increasing their reabsorption into systemic circulation. Dysbiotic communities with altered beta-glucuronidase activity may amplify estrogen fluctuations during the luteal phase, exacerbating PMDD's hallmark hormonal sensitivity.
- **Indoleamine 2,3-dioxygenase (IDO)**: Upregulated by IL-8 and TNF-alpha during the luteal phase (Cheng et al. 2025). Shunts tryptophan from serotonin toward kynurenine, creating both serotonin deficit and neurotoxic quinolinic acid excess.
- **Tryptophanase**: Microbial enzyme that diverts tryptophan. Dysbiotic communities produce less indole (an AhR ligand that suppresses IDO), permitting greater tryptophan diversion toward kynurenine.

## Ecological State

**Confidence: preliminary**

The PMDD gut ecosystem involves a cyclical interaction between hormonal fluctuations and microbial activity:

1. **Estrogen recirculation** — Bacterial beta-glucuronidase deconjugates estrogens, driving reabsorption that amplifies luteal-phase hormonal sensitivity. The [[estrobolome]] composition determines the magnitude of this amplification.
2. **Tryptophan-kynurenine shunting** — Luteal-phase inflammation (IL-8, TNF-alpha) activates IDO, diverting tryptophan from serotonin toward neurotoxic kynurenine metabolites. This creates the serotonin deficit that SSRIs partially address.
3. **SCFA depletion** — Bacteroidetes, Parabacteroides, and Megasphaera depletion reduces SCFA production, compromising barrier integrity and removing anti-inflammatory metabolites.
4. **GABA-A receptor modulation** — Inflammatory cytokines from gut dysbiosis alter GABA-A receptor subunit expression, reducing sensitivity to allopregnanolone. This converts progesterone's normally calming metabolite into an insufficient signal.
5. **Dietary fiber mediates protection** — The OR=0.483 for high fiber intake (>10 g/day) is consistent with fiber supporting the depleted SCFA-producing taxa.

## Associated Conditions

### [[depression]] — Overlap Score: 0.55

Shared tryptophan-kynurenine pathway dysfunction, Blautia and Faecalibacterium depletion, SCFA deficit, and magnesium depletion. PMDD involves the same serotonin-deficit pathway that characterizes depression, with the additional hormonal cycling dimension.

### [[anxiety]] — Overlap Score: 0.45

Shared magnesium depletion, Blautia/Faecalibacterium depletion, and tryptophan-kynurenine shunting. Anxiety is a core symptom of PMDD during the luteal phase.

### [[endometriosis]] — Overlap Score: 0.35

Shared estrogen-dependent mechanisms and estrobolome involvement. Both conditions involve estrogen recirculation via bacterial beta-glucuronidase, though the clinical manifestations differ (mood vs. tissue growth). The estrobolome is the mechanistic bridge.

## Open Questions

1. Does estrobolome composition predict PMDD severity independently of hormonal levels?
2. Can targeted probiotic supplementation (Parabacteroides, Blautia) reduce PMDD symptoms in a controlled trial?
3. What is the causal direction: does luteal-phase inflammation drive dysbiosis, or does pre-existing dysbiosis amplify luteal-phase inflammation?
4. Is the IDO-mediated tryptophan shunt a therapeutic target distinct from SSRIs — could IDO inhibitors or AhR agonists (indole-3-carbinol) address the upstream mechanism?
5. Does beta-glucuronidase activity vary across the menstrual cycle, and does this variation correlate with symptom timing?

## Karen's Brain Primitives Active

- **Primitive 1 (Metals as Selective Pressures)**: Copper-zinc ratio fluctuations across the menstrual cycle may selectively favor copper-tolerant taxa while disadvantaging zinc-dependent commensals, creating a cyclical dysbiotic pressure.
- **Primitive 5 (Two-Sided Ecological Engineering)**: PMDD intervention requires both restoring depleted SCFA producers (Parabacteroides, Megasphaera, Blautia) and modulating the estrobolome to reduce excessive estrogen recirculation.
- **Primitive 7 (Estrobolome and Hormone Recirculation)**: The defining primitive for PMDD. Bacterial beta-glucuronidase activity determines the magnitude of estrogen recirculation, amplifying hormonal sensitivity that is the hallmark of PMDD. This connects gut microbiome composition directly to the hormonal cyclicity of symptoms.
