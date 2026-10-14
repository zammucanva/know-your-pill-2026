import type { ClaimCategory, ClaimRecord } from "./types";
import type { PatientExplanation } from "@/lib/kyp/modes/explanation-copy";

/**
 * The nine parts of the Patient explanation, and what each part actually holds for one medicine.
 * One definition used by the page, the tests and the coverage matrix, so they cannot disagree.
 *
 * States, from strongest to weakest evidence (none of them is "clinically reviewed"):
 *   authored-guide     : the medicine's Patient Guide covers it.
 *   source-backed      : at least one statement quoted/restated from a retrieved product label (US unless an
 *                        Indian source exists), with its source shown.
 *   registry-wording   : the registry's patient wording has at least one sentence written for this medicine.
 *   standard-wording   : only standard sentences used for many medicines (labelled as such).
 *   general-direction  : only the page's general "ask your pharmacist or prescriber" direction.
 *   unavailable        : nothing supported to show; the page says so and says who can help.
 */
export type PartState = "authored-guide" | "source-backed" | "registry-wording" | "standard-wording" | "general-direction" | "unavailable";

export type PartId = "what" | "uses" | "how" | "precautions" | "side-effects" | "interactions" | "seek-help" | "questions" | "sources";

export const PART_ORDER: PartId[] = ["what", "uses", "how", "precautions", "side-effects", "interactions", "seek-help", "questions", "sources"];

export const PART_TITLE: Record<PartId, string> = {
  what: "What this medicine is",
  uses: "What it is used for",
  how: "How to take it safely",
  precautions: "Important precautions",
  "side-effects": "Possible side effects",
  interactions: "Other medicines and interactions",
  "seek-help": "When to get advice or help",
  questions: "Questions to ask your pharmacist or prescriber",
  sources: "Sources and review status",
};

/** Which claim categories appear in which part. */
export const PART_CATEGORIES: Record<PartId, ClaimCategory[]> = {
  what: ["what-it-is"],
  uses: ["used-for", "onset"],
  how: ["how-to-take", "stopping"],
  precautions: ["precaution", "contraindication", "monitoring"],
  "side-effects": ["side-effects"],
  interactions: ["interactions"],
  "seek-help": ["urgent-help"],
  questions: [],
  sources: [],
};

export interface PartInputs {
  explanation: PatientExplanation;
  claims: ClaimRecord[];
  hasGuide: boolean;
  /** Origin of the registry's patient wording about other medicines, if any. */
  interactionsStatement: "authored-guide" | "authored-registry" | "template" | "missing";
  interactionNames: number;
}

/** A Medication Guide "What is X?" statement usually says what the medicine is used for as well. */
export const usesStatedInWhat = (claims: ClaimRecord[]) => claims.some((c) => c.category === "what-it-is" && /\bused\b/i.test(c.patientWording));
const any = (claims: ClaimRecord[], cats: ClaimCategory[]) => claims.some((c) => cats.includes(c.category));
const shown = (segs: PatientExplanation["plainWords"]) => segs.filter((s) => s.handling === "show");
const specific = (segs: PatientExplanation["plainWords"]) => shown(segs).some((s) => s.origin === "registry-specific");

export function partStates(i: PartInputs): Record<PartId, PartState> {
  const e = i.explanation;
  const g = i.hasGuide;
  const has = (p: PartId) => any(i.claims, PART_CATEGORIES[p]);
  const registryOrStandard = (segs: PatientExplanation["plainWords"]): PartState => (specific(segs) ? "registry-wording" : shown(segs).length ? "standard-wording" : "unavailable");
  const out: Record<PartId, PartState> = {
    what: g ? "authored-guide" : has("what") ? "source-backed" : e.level === "missing" ? "unavailable" : registryOrStandard(e.plainWords),
    uses: g ? "authored-guide" : has("uses") || usesStatedInWhat(i.claims) ? "source-backed" : e.uses.state === "listed" ? "registry-wording" : "unavailable",
    how: g ? "authored-guide" : has("how") ? "source-backed" : registryOrStandard(e.reminders) === "registry-wording" ? "registry-wording" : "unavailable",
    precautions: g ? "authored-guide" : has("precautions") ? "source-backed" : "unavailable",
    "side-effects": g ? "authored-guide" : has("side-effects") ? "source-backed" : registryOrStandard(e.sideEffects),
    interactions: g ? "authored-guide" : has("interactions") ? "source-backed" : i.interactionsStatement === "authored-registry" ? "registry-wording" : i.interactionsStatement === "template" ? "standard-wording" : "unavailable",
    "seek-help": g ? "authored-guide" : has("seek-help") ? "source-backed" : "general-direction",
    questions: "general-direction",
    sources: "unavailable",
  };
  // Questions are prompts built from what the guide could not tell the reader, plus the guide's own list if any.
  out.questions = g ? "authored-guide" : "general-direction";
  const sourced = i.claims.length > 0 || g;
  out.sources = sourced ? (g ? "authored-guide" : "source-backed") : "unavailable";
  return out;
}

