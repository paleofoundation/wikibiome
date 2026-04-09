---
title: Pathogen Metal Acquisition Systems
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [maier-2019-nickel-microbial-pathogenesis, cassat-2012-metal-acquisition-staphylococcus-aureus, akbari-2022-metal-homeostasis-streptococci, pendergrass-2026-nickel-nec-preterm-gut, romero-espejel-2013-streptococcus-pneumoniae-iron, alquethamy-2021-acinetobacter-cadmium-resistance, braud-2010-siderophores-pseudomonas-metal-tolerance, patil-2021-infection-metallomics-critical-care, cheng-2021-cadmium-enterococcus-metabolic, chen-2022-living-microorganisms-detoxification-heavy-metals, bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]
tags: [metal-transport, ABC-transporter, NiCoT, ferritin, Hpn, NikR, Fur, Zur, metal-efflux, metal-regulation, virulence, nutritional-immunity]
---

# Pathogen Metal Acquisition Systems

## Overview

Pathogens deploy dedicated cellular machinery to import, store, regulate, and when necessary export transition metals. These systems complement the extracellular [[siderophores-metallophores]] that scavenge metals from the host environment by providing the membrane transport, intracellular buffering, and transcriptional control needed to maintain metal homeostasis in the face of host [[nutritional-immunity]]. The sophistication and redundancy of these systems -- often multiple transporters for a single metal, dedicated storage proteins, and exquisitely sensitive metal-sensing regulators -- reflects the intense evolutionary pressure imposed by host metal restriction.

## Import Systems

### ABC Transporters (ATP-Binding Cassette)

The highest-affinity metal import systems in bacteria. Consist of a periplasmic/surface-associated binding protein, membrane permease, and cytoplasmic ATPase.

**Nickel-specific:**
- **NikABCDE** (*E. coli*): The prototypical bacterial nickel importer. NikA is the periplasmic binding protein; NikB/C form the transmembrane channel; NikD/E provide the ATPase. High affinity, capable of scavenging nickel at very low concentrations [[[maier-2019-nickel-microbial-pathogenesis]]].
- **NiuBDE** (*H. pylori*): ABC-type nickel transporter that operates at acidic pH -- essential for the gastric niche where low pH is constant [[[maier-2019-nickel-microbial-pathogenesis]]].
- **UreMQO** (*S. salivarius*): The only characterized nickel transporter in Streptococci. Part of the Ni-dependent urease operon [[[akbari-2022-metal-homeostasis-streptococci]]].

**Iron-specific:**
- **PitABCD** (Streptococci): Iron import system.
- **FeoABC**: Ferrous iron (Fe2+) transport; widely distributed across Gram-negative and some Gram-positive pathogens [[[akbari-2022-metal-homeostasis-streptococci]]].
- **PiaA/PiuA** (*S. pneumoniae*): Iron acquisition proteins contributing to virulence in pneumococcal infection.
- **Siderophore ABC transporters**: Import siderophore-Fe complexes (e.g., staphyloferrin A/B uptake in *S. aureus*) [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]].

**Zinc-specific:**
- **AdcABC/AdcAII** (Streptococci): Primary zinc import system. AdcA and AdcAII are two distinct zinc-binding lipoproteins with complementary roles. Mutants show attenuated colonization across multiple infection models (nasopharynx, tooth, meningitis, skin) [[[akbari-2022-metal-homeostasis-streptococci]]].
- **Lmb** (*S. agalactiae*): Laminin-binding protein that also functions as zinc-binding lipoprotein for import.

**Manganese-specific:**
- **MntABC/SloABC** (Streptococci, Staphylococci): High-affinity Mn import critical for superoxide dismutase activity and oxidative stress defense [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]], [[[akbari-2022-metal-homeostasis-streptococci]]].

**Metallophore-metal ABC transporters:**
- **CntABCDF** (*S. aureus*): Imports staphylopine-metal complexes (Ni, Zn, Cu, Co) after the metallophore captures metals extracellularly [[[maier-2019-nickel-microbial-pathogenesis]]].

