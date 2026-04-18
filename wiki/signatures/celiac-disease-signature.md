---
title: "Celiac Disease — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [borghini-2020-low-nickel-diet-celiac]
source_count: 1
tags: [autoimmune, gluten, intestinal, malabsorption, nickel, gut-barrier]

metallomic_signature:
  elevated: [nickel]
  depleted: [iron, zinc, selenium, copper, calcium, magnesium]

taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Proteolytic activity generates residual immunogenic gliadin peptides that enhance HLA-DQ2 presentation"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Elevated proteolytic strains deamidate gliadin peptides similarly to tTG2, priming immune activation"
    - taxon: "[[proteobacteria]]"
      role: "Phylum-level bloom — consistent dysbiosis marker in both active and GFD-treated celiac patients"
    - taxon: "[[staphylococcus-aureus|staphylococcus]]"
      role: "Enriched in celiac gut; functional role unclear"
  depleted:
    - taxon: "[[bifidobacterium]]"
      role: "Consistently reduced (B. longum, B. adolescentis) — loss impairs barrier support, immune tolerance, and gluten peptide degradation"
    - taxon: "[[lactobacillus]]"
      role: "Reduced luminal and mucosal populations; healthy Lactobacillus strains fully degrade the immunogenic 33-mer gliadin peptide"
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Butyrate producer whose loss compounds epithelial energy deficit in villous atrophy"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers — loss worsens barrier dysfunction and mucosal healing"
    - taxon: "[[prevotella]]"
      role: "Depleted in active celiac disease"

nutritional_immunity:
  elevated: [zonulin]
  depleted: [glutathione]

ecological_features: [villous-atrophy, increased-intestinal-permeability, gluten-mediated-tight-junction-disassembly, nickel-allergic-contact-mucositis]

virulence_enzymes: [bacterial-proteases, beta-glucuronidase, tissue-transglutaminase-2-mimicry]

confidence:
  metallomic: moderate
  taxonomic: moderate
  nutritional_immunity: preliminary
  ecological: moderate
  virulence_enzymes: preliminary

associated_conditions:
  - condition: "[[type-1-diabetes]]"
    shared_metals: [iron, zinc]
    shared_taxa: [bifidobacterium-depleted, bacteroides]
    shared_ecological: [increased-intestinal-permeability]
    overlap_score: 0.55
  - condition: "[[hashimotos-thyroiditis]]"
    shared_metals: [iron, zinc, selenium]
    shared_taxa: [bifidobacterium-depleted, lactobacillus-depleted, proteobacteria]
    shared_ecological: [increased-intestinal-permeability]
    overlap_score: 0.58
  - condition: "[[ibs]]"
    shared_metals: [iron, zinc, nickel]
    shared_taxa: [bifidobacterium-depleted, lactobacillus-depleted]
    shared_ecological: [increased-intestinal-permeability]
    overlap_score: 0.50
  - condition: "[[inflammatory-bowel-disease]]"
    shared_metals: [iron, zinc]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted, proteobacteria]
    shared_ecological: [increased-intestinal-permeability]
    overlap_score: 0.52

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 3, 4, 5]
---

# Celiac Disease — Microbiome Signature

## Overview

**Celiac disease** is a chronic autoimmune condition triggered by dietary gluten in genetically susceptible individuals (HLA-DQ2/DQ8). Gluten exposure causes immune-mediated destruction of small intestinal villi, resulting in malabsorption of critical metals and minerals. The microbiome signature is distinctive because it involves a paradoxical metal intersection: the standard treatment (gluten-free diet) inadvertently increases dietary nickel exposure through high-nickel substitute foods, while villous atrophy causes malabsorption of iron, zinc, selenium, copper, calcium, and magnesium. The gut microbiome functions as a checkpoint on gluten immunogenicity rather than a passive observer — specific bacterial proteases can either fully degrade immunogenic gliadin peptides (protective) or generate residual antigenic epitopes (pathogenic).

## Metallomic Signature

**Confidence: moderate**

The metallomic pattern in celiac disease is driven by two distinct mechanisms operating simultaneously:

**Elevated:**
- **Nickel** — Dietary nickel intake increases paradoxically on a gluten-free diet because GFD substitute foods (rice, corn, oats, soy, quinoa, amaranth, legumes) are high-nickel foods. In patients with nickel allergic contact mucositis (NACM), this triggers gastrointestinal inflammation that mimics celiac symptoms [[borghini-2020-low-nickel-diet-celiac]]. Estimated prevalence of Ni ACM exceeds 30% in the general population based on patch test positivity.

