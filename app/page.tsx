"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const domains = [
  { name: "Diseases & Conditions", count: 65, key: "Conditions", mark: "Dx", tone: "plum" },
  { name: "Mechanisms", count: 235, key: "Mechanisms", mark: "Mx", tone: "coral" },
  { name: "Microorganisms", count: 232, key: "Microorganisms", mark: "μ", tone: "green" },
  { name: "Heavy Metals", count: 29, key: "Heavy Metals", mark: "Me", tone: "metal" },
  { name: "Interventions", count: 72, key: "Interventions", mark: "Rx", tone: "blue" },
  { name: "Host Defenses", count: 29, key: "Host Defenses", mark: "Hd", tone: "gold" },
];

const entries = [
  { id: "alzheimers", title: "Alzheimer’s disease", category: "Conditions", label: "Disease signature", code: "AD", summary: "A structured view of microbial findings, host pathways, metallomic context, and the evidence behind each reported association.", tone: "plum" },
  { id: "penicillium", title: "Penicillium", category: "Microorganisms", label: "Fungal genus", code: "P", summary: "A familiar filamentous fungus viewed through the gut mycobiome, its reported associations, and related literature.", tone: "green" },
  { id: "estrogen", title: "Estrogen recirculation", category: "Mechanisms", label: "Mechanism map", code: "E₂", summary: "Follow how microbial enzyme activity can connect the gut ecosystem with hormone metabolism and host physiology.", tone: "coral" },
  { id: "arsenic", title: "Arsenic", category: "Heavy Metals", label: "Metallome profile", code: "As", summary: "Trace exposure, microbial transformation, host response, and the studies that connect these layers.", tone: "metal" },
  { id: "probiotics", title: "Probiotic interventions", category: "Interventions", label: "Intervention review", code: "Rx", summary: "Compare strains, studied outcomes, populations, and confidence across the intervention literature.", tone: "blue" },
  { id: "barrier", title: "Intestinal barrier", category: "Host Defenses", label: "Host defense", code: "Hd", summary: "Explore the physical and immune interfaces that mediate contact between microbial communities and the host.", tone: "gold" },
  { id: "crc", title: "Colorectal cancer", category: "Conditions", label: "Disease signature", code: "CRC", summary: "An evidence map connecting reported taxa, mechanisms, host defenses, and intervention research.", tone: "plum" },
  { id: "butyrate", title: "Butyrate metabolism", category: "Mechanisms", label: "Mechanism map", code: "C₄", summary: "See the organisms, pathways, tissues, and conditions linked through a key microbial metabolite.", tone: "coral" },
  { id: "akkermansia", title: "Akkermansia muciniphila", category: "Microorganisms", label: "Bacterial species", code: "Am", summary: "A taxon profile organized around ecology, host interaction, condition signatures, and study context.", tone: "green" },
];

const signatures = [
  { name: "Colorectal cancer", studies: "Evidence map", focus: "Microbial ecology", taxa: ["Reported taxa", "Community patterns", "Replication"], mechanisms: ["Biofilm formation", "Microbial metabolites", "Immune signaling"] },
  { name: "Alzheimer’s disease", studies: "Evidence map", focus: "Gut–brain axis", taxa: ["Reported taxa", "Community patterns", "Replication"], mechanisms: ["Barrier integrity", "Neuroinflammation", "Metabolite signaling"] },
  { name: "Chronic kidney disease", studies: "Evidence map", focus: "Gut–kidney axis", taxa: ["Reported taxa", "Community patterns", "Replication"], mechanisms: ["Uremic metabolites", "Barrier function", "Immune signaling"] },
];

const filters = ["All", ...domains.map((domain) => domain.key)];