### NiCoT Secondary Transporters

Single-component, secondary (proton motive force-driven) transporters specific for nickel and/or cobalt.

- **NixA** (*H. pylori*): The best-characterized NiCoT. A high-affinity Ni-only transporter. NixA works alongside the NiuBDE ABC system, providing redundant nickel import -- evidence of how critical nickel acquisition is for *H. pylori* [[[maier-2019-nickel-microbial-pathogenesis]]].
- **NixA homologs**: Found in other Ni-dependent pathogens. Also characterized in engineered probiotics as a target for metal-sequestering therapy [[[chen-2022-living-microorganisms-detoxification-heavy-metals]]].

### MntH (NRAMP Family)

- Secondary Mn2+ transporters homologous to host NRAMP1/SLC11A1.
- Found in Streptococci (*S. pyogenes*, *S. pneumoniae*) and other pathogens [[[akbari-2022-metal-homeostasis-streptococci]]].
- The evolutionary irony: the same NRAMP protein family is used by hosts (NRAMP1 to export metals from phagolysosomes, starving engulfed pathogens) and by pathogens (MntH to import metals for survival).

### ECF (Energy-Coupling Factor) Transporters

- Modular ABC-type systems that can switch substrate specificity by exchanging the substrate-binding component.
- Nickel ECF transporters identified in some pathogens but less well characterized than NikABCDE or NixA.

### TonB-Dependent Outer Membrane Receptors

- In Gram-negative bacteria, large beta-barrel proteins in the outer membrane that use TonB/ExbBD energy transduction to import siderophore-metal complexes and heme.
- **FpvA**: Pyoverdine-Fe receptor in *P. aeruginosa* [[[braud-2010-siderophores-pseudomonas-metal-tolerance]]].
- **FptA**: Pyochelin-Fe receptor in *P. aeruginosa* [[[braud-2010-siderophores-pseudomonas-metal-tolerance]]].
- **FrpB4**: TonB-dependent receptor proposed for nickel transport in some species.

### Heme Uptake Systems

Dedicated machinery to capture host hemoglobin/heme as an iron source.

- **Isd system** (*S. aureus*): IsdB captures hemoglobin on the cell surface, passes heme through the cell wall (IsdC) and membrane (IsdDEF) into the cytoplasm, where IsdG/IsdI degrade heme to release iron. Heme is the preferred iron source during infection. *S. aureus* hemolysins actively lyse red blood cells to liberate hemoglobin [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]].
- **Shp/Shr system** (Streptococci): Heme relay system; Shr is the surface receptor, Shp the chaperone [[[akbari-2022-metal-homeostasis-streptococci]]].
- **22 kDa and 37 kDa proteins** (*S. pneumoniae*): The first identified hemoglobin/heme-binding membrane proteins in pneumococcus. Both share the KVAFDH motif essential for heme binding. *S. pneumoniae* can use Hb and heme but NOT transferrin or lactoferrin as iron sources [[[romero-espejel-2013-streptococcus-pneumoniae-iron]]].

## Storage Systems

### Nickel Storage

Best characterized in *[[helicobacter-pylori]]*:

- **Hpn**: Extraordinary small His-rich protein -- **47% of residues are histidine**. Forms 20-mers, each monomer binding 5 Ni(II) ions. Present in all gastric *Helicobacter* species. Functions as the primary nickel reservoir, buffering against fluctuations in nickel availability [[[maier-2019-nickel-microbial-pathogenesis]]].
- **HpnI** (Hpn-like): 25% histidine, binds 2 Ni(II) per monomer. Restricted to *H. pylori* and *H. acinonychis*. Competes with Hpn for nickel under low-nickel conditions.
- Recent work reveals Hpn/HpnI interact with a **much wider array of proteins** than expected, including urease/hydrogenase maturation enzymes (delivering nickel to these virulence factors), AmiE (aliphatic amidase), and PepA (aminopeptidase). They function as **central nickel distribution hubs** in the cell [[[maier-2019-nickel-microbial-pathogenesis]]].
- **HspA**: A GroES (chaperonin) homolog with a unique His-rich C-terminus for nickel binding. Dual function: protein folding chaperone and nickel storage. Candidate for anti-*H. pylori* vaccine [[[maier-2019-nickel-microbial-pathogenesis]]].

