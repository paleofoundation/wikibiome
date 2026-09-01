import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { publicPageMetadata } from "@/lib/search-discovery";
import { wikiStats } from "@/lib/wikibiome";

export const metadata: Metadata = publicPageMetadata({
  title: "Researcher network — WikiBiome",
  description: "Claim cited work, contribute research, and connect evidence across disciplines with ORCID-authenticated researchers.",
  path: "/researchers",
});

export default function ResearchersPage() {
  return (
    <><WikiHeader /><main className="research-landing"><header className="research-hero"><span>Claim → Contribute → Collaborate</span><h1>Put researchers inside the knowledge graph.</h1><p>WikiBiome connects authenticated authors to the {wikiStats.sources.toLocaleString()} evidence records already shaping its public synthesis—then gives them a place to add context, contribute work, and cross disciplinary boundaries.</p><div><a className="research-primary" href="/api/auth/orcid/start?returnTo=/researcher/dashboard">Connect ORCID</a><Link href="/research-standard">Read the research standard</Link></div></header>
      <section className="research-flywheel" aria-label="Researcher participation loop"><article><b>01</b><h2>Claim</h2><p>Every coauthor can independently claim a cited paper. DOI and authenticated ORCID metadata verify straightforward matches; ambiguous cases go to human review.</p></article><article><b>02</b><h2>Contribute</h2><p>Review the citation, add limitations or author context, and submit related DOI, PMID, or preprint records to the editorial queue.</p></article><article><b>03</b><h2>Collaborate</h2><p>Join public, source-linked discussions on articles and evidence records. The first three posts from every researcher are premoderated.</p></article></section>
      <section className="research-principles"><div><span>The editorial firewall</span><h2>Identity earns attribution—not control.</h2></div><div><p>Claims verify authorship but never transfer copyright or editorial authority. Author responses supplement WikiBiome’s independent synthesis.</p><p>Researcher emails remain private. Research notifications, community digests, and Microbiome Medicine fundraising each require separate consent.</p><p>Payments never influence roles, visibility, citations, moderation, or Keystone designation.</p></div></section>
      <section className="research-entry-grid"><Link href="/submit-work"><span>For authors</span><h2>Add a work</h2><p>Import bibliographic metadata and optionally quarantine an authorized manuscript for editorial ingestion.</p><b>Open work intake →</b></Link><Link href="/institutions"><span>For institutions</span><h2>Pool a collection</h2><p>Request a ROR-identified institution profile and prepare DOI, PMID, CSV, RIS, or BibTeX batches.</p><b>Institution pilot →</b></Link><Link href="/keystone"><span>For research teams</span><h2>Bridge the graph</h2><p>Understand the existing graph-based Keystone criteria and why metallomics belongs in cross-omics reporting.</p><b>Explore Keystone studies →</b></Link></section>
    </main></>
  );
}
