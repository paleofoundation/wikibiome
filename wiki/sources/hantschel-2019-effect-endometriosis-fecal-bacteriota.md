---
title: "Hantschel 2019 — Effect of Endometriosis on the Fecal Bacteriota Composition of Mice During the Acute Phase of Lesion Formation"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Josefine Hantschel, Severin Weis, Karl-Herbert Schäfer, Michael D. Menger, Matthias Kohl, Markus Egert, Matthias W. Laschke]
corresponding_author: "Matthias W. Laschke"
corresponding_email: "matthias.laschke@uks.eu"
institution: "Institute for Clinical & Experimental Surgery, Saarland University, Homburg/Saar, Germany"
year: 2019
journal: "PLoS ONE"
doi: "10.1371/journal.pone.0226835"
pmid: ""
evidence_level: animal-model
sample_size: "n=8 endometriosis mice + n=8 sham controls (16 total)"
tags: [endometriosis, gut-microbiota, fecal-bacteriota, mouse-model, 16S-rRNA, dysbiosis, microbiome-signatures]
library_category: signatures
platform: both
condition: "endometriosis"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: [bacteroidales-s24-7, lactobacillus, prevotellaceae-ucg-001, lachnospiraceae-nk4a136, faecalibaculum, lachnospiraceae, odoribacter, bacteroides, alloprevotella, alistipes, ruminococcaceae-ucg-014, parasutterella, ruminococcaceae, erysipelotrichaceae, escherichia, shigella]
key_findings: ["No significant effect of endometriosis induction on fecal bacterial alpha- or beta-diversity during the acute 21-day lesion formation phase in mice", "Fecal microbiota composition remained stable across endometriosis and sham groups at all time points (days -3, 7, and 21)", "Results contrast with prior mouse studies (Chadchan 2018, Yuan 2018) that reported dysbiosis at 21 and 42 days respectively, highlighting methodological sensitivity in microbiome-endometriosis research"]
keystone: false
---

## Key Findings

- **No significant dysbiosis detected** during the acute phase (21 days) of endometriosis lesion formation in mice — alpha-diversity (Observed, Chao1, Shannon, Simpson) and beta-diversity (weighted and unweighted UniFrac) showed no significant differences between endometriosis and sham-transplanted controls ([[hantschel-2019-effect-endometriosis-fecal-bacteriota]], animal-model, n=16).
- **Fecal bacterial community composition remained highly stable** across all time points (-3d, 7d, 21d) and treatment groups, with the dominant genera being *Bacteroidales* S24-7 group, *Lactobacillus*, *Prevotellaceae* UCG-001, and *Lachnospiraceae* NK4A136 group.
- **Contradicts prior findings** by Chadchan et al. (2018) who reported altered microbial diversity with higher *Bacteroidetes* and lower *Firmicutes* at 21 days, and partially aligns with Yuan et al. (2018) who found no differences until 42 days — suggesting that endometriosis-driven dysbiosis may require longer disease duration to manifest.
- **Strict statistical methodology** (FDR correction, singleton/chimera removal, Kruskal-Wallis with Wilcoxon-Mann-Whitney post hoc) may have contributed to non-significant results compared to studies using less conservative approaches.
- **Endometriotic lesions were successfully established** in all mice (take rate 23.8 +/- 4.2%, lesion size 5.6 +/- 1.2 mm2), confirmed by GFP fluorescence and histology showing typical cyst-like dilated endometrial glands with vascularized stroma.

## Methods

**Study design:** Controlled animal-model experiment with longitudinal fecal sampling. 12- to 16-week-old female C57BL/6 wild-type mice received intraperitoneal transplantation of uterine tissue fragments from transgenic GFP+ donor mice (C57BL/6-TgN(ACTB-EGFP)1Osb/J) to induce endometriosis. Sham-transplanted animals received intraperitoneal injection of physiological saline only.

