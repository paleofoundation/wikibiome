---
title: "Hashimoto's Thyroiditis — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - li-2025-trace-elements-autoimmune-thyroid-disease
  - brock-2015-selenium-thyroid-autoimmunity
  - gong-2024-iodine-gut-microbiota-hashimotos
  - pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian
  - liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian
  - zhang-2025-tryptophan-metabolism-hashimotos
  - karimi-2025-probiotics-synbiotics-thyroid-meta-analysis
  - zhao-2025-comorbidity-patterns-hashimotos
  - liu-2022-gut-microbiota-diversity-hashimotos
  - ruggeri-2021-dietary-habits-oxidative-stress-hashimotos
  - abbott-2019-aip-diet-hashimotos-lifestyle-intervention
  - wang-2025-plasma-metabolomics-lipidomics-hashimotos
  - bastos-2023-metabolomic-follicular-fluid-hashimotos
  - maric-2023-nickel-thyroid-function
  - street-2024-environmental-factors-thyroid-function
  - ghosh-2023-heavy-metals-gut-barrier-integrity
  - giambo-2021-toxic-metal-exposure-gut-microbiota-review
source_count: 17
tags: [autoimmune, thyroid, gut-thyroid-axis, selenium, iodine, tryptophan, AITD]

metallomic_signature:
  elevated: [iodine-excess, cadmium, lead, nickel, copper]
  depleted: [selenium, zinc, iron]

taxonomic_signature:
  enriched:
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Mucin degrader — enriched in HT but causally protective per MR (OR=0.71); paradoxical enrichment may reflect compensatory expansion"
    - taxon: "[[blautia]]"
      role: "Enriched in HT patients; genus within Lachnospiraceae with altered metabolite production"
    - taxon: "[[bifidobacterium]]"
      role: "Enriched in HT, particularly in females; gender-dependent abundance intensifies with disease progression"
    - taxon: "[[intestinimonas]]"
      role: "Causally associated with increased HT risk via MR (OR=1.20)"
    - taxon: "[[turicibacter]]"
      role: "Causally associated with increased HT risk via MR (OR=1.16)"
    - taxon: "[[klebsiella-pneumoniae]]"
      role: "Enriched in HT; potential molecular mimicry with thyroid antigens"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer — depleted in HT; regulated by FT4; its absence reduces anti-inflammatory SCFA output"
    - taxon: "[[roseburia]]"
      role: "Butyrate producer — depleted in HT; loss contributes to Th17/Treg imbalance via reduced butyrate"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family — regulated by FT4; protective against HT progression"
    - taxon: "[[coprococcus]]"
      role: "Significantly altered in HT vs. controls; butyrate-producing genus"

nutritional_immunity:
  elevated: [hepcidin, ceruloplasmin, advanced-glycation-end-products]
  depleted: [glutathione-peroxidase, thioredoxin-reductase, selenium-dependent-selenoproteins]

ecological_features: [iodine-driven-dysbiosis, butyrate-depletion, Th17-Treg-imbalance, tryptophan-metabolism-disruption, oxidative-stress, molecular-mimicry]

virulence_enzymes: [IDO1-kynurenine-AhR-pathway, thyroid-peroxidase-mimics, beta-glucuronidase]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[graves-disease]]"
    shared_metals: [selenium, iodine, iron, zinc]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, proteobacteria, prevotella]
    shared_ecological: [iodine-driven-dysbiosis, Th17-Treg-imbalance, SCFA-depletion]
    overlap_score: 0.72
  - condition: "[[depression]]"
    shared_metals: [iron, zinc, selenium]
    shared_taxa: [faecalibacterium-prausnitzii, bifidobacterium, lachnospiraceae]
    shared_ecological: [tryptophan-metabolism-disruption, SCFA-depletion]
    overlap_score: 0.48
  - condition: "[[celiac-disease]]"
    shared_metals: [iron, zinc, selenium]
    shared_taxa: [lactobacillus, bifidobacterium, proteobacteria]
    shared_ecological: [molecular-mimicry, Th17-Treg-imbalance]
    overlap_score: 0.44
  - condition: "[[multiple-sclerosis]]"
    shared_metals: [nickel, cadmium, lead]
    shared_taxa: [akkermansia-muciniphila, faecalibacterium-prausnitzii, lachnospiraceae, bifidobacterium]
    shared_ecological: [SCFA-depletion, Th1-Th17-dominance]
    overlap_score: 0.42

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 7]
---

