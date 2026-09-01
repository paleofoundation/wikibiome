import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/app/_components/NativeLink";
import { WikiHeader } from "@/app/_components/WikiArticle";
import { getInstitutionByRor, listAcceptedInstitutionBatches, listInstitutionResearchers } from "@/lib/research-network";

type Props = { params: Promise<{ ror: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ror } = await params;
  const institution = await getInstitutionByRor(ror);
  return institution?.status === "approved" ? { title: `${institution.name} — WikiBiome institution`, description: institution.description || `Research participation by ${institution.name} on WikiBiome.` } : { title: "Institution not found — WikiBiome" };
}

export default async function InstitutionPage({ params }: Props) {
  const { ror } = await params;
  const institution = await getInstitutionByRor(ror);
  if (!institution || institution.status !== "approved") notFound();
  const [researchers, batches] = await Promise.all([listInstitutionResearchers(institution.id), listAcceptedInstitutionBatches(institution.id)]);
  const works = batches.flatMap((batch) => parseIdentifiers(batch.identifiersJson).map((identifier) => ({ identifier, format: batch.format, batchId: batch.id }))).slice(0, 500);
  const structuredData = { "@context": "https://schema.org", "@type": "Organization", name: institution.name, url: `https://www.wikibiome.com/institutions/${institution.ror}`, sameAs: `https://ror.org/${institution.ror}`, identifier: { "@type": "PropertyValue", propertyID: "ROR", value: institution.ror }, location: institution.country || undefined };
  return <><WikiHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }} /><main className="research-profile institution-profile"><header><span>ROR-verified institution</span><h1>{institution.name}</h1><a href={`https://ror.org/${institution.ror}`} target="_blank" rel="noreferrer">ROR {institution.ror} ↗</a>{institution.description && <p>{institution.description}</p>}</header><section className="institution-summary"><article><strong>{researchers.length}</strong><span>participating ORCID researchers</span></article><article><strong>{batches.reduce((total, batch) => total + batch.recordCount, 0)}</strong><span>accepted batch records</span></article><article><strong>{institution.country || "—"}</strong><span>organization location</span></article></section><section className="profile-works"><header><span>Accepted collections</span><h2>Works contributed through reviewed batches</h2></header>{works.length ? works.map((work, index) => <article key={`${work.batchId}-${index}`}><span>{work.format.toUpperCase()}</span><div><h3>{work.identifier}</h3><p>Accepted for WikiBiome’s editorial ingestion workflow; acceptance does not guarantee a public citation.</p></div></article>) : <p>No accepted batch works yet.</p>}</section><section className="profile-works"><header><span>Participants</span><h2>Researchers connected to this institution</h2></header>{researchers.length ? researchers.map(({ researcher }) => <article key={researcher.accountId}><span>{researcher.role.replaceAll("_", " ")}</span><div><h3><Link href={`/researchers/${researcher.orcid}`}>{researcher.name}</Link></h3><p>{researcher.expertiseSelf.join(" · ") || "Expertise not listed"}</p></div></article>) : <p>No public researcher memberships yet.</p>}</section><aside className="editorial-firewall"><b>Institutional participation is not endorsement.</b><p>Profiles show accepted works and participating researchers. They do not sell placement, rank institutions, guarantee citation, or allow an administrator to claim authorship for an individual.</p></aside></main></>;
}

function parseIdentifiers(value: string) {
  try { const parsed = JSON.parse(value); return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : []; } catch { return []; }
}