**Sample size:** 8 endometriosis mice and 8 sham controls (4 animals per cage, 2 endometriosis + 2 sham per cage to exclude cage effects). Six samples were removed due to poor sequence yields (<1,000 sequences/sample), resulting in variable n per time point (endometriosis: n=5-8, sham: n=6-8).

**Fecal collection:** Days -3 (pre-induction), 7, and 21 post-induction.

**Sequencing:** 16S rRNA gene V4-V5 region amplicon sequencing on Illumina MiSeq platform. 6,315,636 partial bacterial 16S rRNA gene sequences obtained (mean 150,372 per sample; range 1,408-721,076).

**Bioinformatics:** QIIME 1.9.1, SILVA database release 128, 97% sequence identity OTU clustering via vsearch. 3,703 OTUs identified across 101 genera, 35 families, 19 orders, 17 classes, 8 phyla. Singletons and chimeras removed.

**Statistical analysis:** Alpha diversity via ANOVA, beta diversity via ADONIS (vegan package). Group comparisons via Kruskal-Wallis test with post hoc Wilcoxon-Mann-Whitney test and 10,000-fold Monte-Carlo simulation. All p-values FDR-corrected for multiple testing. Estrous cycle controlled — only estrus-stage animals included.

**Endpoint assessment:** Lesion take rate, lesion size (D1 x D2 x pi/4), histomorphology at day 21.

## Detailed Summary

The study addressed whether surgically induced endometriosis alters the fecal bacterial composition during the early, acute phase of lesion development. The GFP+/GFP- cross-over transplantation model allowed unambiguous identification of engrafted endometriotic tissue versus host tissue.

**Lesion establishment:** All endometriosis mice developed typical endometriotic lesions at the abdominal wall and visceral adipose tissue near the ovary and bladder. Some lesions fused with the small intestine wall. Histology confirmed cyst-like dilated endometrial glands surrounded by vascularized endometrial stroma — consistent with human endometriotic morphology.

**Community composition:** The fecal microbiota was dominated by:
- *Bacteroidales* S24-7 group (highest relative abundance)
- *Lactobacillus*
- *Prevotellaceae* UCG-001
- *Lachnospiraceae* NK4A136 group
- *Faecalibaculum* (Erysipelotrichaceae)
- *Lachnospiraceae* uncultured
- *Tyzzerella* 3 (Lachnospiraceae)
- *Odoribacter* (Porphyromonadaceae)
- [[bacteroides]] (*Bacteroidaceae*)
- [[alloprevotella]] (*Prevotellaceae*)
- [[alistipes]] (*Rikenellaceae*)
- *Lachnospiraceae* UCG-001
- *Ruminococcaceae* UCG-014
- *Parasutterella* (Alcaligenaceae)
- *Ruminococcaceae* uncultured
- *Erysipelotrichaceae* uncultured

**Diversity results:** No significant differences were observed between endometriosis and sham groups at any time point for:
- Alpha diversity: Observed OTUs, Chao1, Shannon, Simpson indices — all non-significant
- Beta diversity: PCoA plots with unweighted and weighted UniFrac — no clustering by treatment group
- Genus-level and family-level relative abundances — no significant differences after FDR correction

**Comparison with prior studies:** The authors note that Chadchan et al. (2018) found altered diversity at 21 days with higher [[bacteroides]] and lower [[lachnospiraceae|Firmicutes]], while Yuan et al. (2018) found no differences until 42 days and also reported alterations of *Bifidobacterium*. The discrepancies are attributed to differences in experimental design (mouse strain, origin and diet, tissue transplantation method, DNA extraction, PCR amplification protocols, databases used for species identification, and statistical stringency).

**Study limitations acknowledged:**
1. DNA-based analysis cannot distinguish active from dead bacteria
2. Low take rate (~24%) may limit lesion burden
3. Sham controls received saline injection only (not non-uterine tissue), so surgical tissue transplantation effects cannot be fully excluded
4. Small sample size may lack power to detect subtle shifts
5. RNA/metabolite-level analyses may be needed to capture functional changes

