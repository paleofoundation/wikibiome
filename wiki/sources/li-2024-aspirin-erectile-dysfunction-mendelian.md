---
title: "Li 2024 — Aspirin Use and Erectile Dysfunction: A Mendelian Randomization Study"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Rongkang Li, Lei Peng, Dashi Deng, Guangzhi Li, Song Wu]
corresponding_author: "Song Wu; Guangzhi Li"
corresponding_email: "songwu_lzu@126.com; guangzhili@email.szu.edu.cn"
institution: "Institute of Urology, Lanzhou University Second Hospital / The Affiliated Luohu Hospital of Shenzhen University / South China Hospital, Shenzhen University"
year: 2024
journal: "Frontiers in Endocrinology"
doi: "10.3389/fendo.2023.1329847"
evidence_level: quasi-experimental
sample_size: "n=557,386 (333,581 aspirin use GWAS + 223,805 ED GWAS)"
tags: [mendelian-randomization, aspirin, erectile-dysfunction, GWAS, NSAID, prostaglandins, nitric-oxide, cyclooxygenase, drug-repurposing]
library_category: drug-repurposing
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [4, 5]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "Genetically inferred aspirin use was causally associated with increased ED risk (IVW OR=20.896, 95% CI 2.077-210.2, P=0.010)"
  - "Aspirin inhibits COX pathway, reducing vasodilatory prostaglandins (PGI2, PGE2) critical for penile smooth muscle relaxation"
  - "Sensitivity analyses (MR-PRESSO, MR-Egger, leave-one-out) confirmed no significant pleiotropy or heterogeneity"
keystone: false
---

## Key Findings

- **Aspirin use is causally associated with increased erectile dysfunction risk** in the European population, as determined by two-sample Mendelian randomization using 9 SNP instrumental variables (IVW OR = 20.896, 95% CI 2.077--210.2, P = 0.010) ([[li-2024-aspirin-erectile-dysfunction-mendelian]], quasi-experimental).
- The **weighted median method** corroborated this finding (OR = 22.768, 95% CI 1.184--437.8, P = 0.038), though the extremely wide confidence intervals reflect the limited precision of the genetic instrument ([[li-2024-aspirin-erectile-dysfunction-mendelian]], quasi-experimental).
- **No significant pleiotropy** was detected by MR-Egger regression (intercept P = 0.430) or MR-PRESSO global test (P = 0.892), and **no heterogeneity** was found via Cochran's Q test (IVW P = 0.879) ([[li-2024-aspirin-erectile-dysfunction-mendelian]], quasi-experimental).
- The proposed mechanism centers on aspirin's inhibition of the **cyclooxygenase (COX) pathway**, which reduces vasodilatory prostaglandins (PGI2 and PGE2) essential for trabecular smooth muscle relaxation and penile erection ([[li-2024-aspirin-erectile-dysfunction-mendelian]], quasi-experimental).
- **Leave-one-out analysis** confirmed no single SNP drove the overall result, supporting the robustness of the causal inference ([[li-2024-aspirin-erectile-dysfunction-mendelian]], quasi-experimental).

## Methods

**Study design:** Two-sample Mendelian randomization analysis using publicly available GWAS summary statistics from European-ancestry populations.

**Data sources:**
- **Exposure (aspirin use):** UK Biobank GWAS (ukb-a-452), 46,946 cases and 286,635 controls (total n = 333,581), 10,894,596 SNPs, Neale lab, 2017.
- **Outcome (erectile dysfunction):** GWAS (ebi-a-GCST006956), 6,175 cases and 217,630 controls (total n = 223,805), 9,310,196 SNPs, Bovijn et al., 2018. ED defined by ICD-10 codes N48.4 and F52.2, oral ED medication use, or surgical intervention history.

**Instrumental variable selection:** SNPs reaching genome-wide significance (P < 5 x 10^-8), clumped at r^2 = 0.001 with 10,000 kb window. Confounders screened via Phenoscanner (diabetes, obesity, education, insomnia, psychiatric factors). Nine SNPs retained, all with F-statistic > 10.

**Statistical methods:** Primary analysis via inverse-variance weighted (IVW); supplementary methods included MR-Egger, weighted median, weighted mode, and simple mode. Sensitivity via MR-PRESSO global test, MR-Egger regression for pleiotropy, Cochran's Q for heterogeneity, and leave-one-out analysis. Analyses performed in R 4.3.1 using TwoSampleMR (v0.5.7) and MRPRESSO (v1.0).

## Detailed Summary

The study employed two-sample MR to test whether genetically determined aspirin use causally increases ED risk. Nine SNPs strongly associated with aspirin use served as instrumental variables. The IVW method revealed a statistically significant causal association (OR = 20.896, P = 0.010), and the weighted median method produced a concordant estimate (OR = 22.768, P = 0.038). The MR-Egger (OR = 260.37, P = 0.129), simple mode (OR = 13.076, P = 0.307), and weighted mode (OR = 14.469, P = 0.259) showed directionally consistent but non-significant results, likely reflecting reduced statistical power.

The authors propose a mechanistic explanation through aspirin's dual pharmacological effects on erectile physiology:

