---
title: "Multiple Sclerosis — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - kouchaki-2017-clinical-metabolic-probiotic-ms
  - tamtaji-2017-probiotic-gene-expression-ms
  - tankou-2018-probiotic-microbiome-ms
  - dargahi-2020-streptococcus-thermophilus-ms
  - libbey-2018-diet-microbiota-eae
  - gunal-2018-heavy-metals-sialic-acid-ms
  - gargano-2022-mait-cells-gut-yeasts-ms-brain
  - bhargava-2020-bile-acid-metabolism-ms-neuroinflammation
  - becker-2021-scfas-intestinal-inflammation-ms-female-susceptibility
  - trend-2021-serum-scfas-immune-cells-biomarkers-ms
  - swidsinski-2017-ketogenic-diet-colonic-microbiome-ms
  - montgomery-2024-microbiota-signatures-ms-progression
  - thirion-2023-gut-microbiota-ms-disease-activity
  - troci-2022-b-cell-depletion-reverses-dysbiosis-ms
  - boussamet-2024-oral-microbiota-metabolite-signature-ms
  - otaegui-chivite-2025-mycobiota-ms-progression
  - ghosh-2023-heavy-metals-gut-barrier-integrity
  - zhu-2024-toxic-essential-metals-gut-microbiota
  - giambo-2021-toxic-metal-exposure-gut-microbiota-review
source_count: 19
tags: [autoimmune, neurological, demyelinating, gut-brain-axis, mycobiome, MAIT-cells]

metallomic_signature:
  elevated: [nickel, cadmium, lead, aluminum, arsenic, manganese, copper]
  depleted: [iron]

taxonomic_signature:
  enriched:
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Mucin degrader — consistently enriched in MS; may thin mucus layer and increase gut permeability"
    - taxon: "[[methanobrevibacter]]"
      role: "Methanogenic archaeon — expanded in MS; methane production alters gut motility and microbial ecology"
    - taxon: "[[candida-albicans]]"
      role: "Fungal pathobiont — elevated fecal abundance in MS; drives MAIT cell hyperactivation producing IL-17 and GM-CSF"
    - taxon: "[[saccharomyces-cerevisiae]]"
      role: "Enriched in MS mycobiota; activates MAIT cells via IL-23-dependent pathway"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Mucin degrader — positively correlated with EAE severity"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer — consistently depleted in MS; anti-inflammatory IL-10 inducer"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family — 14 of 21 differentially abundant species in Clostridia clades XIVa/IV reduced in MS"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer — depleted in MS; restored by ketogenic diet intervention"
    - taxon: "[[prevotella]]"
      role: "Depleted in MS; associated with anti-inflammatory phenotype in healthy gut"
    - taxon: "[[lactobacillus]]"
      role: "Inversely correlated with EAE severity (r = -0.67); L. paracasei treatment reduced EAE incidence from 100% to 69%"

nutritional_immunity:
  elevated: [calprotectin, sialic-acid]
  depleted: [iron]

ecological_features: [mycobiome-expansion, MAIT-cell-hyperactivation, SCFA-depletion, Th1-Th17-dominance, glycolysis-over-OXPHOS, bile-acid-depletion, mucin-degradation]

virulence_enzymes: [beta-glucuronidase, fungal-riboflavin-biosynthesis-antigens]

confidence:
  metallomic: preliminary
  taxonomic: high
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[depression]]"
    shared_metals: [cadmium, lead]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, candida-albicans]
    shared_ecological: [SCFA-depletion, Th1-dominance]
    overlap_score: 0.45
  - condition: "[[parkinsons-disease]]"
    shared_metals: [iron, lead, nickel]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, roseburia, akkermansia-muciniphila]
    shared_ecological: [SCFA-depletion, neuroinflammation]
    overlap_score: 0.52
  - condition: "[[inflammatory-bowel-disease]]"
    shared_metals: [iron, nickel]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, ruminococcus, roseburia, escherichia-coli]
    shared_ecological: [SCFA-depletion, Th17-dominance]
    overlap_score: 0.48
  - condition: "[[hashimotos-thyroiditis]]"
    shared_metals: [nickel, cadmium, lead]
    shared_taxa: [akkermansia-muciniphila, faecalibacterium-prausnitzii, lachnospiraceae, bifidobacterium]
    shared_ecological: [SCFA-depletion, Th1-Th17-dominance]
    overlap_score: 0.42

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 4, 5, 6, 9]
---

