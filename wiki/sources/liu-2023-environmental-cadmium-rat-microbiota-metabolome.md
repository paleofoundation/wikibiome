---
title: "Liu 2023 — Environmental cadmium exposure alters the internal microbiota and metabolome of Sprague–Dawley rats"
type: source
created: 2026-04-14
updated: 2026-04-14
authors: [Liu S, Deng X, Li Z, Zhou W, Wang G, Zhan J, Hu B]
corresponding_author: "Jiasui Zhan / Binhong Hu"
corresponding_email: "jiasui.zhan@slu.se; binhong.hu@slu.se"
institution: "Chengdu Normal University, China; Swedish University of Agricultural Sciences"
year: 2023
journal: "Frontiers in Veterinary Science"
doi: "10.3389/fvets.2023.1219729"
evidence_level: animal-model
sample_size: "n=24 female SD rats (12 control, 12 Cd-exposed)"
tags: [cadmium, gut-microbiome, blood-microbiome, metabolomics, translocation, intestinal-barrier, ZO-1, SCFAs, uremic-toxins, indoxyl-sulfate, p-cresol-sulfate]
library_category: heavy-metals
platform: both
condition: "cadmium toxicity"
karen_brain_primitives: [1, 3]
metals_discussed: [cadmium]
taxa_discussed: [clostridia-ucg-014, nk4a214-group, lachnospiraceae-nk4b4-group, christensenellaceae-r-7-group, corynebacterium, muribaculaceae, atopostipes, acinetobacter, bacillus, ralstonia, muribaculaceae, sediminibacterium, escherichia]
key_findings:
  - "Cd exposure (5 mg/kg oral gavage, 30 days) disrupted intestinal tight junction (ZO-1 decreased, TNF-α and IL-6 increased) and caused translocation of Corynebacterium and Muribaculaceae from gut into blood"
  - "Gut microbiota shifted to enrich harmful taxa (Clostridia_UCG_014, NK4A214_group, Lachnospiraceae_NK4B4, Christensenellaceae_R_7); Clostridia_UCG_014 is a T2DM-linked proinflammatory bacterium, positively correlating with TNF-α and blood glucose"
  - "Serum metabolomics revealed upregulation of uremic toxins (indoxyl sulfate, phenyl sulfate, p-cresol sulfate) and downregulation of 6-tocopherol, L-glutamine, and sphingosine — identifying 22 candidate Cd-toxicity biomarkers"
---

# Liu 2023 — Environmental cadmium exposure alters the internal microbiota and metabolome of Sprague–Dawley rats