# Hashimoto's Thyroiditis — Microbiome Signature

## Overview

Hashimoto's thyroiditis (HT) is the most common autoimmune disease globally and the leading cause of hypothyroidism, with prevalence of 5-10% and a striking 10:1 female-to-male ratio. Chronic lymphocytic infiltration progressively destroys thyroid follicular architecture, reducing hormone output. The HT signature is distinctive in this wiki because the **metallomic layer is exceptionally well-characterized** -- selenium, zinc, iron, iodine, and copper all have documented, mechanistically understood roles in thyroid autoimmunity. The gut-thyroid axis provides the bridge: iodine-driven dysbiosis disrupts butyrate production and Th17/Treg balance, while trace element deficiencies (Se, Zn, Fe) impair both thyroid function and immune regulation simultaneously.

## Metallomic Signature

### Essential Element Deficiencies

**Selenium** is the most critical element. The thyroid has the highest Se concentration of any organ, owing to selenoprotein-dependent hormone synthesis (DIO1-3) and antioxidant defense (GPx, TrxR). Se levels are significantly lower in HT (104.36 ug/L) and Graves' disease (97.68 ug/L) vs. controls (122.63 ug/L, p<0.001) [[li-2025-trace-elements-autoimmune-thyroid-disease]]. Se supplementation at 200 ug/day reduces anti-TPO antibodies by up to 40%, modulates Th1/Th2/Th17/Treg balance, and increases regulatory T cells.

**Zinc** deficiency prevalence reaches 49.1% in hypothyroid patients (OR 5.926). Zn is a cofactor for >300 metalloenzymes including those in the TRH-TSH pathway and deiodinases. Zn mediates IL-1, IL-6, and TNF-alpha synthesis and is required for thymulin activation [[li-2025-trace-elements-autoimmune-thyroid-disease]].

**Iron** deficiency affects 58% of HT patients. Fe is essential for thyroid peroxidase (TPO) activity; deficiency impairs T4 synthesis and elevates TSH. Meta-analysis of 47 studies (53,152 pregnant women) shows Fe deficiency associates with higher TSH (2.31 vs. 1.75 mIU/L) and lower free T4 [[li-2025-trace-elements-autoimmune-thyroid-disease]].

### Toxic Metal Burden and Iodine Excess

**Iodine** has a U-shaped dose-response with AITD. Excess iodine inhibits TPO activity via the Wolff-Chaikoff effect, activates the NLRP3 inflammasome, promotes Th17 proliferation, and generates ROS in thyroid cells. In mouse models, increasing iodine dose-dependently altered gut microbiota and increased thyroid inflammation severity [[gong-2024-iodine-gut-microbiota-hashimotos]].

**Nickel** shows a dose-response relationship with thyroid function: at blood Ni levels of 1.36-60.9 ug/L, 78.7% of men may face 10% higher risk of thyroid dysfunction [[maric-2023-nickel-thyroid-function]]. Cd inhibits hepatic 5'-monodeiodinase (T4-to-T3 conversion); Pb prevents deiodination [[street-2024-environmental-factors-thyroid-function]].

**Confidence: high** -- Multiple independent studies including systematic reviews and meta-analyses confirm Se, Zn, and Fe deficiency patterns; iodine U-shaped relationship well-established across populations.

## Environmental Exposures