**Depleted:**
- **Iron** — Villous atrophy in the upper small intestine severely impairs iron absorption. This creates a diagnostic challenge: distinguishing absorptive iron deficiency (celiac-driven) from functional anemia (nutritional immunity) requires celiac antibody testing and duodenal biopsy.
- **Zinc** — Malabsorbed due to villous atrophy; zinc deficiency compounds immune dysregulation.
- **Selenium** — Depleted through malabsorption; shared deficiency with [[hashimotos-thyroiditis]] comorbidity.
- **Copper, calcium, magnesium** — All malabsorbed in untreated celiac disease.

The iron and zinc depletion pattern superficially resembles [[nutritional-immunity]] but arises from absorptive failure rather than host metal sequestration — a critical distinction for Cureva's interpretation pipeline (Primitive 2).

## Environmental Exposures

Dietary nickel is the primary environmental metal exposure in celiac disease. Average dietary nickel intake ranges from 100-600 ug/day depending on food choices. The gluten-free diet paradox means patients replacing wheat with corn, rice, buckwheat, and legume-based products inadvertently increase their daily nickel intake substantially [[borghini-2020-low-nickel-diet-celiac]]. Plant-based and whole-food diets tend to be higher in nickel, creating a paradox where "healthier" diets may worsen symptoms in nickel-sensitive individuals.

## Nutritional Immunity Response

**Confidence: preliminary**

**Elevated:**
- **Zonulin** — Elevated serum levels signal active tight-junction disassembly; gluten-triggered zonulin release increases intestinal permeability, representing the "leaky gut" phase of celiac pathogenesis.

**Depleted:**
- **Glutathione** — Reduced antioxidant capacity compounds oxidative damage to the intestinal epithelium.

The nutritional immunity picture in celiac disease is atypical: metal depletions are driven by malabsorption rather than host sequestration. This means the standard WikiBiome interpretive framework (Primitive 2 — low serum metals as host defense) does not directly apply. Celiac patients may genuinely require metal supplementation, unlike conditions where low serum iron reflects hepcidin-mediated sequestration.

## Taxonomic Analysis

**Confidence: moderate**

The celiac gut microbiome shows a characteristic dysbiosis present in both active disease and GFD-adherent patients:

### Enriched Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[escherichia-coli]] | Proteolytic strains only partially cleave the 33-mer gliadin peptide, generating residual epitopes that remain antigenic for HLA-DQ2 presentation | Caminero et al. 2016, 2019 |
| [[bacteroides-fragilis]] | Elevated proteolytic strains deamidate gliadin peptides similarly to tissue transglutaminase 2, priming HLA-DQ2 presentation | Multiple cohorts |
| [[proteobacteria]] | Phylum-level bloom — consistent dysbiosis marker | Collado et al. 2009; De Palma et al. 2010 |
| Staphylococcus spp. | Enriched in celiac gut; functional significance unclear | Multiple cohorts |

### Depleted Taxa

| Taxon | Role | Evidence |
|-------|------|----------|
| [[bifidobacterium]] | B. longum and B. adolescentis consistently reduced; loss impairs barrier support and immune tolerance | Collado et al. 2009; Golfetto et al. 2014 |
| [[lactobacillus]] | Healthy lactobacilli fully degrade the immunogenic 33-mer gliadin peptide — their loss removes a critical checkpoint on gluten immunogenicity | Caminero et al. 2016 |
| [[faecalibacterium-prausnitzii]] | Butyrate producer whose loss compounds epithelial energy deficit in villous atrophy | Multiple cohorts |
| [[lachnospiraceae]] | SCFA producers — loss worsens mucosal healing capacity | Multiple cohorts |
| [[prevotella]] spp. | Depleted in active disease | De Palma et al. 2010 |

**Mechanistic bridge:** Caminero et al. (2016, *Gut*) demonstrated that lactobacilli from healthy subjects fully degrade the immunogenic 33-mer gliadin peptide, while pseudomonal and *E. coli* proteases from celiac patients only partially cleave it, generating residual epitopes that remain antigenic. This establishes the microbiome as a **checkpoint on gluten immunogenicity**. Wheat-associated *Pseudomonas aeruginosa* specifically produces elastase-like proteases that generate more, not fewer, HLA-DQ2-binding peptides.

## Virulence Enzymes and Features

**Confidence: preliminary**