**Citation:** Liu S, Deng X, Li Z, Zhou W, Wang G, Zhan J, Hu B. *Environmental cadmium exposure alters the internal microbiota and metabolome of Sprague–Dawley rats.* Frontiers in Veterinary Science. 2023;10:1219729. DOI: [10.3389/fvets.2023.1219729](https://doi.org/10.3389/fvets.2023.1219729)

## Key Findings

- **Intestinal barrier disruption by Cd.** CdCl₂ at 5 mg/kg oral gavage for 30 days significantly reduced **ZO-1** expression in intestine (p<0.05) and elevated **TNF-α** and **IL-6** in both intestinal tissue and blood (p<0.05). This leaky gut enabled translocation of intestinal bacteria into blood circulation.
- **Gut microbial enrichment of harmful taxa.** In gut, Cd exposure enriched **Clostridia_UCG_014**, **NK4A214_group**, **Lachnospiraceae_NK4B4_group**, and **Christensenellaceae_R_7_group** (LDA≥3, p<0.05). Clostridia_UCG_014 — a known T2DM-associated proinflammatory bacterium — positively correlated with intestinal TNF-α (Spearman, p<0.05).
- **Blood microbiome translocation.** Cd exposure translocated **Corynebacterium** and **Muribaculaceae** into blood, with Muribaculaceae rising from undetectable in controls to significant abundance in Cd-exposed animals. **Actinobacteriota** at phylum level decreased in gut but increased in blood. Corynebacterium is a known bacteremia marker; Muribaculaceae is associated with mucus layer degradation.
- **Serum metabolome perturbation.** 233 differential metabolites identified; 22 candidate Cd-toxicity biomarkers (12 upregulated, 10 downregulated). Upregulated: **indoxyl sulfate**, **phenyl sulfate**, **p-cresol sulfate** (all uremic toxins produced by gut bacteria), **L-stearoyl cysteine**, sphingosine. Downregulated: **6-tocopherol** (vitamin E — anti-inflammatory, prevents PhIP/DSD-induced colon cancer), **L-glutamine** (primary intestinal mucosal energy source), citrulline.
- **Metabolic pathway disruption.** KEGG enrichment showed alpha-linolenic acid metabolism (downregulated), glycerophospholipid metabolism, sphingolipid metabolism, necroptosis, choline metabolism in cancer, and arachidonic acid metabolism all perturbed.

## Methods

24 female Sprague–Dawley rats (6–8 weeks, 180–210 g). 7-day acclimation, then 30-day oral gavage: 12 controls (saline) vs. 12 CdCl₂ (5 mg/kg body weight). Serum and intestinal + blood microbiome collected at sacrifice. 16S rRNA V3–V4 Illumina NovaSeq sequencing. Serum metabolomics: LC-MS (AB SCIEX Triple TOF 5600) with ESI+ and ESI- modes. ZO-1, TNF-α, IL-6 quantified by ELISA. Spearman correlation between microbiome, metabolites, and inflammatory markers.

## Relevance to WikiBiome

- **[[cadmium]]** entity page — adds mechanistic detail: Cd disrupts ZO-1, translocates bacteria into blood, generates uremic toxins via microbial perturbation.
- **[[muribaculaceae]]** — document Cd-driven translocation from gut to blood; mucin-monosaccharide energy source → mucin layer degradation → permeability feedback loop.
- **[[corynebacterium]]** — Cd drives gut-to-blood translocation; bacteremia marker.
- **[[intestinal-barrier]]** / **[[leaky-gut]]** concept — Cd as a ZO-1 disruptor.
- **[[uremic-toxins]]** concept — indoxyl sulfate, phenyl sulfate, p-cresol sulfate as Cd-driven gut-bacterial metabolites linking heavy metal exposure to CKD pathophysiology.

## Relevance to Cureva

- Mechanistic support for **[[cadmium-gut-dysbiosis]]** pathway — Cd exposure → barrier loss → bacterial translocation → systemic inflammation → uremic toxin accumulation.
- Cross-condition: indoxyl/p-cresol sulfates are canonical CKD toxins and also implicated in cardiovascular disease — creates mechanistic bridge between Cd exposure, microbiome, CKD, and CVD signatures.
- Candidate intervention targets: ZO-1 restoration (glutamine, 6-tocopherol), alpha-linolenic acid supplementation (inhibits inflammation, restores barrier), Muribaculaceae suppression.

## Contradictions / Tensions

- PCoA showed no significant α- or β-diversity difference between Cd and control gut microbiomes (PERMANOVA p=0.4), despite clear LEfSe-level enrichment. Suggests that taxa-specific shifts matter more than diversity metrics in Cd exposure — contrasts some reports that emphasize diversity loss.
- Rat model — needs replication in humans, especially at environmentally relevant doses (NHANES populations).

## Open Questions

- Whether Muribaculaceae translocation is specific to Cd or occurs with other heavy metals (Pb, As, Hg).
- Whether 6-tocopherol or L-glutamine supplementation reverses the Cd-induced barrier defect.
- Whether the Clostridia_UCG_014 enrichment is a driver or consequence of the inflammatory state.

<!-- Karen's Brain primitives: 1 (Cd as selective pressure favoring Clostridia_UCG_014), 3 (mis-metallation / toxic metal entry — Cd disrupts Ca-dependent ZO-1 and enters gut via divalent cation transporters) -->
