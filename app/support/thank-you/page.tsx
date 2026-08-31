import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";

export const metadata: Metadata = {
  title: "Thank you for supporting WikiBiome",
  description: "Thank you for helping sustain WikiBiome’s open, evidence-linked microbiome encyclopedia.",
  openGraph: { title: "Thank you for supporting WikiBiome", description: "Your support helps keep WikiBiome free, ad-free, and evidence-linked.", images: [] },
  twitter: { card: "summary", title: "Thank you for supporting WikiBiome", description: "Your support helps keep WikiBiome free, ad-free, and evidence-linked.", images: [] },
};

export default function SupportThankYouPage() {
  return (
    <>
      <WikiHeader />
      <main className="support-thank-you">
        <section>
          <div className="thank-you-mark" aria-hidden="true"><span>W</span><i /><i /><i /></div>
          <p>Support received · knowledge stays open</p>
          <h1>Thank you for helping WikiBiome keep reading.</h1>
          <p>Your support helps sustain evidence indexing, editorial review, open infrastructure, and the continuing work of turning microbiome research into a useful public reference.</p>
          <div><Link href="/">Return to WikiBiome</Link><Link href="/explore">Explore the knowledge graph</Link></div>
          <small>Financial support never purchases citations, inclusion, favorable treatment, or visibility.</small>
        </section>
      </main>
    </>
  );
}
