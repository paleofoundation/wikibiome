import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";

export const metadata: Metadata = {
  title: "Privacy — WikiBiome",
  description: "How WikiBiome handles browsing, contribution, authentication, and support-payment information.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy — WikiBiome", description: "WikiBiome privacy information.", images: [] },
  twitter: { card: "summary", title: "Privacy — WikiBiome", description: "WikiBiome privacy information.", images: [] },
};

export default function PrivacyPage() {
  return (
    <><WikiHeader /><main className="project-page"><header className="project-page-hero"><span>Governance · effective August 31, 2026</span><h1>Privacy</h1><p>WikiBiome is designed for public reading with minimal data collection. This page describes the information used by the features currently implemented on the site.</p></header><article className="project-prose">
      <section><h2>Public browsing</h2><p>You can read articles, sources, indexes, and research tools without creating an account. Standard technical request information may be processed by the hosting and security infrastructure to deliver pages, prevent abuse, and maintain service reliability.</p></section>
      <section><h2>Signed-in contributions</h2><p>WikiBiome uses Sign in with ChatGPT for the moderated contribution workflow. When you sign in, the site receives an account identifier, email address, and—when available—your name. A submitted suggestion stores that identity together with the selected page, section, proposed text, rationale, supporting source, timestamps, status, and moderator notes.</p><p>This information is used to attribute submissions, communicate about review, prevent anonymous medical rewriting, and preserve a recoverable editorial history. Contributions are not published automatically.</p></section>
      <section><h2>Support payments</h2><p>Support payments open a Stripe-hosted checkout page. Stripe processes payment credentials for Microbiome Signatures LLC. WikiBiome does not request or store card numbers in its application code. Stripe’s own privacy terms apply to the checkout service.</p></section>
      <section><h2>Cookies and local storage</h2><p>The site may use essential authentication or security storage required by its hosting and sign-in systems. Device-native features such as copying or sharing a link run in your browser. WikiBiome does not include an advertising network or sell browsing information for marketing.</p></section>
      <section><h2>Retention and requests</h2><p>Contribution records are retained to support attribution, editorial review, abuse prevention, and revision history. To request access, correction, or deletion of personal information where applicable, email <a href="mailto:privacy@wikibiome.com">privacy@wikibiome.com</a>. Some records may need to be retained when required for security, legal obligations, or the integrity of an attributed public revision.</p></section>
      <section><h2>Related pages</h2><p><Link href="/terms">Read the Terms of Use</Link>, <Link href="/contact">contact WikiBiome</Link>, or inspect the <Link href="/readiness">public go-live and corpus register</Link>.</p></section>
    </article></main></>
  );
}
