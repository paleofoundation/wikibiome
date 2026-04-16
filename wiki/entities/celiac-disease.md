---
title: Celiac Disease
type: entity
subtype: disease
created: 2026-04-13
updated: 2026-04-13
sources: [borghini-2020-low-nickel-diet-celiac]
tags: [autoimmune, gluten, intestinal, malabsorption, nickel, dietary, gut-barrier]
platform: wikibiome
last_substantive_update: 2026-04-13
associated_conditions: [hashimotos-thyroiditis, type-1-diabetes, ibs, inflammatory-bowel-disease]
shared_signature_metals: {hashimotos-thyroiditis: [iron, zinc, selenium], type-1-diabetes: [zinc, iron], ibs: [iron, zinc], inflammatory-bowel-disease: [iron, zinc]}
shared_signature_taxa: {hashimotos-thyroiditis: [lactobacillus, bifidobacterium, proteobacteria], type-1-diabetes: [bifidobacterium-depleted, bacteroides], ibs: [bifidobacterium-depleted, lactobacillus-depleted], inflammatory-bowel-disease: [faecalibacterium-depleted, lachnospiraceae-depleted]}
seo_target: "celiac disease microbiome nickel gluten-free diet metals"
wikipedia_differentiation: "Gluten-free diet nickel paradox showing how GFD substitute foods increase dietary nickel exposure, triggering nickel allergic contact mucositis that mimics celiac symptoms and confounds clinical management"
---

**Celiac disease** is a chronic autoimmune condition triggered by dietary gluten (gliadin proteins from wheat, barley, and rye) in genetically susceptible individuals (HLA-DQ2/DQ8, carried by ~30-40% of Europeans but penetrant in only ~1% of carriers). Gluten exposure causes immune-mediated destruction of small intestinal villi (Marsh grade 3 villous atrophy at diagnosis), resulting in malabsorption of iron, zinc, selenium, copper, calcium, magnesium, folate, and fat-soluble vitamins. Global prevalence is ~0.7-1.4% by serology, with clinical diagnosis lagging considerably (Singh et al. 2018 meta-analysis; Lebwohl & Rubio-Tapia 2021).

The pathogenesis proceeds in three coupled steps: (1) intestinal permeability allows gliadin to reach the lamina propria; (2) tissue transglutaminase 2 (tTG2) deamidates gliadin peptides, enhancing HLA-DQ2/DQ8 binding affinity; (3) CD4+ T cells activate against deamidated gliadin, and intraepithelial lymphocytes driven by IL-15 lyse enterocytes. Each step is modifiable by the gut microbiome and by metal status.

## Metallomic Angle

Celiac disease is notable in this knowledge base for a paradoxical metal intersection with nickel:

**The gluten-free diet (GFD) paradox with nickel:** The standard treatment for celiac disease is strict adherence to a gluten-free diet. However, many gluten-free substitute foods (rice, corn, oats, soy, pseudocereals like quinoa and amaranth) are **high-nickel foods**. Patients who switch to a GFD to manage celiac symptoms may simultaneously increase their dietary nickel intake, triggering **[[nickel-allergy|Nickel Allergic Contact Mucositis (NACM)]]** — a systemic allergic response to nickel that causes gastrointestinal symptoms overlapping significantly with celiac symptoms (bloating, diarrhea, pain). This creates diagnostic confusion and can lead to inadequate management of both conditions simultaneously [[borghini-2020-low-nickel-diet-celiac]].

**Iron and zinc malabsorption:** Villous atrophy in celiac disease severely impairs absorption of iron and zinc from the upper small intestine, causing deficiencies that mirror the metallomic pattern of nutritional immunity but arise from absorptive failure rather than host sequestration. Distinguishing true absorptive iron deficiency (celiac-driven) from functional anemia requires celiac antibody testing and duodenal biopsy.

## Microbiome Signature

Celiac disease is associated with a characteristic gut dysbiosis documented in both active disease and treated (GFD-adherent) patients:

**Depleted:**
- [[bifidobacterium]] (especially *B. longum* and *B. adolescentis*) -- consistently reduced across paediatric and adult cohorts (Collado et al. 2009; De Palma et al. 2010; Golfetto et al. 2014)
- [[lactobacillus]] -- reduced luminal and mucosal populations, correlating with impaired gluten peptide degradation
- *Faecalibacterium prausnitzii* and other [[lachnospiraceae]] -- butyrate producers whose loss worsens epithelial energy deficit in the setting of villous atrophy
- *Prevotella* spp. -- depleted in active disease

