---

title: "Hashimoto's Thyroiditis — Microbiome Signature"
type: signature
created: 2026-04-09
updated: 2026-04-13
last_substantive_update: 2026-04-13
paper_count: 14
sources: [li-2025-trace-elements-autoimmune-thyroid-disease, brock-2015-selenium-thyroid-autoimmunity, gong-2024-iodine-gut-microbiota-hashimotos, pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian, liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian, zhang-2025-tryptophan-metabolism-hashimotos, karimi-2025-probiotics-synbiotics-thyroid-meta-analysis, zhao-2025-comorbidity-patterns-hashimotos, liu-2022-gut-microbiota-diversity-hashimotos, ruggeri-2021-dietary-habits-oxidative-stress-hashimotos, abbott-2019-aip-diet-hashimotos-lifestyle-intervention, wang-2025-plasma-metabolomics-lipidomics-hashimotos, bastos-2023-metabolomic-follicular-fluid-hashimotos, maric-2023-nickel-thyroid-function, street-2024-environmental-factors-thyroid-function]
source_count: 15
tags: [autoimmune, thyroid, endocrine, chronic-inflammatory]

# Confidence per layer
confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: moderate
  ecological: moderate
  virulence_enzymes: preliminary

# Cross-condition pattern detection
associated_conditions:
  - condition: "[[graves-disease]]"
    shared_metals: [selenium, iodine, iron, zinc]
    shared_taxa: [faecalibacterium-prausnitzii, lachnospiraceae, proteobacteria, prevotella]
    shared_ecological: [Th17-Treg-imbalance, SCFA-depletion, molecular-mimicry, intestinal-permeability]
    overlap_score: 0.78
  - condition: "[[depression]]"
    shared_metals: [iron, zinc, selenium]
    shared_taxa: [faecalibacterium-prausnitzii, bifidobacterium, lachnospiraceae]
    shared_ecological: [dysbiosis, tryptophan-metabolism-disruption, SCFA-depletion]
    overlap_score: 0.44
  - condition: "[[celiac-disease]]"
    shared_metals: [iron, zinc, selenium]
    shared_taxa: [lactobacillus, bifidobacterium, proteobacteria]
    shared_ecological: [intestinal-permeability, molecular-mimicry, Th17-Treg-imbalance]
    overlap_score: 0.52
  - condition: "[[PCOS]]"
    shared_metals: [iron, zinc, selenium]
    shared_taxa: [lactobacillus, prevotella, bifidobacterium]
    shared_ecological: [hormonal-dysregulation, dysbiosis, SCFA-depletion]
    overlap_score: 0.40

karen_brain_primitives: [1, 2, 3, 5]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [iodine-excess, cadmium, lead, mercury, nickel]
  depleted: [selenium, iron, zinc]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[proteobacteria]]"
      role: "Phylum-level enrichment — Gram-negative LPS producers; iodine-driven dysbiosis shifts toward Proteobacteria dominance"
    - taxon: "[[actinobacteria]]"
      role: "Phylum-level enrichment — includes Bifidobacterium expansion in female HT patients"
    - taxon: "[[blautia]]"
      role: "Enriched in HT — tryptophan metabolism modulator; gender-specific expansion"
    - taxon: "[[dorea]]"
      role: "Enriched in HT — associated with Th17 inflammatory response"
    - taxon: "[[prevotella]]"
      role: "Context-dependent enrichment — may drive molecular mimicry with thyroid antigens"
  depleted:
    - taxon: "[[bifidobacterium]]"
      role: "Depleted in gut (paradoxically enriched in some female-specific analyses) — SCFA production and immune modulation impaired"
    - taxon: "[[lactobacillus]]"
      role: "Depleted — loss of Se/Fe absorption support and mucosal barrier maintenance"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer — consistently depleted; loss drives Th17/Treg imbalance"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Strongly protective (MR OR=0.71, p=9.9E-14) — depleted in HT; mediates effects through CD4+ T cells and IL-6/TNF-alpha"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [calprotectin, hepcidin]
  depleted: [selenium-dependent-GPx, selenium-dependent-TrxR, butyrate, valeric-acid]

