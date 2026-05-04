---
title: "Colorectal Cancer — Microbiome Signature"
type: signature
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources:
  - zhang-2022-metallomics-cancer-review
  - sugimoto-2024-zinc-deficiency-cancer-review
  - shin-2023-chromium-toxicogenomics
  - marchesi-2011-towards-human-crc-microbiome
  - hanus-2021-immune-microbiota-metabolites-crc-triad
  - gao-2015-microbiota-disbiosis-colorectal-cancer
  - metz-2019-drug-discovery-bft-inhibition
  - ajouz-2014-secondary-bile-acids-colon-cancer
  - farhana-2016-bile-acid-colon-cancer-stem-cells
  - carretta-2021-scfas-receptors-gut-inflammation-colon-cancer
  - tang-2011-gpr43-short-chain-fatty-acids-colon-cancer
  - ho-2024-colorectal-cancer-virome-alterations-persistence-surgery
  - li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort
  - huang-2024-gut-fungi-ibd-colorectal-cancer
  - vipperla-2016-diet-microbiota-dysbiosis-colorectal-cancer
  - donovan-2017-mediterranean-diet-crc-prevention
  - appunni-2021-dietary-factors-gut-microbiome-crc
  - mcleod-2023-bridge-crc-mediterranean-diet-trial
source_count: 18
tags: [cancer, colorectal-cancer, gastrointestinal, microbiome, mycobiome, virome]

metallomic_signature:
  elevated: [copper, iron, nickel, cadmium, arsenic, chromium]
  depleted: [zinc, selenium, manganese]

taxonomic_signature:
  enriched:
    - taxon: "[[fusobacterium-nucleatum]]"
      role: "Primary pathobiont — FadA adhesin disrupts E-cadherin/beta-catenin, Fap2 inhibits NK cells via TIGIT, LPS-TLR4 drives NF-kB and chemoresistance; progressively increases through adenoma-carcinoma sequence"
    - taxon: "[[bacteroides-fragilis]]"
      role: "ETBF BFT zinc-metalloprotease cleaves E-cadherin, activates Wnt/beta-catenin and NF-kB; found in mucosa of >80% of CRC patients"
    - taxon: "[[escherichia-coli]]"
      role: "pks+ strains produce colibactin genotoxin causing double-strand DNA breaks and single-base substitution mutations"
    - taxon: "[[peptostreptococcus-anaerobius]]"
      role: "Enriched in tumor microenvironment; implicated in carcinogenesis"
    - taxon: "[[enterococcus-faecalis]]"
      role: "Produces extracellular superoxide and hydroxyl radicals causing oxidative DNA damage"
    - taxon: "[[streptococcus-gallolyticus]]"
      role: "Classic CRC-associated bacterium; bloodstream presence signals colonic neoplasia"
    - taxon: "[[candida-albicans]]"
      role: "Significantly increased in CRC; GelE-mediated E-cadherin degradation; inhibits NLRP3/NLRP6 inflammasomes"
    - taxon: "[[saccharomyces-cerevisiae]]"
      role: "Fungal abundance increases in CRC vs healthy controls; part of mycobiome dysbiosis"
  depleted:
    - taxon: "[[faecalibacterium-prausnitzii]]"
      role: "Major butyrate producer — loss reduces HDAC inhibition of tumor cells and anti-inflammatory IL-10 signaling"
    - taxon: "[[roseburia]]"
      role: "SCFA producer — depletion reduces colonic butyrate availability and GPR43/GPR109A tumor suppressor activation"
    - taxon: "[[bifidobacterium]]"
      role: "Depleted in CRC; loss compromises colonization resistance, IgA responses, and tight junction integrity"
    - taxon: "[[lactobacillus]]"
      role: "Depleted in CRC; loss of lactic acid production and competitive exclusion of pathogens"
    - taxon: "[[lachnospiraceae]]"
      role: "SCFA-producing family — lost competitive advantage in iron-rich, dysbiotic environment"
    - taxon: "[[ruminococcus]]"
      role: "Fiber-fermenting SCFA producer depleted in CRC"

nutritional_immunity:
  elevated: [calprotectin, hepcidin, lipocalin-2]
  depleted: [selenium-dependent-glutathione-peroxidase, glutathione]

ecological_features: [hypoxia, biofilm, secondary-bile-acid-excess, SCFA-depletion, Warburg-effect, cross-kingdom-dysbiosis, virome-network-disruption]

