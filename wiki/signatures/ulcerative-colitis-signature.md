---
title: "Ulcerative Colitis — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - amerikanou-2022-ibd-biomarkers-trace-metals
  - yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome
  - ghosh-2023-heavy-metals-gut-barrier-integrity
  - khan-2020-environmental-exposures-autoimmune-gut-microbiome
  - giambo-2021-toxic-metal-exposure-gut-microbiota-review
  - zhu-2024-toxic-essential-metals-gut-microbiota
source_count: 6
tags: [IBD, autoimmune, colonic, iron-paradox, SCFA-depletion, FMT, calprotectin]

metallomic_signature:
  elevated: [copper, iron-luminal, thallium]
  depleted: [iron-systemic, zinc, selenium, manganese]

taxonomic_signature:
  enriched:
    - taxon: "[[escherichia-coli]]"
      role: "Adherent-invasive E. coli (AIEC) — enriched in inflamed mucosa; high iron requirement fueled by mucosal bleeding"
    - taxon: "[[enterococcus]]"
      role: "Expands in the depleted ecosystem; opportunistic expansion when competitors are lost"
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Associated with colorectal neoplasia in longstanding UC; adhesin-mediated mucosal invasion"
    - taxon: "[[ruminococcus-gnavus]]"
      role: "Mucin degrader — enriched in UC flares; thins mucus layer exposing epithelium"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Most consistently depleted taxon in UC — produces butyrate and induces IL-10; hallmark of active disease"
    - taxon: "[[roseburia]]"
      role: "Major butyrate producer — lost in UC; butyrate is primary colonocyte fuel"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family — depleted in UC; donor Lachnospiraceae abundance predicts FMT response"
    - taxon: "[[bacteroides]]"
      role: "Reduced diversity within this genus in UC"

nutritional_immunity:
  elevated: [calprotectin, lactoferrin, hepcidin, ceruloplasmin, copper]
  depleted: [zinc, selenium, glutathione-peroxidase]

ecological_features: [iron-pathobiont-feedback-loop, butyrate-depletion, mucosal-ulceration, barrier-dysfunction, Th17-Treg-imbalance, mucin-degradation]

virulence_enzymes: [siderophores, iron-acquisition-systems, adhesins, mucin-degrading-glycosidases]

confidence:
  metallomic: moderate
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: moderate

associated_conditions:
  - condition: "[[crohns-disease]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, bacteroides-fragilis, faecalibacterium-depleted, roseburia-depleted, lachnospiraceae-depleted]
    shared_ecological: [barrier-dysfunction, SCFA-depletion, Th17-dominance]
    overlap_score: 0.72
  - condition: "[[colorectal-cancer]]"
    shared_metals: [iron, zinc]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum, faecalibacterium-depleted]
    shared_ecological: [iron-pathobiont-feedback, mucin-degradation]
    overlap_score: 0.52
  - condition: "[[ibs]]"
    shared_metals: [iron, nickel]
    shared_taxa: [faecalibacterium-depleted, escherichia-coli]
    shared_ecological: [barrier-dysfunction, SCFA-depletion]
    overlap_score: 0.35
  - condition: "[[multiple-sclerosis]]"
    shared_metals: [iron]
    shared_taxa: [faecalibacterium-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [SCFA-depletion, Th17-dominance]
    overlap_score: 0.40

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 8, 9]
---

# Ulcerative Colitis — Microbiome Signature

## Overview

Ulcerative colitis (UC) is a chronic inflammatory bowel disease characterized by continuous mucosal inflammation of the colon, extending proximally from the rectum. Unlike [[crohns-disease]], UC is limited to the colon, affects only the mucosa/submucosa, produces no skip lesions, and has no granulomas. The UC signature is dominated by the iron-pathobiont feedback loop -- a vicious cycle where mucosal bleeding provides luminal iron that feeds iron-dependent pathobionts, which cause more inflammation and more bleeding. The calprotectin story adds a second metal dimension: this zinc/manganese-sequestering protein is dramatically elevated in active UC (>250 mcg/g), serving as both a diagnostic biomarker and an active participant in nutritional immunity by restricting metal access to pathogens in the colonic lumen.

## Metallomic Signature

### Iron -- The Iron Paradox

Iron deficiency is the dominant metal abnormality in UC, driven by chronic mucosal bleeding:

- Prevalence: 60-80% of active UC patients have iron deficiency; 30-40% have frank anemia
- Mechanism: Chronic blood loss from ulcerated mucosa + hepcidin elevation from inflammation produces functional iron deficiency even with adequate stores
- The iron paradox: Systemic iron is depleted (blood loss), but luminal iron is elevated (mucosal bleeding). Oral iron supplementation worsens UC by feeding iron-dependent pathobionts (E. coli, Klebsiella), increasing oxidative stress in inflamed mucosa, and shifting the microbiome toward dysbiosis
- Ferritin is unreliable as an iron marker in UC (acute phase reactant; elevated by inflammation)
- Iron was negatively associated with myeloperoxidase (MPO) in UC patients (Beta: -1.270x10^3, p=0.044) [[amerikanou-2022-ibd-biomarkers-trace-metals]]

### Copper -- Elevated in Active Disease

- Serum copper and ceruloplasmin rise during UC flares (acute phase response)
- Cu/Zn ratio is elevated and correlates with disease activity
- Copper positively associated with CRP in CD patients [[amerikanou-2022-ibd-biomarkers-trace-metals]]; similar pattern likely in UC flares
- Ceruloplasmin's ferroxidase activity links copper to iron handling

### Zinc and Selenium -- Depleted

- Serum zinc consistently low in active UC; deficiency impairs mucosal healing, reduces tight junction integrity, and weakens defensin production
- Selenium deficiency common and correlates with disease severity; required for glutathione peroxidase (antioxidant defense in inflamed mucosa) and Treg function
- Manganese also lower in UC (1.4) vs. healthy controls (2.4, p=0.041) [[amerikanou-2022-ibd-biomarkers-trace-metals]]

### Thallium -- Novel Finding

Thallium was positively associated with disease activity (PMS) in UC (Beta: 3.899, p<0.01) [[amerikanou-2022-ibd-biomarkers-trace-metals]]. This is a novel finding requiring replication.

Confidence: moderate -- Iron paradox well-documented across multiple studies; Cu/Zn ratio changes from cross-sectional data; Mn, Se depletion from one Greek cross-sectional study (n=39 UC); thallium finding from single study.

## Environmental Exposures

- Dietary iron intake and oral iron supplementation directly feed the iron-pathobiont feedback loop in active UC
- Heavy metals (Cd, Pb, As, Hg) disrupt gut barrier integrity through downregulation of tight junction proteins (ZO-1, claudin-1, occludin) [[ghosh-2023-heavy-metals-gut-barrier-integrity]], compounding the mucosal barrier failure already present in UC
- Lead reduces colonic MUC2 and tight junction proteins; Pb-intolerant gut microbes (A. muciniphila, F. prausnitzii) are further depleted [[ghosh-2023-heavy-metals-gut-barrier-integrity]]
- Cadmium reduces ZO-1, ZO-2, JAM-A, and decreases Akkermansia muciniphila at low doses [[ghosh-2023-heavy-metals-gut-barrier-integrity]]
- Environmental metal exposure may be a disease modifier rather than a primary cause in UC, accelerating the barrier dysfunction and dysbiosis cycle

## Nutritional Immunity Response

The UC nutritional immunity profile is among the most active in this wiki:

- Calprotectin -- Very high (>250 mcg/g in active disease). This S100A8/S100A9 heterodimer sequesters zinc and manganese from the colonic lumen, directly restricting metal access to pathobionts. It is the primary non-invasive biomarker for UC disease activity and a functional participant in nutritional immunity.
- Lactoferrin -- Elevated in UC; sequesters iron in the colonic lumen. Together with calprotectin, it creates a metal-restricted luminal environment.
- Hepcidin -- Elevated by inflammation; reduces iron absorption and drives iron sequestration in macrophages. This is the host attempting to restrict iron from pathogens (nutritional immunity) but it creates systemic anemia as a side effect.
- Ceruloplasmin -- Elevated as acute phase reactant; ferroxidase activity links to iron mobilization.
- Selenium-dependent defenses -- Glutathione peroxidase activity likely impaired (Se deficiency common), reducing antioxidant defense in the inflamed mucosa.

Confidence: moderate -- Calprotectin data is extensive and well-validated; hepcidin elevation inferred from iron studies rather than measured directly in all UC cohorts; lactoferrin measured in some studies but not systematically across the metal-sequestration framework.

## Taxonomic Analysis

### Enriched Taxa

