import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { CLAIM_RECORDS, claimsFor, sourcesFor } from "./index";
import { PLAIN_SENTENCES, plainSummaryFor } from "./plain-summaries";
import { contentHash } from "@/lib/kyp/content-hash";
import { classifyViva } from "@/lib/kyp/modes/build";
import type { ClaimRecord, SourceRecord } from "./types";
import { formOfSource } from "./label-form";
import { sourceKind } from "./source-label";

/**
 * A packet a qualified clinical reviewer can work from. It is NOT a review record: it states no decision, names no
 * reviewer, and every decision field is blank. Producing it is an engineering step; clinical approval is a person's.
 */
export const DECISIONS = ["accept", "amend", "reject", "request-evidence", "unresolved"] as const;
export type Decision = (typeof DECISIONS)[number];
const blankDecision = "Decision (accept / amend / reject / request-evidence / unresolved): ____   Amended wording (if amend): ____   Rationale (required for every decision): ____";
const reviewerBlock = [
  "## Reviewer identity (once per packet; no decision below counts without all of it)",
  "",
  "Name: ____",
  "Professional qualification (for example MBBS, MD Psychiatry, MD Pharmacology, PharmD): ____",
  "Registration body and number (for example National Medical Commission or State Medical Council): ____",
  "Affiliation: ____",
  "Conflicts of interest (write 'none' if none): ____",
  "Date of review: ____",
  "Scope (what you reviewed and against what, in your own words; the record's `scope` field): ____",
  "",
  "Record the outcome in the matching JSON template (`<slug>.record-template.json`) and check it with `bun scripts/evidence/review-record-check.ts <file>`. The record also carries the packet digest (which ties it to this exact packet content) and the check fails if any item has changed since. A passing check means the record is complete. It is not clinical approval, and the app never shows a statement as reviewed on that basis alone.",
  "",
];
/** Items a reviewer can decide on, in packet order: Patient Guide groups (by top-level key), then claim ids. */
export const IN_SHORT_PACKET = "in-short-bank";
export const VIVA_PACKET = "viva-findings";
/** MBBS viva entries in the registry that the lens cannot show as a question and answer. Read-only: the registry is never changed. */
export function vivaFindings(): { id: string; slug: string; index: number; reason: string; text: string; reviewed: string }[] {
  const out: { id: string; slug: string; index: number; reason: string; text: string; reviewed: string }[] = [];
  for (const d of drugs) {
    const raw = (d as unknown as { examLens?: { mbbs?: { viva?: unknown } } }).examLens?.mbbs?.viva;
    if (!Array.isArray(raw)) continue;
    raw.forEach((t, index) => {
      if (typeof t !== "string") return;
      const c = classifyViva(t);
      if (c.type === "needs-review") out.push({ id: `${d.slug}#viva[${index}]`, slug: d.slug, index, reason: c.reason, text: t, reviewed: `lastReviewed ${d.lastReviewed ?? "not stated"}; sources noted by the registry: ${(d.reviewers ?? []).join(" | ") || "none"}` });
    });
  }
  return out;
}
export interface ReviewItem {
  id: string;
  /** Hash of everything a decision depends on: the wording, the exact passage, the source, and where it applies. */
  hash: string;
}
export function reviewItems(slug: string): ReviewItem[] {
  if (slug === VIVA_PACKET) return vivaFindings().map((v) => ({ id: v.id, hash: contentHash(JSON.stringify([v.id, v.text, v.reason])) }));
  if (slug === IN_SHORT_PACKET) {
    const uses = inShortUses();
    return PLAIN_SENTENCES.map((b) => ({ id: b.id, hash: inShortItemHash(b, [...(uses.get(b.id)?.keys() ?? [])]) }));
  }
  const guide = getPatientGuide(slug);
  const items: ReviewItem[] = [];
  if (guide) for (const [k, v] of Object.entries(guide)) if (k !== "slug") items.push({ id: `guide:${k}`, hash: contentHash(JSON.stringify([slug, k, v])) });
  const srcs = new Map(sourcesFor(slug).map((s) => [s.id, s]));
  for (const c of claimsFor(slug)) items.push({ id: c.id, hash: claimItemHash(c, srcs.get(c.sourceId)) });
  return items;
}
/** Everything a decision on one statement depends on. A change to any part (wording, passage, source, formulation or population in `applicability`, limits) makes an old decision stale. */
/** A decision on a bank sentence depends on its wording, its support patterns AND the source wordings it stands for. */
export const inShortItemHash = (b: { id: string; text: string; support: RegExp[] }, wordings: string[]): string => contentHash(JSON.stringify([b.id, b.text, b.support.map((r) => r.source), [...wordings].sort()]));
export const claimItemHash = (c: Pick<ClaimRecord, "id" | "slug" | "category" | "patientWording" | "wordingKind" | "passage" | "sourceId" | "applicability" | "limitations">, s?: Pick<SourceRecord, "title" | "url" | "identifier" | "publishedDate" | "formulation" | "jurisdiction" | "type" | "productTitle" | "organisation">): string =>
  contentHash(JSON.stringify([c.id, c.slug, c.category, c.patientWording, c.wordingKind, c.passage, c.sourceId, c.applicability, c.limitations, s ? [s.title, s.url, s.identifier, s.publishedDate ?? null, s.formulation ?? null, s.jurisdiction, s.type, s.productTitle, s.organisation] : null]));