### Iron Storage

- **Ferritins**: Ubiquitous iron storage cages (24 subunits, up to 4,500 Fe atoms per cage). Found across bacterial phyla.
- **Bacterioferritins**: Bacterial-specific ferritin homologs with a heme cofactor. Protect against iron-mediated Fenton chemistry by sequestering free iron.
- **Dps** (DNA-binding protein from starved cells): Miniferritin (12 subunits); protects DNA from oxidative damage by sequestering Fe2+ and preventing Fenton reaction.

### Zinc/Other Metal Storage

- **Pht proteins** (Streptococci): Polyhistidine triad proteins that bind zinc and serve as extracellular zinc reservoirs/trafficking proteins [[[akbari-2022-metal-homeostasis-streptococci]]].
- **Metallothionein-like proteins**: Small cysteine-rich proteins that bind multiple metals; found in some pathogenic bacteria.

## Regulation: Metal-Sensing Transcription Factors

Pathogens use exquisitely sensitive metal-responsive regulators to match transporter expression to metal availability.

### NikR (Nickel-Responsive)

- Ni2+-sensing transcriptional regulator. In *H. pylori*, NikR both activates and represses genes depending on nickel levels.
- At high Ni: activates urease (ureA) expression, nickel storage (hpn), and nickel efflux (cznABC).
- At low Ni: depresses import systems.
- NikR is essential for balancing nickel acquisition with toxicity avoidance [[[maier-2019-nickel-microbial-pathogenesis]]].

### Fur (Ferric Uptake Regulator)

- The master Fe2+-responsive regulator in most bacteria. When iron is sufficient, Fe-Fur represses siderophore biosynthesis and iron import genes. When iron is scarce, derepression allows maximal iron acquisition.
- Also regulates virulence factors, acid resistance, and oxidative stress defense.
- Fur homologs control manganese (Mur) and zinc (Zur) in some species.

### Zur (Zinc Uptake Regulator)

- Zn2+-responsive repressor. Represses zinc import (adcABC) when zinc is sufficient.
- In Streptococci, Zur also influences Pht protein expression and zinc trafficking [[[akbari-2022-metal-homeostasis-streptococci]]].

### MntR (Manganese Transport Regulator)

- Mn2+-responsive activator/repressor. Coordinates manganese import with export to maintain homeostasis.
- In *S. pneumoniae*, MntR and the manganese-sensing SczA regulate the balance between Mn import (MntABC) and Mn efflux (MntE) [[[akbari-2022-metal-homeostasis-streptococci]]].

### CadR/MerR-Type Regulators

- **CadR** (*A. baumannii*): Highly attuned cadmium sensor; activates czcE expression ~480-fold upon Cd exposure [[[alquethamy-2021-acinetobacter-cadmium-resistance]]].
- **CopY** (Streptococci): Cu-responsive repressor controlling copper efflux via CopA [[[akbari-2022-metal-homeostasis-streptococci]]].

## Export and Detoxification Systems

When metals are too abundant (from host copper killing, environmental contamination, or mis-metallation), pathogens must export them.

### CDF (Cation Diffusion Facilitator) Family

- **CzcD** (Streptococci): Zinc exporter [[[akbari-2022-metal-homeostasis-streptococci]]].
- **CzcE** (*A. baumannii*): Primary cadmium exporter; translocates Cd from cytoplasm to periplasm. Mutants are 30-fold more sensitive to cadmium [[[alquethamy-2021-acinetobacter-cadmium-resistance]]].
- **MntE** (Streptococci): Manganese exporter preventing Mn toxicity [[[akbari-2022-metal-homeostasis-streptococci]]].

### HME (Heavy Metal Efflux) RND Systems

