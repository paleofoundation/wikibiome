---
title: "Zhong et al 2023 — Causal Effects of Gut Microbiome on COVID-19 Susceptibility and Severity: A Mendelian Randomization Study"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Meng-Mei Zhong, Jia-Hao Xie, Yao Feng, Shao-Hui Zhang, Jiang-Nan Xia, Li Tan, Ning-Xin Chen, Xiao-Lin Su, Qian Zhang, Yun-Zhi Feng, Yue Guo]
year: 2023
journal: "Frontiers in Immunology"
doi: "10.3389/fimmu.2023.1173974"
evidence_level: computational-prediction
sample_size: "N/A - GWAS-based causal inference (n=5,717,754 for microbiota)"
tags: [covid-19, microbiota, mendelian-randomization, causal-inference, disease-severity, susceptibility, GWAS]
library_category: causal
platform: wikibiome
condition: "COVID-19"
karen_brain_primitives: [1, 2, 4, 5]
metals_discussed: []
taxa_discussed: [akkermansia-muciniphila, faecalibacterium-prausnitzii]
key_findings:
  - "Mendelian randomization reveals causal relationship between specific gut microbiota taxa and COVID-19 susceptibility/severity"
  - "Multiple protective and risk taxa identified with distinct mechanisms"
  - "Bidirectional analysis suggests COVID-19 may reverse-cause microbiota composition changes"
---

## Key Findings

- **Causal microbiota-COVID-19 relationship**: Two-sample Mendelian randomization analysis using GWAS summary statistics (n=5,717,754 for microbiota composition, n=large COVID-19 cohorts) establishes causal relationship between genetically-determined microbiota and COVID-19 susceptibility and severity (computational-prediction evidence)
- **Protective taxa identified**: Specific commensal bacteria with genetic instruments showing protective effects against COVID-19, suggesting mechanisms amenable to intervention
- **Risk taxa identified**: Other taxa show increased COVID-19 risk, potentially through inflammatory or immunosuppressive mechanisms
- **Bidirectional causality detected**: Reverse-direction analysis suggests COVID-19 may cause downstream microbiota changes (dysbiosis as consequence rather than purely predisposing factor)

## Methods

Two-sample Mendelian randomization using summary statistics from large genome-wide association studies (GWAS). Microbiota data obtained from large microbiota GWAS cohorts. COVID-19 susceptibility and severity data from international COVID-19 consortium GWAS. Multiple causal inference methods used (inverse-variance weighted, weighted median, MR-Egger, weighted mode) with sensitivity analyses for horizontal pleiotropy and reverse causality testing.

## Detailed Summary

This Mendelian randomization study establishes causal relationships between gut microbiota composition and COVID-19 outcomes (susceptibility and severity), moving beyond observational associations.

**Key methodological approach:**
- Identifies genetic instrumental variables associated with microbiota abundance
- Tests whether these genetic variants predict COVID-19 susceptibility/severity without direct mechanisms independent of microbiota
- Uses robust statistical methods accounting for pleiotropy (confounding through non-microbiota pathways)
- Tests reverse causality (COVID-19 → microbiota changes)

**Primary findings for COVID-19 susceptibility:**
- Multiple taxa with statistically significant causal effects on susceptibility
- Protective taxa likely: Produce SCFA, stimulate IL-22, support Treg differentiation
- Risk taxa likely: Trigger pro-inflammatory responses, produce LPS, reduce mucosal barrier function

**Findings for COVID-19 severity:**
- Distinct set of taxa may predict severity vs. susceptibility
- Taxa composition may determine progression to critical illness vs. asymptomatic infection
- Specific pathobiont enrichment associated with severe COVID-19

**Bidirectional analysis findings:**
- Reverse causality testing (COVID-19 → microbiota) reveals significant effects
- Suggests acute SARS-CoV-2 infection directly disrupts microbiota composition
- Implies dysbiosis is both predisposing factor AND consequence of infection

**Integration with pathophysiology:**
- Protective taxa mechanisms: SCFA production, barrier function support, IL-22 induction, Th17/Treg balance maintenance
- Risk taxa mechanisms: LPS translocation, systemic immune activation, complement dysregulation
- Severity determinant: Taxa composition predicts whether immune response remains controlled vs. progresses to hyperinflammation

## Relevance to WikiBiome

Establishes microbiota as a causal determinant of COVID-19 outcomes, not merely a marker of disease. This supports including microbiota composition as a risk factor for severe COVID-19 and justifies dysbiosis as a mechanism for Long COVID development (dysbiosis post-acute COVID → continued immune dysregulation).

## Relevance to Cureva

For Cureva practitioners dealing with Long COVID derived from severe acute COVID-19:

**Implications:**
1. Genetic microbiota risk profiling could identify high-risk individuals for targeted intervention pre-COVID-19
2. Microbiota composition at acute COVID-19 stage may predict Long COVID development
3. Dysbiosis reversal strategies shown to reduce acute COVID-19 severity may also prevent Long COVID
4. Protective taxa restoration (e.g., Faecalibacterium, Akkermansia, specific Ruminococcaceae) has biological basis for intervention

**Intervention priorities:**
- Rapidly restore protective taxa during acute COVID-19 to prevent dysbiosis-driven immune hyperactivation
- For Long COVID patients: Determine if protective taxa restoration improves outcomes
- Dietary support for protective taxa (high-fiber, polyphenol-rich foods)
- Probiotic and prebiotic use specifically targeting protective taxa

## Contradictions / Tensions

The bidirectional analysis complicates causality interpretation—dysbiosis appears to both increase COVID-19 risk AND be caused by COVID-19. This suggests a feedback loop where initial dysbiosis risk is amplified by viral infection-driven dysbiosis, creating a vicious cycle. The relative contributions of predisposing vs. infection-induced dysbiosis remain unclear.

## Open Questions

- Which specific taxa are most predictive of severe COVID-19?
- Can microbiota-targeting interventions reduce COVID-19 severity in clinical trials?
- Do protective taxa at baseline predict lower Long COVID risk?
- What is the functional mechanism of each protective/risk taxon?
- How quickly does dysbiosis resolve after acute COVID-19 resolution?
- Can dysbiosis-driven microbiota interventions prevent Long COVID development?
