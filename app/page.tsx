"use client";

import { FormEvent, useMemo, useState } from "react";

const biomes = [
  { id: "rainforest", name: "Tropical rainforest", region: "Amazon Basin", realm: "Land", climate: "Warm · Humid", tone: "forest", description: "Layered canopies, immense rainfall, and intricate relationships across every height." },
  { id: "mangrove", name: "Coastal mangrove", region: "Sundarbans", realm: "Marine", climate: "Tidal · Tropical", tone: "mangrove", description: "Salt-tolerant forests where land and sea shelter one another." },
  { id: "coral", name: "Coral reef", region: "Coral Triangle", realm: "Marine", climate: "Shallow · Sunlit", tone: "reef", description: "Bright underwater cities built through cooperation at the smallest scale." },
  { id: "alpine", name: "Alpine tundra", region: "Himalayas", realm: "Land", climate: "Cold · Windy", tone: "alpine", description: "A high-elevation mosaic shaped by thin air and brief growing seasons." },
  { id: "grassland", name: "Temperate grassland", region: "Eurasian Steppe", realm: "Land", climate: "Seasonal · Dry", tone: "grassland", description: "Open horizons maintained by climate, fire, grazing, and migration." },
  { id: "desert", name: "Hot desert", region: "Sonoran Desert", realm: "Land", climate: "Arid · Variable", tone: "desert", description: "Life tuned to scarcity, dramatic temperature shifts, and sudden abundance." },
  { id: "boreal", name: "Boreal forest", region: "Northern Canada", realm: "Land", climate: "Cool · Seasonal", tone: "boreal", description: "Vast conifer forests threaded with peatlands, lakes, and long winters." },
  { id: "wetland", name: "Freshwater wetland", region: "Okavango Delta", realm: "Freshwater", climate: "Flooded · Seasonal", tone: "wetland", description: "Water-led landscapes that filter, feed, shelter, and connect." },
];

