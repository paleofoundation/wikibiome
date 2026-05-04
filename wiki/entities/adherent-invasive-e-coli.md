---
title: Adherent-Invasive Escherichia coli (AIEC)
type: entity
subtype: microbe
created: 2026-04-17
updated: 2026-04-17
last_substantive_update: 2026-04-17
sources: [haag-2015-intestinal-microbiota-innate-immunity-crohns, kang-2023-diagnosis-crohns-uc-microbiome, rashed-2022-manipulation-gut-microbiota-crohns, zhang-2017-intestinal-microbiota-host-immune-ibd, steed-2010-synbiotic-crohns-rct]
source_count: 5
tags: [pathobiont, Crohns-disease, IBD, ileal-colonization, intracellular-survival, iron-dependent, virulence]
platform: wikibiome
seo_target: "adherent invasive E coli AIEC Crohn's disease microbiome"
wikipedia_differentiation: "Metal dependency framework for AIEC virulence: iron acquisition via siderophores enabling ileal colonization, zinc-dependent defensin evasion, and the host genetic susceptibility axis (NOD2/ATG16L1) that creates the permissive metal-rich niche"
gram_stain: "negative"
oxygen_requirement: "facultative anaerobe"
metal_dependencies: [iron, zinc, nickel]
key_enzymes: [siderophores, type-1-fimbriae (FimH), outer-membrane-vesicles]
pathogenic_potential: commensal-turned-pathogen
conditions_enriched_in: [crohns-disease]
conditions_depleted_in: []
---

# Adherent-Invasive Escherichia coli (AIEC)

A pathotype of [[escherichia-coli]] that adheres to and invades intestinal epithelial cells, survives and replicates within macrophages, and is strongly associated with ileal Crohn's disease. Unlike classical diarrheagenic *E. coli* pathotypes (EPEC, ETEC, EHEC), AIEC does not carry canonical virulence genes but instead exploits host genetic susceptibility and an inflamed, metal-rich mucosal environment to establish chronic colonization.

## Defining Features

AIEC is defined by three functional properties rather than a single genetic marker:

1. Adherence to intestinal epithelial cells, primarily via type-1 fimbriae (FimH adhesin) binding to CEACAM6 receptors, which are upregulated on inflamed ileal mucosa in Crohn's disease patients.
2. Invasion of epithelial cells, enabling intracellular survival and evasion of luminal antimicrobials.
3. Survival and replication within macrophages, inducing granuloma-like structures without triggering effective bacterial killing -- a hallmark of Crohn's pathology [[haag-2015-intestinal-microbiota-innate-immunity-crohns]].

The reference strain LF82, isolated from a chronic ileal lesion, is the most studied AIEC isolate.

## Metal Dependencies

### Iron Acquisition

- AIEC strains carry multiple siderophore systems (enterobactin, salmochelin, yersiniabactin, aerobactin) that enable aggressive iron scavenging in the inflamed gut.
- The inflamed Crohn's mucosa paradoxically creates an iron-rich environment: tissue damage releases hemoglobin and intracellular iron, while host [[nutritional-immunity]] responses (calprotectin, lactoferrin, lipocalin-2) attempt to re-sequester it.
- AIEC's superior iron acquisition machinery gives it a competitive advantage over commensals in this contested environment [[haag-2015-intestinal-microbiota-innate-immunity-crohns]].
- [[siderophore-competition]] is central to AIEC ecology: the pathotype's siderophore diversity allows it to evade host lipocalin-2, which specifically neutralizes enterobactin but not salmochelin or yersiniabactin.

### Zinc and Defensin Resistance

- Paneth cell [[nutritional-immunity|defensins]] -- zinc-dependent antimicrobial peptides -- are the primary innate immune defense in the ileal niche where AIEC colonizes.
- NOD2 loss-of-function mutations, the strongest genetic risk factor for ileal Crohn's disease, impair defensin production and bacterial sensing, creating a defensin-depleted niche that favors AIEC expansion [[haag-2015-intestinal-microbiota-innate-immunity-crohns]].

### Nickel Enzymes

- As an *E. coli* pathotype, AIEC possesses nickel-dependent [[nife-hydrogenase]] enzymes and potentially nickel-glyoxalase, which provide metabolic advantages in the anaerobic, hydrogen-rich gut environment.

## Host Genetic Susceptibility

The AIEC-Crohn's connection depends on host genetic defects that create a permissive mucosal niche:

- NOD2 mutations: Impair muramyl dipeptide sensing, reduce alpha-defensin secretion, and diminish bacterial clearance -- allowing AIEC to persist on the mucosal surface.
- ATG16L1 variants: Impair [[autophagy]] in Paneth cells, reducing intracellular bacterial killing and enabling AIEC replication within macrophages.
- CEACAM6 upregulation: Inflammatory cytokines increase CEACAM6 expression on ileal epithelium, providing more adhesion sites for AIEC FimH fimbriae -- a positive feedback loop.

## Ecological Role in Crohn's Disease

- AIEC colonization is found in 21-63% of ileal Crohn's disease patients compared to 0-6% of healthy controls, depending on the study.
- Drives a pro-inflammatory cascade: TNF-alpha, IL-6, IL-8 production by infected macrophages sustains mucosal inflammation [[haag-2015-intestinal-microbiota-innate-immunity-crohns]].
- Its expansion correlates with depletion of anti-inflammatory commensals, particularly [[faecalibacterium-prausnitzii]], whose loss removes butyrate-mediated NF-kappaB suppression [[rashed-2022-manipulation-gut-microbiota-crohns]].
- Synbiotic approaches combining prebiotics with beneficial bacteria have been trialed to competitively exclude AIEC [[steed-2010-synbiotic-crohns-rct]].

## Cross-References

- [[escherichia-coli]] -- parent species
- [[crohns-disease]] -- primary disease association
- [[siderophore-competition]] -- iron acquisition strategy
- [[nutritional-immunity]] -- host metal restriction AIEC must overcome
- [[faecalibacterium-prausnitzii]] -- anti-inflammatory commensal depleted alongside AIEC expansion
- [[autophagy]] -- host defense mechanism impaired by ATG16L1 variants
- [[biofilm]] -- AIEC forms biofilms on ileal mucosa