- **CzcCBA** (*A. baumannii*, *H. pylori*): Three-component system spanning inner membrane, periplasm, and outer membrane. Exports Cd, Zn, and Ni from periplasm to extracellular space, completing a two-step translocation (CDF: cytoplasm-->periplasm, HME: periplasm-->exterior) [[[alquethamy-2021-acinetobacter-cadmium-resistance]]].
- **CznABC** (*H. pylori*): Cadmium, zinc, and nickel efflux. Critical for surviving in the metal-variable gastric environment [[[maier-2019-nickel-microbial-pathogenesis]]].

### P-Type ATPases

- **CopA** (Streptococci): Cu-exporting P-type ATPase; essential for surviving host copper toxicity in phagosomes [[[akbari-2022-metal-homeostasis-streptococci]]].
- **PmtA** (*S. pyogenes*, *S. suis*): Iron-exporting ATPase [[[akbari-2022-metal-homeostasis-streptococci]]].
- **ZccE** (*S. mutans*): Unique zinc-exporting P-type ATPase [[[akbari-2022-metal-homeostasis-streptococci]]].
- P-type ATPases are also upregulated in *Enterococcus* under cadmium stress for Cd export [[[cheng-2021-cadmium-enterococcus-metabolic]]].

### Metal Efflux as Counter to Host Toxicity

- The host deliberately floods phagolysosomes with copper and zinc to kill engulfed bacteria. Pathogen copper/zinc efflux systems (CopA, CzcD, CznABC) are therefore virulence factors -- enabling survival of the host's **metal intoxication** strategy [[[akbari-2022-metal-homeostasis-streptococci]]], [[[cassat-2012-metal-acquisition-staphylococcus-aureus]]].
- **PMI1518** (*P. mirabilis*): Nickel efflux system essential for catheter-associated UTI, preventing nickel toxicity in the urinary niche [[[maier-2019-nickel-microbial-pathogenesis]]].

## The Arms Race: Host vs. Pathogen

The interplay between host metal restriction and pathogen metal acquisition determines infection outcome:

| Host Strategy | Mechanism | Pathogen Counter-Strategy |
|---|---|---|
| **Calprotectin** | Sequesters Mn, Zn, Ni at infection sites | Redundant high-affinity ABC transporters (Adc, Mnt, Nik) |
| **Lactoferrin** | Binds Fe (and possibly Ni) in mucosal secretions | Siderophores, heme uptake systems (Isd, Shp/Shr) |
| **Hepcidin** | Degrades ferroportin; reduces iron export to plasma | Heme uptake from hemoglobin; siderophores bypass transferrin |
| **NRAMP1** | Exports Fe, Mn, Ni from phagolysosomes | MntH (NRAMP homolog); intracellular metal storage |
| **Transferrin/hemopexin** | Bind free Fe/heme in circulation | Surface receptors for Hb/heme (IsdB, 22/37 kDa proteins) |
| **Cu/Zn intoxication** | Flood phagolysosomes with toxic Cu/Zn | CopA, CzcD, CznABC efflux systems |

**The environmental dimension**: When dietary or environmental metal exposure exceeds the host's sequestration capacity (e.g., nickel from soy formula in preterm infants [[[pendergrass-2026-nickel-nec-preterm-gut]]]), the pathogen's acquisition systems become less important -- metals are freely available. The arms race shifts decisively in the pathogen's favor.

## Connections

- [[metal-dependent-virulence]] -- the virulence factors these acquisition systems supply metals to
- [[siderophores-metallophores]] -- the extracellular chelators that feed into these import systems
- [[inter-kingdom-metal-shielding]] -- community-level metal dynamics modulating individual acquisition
- [[nutritional-immunity]] -- the host defense these systems are designed to overcome
- [[iron]] -- the most contested metal; largest diversity of acquisition systems
- [[nickel]] -- unique pathogen-specific requirement; mammals have no Ni-enzymes
- [[zinc]] -- both a nutrient to acquire and a host weapon to resist
- [[gut-metal-microbiome]] -- metal acquisition determines competitive outcomes in the gut
- [[environmental-metal-exposure]] -- when environmental input overwhelms the arms race
