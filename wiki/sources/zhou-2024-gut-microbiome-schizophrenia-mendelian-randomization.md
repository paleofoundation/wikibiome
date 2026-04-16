---
title: "Zhou 2024 — Gut Microbiome and Schizophrenia: Insights from Two-Sample Mendelian Randomization"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Keer Zhou, Ancha Baranova, Hongbao Cao, Jing Sun, Fuquan Zhang]
corresponding_author: "Jing Sun; Fuquan Zhang"
corresponding_email: "jingsun2007@163.com; zfq@smu.edu.cn"
institution: "Nanjing Medical University, China / George Mason University, USA"
year: 2024
journal: "Schizophrenia (Nature Partner Journal)"
doi: "10.1038/s41537-024-00497-7"
pmid: ""
evidence_level: case-control
sample_size: "n=148,984 (18,340 MiBioGen + 130,644 PGC SCZ GWAS)"
tags: [schizophrenia, mendelian-randomization, gut-microbiome, causal-inference, desulfovibrio, rhodospirillaceae, veillonellaceae, coprobacter, gordonibacter, clostridia, betaproteobacteria, akkermansia, bidirectional-mr]
library_category: causal
platform: both
condition: "schizophrenia"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [desulfovibrio, rhodospirillaceae, veillonellaceae, coprobacter, gordonibacter, clostridia, betaproteobacteria, defluviitaleaceae, prevotellaceae, alloprevotella, hungatella, subdoligranulum, firmicutes, akkermansia-muciniphila, bacteroides, lachnospira, ruminiclostridium5, candidatus-soleaferrea, verrucomicrobiaceae]
key_findings:
  - "Ten bacterial taxa conferred causal effects on schizophrenia (OR 1.08-1.16); six taxa conferred negative/protective causal effects (OR 0.88-0.94) including Desulfovibrio, Rhodospirillaceae, Coprobacter, and Veillonellaceae"
  - "Class Betaproteobacteria (OR=1.13) and class Clostridia (OR=1.16) causally increased schizophrenia risk; Firmicutes phylum (OR=1.11) also causal"
  - "Reverse MR showed schizophrenia increased abundance of 9 taxa (including Akkermansia OR=1.04) and reduced 2 (Defluviitaleaceae, OR=0.94); Akkermansia muciniphila expansion in SCZ is causally driven by the disease, not a driver of it"
---

# Key Findings

- **Ten bacterial taxa exerted positive causal effects on schizophrenia** (OR 1.08-1.16) including class **Betaproteobacteria** (OR=1.13, 95%CI 1.01-1.27), class **Clostridia** (OR=1.16, 1.05-1.28), genus **Alloprevotella** (OR=1.09), genus **Hungatella** (OR=1.08), genus **Subdoligranulum** (OR=1.14), order **Clostridiales** (OR=1.12), and phylum **Firmicutes** (OR=1.11, 1.02-1.21). **Six taxa showed protective causal effects** (OR 0.88-0.94): genus **Desulfovibrio** (OR=0.88, 0.82-0.96), family **Rhodospirillaceae** (OR=0.93), family **Veillonellaceae** (OR=0.93), genus **Coprobacter** (OR=0.92), and genus **Gordonibacter** (OR=0.94).
- **Reverse MR (SCZ -> microbiome) identified nine taxa increased by schizophrenia** (or causally elevated in patients), including **Akkermansia muciniphila** (OR=1.04, p=0.040), Bacteroides (OR=1.03), and Lachnospira (OR=1.05). Two taxa were reduced by SCZ: Family Defluviitaleaceae (OR=0.94) and Genus DefluviitaleaceaeUCG011 (OR=0.94). **This establishes bidirectional microbiome-SCZ relationships** and implicates Akkermansia enrichment as a consequence (not cause) of SCZ.
- **Clinical implications**: antipsychotic treatment with amisulpride cannot change the elevated Desulfovibrio in SCZ — consistent with the MR result that lower Desulfovibrio is protective and harder to restore once SCZ is established. Clostridia and Clostridiales produce SCFAs that activate microglia — a mechanistic hypothesis for the MR signal.

# Methods

Two-sample bidirectional Mendelian randomization. Exposure 1: gut microbiome GWAS from MiBioGen consortium (n=18,340, 24 cohorts, 11 countries; 211 taxa: 9 phyla, 16 classes, 20 orders, 35 families, 131 genera). Outcome 1: SCZ GWAS from PGC (n=130,644 European ancestry). Instruments: SNPs at genome-wide significance (adjusted P<1e-5). Methods: IVW (primary), MR-Egger, weighted median, weighted mode, simple mode. Sensitivity: Cochran's Q, MR-PRESSO, leave-one-out.

# Relevance to WikiBiome

- Informs **[[schizophrenia]]** entity page: provides genetic-instrument causal directions, resolving which taxa are drivers (Clostridia, Betaproteobacteria, Firmicutes) vs consequences (Akkermansia muciniphila) of SCZ.
- Informs **[[desulfovibrio]]**, **[[clostridia]]**, **[[betaproteobacteria]]**, **[[akkermansia-muciniphila]]** entity pages: adds directional causal evidence to each.
- Informs **[[gut-brain-axis]]** concept page: one of the strongest causal-inference analyses of the microbiome-brain axis in schizophrenia.

# Relevance to Cureva

- **Schizophrenia signature page** Layer 2 (taxonomic): replaces associational directions with causal directions. Clostridia and Betaproteobacteria are drivers; Akkermansia enrichment is a consequence.
- **Intervention triangle** for Desulfovibrio-preserving or Veillonellaceae-restoring strategies: I -> f (restore protective taxa); f -> D (MR provides the causal bridge); I -> D needs clinical trials.
- **STOP candidate**: Akkermansia muciniphila supplementation in active SCZ may be counterproductive — the MR suggests this taxon is already driven up by the disease and further expansion may reflect or accelerate dysbiosis. Conventional "Akkermansia is always good" framing fails here.
- **Candidate STOP clarification**: antipsychotic amisulpride's known failure to lower Desulfovibrio supports MR direction — treatment resistance has a microbiome substrate.

# Contradictions / Tensions

- Prior case-control studies have reported Akkermansia muciniphila **depletion** in SCZ; this reverse-MR finding (SCZ elevates Akkermansia) may reflect antipsychotic exposure or diet confounding in observational studies. Supersession protocol applied: case-control (lower evidence) should be reinterpreted in light of genetic-instrument evidence.
- Nguyen et al. reported phylum Proteobacteria enrichment in SCZ (case-control) — consistent with this study's Betaproteobacteria MR finding.
