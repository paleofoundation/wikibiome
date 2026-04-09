---
title: "Crohn's Disease — Microbiome Signature"
type: signature
created: 2026-04-09
updated: 2026-04-09
sources: [liu-2022-mendelian-cd-microbiome, zhang-2021-akkermansia-cd, xu-2023-oxidative-stress-cd, amerikanou-2022-ibd-biomarkers-trace-metals, yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome, coryell-2018-gut-microbiome-arsenic-toxicity-protection, breton-2016-cd-pb-colitis, khan-wang-2020-environmental-exposures-autoimmune-gut-microbiome, eggers-2023-prenatal-lead-gut-microbiome-childhood, rezazadegan-2025-heavy-metals-gut-microbiota-systematic-review, pascal-2017-cd-microbial-signature, brusaferro-2018-pediatric-cd-dysbiosis, wang-2024-ibd-virulence-factors]
tags: [gastrointestinal, inflammatory, autoimmune, chronic]

# Layer 1: Metallomic signature
metallomic_signature:
  elevated: [iron-tissue, cobalt-mucosal, lead, cadmium, mercury, arsenic]
  depleted: [zinc-luminal, iron-luminal, manganese-luminal, copper-luminal, glutathione]

# Layer 2: Taxonomic signature
taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Adherent-invasive E. coli (AIEC) — mucosa-invasive, siderophore-dependent, iron-scavenging"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Pro-inflammatory, oxygen-consuming, enriched across multiple cohorts"
    - taxon: "[[enterococcus]]"
      role: "Metal-resistant, consistently pro-inflammatory"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Mucin-degrading, barrier-damaging"
    - taxon: "[[bacteroides-fragilis]]"
      role: "Mixed — some strains pathogenic (BFT toxin), others commensal"
    - taxon: "[[candida-albicans]]"
      role: "Fungal component — biofilm formation, functional shielding, interkingdom interactions"
    - taxon: "[[collinsella]]"
      role: "Pathobiont enriched by heavy metal exposure (As, Pb, Hg)"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer — most consistently depleted taxon across all CD cohorts; essential for arsenic detoxification; low abundance predicts post-surgical recurrence"
    - taxon: "[[roseburia]]"
      role: "Butyrate and propionate producer — consistently reduced"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA producers — lost in iron-rich pro-inflammatory environment; Mendelian randomization confirms protective causal role"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Mucus-layer specialist — depleted; Mendelian randomization shows causal protective association"
    - taxon: "[[eubacterium]]"
      role: "SCFA producer — Mendelian randomization confirms protective causal role"

# Layer 3: Nutritional immunity profile
nutritional_immunity:
  elevated: [calprotectin, lactoferrin, hepcidin, pro-inflammatory-cytokines, DUOX2]
  depleted: [glutathione, anti-inflammatory-cytokines]

# Layer 4: Ecological features
ecological_features: [barrier-dysfunction, leaky-gut, hypoxia, biofilm, SCFA-depletion, bile-acid-dysmetabolism, tryptophan-depletion, fermentative-metabolism]

# Layer 5: Key virulence enzymes expressed
virulence_enzymes: [siderophores, zinc-metalloprotease, iron-dependent-hydrogenase, cobalt-dependent-enzymes, copper-resistance-determinants, mucin-degrading-enzymes]

# Cureva pipeline status
cureva_status: partial
validated_interventions: [high-fiber-prebiotics, mediterranean-diet, faecalibacterium-restoration, lactoferrin-supplementation, nac-supplementation]
stops: [stop-iron-supplementation-crohns, stop-broad-spectrum-antibiotics-crohns]
---

## Overview

**Crohn's disease** (CD) is a chronic inflammatory bowel disease characterized by transmural inflammation of the gastrointestinal tract, with periods of exacerbation and remission. The microbiome signature framework reveals Crohn's as an **ecological collapse** driven by metal dyshomeostasis → dysbiosis → barrier dysfunction → chronic inflammation, in a self-reinforcing cycle.

A landmark finding from the ZIP8 A391T genetic variant studies demonstrates the mechanism definitively: **restricted metal availability to the microbiota selects for dysbiotic organisms, and dysbiosis precedes inflammation** — the dysbiosis is the driving force, not the consequence [[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]].

This signature is built from 129 papers across 9 categories (causal, associated conditions, heavy metals, metabolites, signatures, mechanistic insights, drug repurposing, interventions, diet).

## Metallomic Signature

The Crohn's metallomic profile is characterized by a **redistribution of metals** rather than simple elevation or depletion. The ZIP8 A391T CD risk variant demonstrates this mechanism directly [[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]:

| Compartment | Metals | Direction | Significance |
|-------------|--------|-----------|--------------|
| **Colonic mucosa** | Cobalt | Elevated | Mucosal metal trapping |
| **Colonic lumen** | Fe, Zn, Mn, Co, Cu, Cd | Depleted | Restricted availability to microbiota |
| **Tissue/serum** | Multiple metals dysregulated | Mixed | Metal dyshomeostasis confirmed [[amerikanou-2022-ibd-biomarkers-trace-metals]] |

**Toxic metal burden**: Lead, cadmium, mercury, and arsenic exposures all independently induce dysbiosis patterns consistent with CD [[rezazadegan-2025-heavy-metals-gut-microbiota-systematic-review]]. Heavy metal exposure → oxidative stress → tight junction disruption → barrier dysfunction → dysbiosis.

**Glutathione is depleted** — as in endometriosis, the loss of glutathione removes the primary neutralization pathway for cadmium and lead.

## Environmental Exposures

| Exposure | Metals | Evidence |
|----------|--------|----------|
| **Prenatal lead** | Pb | Lasting microbiome disruption into childhood; dysbiosis established before disease onset [[eggers-2023-prenatal-lead-gut-microbiome-childhood]] |
| **Drinking water** | As, Pb, Cd | Microbiome required for arsenic detoxification; dysbiotic patients hypersensitive [[coryell-2018-gut-microbiome-arsenic-toxicity-protection]] |
| **Dietary metals** | Fe, Zn, Ni, Cd | Metal content in foods shapes microbial communities |
| **Environmental chemicals** | Hg, Pb, Cd, As | Occupational/environmental exposures linked to autoimmune disease via dysbiosis [[khan-wang-2020-environmental-exposures-autoimmune-gut-microbiome]] |

**Critical window**: Prenatal and early-life metal exposure has particularly lasting effects on microbiome composition and immune tolerance development. Lead-exposed children show altered microbiota diversity that persists and predisposes to IBD [[eggers-2023-prenatal-lead-gut-microbiome-childhood]].

## Nutritional Immunity Response

| Factor | Status | Function |
|--------|--------|----------|
| **[[calprotectin]]** | Elevated | Primary fecal inflammation marker; sequesters zinc from pathogens |
| **[[lactoferrin]]** | Elevated | Iron-sequestering host defense |
| **[[hepcidin]]** | Elevated | Systemic iron withholding |
| **DUOX2** | Upregulated | Reactive oxygen species production at mucosal surface |
| **Pro-inflammatory cytokines** | Elevated | TNF-α, IL-6, IL-17 |
| **[[glutathione]]** | Depleted | Loss of Cd/Pb neutralization capacity |

The nutritional immunity response in Crohn's mirrors the endometriosis pattern: the body is actively sequestering metals from pathogens (Primitive 2: Nutritional Immunity as Interpretive Constraint).

## Mis-metallation Events