- **Iodine excess** from salt iodization programs increases AITD prevalence -- a well-documented public health paradox [[gong-2024-iodine-gut-microbiota-hashimotos]]
- **Dietary patterns**: Meat consumption increases HT odds via AGE accumulation and selenoenzyme suppression; Mediterranean diet traits are protective [[ruggeri-2021-dietary-habits-oxidative-stress-hashimotos]]
- **Heavy metals** (Cd, Pb, As, Hg, Ni) classified as endocrine-disrupting chemicals with thyroid-disrupting potential; combined exposure may be more harmful than individual metals [[street-2024-environmental-factors-thyroid-function]]
- **Air pollution**: PM2.5 is associated with increased thyroid cancer risk (18% increased PTC odds per 5 ug/m3 increase over 24 months) [[street-2024-environmental-factors-thyroid-function]]

## Nutritional Immunity Response

The HT nutritional immunity profile reflects the intersection of thyroid-specific mineral requirements and systemic autoimmune inflammation:

- **Selenoprotein depletion** -- Glutathione peroxidase and thioredoxin reductase activity are significantly lower in HT (p=0.020 and p=0.023 respectively), with total plasma antioxidant activity also reduced (p=0.002) [[ruggeri-2021-dietary-habits-oxidative-stress-hashimotos]]. This represents a failure of the selenium-dependent antioxidant defense.
- **Advanced glycation end products (AGEs)** -- Significantly elevated in HT (p=0.0001), reflecting oxidative stress and associated with animal food consumption [[ruggeri-2021-dietary-habits-oxidative-stress-hashimotos]].
- **Hepcidin elevation** -- Iron deficiency in HT involves both true deficiency (reduced intake/absorption) and functional deficiency (hepcidin-mediated sequestration from inflammation). The Cu/Zn ratio is characteristically altered.
- **Ceruloplasmin** -- Copper-carrying protein with ferroxidase activity; links copper to iron homeostasis in thyroid function.

**Confidence: moderate** -- Selenoprotein and AGE data from clinical studies; hepcidin mechanisms inferred from iron deficiency patterns rather than directly measured in HT-specific studies.

## Taxonomic Analysis

### Enriched Taxa

- **[[akkermansia-muciniphila]]** -- A paradox: enriched in HT patients observationally, yet Mendelian randomization shows strong causal *protection* against HT (OR=0.71, p=9.9E-14) mediated through effector memory CD4+ T cells [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]]. The enrichment may represent compensatory expansion in response to dysbiosis.
- **[[blautia]]** and **Dorea** -- Enriched in HT with altered SCFA and metabolite production [[liu-2022-gut-microbiota-diversity-hashimotos]].
- **[[bifidobacterium]]** -- Enriched in HT, with gender-dependent abundance (much more abundant in females); dramatic changes between health and HT stages [[liu-2022-gut-microbiota-diversity-hashimotos]].
- **[[intestinimonas]]** (OR=1.20, MR) and **[[turicibacter]]** (OR=1.16, MR) -- Causally associated with increased HT risk [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]].

### Depleted Taxa

- **[[faecalibacterium-prausnitzii]]** -- Depleted in HT; regulated by FT4; its loss reduces anti-inflammatory butyrate production and IL-10 induction [[liu-2022-gut-microbiota-diversity-hashimotos]].
- **[[roseburia]]** -- Major butyrate producer depleted in HT; Roseburia enriched in healthy controls in iodine-dose mouse studies [[gong-2024-iodine-gut-microbiota-hashimotos]].
- **[[lachnospiraceae]]** family -- SCFA producers regulated by FT4; protective against HT progression [[liu-2022-gut-microbiota-diversity-hashimotos]].
- **[[coprococcus]]** -- Significantly altered in HT vs. controls; butyrate-producing genus lost in the dysbiotic state [[gong-2024-iodine-gut-microbiota-hashimotos]].

