import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import type { StahlMcq } from "@/lib/kyp/stahl-mcqs";
import { MODE_ORDER, MODE_SPECS } from "./specs";
import type {
  BlockKind,
  LensBlock,
  ModeId,
  ModeLens,
  ModeLensSet,
  Sourced,
  UnavailableBlock,
} from "./types";

/**
 * Builds the four mode lenses for one medication, purely by reading the
 * canonical registry. It never writes or paraphrases clinical text: every
 * string is copied verbatim and tagged with its canonical path. Where the
 * registry has nothing, the block is reported as unavailable with a reason.
 */

export interface LensInputs {
  drug: Drug;
  patientGuide?: PatientGuide;
  /** The Stahl MCQs for this drug (read-only, authored elsewhere). */
  mcqs?: readonly StahlMcq[];
}

const clean = (s: unknown): s is string => typeof s === "string" && s.trim().length > 0;
const S = (text: string, source: string): Sourced => ({ text, source });
const REVIEW = "pending-clinical-review" as const;

function list(values: unknown, base: string): Sourced[] {
  if (!Array.isArray(values)) return [];
  const out: Sourced[] = [];
  values.forEach((v, i) => {
    if (clean(v)) out.push(S(v, `${base}[${i}]`));
  });
  return out;
}

/** Splits "Question? (answer)" for display only; `full` stays the verbatim source. */
export function splitViva(full: string): { question: string; answer: string | null } {
  const m = /^([\s\S]*?\?)\s*\(([\s\S]*)\)\.?\s*$/.exec(full.trim());
  return m ? { question: m[1].trim(), answer: m[2].trim() } : { question: full.trim(), answer: null };
}

type Builder = (i: LensInputs) => LensBlock | { unavailable: string };