/** One digest of the whole packet: it changes when any item's wording, passage, source metadata or applicability changes, or an item is added or removed. */
export const packetDigest = (items: readonly ReviewItem[]): string => contentHash(JSON.stringify(items.map((i) => [i.id, i.hash])));
export const reviewItemIds = (slug: string): string[] => reviewItems(slug).map((i) => i.id);
/** The empty record a reviewer fills in. It is deliberately invalid until every field is real. */
export function blankRecordTemplate(slug: string) {
  return {
    packet: slug,
    // What the reviewer actually covered, in their own words (for example "all 31 statements for sertraline against the current Indian package insert").
    scope: "",
    // Filled by engineering: names the exact packet content this template was made from. The reviewer never edits it.
    packetDigest: packetDigest(reviewItems(slug)),
    reviewer: { name: "", qualification: "", registrationBody: "", registrationNumber: "", affiliation: "", conflictsOfInterest: "" },
    reviewedAt: "",
    // contentHash is filled by engineering: it names the exact text a decision applies to. The reviewer never edits it.
    decisions: reviewItems(slug).map(({ id, hash }) => ({ id, contentHash: hash, decision: "", amendedWording: "", notes: "" })),
  };
}

function walk(v: unknown, path: string, out: string[]) {
  if (typeof v === "string") out.push(`- ${path}: ${v}`);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i + 1}]`, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) if (k !== "slug") walk(x, path ? `${path} > ${k}` : k, out);
}

export function vivaReviewPacket(): string {
  const L: string[] = ["# Clinical review packet: MBBS viva items the lens cannot show", ""];
  L.push("**Status: NOT REVIEWED.** These registry entries are protected medication data and are not changed by this packet. The lens shows them as \"needs review\" instead of guessing where the question ends. A decision here is a recommendation about the registry text; applying it needs the applicable authorisation and a content-lock baseline update. See reports/medication-audit/four-mode/viva-review-findings.md.", "");
  L.push(...reviewerBlock);
  for (const v of vivaFindings()) {
    L.push(`### ${v.id}`, "", `Registry text (verbatim): ${v.text}`, "", `Why the lens cannot show it: ${v.reason}`, "", `Registry review metadata: ${v.reviewed}`, "", blankDecision, "");
  }
  return L.join("\n");
}

