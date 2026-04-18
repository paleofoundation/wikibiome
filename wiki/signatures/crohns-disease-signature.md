---
title: "Crohn's Disease -- Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome
  - amerikanou-2022-ibd-biomarkers-trace-metals
  - khalili-2024-mediterranean-diet-later-onset-crohns
  - haag-2015-intestinal-microbiota-innate-immunity-crohns
  - knights-2014-host-genetics-microbiome-ibd
  - serrano-fernandez-2023-high-fiber-diet-crohns-meta-analysis
  - abreu-2024-high-fiber-low-fat-diet-crohns
  - jacobs-2022-crohns-remission-obesity-mli-microbiome
  - kang-2023-diagnosis-crohns-uc-microbiome
  - zhang-2017-intestinal-microbiota-host-immune-ibd
  - xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr
  - lu-2024-ibd-extraintestinal-manifestations-microbiota-mr
  - liu-2022-mr-gut-microbial-genera-ibd-uc-cd
  - li-2020-polyphenols-gut-microbiota-ibd-synergy
  - vangoitsenhoven-2020-microbiome-antibiotics-autoimmune
  - shen-2014-probiotics-remission-uc-cd-pouchitis-meta-analysis
source_count: 16
tags: [inflammatory-bowel-disease, autoimmune, gastrointestinal, iron-paradox, ferroptosis, nutritional-immunity, siderophores, transmural-inflammation]

metallomic_signature:
  elevated: [iron-mucosal, copper, cadmium, nickel]
  depleted: [zinc, selenium, manganese, iron-luminal, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Adherent-invasive E. coli (AIEC) -- found in 75% of ileal CD mucosa vs 6% healthy; invades epithelial cells, replicates in macrophages, induces granuloma-like structures; multiple siderophore systems (enterobactin, yersiniabactin, aerobactin)"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Pro-inflammatory; enrichment associated with CD polygenic risk score independent of disease status; promotes NF-kB activation"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Mucin-degrading; directly damages mucosal barrier; consistently enriched in CD"
    - taxon: "[[candida-albicans]]"
      role: "Fungal component; biofilm formation provides functional shielding for bacterial pathogens"
    - taxon: "[[debaryomyces]]"
      role: "Fungal pathobiont; dramatically enriched in inflamed ileal tissue; activates type 1/17 immunity via beta-glucan/Dectin-1 signaling"
    - taxon: "[[enterobacteriaceae]]"
      role: "Bloom associated with NOD2 risk allele dosage; thrive in inflamed, iron-rich mucosal environment"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer; anti-inflammatory (suppresses NF-kB, induces IL-10); most consistently depleted taxon across all CD cohorts; low abundance predicts post-surgical recurrence"
    - taxon: "[[roseburia]]"
      role: "Butyrate and propionate production; consistently reduced; part of Clostridia cluster XIVa"
    - taxon: "[[lachnospiraceae-family]]"
      role: "SCFA production and barrier support; Mendelian randomization confirms causal protective role (Lachnospiraceae UCG001 OR: 0.81)"
    - taxon: "[[akkermansia-muciniphila]]"
      role: "Mucus layer maintenance; depleted in inflamed gut; MR supports causal protective association"
    - taxon: "[[eubacterium]]"
      role: "SCFA production; MR confirms causal protective role (Eubacterium ventriosum OR: 0.68)"
    - taxon: "[[lactobacillus]]"
      role: "Reduced early in ZIP8 A391T variant mice; lost competitive advantage under metal dyshomeostasis"

nutritional_immunity:
  elevated: [calprotectin, hepcidin, lactoferrin, lipocalin-2, ceruloplasmin]
  depleted: [glutathione, alpha-defensins]

ecological_features: [hypoxia, biofilm, ferroptosis, butyrate-collapse, barrier-dysfunction, NOD2-Paneth-cell-defect]

virulence_enzymes: [siderophores-enterobactin, siderophores-yersiniabactin, siderophores-aerobactin, zinc-metalloprotease-BFT, FimH-adhesin, outer-membrane-vesicles, nickel-urease]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: high
  ecological: high
  virulence_enzymes: high

associated_conditions:
  - condition: "[[ulcerative-colitis]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, bacteroides-fragilis, faecalibacterium-depleted, roseburia-depleted, lachnospiraceae-depleted]
    shared_ecological: [butyrate-collapse, barrier-dysfunction]
    overlap_score: 0.72
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum, bacteroides-fragilis, faecalibacterium-depleted, lachnospiraceae-depleted]
    shared_ecological: [hypoxia, biofilm, ferroptosis]
    overlap_score: 0.65
  - condition: "[[depression]]"
    shared_metals: [zinc, iron]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [butyrate-collapse]
    overlap_score: 0.38
  - condition: "[[rheumatoid-arthritis]]"
    shared_metals: [iron, zinc, copper]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted]
    shared_ecological: [barrier-dysfunction]
    overlap_score: 0.35

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 8, 9]
---