/** Words in a stored passage that tell the reader to get help quickly. */
const URGENT_PASSAGE = /\b(call|contact|get|go|seek|stop taking)\b[^.\n]{0,100}\b(right away|immediately|straight away|emergency|nearest hospital)/i;
/**
 * Parts of this page, other than "when to get advice or help", whose source-backed statements contain words that
 * tell the reader to call or get help right away. It points the reader there; it says nothing new, and a part
 * not listed is not shown to be free of such advice.
 */
export function urgentPointers(claims: ClaimRecord[]): PartId[] {
  const parts: PartId[] = ["how", "precautions", "side-effects", "interactions"];
  return parts.filter((p) => claims.some((c) => PART_CATEGORIES[p].includes(c.category) && URGENT_PASSAGE.test(c.passage)));
}

/** Plain question prompts for the parts the guide could not fill. Navigation aids, not medical advice. */
export const QUESTION_PROMPTS: Partial<Record<PartId, string>> = {
  what: "What is this medicine, in simple words?",
  uses: "What is this medicine for, in my case?",
  how: "How and when should I take it, and for how long? What if I miss a dose, and how should I stop it?",
  precautions: "Who should not take it, and what should I avoid while taking it (for example foods, drinks, alcohol or activities)?",
  "side-effects": "Which side effects are common, which are serious, and what should I do about them?",
  interactions: "Could any of my other medicines, herbal products or supplements interact with it?",
  "seek-help": "When should I call you or go to a hospital?",
};

/** What the page actually has for one medicine, so the questions can name the real gaps. */
export interface QuestionContext {
  hasGuide: boolean;
  hasSourcedClaims: boolean;
  hasOnsetClaim: boolean;
  hasStoppingClaim: boolean;
  hasMonitoringClaim: boolean;
  /** A statement on the page was written for a form other than an ordinary tablet or capsule (liquid, injection, extended-release...). */
  nonPlainForm: boolean;
}

/** Questions that depend on a specific gap or caveat on the page, not on a missing part. */
export const GAP_PROMPTS = {
  onset: "How long might it take before I notice any benefit, and what should I do if I do not?",
  brand: "Is the brand I have been given the same product, strength and form as the one described on this page (which is not from India)?",
  form: "Does what is written here apply to the form I take (tablet, capsule, liquid, injection, extended-release)?",
  stopping: "If my doctor decides to stop it, how should I stop safely, and what should I watch for?",
  monitoring: "Which check-ups or blood tests do I need while I take it, and how often?",
} as const;

export interface QuestionItem {
  key: string;
  part?: PartId;
  question: string;
}

export function questionsFor(states: Record<PartId, PartState>, ctx?: QuestionContext): QuestionItem[] {
  const fromParts: QuestionItem[] = (Object.keys(QUESTION_PROMPTS) as PartId[])
    .filter((p) => states[p] === "unavailable" || states[p] === "standard-wording" || states[p] === "general-direction")
    .map((p) => ({ key: p, part: p, question: QUESTION_PROMPTS[p]! }));
  if (!ctx || ctx.hasGuide) return fromParts;
  const extra: QuestionItem[] = [];
  if (!ctx.hasOnsetClaim) extra.push({ key: "onset", question: GAP_PROMPTS.onset });
  if (ctx.hasSourcedClaims) extra.push({ key: "brand", question: GAP_PROMPTS.brand });
  if (ctx.nonPlainForm) extra.push({ key: "form", question: GAP_PROMPTS.form });
  if (ctx.hasStoppingClaim) extra.push({ key: "stopping", question: GAP_PROMPTS.stopping });
  if (ctx.hasMonitoringClaim) extra.push({ key: "monitoring", question: GAP_PROMPTS.monitoring });
  return [...fromParts, ...extra];
}
