import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";

export const metadata: Metadata = {
  title: "Terms of Use — WikiBiome",
  description: "Terms governing educational use, contributions, licensing, and support of WikiBiome.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Use — WikiBiome", description: "WikiBiome terms of use.", images: [] },
  twitter: { card: "summary", title: "Terms of Use — WikiBiome", description: "WikiBiome terms of use.", images: [] },
};

export default function TermsPage() {
  return (
    <><WikiHeader /><main className="project-page"><header className="project-page-hero"><span>Governance · effective August 31, 2026</span><h1>Terms of Use</h1><p>These terms apply when you read, cite, share, support, or propose changes to WikiBiome.</p></header><article className="project-prose">
      <section><h2>Educational information</h2><p>WikiBiome is an educational reference, not a medical service. Its content does not provide diagnosis, treatment, individualized risk assessment, or a substitute for advice from a qualified healthcare professional. Scientific evidence changes, and pages may contain open questions or source-registry warnings.</p></section>
      <section><h2>Accuracy and evidence</h2><p>WikiBiome works to preserve citations, provenance, uncertainty, and revision history, but it does not warrant that every page is complete, current, or error-free. Readers should inspect the cited research and use professional judgment before relying on scientific or health information.</p></section>
      <section><h2>Contributions</h2><p>You may propose corrections, new evidence, clarifications, accessibility changes, and link repairs through the moderated contribution workflow. By submitting material, you confirm that you have the right to provide it and grant WikiBiome permission to review, edit, attribute, preserve, and publish accepted text as part of the knowledge base. Submission does not guarantee acceptance.</p></section>
      <section><h2>Licensing and third-party material</h2><p>Unless a page states otherwise, original WikiBiome text and in-house scientific reconstructions are made available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 4.0 license</a>. Research papers, quotations, third-party images, trademarks, and other third-party materials remain subject to their own rights and licenses. A citation does not transfer ownership of the cited work.</p></section>
      <section><h2>Support and editorial independence</h2><p>Support payments are processed by Stripe for Microbiome Signatures LLC, the parent company of WikiBiome and Microbiome Medicine. Payments are not described as tax-deductible. Financial support cannot purchase citations, inclusion, favorable treatment, a Keystone designation, or visibility.</p></section>
      <section><h2>Acceptable use</h2><p>Do not misuse the site, interfere with its operation, evade access controls, automate abusive requests, impersonate another person, submit unlawful material, or use the contribution system to promote unsupported medical claims, products, or services.</p></section>
      <section><h2>Project responsibility</h2><p>WikiBiome is a project of Microbiome Medicine. Payment processing and business administration are conducted through Microbiome Signatures LLC. To report a legal, copyright, or attribution concern, use the <Link href="/contact">contact page</Link>.</p></section>
      <section><h2>Changes</h2><p>These terms may be updated as the project, participation system, or legal requirements change. The effective date above identifies the current published version. The <Link href="/privacy">Privacy page</Link> explains how implemented features handle personal information.</p></section>
    </article></main></>
  );
}
