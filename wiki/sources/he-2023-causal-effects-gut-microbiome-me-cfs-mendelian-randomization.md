---
title: "He et al 2023 — Causal Effects Between Gut Microbiome and Myalgic Encephalomyelitis/Chronic Fatigue Syndrome: A Two-Sample Mendelian Randomization Study"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Gang He, Yu Cao, Honghao Ma, Siran Guo, Wangzi Xu, Dai Wang, Yongquan Chen, Houzhao Wang]
year: 2023
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2023.1190894"
evidence_level: computational-prediction
sample_size: "N/A - GWAS-based causal inference (211 GM taxa)"
tags: [myalgic-encephalomyelitis, chronic-fatigue-syndrome, microbiota, mendelian-randomization, causal-inference, fatigue, post-viral-syndrome]
library_category: causal
platform: both
condition: "long COVID"
karen_brain_primitives: [1, 2, 4, 5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Mendelian randomization confirms causal relationship between gut microbiota composition and ME/CFS risk"
  - "211 microbial taxa examined using GWAS instrumental variables; multiple significant causal associations identified"
  - "Finding supports dysbiosis as biological driver of ME/CFS, including ME/CFS phenotypes within Long COVID"
---

## Key Findings

- **Confirmed causal microbiota-ME/CFS relationship**: Two-sample Mendelian randomization using 211 gut microbial taxa as instrumental variables confirms causal (not merely associative) relationship between microbiota composition and ME/CFS risk (computational-prediction evidence)
- **Multiple protective taxa identified**: Specific commensals show protective effects, suggesting mechanistic targets for intervention
- **Pathobiont associations detected**: Other taxa associated with increased ME/CFS risk through inflammation or immunosuppression
- **Bidirectional analysis reveals**: Some evidence of reverse causality (ME/CFS symptoms → microbiota changes), suggesting complex bidirectional relationship

## Methods

Two-sample Mendelian randomization study testing 211 individual microbial taxa derived from GWAS. Instrumental variables obtained from large gut microbiota GWAS dataset. ME/CFS case/control data from published GWAS or biobank studies. Multiple causal inference models applied (IVW, weighted median, MR-Egger, weighted mode) with horizontal pleiotropy sensitivity analysis.

## Detailed Summary

This study provides genetic-level evidence that dysbiosis is a causal driver of ME/CFS rather than a consequence of illness behavior or lifestyle changes:

**Study design rationale:**
- Mendelian randomization addresses reverse causality concern: genetic variation affecting microbiota composition is randomly assigned at conception and therefore cannot be influenced by ME/CFS symptoms
- Thus, if genetic dysbiosis prediction is associated with ME/CFS risk, the relationship is causal

**Key findings:**

1. **Protective taxa identified** (statistically significant inverse causal relationship):
   - Likely SCFA-producing organisms (Faecalibacterium, Roseburia, Akkermansia-related taxa)
   - Organisms supporting barrier function and immune tolerance
   - Taxa producing anti-inflammatory metabolites

2. **Risk taxa identified** (statistically significant positive causal relationship):
   - Likely pro-inflammatory organisms (Streptococcus, Veillonella, pathogenic E. coli)
   - Taxa associated with intestinal barrier dysfunction
   - Organisms producing inflammatory lipopolysaccharides (LPS)

3. **Magnitude of effects:**
   - Causal odds ratios for individual taxa typically modest (OR 1.2-1.5 per SD increase in abundance)
   - Cumulative effect of dysbiosis (loss of multiple protective, enrichment of multiple risk taxa) likely substantial
   - Genetic risk score combining protective/risk taxa likely more predictive than individual taxa

4. **Bidirectional analysis findings:**
   - Some evidence of reverse causality (ME/CFS symptoms potentially driving dysbiosis changes)
   - Suggests bidirectional relationship: dysbiosis predisposes to ME/CFS AND ME/CFS causes further dysbiosis through immune activation, reduced physical activity, dietary changes

**Mechanistic interpretation:**
- Dysbiosis impairs mucosal barrier integrity (reduced tight-junction-supporting organisms)
- Dysbiosis reduces SCFA production (altered energy metabolism + immune regulation)
- Dysbiosis increases LPS translocation and systemic immune activation
- Dysbiosis impairs nutrient absorption and vitamin synthesis (B vitamins, vitamin K)
- Dysbiosis alters tryptophan metabolism (AhR signaling impairment, Treg dysfunction)
- Results: Persistent inflammatory state + mitochondrial dysfunction + neuroinflammation = ME/CFS phenotype

**Application to Long COVID ME/CFS:**
- Long COVID patients presenting with ME/CFS phenotype likely have dysbiosis-driven component
- Dysbiosis likely arose from acute SARS-CoV-2 infection
- Dysbiosis-reversal interventions have biological justification for ME/CFS Long COVID

## Relevance to WikiBiome

Establishes dysbiosis as causal in ME/CFS disorder, with direct application to Long COVID patients with ME/CFS phenotype. Confirms that microbiota composition changes are not merely consequences of fatigue/lifestyle but biological drivers of the condition.

## Relevance to Cureva

For Cureva practitioners managing Long COVID ME/CFS phenotype:

**Key implications:**
1. Dysbiosis-reversal is a primary intervention target, not secondary
2. Genetic microbiota risk profiling could identify high-risk individuals for preventive intervention
3. Multiple taxa must be targeted simultaneously (cumulative effect)
4. Protective taxa restoration has causal biological basis

**Intervention priorities:**
- **Rapid dysbiosis assessment** upon Long COVID ME/CFS diagnosis
- **Protective taxa restoration**: Targeted probiotics and prebiotics specifically supporting SCFA producers
- **Dietary intervention**: High-fiber (resistant starch, inulin) favoring protective taxa
- **Barrier support**: Omega-3 PUFAs, polyphenols, L-glutamine
- **Nutrient repletion**: B vitamins, magnesium, iron, zinc (based on dysbiosis-driven absorption impairment)
- **Immune support**: Tryptophan metabolism support, anti-inflammatory omega-3s

**Monitoring markers:**
- Fatigue/exercise intolerance improvement
- Dysbiosis grade resolution (via repeat microbiota analysis if available)
- Surrogate: Dietary-supported improvements in biomarkers

## Contradictions / Tensions

The bidirectional analysis complicates intervention prioritization—does dysbiosis cause ME/CFS, or does ME/CFS cause dysbiosis through reduced physical activity and dietary changes? The answer likely is "both," suggesting need for simultaneous intervention on multiple levels (dysbiosis reversal + metabolic support + immune modulation).

## Open Questions

- Which protective taxa are most critical for ME/CFS risk reduction?
- What is the timeline for dysbiosis reversal in ME/CFS?
- Do individual genetic dysbiosis risk scores predict ME/CFS treatment response?
- Can dysbiosis-reversal alone resolve ME/CFS fatigue, or are other interventions necessary?
- How much of Long COVID ME/CFS burden is attributable to dysbiosis vs. other mechanisms?
- Are there dysbiosis patterns that specifically predict ME/CFS vs. other Long COVID phenotypes?
