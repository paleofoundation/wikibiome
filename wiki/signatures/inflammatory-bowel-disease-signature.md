---
title: "Inflammatory Bowel Disease -- Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - amerikanou-2022-ibd-biomarkers-trace-metals
  - sanchez-cruz-2024-ibd-cvd-integrative-review-gut-microbiome
  - yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome
  - li-2019-timing-second-fmt-crohns
  - sokol-2020-fmt-remission-crohns-pilot-rct
  - shen-2014-probiotics-remission-uc-cd-pouchitis-meta-analysis
  - zhu-2021-editorial-microbiome-ibd-composition-therapy
  - rashed-2022-manipulation-gut-microbiota-crohns
  - syer-2015-nsaid-enteropathy-bacteria
  - mermans-2019-nsaids-gut-microbiome-chronic-inflammation
  - liu-2022-mr-gut-microbial-genera-ibd-uc-cd
  - knights-2014-host-genetics-microbiome-ibd
  - kang-2023-diagnosis-crohns-uc-microbiome
  - li-2020-polyphenols-gut-microbiota-ibd-synergy
  - xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr
  - haag-2015-intestinal-microbiota-innate-immunity-crohns
  - zhang-2017-intestinal-microbiota-host-immune-ibd
source_count: 17
tags: [IBD, Crohns-disease, ulcerative-colitis, iron-paradox, calprotectin, hepcidin, dysbiosis, SCFA-depletion, gut-barrier, CVD-comorbidity]

metallomic_signature:
  elevated: [iron-mucosal, copper]
  depleted: [iron-systemic, zinc, selenium, manganese, glutathione]

taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "AIEC in CD; enterotoxigenic strains in UC; siderophore-dependent iron acquisition; LPS/TLR4/NF-kB activation; Enterobacteriaceae bloom is hallmark of IBD"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Pro-inflammatory; NF-kB activation; adhesin-mediated mucosal colonization; enriched in both CD and CRC"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Mucin-degrading; barrier damage; enriched across IBD subtypes"
    - taxon: "[[enterobacteriaceae]]"
      role: "Bloom favored by inflammation-driven iron redistribution and oxygen availability; NOD2 allele dosage-dependent"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Primary butyrate producer; anti-inflammatory (NF-kB suppression, IL-10 induction); most consistently depleted taxon in IBD across all cohorts"
    - taxon: "[[roseburia]]"
      role: "Butyrate and propionate producer; part of Clostridia cluster XIVa; consistently reduced in IBD"
    - taxon: "[[blautia]]"
      role: "SCFA production; depleted in IBD; contributes to butyrate collapse"
    - taxon: "[[bifidobacterium]]"
      role: "Carbohydrate fermentation and cross-feeding with butyrate producers; depleted in IBD"
    - taxon: "[[lachnospiraceae-family]]"
      role: "SCFA production; Mendelian randomization confirms causal protective role in IBD and CD specifically"
    - taxon: "[[prevotella]]"
      role: "Depleted in IBD; associated with plant-rich dietary patterns"

nutritional_immunity:
  elevated: [calprotectin, hepcidin, lactoferrin, lipocalin-2]
  depleted: [glutathione, alpha-defensins]

ecological_features: [butyrate-collapse, barrier-dysfunction, ferroptosis, Firmicutes-Bacteroidetes-ratio-shift, LPS-translocation, TMAO-elevation]

