---
title: "Leao 2025 — Sex-Simulated Microbiome Response to Psychotropic Drug"
type: source
created: 2026-04-09
updated: 2026-04-19
authors: [Luana Leao, Galal Esmail, Saba Miri, Walid Mottawea, Riadh Hammami]
corresponding_author: "Riadh Hammami"
corresponding_email: "riadh.hammami@uottawa.ca"
institution: "NuGut Research Platform, School of Nutrition Sciences, Faculty of Health Sciences, University of Ottawa"
orcid: "N/A"
year: 2025
journal: "M.Sc. Thesis, University of Ottawa"
doi: "not yet verified"
pmid: "N/A"
evidence_level: in-vitro
sample_size: "n=4 fecal donors (2 male, 2 female)"
tags: [sex-hormones, gut-microbiota, psychotropic-medication, aripiprazole, short-chain-fatty-acids, microsexome, gut-brain-axis, estrogen, progesterone, testosterone, in-vitro-fermentation, erectile-dysfunction]
library_category: mechanistic-insights
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5, 7, 9]
metals_discussed: []
taxa_discussed: [eubacterium-coprostanoligenes, sutterella, agathobacter, acidaminococcus, parasutterella, enterococcus, bacillus, blautia, butyricicoccus]
key_findings:
  - "Sex hormones (estrogen/progesterone vs. testosterone) drive divergent gut microbiome compositions in an ex-vivo colonic model, with females showing higher Bacteroidota and lower Firmicutes at 24h compared to males"
  - "Aripiprazole increases microbial diversity in both sexes but selectively suppresses Enterococcus and Eubacterium coprostanoligenes in the female hormone model while promoting Bacillus and Blautia"
  - "SCFA production (acetate, propionate, butyrate) declines more sharply in the female model during high estrogen+progesterone phases, suggesting hormonal modulation of microbial metabolic output"
keystone: false
---

## Key Findings

- **Sex hormones create sexually dimorphic microbiome profiles** in an ex-vivo PolyFermS colonic fermentation model. Females exhibited significantly higher Bacteroidota and lower Firmicutes at 24h compared to males (p < 0.05), while males showed the opposite pattern ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]], in-vitro, n=4 donors).
- **Alpha-diversity was significantly lower in the female model** than controls (Shannon p = 0.016; Simpson p = 0.0037), indicating reduced microbial evenness under female sex hormone conditions. Beta-diversity showed no significant differences between groups ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]], in-vitro).
- **Aripiprazole (psychotropic drug) increased microbial diversity** in both sex models but produced sex-specific taxonomic shifts: suppressing *Enterococcus* (p = 0.001) and *Eubacterium coprostanoligenes* (p = 0.01) in the female model while promoting *Bacillus* (p = 0.016) and *Blautia* (p = 0.003) ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]], in-vitro).
- **Female sex hormones enriched *Eubacterium coprostanoligenes*, *Agathobacter*, *Sutterella*, and *Acidaminococcus*** compared to control, while *Parasutterella* was enriched in the control group. No significant genus-level shifts were observed in the male (testosterone-only) model ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]], in-vitro).
- **SCFA production declined across all treatment groups** compared to control, with the most pronounced decrease during Phase 3 (E+P+, high estrogen and progesterone) in the female model, particularly for acetate, propionate, and butyrate ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]], in-vitro).

## Methods

- **Study design:** Ex-vivo colonic fermentation using the PolyFermS continuous fermentation model with immobilized fecal microbiota from 4 healthy donors (2 males, ages 40 and 36; 2 females, ages 30 and 25) with no history of mental disorders. Ethics approval H-02-18-347.
- **Model:** Two-stage bioreactor system with one inoculation reactor feeding four second-stage reactors in parallel — one control (CR), one male with testosterone (TR1), one female with estrogen/progesterone cycling (TR2), and one female with hormones plus aripiprazole (TR3).
- **Hormone cycling:** Female model simulated three menstrual cycle phases based on Stricker et al. (2006): E-P- (Phase 1: estradiol 130 pmol/L, progesterone 1 nmol/L), E+P- (Phase 2: estradiol 650 pmol/L, progesterone 2 nmol/L), E+P+ (Phase 3: estradiol 464 pmol/L, progesterone 34 nmol/L). Male model used constant testosterone at 16.2 nmol/L based on Zhu et al. (2022). Female model also received a constant testosterone level of 0.32 nmol/L based on Skiba et al. (2019). Hormones adjusted every 2 days.
- **Aripiprazole:** 20 mg/mL stock solution, filter-sterilized (0.22 um), added to TR3 reactor media. Selected based on prior work demonstrating antimicrobial effects on gut bacteria (Ait Chait et al., 2020, 2023b).
- **Fermentation conditions:** Proximal colon pH 5.7, 37C, stirring at 120 RPM, mean retention time of 8h, anaerobic (continuous N2 and CO2 flushing, 0.9:0.1 ratio). Each fermentation lasted 23 days (15-day stabilization + treatment period). Working volume 100 mL per sub-bioreactor.
- **Sequencing:** 16S rRNA gene V3-V4 region, Illumina MiSeq platform with 600bp MiSeq Reagent Kit v3. Processed via QIIME2 pipeline (v2023.2) with DADA2 denoising, SILVA database (release 13.8) for taxonomy.
- **SCFA quantification:** Gas chromatography with flame ionization detection (GC-FID), measuring acetate, propionate, and butyrate (mM). Formic acid and 2-ethyl butyric acid as internal standards.
- **Statistical analysis:** Kruskal-Wallis with Dunn post-hoc (FDR-corrected) via rstatix package (v0.7.2), LinDA linear model for differential abundance. ANOVA with Bonferroni for GC-FID data via GraphPad Prism v8.3. Significance threshold p < 0.05.

