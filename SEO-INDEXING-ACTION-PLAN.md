# WikiBiome Indexing Action Plan

**Status as of 2026-04-15:** Google sees 228 URLs, indexes 0. The blocker is not a technical error — it's that wikibiome.com is a new domain with no external link authority, so Google is withholding crawl budget.

This plan has three parts: a **focused sitemap** (done), **internal linking** (done), and **external backlinks** (your job — copy-paste-ready below).

---

## Part 1 — Technical changes already made (ready to deploy)

1. `scripts/generate-static.cjs` now emits **two sitemaps**:
   - `sitemap.xml` — 30 flagship URLs only (homepage, 7 signatures, 8 metals, 6 microbes, 3 concept anchors, 4 category hubs, /signatures)
   - `sitemap-full.xml` — all 270 URLs (kept for discovery, deprioritized)
2. `robots.txt` now references both, in order. Google will read the flagship sitemap first and spend its limited new-site crawl budget on the 30 pages that matter most.

**Deploy now:**
```
cd ~/Documents/Raw && vercel deploy --prod
```
(Build artifacts in `dist-v28` are already updated — no rebuild needed.)

**After deploy, in Google Search Console:**
1. Sitemaps → remove the old `sitemap.xml` entry if cached, re-submit `https://www.wikibiome.com/sitemap.xml`
2. Sitemaps → add `https://www.wikibiome.com/sitemap-full.xml` as a second sitemap
3. URL Inspection → paste each of these 10 URLs and click "Request Indexing":
   - `https://www.wikibiome.com/`
   - `https://www.wikibiome.com/article/cadmium`
   - `https://www.wikibiome.com/article/lead`
   - `https://www.wikibiome.com/article/nickel`
   - `https://www.wikibiome.com/article/escherichia-coli`
   - `https://www.wikibiome.com/article/candida-albicans`
   - `https://www.wikibiome.com/article/nutritional-immunity`
   - `https://www.wikibiome.com/article/mis-metallation`
   - `https://www.wikibiome.com/article/erectile-dysfunction`
   - `https://www.wikibiome.com/article/depression`

This tells Google "these specific URLs matter, crawl them now."

---

## Part 2 — Backlinks (the actual lever)

Every backlink from a site Google already trusts tells Google's crawler "this domain matters." Five good links will do more than any technical fix. Here's exactly what to post where, with copy ready to paste.

### A. Paleo Foundation homepage — add a prominent link block

**Where:** paleofoundation.com homepage, above the fold or in the primary navigation.

**Paste this HTML:**
```html
<section style="padding:48px 24px;background:#fafafa;text-align:center;">
  <h2 style="font-size:28px;font-weight:700;margin-bottom:12px;">Introducing WikiBiome</h2>
  <p style="max-width:640px;margin:0 auto 20px;font-size:17px;line-height:1.6;color:#444;">
    The open encyclopedia of microbiome metallomics — how heavy metals shape the
    human microbiome, drive disease, and reveal new therapeutic targets. A Paleo
    Foundation project.
  </p>
  <a href="https://www.wikibiome.com" style="display:inline-block;padding:14px 32px;background:#b87333;color:#fff;text-decoration:none;border-radius:4px;font-weight:600;">
    Explore WikiBiome &rarr;
  </a>
</section>
```

**Why this matters most:** paleofoundation.com is an established domain. A single homepage link from it will move Google more than anything else here.

### B. Paleo Foundation footer — sitewide link

**Where:** paleofoundation.com global footer, "Our Projects" column.

**Paste:**
```html
<a href="https://www.wikibiome.com">WikiBiome — Microbiome Metallomics Encyclopedia</a>
```

A sitewide footer link means every Paleo Foundation page contributes a signal.

### C. HMTc product pages — contextual links

**Where:** every Heavy Metal Tested & Certified standards page, in the intro.

**Paste (adjust metal name per page):**
```html
<p>For a full scientific reference on how <a href="https://www.wikibiome.com/article/cadmium">cadmium</a> interacts with the human microbiome and contributes to disease, see the WikiBiome encyclopedia entry.</p>
```

Per-metal pages to add these links from:
- Lead page → link to `https://www.wikibiome.com/article/lead`
- Arsenic page → `https://www.wikibiome.com/article/arsenic`
- Mercury → `https://www.wikibiome.com/article/mercury`
- Cadmium → `https://www.wikibiome.com/article/cadmium`
- Nickel → `https://www.wikibiome.com/article/nickel`
- Aluminum, Tin, Chromium → `https://www.wikibiome.com/article/heavy-metals`

### D. Wikipedia — add external references

Wikipedia is the single best source of SEO authority transfer. Two or three accepted citations will noticeably accelerate indexing.

**Target articles and citations to add** (paste into the References section of each Wikipedia article):

- **Heavy metals** (en.wikipedia.org/wiki/Heavy_metals) — add under "See also" or "External links":
  `* [https://www.wikibiome.com/article/heavy-metals WikiBiome: Heavy Metals and the Human Microbiome]`
- **Nutritional immunity** (en.wikipedia.org/wiki/Nutritional_immunity) — add under "External links":
  `* [https://www.wikibiome.com/article/nutritional-immunity WikiBiome: Nutritional Immunity]`
