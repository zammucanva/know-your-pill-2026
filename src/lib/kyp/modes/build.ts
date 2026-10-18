import type { Drug } from "@/lib/kyp/data";
import type { PatientGuide } from "@/lib/kyp/patient/types";
import type { StahlMcq } from "@/lib/kyp/stahl-mcqs";
import { STAHL_TOPIC_LABELS } from "@/lib/kyp/stahl-mcqs/facts";
import { originOf } from "./patient-interactions";
import { quizSectionCategory } from "./mcq-topics";
import { guideSegments, segmentRegistryText } from "./patient-explanation";
import { MODE_ORDER, MODE_SPECS } from "./specs";
import type {
  AdverseEffect,
  BlockKind,
  ContraindicationItem,
  DataState,
  McqQuestion,
  InteractionRecord,
  LensBlock,
  ModeId,
  ModeLens,
  ModeLensSet,
  Sourced,
  UnavailableBlock,
  VivaItem,
  VivaReviewReason,
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

/** A list when the registry holds one, else empty: malformed or absent data never throws. */
const asList = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

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

/** A prompt reads as a question when it has a "?" or opens with an exam command word. */
const QUESTION_LIKE =
  /\?|^(name|list|define|describe|explain|enumerate|state|mention|write|classify|outline|give|compare|differentiate|discuss|identify)\b/i;

export type VivaClass =
  | { type: "qa"; question: string; answer: string }
  | { type: "statement" }
  | { type: "needs-review"; reason: VivaReviewReason };

/**
 * Classifies one viva entry without changing it. `full` is always displayed from
 * the source; question/answer are display splits only.
 *  - qa: first "(" group is balanced, runs to the end (optional full stop) and the
 *    text before it reads as a question or exam command.
 *  - needs-review: empty; unbalanced parentheses; or contains a "?" but no
 *    parsable answer (a question with an inline or trailing answer we will not guess at).
 *  - statement: everything else, shown whole.
 */
export function classifyViva(full: string): VivaClass {
  const text = full.trim();
  if (!text) return { type: "needs-review", reason: "empty" };
  const opens = (text.match(/\(/g) ?? []).length;
  const closes = (text.match(/\)/g) ?? []).length;
  if (opens !== closes) return { type: "needs-review", reason: "unbalanced-parentheses" };
  const open = text.indexOf("(");
  if (open > 0) {
    let depth = 0;
    for (let i = open; i < text.length; i++) {
      if (text[i] === "(") depth++;
      else if (text[i] === ")" && --depth === 0) {
        const tail = text.slice(i + 1).trim();
        if (tail === "" || tail === ".") {
          const question = text.slice(0, open).trim();
          const answer = text.slice(open + 1, i).trim();
          if (question && answer && QUESTION_LIKE.test(question)) return { type: "qa", question, answer };
        }
        break;
      }
    }
  }
  if (text.includes("?")) return { type: "needs-review", reason: "question-without-parsable-answer" };
  return { type: "statement" };
}

/** Back-compat display split: only a classified qa has an answer. */
export function splitViva(full: string): { question: string; answer: string | null } {
  const c = classifyViva(full);
  return c.type === "qa" ? { question: c.question, answer: c.answer } : { question: full.trim(), answer: null };
}

function contraindicationItems(drug: Drug): ContraindicationItem[] {
  return asList<Drug["contraindications"][number]>(drug.contraindications).flatMap((c, i) =>
    clean(c.name) && clean(c.rationale)
      ? [{ name: S(c.name, `contraindications[${i}].name`), severity: c.severity, rationale: S(c.rationale, `contraindications[${i}].rationale`) }]
      : []
  );
}

type Builder = (i: LensInputs) => LensBlock | { unavailable: string };

const BUILDERS: Record<BlockKind, Builder> = {
  "plain-summary": ({ drug, patientGuide }) => {
    if (patientGuide && clean(patientGuide.whatIsThis))
      return { kind: "plain-summary", review: REVIEW, summary: S(patientGuide.whatIsThis, "patientGuide.whatIsThis"), explanation: guideSegments(patientGuide.whatIsThis) };
    if (clean(drug.patientExplanation))
      return { kind: "plain-summary", review: REVIEW, summary: S(drug.patientExplanation, "patientExplanation"), explanation: segmentRegistryText(drug.patientExplanation, drug) };
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
  "patient-interactions": ({ drug, patientGuide }) => {
    const guideText = patientGuide?.interactions;
    const modeText = (drug.patientMode as { interactions?: unknown } | undefined)?.interactions;
    const statement = clean(guideText)
      ? { text: S(guideText, "patientGuide.interactions"), origin: originOf("patientGuide.interactions", guideText) }
      : clean(modeText)
        ? { text: S(modeText, "patientMode.interactions"), origin: originOf("patientMode.interactions", modeText) }
        : null;
    const rawList = drug.interactions as unknown;
    const names = Array.isArray(rawList)
      ? (rawList as Drug["interactions"]).flatMap((x, i) => (clean(x?.drug) ? [S(x.drug, `interactions[${i}].drug`)] : []))
      : [];
    if (!statement && !names.length)
      return { unavailable: "No patient wording and no interaction names in the registry. This does not mean the medicine has no interactions." };
    return { kind: "patient-interactions", review: REVIEW, statement, names };
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
  "viva": ({ drug }) => {
    const raw = drug.examLens?.mbbs?.viva;
    const items: VivaItem[] = Array.isArray(raw)
      ? raw.flatMap((text, i): VivaItem[] => {
          if (typeof text !== "string") return [];
          const full = S(text, `examLens.mbbs.viva[${i}]`);
          const c = classifyViva(text);
          if (c.type === "qa") return [{ type: "qa", full, question: c.question, answer: c.answer }];
          if (c.type === "statement") return [{ type: "statement", full }];
          return [{ type: "needs-review", full, reason: c.reason }];
        })
      : [];
    return items.length
      ? { kind: "viva", review: REVIEW, items }
      : { unavailable: "No MBBS viva items in the registry." };
  },
  indications: ({ drug }) => {
    const items = asList<Drug["indications"][number]>(drug.indications).flatMap((x, i) =>
      clean(x.name) && clean(x.description)
        ? [
            {
              name: S(x.name, `indications[${i}].name`),
              status: x.status,
              description: S(x.description, `indications[${i}].description`),
              ageGroup: clean(x.ageGroup) ? S(x.ageGroup, `indications[${i}].ageGroup`) : null,
            },
          ]
        : []
    );
    return items.length
      ? { kind: "indications", review: REVIEW, items }
      : { unavailable: "Indications are not recorded in the registry for this medicine." };
  },
  "adverse-effects": ({ drug }) => {
    const conv = (arr: Drug["seriousSideEffects"], base: string): AdverseEffect[] =>
      asList<Drug["seriousSideEffects"][number]>(arr).flatMap((x, i) =>
        clean(x.name) && clean(x.description)
          ? [
              {
                name: S(x.name, `${base}[${i}].name`),
                severity: x.severity,
                frequency: x.frequency,
                description: S(x.description, `${base}[${i}].description`),
                management: clean(x.management) ? S(x.management, `${base}[${i}].management`) : null,
              },
            ]
          : []
      );
    const serious = conv(drug.seriousSideEffects, "seriousSideEffects");
    const common = conv(drug.commonSideEffects, "commonSideEffects");
    return serious.length
      ? { kind: "adverse-effects", review: REVIEW, serious, common }
      : { unavailable: "Serious adverse effects are not recorded in the registry for this medicine. This is not a finding that none exist." };
  },
  contraindications: ({ drug }) => {
    const items = contraindicationItems(drug);
    return items.length
      ? { kind: "contraindications", review: REVIEW, items }
      : { unavailable: "Contraindications are not recorded in the registry for this medicine. This is not a finding that none exist." };
  },
  "prescribing-checks": ({ drug }) => {
    const items = contraindicationItems(drug);
    // Same canonical facts as the MBBS list; only the order differs (absolute first, stable otherwise).
    const ordered = [...items].sort((a, b) => Number(b.severity === "absolute") - Number(a.severity === "absolute"));
    return ordered.length
      ? { kind: "prescribing-checks", review: REVIEW, items: ordered }
      : { unavailable: "Contraindications are not recorded in the registry for this medicine. This is not a finding that none exist." };
  },
  interactions: ({ drug }) => {
    const raw = drug.interactions as unknown;
    // Absent (field missing or not a list) is NOT the same as an explicit empty list.
    if (!Array.isArray(raw)) return { unavailable: "No interaction records field in the registry (absent, not an empty list). This does not mean the medicine has no interactions." };
    const items: InteractionRecord[] = [];
    let incomplete = 0;
    (raw as Drug["interactions"]).forEach((x, i) => {
      if (clean(x?.drug) && clean(x?.mechanism) && clean(x?.action) && ["contraindicated", "major", "moderate", "minor"].includes(x.severity))
        items.push({
          drug: S(x.drug, `interactions[${i}].drug`),
          severity: x.severity,
          mechanism: S(x.mechanism, `interactions[${i}].mechanism`),
          action: S(x.action, `interactions[${i}].action`),
        });
      else incomplete++;
    });
    return { kind: "interactions", review: REVIEW, state: raw.length === 0 ? "empty" : "listed", items, incomplete };
  },
  "monitoring-plan": ({ drug }) => {
    const monitoring = asList<Drug["monitoring"][number]>(drug.monitoring).flatMap((m, i) =>
      clean(m.parameter) && clean(m.frequency) && clean(m.rationale)
        ? [
            {
              parameter: S(m.parameter, `monitoring[${i}].parameter`),
              frequency: S(m.frequency, `monitoring[${i}].frequency`),
              rationale: S(m.rationale, `monitoring[${i}].rationale`),
            },
          ]
        : []
    );
    const boxedWarnings = asList<Drug["blackBoxWarnings"][number]>(drug.blackBoxWarnings).flatMap((w, i) =>
      clean(w.title) && clean(w.text)
        ? [{ title: S(w.title, `blackBoxWarnings[${i}].title`), text: S(w.text, `blackBoxWarnings[${i}].text`) }]
        : []
    );
    return monitoring.length
      ? { kind: "monitoring-plan", review: REVIEW, monitoring, boxedWarnings }
      : { unavailable: "Monitoring parameters are not recorded in the registry for this medicine. This is not a finding that none are needed." };
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
  "mcq-drill": ({ drug, mcqs }) => {
    const questions: McqQuestion[] = [];
    let skipped = 0;
    const seen = new Set<string>();
    const add = (q: McqQuestion) => {
      const key = `${q.stem}|${q.options.join("|")}`;
      if (seen.has(key)) return;
      seen.add(key);
      questions.push(q);
    };
    asList<NonNullable<Drug["microQuizzes"]>[number]>(drug.microQuizzes).forEach((q, i) => {
      const ok =
        clean(q.question) &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        q.options.every(clean) &&
        Number.isInteger(q.correctIndex) &&
        q.correctIndex >= 0 &&
        q.correctIndex < q.options.length;
      if (!ok) {
        skipped++;
        return;
      }
      add({
        id: `${drug.slug}:quiz:${q.id}`,
        source: `microQuizzes[${i}].question`,
        origin: "authored-quiz",
        stem: q.question,
        options: [...q.options],
        correctIndex: q.correctIndex,
        explanation: clean(q.explanation) ? q.explanation : null,
        category: quizSectionCategory(q.afterSectionId),
      });
    });
    for (const q of mcqs ?? [])
      add({
        id: q.id,
        source: `stahl:${q.id}`,
        origin: "stahl-bank",
        stem: q.question,
        options: [...q.options],
        correctIndex: q.correctIndex,
        explanation: clean(q.explanation) ? q.explanation : null,
        category: q.topic && STAHL_TOPIC_LABELS[q.topic] ? { id: q.topic, label: STAHL_TOPIC_LABELS[q.topic], basis: "stahl-topic" } : null,
      });
    return questions.length
      ? { kind: "mcq-drill", review: REVIEW, questions, skipped }
      : { unavailable: "No authored MCQs for this medicine." };
  },
  "exam-prep": ({ drug }) => {
    const practical = list(drug.examLens?.mbbs?.practical, "examLens.mbbs.practical");
    const longAnswer = list(drug.examLens?.mbbs?.longAnswer, "examLens.mbbs.longAnswer");
    return practical.length || longAnswer.length
      ? { kind: "exam-prep", review: REVIEW, practical, longAnswer }
      : { unavailable: "No MBBS practical tasks or long-answer prompts in the registry." };
  },
  "patient-how-to-take": ({ patientGuide }) => {
    const g = patientGuide;
    const one = (v: unknown, path: string) => (clean(v) ? S(v, path) : null);
    const b = {
      usuallyTaken: one(g?.usuallyTaken, "patientGuide.usuallyTaken"),
      missedDose: one(g?.missedDose, "patientGuide.missedDose"),
      stopping: one(g?.stopping, "patientGuide.stopping"),
      monitoring: one(g?.monitoring, "patientGuide.monitoring"),
      timeline: one(g?.timelineShort, "patientGuide.timelineShort"),
    };
    return Object.values(b).some(Boolean)
      ? { kind: "patient-how-to-take", review: REVIEW, ...b }
      : { unavailable: "No Patient Guide how-to-take sections for this medicine (guide-only content; the registry has no equivalent)." };
  },
  "patient-side-effects": ({ drug, patientGuide }) => {
    const c = patientGuide?.commonSideEffects;
    const imp = patientGuide?.importantSideEffects;
    if (patientGuide && (clean(c?.intro) || (c?.list?.length ?? 0) > 0 || (imp?.items?.length ?? 0) > 0)) {
      const important = asList<NonNullable<typeof imp>["items"][number]>(imp?.items).flatMap((x, i) =>
        clean(x.name) && clean(x.whatItMeans) && clean(x.whatToDo)
          ? [
              {
                name: S(x.name, `patientGuide.importantSideEffects.items[${i}].name`),
                whatItMeans: S(x.whatItMeans, `patientGuide.importantSideEffects.items[${i}].whatItMeans`),
                whatToDo: S(x.whatToDo, `patientGuide.importantSideEffects.items[${i}].whatToDo`),
              },
            ]
          : []
      );
      return {
        kind: "patient-side-effects",
        review: REVIEW,
        source: "guide",
        intro: clean(c?.intro) ? S(c!.intro, "patientGuide.commonSideEffects.intro") : null,
        common: list(c?.list, "patientGuide.commonSideEffects.list"),
        note: clean(c?.note) ? S(c!.note as string, "patientGuide.commonSideEffects.note") : null,
        importantIntro: clean(imp?.intro) ? S(imp!.intro, "patientGuide.importantSideEffects.intro") : null,
        important,
        registryText: null,
      };
    }
    const text = (drug.patientMode as { sideEffects?: unknown } | undefined)?.sideEffects;
    if (clean(text))
      return {
        kind: "patient-side-effects",
        review: REVIEW,
        source: "registry",
        intro: null,
        common: [],
        note: null,
        importantIntro: null,
        important: [],
        registryText: S(text, "patientMode.sideEffects"),
      };
    return { unavailable: "No patient side-effect wording in the Patient Guide or the registry." };
  },
  "clinical-summary": ({ drug }) => {
    const state = (v: unknown): { state: DataState; count: number } =>
      Array.isArray(v) ? { state: v.length ? "listed" : "empty", count: v.length } : { state: "absent", count: 0 };
    const ci = state(drug.contraindications);
    const ix = state(drug.interactions);
    const mo = state(drug.monitoring);
    const bb = state(drug.blackBoxWarnings);
    return {
      kind: "clinical-summary",
      review: REVIEW,
      contraindications: { ...ci, absolute: asList<Drug["contraindications"][number]>(drug.contraindications).filter((c) => c?.severity === "absolute").length },
      interactions: { ...ix, contraindicated: asList<Drug["interactions"][number]>(drug.interactions).filter((x) => x?.severity === "contraindicated").length },
      monitoring: mo,
      boxedWarnings: bb,
      decisionPath: { state: drug.clinicalDecisionPath?.nodes?.length ? "present" : "absent" },
      pitfalls: { state: asList(drug.commonMistakes).length + asList(drug.whenNotToUse).length > 0 ? "present" : "absent" },
      derivedFrom: ["contraindications", "interactions", "monitoring", "blackBoxWarnings", "clinicalDecisionPath", "commonMistakes", "whenNotToUse"],
    };
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
        branches: asList<{ label: string; next: string }>(n.branches).map((b) => ({ label: b.label, next: b.next })),
        recommendation: clean(n.recommendation)
          ? S(n.recommendation, `clinicalDecisionPath.nodes[${i}].recommendation`)
          : null,
        reasoning: clean(n.reasoning) ? S(n.reasoning, `clinicalDecisionPath.nodes[${i}].reasoning`) : null,
      })),
    };
  },
  pitfalls: ({ drug }) => {
    const mistakes = asList<NonNullable<Drug["commonMistakes"]>[number]>(drug.commonMistakes).flatMap((c, i) =>
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
    const whenNotToUse = asList<NonNullable<Drug["whenNotToUse"]>[number]>(drug.whenNotToUse).flatMap((w, i) =>
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
      : { unavailable: "Common errors and when-not-to-use entries are not recorded in the registry for this medicine. This is not a finding that none apply." };
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
