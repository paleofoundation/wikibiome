---
title: "Su 2023 — Specific Gut Microbiota May Increase the Risk of Erectile Dysfunction (Two-Sample MR)"
type: source
created: 2026-04-14
updated: 2026-04-19
authors: [Quanxin Su, Yanxi Long, Yayin Luo, Tao Jiang, Lei Zheng, Kenan Wang, Qizhen Tang]
corresponding_author: "Kenan Wang; Qizhen Tang"
corresponding_email: "wangkenan86@hotmail.com; lnfstqz@163.com"
institution: "The First Affiliated Hospital of Dalian Medical University"
year: 2023
journal: "Frontiers in Endocrinology"
doi: "10.3389/fendo.2023.1216746"
evidence_level: quasi-experimental
sample_size: "n=242,145 (6,175 ED cases + 217,630 controls for outcome; 18,340 for microbiota exposure)"
tags: [erectile-dysfunction, mendelian-randomization, gut-microbiota, lachnospiraceae, oscillibacter, senegalimassilia, ruminococcaceae, tyzzerella, cardiovascular, endothelial-dysfunction]
library_category: causal
platform: both
condition: erectile-dysfunction
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [lachnospiraceae, lachnospiraceae-nc2004-group, oscillibacter, senegalimassilia, tyzzerella, ruminococcaceae-ucg-013]
key_findings:
  - "Five gut taxa (Lachnospiraceae, Lachnospiraceae NC2004 group, Oscillibacter, Senegalimassilia, Tyzzerella3) causally increase ED risk via MR"
  - "Ruminococcaceae UCG-013 is causally protective against ED (OR=0.828, p=0.049)"
  - "Senegalimassilia shows strongest risk signal (OR=1.356, p=0.002) with IVW and weighted median confirmation"
keystone: false
source_count: 1
---

# Su 2023 — Specific Gut Microbiota May Increase the Risk of Erectile Dysfunction (Two-Sample MR)

## Key Findings

