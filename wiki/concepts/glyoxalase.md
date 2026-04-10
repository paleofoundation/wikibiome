---
title: Glyoxalase I
type: concept
created: 2026-04-09
updated: 2026-04-09
sources: [maier-2019-nickel-microbial-pathogenesis.md, pendergrass-2026-nickel-nec-preterm-gut.md]
tags: [nickel-enzyme, glyoxalase, methylglyoxal, detoxification, drug-target, Leishmania, Pseudomonas, virulence, mis-metallation]
---

# Glyoxalase I (GloI)

The third [[nickel]]-dependent enzyme class in human pathogens, after [[urease]] and [[hydrogenase]]. Glyoxalase I detoxifies methylglyoxal, a reactive and toxic byproduct of glycolysis. While less well-known than urease or hydrogenase as a virulence factor, GloI is emerging as a significant drug target because of a striking difference between host and pathogen: **human GloI uses zinc, while pathogen GloI uses nickel**. This metal selectivity difference creates an opportunity for selective inhibitors.

## Biochemistry

### The glyoxalase system

The glyoxalase system is a two-enzyme detoxification pathway present in virtually all organisms:

1. **Glyoxalase I (GloI)** / lactoylglutathione lyase (EC 4.4.1.5): catalyzes the isomerization of the hemithioacetal formed spontaneously between **methylglyoxal and glutathione (GSH)** to **S-D-lactoylglutathione**.
2. **Glyoxalase II (GloII)** / hydroxyacylglutathione hydrolase: hydrolyzes S-D-lactoylglutathione to **D-lactate**, regenerating free GSH.

> Methylglyoxal + GSH --> (spontaneous) hemithioacetal --> (GloI) S-D-lactoylglutathione --> (GloII) D-lactate + GSH

### Why methylglyoxal is dangerous

Methylglyoxal (MG) is an unavoidable byproduct of glycolysis, produced primarily from the non-enzymatic decomposition of the triose phosphate intermediates dihydroxyacetone phosphate (DHAP) and glyceraldehyde-3-phosphate (G3P). MG is a potent electrophile that:

- **Modifies DNA**: forms adducts with guanine (mutagenic).
- **Modifies proteins**: glycates arginine and lysine residues, forming advanced glycation end-products (AGEs).
- **Crosslinks proteins**: inactivates enzymes and structural proteins.
- **Induces apoptosis**: at high concentrations.

Without GloI, methylglyoxal accumulates to lethal concentrations during active glycolysis. Any rapidly growing pathogen is under constant methylglyoxal stress.

### Two distinct GloI classes -- the metal selectivity divide

This is the central biochemical insight for pathogen biology:

| Feature | Eukaryotic/mammalian GloI | Prokaryotic/pathogen GloI |
|---|---|---|
| **Metal cofactor** | **Zn2+** | **Ni2+** (or Co2+) |
| **Quaternary structure** | Homodimer | Homodimer |
| **Active site** | 1 Zn per subunit | 1 Ni (or Co) per subunit |
| **Distribution** | Mammals, plants, yeast | Bacteria, protozoan parasites |
| **Representative** | Human GloI (GLO1) | *E. coli* GlxI, *P. aeruginosa* GloI |

The Ni2+-dependent GloI class is activated by nickel or cobalt but **not by zinc**. Conversely, the Zn2+-dependent class is activated by zinc but **not by nickel**. This metal selectivity is determined by the active-site geometry and ligand environment and represents a deep evolutionary divergence.

## The Ni-Dependent GloI in Pathogens

### Confirmed Ni-GloI pathogens

The following pathogens have been experimentally confirmed or strongly predicted to possess Ni-dependent GloI [[[maier-2019-nickel-microbial-pathogenesis]]]:

