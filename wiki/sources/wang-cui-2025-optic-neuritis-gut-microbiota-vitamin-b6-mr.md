---
title: "Wang & Cui 2025 — Multi-omics Mendelian randomization: gut microbiota, immunometabolism, and vitamin B6 in optic neuritis"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Jingzhi Wang, Xuehao Cui]
corresponding_author: "Xuehao Cui"
corresponding_email: "xc350@cam.ac.uk"
institution: "Yancheng First Hospital, Nanjing University Medical School; Cambridge University Hospitals"
year: 2025
journal: "Molecular Neurobiology"
doi: "10.1007/s12035-025-04923-4"
evidence_level: quasi-experimental
sample_size: "FR02 gut microbiota n=5,959; ON FinnGen n=309,154 (951 cases); UKB vitamin B6 n=64,979"
tags: [optic-neuritis, multiple-sclerosis, nmosd, mendelian-randomization, gut-microbiome, vitamin-b6, pyridoxine, immunometabolism, causal-inference, mediation-analysis]
library_category: causal
platform: both
condition: "multiple-sclerosis"
karen_brain_primitives: [1, 2, 4, 5]
metals_discussed: [vitamin-b6]
taxa_discussed: []
key_findings:
  - "Two-step MR across 473 gut microbiota taxa, 731 immune cell traits, 1,400 metabolites identified 27 GM taxa with direct causal relationship to optic neuritis (ON, a common MS/NMOSD presenting feature)"
  - "Three gut microbiota taxa showed particularly strong associations mediated through vitamin B6 metabolism — mediation MR suggests B6 is a causal intermediate"
  - "Vitamin B6 itself emerged as a potential therapeutic target acting upstream on gut microbiota in ON risk — suggests dietary pyridoxine intake may modulate MS-spectrum autoimmunity via microbiome effects"
---

# Multi-omics Mendelian Randomization Reveals Immunometabolic Signatures of the Gut Microbiota in Optic Neuritis and the Potential Therapeutic Role of Vitamin B6

## Key Findings

- Two-sample MR with mediation analysis across **four exposures**: 473 GM taxa (FR02 cohort GWAS, n=5,959, Genome Taxonomy Database classification); 731 immune cell traits; 1,091 metabolites + 309 ratios; 9,851,867 SNPs for vitamin B6 (UKB n=64,979).
- Outcome: optic neuritis (ON) from FinnGen R7 (951 cases / 309,154 total).
- **27 GM taxa** with direct causal signal to ON.
- **Vitamin B6 mediation**: Three GM taxa showed effects mediated by B6 metabolism. Mediation MR disentangled β1 (exposure→mediator) × β2 (mediator→outcome) = indirect effect.
- **Vitamin B6 as therapeutic target**: Acting upstream on GM composition, B6 supplementation may reduce ON risk via microbiome modulation.
- ON is a frequent presenting syndrome of **MS** (common) and **NMOSD** (severe, rapid blindness). Study methodology extends to MS spectrum.

## Methods

MiBioGen-adjacent FR02 cohort for gut microbiota GWAS (P<5×10⁻⁸). Immune cells from Orrù 2020 dataset. Metabolites from Chen 2023 GWAS. Vitamin B6 from UKB. IVW primary; MR-Egger, weighted median sensitivity. Two-step MR for mediation: Step 1 exposure→ON; Step 2 mediator path estimation. Cochran's Q, MR-Egger intercept, leave-one-out.

## Relevance to WikiBiome

- Novel entity candidate: **[[dietary-metal-microbiome-interactions|vitamin-b6]]** (pyridoxine/pyridoxal/pyridoxamine) — add or expand page with gut-microbiome-immune axis content. B6 is required for ~150 enzymes including many in microbial amino acid metabolism and host tryptophan/kynurenine pathway (AhR ligand generation).
- Informs **[[multiple-sclerosis]]** and adjacent **[[multiple-sclerosis|optic-neuritis]]** entity (if new): pyridoxine status as modifiable risk factor, mediated through microbiome.
- Supports **[[nutritional-immunity]]** concept: B6-dependent enzymes (kynureninase, serine hydroxymethyltransferase) operate at the host-microbe interface.

## Relevance to Cureva

- **Intervention hypothesis for MS/NMOSD/ON**: Vitamin B6 (pyridoxine) sufficiency, with screening for marginal deficiency common in MS cohorts. I→f (B6 alters microbiome composition of three specific taxa) MR-graded preliminary; f→D (these taxa causally affect ON) MR-graded; I→D (B6 → ON) indirect via mediation MR.
- **Dietary B6 sources**: organ meats, fish, chickpeas, potatoes, bananas, fortified cereals.
- **Caution**: Pyridoxine in excess (>100 mg/day chronic) causes sensory neuropathy — clinically relevant for an MS population already prone to sensory symptoms.

## Open Questions

- Which three specific GM taxa mediate the B6→ON effect — taxa list not fully extracted from available pages.
- Whether vitamin B6 effects generalize from ON to other MS subtypes (relapsing-remitting, progressive).
- Whether dietary intervention or supplementation (and at what dose) optimizes the B6-microbiome-immune axis.
- Interaction with **homocysteine** pathway (B6/B12/folate cluster) in MS neurotoxicity.
