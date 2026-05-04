---
title: "Graves' Disease — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - chen-2021-gut-microbiota-thyroid-graves
  - yang-2022-intestinal-flora-graves-methimazole
  - han-2022-berberine-methimazole-graves-microbiome
  - chen-2024-gut-microbiota-six-thyroid-diseases-mr
  - xian-2023-graves-disease-ibd-mendelian-randomization
  - brock-2015-selenium-thyroid-autoimmunity
  - brylinski-2025-trace-elements-thyroid-diseases
  - kravchenko-2023-thyroid-hormones-minerals-AITD
  - mian-2022-editorial-diet-impair-thyroid-function
  - rodziewicz-2024-gluten-free-diet-microbiome-autoimmune-thyroiditis
source_count: 10
tags: [graves-disease, autoimmune, thyroid, selenium, iron, zinc, iodine, gut-thyroid-axis, microbiome, Th17-Treg]

metallomic_signature:
  elevated: [lead, cadmium, mercury, iodine-dysregulated]
  depleted: [selenium, zinc, iron]

taxonomic_signature:
  enriched:
    - taxon: "[[lactobacillus]]"
      role: "Paradoxically enriched -- positively correlated with TRAb (R=0.489) and TPOAb (R=0.607); not protective in GD context"
    - taxon: "[[streptococcus]]"
      role: "Enriched in untreated GD; molecular mimicry with thyroid peroxidase epitopes; decreases after methimazole"
    - taxon: "[[collinsella]]"
      role: "Significantly enriched in untreated GD vs controls and treated patients; MR risk factor (OR 1.301)"
    - taxon: "[[bifidobacterium]]"
      role: "Paradoxically positively correlated with TRAb (R=0.588); MR-confirmed risk factor (OR 1.246); protective in other conditions"
    - taxon: "[[desulfovibrio]]"
      role: "MR risk factor (OR 1.216); sulfate-reducing bacterium"
    - taxon: "[[veillonella]]"
      role: "Significantly increased in untreated GD (P=0.039)"
  depleted:
    - taxon: "[[phascolarctobacterium]]"
      role: "Propionate producer -- strongly negatively correlated with TRAb (R=-0.544); depleted in GD, increases after treatment"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer -- negatively correlated with FT3/FT4 and TRAb; loss impairs Treg induction"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer depleted in untreated GD"
    - taxon: "[[dialister]]"
      role: "Significantly depleted in untreated GD vs controls"
    - taxon: "[[butyricimonas]]"
      role: "MR-confirmed protective (OR 0.824); SCFA-mediated protection"
    - taxon: "[[lachnospira]]"
      role: "Protective against both GD and Plummer disease in MR analysis"

nutritional_immunity:
  elevated: [hepcidin, transferrin, lipocalin-2]
  depleted: [selenoproteins, glutathione-peroxidase, thioredoxin-reductase, deiodinases]

ecological_features: [intestinal-permeability, Th17-Treg-imbalance, molecular-mimicry, SCFA-deficiency, LPS-translocation, bidirectional-gut-thyroid-axis]

virulence_enzymes: [beta-glucuronidase, siderophores, LPS-endotoxin, thyroid-peroxidase-mimicry-antigens]

confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[hashimotos-thyroiditis]]"
    shared_metals: [selenium, iodine, iron, zinc]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, proteobacteria, prevotella]
    shared_ecological: [Th17-Treg-imbalance, SCFA-deficiency, molecular-mimicry, intestinal-permeability]
    overlap_score: 0.78
  - condition: "[[inflammatory-bowel-disease]]"
    shared_metals: [iron, zinc]
    shared_taxa: [bacteroides-fragilis, faecalibacterium-prausnitzii, lachnospiraceae, escherichia-coli]
    shared_ecological: [intestinal-permeability, Th17-Treg-imbalance, SCFA-deficiency, LPS-translocation]
    overlap_score: 0.55
  - condition: "[[depression]]"
    shared_metals: [lead, iron, selenium]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, escherichia-coli]
    shared_ecological: [dysbiosis, neuroinflammation, LPS-translocation]
    overlap_score: 0.42

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 3, 4, 5, 7, 8]
---

