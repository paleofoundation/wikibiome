---
title: "Chen 2025 — Blood Metabolites as Mediators in Erectile Dysfunction: Insights from a Multi-Center Proteomics and Genetic Study"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Junhao Chen, Junxian Zhao, Zhi Zhang, Xingcheng Zhu, Jieming Zuo, Zuqing Nie, Yuanzhi Fu, Haifeng Wang, Mengjun Tang, Shi Fu]
corresponding_author: "Shi Fu"
corresponding_email: "fushi@kmmu.edu.cn"
institution: "The Second Affiliated Hospital of Kunming Medical University, Kunming, Yunnan, China"
orcid: "not available"
year: 2025
journal: "Frontiers in Pharmacology"
doi: "10.3389/fphar.2025.1568780"
pmid: "not yet verified"
evidence_level: computational-prediction
sample_size: "2,548 ED cases and 196,651 controls (FinnGen R11); proteomics from Olink (UK Biobank) and deCODE (Iceland)"
tags: [erectile-dysfunction, mendelian-randomization, proteomics, blood-metabolites, protein-targets, drug-repurposing, mediation-analysis, colocalization]
library_category: metabolites
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 4, 5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Five circulating proteins (AMN, ESM1, KIR2DL2, PIGR, TNFRSF6B) causally associated with ED via two-sample MR, coloc colocalization, and SMR validation"
  - "Mediation MR analysis of 1,400 blood metabolites identified GPC, N-formylmethionine, glycine-to-serine ratio, stearoyl sphingomyelin, and hydantoin-5-propionate as mediators of protein-ED associations"
  - "Molecular docking identified chlortetracycline (AMN), clopamide (KIR2DL2), isoguanine (PIGR), and atrazine (TNFRSF6B) as drug candidates for ED"
keystone: false
---

## Key Findings

- **Five circulating proteins causally linked to ED**: AMN, ESM1, KIR2DL2, PIGR, and TNFRSF6B were identified through convergent evidence from two-sample Mendelian randomization (MR), Bayesian colocalization analysis, and summary data-based MR (SMR) across two independent proteomics platforms (Olink and deCODE) ([[chen-2025-blood-metabolites-mediators-erectile-dysfunction-proteomics]], computational-prediction).
- **AMN and TMEM9 are transmembrane and transport-related proteins**: AMN plays a pivotal role in metabolic regulation including vitamin B12 absorption, lipid metabolism, and inflammatory response-associated metabolites. TMEM9 is involved in lysosomal function regulation and mTORC1 signaling but did not pass the SMR heterogeneity test.
- **Blood metabolite mediation pathways identified**: 1-Palmitoyl-2-linoleoyl-GPC (GPC) mediated AMN expression (P = 0.03, OR: 1.059); N-formylmethionine mediated ESM1 expression (P = 0.03, OR: 1.043); glycine-to-serine ratio mediated ESM1 expression (P = 0.0008, OR: 1.058). Stearoyl sphingomyelin (SS1) increased TNFRSF6B expression; hydantoin-5-propionate (HPL) promoted ED occurrence and decreased TNFRSF6B expression.
- **GO and KEGG enrichment**: The five protein targets were enriched in natural killer cell-mediated cytotoxicity, antigen processing and presentation, graft-versus-host disease, leukocyte-mediated cytotoxicity, and cobalamin binding pathways.
- **Drug candidates identified via molecular docking**: Chlortetracycline for AMN (Vina score: -8.6), clopamide for KIR2DL2 (Vina score: 6.6), isoguanine for PIGR (Vina score: 6.4), and atrazine for TNFRSF6B (Vina score: 4.6).

## Methods

- **Study design**: Computational genomics study using two-sample Mendelian randomization, Bayesian colocalization, SMR analysis, mediation MR, PheWAS, GO/KEGG enrichment, PPI network analysis, druggability analysis, and molecular docking.
- **Proteomics data sources**: Olink platform (UK Biobank Pharma Proteomics Project, British population) providing 2,080 pQTLs; deCODE genetics (SomaScan platform, Icelandic population) providing 1,922 pQTLs.
- **Outcome data**: FinnGen R11 database — 2,548 ED cases and 196,651 controls, all Finnish population. ED defined by ICD codes in FinnGen.
- **MR instruments**: pQTLs selected at genome-wide significance (P < 5 x 10^-8), SNPs clumped within 1 Mb at r2 < 0.001. Wald ratio for single pQTL; inverse-variance weighted (IVW) for multiple pQTLs.
- **Colocalization**: Bayesian coloc analysis using PPH4 > 0.7 threshold. SMR with HEIDI test (SMR P < 0.05, HEIDI P > 0.05).
- **Mediation analysis**: 1,091 metabolites and 309 metabolite ratios from the Canadian Longitudinal Study on Aging (CLSA) cohort (n = 8,091) used as mediators between protein targets and ED.
- **PheWAS**: AstraZeneca PheWAS portal using UK Biobank data (~1.5k binary phenotypes, ~450k continuous phenotypes, ~15.5k exome-sequenced participants).
- **Molecular docking**: CB-Dock2 tool; 3D protein structures from PDB; small-molecule drug structures from PubChem.
- **Population**: All European descent to minimize population heterogeneity. Exposure, mediator, and outcome data from different countries to avoid sample overlap.

