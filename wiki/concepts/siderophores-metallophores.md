---
title: Siderophores and Metallophores
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [braud-2010-siderophores-pseudomonas-metal-tolerance, cassat-2012-metal-acquisition-staphylococcus-aureus, maier-2019-nickel-microbial-pathogenesis, patil-2021-infection-metallomics-critical-care, akbari-2022-metal-homeostasis-streptococci, pendergrass-2026-nickel-nec-preterm-gut, romero-espejel-2013-streptococcus-pneumoniae-iron]
source_count: 7
tags: [siderophores, metallophores, nickelophores, iron, nickel, zinc, copper, cobalt, metal-acquisition, virulence, diagnostics, nutritional-immunity]
platform: wikibiome
karen_brain_primitives: [1, 2, 4, 6, 8]
seo_target: "siderophores and metallophores microbiome"
last_substantive_update: 2026-04-09
---

# Siderophores and Metallophores

## Overview

Siderophores and metallophores are small-molecule chelators secreted by pathogens to scavenge metals from the metal-scarce host environment. They represent the extracellular arm of [[pathogen-metal-acquisition]] -- how pathogens reach out into the surrounding milieu to capture metals the host is trying to withhold through [[nutritional-immunity]]. While iron siderophores have been studied for decades, the discovery of "nickelophores" and dual-function metallophores that bind multiple metals is a more recent and less appreciated story.

## Iron Siderophores: The Classic Story

Iron siderophores are the archetypal metal-scavenging molecules. Virtually all bacterial pathogens produce them because free iron in the host is vanishingly scarce (approximately 10^-24 M free Fe3+ in serum, far below the ~10^-6 M required for bacterial growth).

### Major Classes

- Enterobactin: Produced by *E. coli* and Enterobacteriaceae. The strongest known Fe3+ chelator (Kd ~10^-49 M). Detected in urine during UTI. The host counters with siderocalin (lipocalin-2), which binds enterobactin to prevent bacterial iron uptake [[patil-2021-infection-metallomics-critical-care]].
- Pyoverdine (PVD): The fluorescent siderophore of *[[pseudomonas-aeruginosa]]*. Chelates Fe3+ with extremely high affinity. Iron is efficiently transported into the cell via the TonB-dependent FpvA receptor. Also chelates Al3+, Co2+, Cu2+, Eu3+, Ni2+, Pb2+, Tb3+, and Zn2+ extracellularly, but only iron is efficiently imported [[braud-2010-siderophores-pseudomonas-metal-tolerance]].
- Pyochelin (PCH): The secondary siderophore of *P. aeruginosa*. Lower Fe affinity than pyoverdine. Transported via FptA. Chelates Al3+, Co2+, Cu2+, Ni2+, Pb2+, and Zn2+ [[braud-2010-siderophores-pseudomonas-metal-tolerance]].
- Staphyloferrin A and B: Produced by *[[staphylococcus-aureus]]*. Essential for virulence; inactivation of siderophore production reduces colony recovery from infected organs. *S. aureus* preferentially uses heme (via the Isd system) but requires siderophores when heme is unavailable [[cassat-2012-metal-acquisition-staphylococcus-aureus]].
- Yersiniabactin (Ybt): Originally characterized in *Yersinia pestis*. A polyketide-nonribosomal peptide siderophore. Binds Fe3+ for classical siderophore function but also has important non-iron metal roles (see below) [[patil-2021-infection-metallomics-critical-care]].
- Mycobactins and carboxymycobactins: Produced by *[[mycobacterium-tuberculosis|M. tuberculosis]]*. Mycobactins are hydrophobic (cell-associated); carboxymycobactins are hydrophilic (secreted). Species-specific side chain variations enable diagnostic identification [[patil-2021-infection-metallomics-critical-care]].
- Fungal siderophores: *Aspergillus fumigatus* produces TAFC (triacetylfusarinine C), ferricrocin, and coprogen. TAFC is detectable in patient urine within 4.5 hours of inoculation in animal models [[patil-2021-infection-metallomics-critical-care]].

## Nickelophores: The Newer Story

By analogy with siderophores (iron-specific chelators), "nickelophores" are small molecules that chelate nickel for pathogen uptake. This is a more recently appreciated category, reflecting the growing recognition that Ni-dependent virulence factors (urease, hydrogenase, GloI) require dedicated nickel acquisition systems [[maier-2019-nickel-microbial-pathogenesis]].

### Staphylopine

- Produced by *[[staphylococcus-aureus]]*. A nicotianamine-like opine metallophore.
- Originally thought to be zinc-specific, but now known to also bind nickel, copper, and cobalt.
- Exported by the CntE exporter and re-imported with bound metal via the CntABCDF ABC transporter.
- Represents a broad-spectrum metallophore strategy: a single molecule scavenges multiple metals depending on what is available [[maier-2019-nickel-microbial-pathogenesis]].

### Pseudopaline

- Produced by *[[pseudomonas-aeruginosa]]*. Also nicotianamine-like.
- The primary mechanism for nickel uptake in chelating (metal-scarce) environments.
- Structurally related to staphylopine but with distinct metal preferences [[maier-2019-nickel-microbial-pathogenesis]].

### Yersiniabactin as Nickelophore

- In uropathogenic *E. coli* (UPEC), yersiniabactin binds extracellular nickel in addition to its classical Fe3+ function.
- Also produced by *Klebsiella* and *Yersinia* species.
- This dual Fe/Ni binding makes yersiniabactin a true multi-metal metallophore [[maier-2019-nickel-microbial-pathogenesis]].

## Dual-Function Metallophores: Beyond Simple Metal Acquisition

