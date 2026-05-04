---
title: "Irritable Bowel Syndrome — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - borghini-2020-endometriosis-nickel-ibs
  - lombardi-2020-snas-probiotics-dysbiosis
  - rizzi-2017-ibs-nickel-diet
  - giambo-2021-toxic-metal-exposure-gut-microbiota-review
  - khan-2020-environmental-exposures-autoimmune-gut-microbiome
  - ghosh-2023-heavy-metals-gut-barrier-integrity
  - zhu-2024-toxic-essential-metals-gut-microbiota
source_count: 7
tags: [functional-GI, nickel, SNAS, visceral-hypersensitivity, mast-cells, gut-barrier, FODMAP]

metallomic_signature:
  elevated: [nickel]
  depleted: [zinc]

taxonomic_signature:
  enriched:
    - taxon: "[[ruminococcus]]"
      role: "Firmicutes genus — enriched in IBS; associated with altered fermentation patterns"
    - taxon: "[[dorea]]"
      role: "Lachnospiraceae member — enriched in IBS; associated with gas production and bloating"
    - taxon: "[[methanobrevibacter-smithii]]"
      role: "Methanogenic archaeon — enriched in IBS-C; methane slows colonic transit"
    - taxon: "[[escherichia-coli]]"
      role: "Enriched in SIBO-associated IBS; may expand in nickel-driven dysbiosis"
  depleted:
    - taxon: "[[lactobacillus]]"
      role: "Protective commensal — depleted in IBS; reduced barrier support and SCFA production"
    - taxon: "[[bifidobacterium]]"
      role: "SCFA producer — depleted in IBS; B. infantis 35624 has specific evidence for IBS symptom relief"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer — depleted in IBS; anti-inflammatory effects lost"

nutritional_immunity:
  elevated: [mast-cell-mediators, histamine, tryptase, serotonin]
  depleted: [zinc-dependent-defensins]

ecological_features: [nickel-allergic-contact-mucositis, mast-cell-nerve-axis, SIBO, visceral-hypersensitivity, fermentative-dysbiosis, barrier-dysfunction]

virulence_enzymes: [TLR4-nickel-activation, mast-cell-degranulation-mediators]

confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[endometriosis]]"
    shared_metals: [nickel, iron]
    shared_taxa: [escherichia-coli, lachnospiraceae, ruminococcus]
    shared_ecological: [nickel-sensitivity, estrogen-recirculation, mast-cell-activation]
    overlap_score: 0.55
  - condition: "[[inflammatory-bowel-disease]]"
    shared_metals: [iron, nickel]
    shared_taxa: [escherichia-coli, faecalibacterium-depleted]
    shared_ecological: [barrier-dysfunction, SCFA-depletion]
    overlap_score: 0.38
  - condition: "[[ulcerative-colitis]]"
    shared_metals: [iron, nickel]
    shared_taxa: [faecalibacterium-depleted, escherichia-coli]
    shared_ecological: [barrier-dysfunction, SCFA-depletion]
    overlap_score: 0.35
  - condition: "[[celiac-disease]]"
    shared_metals: [iron, zinc]
    shared_taxa: [bifidobacterium-depleted, lactobacillus-depleted]
    shared_ecological: [barrier-dysfunction]
    overlap_score: 0.32

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 3, 4, 5]
---

# Irritable Bowel Syndrome — Microbiome Signature

## Overview

Irritable bowel syndrome (IBS) is a functional gastrointestinal disorder affecting 10-15% of the global population, characterized by chronic abdominal pain, bloating, and altered bowel habits without identifiable structural pathology. The IBS signature is unique in this wiki because nickel is the dominant metallomic driver -- not through toxicity but through allergic contact mucositis (ACM). Nickel patch test positivity ranges from 30-65% in IBS cohorts, and a subset of patients diagnosed with IBS actually have systemic nickel allergy syndrome (SNAS) that resolves with a low-nickel diet. This reframes a significant portion of "functional" GI disease as an undiagnosed metal hypersensitivity.

## Metallomic Signature

### Nickel -- The Central Metal

