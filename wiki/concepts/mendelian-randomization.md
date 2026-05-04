---

title: Mendelian Randomization
type: concept
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization, xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization, ni-2022-gut-microbiota-psychiatric-disorders-mendelian-randomization, wang-2024-causal-gut-microbiota-gerd-bidirectional-mr, luo-2023-gut-microbiota-t1d-bidirectional-mendelian-randomization, li-2024-causal-role-gut-microbiota-long-covid-mendelian-randomization, he-2023-causal-effects-gut-microbiome-me-cfs-mendelian-randomization, wang-2023-gut-microbiota-cad-mi-mendelian-randomization, zheng-2025-gut-thyroid-axis-aitd-mendelian-randomization, nalls-2021-mendelian-randomization-microbiome-parkinsons-causality, zeng-2023-gut-microbiome-epilepsy-mendelian-randomization, zhang-2022-causal-microbiome-cvd-mendelian-randomization, jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer, zeng-2025-copper-iron-trace-elements-fibromyalgia-mr]
source_count: 14
tags: [mendelian-randomization, causal-inference, MiBioGen, GWAS, instrumental-variable, bidirectional-MR, microbiome-causality]
karen_brain_primitives: [1, 5]
seo_target: "Mendelian randomization gut microbiome causal"
platform: wikibiome
---

# Mendelian Randomization

## Overview

Mendelian randomization (MR) is a statistical method that uses genetic variants as instrumental variables to infer causal relationships between an exposure (e.g., gut microbiome composition) and an outcome (e.g., disease). Because genetic variants are randomly allocated at conception ("nature's randomized trial"), MR can distinguish causation from correlation in observational data -- a critical capability for microbiome research, where most evidence is cross-sectional and confounded.

In the WikiBiome vault, MR studies provide the strongest available evidence for causal direction: does dysbiosis cause disease, or does disease cause dysbiosis? The answer is often "both" (bidirectional MR), which has profound implications for intervention timing and strategy.

## Method

### Core Design: Two-Sample MR

Nearly all microbiome MR studies in the vault use two-sample bidirectional MR:

1. Exposure GWAS: Genetic variants (SNPs) associated with gut microbiome composition, primarily from the MiBioGen consortium (n=18,340; 211 taxa; 16S rRNA; multi-ethnic but predominantly European).
2. Outcome GWAS: Disease-specific GWAS from large biobanks (UK Biobank, FinnGen, etc.).
3. Instrumental variable analysis: SNPs associated with microbiome features serve as instruments to test whether those features causally affect disease risk.
4. Bidirectional analysis: The reverse direction (disease→microbiome) is tested separately.

### Statistical Methods

- IVW (inverse-variance weighted): Primary analysis
- MR-Egger: Detects and corrects for directional pleiotropy
- Weighted median: Robust when up to 50% of instruments are invalid
- MR-PRESSO: Outlier detection and correction
- Cochran's Q: Heterogeneity assessment

### Limitations

- MiBioGen resolution: 16S rRNA gene, genus-level maximum. Species-level and functional (shotgun) GWAS are not yet available at comparable scale.
- Population ancestry: Predominantly European; generalizability to other populations uncertain.
- Weak instruments: Microbiome GWAS effect sizes are small; weak instrument bias may inflate or attenuate causal estimates.
- Horizontal pleiotropy: SNPs may affect disease through pathways other than the microbiome.
- Static snapshot: MR captures genetic predisposition to microbiome composition, not the dynamic, diet-responsive community.

## Key Causal Findings Across Conditions

### Microbiome → Disease (Forward MR)

