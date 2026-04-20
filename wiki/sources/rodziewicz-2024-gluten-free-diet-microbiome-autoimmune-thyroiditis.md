---
title: "Rodziewicz et al. 2024 — Gluten-Free Diet Alters the Gut Microbiome in Women with Autoimmune Thyroiditis"
type: source
created: 2026-04-09
updated: 2026-04-20
authors: [Rodziewicz A, Szewczyk A, Bryl E]
corresponding_author: "Ewa Bryl"
corresponding_email: "ewa.bryl@gumed.edu.pl"
institution: "Medical University of Gdansk, Poland"
journal: Nutrients
year: 2024
doi: "10.3390/nu16050685"
evidence_level: randomized-controlled-trial
sample_size: "n=31"
tags: [autoimmune-thyroiditis, gluten-free-diet, gut-microbiome, Hashimotos-thyroiditis, diet, Desulfobacterota, Proteobacteria, Prevotella, Bifidobacterium, anti-TPO, Parasutterella, Coriobacteriaceae, inflammation]
platform: both
condition: "autoimmune thyroiditis"
metals_discussed: []
taxa_discussed: [bifidobacterium, prevotella, parasutterella, desulfovibrio, escherichia-coli, akkermansia]
key_findings:
  - "4 weeks of gluten-free diet in AIT women significantly increased Desulfobacterota and Proteobacteria while decreasing Actinobacteriota, Coriobacteriaceae, and Bifidobacterium"
  - "No significant beneficial changes in thyroid function markers (TSH, FT4, FT3, anti-TPO, anti-Tg, CRP, ESR) after 8 weeks of dietary intervention"
  - "Microbiome alterations suggest increasing inflammation rather than improvement, indicating GFD should be used cautiously in AIT"
karen_brain_primitives: [5, 9]
keystone: false
library_category: diet
---

# Gluten-Free Diet Alters the Gut Microbiome in Women with Autoimmune Thyroiditis

## Key Findings

- **A 4-week gluten-free diet (GFD) significantly altered gut microbiome composition** in women with autoimmune thyroiditis: Desulfobacterota increased (p=0.021), Proteobacteria increased (p=0.015), Actinobacteriota decreased (p=0.038), Coriobacteriaceae decreased (p=0.003), Bifidobacterium decreased (p=0.011), Prevotella increased (p=0.044), Parasutterella increased (p=0.008) ([[rodziewicz-2024-gluten-free-diet-microbiome-autoimmune-thyroiditis]], RCT, n=31)
- **No significant beneficial changes in blood thyroid parameters** were observed after 8 weeks: TSH, FT4, FT3, anti-TPO, anti-Tg, CRP, ESR, and fasting glucose showed no significant differences between gluten and placebo groups at any time point ([[rodziewicz-2024-gluten-free-diet-microbiome-autoimmune-thyroiditis]], RCT, n=31)
- **The only significant blood parameter change was anti-TPO decrease in the placebo group** (p=0.024, large effect size d=0.66), not the gluten group, suggesting the GFD itself (without gluten reintroduction) may have been responsible ([[rodziewicz-2024-gluten-free-diet-microbiome-autoimmune-thyroiditis]], RCT, n=31)
- **The detected microbiome alterations may indicate increasing inflammation** rather than improvement, as Desulfobacterota and Proteobacteria are associated with pro-inflammatory states, while Bifidobacterium (a beneficial genus) decreased ([[rodziewicz-2024-gluten-free-diet-microbiome-autoimmune-thyroiditis]], RCT, n=31)
- **None of the 31 participants had celiac disease markers** (EmA, tTG IgA, AGA all negative), confirming this was a non-celiac AIT population ([[rodziewicz-2024-gluten-free-diet-microbiome-autoimmune-thyroiditis]], RCT, n=31)

## Methods

- **Study type**: Randomized double-blind intervention study
- **Population**: 31 women aged 20-50 with AIT (diagnosed by increased anti-TPO and/or anti-Tg antibodies), stabilized thyroid function, normal BMI (18.5-24.9 kg/m2), enrolled in Pomeranian Voivodeship, Poland. 29 were on levothyroxine. Weight maintained stable throughout (mean change 1.54 kg, max 5 kg).
- **Exclusion criteria**: Newly diagnosed AIT with unregulated hormones, concomitant celiac disease or wheat allergy, GFD in prior 6 months, intestinal disorders, antibiotics or probiotics in prior 6 months
- **Design**: Phase 1 (weeks 0-4): All 31 participants on normocaloric GFD with individualized meal plans. Phase 2 (weeks 4-8): Randomized to gluten capsules (2g/day in 3 capsules, n=16) or rice starch placebo (n=15) while continuing GFD. Double-blinded.
- **Gluten dose**: 2g/day (equivalent of ~1 slice of white bread); average capsule dose 657 +/- 17 mg, verified per European Pharmacopoeia 11.0
- **Sequencing**: 16S rRNA (V3-V4 region), MiSeq Illumina paired-end 2x300nt; QIIME 2 (v2017.6.0) with Silva 138 database; DADA2 for ASV analysis; 24 bacterial taxa chosen for analysis based on highest counts
- **Blood parameters**: TSH, FT4, FT3, anti-TPO, anti-Tg, CRP, ESR, fasting glucose at T0, T1 (4 weeks), T2 (8 weeks)
- **Statistics**: Non-parametric (Mann-Whitney U, Wilcoxon signed-rank) with effect sizes r and Cohen's d; alpha=0.05
- **Completions**: 28 completed all samples; 2 lost to COVID-19 quarantine; 1 excluded for antibiotic use