1. **COX inhibition reduces vasodilatory prostaglandins.** Aspirin irreversibly inhibits cyclooxygenase, blocking conversion of arachidonic acid to prostaglandins. This reduces PGI2 (prostacyclin) and PGE2, both potent relaxants of penile smooth muscle. PGI2 and PGE1 normally activate Gs-protein-coupled receptors (IP and EP2/EP4), triggering adenylyl cyclase, raising cAMP, activating PKA, and ultimately relaxing trabecular smooth muscle via myosin light chain kinase inhibition.

2. **NO pathway disruption.** While aspirin can enhance endothelial NO synthase activity (a pro-erectile effect), COX inhibition simultaneously disrupts NO biosynthesis through prostaglandin-NO crosstalk, potentially yielding a net negative effect on erectile function.

The discussion contextualizes the findings within a conflicting literature: several observational studies (PCPT, BACH, Finnish cohort) found NSAID/aspirin use associated with increased ED risk, while two small RCTs (Bayraktar 2018, n = 184 vasculogenic ED patients; Saroukhani 2013, n = 32 lithium-treated bipolar disorder patients) found aspirin therapeutic for specific ED subtypes. An animal study found no long-term effect of aspirin on erectile function in rats.

**Limitations:** European-only ancestry limits generalizability; no ED subtype distinction (vascular vs. non-vascular); inability to adjust for dose, duration, or comorbidities; extremely wide confidence intervals indicate imprecise effect estimates.

## Relevance to WikiBiome

This study informs the [[erectile-dysfunction]] entity page by adding evidence for a causal link between a widely used pharmaceutical (aspirin) and ED risk via prostaglandin and NO pathway disruption. It connects to the [[nitric-oxide]] concept page through aspirin's dual effects on NO synthase and COX-mediated NO biosynthesis. The prostaglandin pathway discussion enriches understanding of vascular mechanisms underlying ED beyond the gut microbiome axis.

The study does not directly address microbiome or metal biology, but the COX/prostaglandin pathway intersects with inflammation-mediated dysbiosis concepts relevant to WikiBiome's broader framework. Prostaglandin metabolism is influenced by gut microbial arachidonic acid processing, providing a potential bridge to microbiome-mediated ED pathophysiology.

## Relevance to Cureva

This source is relevant to drug-repurposing intelligence for the [[erectile-dysfunction]] signature:

- **Potential STOP signal:** Aspirin use in men with or at risk of ED warrants careful evaluation. The MR evidence suggests genetically determined aspirin use increases ED risk, though the extremely wide confidence intervals and conflicting RCT evidence (aspirin therapeutic in vasculogenic ED) complicate a blanket STOP recommendation.
- **Mechanism-based nuance:** The distinction between vasculogenic ED (where aspirin's antiplatelet effects may help) and COX-mediated ED (where prostaglandin depletion may harm) is clinically important. Cureva's pipeline should evaluate aspirin's net effect by ED subtype.
- **Triangle evidence:** This study provides an I_to_D edge (aspirin use causally linked to ED, MR-level evidence) but the I_to_f and f_to_D edges require further mapping through prostaglandin-specific mechanistic studies.

## Contradictions / Tensions

- **Conflicting clinical evidence:** This MR study finds aspirin causally increases ED risk, but Bayraktar & Albayrak (2018, RCT, n = 184) found aspirin therapeutic for vasculogenic ED patients with elevated mean platelet volume. The discrepancy may reflect ED subtype specificity — aspirin may help vascular obstruction-type ED while harming prostaglandin-dependent erectile physiology.
- **BACH Survey contradiction:** The BACH survey found aspirin associated with ED in unadjusted analysis but the association became non-significant after multivariable adjustment (OR = 1.15, 95% CI 0.72--1.85), suggesting confounding by indication (aspirin users have more cardiovascular disease, itself an ED risk factor).
- **ONTARGET/TRANSCEND null finding:** In high-cardiovascular-risk patients, neither aspirin nor clopidogrel increased ED risk, suggesting the association may be population-dependent.
- **Animal model null result:** Li et al. (2019) found long-term aspirin had no effect on erectile function in adult and aging rats, conflicting with this human genetic evidence.
- **Effect size concerns:** The OR of 20.9 with CI spanning 2.1 to 210 is notably imprecise, raising questions about the reliability of the point estimate despite statistical significance. <!-- NEEDS VERIFICATION: effect size plausibility should be evaluated against other MR studies of drug effects on ED -->

## Open Questions

1. **Does aspirin's effect on ED differ by subtype (vascular vs. neurogenic vs. psychogenic)?** The conflicting RCT evidence suggests subtype-specific effects that MR cannot distinguish.
2. **Is there a dose-response relationship?** This MR study cannot assess whether low-dose prophylactic aspirin (75-100 mg) differs from analgesic doses (300-600 mg) in ED risk.
3. **How does aspirin interact with the gut microbiome's prostaglandin metabolism?** Gut bacteria metabolize arachidonic acid and influence systemic prostaglandin levels — does aspirin-microbiome interaction modify ED risk?
4. **Does the COX-1 vs. COX-2 selectivity matter?** Aspirin irreversibly inhibits COX-1 and to a lesser extent COX-2; would COX-2-selective NSAIDs have a different ED risk profile?
5. **Can prostaglandin supplementation (e.g., PGE1/alprostadil) offset aspirin-associated ED risk?** This has direct intervention implications for Cureva's pipeline.