# Layer 4: Ecological features
ecological_features: [molecular-mimicry, iodine-driven-dysbiosis, Th17-Treg-imbalance, SCFA-depletion, tryptophan-metabolism-disruption, bile-acid-dysmetabolism]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [bacterial-deiodinases, beta-glucuronidase, LPS-endotoxin]

# Cureva pipeline status
cureva_status: partial
validated_interventions: [selenium-supplementation-200mcg, low-nickel-diet, probiotics-thyroid, aip-diet-hashimotos]
stops: [stop-excess-iodine-supplementation-hashimotos]
platform: cureva
---

> **Clinical disclaimer**: This signature page synthesizes peer-reviewed evidence for practitioner education. It does not constitute medical advice. All interventions require individualized clinical assessment. Discuss changes with a qualified healthcare provider.

## Overview

**Hashimoto's thyroiditis** (HT) is the most common autoimmune disease globally and the leading cause of hypothyroidism, affecting 5-10% of the population with a striking 10:1 female-to-male ratio. The microbiome signature framework reveals HT as an **ecological disease** in which mineral dyshomeostasis -- particularly selenium depletion and iodine excess -- drives gut dysbiosis, which in turn perpetuates thyroid autoimmunity through molecular mimicry, Th17/Treg imbalance, and impaired tryptophan metabolism.

The gut-thyroid axis is bidirectional: dysbiosis impairs mineral absorption (I, Se, Fe) while thyroid hormones (FT3, FT4) regulate specific taxa. This creates a self-reinforcing cycle where thyroid dysfunction worsens the microbiome, and the worsening microbiome deepens thyroid dysfunction.

This signature is built from **14 peer-reviewed papers** spanning trace element studies, Mendelian randomization, metabolomics, probiotic meta-analyses, dietary interventions, and comorbidity mapping.

## Metallomic Signature

The HT metallomic profile is defined by **critical selenium depletion** against a background of iron/zinc insufficiency and toxic metal burden, with an iodine excess paradox:

| Metal | Direction | Key Evidence |
|-------|-----------|-------------|
| **[[selenium]]** | Depleted (critical) | Thyroid has highest Se concentration of any organ; selenoproteins (GPx, TrxR, DIO1-3) essential for hormone synthesis and H2O2 detoxification; 200 ug/day reduces anti-TPO by up to 40% [[brock-2015-selenium-thyroid-autoimmunity]] [[li-2025-trace-elements-autoimmune-thyroid-disease]] |
| **[[iron]]** | Depleted (58% deficient) | Fe required for TPO activity; deficiency impairs T4 synthesis and elevates TSH; meta-analysis of 47 studies (53,152 pregnant women) confirms Fe deficiency → higher TSH (2.31 vs 1.75 mIU/L) [[li-2025-trace-elements-autoimmune-thyroid-disease]] |
| **[[zinc]]** | Depleted | Cofactor for >300 metalloenzymes including deiodinases; low Zn prevalence 49.1% in hypothyroid patients (OR 5.926); required for thymulin activation [[li-2025-trace-elements-autoimmune-thyroid-disease]] |
| **[[iodine]]** | Excess paradox | U-shaped dose-response with AITD; excess inhibits TPO (Wolff-Chaikoff effect), activates NLRP3 inflammasome, promotes Th17, generates ROS; prevalence increases after salt iodization programs [[gong-2024-iodine-gut-microbiota-hashimotos]] |
| **[[cadmium]]** | Disruptor | Inhibits hepatic 5'-monodeiodinase (T4-to-T3 conversion) [[street-2024-environmental-factors-thyroid-function]] |
| **[[lead]]** | Disruptor | Prevents deiodination; enters via Ca channels [[street-2024-environmental-factors-thyroid-function]] |
| **[[mercury]]** | Disruptor | Inhibits TPO and Tg iodination; Se antagonizes Hg toxicity through direct binding [[street-2024-environmental-factors-thyroid-function]] |
| **[[nickel]]** | Thyroid dose-response | Blood Ni 1.36-60.9 ug/L: 78.7% of men face 10% higher risk of thyroid dysfunction; operates through oxidative stress and apoptotic disruption [[maric-2023-nickel-thyroid-function]] |

