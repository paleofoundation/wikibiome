---
title: "Akiyama 2019 — Molecular Detection of Microbial Colonization in Cervical Mucus of Women With and Without Endometriosis"
type: source
created: 2026-04-19
updated: 2026-04-19
authors: [Kanoko Akiyama, Keisuke Nishioka, Khaleque N. Khan, Yukiko Tanaka, Taisuke Mori, Takaaki Nakaya, Jo Kitawaki]
corresponding_author: "Jo Kitawaki"
corresponding_email: "kitawaki@koto.kpu-m.ac.jp"
institution: "Department of Obstetrics and Gynecology, Graduate School of Medical Science, Kyoto Prefectural University of Medicine"
orcid: "0000-0002-3814-8639"
year: 2019
journal: "American Journal of Reproductive Immunology"
doi: "10.1111/aji.13147"
pmid: ""
evidence_level: cross-sectional
sample_size: "n=69 (30 endometriosis, 39 controls)"
tags: [endometriosis, cervical-mucus, microbiome, 16S-rRNA, NGS, enterobacteriaceae, streptococcus, innate-immunity, TLR4, LPS]
library_category: signatures
platform: both
condition: endometriosis
karen_brain_primitives: [1, 4, 9]
metals_discussed: []
taxa_discussed: [enterobacteriaceae, streptococcus, pseudomonas, corynebacterium, flavobacterium, lactobacillus, prevotella, gardnerella, escherichia-coli]
key_findings:
  - "Enterobacteriaceae and Streptococcus were significantly enriched in cervical mucus of women with endometriosis vs. controls (P < 0.05 by qRT-PCR)"
  - "Alpha diversity (Shannon index) was significantly higher in cervical mucus of endometriosis patients than controls (P < 0.05)"
  - "Cervical mucus microbiota composition did not differ by menstrual cycle phase in either group"
keystone: false
---

## Key Findings

- **Enterobacteriaceae and Streptococcus were significantly more abundant** in cervical mucus of women with endometriosis compared to controls, confirmed by both NGS and quantitative real-time PCR (P < 0.05 for each) ([[akiyama-2019-molecular-detection-cervical-mucus-endometriosis]], cross-sectional, n=69).
- **Alpha diversity was significantly higher** in the endometriosis group (Shannon index, P < 0.05), indicating a more diverse cervical mucus microbiota in women with the disease.
- **Corynebacterium, Pseudomonas, and Flavobacterium** were also elevated in the endometriosis group by NGS prevalence analysis, but did not reach significance by qRT-PCR.
- **No significant difference in Lactobacillus, Prevotella, or Gardnerella** prevalence between endometriosis and control groups.
- **Beta diversity (weighted UniFrac) showed no difference** in overall microbial community composition between groups or between menstrual cycle phases, suggesting high individual variability drives community structure rather than disease state or hormonal phase.

## Methods

- **Design:** Cross-sectional case-control comparison of cervical mucus microbiota.
- **Population:** 30 women with endometriosis (r-ASRM stage III-IV, laparoscopically confirmed) and 39 controls (fibroids or benign ovarian tumors). All reproductive age (20-44 years). Groups matched for age, BMI, parity, menstrual phase, smoking, and alcohol intake. Dysmenorrhea was significantly higher in the endometriosis group (73.3% vs 43.6%, P = 0.01).
- **Exclusions:** Malignancies, PID, bacterial vaginosis, endocrine disorders, endocrine therapy or antibiotics within 6 months. All had normal cervical appearance and negative vaginal cultures.
- **Sample collection:** Cervical mucus aspirated from cervical canal with sterile syringe after wiping to prevent vaginal contamination. Treated with Sputazyme to dissolve mucins.
- **Analysis pipeline:**
  1. Gram staining for visual confirmation of bacterial presence
  2. 16S rRNA gene sequencing (V5-V6 region) on Ion Torrent PGM
  3. QIIME 1.8.0 for OTU picking (97% identity, Greengenes 13_8), alpha diversity (Shannon index), beta diversity (weighted UniFrac)
  4. Quantitative real-time PCR with genus-specific primers for Enterobacteriaceae, Streptococcus, Pseudomonas, and Corynebacterium
- **Statistics:** Mann-Whitney U test and chi-squared test; P < 0.05 threshold.

## Detailed Summary

This study is the first comprehensive NGS-based analysis of cervical mucus microbiota comparing women with and without endometriosis. The authors' hypothesis builds on prior work by Khan et al. demonstrating that bacterial endotoxin (LPS) from Gram-negative bacteria is elevated in menstrual blood and peritoneal fluid of endometriosis patients, promoting disease growth via TLR4 signaling.

**Gram staining** confirmed heterogeneous bacterial populations in cervical mucus of both groups — Gram-positive rods (including Lactobacilli), Gram-negative rods, and Gram-positive cocci — with high individual variability.

**NGS analysis** showed Lactobacillus was dominant in both groups (40-60% prevalence). The endometriosis group had significantly higher alpha diversity. Five candidate taxa were identified as enriched in endometriosis: **Enterobacteriaceae** (P < 0.01 by NGS), **Corynebacterium** (P < 0.05), **Pseudomonas** (P < 0.01), **Flavobacterium** (P < 0.05), and **Streptococcus** (>1% in endometriosis group). Notably, bacterial vaginosis-associated organisms (Prevotella, Gardnerella) showed no difference.

