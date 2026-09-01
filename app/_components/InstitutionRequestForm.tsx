"use client";

import { useState, type FormEvent } from "react";

export function InstitutionRequestForm() {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/institutions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ror: form.get("ror"), description: form.get("description") }),
    });
    const result = await response.json() as { organization?: { name: string }; institution?: { ror: string }; error?: string };
    if (!response.ok) {
      setState("error");
      setMessage(result.error || "The institution request could not be submitted.");
      return;
    }
    setState("saved");
    setMessage(`${result.organization?.name || "Institution"} was matched through ROR and sent for administrator verification.`);
    event.currentTarget.reset();
  }

  return (
    <form className="research-form institution-request" onSubmit={submit}>
      <header><span>Institution pilot</span><h2>Request an institution profile</h2><p>WikiBiome resolves the organization through ROR. Administrator access then requires an institutional email-domain check and manual approval.</p></header>
      <label><span>ROR identifier</span><input name="ror" required placeholder="https://ror.org/012345678" /></label>
      <label><span>How will your team participate?</span><textarea name="description" rows={5} maxLength={3000} placeholder="Describe the research group, relevant collections, and intended submission workflow." /></label>
      <footer><p>Institutions cannot claim individual authorship or guarantee citation.</p><button disabled={state === "saving"}>{state === "saving" ? "Matching ROR…" : "Request profile"}</button></footer>
      {message && <p className={`form-message ${state}`} role="status">{message}</p>}
    </form>
  );
}
