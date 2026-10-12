import type { BlockKind, ModeId, ModeSpec } from "./types";

/**
 * Mode specifications: one distinct learning objective, block schema and
 * interaction per mode. The block lists are disjoint on purpose: a mode is
 * not "the same page with sections hidden".
 */
export const MODE_SPECS: Record<ModeId, ModeSpec> = {
  patient: {
    mode: "patient",
    label: "Patient",
    audience: "People taking, or considering, this medicine and their carers.",
    objective:
      "Understand what the medicine is for, how to take it safely, and when to seek help.",
    blocks: ["plain-summary", "key-points", "urgent-help", "tell-your-doctor"],
    interaction: "Read and act: urgent-help signs come first, with what to do.",
  },
  mbbs: {
    mode: "mbbs",
    label: "MBBS",
    audience: "Undergraduate medical students learning pharmacology.",
    objective:
      "Explain how the drug works from target to effect, and answer viva-style questions.",
    blocks: ["mechanism-walkthrough", "pharmacology-card", "indications", "adverse-effects", "contraindications", "viva"],
    interaction: "Step through the mechanism, then attempt each viva question before revealing the answer.",
  },
  neetPg: {
    mode: "neetPg",
    label: "NEET PG",
    audience: "Postgraduate entrance candidates.",
    objective:
      "Recall high-yield facts and discriminate between similar options under exam conditions.",
    blocks: ["high-yield-recall", "pyq-concepts", "mcq-drill"],
    interaction: "Commit to an answer in the MCQ drill, then see the explanation.",
  },
  resident: {
    mode: "resident",
    label: "Resident",
    audience: "Residents and clinicians reasoning about patients.",
    objective:
      "Apply the drug to a patient: decide, anticipate pitfalls, and know when not to use it.",
    blocks: ["case-reasoner", "decision-path", "prescribing-checks", "monitoring-plan", "pitfalls"],
    interaction: "Work the case step by step, walk the decision path, then run the pre-prescribing checks.",
  },
};

export const MODE_ORDER: readonly ModeId[] = ["patient", "mbbs", "neetPg", "resident"];

/** Every block kind belongs to exactly one mode. */
export function modeOfBlock(kind: BlockKind): ModeId {
  for (const m of MODE_ORDER) if (MODE_SPECS[m].blocks.includes(kind)) return m;
  throw new Error(`block kind without a mode: ${kind}`);
}

/**
 * Medications whose lenses are rendered in the app so far (the vertical
 * slice). Every other medication keeps its existing page unchanged until its
 * lenses are reviewed for rollout.
 */
export const LENS_ENABLED_SLUGS: readonly string[] = ["sertraline"];

/**
 * The review notice shown on every lens. Scope matters: it states that
 * NEITHER the lens NOR the rest of the page has a recorded qualified
 * clinical review, so it cannot be read as approving the surrounding page.
 */
export const REVIEW_NOTICE = {
  heading: "Review status: not yet clinically reviewed.",
  body:
    "This view re-presents text already on this page. Neither this view nor the rest of this page has a recorded qualified clinical review yet. It is for education, not treatment decisions. Ask your prescriber or pharmacist before changing how you take any medicine.",
} as const;