**Critical interaction**: In combined Se and I deficiency, normalizing Se without iodine **worsens hypothyroidism** -- the elements must be balanced together [[li-2025-trace-elements-autoimmune-thyroid-disease]].

## Environmental Exposures

| Exposure | Metals Contributed | Thyroid-Specific Mechanism |
|----------|-------------------|---------------------------|
| **Iodized salt / kelp supplements** | I | Excess iodine triggers NLRP3 inflammasome and Th17 expansion |
| **Smoking** | Cd, Pb, Ni | Cd inhibits T4-to-T3 conversion; Pb prevents deiodination |
| **Dental amalgams** | Hg | Inhibits TPO and Tg iodination |
| **Diet (selenium-poor soils)** | Se depletion | Geographic Se deficiency correlates with higher AITD prevalence |
| **Stainless steel cookware** | Ni | Dose-response thyroid disruption |
| **Water supply** | Pb, Cd | Mis-metallation via Ca channels |

## Nutritional Immunity Response

| Factor | Status | Function |
|--------|--------|----------|
| **[[calprotectin]]** | Elevated | Zinc sequestration from gut pathogens; marker of intestinal inflammation in HT [[liu-2022-gut-microbiota-diversity-hashimotos]] |
| **[[hepcidin]]** | Altered | Reflects iron redistribution; 58% Fe deficiency rate suggests functional iron withholding [[li-2025-trace-elements-autoimmune-thyroid-disease]] |
| **Selenoproteins (GPx, TrxR)** | Depleted | Loss of primary thyroid antioxidant defense; H2O2 generated during hormone synthesis goes unquenched [[brock-2015-selenium-thyroid-autoimmunity]] |
| **Butyrate** | Depleted (p<0.01) | Loss of SCFA-mediated Treg induction; colonocyte starvation → barrier dysfunction [[liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian]] |
| **Valeric acid** | Depleted (p<0.01) | Additional SCFA deficit compounds Treg loss [[liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian]] |

The selenium depletion is particularly consequential: the thyroid generates more H2O2 per gram of tissue than any other organ. Without selenoprotein-dependent glutathione peroxidase, this oxidative burden drives follicular cell destruction -- the hallmark pathology of HT.

## Taxonomic Analysis

HT patients show significantly reduced alpha diversity (Shannon, Chao1; p<0.001) and distinct microbiome composition versus controls [[liu-2022-gut-microbiota-diversity-hashimotos]].

### Enriched Taxa

| Taxon | Ecological Role | Pathogenic Mechanism |
|-------|----------------|---------------------|
| **[[proteobacteria]]** | Phylum-level bloom | LPS-driven innate immune activation; iodine excess selects for Proteobacteria dominance [[gong-2024-iodine-gut-microbiota-hashimotos]] |
| **[[actinobacteria]]** | Phylum-level enrichment | Includes gender-specific Bifidobacterium expansion in females [[liu-2022-gut-microbiota-diversity-hashimotos]] |
| **[[blautia]]** | Tryptophan metabolism modulator | Enriched in HT; associated with altered tryptophan-kynurenine axis [[zhang-2025-tryptophan-metabolism-hashimotos]] |
| **Dorea** | Pro-inflammatory | Associated with Th17 inflammatory response; enriched across HT cohorts [[liu-2022-gut-microbiota-diversity-hashimotos]] |
| **[[prevotella]]** | Context-dependent | May drive molecular mimicry with thyroid antigens; associations vary by population [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]] |
| **Intestinimonas** | Risk-increasing | MR evidence shows causal risk association with HT [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]] |
| **Turicibacter** | Risk-increasing | MR evidence shows causal risk association with HT [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]] |

