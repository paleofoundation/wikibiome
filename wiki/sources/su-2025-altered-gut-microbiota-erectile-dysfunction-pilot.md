---
title: "Su 2025 — Altered Gut Microbiota in Erectile Dysfunction Patients: A Pilot Study"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Quanxin Su, Kenan Wang, Yayin Luo, Qizhen Tang]
corresponding_author: "Qizhen Tang"
corresponding_email: "lnfstqz@163.com"
institution: "The First Affiliated Hospital of Dalian Medical University"
year: 2025
journal: "Frontiers in Microbiology"
doi: "10.3389/fmicb.2025.1530014"
pmid: ""
evidence_level: case-control
sample_size: "n=34 (19 ED, 15 controls)"
tags: [erectile-dysfunction, gut-microbiota, metagenomics, metabolic-pathways, atherosclerosis, BCAA, dysbiosis]
library_category: signatures
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [ruminococcus-gnavus, bacteroides-intestinalis, thomasclavelia-ramosa, clostridium-nexile, eubacterium-siraeum]
key_findings:
  - "Bacteroides intestinalis significantly depleted in ED patients compared to healthy controls"
  - "Ruminococcus gnavus enriched in ED group, a species linked to obesity and metabolic dysfunction"
  - "Atherosclerosis-related KEGG pathways and lipid metabolism pathways upregulated in ED gut microbiota; BCAA degradation pathways downregulated"
keystone: false
---

## Key Findings

- **Bacteroides intestinalis was significantly depleted** in the ED group compared to controls, the only species reaching significance in both LEfSe and Metastat analyses. Its loss may promote chronic inflammation and endothelial dysfunction by reducing butyrate and ferulic acid production ([[su-2025-altered-gut-microbiota-erectile-dysfunction-pilot]], case-control, n=34).
- **Ruminococcus gnavus was enriched** in ED patients. This species has previously been linked to obesity and metabolic syndrome in independent metagenomic studies ([[su-2025-altered-gut-microbiota-erectile-dysfunction-pilot]], case-control, n=34).
- **Thomasclavelia ramosa, Clostridium sp. AF32-12BH, Clostridium nexile, and Eubacterium siraeum** were also enriched in ED patients, all species previously associated with metabolic disorders including NAFLD and type 1 diabetes ([[su-2025-altered-gut-microbiota-erectile-dysfunction-pilot]], case-control, n=34).
- **KEGG pathway analysis** revealed upregulation of purine metabolism (ko00230), glycerophospholipid metabolism (ko00564), and fluid shear stress/atherosclerosis pathways (ko05418) in ED; valine/leucine/isoleucine degradation (ko00280) and lipoic acid metabolism (ko00785) were downregulated ([[su-2025-altered-gut-microbiota-erectile-dysfunction-pilot]], case-control, n=34).
- **No significant differences in alpha or beta diversity** were observed between ED and control groups (Shannon p=0.8, Simpson p=0.4; ANOSIM R=0.017, p=0.26), though a non-significant trend toward lower alpha diversity in ED was noted ([[su-2025-altered-gut-microbiota-erectile-dysfunction-pilot]], case-control, n=34).

## Methods

- **Design:** Case-control study conducted at the First Affiliated Hospital of Dalian Medical University, May–July 2023.
- **Participants:** 19 male ED patients (IIEF-5 mean 12.11 +/- 4.9) and 15 healthy male controls (IIEF-5 mean 22.53 +/- 2), aged 18–60. Groups were matched on age (31.16 vs. 29.73, p=0.35) and BMI (27.37 vs. 23.47, p=0.06). Exclusion criteria included recent antimicrobial or probiotic use, diabetes, hypertension, thyroid dysfunction, prior pelvic surgery, and psychiatric disorders.
- **Sequencing:** Metagenomic (shotgun) sequencing on Illumina NovaSeq PE150 platform — a significant advantage over prior 16S rRNA studies of ED, allowing species-level resolution and functional pathway analysis.
- **Bioinformatics:** Assembly with MEGAHIT, gene prediction with MetaGeneMark, annotation against Micro_NR and KEGG databases with DIAMOND. Differential abundance via MetaGenomeSeq and LEfSe (LDA score >2). Random forest classifier for biomarker discovery.
- **Clinical labs collected:** Testosterone, estradiol, FSH, LH, prolactin, glucose, HDL, LDL, triglycerides, total cholesterol, homocysteine, lipoprotein. No significant differences between groups on any of these measures except IIEF-5 (p<0.001) and a borderline glucose difference (7.41 vs. 5.37, p=0.05).

## Detailed Summary

At the phylum level, both groups were dominated by **Bacillota** (51.1% ED vs. 47.6% control) and **Bacteroidota** (26.6% vs. 28.0%). At the genus level, **Prevotella** (9.8%) and **Bacteroides** (5.1%) were most abundant in the ED group, while **Bacteroides** (7.8%) and **Prevotella** (3.3%) dominated the control group — suggesting a shift toward Prevotella dominance in ED.

LEfSe analysis identified 61 differentially abundant species (35 enriched in ED, 26 enriched in controls). The most notable species-level differences confirmed by both LEfSe and Metastat:

| Species | Direction in ED | Significance |
|---------|----------------|-------------|
| [[ruminococcus-gnavus]] | Enriched | p < 0.05 |
| Thomasclavelia ramosa | Enriched | p < 0.01 |
| Clostridium sp. AF32-12BH | Enriched | p < 0.05 |
| Clostridium nexile | Enriched | p < 0.05 |
| Eubacterium siraeum | Enriched | p < 0.05 |
| [[bacteroides-intestinalis]] | Depleted | p < 0.05 |