const realms = ["All", "Land", "Freshwater", "Marine"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [realm, setRealm] = useState("All");

  const visibleBiomes = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return biomes.filter((biome) => {
      const matchesRealm = realm === "All" || biome.realm === realm;
      const matchesQuery = !needle || `${biome.name} ${biome.region} ${biome.realm} ${biome.climate}`.toLowerCase().includes(needle);
      return matchesRealm && matchesQuery;
    });
  }, [query, realm]);

  function searchBiomes(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.querySelector("#explore")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WikiBiome home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>WikiBiome</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
          <a href="#field-notes">Field notes</a>
        </nav>
        <a className="nav-cta" href="#contribute">Contribute <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> The living world, connected</p>
          <h1>Every biome has<br />a story to tell.</h1>
          <p className="hero-intro">
            An open field guide to Earth’s living systems—where climate, species,
            people, and place come together.
          </p>
          <form className="search" onSubmit={searchBiomes}>
            <label className="sr-only" htmlFor="biome-search">Search biomes</label>
            <span aria-hidden="true">⌕</span>
            <input
              id="biome-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a biome, region, or realm"
            />
            <button type="submit">Explore</button>
          </form>
          <div className="hero-notes" aria-label="Biome realms">
            <span><b>01</b> Land</span>
            <span><b>02</b> Freshwater</span>
            <span><b>03</b> Marine</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract map of connected global biomes">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="biome-globe">
            <span className="land land-one" />
            <span className="land land-two" />
            <span className="land land-three" />
            <span className="map-pin pin-one" />
            <span className="map-pin pin-two" />
            <span className="map-pin pin-three" />
          </div>
          <div className="floating-note note-top">
            <span>Biome of the day</span>
            <strong>Mediterranean forests</strong>
          </div>
          <div className="floating-note note-bottom">
            <b>One</b><span>shared living system</span>
          </div>
        </div>
      </section>

      <section className="featured-strip" aria-label="Featured biomes">
        <div className="strip-heading">
          <p>Start exploring</p>
          <span>Follow the threads that connect life across the planet.</span>
        </div>
        <div className="featured-list">
          {biomes.slice(0, 3).map((biome) => (
            <a className="featured-card" href={`#${biome.id}`} key={biome.name}>
              <span className={`biome-swatch ${biome.tone}`} aria-hidden="true" />
              <span><b>{biome.name}</b><small>{biome.region}</small></span>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="explorer" id="explore">
        <div className="section-kicker"><span>01</span> Explore the atlas</div>
        <div className="section-heading">
          <h2>A planet of patterns.</h2>
          <p>Climate draws the broad outlines. Water, geology, fire, migration, and time fill in the details. Begin with a realm, then follow your curiosity.</p>
        </div>
        <div className="filter-row" aria-label="Filter by realm">
          {realms.map((option) => (
            <button
              className={realm === option ? "active" : ""}
              key={option}
              onClick={() => setRealm(option)}
              type="button"
            >
              {option}
            </button>
          ))}
          <span className="results-count">{visibleBiomes.length} {visibleBiomes.length === 1 ? "biome" : "biomes"}</span>
        </div>
        <div className="atlas-grid">
          {visibleBiomes.map((biome, index) => (
            <article className="atlas-card" id={biome.id} key={biome.id}>
              <div className={`atlas-art ${biome.tone}`}>
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="realm-tag">{biome.realm}</span>
                <div className="terrain terrain-one" />
                <div className="terrain terrain-two" />
              </div>
              <div className="atlas-copy">
                <div>
                  <p>{biome.region}</p>
                  <h3>{biome.name}</h3>
                </div>
                <span className="card-arrow" aria-hidden="true">↗</span>
                <p className="description">{biome.description}</p>
                <div className="card-meta"><span>Climate</span><b>{biome.climate}</b></div>
              </div>
            </article>
          ))}
        </div>
        {visibleBiomes.length === 0 && (
          <div className="empty-state">
            <p>No matching biome yet.</p>
            <button type="button" onClick={() => { setQuery(""); setRealm("All"); }}>Clear the trail</button>
          </div>
        )}
      </section>

      <section className="connections" id="about">
        <div className="connection-visual" aria-hidden="true">
          <div className="connection-ring ring-a" />
          <div className="connection-ring ring-b" />
          <div className="connection-core"><span>soil</span><b>life</b><span>climate</span></div>
          <i className="node node-a" /><i className="node node-b" /><i className="node node-c" />
        </div>
        <div className="connection-copy">
          <div className="section-kicker light"><span>02</span> See the connections</div>
          <h2>Nothing lives alone.</h2>
          <p>WikiBiome is built around relationships. Instead of treating habitats, species, climate, and communities as separate subjects, we trace the ties between them.</p>
          <div className="connection-list">
            <div><b>Species ↔ habitat</b><span>How life shapes—and is shaped by—place.</span></div>
            <div><b>Water ↔ climate</b><span>The cycles moving energy around the planet.</span></div>
            <div><b>People ↔ landscape</b><span>Knowledge, stewardship, pressure, and change.</span></div>
          </div>
          <a href="#field-notes">Read how the atlas works <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="field-notes" id="field-notes">
        <div className="section-kicker"><span>03</span> From the field</div>
        <div className="section-heading notes-heading">
          <h2>Read the landscape.</h2>
          <a href="#explore">Browse all topics <span aria-hidden="true">↗</span></a>
        </div>
        <div className="notes-grid">
          <article className="lead-note">
            <div className="note-art wetland"><span>FIELD NOTE · FRESHWATER</span><div className="reed r1" /><div className="reed r2" /><div className="reed r3" /></div>
            <div><p>Cycles &amp; connections</p><h3>When a river becomes a landscape</h3><span>Explore seasonal floodplains, where the boundaries between water and land are always moving.</span><a href="#wetland">Follow the water →</a></div>
          </article>
          <article className="small-note"><span className="note-number">01</span><div><p>Adaptation</p><h3>Life at the edge of water</h3><span>How mangroves thrive between two worlds.</span></div><a href="#mangrove" aria-label="Read about mangroves">↗</a></article>
          <article className="small-note"><span className="note-number">02</span><div><p>Ecology</p><h3>The architecture of a canopy</h3><span>A rainforest is many habitats stacked together.</span></div><a href="#rainforest" aria-label="Read about rainforests">↗</a></article>
        </div>
      </section>

      <section className="contribute" id="contribute">
        <p>Built by curious minds, for a living planet.</p>
        <h2>Help the knowledge grow.</h2>
        <span>Researchers, educators, field naturalists, and attentive neighbors all have something to add.</span>
        <div>
          <a className="primary-button" href="mailto:hello@wikibiome.com?subject=Contributing%20to%20WikiBiome">Become a contributor <i aria-hidden="true">↗</i></a>
          <a className="text-button" href="#about">Learn about WikiBiome <i aria-hidden="true">→</i></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">W</span><span>WikiBiome</span></a>
        <p>An open field guide to Earth’s living systems.</p>
        <div><a href="#explore">Explore</a><a href="#about">About</a><a href="#contribute">Contribute</a></div>
        <span>Made with care for the living world.</span>
      </footer>
    </main>
  );
}
