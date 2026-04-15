---
title: "Li, Zhu, Lei et al. 2023 — Genetic causal association between gut microbiome and COVID-19: bidirectional Mendelian randomization"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Zengbin Li, Guixian Zhu, Xiangye Lei, Liqiong Tang, Guangyao Kong, Mingwang Shen, Lei Zhang, Lingqin Song]
year: 2023
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2023.1217615"
evidence_level: quasi-experimental
sample_size: "N/A for meta-analysis; 1.8 million individuals with three COVID-19 phenotypes"
tags: [gut-microbiota, mendelian-randomization, covid-19, genetic-causality, bacterial-taxa]
library_category: causal
platform: wikibiome
condition: "COVID-19"
karen_brain_primitives: [1, 4, 5]
metals_discussed: []
taxa_discussed: [faecalibacterium, roseburia, bacteroides, ruminococcus, eubacterium, dialister, coprococcus, prevotella, dorea, lachnospiraceae, clostridia, actinobacteria, firmicutes, bacteroidetes]
key_findings: 
  - "Forward MR: 3 bacterial taxa associated with COVID-19 severity, 8 with hospitalization, 10 with infection risk"
  - "Reverse MR identified 5 COVID-19-related taxa with potential feedback on microbiome composition"
  - "Faecalibacterium and Roseburia (butyrate producers) showed protective effects against severe COVID-19"
---

## Key Findings

- **Forward Mendelian Randomization (genetic predisposition → COVID-19)**: 3 bacterial taxa causally associated with COVID-19 severity, 8 with hospitalization risk, and 10 with infection risk (Li et al. 2023, quasi-experimental)
- **Backward Mendelian Randomization (COVID-19 → microbiome changes)**: 5 COVID-19-related taxa identified with potential reverse causal effects, suggesting the infection itself reshapes the microbiota
- **Protective bacteria identified**: Faecalibacterium and Roseburia (short-chain fatty acid producers) showed protective effects; their relative depletion may increase COVID-19 risk
- **Pathogenic enrichment**: Taxa including Bacteroides, Ruminococcus, and Eubacterium showed causal associations with increased COVID-19 severity

## Methods

**Study design**: Bidirectional Mendelian Randomization (MR) using summary statistics from genome-wide association studies (GWAS)

**Sample size**: 
- Over 1.8 million individuals analyzed
- Three distinct COVID-19 phenotypes: severity (hospitalization vs. non-hospitalization), hospitalization (hospitalized vs. population control), infection (COVID-19 vs. population control)
- 196 bacterial taxa analyzed from phylum level to genus level

**Statistical approach**:
- Primary method: Inverse-variance weighted (IVW) analysis
- False discovery rate (FDR) correction applied (p-FDR < 0.05)
- Sensitivity analyses: Secondary MR methods, horizontal pleiotropy test, outlier detection, leave-one-out analysis

**Data source**: Summary statistics from published GWAS consortia of the human gut microbiome and three COVID-19 outcomes

## Detailed Summary

### Forward MR (Genetic Predisposition to COVID-19)

The researchers identified specific bacterial taxa whose genetic variation (using SNP proxies) causally influenced COVID-19 outcomes:

**COVID-19 severity** (3 taxa):
- Faecalibacterium (protective, inverse association)
- Roseburia (protective, inverse association)
- Bacteroides (risk-associated, positive association)

**Hospitalization risk** (8 taxa):
- Protective: Faecalibacterium, Roseburia, Lachnospiraceae family members, Coprococcus, Dialister
- Risk-associated: Bacteroides, Ruminococcus, Eubacterium

**Infection risk** (10 taxa):
- Protective taxa depleted in COVID-19 cases
- Risk taxa enriched in infected individuals
- The pattern suggests microbiota composition influences the probability of SARS-CoV-2 infection and initial viral containment

### Reverse MR (COVID-19 → Microbiota Changes)

Five bacterial taxa showed evidence of reverse causality—infection with SARS-CoV-2 itself induced changes in microbiota composition:
- Suggests the virus drives dysbiosis as a consequence, creating a feedback loop
- Taxa composition shifts may either exacerbate or ameliorate subsequent disease progression

### Key Mechanistic Insight

The protective effect of Faecalibacterium and Roseburia aligns with their known roles as butyrate (short-chain fatty acid) producers. Butyrate strengthens intestinal barrier integrity via histone deacetylase inhibition and supports regulatory T cell differentiation through GPCR43 signaling—both crucial for preventing secondary bacterial translocation and excessive inflammatory responses.

## Relevance to WikiBiome

This study provides causal evidence (not merely association) linking specific bacterial taxa to COVID-19 outcomes. The data supports:

1. **Entity pages for bacteria**: Faecalibacterium and Roseburia as anti-inflammatory, barrier-protective commensals that are depleted in COVID-19
2. **Concept page for nutritional immunity and dysbiosis**: The loss of butyrate producers is equivalent to a loss of metabolic support for intestinal barrier function
3. **Cross-disease pattern**: These same taxa are depleted in other inflammatory diseases (Crohn's disease, ulcerative colitis), suggesting shared ecological dysbiosis mechanisms
4. **Selective pressure concept**: SARS-CoV-2 infection actively selects against SCFA producers and in favor of pathogenic Gram-negative bacteria, exemplifying metal and metabolite-mediated selection

## Relevance to Cureva

**Intervention hypothesis**: Restoration of Faecalibacterium and Roseburia (e.g., via inulin, FOS, or targeted probiotic formulations) may reduce severity in acute COVID-19 or prevent progression to long COVID.

**STOP signal**: Broad-spectrum antibiotics targeting the protective taxa without specific reprieve may increase COVID-19 severity—a testable hypothesis given the Bernard-Raichon et al. (2022) findings on antibiotic-driven dysbiosis.

**Signature utility**: This MR study provides bidirectional causal evidence suitable for Karen's Brain primitive 4 (Microbial Metal Dependencies as Achilles' Heels), if the protective taxa are shown to depend on iron or zinc sequestration that might be exploited therapeutically.

## Open Questions

1. **What metal dependencies do the protective taxa have?** If Faecalibacterium and Roseburia depend on iron or zinc, sequestration of these metals could theoretically enhance their competitive advantage during COVID-19.
2. **Temporal dynamics**: Does the causal effect of protective taxa persist across the acute/chronic transition to long COVID, or do new dysbiotic patterns emerge?
3. **Reverse causality dosage**: Which COVID-19 phenotype (viral load, duration, inflammatory markers) most strongly drives the reverse MR signal?
4. **Functional validation**: Do FMT or targeted probiotics reconstituting these taxa improve COVID-19 outcomes in prospective trials?

## Contradictions / Tensions

- **MR assumptions**: Mendelian randomization assumes no unmeasured pleiotropy (one SNP affecting microbiome and COVID-19 through different pathways). The study applies horizontal pleiotropy tests, but residual unmeasured pleiotropy cannot be fully excluded.
- **GWAS resolution**: GWAS-derived SNP associations capture genetic predisposition proxies but may not capture the full causal effect of live bacteria on immune response.