## Detailed Summary

### Microbiome Changes After 4 Weeks GFD (T0 to T1, all 30 subjects)

At the phylum level, Desulfobacterota significantly increased (Mdn 213.0 to 294.0, p=0.021, r=0.38) and Proteobacteria significantly increased (Mdn 1667.0 to 2408.5, p=0.015, r=0.44). Actinobacteriota significantly decreased (Mdn 3199.0 to 2962.5, p=0.038, r=0.38). At the family level, Coriobacteriaceae significantly decreased (Mdn 967.5 to 731.0, p=0.003, r=0.52). At the genus level, Bifidobacterium significantly decreased (Mdn 1238.5 to 672.5, p=0.011, r=0.46), Prevotella significantly increased (Mdn 66.0 to 93.0, p=0.044, r=0.37), and Parasutterella significantly increased (Mdn 43.5 to 72.5, p=0.008, r=0.49). No significant changes in Bacteroidota, Firmicutes, Lactobacillus, Alistipes, Escherichia-Shigella, Akkermansia, or E. coli.

### Gluten vs Placebo (T1 to T2)

After 4 weeks of capsule intake, no significant changes were observed in the gluten group. In the placebo group, significant increases occurred in Actinobacteriota (p=0.030) and Bacteroidota (p=0.015). No significant within-group changes in any genus. At T2, no significant between-group differences in any of the 24 taxa (p>0.05 for all).

### Blood Parameters

After 4 weeks GFD (T0 to T1, n=30): no significant changes in TSH (2.15 to 2.14), FT4 (1.32 to 1.31), FT3 (2.88 to 2.86), anti-TPO (152.84 to 145.31, p=0.154), anti-Tg (244.39 to 218.99, p=0.142), glucose (87.47 to 88.07), ESR, or CRP. During capsule intake (T1 to T2): anti-TPO significantly decreased only in the placebo group (190.71 to 184.56, p=0.024, d=0.66). After entire 8-week intervention, glucose was the only parameter differing significantly between groups (higher in placebo, p<0.05).

## Relevance to WikiBiome

- Informs [[gut-microbiome]] entity page on dietary impact on microbiome composition in autoimmune disease
- Bifidobacterium decrease on GFD is relevant to [[bifidobacterium]] entity page, contrasting with its complex role in Graves' disease where it positively correlated with TRAb ([[chen-2021-gut-microbiota-thyroid-graves]])
- Proteobacteria increase connects to [[proteobacteria]] as a marker of dysbiosis and inflammation
- Prevotella increase relevant to [[prevotella]] entity page on its dual role as both inflammation marker and diet-quality indicator
- Desulfobacterota increase relevant to [[desulfovibrio]] entity on pro-inflammatory sulfate-reducing bacteria
- Informs [[hashimotos-thyroiditis]] entity on dietary interventions and microbiome associations

## Relevance to Cureva

- **STOP signal**: Gluten-free diet in non-celiac AIT patients may not provide benefit and could worsen gut microbiome composition (pro-inflammatory shifts)
- The anti-TPO decrease in the placebo group (continued GFD without gluten reintroduction) vs no change in the gluten group warrants cautious interpretation
- **Intervention nuance**: If GFD is pursued, monitoring for Bifidobacterium depletion and Proteobacteria expansion is warranted; probiotic co-supplementation may be advisable

## Contradictions / Tensions

- The Bifidobacterium decrease on GFD contradicts the general assumption that GFD is beneficial for autoimmune patients; this aligns with studies in healthy people and celiac patients showing GFD can negatively alter microbiome
- The anti-TPO decrease occurring in the placebo group but not the gluten group is counterintuitive and suggests the GFD itself (not gluten avoidance per se) drove changes, possibly through fiber reduction
- Proteobacteria has been demonstrated in thyroid carcinoma and Graves' disease, and its increase on GFD in AIT patients is concerning
- Small sample size (n=31) limits statistical power for detecting small effects

## Open Questions

- Would longer GFD duration (>8 weeks) eventually show thyroid function changes?
- Would combining GFD with probiotic supplementation (particularly Bifidobacterium) mitigate the adverse microbiome shifts?
- Is the 2g/day gluten dose sufficient to detect reintroduction effects, or would higher doses show clearer results?
- Would selenium or zinc supplementation alongside GFD protect against the pro-inflammatory microbiome shift?
- How do these findings apply to AIT patients who also have non-celiac gluten sensitivity?