# Multiple Sclerosis — Microbiome Signature

## Overview

Multiple sclerosis (MS) is a chronic autoimmune demyelinating disease of the central nervous system affecting approximately 2.8 million people globally. The disease is driven by autoreactive T cells attacking myelin, with strong genetic susceptibility (HLA-DRB1*15:01) and environmental triggers including EBV infection, vitamin D deficiency, and smoking. The microbiome signature of MS is distinctive: the metallomic layer is notably thin compared to other diseases in this wiki, but the **taxonomic and ecological layers are among the strongest**, with consistent dysbiosis documented across populations and probiotic interventions producing clinically meaningful outcomes in RCTs. The mycobiome (fungal) component adds a unique dimension -- gut yeast expansion drives MAIT cell hyperactivation that directly infiltrates MS brain lesions.

## Metallomic Signature

The metallomic evidence for MS is **preliminary**, based primarily on a single Turkish case-control study (n=93). Urinary analysis of 52 MS patients vs. 41 controls found significantly elevated Ni (OR 1.47), Cd (OR 1.45), Al (OR 1.39), As (OR 1.39), and Pb (OR 1.32) as independent risk factors for MS [[gunal-2018-heavy-metals-sialic-acid-ms]]. Iron was significantly lower in MS patients (OR 0.52), consistent with impaired myelination and CNS iron sequestration.

The metal connections are largely indirect. Iron accumulates in deep gray matter structures in progressive MS (thalamus, caudate, putamen), but peripherally iron is depleted. TCA cycle enzymes require Fe, Mn, and other metals as cofactors, and the metabolic shift from oxidative phosphorylation to glycolysis observed in MS-associated T cells [[libbey-2018-diet-microbiota-eae]] involves metal-dependent enzyme pathways.

**Confidence: preliminary** -- No comprehensive metallomics profiling study of MS biofluids has been conducted. The single case-control study is small (n=93) and all patients were on interferon therapy.

## Environmental Exposures

- **Smoking** (Cd, Pb, Ni exposure) is an established MS risk factor, increasing risk approximately 1.5-fold
- **Urinary heavy metals** were collectively ~1.5x more prevalent in MS patients [[gunal-2018-heavy-metals-sialic-acid-ms]]
- **Dietary metals** shape gut microbiome composition (extensively documented for Cd, Pb, Ni, As in this wiki), but diet-metal-MS microbiome studies have not been conducted
- **Poor bowel habits** increased MS risk 4.76-fold and low vegetable consumption increased risk 6.56-fold [[gunal-2018-heavy-metals-sialic-acid-ms]], supporting the gut-brain axis pathway
- Heavy metals disrupt gut barrier integrity by downregulating tight junction proteins (claudin, occludin, ZO-1) [[ghosh-2023-heavy-metals-gut-barrier-integrity]], which could enable the bacterial translocation and immune activation seen in MS

## Nutritional Immunity Response

Evidence for classical nutritional immunity markers in MS is limited.

- **Calprotectin** is elevated in fecal samples of MS patients, indicating intestinal inflammation [[becker-2021-scfas-intestinal-inflammation-ms-female-susceptibility]]
- **Sialic acid** is significantly elevated in MS patients and binds toxic metals (Cd, Pb) with high affinity; its elevation may indicate ongoing metal toxicity [[gunal-2018-heavy-metals-sialic-acid-ms]]
- **Iron** is depleted peripherally (urine) while accumulating in CNS gray matter -- a compartmentalized pattern suggesting both systemic depletion and local sequestration

**Confidence: preliminary** -- Calprotectin and sialic acid data come from small studies; hepcidin, lactoferrin, lipocalin-2, and transferrin have not been systematically measured in MS.

## Taxonomic Analysis

The MS taxonomic signature is **well-characterized** across multiple populations and study designs.

### Enriched Taxa

- **[[akkermansia-muciniphila]]** -- Consistently enriched in MS across populations. Mucin degradation may thin the protective mucus layer, increasing gut permeability. Paradoxically, Akkermansia is protective in some other autoimmune contexts.
- **[[methanobrevibacter]]** -- Methanogenic archaeon expanded in MS. Methane production alters colonic motility and may contribute to constipation symptoms common in MS.
- **[[candida-albicans]]** and **[[saccharomyces-cerevisiae]]** -- Gut fungal abundance is elevated in MS. C. albicans was the most abundant cultivable fungus (388 MS isolates vs. 30 healthy donor isolates). These yeasts hyperactivate MAIT cells through IL-23, driving IL-17, GM-CSF, and TNF-alpha production [[gargano-2022-mait-cells-gut-yeasts-ms-brain]].
- **[[ruminococcus-gnavus]]** and **Turicibacter** -- Positively correlated with EAE severity [[libbey-2018-diet-microbiota-eae]].