**Bacterial pathogens:**
- **[[pseudomonas-aeruginosa]]**: Ni-GloI characterized biochemically; detoxifies methylglyoxal during rapid growth in the CF lung and wound infections.
- **[[neisseria-meningitidis|*Neisseria meningitidis*]]**: Ni-GloI confirmed; relevant to meningococcal meningitis.
- **Neisseria gonorrhoeae**: Ni-GloI; relevant to gonorrhea pathogenesis.
- **Yersinia pestis**: Ni-GloI; the plague agent must maintain glycolytic flux during explosive growth in the host.
- **Clostridium acetobutylicum**: Ni-GloI **co-crystallized with nickel** -- providing direct structural evidence for the Ni active site.
- **Other Clostridia**: including pathogenic species such as *C. difficile* (predicted).

**Predicted Ni-GloI across Enterobacteriaceae** (based on genome analysis):
- [[escherichia-coli]] (GlxI experimentally confirmed to require Ni2+)
- *Enterobacter* spp.
- *Klebsiella* spp. (including *K. pneumoniae*)
- *Morganella* spp.
- [[proteus-mirabilis]] and *Proteus* spp.
- *Providencia* spp.
- *Serratia* spp.
- [[salmonella-typhimurium]] and *Salmonella* spp.

This means **ALL Enterobacteriaceae** -- the dominant family of Gram-negative pathogens -- are expected to use Ni-GloI for methylglyoxal detoxification.

### Eukaryotic pathogens with Ni-GloI

The Ni-dependent GloI class is not restricted to prokaryotes. It has been identified in protozoan parasites:

- **Leishmania major**: Ni-GloI characterized.
- **Trypanosoma cruzi**: Ni-GloI identified (Chagas disease agent).
- **Leishmania donovani**: the *glo-I* gene is **ESSENTIAL** -- glo-I mutants show reduced methylglyoxal detoxification and are **not viable**. This makes GloI a validated and proposed **drug target for visceral leishmaniasis** [[[maier-2019-nickel-microbial-pathogenesis]]].

The presence of Ni-GloI in both prokaryotic and eukaryotic pathogens suggests this metal preference predates the prokaryote-eukaryote split or arose through horizontal gene transfer in parasitic lineages.

## Role in Pathogenesis

### Methylglyoxal detoxification under metabolic stress

During infection, pathogens frequently experience conditions that increase glycolytic flux and methylglyoxal production:
- **Nutrient limitation**: forces reliance on glucose catabolism.
- **Oxidative stress**: damages metabolic enzymes, leading to triose phosphate accumulation.
- **Rapid growth**: during acute infection, high glycolytic throughput generates more methylglyoxal.
- **Inflammatory environment**: the host oxidative burst and nutrient restriction compound metabolic stress.

Ni-GloI maintains the pathogen's metabolic flux by preventing methylglyoxal from accumulating to toxic levels. Without functional GloI, the pathogen's own glycolysis becomes self-poisoning.

### NEC-associated pathogens

In the preterm gut, Ni-activated GloI helps NEC-associated *E. coli* survive metabolic stress during the inflammatory cascade of necrotizing enterocolitis [[[pendergrass-2026-nickel-nec-preterm-gut]]]. Dietary nickel from infant formula provides the cofactor that activates this survival enzyme.

### Potassium efflux

In *E. coli*, the GloI product **S-D-lactoylglutathione** has been demonstrated to stimulate **potassium efflux** through KefB and KefC channels. This potassium release:
- Acidifies the cytoplasm.
- Activates protective stress responses.
- May function as a signaling molecule coordinating metabolic stress with ion homeostasis.

This means GloI has downstream effects beyond simple detoxification -- it connects methylglyoxal metabolism to cellular ion balance and stress signaling.

## Therapeutic Potential

### The selective inhibitor opportunity

The most compelling therapeutic angle for Ni-GloI is the **metal selectivity difference** between host and pathogen:

- **Human GloI**: Zn-dependent. Essential for human cells (GLO1 deficiency is linked to diabetic complications and AGE accumulation).
- **Pathogen GloI**: Ni-dependent. Same reaction, different metal, different active-site architecture.

