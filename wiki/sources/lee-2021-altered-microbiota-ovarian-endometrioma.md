---
title: "Lee 2021 — Altered Composition of Microbiota in Women with Ovarian Endometrioma"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Sa-Ra Lee, Jae-Chul Lee, Sung-Hoon Kim, Young-Sang Oh, Hee-Dong Chae, Hochan Seo, Chil-Sung Kang, Tae-Seop Shin]
corresponding_author: "Sung-Hoon Kim"
corresponding_email: "kimsung@amc.seoul.kr"
institution: "Department of Obstetrics and Gynecology, Asan Medical Center, University of Ulsan College of Medicine, Seoul, Korea"
year: 2021
journal: "International Journal of Molecular Sciences"
doi: "10.3390/ijms22094608"
pmid: ""
evidence_level: case-control
sample_size: "n=90 (45 endometriosis, 45 controls)"
tags: [endometriosis, peritoneal-fluid, extracellular-vesicles, microbiome-signature, 16S-rRNA, dysbiosis, ovarian-endometrioma]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [acinetobacter, pseudomonas, streptococcus, enhydrobacter, propionibacterium, actinomyces, rothia, moraxellaceae, pseudomonadaceae, veillonellaceae, propionibacteriaceae, actinomycetaceae, actinobacteria, firmicutes, proteobacteria, verrucomicrobia, bacteroidetes, enterobacteriaceae, lactobacillus]
key_findings:
  - "Acinetobacter, Pseudomonas, Streptococcus, and Enhydrobacter were significantly increased in peritoneal fluid EVs of women with endometriosis (p < 0.05)"
  - "Propionibacterium, Actinomyces, and Rothia were significantly decreased in peritoneal fluid EVs of women with endometriosis (p < 0.05)"
  - "Beta diversity showed significant differences at order (p = 0.005), family (p = 0.003), and genus (p < 0.001) levels between endometriosis and controls"
keystone: false
---

## Key Findings

- **[[acinetobacter]]**, **[[pseudomonas]]**, **[[streptococcus]]**, and **Enhydrobacter** were significantly increased in peritoneal fluid (PF) extracellular vesicles (EVs) of women with advanced stage endometriosis compared to controls (p < 0.05) ([[lee-2021-altered-microbiota-ovarian-endometrioma]], case-control, n=90).
- **Propionibacterium**, **[[actinomyces]]**, and **Rothia** were significantly decreased in PF EVs of women with endometriosis (p < 0.05) ([[lee-2021-altered-microbiota-ovarian-endometrioma]]).
- Beta diversity analysis (Bray-Curtis) revealed significant community-level differences at order (p = 0.005), family (p = 0.003), and genus (p < 0.001) levels, while alpha diversity indices (Observed, Chao1, Shannon, Simpson) showed no significant differences ([[lee-2021-altered-microbiota-ovarian-endometrioma]]).
- **[[actinobacteria]]** were significantly decreased at both phylum and class levels in the endometriosis group (p < 0.05) ([[lee-2021-altered-microbiota-ovarian-endometrioma]]).
- The study is the first to characterize microbiota-derived EVs in peritoneal fluid in the context of endometriosis, suggesting EVs from the gut or lower genital tract may traverse barriers and affect the peritoneal environment ([[lee-2021-altered-microbiota-ovarian-endometrioma]]).

## Methods

- **Design:** Case-control study
- **Sample size:** 45 women with histologically confirmed ovarian endometrioma (34 Stage III, 11 Stage IV by r-ASRM) and 45 surgical controls (31 uterine leiomyoma, 14 benign ovarian cyst) from Asan Medical Center, Seoul, Korea
- **Exclusion criteria:** Women who had taken progestin, oral contraceptives, GnRH agonist, antibiotics, or probiotics within 12 weeks; those with IBD or cancer
- **Sample collection:** Peritoneal fluid obtained from posterior cul-de-sac or utero-vesical pouch via laparoscopic cannula during follicular phase
- **EV isolation:** Centrifugation at 3500x g for 15 min to remove cellular components, followed by 10,000x g for 10 min at 4°C to isolate EVs; validated by nanoparticle tracking analysis (NTA) confirming 80.4% (controls) and 94.1% (endometriosis) of particles were below 300 nm
- **Sequencing:** 16S rDNA V3-V4 region, MiSeq (Illumina); OTU clustering via CD-HIT; taxonomy assignment via UCLUST and QIIME against Greengenes 8.15.13
- **Statistical analysis:** Student's t-test on normalized OTU reads; Bray-Curtis dissimilarity for beta diversity; permutational multivariate analysis of variance; Kruskal-Wallis test for abundance imbalances; significance level p < 0.01

