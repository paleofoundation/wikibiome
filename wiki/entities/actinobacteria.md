---

title: Actinobacteria (Actinomycetota)
type: entity
subtype: microbe
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [zhang-2024-gut-microbiota-ppd-mendelian-randomization, wang-2024-causal-gut-microbiota-gerd-bidirectional-mr, fang-2024-gut-microbiota-autoimmune-thyroid-mendelian, liu-2024-gut-microbiota-diabetic-complications-mr-study, peralta-marzal-2024-robust-microbiome-signature-asd-machine-learning, coretti-2018-gut-microbiota-young-asd-children, dinakaran-2014-circdna-circulating-microbiome-cvd, ni-2022-gut-microbiota-psychiatric-disorders-mendelian-randomization, long-2023-causal-gut-microbiota-cancers-mr, hayashi-2019-gut-microbiome-metabolites-heart-failure]
source_count: 10
tags: [phylum, Actinomycetota, high-GC, Bifidobacterium, Collinsella, Eggerthella, nickel-urease, Ni-SOD, beta-glucuronidase]
platform: wikibiome
seo_target: "Actinobacteria gut microbiome Bifidobacterium phylum"
wikipedia_differentiation: "Actinobacteria as causally protective phylum (MR evidence for PPD, GERD, HT, DKD); dramatic depletion in ASD (12% vs 47%); diverse metal biology within single phylum (Ni-urease, Ni-SOD, NiFe-hydrogenase, Fe/Mo enzymes); estrobolome role via Eggerthella beta-glucuronidase"
gram_stain: "positive (high GC content)"
oxygen_requirement: "variable (obligate anaerobe to aerobic, depending on genus)"
metal_dependencies: [nickel, iron, molybdenum]
conditions_enriched_in: [cardiovascular-disease, heart-failure]
conditions_depleted_in: [autism-spectrum-disorder, hashimotos-thyroiditis]
---

# Actinobacteria (Actinomycetota)

## Overview