# Graves' Disease -- Microbiome Signature

## Overview

Graves' disease (GD) is the most common cause of hyperthyroidism, characterized by TSH receptor antibodies (TRAb) that stimulate the thyroid gland. It affects women at a 3:1 ratio, with concordance rates of 35% in monozygotic vs 3% in dizygotic twins, indicating both genetic susceptibility (HLA-DRB1, PTPN22, JAK/STAT pathway) and environmental triggers. There is no effective pharmacological therapy for the underlying autoimmunity -- treatment remains symptomatic with thyrostatics (methimazole) -- making microbiome and mineral interventions particularly relevant.

The microbiome signature framework reframes Graves' disease as a metal-driven dysbiosis disorder where selenium deficiency, iodine dysregulation, toxic metal burden (lead, cadmium, mercury), and iron dysregulation create selective pressure for dysbiotic taxa that drive the autoimmune cascade through intestinal permeability, molecular mimicry, Th17/Treg imbalance, and SCFA depletion. Two independent clinical cohorts (Shanghai and Nanjing) and multiple Mendelian randomization studies provide converging evidence for this framework.

This signature is built from 10 source pages spanning case-control studies, MR analyses, interventional trials, and mineral biology reviews.

## Metallomic Signature

Confidence: moderate -- selenium-thyroid connection is well-established with RCT evidence; iodine dysregulation documented in multiple studies; toxic metal data from review-level sources.

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| [[selenium]] | Depleted | The thyroid contains the highest Se concentration in the body. Se deficiency is an independent risk factor for GD and Graves' ophthalmopathy. 200 ug/day Se for 6 months significantly decreased GO severity in double-blind RCT [[brock-2015-selenium-thyroid-autoimmunity]] |
| Iodine | Dysregulated | Both excess and deficiency trigger autoimmunity. Excess I activates NLRP3 inflammasome; prevalence of AITD increases after salt iodization programs [[kravchenko-2023-thyroid-hormones-minerals-AITD]] |
| [[iron]] | Depleted/dysregulated | Fe decreases TPO activity; 58% of Hashimoto's patients have Fe deficiency anemia; Fe has immunomodulating effects on M1/M2 macrophage polarization [[brylinski-2025-trace-elements-thyroid-diseases]] |
| [[zinc]] | Depleted | Required for TRH, TSH, T3, T4 production; necessary for thymulin activation and T cell differentiation; deficiency impairs immune function [[kravchenko-2023-thyroid-hormones-minerals-AITD]] |
| [[cadmium]] | Burden | Inhibits hepatic 5'-monodeiodinase activity, interfering with T4 to T3 conversion; decreases thyroid follicle size [[brylinski-2025-trace-elements-thyroid-diseases]] |
| [[lead]] | Burden | Prevents deiodination, reducing T3 while T4 and TSH rise; causes DNA damage in thyroid cells [[brylinski-2025-trace-elements-thyroid-diseases]] |
| [[mercury]] | Burden | Interferes with TSH production, inhibits TPO; both MeHg and inorganic compounds inhibit Tg iodination [[brylinski-2025-trace-elements-thyroid-diseases]] |

Selenium depletion is the signature's defining vulnerability. Se is essential for three selenoprotein families: iodothyronine deiodinases (T4-to-T3 conversion), glutathione peroxidases (protect thyrocytes from H2O2 generated during thyroid hormone synthesis), and thioredoxin reductases (redox balance). Selenium deficiency simultaneously disables antioxidant protection and impairs immune tolerance.

## Environmental Exposures

| Source | Metals | Relevance |
|--------|--------|-----------|
| Soil selenium depletion | Se (deficiency) | Geographic variation explains epidemiological variation in AITD prevalence |
| Dietary iodine | I (excess or deficiency) | Salt iodization programs increased AITD prevalence |
| Smoking | Cd, Pb | Environmental risk factor for GD ophthalmopathy |
| Occupational/industrial | Pb, Cd | Chronic toxic metal accumulation |
| Fish consumption | Mercury, selenium | Omega-3 benefits vs mercury thyroid toxicity; Se co-supplementation may mitigate [[brock-2015-selenium-thyroid-autoimmunity]] |