const BUILDERS: Record<BlockKind, Builder> = {
  "plain-summary": ({ drug, patientGuide }) => {
    if (patientGuide && clean(patientGuide.whatIsThis))
      return { kind: "plain-summary", review: REVIEW, summary: S(patientGuide.whatIsThis, "patientGuide.whatIsThis") };
    if (clean(drug.patientExplanation))
      return { kind: "plain-summary", review: REVIEW, summary: S(drug.patientExplanation, "patientExplanation") };
    return { unavailable: "No patient-grade explanation in the registry." };
  },
  "key-points": ({ drug, patientGuide }) => {
    const points = patientGuide?.keyReminders?.length
      ? list(patientGuide.keyReminders, "patientGuide.keyReminders")
      : list(drug.patientEducationPoints, "patientEducationPoints");
    return points.length
      ? { kind: "key-points", review: REVIEW, points }
      : { unavailable: "No patient key points in the registry." };
  },
  "urgent-help": ({ patientGuide }) => {
    const u = patientGuide?.urgentHelp;
    if (!u || !clean(u.intro) || !clean(u.action) || !u.signs?.length)
      return { unavailable: "No Patient Guide urgent-help section for this medicine." };
    return {
      kind: "urgent-help",
      review: REVIEW,
      intro: S(u.intro, "patientGuide.urgentHelp.intro"),
      signs: list(u.signs, "patientGuide.urgentHelp.signs"),
      action: S(u.action, "patientGuide.urgentHelp.action"),
    };
  },
  "tell-your-doctor": ({ patientGuide }) => {
    const items = list(patientGuide?.tellYourDoctor, "patientGuide.tellYourDoctor");
    return items.length
      ? { kind: "tell-your-doctor", review: REVIEW, items }
      : { unavailable: "No Patient Guide 'tell your doctor' list for this medicine." };
  },
  "mechanism-walkthrough": ({ drug }) => {
    const m = drug.mechanism;
    const steps = list(m?.steps, "mechanism.steps");
    if (!m || !clean(m.molecularTarget) || !clean(m.effect) || !steps.length)
      return { unavailable: "Mechanism target, effect or steps missing in the registry." };
    return {
      kind: "mechanism-walkthrough",
      review: REVIEW,
      target: S(m.molecularTarget, "mechanism.molecularTarget"),
      steps,
      effect: S(m.effect, "mechanism.effect"),
    };
  },
  "pharmacology-card": ({ drug }) => {
    const m = drug.mechanism as unknown as Record<string, unknown> | undefined;
    const rows = (
      [
        ["Molecular target", "molecularTarget"],
        ["Half-life", "halfLife"],
        ["Active metabolite", "activeMetabolite"],
        ["Metabolism", "metabolism"],
        ["Excretion", "excretion"],
      ] as const
    ).flatMap(([label, key]) => {
      const v = m?.[key];
      return clean(v) ? [{ label, value: S(v, `mechanism.${key}`) }] : [];
    });
    return rows.length >= 3
      ? { kind: "pharmacology-card", review: REVIEW, rows }
      : { unavailable: "Fewer than three pharmacology facts in the registry." };
  },
  "viva-qa": ({ drug }) => {
    const items = list(drug.examLens?.mbbs?.viva, "examLens.mbbs.viva").map((full) => ({
      full,
      ...splitViva(full.text),
    }));
    return items.length
      ? { kind: "viva-qa", review: REVIEW, items }
      : { unavailable: "No MBBS viva questions in the registry." };
  },
  "high-yield-recall": ({ drug }) => {
    const items = list(drug.examLens?.neetPg?.highYield, "examLens.neetPg.highYield");
    return items.length
      ? { kind: "high-yield-recall", review: REVIEW, items }
      : { unavailable: "No NEET PG high-yield list in the registry." };
  },
  "pyq-concepts": ({ drug }) => {
    const items = list(drug.examLens?.neetPg?.pyqConcepts, "examLens.neetPg.pyqConcepts");
    return items.length
      ? { kind: "pyq-concepts", review: REVIEW, items }
      : { unavailable: "No previous-year-question concepts in the registry." };
  },
  "mcq-drill": ({ mcqs }) => {
    const questions = (mcqs ?? []).map((q) => ({
      id: q.id,
      source: `stahl:${q.id}`,
      stem: q.question,
      options: [...q.options],
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    }));
    return questions.length
      ? { kind: "mcq-drill", review: REVIEW, questions }
      : { unavailable: "No authored MCQs for this medicine." };
  },
  "case-reasoner": ({ drug }) => {
    const c = drug.clinicalCases?.[0];
    if (
      !c ||
      ![c.title, c.presentation, c.history, c.examination, c.diagnosis, c.rationale, c.management].every(clean)
    )
      return { unavailable: "No complete clinical case in the registry." };
    const p = "clinicalCases[0]";
    return {
      kind: "case-reasoner",
      review: REVIEW,
      title: S(c.title, `${p}.title`),
      presentation: S(c.presentation, `${p}.presentation`),
      history: S(c.history, `${p}.history`),
      examination: S(c.examination, `${p}.examination`),
      diagnosis: S(c.diagnosis, `${p}.diagnosis`),
      rationale: S(c.rationale, `${p}.rationale`),
      management: S(c.management, `${p}.management`),
    };
  },
  "decision-path": ({ drug }) => {
    const dp = drug.clinicalDecisionPath;
    if (!dp || !dp.nodes?.length || !clean(dp.title))
      return { unavailable: "No clinical decision path in the registry." };
    return {
      kind: "decision-path",
      review: REVIEW,
      title: S(dp.title, "clinicalDecisionPath.title"),
      startNodeId: dp.startNodeId,
      nodes: dp.nodes.map((n, i) => ({
        id: n.id,
        question: S(n.question, `clinicalDecisionPath.nodes[${i}].question`),
        branches: (n.branches ?? []).map((b) => ({ label: b.label, next: b.next })),
        recommendation: clean(n.recommendation)
          ? S(n.recommendation, `clinicalDecisionPath.nodes[${i}].recommendation`)
          : null,
        reasoning: clean(n.reasoning) ? S(n.reasoning, `clinicalDecisionPath.nodes[${i}].reasoning`) : null,
      })),
    };
  },
  pitfalls: ({ drug }) => {
    const mistakes = (drug.commonMistakes ?? []).flatMap((c, i) =>
      clean(c.mistake) && clean(c.why) && clean(c.correction)
        ? [
            {
              mistake: S(c.mistake, `commonMistakes[${i}].mistake`),
              why: S(c.why, `commonMistakes[${i}].why`),
              correction: S(c.correction, `commonMistakes[${i}].correction`),
            },
          ]
        : []
    );
    const whenNotToUse = (drug.whenNotToUse ?? []).flatMap((w, i) =>
      clean(w.scenario) && clean(w.reason)
        ? [
            {
              scenario: S(w.scenario, `whenNotToUse[${i}].scenario`),
              reason: S(w.reason, `whenNotToUse[${i}].reason`),
              alternative: clean(w.alternative) ? S(w.alternative, `whenNotToUse[${i}].alternative`) : null,
            },
          ]
        : []
    );
    return mistakes.length || whenNotToUse.length
      ? { kind: "pitfalls", review: REVIEW, mistakes, whenNotToUse }
      : { unavailable: "No common mistakes or when-not-to-use entries in the registry." };
  },
};

export function buildModeLens(mode: ModeId, inputs: LensInputs): ModeLens {
  const blocks: LensBlock[] = [];
  const unavailable: UnavailableBlock[] = [];
  for (const kind of MODE_SPECS[mode].blocks) {
    const r = BUILDERS[kind](inputs);
    if ("unavailable" in r) unavailable.push({ kind, reason: r.unavailable });
    else blocks.push(r);
  }
  return { mode, blocks, unavailable };
}

export function buildModeLenses(inputs: LensInputs): ModeLensSet {
  return Object.fromEntries(MODE_ORDER.map((m) => [m, buildModeLens(m, inputs)])) as ModeLensSet;
}
