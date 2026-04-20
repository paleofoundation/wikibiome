---
title: "Keystone Study — Author Notification Template"
type: internal
platform: cureva
created: 2026-04-14
updated: 2026-04-14
tags: [outreach, keystone, email-template]
---

# Keystone Study — Author Notification Email

## Template

**Subject:** Your research has been designated a Keystone Study on WikiBiome

---

Dear Dr. {{CORRESPONDING_AUTHOR_LAST_NAME}},

I am writing on behalf of WikiBiome (www.wikibiome.com), an open-access encyclopedia of microbiome science with particular emphasis on microbial metallomics, nutritional immunity, and disease-associated signatures.

Your study, "{{PAPER_TITLE}}" ({{JOURNAL}}, {{YEAR}}), has been formally designated a **Keystone Study** on our platform.

In ecology, a keystone species is one whose removal would cause disproportionate collapse of its ecosystem. WikiBiome applies the same principle to research. A Keystone Study is one that is structurally essential to our knowledge graph — a study without which critical connections between metals, microbes, and disease could not be drawn. This designation does not measure citation volume or mainstream recognition. It measures connective importance: the degree to which your work enables understanding across domains that do not typically intersect.

Your study satisfied the following criteria:

{{CRITERIA_MET_DESCRIPTIONS}}

The full classification criteria are published at: https://www.wikibiome.com/keystone

The WikiBiome page featuring your research can be viewed here: https://www.wikibiome.com/article/{{SOURCE_PAGE_ID}}

We would welcome any corrections to our interpretation of your findings. WikiBiome is committed to accurately representing the published evidence, and the researchers who conducted the work are best positioned to identify mischaracterization.

WikiBiome is a project of the Paleo Foundation, a 501(c)(3) nonprofit advancing microbiome education and science-based certification standards. We receive no funding from supplement, pharmaceutical, or food industry sponsors.

Thank you for the work that made this designation possible.

Respectfully,

Karen Pendergrass
Founder, WikiBiome
Executive Director, Paleo Foundation
karen@paleofoundation.com
https://www.wikibiome.com

---

## Usage Notes

**When to send:** After a source page has been verified against all five Keystone criteria and at least three are confirmed. Never before verification is complete.

**Personalization required:**
- `{{CORRESPONDING_AUTHOR_LAST_NAME}}` — from `corresponding_author` field in source frontmatter
- `{{PAPER_TITLE}}` — from `title` field
- `{{JOURNAL}}` — from `journal` field
- `{{YEAR}}` — from `year` field
- `{{CRITERIA_MET_DESCRIPTIONS}}` — write out which criteria were met and a one-sentence explanation for each, e.g.:
  - **Cross-Domain Bridge** — Your work connects nickel biochemistry to microbial pathogenesis, bridging inorganic chemistry and clinical microbiology in a way neither field achieves independently.
  - **Signature Layer Dependency** — Without this study, the metallomic layer of WikiBiome's endometriosis signature would lack its primary evidence for nickel elevation.
  - **Mechanistic Linchpin** — Your findings explain *why* nickel-dependent urease activity drives H. pylori persistence, transforming an observed association into a mechanistic understanding.
- `{{SOURCE_PAGE_ID}}` — the slug of the source page on WikiBiome

**Email address source:** `corresponding_email` field in the source page frontmatter. If absent, look up the corresponding author's institutional email from their most recent publication or institutional profile page.

**Follow-up protocol:**
- If no response after 14 days, one follow-up email is acceptable.
- If no response after the follow-up, mark the outreach as "sent, no response" in the outreach tracker and do not send further messages.
- If the author responds with corrections, apply them to the WikiBiome page within 48 hours and send a brief confirmation.
- If the author requests removal, comply immediately and remove the Keystone designation.

**Tracking fields to add to source frontmatter after sending:**
```yaml
keystone_outreach_date: YYYY-MM-DD
keystone_outreach_status: sent | responded | corrections-applied | declined
```
