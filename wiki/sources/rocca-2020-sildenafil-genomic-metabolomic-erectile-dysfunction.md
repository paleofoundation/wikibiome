---
title: "Rocca 2020 — Evaluation of Serum/Urine Genomic and Metabolomic Profiles to Improve the Adherence to Sildenafil Therapy in Patients with Erectile Dysfunction"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Maria Santa Rocca, Alessia Vignoli, Leonardo Tenori, Marco Ghezzi, Maurizio De Rocco Ponce, Giannis Vatsellas, Dimitris Thanos, Roberto Padrini, Carlo Foresta, Luca De Toni]
corresponding_author: "Carlo Foresta"
corresponding_email: "carlo.foresta@unipd.it"
institution: "University of Padova, Department of Medicine"
year: 2020
journal: "Frontiers in Pharmacology"
doi: "10.3389/fphar.2020.602369"
pmid: ""
evidence_level: prospective-cohort
sample_size: "n=28 (from 36 enrolled; 8 lost to follow-up)"
tags: [erectile-dysfunction, sildenafil, PDE5-inhibitors, pharmacogenomics, metabolomics, NMR-spectroscopy, lipid-profile, adverse-drug-reactions, precision-medicine, LDL-cholesterol]
library_category: metabolites
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 4, 5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Serum LDL-cholesterol was significantly higher in ED patients reporting adverse drug reactions to PDE5i (143.3 vs. 133.1 mg/dl; p = 0.046)"
  - "Variants in PDE11A and CYP2D7 genes were enriched in sildenafil responders (RR = 2.7); PDE2A and PDE3A variants associated with ADR (RR 2.7-3.2)"
  - "NMR-based serum metabolomics discriminated ADR vs. no-ADR patients with up to 77.3% accuracy (Diffusion spectra), driven primarily by lipid fractions"
keystone: false
---

## Key Findings

- **Serum LDL-cholesterol was significantly elevated** in patients reporting adverse drug reactions (ADR) to PDE5 inhibitors (143.3 +/- 13.2 mg/dl ADR vs. 133.1 +/- 12.4 mg/dl no ADR; *p* = 0.046), with logistic regression confirming association (Score = 4.634; *p* = 0.0319) ([[rocca-2020-sildenafil-genomic-metabolomic-erectile-dysfunction]], prospective cohort, n=28).
- **Specific gene variants in *PDE11A* (rs10201180) and *CYP2D7* (rs56127449)** were significantly more represented in drug responders (RR = 2.7 [0.9-5.1]; *p* = 0.04), suggesting a genetic basis for sildenafil efficacy ([[rocca-2020-sildenafil-genomic-metabolomic-erectile-dysfunction]], prospective cohort, n=28).
- **PDE2A variants (rs1980091, rs392565, rs426907) and PDE3A variant (rs7966459)** were significantly associated with ADR occurrence (RR 2.7-3.2; *p* = 0.02-0.04), while CYP2C9 variants (rs1799853, rs9332119) were protective against ADR (RR = 0.0; *p* = 0.02) ([[rocca-2020-sildenafil-genomic-metabolomic-erectile-dysfunction]], prospective cohort, n=28).
- **NMR-based metabolomic profiling of serum** discriminated patients who experienced ADR from those who did not, with Random Forest models achieving 72.7% accuracy (NOESY and CPMG) to 77.3% accuracy (Diffusion spectra) ([[rocca-2020-sildenafil-genomic-metabolomic-erectile-dysfunction]], prospective cohort, n=28).
- **Serum lipid fractions (triglycerides, total cholesterol, LDL-cholesterol, HDL-cholesterol, ApoB100)** showed the strongest prognostic value for ADR prediction, with LDL-cholesterol yielding the highest hazard ratio (HR = 17.5; *p* = 0.019) ([[rocca-2020-sildenafil-genomic-metabolomic-erectile-dysfunction]], prospective cohort, n=28).

## Methods

**Study design:** Prospective cohort study with 3-month follow-up. Thirty-six males with new ED diagnosis were consecutively recruited at the Unit of Andrology and Reproductive Medicine, University Hospital of Padova, Italy. Twenty-eight patients completed follow-up and were included in analysis. All patients were Caucasian.

**Baseline assessment:** Anthropometrics, blood pressure, blood glucose, lipid profile, thyroid/sex hormones, erectile function (IIEF-15 questionnaire). Organic ED was diagnosed by dynamic Penile Color-Doppler Ultrasound (P-CDU) with increased intima-media thickness of the cavernous artery wall (IMT > 0.3 mm).

**Intervention:** All patients prescribed on-demand Sildenafil orodispersible film (ODF; Rabestrom, IBSA Farmaceutici Italia Srl). Dosage determined by physician per clinical practice criteria.