- [[escherichia-coli]] -- Especially adherent-invasive E. coli (AIEC). Enriched in inflamed mucosa; high iron requirement fuels expansion when mucosal bleeding provides luminal iron. AIEC adheres to inflamed epithelium and invades epithelial cells.
- [[enterococcus]] -- Expands in the depleted ecosystem as competitors are lost. Opportunistic colonizer of the disrupted niche.
- [[fusobacterium-nucleatum]] -- Associated with colorectal neoplasia in longstanding UC. Adhesin-mediated mucosal invasion; may drive the UC-to-cancer progression.
- [[ruminococcus-gnavus]] -- Mucin degrader enriched during UC flares. Degrades the protective mucus layer, directly exposing epithelium to luminal bacteria and metals.

### Depleted Taxa

- [[faecalibacterium-prausnitzii]] -- The most consistently depleted taxon in UC. Produces butyrate and has direct anti-inflammatory effects through IL-10 induction. Its absence is a hallmark of active disease, and its return correlates with remission.
- [[roseburia]] -- Another major butyrate producer lost in UC. Donor Roseburia abundance predicts FMT response.
- [[lachnospiraceae]] family -- SCFA producers depleted in UC. Donor Lachnospiraceae and Ruminococcaceae abundance predict FMT success, highlighting the critical role of this family.
- [[bacteroides]] -- Reduced diversity within this genus, though specific species may be differentially affected.
- Overall alpha diversity reduced, particularly during flares.

Confidence: high -- Multiple independent studies (case-control, cohort, FMT trials, meta-analyses) consistently confirm the UC dysbiosis pattern. F. prausnitzii depletion is one of the most replicated findings in microbiome research.

## Virulence Enzymes and Features

- Siderophores and iron acquisition systems -- AIEC and other Enterobacteriaceae express sophisticated iron-scavenging systems (enterobactin, aerobactin, yersiniabactin) that enable them to compete for the abundant luminal iron from mucosal bleeding. These siderophores outcompete host lactoferrin for iron binding.
- Adhesins -- AIEC expresses type 1 fimbriae (FimH) and other adhesins that mediate binding to inflamed epithelium. CEACAM6, the host receptor for FimH, is upregulated on inflamed colonic epithelium, creating a positive feedback loop.
- Mucin-degrading glycosidases -- R. gnavus produces glycosidases that degrade colonic mucin, thinning the protective mucus layer and exposing epithelial cells to luminal bacteria and metals.

Confidence: moderate -- Siderophore systems in Enterobacteriaceae well-characterized in microbiological literature; AIEC adhesion mechanisms documented in IBD-specific studies; mucin degradation by R. gnavus established. However, these have not been systematically mapped as metal-dependent virulence factors in the WikiBiome framework.

## Ecological State

The UC gut ecosystem is defined by a self-reinforcing pathological cycle:

1. The iron-pathobiont feedback loop -- The signature ecological feature of UC:
   - Mucosal ulceration causes bleeding, releasing iron into the colonic lumen
   - Luminal iron feeds iron-dependent E. coli and Enterobacteriaceae (via siderophores)
   - Pathobiont expansion causes more inflammation and tissue damage
   - More bleeding provides more luminal iron; the cycle accelerates
   - Simultaneously, systemic iron deficiency worsens (blood loss outpaces absorption)
   This explains why oral iron is contraindicated in active UC.

2. Butyrate crisis -- F. prausnitzii and Roseburia depletion profoundly reduces butyrate production. Butyrate is the primary fuel for colonocytes -- its depletion creates an energy crisis in the epithelium, weakening barrier function, reducing tight junction integrity, and increasing permeability. Reduced SCFA also removes the primary driver of Treg differentiation in the colonic mucosa.

3. Mucin layer degradation -- R. gnavus expansion during flares actively degrades the protective mucus barrier. Combined with reduced MUC2 production from epithelial damage, this exposes the epithelium to luminal bacteria, metals, and toxins.

4. Barrier dysfunction cycle -- Reduced butyrate (colonocyte fuel) + mucin degradation + tight junction disruption (Zn depletion) + metal-induced permeability changes = progressive barrier failure. Increased translocation drives more inflammation, completing the vicious cycle.

5. Bile acid disruption -- Secondary bile acid production is reduced due to loss of bacterial deconjugation capacity. Secondary bile acids normally have anti-inflammatory properties and regulate epithelial homeostasis.

6. Calprotectin as active defense -- The massive calprotectin elevation in UC is not merely a biomarker -- it represents the host's attempt to starve luminal pathogens of zinc and manganese. This nutritional immunity response is partially effective but cannot overcome the iron-pathobiont loop when bleeding persists.

