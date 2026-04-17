---
title: "Zhang 2024 — Gut Microbiota and Postpartum Depression: A Mendelian Randomization Study"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [Jianjun Zhang, Lechuan Wei, Hongfei Tan, Wenwen Pang]
corresponding_author: "Wenwen Pang"
corresponding_email: "pwenwen2008@163.com"
institution: "Affiliated Hospital of Weifang Medical University, Weifang, China"
year: 2024
journal: "Frontiers in Psychiatry"
doi: "10.3389/fpsyt.2024.1282742"
pmid: "not yet verified"
evidence_level: computational-prediction
sample_size: "n=4,834 PPD cases, 33,173 controls (UK Biobank); microbiome GWAS n=18,473 (MiBioGen, 25 cohorts)"
tags: [postpartum-depression, mendelian-randomization, gut-microbiota, actinobacteria, holdemanella, causal-inference, gut-brain-axis]
library_category: causal
platform: wikibiome
condition: "postpartum-depression"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [actinobacteria, holdemanella, bifidobacterium, firmicutes, corynebacterium]
key_findings:
  - "Phylum Actinobacteria causally protective against PPD: OR=0.971 (95% CI 0.948–0.994, P=0.014) via IVW Mendelian randomization"
  - "Genus Holdemanella causally protective: OR=0.979 (95% CI 0.961–0.997, P=0.023); abundance linked to omega-3 rich fish consumption"
  - "No heterogeneity or horizontal pleiotropy detected across all four protective taxa; Steiger test confirmed causal directionality (microbiome → PPD)"
keystone: false
---

## Key Findings

- **Actinobacteria** (phylum) causally protective against PPD: OR=0.971 (95% CI 0.948–0.994), P=0.014, IVW method; consistent directionality across weighted median. Higher Actinobacteria abundance — including *Bifidobacterium* and *Corynebacterium* — was seen in normal vs. PPD mice (Tian et al. animal model); a prior bidirectional MR also found Actinobacteria protective against MDD (OR 0.88, 95% CI 0.87–0.9).
- **Holdemanella** (genus) causally protective: OR=0.979 (95% CI 0.961–0.997), P=0.023. This genus is depleted in post-stroke depression and negatively correlated with HAMD depression scores. Consuming omega-3-rich fish is associated with increased Holdemanella abundance, suggesting a dietary-microbiome-mood axis.
- Two uncharacterized genera (Unknown IDs 2001 and 2755) also showed protective effects (OR 0.972 and 0.977), consistent across multiple MR methods.
- **No heterogeneity** (Cochran Q, all Q_p>0.05) and **no horizontal pleiotropy** (MR-PRESSO, MR-Egger) detected. Steiger directionality test confirmed SNP variance in bacterial exposure > variance in PPD outcome, supporting true causal direction.

## Methods

Two-sample Mendelian randomization using GWAS summary statistics:
- **Exposure**: MiBioGen consortium gut microbiome GWAS (18,473 individuals, 25 cohorts, 211 taxa; 16S rRNA sequencing, European ancestry)
- **Outcome**: UK Biobank PPD GWAS (4,834 cases, 33,173 controls, European ancestry, 11,982,120 SNPs; "depression possibly related to childbirth" phenotype)
- **SNP selection**: P<1×10⁻⁵ threshold; r²<0.001 within 10,000 kb window (LD pruning); palindromic and echo SNPs removed. Total 2,044 SNPs as instrumental variables.
- **Primary method**: IVW (random effects). Supplementary: MR-Egger, weighted median, simple mode, weighted mode. Sensitivity: MR-PRESSO global test, leave-one-out, Cochran Q, Steiger test.

## Detailed Summary

The study identified four bacterial taxa with causal protective effects on PPD through GWAS-based two-sample MR — the strongest causal inference methodology available without an RCT. The key mechanistic hypotheses proposed:

**Actinobacteria**: These bacteria produce antibiotics (penicillin, tetracycline, erythromycin) that compete with pathogens for adhesion sites and nutrients, maintaining gut homeostasis. They modulate host immune responses, potentially reducing the neuroinflammatory burden associated with depression. Their broader relevance across MDD and PPD suggests they may be a general protective factor for mood disorders.

**Holdemanella**: Involved in glucose metabolism and linked to metabolic syndrome pathways. Omega-3 fatty acids — chronically depleted in depressed patients — appear to support Holdemanella abundance, connecting dietary fatty acid status to gut composition and depression risk through a plausible microbiome-mediated pathway.

**Limitations**: European-ancestry GWAS only; mixed-sex microbiome GWAS for a female-specific outcome; effect sizes modest (OR ~0.97), consistent with polygenic architecture.

## Relevance to WikiBiome

- Strengthens [[postpartum-depression]] entity page with genetic-level causal evidence for specific protective taxa.
- Connects to [[actinobacteria]] entity page (shared protection across PPD and MDD).
- Supports [[gut-brain-axis]] concept with MR-level causal inference.
- Holdemanella-omega-3 link informs dietary content on WikiBiome.

## Relevance to Cureva

- MR causal evidence for microbiome involvement in PPD at the highest achievable level without RCT.
- Holdemanella/omega-3 connection: potential dietary intervention hypothesis (I_to_f: omega-3 → increased Holdemanella; I_to_D: omega-3 supplementation in peripartum women).
- Actinobacteria depletion as potential PPD risk biomarker.

## Contradictions / Tensions

- Effect sizes are small (OR 0.97–0.98); individual taxa contribute modestly, suggesting collective microbiome composition matters more than any single lineage.
- UK Biobank PPD phenotype ("depression possibly related to childbirth") may not capture full clinical PPD spectrum.

## Open Questions

- What specific metabolites from Holdemanella mediate mood effects?
- Can peripartum probiotic supplementation targeting Actinobacteria/Holdemanella prevent PPD?
- Do these findings replicate in non-European populations?