### Depleted Taxa

| Taxon | Normal Function | Why Lost | Evidence |
|-------|----------------|----------|---------|
| **[[faecalibacterium-prausnitzii]]** | Primary butyrate producer; Treg induction | Cannot compete in iodine-disrupted, SCFA-depleted environment | Consistently depleted across HT cohorts |
| **[[lactobacillus]]** | Se/Fe absorption support; mucosal barrier | Lost in dysbiotic environment | Reduced in HT [[liu-2022-gut-microbiota-diversity-hashimotos]] |
| **[[bifidobacterium]]** | Immune modulation; SCFA production | Depleted in gut (complex: enriched in some female subsets) | Gender-dependent pattern [[liu-2022-gut-microbiota-diversity-hashimotos]] |
| **[[akkermansia-muciniphila]]** | Mucus layer maintenance; anti-inflammatory | Depleted in inflamed/dysbiotic gut | **Strongest causal evidence**: MR OR=0.71 (p=9.9E-14); mediated through effector memory CD4+ T cells [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]] |
| **Roseburia** | Butyrate + propionate production | Lost SCFA capacity | Depleted SCFA-producing Firmicutes [[liu-2022-gut-microbiota-diversity-hashimotos]] |

**The fundamental pattern**: Iodine excess drives initial dysbiosis → SCFA producer depletion → Th17/Treg imbalance → autoimmune attack on thyroid → reduced thyroid hormones → further dysbiosis (bidirectional cycle).

## Virulence Enzymes and Features

| Enzyme/Feature | Function | Thyroid Relevance |
|----------------|----------|-------------------|
| **Bacterial deiodinases** | Microbial enzymes that metabolize thyroid hormones (T4/T3) | Compete with host deiodinase activity; may contribute to altered thyroid hormone availability in the gut lumen |
| **Beta-glucuronidase** | Deconjugates glucuronidated hormones including thyroid hormones | Disrupts enterohepatic thyroid hormone recirculation; alters effective hormone levels |
| **LPS (endotoxin)** | Gram-negative cell wall component; TLR4 agonist | Drives NF-kB activation and Th17 polarization; Proteobacteria bloom increases LPS burden |

## Ecological State

The HT gut ecosystem is characterized by a self-reinforcing dysbiosis cycle:

**1. Iodine-driven dysbiosis**: Excess iodine directly disrupts gut microbial communities, reducing SCFA producers and selecting for Proteobacteria [[gong-2024-iodine-gut-microbiota-hashimotos]]. Sodium butyrate supplementation partially rescues this phenotype in mouse models, confirming the causal chain.

**2. Molecular mimicry**: Gut bacterial antigens share structural homology with thyroid proteins (TPO, Tg). Enrichment of specific taxa (Prevotella, Proteobacteria) increases the antigenic load for cross-reactive immune activation, providing the bridge between gut dysbiosis and thyroid autoimmunity.

**3. Th17/Treg imbalance**: SCFA depletion (butyrate, valeric acid) removes the primary stimulus for Treg differentiation. Simultaneously, iodine excess and LPS promote Th17 polarization. The resulting Th17/Treg imbalance drives destructive lymphocytic infiltration of the thyroid.

**4. Tryptophan metabolism disruption**: Tryptophan levels are significantly lower in HT (p<0.0001) [[zhang-2025-tryptophan-metabolism-hashimotos]]. Disrupted IDO1-Kyn-AhR axis impairs immune tolerance. Tryptophan supplementation alleviates thyroid damage and rebalances T cell subsets via PI3K-Akt pathway suppression.

