/** Types and fixed copy for the Patient explanation. No registry import: safe for client components. */
export type ExplanationOrigin = "authored-guide" | "registry-specific" | "class-shared" | "template";

export interface ExplanationSegment {
  /** Verbatim sentence. */
  text: string;
  origin: ExplanationOrigin;
  /** For class-shared / template: how many medicines carry the same sentence. */
  sharedBy?: number;
  /**
   * Only for the standard "X is a prescription medicine used to treat Y." sentence: whether Y matches one of the
   * medicine's own registry indication records. It is a check against existing data, not a clinical judgement.
   */
  indicationCheck?: "matches-registry-indication" | "not-matched";
}

export interface ExplainedUse {
  name: string;
  /** Registry approval wording for the indication, or the guide's. */
  status: string;
  /** Plain wording the Patient Guide gives for this use (guide only). */
  plain?: string;
}

export type ExplanationLevel =
  /** A Patient Guide exists for this medicine. */
  | "authored-guide"
  /** No guide, but the registry's patient wording has at least one sentence written for this medicine alone. */
  | "registry-specific"
  /** The registry wording is made only of template or class-shared sentences. */
  | "template-only"
  /** No patient wording at all. */
  | "missing";

export interface PatientExplanation {
  level: ExplanationLevel;
  source: "patient-guide" | "registry-wording" | "none";
  /** The main plain-language explanation. */
  plainWords: ExplanationSegment[];
  /** The registry's short patient summary (registry wording only). */
  summary: ExplanationSegment[];
  /** What the registry documents the medicine for. States keep absent, empty and listed apart. */
  uses: { state: "listed" | "empty" | "absent"; items: ExplainedUse[] };
  /** Key reminders, each with provenance. */
  reminders: ExplanationSegment[];
  /** Registry patient wording about side effects, with provenance. */
  sideEffects: ExplanationSegment[];
  /** Never "approved": this layer cannot record a clinical review. */
  review: "not-clinically-reviewed";
}


/** Plain-language labels for each origin. Declared once so the UI, the audit and the tests agree. */
export const EXPLANATION_COPY = {
  heading: "What this medicine is, in plain words",
  reviewNotice:
    "This wording has not been clinically reviewed. It is for education, not treatment decisions. Your pharmacist or prescriber can explain anything here.",
  origin: {
    "authored-guide": "From this medicine's Patient Guide",
    "registry-specific": "Written for this medicine (not reviewed)",
    "class-shared": (n: number) => `Wording shared with ${n - 1} other medicine${n - 1 === 1 ? "" : "s"} (not specific to this one)`,
    template: "Standard wording used for many medicines (not specific to this one)",
  },
  indicationMatches: "The condition named matches this medicine's registry indication record.",
  indicationNotMatched: "The condition named does not match any of this medicine's registry indication records. Check with your pharmacist.",
  usesHeading: "What this medicine is documented for",
  usesIntro: "These are the uses recorded for this medicine, in the names clinicians use. Ask your pharmacist or prescriber what they mean for you.",
  usesAbsent: "No uses are recorded for this medicine in this guide. That does not mean it has no use or no risks. Ask your pharmacist or prescriber what it is for.",
  usesEmpty: "The list of uses for this medicine is empty in this guide. That is not a statement about what it is used for. Ask your pharmacist or prescriber.",
  unavailable:
    "This guide has no plain-language explanation of this medicine. That does not mean the medicine is safe or risk-free. Ask your pharmacist or prescriber what it is for and how to take it.",
  templateOnly:
    "The wording below is made of standard sentences used for many medicines. It is not specific to this medicine. Ask your pharmacist or prescriber for an explanation that is.",
  summaryHeading: "Short summary",
  remindersHeading: "Key reminders",
  sideEffectsHeading: "What to watch for",
  sideEffectsNote: "Registry wording for patients. It may not list every effect. Not seeing an effect here does not mean it cannot happen.",
  sideEffectsNone:
    "This guide shows no patient wording about side effects here. That is not a sign that there are none. Ask your pharmacist or prescriber what to watch for.",
  askHeading: "If anything here is unclear",
  ask: "Ask your pharmacist or prescriber. They can explain it for your situation.",
} as const;

export function originLabel(s: ExplanationSegment): string {
  const o = EXPLANATION_COPY.origin;
  return s.origin === "class-shared" ? o["class-shared"](s.sharedBy ?? 2) : s.origin === "template" ? o.template : o[s.origin];
}
