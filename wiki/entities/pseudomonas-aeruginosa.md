---

title: Pseudomonas aeruginosa
type: entity
subtype: microbe
created: 2026-04-09
updated: 2026-04-11
sources: [braud-2010-siderophores-pseudomonas-metal-tolerance.md, maier-2019-nickel-microbial-pathogenesis.md]
tags: [pathogen, siderophore, pyoverdine, pyochelin, nickel, iron, lung-infection, cystic-fibrosis, wound-infection]
metal_dependencies: [iron, zinc, manganese, copper]
key_enzymes: [pyoverdine (siderophore), pyochelin (siderophore), elastase/LasB (Zn-metalloprotease), alkaline protease (Zn-dependent), MnSOD, Cu/Zn-SOD]
platform: wikibiome
---

# Pseudomonas aeruginosa

An opportunistic Gram-negative pathogen with a unique dual-use siderophore system: its **pyoverdine** and **pyochelin** serve not only as iron scavengers but as **extracellular chelators of toxic metals** including nickel, copper, and cadmium. This makes *P. aeruginosa* unusually well-adapted to metal-rich and metal-variable environments, from contaminated wounds to the CF lung.

## Metal-Dependent Virulence Factors

### Ni-Dependent Glyoxalase I (Ni-GloI)
- Detoxifies methylglyoxal, a toxic byproduct of glycolysis that accumulates during rapid growth and metabolic stress [[maier-2019-nickel-microbial-pathogenesis]].
- The prokaryotic GloI in *P. aeruginosa* is **Ni-dependent** (unlike the Zn-dependent mammalian form), making it a potential drug target with selectivity over the host enzyme.
- Also found in other pathogens (*N. meningitidis*, *Y. pestis*, *Clostridia*), but *P. aeruginosa* is a key model.

### Ni-Acireductone Dioxygenase (ARD)
- Part of the methionine salvage pathway.
- The Ni-bound form produces different products than the Fe-bound form, giving *P. aeruginosa* metabolic flexibility depending on metal availability.
- Found across all pathogenic gamma-proteobacteriaceae.

### Fe-Dependent Virulence
- Iron is essential for growth and virulence gene expression.
- Multiple iron-regulated virulence factors: elastase, exotoxin A, alkaline protease.
- Pyoverdine itself acts as a signaling molecule: Fe-pyoverdine binding triggers a signaling cascade (FpvA/FpvR/PvdS) that activates virulence gene expression.

## Metal Acquisition Systems

### Pyoverdine (PVD) -- Primary Siderophore
- High-affinity iron chelator, but also binds **Al3+, Co2+, Cu2+, Eu3+, Ni2+, Pb2+, Tb3+, and Zn2+** extracellularly [[braud-2010-siderophores-pseudomonas-metal-tolerance]].
- **Only iron is efficiently imported** via the TonB-dependent FpvA pathway; other metals are chelated outside the cell but not taken up.
- This extracellular sequestration **reduces intracellular accumulation of toxic metals** -- a defensive strategy.
- Cu2+ and Ni2+ specifically **induce PVD production** (290% and 380% increase respectively at 10 uM), suggesting PVD production is a direct response to nickel/copper stress.

### Pyochelin (PCH) -- Secondary Siderophore
- Chelates **Al3+, Co2+, Cu2+, Ni2+, Pb2+, and Zn2+** in addition to iron.
- PCH is **more efficient than PVD** at reducing intracellular accumulation of Co2+, Fe3+, Ni2+, and Zn2+.
- Imported via the FptA receptor (iron-loaded only).

### Pseudopaline Metallophore
- Nicotianamine-like metallophore analogous to staphylopine in [[staphylococcus-aureus]] [[maier-2019-nickel-microbial-pathogenesis]].
- **Primary mechanism for nickel acquisition** in chelating (metal-restricted) environments.
- Exported and reimported as metal-pseudopaline complexes via the CntI/CntO system.

### Experimental Evidence: Siderophore-Deficient Mutants
- PAD07 (PVD-/PCH- double mutant): **more sensitive to toxic metals** and showed **higher intracellular metal accumulation** than wild type [[braud-2010-siderophores-pseudomonas-metal-tolerance]].
- Adding purified PVD or PCH to siderophore-deficient strains **restored metal tolerance**.
- Five metals toxic at 100 uM to the mutant: Co2+, Cu2+, Ga3+, Ni2+, Sn2+.

## Nutritional Immunity Evasion

- The dual siderophore system gives *P. aeruginosa* a two-pronged strategy: acquire iron for growth while simultaneously detoxifying host-deployed metal poisons.
- Host calprotectin restricts Zn and Mn at infection sites; pseudopaline counteracts this.
- In the CF lung, chronic iron limitation drives PVD/PCH production, which in turn activates virulence gene expression -- creating a positive feedback loop between metal scarcity and pathogenicity.

## Disease Associations

- **Cystic fibrosis lung infections**: chronic colonizer, leading cause of morbidity/mortality in CF
- **Ventilator-associated pneumonia**
- **Burn wound infections**: thrives in the metal-rich wound environment
- **Chronic wound infections** (diabetic ulcers)
- **Urinary tract infections** (catheter-associated)
- **Bacteremia** in immunocompromised patients
- **Otitis externa** (swimmer's ear)

## Connection to Environmental Metal Exposure

- *P. aeruginosa* is ubiquitous in soil, water, and hospital environments where metal contamination is common.
- Its siderophore-based metal tolerance system means environmental metal pollution **selects for more virulent strains** (higher PVD/PCH production = more virulence gene activation).
- Nickel-contaminated water sources may promote *P. aeruginosa* populations with enhanced metal tolerance and virulence capacity.

## Connections

- [[metal-dependent-virulence]] -- Ni-GloI, Ni-ARD, Fe-regulated virulence factors
- [[nickel]] -- induces PVD production; acquired via pseudopaline; cofactor for GloI and ARD
- [[iron]] -- primary target of siderophore system; triggers virulence gene signaling
- [[staphylococcus-aureus]] -- parallel metallophore strategy (pseudopaline vs. staphylopine)
- [[nutritional-immunity]] -- siderophores counteract host metal restriction
- [[helicobacter-pylori]] -- both have Ni-dependent enzymes but use completely different acquisition strategies
