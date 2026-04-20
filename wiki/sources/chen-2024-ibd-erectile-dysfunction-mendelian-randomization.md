---
title: "Chen 2024 — Mendelian Randomization Study on Causal Effects of IBD on Erectile Dysfunction"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Di Chen, Chao Zhou, Quanhai Luo, Changsheng Chen, Gang Liu]
corresponding_author: "Gang Liu"
corresponding_email: "urology.dr_liu@foxmail.com"
institution: "Department of Urology, Reproductive Hospital of Guangxi Zhuang Autonomous Region, Nanning, China"
year: 2024
journal: "Scientific Reports"
doi: "10.1038/s41598-024-52712-1"
pmid: ""
evidence_level: computational-prediction
sample_size: "12,882 IBD cases + 21,770 controls (exposure); 1,154 ED cases + 94,024 controls (outcome)"
tags: [erectile-dysfunction, inflammatory-bowel-disease, crohns-disease, ulcerative-colitis, mendelian-randomization, GWAS, gut-brain-axis, vascular-dysfunction]
library_category: associated-conditions
platform: both
condition: "erectile dysfunction"
karen_brain_primitives: [1, 5, 9]
metals_discussed: []
taxa_discussed: []
key_findings:
  - "IBD causally increases ED risk (IVW OR=1.110, 95% CI 1.017-1.211, P=0.019)"
  - "Crohn's disease specifically contributes to ED (IVW OR=1.085, 95% CI 1.015-1.160, P=0.016) but ulcerative colitis does not (P>0.05)"
  - "No significant horizontal pleiotropy detected across analyses, supporting causal inference validity"
keystone: false
---

## Key Findings

- **IBD causally increases ED risk.** Two-sample Mendelian randomization using 62 SNPs showed IBD is associated with increased ED risk across multiple MR methods: inverse variance weighted (OR=1.110, 95% CI 1.017--1.211, P=0.019), weighted median (OR=1.197, 95% CI 1.059--1.353, P=0.004), and weighted mode (OR=1.310, 95% CI 1.037--1.654, P=0.027) [[chen-2024-ibd-erectile-dysfunction-mendelian-randomization]].
- **Crohn's disease drives the association, not ulcerative colitis.** In subgroup analysis using 52 CD-related SNPs, CD contributed to ED risk (IVW OR=1.085, 95% CI 1.015--1.160, P=0.016; weighted mode OR=1.186, 95% CI 1.007--1.397, P=0.046). UC (36 SNPs) showed no causal effect on ED across any MR method (all P>0.05) [[chen-2024-ibd-erectile-dysfunction-mendelian-randomization]].
- **Results are robust to sensitivity analyses.** No significant heterogeneity was detected in the IBD and CD analyses (Cochran Q P>0.05). Horizontal pleiotropy tests (MR-Egger intercept, MR pleiotropy test) showed no significant pleiotropy (P>0.05). Leave-one-out analysis confirmed no single SNP disproportionately influenced results [[chen-2024-ibd-erectile-dysfunction-mendelian-randomization]].
- **UC subgroup showed significant heterogeneity.** Unlike the IBD and CD analyses, the UC subgroup had significant heterogeneity in inverse variance weighted and MR-Egger methods (P=0.025--0.026), limiting interpretation [[chen-2024-ibd-erectile-dysfunction-mendelian-randomization]].

## Methods

- **Design:** Two-sample Mendelian randomization using publicly available GWAS summary statistics from openGWAS, IEU, and GWAS Catalog. European population only.
- **Exposure datasets:** IBD (12,882 cases, 21,770 controls; ID: ieu-a-31), CD (5,956 cases, 14,927 controls; ID: ieu-a-30), UC (6,968 cases, 20,464 controls; ID: ieu-a-32).
- **Outcome dataset:** ED (1,154 cases, 94,024 controls; ID: finn-b-ERECTILE_DYSFUNCTION; SNP=16,378,833).
- **Instrumental variables:** SNPs selected at genome-wide significance (P<5x10^-8 for IBD/subtype; P<5x10^-5 for ED association), with linkage disequilibrium pruning (R^2<0.001, 10,000 kb window). 62 SNPs for IBD, 52 for CD, 36 for UC.
- **MR methods:** Inverse variance weighted (primary), MR-Egger, weighted median, simple mode, weighted mode.
- **Sensitivity analyses:** Cochran Q heterogeneity test, MR-Egger intercept for horizontal pleiotropy, funnel plots, leave-one-out analysis.
- **Software:** Two-sample MR package in R.

## Detailed Summary

This study is the **first Mendelian randomization analysis** exploring the causal relationship between inflammatory bowel disease and erectile dysfunction. Previous observational studies had identified correlations between IBD and ED but could not establish causality due to confounding factors (age, surgery, depression, medications).

The authors used genetic variants (SNPs) as instrumental variables to test the causal direction from IBD to ED. The core MR assumptions are: (1) the genetic instrument is associated with the exposure (IBD); (2) the instrument is not associated with confounders; (3) the instrument influences the outcome (ED) only through the exposure.

**IBD overall analysis:** All five MR methods showed consistent direction of effect, with OR ranging from 1.110 (IVW) to 1.380 (simple mode). The IVW method, considered the primary analysis, yielded OR=1.110, P=0.019. Heterogeneity was non-significant (Cochran Q P=0.141), and no horizontal pleiotropy was detected (MR-Egger intercept P=0.901).

**Crohn's disease subgroup:** CD showed a causal effect on ED by IVW (OR=1.085, P=0.016) and weighted mode (OR=1.186, P=0.046). No significant heterogeneity (P=0.882) or pleiotropy (P=0.962) was present.