A key insight from recent work is that metallophores serve functions beyond nutrient acquisition.

### Extracellular Toxic Metal Sequestration

Braud et al. (2010) demonstrated that pyoverdine and pyochelin protect *P. aeruginosa* from metal toxicity by chelating toxic metals extracellularly, preventing their diffusion into the cell [[braud-2010-siderophores-pseudomonas-metal-tolerance]]:

- Siderophore-deficient mutants (PAD07) were significantly more sensitive to Cu2+, Ni2+, Co2+, Ga3+, and Sn2+ toxicity.
- Adding purified PVD or PCH to growth medium restored metal tolerance.
- Cu2+ and Ni2+ specifically induced PVD production by 290% and 380% respectively -- a defensive response.
- Only iron is efficiently imported via siderophore uptake pathways; other metals are chelated but excluded from the cell.
- This represents a fundamentally different function: metallophores as extracellular shields against metal toxicity, not just nutrient scavengers.

### Yersiniabactin and Copper Resistance

- In UPEC, yersiniabactin binds Cu2+, helping the pathogen resist copper toxicity in the urinary tract.
- The Cu-Ybt complex converts Cu(II) to Cu(I) under low-copper conditions.
- Ybt-Cu complexes have been detected in patient urine [[patil-2021-infection-metallomics-critical-care]].

## Clinical Implications

### Infection Metallomics: Metallophores as Diagnostic Biomarkers

The "infection metallomics" platform uses mass spectrometry to detect microbial metallophores in clinical samples as specific, sensitive, non-invasive biomarkers of invasive infectious disease [[patil-2021-infection-metallomics-critical-care]]:

- Lung infections: TAFC detectable in serum and urine of aspergillosis patients; real-time tracking of fungal infection burden. Superior to galactomannan (current standard) in sensitivity.
- Urinary tract infections: Siderocalin elevation, enterobactin detection, and yersiniabactin-Cu complexes in urine.
- CNS infections: Metallophore imaging could track pathogen routing across the blood-brain barrier.
- Analytical methods: LC-ESI-MS, MALDI-MS with isotope data filtering to selectively detect metal-containing species; FTICR for unequivocal identification.
- Key advantage: Can discriminate invasive disease from benign colonization based on metallophore production patterns -- a critical clinical distinction in ICU settings.

### Metallophore-Based Drug Targets

- Trojan horse antibiotics: Siderophore-antibiotic conjugates exploit pathogen iron transport to deliver drugs directly into the cell (e.g., cefiderocol, a siderophore-cephalosporin).
- Metallophore biosynthesis inhibitors: Blocking siderophore production could disarm pathogens without direct killing, reducing selection for resistance.
- Nickel chelation therapy: Aspergillomarasmine A and similar agents could sequester nickel from pathogen enzymes, an anti-virulence strategy proposed for NEC prevention [[pendergrass-2026-nickel-nec-preterm-gut]].
- Siderocalin mimetics: Synthetic molecules that mimic the host's siderophore-neutralizing protein lipocalin-2.

### Proposed NEC Biomarkers

Fecal urease activity, ammonia levels, and stool nickel content could serve as early NEC risk indicators -- reflecting the downstream consequences of nickelophore-mediated nickel acquisition by gut pathogens [[pendergrass-2026-nickel-nec-preterm-gut]].

## Role in Disease

Siderophore-producing pathogens are especially prominent in iron-dysregulated conditions:

- [[endometriosis]] -- Dysbiotic E. coli overproduces enterobactin in response to elevated tissue iron and heme; siderophore activity drives local inflammation and Fe2+ sequestration, triggering hepcidin elevation.
- [[inflammatory-bowel-disease]] -- Dysbiotic bacteria switch to high siderophore production under iron starvation; this creates a vicious cycle where host iron withholding paradoxically favors pathogenic siderophore-producing taxa.
- Cystic fibrosis -- P. aeruginosa lung biofilms rely on pyoverdine-mediated iron acquisition; pyoverdine production correlates with disease severity.
- Urinary tract infection -- Uropathogenic E. coli produce enterobactin and aerobactin; siderophore activity is required for virulence.
- Bloodstream infection -- During sepsis, host [[hepcidin]] elevation and [[lipocalin-2]] induction are part of innate immunity; pathogens that survive have superior siderophore-iron acquisition.

## Secondary Metal Regulation of Siderophore Production

- Zinc and manganese regulate siderophore synthase gene expression via metal-sensing transcription factors (Zur for zinc, MntR for manganese). Dysbiotic E. coli upregulate enterobactin synthesis when zinc is depleted.
- Copper -- Some bacteria produce copper-chelating siderophore-like molecules (cuproines) to manage copper toxicity; copper stress indirectly drives iron siderophore production.

## Key Sources

- [[akbari-2022-metal-homeostasis-streptococci]]
- [[romero-espejel-2013-streptococcus-pneumoniae-iron]]

## Connections

- [[metal-dependent-virulence]] -- the virulence factors that metallophores supply metals to
- [[pathogen-metal-acquisition]] -- the cellular import machinery that receives metallophore-bound metals
- [[nutritional-immunity]] -- the host defense that metallophores are designed to overcome
- [[inter-kingdom-metal-shielding]] -- siderophore sharing/cheating in polymicrobial communities
- [[iron]] -- the primary target of classical siderophores
- [[nickel]] -- target of the newer nickelophore story
- [[zinc]] -- bound by broad-spectrum metallophores like staphylopine
- [[gut-metal-microbiome]] -- siderophore-producing Enterobacteriaceae outcompete commensals under high-iron conditions
- [[metallomics]] -- infection metallomics as a diagnostic platform
