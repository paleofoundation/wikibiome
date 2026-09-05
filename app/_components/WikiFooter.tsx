import Link from "@/app/_components/NativeLink";
import { wikiStats } from "@/lib/wikibiome";
import { STRIPE_SUPPORT_URL, SUPPORT_PROCESSOR_DISCLOSURE } from "@/lib/support";

export function WikiFooter() {
  return (
    <footer className="wiki-footer">
      <div className="wiki-footer-brand">
        <Link href="/" aria-label="WikiBiome home"><span>W</span><strong><i>Wiki</i>Biome</strong></Link>
        <p>An evidence-linked encyclopedia of the organisms, elements, ecological pressures, and molecular conversations shaping human health.</p>
        <small>A project of <a href="https://microbiomemedicine.com" target="_blank" rel="noreferrer">Microbiome Medicine ↗</a></small>
      </div>
      <nav aria-label="Explore WikiBiome"><span>Explore</span><Link href="/explore">Knowledge graph</Link><Link href="/clusters">Condition clusters</Link><Link href="/compare">Compare conditions</Link><Link href="/keystone">Keystone studies</Link><Link href="/search">Search {wikiStats.totalPages} articles</Link></nav>
      <nav aria-label="Participate in WikiBiome"><span>Participate</span><Link href="/researchers">Researcher network</Link><Link href="/researcher/dashboard">Researcher dashboard</Link><Link href="/researcher/works">Find my work</Link><Link href="/propose">Propose content</Link><Link href="/roundtable">Microbiome Roundtable</Link><Link href="/submit-work">Submit research</Link><Link href="/institutions">Institutions</Link><Link href="/research-standard">Research standard</Link><Link href="/research-governance">Research governance</Link><Link href="/contribute">Suggest an edit</Link><Link href="/about">About WikiBiome</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms of Use</Link><a href="https://github.com/paleofoundation/wikibiome" target="_blank" rel="noreferrer">Source repository ↗</a></nav>
      <div className="wiki-footer-support"><span>Keep knowledge open</span><strong>Buy the research team a coffee.</strong><p>Support source indexing, editorial review, and an ad-free public encyclopedia.</p><a href={STRIPE_SUPPORT_URL} aria-describedby="footer-support-disclosure">Support the work <i>♡</i></a><small id="footer-support-disclosure" className="support-processor">{SUPPORT_PROCESSOR_DISCLOSURE}</small></div>
      <div className="wiki-footer-bottom"><span>Content available under CC BY-SA 4.0 unless otherwise noted · Free · ad-free · evidence-linked</span><p>Educational information only. WikiBiome does not provide medical diagnosis or treatment.</p></div>
    </footer>
  );
}