virulence_enzymes: [BFT-zinc-metalloprotease, colibactin-genotoxin, FadA-adhesin, Fap2-lectin, beta-glucuronidase, siderophores, NAD(P)H-oxidase]

confidence:
  metallomic: high
  taxonomic: high
  nutritional_immunity: moderate
  ecological: high
  virulence_enzymes: high

associated_conditions:
  - condition: "[[crohns-disease]]"
    shared_metals: [iron, zinc, cadmium]
    shared_taxa: [escherichia-coli, fusobacterium-nucleatum, bacteroides-fragilis, faecalibacterium-prausnitzii-depleted, lachnospiraceae-depleted]
    shared_ecological: [hypoxia, biofilm, SCFA-depletion]
    overlap_score: 0.72
  - condition: "[[breast-cancer]]"
    shared_metals: [copper, iron, zinc, cadmium, selenium]
    shared_taxa: [fusobacterium-nucleatum, bacteroides-fragilis, bifidobacterium-depleted]
    shared_ecological: [beta-glucuronidase-activity, SCFA-depletion]
    overlap_score: 0.48
  - condition: "[[pancreatic-cancer]]"
    shared_metals: [iron, cadmium, copper]
    shared_taxa: [fusobacterium-nucleatum, escherichia-coli]
    shared_ecological: [biofilm]
    overlap_score: 0.35
  - condition: "[[obesity]]"
    shared_metals: [iron]
    shared_taxa: [faecalibacterium-prausnitzii-depleted, lachnospiraceae-depleted, roseburia-depleted]
    shared_ecological: [SCFA-depletion, secondary-bile-acid-excess]
    overlap_score: 0.40

cureva_status: partial
validated_interventions: []
stops: []
karen_brain_primitives: [1, 2, 4, 5, 6, 8, 9]
---

# Colorectal Cancer — Microbiome Signature

## Overview

Colorectal cancer (CRC) is the third most common cancer worldwide and the second leading cause of cancer death. Over 90% of cases are sporadic, shaped by the interplay of dietary habits, gut microbiome composition, and environmental metal exposures. The CRC signature is among the most thoroughly characterized disease signatures in WikiBiome, with high confidence across all five layers. The metallomic profile -- copper and iron elevation with zinc and selenium depletion -- creates a selective environment that enriches metal-dependent pathobionts (*Fusobacterium nucleatum*, ETBF, pks+ *E. coli*) while depleting SCFA-producing commensals. The resulting loss of butyrate-mediated tumor suppression, combined with secondary bile acid carcinogenesis and cross-kingdom mycobiome dysbiosis, drives the adenoma-carcinoma sequence.

## Metallomic Signature

Confidence: high -- supported by multiple meta-analyses and large cohort studies across global populations.

The CRC metallomic profile from [[zhang-2022-metallomics-cancer-review]] and supporting literature reveals a consistent pattern:

| Metal | Direction | Evidence |
|-------|-----------|----------|
| [[copper]] | Elevated (serum/plasma) | Cu/Zn ratio first proposed as CRC marker; elevated across multiple study populations [[zhang-2022-metallomics-cancer-review]] |
| [[iron]] | Elevated (tissue) | Heme iron from red meat drives N-nitroso compound formation and KRAS mutations; ferroptosis pathway dysregulation [[ajouz-2014-secondary-bile-acids-colon-cancer]] |
| [[nickel]] | Elevated (inconsistent) | Increased in some studies; IARC Group 1 carcinogen [[zhang-2022-metallomics-cancer-review]] |
| [[cadmium]] | Exposure risk | IARC Group 1 carcinogen; disrupts DNA repair and epigenetic modification [[zhang-2022-metallomics-cancer-review]] |
| [[arsenic]] | Exposure risk | IARC Group 1 carcinogen; environmental contamination source |
| [[chromium]] | Exposure risk (Cr VI) | Ingestion route associated with CRC; hub genes VEGFA, EGFR, JUN, TLR2 [[shin-2023-chromium-toxicogenomics]] |
| [[zinc]] | Depleted | European study (n=58,221) confirmed significant association; Zn deficiency impairs Cu/Zn-SOD defense [[sugimoto-2024-zinc-deficiency-cancer-review]] |
| [[selenium]] | Depleted | Impairs glutathione peroxidase antioxidant defense [[zhang-2022-metallomics-cancer-review]] |
| [[manganese]] | Depleted | Decreased across cancer types [[zhang-2022-metallomics-cancer-review]] |

