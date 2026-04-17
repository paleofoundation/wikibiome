---
title: "Zhou 2024 — Association of Maternal Postpartum Depression Symptoms with Infant Neurodevelopment and Gut Microbiota"
type: source
created: 2026-04-09
updated: 2026-04-16
authors: [Lepeng Zhou, Linghong Tang, Chuhui Zhou, Shi Wu Wen, Daniel Krewski, Ri-hua Xie]
corresponding_author: "Ri-hua Xie"
corresponding_email: "xierihua928@163.com"
institution: "School of Nursing, Southern Medical University, Guangzhou; Women and Children Medical Research Center, Foshan Women and Children Hospital, China"
year: 2024
journal: "Frontiers in Psychiatry"
doi: "10.3389/fpsyt.2024.1385229"
pmid: "not yet verified"
evidence_level: prospective-cohort
sample_size: "n=101 mother-infant dyads (41 PPD, 60 non-PPD); 97 infant stool samples at 42 days; 86 infants with 6-month ASQ-3 data"
tags: [postpartum-depression, infant-neurodevelopment, gut-microbiota, metabolomics, bifidobacterium, veillonella, finegoldia, gut-brain-axis, N-acetyl-aspartic-acid, intergenerational]
library_category: causal
platform: wikibiome
condition: "postpartum-depression"
karen_brain_primitives: [1, 5]
metals_discussed: []
taxa_discussed: [bifidobacterium, veillonella, finegoldia, dialister, cronobacter, megasphaera, blautia]
key_findings:
  - "Infants of mothers with PPD (EPDS≥11 at 42 days) had significantly lower ASQ-3 neurodevelopmental total scores at 6 months (MD=-21.2; 95% CI -36.6 to -5.9; P=0.007)"
  - "PPD-exposed infants had higher Shannon diversity (P=0.013) with enrichment of Veillonella and Finegoldia, and depletion of Bifidobacterium (P=0.048), Dialister (P=0.047), Blautia (P=0.038) at 42 days"
  - "N-Acetyl-L-aspartic acid and L-Aspartic acid in infant stool mediated the PPD–problem-solving skill relationship (ACME=-0.58, P<0.05)"
keystone: false
---

## Key Findings

- **Neurodevelopmental deficit**: Infants born to mothers with PPD had significantly lower ASQ-3 total scores at 6 months (MD=-21.2; 95% CI=-36.6 to -5.9; P=0.007) vs. non-PPD-exposed infants. Fine motor (MD=-4.2; P=0.012), problem-solving (MD=-7.5; P<0.001), and personal-social (MD=-7.2; P=0.002) domains were all affected. Differences persisted after full confounder adjustment (BMI, gestational age, delivery mode, NICU care, feeding type).
- **Infant microbiome at 42 days**: PPD-exposed infants showed **higher Shannon diversity** (P=0.013). LDA analysis (LDA>2, P<0.05) identified *Veillonella* and *Finegoldia* enriched in PPD group; *Bifidobacterium* (P=0.048), *Dialister* (P=0.047), and *Blautia* (P=0.038) depleted after adjusting for delivery mode and feeding type.
- **Metabolomics**: The alanine, aspartate, and glutamate metabolic pathway was significantly downregulated in PPD infants by KEGG pathway analysis. Key metabolites lower in PPD infants: N-Acetyl-L-aspartic acid, L-Aspartic acid, L-Asparagine, Gluconolactone. *Finegoldia* showed negative correlations with these metabolites; *Bifidobacterium* showed positive correlations.
- **Causal mediation**: N-Acetyl-L-aspartic acid (NAA; ACME=-0.58, 95% CI -1.59 to -0.13, P<0.05) and L-Aspartic acid (ACME=-0.9, P<0.05) each mediated the PPD → infant problem-solving deficit relationship, adjusting for gestational age, delivery mode, NICU care, pre-pregnancy BMI, and feeding type.

## Methods

Prospective cohort derived from a triple-blinded RCT investigating vaginal microbiota transfer on infant gut microbiome. Women enrolled December 2020–July 2021 at tertiary hospital in Guangdong, China (n=101 meeting inclusion criteria). **PPD definition**: EPDS ≥11 at 42 days (40.6% prevalence in this cohort). **Infant microbiome**: Stool at 42 days; 16S rRNA V3-V4 sequencing + LC-MS targeted metabolomics. **Neurodevelopment**: ASQ-3 at 6 months (5 domains, scored 0–300 total). Statistical analyses: Wilcoxon rank-sum for microbiome; LEfSe (LDA>2) for differential taxa; KEGG pathway enrichment; Spearman correlation co-occurrence network; causal mediation analysis. Missing data imputed by random forest (sensitivity analysis confirmed robustness).

## Detailed Summary

This is the first study to simultaneously characterize maternal PPD symptoms, early infant gut microbiota, infant stool metabolomics, and 6-month neurodevelopment in the same cohort.

**Why Bifidobacterium depletion matters**: *Bifidobacterium* is typically the dominant genus in breastfed infant microbiomes, producing SCFAs, synthesizing B vitamins, and supporting immune maturation. Its depletion in PPD-exposed infants represents a meaningful ecological disruption that could affect multiple developmental pathways simultaneously. *Bifidobacterium* was positively correlated with both Gluconolactone and L-Asparagine in the co-occurrence network.

**N-Acetyl-L-aspartic acid as mechanistic bridge**: NAA is the second most abundant metabolite in the brain, functioning as a neurotransmitter modulating metabotropic glutamate receptors and contributing to neuronal energy production from glutamine. Lower fecal NAA in PPD-exposed infants and its role as a mediator suggests that maternal PPD influences infant gut bacterial metabolism of amino acids, which in turn shapes the neurochemical environment available for brain development.

**Intergenerational transmission pathway**: The data suggest a pathway from maternal PPD → altered breast milk composition (TGF-β, IgA) and/or maternal behavior → infant gut colonization changes → metabolite alterations → developmental outcomes. However, direct horizontal microbial transmission cannot be ruled out.

## Relevance to WikiBiome

- Critical intergenerational evidence for [[postpartum-depression]] entity: PPD effects extend to infant microbiome and neurodevelopment up to 6 months.
- Connects to [[bifidobacterium]] entity (depleted in PPD-exposed infants; linked to amino acid metabolite reductions).
- Supports [[gut-brain-axis]] concept with metabolomic mediation evidence.

## Relevance to Cureva

- Provides mechanistic evidence that untreated PPD has measurable offspring neurobiological consequences.
- NAA pathway as potential biomarker for PPD-driven developmental risk.
- Bifidobacterium depletion: intervention target for probiotic supplementation in PPD-exposed infants (I_to_f evidence).

## Contradictions / Tensions

- Single-center Guangdong hospital, predominantly vaginal vs. cesarean mix may not generalize.
- EPDS at 42 days only; does not capture PPD onset during pregnancy.
- No maternal inflammatory or metallomic measurements, limiting integration with broader PPD metallomic framework.

## Open Questions

- Through what mechanism does maternal PPD transmit microbiome signals to the infant (breast milk composition vs. behavioral vs. direct transmission)?
- Do neurodevelopmental deficits at 6 months persist at 12, 24 months?
- Can early *Bifidobacterium* supplementation in PPD-exposed infants mitigate the neurodevelopmental impact?