Alpha diversity is significantly reduced in HT: observed species (p<0.001), ACE (p<0.001), Chao1 (p<0.001), Shannon (p<0.01) [[gong-2024-iodine-gut-microbiota-hashimotos]].

**Confidence: high** -- Multiple independent studies including 16S sequencing, Mendelian randomization (providing causal evidence), and animal models confirm the HT dysbiosis pattern. MR analysis confirms unidirectional causality from microbiota to disease.

## Virulence Enzymes and Features

- **IDO1-Kynurenine-AhR pathway** -- The primary tryptophan metabolism pathway is disrupted in HT. Tryptophan levels are significantly lower (p<0.0001); the IDO1-Kyn-AhR positive feedback loop normally maintains self-tolerance and suppresses effector T cells. Tryptophan supplementation rebalances T cell subsets and alleviates thyroid damage; kynurenine pathway inhibition worsens disease [[zhang-2025-tryptophan-metabolism-hashimotos]].
- **Molecular mimicry** -- Gut bacterial antigens may mimic thyroid proteins (TPO, thyroglobulin), providing a mechanistic bridge between gut dysbiosis and thyroid autoimmunity.
- **Beta-glucuronidase** -- Present in enriched taxa; may contribute to estrogen recirculation relevant to the 10:1 female predominance of HT.

**Confidence: preliminary** -- Tryptophan pathway disruption is well-documented but not yet linked to specific microbial virulence enzymes; molecular mimicry is hypothesized but specific mimicry pairs have not been characterized.

## Ecological State

The HT gut ecosystem is shaped by a distinctive combination of mineral dysregulation and immune imbalance:

1. **Iodine-driven dysbiosis** -- Excess iodine dose-dependently alters gut microbiota in both humans and mice, reducing butyrate-producing taxa and disrupting Th17/Treg balance [[gong-2024-iodine-gut-microbiota-hashimotos]]. Sodium butyrate supplementation partially rescues this phenotype.

2. **Butyrate depletion** -- Butyrate and valeric acid are significantly decreased in HT (p<0.01). Butyrate is the key metabolite connecting gut dysbiosis to thyroid autoimmunity: it supports Treg differentiation, maintains gut barrier integrity, and suppresses inflammatory cytokines [[gong-2024-iodine-gut-microbiota-hashimotos]].

3. **Th17/Treg imbalance** -- Iodine excess promotes Th17 proliferation while butyrate depletion reduces Treg induction. This creates a self-reinforcing loop: Th17 cells produce IL-17 that damages thyroid follicles, while insufficient Tregs fail to restrain the autoimmune response.

4. **Tryptophan metabolism disruption** -- Serum tryptophan is significantly lower in HT (p<0.0001). Indolelactate is the only gut metabolite causally associated with autoimmune hypothyroidism after FDR correction (OR=1.592) [[liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian]]. The IDO1-Kyn-AhR axis that normally maintains immune tolerance is impaired.

5. **Bidirectional thyroid-gut crosstalk** -- Thyroid hormones (FT3, FT4) regulate specific taxa: FT4 supports protective Faecalibacterium and Lachnospiraceae, while FT3 is associated with potentially harmful Romboutsia and Haemophilus [[liu-2022-gut-microbiota-diversity-hashimotos]]. As hypothyroidism progresses, declining hormone levels further destabilize the microbiome.

6. **Oxidative stress** -- HT patients have significantly higher AGEs and lower antioxidant capacity. Se-dependent antioxidant enzymes (GPx, TrxR) are impaired. H2O2 generated during thyroid hormone synthesis requires selenoprotein defense; its failure amplifies tissue damage.

**Confidence: moderate** -- Iodine-dysbiosis-butyrate pathway well-supported by human and animal data; tryptophan disruption confirmed in clinical and MR studies; bidirectional thyroid-gut crosstalk from observational data.

## Associated Conditions

