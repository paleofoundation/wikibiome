---
title: "Stewart 2013 — Bacterial and Fungal Viability in the Preterm Gut"
type: source
created: 2026-05-04
updated: 2026-05-04
authors: [Stewart CJ, Marrs ECL, Nelson A, Lanyon C, Perry JD, Embleton ND, Cummings SP, Berrington JE]
corresponding_author: "Christopher J. Stewart"
corresponding_email: "not yet verified"
institution: "Newcastle University"
orcid: "not yet verified"
year: 2013
journal: "Archives of Disease in Childhood: Fetal and Neonatal Edition"
doi: "10.1136/archdischild-2012-302119"
pmid: "not yet verified"
evidence_level: prospective-cohort
sample_size: "n=32 preterm infants <32 weeks gestation, 136 stool samples"
tags: [nec, preterm, microbiome, fungi, sphingomonas, viability, antibiotics, gut-colonization]
library_category: signatures
platform: both
condition: "necrotizing enterocolitis"
karen_brain_primitives: [1, 5, 6]
metals_discussed: []
taxa_discussed: [sphingomonas, candida]
key_findings:
  - "Sphingomonas spp. was significantly associated with NEC development (p=0.0001) in preterm infants — an underappreciated genus in NEC pathogenesis"
  - "Fungi were present in 32% of samples but non-viable under fluconazole challenge — total community composition misrepresents viable community"
  - "Antibiotic exposure drives bacterial richness to a nadir at week 4, with stark divergence between broad- and narrow-spectrum exposure patterns"
keystone: false
stub: false
---

## Key Findings

- **Sphingomonas spp.** was significantly associated with NEC development (p=0.0001), identifying this Gram-negative environmental genus as an underappreciated NEC-associated pathogen in the preterm gut microbiome [[stewart-2013-bacterial-fungal-viability-preterm-nec]]
- **Fungi** were detected in 32% of stool samples but were **non-viable** when challenged with fluconazole, demonstrating that total community DNA profiling overestimates viable fungal burden [[stewart-2013-bacterial-fungal-viability-preterm-nec]]
- The **viable bacterial community** diverges substantially from the total (culture-independent) community — a methodological finding with implications for interpreting all microbiome studies that rely solely on 16S/ITS sequencing [[stewart-2013-bacterial-fungal-viability-preterm-nec]]
- **Antibiotic exposure** drives a characteristic pattern: bacterial richness declines to a nadir at week 4 of life, with broad-spectrum antibiotics producing a more severe and prolonged suppression than narrow-spectrum regimens [[stewart-2013-bacterial-fungal-viability-preterm-nec]]
- Prospective longitudinal design (136 serial samples from 32 infants) enables temporal tracking of colonization dynamics in the first weeks of life

## Methods

- **Study design**: Prospective longitudinal cohort
- **Population**: n=32 preterm infants, gestational age <32 weeks, NICU (Newcastle)
- **Sample collection**: 136 stool samples collected at multiple time points across the first weeks of life
- **Microbiome methods**: Culture-independent (16S rRNA sequencing for bacteria; ITS for fungi) AND culture-based viability assessment
- **Fungal viability**: Tested under fluconazole challenge to distinguish viable from non-viable (DNA-detectable only) fungal communities
- **Key variables**: NEC incidence, gestational age, antibiotic exposure type (broad vs. narrow spectrum), week of life
- **Statistical approach**: p=0.0001 for Sphingomonas association with NEC

## Detailed Summary

Stewart et al. (2013) conducted a prospective cohort study of 32 preterm infants (<32 weeks) in a Newcastle NICU, collecting 136 serial stool samples to characterize both bacterial and fungal gut colonization dynamics. The study is notable for using **paired culture-independent and viability-based assessments**, which revealed a significant gap between what is present (DNA-detectable) and what is alive (viable).

**The Sphingomonas finding** is the most clinically significant: this environmental, Gram-negative, oxidase-positive bacterium (typically found in soil, water, and clinical environments) was significantly associated with NEC (p=0.0001). Sphingomonas has been largely overlooked in NEC research, which has focused on Enterobacteriaceae (Klebsiella, E. coli) and Clostridia. This finding raises the question of whether NICU environmental contamination and surface colonization contribute to NEC risk beyond the endogenous fecal flora typically studied.

**Fungal viability findings** have methodological implications across the field: fungi were detectable by ITS sequencing in 32% of samples but were non-viable when challenged with fluconazole in vitro. This suggests that fungal DNA detected in preterm stools may represent dead organisms (or environmental contamination) rather than active colonizers. Studies reporting fungal dysbiosis in NEC based solely on sequencing may overestimate viable fungal burden.

**Antibiotic effects** on bacterial richness follow a predictable developmental arc: richness declines to a nadir at week 4, then partially recovers. Broad-spectrum antibiotic exposure produces a more severe nadir than narrow-spectrum. This pattern has implications for NEC timing, as the week 4 richness nadir coincides with peak NEC incidence in preterm infants.

**Note**: This paper is distinct from a separate Stewart CJ 2013 study (`stewart-2013-preterm-gut-microbiome-twins-nec-sepsis.md`) which used a twin-concordance design to study NEC/sepsis outcomes. Both are by the Newcastle group; both use preterm infant cohorts; but they are separate studies with different designs and findings.

## Relevance to WikiBiome

- **NEC entity page**: Adds Sphingomonas as a novel NEC-associated organism with strong statistical evidence. Updates taxonomic associations.
- **Sphingomonas entity page**: Primary source for NEC association. Note environmental origin as relevant to NICU infection control.
- **Fungal viability concept**: Methodological insight — sequencing vs. viability distinction; relevant to interpretation of all microbiome/mycobiome NEC studies
- **Antibiotic exposure concept**: Quantitative evidence for antibiotic-driven richness nadir at week 4 in preterm neonates

## Relevance to Cureva

- **NEC signature — taxonomic layer**: Sphingomonas added as enriched taxon with evidence level (prospective-cohort, p=0.0001)
- **Primitive 1 (metals as selective pressures)**: Sphingomonas spp. have unusual metal tolerance profiles (known for resistance to metal stress in contaminated environments) — worth investigating whether NICU metal contamination selects for Sphingomonas
- **Primitive 5 (ecological engineering)**: Antibiotic-driven suppression of commensal richness creates niche opportunity — week 4 nadir coincides with NEC peak
- **STOP signal**: Broad-spectrum antibiotics → greater richness depletion → greater NEC vulnerability. Warrants consideration of narrow-spectrum preference in preterm NICU.

## Contradictions / Tensions

- No metal data in this paper — cannot directly link Sphingomonas enrichment to metal-dependent mechanisms. The NEC signature's metallomic layer must be sourced elsewhere.
- Sphingomonas finding (p=0.0001) is from a single center (Newcastle) with n=32. Replication in larger or multi-center cohorts would strengthen confidence. As of publication, independent replication was limited.
- Fungi present but non-viable finding conflicts with some literature suggesting active Candida colonization in NEC — but those studies use different viability criteria and populations.

## Open Questions

- What is the source of Sphingomonas in the NICU — water systems, hands, surfaces? Does environmental decontamination reduce Sphingomonas colonization and NEC incidence?
- Are Sphingomonas spp. metal-tolerant? Could NICU water heavy metal contamination (copper pipes, zinc in parenteral nutrition) select for Sphingomonas?
- Does the week 4 bacterial richness nadir have a clinical biomarker correlate — could it be used to predict NEC risk window?
- Is fungal viability better estimated by culture or by newer metabolic viability assays? Would propidium monoazide (PMA) pre-treatment improve ITS viability discrimination?