**Genomic analysis:** Targeted Next Generation Sequencing (NGS) using Agilent SureSelect XT custom library panel for 22 genes involved in PDE5i pharmacodynamics and pharmacokinetics (*CYP3A4, CYP2C9, CYP2D6, CYP3A5, NOS1, NOS3, VEGFA, ACE, GNB3, PDE1A, PDE1B, PDE1C, PDE2A, PDE3A, PDE3B, PDE4A, PDE5A, PDE6A, PDE7A, PDE9A, PDE10A, PDE11A*). A total of 2,629 genetic variants were detected (2,419 SNVs and 210 small insertion/deletions); 1,251 mapped within coding regions. Region of interest: 66,183 kb; 2,747 probes; 83,156 kb coverage. Sequenced on Illumina MiSeq (2x250 paired ends). Variant calling with Agilent SureCall against GRCh37/hg19.

**Metabolomic analysis:** 1H NMR spectroscopy using Bruker 600 MHz spectrometer. Three standard spectra per serum sample (NOESY, CPMG, Diffusion-edited) and one standard 1H NOESY NMR spectrum per urine sample. Spectra processed with TopSpin 3.2 (BrukerBiospin).

**Statistical analysis:** SPSS 21.0. Fisher's exact test for variant occurrence between subgroups. Student's t test for continuous variables. AUROC for metabolite/lipid prognostic capacity. Random Forest classification (R environment, 3,000 trees). Logistic regression for lipid fraction prognostic capacity. *p* < 0.05 significance threshold. Results not adjusted for multiple comparisons (acknowledged as pilot study limitation).

## Detailed Summary

### Clinical Outcomes

PDE5i treatment significantly improved mean IIEF-15_ED score across the whole study group (16.5 +/- 6.8 at baseline vs. 21.6 +/- 6.9 at follow-up; *p* = 0.007). Four of 28 patients were classified as non-responders (14.3%), reporting no drug response at follow-up. Responders showed significant IIEF-15_ED improvement (17.1 +/- 6.4 baseline vs. 21.3 +/- 6.9 follow-up; *p* = 0.045); non-responders did not (13.0 +/- 8.4 vs. 23.3 +/- 7.9; *p* = 0.125).

Twelve of 28 patients (42.9%) reported side effects. Ten had vasodilation-related effects (headache 7, flushing 2, tachycardia 1); two reported altered vision. In 3 of 12 ADR patients, side effects were severe enough to discourage further drug intake despite effective response. ADR patients had significantly higher side-effect intensity scores (3.7 +/- 0.6 vs. 0.7 +/- 1.1; *p* < 0.001).

### Genomic Findings

The drug-response phenotype was associated with specific PDE-family gene variants: the splice region variant rs10201180 in *PDE11A* was significantly enriched in responders (*p* = 0.04; RR = 2.7). *PDE11A* has mixed activity on both cAMP and cGMP and is expressed in prostate and testis tissue, suggesting a functional role in the sildenafil response pathway.

The ADR phenotype was associated with variants in *PDE2A* (3 variants: rs1980091, rs392565, rs426907; RR = 2.7-3.2) and *PDE3A* (rs7966459; RR = 2.7). *PDE3A* is expressed in gastrointestinal tissue, cardiovascular system, and brain, and has been linked to headache, flushing, and dyspepsia from PDE5i use. The *CYP2D7* variant rs56127449 was also enriched in responders (*p* = 0.04; RR = 2.7).

*CYP2C9* variants rs1799853 and rs9332119 appeared protective against ADR (*p* = 0.02; RR = 0.0 [0-1.02]), being more represented in patients reporting no adverse effects.

A higher total number of variants was observed in PDE5i responders compared to non-responders (*p* < 0.001), and in patients without dyslipidemia at baseline compared to those with dyslipidemia (*p* = 0.04).

### Metabolomic Findings

**Organic vs. non-organic ED discrimination:** Random Forest models built on NMR serum/urine spectra could not reliably distinguish ED etiology (54.5-63.6% accuracy for serum; 55.6% for urine NOESY), indicating metabolic profiles are not significantly influenced by disease etiology.

**ADR vs. no-ADR discrimination:** Random Forest models on serum NMR spectra discriminated ADR from non-ADR patients with 72.7% accuracy (NOESY and CPMG) and 77.3% accuracy (Diffusion), indicating serum lipid-related metabolites are strongly associated with ADR occurrence. Urine NOESY discrimination was weaker (59.3%).

**Lipid fraction analysis:** Among the 7 main lipid fractions, triglycerides (*p* = 0.019; HR = 7.0), total cholesterol (*p* = 0.019; HR = 7.111), LDL-cholesterol (*p* = 0.019; HR = 1.061), HDL-cholesterol (*p* < 0.05; HR = 0.965), ApoA1 (*p* < 1.00), ApoA2 (*p* < 1.00), and ApoB100 (*p* = 0.040; HR = 0.480) were evaluated. LDL-cholesterol showed the most significant association with ADR, with the highest hazard ratio (HR = 17.5; *p* = 0.019).

