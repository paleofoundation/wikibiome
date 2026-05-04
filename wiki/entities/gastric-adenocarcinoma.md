---
title: Gastric Adenocarcinoma
type: entity
subtype: disease
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [maier-2019-nickel-microbial-pathogenesis, catala-valentin-2021-bacterial-host-homeostasis-upper-gi-carcinogenesis, yang-2022-fungal-microbiota-dysbiosis-gastric-cancer, szklenarik-2024-cancer-mycobiome-gi-systematic-review, long-2023-causal-gut-microbiota-cancers-mr]
source_count: 5
tags: [gastric-cancer, upper-GI, Helicobacter-pylori, nickel, hydrogenase, CagA, Correa-cascade, mycobiome]
platform: wikibiome
seo_target: "gastric cancer H pylori nickel hydrogenase microbiome mycobiome"
wikipedia_differentiation: "Nickel-hydrogenase-powered CagA translocation as the metal-dependent mechanism linking H. pylori to carcinogenesis, plus mycobiome dysbiosis data showing fungal community shifts in gastric cancer"
icd_10: "C16"
global_prevalence: "Approximately 1 million new cases per year globally; 5th most common cancer worldwide"
signature_page: ""
associated_conditions: [gastric-ulcer, gerd, colorectal-cancer]
shared_signature_metals: {gastric-ulcer: [nickel, iron], colorectal-cancer: [iron]}
shared_signature_taxa: {gastric-ulcer: [helicobacter-pylori], colorectal-cancer: [fusobacterium-nucleatum]}
---

# Gastric Adenocarcinoma

The most common malignancy of the stomach, accounting for over 95% of gastric cancers. [[helicobacter-pylori]] infection is the strongest known risk factor, classified as a Group 1 carcinogen by IARC. In the metallomics framework, gastric adenocarcinoma reveals a striking dependency on nickel-powered virulence machinery: the very enzymes that enable *H. pylori* to survive in the stomach also drive the carcinogenic cascade.

## The Nickel-Hydrogenase-CagA Axis

The mechanistic link between *H. pylori* and gastric carcinogenesis runs through nickel-dependent enzymes:

- NiFe-hydrogenase oxidizes molecular hydrogen (H2) in the gastric environment, generating proton motive force that powers the type IV secretion system (T4SS) responsible for injecting the oncoprotein CagA into gastric epithelial cells [[maier-2019-nickel-microbial-pathogenesis]].
- CagA is phosphorylated by host kinases and disrupts cell polarity, tight junctions, and proliferation signaling -- directly promoting the transformation toward malignancy.
- Hydrogenase deletion mutants of *H. pylori* cannot translocate CagA and fail to induce gastric cancer in the Mongolian gerbil model, establishing that nickel-powered hydrogen metabolism is essential for carcinogenesis [[maier-2019-nickel-microbial-pathogenesis]].
- Strains isolated from gastric cancer patients show higher hydrogenase activity than strains from patients with gastritis alone, suggesting a dose-response relationship between nickel enzyme activity and cancer risk.

## The Correa Cascade

Gastric carcinogenesis follows a well-characterized progression, with microbial involvement at each stage:

1. Normal mucosa to chronic active gastritis -- driven by *H. pylori* urease-mediated mucosal inflammation
2. Atrophic gastritis -- loss of parietal cells, rising pH, shifting microbial community
3. Intestinal metaplasia -- goblet cell appearance, further microbial community change
4. Dysplasia to adenocarcinoma -- accumulated genetic damage from chronic inflammation and CagA signaling

The rising pH in atrophic gastritis enables colonization by bacteria that cannot survive normal gastric acid, creating a progressively more complex and potentially carcinogenic microbial community [[catala-valentin-2021-bacterial-host-homeostasis-upper-gi-carcinogenesis]].

## Microbiome Associations

### Bacterial Community Shifts

- *H. pylori* dominance decreases as the stomach progresses through the Correa cascade, with increasing diversity of oral and intestinal bacteria colonizing the achlorhydric stomach.
- [[fusobacterium-nucleatum]], a recognized promoter of colorectal carcinogenesis, is also enriched in gastric cancer tissue, suggesting shared carcinogenic mechanisms across GI malignancies [[catala-valentin-2021-bacterial-host-homeostasis-upper-gi-carcinogenesis]].
- Mendelian randomization studies provide causal evidence supporting gut microbiota involvement in gastric cancer risk [[long-2023-causal-gut-microbiota-cancers-mr]].

### Mycobiome Dysbiosis

- The gastric fungal community undergoes significant shifts in gastric cancer, with altered diversity and composition compared to healthy controls [[yang-2022-fungal-microbiota-dysbiosis-gastric-cancer]].
- *Candida* species expansion has been documented in the gastric cancer mycobiome, potentially contributing to the inflammatory and immunosuppressive tumor microenvironment [[szklenarik-2024-cancer-mycobiome-gi-systematic-review]].
- Fungal-bacterial interkingdom interactions in the stomach remain poorly characterized but may influence carcinogenesis through [[biofilm]] formation and metabolite production.

## Metal Associations

- [[nickel]]: Essential for *H. pylori* virulence enzymes (urease, hydrogenase) that drive the carcinogenic process. Environmental nickel exposure may modulate cancer risk in *H. pylori*-colonized individuals.
- [[iron]]: Iron deficiency anemia is a common presentation of gastric cancer. The tumor microenvironment shows altered iron metabolism, and *H. pylori* itself competes for iron using dedicated acquisition systems.
- Salt (NaCl): While not a metal in the WikiBiome framework, high dietary salt synergizes with *H. pylori* to promote gastric carcinogenesis by damaging the mucosal barrier and enhancing CagA expression.

## Associated Conditions

- [[gastric-ulcer]]: Shares the *H. pylori* etiology and nickel-dependent virulence mechanisms. Chronic ulceration is a recognized precursor lesion.
- [[gerd]]: PPI treatment for GERD raises gastric pH, altering the microbiome in ways that may influence cancer risk [[catala-valentin-2021-bacterial-host-homeostasis-upper-gi-carcinogenesis]].
- Colorectal cancer: Shares enrichment of *Fusobacterium nucleatum* and iron-dependent ecological disruption.

## Cross-References

- [[helicobacter-pylori]] -- primary microbial driver
- [[nickel]] -- essential cofactor for carcinogenic virulence machinery
- [[nickel-transporters]] -- NixA/NiuBDE as therapeutic targets
- [[gastric-ulcer]] -- precursor condition
- [[fusobacterium-nucleatum]] -- shared across GI malignancies
- [[nife-hydrogenase]] -- nickel enzyme powering CagA injection
