---
title: "Premenstrual Dysphoric Disorder — Microbiome Signature"
type: signature
created: 2026-04-15
updated: 2026-04-15
last_substantive_update: 2026-04-15
sources: []
source_count: 0
tags: [pmdd, premenstrual, estrobolome, neuroinflammation, gut-hormone-axis]
platform: both
cureva_status: in-progress
validated_interventions: []
stops: []

# Confidence per layer
confidence:
  metallomic: preliminary
  taxonomic: preliminary
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary

# Cross-condition pattern detection
associated_conditions:
  - condition: "[[depression]]"
    shared_metals: [magnesium]
    shared_taxa: [blautia, escherichia-coli]
    shared_ecological: [tryptophan-kynurenine-shunting, neuroinflammation, SCFA-depletion]
    overlap_score: 0.48
  - condition: "[[endometriosis]]"
    shared_metals: []
    shared_taxa: [escherichia-coli]
    shared_ecological: [estrobolome-dysfunction, beta-glucuronidase-activity]
    overlap_score: 0.35

karen_brain_primitives: [5, 7]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: []
  depleted: [magnesium]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[anaerotaenia]]"
      role: "Enriched in PMDD — functional significance under investigation"
    - taxon: "[[escherichia-coli]]"
      role: "MR-validated causal association — LPS production drives luteal-phase inflammatory signaling"
  depleted:
    - taxon: "[[butyricicoccus]]"
      role: "Butyrate producer — loss reduces colonocyte health and anti-inflammatory signaling"
    - taxon: "[[megasphaera]]"
      role: "Valerate and SCFA producer — abundance inversely predicts symptom severity"
    - taxon: "[[parabacteroides]]"
      role: "Depleted — inversely correlates with PMDD symptom severity; candidate biomarker"
    - taxon: "[[blautia]]"
      role: "MR-validated protective taxon — acetate/propionate producer supporting anti-inflammatory signaling"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [IL-8, TNF-alpha, pro-inflammatory-cytokines]
  depleted: [magnesium]

# Layer 4: Ecological features
ecological_features: [tryptophan-kynurenine-shunting, estrobolome-dysfunction, GABA-A-receptor-modulation, luteal-phase-inflammation, SCFA-depletion, beta-glucuronidase-dysregulation]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [beta-glucuronidase, tryptophanase, IDO-upregulation, LPS-biosynthesis]

---

## Overview

**Premenstrual Dysphoric Disorder (PMDD)** affects 3-8% of menstruating individuals with severe luteal-phase mood disturbance, irritability, and anxiety. The microbiome signature reveals PMDD as a neuroimmune disorder at the intersection of the gut-hormone axis: dysbiotic communities modulate estrogen recirculation via beta-glucuronidase, shunt tryptophan toward kynurenine via IDO upregulation, and alter GABA-A receptor sensitivity to progesterone metabolites through inflammatory cytokine signaling.

This is an early-stage signature with moderate confidence in the ecological model but preliminary evidence for metallomic and taxonomic layers. The Bacteroidetes depletion correlating with symptom severity (P = 0.015) and MR-validated taxa (Escherichia/Shigella causal, Blautia protective) provide the strongest anchors.

## Metallomic Signature

**Confidence: Preliminary**

Direct metallomic data for PMDD is limited. Magnesium depletion is the best-documented association, relevant through its role as an NMDA receptor antagonist (calming effect), cofactor for serotonin synthesis, and HPA axis modulator. Copper-zinc ratio fluctuations across the menstrual cycle may modulate symptom expression, but this remains speculative.

## Taxonomic Analysis

**Confidence: Preliminary** (limited cohort studies + single MR dataset)

The taxonomic signature centers on **Bacteroidetes phylum-level depletion** correlating with symptom severity (P = 0.015). Within this phylum:

- **Parabacteroides** depletion inversely predicts severity -- the stronger the depletion, the worse the symptoms. This dose-response relationship makes it a candidate biomarker.
- **Megasphaera** depletion reduces valerate production, a SCFA that supports barrier integrity and immune tolerance.
- **Blautia** is MR-validated as protective -- its loss reduces acetate and propionate, impairing anti-inflammatory signaling.

Among enriched taxa, **Escherichia/Shigella** carries MR-validated causal significance. LPS from these gram-negative organisms drives the luteal-phase inflammatory cascade that amplifies mood symptoms.

## Ecological State

**Confidence: Moderate**

The PMDD ecosystem operates through three interconnected mechanisms:

### 1. Tryptophan-Kynurenine Shunting
During the luteal phase, elevated IL-8 and TNF-alpha upregulate **indoleamine 2,3-dioxygenase (IDO)**, diverting tryptophan from serotonin synthesis toward the kynurenine pathway. This produces:
- Reduced serotonin availability (explaining partial SSRI response)
- Elevated quinolinic acid (NMDA agonist, neurotoxic)
- Elevated 3-hydroxykynurenine (oxidative stress)

Dysbiotic communities amplify this shunt by producing less indole (an AhR ligand that suppresses IDO).

### 2. Estrobolome Dysfunction
Bacterial **beta-glucuronidase** deconjugates estrogens in the gut, increasing reabsorption into systemic circulation. Altered beta-glucuronidase activity in dysbiotic communities may amplify estrogen fluctuations during the luteal phase, exacerbating the hormonal sensitivity that defines PMDD (Primitive 7: Estrobolome and Hormone Recirculation).

### 3. GABA-A Receptor Modulation
Inflammatory cytokines from gut dysbiosis alter **GABA-A receptor subunit expression**, reducing sensitivity to allopregnanolone -- the progesterone metabolite that normally produces anxiolytic effects during the luteal phase. This converts a calming neurosteroid signal into an insufficient or paradoxically anxiogenic one.

## Dietary Factors

Dietary fiber intake >10 g/day shows protective association, consistent with the role of fiber in supporting depleted SCFA-producing taxa (Bacteroidetes, Parabacteroides, Megasphaera).

## Validated Interventions

No interventions have been validated through full triangle evidence for PMDD specifically. Promising directions include:

- **Targeted probiotics** (Parabacteroides, Blautia) -- rationale from depletion data and MR evidence
- **Dietary fiber supplementation** -- observational protective association
- **Magnesium supplementation** -- NMDA antagonism and serotonin cofactor role
- **AhR ligands** (indole-producing probiotics) -- to suppress IDO-mediated tryptophan shunting

## STOPs

No condition-specific STOPs identified. However, interventions that further disrupt the estrobolome (broad-spectrum antibiotics during luteal phase) should be avoided as they may worsen beta-glucuronidase dysregulation.

## Open Questions

1. Does estrobolome composition predict PMDD severity independently of hormonal levels?
2. Can Parabacteroides/Blautia supplementation reduce PMDD symptoms in a randomized trial?
3. What is the causal direction: does luteal-phase inflammation drive dysbiosis, or does pre-existing dysbiosis amplify luteal-phase symptoms?
4. Is the IDO-mediated tryptophan shunt a viable therapeutic target distinct from SSRIs?
5. Do copper-zinc ratio fluctuations across the cycle correlate with symptom timing?

## Knowledge Primitives Applied

- **Primitive 5 (Two-Sided Ecological Engineering)**: Must both suppress Escherichia/Shigella-driven inflammation AND restore Parabacteroides/Blautia/Megasphaera SCFA production
- **Primitive 7 (Estrobolome and Hormone Recirculation)**: Beta-glucuronidase activity modulates estrogen recirculation, potentially amplifying luteal-phase hormonal sensitivity that defines PMDD