**Serum metabolite analysis:** Only threonine showed a significant univariate difference between ADR and non-ADR groups (*p* = 0.009; AUROC = 0.831).

**Urine metabolite analysis:** No significant individual metabolite differences were detected between groups.

### Drug Dosage and Concomitant Therapies

Mean prescribed drug dosage did not differ significantly between responders and non-responders (71.9 +/- 38.4 mg vs. 51.2 +/- 43.9 mg; *p* = 0.428). Non-significant clustering of concomitant antihypertensive agents between ADR and non-ADR groups (*p* = 0.0525) suggested a possible but not confirmed role.

## Relevance to WikiBiome

This study is relevant to the [[erectile-dysfunction]] entity page for its characterization of metabolic and genetic heterogeneity among ED patients. Key WikiBiome-facing content includes:

- **Lipid metabolism as a mechanistic factor in ED pharmacology:** The association between elevated LDL-cholesterol and adverse drug reactions to PDE5i provides a metabolic context for understanding why the same drug produces different outcomes in different patients. This connects to broader [[lipid-metabolism]] and [[cardiovascular-disease]] concepts.
- **Dyslipidemia prevalence in ED populations:** 35.7% of the cohort had dyslipidemia at baseline, and 12.5% had organic ED. The high comorbidity rate reinforces the association between [[erectile-dysfunction]] and cardiovascular/metabolic conditions.
- **Pharmacogenomic variation in PDE gene family:** The finding that variants across multiple PDE-family genes (not just PDE5A) influence sildenafil response and side effects is relevant to [[phosphodiesterase]] concept pages and the broader concept of off-target drug effects.

## Relevance to Cureva

- **Precision medicine stratification for ED treatment:** The combined genomic-metabolomic profiling approach could inform Cureva's intervention logic for PDE5i prescribing. Patients with elevated LDL-cholesterol and specific *PDE2A*/*PDE3A* variants may be at higher ADR risk, warranting alternative interventions or dosage adjustments.
- **Lipid profile as pre-treatment screening marker:** The strong association between serum lipid fractions (particularly LDL-cholesterol) and ADR occurrence suggests that lipid profiling could serve as a practical, low-cost pre-screening tool before initiating PDE5i therapy. This could feed into [[erectile-dysfunction-signature]] intervention logic.
- **Potential STOP signal:** Patients with significantly elevated LDL-cholesterol and/or *PDE2A*/*PDE3A* risk variants who are prescribed standard-dose sildenafil without lipid management may represent a population where ADR risk outweighs benefit, particularly since 3 of 12 ADR patients discontinued effective therapy due to side-effect severity.
- **CYP2C9 protective variants:** The finding that *CYP2C9* missense variants are protective against ADR has implications for pharmacogenomic-guided prescribing within the Cureva pipeline.

## Contradictions / Tensions

- **Small sample size limits generalizability:** The study explicitly acknowledges its pilot nature (n=28) and the decision not to adjust for multiple comparisons. The gene-variant associations and metabolomic classification accuracies should be treated as hypothesis-generating rather than confirmatory. Replication in larger cohorts is needed before these findings inform clinical decision-making.
- **No microbiome component:** Despite the relevance to the [[erectile-dysfunction-signature]], this study does not assess gut microbiome composition or metal exposure. The metabolomic findings (lipid fractions, threonine) may have microbiome-mediated explanations (e.g., microbial bile acid metabolism influencing lipid profiles) that remain unexplored.
- **Non-responder subgroup is very small:** Only 4 of 28 patients were non-responders, limiting the statistical power for responder/non-responder comparisons. The genomic and metabolomic findings are more robust for ADR vs. no-ADR discrimination (12 vs. 16 patients).

## Open Questions

1. **Do the lipid-ADR associations hold in larger, multi-ethnic cohorts?** The study enrolled only Caucasian males at a single Italian center.
2. **What is the microbiome contribution to the lipid profiles that predict ADR?** Gut microbial bile acid metabolism and SCFA production influence serum lipid fractions; dysbiotic profiles common in ED patients (as characterized in the [[erectile-dysfunction-signature]]) could be upstream drivers of the LDL-cholesterol elevation associated with ADR.
3. **Can the *PDE11A* splice variant (rs10201180) in responders be mechanistically validated?** The variant's effect on PDE11A protein function and its interaction with PDE5i pharmacology remains speculative.
4. **Does pre-treatment lipid management (statins, dietary intervention) reduce PDE5i ADR rates?** The study suggests the association but does not test the intervention.
5. **Would a combined genomic-metabolomic-microbiome panel improve ADR prediction accuracy beyond the 77.3% achieved with serum Diffusion NMR alone?**
