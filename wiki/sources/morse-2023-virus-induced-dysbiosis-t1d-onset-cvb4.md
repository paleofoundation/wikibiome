---
title: "Morse 2023 — Virus induced dysbiosis promotes type 1 diabetes onset"
type: source
created: 2026-04-16
updated: 2026-04-16
authors: [Morse ZJ, Simister RL, Crowe SA, Horwitz MS, Osborne LC]
corresponding_author: "Sean A. Crowe / Marc S. Horwitz / Lisa C. Osborne"
corresponding_email: "sean.crowe@ubc.ca"
institution: "Department of Microbiology & Immunology, Life Sciences Institute, University of British Columbia, Vancouver, Canada"
year: 2023
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2023.1096323"
pmid: "not yet verified"
evidence_level: animal-model
sample_size: "n=20–72 NOD mice per group (3 independent experiments)"
tags: [t1d, coxsackievirus, cvb4, dysbiosis, gut-barrier, bifidobacterium, akkermansia, fmt, treg, scfa, gpr43, nod-mice]
library_category: causal
platform: wikibiome
condition: "type-1-diabetes"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [bifidobacterium, akkermansia, lachnospiraceae, alistipes, bacteroidota, firmicutes, actinobacteriota, verrucomicrobiota, proteobacteria]
key_findings:
  - "Coxsackievirus B4 (CVB4) infection in NOD mice restructures the gut microbiome before T1D onset, increasing Actinobacteriota/Verrucomicrobiota and decreasing Firmicutes — a profile matching spontaneously diabetic NOD mice"
  - "FMT of CVB4-modified dysbiotic microbiome into microbiome-depleted naïve recipients enhanced T1D susceptibility (61.2% hyperglycemic vs 18.2% controls at 5 weeks) and reduced intestinal Foxp3+ Tregs and IL-10 expression"
  - "CVB4 infection caused 2-fold reduction in gut barrier integrity (FITC-dextran assay), increased systemic LPS, and bacterial translocation to pancreatic lymph nodes — providing the mechanistic link between dysbiosis and islet autoimmunity"
keystone: false
---

## Key Findings

- **CVB4 restructures the gut microbiome** prior to T1D onset in NOD mice: increased Actinobacteriota and Verrucomicrobiota, contracted Firmicutes phylum — changes evident days 7–21 post-infection and strikingly similar to spontaneously diabetic NOD mice (evidence level: animal-model)
- **Bifidobacteria and Akkermansia** emerged as conspicuous members of the diabetogenic microbiome in CVB4-infected mice; Bifidobacteria also elevated in spontaneously diabetic mice — implicating these taxa in diabetes onset even in virus-free contexts
- **Bacteroidota/Firmicutes ratio increased** in CVB4-infected mice (Figure 2C); this ratio correlated with T1D susceptibility across experimental groups
- **FMT of diabetogenic microbiome** was sufficient to enhance T1D in female NOD mice (61.2% hyperglycemic vs 18.2% in control FMT, p < 0.05, Mantel-Cox) — demonstrating microbiome as a transferable T1D risk factor
- **Gut barrier compromise**: CVB4 infection reduced FITC-dextran intestinal barrier integrity by ~2-fold at day 7 pi; reduced cldn1 and tjp1 expression; thinned colonic mucus layer — maintained through day 14
- **Bacterial translocation to PLN**: 16S rRNA detected in pancreatic lymph nodes (PLN) at day 7 post-CVB4, elevating systemic LPS (increased serum LPS at day 21)
- **SCFA receptor downregulation**: CVB4 FMT recipients showed reduced GPR43 expression in proximal colon — reducing regulatory immune signaling capacity
- **Treg depletion**: CVB4 FMT recipients had lower Foxp3+ CD4+ T cells in ileum and reduced IL-10 production in colon; serum anti-commensal IgG elevated

## Methods

Animal model: female and male NOD mice (11–12 weeks old) infected intraperitoneally with 400 pfu CVB4 (Edwards strain 2). Microbiome profiled at days 0, 2, 3, 7, 14, 21 dpi by 16S rRNA sequencing (SILVA database, QIIME2). FMT experiment: recipient mice depleted with broad-spectrum antibiotics for 10 days, then received FMT from CVB4-infected or control donors at 5 weeks; blood glucose monitored 5 weeks post-FMT. Intestinal permeability by FITC-dextran gavage assay. Bacterial translocation by qPCR of 16S rRNA in PLN and MLN. SCFA receptor expression by RT-qPCR. Immune profiling by flow cytometry (Foxp3+ Tregs) and ELISA (cytokines, anti-commensal antibodies). Raw sequencing data: NCBI BioProject PRJNA855481.

## Detailed Summary

This study establishes a mechanistic link between enteroviral infection, microbiome disruption, and T1D autoimmunity initiation. CVB4 infection accelerates T1D in genetically susceptible NOD mice through microbiome restructuring rather than direct beta cell infection, as FMT of the CVB4-modified microbiome alone recapitulates T1D acceleration.

The CVB4-modified diabetogenic microbiome is characterized by:
1. Increased Actinobacteriota and Verrucomicrobiota (particularly Akkermansia and Bifidobacteria)
2. Decreased Firmicutes (particularly Lachnospiraceae)
3. Elevated Bacteroidota/Firmicutes ratio

The paradoxical elevation of Bifidobacteria (generally considered beneficial) in the diabetogenic context suggests strain-specific or context-specific effects — anti-commensal antibodies to specific Bifidobacteria strains were observed in T1D-progressing individuals, and variance in antibody responses to different Bifidobacteria strains has been noted in children who later develop islet autoimmunity.

The mechanistic cascade proposed: CVB4 → microbiome restructuring → eroded mucosal barrier → bacterial translocation to PLN → bacterial antigen presentation to autoreactive T cells → enhanced islet-reactive T cell activation → beta cell destruction. This cascade is supported by the FMT experiments showing microbiome alone (without virus) is sufficient to modulate T1D susceptibility.

Key limitation: CVB4-induced T1D was sex-independent in the female NOD model only; male NOD mice did not show enhanced susceptibility to CVB4 FMT, suggesting hormonal or genetic modifiers.

## Relevance to WikiBiome

Provides mechanistic evidence for the viral trigger → microbiome disruption → autoimmunity cascade. The FMT experiments are particularly significant as they demonstrate causality (microbiome changes are sufficient to alter T1D susceptibility), not just correlation. Explains *why* early-life enteroviral infections are associated with T1D risk at the mechanistic level.

## Relevance to Cureva

SCFA receptor (GPR43) downregulation in the dysbiotic context provides a mechanistic rationale for SCFA-producing bacteria as protective targets. The Treg depletion mechanism identifies a specific immune pathway connecting dysbiosis to autoimmunity.

## Contradictions / Tensions

Bifidobacteria elevation in the diabetogenic microbiome contradicts the prevailing view that Bifidobacterium depletion is a T1D risk marker. Authors suggest this reflects strain-level heterogeneity and context-dependent effects (expanded Bifidobacteria in CVB4 infection may represent a stress response or compensatory shift). Resolution requires strain-level resolution beyond genus-level 16S analysis.

## Open Questions

- Are the diabetogenic Bifidobacteria strains different from the protective strains found in healthy infants?
- Does the CVB4-induced microbiome change generalize to other enteroviruses (e.g., CVB1, CVB3) associated with T1D?
- Can SCFA supplementation or GPR43 agonism prevent CVB4-accelerated T1D in the NOD model?
