/**
 * Presentation copy for the guided learning flows. Declared in one place so the UI, the fidelity
 * test and the audit agree on exactly what the flows say. None of it is a medication-specific
 * claim, an answer key or advice; numbers are filled in by the components.
 */

export const FLOW_COPY = {
  shell: {
    stepsLabel: "Steps in this task",
    back: "Back",
    next: "Next step",
    restart: "Back to the first step",
    complete: (n: number) => `You have been through all ${n} steps. Go back to any step to practise again.`,
    stepOf: (i: number, n: number) => `Step ${i} of ${n}`,
    visited: (v: number, n: number) => `${v} of ${n} steps visited`,
    stepUnavailable:
      "Nothing in this step is available for this medicine in this guide yet. Missing data is not a finding that nothing applies.",
  },
  recall: {
    progress: (i: number, n: number) => `Question ${i} of ${n}`,
    hint: "Select an answer, then submit. Shortcut: press 1 to 4 to choose.",
    submit: "Submit answer",
    next: "Next question",
    seeResults: "See results",
    locked: "Answer locked",
    correct: "Correct.",
    incorrect: "Not quite.",
    correctAnswer: "Correct answer:",
    rationale: "Rationale",
    noRationale: "No rationale is recorded for this question.",
    resultsHeading: "Your session",
    score: (c: number, n: number) => `You answered ${c} of ${n} correctly.`,
    reviewHeading: "Review your answers",
    yourAnswer: "Your answer:",
    retryMissed: (k: number) => `Retry missed questions (${k})`,
    startAgain: "Start again",
    previous: "Previous question",
    endSession: "End session",
    resume: "Continue where I left off",
    notAttempted: (k: number) => `${k} question${k === 1 ? "" : "s"} not attempted. Only submitted answers are scored.`,
    allCorrect: "You answered every question correctly.",
    originLabel: { "authored-quiz": "Authored quiz question", "stahl-bank": "Stahl's Prescriber's Guide question" },
    retryNote: (k: number) => `Retrying ${k} missed question${k === 1 ? "" : "s"}.`,
  },
  mbbs: {
    hideDescriptions: "Test myself: hide descriptions",
    coverFacts: "Test myself: cover the facts",
    showDescriptions: "Show descriptions",
    reveal: "Reveal",
    revealedCount: (r: number, n: number) => `${r} of ${n} revealed`,
    revealAll: "Reveal all",
    hideAll: "Hide all",
    practical: "Practical tasks",
    longAnswer: "Long-answer prompts",
    practiceHint: "Tick each task as you practise it.",
    practised: (p: number, n: number) => `${p} of ${n} practised`,
    noKeys: "These are prompts to rehearse. This guide holds no answer keys for them.",
  },
  resident: {
    overviewHeading: "What this guide holds for this medicine",
    overviewNote:
      "Counts come straight from the guide's records. An empty or missing record is not a finding that nothing applies: check the current label and local guidance.",
    listed: (n: number) => `${n} listed`,
    emptyList: "An empty list is recorded (none listed). This is not a statement that none exist.",
    absent: "Not in this guide. This is not a finding that none exist.",
    present: "In this guide",
    notPresent: "Not in this guide yet. This is not a finding.",
    ofWhichAbsolute: (n: number) => `${n} absolute`,
    ofWhichContraindicated: (n: number) => `${n} contraindicated`,
    goToStep: "Open this step",
  },
  patient: {
    howToTake: "How to take it",
    missedDose: "If you miss a dose",
    stopping: "Stopping",
    checkIns: "Check-ins",
    timeline: "When to expect effects",
    commonSideEffects: "Common side effects",
    importantSideEffects: "Important side effects",
    whatItMeans: "What it means:",
    whatToDo: "What to do:",
    registrySideEffectsLabel:
      "General patient wording in this guide. No individual review is recorded for this medicine.",
    guideLabel: "Written for patients in this guide.",
    urgentLink: "Need urgent help? Open the warning signs.",
  },
} as const;

/** Every fixed string the flows can show, with sample numbers, for the fidelity test. */
export function flowCopyStrings(): string[] {
  const out: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === "string") out.push(v);
    else if (typeof v === "function") {
      for (const args of [[1, 3], [2], [1]] as number[][]) {
        try {
          out.push((v as (...a: number[]) => string)(...args));
        } catch {
          /* ignore arity mismatch */
        }
      }
    } else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(FLOW_COPY);
  return out;
}