## Nutritional Immunity Response

Confidence: moderate -- selenoprotein depletion well-documented; hepcidin/transferrin elevation inferred from iron dysregulation data.

| Marker | Direction | Evidence |
|--------|-----------|---------|
| Hepcidin | Elevated | Iron sequestration as host defense; drives functional anemia |
| Transferrin | Elevated | Iron chelation and transport |
| Lipocalin-2 | Elevated | Siderophore-binding; blocks pathogen iron acquisition |
| Glutathione peroxidase | Depleted | Se deficiency disables antioxidant defense; thyroid vulnerable to H2O2 damage [[brock-2015-selenium-thyroid-autoimmunity]] |
| Thioredoxin reductase | Depleted | Redox regulation failure; permits oxidative damage to thyroid [[brylinski-2025-trace-elements-thyroid-diseases]] |
| Deiodinases (DIO1/2/3) | Impaired | T4-to-T3 conversion disrupted by Se deficiency and Cd/Pb interference [[brylinski-2025-trace-elements-thyroid-diseases]] |

The selenoprotein depletion is particularly consequential: without functional GPx, the thyroid is vulnerable to H2O2 generated during thyroid hormone synthesis. This oxidative damage exposes cryptic TPO epitopes, potentially triggering autoimmune recognition.

## Taxonomic Analysis

Confidence: moderate -- two independent clinical cohorts (Shanghai: [[yang-2022-intestinal-flora-graves-methimazole]], Nanjing: [[chen-2021-gut-microbiota-thyroid-graves]]) show consistent patterns; Mendelian randomization provides causal evidence [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]].

### Enriched Taxa

| Taxon | Evidence | Pathogenic Mechanism |
|-------|----------|---------------------|
| [[lactobacillus]] | Positively correlated with TRAb (R=0.489) and TPOAb (R=0.607) [[chen-2021-gut-microbiota-thyroid-graves]] | Paradoxically enriched despite general probiotic reputation; may drive immune activation in GD context |
| [[bifidobacterium]] | Positively correlated with TRAb (R=0.588), TGAb, TPOAb; MR risk factor (OR 1.246) [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]] | Paradoxical role: protective in other conditions, risk factor in GD. Strain-specific effects likely. |
| [[collinsella]] | Significantly higher in untreated GD vs controls and treated; MR risk factor (OR 1.301) [[yang-2022-intestinal-flora-graves-methimazole]], [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]] | Associated with autoimmune conditions (RA, T1D); pro-inflammatory |
| [[streptococcus]] | Significantly increased in untreated GD; decreases after methimazole [[chen-2021-gut-microbiota-thyroid-graves]] | Molecular mimicry with TPO epitopes |
| [[desulfovibrio]] | MR risk factor (OR 1.216) [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]] | Sulfate-reducing bacterium; H2S production; pro-inflammatory |
| [[veillonella]] | Significantly different (P=0.039) in GD [[chen-2021-gut-microbiota-thyroid-graves]] | Lactate-utilizing; indicator of dysbiotic state |

### Depleted Taxa

| Taxon | Normal Function | Evidence |
|-------|----------------|---------|
| Synergistetes | Immune regulation | Strongly negatively correlated with TRAb (R=-0.702), TGAb (R=-0.624), TPOAb (R=-0.711) [[chen-2021-gut-microbiota-thyroid-graves]] |
| [[phascolarctobacterium]] | Propionate production | Negatively correlated with TRAb (R=-0.544); increases after treatment [[chen-2021-gut-microbiota-thyroid-graves]] |
| [[faecalibacterium-prausnitzii]] | Primary butyrate producer; anti-inflammatory | Negatively correlated with FT3, FT4, TRAb; positively correlated with TSH [[han-2022-berberine-methimazole-graves-microbiome]] |
| [[roseburia]] | Butyrate production | Significantly depleted in untreated GD [[yang-2022-intestinal-flora-graves-methimazole]] |
| [[dialister]] | SCFA production | Significantly depleted in untreated GD [[yang-2022-intestinal-flora-graves-methimazole]] |
| [[butyricimonas]] | SCFA production | MR-confirmed protective (OR 0.824); protective against both GD and Plummer disease [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]] |
| [[lachnospira]] | Butyrate production | MR protective against GD and Plummer disease, suggesting shared SCFA-mediated mechanisms [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]] |