## Detailed Summary

### Protein Identification

Eight circulating proteins initially met MR and colocalization criteria: AMN, ESM1, KIR2DL2, PIGR, SPINT1, SPP1, TNFRSF6B, and TMEM9. After SMR validation, three were excluded (SPINT1, TMEM9, SPP1), leaving five validated protein targets: **AMN**, **ESM1**, **KIR2DL2**, **PIGR**, and **TNFRSF6B**.

### Protein Functions and ED Mechanisms

- **AMN (Amnionless)**: Transmembrane protein involved in vitamin B12 absorption, lipid metabolism, and cellular homeostasis. PheWAS showed significant associations with inflammation-related phenotypes (-log10P > 6-8). Elevated AMN may lead to excessive regulation of lipid-related and inflammation-associated metabolites, causing metabolic imbalances that amplify inflammatory responses and impair vascular and endothelial function.
- **ESM1 (Endocan)**: Endothelial cell-specific molecule involved in angiogenesis and vascular permeability regulation. Two-sample MR identified ESM1 as protective against ED. ESM1 plays a crucial role in maintaining vascular permeability and blood flow regulation.
- **KIR2DL2**: Killer cell immunoglobulin-like receptor expressed on NK cells. Modulates immune surveillance through interaction with HLA-C class I molecules. Transmits inhibitory signals regulating NK cell activity. Its impact on ED is primarily through direct immune regulation, inflammation suppression, and apoptotic reduction. KIR2DL2 helps maintain normal vascular function by reducing vascular contraction responses and offsetting anti-inflammatory pathways such as TGF-beta signaling.
- **PIGR (Polymeric Immunoglobulin Receptor)**: IgA transporter protein expressed on mucosal epithelial cells. May regulate vascular inflammation and protect endothelial function through JAK/STAT signaling pathway activation and PISK/AKT pathway. PIGR expression may be upregulated to counteract inflammatory responses, reducing pro-inflammatory cytokine effects.
- **TNFRSF6B (DcR3/Decoy Receptor 3)**: Member of the tumor necrosis factor receptor superfamily. Plays a role in immune regulation through binding to FasL, LIGHT, and TLI1A, blocking their interactions with other receptors. Acts as a decoy receptor reducing TNFRSF6B levels, undermining its protective functions against inflammation and endothelial damage.

### Mediation Pathways

Five metabolite-mediated pathways were identified:

| Metabolite | Protein | Role | P-value | OR |
|---|---|---|---|---|
| 1-Palmitoyl-2-linoleoyl-GPC (GPC) | AMN | Complete mediator | 0.03 | 1.059 |
| N-formylmethionine | ESM1 | Full mediator | 0.03 | 1.043 |
| Glycine-to-serine ratio | ESM1 | Full mediator | 0.0008 | 1.058 |
| Stearoyl sphingomyelin (SS1) | TNFRSF6B | Increased expression (non-significant product) | >0.05 | N/A |
| Hydantoin-5-propionate (HPL) | TNFRSF6B | Full mediator (decreased expression) | 0.0001 | 0.950 |
| GPC | PIGR | Promoted expression (direct causal lacking) | 0.007 | N/A |

### GO/KEGG Enrichment

GO Biological Process enrichment revealed involvement in cell killing, leukocyte-mediated cytotoxicity, regulation of cell killing, positive regulation of cell adhesion, and cobalamin transport. KEGG pathways included natural killer cell-mediated cytotoxicity, cell adhesion molecules, malaria, cobalamin transport and metabolism, and cytokine-cytokine receptor interaction. Molecular Function enrichment highlighted receptor ligand activity, cobalamin binding, MHC class I receptor activity, and antigen binding.

### Drug Candidates

