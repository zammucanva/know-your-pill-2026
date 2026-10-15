import { DECISIONS, packetDigest, type Decision, type ReviewItem } from "./review-packet";

/**
 * A completed clinical review record, as a qualified reviewer would return it. This file only CHECKS a record for
 * completeness. A record that passes is complete, not correct: nothing here marks any statement as reviewed, and
 * the app does not read records. Applying a record to the app is a separate, explicitly authorised step.
 */
export interface ReviewRecord {
  packet: string;
  /** What the reviewer covered, in their own words. Required. */
  scope: string;
  /** Digest of the packet content the record was made against (see packetDigest). */
  packetDigest: string;
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
  if (!real(r.packet)) p.push("packet is missing: say which packet this record is for");
  if (!real(r.scope) || r.scope.trim().length < 15) p.push("scope is missing: say in your own words what you reviewed and against what (at least 15 characters)");
  if (r.packetDigest !== packetDigest(expectedItems)) p.push("the packet has changed since this record's template was made (digest mismatch), or the digest is missing. Items were added, removed or edited: review the current packet");
  const rv = r.reviewer ?? ({} as ReviewRecord["reviewer"]);
  for (const [k, label] of [["name", "reviewer name"], ["qualification", "professional qualification"], ["registrationBody", "registration body"], ["registrationNumber", "registration number"], ["affiliation", "affiliation"], ["conflictsOfInterest", "conflicts of interest (write 'none' if none)"]] as const)
    if (!real(rv[k])) p.push(`${label} is missing or a placeholder`);
  if (real(rv.name) && /\b(claude|anthropic|gpt|openai|gemini|assistant|bot|ai|kyp|know your pill|engineering|system|automated|generated|script|template)\b/i.test(rv.name)) p.push("the reviewer must be a named, qualified person, not software, this app or its tooling");
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
      if (!real(d.notes) || (d.notes ?? "").trim().length < 10) p.push(`decision for "${d.id}": every decision needs a recorded rationale of at least 10 characters (for accept: what it was checked against; otherwise why)`);
      if (d.decision === "unresolved" && !real(d.notes)) p.push(`decision for "${d.id}": leaving an item unresolved needs a note saying what evidence is missing`);
    }
  }
  const missing = expectedItemIds.filter((id) => !seen.has(id));
  if (missing.length) p.push(`${missing.length} item(s) have no decision (first: ${missing.slice(0, 3).join(", ")}). Mark any item the reviewer did not cover as request-evidence with a note, or narrow the scope in a separate record`);
  return p;
}

/** Decisions whose item content has changed since they were made (including items that no longer exist). */
export function staleDecisions(r: ReviewRecord, items: readonly ReviewItem[]): string[] {
  return (r.decisions ?? []).filter((d) => items.find((i) => i.id === d.id)?.hash !== d.contentHash).map((d) => d.id);
}

export type PacketStatus = "pending" | "incomplete" | "stale" | "record-complete";
/**
 * Where a packet stands. "record-complete" means a structurally complete record exists for the current content; it is
 * NOT clinical approval, and the application does not read records. With no record the status is "pending".
 */
export function packetStatus(r: ReviewRecord | null | undefined, items: ReviewItem[], now = new Date()): { status: PacketStatus; problems: string[] } {
  if (!r) return { status: "pending", problems: ["no review record exists"] };
  const problems = validateReviewRecord(r, items, now);
  if (!problems.length) return { status: "record-complete", problems };
  return { status: staleDecisions(r, items).length || problems.some((x) => /digest mismatch/.test(x)) ? "stale" : "incomplete", problems };
}