- **Bacterial proteases** — E. coli and Pseudomonas proteases that partially cleave gliadin, generating immunogenic fragments rather than destroying them.
- **Beta-glucuronidase** — Elevated in Proteobacteria-enriched dysbiosis; may contribute to altered bile acid and hormone metabolism.
- **tTG2-mimicry activity** — B. fragilis proteolytic strains perform gliadin deamidation similarly to tissue transglutaminase 2, the autoantigen in celiac disease.

## Ecological State

**Confidence: moderate**

The celiac gut ecosystem is characterized by:

- **Villous atrophy** — Immune-mediated destruction of absorptive surface reduces nutrient uptake and creates an energy-depleted epithelial environment.
- **Increased intestinal permeability** — Zonulin-mediated tight junction disassembly allows gliadin peptides to reach the lamina propria, perpetuating the autoimmune cycle.
- **Gluten-mediated tight junction disassembly** — Gliadin triggers zonulin release, a direct molecular mechanism for barrier failure.
- **Nickel allergic contact mucositis** — In the subset of patients with Ni ACM (potentially >30%), dietary nickel from GFD substitute foods triggers a local allergic response in the gut mucosa, producing IBS-like symptoms that compound celiac pathology.

The ecological state creates a self-reinforcing cycle: villous atrophy → malabsorption → metal deficiency → impaired epithelial repair → persistent villous atrophy. Adding nickel exposure from GFD foods creates a second inflammatory loop in nickel-sensitive patients.

## Associated Conditions

Celiac disease shares microbiome and metallomic features with several autoimmune and gastrointestinal conditions:

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap Score |
|-----------|--------------|-------------|----------------|---------------|
| **[[type-1-diabetes]]** | Iron, zinc depleted | Bifidobacterium depleted, Bacteroides | Increased permeability | 0.55 |
| **[[hashimotos-thyroiditis]]** | Iron, zinc, selenium depleted | Bifidobacterium depleted, Lactobacillus depleted, Proteobacteria | Increased permeability | 0.58 |
| **[[ibs]]** | Iron, zinc depleted; nickel elevated | Bifidobacterium depleted, Lactobacillus depleted | Increased permeability | 0.50 |
| **[[inflammatory-bowel-disease]]** | Iron, zinc depleted | Faecalibacterium depleted, Lachnospiraceae depleted, Proteobacteria | Increased permeability | 0.52 |

The overlap with type-1-diabetes is particularly notable given shared HLA-DQ2/DQ8 risk haplotypes (~8% of T1D patients carry celiac antibodies) and early-life Bifidobacterium depletion as a shared feature.

## Open Questions

1. What proportion of persistent symptoms in GFD-adherent celiac patients is attributable to undiagnosed nickel allergic contact mucositis?
2. Does the microbiome-as-gliadin-checkpoint model (Caminero et al.) have therapeutic implications — can restoring lactobacilli reduce gluten immunogenicity sufficiently to prevent flares?
3. Are the metal depletions in celiac disease purely absorptive, or does nutritional immunity (hepcidin, calprotectin) contribute in active disease?
4. Does the nickel-metalloestrogen effect explain the female predominance in Ni ACM comorbidity?
5. Can microbiome profiling predict which celiac patients will develop nickel sensitivity on GFD?

## Karen's Brain Primitives Active

- **Primitive 1 (Metals as Selective Pressures)**: Nickel exposure from GFD foods selectively affects nickel-sensitive patients; iron/zinc malabsorption alters the competitive landscape for metal-dependent taxa.
- **Primitive 2 (Nutritional Immunity as Interpretive Constraint)**: Critical distinction — iron/zinc depletion in celiac is absorptive rather than host-mediated sequestration. Supplementation may be genuinely indicated, unlike conditions where low serum iron reflects hepcidin defense.
- **Primitive 3 (Mis-metallation and Toxic Metal Entry)**: Nickel acts as a metalloestrogen, binding estrogen receptors; nickel from GFD substitute foods may enter through compromised intestinal barrier.
- **Primitive 4 (Microbial Metal Dependencies as Achilles' Heels)**: E. coli and Proteobacteria enrichment in celiac reflects iron-dependent growth advantage in a metal-depleted gut environment.
- **Primitive 5 (Two-Sided Ecological Engineering)**: Suppress pathogenic proteolytic bacteria (E. coli, Pseudomonas) that generate immunogenic gliadin fragments AND restore Lactobacillus/Bifidobacterium that fully degrade gliadin peptides.
