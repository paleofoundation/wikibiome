import { redirect } from "next/navigation";
import { getDiseaseRecord, normalizeWikiId } from "@/lib/wikibiome";

type SearchParams = Promise<{ disease?: string }>;

export default async function LegacySignaturesPage({ searchParams }: { searchParams: SearchParams }) {
  const { disease } = await searchParams;
  if (disease) {
    const record = getDiseaseRecord(normalizeWikiId(disease));
    if (record) redirect(`/article/${record.canonicalId}#signature`);
  }
  redirect("/category/signature");
}