virulence_enzymes: [siderophores, FimH-adhesin, outer-membrane-vesicles, zinc-metalloprotease-BFT, mucinase]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: high
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[crohns-disease]]"
    shared_metals: [iron, zinc, cadmium, copper]
    shared_taxa: [escherichia-coli, faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [butyrate-collapse, barrier-dysfunction, ferroptosis]
    overlap_score: 0.90
  - condition: "[[ulcerative-colitis]]"
    shared_metals: [iron, zinc, copper]
    shared_taxa: [escherichia-coli, faecalibacterium-depleted, lachnospiraceae-depleted]
    shared_ecological: [butyrate-collapse, barrier-dysfunction]
    overlap_score: 0.88
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum, faecalibacterium-depleted]
    shared_ecological: [hypoxia, biofilm, ferroptosis]
    overlap_score: 0.58
  - condition: "[[cardiovascular-disease]]"
    shared_metals: [iron, copper]
    shared_taxa: [escherichia-coli, bifidobacterium-depleted, lactobacillus-depleted]
    shared_ecological: [LPS-translocation, TMAO-elevation]
    overlap_score: 0.40
  - condition: "[[multiple-sclerosis]]"
    shared_metals: [iron, nickel]
    shared_taxa: [faecalibacterium-prausnitzii-depleted, lachnospiraceae-depleted, roseburia-depleted, escherichia-coli]
    shared_ecological: [butyrate-collapse, barrier-dysfunction]
    overlap_score: 0.42
  - condition: "[[endometriosis]]"
    shared_metals: [iron, nickel, zinc]
    shared_taxa: [escherichia-coli, lachnospiraceae-depleted, ruminococcus-depleted]
    shared_ecological: [biofilm, hypoxia]
    overlap_score: 0.45

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 8, 9]
---

# Inflammatory Bowel Disease -- Microbiome Signature

## Overview

Inflammatory bowel disease (IBD) is an umbrella term for chronic relapsing-remitting inflammatory conditions of the gastrointestinal tract, principally [[crohns-disease]] (CD; transmural, any GI segment) and [[ulcerative-colitis]] (UC; mucosal, colon only). Approximately 6 million patients worldwide. IBD represents the most direct manifestation of gut dysbiosis, barrier failure, and immune dysregulation -- the same triad that metals produce -- making it a central disease in the metallomics-microbiome framework.

This signature captures the features shared across IBD subtypes. For subtype-specific details, see [[crohns-disease-signature]]. The IBD signature is among the best-characterized in the literature, with high confidence across all five layers.

## Metallomic Signature

The defining metallomic feature of IBD is iron compartmentalization: mucosal/intracellular iron excess (promoting oxidative stress and ferroptosis) alongside systemic/luminal iron depletion (causing anemia and starving commensals).

### Iron Dysregulation

Iron deficiency anemia affects 36-76% of IBD patients, driven by chronic blood loss, malabsorption, and inflammation-mediated iron sequestration ([[amerikanou-2022-ibd-biomarkers-trace-metals]], cross-sectional, n=153). [[hepcidin]] is elevated by IL-6 during IBD flares, blocking ferroportin-mediated iron export from enterocytes and macrophages -- trapping iron intracellularly while producing systemic deficiency.

The oral iron paradox: Supplementation worsens dysbiosis by providing growth substrate for siderophilic pathogens (Enterobacteriaceae, E. coli) while suppressing beneficial anaerobes ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]; [[li-2020-polyphenols-gut-microbiota-ibd-synergy]]).

### Zinc Depletion

Zinc is depleted via diarrheal losses, malabsorption, and increased urinary excretion during inflammation. Depletion impairs intestinal barrier integrity (ZO-1, claudin-1 expression), wound healing, and immune function. The ZIP8 A391T variant in Crohn's disease directly links zinc transport dysfunction to barrier integrity, microbiome composition, and inflammation ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]], cross-sectional).

### Selenium and Trace Element Depletion

Selenium is significantly lower in both CD and UC versus controls, impairing selenoprotein-dependent antioxidant defense (GPx, TrxR) ([[amerikanou-2022-ibd-biomarkers-trace-metals]]). Manganese is depleted in UC patients. Nickel is elevated in active CD versus inactive UC. Thallium is positively associated with UC disease activity -- a novel finding ([[amerikanou-2022-ibd-biomarkers-trace-metals]]).

### Copper Elevation

[[copper]] is positively associated with CRP in CD ([[amerikanou-2022-ibd-biomarkers-trace-metals]]), consistent with ceruloplasmin elevation during the acute-phase response. Copper elevation supports oxidative stress through Fenton-like chemistry while simultaneously being deployed by macrophages as an antimicrobial weapon.

## Environmental Exposures