Nickel is the defining metal in the IBS signature. Unlike other disease signatures where metals act as toxicants or cofactors, in IBS nickel acts as an allergen triggering type IV hypersensitivity in the intestinal mucosa.

- Nickel ACM prevalence: 30-65% of IBS patients in European studies test positive for nickel sensitization [[rizzi-2017-ibs-nickel-diet]]
- SNAS: Systemic nickel allergy syndrome produces GI symptoms (bloating, pain, diarrhea, nausea) identical to IBS, triggered by dietary nickel in legumes, whole grains, chocolate, nuts, and canned foods
- 90.3% positivity in endometriosis patients with GI symptoms tested for Ni ACM via oral mucosa patch test [[borghini-2020-endometriosis-nickel-ibs]]
- Low-nickel diet response: Dramatic improvement in all GI, extra-intestinal, and even gynecological symptoms in nickel-sensitized patients [[borghini-2020-endometriosis-nickel-ibs]]
- Nickel exposure in occupational workers increases Escherichia-Shigella and decreases Lactobacillus, Lachnospiraceae, Blautia [[zhu-2024-toxic-essential-metals-gut-microbiota]]

### Zinc Depletion

Zinc supplementation restores barrier function and supports antimicrobial peptide (defensin) production. Zinc deficiency impairs tight junction integrity (ZO-1, occludin expression) and weakens mucosal defense, compounding the nickel-driven barrier dysfunction.

Confidence: moderate -- Nickel-IBS connection is supported by multiple European studies with consistent findings, but most are observational with moderate sample sizes. Zinc's role is inferred from barrier function studies rather than IBS-specific metallomic profiling.

## Environmental Exposures

- Dietary nickel is the primary trigger for SNAS symptoms. High-nickel foods overlap significantly with high-FODMAP foods: legumes, whole wheat, onions, garlic, and nuts are high in both FODMAP compounds and nickel [[rizzi-2017-ibs-nickel-diet]]
- The FODMAP-nickel overlap means clinical response to a low-FODMAP diet may partly reflect nickel avoidance. This is a critical reframing: patients who respond to low-FODMAP should be evaluated for nickel sensitization, as a targeted low-nickel diet may be less restrictive.
- Stainless steel cookware, canned foods, and initial tap water (first draw) contribute to dietary nickel load
- Cadmium from tobacco compounds metal-driven dysbiosis in IBS patients who smoke [[giambo-2021-toxic-metal-exposure-gut-microbiota-review]]
- Heavy metals disrupt tight junction proteins (claudin, occludin, ZO-1) via multiple mechanisms [[ghosh-2023-heavy-metals-gut-barrier-integrity]], compounding the barrier dysfunction already present in IBS

## Nutritional Immunity Response

The IBS nutritional immunity profile is distinctive because it is driven by mast cell activation rather than classical metal-sequestering responses:

- Mast cell mediators (histamine, tryptase, serotonin) are elevated in the intestinal mucosa. Mast cell proximity to nerve endings correlates with pain severity -- the "mast cell-nerve axis"
- Serotonin dysregulation -- ~95% of body serotonin is in the gut; altered 5-HT signaling underlies both motility and pain abnormalities in IBS
- Zinc-dependent defensins are reduced due to zinc depletion, weakening antimicrobial peptide production at the mucosal surface
- Calprotectin is characteristically normal in IBS (<50 mcg/g), distinguishing it from inflammatory bowel disease where calprotectin is markedly elevated

Confidence: preliminary -- Mast cell data comes from histological studies and indirect biomarkers rather than systematic nutritional immunity profiling. Calprotectin's role as a negative distinguishing marker is well-established.

## Taxonomic Analysis

### Enriched Taxa

- [[ruminococcus]] and [[dorea]] -- Enriched in IBS; associated with altered fermentation patterns and gas production contributing to bloating [[rizzi-2017-ibs-nickel-diet]].
- [[methanobrevibacter-smithii]] -- Enriched specifically in constipation-predominant IBS (IBS-C). Methane production slows colonic transit, directly contributing to the constipation phenotype.
- [[escherichia-coli]] -- May expand in the setting of nickel-driven dysbiosis and SIBO. Nickel exposure increases Escherichia-Shigella abundance [[zhu-2024-toxic-essential-metals-gut-microbiota]].
- Firmicutes/Bacteroidetes ratio is often increased in IBS.