# Crohn's Disease -- Microbiome Signature

## Overview

**Crohn's disease** (CD) is a chronic, relapsing-remitting inflammatory bowel disease characterized by transmural inflammation of the gastrointestinal tract, most commonly affecting the terminal ileum and colon. Prevalence exceeds 3 million affected individuals in Europe and North America combined ([[khalili-2024-mediterranean-diet-later-onset-crohns]]). From the metal-microbiome perspective, Crohn's disease represents one of the clearest examples of **ecological collapse driven by metal dyshomeostasis**: restricted luminal metal availability selects against SCFA-producing commensals, enables pathobiont expansion, and establishes a self-reinforcing cycle of dysbiosis, barrier dysfunction, and chronic inflammation.

The ZIP8 A391T variant ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]], cross-sectional) provides the most direct genetic evidence: metals are trapped in mucosal tissue while being depleted from the lumen where commensals need them. Microbiome shifts precede inflammation by 8 months in this model, demonstrating that **dysbiosis is the cause, not the consequence**.

## Metallomic Signature

The metallomic profile in Crohn's disease is defined not by simple deficiency or excess but by **redistribution of metals across tissue compartments**.

### The Iron Paradox -- The Central Metallomic Feature

Iron status in CD involves two coexisting mechanisms ([[amerikanou-2022-ibd-biomarkers-trace-metals]], cross-sectional, n=153):

1. **True iron deficiency** from chronic blood loss (ulceration, fistulae) and malabsorption (ileal disease)
2. **Anemia of chronic disease** from [[hepcidin]] elevation, which blocks iron absorption and sequesters iron in macrophages ([[xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr]], Mendelian randomization)

This creates a paradox: intracellular iron excess (promoting oxidative stress and [[ferroptosis]]) alongside systemic iron deficiency (causing anemia affecting up to 70% of patients). Oral iron supplementation feeds siderophore-producing pathogens without correcting the underlying problem ([[li-2020-polyphenols-gut-microbiota-ibd-synergy]]; [[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]).

### Zinc Depletion

**[[zinc]]** is depleted via diarrheal losses, malabsorption, and active sequestration by calprotectin. Zinc depletion has cascading effects ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]; [[xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr]]):
- Tight junction integrity impaired (claudins, occludins are zinc-dependent)
- MMP-1, MMP-3, MMP-9 upregulation in inflamed tissue (zinc-dependent enzymes)
- Paneth cell alpha-defensins require zinc; their impairment through NOD2 mutations is compounded by zinc depletion

### Copper Elevation and Other Metals

**[[copper]]** is positively associated with CRP in CD ([[amerikanou-2022-ibd-biomarkers-trace-metals]]), consistent with its role as an acute-phase reactant. **[[selenium]]** is significantly lower in both CD and UC versus healthy controls, impairing selenoprotein-dependent antioxidant defense. **[[nickel]]** levels are higher in active CD compared to inactive UC. **[[cadmium]]** exposure independently induces dysbiosis patterns consistent with CD; the ZIP8 A391T variant affects cadmium handling at the colonic mucosa ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]).

### ZIP8 A391T: The Genetic Bridge

The rs13107325 SNP in SLC39A8 (ZIP8 A391T) provides the most direct genetic evidence linking metal dyshomeostasis to IBD ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]):
- Homozygous mice show increased cobalt uptake in mucosal epithelium, higher cadmium and manganese in bulk colon tissue
- Reduced luminal availability of iron, zinc, manganese, copper, cobalt, and cadmium
- Genotype-microbiome association R-squared increases from 3% at 2 months to 9% at 12 months
- Microbiome shifts at 2 months; spontaneous inflammation at 10 months -- **dysbiosis precedes inflammation**

