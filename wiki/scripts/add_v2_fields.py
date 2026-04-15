#!/usr/bin/env python3
"""
Priority 5 v2 Migration: Add karen_brain_primitives, metals_discussed, taxa_discussed
to wiki source pages that don't already have them.

Usage: python3 wiki/scripts/add_v2_fields.py

Processes all .md files in wiki/sources/ and adds three v2 fields to frontmatter
based on content analysis of tags + body text.
"""

import os
import re
import sys

SOURCES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "sources")

# Metal keywords (lowercase) -> canonical metal name
METALS = {
    'nickel': 'nickel', 'iron': 'iron', 'zinc': 'zinc', 'copper': 'copper',
    'cadmium': 'cadmium', 'lead': 'lead', 'mercury': 'mercury', 'arsenic': 'arsenic',
    'chromium': 'chromium', 'selenium': 'selenium', 'manganese': 'manganese',
    'aluminum': 'aluminum', 'aluminium': 'aluminum', 'magnesium': 'magnesium',
    'cobalt': 'cobalt', 'tin': 'tin', 'molybdenum': 'molybdenum', 'iodine': 'iodine',
    # Chemical symbols and variants
    'fe2+': 'iron', 'fe3+': 'iron', 'ferric': 'iron', 'ferrous': 'iron',
    'zn2+': 'zinc', 'cu2+': 'copper', 'cu(ii)': 'copper', 'zn(ii)': 'zinc',
    'cd2+': 'cadmium', 'pb2+': 'lead', 'hg2+': 'mercury', 'cr(vi)': 'chromium',
    'cr(iii)': 'chromium', 'as(iii)': 'arsenic', 'as(v)': 'arsenic',
    'ni2+': 'nickel', 'co2+': 'cobalt', 'mn2+': 'manganese', 'se2+': 'selenium',
}

# Common taxa genus names in microbiome research
TAXA_GENERA = [
    'Lactobacillus', 'Bifidobacterium', 'Escherichia', 'Salmonella', 'Klebsiella',
    'Staphylococcus', 'Streptococcus', 'Enterococcus', 'Clostridium', 'Clostridioides',
    'Bacteroides', 'Prevotella', 'Faecalibacterium', 'Roseburia', 'Akkermansia',
    'Helicobacter', 'Campylobacter', 'Pseudomonas', 'Acinetobacter', 'Candida',
    'Aspergillus', 'Saccharomyces', 'Methanobrevibacter', 'Methanococcus',
    'Fusobacterium', 'Veillonella', 'Ruminococcus', 'Blautia', 'Coprococcus',
    'Eubacterium', 'Lachnospira', 'Dialister', 'Megasphaera', 'Sutterella',
    'Bilophila', 'Desulfovibrio', 'Alistipes', 'Parabacteroides', 'Porphyromonas',
    'Treponema', 'Vibrio', 'Listeria', 'Bacillus', 'Corynebacterium',
    'Mycobacterium', 'Neisseria', 'Haemophilus', 'Moraxella', 'Proteus',
    'Serratia', 'Citrobacter', 'Enterobacter', 'Shigella', 'Yersinia',
    'Brucella', 'Legionella', 'Bordetella', 'Rickettsia', 'Chlamydia',
    'Gardnerella', 'Lactococcus', 'Propionibacterium', 'Cutibacterium',
    'Malassezia', 'Cryptococcus', 'Fusarium', 'Penicillium', 'Cladosporium',
    'Alternaria', 'Mucor', 'Rhizopus', 'Trichosporon', 'Rhodotorula',
    'Limosilactobacillus', 'Lacticaseibacillus', 'Ligilactobacillus',
    'Lactiplantibacillus', 'Latilactobacillus', 'Levilactobacillus',
    'Collinsella', 'Dorea', 'Oxalobacter', 'Christensenella',
    'Phascolarctobacterium', 'Holdemanella', 'Catenibacterium',
    'Agathobacter', 'Anaerostipes', 'Butyricicoccus', 'Butyrivibrio',
    'Megamonas', 'Mitsuokella', 'Subdoligranulum', 'Purpureocillium',
]