The Cu/Zn ratio captures the two most consistent changes in a single metric. Elevated Cu displaces Zn from metallothionein due to higher binding affinity, simultaneously impairing Cu/Zn-SOD antioxidant defense and creating a pro-oxidant environment favorable to carcinogenesis.

## Environmental Exposures

Dietary and environmental sources drive the metallomic burden:

- Heme iron from red meat generates N-nitroso compounds causing KRAS G>A transitions at codons 12/13 and oxidative DNA damage [[ajouz-2014-secondary-bile-acids-colon-cancer]]
- High-fat Western diet increases secondary bile acid production (DCA, LCA) via microbial 7-alpha dehydroxylation; Western diet populations bear up to 60% of the global CRC burden [[ajouz-2014-secondary-bile-acids-colon-cancer]]
- Cr(VI) ingestion causes DNA damage and activates metastasis-related hub genes [[shin-2023-chromium-toxicogenomics]]
- Cd and As converge on pathways of oxidative DNA damage, epigenetic modification, and DNA repair disruption
- Geographic contrast: African American vs rural African CRC rates of 65 vs <5 per 100,000 demonstrate the dominance of environmental/dietary factors [[vipperla-2016-diet-microbiota-dysbiosis-colorectal-cancer]]

## Nutritional Immunity Response

Confidence: moderate -- calprotectin is well-established as a CRC biomarker, but the full nutritional immunity profile in CRC has fewer dedicated studies than in IBD.

- [[calprotectin]] is elevated in CRC and serves as a screening biomarker; its metal-chelating function (Zn, Mn) restricts metal availability to pathogens at the mucosal surface
- [[hepcidin]] elevation drives functional iron sequestration; however, heme iron from dietary sources bypasses this defense
- [[lipocalin-2]] sequesters bacterial siderophores, limiting iron acquisition by Enterobacteriaceae
- Selenium-dependent glutathione peroxidase (GPx) is depleted due to selenium deficiency, removing a key defense against lipid peroxidation and ferroptotic cell death
- [[glutathione]] depletion reflects the cumulative oxidative burden from metal exposure, secondary bile acids, and microbial genotoxins

## Taxonomic Analysis

Confidence: high -- *F. nucleatum* enrichment and SCFA producer depletion are the most consistently replicated microbial findings in CRC across global cohorts.

### Enriched Taxa

[[fusobacterium-nucleatum]] is the most consistently enriched bacterium in CRC [[marchesi-2011-towards-human-crc-microbiome]] [[gao-2015-microbiota-disbiosis-colorectal-cancer]]. Its pro-tumorigenic mechanisms include FadA adhesin (E-cadherin disruption, beta-catenin/Wnt activation), Fap2 protein (NK cell inhibition via TIGIT receptor, Gal-GalNAc binding for selective tumor colonization), and LPS-TLR4 interaction (NF-kB, autophagy, 5-FU chemoresistance) [[hanus-2021-immune-microbiota-metabolites-crc-triad]]. Abundance increases progressively through the adenoma-carcinoma sequence, validated by qPCR in cohorts exceeding 400 patients [[li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort]].

Enterotoxigenic [[bacteroides-fragilis]] (ETBF) is found in the mucosa of >80% of CRC patients [[metz-2019-drug-discovery-bft-inhibition]]. The BFT metalloprotease toxin (Zn-dependent, three isoforms with >93% identity) cleaves E-cadherin, disrupting cell-cell junctions and activating Wnt/beta-catenin and NF-kB pathways. Notably, chenodeoxycholic acid (CDCA) is a natural BFT inhibitor, reducing IL-8 secretion by 67-69% at physiological concentrations [[metz-2019-drug-discovery-bft-inhibition]].

pks+ [[escherichia-coli]] produces colibactin genotoxin causing double-strand DNA breaks and single-base substitution, deletion, and insertion mutations [[hanus-2021-immune-microbiota-metabolites-crc-triad]].

[[enterococcus-faecalis]], [[peptostreptococcus-anaerobius]], and [[streptococcus-gallolyticus]] are additionally enriched, contributing superoxide/radical production, tumor microenvironment colonization, and a classic clinical CRC association, respectively [[hanus-2021-immune-microbiota-metabolites-crc-triad]] [[gao-2015-microbiota-disbiosis-colorectal-cancer]].