- **Five gut taxa** are genetically causally associated with **increased ED risk** via two-sample Mendelian randomization: family [[lachnospiraceae-family|Lachnospiraceae]] (OR 1.265, p=0.008), genus Lachnospiraceae NC2004 group (OR 1.189, p=0.019), genus [[oscillibacter|Oscillibacter]] (OR 1.201, p=0.015), genus [[senegalimassilia|Senegalimassilia]] (OR 1.356, p=0.002), and genus Tyzzerella3 (OR 1.134, p=0.022).
- **One taxon** is causally associated with **decreased ED risk**: genus [[ruminococcaceae|Ruminococcaceae]] UCG-013 (OR 0.828, p=0.049), with corroborating direction from MR-Egger (OR 0.491, p=0.032) and weighted median (OR 0.752, p=0.035).
- **Senegalimassilia** showed the strongest and most robust risk signal, with both IVW (p=0.002) and weighted median (p=0.038) reaching significance.
- No heterogeneity (Cochrane's Q, all p>0.05) or horizontal pleiotropy (MR-Egger intercept, all p>0.05) detected for any of the six associations, supporting valid causal inference.
- The study proposes that gut microbiota may influence ED risk through effects on lipid metabolism, vascular endothelial function, systemic inflammation, and the gut-brain axis (depression pathways).

## Methods

- **Design**: Two-sample Mendelian randomization using publicly available GWAS summary statistics.
- **Exposure data**: Gut microbiota GWAS from the MiBioGen Consortium (Kurilshikov et al., *Nature Genetics* 2021) — 18,340 individuals from 24 cohorts, 211 gut microbiota taxa, 122,110 associated SNPs.
- **Outcome data**: ED GWAS from MRC IEU OpenGWAS (GWAS ID: ebi-a-GCST006956, Bovijn et al. 2019) — 6,175 ED cases and 217,630 controls, all European ancestry.
- **IV selection**: SNPs associated with gut microbiota at p<1x10-5; linkage disequilibrium pruned (r2=0.001, kb=10,000); palindromic/non-matching SNPs removed; weak IVs excluded (F-value >10 required). PhenoScanner used to exclude SNPs associated with outcome confounders.
- **Primary analysis**: Inverse variance weighted (IVW) fixed-effects model.
- **Sensitivity analyses**: MR-Egger, weighted median, simple mode, weighted mode.
- **Quality control**: Cochrane's Q-test for heterogeneity, MR-Egger intercept for horizontal pleiotropy, leave-one-out sensitivity analysis.
- **Software**: RStudio 4.1.2, TwoSampleMR R package.
- **Total IVs included**: 2,818 SNPs across 211 microbiota taxa after quality control.

## Detailed Summary

This study is the first large-scale, comprehensive Mendelian randomization analysis examining the causal role of 211 gut microbiota taxa in erectile dysfunction. The MR design leverages the random assortment of alleles at conception as a natural experiment, thereby reducing confounding from lifestyle factors (smoking, alcohol, obesity) and reverse causation that limit prior observational studies of ED-microbiota associations.

### Risk-increasing taxa

| Taxon | Level | SNPs | OR (IVW) | 95% CI | p-value | Weighted median p |
|-------|-------|------|----------|--------|---------|-------------------|
| [[lachnospiraceae-family\|Lachnospiraceae]] | Family | 17 | 1.265 | 1.061–1.509 | 0.009 | 0.032 |
| Lachnospiraceae NC2004 group | Genus | 10 | 1.189 | 1.029–1.374 | 0.019 | 0.012 |
| [[oscillibacter\|Oscillibacter]] | Genus | 13 | 1.201 | 1.035–1.393 | 0.016 | 0.162 |
| [[senegalimassilia\|Senegalimassilia]] | Genus | 6 | 1.356 | 1.113–1.651 | 0.002 | 0.038 |
| Tyzzerella3 | Genus | 14 | 1.134 | 1.018–1.262 | 0.023 | 0.044 |

### Protective taxon

| Taxon | Level | SNPs | OR (IVW) | 95% CI | p-value | MR-Egger p | Weighted median p |
|-------|-------|------|----------|--------|---------|------------|-------------------|
| [[ruminococcaceae\|Ruminococcaceae]] UCG-013 | Genus | 14 | 0.828 | 0.686–0.999 | 0.049 | 0.032 | 0.035 |

### Proposed mechanistic pathways

The authors propose several pathways by which these taxa may influence ED risk:

1. **Lipid metabolism / metabolic syndrome**: [[lachnospiraceae-family|Lachnospiraceae]] abundance positively correlates with glucose/lipid metabolic disorders. Metabolic syndrome (hypertension, insulin resistance, hypertriglyceridemia) is a major ED risk factor. [[ruminococcaceae|Ruminococcaceae]] UCG-013 is more abundant in lean mice and correlates positively with HDL-C and negatively with TC, TG, and LDL-C.
2. **Vascular endothelial dysfunction**: Gut dysbiosis → impaired intestinal barrier → bacterial translocation → systemic inflammation → endothelial dysfunction → atherosclerotic plaque formation in penile vasculature. Tyzzerella4 (related to Tyzzerella3) is linked to cardiovascular disease progression. [[senegalimassilia|Senegalimassilia]] is associated with increased blood pressure.
3. **Gut-brain axis / depression**: [[lachnospiraceae-family|Lachnospiraceae]] subtaxa (Anaerostipes, Dorea) positively correlate with major depression. [[oscillibacter|Oscillibacter]] abundance is increased in depressed patients. Depression is a known trigger for ED.
4. **Homocysteine metabolism**: Some gut microbiota synthesize B vitamins and folic acid, potentially influencing homocysteine levels — hyperhomocysteinemia is an emerging ED risk factor.

### Limitations

- All data from European populations — generalizability to other ethnicities is unconfirmed. Notably, [[oscillibacter|Oscillibacter]] may play the opposite role in Asian populations (linked to decreased triglycerides).
- Statistical associations only — biological mechanisms remain uncharacterized.
- No subgroup stratification by age, surgical history, or hormone levels.
- P-value threshold for microbiota GWAS was relaxed (p<1x10-5 vs. genome-wide significance of 5x10-8), which is standard for MR studies of gut microbiota but increases false-positive risk.

## Relevance to WikiBiome

- **Entity pages**: Strengthens [[erectile-dysfunction]] as a condition with gut-microbiome associations. Supports entity pages for [[lachnospiraceae-family]], [[oscillibacter]], [[senegalimassilia]], [[ruminococcaceae]]. Tyzzerella3 and Lachnospiraceae NC2004 group may warrant stub entities.
- **Concept pages**: Supports [[gut-penis-axis]], [[lipopolysaccharide]] (endotoxemia pathway), [[nitric-oxide]] (endothelial dysfunction).
- **Signature page**: [[erectile-dysfunction-signature]] — this is one of multiple MR studies converging on a taxonomic signature for ED. Strengthens the taxonomic layer, particularly for [[senegalimassilia|Senegalimassilia]] and [[ruminococcaceae|Ruminococcaceae]] UCG-013 as high-confidence causal taxa.
- **Cross-condition relevance**: The Lachnospiraceae-metabolic syndrome-cardiovascular disease axis connects ED to [[atherosclerosis]], [[coronary-artery-disease]], and metabolic syndrome — shared taxa across conditions.

## Relevance to Cureva

- **Taxonomic layer**: Six taxa with MR-validated causal direction provide high-confidence targets for the ED signature.
- **Intervention hypotheses**: Targeted modulation of Ruminococcaceae UCG-013 abundance (via probiotics or dietary intervention) as a potential protective strategy. The authors explicitly suggest probiotics and fecal microbiota transplantation as potential future therapeutic directions.
- **STOP consideration**: If Lachnospiraceae enrichment drives ED risk via metabolic pathways, dietary interventions that inadvertently increase Lachnospiraceae may be counterproductive in ED patients.
- **Senegalimassilia** as an under-studied pathobiont merits deep-dive investigation for Cureva — its mechanism in vascular/endothelial dysfunction is unknown but the MR signal is the strongest in this study.

## Contradictions / Tensions

- **Oscillibacter direction may be population-dependent**: Liu et al. (2022, *Nature Genetics*) found that [[oscillibacter|Oscillibacter]] was causally linked to *decreased* triglyceride concentrations in an Asian population, suggesting it could be protective in non-European groups. This contradicts the risk association found here in Europeans.
- **Lachnospiraceae as risk taxon conflicts with its commensal role**: [[lachnospiraceae-family|Lachnospiraceae]] is a core commensal family — its enrichment as a risk factor here may reflect specific subtaxa (e.g., those driving lipid dysmetabolism) rather than the family as a whole. The NC2004 subgroup signal partly addresses this, but family-level MR is ecologically coarse.
- **Ruminococcaceae UCG-013 protective signal is borderline**: OR 0.828 with p=0.049 is at the significance threshold. While MR-Egger and weighted median corroborate direction, the confidence interval nearly includes 1.0 (95% CI 0.686–0.999). Replication needed.

## Open Questions

- What is the biological mechanism by which [[senegalimassilia|Senegalimassilia]] increases ED risk? Is it via vascular inflammation, endothelial dysfunction, or another pathway?
- Does the causal signal for these taxa extend to PDE5 inhibitor response variance in ED patients?
- Can targeted probiotic supplementation with Ruminococcaceae UCG-013 reduce ED incidence or severity in clinical trials?
- Are metal dependencies or metal-related metabolic pathways involved in any of these taxa's effects on ED? (No metals were directly discussed, but the metabolic syndrome connection may involve iron or zinc metabolism.)
- How does the Lachnospiraceae family-level signal decompose at the species level — which specific species drive the risk association?