- Oral iron supplementation: The most common iatrogenic metal exposure in IBD; feeds siderophilic pathobionts and deepens dysbiosis
- NSAIDs: Induce enteropathy and alter gut microbiome composition, compounding barrier dysfunction ([[syer-2015-nsaid-enteropathy-bacteria]]; [[mermans-2019-nsaids-gut-microbiome-chronic-inflammation]])
- Antibiotics: Usage within 1 month increases microbial dysbiosis index independent of genetic effects ([[knights-2014-host-genetics-microbiome-ibd]])
- Cadmium: Environmental exposure independently induces IBD-like dysbiosis patterns; ZIP8 A391T carriers show altered cadmium handling
- Dietary patterns: Mediterranean diet is protective against CD (HR: 0.42) but not UC ([[khalili-2024-mediterranean-diet-later-onset-crohns]])

## Nutritional Immunity Response

IBD deploys the most aggressive and best-characterized nutritional immunity response:

- [[calprotectin]] -- The gold-standard non-invasive IBD biomarker. S100A8/A9 protein released by activated neutrophils; sequesters zinc and manganese from pathogens. Fecal calprotectin correlates with endoscopic disease activity and is simultaneously a diagnostic marker and an active nutritional immunity agent ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]).
- [[hepcidin]] -- Iron-regulatory hormone elevated by IL-6; blocks ferroportin. The critical clinical distinction: elevated hepcidin = functional iron withholding (treat inflammation); low hepcidin + low ferritin = true deficiency (supplement cautiously, prefer IV iron).
- Fecal [[lactoferrin]] -- Iron-binding neutrophil protein elevated in active IBD; chelates iron from pathogens at mucosal surfaces.
- Lipocalin-2 -- Neutralizes bacterial enterobactin siderophores as a direct counter to E. coli iron piracy.
- Alpha-defensins -- Zinc-dependent Paneth cell antimicrobial peptides; impaired in NOD2-mutant CD.
- Glutathione (depleted) -- Loss of the primary cadmium and lead neutralization pathway.

## Taxonomic Analysis

IBD has the most characterized dysbiosis signature in the literature. The core pattern is consistent across subtypes: reduced diversity, SCFA producer depletion, and Proteobacteria bloom.

### Enriched Taxa

[[escherichia-coli]] and [[enterobacteriaceae]] -- The hallmark IBD bloom. AIEC in CD (75% prevalence in ileal mucosa vs 6% healthy ([[li-2020-polyphenols-gut-microbiota-ibd-synergy]])); Enterobacteriaceae expansion associated with NOD2 risk allele dosage ([[knights-2014-host-genetics-microbiome-ibd]]). These organisms thrive via siderophore-mediated iron acquisition in the inflamed, iron-rich mucosal environment.

[[fusobacterium-nucleatum]] -- Pro-inflammatory; adhesin-mediated mucosal colonization; NF-kB activation. Enriched in both CD and colorectal cancer ([[kang-2023-diagnosis-crohns-uc-microbiome]]).

[[ruminococcus-gnavus]] -- Mucin-degrading species that directly damages the mucosal barrier; enriched across IBD subtypes.

### Depleted Taxa

[[faecalibacterium-prausnitzii]] -- The most consistently depleted taxon across all IBD cohorts ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]; [[kang-2023-diagnosis-crohns-uc-microbiome]]). Primary butyrate producer; suppresses NF-kB and induces IL-10. Its depletion is the single most informative taxonomic biomarker for IBD.

[[roseburia]], [[blautia]], [[bifidobacterium]] -- Major SCFA producers consistently depleted in IBD. Their collective loss drives butyrate collapse and colonocyte starvation.

[[lachnospiraceae-family]] -- Mendelian randomization confirms causal protective role: Lachnospiraceae UCG001 protective for CD (OR: 0.81); Eubacterium ventriosum protective for UC (OR: 0.68) ([[liu-2022-mr-gut-microbial-genera-ibd-uc-cd]], computational prediction).

[[prevotella]] -- Depleted in IBD; associated with plant-rich dietary patterns that are generally protective.