### Mycobiome Dysbiosis

[[candida-albicans]] and [[saccharomyces-cerevisiae]] show significantly increasing abundance in CRC vs healthy controls (qPCR validated, n=402). The Basidiomycota/Ascomycota ratio increases with disease progression. Bacterial-fungal antagonistic interactions (R = -0.17 to -0.32) are disrupted, suggesting cross-kingdom balance loss contributes to CRC [[li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort]] [[huang-2024-gut-fungi-ibd-colorectal-cancer]].

### Depleted Taxa

The core SCFA-producing community is consistently depleted: [[faecalibacterium-prausnitzii]], [[roseburia]], [[bifidobacterium]], [[lactobacillus]], [[lachnospiraceae]], and [[ruminococcus]] [[gao-2015-microbiota-disbiosis-colorectal-cancer]] [[hanus-2021-immune-microbiota-metabolites-crc-triad]]. Shannon diversity is significantly lower in CRC (3.43 vs 4.01, p < 0.001) [[gao-2015-microbiota-disbiosis-colorectal-cancer]].

## Virulence Enzymes and Features

Confidence: high -- multiple independent studies characterize BFT, colibactin, FadA, and Fap2 at the molecular level.

| Enzyme/Factor | Organism | Metal Cofactor | Function |
|---------------|----------|---------------|----------|
| BFT metalloprotease | *B. fragilis* | Zinc (HIS348, HIS352, HIS358) | Cleaves E-cadherin; activates Wnt/beta-catenin and NF-kB [[metz-2019-drug-discovery-bft-inhibition]] |
| Colibactin | pks+ *E. coli* | Iron-dependent synthesis | Double-strand DNA breaks; single-base substitutions [[hanus-2021-immune-microbiota-metabolites-crc-triad]] |
| FadA adhesin | *F. nucleatum* | None identified | E-cadherin disruption; beta-catenin/Wnt activation [[hanus-2021-immune-microbiota-metabolites-crc-triad]] |
| Fap2 lectin | *F. nucleatum* | None identified | TIGIT-mediated NK cell inhibition; Gal-GalNAc tumor binding [[hanus-2021-immune-microbiota-metabolites-crc-triad]] |
| Beta-glucuronidase | Multiple taxa | None | Deconjugation of bile acids and estrogens; contributes to secondary bile acid pool |
| Siderophores | Enterobacteriaceae | Iron-acquiring | Iron piracy from host; competitive advantage in iron-rich tumor environment |
| NAD(P)H oxidase | Host cells, activated by bile acids | Iron | Generates ROS; mitochondrial membrane disruption [[ajouz-2014-secondary-bile-acids-colon-cancer]] |

## Ecological State

Confidence: high -- the CRC ecological landscape is characterized by multiple well-documented features.

- SCFA depletion: Loss of butyrate-producing bacteria removes the primary protective metabolite. In normal colonocytes, butyrate enters the Krebs cycle as energy; in tumor cells (Warburg effect), it accumulates as an HDAC inhibitor, upregulating p21/p27 tumor suppressors [[hanus-2021-immune-microbiota-metabolites-crc-triad]]. GPR43/FFAR2 is lost in ~80% of colorectal adenocarcinomas through promoter hypermethylation [[tang-2011-gpr43-short-chain-fatty-acids-colon-cancer]].
- Secondary bile acid excess: DCA and LCA converted by bacterial 7-alpha dehydroxylation generate ROS, activate NF-kB, induce cancer stem cell markers (CD44, CD166, ALDHA1), promote EMT, and drive drug resistance [[ajouz-2014-secondary-bile-acids-colon-cancer]] [[farhana-2016-bile-acid-colon-cancer-stem-cells]].
- Cross-kingdom dysbiosis: Bacterial-fungal antagonistic interactions are disrupted; *C. albicans* can inhibit NLRP3/NLRP6 inflammasomes while fungal beta-glucans from other species may be protective [[li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort]].
- Virome network disruption: CRC fecal virome shows increased network connectivity compared to non-cancer individuals; bacteriophage-mediated selective lysis alters bacterial communities; virome dysbiosis partially persists after surgery [[ho-2024-colorectal-cancer-virome-alterations-persistence-surgery]].
- Hypoxia: Tumor microenvironment hypoxia favors anaerobic pathobionts (*F. nucleatum*, *Peptostreptococcus*) and promotes HIF-dependent angiogenesis.
- Biofilm: Mucosal biofilm formation by ETBF and *F. nucleatum* creates protected niches resistant to host immune clearance and antibiotic penetration.