export function reviewPacket(slug: string): string {
  if (slug === VIVA_PACKET) return vivaReviewPacket();
  const d = drugs.find((x) => x.slug === slug);
  if (!d) throw new Error(`unknown medicine ${slug}`);
  const guide = getPatientGuide(slug);
  const claims = claimsFor(slug);
  const sources = sourcesFor(slug);
  const L: string[] = [];
  L.push(`# Clinical review packet: ${d.genericName}`, "");
  L.push("**Status: NOT REVIEWED.** This packet is prepared for a qualified clinical reviewer. It is not a review record. It records no decision and names no reviewer; every decision field below is blank. Engineering checks (quotes found in sources, numbers not added) do not make any statement correct, applicable or approved.", "");
  L.push("**Indian product information:** not checked for this medicine. Statements below rest on the documents listed, none of which is an Indian label unless it says so.", "");
  L.push(...reviewerBlock);
  if (guide) {
    L.push("## Patient Guide (authored for this app)", "", "Each line is shown to patients. Check it against current Indian product information and clinical practice.", "");
    for (const [k, v] of Object.entries(guide)) {
      if (k === "slug") continue;
      const lines: string[] = [];
      walk(v, k, lines);
      L.push(`### guide:${k}`, "", ...lines, "", blankDecision, "");
    }
  }
  if (sources.length) {
    L.push("## Documents the statements rest on", "");
    for (const s of sources) L.push(`- ${s.title} (${s.jurisdiction}; ${s.type}; ${s.organisation}; ${s.publishedDate ?? "date not stated"}; accessed ${s.accessedAt}) ${s.url}`);
    L.push("");
  }
  if (claims.length) {
    L.push("## Statements (one block each)", "");
    for (const c of claims) {
      const src = sources.find((s) => s.id === c.sourceId);
      L.push(`### ${c.id} [${c.category}]`, "");
      if (src) L.push(`Source: ${src.title}`, `- Kind: ${sourceKind(src)}`, `- Jurisdiction: ${src.jurisdiction}; type: ${src.type}; organisation: ${src.organisation}`, `- Source date: ${src.publishedDate ?? "not stated"}; accessed ${src.accessedAt}; identifier ${src.identifier}`, `- Form the source describes: ${formOfSource(src).label}${src.formulation ? ` (source record says: ${src.formulation})` : ""}`, `- Address: ${src.url}`, "");
      L.push(`Patient wording (${c.wordingKind}): ${c.patientWording.replace(/\n+/g, " ")}`, "", `Exact passage: ${c.passage.replace(/\n+/g, " ")}`, "", `Applies to: ${c.applicability.join(" ")}`, "", `Limits: ${c.limitations.join(" ")}`, "");
      if (c.openQuestions.length) L.push(`Open questions: ${c.openQuestions.join(" ")}`, "");
      L.push(blankDecision, "");
    }
  }
  if (!guide && !claims.length) L.push("No Patient Guide and no source-backed statement exists for this medicine, so there is nothing to review yet.", "");
  return L.join("\n");
}

/** For each bank sentence: the distinct source wordings it is shown above (with counts). What a sentence stands for changes when these change. */
export function inShortUses(): Map<string, Map<string, number>> {
  const uses = new Map<string, Map<string, number>>();
  for (const c of CLAIM_RECORDS) {
    const s = plainSummaryFor(c);
    if (!s) continue;
    const parts = c.passage.replace(/\s+/g, " ").split(/(?<=[.!?:])\s+/);
    for (const id of s.ids) {
      const bank = PLAIN_SENTENCES.find((x) => x.id === id)!;
      const hit = parts.filter((p) => bank.support.some((re) => !re.source.startsWith("^(?!") && re.test(p))).join(" | ");
      const m = uses.get(id) ?? new Map<string, number>();
      m.set(hit, (m.get(hit) ?? 0) + 1);
      uses.set(id, m);
    }
  }
  return uses;
}

/**
 * A packet for the "In short" sentence bank: each plain sentence, how many quoted guide sections it is shown above,
 * and the distinct source wordings it stands for. Like the medicine packets it is NOT a review record: no decision,
 * no reviewer, and every decision field is blank.
 */
export function inShortReviewPacket(): string {
  const L: string[] = [];
  L.push("# Review packet: the 'In short' sentence bank", "");
  L.push("**Status: NOT REVIEWED.** Each sentence below is shown above quoted Medication Guide text on medicine pages. A sentence is shown only when the quoted section matches every support pattern listed. It is not a review record; every decision field is blank.", "");
  L.push("For each sentence, check that it says the same as EVERY source wording listed, keeps any condition, number or limit those wordings carry, and cannot be read as a promise or as advice for one person.", "");
  L.push(...reviewerBlock);
  const uses = inShortUses();
  for (const bank of PLAIN_SENTENCES) {
    const m = uses.get(bank.id) ?? new Map<string, number>();
    const n = [...m.values()].reduce((a, b) => a + b, 0);
    L.push(`## ${bank.id} (shown ${n} time${n === 1 ? "" : "s"}, ${m.size} distinct source wording${m.size === 1 ? "" : "s"})`, "", `Plain sentence: ${bank.text}`, "", `Support patterns (all must match): ${bank.support.map((r) => "`" + r.source + "`").join("  and  ")}`, "");
    for (const [wording, count] of [...m].sort((a, b) => b[1] - a[1]).slice(0, 8)) L.push(`- [${count}] ${wording.slice(0, 400)}`);
    if (m.size > 8) L.push(`- ... and ${m.size - 8} more wordings (see summary-trace.csv)`);
    L.push("", blankDecision, "");
  }
  return L.join("\n");
}