## Environmental Exposures

- **Diet**: Mediterranean diet adherence associated with 58% lower risk of later-onset CD (HR: 0.42, 95% CI 0.22-0.80, two Swedish prospective cohorts, 17-year follow-up) ([[khalili-2024-mediterranean-diet-later-onset-crohns]]). Protection is CD-specific -- no association with UC.
- **Cadmium**: Environmental cadmium enters cells through calcium channels, displacing correct cofactors (mis-metallation) and driving oxidative stress. ZIP8 A391T carriers show higher cadmium in bulk colon tissue.
- **Antibiotics**: Usage within 1 month increases microbial dysbiosis index even after controlling for NOD2 ([[knights-2014-host-genetics-microbiome-ibd]]).
- **NSAIDs**: Enteropathy-inducing drugs alter gut microbiome composition and barrier function.

## Nutritional Immunity Response

CD deploys the most aggressive nutritional immunity response of any characterized disease:

- **[[calprotectin]]** -- Gold-standard IBD biomarker; calcium- and zinc-binding protein released by infiltrating neutrophils. Its biological function is metal sequestration -- starving pathogens of zinc and manganese. It is simultaneously a diagnostic marker and an active participant in nutritional immunity, reshaping the luminal metal environment ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]).
- **[[hepcidin]]** -- Elevated by IL-6 during flares, blocking ferroportin. Distinguishes functional iron withholding (high hepcidin = do NOT give oral iron) from true deficiency (low hepcidin = supplement cautiously, prefer IV iron).
- **[[lactoferrin]]** -- Iron-binding neutrophil protein elevated in active IBD; both a biomarker and an active antimicrobial agent.
- **Lipocalin-2** -- Neutralizes bacterial siderophores (enterobactin) as a direct counter to pathobiont iron acquisition.
- **Alpha-defensins** -- Zinc-dependent Paneth cell antimicrobial peptides; impaired through NOD2 mutations and compounded by zinc depletion.
- **Ceruloplasmin** -- Copper-carrying acute-phase protein elevated during inflammation.
- **Glutathione** -- Depleted; removes the primary neutralization pathway for cadmium.

## Taxonomic Analysis

CD is characterized by the most severe alpha diversity reduction of any IBD subtype, with Chao1 index significantly lower than both UC and healthy controls ([[kang-2023-diagnosis-crohns-uc-microbiome]], cross-sectional, n=482).

### Enriched Taxa

**Adherent-invasive [[escherichia-coli]] (AIEC)** -- Found in 75% of ileal CD mucosa versus 6% in healthy controls ([[li-2020-polyphenols-gut-microbiota-ibd-synergy]]). AIEC expresses multiple siderophore systems (enterobactin, yersiniabactin, aerobactin) that outcompete host nutritional immunity defenses. Type 1 pili with FimH adhesin bind CEACAM6 receptors upregulated in inflamed ileal epithelium. Once inside macrophages, AIEC replicates and triggers TNF-alpha, IL-6, and IL-8 release ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]; [[zhang-2017-intestinal-microbiota-host-immune-ibd]]). This is a textbook example of metal-dependent virulence: without siderophore-mediated iron acquisition, AIEC cannot colonize the inflamed mucosa.

**[[enterobacteriaceae]]** bloom -- Associated with NOD2 risk allele dosage ([[knights-2014-host-genetics-microbiome-ibd]], multi-cohort, n=474). Higher risk allele count correlates with greater Enterobacteriaceae abundance. These organisms thrive in the inflamed, iron-rich mucosal environment.

**[[fusobacterium-nucleatum]]** -- Pro-inflammatory; enrichment associated with CD polygenic risk score independent of disease status ([[jacobs-2022-crohns-remission-obesity-mli-microbiome]]). Promotes NF-kB activation and inflammatory cytokine production.

**[[ruminococcus-gnavus]]** -- Mucin-degrading species that directly damages the mucosal barrier.

**[[candida-albicans]]** and **[[debaryomyces]]** -- Fungal pathobionts. Debaryomyces is dramatically enriched in inflamed ileal tissue and activates type 1/17 immunity via beta-glucan/Dectin-1 signaling.

### Depleted Taxa

