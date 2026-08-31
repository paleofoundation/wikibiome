import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { STRIPE_SUPPORT_URL, SUPPORT_PROCESSOR_DISCLOSURE } from "@/lib/support";
import { wikiStats } from "@/lib/wikibiome";

export const metadata: Metadata = {
  title: "Support WikiBiome",
  description: "Support the research, editorial review, and infrastructure behind the open WikiBiome encyclopedia.",
  openGraph: { title: "Support WikiBiome", description: "Help keep WikiBiome free, ad-free, and evidence-linked.", images: [] },
  twitter: { card: "summary", title: "Support WikiBiome", description: "Help keep WikiBiome free, ad-free, and evidence-linked.", images: [] },
};

export default function SupportPage() {
  return (
    <>
      <WikiHeader />
      <main className="support-page">
        <header className="support-hero">
          <div><span>Free · ad-free · open access</span><h1>Keep the world&apos;s microbiome encyclopedia moving.</h1><p>Every article requires source retrieval, scientific reading, structured indexing, editorial judgment, and technical maintenance. Support helps WikiBiome do that work without selling attention or scientific influence.</p><div><a href={STRIPE_SUPPORT_URL} aria-describedby="support-processor-disclosure">Support the work <i>♡</i></a><Link href="/contribute">Contribute knowledge instead</Link></div><p className="support-processor" id="support-processor-disclosure">{SUPPORT_PROCESSOR_DISCLOSURE}</p></div>
          <div className="support-orbit" aria-hidden="true"><i /><i /><i /><span>W</span><strong>knowledge<br />stays open</strong></div>
        </header>

        <section className="support-coffee" aria-labelledby="coffee-title">
          <div><span>A small, human way to help</span><h2 id="coffee-title">Buy the research team a coffee.</h2><p>One coffee will not index a corpus. But a community of readers choosing to sustain careful, unglamorous evidence work can.</p></div>
          <a href={STRIPE_SUPPORT_URL} aria-describedby="support-processor-disclosure"><span>Choose your amount securely</span><strong>Buy the research team a coffee</strong><small>$10 suggested · $5 minimum · one-time support</small></a>
        </section>

        <section className="support-impact" aria-labelledby="impact-title">
          <header><span>Where support goes</span><h2 id="impact-title">Fund the layer readers rarely see.</h2></header>
          <div>
            <article><b>01</b><h3>Evidence indexing</h3><p>{wikiStats.sources.toLocaleString()} source records need metadata checks, passage-level linking, and continuing updates.</p></article>
            <article><b>02</b><h3>Editorial review</h3><p>Community suggestions are screened for fidelity, balance, sourcing, public-language clarity, and conflicts.</p></article>
            <article><b>03</b><h3>Open infrastructure</h3><p>Search, histories, relationship maps, accessibility, databases, and hosting keep the corpus useful to everyone.</p></article>
            <article><b>04</b><h3>New signatures</h3><p>Five-layer disease pages reconcile metals, taxa, host defenses, ecology, and microbial functions into one readable record.</p></article>
          </div>
        </section>

        <aside className="support-independence"><span>Editorial firewall</span><h2>Support cannot buy a citation.</h2><p>Submissions and financial support are separate. Donations never guarantee inclusion, designation, favorable treatment, or visibility. Public pages are governed by their evidence record.</p><Link href="/readiness">Inspect the corpus ledger →</Link></aside>

        <footer className="support-contact"><div><span>Ready when you are</span><h2>Help WikiBiome keep reading.</h2></div><a href={STRIPE_SUPPORT_URL} aria-describedby="support-processor-disclosure">Support the work <i>→</i></a></footer>
      </main>
    </>
  );
}
