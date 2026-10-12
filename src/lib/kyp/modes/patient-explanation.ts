import { drugs } from "@/lib/kyp/data";
import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
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

/** Verbatim segments for one registry text, each labelled by what the data shows about its origin. */
export function segmentRegistryText(text: unknown, d: Drug): ExplanationSegment[] {
  if (!clean(text)) return [];
  const share = sentenceShare();
  return splitSentences(text).map((s) => {
    const norm = normaliseSentence(s, d);
    const std = STANDARD_PURPOSE.exec(norm);
    if (std)
      return {
        text: s,
        origin: "template" as const,
        sharedBy: share.get(norm),
        indicationCheck: indicationMatches(std[1], d) ? ("matches-registry-indication" as const) : ("not-matched" as const),
      };
    const n = share.get(norm) ?? 1;
    if (n >= TEMPLATE_THRESHOLD) return { text: s, origin: "template" as const, sharedBy: n };
    if (n >= 2) return { text: s, origin: "class-shared" as const, sharedBy: n };
    return { text: s, origin: "registry-specific" as const };
  });
}

export function guideSegments(...texts: unknown[]): ExplanationSegment[] {
  return texts.filter(clean).flatMap((t) => splitSentences(t)).map((text) => ({ text, origin: "authored-guide" as const }));
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

  const specific = plainWords.some((s) => s.origin === "registry-specific");
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

