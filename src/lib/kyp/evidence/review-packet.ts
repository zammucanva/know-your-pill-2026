import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { CLAIM_RECORDS, claimsFor, sourcesFor } from "./index";
import { PLAIN_SENTENCES, plainSummaryFor } from "./plain-summaries";

/**
 * A packet a qualified clinical reviewer can work from. It is NOT a review record: it states no decision, names no
 * reviewer, and every decision field is blank. Producing it is an engineering step; clinical approval is a person's.
 */
const blankDecision = "Decision (approve / edit / reject): ____   Reviewer: ____   Date: ____   Notes: ____";

function walk(v: unknown, path: string, out: string[]) {
  if (typeof v === "string") out.push(`- ${path}: ${v}`);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i + 1}]`, out));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) if (k !== "slug") walk(x, path ? `${path} > ${k}` : k, out);
}

export function reviewPacket(slug: string): string {
  const d = drugs.find((x) => x.slug === slug);
  if (!d) throw new Error(`unknown medicine ${slug}`);
  const guide = getPatientGuide(slug);
  const claims = claimsFor(slug);
  const sources = sourcesFor(slug);
  const L: string[] = [];
  L.push(`# Clinical review packet: ${d.genericName}`, "");
  L.push("**Status: NOT REVIEWED.** This packet is prepared for a qualified clinical reviewer. It is not a review record. It records no decision and names no reviewer; every decision field below is blank. Engineering checks (quotes found in sources, numbers not added) do not make any statement correct, applicable or approved.", "");
  L.push("**Indian product information:** not checked for this medicine. Statements below rest on the documents listed, none of which is an Indian label unless it says so.", "");
  if (guide) {
    L.push("## Patient Guide (authored for this app)", "", "Each line is shown to patients. Check it against current Indian product information and clinical practice.", "");
    const lines: string[] = [];
    walk(guide, "", lines);
    L.push(...lines, "", blankDecision, "");
  }
  if (sources.length) {
    L.push("## Documents the statements rest on", "");
    for (const s of sources) L.push(`- ${s.title} (${s.jurisdiction}; ${s.type}; ${s.organisation}; ${s.publishedDate ?? "date not stated"}; accessed ${s.accessedAt}) ${s.url}`);
    L.push("");
  }
  if (claims.length) {
    L.push("## Statements (one block each)", "");
    for (const c of claims) {
      L.push(`### ${c.id} [${c.category}]`, "", `Patient wording (${c.wordingKind}): ${c.patientWording.replace(/\n+/g, " ")}`, "", `Exact passage: ${c.passage.replace(/\n+/g, " ")}`, "", `Applies to: ${c.applicability.join(" ")}`, "", `Limits: ${c.limitations.join(" ")}`, "");
      if (c.openQuestions.length) L.push(`Open questions: ${c.openQuestions.join(" ")}`, "");
      L.push(blankDecision, "");
    }
  }
  if (!guide && !claims.length) L.push("No Patient Guide and no source-backed statement exists for this medicine, so there is nothing to review yet.", "");
  return L.join("\n");
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
