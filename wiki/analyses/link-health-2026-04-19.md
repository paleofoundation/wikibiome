---
title: "Link Health Audit — 2026-04-19"
type: analysis
platform: cureva
created: 2026-04-19
updated: 2026-04-19
sources: []
tags: [lint, link-health, doi-validation, audit]
---

# Link Health Audit — 2026-04-19

Run mode: **online**

## DOI audit

- Total source pages: 1716
- Format-valid DOIs: 1515
- Missing (`doi:` field empty): 0
- Explicitly not-applicable: 0
- Marked `not yet verified`: 201
- Bad format: 0

## Crossref resolution failures

These are the "first part of the link is correct, but then the link is wrong" bugs — DOIs that look valid but do not resolve to the stored paper.

### DOI not found in Crossref

These DOIs return 404 from api.crossref.org. Nearly all of these are fabricated — the journal prefix is usually correct but the article number does not exist.

| File | Stored DOI | Stored title |
|---|---|---|
| `aho-2019-gut-microbiome-disease-progression-parkinsons.md` | `10.1038/s40035-019-0175-7` | Aho 2019 -- Gut Microbiome and Disease Progression in Parkinson's Disease |
| `akdag-2023-heavy-metal-toxicity-autism-risk-factor.md` | `10.5606/jebms.2023.1065` | Akdag 2023 — Heavy Metal Toxicity: A Potential Risk Factor for Autism |
| `azami-2019-anemia-ppd-meta-analysis.md` | `10.22088/cjim.10.2.115` | The association between anemia and postpartum depression: A systematic review and meta-analysis |
| `barrea-2019-mediterranean-diet-pcos.md` | `10.3390/nu11061594` | Adherence to the Mediterranean Diet, Dietary Patterns and Body Composition in Women with Polycystic  |
| `basal-ganglia-review-parkinsons-systematic.md` | `10.1016/j.baga.2020.100142` | Obeso 2020 -- Basal Ganglia Dysfunction in Parkinson's Disease: A Systematic Review |
| `bisht-2024-malonate-lung-pseudomonas-metal-stress.md` | `10.21203/rs.3.rs-4422908/v1` | Bisht 2024 — Malonate Is Relevant to the Lung Environment and Induces Genome-Wide Stress Responses i |
| `bopp-2024-o2-uncoupling-rieske-oxygenase-iron-ros-adaptation.md` | `10.1021/acsenvironau.4c00018` | Bopp 2024 — Elucidating the Role of O2 Uncoupling for the Adaptation of Bacterial Biodegradation Rea |
| `brown-2024-covid-19-neuroinflammation-pathophysiology.md` | `10.1136/bmj.p1410` | Brown et al. 2024 — Pathophysiology, Diagnosis, and Management of Neuroinflammation in COVID-19 |
| `chairatana-2015-salmochelin-pathogen-selective-killing.md` | `10.1039/c5sc0962f` | Chairatana et al. 2015 — Salmochelin Conjugates for Pathogen-Selective Killing |
| `chao-2025-microbiota-gut-brain-perinatal-depression.md` | `10.2174/011570159X338046625071006140` | Chao 2025 — The Role of the Microbiota-Gut-Brain Axis in Perinatal Depression: Novel Insights for Tr |
| `chen-2022-16s-rrna-microbial-blood-parkinsons.md` | `10.3389/fnagi.2022.1010560` | Chen 2022 -- Detection of Microbial 16S rRNA Gene in the Blood of Patients with Parkinson's Disease |
| `chen-2022-living-microorganisms-detoxification-heavy-metals.md` | `10.3390/foods11091017` | Potential Application of Living Microorganisms in the Detoxification of Heavy Metals |
| `chen-2024-graves-ra-bidirectional-mr.md` | `10.3389/fendo.2023.1283698` | Graves' Disease and Rheumatoid Arthritis: A Bidirectional Mendelian Randomization Study |
| `chiang-2022-microbiota-gut-brain-axis-dysregulation-parkinsons.md` | `10.3389/fneur.2022.928916` | Chiang 2022 -- The Role of the Microbiota-Gut-Brain Axis and Intestinal Microbiome Dysregulation in  |
| `choi-2020-16s-blood-microbial-dna-parkinsons.md` | `10.1186/s12974-020-01747-w` | Choi 2020 -- Detection of Microbial 16S rRNA Gene in the Blood of Patients with Parkinson's Disease |
| `cilia-2020-microbiome-gut-dietary-interventions-parkinsons.md` | `10.2174/1871527319666200729143555` | Cilia 2020 -- Microbiome-Gut-Brain Axis and Dietary Interventions in Parkinson's Disease |
| `critchlow-2025-zinc-metalloprotein-migc-cell-wall-acinetobacter.md` | `10.1371/journal.ppat.1012948` | Critchlow 2025 — The Zinc Metalloprotein MigC Impacts Cell Wall Biogenesis Through Interactions with |
| `cummings-1992-fecal-weight-colon-cancer-fiber.md` | `10.1016/0016-5085(92)91357-A` | Fecal Weight, Colon Cancer Risk, and Dietary Intake of Nonstarch Polysaccharides (Dietary Fiber) |
| `dorsey-2018-parkinsons-incidence-meta-analysis.md` | `10.1212/WNL.0000000000006258` | Dorsey 2018 -- The Incidence of Parkinson's Disease: A Systematic Review and Meta-Analysis |
| `elnahas-2005-ckd-global-challenge.md` | `10.1016/S0140-6736(05)17986-7` | El Nahas & Bello 2005 — Chronic Kidney Disease: The Global Challenge |
| `golden-2024-metal-chelation-antibacterial-pseudomonas-acinetobacter.md` | `10.1039/c4cb00175c` | Golden et al. 2024 — Metal Chelation as Antibacterial Strategy Against Pseudomonas and Acinetobacter |
| `harbi-2024-lactobacillus-candida-thyroid-disorders.md` | `10.54633/2333-049-016` | The Occurrence of Lactobacillus and Candida albicans in Patients with Thyroid Disorders |
| `hatton-2022-diet-parkinsons-critical-role-microbiome.md` | `10.3389/fnut.2022.921388` | Hatton 2022 -- Diet in Parkinson's Disease: Critical Role for the Microbiome |
| `helmann-2025-labile-metal-pools-bacteria.md` | `10.1021/acs.biochem.4c00684` | Helmann 2025 — Metals in Motion: Understanding Labile Metal Pools in Bacteria |
| `hiremath-2021-zinc-ppd-case-control.md` | `10.7860/JCDR/2021/48341.14649` | Correlation of Serum Zinc Levels with Postpartum Depression - A Case-control Study in North Karnatak |
| `ibrahim-2023-oral-dysbiosis-parkinsons-systematic-review.md` | `10.1080/20002297.2023.2155194` | Ibrahim 2023 -- Association Between Oral Dysbiosis and Parkinson's Disease: A Systematic Review |
| `irfan-2017-comparative-heavy-metals-ra.md` | `10.1002/mnfr.202400571` | Comparative Evaluation of Heavy Metals in Patients with Rheumatoid Arthritis and Healthy Control in  |
| `islam-2022-metal-toxicity-alzheimers-extensive-review.md` | `10.1038/s44439-024-00009-w` | Exposure of metal toxicity in Alzheimer's disease: An extensive review |
| `jackson-2012-arsenic-infant-formulas-first-foods.md` | `10.1351/PAC-CON-11-07-39` | Arsenic concentration and speciation in infant formulas and first foods |
| `jiang-2021-copper-pcos-meta-analysis.md` | `10.3346/jkms.2021.36.15.e120` | Serum Copper Level and Polycystic Ovarian Syndrome: A Meta-Analysis |
| `jiang-2021-gut-dysbiosis-treg-th17-graves.md` | `10.3389/fcimb.2021.739481` | Gut Dysbiosis Contributes to the Imbalance of Treg and Th17 Cells in Graves' Disease |
| `jiang-2023-gut-microbiome-metabolites-graves.md` | `10.3389/fimmu.2023.1218678` | Gut Microbiome and the Role of Metabolites in the Study of Graves' Disease |
| `keshavarzian-2020-gut-brain-axis-parkinsons-review.md` | `10.3389/fnagi.2020.00313` | Keshavarzian 2020 -- The Gut-Brain Axis and Its Relation to Parkinson's Disease: A Review |
| `khalili-2024-mediterranean-diet-later-onset-crohns.md` | `10.1136/gutjnl-2023-331587` | Adherence to a Mediterranean Diet is Associated with a Lower Risk of Later-Onset Crohn's Disease: Re |
| `klann-2022-microbiome-mitochondria-prodromal-parkinsons.md` | `10.3389/fcimb.2021.720390` | Klann 2022 -- The Microbiome-Mitochondria Dance in Prodromal Parkinson's Disease |
| `lazarova-2021-graves-disease-epidemiology-risk-factors.md` | `10.1016/j.beem.2023.101800` | Graves' disease: Epidemiology, genetic and environmental risk factors and viruses |
| `li-2025-intestinal-fungi-ckd-heart-failure.md` | `10.12290/xhyxzz.2025-0016` | Exploratory Study on the Impact of Intestinal Fungi on Heart Failure Progression in CKD Patients |
| `liu-2022-heavy-metals-breast-cancer-meta-analysis.md` | `10.3389/fnut.2022.838869` | Relationships Between Biological Heavy Metals and Breast Cancer: A Systematic Review and Meta-Analys |
| `liu-2025-low-concentration-metals-ckd-alpha-klotho.md` | `10.1038/s44439-024-00009-w` | The association between low-concentration heavy metal exposure and chronic kidney disease risk throu |
| `lubomski-2022-gut-dysbiosis-disease-progression-parkinsons.md` | `10.3389/fcimb.2022.875135` | Lubomski 2022 -- Progression of Parkinson's Disease Is Associated with Gut Dysbiosis: Two-Year Follo |
| `martinelli-2022-gut-oriented-interventions-ms.md` | `10.26355/eurrev_202202_28007` | Gut-oriented interventions in patients with multiple sclerosis: fact or fiction? |
| `mathew-2025-autism-heterogeneity-gi-inflammation-thesis.md` | `10.26190/unsworks/31488` | Mathew 2025 — Exploring the Spectrum: The Heterogeneity of Autism and Associations with Gastrointest |
| `mcewan-2024-metalloproteome-plasticity-pathogen-adaptation.md` | `10.1042/ETLS20230040` | McEwan 2024 — Metalloproteome Plasticity: A Factor in Bacterial Pathogen Adaptive Responses? |
| `mendelian-randomization-2024-dietary-factors-parkinsons.md` | `10.1080/1028415X.2024.2303950` | 2024 -- Correlation Between Dietary Factors and Parkinson's Disease Revealed by Mendelian Randomizat |
| `meta-analysis-parkinsons-incidence-systematic-review.md` | `10.1007/s00415-021-10855-z` | Ou 2021 -- The Incidence of Parkinson's Disease: A Systematic Review and Meta-Analysis |
| `mishra-2022-molecular-mechanisms-heavy-metals-ckd.md` | `10.3390/ijms23063997` | Molecular Mechanisms of Cellular Injury and Role of Toxic Heavy Metals in Chronic Kidney Disease |
| `moon-2024-physiological-cost-antibiotic-resistance-ribosome-magnesium.md` | `10.1126/sciadv.adq5817` | Moon 2024 — Physiological Cost of Antibiotic Resistance: Insights from a Ribosome Variant in Bacteri |
| `mr-2024-gut-microbiome-parkinsons-metagenomics.md` | `10.3389/fnins.2024.1372740` | 2024 -- Exploring the Gut Microbiota-Parkinson's Disease Link: Preliminary Insights from Metagenomic |
| `mr-2024-gut-microbiota-cognitive-impairment-parkinsons.md` | `10.3389/fmicb.2024.1445325` | 2024 -- Effects of Gut Microbiota on Cognitive Impairment in Parkinson's Disease: A Comprehensive Me |
| `nishiwaki-2020-16s-gut-microbiota-parkinsons-eastern-europe.md` | `10.1186/s12866-020-01893-2` | Nishiwaki 2020 -- Exploring Gut Microbiota Alterations in Parkinson's Disease: Insights from a 16S A |
| `palacios-2022-comorbidities-parkinsons-microbiome.md` | `10.1016/S1474-4422(22)00044-2` | Palacios 2022 -- Biological and Clinical Implications of Comorbidities in Parkinson's Disease |
| `pendergrass-2025-dysbiosis-dyshomeostasis-parkinsons-metallomic.md` | `10.5281/zenodo.18068369` | Pendergrass 2025 — From Dysbiosis to Dyshomeostasis: Why Parkinson's Requires a Metallomic–Microbiom |
| `pendergrass-2026-age-window-vulnerability-vegetable-baby-foods.md` | `10.5281/zenodo.18366816` | Age-Window Metabolic and Toxicokinetic Vulnerability in Vegetable-Based Baby Foods: Separating Devel |
| `pendergrass-2026-certification-infant-food-metals.md` | `10.5281/zenodo.18905821` | Certification as a Framework for Reducing Heavy Metal Exposure in Infant and Child Foods: Integratin |
| `pendergrass-2026-counterproductive-expose-testing.md` | `10.5281/zenodo.19470572` | The Counterproductive Consequences of Public Exposé Testing: How Unstructured Disclosure Undermines  |
| `pendergrass-2026-fertilizers-heavy-metals-historical.md` | `10.5281/zenodo.18439158` | Heavy Metals in Fertilizers: A Historical Analysis of Contamination Trends (1960-2025) |
| `pendergrass-2026-heavy-metals-obesity-epidemic.md` | `10.5281/zenodo.18434951` | Heavy Metals, Microbial Metallomics, and the US Obesity Epidemic: A Mechanistic Examination of a Pop |
| `pendergrass-2026-microbial-metallomics-parkinsons-ferroptosis.md` | `10.5281/zenodo.17830083` | Microbial Metallomics and Parkinson's Disease: A Unified Metal-Driven Framework Linking Ferroptosis, |
| `pendergrass-2026-nickel-nec-preterm-gut.md` | `10.5281/zenodo.18200348` | Nickel as a Catalytic Driver of Necrotizing Enterocolitis: Dietary Nickel, Microbial Metallomics, an |
| `pendergrass-2026-pheomelanin-neuromelanin-parkinsons-redheads.md` | `10.5281/zenodo.17976306` | Pheomelanin, Eumelanin, and Neuromelanin: A Metal-Linked Hypothesis for Parkinson's Risk in Redheads |
| `perez-pardo-2018-microbiome-therapies-parkinsons.md` | `10.2174/1381612824666180928100928` | Perez-Pardo 2018 -- Microbiome-Based Therapies for Parkinson's Disease |
| `perez-pardo-2022-toll-like-receptors-parkinsons-microbiome-gut-brain.md` | `10.3389/fimmu.2022.1154626` | Perez-Pardo 2022 -- How Toll-Like Receptors Influence Parkinson's Disease in the Microbiome-Gut-Brai |
| `petzold-2010-oct-ms-systematic-review-meta-analysis.md` | `10.1136/jnnp-2010-219576` | A systematic review and meta-analysis of optical coherence tomography in multiple sclerosis |
| `phillips-2022-ketogenic-diet-feasibility-parkinsons.md` | `10.1038/s41531-022-00295-y` | Phillips 2022 -- A Mixed Methods Feasibility Study of a Ketogenic Diet as Treatment for Parkinson's  |
| `plassais-2024-16s-amplicon-sequencing-parkinsons-eastern-europe.md` | `10.3389/fmicb.2024.1369880` | Plassais 2024 -- Exploring Gut Microbiota Alterations in Parkinson's Disease: Insights from a 16S Am |
| `pourmirzaiee-2024-ppd-magnesium-infant-development.md` | `10.4103/ijpvm.ijpvm_131_23` | Association of Postpartum Depression with Maternal Serum Magnesium Levels, Infant Growth, and Neurod |
| `prkacin-2021-probiotics-fiber-rich-diets-ckd-progression.md` | `10.20471/acc.2021.60.s1.16` | Prkacin et al. 2021 — Probiotics and High Fiber-Rich Diets Have Anti-Inflammatory Properties and Dec |
| `puszkarz-2018-food-nutrition-hashimotos-prevention.md` | `10.5281/zenodo.1320419` | Role of Food and Nutrition in Pathogenesis and Prevention of Hashimoto's Thyroiditis |
| `rajdl-2005-oxidative-stress-diabetic-mothers-infants-delivery.md` | `10.33549/physiolres.010612` | Rajdl 2005 — Markers of Oxidative Stress in Diabetic Mothers and Their Infants During Delivery |
| `rohaun-2024-microbes-strategic-metalation-mononuclear-enzymes.md` | `10.1073/pnas.2403042121` | Rohaun 2024 — Microbes Vary Strategically in Their Metalation of Mononuclear Enzymes |
| `romano-2021-microbiome-host-interactions-alzheimers.md` | `10.3389/fphar.2021.652726` | Romano 2021 -- The Role of Microbiome-Host Interactions in the Development of Alzheimer's Disease |
| `rosario-2019-constraint-based-modelling-microbiome-cometabolism-parkinsons.md` | `10.1186/s40168-019-0669-3` | Rosario 2019 -- Constraint-Based Modelling of Host-Microbiome Co-Metabolism in Alzheimer's and Parki |
| `roussin-2020-gut-microbiota-pathophysiology-asd.md` | `10.3390/microorganisms8071605` | Roussin 2020 — Role of Gut Microbiota in ASD Pathophysiology: Clinical and Preclinical Evidence |
| `schiavino-2006-oral-hyposensitization-nickel.md` | `10.1177/039463200601900120` | A Clinical Trial of Oral Hyposensitization in Systemic Allergy to Nickel |
| `serum-metabolomics-motor-progression-parkinsons.md` | `10.3233/JPD-181424` | Willkommen 2018 -- Serum Metabolomics of Slow vs. Rapid Motor Progression Parkinson's Disease: A Pil |
| `slattery-2016-enteric-ecosystem-disruption-asd.md` | `10.2174/1381612822666160905122404` | Slattery 2016 -- Enteric Ecosystem Disruption in Autism Spectrum Disorder: Can the Microbiota and Ma |
| `sugimoto-2024-zinc-deficiency-cancer-review.md` | `10.1007/s12011-024-04062-w` | Zinc Deficiency as a General Feature of Cancer: A Review of the Literature |
| `sullivan-2024-resisting-death-metal-cuzn-homeostasis-bacteria.md` | `10.1042/ETLS20230040` | Sullivan 2024 — Resisting Death by Metal: Metabolism and Cu/Zn Homeostasis in Bacteria |
| `thoma-2011-bv-dietary-indices.md` | `10.3945/jn.110.128181` | Bacterial Vaginosis Is Associated with Variation in Dietary Indices |
| `tsushima-2024-ketogenic-diet-pcos-fertility.md` | `10.3389/fnut.2024.1450244` | Ketogenic diet improves fertility in patients with polycystic ovary syndrome: a brief report |
| `vogt-2024-hfq-srna-rust-iron-starvation-caulobacter.md` | `10.1128/mbio.01234-24` | Vogt 2024 — Genome-Wide Profiling of Hfq-Bound RNAs Reveals the Iron-Responsive Small RNA RusT in Ca |
| `wang-2018-inflammatory-cytokines-peritoneal-flora-endometriosis-infertility.md` | `10.26355/eurrev_201804_14826` | Inflammatory cytokines IL-6, IL-10, IL-13, TNF-alpha and peritoneal fluid flora were associated with |
| `wei-2020-oxidative-stress-parkinsons-meta-analysis.md` | `10.3389/fnmol.2020.00236` | Wei 2020 -- Oxidative Stress in Parkinson's Disease: A Systematic Review and Meta-Analysis |
| `wei-2022-oxidative-stress-parkinsons-meta-analysis.md` | `10.3389/fnmol.2022.1039447` | Wei 2022 -- Oxidative Stress in Parkinson's Disease: A Systematic Review and Meta-Analysis |
| `weis-2022-altered-gut-microbiome-lps-alpha-synuclein-parkinsons.md` | `10.3389/fnins.2021.726708` | Weis 2022 -- Altered Gut Microbiome in Parkinson's Disease and the Influence of Lipopolysaccharide i |
| `zhang-2023-arsenic-fluoride-learning-memory-microbiome-metabolome.md` | `10.3967/bes2023.028` | Zhang 2023 — Mechanism of Learning and Memory Impairment in Rats Exposed to Arsenic and/or Fluoride  |
| `zheng-2024-znta-zinc-cadmium-homeostasis-vibrio-parahaemolyticus.md` | `10.1080/19490976.2024.2327403` | Zheng 2024 — ZntA Maintains Zinc and Cadmium Homeostasis and Promotes Oxidative Stress Resistance an |
| `zytnick-2024-methylolanthanin-lanthanide-metallophore-methylobacterium.md` | `10.1073/pnas.2321658121` | Zytnick 2024 — Identification and Characterization of a Small-Molecule Metallophore Involved in Lant |

### DOI resolves — but to the wrong title