**[[faecalibacterium-prausnitzii]]** -- The most consistently depleted taxon across all CD cohorts ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]; [[kang-2023-diagnosis-crohns-uc-microbiome]]). Primary butyrate producer; suppresses NF-kB, induces IL-10. Low abundance predicts post-surgical recurrence.

**[[lachnospiraceae-family]]** -- Mendelian randomization confirms causal protective role (Lachnospiraceae UCG001 protective, OR: 0.81, p=0.023) ([[liu-2022-mr-gut-microbial-genera-ibd-uc-cd]], computational prediction). SCFA production and barrier support.

**[[eubacterium]]** -- MR confirms causal protective role (Eubacterium ventriosum protective, OR: 0.68, p=1.00e-4) ([[liu-2022-mr-gut-microbial-genera-ibd-uc-cd]]).

**[[akkermansia-muciniphila]]** -- Mucus layer maintenance; depleted in inflamed gut; MR supports causal protective association.

**[[lactobacillus]]** -- Reduced early in ZIP8 A391T mice, demonstrating that metal dyshomeostasis directly causes Lactobacillus depletion ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]).

**Dysbiosis persists even during endoscopic remission**, indicating it is not purely secondary to inflammation ([[jacobs-2022-crohns-remission-obesity-mli-microbiome]]).

## Virulence Enzymes and Features

| Enzyme/Factor | Metal Dependency | Function | Source Taxa |
|--------------|-----------------|----------|------------|
| **Enterobactin** | Fe (target) | High-affinity siderophore; outcompetes lactoferrin | AIEC, Enterobacteriaceae |
| **Yersiniabactin** | Fe (target) | Siderophore; synergistic with enterobactin | AIEC |
| **Aerobactin** | Fe (target) | Siderophore; extracellular iron scavenging | AIEC |
| **BFT (fragilysin)** | Zn | E-cadherin cleavage, tight junction disruption | B. fragilis (enterotoxigenic strains) |
| **FimH adhesin** | None | CEACAM6 binding, mucosal adhesion and invasion | AIEC |
| **Outer membrane vesicles** | None | LPS and virulence factor delivery, NF-kB activation | AIEC |
| **Nickel-urease** | Ni | pH modulation in inflamed tissue | Select Enterobacteriaceae |
| **Mucinase** | None | Direct mucus layer degradation | R. gnavus |

## Ecological State

The Crohn's disease ecosystem represents a self-amplifying ecological collapse:

1. **Initiating event** -- Metal dyshomeostasis (genetic via ZIP8 A391T, environmental via cadmium/lead exposure, or dietary)
2. **SCFA producer depletion** -- F. prausnitzii, Roseburia, Lachnospiraceae cannot compete in metal-restricted or metal-toxic environments
3. **Butyrate collapse** -- Colonocyte starvation, tight junction loss, increased permeability
4. **Pathobiont bloom** -- AIEC, Fusobacterium, Enterococcus expand using siderophores and metal resistance systems
5. **Barrier failure** -- Bacterial translocation triggers innate immune activation via NF-kB
6. **Inflammation reinforces dysbiosis** -- Hepcidin elevation, calprotectin release, and oxidative stress further alter the luminal metal environment, selecting against commensals
7. **Ferroptosis** -- Iron accumulation in inflamed tissue catalyzes lipid peroxidation through Fenton chemistry. GPX3 (glutathione peroxidase 3) is causally protective against CD ([[xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr]])

**Key evidence for causality**: ZIP8 A391T mice develop microbiome shifts at 2 months but inflammation only at 10 months ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]).

**NOD2-Paneth cell defect** -- NOD2 mutations (the strongest CD genetic risk factor) lead to deficient muramyl dipeptide sensing, reduced alpha-defensin production, and impaired bacterial clearance. This compounds the metal-driven ecological collapse by removing a key antimicrobial barrier ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]).

## Associated Conditions

### [[ulcerative-colitis]] (overlap score: 0.72)
The highest overlap of any condition pair. **Shared metals**: iron, zinc, cadmium. **Shared taxa**: E. coli (enriched), B. fragilis (enriched), F. prausnitzii (depleted), Roseburia (depleted), Lachnospiraceae (depleted). **Shared ecology**: butyrate collapse, barrier dysfunction. Key differences: CD shows more severe alpha diversity reduction; Mediterranean diet protects against CD but not UC; Lachnospiraceae UCG001 is CD-specific protective, Eubacterium ventriosum is UC-specific protective ([[liu-2022-mr-gut-microbial-genera-ibd-uc-cd]]). Metal profiles also differ: thallium is specifically associated with UC disease activity while copper-CRP association is specific to CD ([[amerikanou-2022-ibd-biomarkers-trace-metals]]).