## Relevance to WikiBiome

This study informs several entity and concept pages:

- **[[endometriosis]]** — Provides important nuance for the "Microbiome Associations" section: the relationship between endometriosis and gut dysbiosis may be time-dependent, with no detectable changes during the acute phase of lesion formation. This counters oversimplified narratives that endometriosis immediately alters the gut microbiome.
- **[[lachnospiraceae]]**, **[[bacteroides]]**, **[[alistipes]]**, **[[alloprevotella]]** — These taxa were abundant in the murine gut but showed no differential abundance with endometriosis in this study, which is relevant context when other studies report them as altered.
- Concept: **gut-brain-reproductive axis** — The study supports the hypothesis that gut microbiota changes may be a downstream, chronic effect of endometriosis rather than an early feature of lesion establishment.
- Concept: **microbiome research methodology** — The study is a valuable example of how methodological choices (stringent FDR correction, singleton removal, database selection) affect conclusions in microbiome research.

## Relevance to Cureva

- **Signature page [[endometriosis-signature]]** — This study provides important negative evidence for the taxonomic layer: during the acute phase, the fecal microbiota does not significantly shift. This suggests that any taxonomic signature observed in established endometriosis reflects chronic disease effects rather than acute lesion-driven changes. The confidence level for the taxonomic layer should account for this temporal nuance.
- **Temporal dynamics:** Cureva's reasoning pipeline should consider disease stage when interpreting microbiome signatures for endometriosis. Acute vs. chronic distinction matters for intervention timing.
- **Methodological weight:** The strict statistical approach (FDR correction, conservative non-parametric tests) lends credibility to the negative finding. Studies reporting positive findings with less stringent methods should be weighted accordingly.
- The study's reference to the Endobiota study (Ata et al., 2019, Ref 32) noting that *Escherichia* and *Shigella* were more dominant in stage 3/4 endometriosis patients vs. controls is relevant — suggesting that human clinical endometriosis does show dysbiosis even if early mouse models do not.

## Contradictions / Tensions

- **Direct contradiction with Chadchan et al. (2018):** That study reported altered microbial diversity with higher *Bacteroidetes* and lower *Firmicutes* abundance at 21 days post-induction. Hantschel et al. found no such effect at the same time point. The discrepancy may reflect methodological differences (different databases, statistical approaches, and possibly different mouse strains/diets).
- **Partial tension with Yuan et al. (2018):** Yuan found dysbiotic changes at 42 days but not earlier. Hantschel's 21-day endpoint aligns with Yuan's negative early finding but cannot confirm or deny the later shift. Yuan also reported *Bifidobacterium* alterations not observed here.
- **Tension with the broader endometriosis-microbiome hypothesis:** If endometriosis is associated with gut dysbiosis in humans (as multiple clinical studies suggest), but does not cause detectable dysbiosis in mice during acute lesion formation, this raises the question of directionality — does dysbiosis precede and enable endometriosis, rather than resulting from it?

## Open Questions

1. **Does endometriosis-associated dysbiosis require chronic disease (>42 days) to manifest in mouse models?** A longer longitudinal study with sampling beyond 42 days would clarify the temporal relationship.
2. **Is the gut-endometriosis connection bidirectional?** This study tested whether endometriosis changes the gut; the reverse question (does pre-existing dysbiosis promote endometriosis) remains open.
3. **Would RNA-based or metabolomic analysis reveal functional changes invisible to 16S DNA sequencing?** The authors suggest microbial gene expression and metabolism may shift before community composition does.
4. **Do the discrepancies between mouse studies reflect genuine biological variability or purely methodological artifacts?** Standardized protocols across laboratories would help resolve this.
5. **How do these murine findings relate to human clinical data showing clear dysbiosis in established endometriosis (e.g., enrichment of *Escherichia*, *Shigella* in stage 3/4 patients)?**
