---
title: "Schizophrenia — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [saha-2005-prevalence-schizophrenia-systematic-review, schultz-2007-schizophrenia-review-afp, comer-2020-inflamed-brain-schizophrenia-neuroinflammation, li-2024-alterations-gut-microbiota-schizophrenia-vote-counting, yuan-2021-gut-microbial-biomarkers-treatment-response-schizophrenia, safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis, ling-2025-gut-mycobiota-dysbiosis-immune-dysfunction-schizophrenia-metabolic-syndrome, ren-2025-gut-virome-schizophrenia-metagenomics, olde-loohuis-2018-blood-microbial-diversity-schizophrenia-transcriptome, ng-2019-probiotics-schizophrenia-symptoms-systematic-review, chrobak-2016-gut-microbiome-cns-schizophrenia-bipolar-depression, dinan-2014-genomics-schizophrenia-gut-microbiome, zhu-2020-metagenome-wide-gut-microbiome-schizophrenia, ermakov-2022-immune-system-abnormalities-schizophrenia, zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization, theleritis-2024-gut-dysbiosis-first-episode-psychosis-review, kamath-2025-gut-microbiome-mental-health-causation-correlation-review, krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]
source_count: 18
tags: [schizophrenia, neuropsychiatric, copper, zinc, iron, gut-brain-axis, neuroinflammation, dysbiosis, tryptophan-metabolism, multi-kingdom, virome, mycobiome]

metallomic_signature:
  elevated: [copper, iron, lead, cadmium, arsenic]
  depleted: [zinc]

taxonomic_signature:
  enriched:
    - taxon: "[[clostridia]]"
      role: "Causally increases SCZ risk (MR OR=1.16); SCFA production activates microglia and increases choline — a membrane dysfunction marker"
    - taxon: "[[betaproteobacteria]]"
      role: "Causally increases SCZ risk (MR OR=1.13); linked to cognitive impairment in SCZ patients"
    - taxon: "[[prevotellaceae]]"
      role: "Causally increases SCZ risk (MR OR=1.11); enriched in SCZ patients with violent behaviours"
    - taxon: "[[lactobacillus]]"
      role: "Consistently enriched in observational studies; positively associated with symptom severity in FEP"
    - taxon: "[[enterobacteriaceae]]"
      role: "Iron-dependent opportunistic family; LPS contributor to gut barrier disruption and bacterial translocation"
    - taxon: "[[candida-albicans]]"
      role: "Enriched in gut mycobiome; oral fungal dysbiosis correlates with elevated IL-6 and TNF-alpha"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Butyrate producer; depletion removes tonic anti-neuroinflammatory signal; loss impairs BBB stability via JAM-A/ZO-1"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer consistently depleted across SCZ cohorts; loss reduces HDAC inhibition and BDNF upregulation"
    - taxon: "[[coprococcus]]"
      role: "Butyrate producer depleted in SCZ; contributes to SCFA deficit and microglial activation"
    - taxon: "[[desulfovibrio]]"
      role: "Causally protective against SCZ (MR OR=0.88); lower abundance increases risk; not restorable by amisulpride"
    - taxon: "[[veillonellaceae]]"
      role: "Causally protective against SCZ (MR OR=0.93); depleted in patients with violent behaviours"
    - taxon: "[[lachnospiraceae]]"
      role: "Depleted in FEP; correlates with negative symptoms and poorer functioning"

nutritional_immunity:
  elevated: [ceruloplasmin, hepcidin, lipocalin-2, sCD14, zonulin, alpha-1-antitrypsin]
  depleted: [zinc-finger-proteins, glutathione]

ecological_features: [gut-barrier-disruption, tryptophan-kynurenine-shunting, microglial-activation, Th17-Treg-imbalance, multi-kingdom-dysbiosis, virome-dysbiosis]

virulence_enzymes: [indoleamine-2-3-dioxygenase, tryptophanase, LPS-biosynthesis]