Firmicutes/Bacteroidetes ratio is consistently altered in IBD, with reduced microbial diversity overall ([[sanchez-cruz-2024-ibd-cvd-integrative-review-gut-microbiome]]).

## Virulence Enzymes and Features

| Enzyme/Factor | Metal Dependency | Function | Source Taxa |
|--------------|-----------------|----------|------------|
| Siderophores (enterobactin, yersiniabactin, aerobactin) | Fe (target) | Iron piracy from host; outcompete lactoferrin and lipocalin-2 | AIEC, Enterobacteriaceae |
| BFT (fragilysin) | Zn | E-cadherin cleavage, tight junction disruption | B. fragilis (enterotoxigenic) |
| FimH adhesin | None | CEACAM6 binding, mucosal adhesion and invasion | AIEC |
| Outer membrane vesicles | None | LPS and virulence factor delivery, NF-kB activation | AIEC, gram-negative pathobionts |
| Mucinase | None | Direct mucus layer degradation | R. gnavus |

## Ecological State

The IBD ecosystem is defined by six interacting features:

1. Butyrate collapse -- Loss of F. prausnitzii, Roseburia, Blautia, and Lachnospiraceae causes colonocyte starvation. Colonocytes switch from butyrate oxidation to glycolysis, increasing epithelial oxygenation and paradoxically favoring facultative anaerobes like E. coli.

2. Barrier dysfunction -- Tight junction degradation (zinc-dependent claudins/occludins impaired by zinc depletion; E-cadherin cleaved by BFT toxin); reduced mucus layer thickness (mucinase activity from R. gnavus); impaired Paneth cell defensin secretion (NOD2 mutations + zinc depletion) ([[haag-2015-intestinal-microbiota-innate-immunity-crohns]]).

3. Ferroptosis -- Intracellular iron trapping during hepcidin elevation catalyzes lipid peroxidation through Fenton chemistry. GPX3 is causally protective ([[xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr]]).

4. Firmicutes/Bacteroidetes ratio shift -- Reduced Firmicutes (SCFA producers) and relative expansion of Bacteroidetes and Proteobacteria reshape metabolic output.

5. LPS translocation -- Bacterial translocation across the compromised epithelium triggers innate immune activation via NF-kB; systemic LPS absorption drives endothelial dysfunction and CVD risk ([[sanchez-cruz-2024-ibd-cvd-integrative-review-gut-microbiome]]).

6. TMAO elevation -- Dysbiosis-driven trimethylamine N-oxide production promotes foam cell formation, endothelial dysfunction, and platelet activation -- linking IBD to cardiovascular disease risk ([[sanchez-cruz-2024-ibd-cvd-integrative-review-gut-microbiome]], expert opinion).

## Associated Conditions

### [[crohns-disease]] (overlap score: 0.90) and [[ulcerative-colitis]] (overlap score: 0.88)
As IBD subtypes, CD and UC share the core signature but differ in important ways. CD shows more severe alpha diversity reduction ([[kang-2023-diagnosis-crohns-uc-microbiome]]). Mediterranean diet protects against CD but not UC. Mendelian randomization reveals disease-specific causal genera ([[liu-2022-mr-gut-microbial-genera-ibd-uc-cd]]). Metal profiles differ: thallium associates with UC activity while copper-CRP association is CD-specific ([[amerikanou-2022-ibd-biomarkers-trace-metals]]).

### [[colorectal-cancer]] (overlap score: 0.58)
IBD confers 2-3x increased CRC risk via the inflammation-dysplasia-carcinoma sequence. Shared metals: iron, zinc, cadmium. Shared taxa: E. coli, Fusobacterium nucleatum (enriched); F. prausnitzii (depleted). Shared ecology: ferroptosis, hypoxia, biofilm. NF-kB activation is the shared inflammatory driver.

### [[cardiovascular-disease]] (overlap score: 0.40)
IBD patients have 2x increased heart failure risk; 19% increase up to 20 years post-diagnosis ([[sanchez-cruz-2024-ibd-cvd-integrative-review-gut-microbiome]]). Shared metals: iron (ferroptosis), copper (oxidative stress). Shared ecology: LPS translocation drives endothelial dysfunction; TMAO elevation promotes atherosclerosis. Calprotectin and CRP predict both IBD activity and CVD risk.

