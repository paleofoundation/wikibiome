import { assertSameOriginRequest, createInstitution, getResearcherSessionFromRequest } from "@/lib/research-network";
import { lookupRorOrganization } from "@/lib/research-metadata";

export async function POST(request: Request) {
  try { assertSameOriginRequest(request); } catch (error) { return Response.json({ error: error instanceof Error ? error.message : "Request rejected." }, { status: 403 }); }
  const account = await getResearcherSessionFromRequest(request);
  if (!account) return Response.json({ error: "ORCID sign-in is required." }, { status: 401 });
  const payload = await request.json() as Record<string, unknown>;
  try {
    const organization = await lookupRorOrganization(payload.ror);
    return Response.json({ institution: await createInstitution({ account, ...organization, description: payload.description }), organization }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "The institution request could not be submitted." }, { status: 400 });
  }
}