# Primitive keyword mapping
PRIMITIVE_KEYWORDS = {
    1: ['metal exposure', 'metal contamination', 'dietary metal', 'heavy metal', 'metal toxicity',
        'metal pollution', 'selective pressure', 'metal stress', 'metal accumulation',
        'metal-contaminated', 'metal burden', 'toxic metal', 'trace metal', 'metal intake',
        'metal homeostasis', 'metal mixture', 'metallomics', 'metallomic'],
    2: ['hepcidin', 'ferritin', 'calprotectin', 'nutritional immunity', 'functional anemia',
        'iron withholding', 'iron deficiency', 'iron sequestration', 'lactoferrin',
        'transferrin', 'hypoferremia', 'anemia of inflammation', 'anemia of chronic disease',
        'iron restriction', 'iron regulation'],
    3: ['mis-metallation', 'mismetallation', 'metal displacement', 'metal competition',
        'zinc-finger', 'zinc finger', 'metal substitution', 'ionic mimicry',
        'metal specificity', 'metal selectivity', 'metal binding site',
        'divalent cation', 'metal transporter competition', 'metal dyshomeostasis',
        'metal-binding'],
    4: ['urease', 'hydrogenase', 'glyoxalase', 'metal-dependent enzyme', 'metalloenzyme',
        'virulence factor', 'virulence', 'superoxide dismutase', 'catalase',
        'metalloprote', 'metal cofactor', 'metallocenter', 'nickel enzyme',
        'cobalt enzyme', 'zinc enzyme', 'copper enzyme', 'iron-sulfur',
        'methanogenesis'],
    5: ['probiotic', 'prebiotic', 'synbiotic', 'fecal microbiota transplant', 'fmt ',
        'ecological restoration', 'microbiome restoration', 'microbial ecology',
        'dysbiosis correction', 'gut restoration', 'flora restoration',
        'microbiota modulation', 'microbiome modulation', 'microbial intervention'],
    6: ['biofilm', 'interkingdom', 'fungal-bacterial', 'fungal bacterial',
        'functional shielding', 'polymicrobial', 'mixed-species', 'cross-kingdom',
        'quorum sensing', 'extracellular matrix', 'exopolysaccharide',
        'co-aggregation', 'coaggregation'],
    7: ['estrogen', 'estrobolome', 'beta-glucuronidase', 'metalloestrogen',
        'endocrine disrupt', 'xenoestrogen', 'phytoestrogen', 'estradiol',
        'estrogenic', 'pcos', 'polycystic ovary', 'polycystic ovarian'],
    8: ['siderophore', 'iron acquisition', 'competitive exclusion', 'iron scavenging',
        'enterobactin', 'pyoverdine', 'aerobactin', 'yersiniabactin',
        'iron chelat', 'iron uptake', 'iron transport', 'tonb', 'fur regulon',
        'iron piracy'],
    9: ['hypoxia', 'anaerobe', 'anaerobic', 'oxygen gradient', 'oxygenation',
        'facultative', 'obligate anaerobe', 'oxygen tension',
        'redox potential', 'oxidative stress', 'reactive oxygen',
        'antioxidant', 'aerotolerant'],
}


def extract_tags(fm_text):
    """Extract tags from frontmatter text."""
    m = re.search(r'tags:\s*\[([^\]]*)\]', fm_text)
    if m:
        return m.group(1).lower()
    tags = []
    in_tags = False
    for line in fm_text.split('\n'):
        if line.strip().startswith('tags:'):
            in_tags = True
            rest = line.split('tags:')[1].strip()
            if rest.startswith('['):
                return rest.lower()
            continue
        if in_tags:
            if line.strip().startswith('- '):
                tags.append(line.strip()[2:].strip().lower())
            else:
                break
    return ' '.join(tags)


def infer_primitives(text_lower):
    """Infer karen_brain_primitives from content."""
    primitives = []
    for prim_num, keywords in PRIMITIVE_KEYWORDS.items():
        for kw in keywords:
            if kw in text_lower:
                primitives.append(prim_num)
                break
    return sorted(primitives)