**Ulcerative colitis subgroup:** UC showed no causal effect on ED across any method. The IVW random-effects model gave OR=1.018 (95% CI 0.917--1.129, P=0.743). Notably, significant heterogeneity was detected (P=0.025--0.026), which the authors suggest may reflect different genetic architecture between UC and CD.

The authors propose several potential mechanisms linking IBD (particularly CD) to ED:
1. **Vascular endothelial dysfunction** — IBD causes systemic vascular inflammation, with elevated IL-6 and TNF-alpha directly affecting nitric oxide synthase activity and expression in vascular endothelial cells.
2. **Subclinical atherosclerosis** — IBD patients (including children) show increased aortic intima-media thickness and markers of early atherosclerosis.
3. **Thrombotic risk** — IBD patients are at high risk of thromboembolic events; the cavernous arteries of the penis are small-diameter vessels particularly vulnerable to microvascular dysfunction.
4. **Psychological factors** — Depression is prevalent in IBD (14.5% of patients) and is itself a risk factor for ED, though the MR design controls for this as a confounder.
5. **Surgical and anatomical factors** — Rectal surgery and stoma procedures in IBD can damage pelvic nerves, and nerve-sparing pelvic surgery has been linked to ED risk through systemic inflammatory response.

The study notes that UC and CD may have different genetic properties leading to the divergent findings, referencing work by Shi et al. on specific genes and dietary habits differentiating CD from UC.

## Relevance to WikiBiome

This study establishes a **causal direction from gut inflammation to sexual dysfunction**, supporting the broader WikiBiome thesis that gastrointestinal ecosystem disruption has systemic consequences far beyond the gut. Key connections:

- **[[erectile-dysfunction]] entity page** — Adds Mendelian randomization evidence for IBD as a causal factor, strengthening the case for gut-mediated ED beyond observational correlation.
- **[[crohns-disease]] entity page** — CD specifically (not UC) drives the ED association, suggesting the transmural inflammation and deeper tissue involvement characteristic of CD may be mechanistically important.
- **[[ulcerative-colitis]] entity page** — Negative finding for UC-ED causation is informative; the mucosal-limited inflammation of UC may not generate sufficient systemic vascular damage.
- **Vascular endothelial dysfunction concept** — The proposed mechanism via IL-6, TNF-alpha, and nitric oxide synthase inhibition connects gut inflammation to endothelial function, a pathway relevant to multiple conditions in the vault.
- **Subclinical atherosclerosis** — Evidence that IBD patients show early atherosclerotic markers connects to the [[atherosclerosis]] entity.

## Relevance to Cureva

- **[[erectile-dysfunction-signature]]** — This source strengthens the ecological layer by establishing IBD as a causal upstream factor for ED. The CD-specific association suggests that the deeper, transmural inflammatory pattern with its characteristic microbiome disruption (enrichment of adherent-invasive *E. coli*, depletion of *Faecalibacterium prausnitzii*) may be the mechanistically relevant dysbiosis pattern.
- **Intervention implications** — If CD-associated gut inflammation causally drives ED, then interventions targeting the gut ecosystem (restoring butyrate producers, managing pathobiont overgrowth) may have downstream benefit for ED. This supports ecological intervention approaches over isolated PDE5 inhibitor therapy.
- **STOP consideration** — The finding that IBD medications may themselves cause ED (the authors cite sulfasalazine-induced ED cases) is relevant for STOP page development.
- **Associated conditions mapping** — Strengthens the IBD-ED link in associated conditions networks. The vascular mechanism (endothelial dysfunction, atherosclerosis) connects ED to the broader cardiovascular disease cluster already represented in the vault.

## Contradictions / Tensions

- **UC finding contradicts some observational studies.** Several cross-sectional studies cited by the authors found ED prevalence elevated in IBD patients generally (including UC). This MR study suggests the observational UC-ED association may be confounded rather than causal. The MR evidence (computational-prediction level) should be weighed carefully against the observational data.
- **Valer et al. negative finding.** The authors note that Valer et al. found no significant relationship between sexual dysfunction and IBD, though 92% of their IBD patients were in clinical remission, which may explain the discrepancy.
- **Heterogeneity in UC analysis.** The significant heterogeneity detected in the UC subgroup (P=0.025) limits confidence in the null finding for UC. The authors acknowledge this but do not fully resolve it.
- **No microbiome mechanism tested.** Despite the gut-centric framing, this study tests genetic predisposition to IBD as a whole — it does not test whether specific microbiome alterations mediate the IBD-to-ED pathway. The causal chain from dysbiosis to ED remains inferential.

## Open Questions

1. **What mediates the CD-to-ED causal pathway?** The study establishes causality but not mechanism. Is it vascular endothelial dysfunction, systemic inflammation, microbiome-derived metabolites, or a combination?
2. **Does the specific microbiome composition in CD (vs. UC) explain the differential ED risk?** CD and UC have distinct taxonomic signatures — does the CD-enriched pathobiont profile (adherent-invasive *E. coli*, reduced *Faecalibacterium*) have specific vascular or neurological effects that UC-associated taxa do not?
3. **Would gut-targeted interventions in CD patients reduce ED risk?** If the causal pathway runs through gut inflammation, ecological interventions restoring gut homeostasis should theoretically reduce ED incidence.
4. **Does this finding generalize beyond European populations?** The study is limited to European GWAS data.
5. **What role do IBD medications play?** The authors note sulfasalazine as a potential ED cause — disentangling disease-mediated from treatment-mediated ED is critical for intervention design.
6. **Is there a metal component?** Neither the exposure nor outcome datasets include metallomic data. Given WikiBiome's framework, the question of whether metal dysregulation in CD (iron sequestration via hepcidin, zinc redistribution) contributes to the vascular mechanism linking CD to ED remains unexplored.
