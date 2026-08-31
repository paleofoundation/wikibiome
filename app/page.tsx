"use client";

import { FormEvent, useMemo, useState } from "react";

const domains = [
  { name: "Diseases & Conditions", count: 65, key: "Conditions", mark: "Dx", tone: "plum" },
  { name: "Mechanisms", count: 235, key: "Mechanisms", mark: "Mx", tone: "coral" },
  { name: "Microorganisms", count: 233, key: "Microorganisms", mark: "μ", tone: "green" },
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

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [signature, setSignature] = useState(signatures[0]);

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
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WikiBiome home"><span className="brand-mark" aria-hidden="true">W</span><span>WikiBiome</span></a>
        <nav aria-label="Main navigation">
          <a href="#encyclopedia">Encyclopedia</a>
          <a href="#signatures">Signatures</a>
          <a href="#evidence">Evidence</a>
          <a href="#about">About</a>
        </nav>
        <button className="random-link" type="button" onClick={openRandomArticle}>Random article <span aria-hidden="true">↗</span></button>
        <a className="nav-cta" href="#contribute">Contribute</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> The Microbiome Metallomics Encyclopedia</p>
          <h1>Where microbes, metals &amp; medicine connect.</h1>
          <p className="hero-intro">WikiBiome turns a scattered scientific literature into a navigable knowledge system—linking microorganisms, mechanisms, heavy metals, interventions, and host defenses across human health.</p>
          <form className="search" onSubmit={runSearch}>
            <label className="sr-only" htmlFor="wiki-search">Search WikiBiome</label>
            <span className="search-mark" aria-hidden="true">⌕</span>
            <input id="wiki-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a condition, microorganism, metal, or mechanism" />
            {query && <button className="clear-search" type="button" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
            <button className="search-button" type="submit">Search</button>
          </form>
          <div className="hero-principles"><span><i /> Open scientific education</span><span><i /> Evidence-linked</span><span><i /> Built to be explored</span></div>
        </div>

        <div className="hero-model" aria-label="Knowledge network connecting a condition with microbes, metals, mechanisms, and host defenses">
          <div className="model-grid" />
          <div className="model-ring ring-one" />
          <div className="model-ring ring-two" />
          <div className="model-core"><span>Condition</span><b>Health<br />signature</b><small>Evidence synthesis</small></div>
          <div className="model-node node-microbe"><span>μ</span><b>Microorganisms</b></div>
          <div className="model-node node-metal"><span>Me</span><b>Heavy metals</b></div>
          <div className="model-node node-mechanism"><span>Mx</span><b>Mechanisms</b></div>
          <div className="model-node node-host"><span>Hd</span><b>Host defenses</b></div>
          <div className="evidence-chip"><span>Evidence layer</span><b>Study → finding → connection</b></div>
        </div>
      </section>

      <section className="domain-ribbon" aria-label="Knowledge domains">
        {domains.map((domain) => (
          <button type="button" key={domain.key} onClick={() => chooseDomain(domain.key)}>
            <span className={"domain-mark " + domain.tone}>{domain.mark}</span>
            <span><b>{domain.name}</b><small>{domain.count} entries</small></span>
            <i aria-hidden="true">↗</i>
          </button>
        ))}
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
        <p>The microbiome metallomics encyclopedia.</p>
        <div><a href="#encyclopedia">Encyclopedia</a><a href="#signatures">Signatures</a><a href="#evidence">Evidence</a><a href="#contribute">Contribute</a></div>
        <span>Open scientific education for the microbiome medicine community.</span>
      </footer>
    </main>
  );
}