| Protein Target | Drug Candidate | Vina Score | Key Residues |
|---|---|---|---|
| AMN | Chlortetracycline | -8.6 | L267, E268, D122, P208 |
| KIR2DL2 | Clopamide | 6.6 | A145, S140, E147, F178, R149 |
| PIGR | Isoguanine | 6.4 | S58, S57, V56 |
| TNFRSF6B | Atrazine | 4.6 | Q51, Y84, W82, L85 |

## Relevance to WikiBiome

This study informs WikiBiome's understanding of [[erectile-dysfunction]] as a vascular and inflammatory disease mediated by circulating proteins. Key connections:

- **Inflammatory mediators in ED**: The identification of immune-regulatory proteins (KIR2DL2, TNFRSF6B, PIGR) reinforces that ED is fundamentally an inflammatory and immune-mediated vascular disease, not merely a hemodynamic one. This aligns with the emerging understanding of endothelial dysfunction as a systemic inflammatory process.
- **Metabolic mediation**: The GPC and sphingomyelin mediation pathways connect lipid metabolism directly to ED pathogenesis, relevant to entity pages on [[metabolic-syndrome]] and vascular inflammation concepts.
- **Cobalamin/vitamin B12 connection**: AMN's role in vitamin B12 absorption and its causal association with ED suggests a nutritional-vascular axis that could inform concept pages on [[cobalamin]] metabolism and vascular health.
- **NK cell and immune regulation**: KIR2DL2's role links ED to broader immune dysregulation patterns, relevant to concept pages on [[nutritional-immunity]] and immune surveillance.

## Relevance to Cureva

- **Drug repurposing candidates**: Chlortetracycline (targeting AMN), clopamide (KIR2DL2), isoguanine (PIGR), and atrazine (TNFRSF6B) identified as potential therapeutic targets. These could feed into [[intervention]] pages for ED, though all require experimental validation before clinical recommendation.
- **Metabolite biomarker panel**: GPC, N-formylmethionine, glycine-to-serine ratio, stearoyl sphingomyelin, and hydantoin-5-propionate could serve as mechanistic biomarkers in a Cureva ED signature panel.
- **STOP signal — potential**: The finding that increased AMN expression drives ED through metabolic imbalance and inflammatory amplification suggests caution with interventions that might upregulate AMN activity. However, this is preliminary (computational-prediction level) and requires clinical validation before STOP designation.
- **Triangle evidence**: ESM1 provides preliminary I_to_f evidence (angiogenesis/vascular permeability modulation) and I_to_D evidence (protective MR association with ED) but lacks direct intervention data.

## Contradictions / Tensions

- **TMEM9 colocalization vs. SMR failure**: TMEM9 passed colocalization analysis (suggesting shared causal variant for protein expression and ED) but failed the SMR HEIDI test, indicating potential pleiotropy. The authors attribute this to TMEM9's involvement in multiple pathways (mTORC1 signaling, lysosomal function, autophagy). This tension highlights the limitation of using single-pathway MR for multi-functional proteins.
- **SPINT1 excluded despite colocalization**: SPINT1 showed strong colocalization evidence (PP.H4 up to 0.965) in the deCODE dataset but was excluded after SMR analysis. Given SPINT1's known role in protease inhibition and extracellular matrix stability — relevant to vascular function — this exclusion may warrant re-examination if additional proteomics platforms become available.
- **Computational-only evidence level**: All findings are based on genetic instruments and in silico analyses. No experimental validation of any protein-ED causal pathway or drug candidate was performed. The molecular docking binding energies suggest plausible interactions but are not equivalent to in vitro binding assays.

## Open Questions

1. **Do the identified protein-ED associations replicate in non-European populations?** The study used exclusively European-descent populations (UK, Iceland, Finland). ED prevalence and risk factor profiles differ across ethnicities.
2. **Can the metabolite mediation pathways be validated experimentally?** The GPC-AMN-ED and N-formylmethionine-ESM1-ED cascades are computationally derived and require in vitro and animal model confirmation.
3. **What is the microbiome connection?** N-formylmethionine is a bacterial metabolite (formylated methionine initiates bacterial protein synthesis). Its role as a mediator between ESM1 and ED raises the question of whether gut-derived N-formylmethionine could be a microbiome-ED link — unexplored in this study.
4. **Does chlortetracycline's antibiotic activity confound its potential as an AMN-targeting ED drug?** Tetracycline antibiotics have broad microbiome-disrupting effects that could independently affect ED through gut-vascular axis perturbation.
5. **What is the direction of TNFRSF6B's effect?** The mediation analysis shows that HPL promotes ED and decreases TNFRSF6B, while TNFRSF6B appears protective. This suggests TNFRSF6B loss is detrimental — but the decoy receptor biology of DcR3 is complex and context-dependent.
