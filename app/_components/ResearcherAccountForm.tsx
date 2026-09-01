"use client";

import { useState, type FormEvent } from "react";

type Account = {
  displayName: string;
  orcid: string;
  biography: string;
  affiliations: string[];
  expertiseSelf: string[];
  email: string | null;
  emailVerified: boolean;
  preferences: { researchNotifications: boolean; communityDigest: boolean; fundraising: boolean };
};

export function ResearcherAccountForm({ account }: { account: Account }) {
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/account", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        biography: form.get("biography"),
        affiliations: form.get("affiliations"),
        expertise: form.get("expertise"),
        email: form.get("email"),
        researchNotifications: form.get("researchNotifications") === "on",
        communityDigest: form.get("communityDigest") === "on",
        fundraising: form.get("fundraising") === "on",
      }),
    });
    const result = await response.json() as { error?: string; verificationPending?: boolean; verificationUrl?: string };
    if (!response.ok) {
      setState("error");
      setMessage(result.error || "Your profile could not be saved.");
      return;
    }
    setState("saved");
    setMessage(result.verificationPending ? "Profile saved. Check your inbox to verify the private email address." : "Profile saved.");
    if (result.verificationUrl) setMessage(`Profile saved. Development verification link: ${result.verificationUrl}`);
  }

  return (
    <form className="research-form account-form" onSubmit={submit}>
      <div className="research-form-grid">
        <label><span>Public name</span><input name="name" defaultValue={account.displayName} required maxLength={180} /></label>
        <label><span>Authenticated ORCID</span><input value={account.orcid} readOnly aria-readonly="true" /></label>
      </div>
      <label><span>Private contact email <small>{account.emailVerified ? "Verified · never displayed publicly" : "Verification required for claims, submissions, and discussions"}</small></span><input name="email" type="email" defaultValue={account.email || ""} required autoComplete="email" /></label>
      <label><span>Public biography</span><textarea name="biography" defaultValue={account.biography} rows={5} maxLength={3000} /></label>
      <div className="research-form-grid">
        <label><span>Affiliations <small>One per line</small></span><textarea name="affiliations" defaultValue={account.affiliations.join("\n")} rows={5} /></label>
        <label><span>Self-declared expertise <small>One per line</small></span><textarea name="expertise" defaultValue={account.expertiseSelf.join("\n")} rows={5} /></label>
      </div>
      <fieldset className="consent-options"><legend>Email preferences</legend>
        <label><input type="checkbox" name="researchNotifications" defaultChecked={account.preferences.researchNotifications} /><span><b>Research activity</b> Replies, claim decisions, and editorial updates.</span></label>
        <label><input type="checkbox" name="communityDigest" defaultChecked={account.preferences.communityDigest} /><span><b>Community digest</b> An occasional summary of cross-disciplinary work.</span></label>
        <label><input type="checkbox" name="fundraising" defaultChecked={account.preferences.fundraising} /><span><b>Microbiome Medicine support</b> Optional updates and fundraising. Never required to participate.</span></label>
      </fieldset>
      <footer><p>Consent choices are separate and can be changed here at any time.</p><button disabled={state === "saving"}>{state === "saving" ? "Saving…" : account.emailVerified ? "Save profile" : "Save and verify email"}</button></footer>
      {message && <p className={`form-message ${state}`} role="status">{message}</p>}
    </form>
  );
}
