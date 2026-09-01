import { verifyResearcherEmail } from "@/lib/research-network";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") || "";
  const accountId = token ? await verifyResearcherEmail(token) : null;
  return Response.redirect(new URL(accountId ? "/researcher/dashboard?email=verified" : "/researcher/dashboard?email=invalid", request.url), 303);
}