The ZIP8 A391T variant (rs13107325) in the SLC39A8 gene provides **direct genetic evidence** that metal dyshomeostasis drives CD pathogenesis [[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]:

- The variant impairs metal ion homeostasis at the mucosal-luminal interface
- Creates metal redistribution: increased cobalt in mucosa, decreased Fe/Zn/Mn/Co/Cu/Cd in lumen
- Metal restriction selects for organisms with alternative nutrient acquisition strategies
- Loss of metal-dependent commensals (Faecalibacterium, Lachnospiraceae)
- **Dysbiosis develops FIRST, inflammation follows months later**

Additionally, toxic metals (Cd, Pb) enter cells through calcium channels, displacing correct cofactors (Primitive 3: Mis-metallation and Toxic Metal Entry).

## Taxonomic Analysis

### Enriched Taxa

| Taxon | Metal Dependencies | Key Features | Pathogenic Role |
|-------|-------------------|-------------|-----------------|
| **[[escherichia-coli]]** (AIEC) | Fe (siderophores), Zn, Ni | Mucosa-invasive, siderophore-dependent | Adherent-invasive pathotype; iron-scavenging enables persistence in inflamed tissue |
| **[[fusobacterium-nucleatum]]** | Zn, Ni | Oxygen-consuming | Pro-inflammatory; consistently enriched across cohorts; decreases local O₂ |
| **[[enterococcus]]** | Metal-resistant (Cd reprograms 47% of genome) | 120-year metal-antibiotic co-selection | Pro-inflammatory; thrives in metal-stressed environments |
| **[[ruminococcus-gnavus]]** | — | Mucin-degrading | Degrades mucus layer → barrier damage → bacterial translocation |
| **[[candida-albicans]]** | Ni (biofilm enhancement) | Biofilm formation, functional shielding | Interkingdom cooperation with bacterial pathogens |
| **[[collinsella]]** | — | Metal exposure-enriched | Pathobiont consistently enriched by As/Pb/Hg exposure [[rezazadegan-2025-heavy-metals-gut-microbiota-systematic-review]] |

### Depleted Taxa

| Taxon | Normal Function | Why Lost | Evidence Strength |
|-------|----------------|----------|-------------------|
| **[[faecalibacterium-prausnitzii]]** | Primary butyrate producer; arsenic detoxification | Cannot compete in metal-dyshomeostatic environment | **Strongest** — depleted in every CD cohort studied; low abundance predicts post-surgical recurrence |
| **[[roseburia]]** | Butyrate + propionate production | Lost SCFA-producing capacity in dysbiotic environment | Strong — consistently reduced |
| **[[lachnospiraceae]]** | SCFA production, barrier support | Lacked defense systems for metal-stressed niche | Strong — Mendelian randomization confirms causal protective role [[liu-2022-mendelian-cd-microbiome]] |
| **[[akkermansia-muciniphila]]** | Mucus layer maintenance, anti-inflammatory | Depleted in inflamed/dysbiotic gut | Moderate — Mendelian randomization supports causal association [[zhang-2021-akkermansia-cd]] |
| **[[eubacterium]]** | SCFA production | Lost competitive advantage | Moderate — Mendelian randomization confirms protective role |

**The fundamental pattern**: Metal dyshomeostasis selects AGAINST SCFA-producing commensals and FOR metal-tolerant/metal-acquiring pathobionts.

## Virulence Enzymes and Features

| Enzyme/Feature | Metal Cofactor | Function | Key Taxa |
|----------------|---------------|----------|----------|
| **Siderophores** | Fe (acquisition) | Iron scavenging from host; biofilm formation | AIEC, Enterococcus |
| **Zinc metalloprotease** | Zn | Tissue degradation, immune evasion | E. coli, B. fragilis |
| **Cobalt/nickel-dependent hydrogenases** | Co, Ni | Energy metabolism in anaerobic conditions | E. coli |
| **Copper resistance determinants** | Cu | Survival against host copper intoxication | Enterococcus, E. coli |
| **Mucin-degrading enzymes** | — | Mucus barrier destruction | R. gnavus |

## Interkingdom Relationships

**[[candida-albicans]]** plays a role in CD similar to its role in endometriosis — biofilm formation creates anaerobic pockets and provides functional shielding for bacterial pathogens (Primitive 6: Interkingdom Relationships and Functional Shielding).

The virome is also disrupted in CD: altered bacteriophage diversity and phage-bacteria ecological balance contributes to dysbiosis through loss of lysogenic control of pathogenic bacteria.

## Ecological State

**The self-reinforcing dysbiosis cycle in Crohn's disease**:

1. **Initiating event**: Metal dyshomeostasis (genetic via ZIP8 A391T, or environmental via Pb/Cd/As/Hg exposure)
2. **SCFA producer depletion**: F. prausnitzii, Roseburia, Lachnospiraceae die off
3. **Butyrate collapse**: Reduced butyrate → colonocyte dysfunction → tight junction loss → **leaky gut**
4. **Secondary bile acid collapse**: Reduced bacterial bile acid deconjugation → impaired FXR signaling → barrier dysfunction
5. **Tryptophan metabolite collapse**: Reduced indoles → loss of AhR-mediated IL-22 → reduced antimicrobial peptide production
6. **pH elevation**: SCFA loss → luminal pH rises → selects for Gram-negative pathobionts
7. **Pathobiont bloom**: AIEC, Fusobacterium, Enterococcus expand; siderophore competition intensifies
8. **Barrier failure**: Bacterial translocation → immune activation → chronic inflammation
9. **Inflammation reinforces dysbiosis**: Pro-inflammatory environment further selects against commensals

**Key insight from ZIP8 studies**: Dysbiosis **precedes** inflammation — microbiome shifts were detected at 2 months in A393T mice, but spontaneous inflammation didn't develop until 10 months [[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]].

## Metabolite Landscape

The metabolite dysmetabolism in Crohn's is profound:

| Metabolite Class | Direction | Key Taxa Responsible | Functional Consequence |
|-----------------|-----------|---------------------|----------------------|
| **SCFAs (butyrate, propionate)** | Depleted | F. prausnitzii, Roseburia, Eubacterium (all depleted) | Colonocyte starvation, tight junction loss, reduced Tregs |
| **Secondary bile acids** | Depleted | Bacteroides, Clostridium clusters IV/XIVa (reduced) | Impaired FXR signaling, barrier dysfunction |
| **Tryptophan metabolites (indoles)** | Depleted | Bacteroides, Prevotella (reduced) | Loss of AhR-mediated IL-22, reduced antimicrobial peptides |
| **Branched-chain amino acids** | Depleted | Multiple commensals | Metabolic signaling impairment |
| **LPS** | Elevated | AIEC, Gram-negatives (enriched) | Chronic immune activation |
| **TMAO** | Elevated | Altered choline metabolism | Inflammatory signaling |

## Validated Interventions

### Dietary (Cureva only)

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[high-fiber-prebiotics]]** | Restore SCFA production; high molecular weight fibers (gum arabic, PHGG, psyllium) reach distal colon to feed depleted F. prausnitzii and Roseburia | Validated |
| **[[mediterranean-diet]]** | Associated with lower CD risk; anti-inflammatory pattern; supports SCFA-producing taxa | Validated — prospective cohort data |
| **Avoid high-red-meat** | Reduces free iron available to siderophore-producing AIEC | Validated |