**5. Bidirectional amplification**: Reduced FT3/FT4 from thyroid destruction alters gut microbial composition. Dysbiosis impairs mineral absorption (Se, Fe, I). Mineral deficiency further impairs thyroid function. The cycle self-perpetuates.

## Validated Interventions

### Supplemental

| Intervention | Mechanism | Evidence |
|-------------|-----------|---------|
| **[[selenium]] supplementation (200 ug/day)** | Restores selenoprotein (GPx, TrxR, DIO) activity; reduces anti-TPO by up to 40% in patients >1200 IU/mL; modulates Th1/Th2/Th17/Treg balance; increases Tregs; antagonizes Cd/Hg toxicity | **Validated** — multiple RCTs; best-evidenced mineral intervention [[brock-2015-selenium-thyroid-autoimmunity]] [[li-2025-trace-elements-autoimmune-thyroid-disease]] |
| **Vitamin D co-supplementation** | Immunomodulatory synergy with Se | **Validated** — combined Se + D shows stronger effects than either alone [[li-2025-trace-elements-autoimmune-thyroid-disease]] |

### Dietary

| Intervention | Mechanism | Evidence |
|-------------|-----------|---------|
| **[[low-nickel-diet]]** | Removes Ni dose-response thyroid disruption (78.7% of men at elevated Ni face 10% higher dysfunction risk); reduces oxidative stress and apoptotic disruption in thyroid tissue | **Promising** — dose-response relationship established [[maric-2023-nickel-thyroid-function]] |
| **AIP diet** | Eliminates immune-triggering foods; reduces systemic inflammation | **Preliminary** — pilot (n=16): significant QoL improvement across all SF-36 subscales, 29% hs-CRP reduction, but no change in thyroid antibodies or hormones [[abbott-2019-aip-diet-hashimotos-lifestyle-intervention]] |
| **Mediterranean diet pattern** | Anti-inflammatory; supports SCFA-producing taxa; reduces AGE accumulation | **Promising** — protective traits identified; meat consumption increases HT odds via AGE accumulation and selenoenzyme suppression [[ruggeri-2021-dietary-habits-oxidative-stress-hashimotos]] |
| **High fiber intake (30g/day)** | Feeds depleted SCFA producers (F. prausnitzii, Roseburia); restores butyrate for Treg induction | **Validated** — mechanistically sound; fiber supports SCFA production [[liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian]] |

### Probiotic

| Intervention | Mechanism | Evidence |
|-------------|-----------|---------|
| **Probiotics (multi-strain)** | Meta-analysis (9 RCTs, 395 participants): significant TSH reduction (SMD: -1.10), increased free T3/T4; probiotics alone outperform synbiotics for TSH reduction; shorter interventions (<=8 weeks) show stronger effects | **Validated** — [[karimi-2025-probiotics-synbiotics-thyroid-meta-analysis]] |
| **Tryptophan supplementation** | Alleviates thyroid damage; rebalances T cell subsets via IDO1-Kyn-AhR axis and PI3K-Akt suppression | **Promising** — preclinical evidence [[zhang-2025-tryptophan-metabolism-hashimotos]] |

## STOPs

| STOP | Conventional Rationale | Why Counterproductive |
|------|----------------------|----------------------|
| **Excess iodine supplementation** | "Iodine is needed for thyroid hormone synthesis" | Excess iodine inhibits TPO activity via the Wolff-Chaikoff effect, **activates the NLRP3 inflammasome**, promotes Th17 proliferation, generates ROS in thyroid cells, and directly drives gut dysbiosis that depletes SCFA producers. AITD prevalence increases after salt iodization programs. In combined Se/I deficiency, normalizing I without Se worsens hypothyroidism. The dose-response is U-shaped — both deficiency and excess are harmful [[gong-2024-iodine-gut-microbiota-hashimotos]] [[li-2025-trace-elements-autoimmune-thyroid-disease]] |
| **Gluten-free diet (without monitoring)** | "Celiac-HT overlap suggests benefit" | GFD alters the microbiome but may paradoxically increase Desulfobacterota/Proteobacteria without improving thyroid markers. Should only be pursued with microbiome monitoring or confirmed celiac disease [[ruggeri-2021-dietary-habits-oxidative-stress-hashimotos]] |