## Detailed Summary

### Sex-specific microbiome composition

At the phylum level, **Bacteroidota** increased over time in all groups but showed a significant sex-dependent pattern at 24h: females had significantly higher Bacteroidota and lower Firmicutes than males (p < 0.05). Actinobacteriota showed a large increase in the male group compared to control at 24h (p < 0.05). Proteobacteria showed no significant sex-based differences ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

At the family level, **Acidaminococcaceae, Bacteroidaceae, Lachnospiraceae, Prevotellaceae, and Veillonellaceae** were the most abundant. Bacteroidaceae and Prevotellaceae increased over time across groups, while Veillonellaceae consistently declined. Lachnospiraceae remained stable in the male group but decreased in the female group ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

Donor sex influenced the response to female hormones: Bacteroidota was significantly higher in male donors than female donors (p ≤ 0.001), while Proteobacteria were elevated in female donors (p < 0.05). However, hormonal treatment induced consistent directional changes across all donors, including a decreasing trend in Actinobacteriota ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

### Differential abundance at genus level (LinDA analysis)

In the **female vs. control** comparison (Phase 1), four genera were significantly enriched in the female group: *Eubacterium coprostanoligenes* group (p = 0.002), *Agathobacter* (p = 0.027), *Sutterella* (p = 0.031), and *Acidaminococcus* (p = 0.038). *Parasutterella* was enriched in the control (p = 0.031). In the **male vs. control** comparison, *Butyricicoccus* showed a declining trend (p = 0.056, not significant) ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

### Psychotropic drug effects

Aripiprazole produced distinct effects on the female microbiome model ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]):
- **Phase 1 (E-P-):** Promoted *Bacillus* (p = 0.016) and *Enterococcus* (p = 0.044) in the psychotropic group vs. control, while *Enterococcus* was suppressed in the female-only group compared to the psychotropic group (p = 0.001). *Eubacterium coprostanoligenes* group and *Acidaminococcus* were reduced in psychotropic vs. female (p = 0.013 and p = 0.021).
- **Phase 2 (E+P-):** *Acidaminococcaceae* thrived significantly in the female group compared to control (p = 0.04).
- **Phase 3 (E+P+):** *Blautia* was largely elevated in the psychotropic group compared to control (p = 0.003).

### Alpha and beta diversity

The female group had significantly lower alpha-diversity than the control group across Shannon (p = 0.016) and Simpson (p = 0.0037) indices after the first two days of fermentation. The female group also had lower Simpson values than the male group (p < 0.05). Beta-diversity (PCoA based on Bray-Curtis distance) showed no significant differences between groups (R2 = 0.03, p = 0.91) ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

During the menstrual cycle simulation, Shannon diversity showed a significant shift between Phase 1 and Phase 2 at 48h (p < 0.05). In Phase 1, the female group showed lower diversity than the psychotropic group at 6h (p < 0.05). In Phase 2, the psychotropic group displayed lower diversity than control at 24h, but this reversed at 48h with the female group showing higher diversity. In Phase 3, the psychotropic group showed lower diversity than the control group ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

### SCFA production

SCFA concentrations in the control group were highest overall. All treatment groups showed reduced SCFA levels compared to control during the first 48h. In the female model, **SCFA concentrations decreased most sharply during Phase 3 (E+P+)**, with pronounced reductions in acetate, propionate, and butyrate. In the psychotropic group, acetate increased after 12h in Phase 3 then decreased after 24h, while propionate and butyrate showed steady increases throughout ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

### SCFA-family correlations

In the female bioreactor, distinct patterns of bacterial association with SCFAs emerged at different time points. At 6h, [[bacteroidaceae]] was positively associated with acetate while [[enterobacteriaceae]] was linked to propionate. By 12h, [[bifidobacteriaceae]] and Veillonaceae correlated positively with propionate and butyrate, while Oscillospiraceae and [[ruminococcaceae]] were negatively associated. By 48h, [[bifidobacteriaceae]] and Coriobacteriaceae positively correlated with propionate and butyrate ([[leao-2025-sex-simulated-microbiome-psychotropic-drug]]).