### Depleted Taxa

- **[[faecalibacterium-prausnitzii]]** -- The most consistently depleted taxon. Reduced during active inflammation; restored by ketogenic diet [[swidsinski-2017-ketogenic-diet-colonic-microbiome-ms]]. Its absence correlates with disease activity [[thirion-2023-gut-microbiota-ms-disease-activity]].
- **[[lachnospiraceae]]** -- 14 of 21 differentially abundant species belong to Clostridia clades XIVa and IV, all reduced in MS. These are major SCFA producers whose loss explains the butyrate deficit.
- **[[roseburia]]** -- Butyrate producer depleted in MS; restored by ketogenic diet over 6 months [[swidsinski-2017-ketogenic-diet-colonic-microbiome-ms]].
- **[[prevotella]]** -- Depleted in MS; associated with a healthy, anti-inflammatory gut state.
- **[[lactobacillus]]** -- Inversely correlated with EAE severity (r = -0.67). L. paracasei treatment reduced EAE incidence from 15/15 to 9/13 (p<0.05) [[libbey-2018-diet-microbiota-eae]].

**Confidence: high** -- Multiple independent studies (case-control, meta-analysis, longitudinal, twin studies) confirm the MS dysbiosis pattern across populations.

## Virulence Enzymes and Features

The virulence enzyme layer is the **least characterized** in MS compared to other signatures in this wiki.

- **Fungal riboflavin biosynthesis antigens** -- MAIT cells recognize riboflavin (vitamin B2) biosynthesis intermediates presented by MR1. Gut yeasts (C. albicans, S. cerevisiae) produce these antigens and hyperactivate MAIT cells in MS patients [[gargano-2022-mait-cells-gut-yeasts-ms-brain]].
- **Beta-glucuronidase** -- Present in enriched taxa (Ruminococcus); involved in estrogen recirculation relevant to the female predominance of MS.

**Confidence: preliminary** -- Metal-dependent virulence enzymes (NiFe-hydrogenase, urease, metalloprotease) characteristic of other signatures have not been mapped in the MS context.

## Ecological State

The MS gut ecosystem shows several distinctive features:

1. **Mycobiome expansion** -- Fungal abundance and richness are elevated. 2,000 cultivable isolates were obtained from MS patients vs. 392 from healthy donors (24 species vs. fewer). This fungal overgrowth drives a unique MAIT cell-mediated neuroimmune pathway [[gargano-2022-mait-cells-gut-yeasts-ms-brain]].

2. **SCFA depletion** -- Fecal SCFAs and serum propionate/butyrate are lower in MS. Butyrate depletion removes the primary fuel for colonocytes and the primary inducer of regulatory T cells [[becker-2021-scfas-intestinal-inflammation-ms-female-susceptibility]] [[trend-2021-serum-scfas-immune-cells-biomarkers-ms]].

3. **Th1/Th17 dominance** -- The immune state is skewed toward pro-inflammatory Th1 and Th17 responses. Autoreactive T cells drive demyelination. Probiotic interventions shift this toward Th2/Treg dominance with clinical benefit (EDSS improvement of -0.3 vs. +0.1, p=0.001) [[kouchaki-2017-clinical-metabolic-probiotic-ms]].

4. **Metabolic shift** -- Disease-associated mice show a shift from oxidative phosphorylation to glycolysis in T cells. Protected mice have higher TCA cycle metabolites (citric acid, isocitric acid, malic acid, fumaric acid) [[libbey-2018-diet-microbiota-eae]].

5. **Bile acid depletion** -- Both primary and secondary bile acid metabolites are significantly reduced in MS. TUDCA supplementation ameliorates neuroinflammation through GPBAR1 receptor signaling [[bhargava-2020-bile-acid-metabolism-ms-neuroinflammation]].

6. **MAIT cell migration** -- MAIT cells activated by gut fungi migrate from blood to CNS. They are found in 53% of progressive MS brain lesions, producing CCL20 that recruits more inflammatory cells across the [[blood-brain-barrier]] [[gargano-2022-mait-cells-gut-yeasts-ms-brain]].