### [[multiple-sclerosis]] (overlap score: 0.42)
Shared metals: iron, nickel. Shared taxa: F. prausnitzii (depleted), Lachnospiraceae (depleted), Roseburia (depleted), E. coli (enriched). Shared ecology: butyrate collapse, barrier dysfunction. Gut-brain axis disruption via SCFA depletion and systemic inflammation.

### [[endometriosis]] (overlap score: 0.45)
GI symptoms overlap significantly (90.3% of endometriosis patients have Ni ACM with IBS-like symptoms). Shared metals: iron, nickel, zinc. Shared taxa: E. coli (enriched), Lachnospiraceae (depleted), Ruminococcus (depleted). Shared ecology: biofilm, hypoxia. Nickel allergy may be a common driver in co-occurring cases.

## Open Questions

1. Subtype-specific metal signatures -- Do CD and UC require fundamentally different metal-targeted interventions, or is the shared iron-zinc framework sufficient?
2. CVD risk management -- Should IBD patients receive routine cardiovascular screening given the 2x heart failure risk? No IBD-specific CVD guidelines exist.
3. FMT standardization -- FMT shows stronger evidence in UC (25-35% remission) than CD. What donor characteristics optimize response, and does donor metal status matter?
4. NSAID-induced dysbiosis -- NSAIDs alter the gut microbiome and induce enteropathy ([[syer-2015-nsaid-enteropathy-bacteria]]; [[mermans-2019-nsaids-gut-microbiome-chronic-inflammation]]). Should NSAID avoidance be part of the IBD management framework?
5. Probiotic strain specificity -- VSL#3 shows benefit in UC but not CD ([[shen-2014-probiotics-remission-uc-cd-pouchitis-meta-analysis]]). Can siderophore-producing probiotics (E. coli Nissle 1917) be combined with SCFA-producing strains for two-sided ecological engineering?
6. Ferroptosis inhibition -- GPX3 is causally protective ([[xu-2023-oxidative-stress-dna-methylation-microbiota-crohns-mr]]). Can ferroptosis-targeted therapies complement standard IBD management?

## Karen's Brain Primitives Active

- Primitive 1: Metals as Selective Pressures -- Iron compartmentalization (mucosal excess, luminal depletion) selects for siderophilic pathobionts and against SCFA-producing commensals. ZIP8 A391T demonstrates genetic metal dyshomeostasis reshaping the microbiome ([[yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome]]).
- Primitive 2: Nutritional Immunity as Interpretive Constraint -- Hepcidin elevation is host defense, not deficiency. Calprotectin is active metal sequestration, not merely a biomarker. Low serum iron + high hepcidin = do NOT supplement orally. This reframes the entire anemia management paradigm in IBD.
- Primitive 4: Microbial Metal Dependencies as Achilles' Heels -- AIEC depends on siderophore-mediated iron acquisition. B. fragilis BFT requires zinc. Restrict the metal, disable the virulence. Lipocalin-2 neutralizes enterobactin as the host's direct counter.
- Primitive 5: Two-Sided Ecological Engineering -- Suppress pathobionts (siderophore competition, polyphenol iron chelation) AND restore missing SCFA producers (prebiotics, FMT, potentially F. prausnitzii as therapeutic probiotic).
- Primitive 8: Siderophore Competition and Iron Ecology -- The Enterobacteriaceae bloom is fundamentally a siderophore competition story. E. coli Nissle 1917 outcompetes via superior siderophore systems. Polyphenols chelate iron, reducing pathobiont access ([[li-2020-polyphenols-gut-microbiota-ibd-synergy]]).
- Primitive 9: Oxygen State as Ecological Determinant -- Butyrate collapse causes colonocyte oxygenation shift from butyrate-fueled fatty acid oxidation to glycolysis, increasing luminal oxygen and favoring facultative anaerobes (E. coli) over obligate anaerobes (F. prausnitzii). Restoring butyrate producers restores the anaerobic niche.
