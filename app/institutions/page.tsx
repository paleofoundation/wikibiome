import type { Metadata } from "next";
import Link from "@/app/_components/NativeLink";
import { InstitutionRequestForm } from "@/app/_components/InstitutionRequestForm";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { getResearcherSession, listApprovedInstitutions } from "@/lib/research-network";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Research institutions — WikiBiome", description: "ROR-identified institutions pooling research for moderated WikiBiome ingestion." };

export default async function InstitutionsPage() {
  const [account, institutions] = await Promise.all([getResearcherSession(), listApprovedInstitutions()]);
  return <><WikiHeader /><main className="institutions-page"><header className="research-hero compact"><span>Institution network</span><h1>Bring collections into an interdisciplinary evidence graph.</h1><p>Institution profiles connect accepted works and participating ORCID researchers without paid placement, citation guarantees, or competitive rankings.</p></header><section className="institution-boundaries"><article><b>ROR identity</b><p>Organization metadata is resolved from a persistent ROR identifier, with human review for ambiguous matches.</p></article><article><b>Verified administration</b><p>Institution administrators require an institutional email-domain check plus manual approval.</p></article><article><b>Moderated batches</b><p>DOI, PMID, CSV, RIS, and BibTeX are supported after approval. API ingestion waits until the batch workflow is stable.</p></article></section>{account?.emailVerified ? <InstitutionRequestForm /> : <section className="research-gate inline"><h2>Request access as a verified researcher</h2><p>Connect ORCID and verify your private email before requesting an institution profile.</p><a href={account ? "/researcher/dashboard" : "/api/auth/orcid/start?returnTo=/institutions"}>{account ? "Verify private email" : "Continue with ORCID"}</a></section>}<section className="institution-directory"><header><h2>Participating institutions</h2><span>{institutions.length} approved</span></header>{institutions.length ? institutions.map((item) => <Link href={`/institutions/${item.ror}`} key={item.id}><b>{item.name}</b><span>{item.country || "Global research institution"}</span><i>→</i></Link>) : <p>The institution pilot is accepting its first reviewed profiles.</p>}</section></main></>;
}