**Confidence: moderate** -- Multiple studies support SCFA depletion and Th1/Th17 dominance; mycobiome-MAIT pathway is novel with strong mechanistic data from one study; metabolic shift documented in animal model only.

## Associated Conditions

MS shares significant signature features with several other conditions in this wiki:

- **[[parkinsons-disease]]** (overlap score: 0.52) -- Shared iron dysregulation, lead/nickel exposure, and depletion of F. prausnitzii, Lachnospiraceae, and Roseburia. Both are neurodegenerative diseases with gut-brain axis disruption and SCFA depletion. Akkermansia is enriched in both.
- **[[inflammatory-bowel-disease]]** (overlap score: 0.48) -- Shared SCFA producer depletion, Th17 dominance, and iron/nickel associations. IBD patients have increased MS risk and vice versa. Both feature HLA-DRB1 genetic architecture.
- **[[depression]]** (overlap score: 0.45) -- Depression affects 30-50% of MS patients. Shared cadmium/lead associations, F. prausnitzii depletion, SCFA deficit, and gut-brain axis disruption. Probiotic trials showed significant BDI improvement alongside EDSS improvement (BDI -5.6 vs. -1.1, p<0.001) [[kouchaki-2017-clinical-metabolic-probiotic-ms]].
- **[[hashimotos-thyroiditis]]** (overlap score: 0.42) -- Shared autoimmune architecture, nickel/cadmium/lead metal associations, Akkermansia enrichment, SCFA producer depletion, and Th1/Th17 dominance.

## Open Questions

1. **MS metallomics profiling** -- What does a comprehensive multi-element analysis of MS biofluids reveal? The single Turkish study needs replication in larger, diverse cohorts.
2. **CNS iron compartmentalization** -- Is deep gray matter iron accumulation a cause of progression (via ferroptosis) or a consequence of neurodegeneration?
3. **Mycobiome-metal interactions** -- Do dietary metals select for the fungal species (C. albicans, S. cerevisiae) that drive MAIT cell hyperactivation?
4. **MAIT cell targeting** -- Can antifungal or probiotic interventions reduce MAIT cell activation and CNS infiltration?
5. **Probiotic strain optimization** -- Which specific strains produce the strongest Th1-to-Th2 shift? Can metal-binding probiotic strains simultaneously detoxify metals and modulate immunity?
6. **Metabolic-metallomic intersection** -- The glycolysis-to-OXPHOS shift in T cells involves metal-dependent enzymes. Can metal cofactor supplementation (Mn, Fe) shift T cell metabolism back toward OXPHOS?
7. **Oral microbiome** -- Oral dysbiosis may be more pronounced than gut dysbiosis as an MS disease trait [[boussamet-2024-oral-microbiota-metabolite-signature-ms]]. What is the metal-oral microbiome connection?

## Karen's Brain Primitives Active

- **Primitive 1: Metals as Selective Pressures** -- Elevated urinary Ni, Cd, Pb, As in MS patients [[gunal-2018-heavy-metals-sialic-acid-ms]] reshape the gut microbiome toward pro-inflammatory, SCFA-depleted communities. The mechanism is indirect but plausible.
- **Primitive 4: Microbial Metal Dependencies as Achilles' Heels** -- TCA cycle enzymes require Fe, Mn as cofactors; diet-driven changes in microbial metal availability alter metabolic output (SCFA vs. pro-inflammatory metabolites) [[libbey-2018-diet-microbiota-eae]].
- **Primitive 5: Two-Sided Ecological Engineering** -- Probiotic trials demonstrate both pathobiont suppression (reduced hs-CRP, IL-8, TNF-alpha) and beneficial function restoration (improved EDSS, depression scores, insulin sensitivity) [[kouchaki-2017-clinical-metabolic-probiotic-ms]].
- **Primitive 6: Interkingdom Relationships and Functional Shielding** -- The mycobiome-MAIT cell axis represents a novel interkingdom pathway: gut yeasts activate innate-like T cells that cross the BBB and infiltrate brain lesions [[gargano-2022-mait-cells-gut-yeasts-ms-brain]].
- **Primitive 9: Oxygen State as Ecological Determinant** -- The metabolic shift from OXPHOS to glycolysis in MS T cells [[libbey-2018-diet-microbiota-eae]] reflects altered oxygen metabolism. Restoring oxidative phosphorylation capacity may be therapeutic.