**qRT-PCR validation** confirmed that only **Enterobacteriaceae** and **Streptococcus** maintained statistical significance (P < 0.05 each). Pseudomonas and Corynebacterium trended higher but were not significant. Total bacterial load (16S rRNA copy number) did not differ between groups (control: 9.6 x 10^5 copies/mL; endometriosis: 6.8 x 10^5 copies/mL, NS).

The authors propose a bidirectional pathway model: bacteria may ascend from cervical mucus to the uterine cavity (ascending pathway) or descend from the uterus through the cervical opening (descending pathway). Cervical mucus antimicrobial capacity varies with the menstrual cycle — beta-defensin and SLPI expression peak during the proliferative phase and decline toward menstruation, creating a window for bacterial transmigration during the late secretory/menstrual phase.

The authors connect their findings to the **bacterial contamination hypothesis** of endometriosis: *Escherichia coli* (a key Enterobacteriaceae member) carries LPS that activates TLR4 signaling in the peritoneum, promoting endometriosis growth. Streptococcal lipopeptides may similarly activate TLR2/TLR6 signaling. These findings align with prior NGS studies showing Streptococcaceae enrichment in uterine cavity and ovarian endometrioma cystic fluid.

**Limitations acknowledged:** Small sample size; genus-level resolution only (species-level analysis not reliable with this approach); only stage III-IV endometriosis studied (early-stage disease may differ).

## Relevance to WikiBiome

- Supports the [[bacterial-contamination-hypothesis]] entity/concept page: cervical mucus as a reservoir and transmission route for bacteria implicated in endometriosis pathogenesis.
- Enriches the [[endometriosis]] disease entity with cervical mucus microbiota data — a distinct sampling site from the vaginal, uterine, and peritoneal sites covered by other studies.
- Informs [[escherichia-coli]] entity page: E. coli as the key Enterobacteriaceae member in the cervical-to-uterine bacterial translocation pathway.
- Informs [[streptococcus]] entity page: enrichment in endometriosis cervical mucus with mechanistic link via TLR2/TLR6 lipopeptide signaling.
- Relevant to [[lactobacillus]] entity: demonstrates Lactobacillus dominance in cervical mucus is maintained in endometriosis (unlike vaginal dysbiosis patterns seen in other studies).
- Contributes to the concept of cervical mucus as an immunological barrier — connects to [[innate-immunity]] and antimicrobial peptide regulation by estrogen.

## Relevance to Cureva

- Supports the [[endometriosis-signature]] taxonomic layer: Enterobacteriaceae enrichment at the cervical mucus level is consistent with the broader pattern of Gram-negative enrichment across reproductive tract sampling sites in endometriosis.
- The LPS/TLR4 and lipopeptide/TLR2 mechanistic pathways provide rationale for interventions targeting innate immune modulation in endometriosis.
- The cervical mucus as a bacterial reservoir suggests that interventions targeting lower reproductive tract microbiota could have upstream effects on endometriosis pathogenesis — relevant for probiotic or antimicrobial intervention design.
- Supports primitive 1 (microbial selective pressures in the reproductive tract environment), primitive 4 (microbial colonization as a targetable vulnerability), and primitive 9 (ecological conditions in cervical mucus permitting pathogen persistence).

## Contradictions / Tensions

- **Beta diversity showed no significant community-level difference** between endometriosis and controls — the differences were taxon-specific, not community-wide. This contrasts with studies reporting broader community shifts in endometrial/peritoneal samples.
- **Lactobacillus was not depleted** in the endometriosis group's cervical mucus, unlike some vaginal microbiome studies of endometriosis that report reduced Lactobacillus dominance. This may reflect site-specific differences between vaginal and cervical mucus microbiota.
- **Total bacterial load was similar** between groups, suggesting the difference is compositional, not a matter of overall bacterial overgrowth.
- Only stage III-IV endometriosis was studied — findings may not generalize to early-stage disease, and association does not establish causality.

## Open Questions

1. **Does cervical mucus Enterobacteriaceae enrichment precede endometriosis development**, or is it a consequence of the altered pelvic immune environment? Longitudinal studies are needed.
2. **Species-level identification** within Enterobacteriaceae — is *E. coli* the dominant member, or are other genera (Klebsiella, Enterobacter) contributing?
3. **Is there a threshold of cervical mucus bacterial load** that triggers TLR4/TLR2 signaling sufficient to promote endometriosis growth?
4. **Does cervical mucus microbiota differ in stage I-II endometriosis** compared to stage III-IV?
5. **What is the metal dependency profile** of the enriched Enterobacteriaceae and Streptococcus populations? Iron acquisition (siderophores) by Enterobacteriaceae in the cervical mucus environment is unexplored but potentially relevant to the metallomic signature.
6. **Do antimicrobial peptide levels in cervical mucus** correlate with Enterobacteriaceae abundance in endometriosis patients?