### Depleted Taxa

- [[lactobacillus]] -- Depleted in IBS. Nickel exposure specifically reduces Lactobacillus abundance [[zhu-2024-toxic-essential-metals-gut-microbiota]]. L. rhamnosus GG has the best evidence for IBS symptom relief.
- [[bifidobacterium]] -- Depleted in IBS. B. infantis 35624 has specific clinical evidence for IBS symptom improvement.
- [[faecalibacterium-prausnitzii]] -- Consistently depleted, though less dramatically than in IBD. Its absence reduces anti-inflammatory butyrate production.

### Small Intestinal Bacterial Overgrowth (SIBO)

SIBO overlaps significantly with IBS -- lactulose breath test positivity ranges from 30-85% depending on criteria. SIBO represents a spatial dysbiosis (bacteria in the wrong location) rather than purely compositional dysbiosis.

Confidence: moderate -- IBS microbiome studies show consistent patterns but with less dramatic effect sizes than IBD. The nickel-microbiome connection adds a metal-driven mechanism to explain the taxonomic shifts. SIBO prevalence varies widely by diagnostic criteria.

## Virulence Enzymes and Features

- TLR4 activation by nickel -- Nickel activates TLR4 on mucosal immune cells, triggering innate immune responses and mast cell degranulation in sensitized individuals. This is a direct metal-immune interface that does not require microbial involvement [[borghini-2020-endometriosis-nickel-ibs]].
- Mast cell degranulation mediators -- Histamine, tryptase, and serotonin released by nickel-activated mast cells sensitize afferent nerve endings, driving visceral hypersensitivity.

Confidence: preliminary -- TLR4-nickel interaction is documented in immunology literature but not yet linked to specific microbial virulence enzyme pathways. Classical metal-dependent bacterial virulence enzymes have not been mapped in the IBS context.

## Ecological State

The IBS gut ecosystem differs fundamentally from IBD in mechanism while sharing some downstream features:

1. Nickel allergic contact mucositis (ACM) -- In sensitized individuals (30-65% of IBS patients), dietary nickel triggers type IV hypersensitivity in the intestinal mucosa. Mucosal biopsies show increased eosinophils and mast cells at sites of nickel contact [[rizzi-2017-ibs-nickel-diet]]. This allergic inflammation is the primary ecological driver, not infection or autoimmunity.

2. Fermentative dysbiosis -- 64.71% of SNAS patients have fermentative dysbiosis (elevated urinary indican, indicating small intestinal disruption), 3.92% putrefactive, and 31.37% mixed [[lombardi-2020-snas-probiotics-dysbiosis]]. This suggests the small bowel microbiota is primarily perturbed.

3. Mast cell-nerve axis -- Mast cells in proximity to enteric nerve endings create a direct neuro-immune interface. Nickel-triggered mast cell activation drives visceral hypersensitivity, the hallmark of IBS. Metal-induced inflammation lowers pain thresholds via peripheral and central sensitization.

4. Barrier dysfunction -- IBS-D patients show increased lactulose/mannitol ratio, reduced ZO-1 and occludin expression, and elevated serum LPS and LBP indicating bacterial translocation. Nickel exacerbates barrier dysfunction via TLR4 activation in sensitized individuals.

5. Methane-mediated transit slowing -- In IBS-C, Methanobrevibacter smithii produces methane that directly slows colonic transit, creating the constipation phenotype. This is a microbe-driven motility alteration rather than a neural or immune mechanism.

6. Diet + probiotics synergy -- Low-nickel diet combined with targeted probiotics achieves eubiosis in 72.73% of SNAS patients vs. 41.38% with diet alone (p=0.026), but benefits are maintained only 4-6 weeks after treatment cessation [[lombardi-2020-snas-probiotics-dysbiosis]].

