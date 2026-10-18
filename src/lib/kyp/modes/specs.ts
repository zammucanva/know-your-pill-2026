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
    blocks: ["plain-summary", "key-points", "patient-how-to-take", "patient-side-effects", "urgent-help", "patient-interactions", "tell-your-doctor"],
    interaction: "Read and act: urgent-help signs come first, with what to do.",
  },
  mbbs: {
    mode: "mbbs",
    label: "MBBS",
    audience: "Undergraduate medical students learning pharmacology.",
    objective:
      "Explain how the drug works from target to effect, and answer viva-style questions.",
    blocks: ["mechanism-walkthrough", "pharmacology-card", "indications", "adverse-effects", "contraindications", "exam-prep", "viva"],
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
    blocks: ["clinical-summary", "case-reasoner", "decision-path", "prescribing-checks", "interactions", "monitoring-plan", "pitfalls"],
    interaction: "Work the case step by step, walk the decision path, run the pre-prescribing checks, then review interactions.",
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

/**
 * The learning TASK of each mode: an ordered set of steps, each holding block kinds. Switching mode
 * changes the task, the steps and the interaction, not just what is visible. Every block kind belongs
 * to exactly one step of its own mode.
 */
export interface FlowStep {
  id: string;
  label: string;
  blocks: readonly BlockKind[];
}
export interface ModeTask {
  title: string;
  summary: string;
  steps: readonly FlowStep[];
}
export const MODE_TASKS: Record<ModeId, ModeTask> = {
  patient: {
    title: "Learn to use this medicine safely",
    summary: "Work through five short steps: what it is, how to take it, what to watch for, other medicines, and what to ask.",
    steps: [
      { id: "know", label: "What it is", blocks: ["plain-summary", "key-points"] },
      { id: "take", label: "How to take it", blocks: ["patient-how-to-take"] },
      { id: "watch", label: "What to watch for", blocks: ["urgent-help", "patient-side-effects"] },
      { id: "others", label: "Other medicines", blocks: ["patient-interactions"] },
      { id: "ask", label: "What to ask", blocks: ["tell-your-doctor"] },
    ],
  },
  mbbs: {
    title: "Study the pharmacology",
    summary: "Move from mechanism to clinical use and safety, then rehearse for practicals, long answers and viva.",
    steps: [
      { id: "mechanism", label: "Mechanism", blocks: ["mechanism-walkthrough", "pharmacology-card"] },
      { id: "use", label: "Clinical use", blocks: ["indications"] },
      { id: "safety", label: "Safety", blocks: ["adverse-effects", "contraindications"] },
      { id: "exam", label: "Exam practice", blocks: ["exam-prep"] },
      { id: "viva", label: "Viva", blocks: ["viva"] },
    ],
  },
  neetPg: {
    title: "Practise active recall",
    summary: "Answer authored questions one at a time, lock each answer, read the rationale, then review what you missed.",
    steps: [
      { id: "session", label: "Question session", blocks: ["mcq-drill"] },
      { id: "facts", label: "High-yield facts", blocks: ["high-yield-recall"] },
      { id: "concepts", label: "Exam concepts", blocks: ["pyq-concepts"] },
    ],
  },
  resident: {
    title: "Work up the patient",
    summary: "Follow the clinical reasoning: the case, the decision, checks before prescribing, monitoring and common errors.",
    steps: [
      { id: "overview", label: "What the guide holds", blocks: ["clinical-summary"] },
      { id: "case", label: "Case", blocks: ["case-reasoner"] },
      { id: "decide", label: "Decide", blocks: ["decision-path"] },
      { id: "prescribe", label: "Before prescribing", blocks: ["prescribing-checks", "interactions"] },
      { id: "monitor", label: "Monitor and escalate", blocks: ["monitoring-plan"] },
      { id: "errors", label: "Common errors", blocks: ["pitfalls"] },
    ],
  },
};