## Detailed Summary

### Alpha Diversity

No significant differences in species richness were observed between the two groups: Observed (p = 0.82), Chao1 (p = 0.4), Shannon (p = 0.12), Simpson (p = 0.14). This suggests the total number and evenness of bacterial species in PF EVs is comparable between cases and controls — the difference lies in community composition rather than richness.

### Beta Diversity

3D PCoA analysis of OTUs showed significant separation between groups (p < 0.001). 2D PCoA with Bray-Curtis distances showed significance increasing at lower taxonomic levels:

| Level | p-value |
|-------|---------|
| Phylum | 0.137 |
| Class | 0.062 |
| Order | 0.005 |
| Family | 0.003 |
| Genus | < 0.001 |

### Taxonomic Composition — Significant Differences

**Phylum level:**
- Actinobacteria: decreased in endometriosis (mean 0.0831 vs. 0.1107 controls, p = 0.0477)

**Class level:**
- Actinobacteria: decreased (0.0705 vs. 0.1004, p = 0.0255)

**Order level:**
- Pseudomonadales: increased in endometriosis (0.1037 vs. 0.0805, p = 0.0387)
- Actinomycetales: decreased (0.0429 vs. 0.0811, p = 0.0039)

**Family level:**
- Moraxellaceae: increased (0.0682 vs. 0.0459, p = 0.0008)
- Pseudomonadaceae: increased (0.0348 vs. 0.0230, p = 0.0128)
- Veillonellaceae: decreased (0.0058 vs. 0.0139, p = 0.0282)
- Propionibacteriaceae: decreased (0.0049 vs. 0.0129, p = 0.0110)
- Actinomycetaceae: decreased (0.0023 vs. 0.0133, p = 0.0243)

**Genus level (Table 1):**

| Genus | Control Mean (SD) | Endometriosis Mean (SD) | p-value |
|-------|-------------------|------------------------|---------|
| Acinetobacter | 0.0416 (0.0289) | 0.0602 (0.0265) | 0.0022 |
| Pseudomonas | 0.0208 (0.0175) | 0.0325 (0.0235) | 0.0097 |
| Propionibacterium | 0.0129 (0.0190) | 0.0049 (0.0062) | 0.0111 |
| Streptococcus | 0.0179 (0.0204) | 0.0291 (0.0231) | 0.0183 |
| Rothia | 0.0115 (0.0261) | 0.0018 (0.0045) | 0.0190 |
| Actinomyces | 0.0126 (0.0305) | 0.0017 (0.0043) | 0.0233 |
| Enhydrobacter | 0.0026 (0.0072) | 0.0071 (0.0114) | 0.0300 |

### Stage Subgroup Analysis

Microbial composition between Stage III and Stage IV endometriosis was similar, with significant differences only in Enterobacteriaceae (p < 0.01) and Propionibacterium (p < 0.01) at the genus level.

### Control Subgroup Analysis

Comparing controls with myoma vs. non-endometriotic ovarian cyst, only Bacteroides differed significantly (p < 0.01) at genus level. No age-related differences were found across three age strata.

### Extracellular Vesicle Characterization

NTA confirmed particles were predominantly nano-sized: control EVs had mean diameter 214.1 nm (mode 127.8 nm); endometriosis EVs had mean 173.7 nm (mode 128.0 nm).

## Relevance to WikiBiome

This study informs several entity and concept pages:

