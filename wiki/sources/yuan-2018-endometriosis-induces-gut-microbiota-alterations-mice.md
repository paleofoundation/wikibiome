---
title: "Yuan 2018 — Endometriosis Induces Gut Microbiota Alterations in Mice"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Ming Yuan, Dong Li, Zhe Zhang, Huihui Sun, Min An, Guoyun Wang]
corresponding_author: "Guoyun Wang"
corresponding_email: "wangguoy@sdu.edu.cn"
institution: "Qilu Hospital of Shandong University"
year: 2018
journal: "Human Reproduction"
doi: "10.1093/humrep/dex372"
pmid: ""
evidence_level: animal-model
sample_size: "n=44 mice (endometriosis n=22, mock n=20, plus donor mice)"
tags: [endometriosis, gut-microbiota, dysbiosis, 16S-rRNA, mouse-model, firmicutes-bacteroidetes-ratio, immune-system]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [firmicutes, bacteroidetes, actinobacteria, proteobacteria, bifidobacterium, parasutterella, ruminococcaceae, bifidobacteriaceae, alcaligenaceae, betaproteobacteria, bacteroidia, bacteroidales, bifidobacteriales, burkholderiales]
key_findings: ["Mice with endometriosis developed distinct gut microbiota composition at 42 days post-modeling, despite similar alpha diversity and richness to controls", "Firmicutes/Bacteroidetes ratio was nearly twofold higher in endometriosis mice (P=0.0028), indicating dysbiosis", "Bifidobacterium, Parasutterella, and Ruminococcaceae-UGG-014 were enriched at the genus level in endometriosis mice"]
keystone: false
---

## Key Findings

- **Endometriosis alters gut microbiota composition over time** — mice with persistent endometrial lesions for 42 days developed significantly different microbial communities compared with mock controls, despite no differences at earlier time points (7, 14, 28 days) ([[yuan-2018-endometriosis-induces-gut-microbiota-alterations-mice]], animal-model).
- **Elevated Firmicutes/Bacteroidetes ratio** — endometriosis mice showed a nearly twofold increase in the F/B ratio compared to controls (P = 0.0028), a recognized marker of [[dysbiosis]] associated with obesity, hypertension, and irritable bowel syndrome ([[yuan-2018-endometriosis-induces-gut-microbiota-alterations-mice]], animal-model).
- **Bifidobacterium enrichment in endometriosis** — paradoxically, this commonly used probiotic genus was significantly increased in endometriosis mice (P = 0.020), along with [[Parasutterella]] (P = 0.017) and Ruminococcaceae-UGG-014 (P = 0.024) ([[yuan-2018-endometriosis-induces-gut-microbiota-alterations-mice]], animal-model).
- **Alpha diversity unchanged** — Shannon, Simpson, Chao1, and ACE indices showed no significant differences between endometriosis and mock groups at any time point, suggesting compositional shifts without loss of overall diversity ([[yuan-2018-endometriosis-induces-gut-microbiota-alterations-mice]], animal-model).
- **Peritoneal macrophages as potential mediators** — abnormal peritoneal macrophage morphology was detected in all endometriosis mice, and the authors propose macrophage-mediated immune remodeling (including Th17 cell elevation and IL-17 secretion) as a pathway linking ectopic lesions to gut microbial alterations ([[yuan-2018-endometriosis-induces-gut-microbiota-alterations-mice]], animal-model).

## Methods