confidence:
  metallomic: moderate
  taxonomic: high
  nutritional_immunity: high
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[depression]]"
    shared_metals: [copper, zinc]
    shared_taxa: [clostridium, escherichia-coli, lachnospiraceae, faecalibacterium-prausnitzii, roseburia]
    shared_ecological: [tryptophan-kynurenine-shunting, gut-barrier-disruption]
    overlap_score: 0.68
  - condition: "[[alzheimers-disease]]"
    shared_metals: [copper, iron]
    shared_taxa: [escherichia-coli, lachnospiraceae, enterobacteriaceae]
    shared_ecological: [microglial-activation, gut-barrier-disruption]
    overlap_score: 0.52
  - condition: "[[parkinsons-disease]]"
    shared_metals: [iron, lead]
    shared_taxa: [enterobacteriaceae, lachnospiraceae]
    shared_ecological: [microglial-activation, gut-barrier-disruption]
    overlap_score: 0.45
  - condition: "[[multiple-sclerosis]]"
    shared_metals: [lead, cadmium]
    shared_taxa: [lachnospiraceae, candida-albicans, streptococcus]
    shared_ecological: [Th17-Treg-imbalance, gut-barrier-disruption]
    overlap_score: 0.42
  - condition: "[[schizophrenia|bipolar-disorder]]"
    shared_metals: [copper, zinc, iron]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae]
    shared_ecological: [tryptophan-kynurenine-shunting, Th17-Treg-imbalance]
    overlap_score: 0.65

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 6, 9]
---

# Schizophrenia — Microbiome Signature

## Overview

Schizophrenia is a severe neuropsychiatric disorder affecting approximately 1% of the global population, characterized by positive symptoms (hallucinations, delusions), negative symptoms (anhedonia, social withdrawal), and cognitive deficits. This signature integrates an unusually deep evidence base: Mendelian randomization data establishing causal taxon directions, multi-kingdom (bacterial + fungal + viral) dysbiosis profiling, and a metallomic mis-metallation story at the NMDA receptor level. The gut-brain axis operates through at least four channels in schizophrenia: vagal afferent signaling, SCFA-mediated epigenetic regulation, tryptophan/kynurenine metabolite flux, and immune mediator translocation [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]].

## Metallomic Signature

**Confidence: moderate** (3-4 studies with consistent Cu/Zn findings; heavy metal burden data from related neurobehavioural studies)

The metallomic signature centers on **Cu/Zn ratio dysregulation**:

- **Copper elevated**: Serum Cu is consistently elevated across multiple SCZ cohorts; ceruloplasmin-bound Cu drives oxidative stress. The Cu/Zn ratio correlates with symptom severity [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]].
- **Zinc depleted**: Depressed serum Zn; zinc is an endogenous positive allosteric modulator of NMDA receptors. Cu displaces Zn from zinc-finger transcription factors and NMDA receptor subunits (NR2A/NR2B), producing functional zinc deficiency at the synapse — the [[mis-metallation]] substrate for NMDA hypofunction [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]].
- **Iron dysregulated**: Iron-catalyzed Fenton chemistry amplifies oxidative damage in dopaminergic circuits; siderophore-dependent taxa enriched in the iron-replete gut environment.
- **Lead and cadmium burden**: Arsenic and cadmium negatively correlated with social behaviour (r = -0.43 and -0.38 respectively); heavy metal load positively correlated with microbiome-associated catecholamine precursor metabolites (r = 0.33), establishing a chain from metal accumulation through gut dysbiosis to neurobehavioural impairment [[krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]].

## Environmental Exposures

- **Air pollution**: PM2.5, NO2, diesel exhaust cause up to 70% decrease in hippocampal neurogenesis and 35% increase in microglial activation markers [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]]
- **Dietary metal burden**: Heavy metals in food alter gut microbial composition, selecting for metal-tolerant Proteobacteria and depleting metal-sensitive Bifidobacterium and Bacteroides [[krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]]
- **Prenatal infection**: Maternal immune activation (MIA) produces persistent microglial abnormalities and microbiome alterations in offspring; Firmicutes elevation in MIA models activates the immune system contributing to neuroplasticity reduction [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]
- **Early-life stress**: Social isolation increases Actinobacteria, decreases Clostridia class, impairs hippocampal neurogenesis

## Nutritional Immunity Response