Confidence: high -- The iron-pathobiont feedback loop is supported by converging evidence from microbiology, clinical studies, and FMT trials. Butyrate depletion is among the most replicated findings in IBD research. Barrier dysfunction documented extensively in histological, permeability, and molecular studies.

## Associated Conditions

- [[crohns-disease]] (overlap score: 0.72) -- Highest overlap. Both are IBD subtypes sharing F. prausnitzii depletion, E. coli enrichment, SCFA crisis, and Th17 dominance. Differences: UC is mucosal-limited and colonic; CD is transmural and pan-enteric. UC has the iron-bleeding loop; CD has the ZIP8 genetic metal-handling dimension. FMT evidence is stronger in UC.
- [[colorectal-cancer]] (overlap score: 0.52) -- Longstanding UC increases CRC risk. Shared E. coli and Fusobacterium enrichment, F. prausnitzii depletion, and iron-pathobiont dynamics. Fusobacterium nucleatum may drive the UC-to-CRC transition.
- [[multiple-sclerosis]] (overlap score: 0.40) -- Shared F. prausnitzii and Lachnospiraceae depletion, SCFA deficit, and Th17 dominance. Both have bidirectional epidemiological association.
- [[ibs]] (overlap score: 0.35) -- Key differential. Shared barrier dysfunction and F. prausnitzii depletion, but IBS lacks the mucosal ulceration, bleeding, and calprotectin elevation that define UC.

## Open Questions

1. Iron-restricted pathobiont control -- Can targeted iron restriction in the colonic lumen (e.g., luminal iron chelation) break the iron-pathobiont feedback loop without worsening systemic anemia?
2. FMT optimization -- Donor microbiome diversity predicts response. Can donor selection be optimized based on metallomic profiles (metal-binding, SCFA-producing capacity)?
3. ZIP8 relevance -- The ZIP8 A391T variant (rs13107325) alters colonic metal handling in Crohn's. Does this variant also modify UC susceptibility or disease course?
4. Calprotectin as therapeutic -- Calprotectin sequesters Zn/Mn from pathogens. Can exogenous calprotectin or zinc-restriction strategies be used therapeutically?
5. Thallium -- The novel positive association with UC disease activity [[amerikanou-2022-ibd-biomarkers-trace-metals]] needs replication. What is the mechanism?
6. Fusobacterium-CRC transition -- At what point does F. nucleatum expansion in longstanding UC drive carcinogenesis, and can targeted anti-Fusobacterium interventions reduce CRC risk?
7. Metal profile during flare vs. remission -- Comprehensive metallomic profiling across disease states would clarify whether metal changes drive flares or result from them.

## Karen's Brain Primitives Active

- Primitive 1: Metals as Selective Pressures -- Luminal iron from mucosal bleeding selects for iron-dependent Enterobacteriaceae while disadvantaging iron-sensitive commensals. Zinc and manganese depletion further disrupts the microbial ecology.
- Primitive 2: Nutritional Immunity as Interpretive Constraint -- Hepcidin elevation in UC represents host defense (iron sequestration from pathogens), not true deficiency. Oral iron supplementation misreads this signal and feeds the very pathogens the host is trying to starve. Calprotectin is an active metal-sequestering defense, not just a biomarker.
- Primitive 4: Microbial Metal Dependencies as Achilles' Heels -- AIEC and Enterobacteriaceae depend on siderophore-mediated iron acquisition. Restricting luminal iron (IV iron instead of oral; lactoferrin supplementation) targets this dependency.
- Primitive 5: Two-Sided Ecological Engineering -- FMT achieves clinical remission in 25-35% of UC patients by simultaneously restoring F. prausnitzii and Roseburia (butyrate production) and suppressing E. coli and Enterococcus expansion. E. coli Nissle 1917 represents a competitive exclusion strategy.
- Primitive 8: Siderophore Competition and Iron Ecology -- The core of UC pathogenesis. Pathobiont siderophores outcompete host lactoferrin for luminal iron. Competitive exclusion via superior iron acquisition (e.g., E. coli Nissle 1917 competing with pathogenic E. coli) is a direct application of this primitive.
- Primitive 9: Oxygen State as Ecological Determinant -- Mucosal inflammation increases oxygen diffusion into the normally anaerobic colonic lumen, creating conditions that favor facultative anaerobes (E. coli, Enterococcus) over obligate anaerobes (F. prausnitzii, Roseburia). Restoring anaerobic conditions would favor the return of butyrate producers.