### Key Finding: Bifidobacterium Paradox

[[bifidobacterium]] is generally regarded as a protective probiotic genus, yet in Graves' disease it shows a consistent positive correlation with thyroid autoantibodies (TRAb, TGAb, TPOAb) across two independent cohorts, and Mendelian randomization confirms it as a causal risk factor (OR 1.246). This paradox is strain-specific: Bifidobacterium is protective against nontoxic multinodular goiter but harmful in GD [[chen-2024-gut-microbiota-six-thyroid-diseases-mr]]. This has direct implications for probiotic formulation in autoimmune thyroid disease.

### Microbiome Recovery After Treatment

Methimazole treatment and thyroid function recovery lead to significant microbiome diversity improvement [[chen-2021-gut-microbiota-thyroid-graves]], [[yang-2022-intestinal-flora-graves-methimazole]]:
- Alpha diversity (Shannon, Simpson, observed OTUs) significantly increases
- Phascolarctobacterium increases
- Streptococcus, Blautia, Ruminococcus decrease
- Berberine + methimazole is superior to methimazole alone in microbiome restoration [[han-2022-berberine-methimazole-graves-microbiome]]

## Virulence Enzymes and Features

Confidence: preliminary -- virulence enzyme involvement inferred from taxonomic composition rather than direct measurement.

| Enzyme/Feature | Function | Taxon |
|----------------|----------|-------|
| Beta-glucuronidase | Estrogen deconjugation; drives estrogen recirculation contributing to 3:1 female predominance | E. coli, Bacteroides |
| Siderophores | Iron piracy from host; competitive advantage in iron-dysregulated environment | E. coli, Proteobacteria |
| LPS (endotoxin) | TLR4 activation; NF-kB signaling; drives intestinal permeability and systemic inflammation | All Gram-negatives |
| Enterobactin | Iron uptake molecule; berberine upregulates enterobactin biosynthesis, potentially improving Fe availability for thyroid function [[han-2022-berberine-methimazole-graves-microbiome]] | Enterobacteriaceae |
| Molecular mimicry antigens | Cross-reactive epitopes with TPO and TSH receptor; triggers autoimmune recognition | Streptococcus |

## Ecological State

Confidence: moderate -- consistent ecological patterns across multiple studies; bidirectional gut-thyroid axis supported by treatment response data.

### 1. Bidirectional Gut-Thyroid Axis
The relationship between thyroid function and microbiome composition is bidirectional: hyperthyroidism disrupts gut motility and microbiome composition, while dysbiosis impairs mineral absorption (I, Se, Fe) essential for thyroid function [[xian-2023-graves-disease-ibd-mendelian-randomization]]. Methimazole treatment and thyroid function recovery lead to significant microbiome diversity improvement, confirming bidirectionality.

### 2. Th17/Treg Imbalance
Loss of butyrate-producing taxa removes HDAC inhibition required for Foxp3+ Treg differentiation. LPS and dysbiotic metabolites drive Th17 polarization. IL-17 elevation drives thyroid infiltration and TPO/TSH receptor autoimmunity. This is the central immunological feature of GD dysbiosis.

### 3. Molecular Mimicry
Streptococcus and other enriched taxa share epitopes cross-reactive with thyroid peroxidase and the TSH receptor. Combined with barrier dysfunction enabling bacterial antigen presentation, this triggers autoimmune recognition.

### 4. SCFA Deficiency Cascade
Loss of Faecalibacterium, Phascolarctobacterium, Roseburia, Dialister, Butyricimonas, and Lachnospira creates a comprehensive SCFA deficit. Consequences: impaired HDAC inhibition, failed Treg induction, reduced barrier integrity, enhanced NF-kB inflammation. This is self-perpetuating -- inflammation further depletes SCFA producers.