**Confidence: high** (5+ independent studies documenting barrier disruption and immune activation biomarkers)

- **Ceruloplasmin elevated**: Cu-binding acute-phase protein; elevated in SCZ serum, contributes to oxidative stress burden
- **sCD14 elevated**: Soluble CD14 indicates bacterial translocation from gut to blood; elevated in SCZ [[ermakov-2022-immune-system-abnormalities-schizophrenia]]
- **Zonulin elevated**: Direct marker of tight-junction opening; correlates with attentional performance in SCZ patients [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]
- **Anti-endotoxin antibodies**: Highest of any psychiatric disorder (SMD=2.72) [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]
- **Alpha-1-antitrypsin elevated**: Barrier disruption marker elevated in SCZ (SMD=1.23) [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]
- **LPS elevated**: Significantly elevated across all severe mental illness conditions (SMD=0.77) [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]

The barrier disruption data establishes that bacterial translocation is a quantifiable, measurable process in schizophrenia — not a theoretical construct. Blood transcriptome analysis confirmed increased microbial diversity in SCZ blood samples, inversely correlated with CD8+ memory T cells [[olde-loohuis-2018-blood-microbial-diversity-schizophrenia-transcriptome]].

## Taxonomic Analysis

**Confidence: high** (6+ independent studies including MR causal data, systematic review with vote counting, FMT experiments, and multi-kingdom profiling)

### Causally Risk-Increasing Taxa (Mendelian Randomization)

The Zhou et al. (2024) two-sample bidirectional MR study (n=148,984) provides the causal backbone of this layer [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]:

- **Class Betaproteobacteria** (OR=1.13, 95% CI 1.01-1.27, p=0.027) — linked to cognitive impairment
- **Class Clostridia** (OR=1.16, 95% CI 1.05-1.28, p=4.2x10^-3) — SCFA production activates microglia; increases choline (membrane dysfunction marker)
- **Order Clostridiales** (OR=1.12, 95% CI 1.01-1.24, p=0.027)
- **Family Prevotellaceae** (OR=1.11, 95% CI 1.03-1.20, p=1.4x10^-3)
- **Phylum Firmicutes** (OR=1.11, 95% CI 1.02-1.21, p=0.015)
- Genera: **Alloprevotella** (OR=1.09), **Hungatella** (OR=1.08), **Subdoligranulum** (OR=1.14)

### Causally Protective Taxa (Mendelian Randomization)

- **Genus Desulfovibrio** (OR=0.88, 95% CI 0.82-0.96, p=1.9x10^-3) — lower abundance is a risk factor; amisulpride cannot restore it [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]
- **Family Veillonellaceae** (OR=0.93, p=0.033) — depleted in patients with violent behaviours
- **Family Rhodospirillaceae** (OR=0.93, p=0.049)
- Genera: **Coprobacter** (OR=0.92), **Gordonibacter** (OR=0.94)

### Observationally Enriched (Non-Causal or Unknown Direction)

- **Lactobacillus**: Consistently enriched in vote-counting analysis of 30 studies; positively associated with symptom severity in FEP [[li-2024-alterations-gut-microbiota-schizophrenia-vote-counting]] [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]
- **Enterobacteriaceae**: Enriched Proteobacteria family [[li-2024-alterations-gut-microbiota-schizophrenia-vote-counting]]
- **Succinivibrio, Prevotella, Acidaminococcus**: Consistently enriched across studies [[li-2024-alterations-gut-microbiota-schizophrenia-vote-counting]]
- **Akkermansia muciniphila**: Reverse MR shows SCZ elevates Akkermansia abundance (OR=1.04) — this is a **consequence**, not a cause. Naive supplementation in active SCZ may be counterindicated [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].

### Observationally Depleted

- **Faecalibacterium prausnitzii, Roseburia, Coprococcus, Anaerostipes**: Consistently depleted anti-inflammatory butyrate producers [[li-2024-alterations-gut-microbiota-schizophrenia-vote-counting]]
- **Lachnospiraceae and Ruminococcaceae**: Depletion correlates with negative symptoms and poorer functioning in FEP [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]]

### Multi-Kingdom Dysbiosis