**Enriched:**
- [[proteobacteria]] at phylum level (a consistent dysbiosis marker)
- [[escherichia-coli]] -- some strains express proteolytic activity that enhances rather than reduces gliadin immunogenicity (Caminero et al. 2019, *Gastroenterology*)
- *Staphylococcus* spp.
- *Bacteroides fragilis* -- elevated proteolytic strains that deamidate gliadin peptides similarly to tTG2, priming HLA-DQ2 presentation

**Mechanistic bridge:** Caminero et al. (2016, *Gut*) showed that lactobacilli from healthy subjects fully degrade the immunogenic 33-mer gliadin peptide, while pseudomonal and *E. coli* proteases from celiac patients only partially cleave it, generating residual epitopes that remain antigenic. This establishes the microbiome as a **checkpoint on gluten immunogenicity** rather than a passive observer. Wheat-associated *Pseudomonas aeruginosa* specifically produces elastase-like proteases that generate more, not fewer, HLA-DQ2-binding peptides.

This dysbiosis pattern overlaps substantially with other conditions in this knowledge base, suggesting shared metal-microbiome mechanisms may operate in celiac disease beyond the primary gluten-immune axis.

## Metabolomic Signature

- **Short-chain fatty acids** ([[butyrate]], propionate, acetate) -- reduced due to depletion of SCFA-producing *Faecalibacterium* and *Lachnospiraceae*; compounds epithelial repair deficit.
- **Tryptophan metabolites** -- altered indole/AhR ligand production due to loss of *Lactobacillus reuteri* and related species, impairing [[ahr]] signalling and Treg induction (Lamas et al. 2016).
- **Bile acids** -- secondary bile acid profile shifted in treated celiac patients (Wacklin et al. 2014), with implications for FXR-mediated intestinal barrier regulation.
- **Zonulin** -- elevated serum levels signal active tight-junction disassembly; a biomarker of the "leaky gut" phase of celiac pathogenesis.

## Relationship to [[low-nickel-diet]]

The combined gluten-free + low-nickel diet (GFD+LNiD) has been studied specifically in celiac patients who also have Nickel Allergic Contact Mucositis. A combined elimination diet produces superior symptom resolution compared to GFD alone in patients with both conditions, establishing that nickel and gluten represent independent but co-occurring triggers in a subset of celiac patients [[borghini-2020-low-nickel-diet-celiac]].

## Associated Conditions and Shared Signatures

Celiac disease shares serological, genetic, and microbial patterns with several other conditions:

- **[[type-1-diabetes]]** -- shared HLA-DQ2/DQ8 risk haplotypes; ~8% of T1D patients carry celiac antibodies. Both conditions feature early-life *Bifidobacterium* depletion and altered mucosal tolerance.
- **[[hashimotos-thyroiditis]]** -- ~4-5x increased prevalence of celiac among autoimmune thyroid patients; shared selenium and iron malabsorption may worsen thyroid hormone synthesis.
- **[[dermatitis-herpetiformis]]** -- essentially cutaneous celiac disease; IgA anti-tTG deposits in skin. Most DH patients have some degree of villous atrophy.
- **[[ibs]]** -- overlapping symptoms create diagnostic ambiguity; a subset of "IBS" patients are misdiagnosed celiacs and vice versa. Both show *Bifidobacterium* and *Faecalibacterium* depletion.
- **[[inflammatory-bowel-disease]]** -- modest bidirectional association; shared features include increased intestinal permeability and *Proteobacteria* bloom.
- **Non-celiac gluten sensitivity (NCGS)** -- distinct from celiac but symptomatically overlapping; microbiome signatures intermediate between celiac and healthy controls.

## Cross-References

- [[low-nickel-diet]] — the intervention with documented benefit in celiac + NACM overlap
- [[nickel-allergy]] — Nickel Allergic Contact Mucositis (NACM); the overlapping condition
- [[dietary-nickel-exposure]] — gluten-free foods as a high-nickel exposure pathway
- [[iron]] — malabsorption as a mechanism distinct from nutritional immunity
- [[zinc]] — malabsorption in untreated celiac disease
- [[gut-microbiome]] — dysbiosis co-occurring with celiac
- [[type-1-diabetes]] — shared autoimmune HLA-DQ associations and Bifidobacterium depletion
- [[hashimotos-thyroiditis]] — autoimmune comorbidity with shared metal malabsorption (iron, zinc, selenium)
- [[intestinal-permeability]] — villous atrophy and tight junction disruption drive nutrient malabsorption
- [[zonulin]] — gluten-triggered zonulin release increases intestinal permeability in celiac disease
- [[bifidobacterium]] — consistently depleted in celiac gut; loss impairs barrier support and immune tolerance