Confidence: moderate -- Nickel ACM is well-documented in European studies; fermentative dysbiosis patterns from one study; mast cell-nerve axis from histological and physiological studies; SIBO data variable by diagnostic criteria.

## Associated Conditions

- [[endometriosis]] (overlap score: 0.55) -- Highest overlap. Shared nickel sensitivity (90.3% Ni ACM positivity in endometriosis patients with GI symptoms), shared estrogen connections via [[estrobolome]], and shared mast cell activation. Low-nickel diet improves both GI and gynecological symptoms in endometriosis [[borghini-2020-endometriosis-nickel-ibs]].
- [[inflammatory-bowel-disease]] (overlap score: 0.38) -- Key differential diagnosis. Shared barrier dysfunction and SCFA producer depletion, but calprotectin distinguishes the two (<50 in IBS vs. >250 in active IBD). Shared iron and nickel associations.
- [[ulcerative-colitis]] (overlap score: 0.35) -- Shared F. prausnitzii depletion and E. coli enrichment, but UC has active mucosal ulceration, transmural inflammation, and markedly elevated calprotectin absent in IBS.
- [[celiac-disease]] (overlap score: 0.32) -- Shared barrier dysfunction and depletion of Bifidobacterium and Lactobacillus. Celiac must be excluded before IBS diagnosis.

## Open Questions

1. Routine nickel patch testing -- Should nickel sensitization screening be incorporated into standard IBS diagnostic workup? Lombardi et al. (2020) proposed this, and the data support it for European populations. What is the prevalence in non-European cohorts?
2. FODMAP vs. nickel -- How much of the low-FODMAP diet response in IBS is actually nickel avoidance? A head-to-head trial of low-FODMAP vs. low-nickel vs. combined elimination is needed.
3. IBS metallomic profiling -- Beyond nickel, what does comprehensive metallomic analysis reveal? Zinc, iron, and other metals have not been systematically measured in IBS cohorts.
4. Probiotic durability -- Benefits of low-nickel diet + probiotics last only 4-6 weeks post-treatment [[lombardi-2020-snas-probiotics-dysbiosis]]. What maintains the dysbiotic state, and can longer interventions achieve durable remission?
5. Mast cell-metal interaction -- Beyond nickel, do other dietary metals (chromium, cobalt) trigger mast cell activation in sensitized individuals?
6. IBS-C methane axis -- Can targeted anti-methanogenic interventions (lovastatin, statins) reduce Methanobrevibacter and improve IBS-C symptoms?
7. SIBO-nickel connection -- Does nickel exposure promote small intestinal bacterial overgrowth, or does SIBO alter nickel handling?

## Karen's Brain Primitives Active

- Primitive 1: Metals as Selective Pressures -- Dietary nickel selects for nickel-tolerant taxa (Escherichia-Shigella) while suppressing nickel-sensitive taxa (Lactobacillus, Lachnospiraceae, Blautia) [[zhu-2024-toxic-essential-metals-gut-microbiota]]. This metal-driven microbial selection produces the IBS dysbiosis pattern in sensitized individuals.
- Primitive 3: Mis-metallation and Toxic Metal Entry -- Nickel does not act through classical mis-metallation in IBS. Instead, it triggers TLR4-mediated innate immune activation and type IV hypersensitivity -- a unique metal-immune pathway distinct from the toxicity mechanisms in other signatures.
- Primitive 4: Microbial Metal Dependencies as Achilles' Heels -- Nickel-dependent microbial enzymes (urease, hydrogenase) may enable pathobiont expansion in the nickel-rich gut environment of SNAS patients. Restricting dietary nickel simultaneously reduces allergic inflammation and deprives nickel-dependent pathobionts.
- Primitive 5: Two-Sided Ecological Engineering -- Low-nickel diet + targeted probiotics achieves eubiosis in 72.73% vs. 41.38% with diet alone [[lombardi-2020-snas-probiotics-dysbiosis]]. The intervention suppresses the allergic trigger (nickel) while restoring beneficial taxa (Lactobacillus, Bifidobacterium).
