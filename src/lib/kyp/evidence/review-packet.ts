import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { claimsFor, sourcesFor } from "./index";

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