### [[colorectal-cancer]] (overlap score: 0.65)
Crohn's colitis confers 2-3x increased CRC risk. **Shared metals**: iron, zinc, cadmium. **Shared taxa**: E. coli, Fusobacterium nucleatum, B. fragilis (all enriched); F. prausnitzii, Lachnospiraceae (depleted). **Shared ecology**: hypoxia, biofilm, ferroptosis. NF-kB activation and barrier dysfunction are shared drivers.

### [[depression]] (overlap score: 0.38)
Depression prevalence is 20-30% in CD. **Shared metals**: zinc (depleted), iron (dysregulated). **Shared taxa**: F. prausnitzii (depleted), Lachnospiraceae (depleted), Roseburia (depleted). **Shared ecology**: butyrate collapse driving gut-brain axis disruption; tryptophan pathway shifts reduce serotonin precursor availability.

### [[rheumatoid-arthritis]] (overlap score: 0.35)
Shared autoimmune architecture (HLA-DRB1, PTPN22). **Shared metals**: iron, zinc, copper. **Shared taxa**: E. coli (enriched), Lachnospiraceae (depleted). **Shared ecology**: barrier dysfunction enabling mucosal immune priming. Anti-TNF agents treat both conditions.

## Open Questions

1. **ZIP8 A391T-guided therapy** -- Should metal supplementation strategy differ for ZIP8 A391T carriers versus non-carriers? The variant affects manganese, zinc, iron, cobalt, and cadmium handling simultaneously.
2. **F. prausnitzii as therapeutic** -- When will this keystone commensal become available as a therapeutic probiotic?
3. **Hepcidin-guided iron management** -- Can hepcidin measurement (IV iron when hepcidin is low, treat inflammation when hepcidin is high) become standard of care?
4. **Prenatal metal screening** -- Does prenatal cadmium/lead screening predict later IBD risk, given lasting microbiome effects demonstrated in ZIP8 mice?
5. **Two-sided intervention** -- Would combined E. coli Nissle 1917 (siderophore competition) plus targeted prebiotics (F. prausnitzii restoration) represent an optimal ecological intervention?
6. **Ferroptosis inhibition** -- GPX3 is causally protective ([[xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr]]). Can ferroptosis inhibitors complement standard anti-inflammatory therapy?

## Karen's Brain Primitives Active

- **Primitive 1: Metals as Selective Pressures** -- ZIP8 A391T demonstrates that metal redistribution directly reshapes the microbiome, with genotype-microbiome association strengthening over time. Cadmium, iron, and zinc create selective pressures favoring pathobionts.
- **Primitive 2: Nutritional Immunity as Interpretive Constraint** -- Hepcidin elevation is host defense, not deficiency. Calprotectin elevation is active zinc/manganese sequestration. Low serum iron + high hepcidin = do NOT supplement orally.
- **Primitive 4: Microbial Metal Dependencies as Achilles' Heels** -- AIEC depends entirely on siderophore-mediated iron acquisition. Restrict iron access and AIEC cannot colonize. B. fragilis BFT requires zinc. Alpha-defensins require zinc but are impaired by NOD2 mutations.
- **Primitive 5: Two-Sided Ecological Engineering** -- Suppress AIEC and Enterobacteriaceae via siderophore competition AND restore F. prausnitzii, Roseburia, and Lachnospiraceae for butyrate production and barrier repair.
- **Primitive 8: Siderophore Competition and Iron Ecology** -- The entire pathobiont consortium depends on iron piracy. E. coli Nissle 1917 outcompetes via superior siderophore systems. Polyphenols chelate iron, reducing pathobiont access.
- **Primitive 9: Oxygen State as Ecological Determinant** -- Butyrate collapse leads to oxygenation of the colonic epithelium (colonocytes switch from butyrate oxidation to glycolysis), paradoxically favoring facultative anaerobes like AIEC. Restoring butyrate producers restores the anaerobic niche favoring commensals.
