---
title: "Han 2024 — Bidirectional Mendelian Randomization: Gut Microbiota and Male Reproductive Diseases"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Xiaofang Han, Hui Tian, Liu Yang, Yuanyuan Ji]
corresponding_author: "Xiaofang Han"
corresponding_email: "hxfkgwy@163.com"
institution: "Core Laboratory, Shanxi Provincial People's Hospital (Fifth Hospital of Shanxi Medical University), Taiyuan, China"
year: 2024
journal: "Scientific Reports"
doi: "10.1038/s41598-024-69179-9"
evidence_level: quasi-experimental
sample_size: "n=18,340 (microbiota GWAS) + 681 cases / 72,799 controls (male infertility) + 915 cases / 209,006 controls (abnormal spermatozoa)"
tags: [erectile-dysfunction, male-infertility, abnormal-spermatozoa, mendelian-randomization, gut-microbiota, GWAS, bacteroidaceae, pasteurellaceae, eubacterium, lactococcus, streptococcaceae, lachnospiraceae, porphyromonadaceae]
library_category: causal
platform: both
condition: erectile dysfunction
karen_brain_primitives: [1, 5]
metals_discussed: [calcium]
taxa_discussed: [bacteroidaceae, pasteurellaceae, bacteroides, eubacterium-oxidoreducens, eubacterium-ventriosum, lactococcus, ruminococcaceae-nk4a214, erysipelotrichia, porphyromonadaceae, streptococcaceae, lachnospiraceae-ucg001, prevotella-9, ruminococcaceae-ucg009, streptococcus, erysipelotrichales]
key_findings:
  - "Bacteroidaceae (OR=0.34) and Pasteurellaceae (OR=0.61) are protective against male infertility via MR"
  - "Eubacterium oxidoreducens (OR=2.05) and Lactococcus (OR=1.45) increase male infertility risk"
  - "Streptococcaceae (OR=2.54) and Streptococcus (OR=2.31) increase abnormal spermatozoa risk; Porphyromonadaceae (OR=0.39) is protective"
keystone: false
---

# Han 2024 — Bidirectional Mendelian Randomization: Gut Microbiota and Male Reproductive Diseases

## Key Findings

- **Five bacterial genera were protective against male infertility**: family *Bacteroidaceae* (OR 0.34, 95% CI 0.155--0.730, p=0.006), family *Pasteurellaceae* (OR 0.61, 95% CI 0.416--0.886, p=0.01), genus *Bacteroides* (OR 0.34, 95% CI 0.155--0.730, p=0.006), genus *Ruminococcaceae NK4A214 group* (OR 0.54, 95% CI 0.292--0.987, p=0.045), and order *Pasteurellales* (OR 0.61, 95% CI 0.416--0.886, p=0.01) ([[bacteroidaceae]], [[bacteroides]], [[ruminococcaceae]]).
- **Three bacterial genera increased male infertility risk**: genus *Eubacterium oxidoreducens group* (OR 2.05, 95% CI 1.203--3.486, p=0.008), genus *Eubacterium ventriosum group* (OR 1.66, 95% CI 0.977--2.828, p=0.061), and genus *Lactococcus* (OR 1.45, 95% CI 1.013--2.061, p=0.042) ([[eubacterium]], [[lactococcus]]).
- **For abnormal spermatozoa**, *Streptococcaceae* (OR 2.54, 95% CI 1.502--4.306, p=0.0005), *Streptococcus* (OR 2.31, 95% CI 1.377--3.885, p=0.0015), and *Erysipelotrichia* (OR 1.77, 95% CI 1.031--3.034, p=0.04) were risk-increasing, while *Porphyromonadaceae* (OR 0.39, 95% CI 0.207--0.715, p=0.0025) and *Prevotella 9* (OR 0.66, 95% CI 0.459--0.942, p=0.02) were protective ([[streptococcus]], [[prevotella]]).
- **Reverse MR analysis** found no significant causal effect of male reproductive diseases on gut microbiota composition, suggesting unidirectional causality from microbiome to disease.
- **Enrichment analysis** identified calcium (Ca2+) signaling and immunological pathways as key mediators linking gut microbiota to male reproductive outcomes.

## Methods

**Design**: Two-sample bidirectional Mendelian randomization using summary-level GWAS data. The study leveraged genetic variants (SNPs) as instrumental variables to infer causal relationships, minimizing confounding inherent in observational studies.

**Data sources**:
- **Gut microbiota GWAS**: MiBioGen Consortium — 18,340 individuals from 24 cohorts across the US, Europe, and Korea. 211 taxa classified at 5 levels (9 phyla, 16 classes, 20 orders, 35 families, 131 genera). 16S rRNA gene sequencing (V3--V4, V1--V2 variable regions).
- **Male infertility GWAS**: IEU OpenGWAS (ID: finn-b-N14_MALEINFERT) — 681 cases, 72,799 controls. ICD-10 code N46.
- **Abnormal spermatozoa GWAS**: IEU Open GWAS (ID: R18_ABNORMAL_SPERMATOZ) — 915 cases, 209,006 controls of European ancestry.

