import { drugs } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import { matchSharedClaim } from "./shared-claims";
import type { ExplanationLevel, ExplanationSegment, ExplainedUse, PatientExplanation } from "./explanation-copy";
export * from "./explanation-copy";

/**
 * Patient explanation: a plain-language "what is this medicine" slot that exists for every medication, with
 * an honest account of where each sentence comes from.
 *
 * Nothing here writes medical text. Every segment is a verbatim sentence from the Patient Guide or from the
 * registry's own patient wording. What this module adds is PROVENANCE, worked out from the data itself:
 *   - authored-guide     : sentence from the medication's Patient Guide.
 *   - registry-specific  : registry patient wording that no other medicine shares (written for this medicine).
 *   - class-shared       : the same sentence (name aside) appears for 2-19 medicines (class-level wording).
 *   - template           : the same sentence appears for 20+ medicines, or it is the standard
 *                          "X is a prescription medicine used to treat Y." sentence. Not medicine-specific.
 * No sentence is ever described as reviewed. Nothing is inferred from a name, a class or an unrelated field.
 */

const TEMPLATE_THRESHOLD = 20;
const STATUS_LABEL: Record<string, string> = { "fda-approved": "FDA-approved", "off-label": "Off-label", guideline: "Guideline", approved: "Approved" };

const clean = (v: unknown): v is string => typeof v === "string" && v.trim().length > 0;
const squash = (t: string) => t.replace(/\s+/g, " ").trim();
export const splitSentences = (t: string): string[] => squash(t).split(/(?<=[.!?])\s+/).filter(Boolean);

function nameVariants(d: Pick<Drug, "genericName" | "brandNames">): string[] {
  const out = [d.genericName, ...(Array.isArray(d.brandNames) ? d.brandNames : [])].filter(clean) as string[];
  return Array.from(new Set(out)).sort((a, b) => b.length - a.length);
}
/** Lower-case, collapse whitespace, and blank out the medicine's own names so shared wording compares equal. */
export function normaliseSentence(s: string, d: Pick<Drug, "genericName" | "brandNames">): string {
  let x = s;
  for (const n of nameVariants(d)) x = x.split(n).join("X").split(n.toLowerCase()).join("X");
  return squash(x).toLowerCase();
}

function registryTexts(d: Drug): string[] {
  const pm = (d.patientMode ?? {}) as unknown as Record<string, unknown>;
  const out: string[] = [];
  for (const v of [d.patientExplanation, pm.summary, pm.mechanism, pm.sideEffects, pm.interactions, pm.monitoring, pm.contraindications, pm.tagline])
    if (clean(v)) out.push(v);
  for (const p of Array.isArray(d.patientEducationPoints) ? d.patientEducationPoints : []) if (clean(p)) out.push(p);
  return out;
}

let corpus: Map<string, number> | null = null;
/** How many medicines carry each (name-normalised) patient-wording sentence. Counted once per medicine. */
function sentenceShare(): Map<string, number> {
  if (corpus) return corpus;
  const m = new Map<string, number>();
  for (const d of drugs) {
    const seen = new Set<string>();
    for (const t of registryTexts(d)) for (const s of splitSentences(t)) seen.add(normaliseSentence(s, d));
    for (const s of seen) m.set(s, (m.get(s) ?? 0) + 1);
  }
  corpus = m;
  return m;
}

const STANDARD_PURPOSE = /^x is a prescription medicine used to treat (.+?)\.?$/;

const condKey = (t: string) =>
  t
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

function indicationMatches(condition: string, d: Drug): boolean {
  const c = condKey(condition);
  const names = (Array.isArray(d.indications) ? d.indications : []).map((i) => condKey(String(i?.name ?? ""))).filter(Boolean);
  return !!c && names.some((n) => n === c || n.includes(c) || c.includes(n));
}

/**
 * Figures that tell a patient WHEN something happens or HOW MUCH to take. Registry wording is not source-backed, so
 * such a figure is not shown as guidance: a stored source statement (a label passage) shows it with its source, or a
 * reviewer confirms it. A threshold inside a safety statement ("patch 9 mg with tyramine") is not an instruction and
 * is left alone.
 */
const UNIT = "(?:days?|weeks?|hours?|minutes?|months?)";
const NUM = "(?:\\d+(?:\\s?(?:-|to|–)\\s?\\d+)?|one|two|three|four|several|a few)";
export const UNSOURCED_TIMING = new RegExp(`\\b(?:within|builds? over|takes?|up to|for about|about|for)\\s+(?:about\\s+|around\\s+|at least\\s+)?${NUM}\\s+${UNIT}\\b`, "i");
export const UNSOURCED_DOSE = /\b(?:take|taking|starting (?:dose|at)|(?<!high-)dose (?:is|of)|usual dose|maximum|capped|at night)\b[^.;]{0,50}\b\d+(?:\.\d+)?\s?(?:mg|mcg|g|ml)\b|\b\d+(?:\.\d+)?\s?(?:mg|mcg)\s+(?:a|per|each)\s+(?:day|night|dose)\b/i;
export const UNSOURCED_WAIT = /\b(?:nothing to eat or drink|wait|do not (?:eat|drink))\b[^.;]{0,40}\b(?:for|until)\s+\d+\s+minutes?\b/i;
const unsourcedFigure = (s: string) => UNSOURCED_TIMING.test(s) || UNSOURCED_DOSE.test(s) || UNSOURCED_WAIT.test(s);