def extract_metals(text_lower):
    """Extract metals discussed from content."""
    found = set()
    for keyword, metal_name in METALS.items():
        if len(keyword) <= 3:
            if re.search(r'\b' + re.escape(keyword) + r'\b', text_lower):
                found.add(metal_name)
        else:
            if keyword in text_lower:
                found.add(metal_name)

    # Filter 'tin' false positives
    if 'tin' in found:
        if not re.search(r'\btin\b', text_lower):
            found.discard('tin')
        else:
            tin_matches = list(re.finditer(r'\btin\b', text_lower))
            is_metal_tin = False
            for m in tin_matches:
                start = max(0, m.start() - 30)
                end = min(len(text_lower), m.end() + 30)
                context = text_lower[start:end]
                if any(w in context for w in ['metal', 'solder', 'alloy', 'sn ', 'stannum', 'stannous']):
                    is_metal_tin = True
                    break
            if not is_metal_tin:
                found.discard('tin')

    # Filter 'lead' false positives
    if 'lead' in found:
        lead_metal = False
        if re.search(r'\blead\s*(exposure|contamination|level|concentration|poisoning|toxicity|metal|pb|acetate|intake|content|burden|blood)', text_lower):
            lead_metal = True
        if re.search(r'(heavy\s+metal|toxic\s+metal|metal\s+exposure).*lead', text_lower):
            lead_metal = True
        if re.search(r'lead.*ppm', text_lower):
            lead_metal = True
        if 'pb2+' in text_lower or 'pb ' in text_lower:
            lead_metal = True
        if re.search(r'tags:.*lead', text_lower):
            lead_metal = True
        if not lead_metal:
            found.discard('lead')

    return sorted(found)


def extract_taxa(text):
    """Extract taxa discussed from content."""
    found = set()
    text_lower = text.lower()
    for genus in TAXA_GENERA:
        if genus.lower() in text_lower:
            found.add(genus)
    return sorted(found)


def format_list(items):
    """Format a list for YAML inline."""
    if not items:
        return '[]'
    return '[' + ', '.join(str(i) for i in items) + ']'


def format_string_list(items):
    """Format a string list for YAML inline."""
    if not items:
        return '[]'
    return '[' + ', '.join(f'"{i}"' for i in items) + ']'


def process_file(filepath):
    """Process a single file, adding v2 fields if missing."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if not content.startswith('---'):
        return False, "no frontmatter"

    end = content.find('\n---', 3)
    if end == -1:
        return False, "no frontmatter end"

    fm_text = content[3:end].strip()
    body = content[end + 4:]

    if 'karen_brain_primitives' in fm_text:
        return False, "already has fields"

    tags_text = extract_tags(fm_text)
    analysis_text = (tags_text + ' ' + fm_text + ' ' + body[:3000]).lower()

    primitives = infer_primitives(analysis_text)
    metals = extract_metals(analysis_text)
    taxa = extract_taxa(fm_text + ' ' + body[:3000])

    # Find insertion point before the closing ---
    second_dash = content.index('---', 3)

    new_fields = f"karen_brain_primitives: {format_list(primitives)}\n"
    new_fields += f"metals_discussed: {format_string_list(metals)}\n"
    new_fields += f"taxa_discussed: {format_string_list(taxa)}\n"

    new_content = content[:second_dash] + new_fields + content[second_dash:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, f"p={primitives} m={metals} t={taxa}"


def main():
    processed = 0
    skipped = 0
    errors = 0
    no_fm = 0

    files = sorted(os.listdir(SOURCES_DIR))
    total = 0
    for fname in files:
        if not fname.endswith('.md'):
            continue
        total += 1
        filepath = os.path.join(SOURCES_DIR, fname)
        try:
            success, msg = process_file(filepath)
            if success:
                processed += 1
            elif msg == "already has fields":
                skipped += 1
            elif "no frontmatter" in msg:
                no_fm += 1
            else:
                skipped += 1
        except Exception as e:
            errors += 1
            if errors <= 10:
                print(f"ERROR: {fname}: {e}", file=sys.stderr)

    print(f"Total .md files: {total}")
    print(f"Processed (fields added): {processed}")
    print(f"Skipped (already done): {skipped}")
    print(f"No frontmatter: {no_fm}")
    print(f"Errors: {errors}")


if __name__ == '__main__':
    main()