- **Mycobiome**: Enriched Trichosporon asahii, [[candida-albicans]], Malassezia; depleted Saccharomyces cerevisiae; oral fungal dysbiosis correlates with IL-6 and TNF-alpha [[ling-2025-gut-mycobiota-dysbiosis-immune-dysfunction-schizophrenia-metabolic-syndrome]]
- **Virome**: 124 vOTUs enriched in SCZ (mainly Siphoviridae, Flandersviridae); virome-based classifier achieves 93.2% AUC for diagnosis — outperforming bacterial and mycobiome models [[ren-2025-gut-virome-schizophrenia-metagenomics]]

### Causation Experiment

**Streptococcus vestibularis** transfer to mice was sufficient to induce social behavior deficits and alter neurotransmitter levels — one of the strongest single-species causation experiments in psychiatric microbiome research [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].

## Virulence Enzymes and Features

**Confidence: moderate** (mechanistic evidence from 3-4 studies linking enzyme pathways to clinical features)

- **Indoleamine 2,3-dioxygenase (IDO)**: Induced by inflammatory cytokines; diverts tryptophan from serotonin synthesis toward the kynurenine pathway. In the brain, microglia produce neurotoxic quinolinic acid from this pathway, contributing to excitotoxicity and cognitive deficits [[chrobak-2016-gut-microbiome-cns-schizophrenia-bipolar-depression]]
- **Tryptophanase**: Microbial enzyme catabolizing tryptophan directly; reduces substrate availability for serotonin synthesis; over 90% of body serotonin is synthesized in intestinal enterochromaffin cells [[kamath-2025-gut-microbiome-mental-health-causation-correlation-review]]
- **LPS biosynthesis**: Enriched Enterobacteriaceae produce LPS driving the highest anti-endotoxin antibody response of any psychiatric disorder (SMD=2.72) [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]
- **NLRP3/NLRC4 inflammasomes**: Increased expression in blood, mediating sterile inflammasome activation from gut-derived bacterial products [[ermakov-2022-immune-system-abnormalities-schizophrenia]]

## Ecological State

**Confidence: high** (5+ independent studies characterizing the ecological environment)

1. **Gut barrier disruption**: The most severe barrier dysfunction of any psychiatric disorder measured — anti-endotoxin antibodies SMD=2.72, elevated LPS, sCD14, zonulin, alpha-1-antitrypsin [[safadi-2022-gut-dysbiosis-severe-mental-illness-chronic-fatigue-meta-analysis]]. Bacterial translocation confirmed by 16S rRNA detection in blood [[olde-loohuis-2018-blood-microbial-diversity-schizophrenia-transcriptome]].
2. **Tryptophan-kynurenine shunting**: IDO-mediated diversion from serotonin synthesis to kynurenine pathway; astrocytes produce neuroprotective kynurenic acid while microglia produce neurotoxic quinolinic acid — the imbalance toward quinolinic acid drives excitotoxicity [[chrobak-2016-gut-microbiome-cns-schizophrenia-bipolar-depression]]
3. **Microglial M1 polarization**: Chronic pro-inflammatory state with impaired M2 transition; C4A overexpression drives excessive adolescent synaptic pruning; Clostridia SCFA production further activates microglia [[comer-2020-inflamed-brain-schizophrenia-neuroinflammation]] [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]
4. **Th17/Treg imbalance**: Elevated IL-6, IL-8, TNF-alpha, IL-1beta; reduced IL-10 and TGF-beta; present before medication exposure in FEP [[ermakov-2022-immune-system-abnormalities-schizophrenia]]
5. **Multi-kingdom dysbiosis**: Bacterial + fungal + viral disruption with no parallel in other psychiatric conditions; virome classifier AUC 93.2% [[ren-2025-gut-virome-schizophrenia-metagenomics]]

## Associated Conditions

Schizophrenia shares the deepest metallomic and taxonomic overlap with [[depression]] and [[schizophrenia|bipolar-disorder]], consistent with shared Th17 skewing, tryptophan diversion, and butyrate-producer depletion:

| Condition | Shared Metals | Shared Taxa | Shared Ecological | Overlap Score |
|-----------|---------------|-------------|-------------------|---------------|
| [[depression]] | Cu, Zn | Clostridium, E. coli, Lachnospiraceae, F. prausnitzii, Roseburia | Trp-kyn shunting, barrier disruption | 0.68 |
| [[schizophrenia|bipolar-disorder]] | Cu, Zn, Fe | F. prausnitzii, Lachnospiraceae | Trp-kyn shunting, Th17/Treg | 0.65 |
| [[alzheimers-disease]] | Cu, Fe | E. coli, Lachnospiraceae, Enterobacteriaceae | Microglial activation, barrier disruption | 0.52 |
| [[parkinsons-disease]] | Fe, Pb | Enterobacteriaceae, Lachnospiraceae | Microglial activation, barrier disruption | 0.45 |
| [[multiple-sclerosis]] | Pb, Cd | Lachnospiraceae, Candida albicans, Streptococcus | Th17/Treg, barrier disruption | 0.42 |

The bipolar-schizophrenia overlap (0.65) is clinically significant: distinguishing these conditions on microbiome grounds alone remains difficult [[theleritis-2024-gut-dysbiosis-first-episode-psychosis-review]].

## Open Questions

1. **Can the causal taxon map from MR (Zhou 2024) be replicated in non-European ancestry populations?** All GWAS are European-ancestry; ethnic generalizability is unknown.
2. **Does restoration of Desulfovibrio or Veillonellaceae abundance reduce SCZ risk or symptom severity?** No intervention RCT targeting these causally protective taxa exists.
3. **Is the Akkermansia elevation a homeostatic response, a disease-driven consequence, or an antipsychotic effect?** The reverse MR suggests disease-driven, but the mechanism is unclear [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]].
4. **Do virome signatures represent bacteriophage predation of depleted beneficial bacteria, or direct neuroimmune modulation?** The 93.2% AUC virome classifier suggests information not captured by bacterial profiling alone [[ren-2025-gut-virome-schizophrenia-metagenomics]].
5. **Does the Cu/Zn mis-metallation signature precede microbiome changes, or do they co-evolve?** Temporal ordering of metallomic vs. taxonomic shifts is not established.
6. **Can microbiome-based biomarkers predict treatment response?** Baseline Lachnoclostridium/Romboutsia predict risperidone response; baseline serum butyrate predicts PANSS score reduction [[yuan-2021-gut-microbial-biomarkers-treatment-response-schizophrenia]].

## Karen's Brain Primitives Active

- **Primitive 1 — Metals as Selective Pressures**: Cu/Zn ratio dysregulation selects for Cu-tolerant, Zn-independent taxa; heavy metal burden (Pb, Cd, As) selects for Proteobacteria and depletes Bifidobacterium/Bacteroides [[krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior]]
- **Primitive 2 — Nutritional Immunity as Interpretive Constraint**: Elevated ceruloplasmin-bound Cu may represent host defense against infection rather than simple Cu toxicity; iron sequestration via hepcidin may compound functional zinc deficiency at NMDA receptors
- **Primitive 4 — Microbial Metal Dependencies as Achilles' Heels**: Siderophore-dependent Enterobacteriaceae enrichment in the iron-replete SCZ gut suggests iron restriction as a potential ecological intervention target
- **Primitive 5 — Two-Sided Ecological Engineering**: Effective intervention requires suppressing causally risk-increasing taxa (Clostridia, Betaproteobacteria) AND restoring causally protective taxa (Desulfovibrio, Veillonellaceae) — neither side alone is sufficient
- **Primitive 6 — Interkingdom Relationships and Functional Shielding**: Multi-kingdom dysbiosis (bacterial + Candida albicans + Siphoviridae/Flandersviridae viruses) suggests interkingdom interactions may protect pathobionts from host immune clearance [[ling-2025-gut-mycobiota-dysbiosis-immune-dysfunction-schizophrenia-metabolic-syndrome]]
- **Primitive 9 — Oxygen State as Ecological Determinant**: Butyrate-producer depletion (Faecalibacterium, Roseburia, Coprococcus) shifts the colonic environment; potential oxygenation changes may further disadvantage obligate anaerobic commensals
