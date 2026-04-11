---

title: Salmonella enterica serovar Typhimurium
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources: [maier-2019-nickel-microbial-pathogenesis.md]
tags: [pathogen, nickel, iron, hydrogenase, macrophage-survival, gut-invasion, typhoid]
metal_dependencies: [iron, zinc, manganese, magnesium]
key_enzymes: [enterobactin/salmochelin (siderophores), ZnuABC (zinc uptake), MntH (manganese transporter), SodCI (Cu/Zn-SOD)]
platform: wikibiome
---

# Salmonella enterica serovar Typhimurium

A Gram-negative enteric pathogen that possesses **four distinct [NiFe] hydrogenases** -- the most of any well-characterized human pathogen. These hydrogenases are critical for intracellular survival within macrophages, and a triple hydrogenase mutant is **100% avirulent** in mouse typhoid models, making nickel-dependent hydrogen metabolism (via [[nife-hydrogenase]]) a central pillar of Salmonella virulence.

## Metal-Dependent Virulence Factors

### [NiFe] Hydrogenases -- The Core of Ni-Dependent Virulence
*S.* Typhimurium encodes four distinct [NiFe] hydrogenases, each with different roles [[maier-2019-nickel-microbial-pathogenesis]]:

1. **Hya (hydrogenase-1)**: membrane-bound, H2-uptake. Contributes to respiratory H2 oxidation.
2. **Hyb (hydrogenase-2)**: membrane-bound, H2-uptake. **Most important for virulence**. Primary contributor to macrophage survival and systemic infection.
3. **Hyc (hydrogenase-3)**: cytoplasmic, part of the formate hydrogenlyase (FHL) complex. Produces H2 under fermentative conditions. Likely important for anaerobic gut survival.
4. **Hyd (hydrogenase-4)**: second FHL-associated hydrogenase.

### Avirulence of Hydrogenase Mutants
- Triple mutant (**DeltahyaDeltahybDeltahyd**): **100% survival in a mouse typhoid fever model** -- completely avirulent [[maier-2019-nickel-microbial-pathogenesis]].
- This demonstrates that H2 metabolism is not merely advantageous but **essential** for Salmonella systemic virulence.
- Hyb is the single most important hydrogenase: Hyb mutants alone show significant attenuation.

### Hydrogenase Function in Macrophage Survival
- After phagocytosis, *S.* Typhimurium resides in the Salmonella-containing vacuole (SCV).
- H2 oxidation by Hyb provides electrons to the respiratory chain, generating PMF for ATP synthesis inside the nutrient-limited SCV.
- This H2-powered energy source allows survival in the hostile intracellular environment where carbon sources are scarce.

### Fe-Dependent Systems
- **Enterobactin**: primary siderophore for iron acquisition in iron-limited host environments.
- **Salmochelin**: glycosylated enterobactin derivative that evades host lipocalin-2 (which sequesters enterobactin).
- **SitABCD**: Mn/Fe ABC transporter required for full virulence.
- **Fur regulon**: iron-responsive regulation of virulence genes.

## Metal Acquisition Systems

### Nickel Import
- **NikABCDE**: ABC-type nickel transporter homologous to the *E. coli* system.
- Nickel import is essential for metalation of all four hydrogenase active sites.
- Nickel import likely upregulated during intracellular infection to support hydrogenase-dependent energy generation.

### Hydrogenase Maturation
- **HypABCDEF** accessory proteins: required for [NiFe] active site assembly in all four hydrogenases.
- The maturation machinery must supply nickel to four separate enzyme complexes -- a significant metabolic investment reflecting the importance of H2 metabolism.

### Iron Acquisition
- Multiple redundant systems: enterobactin, salmochelin, SitABCD, FeoABC (ferrous iron).
- Redundancy ensures iron access across diverse host niches (gut lumen, macrophage SCV, bloodstream).

## Nutritional Immunity Evasion

- **Host calprotectin**: released by neutrophils at gut infection sites; sequesters Zn and Mn (and likely Ni).
- **Lipocalin-2**: sequesters enterobactin; *S.* Typhimurium evades this with salmochelin.
- **NRAMP1 (SLC11A1)**: macrophage phagosomal metal exporter. Restricts Fe, Mn, and Ni availability within the SCV. NRAMP1-deficient mice are highly susceptible to Salmonella, demonstrating the importance of metal restriction.
- *S.* Typhimurium counters NRAMP1 by upregulating high-affinity metal transporters and relying on H2 as an alternative energy source.

## Disease Associations

- **Gastroenteritis** (non-typhoidal salmonellosis): most common manifestation in humans
- **Typhoid-like systemic disease** in mice (model for *S.* Typhi typhoid fever)
- **Bacteremia** in immunocompromised patients (HIV/AIDS, sickle cell)
- **Osteomyelitis** (especially in sickle cell disease)
- **Reactive arthritis** (post-infection complication)

## Connection to Environmental Metal Exposure

- Gut H2 is produced by commensal microbiota during fermentation of dietary fiber -- dietary patterns that increase colonic H2 production could theoretically provide more energy substrate for Salmonella hydrogenases.
- Environmental nickel in drinking water or food may increase nickel availability for hydrogenase metalation during gut colonization.
- Agricultural use of heavy metals in livestock operations promotes metal-tolerant Salmonella populations.

## Connections

- [[metal-dependent-virulence]] -- four [NiFe] hydrogenases; triple mutant 100% avirulent
- [[nickel]] -- essential cofactor for all four [NiFe] hydrogenases
- [[iron]] -- acquired via enterobactin/salmochelin; regulated by Fur
- [[helicobacter-pylori]] -- both use [NiFe] hydrogenases for virulence, but H. pylori has one while Salmonella has four
- [[nutritional-immunity]] -- NRAMP1-mediated metal export from SCV is critical host defense
- [[escherichia-coli]] -- closely related; shares NikABCDE transporter architecture
- [[staphylococcus-aureus]] -- both face calprotectin-mediated metal restriction