const heroSlides = [
  "/hero-microbiome-1.jpg",
  "/maid-iz-mic-phagegettyimages-1338313552-3840x2160.jpg",
  "/hero-microbiome-2.jpg",
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [signature, setSignature] = useState(signatures[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % heroSlides.length),
      7600,
    );
    return () => window.clearInterval(timer);
  }, []);

  const visibleEntries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return entries.filter((entry) => {
      const categoryMatch = activeFilter === "All" || entry.category === activeFilter;
      const searchMatch = !needle || [entry.title, entry.category, entry.label, entry.summary].join(" ").toLowerCase().includes(needle);
      return categoryMatch && searchMatch;
    });
  }, [query, activeFilter]);

  function runSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.querySelector("#encyclopedia")?.scrollIntoView({ behavior: "smooth" });
  }

  function chooseDomain(key: string) {
    setActiveFilter(key);
    document.querySelector("#encyclopedia")?.scrollIntoView({ behavior: "smooth" });
  }

  function openRandomArticle() {
    const pool = visibleEntries.length ? visibleEntries : entries;
    const selected = pool[Math.floor(Math.random() * pool.length)];
    setQuery(selected.title);
    setActiveFilter("All");
    document.querySelector("#encyclopedia")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <section className="portal" id="top">
        <div className="portal-slides" aria-hidden="true">
          {heroSlides.map((image, index) => (
            <div
              className={"portal-slide " + (activeSlide === index ? "active" : "")}
              key={image}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="portal-shade" />
        <div className="portal-watermark" aria-hidden="true">W</div>

        <header className="portal-topbar">
          <a className="portal-mobile-brand" href="#top"><span>W</span> WikiBiome</a>
          <nav aria-label="Main navigation">
            <a href="#encyclopedia">Explore</a>
            <a href="#signatures">Signatures</a>
            <a href="#evidence">Evidence</a>
            <a href="#about">About</a>
          </nav>
          <div><button type="button" onClick={openRandomArticle}>Random article</button><a href="#contribute">Contribute</a><a href="#contribute">Donate ♡</a></div>
        </header>

        <aside className="portal-index" aria-label="WikiBiome index">
          <a className="portal-logo" href="#top"><img src="/favicon.png" alt="" /><span>Wiki<em>Biome</em></span><small>The human microbiome encyclopedia</small></a>
          <button className="index-random" type="button" onClick={openRandomArticle}><span>Random article</span><i>+</i></button>
          <div className="index-rule" />
          {domains.map((domain) => <button className="index-domain" type="button" key={domain.key} onClick={() => chooseDomain(domain.key)}><span>{domain.name}</span><b>{domain.count}</b></button>)}
          <div className="index-rule" />
          <p className="index-label"><span>Beta</span> Tools</p>
          <a href="#signatures">Signature explorer</a><a href="#signatures">Disease signatures</a><a href="#evidence">Evidence matrix</a><a href="#about">Knowledge graph</a>
        </aside>

        <div className="portal-center">
          <p>THE HUMAN MICROBIOME ENCYCLOPEDIA</p>
          <h1>Welcome<br />to <em>WikiBiome</em></h1>
          <span>Follow the organisms, mechanisms, and ecological relationships shaping human health.</span>
          <form className="portal-search" onSubmit={runSearch}>
            <label className="sr-only" htmlFor="portal-search">Search WikiBiome</label>
            <i aria-hidden="true">⌕</i>
            <input id="portal-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search 866 articles" />
            {query && <button className="portal-clear" type="button" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
            <button className="portal-submit" type="submit">Search</button>
          </form>
        </div>

        <div className={"discover-shell " + (discoverOpen ? "open" : "")}>
          <button className="discover-orb" type="button" onClick={() => setDiscoverOpen((open) => !open)} aria-expanded={discoverOpen} aria-controls="discover-panel">
            <span className="orb-ring orb-ring-one" /><span className="orb-ring orb-ring-two" /><span className="orb-cell cell-one" /><span className="orb-cell cell-two" /><b>{discoverOpen ? "−" : "+"}</b>
          </button>
          <span className="discover-label">Discover</span>
          <aside className="discover-panel" id="discover-panel">
            <button className="discover-close" type="button" onClick={() => setDiscoverOpen(false)} aria-label="Close discover panel">×</button>
            <article><p>Page of the day</p><div className="discover-image penicillium" /><small>Microorganism · Fungal genus</small><h2><em>Penicillium</em></h2><span>A familiar fungus with a less familiar place in the human mycobiome.</span><a href="#penicillium">Read the profile →</a></article>
            <article><p>Did you know?</p><blockquote><em>Helicobacter pylori</em> depends on nickel for two enzymes central to life in the stomach.</blockquote><a href="#evidence">Follow the connection →</a></article>
            <article><p>Featured signatures</p>{["Alzheimer’s disease","Autism spectrum disorder","Cardiovascular disease","Colorectal cancer"].map((item) => <button type="button" key={item} onClick={() => { setDiscoverOpen(false); document.querySelector("#signatures")?.scrollIntoView({ behavior: "smooth" }); }}>{item}<span>↗</span></button>)}</article>
          </aside>
        </div>

        <div className="portal-dots" aria-label="Choose background">
          {heroSlides.map((_, index) => <button type="button" aria-label={`Show background ${index + 1}`} className={activeSlide === index ? "active" : ""} onClick={() => setActiveSlide(index)} key={index} />)}
        </div>
        <a className="portal-scroll" href="#encyclopedia"><span>Continue exploring</span><i>↓</i></a>
      </section>

      <section className="encyclopedia" id="encyclopedia">
        <div className="section-kicker"><span>01</span> Explore the encyclopedia</div>
        <div className="section-heading">
          <h2>Start with a question.<br /><em>Follow the evidence.</em></h2>
          <p>Every entry is part of a larger network. Search directly, browse a knowledge domain, or move from a condition to the organisms and mechanisms studied alongside it.</p>
        </div>
        <div className="filter-row" aria-label="Filter encyclopedia entries">
          {filters.map((filter) => <button type="button" className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>)}
          <span>{visibleEntries.length} {visibleEntries.length === 1 ? "result" : "results"}</span>
        </div>
        <div className="entry-grid">
          {visibleEntries.map((entry, index) => (
            <article className="entry-card" id={entry.id} key={entry.id}>
              <div className="entry-top">
                <span className={"entry-code " + entry.tone}>{entry.code}</span>
                <span className="entry-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p>{entry.label}</p>
              <h3>{entry.title}</h3>
              <span className="entry-summary">{entry.summary}</span>
              <div className="entry-footer"><b>{entry.category}</b><span aria-hidden="true">↗</span></div>
            </article>
          ))}
        </div>
        {visibleEntries.length === 0 && <div className="empty-state"><p>No entry matches that trail yet.</p><button type="button" onClick={() => { setQuery(""); setActiveFilter("All"); }}>Reset the index</button></div>}
      </section>

      <section className="signature-section" id="signatures">
        <div className="signature-intro">
          <div className="section-kicker light"><span>02</span> Signature explorer</div>
          <h2>See the whole<br /><em>biological picture.</em></h2>
          <p>A signature gathers findings that are often separated across papers and disciplines. WikiBiome keeps their direction, context, and source visible.</p>
          <div className="signature-tabs" aria-label="Featured signatures">
            {signatures.map((item) => <button type="button" className={signature.name === item.name ? "active" : ""} onClick={() => setSignature(item)} key={item.name}>{item.name}<span>→</span></button>)}
          </div>
        </div>
        <div className="signature-panel">
          <div className="panel-header"><div><span>Disease signature</span><h3>{signature.name}</h3></div><span className="panel-status"><i /> {signature.studies}</span></div>
          <div className="signal-banner"><span>Primary lens</span><b>{signature.focus}</b><small>Connections are organized by finding, population, and study design.</small></div>
          <div className="signal-columns">
            <div><span className="signal-label">Microorganisms</span>{signature.taxa.map((item, index) => <p key={item}><i>{index + 1}</i>{item}<b>view</b></p>)}</div>
            <div><span className="signal-label">Mechanisms</span>{signature.mechanisms.map((item, index) => <p key={item}><i>{index + 1}</i>{item}<b>view</b></p>)}</div>
          </div>
          <div className="panel-footer"><span>Metallomic context</span><b>Exposure literature</b><b>Homeostasis markers</b><a href="#evidence">Open evidence matrix →</a></div>
        </div>
      </section>

      <section className="daily-section">
        <div className="daily-art" aria-hidden="true"><div className="petri-ring pr-one" /><div className="petri-ring pr-two" /><div className="colony c-one" /><div className="colony c-two" /><div className="colony c-three" /><span>Pg</span></div>
        <div className="daily-copy">
          <div className="section-kicker"><span>03</span> Page of the day</div>
          <p className="taxonomy">Microorganism · Fungal genus</p>
          <h2><em>Penicillium</em></h2>
          <p>Best known for its role in the story of penicillin, <em>Penicillium</em> also appears in research on the gut mycobiome—the fungal community living alongside bacteria and other microorganisms.</p>
          <div className="daily-links"><span><b>Explore</b> condition associations</span><span><b>Review</b> supporting studies</span><span><b>Connect</b> related mechanisms</span></div>
          <a href="#penicillium">Read the profile <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="section-kicker"><span>04</span> Built for scientific context</div>
        <div className="section-heading evidence-heading">
          <h2>Not just claims.<br /><em>Traceable connections.</em></h2>
          <p>WikiBiome’s structure helps readers see what was studied, where findings agree, and where the science remains unsettled.</p>
        </div>
        <div className="evidence-grid">
          <article><span>01</span><b>Study-backed summaries</b><p>Connections lead back to the literature and retain the context needed to interpret them.</p></article>
          <article><span>02</span><b>Direction-aware signatures</b><p>Reported increases, decreases, and mixed findings remain distinct rather than collapsing into one claim.</p></article>
          <article><span>03</span><b>Cross-domain navigation</b><p>Move between conditions, taxa, mechanisms, metals, interventions, and host defenses without losing the thread.</p></article>
          <article><span>04</span><b>Open knowledge</b><p>Scientific education designed to be shared, improved, and expanded by a wider community.</p></article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-network" aria-hidden="true"><span className="about-core">W</span>{domains.map((domain, index) => <i className={"about-dot dot-" + index} key={domain.key}>{domain.mark}</i>)}</div>
        <div>
          <div className="section-kicker light"><span>05</span> The project</div>
          <h2>Complex science,<br /><em>made navigable.</em></h2>
          <p>WikiBiome advances microbiome medicine through open scientific education. It is an encyclopedia, a research map, and a shared vocabulary for a field that crosses many boundaries.</p>
          <a href="#contribute">Help build the knowledge base →</a>
        </div>
      </section>

      <section className="contribute" id="contribute">
        <p>For researchers, clinicians, students, and curious readers.</p>
        <h2>Help the evidence<br /><em>become discoverable.</em></h2>
        <span>Know a paper that belongs in the knowledge graph? Contribute a study, suggest a condition, or help review an existing entry.</span>
        <div><a className="primary-button" href="mailto:hello@wikibiome.com?subject=Submit%20a%20paper%20to%20WikiBiome">Submit a paper <i aria-hidden="true">↗</i></a><a className="text-button" href="mailto:hello@wikibiome.com?subject=Contributing%20to%20WikiBiome">Become a contributor <i aria-hidden="true">→</i></a></div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">W</span><span>WikiBiome</span></a>
        <p>The human microbiome encyclopedia.</p>
        <div><a href="#encyclopedia">Encyclopedia</a><a href="#signatures">Signatures</a><a href="#evidence">Evidence</a><a href="#contribute">Contribute</a></div>
        <span>Open scientific education for the microbiome medicine community.</span>
      </footer>
    </main>
  );
}
