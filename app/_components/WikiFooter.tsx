import Link from "@/app/_components/NativeLink";
import { wikiStats } from "@/lib/wikibiome";

export function WikiFooter() {
  return (
    <footer className="wiki-footer">
      <div className="wiki-footer-brand">
        <Link href="/" aria-label="WikiBiome home"><span>W</span><strong><i>Wiki</i>Biome</strong></Link>
        <p>An evidence-linked encyclopedia of the organisms, elements, ecological pressures, and molecular conversations shaping human health.</p>
        <small>A project of the <a href="https://paleofoundation.com" target="_blank" rel="noreferrer">Paleo Foundation ↗</a></small>
      </div>
      <nav aria-label="Explore WikiBiome"><span>Explore</span><Link href="/explore">Knowledge graph</Link><Link href="/search">Search {wikiStats.totalPages} articles</Link><Link href="/category/disease">Disease signatures</Link><Link href="/readiness">Corpus status</Link></nav>
      <nav aria-label="Participate in WikiBiome"><span>Participate</span><Link href="/contribute">Suggest an edit</Link><Link href="/contributions">Your submissions</Link><Link href="/support">Support WikiBiome</Link><a href="https://github.com/paleofoundation/wikibiome" target="_blank" rel="noreferrer">Source repository ↗</a></nav>
      <div className="wiki-footer-support"><span>Keep knowledge open</span><strong>Buy the research team a coffee.</strong><p>Support source indexing, editorial review, and an ad-free public encyclopedia.</p><Link href="/support">Support the work <i>♡</i></Link></div>
      <div className="wiki-footer-bottom"><span>Free · ad-free · evidence-linked</span><p>Educational information only. WikiBiome does not provide medical diagnosis or treatment.</p></div>
    </footer>
  );
}