The authors propose two mechanistic pathways linking these microbiota changes to ED:

1. **Atherosclerosis promotion:** Upregulation of the fluid shear stress and atherosclerosis pathway (ko05418) in ED microbiota suggests that microbial metabolic activity may contribute to vascular endothelial dysfunction — a primary mechanism in organic ED. The loss of Bacteroides intestinalis, which produces anti-inflammatory metabolites (butyrate, ferulic acid) from dietary fiber degradation, may remove a protective brake on chronic vascular inflammation.

2. **BCAA accumulation:** Downregulation of valine, leucine, and isoleucine degradation pathways in ED microbiota suggests reduced microbial capacity to catabolize branched-chain amino acids. Elevated circulating BCAAs are associated with obesity, insulin resistance, and metabolic syndrome — all established risk factors for ED.

A random forest diagnostic model using 10 species achieved AUC of 95.45% (training) and 100% (validation), suggesting potential for microbiota-based ED biomarkers, though the small sample mandates cautious interpretation.

**Limitations acknowledged by the authors:** Small sample size (n=34 total); ED subtypes (cardiac, organic, mixed) were not differentiated; single-center study from northern China with potential dietary confounding; no longitudinal follow-up.

## Relevance to WikiBiome

- Informs the [[erectile-dysfunction]] entity page with species-level microbiome association data.
- Strengthens the [[ruminococcus-gnavus]] entity page — adds ED to the list of conditions where this species is enriched, joining obesity, metabolic syndrome, and inflammatory bowel disease.
- Provides evidence for the concept that **vascular erectile dysfunction shares microbial metabolic pathways with [[atherosclerosis]]** — a cross-condition pattern worth highlighting. The atherosclerosis KEGG pathway upregulation in ED patients directly links these conditions at the functional genomic level.
- Supports [[bacteroides-intestinalis]] as a potentially beneficial species whose depletion is associated with inflammatory and metabolic pathology.
- Contributes to the broader concept of **gut-vascular axis** and endothelial dysfunction mediated by microbial metabolites (LPS, SCFAs, BCAAs).

## Relevance to Cureva

- Contributes to the [[erectile-dysfunction-signature]] taxonomic layer: enrichment of R. gnavus, T. ramosa, Clostridium spp., E. siraeum; depletion of B. intestinalis. Confidence level: preliminary (single case-control, n=34).
- The BCAA degradation deficit and atherosclerosis pathway upregulation inform **ecological features** of the ED signature — metabolic dysregulation mediated by microbial functional shifts.
- **Intervention hypothesis:** Restoring Bacteroides intestinalis (via dietary fiber intervention or targeted probiotics) could reduce chronic inflammation and improve endothelial function. This requires triangle validation — the I_to_f edge (fiber increases B. intestinalis) has support from prior literature cited by the authors; the f_to_D edge (B. intestinalis depletion associates with ED) comes from this study; the I_to_D edge (fiber supplementation improves ED) would need independent clinical evidence.
- **Cross-condition pattern:** The overlap between ED and [[atherosclerosis]] at both the microbial (R. gnavus enrichment) and pathway (ko05418) levels suggests that interventions targeting atherosclerosis-associated dysbiosis may have relevance for ED.

## Contradictions / Tensions

- **Alpha diversity controversy:** This study found no significant diversity difference, consistent with Kang et al. (2024) but contradicting Qiao et al. (2024) who found higher diversity in ED and Geng et al. (2021) who found lower diversity. The authors attribute this to sample size, ED staging, and regional dietary differences. The field lacks consensus on whether ED is associated with altered microbial diversity.
- **Beta diversity:** Unlike some prior 16S studies, this metagenomic study found no significant beta diversity difference (ANOSIM R=0.017, p=0.26), suggesting that overall community structure may not differ meaningfully between ED and controls, even if individual species do.
- **Borderline glucose difference:** The ED group had higher blood sugar (7.41 vs. 5.37, p=0.05) despite excluding diabetics. This raises a question about whether the observed microbiota differences are driven by ED per se or by subclinical metabolic dysfunction. The study does not fully resolve this confound.

## Open Questions

1. **Which ED subtype drives the signal?** The study did not classify ED patients into psychogenic, organic, or mixed categories. Are the microbiota changes specific to vascular/organic ED (where the atherosclerosis pathway link would be mechanistically coherent) or do they appear across all subtypes?
2. **Is Bacteroides intestinalis depletion a cause or consequence of ED?** A longitudinal or interventional study design would be needed to establish directionality.
3. **What is the metal dimension?** This study did not measure tissue or serum metals. Given that atherosclerosis and endothelial dysfunction have known metallomic associations (iron, cadmium, lead), integrating metal measurement with microbiome profiling in future ED studies could reveal whether metal selective pressures shape the ED-associated microbial community.
4. **Does the BCAA pathway finding replicate?** The KEGG pathway analysis is predictive (based on gene content, not metabolite measurement). Confirming elevated circulating BCAAs in ED patients with matched metabolomics would strengthen the causal argument.
5. **How does this compare to the atherosclerosis signature?** The shared upregulation of ko05418 and enrichment of R. gnavus warrants systematic comparison of the ED and atherosclerosis taxonomic profiles.
