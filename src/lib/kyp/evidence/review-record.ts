import { DECISIONS, type Decision, type ReviewItem } from "./review-packet";

/**
 * A completed clinical review record, as a qualified reviewer would return it. This file only CHECKS a record for
 * completeness. A record that passes is complete, not correct: nothing here marks any statement as reviewed, and
 * the app does not read records. Applying a record to the app is a separate, explicitly authorised step.
 */
export interface ReviewRecord {
  packet: string;
  reviewer: { name: string; qualification: string; registrationBody: string; registrationNumber: string; affiliation: string; conflictsOfInterest: string };
  reviewedAt: string;
  decisions: { id: string; contentHash?: string; decision: string; amendedWording?: string; notes?: string }[];
}

const PLACEHOLDER = /^(_+|-+|\.+|tbd|todo|n\/?a|na|none given|unknown|reviewer|name|test|xxx+|placeholder|your name|\?+)$/i;
const real = (v: unknown) => typeof v === "string" && v.trim().length >= 2 && !PLACEHOLDER.test(v.trim());

export function validateReviewRecord(r: ReviewRecord, expectedItems: ReviewItem[], now = new Date()): string[] {
  const expectedItemIds = expectedItems.map((i) => i.id);
  const p: string[] = [];
  if (!r || typeof r !== "object") return ["not a review record"];
  const rv = r.reviewer ?? ({} as ReviewRecord["reviewer"]);
  for (const [k, label] of [["name", "reviewer name"], ["qualification", "professional qualification"], ["registrationBody", "registration body"], ["registrationNumber", "registration number"], ["affiliation", "affiliation"], ["conflictsOfInterest", "conflicts of interest (write 'none' if none)"]] as const)
    if (!real(rv[k])) p.push(`${label} is missing or a placeholder`);
  if (real(rv.name) && /\b(claude|anthropic|gpt|openai|gemini|assistant|bot|ai)\b/i.test(rv.name)) p.push("the reviewer must be a qualified person, not software");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.reviewedAt ?? "") || Number.isNaN(Date.parse(r.reviewedAt))) p.push("reviewedAt must be a real date, YYYY-MM-DD");
  else if (Date.parse(r.reviewedAt) > now.getTime() + 24 * 3600 * 1000) p.push("reviewedAt is in the future");
  const seen = new Set<string>();
  for (const d of r.decisions ?? []) {
    const item = expectedItems.find((i) => i.id === d.id);
    if (!item) p.push(`decision for "${d.id}": no such item in this packet`);
    else if (d.contentHash !== item.hash) p.push(`decision for "${d.id}": it was made on different text, source or applicability than the item now has (hash mismatch). Review the current text again`);
    if (seen.has(d.id)) p.push(`decision for "${d.id}": decided twice`);
    seen.add(d.id);
    if (!DECISIONS.includes(d.decision as Decision)) p.push(`decision for "${d.id}": must be one of ${DECISIONS.join(", ")}`);
    else {
      if (d.decision === "amend" && !real(d.amendedWording)) p.push(`decision for "${d.id}": amend needs the amended wording`);
      if (d.decision !== "accept" && !real(d.notes)) p.push(`decision for "${d.id}": ${d.decision} needs notes saying why`);
    }
  }
  const missing = expectedItemIds.filter((id) => !seen.has(id));
  if (missing.length) p.push(`${missing.length} item(s) have no decision (first: ${missing.slice(0, 3).join(", ")}). Mark any item the reviewer did not cover as request-evidence with a note, or narrow the scope in a separate record`);
  return p;
}