- **[[graves-disease]]** (overlap score: 0.72) -- Sister AITD with the highest overlap. Shared Se/I/Fe/Zn dependencies, shared genetic architecture (HLA-DRB1, PTPN22), shared gut-thyroid axis disruption, and identical SCFA producer depletion. Patients can convert between HT and GD.
- **[[depression]]** (overlap score: 0.48) -- Depression occurs even in euthyroid HT through neuroinflammation. Shared tryptophan pathway disruption (tryptophan significantly lower in HT), shared F. prausnitzii depletion and SCFA deficit.
- **[[celiac-disease]]** (overlap score: 0.44) -- Celiac prevalence is 2-5x higher in HT. Shared autoimmune architecture, mucosal immune dysregulation, and molecular mimicry mechanisms. Both improve partially with dietary interventions.
- **[[multiple-sclerosis]]** (overlap score: 0.42) -- Shared autoimmune architecture, Ni/Cd/Pb metal associations, Akkermansia enrichment, SCFA producer depletion, and Th1/Th17 dominance.

## Open Questions

1. **Se-iodine interaction** -- In combined Se and I deficiency, normalizing Se without iodine worsens hypothyroidism. What is the optimal supplementation sequence, and how does microbiome composition modulate this interaction?
2. **Akkermansia paradox** -- Why is Akkermansia enriched in HT observationally when it is causally protective by MR? Is this compensatory expansion, and should Akkermansia-based probiotics be pursued for HT?
3. **Gender-microbiome interaction** -- Bifidobacterium shows dramatic gender-dependent changes in HT. What drives this, and does it explain the 10:1 female predominance?
4. **Probiotic strain optimization** -- Meta-analysis shows probiotics significantly reduce TSH (SMD=-1.10) [[karimi-2025-probiotics-synbiotics-thyroid-meta-analysis]], but high heterogeneity remains. Which strains are optimal, and why do shorter interventions (<=8 weeks) show stronger effects?
5. **Nickel-thyroid mechanism** -- Nickel shows dose-response with thyroid dysfunction [[maric-2023-nickel-thyroid-function]]. Does dietary nickel exposure compound iodine-driven dysbiosis in HT?
6. **Tryptophan supplementation** -- Can oral tryptophan or targeted indole metabolite modulation via the microbiome serve as an adjunct to levothyroxine therapy?

## Karen's Brain Primitives Active

- **Primitive 1: Metals as Selective Pressures** -- Iodine excess reshapes the gut microbiome, reducing butyrate producers and promoting Th17-driving taxa [[gong-2024-iodine-gut-microbiota-hashimotos]]. Cd, Pb, and Ni disrupt thyroid function directly and reshape the gut ecosystem indirectly.
- **Primitive 2: Nutritional Immunity as Interpretive Constraint** -- Iron deficiency in HT may partly reflect hepcidin-mediated sequestration (host defense against infection) rather than true deficiency. The Cu/Zn ratio alteration and selenoprotein depletion represent a broader mineral defense posture.
- **Primitive 4: Microbial Metal Dependencies as Achilles' Heels** -- Selenium-dependent selenoproteins are the thyroid's primary defense. Their depletion creates vulnerability to oxidative damage. Zinc-dependent metalloenzymes in the TRH-TSH pathway are impaired in 49% of hypothyroid patients.
- **Primitive 5: Two-Sided Ecological Engineering** -- Probiotic supplementation both reduces TSH (SMD=-1.10) and increases FT3/FT4 [[karimi-2025-probiotics-synbiotics-thyroid-meta-analysis]], while butyrate supplementation rescues the iodine-driven dysbiosis phenotype [[gong-2024-iodine-gut-microbiota-hashimotos]].
- **Primitive 7: Estrobolome and Hormone Recirculation** -- The 10:1 female predominance, gender-dependent microbiome changes, and beta-glucuronidase activity in enriched taxa suggest estrogen recirculation contributes to HT pathogenesis.