**MR methods**: Inverse variance weighted (IVW, primary), MR-Egger, weighted median, weighted mode, and simple mode. Sensitivity analyses included Cochran's Q-test for heterogeneity, MR-Egger intercept for pleiotropy, MR-PRESSO for outlier detection, and leave-one-out analysis. IV selection: genome-wide significance threshold p < 1 x 10^-5, LD clumping r^2 < 0.01 within 10,000 kb, F-statistic > 10.

**Taxonomic levels examined**: Phylum, class, order, family, and genus — providing resolution across multiple hierarchical levels, unlike studies limited to genus-level analysis.

## Detailed Summary

### Male Infertility Results

Eight gut microbiota members were causally associated with male infertility. The protective taxa were predominantly from the *Bacteroidaceae*/*Bacteroidales* lineage — family *Bacteroidaceae* and genus *Bacteroides* both showed OR 0.34 (p=0.006), suggesting that increased genetic predisposition to higher *Bacteroides* abundance reduces infertility risk by approximately 66%. Family *Pasteurellaceae* and order *Pasteurellales* showed concordant protective effects (OR 0.61, p=0.01). The *Ruminococcaceae NK4A214 group* was also protective (OR 0.54, p=0.045).

Risk-increasing taxa included *Eubacterium oxidoreducens group* (OR 2.05, p=0.008) — the strongest risk association — and *Lactococcus* (OR 1.45, p=0.042). *Eubacterium*, a *Firmicutes* genus found in the colon, is associated with depression, fatigue, obesity, type II diabetes, inflammatory bowel disease, cardiovascular disease, colorectal cancer, autism, and senile sarcosis. The link between *Eubacterium* and male infertility had not been previously reported.

No significant heterogeneity was detected (Cochran's Q-test p > 0.05). MR-Egger intercept tests confirmed no horizontal pleiotropy.

### Abnormal Spermatozoa Results

Eight bacterial genera showed causal effects on abnormal spermatozoa. Protective taxa included family *Porphyromonadaceae* (OR 0.39, p=0.0025) and genus *Prevotella 9* (OR 0.66, p=0.02). Both are associated with metabolic syndrome indices and may protect sperm by controlling the body's metabolic index, reducing chronic inflammation.

Risk-increasing taxa included class *Erysipelotrichia* (OR 1.77, p=0.04), family *Streptococcaceae* (OR 2.54, p=0.0005), genus *Lachnospiraceae UCG001* (OR 1.59, p=0.02), genus *Ruminococcaceae UCG009* (OR 1.44, p=0.04), genus *Streptococcus* (OR 2.31, p=0.0015), and order *Erysipelotrichales* (OR 1.77, p=0.04). Pathogenic bacteria such as *Erysipelotrichia*, *Streptococcus*, *Lachnospiraceae*, *Ruminococcaceae*, and *Erysipelotrichales* can produce endotoxin that binds to human spermatozoa, activating TLR-4/MyD88-dependent pathways and inducing pro-inflammatory factors that damage the blood-testis barrier, impair spermatogenesis, and cause DNA double-strand breaks.

### Reverse MR Analysis

Reverse MR found **no significant causal associations** between either male infertility or abnormal spermatozoa and the previously identified gut bacteria, confirming unidirectional causality from microbiome to disease.

### Enrichment Analysis

Enrichment of causative microbial lead SNPs identified:
- **158 regulatory pathways** associated with male infertility (30 significantly enriched)
- **198 regulatory pathways** associated with abnormal spermatozoa (30 significantly enriched)

Key pathways included calcium (Ca2+) signaling — CatSper channels mediate sperm capacitation and acrosome reaction, and Ca2+ homeostasis disruption may link gut microbiota to infertility. Multiple immune pathways were also enriched: T cell activation, leukocyte cell-cell adhesion, regulation of inflammatory response, and cytokine production — suggesting immune-mediated mechanisms connect gut dysbiosis to testicular damage.

### Proposed Mechanisms

The authors propose that pathogenic gut bacteria produce endotoxin (LPS) that:
1. Binds spermatozoa and activates TLR-4 → MyD88 → MAPK/NF-kB cascade
2. Upregulates pro-inflammatory factors damaging the blood-testis barrier
3. Impairs spermatogenesis via iNOS induction and oxidative stress
4. Disrupts SYCP gene expression (synaptonemal complex), causing chromosome segregation errors and DNA double-strand breaks
5. Decreases GGNBP2 expression (gametogenetin binding protein 2), impairing meiotic DNA repair

## Relevance to WikiBiome

This study provides causal (MR-level) evidence for the **gut-testis axis** concept, complementing observational studies in the vault. Key entity pages to update:

- **[[bacteroides]]** — Add protective role against male infertility (OR 0.34). *Bacteroidaceae* abundance may improve testicular microenvironment via faecal microbiota transplantation studies cited by the authors.
- **[[streptococcus]]** — Add as risk factor for abnormal spermatozoa (OR 2.31), with endotoxin-mediated TLR-4 mechanism.
- **[[lactococcus]]** — Surprising finding of infertility risk (OR 1.45), given typical probiotic associations.
- **[[eubacterium]]** — Novel association with male infertility not previously reported.
- **[[lachnospiraceae]]** — Genus *Lachnospiraceae UCG001* linked to abnormal spermatozoa (OR 1.59), consistent with [[zhang-2023-causal-gut-microbiota-ed-mr]] which found family *Lachnospiraceae* increases ED risk (OR 1.265).
- **[[prevotella]]** — Protective against abnormal spermatozoa (*Prevotella 9*, OR 0.66).
- **[[ruminococcaceae]]** — Split finding: *NK4A214 group* protective against infertility (OR 0.54), but *UCG009* increases spermatozoa abnormality risk (OR 1.44). This genus-level discordance is important for signature granularity.

The **calcium signaling** enrichment pathway is relevant to the [[calcium]] entity page and the concept of [[nutritional-immunity]] — Ca2+ channels (CatSper) are critical for sperm function, and microbial disruption of calcium homeostasis represents a novel mechanism.

## Relevance to Cureva

This study strengthens the [[erectile-dysfunction]] signature by providing MR-level causal evidence for taxa implicated in the broader male reproductive disease cluster. Specific implications:

- **Taxonomic signature expansion**: Several taxa overlap between this study's male infertility/abnormal spermatozoa findings and the existing ED signature. *Lachnospiraceae* appears as a risk taxon across both this study and [[zhang-2023-causal-gut-microbiota-ed-mr]], reinforcing its role in the signature's enriched taxa.
- **Cross-condition pattern**: Male infertility, abnormal spermatozoa, and ED share overlapping gut microbiota profiles — particularly *Lachnospiraceae* (risk) and *Ruminococcaceae* subgroups (mixed protective/risk). This supports grouping these conditions under a broader "gut-reproductive axis" cluster in the associated conditions matrix.
- **Intervention hypotheses**: The protective effect of *Bacteroides* and *Porphyromonadaceae* suggests probiotic or prebiotic strategies targeting these taxa could be explored as interventions. FMT from donors enriched in *Bacteroidales* has been shown to rescue testicular function in high-fat-diet mouse models (Hao et al. 2022, cited by the authors).
- **STOP signal**: The endotoxin/TLR-4 mechanism suggests that interventions increasing *Streptococcus* or *Erysipelotrichia* load (e.g., certain fermented dairy products enriched in *Streptococcus thermophilus* at high doses) may warrant evaluation as potential STOPs in male reproductive disease contexts.

## Contradictions / Tensions

- **Lachnospiraceae discordance**: This study finds *Lachnospiraceae UCG001* increases abnormal spermatozoa risk (OR 1.59), consistent with [[zhang-2023-causal-gut-microbiota-ed-mr]] finding *Lachnospiraceae* family increases ED risk (OR 1.265). However, *Lachnospiraceae* are generally classified as beneficial SCFA producers and are depleted in many disease signatures in the vault (IBD, CRC). The male reproductive context may represent a genus-specific divergence — not all *Lachnospiraceae* subgroups are protective. This tension needs explicit annotation on the [[lachnospiraceae]] entity page.
- **Ruminococcaceae split**: *Ruminococcaceae NK4A214 group* is protective against infertility (OR 0.54), while *Ruminococcaceae UCG009* increases abnormal spermatozoa risk (OR 1.44), and [[zhang-2023-causal-gut-microbiota-ed-mr]] found *Ruminococcaceae UCG013* protective against ED (OR 0.770). This within-family discordance underscores the danger of family-level generalizations in signature pages.
- **Reverse causality absence**: The null reverse MR result (diseases do not alter microbiota) is in tension with the general ecological principle that disease-state physiology (inflammation, immune activation, medication) reshapes gut ecology. This may reflect power limitations rather than true absence of reverse causality.

## Open Questions

1. **Which specific *Eubacterium* species drive infertility risk?** The *E. oxidoreducens group* designation is broad; species-level identification would clarify the mechanistic pathway and potential metal dependencies.
2. **Does the calcium signaling pathway implicate metal-dependent mechanisms?** Ca2+ channel disruption by heavy metals (cadmium displacing calcium via molecular mimicry) is well-established — could cadmium exposure amplify the gut-testis axis effect via CatSper channel mis-metallation?
3. **Do the protective *Bacteroidaceae* effects operate through SCFA production, bile acid metabolism, or immune modulation?** The mechanism behind the strong protective effect (66% risk reduction) is not elucidated.
4. **Are the endotoxin/TLR-4 pathways modifiable by metal chelation or metal restriction strategies?** If LPS-mediated testicular damage is amplified by metal-dependent bacterial virulence, metal restriction could be a complementary intervention.
5. **European ancestry limitation**: All abnormal spermatozoa GWAS data came from European-ancestry populations. Cross-ethnic validation is needed, particularly given known differences in microbiome composition across populations.
