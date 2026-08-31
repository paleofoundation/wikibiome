import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { categories, getCategoryCount, getWikiPage, wikiStats } from "@/lib/wikibiome";

export const metadata: Metadata = {
  title: "Explore the knowledge system — WikiBiome",
  description: "Follow organisms, metals, diseases, mechanisms, and interventions through the WikiBiome knowledge system.",
  openGraph: { title: "Explore the knowledge system — WikiBiome", description: "Navigate the connected WikiBiome corpus.", images: [] },
  twitter: { card: "summary", title: "Explore the knowledge system — WikiBiome", description: "Navigate the connected WikiBiome corpus.", images: [] },
};

const pathways = [
  { title: "Gut ecology", description: "Begin with the host–microbe system, then follow its organisms, metabolites, defenses, and disease links.", ids: ["gut-microbiome", "akkermansia-muciniphila", "short-chain-fatty-acids"] },
  { title: "Metal–microbe interface", description: "Trace an element from exposure and biological handling into microbial competition and host consequences.", ids: ["nickel", "nutritional-immunity", "dietary-metal-paradoxes"] },
  { title: "Disease systems", description: "Move from a canonical disease narrative into its metallomic, taxonomic, immune, ecological, and virulence layers.", ids: ["alzheimers-disease", "endometriosis", "type-2-diabetes"] },
];

export default function ExplorePage() {
  return (
    <>
      <WikiHeader />
      <main className="explore-page">
        <header className="explore-hero">
          <div><span>Connected encyclopedia</span><h1>Follow the system,<br />not just the alphabet.</h1><p>WikiBiome keeps familiar encyclopedia navigation while exposing the biological relationships between organisms, elements, host defenses, diseases, and interventions.</p></div>
          <div className="explore-orbit" aria-hidden="true"><i /><i /><i /><strong>W</strong><span>{wikiStats.totalPages}<small>articles</small></span></div>
        </header>

        <section className="explore-domains" aria-labelledby="domains-title">
          <header><span>Knowledge domains</span><h2 id="domains-title">Enter through any evidence layer.</h2></header>
          <div>{categories.map((category, index) => <Link href={`/category/${category.id}`} key={category.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{category.label}</strong><small>{getCategoryCount(category.id)} indexed records</small><em>Browse →</em></Link>)}</div>
        </section>

        <section className="explore-pathways" aria-labelledby="pathways-title">
          <header><span>Suggested pathways</span><h2 id="pathways-title">Three ways into the graph.</h2><p>These are navigation sequences, not generated conclusions. Every step opens the underlying article and its evidence.</p></header>
          <div>{pathways.map((pathway, index) => <article key={pathway.title}><span>Path {String(index + 1).padStart(2, "0")}</span><h3>{pathway.title}</h3><p>{pathway.description}</p><div>{pathway.ids.map((id) => { const page = getWikiPage(id); return page ? <Link href={`/article/${page.id}`} key={id}>{page.title}<i>→</i></Link> : null; })}</div></article>)}</div>
        </section>

        <footer className="explore-footer"><strong>Prefer a direct answer?</strong><p>Search by organism, metal, disease, mechanism, intervention, or source.</p><Link href="/search">Search the complete corpus →</Link></footer>
      </main>
    </>
  );
}