| Condition | Causal Taxa | Direction | Effect | Source |
|-----------|------------|-----------|--------|--------|
| [[schizophrenia]] | Clostridia, Betaproteobacteria | Risk | Causal drivers of SCZ | [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]] |
| [[type-1-diabetes]] | Bacteroidetes | Risk | OR=1.24 | [[luo-2023-gut-microbiota-t1d-bidirectional-mendelian-randomization]] |
| [[type-1-diabetes]] | Eubacterium eligens | Protective | OR=0.64 | [[xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization]] |
| [[type-1-diabetes]] | [[bifidobacterium]] | Risk | OR=1.605 | [[xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization]] |
| [[gerd]] | [[actinobacteria]], [[lachnospiraceae]] | Protective | OR=0.93 | [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]] |
| [[cardiovascular-disease|coronary-artery-disease]] | [[odoribacter]] | Risk | OR=1.206 | [[wang-2023-gut-microbiota-cad-mi-mendelian-randomization]] |
| [[graves-disease]] | [[intestinibacter]] | Risk | OR=1.777 | [[zheng-2025-gut-thyroid-axis-aitd-mendelian-randomization]] |
| [[hashimotos-thyroiditis]] | [[akkermansia-muciniphila]] | Protective | OR=0.71 | [[zheng-2025-gut-thyroid-axis-aitd-mendelian-randomization]] |
| [[colorectal-cancer]] | [[lachnospira]] | Risk | OR=4.43 | MR studies in vault |
| [[celiac-disease]] | [[bifidobacterium]] | Risk | OR=1.401 | [[xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization]] |

### Disease → Microbiome (Reverse MR)

| Condition | Effect on Microbiome | Source |
|-----------|---------------------|--------|
| [[schizophrenia]] | Akkermansia enrichment is a *consequence*, not cause | [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]] |
| [[gerd]] | GERD causally depletes 13 taxa → bidirectional vicious cycle | [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]] |
| Hypertension | Depletes [[alistipes]], [[phascolarctobacterium]], [[roseburia]] | MR studies in vault |

### Metal → Disease (MR)

| Exposure | Condition | Effect | Source |
|----------|-----------|--------|--------|
| [[copper]] | [[fibromyalgia]] | Causal risk | OR=1.095 | [[zeng-2025-copper-iron-trace-elements-fibromyalgia-mr]] |
| [[iron]] | [[fibromyalgia]] | Causal protection | OR=0.440 | [[zeng-2025-copper-iron-trace-elements-fibromyalgia-mr]] |

### Null Results (Equally Important)

- [[multiple-sclerosis]]: No replicable causal single-taxon signal despite many observational associations [[xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization]]. MR's discriminating power is demonstrated by what it *doesn't* find.

## Paradigm-Shifting Insights

### The Bifidobacterium Paradox
[[bifidobacterium]] appears protective in observational studies and is widely used as a probiotic. MR reveals it causally increases risk for T1D (OR=1.605) and celiac disease (OR=1.401) [[xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization]]. This does not invalidate probiotic use but demands strain-level and context-specific evaluation rather than blanket recommendations.

### Bidirectional Vicious Cycles
GERD depletes protective taxa, and those taxa causally protect against GERD -- a self-reinforcing cycle that explains disease chronicity [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]]. This pattern likely applies to other chronic conditions.

### Distinguishing Cause from Consequence
The most valuable MR contribution: Akkermansia enrichment in schizophrenia is a disease consequence, not a driver [[zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization]]. This kind of directional clarity prevents misguided therapeutic targeting.

## Relevance to WikiBiome

MR studies serve as the causal backbone of WikiBiome's knowledge graph. While observational studies identify associations, MR provides the directional arrows:

- For entity pages: MR evidence determines whether a taxon-disease association is causal (drives intervention strategy) or consequential (useful as biomarker only).
- For signature pages: MR helps distinguish which signature layers are causally upstream vs. reactive downstream changes.
- For intervention pages: Only causally implicated taxa are rational therapeutic targets; MR filters signal from noise.

## Cross-References

- [[gut-microbiome]] -- The exposure most commonly instrumented in microbiome MR
- [[biomarkers]] -- MR distinguishes causal targets from biomarkers
- [[bifidobacterium]] -- The paradox case
- [[akkermansia-muciniphila]] -- Consequence, not cause, in schizophrenia
- [[co-selection]] -- Metal exposure as a confound MR can help untangle
- [[iron]] -- Causally protective in fibromyalgia (MR)
- [[copper]] -- Causally harmful in fibromyalgia (MR)