**Actinobacteria** (reclassified as **Actinomycetota** in 2021) is a major Gram-positive, high-GC-content bacterial phylum with remarkable ecological breadth. In the gut, it typically comprises 1-10% of the community -- a distant third behind [[firmicutes]] and [[bacteroidetes]] -- but its functional importance far exceeds its abundance. The phylum contains both cornerstone commensals (**[[bifidobacterium]]**, the most widely used probiotic genus) and formidable pathogens (**[[mycobacterium-tuberculosis]]**, the world's deadliest bacterial pathogen).

Mendelian randomization studies in the vault consistently identify Actinobacteria as **causally protective** against multiple conditions -- a striking finding given the phylum's relatively modest abundance.

## Key Genera with WikiBiome Entity Pages

### Commensals

| Genus | Key Function | Metal Biology |
|-------|-------------|---------------|
| **[[bifidobacterium]]** | Premier probiotic; SCFA production; immune education | Metal-binding cell surfaces; Ni-urease in some species |
| **[[gordonibacter-urolithinfaciens]]** | Urolithin production from ellagitannins | Specialized secondary metabolism |

### Pathobionts / Context-Dependent

| Genus | Key Function | Metal Biology |
|-------|-------------|---------------|
| **[[collinsella]]** | Bile acid deconjugation; enriched by heavy metals; atherosclerosis | Coriobacteriaceae member |
| **[[eggerthella-lenta]]** | [[beta-glucuronidase]] (estrogen deconjugation); drug metabolism | Iron and molybdenum dependent |
| **[[actinomyces]]** | Oral pathobiont; enriched in CRC, MS, endometriosis | [[nickel-urease]] for acid tolerance |

### Pathogens

| Genus | Key Function | Metal Biology |
|-------|-------------|---------------|
| **[[mycobacterium-tuberculosis]]** | TB pathogen; intracellular survival | NiFe-hydrogenase; Ni-urease; mycobactin siderophores |

### Members Without Dedicated Pages

- **[[gardnerella|Gardnerella]]** -- vaginal pathobiont; bacterial vaginosis
- **Corynebacterium** -- skin/mucosal commensal; some pathogenic
- **Rothia** -- oral commensal; opportunistic
- **Streptomyces** -- soil bacteria; **Ni-SOD** producers (the only known nickel-dependent SOD)
- **Cutibacterium** (*C. acnes*) -- skin commensal/acne pathogen

## Metal Biology Across the Phylum

Actinobacteria display unusually diverse metal biology within a single phylum:

| Metal System | Genera | Function |
|---|---|---|
| **[[nickel-urease]]** | Actinomyces, Bifidobacterium spp., Mycobacterium | Acid tolerance; nitrogen metabolism |
| **Ni-SOD** | Streptomyces | Unique Ni-dependent [[superoxide-dismutase]] (only known in prokaryotes) |
| **NiFe-hydrogenase** | Mycobacterium | H2 oxidation for energy in macrophage phagosome |
| **Iron/Molybdenum enzymes** | Eggerthella | Specialized oxidoreductases |
| **Metal-binding surfaces** | Bifidobacterium | Cell surface metal sequestration |
| **Mycobactin siderophores** | Mycobacterium | High-affinity iron acquisition |

## Causal Protection (Mendelian Randomization Evidence)

MR studies in the vault consistently show Actinobacteria as causally protective:

| Condition | MR Effect | Source |
|-----------|-----------|--------|
| **[[postpartum-depression]]** | Protective (OR=0.971, P=0.014) | [[zhang-2024-gut-microbiota-ppd-mendelian-randomization]] |
| **[[gerd]]** | Protective (OR=0.93) | [[wang-2024-causal-gut-microbiota-gerd-bidirectional-mr]] |
| **[[hashimotos-thyroiditis]]** | Protective (OR=0.91); mediated via CCR2 on myeloid DCs | [[fang-2024-gut-microbiota-autoimmune-thyroid-mendelian]] |
| **Diabetic kidney disease (T1D)** | Protective (OR=0.445) | [[liu-2024-gut-microbiota-diabetic-complications-mr-study]] |
| **Breast and lung cancer** | Causal associations | [[long-2023-causal-gut-microbiota-cancers-mr]] |

The mediation via **CCR2 on myeloid dendritic cells** (Hashimoto's) suggests an immune-modulatory mechanism underlying the protective effect.

## Disease Associations

| Condition | Actinobacteria Change | Key Finding |
|-----------|----------------------|-------------|
| **[[autism-spectrum-disorder]]** | Dramatically depleted | **12.18% vs 47.30%** in controls (Bifidobacterium, Collinsella decreased) [[coretti-2018-gut-microbiota-young-asd-children]] |
| **[[cardiovascular-disease]]** | Enriched (blood) | Actinobacteria dominated CVD blood circulating DNA samples [[dinakaran-2014-circdna-circulating-microbiome-cvd]] |
| **Heart failure** | Enriched | Actinobacteria enriched in HF patients [[hayashi-2019-gut-microbiome-metabolites-heart-failure]] |
| **[[schizophrenia]]** | Class-level associations | [[ni-2022-gut-microbiota-psychiatric-disorders-mendelian-randomization]] |

## Ecological Roles

### SCFA and Organic Acid Production
Bifidobacterium produces acetate and lactate through the "bifid shunt" (fructose-6-phosphate phosphoketolase pathway). Acetate serves as cross-feeding substrate for butyrate producers ([[faecalibacterium-prausnitzii]], [[roseburia]]).

### Estrobolome
[[eggerthella-lenta]] is a key [[beta-glucuronidase]] producer, deconjugating estrogen metabolites and increasing free estrogen in the enterohepatic circulation. This connects Actinobacteria to estrogen-dependent conditions ([[endometriosis]], [[breast-cancer]]).

### Bile Acid Metabolism
[[collinsella]] participates in bile acid deconjugation, linking Actinobacteria to [[bile-acid-metabolism]] and its effects on metabolic and immune signaling.

## Cross-References

- [[firmicutes]] -- Partner dominant phylum
- [[bacteroidetes]] -- Partner dominant phylum
- [[proteobacteria]] -- Phylum that expands as Actinobacteria declines
- [[bifidobacterium]] -- Cornerstone commensal genus
- [[nickel-urease]] -- Metal-dependent enzyme across multiple genera
- [[superoxide-dismutase]] -- Ni-SOD unique to Streptomyces
- [[beta-glucuronidase]] -- Eggerthella's estrobolome role
- [[mendelian-randomization]] -- MR evidence for causal protection
- [[estrobolome]] -- Actinobacteria contribution via Eggerthella