| File | Stored DOI | Stored title | Crossref title | Similarity |
|---|---|---|---|---|
| `Russell2023-comorbidities-multimorbidity-covid.md` | `10.1038/s41591-022-02156-9` | Russell, Lone, Baillie 2023 — Comorbidities, multimorbidity and COVID-19 | Comorbidities, multimorbidity and COVID-19 | 0.43 |
| `ahlstrom-2019-nickel-allergy-review.md` | `10.1111/cod.13272` | Nickel Allergy and Allergic Contact Dermatitis: A Clinical Review | Response to: Positive reactions to gold sodium thiosulfate in patch test panels  | 0.00 |
| `alotaibi-2021-heavy-metal-detoxification-bacillus-bioremediation.md` | `10.3390/microorganisms9081574` | Alotaibi 2021 — Unraveling the Underlying Heavy Metal Detoxification Mechanisms  | Deciphering Bacterial Community Structure, Functional Prediction and Food Safety | 0.00 |
| `autoimmune-2023-perturbations-gut-microbiota-neurological.md` | `10.1016/j.autrev.2023.103452` | 2023 -- Perturbations in Gut Microbiota Composition in Patients with Autoimmune  | Understanding, diagnosing, and treating Myalgic encephalomyelitis/chronic fatigu | 0.00 |
| `azizi-2017-systematic-review-drug-therapy-graves.md` | `10.1530/EJE-16-0888` | A systematic review of drug therapy for Graves' hyperthyroidism | MANAGEMENT OF ENDOCRINE DISEASE: Congenital adrenal hyperplasia due to 21-hydrox | 0.00 |
| `bakulski-2025-heavy-metals-late-onset-alzheimers.md` | `10.1002/alz.71075` | Contributions of heavy metal exposure to late-onset Alzheimer's disease | Exposure to lead and incidence of Alzheimer's disease and all‐cause dementia in  | 0.33 |
| `balestrino-2020-systematic-review-parkinsons-basal-ganglia.md` | `10.1111/ene.14108` | Balestrino 2020 -- Parkinson's Disease: A Systematic Review | Parkinson disease | 0.33 |
| `bergman-2016-low-nickel-diet-review.md` | `10.4172/2155-9554.1000356` | Low Nickel Diet: A Patient-Centered Review | Somatic Mosaicism in Blaschkolinear Inflammatory Disorders | 0.00 |
| `bheemanenni-2025-fibromyalgia-ibs-systematic-review.md` | `10.7759/cureus.96801` | Bheemanenni 2025 — Fibromyalgia and IBS (Systematic Review) | Unraveling the Association Between Fibromyalgia and Irritable Bowel Syndrome: A  | 0.33 |
| `boertien-2019-microbiome-composition-covariates-parkinsons.md` | `10.3389/fneur.2019.01174` | Boertien 2019 -- Changes in Gastrointestinal Microbiome Composition in PD: A Piv | Differential Impact of Plasma Homocysteine Levels on the Periventricular and Sub | 0.00 |
| `borghini-2020-endometriosis-nickel-ibs.md` | `10.3390/nu12082277` | Irritable Bowel Syndrome-Like Disorders in Endometriosis: Prevalence of Nickel S | Beneficial Effects of a Low-Nickel Diet on Relapsing IBS-Like and Extraintestina | 0.20 |
| `brock-2015-selenium-thyroid-autoimmunity.md` | `10.14200/jrm.2015.4.0104` | The Role of Selenium in Thyroid Autoimmunity: A Review | Synergy in Herbal Medicines: Part 1 | 0.00 |
| `brown-2011-gut-metagenomics-t1d-autoimmunity-model.md` | `10.1371/journal.pone.0025792` | Brown et al. 2011 — Gut Metagenomics and Functional Model of T1D Autoimmunity | Gut Microbiome Metagenomics Analysis Suggests a Functional Model for the Develop | 0.40 |
| `cai-2022-gut-microbiota-male-reproduction.md` | `10.3389/fmicb.2022.977574` | Cai 2022 — Gut Microbiota and Male Reproduction | Gut microbiota supports male reproduction via nutrition, immunity, and signaling | 0.43 |
| `cameron-2011-nickel-genotoxicity-carcinogenicity.md` | `10.1515/reveh.2011.012` | Cameron 2011 — Nickel Genotoxicity and Carcinogenicity | Exploring the molecular mechanisms of nickel-induced genotoxicity and carcinogen | 0.33 |
| `campos-acuna-2019-neuroinflammation-microbiome-immune-parkinsons.md` | `10.1186/s12974-019-1528-y` | Campos-Acuna 2019 -- Microbiome-Driven Neuroinflammation and Immune Response in  | Altered gut microbiota and inflammatory cytokine responses in patients with Park | 0.20 |
| `capdevila-2024-bacterial-metallostasis-sensing-trafficking.md` | `10.1021/acs.chemrev.4c00132` | Capdevila 2024 — Bacterial Metallostasis: Metal Sensing, Metalloproteome Remodel | Regioselective Substitution of BINOL | 0.00 |
| `carrero-2020-plant-based-diets-ckd-nature-reviews.md` | `10.1038/s41581-020-0297-2` | Carrero et al. 2020 — Plant-Based Diets in CKD | Plant-based diets to manage the risks and complications of chronic kidney diseas | 0.33 |
| `caruffo-2020-deferiprone-nutritional-immunity-piscirickettsia.md` | `10.1186/s13567-020-00845-2` | Caruffo et al. 2020 — Deferiprone as Assisted Nutritional Immunity Against Pisci | Pharmacological iron-chelation as an assisted nutritional immunity strategy agai | 0.45 |
| `carvalho-2014-siderophores-trojan-horses-mdr.md` | `10.3389/fmicb.2014.00290` | de Carvalho & Fernandes 2014 — Siderophores as Trojan Horses Against MDR Pathoge | Siderophores as â€œTrojan Horsesâ€: tackling multidrug resistance? | 0.38 |
| `casaburi-2022-formate-nec-enteric-dysbiosis-metabolic-model.md` | `10.3389/fped.2022.893059` | Casaburi 2022 — Formate as a metabolic driver of NEC: integrated metagenomics an | Metabolic model of necrotizing enterocolitis in the premature newborn gut result | 0.10 |
| `chandrangsu-2016-zinc-intoxication-perr-heme-toxicity.md` | `10.1371/journal.pgen.1006515` | Chandrangsu & Helmann 2016 — Intracellular Zn Intoxication Mis-metalates PerR, C | Intracellular Zn(II) Intoxication Leads to Dysregulation of the PerR Regulon Res | 0.42 |
| `chapman-2026-clostridia-hmos-pathobiont-suppression-nec.md` | `10.1038/s41564-026-02297-4` | Chapman 2026 — Non-toxigenic Clostridia Metabolize HMOs and Suppress Pathobionts | Clostridia from preterm infants metabolize human milk oligosaccharides to suppre | 0.29 |
| `chen-2022-beta-glucan-masking-signaling-pathways-candida.md` | `10.3389/ffunb.2022.842501` | Chen, Wagner & Reynolds 2022 — Beta-Glucan Masking Signaling Pathways in Candida | When Is It Appropriate to Take Off the Mask? Signaling Pathways That Regulate ß( | 0.33 |
| `chen-2024-esophageal-microbial-dysbiosis-tlr2-gerd.md` | `10.1186/s12967-024-05878-1` | Chen 2024 — Esophageal Microbial Dysbiosis and TLR2 Signaling in GERD | Esophageal microbial dysbiosis impairs mucosal barrier integrity via toll-like r | 0.19 |
| `chen-2024-indoles-microbiome-parkinsons.md` | `10.1038/s41598-025-99534-3` | Chen 2025 -- Indole Metabolites and Gut Microbiome in Parkinson's Disease | Therapeutic mechanistic study of novel indole derivatives as SIRTUIN3 modulators | 0.23 |
| `chen-2024-microbiome-derived-metabolites-parkinsons-progression.md` | `10.1038/s41531-024-00816-w` | Chen 2024 -- Microbiome-Derived Metabolites and Parkinson's Disease Progression | α-synuclein overexpression and the microbiome shape the gut and brain metabolome | 0.13 |
| `chen-2026-metalloimmunology-tumor-microenvironment.md` | `10.7150/thno.121988` | Chen et al. 2026 — Metalloimmunology in the Tumor Microenvironment | Metal homeostasis as a therapeutic lever: advancing metalloimmunology to remodel | 0.25 |
| `cheng-2025-neuroinflammation-pms-pmdd-review.md` | `10.3389/fendo.2025.1561848` | Cheng 2025 — Neuroinflammation in PMS and PMDD (Review) | The role of the neuroinflammation and stressors in premenstrual syndrome/premens | 0.25 |
| `chernikova-2022-brain-gut-microbiome-asd.md` | `10.3390/nu14071459` | Chernikova 2022 — The Brain-Gut-Microbiome System: Pathways and Implications for | Fluoride Status and Cardiometabolic Health: Findings from a Representative Surve | 0.00 |
| `chin-chan-2015-environmental-pollutants-ad-pd.md` | `10.3389/fncel.2015.00170` | Environmental pollutants as risk factors for neurodegenerative disorders: Alzhei | Activation of the endoplasmic reticulum stress response in skeletal muscle of G9 | 0.00 |
| `choi-2016-campylobacter-fetus-ckd-spondylitis.md` | `10.7883/yoken.JJID.2015.461` | Choi et al. 2016 — Campylobacter fetus subsp. testudinum Spondylitis in CKD Pati | Infectious Spondylitis in a Patient with Chronic Kidney Disease: Identification  | 0.43 |
| `cilia-2021-shotgun-metagenomics-parkinsons-italian.md` | `10.1038/s41531-024-00724-z` | Cilia 2024 -- Shotgun Metagenomics of Parkinson's Disease: Italian Cohort Study | Meta-analysis of shotgun sequencing of gut microbiota in Parkinson’s disease | 0.33 |
| `cirstea-2021-gut-mycobiome-parkinsons-fungal-dysbiosis.md` | `10.1038/s41531-021-00244-0` | Cirstea 2021 -- The Gut Mycobiome in Parkinson's Disease | Association between Parkinson’s disease and the faecal eukaryotic microbiota | 0.29 |
| `coker-2021-gut-mycobiome-neurological-disease.md` | `10.3390/brainsci11121653` | Coker 2021 -- A Fungal World: Could the Gut Mycobiome Be Involved in Neurologica | Virtual Reality for Aggression Assessment: The Development and Preliminary Resul | 0.00 |
| `corrales-2024-iron-chelating-antifungal-collismycin-candida.md` | `10.1128/spectrum.03009-23` | Corrales 2024 — Characterization of a Selective, Iron-Chelating Antifungal Compo | Exploring nasopharyngeal microbiota profile in children affected by SARS-CoV-2 i | 0.00 |
| `davis-richardson-2015-bacteroides-dorei-t1d-model.md` | `10.1007/s00125-015-3614-8` | Davis-Richardson & Triplett 2015 — Bacteroides dorei as a Model for T1D Microbio | A model for the role of gut bacteria in the development of autoimmunity for type | 0.11 |
| `de-lay-2024-ccn-srnas-zinc-resistance-pneumococcus-virulence.md` | `10.1371/journal.ppat.1012683` | De Lay 2024 — The Five Homologous CiaR-Controlled Ccn sRNAs of Streptococcus pne | B cell receptor dependent enhancement of dengue virus infection | 0.00 |
| `dietary-polyphenols-2013-antioxidant-properties-diabetes.md` | `10.1186/2251-6581-12-43` | Dietary Polyphenols 2013 — Antioxidant Properties and Effects on Diabetes | Dietary polyphenols as potential nutraceuticals in management of diabetes: a rev | 0.43 |
| `dijkstra-de-neijs-2020-caregiver-distress-asd-biological-consequences.md` | `10.1007/s40471-020-00237-2` | Dijkstra-de Neijs 2020 — Biological Consequences of Psychological Distress in Ca | Biological Consequences of Psychological Distress in Caregivers of Children with | 0.41 |
| `fang-2025-safety-fmt-parkinsons-systematic-review.md` | `10.1038/s41531-025-01061-5` | Fang 2025 -- Safety and Efficacy of Fecal Microbiota Transplantation in the Trea | Faecal microbiota transplant in Parkinson’s disease: pilot study to establish sa | 0.33 |
| `fermented-foods-2024-parkinsons-neurodegeneration-microbiome.md` | `10.20960/nh.04521` | Garcia-Martinez 2024 -- Influence of Fermented Foods on the Gut Microbiome in Ne | Protective effect of manganese treatment on insulin resistance in HepG2 hepatocy | 0.00 |
| `finkelstein-2022-lead-parkinsons-microbiome-mendelian-randomization.md` | `10.1038/s41531-022-00351-6` | Finkelstein 2022 -- Lead Exposure, Gut Microbiome, and Parkinson's Disease Risk | Oral and gut dysbiosis leads to functional alterations in Parkinson’s disease | 0.25 |
| `fish-williamson-2023-nutritional-factors.md` | `10.3389/fpsyt.2023.1193490` | Fish-Williamson & Hahn-Holbrook 2023 — Nutritional Factors and PPD Cross-Nationa | Nutritional factors and cross-national postpartum depression prevalence: an upda | 0.43 |
| `fungal-dysbiosis-2023-gdm-pregnancy-microbiome.md` | `10.1038/s41598-023-45066-7` | Fungal Dysbiosis 2023 — Gut Fungal Communities in Gestational Diabetes | Uncovering the relationship between gut microbial dysbiosis, metabolomics, and d | 0.13 |
| `fungal-dysbiosis-2026-pregnancy-gdm-reference.md` | `10.1186/s12884-026-08677-2` | Fungal Dysbiosis 2026 — Pregnancy and Gestational Diabetes Reference | Intestinal fungal dysbiosis in gestational diabetes mellitus is associated with  | 0.45 |
| `fungal-dysbiosis-diabetes-h2s-metabolic-disorders.md` | `10.1038/s41598-020-66598-2` | Fungal Dysbiosis — Effects of Exogenous Hydrogen Sulfide on Diabetic Metabolic D | Revealing links between gut microbiome and its fungal community in Type 2 Diabet | 0.07 |
| `gale-2001-diabetes-gender-sex-bias-autoimmune.md` | `10.1007/s001250051573` | Gale 2001 — Diabetes and Gender: Sex Bias in Autoimmune Type 1 Diabetes | Diabetes and gender | 0.29 |
| `grimaldi-2018-prebiotic-bgos-asd-children.md` | `10.1186/s40168-018-0523-3` | Grimaldi 2018 — Prebiotic B-GOS Intervention in Children with ASD | A prebiotic intervention study in children with autism spectrum disorders (ASDs) | 0.44 |
| `gunal-2018-heavy-metals-sialic-acid-ms.md` | `10.15739/irjpeh.18.015` | Effect of heavy metals and sialic acid in multiple sclerosis |  | 0.00 |
| `hans-2022-magnesium-candida-immune-evasion.md` | `10.1371/journal.pone.0270676` | Hans et al. 2022 — Magnesium Deprivation Causes Candida Beta-Glucan Unmasking an | Magnesium impairs Candida albicans immune evasion by reduced hyphal damage, enha | 0.33 |
| `hegelmaier-2020-fiber-intervention-parkinsons-microbiome.md` | `10.1038/s41531-021-00215-5` | Hegelmaier 2020 -- Interventional Influence of the Intestinal Microbiome Through | Parkinson’s disease patients’ short chain fatty acids production capacity after  | 0.12 |
| `heidari-2022-neuroinflammation-progression-parkinsons.md` | `10.1007/s11910-022-01207-5` | Heidari 2022 -- Outside In: Unraveling the Role of Neuroinflammation in the Prog | Neurodegeneration and Neuroinflammation in Parkinson’s Disease: a Self-Sustained | 0.33 |
| `heinzel-2024-microbial-biomarkers-parkinsons-multiomics.md` | `10.1038/s41531-024-00802-2` | Heinzel 2024 -- Microbial Biomarkers for Parkinson's Disease: A Multi-Omics Appr | Microbial biomarker discovery in Parkinson’s disease through a network-based app | 0.44 |
| `hoyer-2025-repeated-fmt-t1d-gastroenteropathy.md` | `10.1007/s00125-025-06544-x` | Hoyer et al. 2025 — Repeated FMT for Type 1 Diabetes Gastroenteropathy | Repeated faecal microbiota transplantation for individuals with type 1 diabetes  | 0.44 |
| `hu-2016-nickel-contamination-antibiotic-resistance-soils.md` | `10.1021/acs.est.6b03383` | Hu 2016 — Nickel Contamination and Antibiotic Resistance in Soils | Long-Term Nickel Contamination Increases the Occurrence of Antibiotic Resistance | 0.45 |
| `hu-2022-gut-mycobiome-ckd-immunological.md` | `10.3389/fimmu.2022.843695` | Hu 2022 — Gut Mycobiome in CKD: Altered Fungal Communities and Immunological Pro | Gut Mycobiome in Patients With Chronic Kidney Disease Was Altered and Associated | 0.40 |
| `ibrahim-2022-aluminum-exposure-infant-formulas-lebanon.md` | `10.3390/foods11091177` | Pediatric Health Risk Assessment for Exposure to Aluminum from Infant Formulas a | Berry By-Products in Combination with Antimicrobial Lactic Acid Bacteria Strains | 0.05 |
| `ikhazuagbe-2025-gallium-nanoparticles-antimicrobial.md` | `10.1039/d5ra04216j` | Ikhazuagbe et al. 2025 — Gallium Nanoparticles as Antimicrobial Agents | Antibacterial activity and mechanistic insights of gallium-based nanoparticles:  | 0.18 |
| `jackson-2022-neuroinflammation-progression-parkinsons.md` | `10.1007/s11910-022-01207-5` | Jackson 2022 -- Outside In: Unraveling the Role of Neuroinflammation in the Prog | Neurodegeneration and Neuroinflammation in Parkinson’s Disease: a Self-Sustained | 0.33 |
| `jacobson-2022-environmental-chemicals-perinatal-psychopathology.md` | `10.1016/j.bcp.2022.115005` | Exposure to environmental chemicals and perinatal psychopathology | The metabolism and biotransformation of AFB1: Key enzymes and pathways | 0.00 |
| `ji-2025-nickel-exposure-parkinsons-microbiome.md` | `10.1038/s41531-025-00950-z` | Ji 2025 -- Nickel Exposure and Parkinson's Disease Risk: Gut Microbiome Mediatio | Proinflammatory and GABA eating bacteria in Parkinson's disease gut microbiome f | 0.27 |
| `johnson-2015-hcv-parkinsons-comorbidities.md` | `10.1007/s13365-015-0357-8` | Johnson 2015 -- Hepatitis C Virus and Parkinson's Disease Comorbidity | Peripheral aetiopathogenic drivers and mediators of Parkinson’s disease and co-m | 0.20 |
| `jones-2026-amylase-degradable-copper-starch-nanoparticles-saureus.md` | `10.3390/antibiotics15010045` | Jones 2026 — Targeting of Bacteria Using Amylase-Degradable, Copper-Loaded Starc | Community Pharmacists’ Perspectives on Antibiotic Misuse and Antimicrobial Resis | 0.00 |
| `kaelin-2022-gut-virome-signatures-preceding-nec.md` | `10.1038/s41564-022-01096-x` | Kaelin 2022 — Gut Virome Signatures Preceding NEC | Longitudinal gut virome analysis identifies specific viral signatures that prece | 0.14 |
| `kahaly-2022-graves-disease-targeted-therapy-review.md` | `10.1210/clinem/dgac363` | Graves' Disease: Is It Time for Targeted Therapy? A Narrative Review | A Biphasic Pattern of Reproductive Hormones in Healthy Female Infants: The COPEN | 0.00 |
| `kaur-2022-current-perspectives-parkinsons-microbiome.md` | `10.1007/s12223-022-00977-2` | Kaur 2022 -- Current Perspectives on the Parkinson's Disease Microbiome | Exploring the multifactorial aspects of Gut Microbiome in Parkinson’s Disease | 0.43 |
| `keshavarzian-2024-nutrition-neuroinflammation-parkinsons-microbiome.md` | `10.1007/s13668-024-00539-7` | Keshavarzian 2024 -- Nutrition, Neuroinflammation, and the Parkinson's Disease M | Modulation of Gut Microbiota Through Dietary Intervention in Neuroinflammation a | 0.22 |
| `khatoon-2023-gut-microbiota-neurodegenerative.md` | `10.2147/DDDT.S580330` | Effects of gut microbiota on neurodegenerative diseases | Advances and Therapeutic Potential of Anthraquinone Compounds in Neurodegenerati | 0.22 |
| `kuo-2022-gut-parkinsons-early-diagnosis-perspectives.md` | `10.1016/j.jfma.2021.12.012` | Kuo 2022 -- Parkinson's Disease and the Gut: Future Perspectives for Early Diagn | Trends of medication used in patients with pre-ESKD from 2010 to 2018 in Taiwan | 0.00 |
| `kuo-2025-smoking-alcohol-dysmenorrhea-taiwan.md` | `10.1136/bmjopen-2024-088813` | Influence of tobacco smoking and alcohol drinking on dysmenorrhoea: a cross-sect | SPOON: an observational, cross-sectional study of perceptions and expectations o | 0.15 |
| `kwak-2023-psychobiotics-fmt-asd-adhd.md` | `10.3389/fcimb.2023.1238005` | Kwak 2023 — Psychobiotics and Fecal Microbiota Transplantation for ASD/ADHD | Psychobiotics and fecal microbial transplantation for autism and attention-defic | 0.23 |
| `lai-2019-16s-rrna-6ohda-gut-microbiome-parkinsons.md` | `10.1371/journal.pone.0218456` | Lai 2019 -- High-Throughput 16S rRNA Gene Sequencing Reveals That 6-Hydroxydopam | High similarity of IgG antibody profiles in blood and saliva opens opportunities | 0.08 |
| `lai-2023-6ohda-gut-microbial-environment-parkinsons.md` | `10.1371/journal.pone.0251367` | Lai 2023 -- High-Throughput 16S rRNA Gene Sequencing Reveals That 6-Hydroxydopam | Rates of protein synthesis are reduced in peripheral blood mononuclear cells (PB | 0.00 |
| `laudisio-2022-antidepressants-parkinsons-microbiome.md` | `10.1038/s41531-022-00395-8` | Laudisio 2022 -- Antidepressant Use and Parkinson's Disease Microbiome | Fecal microbiome alterations in treatment-naive de novo Parkinson’s disease | 0.38 |
| `lee-2020-female-infertility-blood-lead-cadmium.md` | `10.5772/intechopen.89462` | Female Infertility Associated with Blood Lead and Cadmium Levels | Renewable Energy Application for Solar Air Conditioning | 0.00 |
| `lehmler-2018-tin-exposure-nhanes-us-population.md` | `10.1016/j.envpol.2024.124238` | Environmental Tin Exposure in a Nationally Representative Sample of U.S. Adults  | Metal exposure and blood lipid biomarkers in early pregnancy: A cross-sectional  | 0.07 |
| `lei-2018-h2s-endometrial-stromal-cells-nfkb.md` | `10.1186/s13287-018-1015-x` | H2S promotes proliferation of endometrial stromal cells via activating the NF-kB | Tcf7l1 directly regulates cardiomyocyte differentiation in embryonic stem cells | 0.13 |
| `leung-2022-lower-fiber-pcos-meta-analysis.md` | `10.3390/nu14153122` | Lower Fiber Consumption in Women with Polycystic Ovary Syndrome: A Meta-Analysis | Associations between the Nutrient Profiling System Underlying the Nutri-Score Nu | 0.05 |
| `lewandowska-2022-microbiota-asd-systematic-review.md` | `10.3390/ijms24010552` | Lewandowska-Pietruszka 2022 — Microbiota in Autism Spectrum Disorder: Systematic | The Role of Deubiquitinating Enzyme in Head and Neck Squamous Cell Carcinoma | 0.00 |
| `li-2019-heavy-metal-metabolic-health-gut-microbiome.md` | `10.1016/j.envint.2019.05.048` | Heavy Metal Exposure Causes Changes in the Metabolic Health-Associated Gut Micro | Ecological toxicity reduction of dinotefuran to honeybee: New perspective from a | 0.00 |
| `li-2020-dietary-fiber-depression-premenopausal-swan.md` | `10.3389/fnins.2020.00373` | Li 2020 — Dietary Fiber and Depression in Premenopausal Women (SWAN) | Dietary Fiber Is Inversely Associated With Depressive Symptoms in Premenopausal  | 0.44 |
| `li-2024-microbiome-targeted-therapy-parkinsons.md` | `10.1186/s40035-024-00404-1` | Li 2024 -- Microbiome-Targeted Therapies for Parkinson's Disease | Therapeutics for neurodegenerative diseases by targeting the gut microbiome: fro | 0.13 |
| `li-2024-oral-lyophilized-fmt-asd-children.md` | `10.3389/fped.2024.1369823` | Li 2024 — Oral Lyophilized FMT Effects and Microbiota Changes in ASD Children | Effects and microbiota changes following oral lyophilized fecal microbiota trans | 0.46 |
| `li-2026-ibd-male-ed-mechanistic-review.md` | `10.3389/fimmu.2025.1701741` | Li 2026 — IBD and Male Erectile Dysfunction (Mechanistic Review) | The potential link between inflammatory bowel disease and male erectile dysfunct | 0.29 |
| `lin-2022-probiotics-thyroidectomy-oral-gut-dysbiosis-rct.md` | `10.3389/fendo.2022.834674` | Lin 2022 — Probiotics alleviate oral-gut microbiota dysbiosis in thyroid cancer  | Randomized Clinical Trial: Probiotics Alleviated Oral-Gut Microbiota Dysbiosis a | 0.40 |
| `ling-2024-fungal-dysbiosis-gut-brain-axis.md` | `10.1038/s41398-024-03183-5` | Ling 2024 -- Fungal Dysbiosis and the Gut-Brain Axis in Neurodegeneration | Oral fungal dysbiosis and systemic immune dysfunction in Chinese patients with s | 0.20 |
| `liu-2019-gut-microbiota-scfas-asd-chinese-children.md` | `10.1038/s41598-018-36430-z` | Liu 2019 — Altered Gut Microbiota and SCFAs in Chinese ASD Children | Altered gut microbiota and short chain fatty acids in Chinese children with auti | 0.33 |
| `liu-2022-fmt-restores-ckd-rats.md` | `10.3389/fmicb.2022.1037257` | Liu et al. 2022 — FMT Restores Gut Microbiota in CKD Rats | Fecal microbiota transplantation restores normal fecal composition and delays ma | 0.21 |
| `liu-2022-nec-scfa-gut-microbiota-biomarkers-pilot.md` | `10.3389/fmicb.2022.969656` | Liu 2022 — Gut microbiota and SCFAs as early predictive biomarkers for neonatal  | Gut microbiota and short-chain fatty acids may be new biomarkers for predicting  | 0.33 |
| `liu-2024-bidirectional-mr-gut-microbiota-gerd-barretts.md` | `10.1186/s12864-024-10377-0` | Liu Y 2024 — Bidirectional MR of Gut Microbiota with GERD and Barrett's Esophagu | Investigating the causal relationship of gut microbiota with GERD and BE: a bidi | 0.44 |
| `liu-2024-copper-pcos-ivf.md` | `10.1002/fsn3.4344` | Serum Copper Assessment in Patients with Polycystic Ovary Syndrome and Tubal Inf | Chemical composition, functional properties, physico‐chemical properties, and te | 0.00 |
| `liu-2024-probiotics-synbiotics-ckd-meta-analysis.md` | `10.3389/fnut.2024.1434613` | Liu 2024 — Probiotics/Synbiotics in CKD: Meta-Analysis of 21 RCTs | Efficacy of probiotics/synbiotics supplementation in patients with chronic kidne | 0.25 |
| `lopez-botella-2023-peritoneal-fluid-metals-endometriosis.md` | `10.3390/toxics11040389` | Elevated Lead, Nickel, and Bismuth Levels in the Peritoneal Fluid of a Peritonea | Exposure and Risk Assessment to Airborne dl-PCBs and Dioxins in the Population L | 0.06 |
| `lrrk2-metabolomics-parkinsons-profiling.md` | `10.1186/s13024-018-0282-4` | Johansen 2018 -- Metabolomic Profiling in LRRK2-Related Parkinson's Disease | Deep proteomic network analysis of Alzheimer’s disease brain reveals alterations | 0.07 |
| `lu-2019-constipation-esrd-risk-ckd.md` | `10.1186/s12882-019-1481-0` | Lu et al. 2019 — Constipation and ESRD Risk in CKD | Association of Constipation with risk of end-stage renal disease in patients wit | 0.20 |
| `lu-2021-maternal-ahr-activation-protects-nec.md` | `10.1038/s41467-021-21356-4` | Lu 2021 — Maternal AHR Activation Protects Offspring from NEC | Maternal aryl hydrocarbon receptor activation protects newborns against necrotiz | 0.30 |
| `luu-2022-upper-gi-microbiota-children-reflux-metaplasia.md` | `10.1099/mgen.0.000870` | Luu 2022 — Upper GI Microbiota in Children from Reflux to Metaplasia | Changes to the upper gastrointestinal microbiotas of children with reflux oesoph | 0.40 |
| `lyu-2024-care-mode-gut-microbiota-cp-children.md` | `10.3389/fped.2024.1440190` | Lyu 2024 — Care Mode and Gut Microbiota in CP Children | Different care mode alter composition and function of gut microbiota in cerebral | 0.40 |
| `manouchehri-2022-toxic-metals-infertility-review.md` | `10.1097/EDE.0000000000001427` | The Effects of Toxic Heavy Metals Lead, Cadmium and Copper on the Epidemiology o | Re. Identification and Validation of Anaphylaxis Using Electronic Health Data in | 0.00 |
| `martin-2022-manganese-homeostasis-stress-pathogenesis.md` | `10.3389/fmolb.2022.945724` | Martin & Waters 2022 — Manganese Homeostasis, Stress, and Pathogenesis in Bacter | Regulation of Bacterial Manganese Homeostasis and Usage During Stress Responses  | 0.44 |
| `mcdonough-2020-water-chemistry-microbiome-ckdu-sri-lanka.md` | `10.1038/s41598-020-75336-7` | McDonough et al. 2020 — Water Chemistry and Microbiome of Household Wells in CKD | The water chemistry and microbiome of household wells in Medawachchiya, Sri Lank | 0.41 |
| `meli-2024-chemical-characterization-baby-food-italy.md` | `10.1371/journal.pone.0289126` | Chemical characterization of baby food consumed in Italy | Clinical, laboratory, and molecular epidemiology of Orientia tsutsugamushi infec | 0.00 |
| `mendes-2025-microbiome-modulating-drugs-parkinsons.md` | `10.1007/s10571-025-01609-2` | Mendes 2025 -- Microbiome-Modulating Drugs and Neurodegeneration in Parkinson's  | Short-Chain Fatty Acids as a Therapeutic Strategy in Parkinson’s Disease: Implic | 0.30 |
| `mertsalmi-2021-viral-gut-microbiota-parkinsons.md` | `10.1007/s12035-021-02408-8` | Mertsalmi 2021 -- Viral Gut Microbiota and Neuroinflammation in Parkinson's Dise | The Intersection of Parkinson’s Disease, Viral Infections, and COVID-19 | 0.43 |
| `mertsalmi-2023-statins-parkinsons-microbiome.md` | `10.1038/s41467-023-38248-4` | Mertsalmi 2023 -- Statins and Gut Microbiome in Parkinson's Disease | Gut microbiome dysbiosis across early Parkinson’s disease, REM sleep behavior di | 0.23 |
| `michetti-2025-galleria-mellonella-pseudomonas-zinc-starvation.md` | `10.1099/mic.0.001528` | Michetti 2025 — Modelling Host-Pathogen Interactions: Galleria mellonella as a P | Corrigendum: Characterizing a stable five-species microbial community for use in | 0.00 |
| `miranda-2022-metalloid-antibiotic-resistance-ckd-gut.md` | `10.1186/s40659-022-00389-z` | Miranda 2022 — Metal(loid) and Antibiotic Resistance in CKD Gut Bacteria | Characterization of metal(loid)s and antibiotic resistance in bacteria of human  | 0.38 |
| `nalls-2021-mendelian-randomization-microbiome-parkinsons-causality.md` | `10.1038/s41531-021-00218-2` | Nalls 2021 -- Mendelian Randomization of the Gut Microbiome and Parkinson's Dise | Exploring human-genome gut-microbiome interaction in Parkinson’s disease | 0.43 |
| `nguyen-2024-antibacterial-bioceramics-design-mechanisms.md` | `10.1016/j.mtbio.2024.100985` | Nguyen 2024 — Engineering Antibacterial Bioceramics: Design Principles and Mecha | Melatonin-encapsuled silk fibroin electrospun nanofibers promote vascularized bo | 0.00 |
| `nguyen-2024-fluorescent-zinc-sensors-aerobic-anaerobic-ecoli.md` | `10.1016/j.jbc.2024.107890` | Nguyen 2024 — Fluorescent Protein-Based Zn2+ Sensors Reveal Distinct Responses o | Oncogenic accumulation of cysteine promotes cancer cell proliferation by regulat | 0.00 |
| `nickel-sex-differences-parkinsons-reference.md` | `10.1186/s13293-026-00865-1` | Gillies 2026 -- Sex Differences in Parkinson's Disease and Nickel Exposure: A Re | Sex-specific metabolic and microbial remodeling in a rotenone-induced rat model  | 0.17 |
| `nie-2025-microbiome-derived-metabolites-parkinsons-biomarkers.md` | `10.1038/s41531-025-01040-w` | Nie 2025 -- Microbiome-Derived Metabolites as Biomarkers for Parkinson's Disease | Enrichment of gut-derived metabolites in a Parkinson’s disease subtype with REM  | 0.40 |
| `niehoff-2021-metals-breast-cancer-toenail.md` | `10.3390/cancers13123045` | Metals and Breast Cancer Risk: A Prospective Study Using Toenail Biomarkers | Genome-Wide Transcriptomic Analysis of Non-Tumorigenic Tissues Reveals Aging-Rel | 0.00 |
| `niu-2019-intestinal-microbiota-probiotics-asd-china.md` | `10.3389/fneur.2019.01084` | Niu 2019 — Intestinal Microbiota and Probiotics Treatment in Chinese ASD Childre | Characterization of Intestinal Microbiota and Probiotics Treatment in Children W | 0.45 |
| `nsaids-2023-parkinsons-microbiome.md` | `10.1038/s41531-023-00511-2` | 2023 -- Assessing the Impact of Common Pain Medications on Gut Microbiota Compos | Gastrointestinal disorders in Parkinson’s disease and other Lewy body diseases | 0.00 |
| `nurrahma-2024-synbiotics-parkinsons-gut-microbiome.md` | `10.1038/s41598-024-74400-w` | Nurrahma 2024 -- Effects of Synbiotic Supplementation on Gut Microbiome and Clin | Synbiotic supplementation may globally improve non-motor symptoms in patients wi | 0.24 |
| `opoku-2024-calcium-rescues-streptococcus-pneumoniae-manganese-toxicity.md` | `10.3390/microorganisms12091874` | Opoku 2024 — Calcium Rescues Streptococcus pneumoniae D39 delta-mntE Manganese-S | Update of the Genetic Variability of Monkeypox Virus Clade IIb Lineage B.1 | 0.00 |
| `ouattara-2025-prrf-srnas-brnd-iron-peroxide-pseudomonas.md` | `10.1101/2025.01.15.633217` | Ouattara 2025 — Iron and Peroxide Regulation of the PrrF sRNAs and a Conserved D | Differential Left and Right Carotid Artery Blood Flow and Altered Hippocampal Mi | 0.00 |
| `pandey-2021-galbofloxacin-gallium-siderophore-staph.md` | `10.1039/d1sc04283a` | Pandey et al. 2021 — Galbofloxacin: Rationally Designed Gallium-Siderophore Anti | Galbofloxacin: a xenometal-antibiotic with potent <i>in vitro</i> and <i>in vivo | 0.40 |
| `park-2020-nerd-treatment-esophageal-microbiome.md` | `10.1038/s41598-020-72082-8` | Park 2020 — NERD Treatment and Esophageal Microbiome | Treatment of non-erosive reflux disease and dynamics of the esophageal microbiom | 0.30 |
| `pasman-2025-candida-staph-reciprocal-virulence-masking.md` | `10.3389/fcimb.2025.1629373` | Pasman et al. 2025 — Candida-Staphylococcus Reciprocal Virulence and Masking in  | Candida albicans and Staphylococcus aureus reciprocally promote their virulence  | 0.25 |
| `passari-2023-siderophores-medical-applications.md` | `10.1007/s00253-023-12742-7` | Passari et al. 2023 — Siderophores: Medical Applications Beyond Antimicrobials | Opportunities and challenges of microbial siderophores in the medical field | 0.29 |
| `pereira-2020-nickel-baby-foods.md` | `10.1097/JOM.0000000000001634` | Exposure to nickel through commercial premade baby foods: Is there any risk? | MRI Signal Intensity and Parkinsonism in Manganese-Exposed Workers | 0.00 |
| `pereira-2020-oral-microbiome-early-parkinsons.md` | `10.1186/s12915-020-00775-7` | Pereira 2020 -- The Oral Microbiome of Early Stage Parkinson's Disease and Its R | Parkinson’s disease-associated alterations of the gut microbiome predict disease | 0.21 |
| `perez-pardo-2022-mediterranean-diet-parkinsons-microbiome.md` | `10.3390/nu14020245` | Perez-Pardo 2022 -- Mediterranean Diet Adherence in People with Parkinson's Dise | Awareness, Knowledge and Attitude towards ‘Superfood’ Kale and Its Health Benefi | 0.00 |
| `pietrucci-2020-butyrogenic-fibers-parkinsons.md` | `10.3389/fneur.2020.00643` | Pietrucci 2020 -- Potential of Prebiotic Butyrogenic Fibers in Parkinson's Disea | Increasing Objective Cardiometabolic Burden Associated With Attenuations in the  | 0.08 |
| `pokorska-niewiada-2022-trace-elements-erythrocytes-pcos.md` | `10.3390/ijerph19137998` | Levels of Trace Elements in Erythrocytes as Endocrine Disruptors in Obese and No | Green Jobs—A Literature Review | 0.00 |
| `prakash-2024-rho-riboswitch-mntp-manganese-membrane-toxicity.md` | `10.1016/j.jbc.2024.108043` | Prakash 2024 — Rho and Riboswitch-Dependent Regulations of mntP Gene Expression  | Apoptotic signaling by TNFR1 is inhibited by the α2-6 sialylation, but not α2-3  | 0.00 |
| `prebiotics-2020-gut-microbiota-insulin-sensitivity-t1d.md` | `10.1007/s00125-020-05295-1` | Prebiotics/Probiotics 2020 — Gut Microbiota and Insulin Sensitivity in Type 1 Di | The effect of probiotics, prebiotics or synbiotics on metabolic outcomes in indi | 0.23 |
| `qin-2020-smoking-dysmenorrhea-meta-analysis.md` | `10.1038/s41467-019-12848-5` | Association between cigarette smoking and the risk of dysmenorrhea: A meta-analy | A tumour-selective cascade activatable self-detained system for drug delivery an | 0.00 |
| `rasin-2025-cadmium-exposure-health-review.md` | `10.1016/j.hazadv.2024.100527` | Exposure to Cadmium and Its Impacts on Human Health: A Short Review | Levels, sources and toxicity assessment of PCBs in surface and groundwater in Ni | 0.10 |
| `rebelo-2021-enterococcus-metal-antibiotic-resistance.md` | `10.1016/j.scitotenv.2020.142710` | Diversity of metal and antibiotic resistance genes in Enterococcus spp. from the | The critical role of the shoot base in inhibiting cadmium transport from root to | 0.06 |
| `regland-2001-nickel-allergy-cfs.md` | `10.3389/fgene.2021.746060` | Nickel Allergy Is Found in a Majority of Women with Chronic Fatigue Syndrome and | SOD1 Mutation Spectrum and Natural History of ALS Patients in a 15-Year Cohort i | 0.00 |
| `reis-2024-manganese-excess-stress-mnx-synechocystis-mismetallation.md` | `10.1099/mic.0.001504` | Reis 2024 — Study of Excess Manganese Stress Response Highlights the Central Rol | Microbiome-derived metabolite effects on intestinal barrier integrity and immune | 0.07 |
| `rezazadegan-2025-heavy-metals-gut-microbiota-systematic-review.md` | `10.1186/s41043-025-00750-4` | Rezazadegan et al. 2025 — Heavy Metals and Gut Microbiota: A Systematic Review | Major heavy metals and human gut microbiota composition: a systematic review wit | 0.45 |
| `rho-2025-heavy-metals-kidney-function-korea.md` | `10.1352/1934-9556-59.6.459` | A Comparative Study on the Paradoxical Relationship Between Heavy Metal Exposure | Exploring Patterns of Advocacy and Well-Being of Parents of Children With Intell | 0.00 |
| `rice-2012-evaluating-asd-prevalence-changes.md` | `10.1007/BF03391693` | Rice 2012 -- Evaluating Changes in the Prevalence of the Autism Spectrum Disorde | Public Health Systems and Services Research: Building the Evidence Base to Impro | 0.00 |
| `robinson-2020-metalation-natures-challenge.md` | `10.1007/s00775-020-01790-3` | Robinson & Glasfeld 2020 — Metalation and Mis-metalation: Nature's Challenge in  | Metalation: nature’s challenge in bioinorganic chemistry | 0.38 |
| `rosario-2025-microbiome-host-cometabolism-parkinsons-alzheimers.md` | `10.1186/s40168-025-02227-2` | Rosario 2025 -- Constraint-Based Modelling of Host-Microbiome Co-Metabolism in A | Integrated multi-omics highlights alterations of gut microbiome functions in pro | 0.27 |
| `sabath-2012-renal-health-heavy-metal-nephrotoxicity.md` | `10.1212/WNL.0000000000013121` | Renal health and the environment: heavy metal nephrotoxicity | Phase 2 Trial of Rituximab in Acetylcholine Receptor Antibody-Positive Generaliz | 0.00 |
| `sampah-2021-prenatal-immunity-nec.md` | `10.3389/fimmu.2021.650709` | Sampah & Hackam 2021 — Prenatal Immunity and Pathophysiology of NEC | Prenatal Immunity and Influences on Necrotizing Enterocolitis and Associated Neo | 0.25 |
| `sampson-2019-microbiome-immune-system-parkinsons.md` | `10.1007/s00281-022-00947-3` | Sampson 2019 -- The Microbiome and Immune System in Parkinson's Disease | The immunology of Parkinson’s disease | 0.29 |
| `scfa-2020-dietary-fiber-t2d-gut-microbiome.md` | `10.1007/s00394-020-02282-5` | SCFA 2020 — Dietary Fiber and Short-Chain Fatty Acids in Type 2 Diabetes | Prebiotic effect of inulin-type fructans on faecal microbiota and short-chain fa | 0.40 |
| `scheperjans-2024-fmt-parkinsons-randomized-pilot.md` | `10.1016/j.eclinm.2023.102352` | Scheperjans 2024 -- Fecal Microbiota Transplantation in Parkinson's Disease: A R | Deep learning signature based on multiphase enhanced CT for bladder cancer recur | 0.07 |
| `schilling-2020-urine-metallomics-pancreatic-cancer.md` | `10.1109/TCYB.2021.3131292` | Urine metallomics signature as an indicator of pancreatic cancer | Two-Level Control of Multiagent Networks for Dynamic Coverage Problems | 0.00 |
| `scholefield-2024-brain-metallomics-dementia.md` | `10.3389/fnins.2024.1412356` | Scholefield et al. 2024 — Brain Metallomic Signatures Distinguish DLB from AD an | Metallomic analysis of brain tissues distinguishes between cases of dementia wit | 0.14 |
| `seelbinder-2023-candida-expansion-lung-cancer-ecological.md` | `10.1038/s41467-023-38058-8` | Seelbinder et al. 2023 — Candida Expansion in the Gut Is Determined by Bacterial | Candida expansion in the gut of lung cancer patients associates with an ecologic | 0.13 |
| `sharma-2006-disulfiram-low-nickel-diet-hand-eczema.md` | `10.4103/0378-6323.25777` | Disulfiram and low nickel diet in the management of hand eczema: A clinical stud | Evolution of venereology in India | 0.00 |
| `shearston-2024-tampons-metal-exposure.md` | `10.1016/j.envint.2024.108899` | Tampons as a Source of Exposure to Metal(loid)s | The effect of exposure to radiofrequency electromagnetic fields on cognitive per | 0.07 |
| `siegmann-2020-graves-disease-depression-mechanistic.md` | `10.3389/fendo.2020.00530` | Graves' disease as a driver of depression: a mechanistic insight | Hypercoagulopathy and Adipose Tissue Exacerbated Inflammation May Explain Higher | 0.00 |
| `smovrsnik-2023-heavy-metals-oxidative-stress-pcos.md` | `10.3390/antiox12010049` | Heavy Metals and Essential Elements in Association with Oxidative Stress in Wome | Anmyungambi Decoction Ameliorates Obesity through Activation of Non-Shivering Th | 0.00 |
| `smovrsnik-2025-trace-elements-pcos.md` | `10.1111/ijlh.13883` | Association of Trace Elements with Polycystic Ovary Syndrome in Women -- A Case- | <scp>AML</scp> with t(8;16) mimicking acute promyelocytic leukaemia | 0.09 |
| `sorrentino-2020-amino-acid-metabolism-parkinsons-microbiome.md` | `10.1038/s41531-022-00312-z` | Sorrentino 2022 -- Amino Acid Metabolism in Parkinson's Disease and the Gut Micr | Plasma branched-chain and aromatic amino acids correlate with the gut microbiota | 0.25 |
| `steed-2010-synbiotic-crohns-rct.md` | `10.1111/j.1365-2036.2010.04472.x` | Clinical Trial: The Microbiological and Immunological Effects of Synbiotic Consu | There is an association between selective serotonin reuptake inhibitor use and u | 0.06 |
| `stilling-2021-fatty-acids-neurodegeneration-parkinsons-microbiome.md` | `10.1186/s12883-021-02544-7` | Stilling 2021 -- Fatty Acid Metabolism and Neurodegeneration in Parkinson's Dise | Serum short-chain fatty acids and its correlation with motor and non-motor sympt | 0.25 |
| `su-2020-gut-microbiota-immune-imbalance-graves.md` | `10.1016/j.ebiom.2020.102952` | Alteration in gut microbiota is associated with immune imbalance in Graves' dise | Sphingosine 1-phosphate escapes the Catch-22 of sepsis prevention and mitigation | 0.00 |
| `su-2023-gut-microbiota-ed-mr-6-taxa.md` | `10.3389/fendo.2023.1216746` | Su 2023 — Six Gut Microbial Taxa Causally Associated with ED (MR) | Specific gut microbiota may increase the risk of erectile dysfunction: a two-sam | 0.00 |
| `sugihartono-2022-gastric-microbiota-h-pylori-gerd.md` | `10.1186/s13099-022-00510-3` | Sugihartono 2022 — Gastric Microbiota and H. pylori in GERD | Analysis of gastric microbiota and Helicobacter pylori infection in gastroesopha | 0.33 |
| `takeda-2022-gut-microbiota-premenstrual-symptoms.md` | `10.1371/journal.pone.0268466` | Takeda 2022 — Gut Microbiota and Premenstrual Symptoms | Characteristics of the gut microbiota in women with premenstrual symptoms: A cro | 0.33 |
| `tan-2021-metabolomics-parkinsons-gut-microbiome.md` | `10.1038/s41467-021-21669-4` | Tan 2021 -- Plasma Metabolome and Lipidome Associations with Type 2 Diabetes and | Metabolomics of sebum reveals lipid dysregulation in Parkinson’s disease | 0.00 |
| `tan-2021-microbiome-derived-metabolites-parkinsons.md` | `10.1007/s12035-021-02375-0` | Tan 2021 -- Microbiome-Derived Metabolites in Parkinson's Disease | Gut Microbial Metabolites in Parkinson’s Disease: Implications of Mitochondrial  | 0.33 |
| `tan-2022-gut-microbiome-scfas-parkinsons-review.md` | `10.1007/s12264-023-01123-9` | Tan 2022 -- The Role of Short-Chain Fatty Acids in Health and Disease | Relationship Between Short-chain Fatty Acids and Parkinson’s Disease: A Review f | 0.42 |
| `tang-2023-gut-microbiome-tango-ckd-progression.md` | `10.1186/s12967-023-04455-2` | Tang et al. 2023 — Gut Microbiome Tango with CKD Progression | The gut microbiome tango in the progression of chronic kidney disease and potent | 0.33 |
| `tao-2024-cadmium-gut-microbiota-dwarf-hamsters.md` | `10.1002/ece3.11428` | Cadmium Exposure Induces Changes in Gut Microbial Composition and Metabolic Func | Variations in the phenological patterns of a caddisfly inhabiting the same mount | 0.00 |
| `teimoori-2016-zinc-dysmenorrhea-treatment.md` | `10.5001/omj.2016.13` | The Efficacy of Zinc Administration in the Treatment of Primary Dysmenorrhea | Surgical Management of Bulky Mediastinal Metastases in Follicular Thyroid Carcin | 0.00 |
| `tetz-2018-parkinsons-bacteriophage-gut-dysbiosis.md` | `10.1038/s41598-018-29173-4` | Tetz 2018 -- Bacteriophage and Gut Dysbiosis in Parkinson's Disease | Parkinson’s disease and bacteriophages as its overlooked contributors | 0.33 |
| `tetz-2021-gut-virome-parkinsons-bacteriophages.md` | `10.1038/s42003-021-02666-1` | Tetz 2021 -- Gut Virome Alterations in Parkinson's Disease | Alpha-synuclein alters the faecal viromes of rats in a gut-initiated model of Pa | 0.20 |
| `tetz-2022-gut-dysbiosis-bacteriophages-parkinsons.md` | `10.3390/pathogens11121462` | Tetz 2022 -- The Effects of Gut Dysbiosis via Bacteriophages and Its Role in Par | Biophysical Manipulation of the Extracellular Environment by Eurotium halophilic | 0.00 |
| `tetz-2024-bacteriophage-aging-brain-parkinsons.md` | `10.1038/s41598-024-77038-w` | Tetz 2024 -- The Impact of Bacteriophage on the Aging Brain and Inflammatory Res | Bacteriophages targeting Enterococcus faecalis enhance the therapeutic efficacy  | 0.13 |
| `tetz-2025-combined-bacteriophage-toxin-gut-parkinsons.md` | `10.1038/s41598-025-96924-5` | Tetz 2025 -- The Impact of Combined Bacteriophage and Toxin Exposure on Gut Viab | Comparison of phage and plasmid populations in the gut microbiota between Parkin | 0.18 |
| `tian-2020-iron-supplementation-ppd-protocol.md` | `10.1097/MNM.0000000000001640` | The effectiveness of iron supplementation for postpartum depression: A protocol  | Influence of the methodological aspects of the dichotomization of total metaboli | 0.00 |
| `tizabi-2023-lead-gut-microbiota-asd.md` | `10.1590/0001-37652022202294S4` | Interaction of Heavy Metal Lead with Gut Microbiota: Implications for Autism Spe | Special volume on Biodiversity at the AABC | 0.00 |
| `tsai-2018-heavy-metals-soil-ckd-progression-esrd.md` | `10.1016/j.cct.2022.107065` | Prospective associations between environmental heavy metal exposure and renal ou | Integrating data analytics, peer support, and whole health coaching to improve t | 0.06 |
| `tuchman-2015-nickel-dermatitis-children.md` | `10.1016/j.scib.2017.05.005` | Nickel contact dermatitis in children | High-resolution gene profiling of infection process indicates serine metabolism  | 0.00 |
| `uceda-2023-keto-diet-neuroprotection-parkinsons.md` | `10.1038/s41420-023-01549-0` | Uceda 2023 -- Ketogenic Diet and Neuroprotection in Parkinson's Disease | Neuroprotective effect of a medium-chain triglyceride ketogenic diet on MPTP-ind | 0.21 |
| `urolithins-2018-biomarkers-gut-dysbiosis-parkinsons.md` | `10.1007/s00702-018-1910-4` | Cirstea 2018 -- Urolithins: Potential Biomarkers of Gut Dysbiosis and Disease St | Diagnostic biomarkers for Parkinson’s disease at a glance: where are we? | 0.30 |
| `vacca-2023-synbiotic-ckd-stage-iiib-iv.md` | `10.3389/fnut.2023.1215836` | Vacca et al. 2023 — Synbiotic Intervention in CKD Stage IIIb-IV | In vivo evaluation of an innovative synbiotics on stage IIIb-IV chronic kidney d | 0.20 |
| `vascellari-2022-microbial-biomarkers-parkinsons-shotgun.md` | `10.1038/s41522-022-00367-z` | Vascellari 2022 -- Gut Microbiome Biomarkers in Parkinson's Disease via Shotgun  | Inflammatory microbes and genes as potential biomarkers of Parkinson’s disease | 0.38 |
| `vasconcelos-2024-prebiotics-parkinsons-neuroinflammation.md` | `10.1007/s10787-026-02152-2` | Vasconcelos 2026 -- Prebiotics and Neuroinflammation in Parkinson's Disease | Prebiotics attenuate depressive-like behavior, neuroinflammation and synaptic pl | 0.29 |
| `veien-1993-low-nickel-diet-trial.md` | `10.1016/0190-9622(93)70154-L` | Low nickel diet: An open, prospective trial | Vascular cell adhesion molecule—1: Expression in normal and diseased skin and re | 0.00 |
| `villa-2022-hormonal-therapy-brain-parkinsons.md` | `10.1016/j.yfrne.2022.100998` | Villa 2022 -- Potential Therapeutic Approaches of Female Hormones in the Brain | HPA axis activity across the menstrual cycle - a systematic review and meta-anal | 0.00 |
| `vollenweider-2024-pyoverdines-antimicrobial-iron-depriving.md` | `10.7554/eLife.92493.1` | Vollenweider et al. 2024 — Pyoverdines as Iron-Depriving Antimicrobials | Antimicrobial activity of iron-depriving pyoverdines against human opportunistic | 0.33 |
| `wales-2015-co-selection-resistance-foodborne-pathogens.md` | `10.3390/antibiotics4040567` | Wales & Davies 2015 — Co-selection of Resistance in Foodborne Pathogens | Co-Selection of Resistance to Antibiotics, Biocides and  Heavy Metals, and Its R | 0.44 |
| `wallen-2024-nutritional-intake-microbiome-parkinsons.md` | `10.1038/s41531-024-00681-7` | Wallen 2024 -- Nutritional Intake and Gut Microbiome Composition Predict Parkins | Diet and the gut microbiome in patients with Parkinson’s disease | 0.33 |
| `wang-2018-metabolomics-parkinsons-disease-severity.md` | `10.1186/s13024-018-0304-2` | Wang 2018 -- Metabolomic Profiling of Parkinson's Disease and Disease Severity | Recent advances and perspectives of metabolomics-based investigations in Parkins | 0.25 |
| `wang-2021-probiotic-combination-ckd-pilot.md` | `10.3389/fnut.2021.661794` | Wang et al. 2021 — Probiotic Combination for CKD (Pilot Study) | Effect of a Probiotic Combination in an Experimental Mouse Model and Clinical Pa | 0.29 |
| `wang-2022-high-fiber-acarbose-pcos.md` | `10.1016/j.eats.2022.11.005` | High-Fiber Diet or Combined With Acarbose Alleviates Heterogeneous Phenotypes of | Endoscopic Technique to Remove Endobutton After Anterior Cruciate Ligament Recon | 0.00 |
| `wang-2023-amino-acid-metabolomics-cerebral-palsy-plasma.md` | `10.3389/fnmol.2023.1237745` | Wang 2023 — Plasma amino acid metabolomics identifies diagnostic signature for c | Targeting the metabolic profile of amino acids to identify the key metabolic cha | 0.27 |
| `wang-2023-metallo-sideromycin-bismuth-cefiderocol.md` | `10.1038/s41467-023-40828-3` | Wang et al. 2023 — Bismuth-Cefiderocol Synergy as Metallo-Sideromycin Strategy | Metallo-sideromycin as a dual functional complex for combating antimicrobial res | 0.25 |
| `wang-2023-perturbed-microbiome-metabolomes-ckd-severity.md` | `10.1186/s40168-022-01443-4` | Wang 2023 — Perturbed Gut Microbiome and Metabolomes Across CKD Severity | Perturbed gut microbiome and fecal and serum metabolomes are associated with chr | 0.36 |
| `wang-2024-causal-gut-microbiota-gerd-bidirectional-mr.md` | `10.3389/fimmu.2024.1327503` | Wang K 2024 — Causal Gut Microbiota-GERD Associations via Bidirectional Mendelia | Causal relationship between gut microbiota and risk of gastroesophageal reflux d | 0.36 |
| `wang-2024-understanding-autism-causes-diagnosis-therapies.md` | `10.1016/j.brainresbull.2024.111059` | Wang 2024 — Understanding Autism: Causes, Diagnosis, and Advancing Therapies | Inhibition of the P38 MAPK/NLRP3 pathway mitigates cognitive dysfunction and moo | 0.00 |
| `weis-2022-environmental-enrichment-parkinsons-microbiome.md` | `10.1038/s41531-021-00213-7` | Weis 2022 -- Enriched Environmental Conditions Modify the Gut Microbiome Composi | Genetic and environmental factors in Alzheimer’s and Parkinson’s diseases and pr | 0.23 |
| `xie-2025-urinary-metals-trace-elements-kidney-function.md` | `10.1093/ckj/sfae399` | Association between urinary heavy metal/trace element concentrations and kidney  | Improving the diagnostic of absorptive hypercalciuria: a comparative analysis of | 0.00 |
| `xiong-2022-nec-vs-fpiap-microbiota-scfas.md` | `10.3389/fcimb.2022.1030588` | Xiong 2022 — Gut microbiota and SCFA differences between NEC and food protein-in | Alterations of the gut microbiota and short chain fatty acids in necrotizing ent | 0.41 |
| `xu-2021-fecal-microbiota-transplant-parkinsons-review.md` | `10.1186/s12934-021-01589-0` | Xu 2021 -- Fecal Microbiota Transplantation: A New Therapeutic Attempt from the  | Evaluation of fecal microbiota transplantation in Parkinson's disease patients w | 0.33 |
| `yang-2016-copper-farm-soils-rheumatoid-arthritis.md` | `10.1016/j.neuro.2023.04.013` | Increased inflammation in rheumatoid arthritis patients living where farm soils  | Neuroinflammation and white matter alterations in occupational manganese exposur | 0.00 |
| `yang-2021-dietary-fiber-uremic-toxins-ckd-meta-analysis.md` | `10.1053/j.jrn.2020.11.008` | Yang 2021 — Dietary Fiber Supplementation Reduces Uremic Toxins in CKD: Meta-Ana | The Role of Dietary Fiber Supplementation in Regulating Uremic Toxins in Patient | 0.41 |
| `yang-2024-zip8-a391t-crohns-metal-dyshomeostasis-microbiome.md` | `10.3389/fimmu.2023.1183914` | ZIP8 A391T Crohn's Disease-Linked Risk Variant Induces Colonic Metal Ion Dyshome | Comparison of methods generating antibody-epitope conjugates for targeting cance | 0.00 |
| `yasuno-2024-dysbiosis-gut-microbiota-ckd.md` | `10.2169/internalmedicine.1602-23` | Yasuno et al. 2024 — Dysbiosis of Gut Microbiota in CKD | Dysbiosis of Gut Microbiota in Patients with Chronic Kidney Disease | 0.29 |
| `yin-2024-heavy-metals-renal-injury-longitudinal.md` | `10.23749/mdl.v114i3.14422` | Complex interplay of heavy metals and renal injury: New perspectives from longit | Factors Associated with SARS-CoV-2 Infection before Vaccination among European H | 0.00 |
| `yin-2025-probiotics-ppi-gerd-rct.md` | `10.18549/PharmPract.2025.4.3225` | Yin 2025 — Probiotics Combined with PPI for GERD: Randomized Controlled Trial | Investigation of the gut microbiota and adverse reactions associated with the co | 0.11 |
| `yu-2021-ppd-biomarkers.md` | `10.3389/fpsyt.2021.620371` | Yu et al. 2021 — PPD Current Status and Biomarker Identification | Postpartum Depression: Current Status and Possible Identification Using Biomarke | 0.38 |
| `zaman-2023-blood-mercury-gst-jamaican-children.md` | `10.1186/s12887-023-04452-w` | Zaman 2023 — Factors associated with blood mercury and GST gene interactions in  | Factors associated with blood mercury concentrations and their interactions with | 0.36 |
| `zhai-2016-probiotics-cadmium.md` | `10.1038/s41420-023-01587-8` | Oral Administration of Probiotics Inhibits Absorption of the Heavy Metal Cadmium | Loss of Paip1 causes translation reduction and induces apoptotic cell death thro | 0.00 |
| `zhai-2019-trace-elements-microbiota-asd-pilot.md` | `10.1016/j.envres.2019.01.016` | Zhai 2019 — Disturbance of Trace Elements and Gut Microbiota Profiles in Autism | Cost-benefit of point-of-use devices for lead reduction | 0.00 |
| `zhang-2021-cadmium-gut-microbiome-parkinsons.md` | `10.1038/s42003-021-02898-1` | Zhang 2021 -- Cadmium Exposure and Gut Microbiome Disruption in Neurodegeneratio | Cadmium exposure modulates the gut-liver axis in an Alzheimer’s disease mouse mo | 0.22 |
| `zhang-2021-lead-exposure-gut-microbiome-neurodegeneration.md` | `10.1186/s40168-021-01012-1` | Zhang 2021 -- Lead Exposure and Gut Microbiome Alterations in Neurodegeneration | Much ado about nothing? Off-target amplification can lead to false-positive bact | 0.13 |
| `zhang-2022-metallomics-cancer-review.md` | `10.1007/s10653-023-01737-y` | Recent advances in the application of metallomics in diagnosis and prognosis of  | Application of GIS and feedforward back-propagated ANN models for predicting the | 0.07 |
| `zhang-2022-probiotics-asd-rct-protocol.md` | `10.1371/journal.pone.0263109` | Zhang 2022 — Probiotics in Children with ASD: RCT Study Protocol | The role of probiotics in children with autism spectrum disorders: A study proto | 0.42 |
| `zhang-2023-fmt-asd-systematic-review.md` | `10.3389/fpsyt.2023.1123658` | Zhang 2023 — Effect of FMT in Children with ASD: Systematic Review | Effect of fecal microbiota transplantation in children with autism spectrum diso | 0.45 |
| `zhang-2023-metagenome-esrd-microbiome-uremic-toxins.md` | `10.1186/s13059-023-03056-y` | Zhang 2023 — Metagenome-Wide Analysis of ESRD Microbiome and Uremic Toxins | Metagenome-wide analysis uncovers gut microbial signatures and implicates taxon- | 0.23 |
| `zhang-2024-recent-advances-alzheimers-mechanisms-trials.md` | `10.1002/14651858.CD007388.pub3` | Recent advances in Alzheimer's disease: mechanisms, clinical trials and new drug | Alternative magnesium sulphate regimens for women with pre-eclampsia and eclamps | 0.00 |
| `zhang-2024-shotgun-metagenomics-parkinsons-chinese.md` | `10.1038/s41598-024-69742-4` | Zhang 2024 -- Gut Metagenomics of Parkinson's Disease in a Chinese Cohort | Metagenome-assembled microbial genomes from Parkinson’s disease fecal samples | 0.22 |
| `zhao-2023-probiotics-meta-analysis-alzheimers-parkinsons.md` | `10.1038/s41531-022-00327-6` | Zhao 2023 -- Efficacy and Safety of Probiotics for the Treatment of Alzheimer's  | Probiotics synergized with conventional regimen in managing Parkinson’s disease | 0.25 |
| `zheng-2025-gut-thyroid-axis-aitd-mendelian-randomization.md` | `10.5603/ep.102030` | Zheng 2025 — Gut-thyroid axis causality with AITD: bidirectional Mendelian rando | Gut-thyroid axis: investigating the causality between the gut microbiota and aut | 0.42 |
| `zhou-2015-premature-infant-microbiome-prior-nec.md` | `10.1371/journal.pone.0118632` | Zhou 2015 — Premature Infant Microbiome Prior to NEC | Longitudinal Analysis of the Premature Infant Intestinal Microbiome Prior to Nec | 0.33 |
| `zhou-2023-probiotics-prevent-nec-vlbw-meta.md` | `10.3389/fped.2023.1095368` | Zhou 2023 — Probiotics Prevent NEC in VLBW (Network Meta-Analysis) | Probiotics to prevent necrotizing enterocolitis in very low birth weight infants | 0.45 |
| `zhou-2024-urinary-vocs-rheumatoid-arthritis.md` | `10.1038/s41598-023-44606-5` | Association between urinary volatile organic compounds metabolites and rheumatoi | Characterization and regulation of salt upregulated cyclophilin from a halotoler | 0.07 |
| `zhu-2024-toxic-essential-metals-gut-microbiota.md` | `10.1016/j.biopha.2023.115602` | Toxic and Essential Metals: Metabolic Interactions with the Gut Microbiota and H | Construction and preclinical evaluation of a zirconium-89 labelled monoclonal an | 0.00 |
| `zim-2025-estrogen-gut-brain-axis-oral-contraceptives.md` | `10.7759/cureus.81354` | Zim 2025 — Estrogen-Gut-Brain Axis: COCs, Mental Health, and the Gut Microbiome | Estrogen-Gut-Brain Axis: Examining the Role of Combined Oral Contraceptives on M | 0.43 |
| `zirwas-2009-dietary-nickel-dermatitis.md` | `10.2196/47913` | Dietary Nickel as a Cause of Systemic Contact Dermatitis | Usability and Overall Perception of a Health Bot for Nutrition-Related Questions | 0.00 |

### DOI resolves, title matches, but authors differ

| File | Stored DOI | Stored authors | Crossref authors |
|---|---|---|---|
| `Bernard-Raichon2022-dysbiosis-translocation-bacteremia-covid 2.md` | `10.1038/s41467-022-33395-6` | Lucie Bernard-Raichon, Mericien Venzon, Jon Klein | Bernard-Raichon Lucie, Venzon Mericien, Klein Jon |
| `Chen2023-gut-microbiota-inflammatory-mendelian-covid.md` | `10.3389/fimmu.2024.1406291` | Yuling Chen, Chang Chen | Chen Yuling, Chen Chang |
| `Ibrahim2021-metformin-covid-review.md` | `10.3389/fendo.2021.587801` | Sherehan Ibrahim, Jamie R. Lowe, Carolyn T. Bramante | Ibrahim Sherehan, Lowe Jamie R., Bramante Carolyn T. |
| `Ke2022-microbiome-covid-metagenome-genomes 2.md` | `10.1038/s41467-022-32991-w` | Shanlin Ke, Scott T. Weiss, Yang-Yu Liu | Ke Shanlin, Weiss Scott T., Liu Yang-Yu |
| `Li2023-genetic-causal-gut-microbiome-covid.md` | `10.3389/fimmu.2023.1217615` | Zengbin Li, Guixian Zhu, Xiangye Lei | Li Zengbin, Zhu Guixian, Lei Xiangye |
| `abdollahpour-2026-lactobacillus-casei-ppd-rct.md` | `10.1186/s12888-025-07658-7` | Derakhshan Abdollahpour, Aziz Homayouni-Rad, Roghaiyeh Nourizadeh | Abdollahpour Derakhshan, Homayouni-Rad Aziz, Nourizadeh Roghaiyeh |
| `abedi-2023-arsenic-mercury-hen-eggs-iran.md` | `10.1186/s12889-023-16223-4` | Abdol-samad Abedi, Hedayat Hoseini, Fatemeh Mohammadi-Nasrabadi | Abedi Abdol-samad, Hoseini Hedayat, Mohammadi-Nasrabadi Fatemeh |
| `abudawood-2021-antioxidant-heavy-metals-pcos.md` | `10.1038/s41598-021-02120-6` | Manal Abudawood, Hajera Tabassum, Atheer H. Alanazi | Abudawood Manal, Tabassum Hajera, Alanazi Atheer H. |
| `abuqwider-2023-gut-microbiome-blood-glucose-t1d-systematic-review.md` | `10.3389/fendo.2023.1265696` | Jumana Abuqwider, Alessandra Corrado, Giuseppe Scida | Abuqwider Jumana, Corrado Alessandra, Scidà Giuseppe |
| `adhikari-2024-leafy-vegetables-heavy-metals-johannesburg.md` | `10.1007/s10661-023-12283-6` | Sutapa Adhikari, Madeleen Struwig | Adhikari Sutapa, Struwig Madeleen |
| `afroz-2021-high-salt-diet-microbiome-autism-behavior-mice.md` | `10.1038/s41598-021-87678-x` | Kazi Farhana Afroz, Noah Reyes, Kobe Young | Afroz Kazi Farhana, Reyes Noah, Young Kobe |
| `agagunduz-2023-dietary-lipids-lipidomics-gut-brain-t2d.md` | `10.1186/s12967-023-04088-5` | Duygu Agagunduz, Mehmet Arif Icer, Ozge Yesildemir | Ağagündüz Duygu, Icer Mehmet Arif, Yesildemir Ozge |
| `agrawal-2022-risk-factors-ppd.md` | `10.7759/cureus.30898` | Iris Agrawal, Ashok M. Mehendale, Ritika Malhotra | Agrawal Iris, Mehendale Ashok M, Malhotra Ritika |
| `ahmed-2021-microbiome-precision-psychiatry-ethical-challenges.md` | `10.1080/21507740.2021.1958096` | Eman Ahmed, Kristien Hens | Ahmed Eman, Hens Kristien |
| `ahmed-2024-infections-inflammation-schizophrenia-review.md` | `10.1186/s43045-024-00397-7` | Gellan K Ahmed, Haidi Karam-Allah Ramadan, Khaled Elbeh | Ahmed Gellan K., Ramadan Haidi Karam-Allah, Elbeh Khaled |
| `aho-2021-gut-microbiome-scfas-inflammation-parkinsons.md` | `10.1186/s13024-021-00427-6` | Velma T E Aho, Madelyn C Houser, Pedro A B Pereira | Aho Velma T. E., Houser Madelyn C., Pereira Pedro A. B. |
| `ajouz-2014-secondary-bile-acids-colon-cancer.md` | `10.1186/1477-7819-12-164` | Hana Ajouz, Deborah Mukherji, Ali Shamseddine | Ajouz Hana, Mukherji Deborah, Shamseddine Ali |
| `al-ayadhi-2021-leaky-gut-biomarkers-asd-diagnostic.md` | `10.1186/s13099-021-00448-y` | Laila Al-Ayadhi, Naima Zayed, Ramesa Shafi Bhat | Al-Ayadhi Laila, Zayed Naima, Bhat Ramesa Shafi |
| `al-bataineh-2020-gut-microbiome-fungal-community-t2d-emirati.md` | `10.1038/s41598-020-66598-2` | Mohammad Tahseen Al Bataineh, Nihar Ranjan Dash, Pierre Bel Lassen | Al Bataineh Mohammad Tahseen, Dash Nihar Ranjan, Bel Lassen Pierre |
| `al-bataineh-2023-multi-omics-microbiome-metabolome-t2d-fiber.md` | `10.1038/s41598-023-45066-7` | Mohammad Tahseen Al Bataineh, Axel Kunstner, Nihar Ranjan Dash | Al Bataineh Mohammad Tahseen, Künstner Axel, Dash Nihar Ranjan |
| `alam-2023-diet-treatment-asd-review.md` | `10.3389/fnins.2022.1031016` | Sabiha Alam, Cara J. Westmark, Elizabeth A. McCullagh | Alam Sabiha, Westmark Cara J., McCullagh Elizabeth A. |
| `alharthi-2021-human-gut-microbiome-asd.md` | `10.3390/ijms23031363` | Amani Alharthi, Safiah Alhazmi, Najla Alburae | Alharthi Amani, Alhazmi Safiah, Alburae Najla |
| `alibek-2022-torch-infections-dysbiotic-microbiome-asd.md` | `10.3897/rio.8.e91179` | Kenneth Alibek, Luiza Niyazmetova, Sean Farmer | Alibek Kenneth, Niyazmetova Luiza, Farmer Sean |
| `alkhodor-2017-gut-microbiome-kidney-disease-bidirectional.md` | `10.1007/s00467-016-3392-7` | Souhaila Al Khodor, Ibrahim F. Shatat | Al Khodor Souhaila, Shatat Ibrahim F. |
| `alkuwaiti-2025-microbiota-gut-brain-axis-pediatric-ndd.md` | `10.1186/s12967-025-07279-4` | Shamma H. Alkuwaiti, Jurga Skrabulyte-Barbulescu, Lidya K. Yassin | Alkuwaiti Shamma H., Skrabulyte-Barbulescu Jurga, Yassin Lidya K. |
| `almeida-2023-gut-microbiota-cardiovascular-axis.md` | `10.3389/fgstr.2023.1235126` | Catia Almeida, J. Guilherme Goncalves-Nobre, Diogo Alpuim Costa | Almeida Cátia, Gonçalves-Nobre J. Guilherme, Alpuim Costa Diogo |
| `alobaidi-2025-gut-kidney-axis-ckd-mechanisms-therapeutics.md` | `10.3389/fmed.2025.1675458` | Sami Alobaidi | Alobaidi Sami |
| `alonso-2021-brain-microbiota-huntingtons.md` | `10.3389/fmicb.2019.02622` | Ruth Alonso, Diana Pisa, Luis Carrasco | Alonso Ruth, Pisa Diana, Carrasco Luis |
| `anchidin-norocel-2025-heavy-metal-gut-probiotics-biosensors.md` | `10.3390/bios15030188` | Liliana Anchidin-Norocel, Oana C. Iatcu, Andrei Lobiuc | Anchidin-Norocel Liliana, Iatcu Oana C., Lobiuc Andrei |
| `ancona-2023-gut-airway-microbiota-dysbiosis-covid-longcovid.md` | `10.3389/fimmu.2023.1080043` | Giuseppe Ancona, Laura Alagna, Claudia Alteri | Ancona Giuseppe, Alagna Laura, Alteri Claudia |
| `andrei-2020-copper-homeostasis-bacteria-ins-outs.md` | `10.3390/membranes10090242` | Andreea Andrei, Yavuz Ozturk, Bahia Khalfaoui-Hassani | Andrei Andreea, Öztürk Yavuz, Khalfaoui-Hassani Bahia |
| `arias-borrego-2022-metallomic-metabolomic-covid-mothers.md` | `10.1002/mnfr.202200071` | Arias-Borrego A, Soto Cruz FJ, Selma-Royo M | Arias‐Borrego Ana, Soto Cruz Francisco J., Selma‐Royo Marta |
| `arteaga-henriquez-2023-immunoregulatory-anti-inflammatory-asd.md` | `10.1007/s40263-023-00993-x` | Gara Arteaga-Henriquez, Laura Gisbert, Josep Antoni Ramos-Quiroga | Arteaga-Henríquez Gara, Gisbert Laura, Ramos-Quiroga Josep Antoni |
| `atlani-2024-heavy-metals-ckdu-central-india.md` | `10.1186/s12882-024-03564-4` | Mahendra Atlani, Ashok Kumar, Rajesh Ahirwar | Atlani Mahendra, Kumar Ashok, Ahirwar Rajesh |
| `attfield-2022-immunology-ms-nature-review.md` | `10.1038/s41577-022-00718-z` | Kathrine E. Attfield, Lise Torp Jensen, Max Kaufmann | Attfield Kathrine E., Jensen Lise Torp, Kaufmann Max |
| `avila-2018-sex-hormones-ms.md` | `10.1159/000494262` | Mirla Avila, Arpana Bansal, John Culberson | Avila Mirla, Bansal Arpana, Culberson John |
| `aziz-zadeh-2025-brain-activity-tryptophan-gut-metabolites-asd.md` | `10.1038/s41467-025-58459-1` | Lisa Aziz-Zadeh, Sofronia M. Ringold, Aditya Jayashankar | Aziz-Zadeh Lisa, Ringold Sofronia M., Jayashankar Aditya |
| `bair-2022-heavy-metals-infant-toddler-food-us-policy.md` | `10.3389/fnut.2022.919913` | Emily C. Bair | Bair Emily C. |
| `bao-2020-polyphenols-intestinal-microbiota-ckd.md` | `10.3389/fimmu.2019.02981` | Naren Bao, Fangjie Chen, Di Dai | Bao Naren, Chen Fangjie, Dai Di |
| `barba-2021-low-aromatic-amino-acid-diet-ckd.md` | `10.1038/s41598-021-98718-x` | Christophe Barba, Berengere Benoit, Emilie Bres | Barba Christophe, Benoit Bérengère, Bres Emilie |
| `baron-cohen-2009-empathizing-systemizing-theory-autism.md` | `10.1111/j.1749-6632.2009.04467.x` | Simon Baron-Cohen | Baron‐Cohen Simon |
| `barras-2018-silver-antibiotic-synergy-mismetallation.md` | `10.3390/antibiotics7030079` | Frederic Barras, Laurent Aussel, Benjamin Ezraty | Barras Frédéric, Aussel Laurent, Ezraty Benjamin |
| `bartosik-2023-nasal-microbiome-nsaid-exacerbated-respiratory-disease.md` | `10.3389/fimmu.2023.1112345` | Tina J. Bartosik, Nicholas J. Campion, Kilian Freisl | Bartosik Tina J., Campion Nicholas J., Freisl Kilian |
| `bauer-2019-oregano-streptococcus-scfa-microbiota.md` | `10.1371/journal.pone.0216853` | Benjamin W. Bauer, Sheeana Gangadoo, Yadav Sharma Bajagai | Bauer Benjamin W., Gangadoo Sheeana, Bajagai Yadav Sharma |
| `bautista-2025-human-microbiome-clinical-translation.md` | `10.3389/fmicb.2025.1632435` | Jhommara Bautista, Carolina E. Echeverria, Ivan Maldonado-Noboa | Bautista Jhommara, Echeverría Carolina E., Maldonado-Noboa Iván |
| `becker-2021-scfas-intestinal-inflammation-ms-female-susceptibility.md` | `10.1186/s13317-021-00149-1` | Anouck Becker, Mosab Abuazab, Andreas Schwiertz | Becker Anouck, Abuazab Mosab, Schwiertz Andreas |
| `bedarf-2017-metagenomic-analysis-parkinsons-gut-microbiome.md` | `10.1186/s13073-017-0428-y` | Jillian R Bedarf, Falk Hildebrand, Luis P Coelho | Bedarf J. R., Hildebrand F., Coelho L. P. |
| `begg-2015-cadmium-toxicity-transition-metal-pneumococcus.md` | `10.1038/ncomms7418` | Stephanie L. Begg, Bart A. Eijkelkamp, Zhenyao Luo | Begg Stephanie L., Eijkelkamp Bart A., Luo Zhenyao |
| `belteky-2023-infant-gut-microbiome-t1d-abis-study.md` | `10.1007/s00125-023-05895-7` | Malin Belteky, Patricia L. Milletich, Angelica P. Ahrens | Bélteky Malin, Milletich Patricia L., Ahrens Angelica P. |
| `benoit-2021-nickel-chelator-inhibits-amyloid-beta.md` | `10.1038/s41598-021-86060-1` | Benoit, S.L., Bhatt | Benoit Stéphane L., Maier Robert J. |
| `bent-2009-omega3-fatty-acids-asd-systematic-review.md` | `10.1007/s10803-009-0724-5` | Stephen Bent, Kiah Bertoglio, Robert L. Hendren | Bent Stephen, Bertoglio Kiah, Hendren Robert L. |
| `berger-2016-cognition-ckd-systematic-review-meta-analysis.md` | `10.1186/s12916-016-0745-9` | Israel Berger, Sunny Wu, Philip Masson | Berger Israel, Wu Sunny, Masson Philip |
| `bernard-raichon2022-dysbiosis-translocation-bacteremia-covid.md` | `10.1038/s41467-022-33395-6` | Lucie Bernard-Raichon, Mericien Venzon, Jon Klein | Bernard-Raichon Lucie, Venzon Mericien, Klein Jon |
| `berrington-2003-obesity-pancreatic-cancer-meta-analysis.md` | `10.1038/sj.bjc.6601140` | A. Berrington de Gonzalez, S. Sweetland, E. Spencer | de Gonzalez A Berrington, Sweetland S, Spencer E |
| `beulens-2022-environmental-risk-factors-t2d-exposome.md` | `10.1007/s00125-021-05618-w` | Joline W. J. Beulens, Maria G. M. Pinho, Taymara C. Abreu | Beulens Joline W. J., Pinho Maria G. M., Abreu Taymara C. |
| `bezawada-2020-asd-gut-microbiota-children-systematic-review.md` | `10.1159/000505363` | Navya Bezawada, Tze Hui Phang, Georgina L. Hold | Bezawada Navya, Phang Tze Hui, Hold Georgina L. |
| `bhargava-2020-bile-acid-metabolism-ms-neuroinflammation.md` | `10.1172/JCI129401` | Pavan Bhargava, Matthew D. Smith, Leah Mische | Bhargava Pavan, Smith Matthew D., Mische Leah |
| `bi-2017-omega3-pufa-ameliorate-t1d-autoimmunity.md` | `10.1172/JCI87388` | Xinyun Bi, Fanghong Li, Shanshan Liu | Bi Xinyun, Li Fanghong, Liu Shanshan |
| `bianchimano-2022-vancomycin-gut-commensals-neuroinflammation-eae.md` | `10.1186/s40168-022-01364-2` | Paola Bianchimano, Graham J. Britton, David S. Wallach | Bianchimano Paola, Britton Graham J., Wallach David S. |
| `bibbo-2025-fmt-capsules-ms-case-report.md` | `10.3389/fimmu.2025.1678759` | Stefano Bibbò, Flavio De Maio, Fioravante Capone | Bibbò Stefano, De Maio Flavio, Capone Fioravante |
| `blakeley-ruiz-2019-metaproteomics-crohns-functional-stability.md` | `10.1186/s40168-019-0631-8` | J. Alfredo Blakeley-Ruiz, Alison R. Erickson, Brandi L. Cantarel | Blakeley-Ruiz J. Alfredo, Erickson Alison R., Cantarel Brandi L. |
| `boeschoten-2017-depression-anxiety-ms-meta-analysis.md` | `10.1016/j.jns.2016.11.067` | Rosa E. Boeschoten, Annemarie M.J. Braamse, Aartjan T.F. Beekman | Boeschoten Rosa E., Braamse Annemarie M.J., Beekman Aartjan T.F. |
| `bolte-2019-environmental-exposure-etiology-asd.md` | `10.1007/s00018-018-2988-4` | Sven Bolte, Sonya Girdler, Peter B. Marschik | Bölte Sven, Girdler Sonya, Marschik Peter B. |
| `borges-2016-uremic-toxins-inflammatory-markers-ckd.md` | `10.1053/j.jrn.2016.07.005` | Natalia A. Borges, Amanda F. Barros, Lia S. Nakao | Borges Natália A., Barros Amanda F., Nakao Lia S. |
| `borghini-2020-low-nickel-diet-celiac-ibs-symptoms.md` | `10.3390/nu12082277` | Raffaele Borghini, Natascia De Amicis, Antonino Bella | Borghini Raffaele, De Amicis Natascia, Bella Antonino |
| `boussamet-2024-oral-microbiota-metabolite-signature-ms.md` | `10.1038/s41598-024-57949-4` | Léo Boussamet, Emmanuel Montassier, Camille Mathé | Boussamet Léo, Montassier Emmanuel, Mathé Camille |
| `bradfield-2011-genome-wide-meta-analysis-t1d-loci.md` | `10.1371/journal.pgen.1002293` | Jonathan P. Bradfield, Hui-Qi Qu, Kai Wang | Bradfield Jonathan P., Qu Hui-Qi, Wang Kai |
| `brann-2021-metabolic-profiling-ppd-diversity.md` | `10.3389/fpsyt.2021.685656` | Emma Brann, Christina Malavaki, Emma Fransson | Bränn Emma, Malavaki Christina, Fransson Emma |
| `briffa-2020-heavy-metal-pollution-environment-toxicology.md` | `10.1016/j.heliyon.2020.e04691` | Jessica Briffa, Emmanuel Sinagra, Renald Blundell | Briffa Jessica, Sinagra Emmanuel, Blundell Renald |
| `brigo-2025-uremic-bacterial-metabolites-post-covid.md` | `10.3389/fcimb.2025.1582972` | Natascha Brigo, Wolfram Mayr, Maja Taenzer | Brigo Natascha, Mayr Wolfram, Taenzer Maja |
| `bronzini-2023-feeding-gut-microbiome-ms.md` | `10.3389/fimmu.2023.1176016` | Matteo Bronzini, Alessandro Maglione, Rachele Rosso | Bronzini Matteo, Maglione Alessandro, Rosso Rachele |
| `brown-2011-gut-metagenomics-functional-model-autoimmunity-t1d.md` | `10.1371/journal.pone.0025792` | Christopher T. Brown, Austin G. Davis-Richardson, Adriana Giongo | Brown Christopher T., Davis-Richardson Austin G., Giongo Adriana |
| `brown-2024-lithium-ion-battery-mining-metals.md` | `10.1186/s12995-024-00433-6` | Connor W. Brown, Charlotte E. Goldfine, Lao-Tzu Allan-Blitz | Brown Connor W., Goldfine Charlotte E., Allan-Blitz Lao-Tzu |
| `brownlee-2017-ms-diagnosis-differential-review.md` | `10.1016/S0140-6736(16)30959-X` | Wallace J. Brownlee, Todd A. Hardy, Franz Fazekas | Brownlee Wallace J, Hardy Todd A, Fazekas Franz |
| `brugnara-2012-metabolomics-exercise-t1d.md` | `10.1371/journal.pone.0040600` | Laura Brugnara, Maria Vinaixa, Serafin Murillo | Brugnara Laura, Vinaixa Maria, Murillo Serafín |
| `brunkwall-2017-gut-microbiome-hyperglycaemia-t2d-prevention.md` | `10.1007/s00125-017-4278-3` | Louise Brunkwall, Marju Orho-Melander | Brunkwall Louise, Orho-Melander Marju |
| `brusaferro-2018-gut-dysbiosis-paediatric-crohns.md` | `10.1016/j.jinf.2018.10.005` | Andrea Brusaferro, Elena Cavalli, Edoardo Farinelli | Brusaferro Andrea, Cavalli Elena, Farinelli Edoardo |
| `bryrup-2019-metformin-gut-microbiota-healthy-young-men.md` | `10.1007/s00125-019-4848-7` | Thomas Bryrup, Cecilie W. Thomsen, Timo Kern | Bryrup Thomas, Thomsen Cæcilie W., Kern Timo |
| `cacciatore-2015-carvacrol-codrugs-antimicrobial-antibiofilm.md` | `10.1371/journal.pone.0120937` | Ivana Cacciatore, Mara Di Giulio, Erika Fornasari | Cacciatore Ivana, Di Giulio Mara, Fornasari Erika |
| `cai-2024-diabetic-foot-gut-mycobiome-dysbiosis-t2d.md` | `10.1038/s41387-024-00328-9` | Yue Cai, Yiping Li, Yuxin Xiong | Cai Yue, Li Yiping, Xiong Yuxin |
| `calabrese-2021-mediterranean-diet-t1d-microbiome.md` | `10.3389/fnut.2020.612773` | Claudio M. Calabrese, Alice Valentini, Giorgio Calabrese | Calabrese Cinzia Myriam, Valentini Alessia, Calabrese Giorgio |
| `callejon-leblic-2023-metallomic-signatures-lung-cancer-copd.md` | `10.3390/ijms241814250` | Belen Callejon-Leblic, Saida Sanchez Espirilla, Carolina Gotera-Rivera | Callejón-Leblic Belén, Sánchez Espirilla Saida, Gotera-Rivera Carolina |
| `campanale-2025-endocannabinoidome-gut-microbiome-brain-asd.md` | `10.1186/s12929-025-01145-7` | Antonella Campanale, Dario Siniscalco, Vincenzo Di Marzo | Campanale Antonella, Siniscalco Dario, Di Marzo Vincenzo |
| `candon-2015-antibiotics-early-life-gut-microbiome-autoimmune-diabetes-nod.md` | `10.1371/journal.pone.0125448` | Sophie Candon, Alicia Perez-Arroyo, Cindy Marquet | Candon Sophie, Perez-Arroyo Alicia, Marquet Cindy |
| `cao-2021-dysbiotic-gut-microbiota-cytokine-profile-asd.md` | `10.3389/fnins.2021.635925` | Xia Cao, Kevin Liu, Jun Liu | Cao Xia, Liu Kevin, Liu Jun |
| `carrero-2020-plant-based-diets-ckd.md` | `10.1038/s41581-020-0297-2` | Juan J. Carrero, Ailema Gonzalez-Ortiz, Carla M. Avesani | Carrero Juan J., González-Ortiz Ailema, Avesani Carla M. |
| `carretta-2021-scfas-receptors-gut-inflammation-colon-cancer.md` | `10.3389/fphys.2021.662739` | Maria Daniella Carretta, John Quiroga, Rodrigo Lopez | Carretta María Daniella, Quiroga John, López Rodrigo |
| `carrillo-salinas-2017-tmev-gut-dysbiosis-neuroimmune.md` | `10.1038/srep44377` | F. J. Carrillo-Salinas, L. Mestre, M. Mecha | Carrillo-Salinas F. J., Mestre L., Mecha M. |
| `casanova-2020-comorbidity-autism-editorial.md` | `10.3389/fpsyt.2020.617395` | Manuel F. Casanova, Richard E. Frye, Christopher Gillberg | Casanova Manuel F., Frye Richard E., Gillberg Christopher |
| `cassat-2012-metal-acquisition-staphylococcus-aureus.md` | `10.1007/s00281-011-0294-4` | James E. Cassat, Eric P. Skaar | Cassat James E., Skaar Eric P. |
| `chambers-2018-scfa-metabolic-cardiovascular-health.md` | `10.1007/s13668-018-0248-8` | Edward S. Chambers, Tom Preston, Gary Frost | Chambers Edward S., Preston Tom, Frost Gary |
| `chang-2024-gut-microbiome-metabolome-asd.md` | `10.1038/s41598-024-54717-2` | Xuening Chang, Yuchen Zhang, Xue Chen | Chang Xuening, Zhang Yuchen, Chen Xue |
| `chang-2024-metabolome-amino-acids-asd.md` | `10.1038/s41598-024-54717-2` | Xuening Chang, Yuchen Zhang, Xue Chen | Chang Xuening, Zhang Yuchen, Chen Xue |
| `chen-2019-microbiome-metabolome-gut-kidney-axis.md` | `10.1186/s12967-018-1756-4` | Yuan-Yuan Chen, Dan-Qian Chen, Lin Chen | Chen Yuan-Yuan, Chen Dan-Qian, Chen Lin |
| `chen-2021-imbalanced-zinc-gut-microbiota-markers.md` | `10.1128/Spectrum.00483-21` | Lingjun Chen, Zhonghang Wang, Peng Wang | Chen Lingjun, Wang Zhonghang, Wang Peng |
| `chen-2025-inflammation-asd-bibliometric-analysis.md` | `10.3389/fimmu.2025.1534660` | Yajing Chen, Xiaohuan Du, Xianming Zhang | Chen Yajing, Du Xiaohuan, Zhang Xianming |
| `chen-2025-inflammation-microbiota-pancreatic-cancer.md` | `10.1186/s12935-025-03673-6` | XiaoLiang Chen, Feixia Sun, Xuqin Wang | Chen XiaoLiang, Sun Feixia, Wang Xuqin |
| `chen-2025-mendelian-randomization-gut-microbiome-pnets.md` | `10.1007/s12672-025-02761-3` | Fangsheng Chen, Yuan Zhou, Xinwen Mao | Chen Fangsheng, Zhou Yuan, Mao Xinwen |
| `cheroni-2020-asd-crossroad-genes-environment.md` | `10.1186/s13229-020-00370-1` | Cristina Cheroni, Nicolo Caporale, Giuseppe Testa | Cheroni Cristina, Caporale Nicolò, Testa Giuseppe |
| `chomiak-2013-vpa-asd-lessons-learned.md` | `10.1155/2013/712758` | Taylor Chomiak, Nathanael Turner, Bin Hu | Chomiak Taylor, Turner Nathanael, Hu Bin |
| `chouari-2024-heavy-metal-metabolic-nutritional-asd-morocco.md` | `10.12912/27197050/188057` | Rihab Chouari, Loubna Leftat, Fatine El Arabi | Chouari Rihab, Loubna Leftat, Elarabi Fatine |
| `christensen-2013-prenatal-valproate-asd-childhood-autism.md` | `10.1001/jama.2013.2270` | Jakob Christensen, Therese Koops Gronborg, Merete Juul Sorensen | Christensen Jakob, Grønborg Therese Koops, Sørensen Merete Juul |
| `chuan-2026-inflammatory-cytokines-gut-microbiota-ovarian-cancer-mr.md` | `10.1186/s13048-026-01963-9` | Li Chuan, Bingke Yao, Hui Zhang | Chuan Lili, Yao Bo, Zhang Haiming |
| `chui-2024-microbiome-interventions-neurodegenerative-diseases-systematic-review.md` | `10.1038/s41598-024-59250-w` | Zara Siu Wa Chui, Lily Man Lee Chan, Esther Wan Hei Zhang | Chui Zara Siu Wa, Chan Lily Man Lee, Zhang Esther Wan Hei |
| `cohen-2014-sleep-behavior-asd-review.md` | `10.1186/1866-1955-6-44` | Simonne Cohen, Russell Conduit, Steven W Lockley | Cohen Simonne, Conduit Russell, Lockley Steven W |
| `collaborative-2012-ovarian-cancer-body-size-meta-analysis.md` | `10.1371/journal.pmed.1001200` | Collaborative Group on Epidemiological Studies of Ovarian Cancer |  |
| `contreras-2016-host-microbiome-cancer-precision-medicine.md` | `10.3389/fphys.2016.00606` | Alejandra V Contreras, Benjamin Cocom-Chan, Georgina Hernandez-Montes | Contreras Alejandra V., Cocom-Chan Benjamin, Hernandez-Montes Georgina |
| `cook-2021-camouflaging-autism-systematic-review.md` | `10.1016/j.cpr.2021.102080` | Julia Cook, Laura Hull, Laura Crane | Cook Julia, Hull Laura, Crane Laura |
| `coretti-2018-gut-microbiota-young-asd-children.md` | `10.3389/fmicb.2018.03146` | Lorena Coretti, Lorella Paparo, Maria Pia Riccio | Coretti Lorena, Paparo Lorella, Riccio Maria Pia |
| `cortini-2019-non-myelin-biomarkers-ms-phage-display.md` | `10.1371/journal.pone.0226162` | Andrea Cortini, Sara Bembich, Lorena Marson | Cortini Andrea, Bembich Sara, Marson Lorena |
| `costafrolaz-2026-yjbi-envelope-zinc-stress-antibiotic-caulobacter.md` | `10.1038/s44318-025-00668-x` | Jordan Costafrolaz, Laurence Degeorges, Gael Panis | Costafrolaz Jordan, Degeorges Laurence, Panis Gaël |
| `crick-2017-oxysterols-bile-acid-precursors-ms.md` | `10.1007/s12035-016-0281-9` | Peter J. Crick, William J. Griffiths, Juan Zhang | Crick Peter J., Griffiths William J., Zhang Juan |
| `cui-2024-gut-microbiota-blood-metabolites-ppd-mr.md` | `10.3389/fcimb.2024.1416298` | Ji Cui, Qilong Zhai, Zhu Yang | Cui Ji, Zhai Qilong, Yang Zhu |
| `czerepak-2025-gut-microbiota-ppd-pathogenesis-treatment-review.md` | `10.12775/JEHS.2025.82.60357` | Irmina Czerepak, Marcin Kapij, Hubert Bochenek | Czerepak Irmina, Kapij Marcin, Bochenek Hubert |
| `dafini-2025-shatavari-neuro-gut-axis-ppd.md` | `10.3389/fnut.2025.1677952` | Dafini D., Hemavathi Shivapura Krishnarajabhatt, Parvathy Unnikrishnan | D Dafini, Krishnarajabhatt Hemavathi Shivapura, Unnikrishnan Parvathy |
| `dahabiyeh-2023-metabolomics-profiling-esrd-ckd.md` | `10.1038/s41598-023-33377-8` | Lina A. Dahabiyeh, Refat M. Nimer, Khalid M. Sumaily | Dahabiyeh Lina A., Nimer Refat M., Sumaily Khalid M. |
| `dai-2024-bidirectional-mr-gut-microbiota-cvd.md` | `10.1186/s13040-024-00356-2` | Xiao-Ce Dai, Yi Yu, Si-Yu Zhou | Dai Xiao-Ce, Yu Yi, Zhou Si-Yu |
| `dai-2024-gut-microbiota-cvd-bidirectional-mr.md` | `10.1186/s13040-024-00356-2` | Xiao-Ce Dai, Yi Yu, Si-Yu Zhou | Dai Xiao-Ce, Yu Yi, Zhou Si-Yu |
| `daniel-2024-mendelian-randomization-gut-bacteria-metabolites-pdac.md` | `10.1038/s41598-024-77431-5` | Neil Daniel, Riccardo Farinella, Anastasia Chrysovalantou Chatziioannou | Daniel Neil, Farinella Riccardo, Chatziioannou Anastasia Chrysovalantou |
| `danziger-2022-susceptibility-heavy-metal-toxicity-ckd.md` | `10.1097/MNH.0000000000000991` | Danziger J, Dodge LE, Hu H | Danziger John |
| `dash-2021-metagenomic-gut-microbiome-vitamin-k2-t2d.md` | `10.4093/dmj.2019.0202` | Nihar Ranjan Dash, Mohammad Tahseen Al Bataineh | Dash Nihar Ranjan, Al Bataineh Mohammad Tahseen |
| `dash-2023-functional-alterations-predictive-capacity-gut-microbiome-t2d.md` | `10.1038/s41598-023-49679-w` | Nihar Ranjan Dash, Mohammad T. Al Bataineh, Rohia Alili | Dash Nihar Ranjan, Al Bataineh Mohammad T., Alili Rohia |
| `davis-richardson-2015-gut-bacteria-autoimmunity-t1d-model.md` | `10.1007/s00125-015-3614-8` | Austin G. Davis-Richardson, Eric W. Triplett | Davis-Richardson Austin G., Triplett Eric W. |
| `de-almeida-2022-toxic-metals-infant-formula-brazil.md` | `10.3390/ijerph191811178` | Cristine Couto de Almeida, Diego dos Santos Baiao, Paloma de Almeida Rodrigues | de Almeida Cristine Couto, Baião Diego dos Santos, Rodrigues Paloma de Almeida |
| `de-goffau-2014-aberrant-gut-microbiota-onset-t1d-children.md` | `10.1007/s00125-014-3274-0` | Marcus C. de Goffau, Susana Fuentes, Bartholomeus van den Bogert | de Goffau Marcus C., Fuentes Susana, van den Bogert Bartholomeus |
| `de-groot-2017-distinct-fecal-oral-microbiota-t1d-observational.md` | `10.1371/journal.pone.0188475` | Pieter F. de Groot, Clara Belzer, Omrum Aydin | de Groot Pieter F., Belzer Clara, Aydin Ömrüm |
| `de-jonge-2022-gut-virome-bacteriophage-metabolic-syndrome.md` | `10.1038/s41467-022-31390-5` | Patrick A. de Jonge, Koen Wortelboer, Torsten P. M. Scheithauer | de Jonge Patrick A., Wortelboer Koen, Scheithauer Torsten P. M. |
| `declercq-2021-common-medications-oral-microbiome.md` | `10.1371/journal.pone.0261032` | Vanessa DeClercq, Jacob T. Nearing, Morgan G.I. Langille | DeClercq Vanessa, Nearing Jacob T., Langille Morgan G. I. |
| `dedrick-2020-gut-microbiota-environmental-factors-t1d-pathogenesis.md` | `10.3389/fendo.2020.00078` | Sandra Dedrick, Bharathi Sundaresh, Qian Huang | Dedrick Sandra, Sundaresh Bharathi, Huang Qian |
| `dejonge-2022-gut-virome-bacteriophage-metabolic-syndrome.md` | `10.1038/s41467-022-31390-5` | Patrick A. de Jonge, Koen Wortelboer, Torsten P. M. Scheithauer | de Jonge Patrick A., Wortelboer Koen, Scheithauer Torsten P. M. |
| `demetriou-2018-asd-executive-function-meta-analysis.md` | `10.1038/mp.2017.75` | EA Demetriou, A Lampit, DS Quintana | Demetriou E A, Lampit A, Quintana D S |
| `deng-2022-gi-symptoms-minor-impact-asd-microbiota-scfa.md` | `10.3389/fmicb.2022.1000419` | Wenlin Deng, Siqi Wang, Fang Li | Deng Wenlin, Wang Siqi, Li Fang |
| `deng-2022-gut-microbiota-metabolites-aggression-schizophrenia.md` | `10.1186/s12888-022-04255-w` | Hongxin Deng, Lei He, Chong Wang | Deng Hongxin, He Lei, Wang Chong |
| `deng-2025-microbiota-derived-metabolites-ascites-ovarian-gi-cancer.md` | `10.1186/s40170-025-00391-5` | Shutian Deng, Woojin Kim, Kai Cheng | Deng Sisi, Kim Wooyong, Cheng Kefan |
| `devarajalu-2025-nec-gut-microbiota-indian-preterm-shotgun.md` | `10.3389/fcimb.2025.1649384` | Prabavathi Devarajalu, Savita Verma Attri, Jogender Kumar | Devarajalu Prabavathi, Attri Savita Verma, Kumar Jogender |
| `didenko-2025-intestinal-microbiota-scfa-post-covid-immune-response.md` | `10.22141/2308-2097.59.4.2025.702` | V.I. Didenko, I.A. Klenina, O.M. Tatarchuk | Didenko V.I., Klenina I.A., Tatarchuk O.M. |
| `dieme-2015-metabolomics-urine-asd-multiplatform.md` | `10.1021/acs.jproteome.5b00699` | Binta Dieme, Sylvie Mavel, Helene Blasco | Diémé Binta, Mavel Sylvie, Blasco Hélène |
| `dilmore-2025-medication-microbial-features-anxiety-depression.md` | `10.1038/s41380-024-02857-2` | Amanda Hazel Dilmore, Rayus Kuplicki, Daniel McDonald | Dilmore Amanda Hazel, Kuplicki Rayus, McDonald Daniel |
| `dinakaran-2014-circdna-circulating-microbiome-cvd.md` | `10.1371/journal.pone.0105221` | Vasudevan Dinakaran, Andiappan Rathinavel, Muthuirulan Pushpanathan | Dinakaran Vasudevan, Rathinavel Andiappan, Pushpanathan Muthuirulan |
| `dinakaran-2014-circulating-microbiome-cvd.md` | `10.1371/journal.pone.0105221` | Vasudevan Dinakaran, Andiappan Rathinavel, Muthuirulan Pushpanathan | Dinakaran Vasudevan, Rathinavel Andiappan, Pushpanathan Muthuirulan |
| `ding-2021-nickel-pregnancy-complications.md` | `10.12998/wjcc.v9.i28.8340` | Ding R, Ruan Y, He X | Ding Ai-Ling, Hu Hong, Xu Fan-Ping |
| `ding-2025-mycobiome-human-cancer-mechanisms-therapeutics.md` | `10.1186/s12943-025-02227-8` | Ting Ding, Chang Liu, Zhengyu Li | Ding Ting, Liu Chang, Li Zhengyu |
| `dixon-2020-probiotics-cvd-risk-meta-analysis.md` | `10.1007/s11906-020-01080-y` | Asher Dixon, Kai Robertson, Amanda Yung | Dixon Asher, Robertson Kai, Yung Amanda |
| `dixon-2020-probiotics-cvd-risk-systematic-review-meta-analysis.md` | `10.1007/s11906-020-01080-y` | Asher Dixon, Kai Robertson, Amanda Yung | Dixon Asher, Robertson Kai, Yung Amanda |
| `dixon-2023-prebiotics-metformin-gi-side-effects-youth-t2dm.md` | `10.3389/fendo.2023.1125187` | Sydney A. Dixon, Sidharth Mishra, Katrina B. Dietsche | Dixon Sydney A., Mishra Sidharth, Dietsche Katrina B. |
| `do-carmo-2023-metal-nanoparticles-candida-review.md` | `10.3390/microorganisms11010138` | Paulo Henrique Fonseca do Carmo, Maira Terra Garcia, Livia Mara Alves Figueiredo-Godoi | Carmo Paulo Henrique Fonseca do, Garcia Maíra Terra, Figueiredo-Godoi Lívia Mara Alves |
| `doenyas-2018-gut-microbiota-inflammation-probiotics-asd.md` | `10.1016/j.neuroscience.2018.01.060` | Ceymi Doenyas | Doenyas Ceymi |
| `doenyas-2019-personalized-dietary-treatment-gut-immune-endocrine-brain.md` | `10.3389/fendo.2019.00508` | Ceymi Doenyas | Doenyas Ceymi |
| `donovan-2017-mediterranean-diet-crc-prevention.md` | `10.3389/fnut.2017.00059` | Micah G. Donovan, Ornella I. Selmin, Tom C. Doetschman | Donovan Micah G., Selmin Ornella I., Doetschman Tom C. |
| `dopkins-2021-tryptamine-eae-aryl-hydrocarbon-receptor.md` | `10.3389/fphar.2020.619265` | Nicholas Dopkins, William Becker, Kathryn Miranda | Dopkins Nicholas, Becker William, Miranda Kathryn |
| `dou-2024-heavy-metals-utero-asd-age3-meta-analysis.md` | `10.1186/s12940-024-01101-2` | John F. Dou, Rebecca J. Schmidt, Heather E. Volk | Dou John F., Schmidt Rebecca J., Volk Heather E. |
| `duan-2020-gut-microbiota-heavy-metal-probiotic-strategy.md` | `10.1016/j.scitotenv.2020.140429` | Hui Duan, Leilei Yu, Fengwei Tian | Duan Hui, Yu Leilei, Tian Fengwei |
| `duarte-silva-2022-microbial-metabolites-ms.md` | `10.3389/fnins.2022.885031` | Eduardo Duarte-Silva, Sven G. Meuth, Christina Alves Peixoto | Duarte-Silva Eduardo, Meuth Sven G., Peixoto Christina Alves |
| `dupont-2023-fmt-parkinsons-randomized-pilot.md` | `10.3389/fneur.2023.1104759` | Herbert L. DuPont, Jessika Suescun, Zhi-Dong Jiang | DuPont Herbert L., Suescun Jessika, Jiang Zhi-Dong |
| `duran-gonzalez-2025-fibromyalgia-multi-omics-diagnosis.md` | `10.3389/fmicb.2025.1641185` | Duran-Gonzalez et al. | Durán-González Elena, Ramírez-Tejero Jorge Antolín, Pérez-Sánchez Marta |
| `duve-2024-covid-encephalopathy-gut-brain-axis.md` | `10.3389/fmicb.2024.1406874` | Khrystyna Duve, Pavlo Petakh, Oleksandr Kamyshnyi | Duve Khrystyna, Petakh Pavlo, Kamyshnyi Oleksandr |
| `dye-2022-immune-alterations.md` | `10.3389/fgwh.2021.758748` | Courtney Dye, Kathryn M. Lenz, Benedetta Leuner | Dye Courtney, Lenz Kathryn M., Leuner Benedetta |
| `dye-2022-immune-system-postpartum-mental-illness.md` | `10.3389/fgwh.2021.758748` | Courtney Dye, Kathryn M. Lenz, Benedetta Leuner | Dye Courtney, Lenz Kathryn M., Leuner Benedetta |
| `eggers-2023-prenatal-lead-childhood-gut-microbiome-progress.md` | `10.3389/fmicb.2023.1193919` | Shoshannah Eggers, Vishal Midya, Moira Bixby | Eggers Shoshannah, Midya Vishal, Bixby Moira |
| `eggers-2023-prenatal-lead.md` | `10.3389/fmicb.2023.1193919` | Shoshannah Eggers, Vishal Midya, Moira Bixby | Eggers Shoshannah, Midya Vishal, Bixby Moira |
| `eijkelkamp-2014-zinc-inhibits-manganese-pneumococcus.md` | `10.1371/journal.pone.0089427` | Bart A. Eijkelkamp, Jacqueline R. Morey, Stephanie L. Neville | Eijkelkamp Bart A., Morey Jacqueline R., Ween Miranda P. |
| `elbere-2018-metformin-gut-microbiome-dysbiosis-healthy.md` | `10.1371/journal.pone.0204317` | Ilze Elbere, Ineta Kalnina, Ivars Silamikelis | Elbere Ilze, Kalnina Ineta, Silamikelis Ivars |
| `elbere-2018-metformin-gut-microbiome-dysbiosis.md` | `10.1371/journal.pone.0204317` | Ilze Elbere, Ineta Kalnina, Ivars Silamikelis | Elbere Ilze, Kalnina Ineta, Silamikelis Ivars |
| `elbere-2020-baseline-gut-microbiome-metformin-efficacy-t2d.md` | `10.1371/journal.pone.0241338` | Ilze Elbere, Ivars Silamikelis, Ilze Izabella Dindune | Elbere Ilze, Silamikelis Ivars, Dindune Ilze Izabella |
| `ellsworth-bowers-2012-nutrition-psychoneuroimmunology-ppd.md` | `10.1017/S0954422412000091` | E. R. Ellsworth-Bowers, E. J. Corwin | Ellsworth-Bowers E. R., Corwin E. J. |
| `emgren-2025-bile-acid-metabolism-ms-disability-worsening.md` | `10.1186/s12916-025-04041-x` | Ida Emgren, Aina Vaivade, Henrik Carlsson | Erngren Ida, Vaivade Aina, Carlsson Henrik |
| `ergen-2019-drug-residuals-human-milk-ppd.md` | `10.1186/s12884-019-2506-1` | Ayse Meltem Ergen, Siddika Songul Yalcin | Ergen Ayşe Meltem, Yalçın Sıddıka Songül |
| `etgen-2012-ckd-cognitive-impairment-systematic-review.md` | `10.1159/000338135` | Thorleif Etgen, Michel Chonchol, Hans Forstl | Etgen Thorleif, Chonchol Michel, Förstl Hans |
| `fan-2025-fmt-hypertension-rct.md` | `10.1186/s40168-025-02118-6` | Luyun Fan, Junru Chen, Qi Zhang | Fan Luyun, Chen Junru, Zhang Qi |
| `fang-2024-immune-cells-asd-mr.md` | `10.1186/s12888-024-05927-5` | Congcong Fang, Yonghao Sun, Cuifang Fan | Fang Congcong, Sun Yonghao, Fan Cuifang |
| `farhana-2016-bile-acid-colon-cancer-stem-cells.md` | `10.1186/s13287-016-0439-4` | Lulu Farhana, Pratima Nangia-Makker, Evan Arbit | Farhana Lulu, Nangia-Makker Pratima, Arbit Evan |
| `fattorusso-2016-asd-gut-microbiota.md` | `10.3390/nu11030521` | Antonella Fattorusso, Lorenza Di Genova, Giovanni Battista Dell'Isola | Fattorusso Antonella, Di Genova Lorenza, Dell’Isola Giovanni |
| `feitelson-2023-scfas-cancer-pathogenesis.md` | `10.1007/s10555-023-10117-y` | Mark A. Feitelson, Alla Arzumanyan, Arvin Medhat | Feitelson Mark A., Arzumanyan Alla, Medhat Arvin |
| `feng-2022-pediococcus-probiotic-heavy-metals-gut-microbiome.md` | `10.1038/s41522-022-00326-8` | Pengya Feng, Jinfeng Yang, Shuai Zhao | Feng Pengya, Yang Jinfeng, Zhao Shuai |
| `feng-2023-listeria-folic-acid-n-formylmethionine.md` | `10.1128/mbio.01074-23` | Ying Feng, Shannon K. Chang, Daniel A. Portnoy | Feng Ying, Chang Shannon K., Portnoy Daniel A. |
| `feng-2023-probiotics-asd-gut-brain-axis-review.md` | `10.3389/fmicb.2023.1123462` | Pengya Feng, Shuai Zhao, Yangyang Zhang | Feng Pengya, Zhao Shuai, Zhang Yangyang |
| `feng-2024-gut-microbiota-kidney-diseases-mr.md` | `10.3389/fimmu.2023.1277554` | Zhoushan Feng, Yuliang Zhang, Yiyu Lai | Feng Zhoushan, Zhang Yuliang, Lai Yiyu |
| `fernandez-2018-physical-activity-immune-microbiome-cvd.md` | `10.3389/fphys.2018.00763` | Dawn M. Fernandez, Jose C. Clemente, Chiara Giannarelli | Fernandez Dawn M., Clemente Jose C., Giannarelli Chiara |
| `fernandez-2019-tobacco-pms-case-control.md` | `10.1371/journal.pone.0218794` | Fernandez MdM, Montes-Martinez A, Pineiro-Lamas M | Fernández María del Mar, Montes-Martínez Agustín, Piñeiro-Lamas María |
| `fernandez-2021-medimacs-mediterranean-diet-acs-microbiome-trial.md` | `10.1186/s13063-021-05746-z` | Ana I. Fernandez, Javier Bermejo, Raquel Yotti | Fernández Ana I., Bermejo Javier, Yotti Raquel |
| `ferreira-2019-phage-display-crc-targeting-peptide-mct1.md` | `10.1038/s41598-019-40562-1` | Debora Ferreira, Ana P Silva, Franklin L Nobrega | Ferreira Débora, Silva Ana P., Nobrega Franklin L. |
| `fiedorova-2019-dna-extraction-bacterial-fungal-microbiota.md` | `10.3389/fmicb.2019.00821` | Kristyna Fiedorova, Matej Radvansky, Eva Nemcova | Fiedorová Kristýna, Radvanský Matěj, Němcová Eva |
| `fish-williamson-2023-nutritional-factors-ppd-prevalence-meta-regression.md` | `10.3389/fpsyt.2023.1193490` | Adi Fish-Williamson, Jennifer Hahn-Holbrook | Fish-Williamson Adi, Hahn-Holbrook Jennifer |
| `fitzjerrells-2025-oral-dysbiosis-hypotaurine-ms.md` | `10.1038/s41522-025-00787-7` | Rachel L. Fitzjerrells, Leeann Aguilar Meza, Meeta Yadav | Fitzjerrells Rachel L., Meza Leeann Aguilar, Yadav Meeta |
| `forbes-2019-fungal-mycobiome-neurological-disease.md` | `10.3389/fmicb.2018.03249` | Jessica D. Forbes, Charles N. Bernstein, Helen Tremlett | Forbes Jessica D., Bernstein Charles N., Tremlett Helen |
| `foroughi-2026-periodontal-biomarkers-cvd.md` | `10.1007/s15010-026-02778-y` | Max Foroughi, Keykavous Parang | Foroughi Max, Parang Keykavous |
| `fournier-2010-motor-coordination-asd-meta-analysis.md` | `10.1007/s10803-010-0981-3` | Kimberly A. Fournier, Chris J. Hass, Sagar K. Naik | Fournier Kimberly A., Hass Chris J., Naik Sagar K. |
| `fretheim-2020-fmt-systemic-sclerosis-rct-pilot.md` | `10.1371/journal.pone.0232739` | Havard Fretheim, Brian K. Chung, Henriette Didriksen | Fretheim Håvard, Chung Brian K., Didriksen Henriette |
| `fromentin-2022-microbiome-metabolome-cardiometabolic-spectrum.md` | `10.1038/s41591-022-01688-4` | Sebastien Fromentin, Sofia K. Forslund, Kanta Chechi | Fromentin Sebastien, Forslund Sofia K., Chechi Kanta |
| `fujimoto-2022-gut-virome-metabolic-autoimmune.md` | `10.1186/s41232-022-00218-6` | Kosuke Fujimoto, Daichi Miyaoka, Satoshi Uematsu | Fujimoto Kosuke, Miyaoka Daichi, Uematsu Satoshi |
| `fujimoto-2022-human-gut-virome-metabolic-autoimmune.md` | `10.1186/s41232-022-00218-6` | Kosuke Fujimoto, Daichi Miyaoka, Satoshi Uematsu | Fujimoto Kosuke, Miyaoka Daichi, Uematsu Satoshi |
| `fukutake-2015-amino-acid-profile-pancreatic-cancer-detection.md` | `10.1371/journal.pone.0132223` | Nobuyasu Fukutake, Makoto Ueno, Nobuyoshi Hiraoka | Fukutake Nobuyasu, Ueno Makoto, Hiraoka Nobuyoshi |
| `gaetani-2020-tryptophan-metabolic-profiling-ms.md` | `10.3389/fimmu.2020.00157` | Lorenzo Gaetani, Francesca Boscaro, Giuseppe Pieraccini | Gaetani Lorenzo, Boscaro Francesca, Pieraccini Giuseppe |
| `gao-2015-microbiota-disbiosis-colorectal-cancer.md` | `10.3389/fmicb.2015.00020` | Zhiguang Gao, Bomin Guo, Renyuan Gao | Gao Zhiguang, Guo Bomin, Gao Renyuan |
| `gao-2017-lead-exposure-multi-omics-gut-microbiome.md` | `10.1021/acs.chemrestox.6b00401` | Bei Gao, Liang Chi, Ridwan Mahbub | Gao Bei, Chi Liang, Mahbub Ridwan |
| `gao-2020-gut-microbial-biomarkers-acs-post-stemi.md` | `10.1038/s41598-020-59235-5` | Jing Gao, Kun-Tao Yan, Ji-Xiang Wang | Gao Jing, Yan Kun-Tao, Wang Ji-Xiang |
| `gao-2021-butyrate-producing-microbiota-reduced-ckd.md` | `10.1038/s41598-021-02865-0` | Bei Gao, Adarsh Jose, Norma Alonzo-Palma | Gao Bei, Jose Adarsh, Alonzo-Palma Norma |
| `gao-2024-gut-microbiota-blood-metabolites-ppd-mr.md` | `10.21203/rs.3.rs-4911853/v1` | Zhan Gao, Runze Zhou, ZhiQiang Chen | Gao Zhan, Zhou Runze, Chen ZhiQiang |
| `gao-2024-intestinal-flora-cognitive-function-hemodialysis.md` | `10.1007/s40520-023-02645-y` | Qiuyi Gao, Dianshi Li, Yue Wang | Gao Qiuyi, Li Dianshi, Wang Yue |
| `gao-2026-ketogenic-diet-fxr-nfkb-crc.md` | `10.26599/FSHW.2025.9250565` | Qinhan Gao, Yuwen Liu, Fayu Su | Gao Qinhan, Liu Yuwen, Su Fayu |
| `gargano-2022-mait-cells-gut-yeasts-ms-brain.md` | `10.3389/fimmu.2022.890298` | Francesca Gargano, Gisella Guerrera, Eleonora Piras | Gargano Francesca, Guerrera Gisella, Piras Eleonora |
| `gargiulo-isacco-2024-ssris-cervical-cancer-microbiome.md` | `10.1007/s42452-024-06030-w` | Ciro Gargiulo Isacco, Raffaele Del Prete, Pietro Distratis | Gargiulo Isacco Ciro, Del Prete Raffaele, Distratis Pietro |
| `genchi-2020-cadmium-toxicity.md` | `10.3390/ijerph17113782` | Giuseppe Genchi, Maria Stefania Sinicropi, Graziantonio Lauria | Genchi Giuseppe, Sinicropi Maria Stefania, Lauria Graziantonio |
| `geng-2024-circulating-bile-acids-ckd-type2-diabetes.md` | `10.1186/s12937-024-00928-2` | Tingting Geng, Qi Lu, Limiao Jiang | Geng Tingting, Lu Qi, Jiang Limiao |
| `geng-2026-probiotic-therapy-gut-microbiota-omega-oxidation-ovarian-cancer.md` | `10.1007/s00432-025-06398-1` | Chao Geng, Qi Cao, Zhiyu Chen | Geng Chen, Cao Qingling, Chen Zhuo |
| `genton-2021-fmt-pancreatic-cancer-germ-free-mice.md` | `10.3389/fcimb.2021.752889` | Laurence Genton, Vladimir Lazarevic, Ozren Stojanovic | Genton Laurence, Lazarevic Vladimir, Stojanovic Ozren |
| `gevi-2016-urinary-metabolomics-italian-autistic-tryptophan-purine.md` | `10.1186/s13229-016-0109-5` | Federica Gevi, Lello Zolla, Stefano Gabriele | Gevi Federica, Zolla Lello, Gabriele Stefano |
| `ghannoum-2021-microbiome-depression-covid-19.md` | `10.3389/fnut.2021.672390` | Mahmoud A. Ghannoum, Mary Kate Ford, Robert A. Bonomo | Ghannoum Mahmoud A., Ford MaryKate, Bonomo Robert A. |
| `ghorbani-2025-brain-virome-dysbiosis-parkinsons-msa.md` | `10.3389/fmicb.2025.1683277` | Mahin Ghorbani, Giorgio Gabarrini, Zamaneh Hajikhezri | Ghorbani Mahin, Gabarrini Giorgio, Hajikhezri Zamaneh |
| `glinton-2019-untargeted-metabolomics-asd-review.md` | `10.3389/fpsyt.2019.00647` | Kevin E. Glinton, Sarah H. Elsea | Glinton Kevin E., Elsea Sarah H. |
| `godoy-gallardo-2021-antibacterial-metal-ions-nanoparticles-tissue-engineering.md` | `10.1016/j.bioactmat.2021.04.033` | Maria Godoy-Gallardo, Ulrich Eckhard, Luis M Delgado | Godoy-Gallardo Maria, Eckhard Ulrich, Delgado Luis M. |
| `goh-2024-group-b-streptococcus-metal-stress-mismetallation-ros.md` | `10.1093/femsre/fuae009` | Kelvin G K Goh, Devika Desai, Ruby Thapa | Goh Kelvin G K, Desai Devika, Thapa Ruby |
| `gomes-2014-gut-microbiota-probiotics-diabetes-review.md` | `10.1186/1475-2891-13-60` | Aline Corado Gomes, Allain Amador Bueno, Ravila Graziany Machado de Souza | Gomes Aline Corado, Bueno Allain Amador, de Souza Rávila Graziany Machado |
| `gonzalez-sanchez-2021-microbiome-cancer-know-thy-neighbors.md` | `10.1002/path.5661` | Paloma Gonzalez-Sanchez, Gina M. DeNicola | González‐Sánchez Paloma, DeNicola Gina M |
| `good-2018-acetaminophen-amoxicillin-glyphosate-autism.md` | `10.1016/j.clnesp.2017.10.005` | Peter Good | Good Peter |
| `gosiewski-2014-candida-feces-t1d-t2d-pilot-study.md` | `10.1186/s13099-014-0043-z` | Tomasz Gosiewski, Dominika Salamon, Magdalena Szopa | Gosiewski Tomasz, Salamon Dominika, Szopa Magdalena |
| `grasset-2019-gut-microbiota-brain-axis-metabolic-control.md` | `10.1007/s11154-019-09511-1` | Estelle Grasset, Remy Burcelin | Grasset Estelle, Burcelin Remy |
| `grzadzinski-2013-dsm5-asd-subtypes.md` | `10.1186/2040-2392-4-12` | Rebecca Grzadzinski, Marisela Huerta, Catherine Lord | Grzadzinski Rebecca, Huerta Marisela, Lord Catherine |
| `guan-2025-research-progress-treatment-ppd.md` | `10.1007/s10571-025-01542-4` | Li-Na Guan, Li Li, Hui-Hua Li | Guan Li-Na, Li Li, Li Hui-Hua |
| `gudan-2022-ketogenic-diet-gut-microbiota-neurological-disorders.md` | `10.2478/ahem-2022-0019` | Anna Gudan, Ewa Stachowska | Gudan Anna, Stachowska Ewa |
| `guo-2019-fecal-bacterial-marker-panel-crohns-diagnosis.md` | `10.3389/fmicb.2019.01306` | Songhe Guo, Yongfan Lu, Banglao Xu | Guo Songhe, Lu Yongfan, Xu Banglao |
| `guo-2021-tumor-microbiome-basal-like-pdac.md` | `10.1038/s42003-021-02557-5` | Wei Guo, Yuchao Zhang, Shiwei Guo | Guo Wei, Zhang Yuchao, Guo Shiwei |
| `guo-2025-causal-gut-microbiota-metabolites-ovarian-cancer-mr.md` | `10.1186/s13048-025-01610-9` | Jia Guo, Cheng Wang, Hui Li | Guo Junfeng, Wang Chen, Li He |
| `guthrie-2017-microbiome-signatures-crc-drug-metabolism.md` | `10.1038/s41522-017-0034-1` | Leah Guthrie, Sanchit Gupta, Johanna Daily | Guthrie Leah, Gupta Sanchit, Daily Johanna |
| `gutmann-2025-functional-microbiome-diet-ms.md` | `10.21203/rs.3.rs-7434844/v1` | Friederike Gutmann, Lina Samira Bahr, Ulrike Bruning | Gutmann Friederike, Bahr Lina Samira, Brüning Ulrike |
| `haberman-2014-pediatric-cd-ileal-transcriptome-microbiome.md` | `10.1172/JCI75436` | Yael Haberman, Timothy L. Tickle, Phillip J. Dexheimer | Haberman Yael, Tickle Timothy L., Dexheimer Phillip J. |
| `hadrich-2025-gut-mycobiome-neuropsychiatric-disorders.md` | `10.3389/fncel.2024.1495224` | Ines Hadrich, Mariem Turki, Imen Chaari | Hadrich Ines, Turki Mariem, Chaari Imen |
| `hahn-holbrook-2018-economic-health-predictors-ppd-prevalence.md` | `10.3389/fpsyt.2017.00248` | Jennifer Hahn-Holbrook, Taylor Cornwell-Hinrichs, Itzel Anaya | Hahn-Holbrook Jennifer, Cornwell-Hinrichs Taylor, Anaya Itzel |
| `half-2019-fecal-microbiome-signatures-pancreatic-cancer.md` | `10.1038/s41598-019-53041-4` | Elizabeth Half, Nirit Keren, Leah Reshef | Half Elizabeth, Keren Nirit, Reshef Leah |
| `hall-2020-ckd-cats-dietary-fiber-metabolome-microbiome.md` | `10.1371/journal.pone.0235480` | Jean A. Hall, Matthew I. Jackson, Dennis E. Jewell | Hall Jean A., Jackson Matthew I., Jewell Dennis E. |
| `han-2024-lgg-gallium-polyphenol-intratumor-microbiota-pancreatic-cancer.md` | `10.1038/s41467-024-51534-z` | Zi-Yi Han, Zhuang-Jiong Fu, Yu-Zhang Wang | Han Zi-Yi, Fu Zhuang-Jiong, Wang Yu-Zhang |
| `han-2025-multi-omics-gut-microbiota-pancreatic-cancer.md` | `10.3389/fmicb.2025.1592549` | Yang Han, Biyang Cao, Jiayue Tang | Han Yang, Cao Biyang, Tang Jiayue |
| `handel-2011-smoking-ms-meta-analysis.md` | `10.1371/journal.pone.0016149` | Adam E. Handel, Alexander J. Williamson, Giulio Disanto | Handel Adam E., Williamson Alexander J., Disanto Giulio |
| `hao-2022-fmt-gut-microbiota-testis-semen-quality-t1d.md` | `10.1186/s10020-022-00473-w` | Yanan Hao, Yanni Feng, Xiaowei Yan | Hao Yanan, Feng Yanni, Yan Xiaowei |
| `hardan-2012-nac-pilot-trial-autism-children.md` | `10.1016/j.biopsych.2012.01.014` | Antonio Y. Hardan, Lawrence K. Fung, Robin A. Libove | Hardan Antonio Y., Fung Lawrence K., Libove Robin A. |
| `hauer-2021-comorbidity-ms-systematic-review.md` | `10.1007/s00415-020-10107-y` | Larissa Hauer, Julian Perneczky, Johann Sellner | Hauer Larissa, Perneczky Julian, Sellner Johann |
| `hayashi-2019-gut-microbiome-metabolites-heart-failure.md` | `10.1253/circj.CJ-18-0468` | Tomohiro Hayashi, Tomoya Yamashita, Hikaru Watanabe | Hayashi Tomohiro, Yamashita Tomoya, Watanabe Hikaru |
| `he-2021-gut-microbiome-sex-hormone-related-diseases.md` | `10.3389/fmicb.2021.711137` | Song He, Hao Li, Zehui Yu | He Song, Li Hao, Yu Zehui |
| `he-2021-gut-microbiome-sex-hormones-disease.md` | `10.3389/fmicb.2021.711137` | Song He, Hao Li, Zehui Yu | He Song, Li Hao, Yu Zehui |
| `he-2022-akkermansia-muciniphila-immune-system-cvd-mice.md` | `10.3389/fmicb.2022.906920` | Xin He, Yang Bai, Haiyang Zhou | He Xin, Bai Yang, Zhou Haiyang |
| `he-2023-altered-gut-microbiota-scfa-constipated-asd-chinese.md` | `10.1038/s41598-023-46566-2` | Jianquan He, Xiuhua Gong, Bing Hu | He Jianquan, Gong Xiuhua, Hu Bing |
| `he-2023-causal-effects-gut-microbiome-me-cfs-mendelian-randomization.md` | `10.3389/fmicb.2023.1190894` | Gang He, Yu Cao, Honghao Ma | He Gang, Cao Yu, Ma Honghao |
| `he-2024-gut-microbial-scfas-ckd.md` | `10.1186/s12967-024-04974-6` | Meng He, Wenqian Wei, Yichen Zhang | He Meng, Wei Wenqian, Zhang Yichen |
| `hegarty-1994-one-hundred-years-schizophrenia-outcome-meta-analysis.md` | `10.1176/ajp.151.10.1409` | Hegarty JD, Baldessarini RJ, Tohen M |  |
| `heidari-2021-immune-system-asd-therapeutic-challenges.md` | `10.21307/ane-2021-023` | Arash Heidari, Yasna Rostam-Abadi, Nima Rezaei | Heidari Arash, Rostam-Abadi Yasna, Rezaei Nima |
| `herrema-2020-intestinal-microbial-metabolites-t2d.md` | `10.1007/s00125-020-05268-4` | Hilde Herrema, Jan Hendrik Niess | Herrema Hilde, Niess Jan Hendrik |
| `herrema-2020-microbiome-cardiovascular-disease-ascvd.md` | `10.1007/164_2020_356` | Hilde Herrema, Max Nieuwdorp, Albert K. Groen | Herrema Hilde, Nieuwdorp Max, Groen Albert K. |
| `hertel-2019-integrated-metabolomics-parkinsons-biomarkers.md` | `10.1016/j.celrep.2019.10.035` | Johannes Hertel, Almut Heinken, Ronan M T Fleming | Hertel Johannes, Harms Amy C., Heinken Almut |
| `hidalgo-2010-pancreatic-cancer-nejm-review.md` | `10.1056/NEJMra0901557` | Manuel Hidalgo | Hidalgo Manuel |
| `hirota-2023-asd-review-jama.md` | `10.1001/jama.2022.23661` | Tomoya Hirota, Bryan H. King | Hirota Tomoya, King Bryan H. |
| `hisamatsu-2025-salivary-streptococcus-statin-therapy-older-adults.md` | `10.3389/fphar.2025.1455753` | Daisuke Hisamatsu, Yusuke Ogata, Wataru Suda | Hisamatsu Daisuke, Ogata Yusuke, Suda Wataru |
| `ho-2024-colorectal-cancer-virome-alterations-persistence-surgery.md` | `10.1038/s41598-024-53041-z` | Si Xian Ho, Jia-Hao Law, Chin-Wen Png | Ho Si Xian, Law Jia-Hao, Png Chin-Wen |
| `hoang-2023-dysbiotic-microbiome-crc-lifestyles-metabolic.md` | `10.1186/s12866-023-02771-7` | Tung Hoang, Minjung Kim, Ji Won Park | Hoang Tung, Kim Minjung, Park Ji Won |
| `hocher-2017-metabolomics-clinical-use-ckd.md` | `10.1038/nrneph.2017.30` | Berthold Hocher, Jerzy Adamski | Hocher Berthold, Adamski Jerzy |
| `hoffelner-2025-emerging-therapy-targets-microbiome-cvd.md` | `10.3389/fcvm.2025.1631841` | Dorothea Katharina Hoffelner, Tim Hendrikx | Hoffelner Dorothea Katharina, Hendrikx Tim |
| `holle-2025-gut-derived-metabolites-treatment-targets-ckd.md` | `10.1007/s00467-024-06609-w` | Johannes Holle, Hendrik Bartolomaeus | Holle Johannes, Bartolomaeus Hendrik |
| `honkanen-2020-fungal-dysbiosis-intestinal-inflammation-beta-cell-autoimmunity.md` | `10.3389/fimmu.2020.00468` | Jarno Honkanen, Arja Vuorela, Daniel Muthas | Honkanen Jarno, Vuorela Arja, Muthas Daniel |
| `hossain-2017-asd-south-asia-systematic-review.md` | `10.1186/s12888-017-1440-x` | Mohammad Didar Hossain, Helal Uddin Ahmed, M M Jalal Uddin | Hossain Mohammad Didar, Ahmed Helal Uddin, Jalal Uddin M M |
| `hou-2018-phage-display-peptide-colon-cancer-imaging.md` | `10.1038/bjc.2017.366` | Lidan Hou, Danxi Zhu, Yu Liang | Hou Lidan, Zhu Danxi, Liang Yu |
| `hou-2023-bile-acid-metabolism-t2d-review.md` | `10.1186/s13098-023-01207-6` | Yisen Hou, Xinzhe Zhai, Xiaotao Wang | Hou Yisen, Zhai Xinzhe, Wang Xiaotao |
| `hoxha-2021-folic-acid-autism-systematic-review.md` | `10.3390/cells10081976` | Bianka Hoxha, Malvina Hoxha, Elisa Domi | Hoxha Bianka, Hoxha Malvina, Domi Elisa |
| `hoyles-2018-propionate-blood-brain-barrier-microbiome.md` | `10.1186/s40168-018-0439-y` | Lesley Hoyles, Tom Snelling, Umm-Kulthum Umlai | Hoyles Lesley, Snelling Tom, Umlai Umm-Kulthum |
| `hsu-2024-zinc-supplementation-primary-dysmenorrhea-meta-analysis.md` | `10.3390/nu16234116` | Ting-Jui Hsu, Rong-Hong Hsieh, Chin-Huan Huang | Hsu Ting-Jui, Hsieh Rong-Hong, Huang Chin-Huan |
| `hu-2020-high-throughput-sequencing-intestinal-flora-esrd-ckd.md` | `10.1186/s12882-019-1668-4` | Jianguang Hu, Xiaoshi Zhong, Jing Yan | Hu Jianguang, Zhong Xiaoshi, Yan Jing |
| `hu-2022-gut-mycobiome-ckd-immunological-profiles.md` | `10.3389/fimmu.2022.843695` | Jialin Hu, Shichao Wei, Yifeng Gu | Hu Jialin, Wei Shichao, Gu Yifeng |
| `hu-2024-gut-microbiota-chd-mendelian-randomization.md` | `10.3389/fcvm.2024.1273666` | Xiang-zhi Hu, Ling-ling Fu, Bin Ye | Hu Xiang-zhi, Fu Ling-ling, Ye Bin |
| `hu-2024-sleep-traits-ppd-mendelian-randomization.md` | `10.1186/s12884-024-06929-7` | Qianying Hu, Enzhao Cong, Jianhua Chen | Hu Qianying, Cong Enzhao, Chen Jianhua |
| `hu-rayman-2017-nutritional-factors-hashimotos-review.md` | `10.1089/thy.2016.0635` | Shiqian Hu, Margaret P Rayman | Hu Shiqian, Rayman Margaret P. |
| `huang-2017-self-awareness-asd-literature-review.md` | `10.3389/fpsyg.2017.01422` | Ann X. Huang, Tammy L. Hughes, Lawrence R. Sutton | Huang Ann X., Hughes Tammy L., Sutton Lawrence R. |
| `huang-2019-gut-microbiota-cerebral-palsy-epilepsy.md` | `10.3389/fped.2019.00394` | Congfu Huang, Yinhu Li, Xin Feng | Huang Congfu, Li Yinhu, Feng Xin |
| `huang-2021-microbiome-statistical-modeling-asd-neurobehavioral.md` | `10.3389/fpsyt.2021.682454` | Minshi Huang, Jun Liu, Kevin Liu | Huang Minshi, Liu Jun, Liu Kevin |
| `huang-2021-tryptophan-metabolites-working-memory-cortical-thickness-schizophrenia.md` | `10.1038/s41398-021-01311-z` | Junchao Huang, Jinghui Tong, Ping Zhang | Huang Junchao, Tong Jinghui, Zhang Ping |
| `huang-2022-oral-gut-microbiota-cpe-correlations.md` | `10.3389/fped.2022.988601` | Congfu Huang, Chunuo Chu, Yuanping Peng | Huang Congfu, Chu Chunuo, Peng Yuanping |
| `huang-2024-gut-fungi-ibd-colorectal-cancer.md` | `10.1186/s13099-024-00651-7` | Yilin Huang, Yang Wang, Xiaotian Huang | Huang Yilin, Wang Yang, Huang Xiaotian |
| `huang-2025-gut-microbiota-urine-metabolomics-asd-southern-china.md` | `10.1186/s12887-025-05922-z` | Ziyu Huang, Ailing Wei, Hai Yuan | Huang Ziyu, Wei Ailing, Yuan Hai |
| `huang-2025-multi-omics-probiotic-feline-ckd.md` | `10.3389/fvets.2025.1590388` | Hsiao-Wen Huang, Tzu-Chien Kuo, Ya-Jane Lee | Huang Hsiao-Wen, Kuo Tzu-Chien, Lee Ya-Jane |
| `hughes-2018-anti-candida-antibodies-asd-children.md` | `10.3389/fpsyt.2018.00627` | Heather K. Hughes, Paul Ashwood | Hughes Heather K., Ashwood Paul |
| `huxley-2005-diabetes-pancreatic-cancer-meta-analysis.md` | `10.1038/sj.bjc.6602619` | R. Huxley, A. Ansary-Moghaddam, A. Berrington de Gonzalez | Huxley R, Ansary-Moghaddam A, Berrington de González A |
| `ignatova-2023-biomarkers-ms-review.md` | `10.47485/2693-2490.1072` | Valentina Ignatova |  |
| `iida-2019-metabolomics-atherosclerosis-cvd-epidemiology.md` | `10.5551/jat.RV17036` | Miho Iida, Sei Harada, Toru Takebayashi | Iida Miho, Harada Sei, Takebayashi Toru |
| `islam-2022-opposing-microbiome-signatures-autoimmune-cancer.md` | `10.1186/s40168-022-01373-1` | Md Zohorul Islam, Melissa Tran, Tao Xu | Islam Md Zohorul, Tran Melissa, Xu Tao |
| `ismail-2022-gut-microbiome-obesity-t1d-review.md` | `10.3389/fcimb.2022.892291` | Heba M. Ismail, Carmella Evans-Molina | Ismail Heba M., Evans-Molina Carmella |
| `jagtiani-2024-novel-treatments-depression-therapeutic-approaches.md` | `10.37349/en.2024.00049` | Amit Jagtiani | Jagtiani Amit |
| `jaishankar-2014-heavy-metal-toxicity-mechanisms.md` | `10.2478/intox-2014-0009` | Monisha Jaishankar, Tenzin Tseten, Naresh Anbalagan | Jaishankar Monisha, Tseten Tenzin, Anbalagan Naresh |
| `jangi-2016-gut-microbiome-alterations-ms.md` | `10.1038/ncomms12015` | Sushrut Jangi, Roopali Gandhi, Laura M. Cox | Jangi Sushrut, Gandhi Roopali, Cox Laura M. |
| `javdan-2025-mind-diet-ppd-symptoms.md` | `10.1186/s12905-025-03705-3` | Mitra Javdan, Amir Bagheri, Jalal Moludi | Javdan Mitra, Bagheri Amir, Moludi Jalal |
| `jayasudha-2020-gut-mycobiomes-altered-t2d-diabetic-retinopathy.md` | `10.1371/journal.pone.0243077` | Rajagopalaboopathi Jayasudha, Taraprasad Das, Sama Kalyana Chakravarthy | Jayasudha Rajagopalaboopathi, Das Taraprasad, Kalyana Chakravarthy Sama |
| `jiang-2017-gut-microbiota-chinese-ckd-population.md` | `10.1038/s41598-017-02989-2` | Shuanghong Jiang, Shan Xie, Dan Lv | Jiang Shuanghong, Xie Shan, Lv Dan |
| `jiang-2023-mendelian-randomization-gut-microbiota-pancreatic-cancer.md` | `10.1186/s12885-023-11493-y` | Zhichen Jiang, Yiping Mou, Huiju Wang | Jiang Zhichen, Mou Yiping, Wang Huiju |
| `jiang-2025-nutrition-gut-microbiome-childhood-brain-development.md` | `10.3389/fnut.2025.1590172` | Yue Jiang, Yuanyuan Li | Jiang Yue, Li Yuanyuan |
| `jiang-2025-tmao-chronic-kidney-disease-risk.md` | `10.1007/s00253-025-13481-7` | Junyi Jiang, Peng Zhu, Xiaoying Ding | Jiang Junyi, Zhu Peng, Ding Xiaoying |
| `jie-2017-gut-microbiome-acvd.md` | `10.1038/s41467-017-00900-1` | Zhuye Jie, Huihua Xia, Shi-Long Zhong | Jie Zhuye, Xia Huihua, Zhong Shi-Long |
| `jin-2024-causal-gut-microbiota-ppd-mr.md` | `10.3389/fmicb.2024.1415237` | Wenjun Jin, Bo Li, Lijun Wang | Jin Wenjun, Li Bo, Wang Lijun |
| `jones-2022-gut-microbiome-changes-young-autistic-children.md` | `10.3389/fmicb.2022.905901` | Jacquelyn Jones, Stacey N. Reinke, Mahsa Mousavi-Derazmahalleh | Jones Jacquelyn, Reinke Stacey N., Mousavi-Derazmahalleh Mahsa |
| `juarez-2020-exposome-cvd-racial-disparities.md` | `10.3389/fpubh.2020.00379` | Paul D. Juarez, Darryl B. Hood, Min-Ae Song | Juarez Paul D., Hood Darryl B., Song Min-Ae |
| `kamitaki-2026-dna-virome-human-genes-environments.md` | `10.1038/s41586-026-10288-y` | Nolan Kamitaki, David Tang, Steven A. McCarroll | Kamitaki Nolan, Tang David, McCarroll Steven A. |
| `karakas-2023-ursodeoxycholic-acid-propionic-acid-autism-animal.md` | `10.32322/jhsm.1286838` | Levent Karakas, Volkan Solmaz, Erman Bascioglu | KARAKAŞ Levent, SOLMAZ Volkan, BAĞCIOĞLU Erman |
| `kashtanova-2017-gut-microbiota-vascular-biomarkers-subclinical-cvd.md` | `10.1016/j.artres.2017.02.007` | Daria Kashtanova, Olga Tkacheva, Anna Popenko | Kashtanova Daria, Tkacheva Olga, Popenko Anna |
| `kashyap-2014-pgrps-kill-bacteria-metal-stress.md` | `10.1371/journal.ppat.1004280` | Dipika R. Kashyap, Minhui Wang, Li-Hung Liu | Kashyap Des Raj, Rompca Annemarie, Gaballa Ahmed |
| `kazemian-2020-gut-microbiota-cad-opportunities.md` | `10.1186/s40168-020-00821-0` | Negin Kazemian, Morteza Mahmoudi, Frank Halperin | Kazemian Negin, Mahmoudi Morteza, Halperin Frank |
| `ke2022-microbiome-covid-metagenome-genomes.md` | `10.1038/s41467-022-32991-w` | Shanlin Ke, Scott T. Weiss, Yang-Yu Liu | Ke Shanlin, Weiss Scott T., Liu Yang-Yu |
| `kennedy-2020-ms-brain-antibodies-phage-peptides-intrathecal-igg.md` | `10.1016/j.jneuroim.2020.577319` | Peter G.E. Kennedy, Michael W. Graner, Deandra Walker | Kennedy Peter G.E., Graner Michael W., Walker Deandra |
| `khan-2014-metals-type2-diabetes.md` | `10.1186/2251-6581-13-16` | Abdul Rehman Khan, Fazli Rabbi Awan | Khan Abdul Rehman, Awan Fazli Rabbi |
| `khan-2020-environmental-exposures-autoimmune-gut-microbiome.md` | `10.3389/fimmu.2019.03094` | M. Firoze Khan, Hui Wang | Khan M. Firoze, Wang Hui |
| `khawar-2023-gut-brain-axis-autoimmune-diseases.md` | `10.7759/cureus.48655` | Muhammad Muneeb Khawar Sr., Sami Ijaz, Priya Goyal | Khawar Muhammad Muneeb, Ijaz Sami, Goyal Priya |
| `khorsand-2022-enterobacteriaceae-ecoli-ibd-ibdmdb-metagenomics.md` | `10.3389/fcimb.2022.1015890` | Babak Khorsand, Hamid Asadzadeh Aghdaei, Ehsan Nazemalhosseini-Mojarad | Khorsand Babak, Asadzadeh Aghdaei Hamid, Nazemalhosseini-Mojarad Ehsan |
| `kim-2018-probiotics-prebiotics-synbiotics-insulin-sensitivity.md` | `10.1017/S095442241700018X` | Y. A. Kim, J. B. Keogh, P. M. Clifton | Kim Y. A., Keogh J. B., Clifton P. M. |
| `kim-2023-edcs-phthalates-pfas-ppd-infant-neurodevelopment.md` | `10.1007/s11356-023-29292-0` | Ju Hee Kim, Nalae Moon, Eunsun Ji | Kim Ju Hee, Moon Nalae, Ji Eunsun |
| `kimura-2016-chiral-amino-acid-metabolomics-ckd.md` | `10.1038/srep26137` | Tomonori Kimura, Kenji Hamase, Yurika Miyoshi | Kimura Tomonori, Hamase Kenji, Miyoshi Yurika |
| `kingwell-2013-ms-incidence-prevalence-europe-systematic-review.md` | `10.1186/1471-2377-13-128` | Elaine Kingwell, James J. Marriott, Nathalie Jette | Kingwell Elaine, Marriott James J, Jetté Nathalie |
| `kinross-2011-gut-microbiome-host-interactions-health-disease.md` | `10.1186/gm228` | James M Kinross, Ara W Darzi, Jeremy K Nicholson | Kinross James M, Darzi Ara W, Nicholson Jeremy K |
| `kinross-2011-gut-microbiome-host-interactions-health.md` | `10.1186/gm228` | James M. Kinross, Ara W. Darzi, Jeremy K. Nicholson | Kinross James M, Darzi Ara W, Nicholson Jeremy K |
| `kita-2020-ferrichrome-probiotics-pancreatic-cancer.md` | `10.3892/ijo.2020.5096` | Akemi Kita, Mikihiro Fujiya, Hiroaki Konishi | Kita Akemi, Fujiya Mikihiro, Konishi Hiroaki |
| `kleeff-2016-pancreatic-cancer-primer.md` | `10.1038/nrdp.2016.22` | Jorg Kleeff, Murray Korc, Minoti Apte | Kleeff Jorg, Korc Murray, Apte Minoti |
| `klotz-2017-aluminum-health-effects-review.md` | `10.3238/arztebl.2017.0653` | Katrin Klotz, Wobbeke Weistenhofer, Frauke Neff | Klotz Katrin, Weistenhöfer Wobbeke, Neff Frauke |
| `knip-2017-modulation-t1d-risk-intestinal-microbiome.md` | `10.1007/s11892-017-0933-9` | Mikael Knip, Jarno Honkanen | Knip Mikael, Honkanen Jarno |
| `kobayashi-2013-serum-metabolomics-pancreatic-cancer.md` | `10.1158/1055-9965.EPI-12-1033` | Takashi Kobayashi, Shin Nishiumi, Atsuki Ikeda | Kobayashi Takashi, Nishiumi Shin, Ikeda Atsuki |
| `kraeuter-2026-ketogenic-diet-fmt-sensorimotor-gating-schizophrenia-mice.md` | `10.1039/d6fo00213g` | Ann-Katrin Kraeuter, Zoltan Sarnyai | Kraeuter Ann-Katrin, Sarnyai Zoltan |
| `krajewski-2025-heavy-metals-microbiome-metabolites-adhd-behavior.md` | `10.1038/s41598-025-00680-5` | Kristin Krajewski | Krajewski Kristin |
| `krajewski-2025-heavy-metals-microbiome-metabolites-children-behavior.md` | `10.1038/s41598-025-00680-5` | Kristin Krajewski | Krajewski Kristin |
| `krawczyk-2025-fmt-fungal-archaeal-species-rat-schizophrenia-model.md` | `10.1007/s43440-025-00793-8` | Agnieszka Krawczyk, Tomasz Kasperski, Tomasz Gosiewski | Krawczyk Agnieszka, Kasperski Tomasz, Gosiewski Tomasz |
| `kumari-2023-fatty-acids-parkinsons-microbiome.md` | `10.1038/s41531-023-00502-3` | Swati Kumari, Anirban Goswami | Di Maio Roberto, Keeney Matthew T., Cechova Veronika |
| `lamtai-2018-chronic-nickel-affective-cognitive-behavior-rats.md` | `10.3390/brainsci8080141` | Mouloud Lamtai, Jihane Chaibat, Sihame Ouakki | Lamtai Mouloud, Chaibat Jihane, Ouakki Sihame |
| `lancaster-2014-metallomics-microorganisms-bioremediation.md` | `10.1039/c4mt00050a` | W. Andrew Lancaster, Angeli Lal Menon, Israel Scott | Lancaster W. Andrew, Menon Angeli Lal, Scott Israel |
| `larroya-2021-tailored-microbiome-dietary-interventions-brain.md` | `10.3389/fped.2021.705859` | Ana Larroya, Jorge Pantoja, Pilar Codoner-Franch | Larroya Ana, Pantoja Jorge, Codoñer-Franch Pilar |
| `lawrence-2022-blood-microbiome-cvd-mortality.md` | `10.1186/s12872-022-02791-7` | Graeme Lawrence, Ingvild Midtervoll, Sven Ove Samuelsen | Lawrence Graeme, Midtervoll Ingvild, Samuelsen Sven Ove |
| `lee-2019-bcaa-pancreatic-cancer-lipid-metabolism.md` | `10.1038/s12276-019-0350-z` | Ji Hyeon Lee, Young-ra Cho, Ji Hye Kim | Lee Ji Hyeon, Cho Young-ra, Kim Ji Hye |
| `li-2019-gut-microbiota-inflammatory-factors-ckd.md` | `10.3389/fcimb.2019.00206` | FengXia Li, MeiHong Wang, JunPing Wang | Li FengXia, Wang MeiHong, Wang JunPing |
| `li-2020-gut-microbiome-composition-t2d-northern-china.md` | `10.1038/s41598-020-62224-3` | Qian Li, Yujun Chang, Ke Zhang | Li Qian, Chang Yujun, Zhang Ke |
| `li-2020-gut-microbiota-roles-pancreatic-cancer.md` | `10.3389/fcimb.2020.572492` | Quanxiao Li, Meng Jin, Yahui Liu | Li Quanxiao, Jin Meng, Liu Yahui |
| `li-2021-fmt-gi-autism-symptoms-open-label.md` | `10.3389/fcimb.2021.759435` | Ning Li, Hongyan Chen, Yi Cheng | Li Ning, Chen Hongyan, Cheng Yi |
| `li-2021-ketogenic-diet-treatment-asd-review.md` | `10.3389/fped.2021.650624` | Qinrui Li, Jingjing Liang, Na Fu | Li Qinrui, Liang Jingjing, Fu Na |
| `li-2021-network-gut-microbiome-biomarkers-carotid-atherosclerosis.md` | `10.3389/fcimb.2021.708088` | Rui-Jun Li, Zhu-Ye Jie, Qiang Feng | Li Rui-Jun, Jie Zhu-Ye, Feng Qiang |
| `li-2023-combined-gut-bacteria-fungi-crc-adenoma-chinese-cohort.md` | `10.3389/fmicb.2023.1236583` | Xiaopeng Li, Jiahui Feng, Zhanggui Wang | Li Xiaopeng, Feng Jiahui, Wang Zhanggui |
| `li-2023-diabetes-dietary-cadmium-china.md` | `10.1007/s11356-023-29424-6` | Shan Li, Muhadasi Tuerxunyiming, Zhe Sun | Li Shan, Tuerxunyiming Muhadasi, Sun Zhe |
| `li-2023-dietary-fiber-cognitive-impairment-ckd.md` | `10.1371/journal.pone.0291690` | Feiyan Li, Hongxi Chen, Nan Mao | Li Feiyan, Chen Hongxi, Mao Nan |
| `li-2023-gut-microbiome-hypertension-bidirectional-mr.md` | `10.3389/fcvm.2023.1167346` | Yihui Li, Ru Fu, Ruixuan Li | Li Yihui, Fu Ru, Li Ruixuan |
| `li-2023-gut-microbiota-asd-bidirectional-mr.md` | `10.3389/fcimb.2023.1267721` | Zhi Li, Shuai Liu, Fang Liu | Li Zhi, Liu Shuai, Liu Fang |
| `li-2023-phage-based-peptides-pancreatic-cancer.md` | `10.3389/fmicb.2023.1231503` | Yang Li, Kai-di Yang, Hao-yu Duan | Li Yang, Yang Kai-di, Duan Hao-yu |
| `li-2024-causal-role-gut-microbiota-long-covid-mendelian-randomization.md` | `10.3389/fmicb.2024.1404673` | Zuming Li, Qinghua Xia, Jieni Feng | Li Zuming, Xia Qinghua, Feng Jieni |
| `li-2024-compositional-functional-imbalance-gut-microbiota-ckd.md` | `10.1186/s12967-024-05578-w` | Jing Li, Yang Shen, Kaixin Yan | Li Jing, Shen Yang, Yan Kaixin |
| `li-2025-amino-acid-levels-asd-severity.md` | `10.1186/s12888-025-06771-x` | Jing Li, Panpan Zhai, Liangliang Bi | Li Jing, Zhai Panpan, Bi Liangliang |
| `li-2025-gut-microbiota-dysbiosis-neuroinflammation-mdd.md` | `10.3389/fpsyt.2025.1629182` | Jiayi Li, Bei Wan, Le Zhou | Li Jiayi, Wan Bei, Zhou Le |
| `li-2025-gut-microbiota-inflammatory-factors-ppd-mr.md` | `10.1186/s12884-025-07304-w` | Hui Li, Hongyan Meng, Chunxiao Dang | Li Hui, Meng Hongyan, Dang Chunxiao |
| `li-2025-long-term-gut-microbiota-alterations-covid-recovery.md` | `10.3389/fcimb.2025.1565887` | Da Li, Da-Ya Zhang, Shi-Ju Chen | Li Da, Zhang Da-Ya, Chen Shi-Ju |
| `lim-2023-plasma-metallomics-ami.md` | `10.1016/j.jtemb.2023.127148` | Si Ying Lim, Hiranya Dayal, Song Jie Seah | Lim Si Ying, Dayal Hiranya, Seah Song Jie |
| `lin-2025-nec-serum-metabolomics-fecal-microbiome.md` | `10.3389/fmicb.2025.1584041` | Zhi-ying Lin, Shan-shan He, Zi-tong Mo | Lin Zhi-ying, He Shan-shan, Mo Zi-tong |
| `lindahl-2017-lcms-metabolomics-pancreatic-cancer.md` | `10.1007/s11306-017-1199-6` | Anna Lindahl, Rainer Heuchel, Jenny Forshed | Lindahl Anna, Heuchel Rainer, Forshed Jenny |
| `ling-2020-fecal-fungal-dysbiosis-alzheimers.md` | `10.3389/fcell.2020.631460` | Zhi Ling, Yiwen Cheng, Feng Yan | Ling Zongxin, Zhu Manlian, Liu Xia |
| `ling-2024-blood-metabolomic-ppd-mendelian-randomization.md` | `10.1186/s12884-024-06628-3` | Keng Ling, Minping Hong, Liqin Jin | Ling Keng, Hong Minping, Jin Liqin |
| `ling-2025-fecal-mycobiota-elderly-chinese-schizophrenia-purpureocillium.md` | `10.3389/fimmu.2025.1607739` | Zongxin Ling, Yiwen Cheng, Xia Liu | Ling Zongxin, Cheng Yiwen, Liu Xia |
| `ling-2025-gut-mycobiota-schizophrenia-metabolic-syndrome-trichosporon.md` | `10.3389/fimmu.2025.1652633` | Zongxin Ling, Yiwen Cheng, Zhiyong Lan | Ling Zongxin, Cheng Yiwen, Lan Zhiyong |
| `liu-2018-gut-microbiome-rosuvastatin-lipid-lowering.md` | `10.3389/fmicb.2018.00530` | Yinhui Liu, Xiaobo Song, Huimin Zhou | Liu Yinhui, Song Xiaobo, Zhou Huimin |
| `liu-2018-rosuvastatin-gut-microbiome-lipid-lowering.md` | `10.3389/fmicb.2018.00530` | Yinhui Liu, Xiaobo Song, Huimin Zhou | Liu Yinhui, Song Xiaobo, Zhou Huimin |
| `liu-2019-altered-gut-microbiota-scfa-chinese-children-asd.md` | `10.1038/s41598-018-36430-z` | Simeng Liu, Enyao Li, Zhenyu Sun | Liu Simeng, Li Enyao, Sun Zhenyu |
| `liu-2019-altered-microbiota-composition-asd-systematic-review.md` | `10.1038/s41398-019-0389-6` | Feitong Liu, Jie Li, Fan Wu | Liu Feitong, Li Jie, Wu Fan |
| `liu-2019-gut-microbiome-metabolism-cad-severity.md` | `10.1186/s40168-019-0683-9` | Honghong Liu, Xi Chen, Xiaomin Hu | Liu Honghong, Chen Xi, Hu Xiaomin |
| `liu-2019-urinary-amino-acids-asd-biomarkers.md` | `10.3389/fncel.2019.00007` | Aiping Liu, Wei Zhou, Liuhong Qu | Liu Aiping, Zhou Wei, Qu Liuhong |
| `liu-2020-high-fat-diet-heavy-metals-gut-microbiota-kidney.md` | `10.3389/fmicb.2020.01604` | Ting Liu, Xue Liang, Chao Lei | Liu Ting, Liang Xue, Lei Chao |
| `liu-2022-fmt-restores-fecal-composition-ckd-rats.md` | `10.3389/fmicb.2022.1037257` | Xiaoxue Liu, Ming Zhang, Xifan Wang | Liu Xiaoxue, Zhang Ming, Wang Xifan |
| `liu-2022-tryptophan-postpartum-mood-disorders-meta-analysis.md` | `10.1186/s12888-022-04178-6` | Zhao Feng Liu, Amy Sylivris, Michael Gordon | Liu Zhao Feng, Sylivris Amy, Gordon Michael |
| `liu-2023-cadmium-microbiota-metabolome-rats.md` | `10.3389/fvets.2023.1219729` | Songqing Liu, Xin Deng, Zheng Li | Liu Songqing, Deng Xin, Li Zheng |
| `liu-2023-changes-gut-microbial-community-ckd.md` | `10.1371/journal.pone.0283389` | Wu Liu, Jiaqi Huang, Tong Liu | Liu Wu, Huang Jiaqi, Liu Tong |
| `liu-2023-colorectal-cancer-progression-microbiome-signature.md` | `10.1186/s12967-023-04119-1` | Jungang Liu, Xiaoliang Huang, Chuanbin Chen | Liu Jungang, Huang Xiaoliang, Chen Chuanbin |
| `liu-2023-intestinal-metabolites-asd-mr.md` | `10.3389/fpsyt.2022.1034214` | Deyang Liu, Dengyin Bu, Hong Li | Liu Deyang, Bu Dengyin, Li Hong |
| `liu-2023-tumor-mycobiome-cancer-pathogenesis.md` | `10.3892/ol.2023.14128` | Weipeng Liu, Zongrui Li, Xiaopeng Li | Liu Weipeng, Li Zongrui, Li Xiaopeng |
| `liu-2024-gut-microbiota-chronic-renal-failure-mr.md` | `10.3389/fmicb.2024.1356478` | Xingzheng Liu, Jinying Mo, Xuerui Yang | Liu Xingzheng, Mo Jinying, Yang Xuerui |
| `liu-2024-oral-fungal-dysbiosis-immune-dysfunction-schizophrenia.md` | `10.1038/s41398-024-03183-5` | Xia Liu, Zongxin Ling, Yiwen Cheng | Liu Xia, Ling Zongxin, Cheng Yiwen |
| `liu-2024-probiotics-synbiotics-ckd-systematic-review.md` | `10.3389/fnut.2024.1434613` | Chang Liu, Letian Yang, Wei Wei | Liu Chang, Yang Letian, Wei Wei |
| `liu-2025-cardiometabolic-nickel.md` | `10.1007/s12012-025-10014-6` | Yucheng Liu, Xiaomin Luo, Yongde Peng | Liu Yucheng, Luo Xiaomin, Peng Yongde |
| `liu-2025-gut-microbiota-therapy-ckd.md` | `10.3389/fimmu.2025.1660226` | Chunguang Liu, Junhong Wang, Lei Lei | Liu Chunguang, Wang Junhong, Lei Lei |
| `liu-2025-nickel-cardio-metabolic-effects.md` | `10.1007/s12012-025-10014-6` | Liu, Y., Zhang | Liu Yucheng, Luo Xiaomin, Peng Yongde |
| `liu-2026-gut-virome-anti-pd1-nsclc.md` | `10.1186/s12967-026-07900-0` | Zhuo Liu, Meihong Liu, Huixiang Chen | Liu Zhuo, Liu Meihong, Chen Huixiang |
| `liu-2026-oral-microbiome-ckd-mendelian-randomization.md` | `10.5114/aoms/211613` | Zhiwei Liu, Zhiyao Liu, Weixia Sun | Liu Zhiwei, Liu Zhiyao, Sun Weixia |
| `longo-2023-microbiota-gut-brain-axis-vagus-nerve-diabetes.md` | `10.1007/s00592-023-02088-x` | Susanna Longo, Stefano Rizza, Massimo Federici | Longo Susanna, Rizza Stefano, Federici Massimo |
| `lonstein-2024-maternal-probiotic-lactocaseibacillus-rhamnosus-ppd.md` | `10.1016/j.psyneuen.2024.107033` | Joseph S. Lonstein, Taryn A. Meinhardt, Pavlina Pavlidi | Lonstein Joseph S., Meinhardt Taryn A., Pavlidi Pavlina |
| `loomes-2017-male-female-ratio-asd-meta-analysis.md` | `10.1016/j.jaac.2017.03.013` | Rachel Loomes, Laura Hull, William Polmear Locke Mandy | Loomes Rachel, Hull Laura, Mandy William Polmear Locke |
| `love-2024-prenatal-environmental-risk-factors-asd.md` | `10.1186/s12916-024-03617-3` | Chloe Love, Luba Sominsky, Martin O'Hely | Love Chloe, Sominsky Luba, O’Hely Martin |
| `lu-2021-intestinal-dna-virome-covid-19.md` | `10.3389/fcimb.2021.790422` | Zhen-Hua Lu, Hao-Wei Zhou, Wei-Kang Wu | Lu Zhen-Hua, Zhou Hao-Wei, Wu Wei-Kang |
| `lu-2022-scfas-cardiovascular-metabolic-disease.md` | `10.3389/fcvm.2022.900381` | Yingdong Lu, Yang Zhang, Xin Zhao | Lu Yingdong, Zhang Yang, Zhao Xin |
| `lukasik-2019-early-antibiotics-asd-systematic-review.md` | `10.1007/s10803-019-04093-y` | Jan Lukasik, Bernadeta Patro-Golab, Andrea Horvath | , Łukasik Jan, Patro-Gołąb Bernadeta |
| `luo-2022-gut-microbiome-metabolic-activity-t1d-gada.md` | `10.3389/fendo.2022.938358` | Sihui Luo, Tong Yue, Ziyu Liu | Luo Sihui, Yue Tong, Liu Ziyu |
| `luo-2022-gut-microbiota-metabolites-heart-failure-mr.md` | `10.3389/fnut.2022.899746` | Qiang Luo, Yilan Hu, Xin Chen | Luo Qiang, Hu Yilan, Chen Xin |
| `luo-2023-causal-effects-gut-microbiota-ckd-mr.md` | `10.3389/fcimb.2023.1142140` | Mingli Luo, Jiahao Cai, Shulu Luo | Luo Mingli, Cai Jiahao, Luo Shulu |
| `luo-2023-causal-gut-microbiota-ckd-mendelian-randomization.md` | `10.3389/fcimb.2023.1142140` | Luo, Chen, Li | Luo Mingli, Cai Jiahao, Luo Shulu |
| `luo-2023-fermented-dairy-depressive-symptoms-meta-analysis.md` | `10.1371/journal.pone.0281346` | Yupeng Luo, Zhuo Li, Liya Gu | Luo Yupeng, Li Zhuo, Gu Liya |
| `luo-2025-microbiome-metabolome-interplay-pancreatic-cancer.md` | `10.1186/s12943-025-02458-9` | Dong Luo, Qizhen Chen, Yixiong Li | Luo Dong, Chen Qizhen, Li Yixiong |
| `luqman-2024-intestinal-microbiome-cvd-intervention.md` | `10.3389/fimmu.2024.1321395` | Ameer Luqman, Adil Hassan, Mehtab Ullah | Luqman Ameer, Hassan Adil, Ullah Mehtab |
| `luqman-2024-intestinal-microbiome-cvd-therapeutic.md` | `10.3389/fimmu.2024.1321395` | Ameer Luqman, Adil Hassan, Mehtab Ullah | Luqman Ameer, Hassan Adil, Ullah Mehtab |
| `ma-2018-metformin-gut-microbiota-healthy-mice.md` | `10.3389/fmicb.2018.01336` | Wei Ma, Ji Chen, Yuhong Meng | Ma Wei, Chen Ji, Meng Yuhong |
| `mabrouk-2026-repurposing-gut-microbiota-modulators.md` | `10.1186/s43088-025-00727-6` | Reda R. Mabrouk, Amani Magdy Beshbishy, Waad Mohamed Elmalah | Mabrouk Reda R., Magdy Beshbishy Amani, Mohamed Elmalah Waad |
| `mafra-2021-food-as-medicine-uraemic-phenotype-ckd.md` | `10.1038/s41581-020-00345-8` | Denise Mafra, Natalia A. Borges, Bo Lindholm | Mafra Denise, Borges Natalia A., Lindholm Bengt |
| `mafra-2022-fermented-food-cardiometabolic-diseases.md` | `10.1080/10408398.2022.2077300` | Denise Mafra, Natalia A. Borges, Livia Alvarenga | Mafra D., Borges N. A., Alvarenga L. |
| `maher-2024-synbiotics-immunomodulation-pdac-resection.md` | `10.1007/s00262-024-03686-6` | Sara Maher, Hesham A. Elmeligy, Tarek Aboushousha | Maher Sara, Elmeligy Hesham A., Aboushousha Tarek |
| `maier-2019-nickel-microbial-pathogenesis.md` | `10.3390/inorganics7070080` | Robert J. Maier, Stéphane L. Benoit | Maier Robert, Benoit Stéphane |
| `maini-rekdal-2019-microbiome-drug-interactions-parkinsons.md` | `10.1126/science.aau6323` | Vayu Maini Rekdal, Emily N Bess, Jordan E Bisanz | Maini Rekdal Vayu, Bess Elizabeth N., Bisanz Jordan E. |
| `major-2018-cvd-risk-factors-ckd-systematic-review.md` | `10.1371/journal.pone.0192895` | Rupert W. Major, Mark R. I. Cheng, Robert A. Grant | Major Rupert W., Cheng Mark R. I., Grant Robert A. |
| `manghi-2024-oral-microbiome-metagenomic-asd-markers.md` | `10.1038/s41467-024-53934-7` | Paolo Manghi, Michele Filosi, Moreno Zolfo | Manghi Paolo, Filosi Michele, Zolfo Moreno |
| `mania-2020-nickel-cereal-grains-poland.md` | `10.32394/rpzh.2020.0142` | Monika Mania, Malgorzata Rebeniak, Oksana Orshulyak | Mania Monika, Rebeniak Małgorzata, Orshulyak Oksana |
| `mansuri-2022-gut-microbiome-cardiovascular-events-systematic-review.md` | `10.7759/cureus.32465` | Naushad M. Mansuri, Neelam K. Mann, Shariqa Rizwan | Mansuri Naushad M, Mann Neelam K, Rizwan Shariqa |
| `margiotta-2020-gut-microbiota-frailty-elderly-ckd.md` | `10.1371/journal.pone.0228530` | Elisabetta Margiotta, Francesco Miragoli, Maria Luisa Callegari | Margiotta Elisabetta, Miragoli Francesco, Callegari Maria Luisa |
| `masi-2017-asd-heterogeneity-overview.md` | `10.1007/s12264-017-0100-y` | Anne Masi, Marilena M. DeMayo, Nicholas Glozier | Masi Anne, DeMayo Marilena M., Glozier Nicholas |
| `mathew-2022-serotoninergic-antidepressants-asd-systematic-review.md` | `10.7759/cureus.28505` | Sheena Mathew, Sumathitla Bichenapaliy, Vahe Khachatryan | Mathew Sheena, Bichenapally Sumahitha, Khachatryan Vahe |
| `mazzarelli-2021-16s-rrna-covid-19.md` | `10.1371/journal.pone.0247041` | Antonio Mazzarelli, Maria Letizia Giancola, Anna Farina | Mazzarelli Antonio, Giancola Maria Letizia, Farina Anna |
| `mcdew-white-2023-cannabinoids-microbiota-gut-brain-axis-hiv-siv.md` | `10.1186/s12974-023-02729-6` | Marina McDew-White, Eunhee Lee, Lakmini S. Premadasa | McDew-White Marina, Lee Eunhee, Premadasa Lakmini S. |
| `mcfarlane-2022-diet-quality-uraemic-toxins-microbiome-ckd.md` | `10.1053/j.jrn.2021.10.003` | C. McFarlane, R. Krishnasamy, T. Stanton | McFarlane Catherine, Krishnasamy Rathika, Stanton Tony |
| `mcginley-2021-diagnosis-treatment-ms-review.md` | `10.1001/jama.2020.26858` | Marisa P. McGinley, Carolyn H. Goldschmidt, Alexander D. Rae-Grant | McGinley Marisa P., Goldschmidt Carolyn H., Rae-Grant Alexander D. |
| `meli-2024-baby-food-chemical-characterization-italy.md` | `10.1371/journal.pone.0297158` | Maria Assunta Meli, Donatella Desideri, Davide Sisti | Meli Maria Assunta, Desideri Donatella, Sisti Davide |
| `meng-2025-oral-bacterial-fungal-microbiome-pancreatic-cancer-risk.md` | `10.1001/jamaoncol.2025.3377` | Yixuan Meng, Feng Wu, Soyoung Kwak | Meng Yixuan, Wu Feng, Kwak Soyoung |
| `mermans-2019-nsaids-gut-microbiome-chronic-inflammation.md` | `10.22190/FUMB201222013M` | Fabian Mermans, Evelien Heiremans, Maud Van Belleghem | Mermans Fabian, Heiremans Evelien, Van Belleghem Maud |
| `mestre-2019-gut-microbiota-manipulation-progressive-ms.md` | `10.3389/fimmu.2019.01374` | Leyre Mestre, Francisco Javier Carrillo-Salinas, Miriam Mecha | Mestre Leyre, Carrillo-Salinas Francisco Javier, Mecha Miriam |
| `mikhaylina-2018-bacterial-zinc-uptake-regulator-zur-regulons.md` | `10.1042/BST20170228` | Alevtina Mikhaylina, Amira Z. Ksibe, David J. Scanlan | Mikhaylina Alevtina, Ksibe Amira Z., Scanlan David J. |
| `mikhaylina-2022-single-sensor-zinc-quotas-cyanobacterium.md` | `10.1038/s41589-022-01051-1` | Alevtina Mikhaylina, Amira Z. Ksibe, Rachael C. Wilkinson | Mikhaylina Alevtina, Ksibe Amira Z., Wilkinson Rachael C. |
| `miranda-2022-metalloids-antibiotic-resistance-ckd-gut.md` | `10.1186/s40659-022-00389-z` | María V. Miranda, Fernanda C. González, Osvaldo S. Paredes-Godoy | Miranda María V., González Fernanda C., Paredes-Godoy Osvaldo S. |
| `mirmiran-2018-dietary-fibre-incident-ckd.md` | `10.1017/S0007114517003671` | Parvin Mirmiran, Emad Yuzbashian, Golaleh Asghari | Mirmiran Parvin, Yuzbashian Emad, Asghari Golaleh |
| `mirmiran-2021-polyphenol-intake-ckd-incidence.md` | `10.1186/s12882-021-02286-1` | Parvin Mirmiran, Emad Yuzbashian, Pegah Rahbarinejad | Mirmiran Parvin, Yuzbashian Emad, Rahbarinejad Pegah |
| `mitchell-2024-synbiotics-gdh-gi-behavior-anxiety-asd.md` | `10.1007/s10803-024-06588-9` | Leanne K. Mitchell, Helen S. Heussler, Christopher J. Burgess | Mitchell Leanne K., Heussler Helen S., Burgess Christopher J. |
| `miyake-2015-dysbiosis-ms-clostridia-depletion.md` | `10.1371/journal.pone.0137429` | Sachiko Miyake, Sangwan Kim, Wataru Suda | Miyake Sachiko, Kim Sangwan, Suda Wataru |
| `mizutani-2025-biliary-microbiome-16s-rrna-pdac-cca.md` | `10.1038/s41598-025-00976-6` | Hiroki Mizutani, Shunsuke Fukui, Kazuki Oosuka | Mizutani Hiroki, Fukui Shunsuke, Oosuka Kazuki |
| `mohamed-2023-nsaid-dysbiosis-autoimmune-liver-asd.md` | `10.3389/fncel.2023.1268126` | Doaa I. Mohamed, Hebatallah H. Abo Nahas, Asmaa M. Elshaer | Mohamed Doaa I., Abo Nahas Hebatallah H., Elshaer Asmaa M. |
| `mohammadi-2022-toxic-air-pollutants-ms-review.md` | `10.3389/fpubh.2022.898043` | Mohammad Javad Mohammadi, Kourosh Zarea, Nasser Hatamzadeh | Mohammadi Mohammad Javad, Zarea Kourosh, Hatamzadeh Nasser |
| `mohsen-2025-ms-gut-microbiome-immune-interaction.md` | `10.1007/s12035-025-04728-5` | Esraa Mohsen, Hesham Haffez, Sandra Ahmed | Mohsen Esraa, Haffez Hesham, Ahmed Sandra |
| `mok-2024-fungal-gut-pediatric-ms.md` | `10.3389/fmicb.2024.1258978` | Nelson Mok, Natalie C. Knox, Feng Zhu | Mok Nelson, Knox Natalie C., Zhu Feng |
| `montgomery-2024-microbiota-signatures-ms-progression.md` | `10.1038/s41598-024-64369-x` | Theresa L. Montgomery, Qin Wang, Ali Mirza | Montgomery Theresa L., Wang Qin, Mirza Ali |
| `morse-2023-virus-induced-dysbiosis-t1d-onset.md` | `10.3389/fimmu.2023.1096323` | Zachary J. Morse, Rachel L. Simister, Sean A. Crowe | Morse Zachary J., Simister Rachel L., Crowe Sean A. |
| `morse-2023-virus-induced-dysbiosis-t1d.md` | `10.3389/fimmu.2023.1096323` | Zachary S. Morse, Rachel H. Bonami | Morse Zachary J., Simister Rachel L., Crowe Sean A. |
| `morshedi-2019-probiotics-ms-immunomodulation-systematic-review.md` | `10.1186/s12974-019-1611-4` | Mohammad Morshedi, Reza Hashemi, Sara Moazzen | Morshedi Mohammad, Hashemi Reza, Moazzen Sara |
| `motlagh-asghari-2023-saccharomyces-boulardii-ms-rct.md` | `10.1038/s41598-023-46047-6` | Kimia Motlagh Asghari, Neda Dolatkhah, Hormoz Ayromlou | Asghari Kimia Motlagh, Dolatkhah Neda, Ayromlou Hormoz |
| `naaz-2022-fennel-oil-antimicrobial-antioxidant.md` | `10.6026/97320630018795` | Sheeba Naaz, Nadeem Ahmad, M. Irfan Qureshi | , Naaz Sheeba |
| `nakamura-2009-indole-3-carbinol-genistein-colon-cancer-apoptosis.md` | `10.1186/1476-4598-8-100` | Yoshitaka Nakamura, Shingo Yogosawa, Yasuyuki Izutani | Nakamura Yoshitaka, Yogosawa Shingo, Izutani Yasuyuki |
| `nakamura-2019-physical-activity-pregnancy-ppd-meta-analysis.md` | `10.1016/j.jad.2018.12.009` | Aurelie Nakamura, Judith van der Waerden, Maria Melchior | Nakamura Aurélie, van der Waerden Judith, Melchior Maria |
| `nannan-2025-probiotics-rabeprazole-gut-microbiota-gerd.md` | `10.18549/PharmPract.2025.4.3225` | Nannan Y, Xuan Z, Lihong S | Yin Nannan, Zhao Xuan, shi Lihong |
| `natowicz-2024-postmortem-brain-tissue-autism-science.md` | `10.3389/fneur.2024.1486227` | Marvin R. Natowicz, Margaret L. Bauman, Stephen M. Edelson | Natowicz Marvin R., Bauman Margaret L., Edelson Stephen M. |
| `navaretnam-2025-arsenic-speciation-rice-hplc-icpms.md` | `10.1007/s10653-025-02723-2` | Raneesha Navaretnam, Ahmad Zaharin Aris, Muhammad Faizan A. Shukor | Navaretnam Raneesha, Aris Ahmad Zaharin, Shukor Muhammad Faizan A. |
| `neville-2020-cadmium-carbon-flux-membrane-pneumococcus.md` | `10.1038/s42003-020-01417-y` | Stephanie L. Neville, Jacqueline R. Morey, Erin B. Gillen | Neville Stephanie L., Eijkelkamp Bart A., Lothian Amber |
| `newell-2016-ketogenic-diet-microbiota-btbr-mouse-asd.md` | `10.1186/s13229-016-0099-3` | Christopher Newell, Marc R. Bomhof, Raylene A. Reimer | Newell Christopher, Bomhof Marc R., Reimer Raylene A. |
| `ni-2022-gut-microbiota-psychiatric-disorders-mr.md` | `10.3389/fmicb.2021.737197` | Jing-Jing Ni, Qian Xu, Shan-Shan Yan | Ni Jing-Jing, Xu Qian, Yan Shan-Shan |
| `niesler-2025-synbiotics-parkinsons-clinical-trial.md` | `10.1007/s10787-025-01752-8` | Beate Niesler, Stefanie Fritsch, Daniela Berg | Ramadan Mohamed E., Mostafa Tarek M., Ghali Azza A. |
| `nishiwaki-2024-meta-analysis-shotgun-parkinsons-riboflavin-biotin.md` | `10.1038/s41531-024-00724-z` | Hiroshi Nishiwaki, Jun Ueyama, Mikako Ito | Nishiwaki Hiroshi, Ueyama Jun, Ito Mikako |
| `nkondjock-2005-fatty-acids-pancreatic-cancer-risk.md` | `10.1038/sj.bjc.6602380` | A. Nkondjock, D. Krewski, KC Johnson | , Nkondjock A, Krewski D |
| `noga-2012-csf-metabolomics-eae-rat-model.md` | `10.1007/s11306-011-0306-3` | Marek J. Noga, Adrie Dane, Shanna Shi | Noga Marek J., Dane Adrie, Shi Shanna |
| `ocal-2025-gut-brain-axis-pancreatic-cystic-neoplasms.md` | `10.12669/pjms.41.12.12010` | Ibrahim Halil Ocal, Omer Basol, Abdullah Oguz | Öcal İbrahim Halil, Başol Ömer, Oğuz Abdullah |
| `ochoa-reparaz-2018-gut-microbiome-ms.md` | `10.1101/cshperspect.a029017` | Javier Ochoa-Reparaz, Trevor O. Kirby, Lloyd H. Kasper | Ochoa-Repáraz Javier, Kirby Trevor O., Kasper Lloyd H. |
| `ogundare-2024-metals-behavioral-depression-women.md` | `10.3390/toxics12120879` | Olamide Ogundare, Emmanuel Obeng-Gyasi | Ogundare Olamide, Obeng-Gyasi Emmanuel |
| `ogundare-2024-metals-behavioral-factors-depression-women.md` | `10.3390/toxics12120879` | Olamide Ogundare, Emmanuel Obeng-Gyasi | Ogundare Olamide, Obeng-Gyasi Emmanuel |
| `oliveras-2022-circulating-virome-stemi-pvf.md` | `10.1038/s41598-022-12075-x` | Teresa Oliveras, Elena Revuelta-Lopez, Cosme Garcia-Garcia | Oliveras Teresa, Revuelta-López Elena, García-García Cosme |
| `olsson-2021-serum-scfas-inflammation-newly-diagnosed-ms.md` | `10.3389/fimmu.2021.661493` | Anna Olsson, Stefan Gustavsen, Thao Duy Nguyen | Olsson Anna, Gustavsen Stefan, Nguyen Thao Duy |
| `orozco-2019-metabolomics-autism-developmental-delays-down-syndrome.md` | `10.1038/s41398-019-0578-3` | Jennie Sotelo Orozco, Irva Hertz-Picciotto, Leonard Abbeduto | Orozco Jennie Sotelo, Hertz-Picciotto Irva, Abbeduto Leonard |
| `osman-2017-fine-control-metal-zinc-cobalt.md` | `10.1038/s41467-017-02085-z` | Deenah Osman, Andrew W. Foster, Junjun Chen | Osman Deenah, Foster Andrew W., Chen Junjun |
| `ostrowski-2024-asd-etiology-epidemiology.md` | `10.12659/MSM.944161` | Janusz Ostrowski, Urszula Religioni, Beata Gellert | Ostrowski Janusz, Religioni Urszula, Gellert Beata |
| `otaegui-chivite-2025-mycobiota-ms-progression.md` | `10.3389/fimmu.2025.1625794` | Ane Otaegui-Chivite, Miriam Gorostidi-Aicua, Laura Martins-Almeida | Otaegui-Chivite Ane, Gorostidi-Aicua Miriam, Martins-Almeida Laura |
| `ozler-2025-nutritional-approaches-asd-scoping-review.md` | `10.1007/s13668-025-00655-y` | Ebru Ozler, Nevin Sanlier | Ozler Ebru, Sanlier Nevin |
| `padakandla-2022-gut-mycobiome-dysbiosis-rats-diabetic-retinopathy.md` | `10.1371/journal.pone.0267080` | Shalem Raj Padakandla, Taraprasad Das, Gumpili Sai Prashanthi | Padakandla Shalem Raj, Das Taraprasad, Sai Prashanthi Gumpili |
| `paeslack-2022-tryptophan-metabolites-vascular-inflammation-cvd.md` | `10.1007/s00726-022-03161-5` | Nadja Paeslack, Maximilian Mimmler, Stefanie Becker | Paeslack Nadja, Mimmler Maximilian, Becker Stefanie |
| `palkova-2021-16s-primer-sets-asd-microbiota.md` | `10.1038/s41598-021-86378-w` | L. Palkova, A. Tomova, G. Repiska | Palkova L., Tomova A., Repiska G. |
| `pan-2025-microbiome-targeted-treatment-depression-meta-analysis.md` | `10.1186/s12888-024-06438-z` | Bo Pan, Yiming Pan, Yu-Song Huang | Pan Bo, Pan Yiming, Huang Yu-Song |
| `panebianco-2023-gemcitabine-probiotics-pancreatic-cancer-dysbiosis.md` | `10.1038/s41420-023-01397-y` | Concetta Panebianco, Federica Pisati, Annacandida Villani | Panebianco Concetta, Pisati Federica, Villani Annacandida |
| `papadopoulou-2019-serum-metabolomic-profile-ppd.md` | `10.3389/fnins.2019.00833` | Zoe Papadopoulou, Angeliki-Maria Vlaikou, Daniela Theodoridou | Papadopoulou Zoe, Vlaikou Angeliki-Maria, Theodoridou Daniela |
| `papadopoulou-2019-serum-metabolomic.md` | `10.3389/fnins.2019.00833` | Zoe Papadopoulou, Angeliki-Maria Vlaikou, Daniela Theodoridou | Papadopoulou Zoe, Vlaikou Angeliki-Maria, Theodoridou Daniela |
| `parkhill-2024-bacterial-genetics-chemical-biology-drug-discovery.md` | `10.1042/BCJ20220062` | Susannah L. Parkhill, Eachan O. Johnson | Parkhill Susannah L., Johnson Eachan O. |
| `parodi-2021-gut-brain-axis-ms-trigger-or-consequence.md` | `10.3389/fimmu.2021.718220` | Benedetta Parodi, Nicole Kerlero de Rosbo | Parodi Benedetta, Kerlero de Rosbo Nicole |
| `patil-2021-infection-metallomics-covid-era.md` | `10.1002/mas.21755` | Patil, A., Gholap | Patil Rutuja H., Luptáková Dominika, Havlíček Vladimír |
| `patil-2021-infection-metallomics-critical-care.md` | `10.1002/mas.21755` | Patil RH, Luptakova D, Havlicek V | Patil Rutuja H., Luptáková Dominika, Havlíček Vladimír |
| `patrono-2021-schizophrenia-gut-microbiota-optogenetics-nmda-gaba.md` | `10.1186/s12993-021-00180-2` | Patrono E, Svoboda J, Bhatt DK | Patrono Enrico, Svoboda Jan, Stuchlík Aleš |
| `paul-2019-biomarkers-ms.md` | `10.1101/cshperspect.a029058` | Anu Paul, Manuel Comabella, Roopali Gandhi | Paul Anu, Comabella Manuel, Gandhi Roopali |
| `peng-2022-scfas-schizophrenia-ultra-high-risk.md` | `10.3389/fpsyt.2022.977538` | Huiqing Peng, Lijun Ouyang, David Li | Peng Huiqing, Ouyang Lijun, Li David |
| `peng-2024-supplements-hashimotos-network-meta-analysis.md` | `10.3389/fendo.2024.1445878` | Bingcong Peng, Weiwei Wang, Qingling Gu | Peng Bingcong, Wang Weiwei, Gu Qingling |
| `pennisi-2016-autism-social-robotics-systematic-review.md` | `10.1002/aur.1527` | Paola Pennisi, Alessandro Tonacci, Gennaro Tartarisco | Pennisi Paola, Tonacci Alessandro, Tartarisco Gennaro |
| `peralta-marzal-2024-robust-microbiome-signature-asd-machine-learning.md` | `10.1038/s41598-023-50601-7` | Lucia N. Peralta-Marzal, David Rojas-Velazquez, Douwe Rigters | Peralta-Marzal Lucia N., Rojas-Velazquez David, Rigters Douwe |
| `perumal-2023-long-covid-review-visualization.md` | `10.3389/fimmu.2023.1117464` | Rubeshan Perumal, Letitia Shunmugam, Kogieleum Naidoo | Perumal Rubeshan, Shunmugam Letitia, Naidoo Kogieleum |
| `phillippi-2022-diesel-exhaust-microbiome-cvd-biomarkers.md` | `10.1186/s12989-022-00452-3` | Danielle T. Phillippi, Sarah Daniel, Vaidehi Pusadkar | Phillippi Danielle T., Daniel Sarah, Pusadkar Vaidehi |
| `phuah-2026-microbial-tryptophan-indole-glp1-glucose-homeostasis.md` | `10.1007/s00125-026-06688-4` | Phyllis Phuah, Mariana Norton, Sijing Cheng | Phuah Phyllis, Norton Mariana, Cheng Sijing |
| `plummer-2023-gut-brain-pathogenesis-post-acute-covid-neurocognitive.md` | `10.3389/fnins.2023.1232480` | Allison M. Plummer, Yvette L. Matos, Henry C. Lin | Plummer Allison M., Matos Yvette L., Lin Henry C. |
| `poisson-2015-metabolomic-platinum-resistance-ovarian-cancer.md` | `10.1186/s13048-015-0140-8` | Lori M. Poisson, Adnan Munkarah, Hala Madi | Poisson Laila M, Munkarah Adnan, Madi Hala |
| `poulsen-2024-gut-bacterial-viral-microbiota-lada.md` | `10.1038/s41598-024-58985-w` | Casper S. Poulsen, Dan Hesse, Gabriel R. Fernandes | Poulsen Casper S., Hesse Dan, Fernandes Gabriel R. |
| `pourali-2024-microbiome-biomarker-therapeutic-target-pancreatic-cancer.md` | `10.1186/s12866-023-03166-4` | Ghazaleh Pourali, Danial Kazemi, Amir Shayan Chadeganipour | Pourali Ghazaleh, Kazemi Danial, Chadeganipour Amir Shayan |
| `pourmirzaiee-2024-postpartum-depression-magnesium-infant-development.md` | `10.4103/ijpvm.ijpvm_30_24` | Mohammad A. Pourmirzaiee, Seyede S. Daniali, Roya Riahi | Pourmirzaiee Mohammad A., Daniali Seyede S., Riahi Roya |
| `pulikkan-2018-gut-microbial-dysbiosis-indian-children-asd.md` | `10.1007/s00248-018-1176-2` | Joby Pulikkan, Abhijit Maji, Darshan Bharat Dhakan | Pulikkan Joby, Maji Abhijit, Dhakan Darshan Bharat |
| `purcell-2017-gut-microbiome-consensus-molecular-subtypes-crc.md` | `10.1038/s41598-017-11237-6` | Rachel V. Purcell, Martina Visnovska, Patrick J. Biggs | Purcell Rachel V., Visnovska Martina, Biggs Patrick J. |
| `pushpakumara-2025-lack-viral-etiology-ckdu-sri-lanka.md` | `10.1186/s12882-025-04527-z` | Nilantha Pushpakumara, Paul Freund, Shakila Premarathne | Pushpakumara Nilantha, Freund Paul, Premarathne Shakila |
| `qin-2024-consistent-microbiome-signatures-old-young-onset-crc.md` | `10.1038/s41467-024-47523-x` | Youwen Qin, Xin Tong, Wei-Jian Mei | Qin Youwen, Tong Xin, Mei Wei-Jian |
| `qing-2021-salivary-microbiome-dysbiotic-schizophrenia.md` | `10.1038/s41537-021-00180-1` | Ying Qing, Lihua Xu, Ganqing Cui | Qing Ying, Xu Lihua, Cui Gaoping |
| `qiu-2023-gut-mycobiome-hypertension-ckd.md` | `10.3389/fimmu.2023.1317809` | Juan Qiu, Longyou Zhao, Yiwen Cheng | Qiu Juan, Zhao Longyou, Cheng Yiwen |
| `qu-2025-gut-microbiome-ovarian-cysts-mr.md` | `10.1186/s13048-025-01767-3` | Jing Qu, Li Zhang | Qu Jiahui, Zhang Liying |
| `racette-2017-manganese-parkinsonism-welders.md` | `10.1212/WNL.0000000000003533` | Brad A. Racette, Susan Searles Nielsen, Susan R. Criswell | Racette Brad A., Searles Nielsen Susan, Criswell Susan R. |
| `radojevic-2023-microbiome-gut-brain-axis-ms.md` | `10.5937/arhfarm73-46986` | Dusan Radojevic, Svetlana Sokovic Bajic, Miroslav Dinic | Radojević Dušan, Soković-Bajić Svetlana, Dinić Miroslav |
| `rahim-2023-probiotics-prebiotics-synbiotics-asd-meta-analysis.md` | `10.3389/fnut.2023.1294089` | Fakher Rahim, Karlygash Toguzbaeva, Nameer Hashim Qasim | Rahim Fakher, Toguzbaeva Karlygash, Qasim Nameer Hashim |
| `rahman-2022-gut-microbiota-cvd-therapeutic-regulation.md` | `10.3389/fcimb.2022.903570` | Md. Mominur Rahman, Fahadul Islam, Md. Harun-Or-Rashid | Rahman Md. Mominur, Islam Fahadul, -Or-Rashid Md. Harun |
| `rahman-2024-nigella-sativa-thymoquinone-thymol-antimicrobial.md` | `10.1186/s12906-024-04470-w` | Anees Ur Rahman, Abdullah Abdullah, Shah Faisal | Rahman Anees Ur, Abdullah Abdullah, Faisal Shah |
| `rai-2024-gut-microbiota-brain-axis-ppd-review.md` | `10.5005/jp-journals-10006-2411` | Srinidhi Rai, Priya Alva, Sriram Naresh | Naresh Sriram, Alva Priya, Rai Srinidhi |
| `rani-2016-diverse-virome-kidney-transplant-patients.md` | `10.1038/srep33327` | Asha Rani, Ravi Ranjan, Halvor S. McGee | Rani Asha, Ranjan Ravi, McGee Halvor S. |
| `rappaport-2018-exposome-environmental-exposure-disease.md` | `10.1038/s41540-018-0065-0` | Stephen M. Rappaport | Rappaport Stephen M. |
| `rasmussen-2023-endocrine-disease-history-ppd-risk.md` | `10.1192/bjp.2022.173` | Marie-Louise H. Rasmussen, Gry J. Poulsen, Poul Videbech | Rasmussen Marie-Louise H., Poulsen Gry J., Videbech Poul |
| `razavi-2019-sex-gut-microbiome-cvd-risk.md` | `10.1186/s13293-019-0240-z` | Alexander C. Razavi, Kaitlin S. Potts, Tanika N. Kelly | Razavi Alexander C., Potts Kaitlin S., Kelly Tanika N. |
| `reens-2021-immunomodulation-microbiome-checkpoint-inhibitors.md` | `10.3389/fimmu.2021.643255` | Abigail L Reens, Damien J Cabral, Xue Liang | Reens Abigail L., Cabral Damien J., Liang Xue |
| `rego-2024-impact-gut-microbiota-long-covid-insights-challenges.md` | `10.20398/jscr.v15i1.35365` | Amália Cinthia Meneses do Rêgo, Irami Araújo-Filho | Araujo-Filho Irami, Meneses do Rêgo Amália Cinthia |
| `reid-2017-epidemiology-ovarian-cancer-review.md` | `10.20892/j.issn.2095-3941.2016.0084` | Reid BM, Permuth JB, Sellers TA | Brett M. Reid, Brett M. Reid, Jennifer B. Permuth |
| `ren-2023-genetic-evidence-gut-microbiota-ckd-inflammation.md` | `10.3389/fimmu.2023.1287698` | Feihong Ren, Qiubai Jin, Qi Jin | Ren Feihong, Jin Qiubai, Jin Qi |
| `ren-2024-altered-gut-mycobiome-esrd-metabolomes.md` | `10.1186/s12967-024-05004-1` | Yi Ren, Lei Chen, Ruochun Guo | Ren Yi, Chen Lei, Guo Ruochun |
| `ren-2025-gut-virome-schizophrenia-metagenome.md` | `10.1186/s12967-025-06923-3` | Yi Ren, Pan Zhang, Hailong Yu | Ren Yi, Zhang Pan, Yu Hailong |
| `rezazadegan-2025-heavy-metals-gut-microbiota-systematic-review-nutritional.md` | `10.1186/s41043-025-00750-4` | Mahsa Rezazadegan, Bita Forootani, Yeganeh Hoveyda | Rezazadegan Mahsa, Forootani Bita, Hoveyda Yeganeh |
| `rezen-2022-bile-acids-carcinogenesis-review.md` | `10.1007/s00018-022-04278-2` | Rezen T, Rozman D, Kovacs T | Režen Tadeja, Rozman Damjana, Kovács Tünde |
| `rho-2025-heavy-metals-kidney-function-paradoxical.md` | `10.3390/diagnostics15010086` | Jee Hyun Rho, Seungho Lee, Jung-Yeon Kwon | Rho Jee Hyun, Lee Seungho, Kwon Jung-Yeon |
| `roelands-2023-integrated-tumor-immune-microbiome-atlas-colon-cancer.md` | `10.1038/s41591-023-02324-5` | Jessica Roelands, Peter J. K. Kuppen, Eiman I. Ahmed | Roelands Jessica, Kuppen Peter J. K., Ahmed Eiman I. |
| `rogers-2016-gut-dysbiosis-altered-brain-function-mental-illness.md` | `10.1038/mp.2016.50` | GB Rogers, DJ Keating, RL Young | Rogers G B, Keating D J, Young R L |
| `romagnani-2017-chronic-kidney-disease-primer.md` | `10.1038/nrdp.2017.88` | Paola Romagnani, Giuseppe Remuzzi, Richard Glassock | Romagnani Paola, Remuzzi Giuseppe, Glassock Richard |
| `romano-2021-meta-analysis-gut-microbiome-parkinsons.md` | `10.1038/s41531-021-00156-z` | Stefano Romano, George M Savva, Janis R Bedarf | Romano Stefano, Savva George M., Bedarf Janis R. |
| `romano-2023-gut-microbiome-children-mental-health-umbrella-review.md` | `10.1017/gmb.2023.16` | Kaitlin Romano, Ashka N. Shah, Anett Schumacher | Romano Kaitlin, Shah Ashka N., Schumacher Anett |
| `romero-espejel-2013-streptococcus-pneumoniae-iron.md` | `10.1039/c3mt20244e` | Maria Elena Romero-Espejel, Marco A. Gonzalez-Lopez, Jose de Jesus Olivares-Trejo | Romero-Espejel María Elena, González-López Marco A., de Jesús Olivares-Trejo José |
| `rostkowska-2019-phage-therapy-kidney-transplant-uti.md` | `10.21203/rs.2.19685/v1` | Olga Maria Rostkowska, Ryszard Miedzybrodzki, Dorota Miszewska-Szyszkowska | Rostkowska Olga Maria, Międzybrodzki Ryszard, Miszewska-Szyszkowska Dorota |
| `rowe-2024-bile-acid-dysmetabolism-feline-ckd.md` | `10.3389/fmicb.2024.1458090` | John C. Rowe, Stacie C. Summers, Jessica M. Quimby | Rowe John C., Summers Stacie C., Quimby Jessica M. |
| `ruotsalainen-2022-child-t1d-mother-vaginal-bacteriome-mycobiome.md` | `10.1007/s00430-022-00741-w` | A. L. Ruotsalainen, M. V. Tejesvi, P. Vanni | Ruotsalainen A. L., Tejesvi M. V., Vänni P. |
| `russo-2011-copper-zinc-autism-gi-disease.md` | `10.4137/NMI.S6827` | Anthony J. Russo | Russo Anthony J. |
| `ryan-2017-bile-acids-gut-microbiome-cardiometabolic-interactions.md` | `10.1186/s13098-017-0299-9` | Paul M. Ryan, Catherine Stanton, Noel M. Caplice | Ryan Paul M., Stanton Catherine, Caplice Noel M. |
| `ryan-2017-microbiome-metabolome-cvd-interventions-apoe-mice.md` | `10.1186/s40168-017-0246-x` | Paul M. Ryan, Lis E. E. London, Trent C. Bjorndahl | Ryan Paul M., London Lis E. E., Bjorndahl Trent C. |
| `sabeel-2025-microbiome-targeted-nanoplatforms-breast-cancer.md` | `10.1186/s12943-025-02456-x` | Zufa Sabeel, Zhao Yang | Sabeel Zufa, Yang Zhao |
| `safadi-2021-gut-dysbiosis-severe-mental-illness-meta-analysis.md` | `10.1038/s41380-021-01032-1` | Jenelle Marcelle Safadi, Alice M G Quinton, Belinda R Lennox | Safadi Jenelle Marcelle, Quinton Alice M. G., Lennox Belinda R. |
| `saito-2019-synbiotics-colitis-tumorigenesis-colon-cancer-mouse.md` | `10.1371/journal.pone.0216393` | Yasufumi Saito, Takao Hinoi, Tomohiro Adachi | Saito Yasufumi, Hinoi Takao, Adachi Tomohiro |
| `saito-2024-metabolomic-immune-alterations-long-covid-cfs.md` | `10.3389/fimmu.2024.1341843` | Suguru Saito, Shima Shahbaz, Xian Luo | Saito Suguru, Shahbaz Shima, Luo Xian |
| `salamon-2018-gut-microbiota-t1d-t2d-16s-rrna-sequencing.md` | `10.20452/pamw.4246` | Dominika Salamon, Agnieszka Sroka-Oleksiak, Przemyslaw Kapusta | Salamon Dominika, Sroka-Oleksiak Agnieszka, Kapusta Przemysław |
| `salamone-2021-gut-microbiota-scfa-t2d-dietary-fibre.md` | `10.1007/s00592-021-01727-5` | Dominic Salamone, Angela Albarosa Rivellese, Claudia Vetrani | Salamone Dominic, Rivellese Angela Albarosa, Vetrani Claudia |
| `saleh-2020-serum-trace-elements-prostate-cancer.md` | `10.1159/000499261` | Saleh A. K. Saleh, Heba M. Adly, Altaf A. Abdelkhaliq | Saleh Saleh A.K., Adly Heba M., Abdelkhaliq Altaf A. |
| `salem-2023-syzygium-essential-oil-oral-pathogens.md` | `10.1186/s12906-023-04277-1` | Sahar S. Salem, Heba E. Elsayed, Samah Shabana | Salem Sahar S., Elsayed Heba E., Shabana Samah |
| `salnikov-2008-metal-carcinogenesis.md` | `10.1021/tx700198a` | Konstantin Salnikov, Anatoly Zhitkovich | Salnikow Konstantin, Zhitkovich Anatoly |
| `sambruni-2023-colon-cancer-microbiome-rna-seq-reconstruction.md` | `10.1186/s13073-023-01180-9` | Gaia Sambruni, Angeli D. Macandog, Jakob Wirbel | Sambruni Gaia, Macandog Angeli D., Wirbel Jakob |
| `sampson-2020-microbiome-immune-function-parkinsons-functional.md` | `10.1016/j.cell.2016.11.018` | Timothy R Sampson, Justine W Debelius, Taren Thron | Sampson Timothy R., Debelius Justine W., Thron Taren |
| `sanchez-cruz-2024-ibd-cvd-integrative-review-gut-microbiome.md` | `10.7759/cureus.65136` | Camila Sanchez Cruz, Anahi Rojas Huerta, Jesus Lima Barrientos | Sanchez Cruz Camila, Rojas Huerta Anahi, Lima Barrientos Jesus |
| `santocchi-2016-gut-brain-probiotics-rct-protocol-asd.md` | `10.1186/s12888-016-0887-5` | Elisa Santocchi, Letizia Guiducci, Francesca Fulceri | Santocchi Elisa, Guiducci Letizia, Fulceri Francesca |
| `sarasa-buisan-2024-ancient-zinc-acquisition-cyanobacterial-exoproteome.md` | `10.1371/journal.pbio.3002546` | Cristina Sarasa-Buisan, Jesus A G Ochoa de Alda, Cristina Velazquez-Suarez | Sarasa-Buisan Cristina, Ochoa de Alda Jesús A. G., Velázquez-Suárez Cristina |
| `sarenac-2019-bile-acids-cervical-cancer-treatment.md` | `10.3389/fphar.2019.00484` | Tijana Sarenac, Momir Mikov | Šarenac Tanja, Mikov Momir |
| `saresella-2017-diet-microbiome-immunology-ms.md` | `10.3389/fimmu.2017.01391` | Marina Saresella, Laura Mendozzi, Valentina Rossi | Saresella Marina, Mendozzi Laura, Rossi Valentina |
| `saresella-2020-fatty-acids-dysbiosis-inflammation-ms.md` | `10.3389/fimmu.2020.01390` | Marina Saresella, Ivana Marventano, Monica Barone | Saresella Marina, Marventano Ivana, Barone Monica |
| `sealey-2016-environmental-factors-development-asd.md` | `10.1016/j.envint.2015.12.021` | L. A. Sealey, B. W. Hughes, A. N. Sriskanda | Sealey L.A., Hughes B.W., Sriskanda A.N. |
| `serrano-tomas-2025-p-cresol-asd-meta-analysis.md` | `10.3389/fnmol.2025.1576388` | Maria Isabel Serrano-Tomas, Paulina Contreras-Romero, Mara Parellada | Serrano-Tomás María Isabel, Contreras-Romero Paulina, Parellada Mara |
| `severance-2016-candida-albicans-exposures-sex-specificity-schizophrenia-bipolar.md` | `10.1038/npjschz.2016.18` | Emily G. Severance, Kristin L. Gressitt, Catherine R. Stallings | Severance Emily G, Gressitt Kristin L, Stallings Catherine R |
| `shahin-2023-gut-phageome-asd-metagenomics.md` | `10.1186/s13099-023-00561-0` | Khashayar Shahin, Abbas Soleimani-Delfan, Zihan He | Shahin Khashayar, Soleimani-Delfan Abbas, He Zihan |
| `shang-2025-natural-products-tcm-ppd-mechanisms.md` | `10.3389/fphar.2025.1686499` | Ruirui Shang, Yitong Lu, Haonan Gao | Shang Ruirui, Lu Yitong, Gao Haonan |
| `sharifa-2023-gut-brain-axis-ms-dysbiosis-oxidative-stress.md` | `10.7759/cureus.47058` | Mouhammad Sharifa, Tanmay Ghosh, Omar A. Daher | Sharifa Mouhammad, Ghosh Tanmay, Daher Omar A |
| `sherman-2022-carbon-monoxide-autoimmunity-probiotics-asd.md` | `10.1186/s12888-022-04151-3` | Hannah Tayla Sherman, Kevin Liu, Kenneth Kwong | Sherman Hannah Tayla, Liu Kevin, Kwong Kenneth |
| `shi-2023-ppi-fungal-dysbiosis-gerd.md` | `10.3389/fcimb.2023.1205348` | Yichao Shi, Jianfeng Li, Shuntian Cai | Shi Yichao, Li Jianfeng, Cai Shuntian |
| `shin-2023-chromium-toxicogenomics.md` | `10.3390/ijms24043410` | Dong Yeop Shin, Sang Min Lee, Yujin Jang | Shin Dong Yeop, Lee Sang Min, Jang Yujin |
| `shirdarreh-2021-ketogenic-diet-crc-microbiota-protocol.md` | `10.26685/urncst.223` | Melika Shirdarreh, Yasamin Sadeghi, Tina Rahimi | Shirdarreh Melika, Sadeghi Yasamin, Rahimi Tina |
| `shivashankara-2010-dietary-polyphenols-bioavailability-cvd.md` | `10.2174/1876396001003010227` | K. S. Shivashankara, S. N. Acharya | Shivashankara K. S., Acharya S. N. |
| `shternshis-2025-predicting-allergy-ppd-compositional-microbiome.md` | `10.1186/s12864-025-12390-3` | Andrey Shternshis, Bangzhuo Tong, Alkistis Skalkidou | Shternshis Andrey, Tong Bangzhuo, Skalkidou Alkistis |
| `shu-2024-cinnamon-essential-oil-cinnamaldehyde-antibacterial.md` | `10.3389/fphar.2024.1378434` | Chengjie Shu, Ling Ge, Li Zi | Shu Chengjie, Ge Ling, Li Zhuohang |
| `signes-pastor-2018-infant-arsenic-weaning-solid-food.md` | `10.1038/s41598-018-25372-1` | Antonio J. Signes-Pastor, Kathryn L. Cottingham, Manus Carey | Signes-Pastor Antonio J., Cottingham Kathryn L., Carey Manus |
| `silva-fernandes-2024-inflammatory-biomarkers-perinatal-depression.md` | `10.1371/journal.pone.0280612` | Anabela Silva-Fernandes, Ana Conde, Margarida Marques | Silva-Fernandes Anabela, Conde Ana, Marques Margarida |
| `singh-2024-gut-brain-axis-cvd-review.md` | `10.7759/cureus.70877` | Akhilesh Singh, Prem S. Kishore, Sharleen Khan | Singh Akhilesh, Kishore Prem S, Khan Sharleen |
| `singh-2024-microbes-myocardium-gut-brain-axis-cvd.md` | `10.7759/cureus.70877` | Akhilesh Singh, Prem S. Kishore, Sharleen Khan | Singh Akhilesh, Kishore Prem S, Khan Sharleen |
| `sjostedt-2021-ssri-gut-microbiome-serotonin.md` | `10.3389/fpsyt.2021.682868` | Peter Sjostedt, Jesper Enander, Josef Isung | Sjöstedt Peter, Enander Jesper, Isung Josef |
| `smovrsnik-2025-trace-elements-pcos-case-control.md` | `10.3390/metabo15020079` | Tinkara Smovršnik, Bojana Pinter, Milena Horvat | Srnovršnik Tinkara, Pinter Bojana, Horvat Milena |
| `sobhani-2011-microbial-dysbiosis-colorectal-cancer.md` | `10.1371/journal.pone.0016393` | Iradj Sobhani, Julien Tap, Francoise Roudot-Thoraval | Sobhani Iradj, Tap Julien, Roudot-Thoraval Françoise |
| `song-2022-prebiotics-probiotics-asd-meta-analysis-rcts.md` | `10.1099/jmm.0.001510` | Wenjing Song, Mei Zhang, Lili Teng | Song Wenjing, Zhang Mei, Teng Lili |
| `song-2023-anti-pdl1-estradiol-mc38-colon-microbiome.md` | `10.4143/crt.2022.1427` | Chin-Hee Song, Nayoung Kim, Ryoung Hee Nam | Song Chin-Hee, Kim Nayoung, Nam Ryoung Hee |
| `song-2024-brain-glutathione-gaba-autistic-children.md` | `10.1002/aur.3097` | Yulu Song, Kathleen E. Hupfeld, Christopher W. Davies-Jenkins | Song Yulu, Hupfeld Kathleen E., Davies‐Jenkins Christopher W. |
| `song-2025-targeting-tumor-associated-microbiome-editorial.md` | `10.1016/j.addr.2025.115554` | Wantong Song, Leaf Huang | Song Wantong, Huang Leaf |
| `soria-castro-2022-valproic-acid-mast-cells-listeria.md` | `10.1038/s41598-022-20054-5` | Rodolfo Soria-Castro, Yatsiri G. Meneses-Preza, Gloria M. Rodriguez-Lopez | Soria-Castro Rodolfo, Meneses-Preza Yatsiri G., Rodríguez-López Gloria M. |
| `sospedra-2005-immunology-ms-review.md` | `10.1146/annurev.immunol.23.021704.115707` | Mireia Sospedra, Roland Martin | Sospedra Mireia, Martin Roland |
| `sowa-2012-physical-exercise-asd-meta-analysis.md` | `10.1016/j.rasd.2011.09.001` | Michelle Sowa, Ruud Meulenbroek | Sowa Michelle, Meulenbroek Ruud |
| `spaggiari-2017-probiotics-hypothyroid-levothyroxine-rct.md` | `10.3389/fendo.2017.00316` | Giorgia Spaggiari, Giulia Brigante, Sara De Vincentis | Spaggiari Giorgia, Brigante Giulia, De Vincentis Sara |
| `speeckaert-2025-gut-feelings-microbiota-kidney-disease-editorial.md` | `10.3389/fimmu.2025.1579198` | Marijn M. Speeckaert, Laureline Berthelot | Speeckaert Marijn M., Berthelot Laureline |
| `spencer-2018-vascular-pathology-ms-blood-brain-barrier.md` | `10.1136/jnnp-2017-316011` | Jonathan I. Spencer, Jack S. Bell, Gabriele C. DeLuca | Spencer Jonathan I, Bell Jack S, DeLuca Gabriele C |
| `spivak-2022-local-systemic-effects-microbiome-derived-metabolites.md` | `10.15252/embr.202255664` | Igor Spivak, Leviel Fluhr, Eran Elinav | Spivak Igor, Fluhr Leviel, Elinav Eran |
| `spivak-2023-local-systemic-microbiome-derived-metabolites.md` | `10.15252/embr.202255664` | Igor Spivak, Leviel Fluhr, Eran Elinav | Spivak Igor, Fluhr Leviel, Elinav Eran |
| `stagaman-2024-oral-gut-microbiome-profiles-early-parkinsons.md` | `10.1038/s43856-024-00630-8` | Keaton Stagaman, Matthew J Kmiecik, Madeleine Wetzel | Stagaman Keaton, Kmiecik Matthew J., Wetzel Madeleine |
| `stamoula-2021-antidepressants-ms-review.md` | `10.3389/fimmu.2021.677879` | Eleni Stamoula, Spyridon Siafis, Ioannis Dardalas | Stamoula Eleni, Siafis Spyridon, Dardalas Ioannis |
| `stavropoulou-2021-microbiome-immunosenescence-ckd.md` | `10.3389/fmed.2021.661203` | Elisavet Stavropoulou, Konstantina Kantartzi, Christina Tsigalou | Stavropoulou Elisavet, Kantartzi Konstantia, Tsigalou Christina |
| `stocken-2005-adjuvant-therapy-pancreatic-cancer-meta-analysis.md` | `10.1038/sj.bjc.6602513` | D.D. Stocken, M.W. Buchler, C. Dervenis | , Stocken D D, Büchler M W |
| `strati-2017-altered-gut-microbiota-mycobiota-asd.md` | `10.1186/s40168-017-0242-1` | Francesco Strati, Duccio Cavalieri, Davide Albanese | Strati Francesco, Cavalieri Duccio, Albanese Davide |
| `su-2023-arsenic-brown-rice-benefits-risks.md` | `10.3389/fnut.2023.1209574` | Lihchyun Joseph Su, Tung-Chin Chiang, Sarah N. O'Connor | Su Lihchyun Joseph, Chiang Tung-Chin, O’Connor Sarah N. |
| `sun-2019-asd-gut-microbiota-disorder-children.md` | `10.1186/s12887-019-1896-6` | Hairong Sun, Zhong You, Libo Jia | Sun Hairong, You Zhong, Jia Libo |
| `sun-2022-probio-m8-parkinsons-rct.md` | `10.1038/s41531-022-00327-6` | Hairong Sun, Feiyan Zhao, Yuanyuan Liu | Sun Hairong, Zhao Feiyan, Liu Yuanyuan |
| `sun-2023-pancreatic-infections-16s-rrna-pancreatitis.md` | `10.3389/fmicb.2023.1185216` | Ning Sun, Yong Chen, Jiaxun Zhang | Sun Ning, Chen Yong, Zhang Jiaxun |
| `sun-2024-zinc-curcumin-cadmium-diabetic-nephropathy.md` | `10.3389/fphar.2024.1411230` | Yujie Sun, Xiaoyu Zhang, Yingying Liu | Sun Wenjia, Mei Xueting, Wang Jiasheng |
| `sun-2025-sodium-butyrate-neuroinflammation-cardiac-arrest.md` | `10.1186/s13041-025-01179-w` | Jianfei Sun, Liping Lu, Yingtao Lian | Sun Jianfei, Lu Liping, Lian Yingtao |
| `suryawanshi-2022-comprehensive-review-ppd.md` | `10.7759/cureus.32745` | Om Suryawanshi, Sandhya Pajai | Suryawanshi Om, Pajai Sandhya |
| `susarla-2024-microbiome-derived-metabolites-gestational-diabetes-risk.md` | `10.1186/s12916-024-03606-6` | Sita Manasa Susarla, Oliver Fiehn, Ines Thiele | Susarla Sita Manasa, Fiehn Oliver, Thiele Ines |
| `swierc-2022-nickel-intestinal-microbiota-disturbances.md` | `10.21164/pomjlifesci.810` | Swierc J, Drzymala S, Wozniak D | Świerc Jessica, Drzymała Sylwia, Woźniak Dagmara |
| `szczuko-2020-fatty-acid-ratio-ckd-progression.md` | `10.1186/s12944-020-01258-y` | Malgorzata Szczuko, Malgorzata Kaczkan, Sylwia Malgorzewicz | Szczuko Małgorzata, Kaczkan Małgorzata, Małgorzewicz Sylwia |
| `szklenarik-2024-cancer-mycobiome-gi-systematic-review.md` | `10.3389/fmed.2024.1488377` | Gyorgy Szklenarik, Peter Kiraly, Gabor Szegvari | Szklenarik György, Kiraly Peter, Szegvari Gabor |
| `tachibana-2017-meta-analysis-comprehensive-interventions-preschool-asd.md` | `10.1371/journal.pone.0186502` | Yoshiyuki Tachibana, Celine Miyazaki, Erika Ota | Tachibana Yoshiyuki, Miyazaki Celine, Ota Erika |
| `taha-2025-microbiota-interventions-asd-systematic-review.md` | `10.3389/fmicb.2025.1648118` | Hana Taha, Ahmad Issa, Zaid Muhanna | Taha Hana, Issa Ahmad, Muhanna Zaid |
| `takyi-2025-microbiota-interventions-asd-review.md` | `10.1080/19490976.2025.2499580` | Evelyn Takyi, Khemlal Nirmalkara, James Adams | Takyi Evelyn, Nirmalkar Khemlal, Adams James |
| `talantseva-2023-global-prevalence-asd-meta-analysis.md` | `10.3389/fpsyt.2023.1071181` | Oksana I. Talantseva, Raisa S. Romanova, Ekaterina M. Shurdova | Talantseva Oksana I., Romanova Raisa S., Shurdova Ekaterina M. |
| `tan-2025-mr-gut-microbiota-immune-kidney-ckd.md` | `10.1038/s41598-025-05941-x` | Junjie Tan, Zhile Xiong, Shengyou Yu | Tan Junjie, Xiong Zhile, Yu Shengyou |
| `tang-2011-gpr43-short-chain-fatty-acids-colon-cancer.md` | `10.1002/ijc.25638` | Yong Tang, Yakun Chen, Hongmei Jiang | Tang Yong, Chen Yakun, Jiang Hongmei |
| `tang-2022-bidirectional-microbiome-viruses-periodontitis-t2d.md` | `10.3389/fimmu.2022.885029` | Boyu Tang, Caixia Yan, Xin Shen | Tang Boyu, Yan Caixia, Shen Xin |
| `tang-2022-hashimotos-papillary-thyroid-carcinoma-meta-analysis.md` | `10.1371/journal.pone.0269995` | Qizhi Tang, Weiyu Pan, Liangyue Peng | Tang Qizhi, Pan Weiyu, Peng Liangyue |
| `taniya-2022-therapeutic-regulation-asd-microbiome.md` | `10.3389/fcimb.2022.915701` | Masuma Afrin Taniya, Hea-Jong Chung, Abdullah Al Mamun | Taniya Masuma Afrin, Chung Hea-Jong, Al Mamun Abdullah |
| `tao-2020-probiotics-effects-t2d-meta-analysis.md` | `10.1186/s12967-020-02213-2` | Yun-Wen Tao, Ying-Luo Gu, Xin-Qi Mao | Tao Yun-Wen, Gu Ying-Luo, Mao Xin-Qi |
| `tao-2024-cadmium-gut-microbiota-hamsters.md` | `10.1002/ece3.11682` | Mengfan Tao, Kanglin Cao, Xinsheng Pu | Tao Mengfan, Cao Kanglin, Pu Xinsheng |
| `tao-2025-fecal-virome-bacteriome-metabolite-interplay-schizophrenia.md` | `10.1038/s41398-025-03239-0` | Shiwan Tao, Yulu Wu, Liling Xiao | Tao Shiwan, Wu Yulu, Xiao Liling |
| `targher-2016-nafld-cvd-risk-meta-analysis.md` | `10.1016/j.jhep.2016.05.013` | Giovanni Targher, Christopher D. Byrne, Amedeo Lonardo | Targher Giovanni, Byrne Christopher D., Lonardo Amedeo |
| `taroncher-oldenburg-2023-multi-level-gut-brain-axis-asd.md` | `10.1038/s41593-023-01361-0` | Gaspar Taroncher-Oldenburg, et al. | Morton James T., Jin Dong-Min, Mills Robert H. |
| `tatsuta-2024-methylmercury-dietary-intake-japanese-children.md` | `10.1265/ehpm.24-00048` | Nozomi Tatsuta, Kaname Asato, Miyuki Iwai-Shimada | Tatsuta Nozomi, Asato Kaname, Iwai-Shimada Miyuki |
| `tavanaeian-2025-oral-fecal-microbiome-pancreatic-cancer-biomarkers.md` | `10.1186/s12866-025-04344-2` | Sogol Tavanaeian, Mohammad Mehdi Feizabadi, Sarvenaz Falsafi | Tavanaeian Sogol, Feizabadi Mohammad Mehdi, Falsafi Sarvenaz |
| `tedjo-2016-fecal-microbiota-biomarker-crohns-disease-activity.md` | `10.1038/srep35216` | Danyta I. Tedjo, Agnieszka Smolinska, Paul H. Savelkoul | Tedjo Danyta. I., Smolinska Agnieszka, Savelkoul Paul H. |
| `teng-2024-fluoxetine-colitis-intestinal-microenvironment.md` | `10.1186/s12964-024-01538-5` | Shuo Teng, Yi Yang, Wanru Zhang | Teng Shuo, Yang Yi, Zhang Wanru |
| `teng-2024-gut-microbiome-lipids-bidirectional-mr.md` | `10.1186/s12872-024-03804-3` | Da Teng, Wenjuan Jia, Wenlong Wang | Teng Da, Jia Wenjuan, Wang Wenlong |
| `teng-2024-gut-microbiome-lipids-mr.md` | `10.1186/s12872-024-03804-3` | Da Teng, Wenjuan Jia, Wenlong Wang | Teng Da, Jia Wenjuan, Wang Wenlong |
| `thacker-2006-infectious-mononucleosis-ms-risk-meta-analysis.md` | `10.1002/ana.20820` | Evan L. Thacker, Fariba Mirzaei, Alberto Ascherio | Thacker Evan L., Mirzaei Fariba, Ascherio Alberto |
| `theleritis-2024-gut-dysbiosis-first-episode-psychosis-review.md` | `10.3892/mmr.2024.13254` | Christos Theleritis, Maria-Ioanna Stefanou, Marina Demetriou | Theleritis Christos, Stefanou Maria-Ioanna, Demetriou Marina |
| `theofilis-2021-dyslipidemia-ckd-concepts-perspectives.md` | `10.1159/000518456` | Panagiotis Theofilis, Aikaterini Vordoni, Maria Koukoulaki | Theofilis Panagiotis, Vordoni Aikaterini, Koukoulaki Maria |
| `tian-2018-prebiotics-probiotics-synbiotics-severe-acute-pancreatitis-meta-analysis.md` | `10.3389/fphar.2018.00690` | Xu Tian, Yuan-Ping Pi, Xiao-Ling Liu | Tian Xu, Pi Yuan-Ping, Liu Xiao-Ling |
| `tian-2021-919-syrup-ppd-gut-microbes-gaba.md` | `10.3389/fcimb.2021.694443` | Xin-Yun Tian, Jing-Wei Xing, Qiao-Qi Zheng | Tian Xin-Yun, Xing Jing-Wei, Zheng Qiao-Qi |
| `tonelli-2023-oral-microbiome-cvd-pathophysiology.md` | `10.1038/s41569-022-00825-3` | Andrea Tonelli, Evelyn N. Lumngwena, Ntobeko A. B. Ntusi | Tonelli Andrea, Lumngwena Evelyn N., Ntusi Ntobeko A. B. |
| `torres-chavez-2023-intestinal-dysbiosis-ms-review.md` | `10.3892/br.2023.1675` | María Eugenia Torres-Chávez, Nora Magdalena Torres-Carrillo, Ana Victoria Monreal-Lugo | Torres‑Chávez María, Torres‑Carrillo Nora, Moreal‑Lugo Ana |
| `toya-2020-coronary-artery-disease-altered-gut-microbiome.md` | `10.1371/journal.pone.0227147` | Takumi Toya, Michel T. Corban, Eric Marrietta | Toya Takumi, Corban Michel T., Marrietta Eric |
| `trend-2021-serum-scfas-immune-cells-biomarkers-ms.md` | `10.1038/s41598-021-84881-8` | Stephanie Trend, Jonatan Leffler, Anderson P. Jones | Trend Stephanie, Leffler Jonatan, Jones Anderson P. |
| `troci-2022-b-cell-depletion-reverses-dysbiosis-ms.md` | `10.1038/s41598-022-07336-8` | Alba Troci, Olga Zimmermann, Daniela Esser | Troci Alba, Zimmermann Olga, Esser Daniela |
| `troeseid-2024-gut-microbiome-cardiometabolic-comorbidities-hiv.md` | `10.1186/s40168-024-01815-y` | Marius Troeseid, Susanne Dam Nielsen, Ivan Vujkovic-Cvijin | Trøseid Marius, Nielsen Susanne Dam, Vujkovic-Cvijin Ivan |
| `troeseid-2024-gut-microbiome-hiv-cardiometabolic.md` | `10.1186/s40168-024-01815-y` | Marius Troeseid, Susanne Dam Nielsen, Ivan Vujkovic-Cvijin | Trøseid Marius, Nielsen Susanne Dam, Vujkovic-Cvijin Ivan |
| `trunfio-2025-csf-virome-hiv-neuroinflammation-cognition.md` | `10.3389/fmicb.2025.1704392` | Mattia Trunfio, Rossana Scutari, Valeria Fox | Trunfio Mattia, Scutari Rossana, Fox Valeria |
| `tuohy-2014-dietary-pro-prebiotics-cvd-risk.md` | `10.1017/S0029665113003911` | Kieran M. Tuohy, Francesca Fava, Roberto Viola | Tuohy Kieran M., Fava Francesca, Viola Roberto |
| `turpin-2021-infant-gut-bacteria-adolescent-autism-autoimmune.md` | `10.1101/2021.06.07.21258510` | Patricia L. Turpin, Angelica P. Ahrens, Jordan T. Russell | Turpin Patricia L., Ahrens Angelica P., Russell Jordan T. |
| `turrini-2024-m13-phage-nanovector-photodynamic-crc.md` | `10.1007/s00018-024-05174-7` | Eleonora Turrini, Luca Ulfo, Paolo Emidio Costantini | Turrini Eleonora, Ulfo Luca, Costantini Paolo Emidio |
| `tye-2019-asd-comorbid-medical-conditions-review.md` | `10.3389/fpsyt.2018.00751` | Charlotte Tye, Abigail K. Runicles, Andrew J. O. Whitehouse | Tye Charlotte, Runicles Abigail K., Whitehouse Andrew J. O. |
| `udomkarnjananun-2025-dietary-composition-gut-microbiota-ckd.md` | `10.1038/s41598-025-20266-5` | Suwasin Udomkarnjananun, Natthaya Chuaypen, Kamonchanok Metta | Udomkarnjananun Suwasin, Chuaypen Natthaya, Metta Kamonchanok |
| `uyttebroek-2022-phage-therapy-safety-efficacy-systematic-review.md` | `10.1016/S1473-3099(21)00612-5` | Saartje Uyttebroek, Baisong Chen, Jolien Onsea | Uyttebroek Saartje, Chen Baixing, Onsea Jolien |
| `vacca-2023-synbiotics-stage-iiib-iv-ckd.md` | `10.3389/fnut.2023.1215836` | Mirco Vacca, Giuseppe Celano, Francesco Maria Calabrese | Vacca Mirco, Celano Giuseppe, Calabrese Francesco Maria |
| `valles-2018-air-pollution-early-life-microbiome-development.md` | `10.1007/s40572-018-0215-y` | Yvonne Valles, M. Pilar Francino | Vallès Yvonne, Francino M. Pilar |
| `van-sadelhoff-2019-gut-immune-brain-axis-asd-amino-acids.md` | `10.3389/fendo.2019.00247` | Joris H. J. van Sadelhoff, Paula Perez Pardo, Jiangbo Wu | van Sadelhoff Joris H. J., Perez Pardo Paula, Wu Jiangbo |
| `vandebergh-2022-bmi-il6-ms-mendelian-randomization.md` | `10.3389/fimmu.2022.834644` | Marijne Vandebergh, Sara Becelaere, CHARGE Inflammation Working Group | Vandebergh Marijne, Becelaere Sara,  |
| `vangoitsenhoven-2020-microbiome-antibiotics-autoimmune-diseases.md` | `10.1002/ncp.10489` | Roman Vangoitsenhoven, Gail A. M. Cresci | Vangoitsenhoven Roman, Cresci Gail A. M. |
| `varghese-2021-diabetes-coronavirus-metformin-drug-repurposing.md` | `10.1371/journal.ppat.1009634` | Elizabeth Varghese, Samson Mathews Samuel, Alena Liskova | Varghese Elizabeth, Samuel Samson Mathews, Liskova Alena |
| `vatanen-2018-human-gut-microbiome-early-onset-t1d-teddy.md` | `10.1038/s41586-018-0620-2` | Tommi Vatanen, Eric A. Franzosa, Randall Schwager | Vatanen Tommi, Franzosa Eric A., Schwager Randall |
| `vatanen-2018-teddy-gut-microbiome-t1d-nature.md` | `10.1038/s41586-018-0620-2` | Tommi Vatanen, Eric A. Franzosa, Randall Schwager | Vatanen Tommi, Franzosa Eric A., Schwager Randall |
| `vatanen-2024-gut-microbiome-shifts-t1d-glycaemic-control-innodia.md` | `10.1007/s00125-024-06192-7` | Tommi Vatanen, Carine de Beaufort, M. Loredana Marcovecchio | Vatanen Tommi, de Beaufort Carine, Marcovecchio M. Loredana |
| `vatanen-2024-innodia-gut-microbiome-t1d-glycemic.md` | `10.1007/s00125-024-06192-7` | Tommi Vatanen, Jarno Honkanen, Leena Engman | Vatanen Tommi, de Beaufort Carine, Marcovecchio M. Loredana |
| `vavreckova-2022-gut-bacterial-fungal-microbiota-pregnancy-gdm.md` | `10.3389/fendo.2022.970825` | Marketa Vavreckova, Natalie Galanova, Martin Kostovick | Vavreckova Marketa, Galanova Natalie, Kostovcik Martin |
| `vernocchi-2023-gut-microbiota-vocs-asd-biomarkers-predictors.md` | `10.3389/fmicb.2023.1287350` | Pamela Vernocchi, Chiara Marangelo, Silvia Guerrera | Vernocchi Pamela, Marangelo Chiara, Guerrera Silvia |
| `visedthorn-2024-bacterial-classification-metagenomic-peritoneal-dialysis-ckd.md` | `10.3892/br.2024.1790` | Suthida Visedthorn, Pavit Klomkliew, Vorthon Sawaswong | Visedthorn Suthida, Klomkliew Pavit, Sawaswong Vorthon |
| `wagner-2008-pseudomonas-16s-ileal-pediatric-crohns.md` | `10.1371/journal.pone.0003578` | Josef Wagner, Kirsty Short, Anthony G. Catto-Smith | Wagner Josef, Short Kirsty, Catto-Smith Anthony G. |
| `walker-2021-framingham-gut-microbiome-cardiometabolic.md` | `10.1186/s13073-021-01007-5` | Rebecca L. Walker, Hera Vlamakis, Jonathan Wei Jie Lee | Walker Rebecca L., Vlamakis Hera, Lee Jonathan Wei Jie |
| `wallen-2022-metagenomics-parkinsons-microbiome-signature.md` | `10.1038/s41467-022-34667-x` | Zachary D Wallen, Mary B Makarious, Cornelis Blauwendraat | Wallen Zachary D., Demirkan Ayse, Twa Guy |
| `walsh-2023-healthcare-interventions-autism.md` | `10.1007/s40489-021-00279-2` | Chloe Walsh, Paul O'Connor, Ellen Walsh | Walsh Chloe, O’Connor Paul, Walsh Ellen |
| `wang-2015-dietary-fiber-pancreatic-cancer-risk-meta-analysis.md` | `10.1038/srep10834` | Chun-Hui Wang, Chong Qiao, Ruo-Chen Wang | Wang Chun-Hui, Qiao Chong, Wang Ruo-Chen |
| `wang-2019-fecal-scfa-not-associated-asd-chinese-children.md` | `10.3389/fnins.2019.01216` | Jue Wang, Jialiang Pan, Hengying Chen | Wang Jue, Pan Jialiang, Chen Hengying |
| `wang-2019-microbiome-occurrence-development-treatment-pancreatic-cancer.md` | `10.1186/s12943-019-1103-2` | Yicheng Wang, Gang Yang, Lei You | Wang Yicheng, Yang Gang, You Lei |
| `wang-2021-gut-microbiota-nsaid-enteropathy.md` | `10.3389/fcimb.2021.679396` | Xianglu Wang, Qiang Tang, Huiqin Hou | Wang Xianglu, Tang Qiang, Hou Huiqin |
| `wang-2021-probiotic-combination-ckd-pilot-study.md` | `10.3389/fnut.2021.661794` | I-Kuan Wang, Tzung-Hai Yen, Pei-Shan Hsieh | Wang I-Kuan, Yen Tzung-Hai, Hsieh Pei-Shan |
| `wang-2021-probiotics-prebiotics-synbiotics-prediabetes-systematic-review.md` | `10.3389/fpubh.2021.645035` | Xian Wang, Jiao Yang, Xianliang Qiu | Wang Xian, Yang Jiao, Qiu Xianliang |
| `wang-2022-gut-microbiota-health-cvd-review.md` | `10.1186/s43556-022-00091-2` | Lu Wang, Shiqi Wang, Qing Zhang | Wang Lu, Wang Shiqi, Zhang Qing |
| `wang-2022-gut-microbiota-health-cvd.md` | `10.1186/s43556-022-00091-2` | Lu Wang, Shiqi Wang, Qing Zhang | Wang Lu, Wang Shiqi, Zhang Qing |
| `wang-2023-gut-microbiota-adhd-mendelian-randomization.md` | `10.3389/fmicb.2023.1144851` | Lei Wang, Zhihao Xie, Guoliang Li | Wang Lei, Xie Zhihao, Li Guoliang |
| `wang-2023-gut-microbiota-cad-mi-mendelian-randomization.md` | `10.3389/fgene.2023.1158293` | Dan Wang, Xiaoyan Chen, Zhen Li | Wang Dan, Chen Xiaoyan, Li Zhen |
| `wang-2023-gut-microbiota-signature-asd-gi-symptoms-china.md` | `10.1186/s12887-023-04292-8` | Hui Wang, Shu Liu, Liqing Xie | Wang Hui, Liu Shu, Xie Liqing |
| `wang-2023-immune-cells-schizophrenia-mendelian-randomization.md` | `10.1186/s12888-023-05081-4` | Chengdong Wang, Dongdong Zhu, Dongjun Zhang | Wang Chengdong, Zhu Dongdong, Zhang Dongjun |
| `wang-2023-mendelian-randomization-gut-microbiota-pancreatitis.md` | `10.3389/fmicb.2023.1290202` | Kui Wang, Xianzheng Qin, Taojing Ran | Wang Kui, Qin Xianzheng, Ran Taojing |
| `wang-2023-microbiota-gut-brain-axis-neurodevelopmental.md` | `10.1093/procel/pwad026` | Qinwen Wang, Qianyue Yang, Xingyin Liu | Wang Qinwen, Yang Qianyue, Liu Xingyin |
| `wang-2023-microbiota-indole-3-propionic-acid-brain-asd-iugr.md` | `10.1186/s40168-023-01656-1` | Tingting Wang, Beidi Chen, Mingcui Luo | Wang Tingting, Chen Beidi, Luo Mingcui |
| `wang-2023-perturbed-gut-microbiome-ckd-severity.md` | `10.1186/s40168-022-01443-4` | Haichao Wang, Aisima Ainiwaer, Yaxiang Song | Wang Haichao, Ainiwaer Aisima, Song Yaxiang |
| `wang-2024-ibd-integrated-16s-metagenomics-virulence-factors.md` | `10.3389/fmicb.2024.1375804` | Haijing Wang, Yuanjun Wang, Libin Yang | Wang Haijing, Wang Yuanjun, Yang Libin |
| `wang-2025-gaba-asd-comprehensive-review.md` | `10.3389/fpsyt.2025.1587432` | Peng Wang, Jin Sun | Wang Peng, Sun Jin |
| `wang-2025-gut-microbiome-remodeling-ckd-therapies.md` | `10.3389/fmed.2025.1620247` | Qianwei Wang, Yucheng Han, Liang Pang | Wang Qianwei, Han Yucheng, Pang Liang |
| `wang-2025-multi-omics-mr-gut-microbiota-optic-neuritis-vitamin-b6.md` | `10.1007/s12035-025-04923-4` | Jingzhi Wang, Xuehao Cui | Wang Jingzhi, Cui Xuehao |
| `wang-2026-fecal-metabolomics-ms.md` | `10.1038/s41598-026-42501-3` | Diyuan Wang, Wenguang Feng, Haibin Wang | Wang Diyuan, Feng Wenguang, Wang Haibin |
| `wang-2026-intestinal-fungal-dysbiosis-gdm-adverse-pregnancy-outcomes.md` | `10.1186/s12884-026-08677-2` | Wenxin Wang, Sha Lu, Yuanqing Fu | Wang Wenxin, Lu Sha, Fu Yuanqing |
| `wang-cui-2025-optic-neuritis-gut-microbiota-vitamin-b6-mr.md` | `10.1007/s12035-025-04923-4` | Jingzhi Wang, Xuehao Cui | Wang Jingzhi, Cui Xuehao |
| `wehedy-2022-human-microbiome-ckd-double-edged-sword.md` | `10.3389/fmed.2021.790783` | Wehedy, Ghali, Matboli | Wehedy Eman, Shatat Ibrahim F., Al Khodor Souhaila |
| `wei-2019-microbiota-microbiome-pancreatic-cancer.md` | `10.1186/s12943-019-1008-0` | Miao-Yan Wei, Si Shi, Chen Liang | Wei Miao-Yan, Shi Si, Liang Chen |
| `wei-2022-16s-rrna-gut-microbiota-gestational-diabetes.md` | `10.1007/s40618-021-01595-4` | J. Wei, Y. Qing, H. Zhou | Wei J., Qing Y., Zhou H. |
| `wei-2022-oral-mycobiota-pancreatic-adenocarcinoma.md` | `10.1186/s12885-022-10329-5` | Ailin Wei, Huiling Zhao, Xue Cong | Wei Ailin, Zhao Huiling, Cong Xue |
| `wei-2025-gut-mycobiome-cardiometabolic-disease.md` | `10.3389/fmicb.2025.1659654` | Xiaoyu Wei, Zixin Guo, Jingyang Wang | Wei Xiaoyu, Guo Zixin, Wang Jingyang |
| `wei-2025-gut-mycobiome-cardiometabolic-progression.md` | `10.3389/fmicb.2025.1659654` | Xiaoyu Wei, Zixin Guo, Jingyang Wang | Wei Xiaoyu, Guo Zixin, Wang Jingyang |
| `weideman-2017-age-dependent-efficacy-ms-treatments-meta-analysis.md` | `10.3389/fneur.2017.00577` | Ann Marie Weideman, Marco Aurelio Tapia-Maltos, Kory Johnson | Weideman Ann Marie, Tapia-Maltos Marco Aurelio, Johnson Kory |
| `weir-2013-stool-microbiome-metabolome-crc-healthy.md` | `10.1371/journal.pone.0070803` | Tiffany L Weir, Daniel K Manter, Amy M Sheflin | Weir Tiffany L., Manter Daniel K., Sheflin Amy M. |
| `west-2014-metabolomics-biomarkers-asd-blood-plasma.md` | `10.1371/journal.pone.0112445` | Paul R. West, David G. Amaral, Preeti Bais | West Paul R., Amaral David G., Bais Preeti |
| `west-2022-multi-angle-meta-analysis-gut-microbiome-asd.md` | `10.1038/s41598-022-21327-9` | Kiana A. West, Xiaochen Yin, Erica M. Rutherford | West Kiana A., Yin Xiaochen, Rutherford Erica M. |
| `winther-2021-faecal-biomarkers-t1d-diabetic-nephropathy.md` | `10.1038/s41598-021-94747-8` | Signe Abitz Winther, Mia Maininki Mannerla, Marie Frimodt-Moller | Winther Signe Abitz, Mannerla Miia Maininki, Frimodt-Møller Marie |
| `witham-2023-repurposing-diabetes-drugs-sarcopenia.md` | `10.1007/s40266-023-01042-4` | Miles D. Witham, Antoneta Granic, Ewan Pearson | Witham Miles D., Granic Antoneta, Pearson Ewan |
| `wortelboer-2024-phage-therapy-cardiometabolic-diseases.md` | `10.1016/j.tem.2024.03.007` | Koen Wortelboer, Hilde Herrema | Wortelboer Koen, Herrema Hilde |
| `wu-2017-metformin-gut-microbiome-t2d-nature-medicine.md` | `10.1038/nm.4345` | Hao Wu, Eduardo Esteve, Valentina Tremaroli | Wu Hao, Esteve Eduardo, Tremaroli Valentina |
| `wu-2024-estrogens-androgens-microbiota-crc.md` | `10.3389/fcimb.2024.1458033` | Zihong Wu, Yi Sun, Wenbo Huang | Wu Zihong, Sun Yi, Huang Wenbo |
| `wu-2024-sex-differences-crc-hormone-microbiome-axis.md` | `10.1186/s12964-024-01549-2` | Zihong Wu, Yuqing Huang, Renyi Zhang | Wu Zihong, Huang Yuqing, Zhang Renyi |
| `wu-2025-distinct-diet-microbiome-associations-asd.md` | `10.1038/s41467-025-67711-7` | Yuqi Wu, Oscar Wong, Sizhe Chen | Wu Yuqi, Wong Oscar, Chen Sizhe |
| `xie-2024-gut-microbiome-metabolome-systemic-sclerosis-mr.md` | `10.3389/fmicb.2024.1427195` | Shasha Xie, Qiming Meng, Lin Wang | Xie Shasha, Meng Qiming, Wang Lin |
| `xie-2025-cholesterol-crc-simvastatin-lactobacillus.md` | `10.1186/s12885-025-14379-3` | Xiaoliang Xie, Wenjing Wang, Haiming Zhang | Xie Xiaoliang, Wang Wenjing, Zhang Haiming |
| `xie-2025-gut-microbiome-pregnancy-disorders.md` | `10.3389/fcimb.2025.1521754` | Yupei Xie, Qian Chen, Dan Shan | Xie Yupei, Chen Qian, Shan Dan |
| `xiong-2025-prenatal-trace-elements-infant-gut-microbiome.md` | `10.1038/s41467-025-60508-8` | Shimao Xiong, Bing Xie, Naiyi Yin | Xiong Shimao, Xie Bing, Yin Naiyi |
| `xiong-2025-prenatal-trace-elements-mother-infant-gut-microbiome.md` | `10.1038/s41467-025-60508-8` | Shimao Xiong, Bing Xie, Naiyi Yin | Xiong Shimao, Xie Bing, Yin Naiyi |
| `xu-2014-maternal-diabetes-asd-risk-meta-analysis.md` | `10.1007/s10803-013-1928-2` | Guifeng Xu, Jin Jing, Katherine Bowers | Xu Guifeng, Jing Jin, Bowers Katherine |
| `xu-2020-gut-microbiome-pd1-mss-crc-metabolic-pathway.md` | `10.3389/fmicb.2020.00814` | Xinjian Xu, Ji Lv, Fang Guo | Xu Xinjian, Lv Ji, Guo Fang |
| `xu-2022-gut-microbiota-autoimmune-diseases-mendelian-randomization.md` | `10.3389/fimmu.2021.746998` | Qian Xu, Jing-Jing Ni, Bai-Xue Han | Xu Qian, Ni Jing-Jing, Han Bai-Xue |
| `xu-2022-probiotics-prebiotics-covid-19-gut-lung-axis.md` | `10.3389/fphar.2022.895193` | Lei Xu, Chung S. Yang, Yanan Liu | Xu Lei, Yang Chung S., Liu Yanan |
| `xue-2024-colonic-microflora-metabolic-viral-myocarditis-cvb3.md` | `10.1186/s12985-024-02571-z` | Yimin Xue, Shirong Lin, Mingguang Chen | Xue Yimin, Lin Shirong, Chen Mingguang |
| `xue-2024-colonic-microflora-viral-myocarditis-cvb3.md` | `10.1186/s12985-024-02571-z` | Yimin Xue, Shirong Lin, Mingguang Chen | Xue Yimin, Lin Shirong, Chen Mingguang |
| `yadav-2022-ms-gut-mycobiome-fungal-bacterial.md` | `10.1371/journal.pone.0264556` | Meeta Yadav, Soham Ali, Rachel L. Shrode | Yadav Meeta, Ali Soham, Shrode Rachel L. |
| `yamamura-2025-fmt-therapeutic-strategy-pancreatic-cancer.md` | `10.33611/trs.2025-003` | Ryodai Yamamura, Masahiro Sonoshita | YAMAMURA Ryodai, SONOSHITA Masahiro |
| `yan-2025-infant-serum-metals-gut-microbiota.md` | `10.3389/fmicb.2025.1669475` | Xing Yan, Jun Qiu, Ruiwen Huang | Yan Xing, Qiu Jun, Huang Ruiwen |
| `yang-2022-fungal-microbiota-dysbiosis-gastric-cancer.md` | `10.3389/fmicb.2022.889694` | Ping Yang, Xiaoshan Zhang, Rui Xu | Yang Ping, Zhang Xiaoshan, Xu Rui |
| `yang-2024-causal-gut-microbiota-cervical-cancer-mr.md` | `10.3389/fmicb.2024.1336101` | Hao Yang | Yang Hua |
| `yang-2024-gut-microbiota-immune-cells-chd-mr.md` | `10.3389/fmicb.2024.1449935` | Feifei Yang, Hui Song, Weizhi Tang | Yang Feifei, Song Hui, Tang Weizhi |
| `yang-2025-gut-microbiota-endometrial-cancer-mr.md` | `10.1186/s12885-025-13656-5` | Chunyan Yang, Luolan Qin, Ling Li | Yang Chongze, Qin Lan-hui, Li Liwei |
| `yang-2025-supplementary-approaches-perinatal-depression-herbal.md` | `10.3389/fpsyg.2025.1529339` | Quancheng Yang, Yi Lv, Shenrong Gao | Yang Quancheng, Lv Yi, Gao Shenrong |
| `yang-2026-combined-phage-antibiotic-peritoneal-dialysis-peritonitis.md` | `10.1038/s41467-026-69154-0` | Xiaoxiao Yang, Nannan Wu, Xiaotian Jiang | Yang Xiaoxiao, Wu Nannan, Jiang Xiaotian |
| `yassour-2016-subclinical-gut-microbial-biomarkers-obesity-t2d.md` | `10.1186/s13073-016-0271-6` | Moran Yassour, Mi Young Lim, Hyun Sun Yun | Yassour Moran, Lim Mi Young, Yun Hyun Sun |
| `yasuno-2024-dysbiosis-gut-microbiota-ckd-stages.md` | `10.2169/internalmedicine.1602-23` | Tetsuhiko Yasuno, Koji Takahashi, Kazuhiro Tada | Yasuno Tetsuhiko, Takahashi Koji, Tada Kazuhiro |
| `yin-2022-immune-transcriptome-drug-repositioning-ms.md` | `10.3389/fimmu.2022.1020721` | Xinyue Yin, Xinming Rang, Xiangxiang Hong | Yin Xinyue, Rang Xinming, Hong Xiangxiang |
| `yoshida-2023-pathogens-saliva-cp-adolescents.md` | `10.3389/fdmed.2023.1208243` | Rosemeire Arai Yoshida, Tiago Bertola Lobato, Renata Gorjão | Yoshida Rosemeire Arai, Lobato Tiago Bertola, Gorjão Renata |
| `yu-2021-ppd-status-biomarkers-identification.md` | `10.3389/fpsyt.2021.620371` | Yi Yu, Hong-Feng Liang, Jing Chen | Yu Yi, Liang Hong-Feng, Chen Jing |
| `yu-2024-plasma-cytokines-scfas-depression-schizophrenia.md` | `10.1186/s12888-024-06277-y` | Huan Yu, Rui Li, Xue-jun Liang | Yu Huan, Li Rui, Liang Xue-jun |
| `yu-2025-faecalibacterium-hominis-indole-ahr-asd-btbr.md` | `10.3389/fmicb.2025.1640149` | You Yu, Yujing Wang, Jie Zhang | Yu You, Wang Yujing, Zhang Jie |
| `yu-2025-kidney-gut-brain-axis-hemodialysis-brain-dysfunction.md` | `10.3389/fmed.2025.1538048` | Jie Yu, Yulu Li, Bin Zhu | Yu Jie, Li Yulu, Zhu Bin |
| `yuan-2022-functional-metabolic-alterations-gut-microbiota-new-onset-t1d.md` | `10.1038/s41467-022-33656-4` | Xiaoxiao Yuan, Ruirui Wang, Bing Han | Yuan Xiaoxiao, Wang Ruirui, Han Bing |
| `yuan-2025-gut-viral-communities-asd-healthy-children.md` | `10.3389/fcimb.2025.1660970` | Minli Yuan, Qiuxia Wang, Yan Lu | Yuan Minli, Wang Qiuxia, Lu Yan |
| `yuan-2025-purpureocillium-amino-acid-metabolism-cognitive-schizophrenia.md` | `10.1186/s12888-025-06965-3` | Xiuxia Yuan, Xue Li, Lijuan Pang | Yuan Xiuxia, Li Xue, Pang Lijuan |
| `zahoor-2021-metabolomics-ms-comprehensive-overview.md` | `10.1007/s00018-020-03733-2` | Insha Zahoor, Bin Rui, Junaid Khan | Zahoor Insha, Rui Bin, Khan Junaid |
| `zangeneh-2025-probiotics-ms-systematic-review-meta-analysis.md` | `10.1371/journal.pone.0319755` | Zahra Zangeneh, Mosayeb Rostamian, Hamid Motamedi | Zangeneh Zahra, Rostamian Mosayeb, Motamedi Hamid |
| `zarimeidani-2025-gut-microbiota-neuroinflammation-asd-pathogenesis.md` | `10.1007/s10753-024-02061-y` | Fatemeh Zarimeidani, Rahem Rahmati, Mehrnaz Mostafavi | Zarimeidani Fatemeh, Rahmati Rahem, Mostafavi Mehrnaz |
| `zelante-2024-microbial-ahr-ligand-3iald-tolerogenic-ms.md` | `10.1038/s41598-024-57400-8` | Teresa Zelante, Giuseppe Paolicelli, Francesca Fallarino | Zelante Teresa, Paolicelli Giuseppe, Fallarino Francesca |
| `zeng-2018-socioeconomic-status-ckd-meta-analysis.md` | `10.1136/jech-2017-209815` | Xiaoxi Zeng, Jing Liu, Sibei Tao | Zeng Xiaoxi, Liu Jing, Tao Sibei |
| `zeng-2023-gut-microbiome-epilepsy-mendelian-randomization.md` | `10.3389/fmicb.2023.1115014` | Youjie Zeng, Si Cao, Heng Yang | Zeng Youjie, Cao Si, Yang Heng |
| `zeng-2024-probiotics-asd-meta-analysis.md` | `10.1186/s13052-024-01692-z` | Ping Zeng, Cheng-zhi Zhang, Zhi-xing Fan | Zeng Ping, Zhang Cheng-zhi, Fan Zhi-xing |
| `zerbo-2015-maternal-infection-pregnancy-asd.md` | `10.1007/s10803-013-2016-3` | Ousseny Zerbo, Yinge Qian, Cathleen Yoshida | Zerbo Ousseny, Qian Yinge, Yoshida Cathleen |
| `zhang-2008-ckd-prevalence-population-systematic-review.md` | `10.1186/1471-2458-8-117` | Qiu-Li Zhang, Dietrich Rothenbacher | Zhang Qiu-Li, Rothenbacher Dietrich |
| `zhang-2019-nickel-congenital-heart-defects.md` | `10.1097/MD.0000000000015352` | Zhang N, Chen W, Dong Y | Zhang Nannan, Chen Ming, Li Jun |
| `zhang-2020-gut-microbiota-diversity-gestation-ppd.md` | `10.21203/rs.3.rs-91665/v1` | Xiaoyan Zhang, Qiangsheng Gan, Hongling Yang | Zhang Xiaoyan, Gan Qiangsheng, Yang Hongling |
| `zhang-2021-antidepressants-fluoxetine-amitriptyline-gut-microbiome.md` | `10.1038/s41398-021-01254-5` | Weijie Zhang, Wan Qu, Hua Wang | Zhang Weijie, Qu Wan, Wang Hua |
| `zhang-2021-antidepressants-fluoxetine-amitriptyline-gut-microbiota.md` | `10.1038/s41398-021-01254-5` | Weijie Zhang, Wan Qu, Hua Wang | Zhang Weijie, Qu Wan, Wang Hua |
| `zhang-2021-cadmium-gut-liver-axis-alzheimers-mouse.md` | `10.1038/s42003-021-02898-1` | Angela Zhang, Megumi Matsushita, Liang Zhang | Zhang Angela, Matsushita Megumi, Zhang Liang |
| `zhang-2021-fluoxetine-amitriptyline-gut-microbiota-cums-rats.md` | `10.1038/s41398-021-01254-5` | Weijie Zhang, Wan Qu, Hua Wang | Zhang Weijie, Qu Wan, Wang Hua |
| `zhang-2022-causal-gut-microbiome-cvd-mr.md` | `10.3389/fcvm.2022.971376` | Yuxuan Zhang, Xinyi Zhang, Delong Chen | Zhang Yuxuan, Zhang Xinyi, Chen Delong |
| `zhang-2022-causal-microbiome-cvd-mendelian-randomization.md` | `10.3389/fcvm.2022.971376` | Yuxuan Zhang, Xinyi Zhang, Delong Chen | Zhang Yuxuan, Zhang Xinyi, Chen Delong |
| `zhang-2022-gut-dysbiosis-pancreatic-diseases-therapeutic-target.md` | `10.3389/fnut.2022.814269` | Tao Zhang, Guangqi Gao, Hafiz Arbab Sakandar | Zhang Tao, Gao Guangqi, Sakandar Hafiz Arbab |
| `zhang-2022-lactiplantibacillus-fermented-milk-vpa-asd-mice.md` | `10.3389/fnut.2022.1005308` | Yilin Zhang, Min Guo, Hongfa Zhang | Zhang Yilin, Guo Min, Zhang Hongfa |
| `zhang-2022-metagenomic-crosstalk-microbiota-glucose-drugs-t2d.md` | `10.1007/s00125-022-05768-5` | Xiuying Zhang, Huahui Ren, Cuiling Zhao | Zhang Xiuying, Ren Huahui, Zhao Cuiling |
| `zhang-2023-gut-microbiota-pathogenesis-treatment-ppd-review.md` | `10.1186/s12991-023-00469-8` | Sheng Zhang, Baili Lu, Gang Wang | Zhang Sheng, Lu Baili, Wang Gang |
| `zhang-2023-metagenome-wide-esrd-gut-microbial-signatures.md` | `10.1186/s13059-023-03056-y` | Pan Zhang, Xifan Wang, Shenghui Li | Zhang Pan, Wang Xifan, Li Shenghui |
| `zhang-2024-bile-acid-metabolism-diabetic-kidney-disease.md` | `10.1038/s41387-024-00315-0` | Qing Zhang, Liqian Lu, Jiao Wang | Zhang Qing, Lu Liqian, Wang Jiao |
| `zhang-2024-blood-metabolites-gut-microbiota-ovarian-cancer-mr.md` | `10.3389/fcimb.2024.1451880` | Li Zhang, Ting Cao, Kunhong Liu | Zhang Liang, Cao Tao, Liu Kang |
| `zhang-2024-gut-microbiota-ppd-mendelian-randomization.md` | `10.3389/fpsyt.2024.1282742` | Jianjun Zhang, Lechuan Wei, Hongfei Tan | Zhang Jianjun, Wei Lechuan, Tan Hongfei |
| `zhang-2024-mendelian-randomization-ppd.md` | `10.3389/fpsyt.2024.1282742` | Jianjun Zhang, Lechuan Wei, Hongfei Tan | Zhang Jianjun, Wei Lechuan, Tan Hongfei |
| `zhang-2024-ovarian-cancer-microbiome-inflammatory-microenvironment.md` | `10.3389/fcimb.2024.1440742` | Min Zhang, Jiao Mo, Wei Huang | Zhang Min, Mo Jiahang, Huang Wu |
| `zhang-2024-taxonomic-functional-gut-microbiota-ckd-16s.md` | `10.3389/fcimb.2024.1363276` | Yangyang Zhang, Weicong Zhong, Wenting Liu | Zhang Yangyang, Zhong Weicong, Liu Wenting |
| `zhang-2025-fmt-promising-therapy-kidney-diseases.md` | `10.3389/fmed.2025.1628722` | Jiawei Zhang, Xiangge Ren, Bing Li | Zhang Jiawei, Ren Xiangge, Li Bing |
| `zhang-2025-gut-microbiota-anxiety-depression-multimodal.md` | `10.3389/fmicb.2025.1664800` | Zhang Ruohan, Wang Ruting, Wu Hongxi | Ruohan Zhang, Ruting Wang, Hongxi Wu |
| `zhang-2025-gut-microbiota-metabolites-asd-network-pharmacology.md` | `10.1038/s41598-025-15921-w` | Fushen Zhang, Weiye Xu, Qian Tang | Zhang Fushen, Xu Weiye, Tang Qian |
| `zhang-2025-gut-virome-premalignant-colorectal-adenoma.md` | `10.1186/s12967-025-06404-7` | Pan Zhang, Xiaofeng Tuo, Jiong Jiang | Zhang Pan, Tuo Xiaofeng, Jiang Jiong |
| `zhang-2026-metagenomic-gut-microbiome-diabetes-mi.md` | `10.1007/s00592-026-02648-x` | Honghong Zhang, Changlin Zhai, Huilin Hu | Zhang Honghong, Zhai Changlin, Hu Huilin |
| `zhang-2026-metagenomic-gut-microbiome-t2d-myocardial-infarction.md` | `10.1007/s00592-026-02648-x` | Honghong Zhang, Changlin Zhai, Huilin Hu | Zhang Honghong, Zhai Changlin, Hu Huilin |
| `zhao-2021-colorectal-cancer-microbiome-patterns-signatures.md` | `10.3389/fgene.2021.787176` | Lan Zhao, William C. Cho, Mark R. Nicolls | Zhao Lan, Cho William C., Nicolls Mark R. |
| `zhao-2023-altered-gut-microbiota-biomarkers-asd-early-childhood.md` | `10.1016/j.neuroscience.2023.04.029` | Yingxin Zhao, Yaping Wang, Fanchao Meng | Zhao Yingxin, Wang Yaping, Meng Fanchao |
| `zhao-2025-early-life-microbiota-dysbiosis-asd-parkinsons-link.md` | `10.1038/s41380-025-03281-w` | Ming-Ming Zhao, Kenji Hashimoto, Jian-Jun Yang | Zhao Ming-Ming, Hashimoto Kenji, Yang Jian-Jun |
| `zhao-2025-intestinal-fungal-microbiota-acute-pancreatitis.md` | `10.1186/s13099-024-00675-z` | Meng-Qi Zhao, Miao-Yan Fan, Meng-Yan Cui | Zhao Meng-Qi, Fan Miao-Yan, Cui Meng-Yan |
| `zhen-2023-tmao-cardiovascular-diseases-review.md` | `10.3389/fendo.2023.1085041` | Jing Zhen, Zhou Zhou, Meng He | Zhen Jing, Zhou Zhou, He Meng |
| `zheng-2017-neuroactive-amino-acids-asd-review.md` | `10.1007/s00726-016-2332-y` | Hui-Fei Zheng, Wen-Qiang Wang, Xin-Min Li | Zheng Hui-Fei, Wang Wen-Qiang, Li Xin-Min |
| `zheng-2018-dietary-fiber-ovarian-cancer-risk-meta-analysis.md` | `10.1186/s12937-018-0407-1` | Bin Zheng, Hong Shen, Huan Han | Zheng Bowen, Shen Hui, Han Hedong |
| `zheng-2021-bacterial-aromatic-amino-acids-asd.md` | `10.3389/fnins.2021.738220` | Yuanpeng Zheng, Marie K. Bek, Naika Z. Prince | Zheng Yuanpeng, Bek Marie K., Prince Naika Z. |
| `zheng-2023-fmt-919-syrup-erucamide-5avab-ppd.md` | `10.3389/fimmu.2023.1203015` | Qiaoqi Zheng, Shusheng Wang, Xinyun Tian | Zheng Qiaoqi, Wang Shusheng, Tian Xinyun |
| `zhi-2026-gut-mycobiome-membranous-nephropathy.md` | `10.1038/s41598-026-38437-3` | Yingxin Zhi, Yukun Zhou, Mengxiao Wang | Zhi Yingxin, Zhou Yukun, Wang Mengxiao |
| `zhong-2023-causal-effects-gut-microbiome-covid-19-mendelian-randomization.md` | `10.3389/fimmu.2023.1173974` | Meng-Mei Zhong, Jia-Hao Xie, Yao Feng | Zhong Meng-Mei, Xie Jia-Hao, Feng Yao |
| `zhou-2010-quercetin-pancreatic-cancer-stem-cells.md` | `10.3892/ijo_00000704` | Wei Zhou, Georgios Kallifatidis, Bernd Baumann | Herr |
| `zhou-2020-fecal-microbiota-ppd.md` | `10.3389/fcimb.2020.567268` | Yumei Zhou, Chen Chen, Haibo Yu | Zhou Yumei, Chen Chen, Yu Haibo |
| `zhou-2020-postpartum-microbiota.md` | `10.3389/fcimb.2020.567268` | Yumei Zhou, Chen Chen, Haibo Yu | Zhou Yumei, Chen Chen, Yu Haibo |
| `zhou-2021-fecal-microbiota-pdac-autoimmune-pancreatitis-metagenomics.md` | `10.1186/s12967-021-02882-7` | Wenli Zhou, De Zhang, Zhengpeng Li | Zhou Wenli, Zhang De, Li Zhengpeng |
| `zhou-2022-host-microbiome-protein-interactions-disease-pathways.md` | `10.1186/s13059-022-02643-9` | Hao Zhou, Juan Felipe Beltran, Ilana Lauren Brito | Zhou Hao, Beltrán Juan Felipe, Brito Ilana Lauren |
| `zhou-2022-host-microbiome-protein-protein-interactions-disease.md` | `10.1186/s13059-022-02643-9` | Hao Zhou, Juan Felipe Beltran, Ilana Lauren Brito | Zhou Hao, Beltrán Juan Felipe, Brito Ilana Lauren |
| `zhou-2023-fecal-microbiota-acupuncture-ppd.md` | `10.3389/fcimb.2023.1228940` | Yu-Mei Zhou, Jin-Jun Yuan, Yu-Qin Xu | Zhou Yu-Mei, Yuan Jin-Jun, Xu Yu-Qin |
| `zhou-2024-gut-microbiome-schizophrenia-mendelian-randomization.md` | `10.1038/s41537-024-00497-7` | Keer Zhou, Ancha Baranova, Hongbao Cao | Zhou Keer, Baranova Ancha, Cao Hongbao |
| `zhou-2024-maternal-ppd-infant-neurodevelopment-gut-microbiota.md` | `10.3389/fpsyt.2024.1385229` | Lepeng Zhou, Linghong Tang, Chuhui Zhou | Zhou Lepeng, Tang Linghong, Zhou Chuhui |
| `zhou-2025-gut-microbiota-immune-nervous-system-asd.md` | `10.3389/fmicb.2025.1535455` | Min Zhou, Baoming Niu, Jiarui Ma | Zhou Min, Niu Baoming, Ma Jiarui |
| `zhou-2025-heavy-metals-essential-minerals-hair-asd-severity.md` | `10.1007/s12011-025-04588-z` | Xulan Zhou, Xiaochun Xia, Liming Li | Zhou Xulan, Xia Xiaochun, Li Liming |
| `zhou-liu-2024-heavy-metals-dried-chili-guizhou.md` | `10.1038/s41598-024-68564-8` | Li-qiang Zhou, Wen-zheng Liu | Zhou Li-qiang, Liu Wen-zheng |
| `zhu-2020-metagenome-wide-gut-microbiome-schizophrenia.md` | `10.1038/s41467-020-15457-9` | Feng Zhu, Yanmei Ju, Wei Wang | Zhu Feng, Ju Yanmei, Wang Wei |
| `zhu-2022-inflammatory-mechanisms.md` | `10.3389/fphar.2022.955672` | Jialei Zhu, Jing Jin, Jing Tang | Zhu Jialei, Jin Jing, Tang Jing |
| `zhu-2023-gut-microbiota-metabolic-pathways-cvd.md` | `10.3389/fmicb.2023.1272479` | Junwen Zhu, Jin Lyu, Ruochi Zhao | Zhu Junwen, Lyu Jin, Zhao Ruochi |
| `zhu-2024-toxic-essential-metals-gut-microbiota-health.md` | `10.3389/fnut.2024.1448388` | Qinheng Zhu, Boyan Chen, Fu Zhang | Zhu Qinheng, Chen Boyan, Zhang Fu |
| `zhu-2025-gut-brain-kidney-axis-ckd.md` | `10.3389/fmicb.2025.1535356` | Jue Zhu, Yutong Fu, Chinasa Valerie Olovo | Zhu Jue, Fu Yutong, Olovo Chinasa Valerie |
| `zhu-2025-microbiota-gut-brain-axis-depression-review.md` | `10.3389/fimmu.2025.1644160` | Zhangcheng Zhu, Yiwen Cheng, Xia Liu | Zhu Zhangcheng, Cheng Yiwen, Liu Xia |
| `zhuang-2024-asd-pathogenesis-biomarker-intervention.md` | `10.1002/mco2.497` | Hongbin Zhuang, Zhiyuan Liang, Guanwei Ma | Zhuang Hongbin, Liang Zhiyuan, Ma Guanwei |
| `zong-2023-fungal-mycobiome-hallmark-cancer-pan-cancer.md` | `10.1038/s41392-023-01334-6` | Zhi Zong, Fangfang Zhou, Long Zhang | Zong Zhi, Zhou Fangfang, Zhang Long |
| `zorea-2023-traf3-b-cells-microbiome-ovarian-cancer.md` | `10.1186/s13046-023-02680-7` | Jonathan Zorea, Yair Motro, Rami D. Mazor | Zorea Jonathan, Motro Yair, Mazor Roei D. |
| `zou-2022-gut-mycobiome-dysbiosis-hypertension-immunoglobulin.md` | `10.3389/fimmu.2022.1089295` | Yeqing Zou, Anxing Ge, Brako Lydia | Zou Yeqing, Ge Anxing, Lydia Brako |
| `zou-2022-mycobiome-dysbiosis-hypertension-light-chains.md` | `10.3389/fimmu.2022.1089295` | Yeqing Zou, Anxing Ge, Brako Lydia | Zou Yeqing, Ge Anxing, Lydia Brako |
| `zou-2022-mycobiome-hypertension-immunoglobulin.md` | `10.3389/fimmu.2022.1089295` | Yeqing Zou, Anxing Ge, Brako Lydia | Zou Yeqing, Ge Anxing, Lydia Brako |
| `zou-2024-multi-omic-microbiome-genome-transcriptome-crc.md` | `10.1186/s12967-024-04984-4` | Shaomin Zou, Chao Yang, Jieping Zhang | Zou Shaomin, Yang Chao, Zhang Jieping |

## Internal wikilink audit

- Files scanned: 2332
- Wikilinks found: 33125
- Broken targets (unique file/target pairs): 101

### Top 50 broken wikilink targets

| Target | Incoming count | Example files |
|---|---|---|
| `[[note-evaluation-risk-ptes-italy-fish-products]]` | 3 | entities/nickel.md, analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[periodontitis]]` | 3 | analyses/link-health-2026-04-19.md, sources/16s-rrna-t2d-subgingival-plaque-microbiota.md, sources/periodontitis-t2d-microbial-biomarkers.md |
| `[[oral-gut-axis]]` | 3 | analyses/link-health-2026-04-19.md, sources/16s-rrna-t2d-subgingival-plaque-microbiota.md, sources/periodontitis-t2d-microbial-biomarkers.md |
| `[[anaerococcus]]` | 3 | analyses/link-health-2026-04-19.md, sources/macsharry-2024-endometriosis-vaginal-microbiota-n-glycome.md, sources/rashwan-2025-cervical-cancer-hpv-vaginal-microbiome-megaanalysis.md |
| `[[stop-unrestricted-plant-diet-advanced-ckd]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[stop-probiotics-alone-uremic-toxins-ckd]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[pascal-2017-cd-microbial-signature]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[faecalibacterium-hominis-4p15]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[karen-pendergrass]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[zinc-endometriosis-2024]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[lactoferrin-genital-2019]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[endo-vaginal-microbiota-glycome]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[altered-microbiota-ovarian-endometrioma-2021]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[antibiotics-metronidazole-endo-2019]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[associations-endo-gut-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[fecal-metabolomics-endo-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[effect-endo-fecal-bacteriota-2019]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[endo-induces-gut-alterations-2018]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[gut-imbalance-hormone-endo-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[inflammatory-cytokines-peritoneal-2018]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[microbiome-deep-endo-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[microbiome-lower-genital-chinese]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[microbiota-composition-distribution-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[molecular-intrauterine-colonization-2016]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[gut-dysbiosis-treg-th17-graves-2020]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[graves-targeted-therapy-2025]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[graves-ibd-mendelian-2023]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[graves-ra-mendelian-2021]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[antonelli-2016-graves-epidemiology]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[uncovering-causal-gut-thyroid-2024]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[maciejewski-2025-trace-elements-thyroid]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[yao-2023-oral-gut-thyroid-cancer]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[selenium-thyroid-autoimmunity-2015]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[abraham-2005-drug-therapy-graves]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[preliminary-flora-changes-graves-2022]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[berberine-methimazole-graves-2021]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[gluten-free-thyroiditis-2024]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[gut-microbiome-metabolites-graves-2022]]` | 2 | analyses/broken-links-2026-04-16.md, analyses/link-health-2026-04-19.md |
| `[[lactobacillus\]]` | 2 | analyses/gaps-and-improvements-2026-04-14.md, analyses/link-health-2026-04-19.md |
| `[[bifidobacterium\]]` | 2 | analyses/gaps-and-improvements-2026-04-14.md, analyses/link-health-2026-04-19.md |
| `[[saccharomyces-cerevisiae\]]` | 2 | analyses/gaps-and-improvements-2026-04-14.md, analyses/link-health-2026-04-19.md |
| `[[bacillus\]]` | 2 | analyses/gaps-and-improvements-2026-04-14.md, analyses/link-health-2026-04-19.md |
| `[[oxygen]]` | 2 | analyses/link-health-2026-04-19.md, sources/chandrangsu-2016-zinc-intoxication-perr-heme-toxicity.md |
| `[[tannerella-forsythia]]` | 2 | analyses/link-health-2026-04-19.md, sources/periodontitis-t2d-microbial-biomarkers.md |
| `[[treponema-denticola]]` | 2 | analyses/link-health-2026-04-19.md, sources/periodontitis-t2d-microbial-biomarkers.md |
| `[[bacillus-anthracis]]` | 2 | analyses/link-health-2026-04-19.md, sources/robinson-2020-metalation-natures-challenge.md |
| `[[interkingdom-relationships]]` | 2 | sources/fungal-dysbiosis-2026-pregnancy-gdm-reference.md, sources/montoya-2013-metagenomic-analyses-bv-ovarian-cancer-thesis.md |
| `[[source-filename]]` | 1 | analyses/zero-reference-pages-2026-04-19.md |
| `[[pregnancy]]` | 1 | sources/fungal-dysbiosis-2026-pregnancy-gdm-reference.md |
| `[[atopobium]]` | 1 | sources/gimeno-2026-diet-microbiota-pregnancy-success-mediterranean.md |

## How to act on this report

1. **Bad-format DOIs**: Either fix from the source PDF or demote to `doi: "not yet verified"`. Never guess.
2. **Crossref 404s**: Almost always fabricated. Use `node scripts/lookup-dois.cjs` to attempt Crossref title search for the correct DOI; if nothing comes back, demote to `doi: "not yet verified"` and flag the page with `<!-- NEEDS VERIFICATION -->`.
3. **Title mismatches**: The DOI is real but points to a different paper than what the frontmatter claims. Investigate manually — either the DOI is wrong or the frontmatter metadata was fabricated.
4. **Broken wikilinks**: Create the target page as a stub (per §2f and Rule 13) or fix the wikilink source spelling.

## Re-running

```
# Fast: format checks + internal wikilinks only, no network
node scripts/link-health-audit.cjs --offline

# Slow: also validate every DOI against Crossref (rate-limited, ~5–10 min for 1,700 sources)
node scripts/link-health-audit.cjs --online

# Smoke test: online with a 50-source sample
node scripts/link-health-audit.cjs --online --sample 50
```
