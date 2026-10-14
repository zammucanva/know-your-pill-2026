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
  /**
   * "withhold": a shared claim (or an unclassified sentence shared by 20+ medicines) that is NOT shown as guidance
   * for this medicine. The original sentence is kept for review. See shared-claims.ts.
   */
  handling: "show" | "withhold";
  /** The shared-wording rule this sentence matched, if any. */
  rule?: { id: string; kind: "claim" | "direction" | "unclassified"; category: string; why: string };
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
  withheldSummary: (n: number) => `${n} standard sentence${n === 1 ? "" : "s"} not shown as guidance (needs review)`,
  withheldNote:
    "The same wording is used for many medicines and nothing in this guide confirms it for this one, so it is not shown as advice. It is kept here, unchanged, for review. Ask your pharmacist or prescriber about timing, how to take it, and what to expect.",
  withheldLabel: "Not confirmed for this medicine",
  directionLabel: "Standard advice used for many medicines (not specific to this one)",
  evidence: {
    heading: "From the product label",
    intro:
      "These statements come from the product label or leaflet named under each one. They are rewritten in plain words, have not been reviewed by a clinician, and do not replace advice from your pharmacist or prescriber.",
    jurisdiction: {
      US: "This is a US product label. Indian product information has not been checked, and Indian labels may differ.",
      UK: "This is a UK package leaflet. Indian product information has not been checked, and Indian leaflets may differ.",
      IE: "This is an Irish package leaflet (published by the Irish regulator, HPRA). Indian product information has not been checked, and Indian leaflets may differ.",
      IN: "This is an Indian product label. It applies to the product named, and other Indian brands, strengths and forms may differ.",
    },
    formNote: (form: string) => `This statement was written for this form of the medicine: ${form}. If you take a different form, ask your pharmacist whether it applies to you.`,
    notReviewed: "Not clinically reviewed",
    summaryHeading: "In short",
    summaryNote: "A plain-language summary written for this app from the label text below. It is shorter than the label and is not clinically reviewed. The label's own words are underneath.",
    labelWords: "Read the label's own words",
    exactWords: "Show the label's exact words",
    replaces: "A source-backed statement for this medicine. The standard sentence that was withheld for it stays in the review list.",
    sourcePrefix: "Source:",
    group: {
      "what-it-is": "What it is",
      "used-for": "What it is used for",
      onset: "When a benefit may be noticed",
      precaution: "Cautions",
      interactions: "Other medicines",
      contraindication: "Who should not take it",
      "how-to-take": "How to take it",
      "side-effects": "Side effects",
      monitoring: "Check-ups",
      stopping: "Stopping the medicine",
      "urgent-help": "When to get help",
    },
  },
  part: {
    legendHeading: "How to read the labels on this page",
    legend: {
      "authored-guide": "Written for patients in this medicine's Patient Guide. Not clinically reviewed.",
      "source-backed": "Taken from a product label or leaflet that is named, with its country, under each statement. Not clinically reviewed. None is an Indian label.",
      "registry-wording": "Patient wording from this guide's own records. Not clinically reviewed.",
      "standard-wording": "Standard wording used for many medicines. Not specific to this one.",
      "general-direction": "A general direction, not information about this medicine.",
      unavailable: "Nothing supported to show here. This is not a sign that nothing applies.",
    },
    chip: {
      "authored-guide": "Patient Guide",
      "source-backed": "From a product label or leaflet",
      "registry-wording": "Guide wording",
      "standard-wording": "Standard wording only",
      "general-direction": "General direction",
      unavailable: "Not available",
    },
    unavailable: {
      what: "This guide has no supported plain-language explanation of what this medicine is. Ask your pharmacist or prescriber.",
      uses: "This guide has no supported information on what this medicine is used for. Ask your pharmacist or prescriber what it is for in your case.",
      how: "This guide has no supported information on how to take this medicine. Do not guess: ask your pharmacist or prescriber how and when to take it, and what to do about a missed dose or stopping.",
      precautions: "This guide has no supported information on who should not take this medicine or what to avoid. That is not a sign that there are none. Ask your pharmacist or prescriber before you start.",
      "side-effects": "This guide has no supported side-effect information for this medicine. Not seeing an effect here does not mean it cannot happen. Ask your pharmacist or prescriber what to watch for.",
      interactions: "This guide has no supported information on other medicines for this one. That does not mean it has no interactions. Ask your pharmacist before you start, stop or combine any medicine.",
    },
    seekHelpGeneral: "If you feel unwell after taking this medicine, or you are unsure about anything, contact your pharmacist or prescriber. If it is an emergency, go to the nearest hospital. This is a general direction, not from a product label.",
    questionsIntro: "These prompts are built from the parts of this page that have no supported information for this medicine. They are questions to ask, not medical advice.",
    questionsGuide: "Prompts you can take to your pharmacist or prescriber:",
    personalNote: "Your selections stay on this page as your own notes. They are not a check of your medicines and are not saved or sent.",
    sourcesHow: "How to read this page: a box marked \"In short\" is a short summary written for this app from the document text underneath it. Other statements are plain-language rewrites of one short passage of the document named under them; \"About this statement\" shows the passage. A few are the document's own words, unchanged. The documents are labels or leaflets made for a country and a product, not for you.",
    sourcesNone: "No product label has been retrieved for this medicine, so nothing on this page is source-backed.",
    sourcesIndia: "Indian product information (CDSCO, IPC/PvPI) has not been checked for any medicine on this page. Indian labels may differ from the US or UK documents named here.",
    reviewLine: "Clinical review: none recorded for this medicine.",
    usesFromWhat: "The product label statement under \"What this medicine is\" also says what it is used for. The list below is from this guide's own records.",
    longRest: "Read the rest of this section",
  },
  askHeading: "If anything here is unclear",
  ask: "Ask your pharmacist or prescriber. They can explain it for your situation.",
} as const;

export function originLabel(s: ExplanationSegment): string {
  const o = EXPLANATION_COPY.origin;
  return s.origin === "class-shared" ? o["class-shared"](s.sharedBy ?? 2) : s.origin === "template" ? o.template : o[s.origin];
}