### Supplemental (Cureva only)

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[lactoferrin-supplementation]]** | Supports iron sequestration from pathogens; already elevated as host defense | Validated |
| **[[nac-supplementation]]** | Replenishes depleted glutathione for Cd/Pb neutralization | Promising |
| **[[tributyrin]]** | Direct butyrate supplementation to bypass missing SCFA producers; supports colonocyte function | Promising |

### Probiotic (Cureva only)

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[faecalibacterium-restoration]]** | Restore the most consistently depleted taxon; butyrate production + arsenic detoxification capacity | Promising — not yet available as commercial probiotic |
| **[[ecoli-nissle-1917]]** | Competitive exclusion of AIEC via superior siderophore systems | Validated |

### Drug Repurposing (Cureva only)

| Intervention | Mechanism | Triangle Status |
|-------------|-----------|----------------|
| **[[metformin]]** | Biofilm disruption; anti-inflammatory; modulates microbiome composition | Promising |

## STOPs

| STOP | Conventional Rationale | Why Counterproductive |
|------|----------------------|----------------------|
| **[[stop-iron-supplementation-crohns]]** | Patient presents with anemia | Hepcidin/lactoferrin elevation = functional anemia (host defense). Iron supplementation feeds siderophore-producing AIEC, amplifies barrier-damaging inflammation |
| **[[stop-broad-spectrum-antibiotics-crohns]]** | Reduce bacterial infection/inflammation | Destroys remaining F. prausnitzii and SCFA producers; microbiome required for metal detoxification; antibiotic-treated mice accumulate MORE arsenic in organs [[coryell-2018-gut-microbiome-arsenic-toxicity-protection]] |

## Open Questions

- **ZIP8 variant prevalence**: How common is A391T in CD populations, and should metal supplementation strategy differ for carriers vs. non-carriers?
- **Faecalibacterium as probiotic**: When will F. prausnitzii become available as a therapeutic probiotic? This is the single most impactful restoration target.
- **Prenatal metal screening**: Should prenatal lead/cadmium screening be routine given the lasting microbiome effects?
- **Virome integration**: How do bacteriophage shifts interact with the bacterial and fungal dysbiosis?
- **Metformin + lactoferrin synergy**: Does combined biofilm disruption + iron chelation show synergistic benefit (parallel to endometriosis hypothesis)?

## Knowledge Primitives Applied

1. **Metals as Selective Pressures** — ZIP8 A391T demonstrates directly: restricted luminal metals → dysbiosis → inflammation
2. **Nutritional Immunity as Interpretive Constraint** — Calprotectin/lactoferrin/hepcidin elevation = host defense, not deficiency
3. **Mis-metallation and Toxic Metal Entry** — Cd/Pb displace cofactors; prenatal lead creates lasting dysbiosis
4. **Microbial Metal Dependencies as Achilles' Heels** — AIEC depends on siderophores; restrict iron to disable
5. **Two-Sided Ecological Engineering** — Must suppress AIEC AND restore F. prausnitzii/Roseburia with distal prebiotics
6. **Interkingdom Relationships and Functional Shielding** — Candida biofilms + virome dysbiosis
7. **Estrobolome and Hormone Recirculation** — Not primary driver (unlike endometriosis) but bile acid metabolism is disrupted
8. **Siderophore Competition and Iron Ecology** — Central to AIEC pathogenesis; EcN 1917 outcompetes via superior siderophores
9. **Oxygen State as Ecological Determinant** — SCFA depletion → loss of anaerobic niche maintenance → pathobiont expansion