/** Verbatim segments for one registry text, each labelled by what the data shows about its origin. */
export function segmentRegistryText(text: unknown, d: Drug): ExplanationSegment[] {
  if (!clean(text)) return [];
  const share = sentenceShare();
  return splitSentences(text).map((s): ExplanationSegment => {
    const norm = normaliseSentence(s, d);
    const rule = matchSharedClaim(s);
    const std = STANDARD_PURPOSE.exec(norm);
    const n = share.get(norm) ?? 1;
    let seg: ExplanationSegment;
    if (std)
      seg = {
        text: s,
        origin: "template",
        sharedBy: n,
        indicationCheck: indicationMatches(std[1], d) ? "matches-registry-indication" : "not-matched",
        handling: "show",
      };
    else if (n >= TEMPLATE_THRESHOLD) seg = { text: s, origin: "template", sharedBy: n, handling: "show" };
    else if (n >= 2) seg = { text: s, origin: "class-shared", sharedBy: n, handling: "show" };
    else seg = { text: s, origin: "registry-specific", handling: "show" };
    if (rule) {
      seg.rule = { id: rule.id, kind: rule.kind, category: rule.category, why: rule.why };
      if (rule.kind === "claim") seg.handling = "withhold";
    } else if (unsourcedFigure(s)) {
      seg.rule = { id: "unsourced-figure", kind: "unclassified", category: "dose-or-timing-figure", why: "Registry wording states when something happens or how much to take, with no stored source statement. It is not shown as guidance until a source statement or a reviewer supports it." };
      seg.handling = "withhold";
    } else if (!std && n >= TEMPLATE_THRESHOLD) {
      // Shared by 20+ medicines and not classified: never shown as guidance until a person classifies it.
      seg.rule = { id: "unclassified-shared", kind: "unclassified", category: "unclassified", why: "Shared by 20 or more medicines and not yet classified by a content owner." };
      seg.handling = "withhold";
    }
    return seg;
  });
}

export function guideSegments(...texts: unknown[]): ExplanationSegment[] {
  return texts.filter(clean).flatMap((t) => splitSentences(t)).map((text): ExplanationSegment => ({ text, origin: "authored-guide", handling: "show" }));
}

export function explainPatient(drug: Drug, guide?: PatientGuide): PatientExplanation {
  const hasGuide = !!guide && clean(guide.whatIsThis);
  const pm = (drug.patientMode ?? {}) as unknown as Record<string, unknown>;

  const plainWords = hasGuide ? guideSegments(guide!.classInPlainWords, guide!.whatIsThis) : segmentRegistryText(drug.patientExplanation, drug);
  const summary = hasGuide ? [] : segmentRegistryText(pm.summary, drug);
  const reminders = hasGuide
    ? guideSegments(...(Array.isArray(guide!.keyReminders) ? guide!.keyReminders : []))
    : (Array.isArray(drug.patientEducationPoints) ? drug.patientEducationPoints : []).filter(clean).flatMap((p) => segmentRegistryText(p, drug));
  const sideEffects = hasGuide ? [] : segmentRegistryText(pm.sideEffects, drug);

  let uses: PatientExplanation["uses"];
  if (hasGuide && Array.isArray(guide!.usedFor?.uses) && guide!.usedFor.uses.length)
    uses = {
      state: "listed",
      items: guide!.usedFor.uses.filter((u) => clean(u?.name)).map((u) => ({ name: u.name, status: STATUS_LABEL[u.status] ?? u.status, plain: clean(u.plain) ? u.plain : undefined })),
    };
  else if (!Array.isArray(drug.indications)) uses = { state: "absent", items: [] };
  else if (drug.indications.length === 0) uses = { state: "empty", items: [] };
  else uses = { state: "listed", items: drug.indications.filter((i) => clean(i?.name)).map((i) => ({ name: i.name, status: STATUS_LABEL[i.status] ?? String(i.status) })) };

  const specific = plainWords.some((s) => s.origin === "registry-specific" && s.handling === "show");
  const level: ExplanationLevel = hasGuide ? "authored-guide" : plainWords.length === 0 ? "missing" : specific ? "registry-specific" : "template-only";
  return {
    level,
    source: hasGuide ? "patient-guide" : plainWords.length ? "registry-wording" : "none",
    plainWords,
    summary,
    uses,
    reminders,
    sideEffects,
    review: "not-clinically-reviewed",
  };
}