- **Microbiota** → add an "External links" entry pointing to `https://www.wikibiome.com/`
- **Premenstrual dysphoric disorder**, **Erectile dysfunction**, **Necrotizing enterocolitis** — each has a "See also" or "External links" section where a WikiBiome signature link can go.

**Edit tip:** log in with a non-conflicted account (not one tied to Paleo Foundation), make a small unrelated helpful edit first to establish account history, then add the WikiBiome link with an edit summary like "Added reference to microbiome metallomics encyclopedia entry." Wikipedia is suspicious of single-purpose accounts.

### E. Reddit posts — three subreddits, different angles

**r/microbiome** — post title:
> New open encyclopedia specifically on microbiome × heavy metals interactions

**Body:**
```
I've been frustrated that microbiome and toxicology live in separate silos when
they're obviously the same system. Been working on WikiBiome — an open reference
for how metals shape microbial communities and drive disease.

Early signature pages are up for PMDD, fibromyalgia, ED, depression, cerebral
palsy, and NEC. Each one maps five layers: the metallomic profile, the taxa
enriched/depleted, nutritional immunity response, ecological state, and virulence
enzymes.

Free, fully sourced, no paywall: https://www.wikibiome.com

Would love feedback from anyone researching in this space.
```

**r/HubermanLab** — reframe as "finally, the connection between heavy metals and gut health has a real reference."

**r/science** (careful — strict sourcing rules) — don't post the site, post a specific finding with WikiBiome as the explainer source.

### F. Hacker News — Show HN post

**Title:** `Show HN: WikiBiome – open encyclopedia of microbiome × heavy metals`

**Body:**
```
I got tired of the fact that microbiome science and heavy-metals toxicology are
studied in separate silos when they're clearly the same system. WikiBiome is an
attempt to knit them together: every metal entry lists the microbes that depend
on or resist it, every microbe entry lists its metal requirements and virulence
enzymes, and disease signatures map five layers of evidence (metallomic,
taxonomic, nutritional immunity, ecological, virulence).

The data model is in the repo's CLAUDE.md. Every claim links to a specific
source page with evidence-level grading. 252 articles so far, all free.

https://www.wikibiome.com

Happy to answer questions about the methodology or the data.
```

Post Tuesday–Thursday 8–10am Pacific for best visibility.

### G. Twitter/X thread

**Thread (7 tweets):**

1. "Heavy metals and the microbiome are studied as if they're different fields. They're the same field. Announcing WikiBiome — an open encyclopedia of microbiome metallomics."
2. "Every disease is a metal story. Iron-rich gut selects for siderophore producers. Zinc sequestration is a defense system, not a deficiency. Cadmium displaces correct cofactors. We've built 252 reference pages mapping this."
3. "Each disease signature has 5 layers: [screenshot of signature page structure]"
4. "Examples live and free today: fibromyalgia, PMDD, erectile dysfunction as a 3-5yr cardiovascular sentinel, necrotizing enterocolitis, depression, cerebral palsy."
5. "Data model is open. Every claim cites a specific source with evidence-level grading. Conflicts between sources are flagged, not hidden."
6. "Paleo Foundation project. Designed to power both public education (WikiBiome) and practitioner clinical reasoning (Cureva.ai)."
7. "Read, share, send feedback: https://www.wikibiome.com"

Tag accounts in final tweet: @MelanieCarver, @ZachBushMD, @ChrisMasterjohn, any microbiome researchers you've read.

### H. LinkedIn announcement

**Post:**
```
After months of work I'm opening up WikiBiome — the first open encyclopedia
specifically focused on how heavy metals shape the human microbiome and drive
chronic disease.

Microbiome research and toxicology have been studied as separate fields. They
aren't. Metals are the selective pressure. Microbes are the population. Disease
is what emerges when that ecosystem gets pushed past a threshold.

WikiBiome maps this explicitly: 252 articles so far, six multi-layer disease
signatures live, every claim source-linked.

A Paleo Foundation project. Free and open.

🔗 https://www.wikibiome.com

Feedback from researchers and clinicians especially welcome.
```

### I. Targeted researcher outreach (highest-value backlinks)

For each author you've already flagged for Keystone outreach, add a sentence to that email:

> "If you'd consider linking to the WikiBiome entry from your lab website or a relevant blog post, it would be a meaningful signal that this resource is worth using."

Academic and university domains (.edu, lab sites) pass more authority than almost any other source.

---

## Part 3 — Internal linking (do this month)

Every article page should have 8–12 inbound internal links from other articles. Currently most hub pages (metals, signatures) do, but deep pages have only 1–3. Add a "Related Signatures" block to every microbe and metal entity page listing the 2–4 disease signature pages where that entity appears. This takes a single pass through the entity pages and multiplies Google's sense that the site is interconnected (= worth crawling).

---

## Timeline expectation

- **Week 1:** Sitemap deploy + manual indexing requests → expect 5–10 pages indexed.
- **Weeks 2–4:** If Paleo Foundation homepage link goes live + 2 Wikipedia citations land + Hacker News post gets any traction → expect 30–80 pages indexed.
- **Months 2–3:** With steady internal linking additions and ≥5 real backlinks → expect the remaining ~180 pages to index on their own as Google expands crawl budget.

The hard truth: "Discovered – currently not indexed" on a new domain is a patience problem plus a link-authority problem. The technical fixes in Part 1 remove all the excuses Google has. Parts 2 and 3 give it the reasons to care.
