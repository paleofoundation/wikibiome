---
title: Ferritin
type: concept
created: 2026-04-18
updated: 2026-04-18
last_substantive_update: 2026-04-18
sources: [bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota, doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons, mishra-2022-molecular-mechanisms-heavy-metals-ckd]
source_count: 3
tags: [iron-storage, acute-phase-reactant, biomarker, nutritional-immunity, iron-homeostasis, IRP]
karen_brain_primitives: [1, 2, 8]
seo_target: "ferritin iron storage acute phase reactant biomarker"
platform: wikibiome
---

# Ferritin

The primary intracellular iron storage protein, capable of sequestering up to 4,500 iron atoms in a single molecule as a mineralized ferric oxyhydroxide core. Ferritin is one of the most elegant solutions evolution has produced for the iron paradox: iron is essential for life but toxic when free. By encapsulating iron in a protein shell, ferritin simultaneously keeps iron available for metabolic needs and prevents it from participating in [[fenton-chemistry]].

Ferritin is also an acute-phase reactant, which creates the same interpretive challenge seen with [[ceruloplasmin]]: elevated serum ferritin in disease may reflect iron overload, inflammation, or both.

## Structure and Function

### Iron Cage Architecture

- Ferritin is a hollow spherical shell composed of 24 subunits (H-chain and L-chain in varying ratios depending on tissue)
- H-chain (heavy): Contains ferroxidase activity that oxidizes Fe2+ to Fe3+ for safe mineralized storage
- L-chain (light): Facilitates iron nucleation and long-term storage
- The hollow interior accommodates up to 4,500 Fe3+ atoms as ferrihydrite mineral
- Iron enters through channels in the shell; release requires reduction back to Fe2+

### Regulation by Iron Regulatory Proteins

Ferritin expression is controlled post-transcriptionally by the IRP1/IRP2 system [[bao-2024-iron-homeostasis-intestinal-immunity-gut-microbiota]]:

- Low iron: IRP1/IRP2 bind the iron-responsive element (IRE) in ferritin mRNA 5'-UTR, blocking translation. Cell makes less ferritin, conserving iron for essential enzymes
- High iron: IRPs release from ferritin IRE, allowing translation. Cell makes more ferritin, sequestering excess iron
- Simultaneously, IRPs control transferrin receptor (inverse regulation), [[ferroportin]], and DMT1 expression
- This system creates coordinated iron homeostasis: when iron is scarce, import rises and storage falls; when iron is abundant, import falls and storage rises

## Clinical Significance

### The Dual Identity Problem

Serum ferritin serves as both an iron status marker and an inflammatory marker, creating diagnostic ambiguity:

| Scenario | Serum Ferritin | Interpretation |
|----------|---------------|----------------|
| True iron deficiency | Low (<30 ng/mL) | Iron stores depleted; supplementation appropriate |
| Iron overload | High (>300 ng/mL) | Excess iron in tissues; supplementation harmful |
| Inflammation without iron excess | High (acute-phase elevation) | Ferritin rises as an acute-phase reactant; iron stores may be normal or even depleted |
| Inflammatory iron trapping | High ferritin + low serum iron | [[hepcidin]]-mediated iron sequestration; iron is trapped in cells, not available systemically. This is functional deficiency, not true overload |

The last scenario is clinically critical and directly relevant to WikiBiome's iron supplementation STOP framework: high ferritin in IBD, CKD, or chronic infection does not mean iron supplementation should be withheld solely on ferritin levels. The key discriminator is [[hepcidin]] -- high hepcidin + high ferritin = functional restriction (treat inflammation); low hepcidin + low ferritin = true deficiency (supplement cautiously).

### Neurodegeneration

Elevated ferritin and reduced transferrin saturation in cerebrospinal fluid are early biomarkers of Alzheimer's disease progression [[doroszkiewicz-2023-common-trace-metals-alzheimers-parkinsons]]:

- CSF ferritin levels track with ApoE4 status and predict cognitive decline
- Iron accumulation in the hippocampus (stored partly as ferritin) correlates with disease severity
- When ferritin's capacity is overwhelmed, labile iron spills out, driving [[ferroptosis]]

### Chronic Kidney Disease

In CKD, ferritin interpretation is particularly challenging [[mishra-2022-molecular-mechanisms-heavy-metals-ckd]]:

- Chronic inflammation elevates ferritin as an acute-phase reactant
- Reduced erythropoietin production decreases iron utilization
- [[hepcidin]] accumulates (reduced renal clearance), trapping iron in macrophages and raising ferritin
- Guidelines use higher ferritin thresholds (>500 ng/mL) to define iron overload in CKD, acknowledging the inflammatory confound

## Bacterial Ferritins and the Infection Context

Bacteria produce their own ferritin-like proteins to manage intracellular iron:

- Dps (DNA-binding protein from starved cells): Protects DNA from Fe2+-mediated Fenton damage during oxidative stress
- Bacterioferritin (Bfr): Stores iron in a heme-containing shell
- Ferritin (Ftn): Classical ferritin, structurally similar to mammalian ferritin

Bacterial iron storage competes with host iron restriction strategies. When macrophages sequester iron in ferritin as part of [[nutritional-immunity]], intracellular pathogens must access this stored iron to survive -- making ferritin a battleground in the host-pathogen metal war.

## Connections

- [[iron]] -- ferritin is the primary intracellular iron storage protein
- [[hepcidin]] -- controls systemic iron flow; elevated hepcidin leads to ferritin accumulation
- [[ferroportin]] -- when ferroportin is degraded, iron accumulates in ferritin
- [[ferroptosis]] -- ferritin overflow releases labile iron that drives lipid peroxidation
- [[fenton-chemistry]] -- ferritin prevents Fenton reactions by sequestering Fe2+/Fe3+
- [[ceruloplasmin]] -- ferroxidase activity parallels ferritin H-chain function
- [[nutritional-immunity]] -- ferritin is part of the host's iron sequestration defense
- [[transferrin]] -- iron released from ferritin enters plasma via ferroportin and loads onto transferrin