This means it should be possible to design **selective inhibitors that target the Ni-dependent active site** without affecting human Zn-GloI. The structural differences between the two metal-binding sites provide a basis for selectivity.

### Drug target validation in Leishmania

*Leishmania donovani* provides the strongest drug target validation:
- The *glo-I* gene is **essential for viability** -- knockout mutants are lethal.
- Visceral leishmaniasis (kala-azar) kills an estimated 20,000-30,000 people annually.
- Current treatments (antimonials, amphotericin B, miltefosine) have significant toxicity and resistance problems.
- A Ni-GloI-specific inhibitor could be a novel antileishmanial drug class with a completely new mechanism of action.

### Broader anti-infective potential

If selective Ni-GloI inhibitors can be developed, they could theoretically target:
- All Enterobacteriaceae (including multidrug-resistant *E. coli*, *Klebsiella*, *Salmonella*).
- *P. aeruginosa* (including carbapenem-resistant strains).
- *Neisseria* species (meningitis, gonorrhea).
- *Yersinia pestis* (plague).
- Protozoan parasites (*Leishmania*, *Trypanosoma*).

This breadth of potential targets makes Ni-GloI inhibitor development an attractive but underexplored anti-infective strategy.

## Connection to Nickel Biology

### Nickel ties GloI to the broader urease/hydrogenase story

GloI extends the nickel-pathogen narrative beyond the well-characterized [[urease]] and [[hydrogenase]] systems. While urease and hydrogenase have obvious virulence phenotypes (acid survival, energy generation, CagA translocation), GloI represents a more subtle dependency: **metabolic housekeeping that enables sustained pathogen growth**.

A pathogen colonizing a host needs all three:
1. **Urease** to survive acid stress.
2. **Hydrogenase** to generate energy from H2.
3. **GloI** to detoxify the methylglyoxal produced by its own glycolysis.

All three require nickel. This means **nickel restriction** (dietary, chelation-based, or host-mediated) potentially disables three independent virulence/survival pathways simultaneously.

### Mis-metallation in reverse

The host-vs-pathogen metal selectivity of GloI is a striking example of what might be called **[[mis-metallation]] in reverse**:

- Normally, mis-metallation refers to the wrong metal being inserted into an enzyme (e.g., manganese replacing iron under oxidative stress).
- With GloI, the same enzyme performs the same reaction but has **evolved to use different metals** in host (Zn) vs. pathogen (Ni). This is not mis-metallation but rather **divergent metallation** -- the same protein fold adapted to different metal environments.
- The pathogen GloI's preference for nickel may reflect the generally lower zinc availability and higher nickel availability in microbial evolutionary niches (soil, water, gut lumen) compared to the zinc-rich, nickel-poor mammalian intracellular environment.

## Connections

- [[nickel]] -- essential cofactor for the pathogen GloI active site
- [[zinc]] -- cofactor for the human GloI; the Ni-vs-Zn selectivity is key to therapeutic potential
- [[pseudomonas-aeruginosa]] -- key model for bacterial Ni-GloI
- [[escherichia-coli]] -- GlxI confirmed Ni-dependent; NEC-associated metabolic stress survival
- [[salmonella-typhimurium]] -- predicted Ni-GloI across all Enterobacteriaceae
- [[proteus-mirabilis]] -- predicted Ni-GloI
- [[urease]] -- the most widespread Ni-enzyme; GloI adds a third dimension to nickel-dependent virulence
- [[hydrogenase]] -- the second Ni-enzyme; GloI completes the triad
- [[metal-dependent-virulence]] -- GloI as the third Ni-virulence factor class
- [[mis-metallation]] -- divergent metallation of GloI (Ni in pathogens vs. Zn in host) exemplifies metal-dependent enzyme evolution
- [[nutritional-immunity]] -- nickel sequestration by calprotectin/lactoferrin would inhibit pathogen GloI alongside urease and hydrogenase
- [[pathogen-metal-acquisition]] -- nickel transport systems feed GloI metalation