### 5. Intestinal Permeability
Loss of tight junction proteins due to butyrate deficiency and LPS-mediated damage. Elevated LPS translocation from dysbiotic Gram-negative bacteria activates systemic immune responses.

### 6. IBD-Graves' Connection
Crohn's disease increases GD risk by 30% (OR 1.30) via Mendelian randomization, while ulcerative colitis is paradoxically protective (OR 0.71) [[xian-2023-graves-disease-ibd-mendelian-randomization]]. Shared genetic susceptibility via HLA-DRB1, PTPN22, and JAK/STAT pathway. The altered gut microbiota in IBD influences thyroid function through impaired absorption of iodine, selenium, and iron.

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| [[hashimotos-thyroiditis]] | Selenium, iodine, iron, zinc | F. prausnitzii, Lachnospiraceae, Proteobacteria, Prevotella | Th17-Treg imbalance, SCFA deficiency, molecular mimicry, intestinal permeability | 0.78 |
| [[inflammatory-bowel-disease]] | Iron, zinc | B. fragilis, F. prausnitzii, Lachnospiraceae, E. coli | Intestinal permeability, Th17-Treg imbalance, SCFA deficiency, LPS translocation | 0.55 |
| [[depression]] | Lead, iron, selenium | F. prausnitzii, Lachnospiraceae, E. coli | Dysbiosis, neuroinflammation, LPS translocation | 0.42 |

The Hashimoto's-Graves' overlap is the strongest (0.78), reflecting their shared autoimmune thyroid disease substrate. Patients can convert from Graves' to Hashimoto's and vice versa. The IBD connection is supported by bidirectional MR evidence, with Crohn's disease specifically driving GD risk through shared gut-immune mechanisms.

## Open Questions

1. Selenium dose-response: What is the optimal Se repletion level for immune tolerance restoration in GD? Current evidence supports 200 ug/day but lacks precision dosing.
2. Bifidobacterium strain specificity: Which Bifidobacterium strains drive autoimmune risk in GD vs protection in other conditions? This is critical for probiotic formulation.
3. Molecular mimicry mapping: Which specific Streptococcus epitopes cross-react with TPO and TSH receptor? Not yet definitively mapped.
4. FMT in newly diagnosed GD: Could ecosystem reset prevent relapse? No RCTs exist.
5. Intervention timing: Should microbiota-targeted therapy precede, accompany, or follow antithyroid drugs?
6. Lead/Cd-specific selection: Does chronic lead or cadmium burden preferentially select for specific dysbiotic taxa?
7. Iodine-selenium interaction: In combined Se and I deficiency, normalizing Se without iodine worsens hypothyroidism -- what is the optimal co-supplementation strategy?

## Karen's Brain Primitives Active

- 1. Metals as Selective Pressures -- Se deficiency + Pb/Cd burden + I dysregulation selects for LPS-producing, siderophore-competent taxa
- 2. Nutritional Immunity as Interpretive Constraint -- Hepcidin elevation = functional anemia (host defense), not true iron deficiency; selenium depletion = antioxidant failure exposing cryptic TPO epitopes
- 3. Mis-metallation and Toxic Metal Entry -- Lead enters cells through calcium channels, disrupting T cell signaling; cadmium inhibits deiodinase activity
- 4. Microbial Metal Dependencies as Achilles' Heels -- Restrict iron to disable siderophore-dependent pathobionts; restore selenium to enable selenoprotein defense
- 5. Two-Sided Ecological Engineering -- Suppress LPS producers AND restore butyrate-producing Treg inducers; berberine + methimazole demonstrates this approach [[han-2022-berberine-methimazole-graves-microbiome]]
- 7. Estrobolome and Hormone Recirculation -- Beta-glucuronidase activity drives estrogen recirculation, explaining the 3:1 female predominance
- 8. Siderophore Competition and Iron Ecology -- Iron ecology shapes enrichment of Proteobacteria; enterobactin biosynthesis pathway modulated by berberine