## Associated Conditions

| Condition | Shared Metals | Shared Taxa | Shared Ecology | Overlap |
|-----------|--------------|-------------|----------------|---------|
| [[crohns-disease]] | Fe, Zn, Cd | *E. coli*, *F. nucleatum*, *B. fragilis*, *F. prausnitzii* (depleted), Lachnospiraceae (depleted) | Hypoxia, biofilm, SCFA depletion | 0.72 |
| [[breast-cancer]] | Cu, Fe, Zn, Cd, Se | *F. nucleatum*, *B. fragilis*, Bifidobacterium (depleted) | Beta-glucuronidase activity, SCFA depletion | 0.48 |
| [[obesity]] | Fe | *F. prausnitzii* (depleted), Lachnospiraceae (depleted), *Roseburia* (depleted) | SCFA depletion, secondary bile acid excess | 0.40 |
| [[pancreatic-cancer]] | Fe, Cd, Cu | *F. nucleatum*, *E. coli* | Biofilm | 0.35 |

The strongest overlap is with [[crohns-disease]], where chronic colonic inflammation drives the inflammation-dysplasia-carcinoma sequence. Crohn's colitis confers 2-3x increased CRC risk, and the same metal-driven dysbiosis cascade (iron excess, zinc depletion, SCFA producer loss, pathobiont bloom) underlies both conditions.

## Open Questions

1. Virome causality: Does the CRC virome actively drive carcinogenesis via bacteriophage-mediated selection of pathobionts, or is it a consequence of the altered bacterial landscape?
2. BFT isoform significance: BFT-1, BFT-2, and BFT-3 have >93% sequence identity but differential CDCA sensitivity. Do individual isoform distributions explain differential CRC susceptibility?
3. Iron form specificity: Does the carcinogenic effect of iron depend entirely on the heme form (dietary), or does inorganic iron dysregulation also contribute through pathobiont enrichment?
4. Mycobiome therapeutic targeting: Can restoring fungal beta-glucan-producing species (which upregulate tight junction proteins) counteract *C. albicans*-mediated inflammasome inhibition?
5. GPR43 restoration: Can FFAR2/GPR43 demethylation be achieved therapeutically to restore butyrate sensitivity in early adenomas?
6. Cross-kingdom timing: At what point in the adenoma-carcinoma sequence does bacterial-fungal antagonistic balance break down?

## Karen's Brain Primitives Active

- Primitive 1 — Metals as Selective Pressures: Iron excess and zinc depletion select for metal-dependent pathobionts (*B. fragilis* BFT requires zinc; Enterobacteriaceae require iron) while disadvantaging SCFA-producing commensals.
- Primitive 2 — Nutritional Immunity as Interpretive Constraint: Calprotectin and hepcidin elevation represent host attempts to restrict metal access; dietary heme iron bypasses these defenses.
- Primitive 4 — Microbial Metal Dependencies as Achilles' Heels: BFT is a zinc metalloprotease; restricting zinc at the mucosal interface could disable this key virulence factor. CDCA inhibits BFT through direct interaction with the zinc-containing catalytic domain [[metz-2019-drug-discovery-bft-inhibition]].
- Primitive 5 — Two-Sided Ecological Engineering: CRC intervention must simultaneously suppress pathobionts (ETBF, *F. nucleatum*, pks+ *E. coli*) and restore SCFA-producing communities (butyrate, propionate production via fiber fermentation).
- Primitive 6 — Interkingdom Relationships and Functional Shielding: Cross-kingdom bacterial-fungal antagonism is disrupted; *C. albicans* expansion may protect bacterial pathobionts via biofilm co-habitation and inflammasome inhibition.
- Primitive 8 — Siderophore Competition and Iron Ecology: Enterobacteriaceae siderophore production enables iron piracy in the tumor microenvironment; competitive exclusion via superior iron acquisition determines community structure.
- Primitive 9 — Oxygen State as Ecological Determinant: Tumor hypoxia favors anaerobic pathobionts (*F. nucleatum*, *Peptostreptococcus*); the Warburg effect shifts butyrate from energy substrate to HDAC inhibitor.