- **[[acinetobacter]]** — Confirms enrichment in peritoneal environment in endometriosis, consistent with its role as a principal peritoneal microbiome member. Add to `conditions_enriched_in`.
- **[[pseudomonas]]** — Enriched in endometriosis PF, consistent with Wei et al. 2020 findings. Relevant to its opportunistic pathogen profile.
- **[[streptococcus]]** — Another genus enriched in the endometriosis peritoneal environment.
- **[[actinobacteria]]** — Significant depletion at phylum/class level in endometriosis. Relevant to the concept of commensal loss as a feature of dysbiosis.
- **[[endometriosis]]** — Adds peritoneal fluid microbiome data to the disease entity page, particularly the EV-mediated mechanism of microbial influence on the peritoneal environment.
- **[[extracellular-vesicles]]** — Concept page: EVs as mediators of microbiota influence on distant sites, traversing intestinal barriers to affect peritoneal environment.
- **[[bacterial-contamination-hypothesis]]** — The authors explicitly reference the bacterial contamination hypothesis (Khan et al. 2014, Ref 14) as a framework for understanding how altered peritoneal microbiota contribute to endometriosis progression via LPS/TLR4 signaling.

## Relevance to Cureva

- **Signature evidence:** Provides taxonomic data for the [[endometriosis-signature]] — enrichment of Acinetobacter, Pseudomonas, Streptococcus in the peritoneal environment; depletion of Propionibacterium, Actinomyces, Rothia. The Actinobacteria depletion at phylum level is a consistent finding across multiple endometriosis microbiome studies.
- **Ecological interpretation:** The enrichment of Pseudomonadales (an order containing many opportunistic pathogens) paired with depletion of commensal Actinobacteria suggests a shift from commensal-dominated to pathobiont-dominated ecology in the peritoneal space — relevant to Karen's Brain Primitive 5 (Two-Sided Ecological Engineering).
- **EV mechanism:** Microbiota-derived EVs as a transport mechanism suggests the peritoneal microbiome may be shaped by gut-derived or genital-tract-derived EVs, not only by direct bacterial translocation. This has implications for intervention targeting — gut-level interventions may alter peritoneal outcomes via the EV pathway.
- **Intervention hypotheses:** The consistent enrichment of Acinetobacter and Pseudomonas across multiple studies suggests these genera as potential targets. Both are known to have metal-dependent virulence factors (siderophores, metalloenzymes) — linking to Primitive 4 (Microbial Metal Dependencies as Achilles' Heels).

## Contradictions / Tensions

- **Alpha diversity:** This study found no significant alpha diversity differences, which is consistent with some but not all endometriosis microbiome studies. Some studies report reduced diversity in endometriosis. The discrepancy may reflect the unique sample type (EV-derived DNA vs. direct swab/tissue).
- **Control group limitations:** Controls were women with uterine leiomyoma (n=31) or benign ovarian cysts (n=14), not healthy women without any gynecological condition. The authors acknowledge this may confound results, as peritoneal microbiota could be affected by these benign conditions. <!-- NEEDS VERIFICATION: compare with studies using healthy controls -->
- **Causality vs. association:** The authors explicitly note they cannot determine whether the altered microbiota composition causes endometriosis or is an epiphenomenon of the altered peritoneal immune environment. This tension applies to most microbiome-endometriosis studies.

## Open Questions

1. **Directionality:** Do the EVs originate from the gut, the lower genital tract, or from bacteria resident in the peritoneal cavity itself? The authors could not resolve this.
2. **Functional significance:** What cargo do these EVs carry — are they transporting LPS, proteins, or nucleic acids that directly promote inflammation and endometriotic lesion establishment?
3. **Metal dependencies:** Acinetobacter and Pseudomonas are known siderophore producers and iron-dependent organisms. Is the iron-rich peritoneal environment (hemolyzed blood from retrograde menstruation) selecting for these taxa? This connects to the metallomic layer of the endometriosis signature but was not explored in this study.
4. **Stage dependency:** The study found minimal differences between Stage III and IV. Would earlier stages (I-II) show a different microbial profile, potentially capturing the microbiome during disease establishment rather than established disease?
5. **Therapeutic implications:** If gut-derived EVs shape the peritoneal microbiome, could gut-targeted interventions (probiotics, dietary changes) alter peritoneal EV composition and affect endometriosis progression?