## Relevance to WikiBiome

- **[[beta-glucuronidase]]** and the estrobolome concept: The study demonstrates that estrogen and progesterone cycling directly modulates gut microbiome composition, enriching *Eubacterium coprostanoligenes* — a genus involved in cholesterol and steroid metabolism. This connects to the estrobolome framework (Karen's Brain Primitive 7) where gut bacteria modulate sex hormone levels via enzymatic activity.
- **[[microbiota-gut-brain-axis]]**: The "microsexome" concept — the sexually dimorphic microbiome shaped by sex hormones — provides mechanistic context for why mental health conditions show sex-specific prevalence patterns (e.g., MDD: 8.7% women vs. 5.3% men; GAD: 3.4% women vs. 1.9% men, as cited in the thesis).
- **[[sutterella]]**, **[[acidaminococcus]]**: These organisms show estrogen-responsive enrichment patterns that could inform entity pages about hormonal influences on their ecological niches.
- **[[short-chain-fatty-acids]]**: The finding that hormonal cycling reduces SCFA production, particularly during high estrogen+progesterone phases, has implications for understanding cyclical GI symptoms and the gut-brain axis during the luteal phase.

## Relevance to Cureva

- **Erectile dysfunction signature**: While this study does not directly investigate ED, the demonstration that testosterone (at 16.2 nmol/L) produces a distinct microbiome profile compared to female hormones and that sex hormones modulate SCFA production provides mechanistic groundwork for understanding how androgen-microbiome interactions may contribute to ED pathophysiology. The enrichment of specific taxa under different hormonal environments could inform the ED signature's taxonomic layer.
- **Psychotropic drug interactions**: Aripiprazole's sex-specific antimicrobial effects are clinically relevant — this drug is prescribed for schizophrenia, bipolar disorder, and adjunctive MDD therapy. The finding that it suppresses *Enterococcus* and *Eubacterium coprostanoligenes* specifically in the female hormonal environment suggests that psychotropic side effect profiles (including sexual dysfunction) may be partially mediated by sex-specific microbiome disruption.
- **SCFA depletion as intervention target**: The decline in SCFA-producing bacteria in females under psychotropic treatment suggests a potential intervention hypothesis — co-administration of prebiotics or SCFA-supporting dietary modifications during psychotropic therapy, particularly for women.

## Contradictions / Tensions

- **Bacteroidota/Firmicutes ratio and sex:** This study found higher Bacteroidota in females and higher Firmicutes in males at 24h, aligning with d'Afflitto et al. (2022). However, this contradicts Koliada et al. (2021) and Kaliannan et al. (2018) who reported higher Firmicutes and lower Bacteroidota in females. The authors attribute this discrepancy to differences in hormonal environments and experimental conditions (in-vitro vs. in-vivo). <!-- NEEDS VERIFICATION: check vault for existing pages that assert a specific Firmicutes/Bacteroidota sex ratio -->
- **Parasutterella and estradiol:** The study found *Parasutterella* enriched in the control group (without hormones), which contrasts with Wu et al. (2022) who found a positive correlation between *Parasutterella* and estradiol. This tension may reflect the difference between direct hormonal exposure (in-vitro) and systemic hormone-microbiome interactions (in-vivo).
- **Testosterone effects:** The male model (testosterone only) showed minimal genus-level shifts compared to control, contrasting with Moadi et al. (2024) who reported significant testosterone effects on diversity in pre-pubertal mice. The authors note testosterone's influence may diminish with the developmental stage.

## Open Questions

1. **Does aripiprazole's suppression of *Eubacterium coprostanoligenes* in the female model affect cholesterol metabolism and steroid hormone recycling?** This genus is known for cholesterol-to-coprostanol conversion — its suppression by a psychotropic drug in a hormonal environment could create a feedback loop affecting hormone bioavailability.
2. **Would in-vivo validation confirm the sex-specific microbiome responses seen in this ex-vivo model?** The bioreactor lacks peristalsis, mucus layers, immune signaling, and host-microbe crosstalk — all of which modulate the microbiome in ways not captured here.
3. **What is the metal dependency profile of the taxa that respond to sex hormones?** The study does not discuss metal cofactors, but *Eubacterium coprostanoligenes*, *Sutterella*, and *Agathobacter* may have iron or other metal dependencies that connect this work to the metallomics framework.
4. **How do these sex-hormone-driven microbiome shifts interact with the ED microbiome signature?** If testosterone-driven microbiome profiles differ fundamentally from female profiles, ED-associated dysbiosis may involve disruption of the male-specific "microsexome" equilibrium.
5. **Does the Phase 3 (luteal phase) SCFA decline explain cyclical worsening of GI or psychiatric symptoms in women?** The sharp decline in all three major SCFAs during the high estrogen+progesterone phase could connect to clinical observations of premenstrual symptom exacerbation.