- **Study design:** Prospective, randomized animal experiment using a murine endometriosis model in C57BL/6 mice maintained under SPF conditions.
- **Model induction:** Endometriosis was established by intraperitoneal injection of 15 endometrial segments in 200 ul sterile PBS per recipient mouse. Donor mice were pre-treated with estradiol benzoate (3 ug/mouse). Endometrial fragments from every two donors were mixed and equally injected into four recipients.
- **Groups and time points:** Mice were divided into endometriosis and mock (PBS injection) groups, sacrificed at 7, 14, 28, and 42 days post-modeling. n=4 per group at days 7, 14, and 28; n=10 endometriosis and n=8 mock at day 42.
- **Model confirmation:** Ectopic endometrial foci were confirmed by gross observation, HE staining, and immunofluorescent staining for E-cadherin and vimentin. Peritoneal macrophages were identified by flow cytometry (F4/80+, CD11b+).
- **Microbiota analysis:** 16S rRNA gene sequencing (V4 region, 515F-806R primers) on Illumina HiSeq2500, 250 bp paired-end reads. QIIME v1.7.0 for quality control; Uparse v7.0.1001 for OTU clustering at 97% similarity; GreenGene Database with RDP classifier v2.2 for taxonomic annotation.
- **Statistical analysis:** Alpha diversity (Shannon, Simpson, Chao1, ACE, observed species, Good's coverage). Beta diversity (weighted/unweighted UniFrac). PCoA analysis. UPGMA clustering. LEfSe method (LDA score threshold = 4, alpha = 0.05). T-test and Wilcoxon test for group comparisons.

## Detailed Summary

### Model Validation
Adherent ectopic endometrial foci were found in fatty tissues around the bladder in all endometriosis mice at 14, 28, and 42 days. At 7 days, most fragments remained isolated in the peritoneal cavity. Abnormal peritoneal macrophage morphology was observed in all endometriosis mice. HE and immunofluorescence confirmed the presence of both glandular epithelial (E-cadherin+) and stromal (vimentin+) cells in ectopic tissues. No body weight differences were observed between groups. No significant structural changes or inflammatory cell infiltration were found in colon HE staining.

### Alpha Diversity
Good's coverage >99.0% confirmed adequate sequencing depth. No significant differences in Shannon (P = 0.9501, 0.8759, 0.7836, 1.0 at days 7, 14, 28, 42 respectively) or Simpson indices between groups. Chao richness index also showed no significant differences (P = 0.6073, 0.1203, 0.9414, 0.5621 at days 7, 14, 28, 42).

### Beta Diversity and Compositional Shift
Beta diversity analysis revealed that the endometriosis group at 42 days was significantly different from the mock group (weighted UniFrac P = 0.0046) and showed obviously higher beta diversity than other groups. UPGMA clustering on weighted UniFrac at the phylum level separated the endometriosis-42d group clearly from all other groups. PCoA analysis (PC1 = 44.51%, PC2 = 21.02%) confirmed the distinct clustering.

### Taxonomic Differences at 42 Days (LEfSe and T-test)
| Taxon Level | Enriched in Endometriosis | Enriched in Mock | P-value |
|---|---|---|---|
| Phylum | [[Firmicutes]] (P=0.001), [[Actinobacteria]] (P=0.022) | [[Bacteroidetes]] (P=0.001) | — |
| Class | Unidentified Actinobacteria (P=0.027), Betaproteobacteria (P=0.055) | Bacteroidia (P=0.002) | — |
| Order | [[Bifidobacteriales]] (P=0.020), [[Burkholderiales]] (P=0.022) | [[Bacteroidales]] (P=0.001) | — |
| Family | [[Bifidobacteriaceae]] (P=0.020), Alcaligenaceae (P=0.018) | Bacteroidales_S24-7_group (P=0.006) | — |
| Genus | Ruminococcaceae-UGG-014 (P=0.024), [[Bifidobacterium]] (P=0.020), [[Parasutterella]] (P=0.017) | — | — |

### Firmicutes/Bacteroidetes Ratio
The F/B ratio was nearly twofold higher in endometriosis mice versus mock at 42 days (P = 0.0028). The authors note this ratio is an established indicator of dysbiosis, previously linked to obesity, hypertension, and irritable bowel disease.

### Proposed Mechanism
The authors hypothesize that peritoneal macrophages mediate bidirectional communication between endometriosis and gut microbiota. Ectopic endometrial tissues activate monocyte-derived and resident peritoneal macrophages, which remodel the peritoneal immune environment by affecting CD4+ T cell differentiation. Th17 cells are elevated in the peritoneal cavity in murine endometriosis, and IL-17 stimulates production of antimicrobial proteins by intestinal epithelial cells, forms tight junctions, mediates IgA transportation, and recruits granulocytes. Conversely, enhanced gut permeability and leakage of bacterial products may dysregulate peritoneal macrophage function and promote endometrial lesion survival.

## Relevance to WikiBiome

This study informs several entity and concept pages:

- **[[endometriosis]]** — first 16S rRNA sequencing study demonstrating gut microbiota changes in an endometriosis model; establishes the disease-microbiome axis
- **[[bifidobacterium]]** — paradoxical enrichment in an inflammatory condition; complicates the "always beneficial probiotic" narrative
- **[[parasutterella]]** — enriched in endometriosis; emerging as a taxon of interest in inflammatory conditions
- **[[firmicutes]]** / **[[bacteroidetes]]** — F/B ratio as a dysbiosis marker applies to endometriosis
- **[[dysbiosis]]** concept page — endometriosis as another condition featuring elevated F/B ratio
- **[[gut-immune-axis]]** concept — peritoneal macrophage-gut microbiota bidirectional communication pathway

## Relevance to Cureva

- **Signature evidence:** Supports the taxonomic layer of the [[endometriosis-signature]] — specifically the enrichment of [[Firmicutes]], [[Actinobacteria]], [[Bifidobacterium]], [[Parasutterella]], and depletion of [[Bacteroidetes]]/Bacteroidales. Confidence: preliminary (single animal study).
- **Ecological features:** Supports immune-mediated ecological remodeling as a driver of endometriosis-associated dysbiosis. Peritoneal macrophage dysfunction -> Th17 elevation -> altered intestinal antimicrobial peptide production -> microbiota shift.
- **Intervention hypotheses:** The bidirectional relationship suggests that FMT or targeted probiotic intervention could modulate endometriosis progression. However, the paradoxical [[Bifidobacterium]] enrichment means that generic Bifidobacterium-based probiotics should be evaluated carefully in endometriosis — potential STOP signal pending further evidence.
- **Primitive 5 (Two-Sided Ecological Engineering):** The bidirectional gut-peritoneum axis means interventions must address both the ectopic lesion-driven immune remodeling AND the resulting dysbiosis.

## Contradictions / Tensions

- **Bifidobacterium enrichment vs. probiotic conventions:** [[Bifidobacterium]] is widely promoted as a beneficial probiotic, yet this study finds it enriched in endometriosis mice. This could represent a compensatory/protective response, or it could indicate that specific Bifidobacterium species play context-dependent roles in inflammatory environments. This tension should be noted on the [[bifidobacterium]] entity page. <!-- NEEDS VERIFICATION: Does this finding hold in human endometriosis studies? -->
- **No alpha diversity change:** Many inflammatory conditions show reduced alpha diversity. Endometriosis here shows compositional shifts without diversity loss, which differs from patterns seen in IBD and other chronic inflammatory diseases. This may reflect the peritoneal (rather than luminal) nature of the inflammatory stimulus.

## Open Questions

1. **Does this pattern replicate in human endometriosis?** The authors explicitly acknowledge this limitation — mouse models cannot fully represent human gut-endometriosis interactions, particularly given that human lesions persist longer and at more diverse anatomical sites.
2. **What is the functional role of elevated Bifidobacterium?** Is it a compensatory protective response, or does it contribute to disease progression through immune modulation?
3. **What happens beyond 42 days?** The long-term trajectory of the dysbiosis is unknown — does it stabilize, worsen, or resolve if lesions are removed?
4. **Does FMT from endometriosis mice to germ-free mice induce or promote endometriosis?** This would establish causality in the bidirectional relationship.
5. **Which specific Bifidobacterium species are enriched?** 16S V4 sequencing has limited species-level resolution; shotgun metagenomics would clarify whether pathogenic or commensal strains dominate.
6. **Are metal cofactors involved in the immune-mediated pathway?** The study does not address metallomics, but the Th17/IL-17 axis and macrophage dysfunction may intersect with iron ecology and nutritional immunity — worth investigating against the endometriosis metallomic signature.