## Open Questions

- **Strain-specific probiotic protocols**: The Karimi 2025 meta-analysis shows high heterogeneity across trials — which specific strains drive the TSH reduction effect?
- **Akkermansia as therapeutic**: MR evidence is the strongest causal signal (OR=0.71, p=9.9E-14) — when will Akkermansia-based therapeutics be trialed in HT?
- **Se-I dosing ratio**: What is the optimal selenium-to-iodine ratio for patients with combined deficiency?
- **Nickel-thyroid mechanism**: The dose-response is established — does a low-nickel dietary intervention improve thyroid function markers in HT patients?
- **Gender-specific microbiome signatures**: Bifidobacterium shows opposite patterns in male vs female HT — what drives this divergence?
- **Tryptophan supplementation dosing**: Preclinical evidence is strong — what is the clinical dose-response for tryptophan in HT?

## Knowledge Primitives Applied

1. **Metals as Selective Pressures** — Se depletion + I excess + Cd/Pb/Hg/Ni burden creates the ecological conditions for dysbiosis
2. **Nutritional Immunity as Interpretive Constraint** — Elevated calprotectin and altered hepcidin reflect host defense; 58% Fe deficiency may include functional component
3. **Mis-metallation and Toxic Metal Entry** — Cd inhibits deiodinase; Pb prevents deiodination; Hg inhibits TPO; all enter via Ca channels
4. **Microbial Metal Dependencies as Achilles' Heels** — Se restoration disables the oxidative cascade; Ni restriction reduces thyroid disruption
5. **Two-Sided Ecological Engineering** — Must restore SCFA producers (F. prausnitzii, Akkermansia) AND reduce Proteobacteria/LPS burden
6. **Interkingdom Relationships and Functional Shielding** — Not yet characterized in HT (open question)
7. **Estrobolome and Hormone Recirculation** — Beta-glucuronidase disrupts thyroid hormone enterohepatic recirculation; 10:1 female ratio suggests estrogen-immune interaction
8. **Siderophore Competition and Iron Ecology** — Fe deficiency in 58% of patients reflects complex iron ecology
9. **Oxygen State as Ecological Determinant** — SCFA depletion alters colonic oxygenation state; not primary driver but contributes to dysbiosis maintenance

## Key Sources

- [[li-2025-trace-elements-autoimmune-thyroid-disease]]
- [[brock-2015-selenium-thyroid-autoimmunity]]
- [[gong-2024-iodine-gut-microbiota-hashimotos]]
- [[pei-2024-immune-cells-gut-microbiota-hashimotos-mendelian]]
- [[liu-2024-causal-gut-microbiota-metabolites-hypothyroidism-mendelian]]
- [[zhang-2025-tryptophan-metabolism-hashimotos]]
- [[karimi-2025-probiotics-synbiotics-thyroid-meta-analysis]]
- [[zhao-2025-comorbidity-patterns-hashimotos]]
- [[liu-2022-gut-microbiota-diversity-hashimotos]]
- [[ruggeri-2021-dietary-habits-oxidative-stress-hashimotos]]
- [[abbott-2019-aip-diet-hashimotos-lifestyle-intervention]]
- [[wang-2025-plasma-metabolomics-lipidomics-hashimotos]]
- [[bastos-2023-metabolomic-follicular-fluid-hashimotos]]
- [[maric-2023-nickel-thyroid-function]]
- [[street-2024-environmental-factors-thyroid-function]]
