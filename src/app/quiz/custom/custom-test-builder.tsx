"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardList,
  Eye,
  RotateCcw,
  Timer,
  X,
  Zap,
} from "lucide-react";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { drugTaxonomyClasses } from "@/lib/kyp/data/drug-taxonomy";
import {
  buildRetest,
  buildTest,
  getPoolStats,
} from "@/lib/kyp/custom-test/engine";
import {
  DIFFICULTY_TIERS,
  defaultDifficultyForLearnerType,
  tierDescription,
  tierLabel,
  type DifficultySelection,
} from "@/lib/kyp/custom-test/difficulty";
import { deriveRequestedCount } from "@/lib/kyp/custom-test/count";
import { takeRetestRequest } from "@/lib/kyp/custom-test/retest-handoff";
import {
  selectWeakTopics,
  weakAreaDrugSlugs,
} from "@/lib/kyp/custom-test/weak-area";
import { breakDownBySection } from "@/lib/kyp/custom-test/exam-breakdown";
import type { TestQuestion } from "@/lib/kyp/custom-test/types";
import {
  recordCustomTestAttempt,
  recordMistakes,
  resolveMistakes,
  recordAnswerEvents,
  recordRunSummary,
  getTestPresets,
  saveTestPreset,
  deleteTestPreset,
  recordPresetLaunch,
  type TestPreset,
  type MistakeRecordInput,
  type AnswerEventInput,
} from "@/lib/kyp/progress/progress-store";
import { verifyDrugHref } from "@/lib/kyp/drug-course-sections";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import { getProgress, type KypProgressData } from "@/lib/kyp/progress/progress-store";

/**
 * /quiz/custom — Build your own test (recovered feature).
 *
 * Flow: Practice → Custom Test → Build your own test → select topics →
 * choose count → Start → runner → Results → Review Incorrect.
 *
 * Safety properties (mirrored in tests/custom-test.test.ts):
 *   - every question comes from the locked KYP data layer
 *   - the Reset control lives on the RIGHT of the SAME progress row and
 *     only resets the CURRENT attempt (never course / Study Mode /
 *     practice-hub progress, which live in separate store namespaces)
 *   - the availability number shown is the real unique pool size
 *
 * NOW additions (quick wins, no new engine):
 *   - N2: "Retest me on these" regenerates the EXACT incorrect set via
 *     the deterministic engine, with a before/after comparison.
 *   - N3: opt-in timed mode — per-test countdown, pacing indicator,
 *     timing in the results. Defaults to OFF.
 *   - N4: saved test presets — one-tap launch, name + config stored in
 *     the existing namespaced progress store.
 *   - N7b: classes are selectable units — quick-select chips plus the
 *     ?class= entry from class landing pages.
 */

type Phase = "setup" | "test" | "results" | "review";

const COUNT_OPTIONS = [10, 20, 30, 50, 100];

/** A never-mutated empty snapshot for pre-hydration weak-area maths. */
const EMPTY_PROGRESS_FOR_WEAK: KypProgressData = {
  version: 1,
  courses: {},
  lastVisitedSlug: null,
  lastVisitedAt: null,
  recentActivity: [],
  practice: { attempts: 0, latestScore: null, bestScore: null, lastAttemptAt: null, lastRunQuestions: null },
  customTest: { attempts: 0, latestScore: null, bestScore: null, lastAttemptAt: null, lastRunQuestions: null },
  mistakeBook: {},
  testPresets: [],
  answers: {},
  runs: [],
  retention: {},
  planDismissedOn: null,
};

/** sessionStorage/URL handoff keys are owned by retest-handoff.ts. */

interface AttemptState {
  questions: TestQuestion[];
  answers: (number | null)[];
  index: number;
  startedAt: number;
  capped: boolean;
  available: number;
  /** Allotted time in ms when timed mode is on (N3); null = untimed. */
  allottedMs: number | null;
  /** Exam mode (X6): feedback fully deferred until submission. */
  exam: boolean;
  /** Retest context (N2); null for normal tests. */
  retestOf: { label: string; previousChosen: Record<string, string> } | null;
  /** Wall-clock finish timestamp, set exactly once on completion. */
  finishedAt: number | null;
}


function formatClock(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function CustomTestBuilder() {
  /* ── Setup state ── */
  const [selected, setSelected] = React.useState<Set<string>>(new Set());
  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(drugTaxonomyClasses.map((c) => c.id).slice(0, 1))
  );
  const [count, setCount] = React.useState<number>(20);
  /* ── Difficulty (Phase 5) — reasoning tier for this test. Defaults
     from the learner's personalisation profile (learnerType, fetched
     read-only from the session); signed-out visitors get "all". The
     choice is a filter over the SAME question pool — it never
     invents questions and never changes ids. ── */
  const [difficulty, setDifficulty] = React.useState<DifficultySelection>("all");
  const difficultyTouched = React.useRef(false);
  React.useEffect(() => {
    if (difficultyTouched.current) return;
    let cancelled = false;
    fetch("/api/auth/session")
      .then((r) => (r.ok ? r.json() : { user: null }))
      .then((data: { user?: { learnerType?: string } | null }) => {
        if (cancelled || difficultyTouched.current) return;
        setDifficulty(defaultDifficultyForLearnerType(data?.user?.learnerType));
      })
      .catch(() => {
        /* Signed-out or static deployment — "all" stands. */
      });
    return () => {
      cancelled = true;
    };
  }, []);
  const [customCount, setCustomCount] = React.useState<string>("");
  const [cappedNotice, setCappedNotice] = React.useState<string | null>(null);
  const [classNotice, setClassNotice] = React.useState<string | null>(null);

  /* ── Timed mode (N3) — opt-in, defaults OFF ── */
  const [timed, setTimed] = React.useState(false);
  /** Empty string = auto (1 minute per question). */
  const [timedMinutesInput, setTimedMinutesInput] = React.useState<string>("");

  /* ── Exam mode (X6) — timed + mixed topics + fully deferred
        feedback; a distinct composition, not a new engine. ── */
  const [exam, setExam] = React.useState(false);

  /* ── Saved presets (N4) ── */
  const [presets, setPresets] = React.useState<TestPreset[] | null>(null);
  const [presetName, setPresetName] = React.useState<string>("");
  const [presetNotice, setPresetNotice] = React.useState<string | null>(null);

  /* ── Weak-Area Test (X2) — topics chosen from demonstrated weakness,
        not manual selection. ── */
  const progress = useLocalProgress();
  const weakArea = React.useMemo(
    () => selectWeakTopics(progress ?? EMPTY_PROGRESS_FOR_WEAK),
    [progress]
  );
  const [weakNotice, setWeakNotice] = React.useState<string | null>(null);
  /** The reasons banner carried into the test phase. */
  const [weakReasons, setWeakReasons] = React.useState<string[] | null>(null);

  /* ── Attempt state (React state ONLY — Reset clears exactly this) ── */
  const [phase, setPhase] = React.useState<Phase>("setup");
  const [attempt, setAttempt] = React.useState<AttemptState | null>(null);
  const [resetOpen, setResetOpen] = React.useState(false);
  const [reviewAll, setReviewAll] = React.useState(false);
  /** The Reset trigger — focus returns here when the dialog closes. */
  const resetTriggerRef = React.useRef<HTMLButtonElement>(null);

  const stats = React.useMemo(
    () => getPoolStats([...selected], difficulty),
    [selected, difficulty]
  );

  const selectedCount = selected.size;
  // Clamped, crash-safe derivation — "0"/negative/unparseable input can
  // never reach buildTest (see lib/kyp/custom-test/count.ts).
  const requestedCount = deriveRequestedCount(customCount, count);

  /** Effective allotted minutes when timed (auto = 1 min per question). */
  const effectiveTimedMinutes = React.useMemo(() => {
    const parsed = parseInt(timedMinutesInput, 10);
    if (Number.isFinite(parsed) && parsed >= 1) return Math.min(180, Math.round(parsed));
    return Math.max(1, Number.isFinite(requestedCount) ? requestedCount : 20);
  }, [timedMinutesInput, requestedCount]);

  /* ── Selection helpers ── */
  const toggleMedication = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const toggleGroup = (classId: string, slugs: string[]) => {
    setSelected((prev) => {
      const next = new Set(prev);
      const allIn = slugs.every((s) => next.has(s));
      if (allIn) slugs.forEach((s) => next.delete(s));
      else slugs.forEach((s) => next.add(s));
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  const toggleExpanded = (classId: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(classId)) next.delete(classId);
      else next.add(classId);
      return next;
    });
  };

  /** N7b — a class as ONE selectable unit: one tap selects exactly
   *  that class (exclusive), replacing any current selection. */
  const selectClassOnly = (classId: string) => {
    const cls = drugTaxonomyClasses.find((c) => c.id === classId);
    if (!cls) return;
    setSelected(new Set(cls.medications.map((m) => m.slug)));
    setExpanded((prev) => new Set([...prev, cls.id]));
    setClassNotice(`${cls.label} selected — ${cls.medications.length} ${
      cls.medications.length === 1 ? "medication" : "medications"
    } from the ${cls.fullName} class.`);
  };

  /* ── Attempt lifecycle ── */
  const startTest = (
    config?: {
      slugs?: string[];
      count?: number;
      timed?: boolean;
      minutes?: number | null;
      exam?: boolean;
    }
  ) => {
    const slugs = config?.slugs ?? [...selected];
    if (slugs.length === 0) return;
    const wanted =
      config?.count ?? (Number.isFinite(requestedCount) ? requestedCount : 20);
    const useExam = config?.exam ?? exam;
    // Exam mode composes timed pacing (X6): the countdown is always on.
    const useTimed = useExam || (config?.timed ?? timed);
    const minutes =
      config?.minutes !== undefined && config?.minutes !== null
        ? config.minutes
        : effectiveTimedMinutes;
    const built = buildTest(slugs, wanted, Date.now() % 2147483647, {
      difficulty,
    });
    setAttempt({
      questions: built.questions,
      answers: built.questions.map(() => null),
      index: 0,
      startedAt: Date.now(),
      capped: built.capped,
      available: built.available,
      allottedMs: useTimed ? Math.max(1, minutes) * 60000 : null,
      exam: useExam,
      retestOf: null,
      finishedAt: null,
    });
    setCappedNotice(
      built.capped
        ? `Only ${built.available} unique questions are available for this selection — the test was set to ${built.deliveredCount}.`
        : null
    );
    setReviewAll(false);
    setPhase("test");
  };

  /** N2 — regenerate the EXACT set of incorrect identities via the
   *  deterministic engine, carrying the previous choices for the
   *  before/after comparison. */
  const startRetest = (
    identities: string[],
    label: string,
    previousChosen: Record<string, string>
  ) => {
    if (identities.length === 0) return;
    const built = buildRetest(identities, Date.now() % 2147483647);
    if (built.questions.length === 0) {
      setCappedNotice("These questions are no longer available to retest.");
      return;
    }
    setAttempt({
      questions: built.questions,
      answers: built.questions.map(() => null),
      index: 0,
      startedAt: Date.now(),
      capped: built.capped,
      available: built.available,
      allottedMs: null,
      exam: false,
      retestOf: { label, previousChosen },
      finishedAt: null,
    });
    setCappedNotice(
      built.capped
        ? `${identities.length - built.questions.length} question${
            identities.length - built.questions.length === 1 ? "" : "s"
          } could not be regenerated (content changed) and ${
            identities.length - built.questions.length === 1 ? "was" : "were"
          } skipped.`
        : null
    );
    setReviewAll(false);
    setPhase("test");
  };

  const answerCurrent = (optionIdx: number) => {
    if (!attempt) return;
    if (attempt.answers[attempt.index] !== null) return;
    setAttempt({
      ...attempt,
      answers: attempt.answers.map((a, i) =>
        i === attempt.index ? optionIdx : a
      ),
    });
  };

  /** Transition to results exactly once, stamping the finish time. */
  const finishAttempt = () => {
    setAttempt((prev) =>
      prev ? { ...prev, finishedAt: Date.now() } : prev
    );
    setPhase("results");
  };

  const nextQuestion = () => {
    if (!attempt) return;
    if (attempt.index + 1 >= attempt.questions.length) {
      finishAttempt();
    } else {
      setAttempt({ ...attempt, index: attempt.index + 1 });
    }
  };

  const resetTest = () => {
    // Reset affects ONLY the current attempt: answers, position, score
    // and the countdown are discarded. Course progress, Study Mode
    // progress, practice-hub history and the Custom Test run history
    // are never touched.
    setAttempt((prev) =>
      prev
        ? {
            ...prev,
            answers: prev.questions.map(() => null),
            index: 0,
            startedAt: Date.now(),
            finishedAt: null,
          }
        : prev
    );
    setResetOpen(false);
  };

  /* ── Results derivation ── */
  const results = React.useMemo(() => {
    if (!attempt) return null;
    const answered = attempt.questions.map((q, i) => ({
      question: q,
      selected: attempt.answers[i],
      correct: attempt.answers[i] === q.attemptCorrectIndex,
    }));
    const correct = answered.filter((a) => a.correct);
    const incorrect = answered.filter(
      (a) => !a.correct && a.selected !== null
    );
    const topics = [...new Set(attempt.questions.map((q) => q.source.sourceName))];
    return { answered, correct, incorrect, topics };
  }, [attempt]);

  // Record the completed run exactly once when entering the results
  // phase — aggregate stats, plus the Mistake Book loop (N1): misses
  // become "questions to revisit", correct answers resolve old entries.
  const recordedRef = React.useRef<string | null>(null);
  React.useEffect(() => {
    if (phase !== "results" || !results || !attempt) return;
    const key = `${attempt.startedAt}:${attempt.questions.length}`;
    if (recordedRef.current === key) return;
    recordedRef.current = key;
    recordCustomTestAttempt(results.correct.length, attempt.questions.length);

    // Per-topic answer log (NEXT-N9) + Retention Engine input (X1):
    // correct and incorrect answers alike feed topic accuracy; misses
    // (re)schedule reviews, correct answers advance existing items.
    const events: AnswerEventInput[] = results.answered.map((a) => ({
      identity: a.question.identity,
      topicSlug: a.question.source.sourceSlug,
      topicName: a.question.source.sourceName,
      topicClass: a.question.source.sourceClass,
      correct: a.correct,
    }));
    recordAnswerEvents(events);
    recordRunSummary({
      surface: "custom",
      mode: attempt.retestOf
        ? "retest"
        : attempt.exam
          ? "exam"
          : attempt.allottedMs !== null
            ? "timed"
            : "normal",
      correct: results.correct.length,
      total: attempt.questions.length,
      durationMs:
        attempt.finishedAt !== null
          ? Math.max(0, attempt.finishedAt - attempt.startedAt)
          : null,
    });

    const misses: MistakeRecordInput[] = results.incorrect.map(
      ({ question: q, selected }) => ({
        identity: q.identity,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        source: {
          sourceName: q.source.sourceName,
          sourceSlug: q.source.sourceSlug,
          sourceType: "drug" as const,
          sourceClass: q.source.sourceClass,
          sectionLabel: q.source.sectionLabel,
          sectionHref: verifyDrugHref(q.source.sectionHref),
        },
        templateId: q.templateId,
        chosenOption: selected !== null ? q.attemptOptions[selected] : "—",
      })
    );
    recordMistakes(misses);
    resolveMistakes(results.correct.map((a) => a.question.identity));
    // Refresh the preset chips in case anything changed elsewhere.
    setPresets((prev) => prev ?? getTestPresets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, results, attempt]);

  const elapsedLabel = React.useMemo(() => {
    if (!attempt) return "";
    const end = attempt.finishedAt ?? Date.now();
    const seconds = Math.max(
      0,
      Math.round((end - attempt.startedAt) / 1000)
    );
    if (seconds < 60) return `${seconds}s`;
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }, [attempt, phase]);

  /* ── Timed mode machinery (N3) — pure client-side state ── */
  const [nowTick, setNowTick] = React.useState(() => Date.now());
  React.useEffect(() => {
    if (phase !== "test" || !attempt?.allottedMs) return;
    const timer = window.setInterval(() => setNowTick(Date.now()), 500);
    return () => window.clearInterval(timer);
  }, [phase, attempt?.allottedMs]);

  const remainingMs = React.useMemo(() => {
    if (!attempt?.allottedMs) return null;
    return Math.max(0, attempt.allottedMs - (nowTick - attempt.startedAt));
  }, [attempt, nowTick]);

  // Time is up → finish the test once (unanswered questions stay
  // unanswered — they are never filled in or marked wrong silently).
  const timeUpRef = React.useRef<string | null>(null);
  React.useEffect(() => {
    if (phase === "test" && attempt?.allottedMs && remainingMs === 0) {
      const key = `${attempt.startedAt}`;
      if (timeUpRef.current === key) return;
      timeUpRef.current = key;
      finishAttempt();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, attempt, remainingMs]);

  /** Pacing: at the current question the learner should have consumed
   *  (index / total) of the budget. A small slack absorbs reading time. */
  const pace = React.useMemo(() => {
    if (!attempt?.allottedMs || phase !== "test") return null;
    const elapsed = nowTick - attempt.startedAt;
    const expected =
      (attempt.index / attempt.questions.length) * attempt.allottedMs;
    return {
      onPace: elapsed <= expected + 10_000,
      urgent: (attempt.allottedMs - elapsed) < 60_000,
    };
  }, [attempt, nowTick, phase]);

  /* ── Presets (N4) ── */
  React.useEffect(() => {
    if (presets === null) setPresets(getTestPresets());
  }, [presets]);

  const launchPreset = (preset: TestPreset) => {
    recordPresetLaunch(preset.id);
    startTest({
      slugs: preset.drugSlugs,
      count: preset.count,
      timed: preset.timed,
      minutes: preset.minutes ?? undefined,
    });
  };

  /* ── Weak-Area Test (X2) ── */
  const startWeakArea = () => {
    const slugs = weakAreaDrugSlugs(weakArea);
    if (slugs.length === 0) {
      setWeakNotice(
        "Not enough practice history yet — take a few tests first and weak areas will be picked automatically."
      );
      return;
    }
    setWeakReasons(weakArea.topics.map((t) => `${t.classLabel}: ${t.reason}`));
    startTest({
      slugs,
      count: Number.isFinite(requestedCount) ? requestedCount : 20,
      timed: false,
    });
  };

  const handleSavePreset = () => {
    if (selectedCount === 0) return;
    const wanted = Number.isFinite(requestedCount) ? requestedCount : 20;
    const saved = saveTestPreset({
      name: presetName,
      drugSlugs: [...selected],
      count: wanted,
      timed,
      minutes: timed ? effectiveTimedMinutes : null,
    });
    setPresets(getTestPresets());
    setPresetName("");
    setPresetNotice(`Saved “${saved.name}” — ${saved.drugSlugs.length} ${
      saved.drugSlugs.length === 1 ? "medication" : "medications"
    } · ${saved.count} questions.`);
  };

  /* ── URL / handoff entry points (?class=, ?preset=, ?retest=1) ── */
  const searchParams = useSearchParams();
  const appliedEntryParams = React.useRef(false);
  React.useEffect(() => {
    if (appliedEntryParams.current) return;
    appliedEntryParams.current = true;

    // N2 — a staged retest request from the Mistake Book.
    if (searchParams.get("retest")) {
      const request = takeRetestRequest();
      if (request && request.identities.length > 0) {
        startRetest(request.identities, request.label, request.previousChosen);
        return;
      }
    }

    // N4 — one-tap preset launch from the Study Next panel.
    const presetId = searchParams.get("preset");
    if (presetId) {
      const preset = getTestPresets().find((p) => p.id === presetId);
      if (preset) {
        launchPreset(preset);
        return;
      }
    }

    // N7b — arriving from a class landing page: pre-select that class.
    const classId = searchParams.get("class");
    if (classId) {
      const cls = drugTaxonomyClasses.find((c) => c.id === classId);
      if (cls) {
        setSelected(new Set(cls.medications.map((m) => m.slug)));
        setExpanded((prev) => new Set([...prev, cls.id]));
        setClassNotice(
          `${cls.label} pre-selected from the class page — choose a length and start, or adjust the selection.`
        );
      }
    }

    // X2 — one-tap weak-area entry (the Daily Plan / chips route here).
    if (searchParams.get("weak")) {
      const selection = selectWeakTopics(getProgress());
      const slugs = weakAreaDrugSlugs(selection);
      if (slugs.length > 0) {
        setWeakReasons(selection.topics.map((t) => `${t.classLabel}: ${t.reason}`));
        startTest({ slugs, count: 20, timed: false });
      } else {
        setWeakNotice(
          "Not enough practice history yet — take a few tests first and weak areas will be picked automatically."
        );
      }
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  /* ============================================================
     SETUP PHASE
     ============================================================ */
  if (phase === "setup") {
    return (
      <>
        <FloatingSearch variant="floating" />
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                {/* Breadcrumb — Custom Test lives inside Practice, inside Study Mode */}
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Link href="/study" className="hover:text-brand">Study Mode</Link>
                  <span aria-hidden>›</span>
                  <Link href="/quiz" className="hover:text-brand">Practice</Link>
                  <span aria-hidden>/</span>
                  <span className="font-medium text-foreground">Custom Test</span>
                </nav>
                <h1
                  className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  Build your own test
                </h1>
                <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                  Choose exactly what you want to be tested on. Every question
                  is drawn from the same reviewed KYP content you study —
                  nothing invented, nothing outside the library.
                </p>
              </Reveal>

              {/* Saved presets (N4) — one-tap launch, mobile-first chips */}
              {presets !== null && presets.length > 0 && (
                <Reveal delay={0.04}>
                  <div className="mt-10">
                    <p className="text-overline text-muted-foreground mb-3">
                      Saved tests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {presets.map((preset) => (
                        <span
                          key={preset.id}
                          className="inline-flex items-center overflow-hidden rounded-full border border-brand/40 bg-brand-soft/30"
                        >
                          <button
                            type="button"
                            onClick={() => launchPreset(preset)}
                            className="inline-flex items-center gap-1.5 py-1.5 pl-3 pr-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand-soft/60 kyp-focus-ring"
                            aria-label={`Launch saved test ${preset.name}: ${preset.count} questions`}
                          >
                            {preset.timed && (
                              <Timer className="h-3 w-3" aria-hidden />
                            )}
                            {preset.name}
                            <span className="font-normal opacity-70">
                              · {preset.count}q
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              deleteTestPreset(preset.id);
                              setPresets(getTestPresets());
                            }}
                            aria-label={`Delete saved test ${preset.name}`}
                            className="py-1.5 pl-1 pr-2.5 text-muted-foreground/50 transition-colors hover:text-emergency kyp-focus-ring"
                          >
                            <X className="h-3 w-3" aria-hidden />
                          </button>
                        </span>
                      ))}
                    </div>
                    {presetNotice && (
                      <p className="mt-2 text-xs text-muted-foreground" role="status">
                        {presetNotice}
                      </p>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Weak-Area Test (X2) — topics selected from demonstrated
                  weakness, with the numbers that justified the pick */}
              {progress !== null && (
                <Reveal delay={0.05}>
                  <div className="mt-10 rounded-xl border border-border/60 bg-card/50 p-5">
                    <p className="text-overline text-muted-foreground mb-3">
                      Weak-Area Test
                    </p>
                    {weakArea.topics.length > 0 ? (
                      <>
                        <p className="text-sm leading-relaxed text-foreground/90">
                          Let the test choose for you — it draws from the
                          classes your practice history shows are weakest.
                        </p>
                        <ul className="mt-4 space-y-2">
                          {weakArea.topics.map((topic) => (
                            <li
                              key={topic.classLabel}
                              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border/30 pb-2 last:border-0 last:pb-0"
                            >
                              <span className="text-sm font-semibold text-foreground">
                                {topic.classLabel}
                              </span>
                              <span className="text-xs text-muted-foreground tabular-nums">
                                {topic.reason}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={startWeakArea}
                          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand/60 kyp-focus-ring"
                        >
                          <Zap className="h-4 w-4" aria-hidden />
                          Drill my weak areas
                          <span className="text-xs font-normal opacity-70">
                            · {weakAreaDrugSlugs(weakArea).length} medications
                          </span>
                        </button>
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {weakArea.enoughData
                          ? "No weak classes right now — your recent accuracy is holding up across everything you have practised."
                          : "Not enough practice history yet — take a few tests first and weak areas will be picked automatically."}
                      </p>
                    )}
                    {weakNotice && (
                      <p className="mt-3 text-xs text-muted-foreground" role="status">
                        {weakNotice}
                      </p>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Quick select a class (N7b) — the class IS a selectable unit */}
              <Reveal delay={0.06}>
                <div className="mt-10">
                  <p className="text-overline text-muted-foreground mb-3">
                    Quick select a class
                  </p>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Select an entire medication class">
                    {drugTaxonomyClasses.map((cls) => {
                      const onlyThis =
                        selected.size === cls.medications.length &&
                        cls.medications.every((m) => selected.has(m.slug));
                      return (
                        <button
                          key={cls.id}
                          type="button"
                          aria-pressed={onlyThis}
                          onClick={() => selectClassOnly(cls.id)}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors kyp-focus-ring",
                            onlyThis
                              ? "border-brand bg-brand-soft/40 text-brand"
                              : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                          )}
                        >
                          {cls.label}
                          <span className="ml-1.5 opacity-60 tabular-nums">
                            {cls.medications.length}
                          </span>
                        </button>
                      );
                    })}
                    {selectedCount > 0 && (
                      <button
                        type="button"
                        onClick={clearSelection}
                        className="rounded-full px-2 py-1.5 text-xs text-muted-foreground/60 transition-colors hover:text-foreground"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  {classNotice && (
                    <p className="mt-2 text-xs text-muted-foreground" role="status">
                      {classNotice}
                    </p>
                  )}
                </div>
              </Reveal>

              {/* Medication groups */}
              <Reveal delay={0.08}>
                <div className="mt-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="text-overline text-muted-foreground">Medications</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="tabular-nums text-foreground/80" aria-live="polite">
                        {selectedCount} selected
                      </span>
                      {selectedCount > 0 && (
                        <button
                          type="button"
                          onClick={clearSelection}
                          className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {drugTaxonomyClasses.map((cls) => {
                      const slugs = cls.medications.map((m) => m.slug);
                      const selectedInGroup = slugs.filter((s) => selected.has(s));
                      const allIn = selectedInGroup.length === slugs.length;
                      const someIn = selectedInGroup.length > 0 && !allIn;
                      const isOpen = expanded.has(cls.id);
                      return (
                        <div
                          key={cls.id}
                          className="rounded-xl border border-border/60 bg-card/50"
                        >
                          {/* Group header */}
                          <div className="flex items-center gap-3 px-4 py-3">
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked={allIn ? "true" : someIn ? "mixed" : "false"}
                              aria-label={`Select all ${cls.label}`}
                              onClick={() => toggleGroup(cls.id, slugs)}
                              className={cn(
                                "flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors kyp-focus-ring",
                                allIn
                                  ? "border-brand bg-brand text-primary-foreground"
                                  : someIn
                                    ? "border-brand bg-brand-soft/60 text-brand"
                                    : "border-border bg-background hover:border-brand/40"
                              )}
                            >
                              {allIn && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                              {someIn && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleExpanded(cls.id)}
                              aria-expanded={isOpen}
                              className="flex min-w-0 flex-1 items-center justify-between gap-2 text-left kyp-focus-ring"
                            >
                              <span className="truncate text-sm font-semibold text-foreground">
                                {cls.label}
                              </span>
                              <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                                {selectedInGroup.length}/{slugs.length}
                              </span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                                  isOpen && "rotate-180"
                                )}
                                aria-hidden
                              />
                            </button>
                          </div>
                          {/* Medication pills */}
                          {isOpen && (
                            <div className="flex flex-wrap gap-2 border-t border-border/40 px-4 py-3">
                              {cls.medications.map((med) => {
                                const isSelected = selected.has(med.slug);
                                return (
                                  <label
                                    key={med.slug}
                                    className={cn(
                                      "inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors kyp-focus-ring",
                                      isSelected
                                        ? "border-brand bg-brand-soft/50 text-brand"
                                        : "border-border bg-background text-muted-foreground hover:border-brand/30 hover:text-foreground"
                                    )}
                                  >
                                    <input
                                      type="checkbox"
                                      className="sr-only"
                                      checked={isSelected}
                                      onChange={() => toggleMedication(med.slug)}
                                    />
                                    <span
                                      aria-hidden
                                      className={cn(
                                        "flex h-3.5 w-3.5 items-center justify-center rounded-full border",
                                        isSelected
                                          ? "border-brand bg-brand text-primary-foreground"
                                          : "border-border"
                                      )}
                                    >
                                      {isSelected && <Check className="h-2.5 w-2.5" strokeWidth={3.5} />}
                                    </span>
                                    {med.genericName}
                                  </label>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Difficulty (Phase 5) — reasoning tier for this test.
                  A filter over the same reviewed pool: harder reasoning,
                  never harder vocabulary, never new medical claims. */}
              <Reveal delay={0.13}>
                <div className="mt-12">
                  <p className="text-overline text-muted-foreground">
                    Reasoning level
                  </p>
                  <div
                    role="radiogroup"
                    aria-label="Reasoning level"
                    className="mt-4 flex flex-wrap items-center gap-2"
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={difficulty === "all"}
                      onClick={() => {
                        difficultyTouched.current = true;
                        setDifficulty("all");
                      }}
                      className={cn(
                        "rounded-lg border px-4 py-2 text-sm font-medium transition-colors kyp-focus-ring",
                        difficulty === "all"
                          ? "border-brand bg-brand-soft/40 text-brand"
                          : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                      )}
                    >
                      All levels
                    </button>
                    {DIFFICULTY_TIERS.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        role="radio"
                        aria-checked={difficulty === tier}
                        title={tierDescription(tier)}
                        onClick={() => {
                          difficultyTouched.current = true;
                          setDifficulty(tier);
                        }}
                        className={cn(
                          "rounded-lg border px-4 py-2 text-sm font-medium transition-colors kyp-focus-ring",
                          difficulty === tier
                            ? "border-brand bg-brand-soft/40 text-brand"
                            : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                        )}
                      >
                        {tierLabel(tier)}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {difficulty === "all"
                      ? "Foundation, Clinical, and Advanced reasoning — the full pool."
                      : tierDescription(difficulty) +
                        ". Level filters only — questions, wording, and answers are unchanged."}
                  </p>
                </div>
              </Reveal>

              {/* Question count */}
              <Reveal delay={0.14}>
                <div className="mt-12">
                  <p className="text-overline text-muted-foreground">
                    How many questions?
                  </p>
                  <div
                    role="radiogroup"
                    aria-label="Number of questions"
                    className="mt-4 flex flex-wrap items-center gap-2"
                  >
                    {COUNT_OPTIONS.map((n) => {
                      const disabled = n > stats.total || selectedCount === 0;
                      const active = customCount.trim() === "" && count === n;
                      return (
                        <button
                          key={n}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          disabled={disabled}
                          onClick={() => {
                            setCount(n);
                            setCustomCount("");
                          }}
                          className={cn(
                            "rounded-lg border px-4 py-2 text-sm font-medium transition-colors kyp-focus-ring",
                            active
                              ? "border-brand bg-brand-soft/40 text-brand"
                              : disabled
                                ? "cursor-not-allowed border-border/50 text-muted-foreground/40"
                                : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                          )}
                        >
                          {n}
                        </button>
                      );
                    })}
                    <label className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm">
                      <span className="text-muted-foreground">Custom</span>
                      <input
                        type="number"
                        min={1}
                        max={stats.total || 1}
                        value={customCount}
                        onChange={(e) => setCustomCount(e.target.value)}
                        placeholder="—"
                        disabled={selectedCount === 0}
                        aria-label="Custom question count"
                        className="w-16 rounded-md border border-border bg-background px-2 py-1 text-sm tabular-nums text-foreground kyp-focus-ring disabled:opacity-40"
                      />
                    </label>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
                    {selectedCount === 0
                      ? "Select at least one medication to see availability."
                      : difficulty === "all"
                        ? `${stats.total} unique questions available for this selection.`
                        : `${stats.total} ${tierLabel(difficulty)}-level questions available for this selection.`}
                  </p>
                </div>
              </Reveal>

              {/* Exam mode (X6) — timed + mixed topics + fully deferred
                  feedback, a distinct composition of existing parts */}
              <Reveal delay={0.16}>
                <div className="mt-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/60 bg-card/50 px-4 py-4">
                    <div className="min-w-0">
                      <label
                        htmlFor="exam-toggle"
                        className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-foreground"
                      >
                        <input
                          id="exam-toggle"
                          type="checkbox"
                          checked={exam}
                          onChange={(e) => {
                            setExam(e.target.checked);
                            if (e.target.checked) setTimed(true);
                          }}
                          disabled={selectedCount === 0}
                          className="h-4 w-4 rounded border-border accent-[var(--brand)] disabled:opacity-40"
                        />
                        <ClipboardList className="h-4 w-4 text-muted-foreground" aria-hidden />
                        Exam — feedback after submission
                      </label>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        The countdown is on, answers move in one direction,
                        and no answer is revealed until you submit — then
                        a per-section breakdown explains the result. Off by
                        default.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Timed mode (N3) — opt-in, off by default; included in
                  exam mode (X6) */}
              <Reveal delay={0.17}>
                <div className="mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/60 bg-card/50 px-4 py-4">
                    <div className="min-w-0">
                      <label
                        htmlFor="timed-toggle"
                        className={cn(
                          "flex items-center gap-3 text-sm font-semibold text-foreground",
                          exam ? "cursor-default opacity-60" : "cursor-pointer"
                        )}
                      >
                        <input
                          id="timed-toggle"
                          type="checkbox"
                          checked={timed}
                          onChange={(e) => setTimed(e.target.checked)}
                          disabled={selectedCount === 0 || exam}
                          className="h-4 w-4 rounded border-border accent-[var(--brand)] disabled:opacity-40"
                        />
                        <Timer className="h-4 w-4 text-muted-foreground" aria-hidden />
                        Timed — exam pacing
                      </label>
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {exam
                          ? "Included in exam mode — the countdown stays on until you submit."
                          : "A countdown for the whole test, a pace indicator while you answer, and your time in the results. Off by default."}
                      </p>
                    </div>
                    {timed && !exam && (
                      <label className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm">
                        <span className="text-muted-foreground">Minutes</span>
                        <input
                          type="number"
                          min={1}
                          max={180}
                          value={timedMinutesInput}
                          onChange={(e) => setTimedMinutesInput(e.target.value)}
                          placeholder={String(effectiveTimedMinutes)}
                          aria-label="Allotted minutes for the timed test"
                          className="w-16 rounded-md border border-border bg-background px-2 py-1 text-sm tabular-nums text-foreground kyp-focus-ring"
                        />
                      </label>
                    )}
                  </div>
                  {timed && (
                    <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
                      {timedMinutesInput.trim() === ""
                        ? `Auto: ${effectiveTimedMinutes} min (1 minute per question) — type a number to change.`
                        : `Allotted: ${effectiveTimedMinutes} min for ${
                            Number.isFinite(requestedCount) ? requestedCount : 20
                          } questions.`}
                    </p>
                  )}
                </div>
              </Reveal>

              {/* Save as preset (N4) */}
              <Reveal delay={0.19}>
                <div className="mt-8">
                  {selectedCount > 0 ? (
                    <div className="flex flex-wrap items-center gap-2.5">
                      <label className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm">
                        <span className="text-muted-foreground">Preset name</span>
                        <input
                          type="text"
                          value={presetName}
                          onChange={(e) => setPresetName(e.target.value)}
                          placeholder="e.g. SSRI drill"
                          maxLength={40}
                          aria-label="Name for this saved test preset"
                          className="w-40 rounded-md border border-border bg-background px-2 py-1 text-sm text-foreground kyp-focus-ring"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={handleSavePreset}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand kyp-focus-ring"
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden />
                        Save this setup
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground/60">
                      Configure a selection to save it as a one-tap preset.
                    </p>
                  )}
                  {presets === null && presetNotice && (
                    <p className="mt-2 text-xs text-muted-foreground" role="status">
                      {presetNotice}
                    </p>
                  )}
                </div>
              </Reveal>

              {/* Start */}
              <Reveal delay={0.2}>
                <div className="mt-12">
                  <button
                    type="button"
                    onClick={() => {
                      setWeakReasons(null);
                      startTest();
                    }}
                    disabled={
                      selectedCount === 0 ||
                      stats.total === 0 ||
                      !(Number.isFinite(requestedCount) && requestedCount >= 1)
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-40 kyp-focus-ring"
                  >
                    <Zap className="h-5 w-5" />
                    Start Test
                    <span className="ml-2 text-sm font-normal opacity-80">
                      · {Math.min(
                        Number.isFinite(requestedCount) ? requestedCount : 20,
                        stats.total
                      )} questions{timed ? ` · ${effectiveTimedMinutes} min` : ""}
                    </span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <p className="mt-8 text-xs text-muted-foreground/60 max-w-md">
                  Questions are generated from KYP&apos;s reviewed medication
                  content and in-course quizzes — no AI-generated medical
                  facts. Scores stay on this device.
                </p>
              </Reveal>
            </Container>
          </Section>
      </>
    );
  }

  /* ============================================================
     TEST PHASE
     ============================================================ */
  if (phase === "test" && attempt) {
    const q = attempt.questions[attempt.index];
    const selectedAnswer = attempt.answers[attempt.index];
    const answered = selectedAnswer !== null;
    // Exam mode (X6): feedback is FULLY withheld until submission —
    // no correct/wrong styling, no explanation, nothing leaks.
    const withhold = attempt.exam;
    const isCorrect = answered && selectedAnswer === q.attemptCorrectIndex;
    const progressPct = Math.round(
      ((attempt.index + 1) / attempt.questions.length) * 100
    );

    return (
      <>
          <Section spacing="relaxed">
            <Container width="narrow">
              {cappedNotice && (
                <div
                  role="status"
                  className="mb-6 rounded-lg border border-warning/40 bg-warning-soft/30 p-3 text-xs text-foreground/80"
                >
                  {cappedNotice}
                </div>
              )}

              {attempt.retestOf && (
                <div
                  role="status"
                  className="mb-6 rounded-lg border border-brand/40 bg-brand-soft/20 p-3 text-xs text-foreground/80"
                >
                  Retest — {attempt.retestOf.label}. The same questions,
                  re-presented in a fresh order.
                </div>
              )}

              {/* Weak-Area selection (X2) — the plain-language reasons
                  that justified what this test drew from. */}
              {weakReasons && weakReasons.length > 0 && (
                <div
                  role="status"
                  className="mb-6 rounded-lg border border-brand/40 bg-brand-soft/20 p-3 text-xs text-foreground/80"
                >
                  Weak-Area Test — drawn from your practice history:
                  <ul className="mt-1 list-inside list-disc">
                    {weakReasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── THE progress row: label + bar + timer + Reset ── */}
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <p className="shrink-0 text-overline text-muted-foreground whitespace-nowrap">
                    Question {attempt.index + 1} / {attempt.questions.length}
                  </p>
                  <div
                    role="progressbar"
                    aria-label="Test progress"
                    aria-valuemin={0}
                    aria-valuemax={attempt.questions.length}
                    aria-valuenow={attempt.index + 1}
                    aria-valuetext={`Question ${attempt.index + 1} of ${attempt.questions.length}`}
                    className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted"
                  >
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  {attempt.allottedMs !== null && (
                    <span
                      role="timer"
                      aria-label={`Time remaining ${formatClock(remainingMs ?? attempt.allottedMs)}`}
                      className={cn(
                        "shrink-0 rounded-md border px-2 py-1 font-mono text-xs tabular-nums",
                        (remainingMs ?? 0) < 60_000
                          ? "border-emergency/50 bg-emergency-soft/30 text-emergency"
                          : "border-border bg-card text-foreground/80"
                      )}
                    >
                      {formatClock(remainingMs ?? attempt.allottedMs)}
                    </span>
                  )}
                  <button
                    ref={resetTriggerRef}
                    type="button"
                    onClick={() => setResetOpen(true)}
                    aria-haspopup="dialog"
                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-warning/50 hover:text-warning kyp-focus-ring"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                    Reset
                  </button>
                </div>

                {/* Pacing indicator (N3) — honest, never judgemental */}
                {attempt.allottedMs !== null && pace && (
                  <p
                    className={cn(
                      "mt-2 text-xs tabular-nums",
                      pace.urgent
                        ? "text-emergency"
                        : pace.onPace
                          ? "text-muted-foreground"
                          : "text-warning"
                    )}
                    aria-live="off"
                  >
                    {pace.onPace ? "On pace" : "Behind pace"} ·{" "}
                    {formatClock(remainingMs ?? 0)} left for{" "}
                    {attempt.questions.length - attempt.index - 1} more{" "}
                    {attempt.questions.length - attempt.index - 1 === 1
                      ? "question"
                      : "questions"}
                  </p>
                )}
              </div>

              {/* Question source attribution — deep-links to the exact
                  anchored section (N6) */}
              <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground/60">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                <span>From </span>
                <Link
                  href={verifyDrugHref(q.source.sectionHref)}
                  className="font-medium text-foreground hover:text-brand"
                >
                  {q.source.sourceName}
                </Link>
                <span>· {q.source.sectionLabel}</span>
              </div>

              {/* Question */}
              <h1
                className="font-serif font-semibold tracking-tight text-foreground leading-tight"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                {q.question}
              </h1>

              {/* Options — same interaction model as /quiz; in exam
                  mode (X6) only a neutral selected state is shown */}
              <div className="mt-10 space-y-3">
                {q.attemptOptions.map((option, idx) => {
                  const isThisSelected = selectedAnswer === idx;
                  const isThisCorrect = idx === q.attemptCorrectIndex;
                  const showCorrect = answered && isThisCorrect && !withhold;
                  const showWrong = answered && isThisSelected && !isThisCorrect && !withhold;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => answerCurrent(idx)}
                      disabled={answered}
                      className={cn(
                        "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all kyp-focus-ring",
                        !answered && "hover:border-brand/40 hover:bg-accent/30",
                        showCorrect && "border-success bg-success-soft/30",
                        showWrong && "border-emergency bg-emergency-soft/30",
                        answered && !showCorrect && !showWrong && withhold && isThisSelected && "border-brand bg-brand-soft/30",
                        answered && !showCorrect && !showWrong && !(withhold && isThisSelected) && "border-border opacity-50"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                          showCorrect && "border-success bg-success text-success-foreground",
                          showWrong && "border-emergency bg-emergency text-emergency-foreground",
                          answered && withhold && isThisSelected && "border-brand bg-brand text-primary-foreground",
                          !showCorrect && !showWrong && !(answered && withhold && isThisSelected) && "border-border text-muted-foreground"
                        )}
                      >
                        {showCorrect ? (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : showWrong ? (
                          <X className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : answered && withhold && isThisSelected ? (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : (
                          String.fromCharCode(65 + idx)
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-sm [overflow-wrap:anywhere]",
                          showCorrect || (answered && withhold && isThisSelected)
                            ? "font-semibold text-foreground"
                            : "text-foreground"
                        )}
                      >
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation + Next — withheld entirely in exam mode
                  (X6) until submission */}
              {answered && !withhold && (
                <Reveal>
                  <div className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-5">
                    <p className="text-overline text-muted-foreground mb-2">
                      {isCorrect ? "Correct" : "Not quite"}
                    </p>
                    <p className="text-body text-foreground leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <Link
                      href={verifyDrugHref(q.source.sectionHref)}
                      className="text-sm text-muted-foreground hover:text-brand transition-colors"
                    >
                      Review the {q.source.sourceName} section →
                    </Link>
                    <button
                      type="button"
                      onClick={nextQuestion}
                      className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 kyp-focus-ring"
                    >
                      {attempt.index + 1 >= attempt.questions.length
                        ? "See Results"
                        : "Next Question"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Reveal>
              )}

              {/* Exam mode (X6): the only post-answer UI — a neutral
                  acknowledgement and the way to the next question. */}
              {answered && withhold && (
                <div className="mt-8 flex items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground" aria-live="polite">
                    Answer recorded — feedback comes after you submit.
                  </p>
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 kyp-focus-ring"
                  >
                    {attempt.index + 1 >= attempt.questions.length
                      ? "Submit exam"
                      : "Next Question"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Exit */}
              <div className="mt-16 border-t border-border/30 pt-6">
                <Link
                  href="/quiz/custom"
                  className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setPhase("setup");
                    setAttempt(null);
                  }}
                >
                  ← Exit to setup
                </Link>
              </div>
            </Container>
          </Section>

        {/* ── Reset confirmation dialog ── */}
        {resetOpen && (
          <ResetDialog
            onCancel={() => setResetOpen(false)}
            onConfirm={resetTest}
            triggerRef={resetTriggerRef}
          />
        )}
      </>
    );
  }

  /* ============================================================
     RESULTS PHASE
     ============================================================ */
  if (phase === "results" && attempt && results) {
    const total = attempt.questions.length;
    const correctCount = results.correct.length;
    const percentage = Math.round((correctCount / total) * 100);
    const answeredCount = results.answered.filter((a) => a.selected !== null).length;
    const unanswered = total - answeredCount;

    /** N2 — before/after comparison against the original attempt. */
    const retestOf = attempt.retestOf;
    const previouslyChosenCount = retestOf
      ? attempt.questions.filter((q) => retestOf.previousChosen[q.identity] !== undefined).length
      : 0;

    /** Retest entry point — hand the exact incorrect identities back
     *  through the deterministic engine (N2). */
    const retestIncorrect = () => {
      const previousChosen: Record<string, string> = {};
      for (const { question: q, selected } of results.incorrect) {
        if (selected !== null) previousChosen[q.identity] = q.attemptOptions[selected];
      }
      startRetest(
        results.incorrect.map((a) => a.question.identity),
        "this test's incorrect answers",
        previousChosen
      );
    };

    return (
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <p className="text-overline text-brand mb-6">
                  {retestOf ? "Retest result" : "Your result"}
                </p>
                <h1
                  className="font-serif font-semibold tracking-[-0.03em] text-foreground"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  {correctCount} / {total}
                </h1>
                <p className="mt-4 text-body-lg text-muted-foreground">
                  {percentage}% correct · {answeredCount} questions completed
                  {unanswered > 0 ? ` · ${unanswered} unanswered` : ""}
                </p>
              </Reveal>

              {/* Before/after comparison (N2) */}
              {retestOf && (
                <Reveal delay={0.04}>
                  <div className="mt-8 rounded-xl border border-border/60 bg-card/50 p-5">
                    <p className="text-overline text-muted-foreground mb-3">
                      Compared with last time
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      These {total} questions were all incorrect in{" "}
                      {retestOf.label === "Questions to revisit"
                        ? "earlier attempts (your Mistake Book)"
                        : "the previous attempt"}
                      . This time you answered{" "}
                      <strong className="text-success">{correctCount} of {total}</strong>{" "}
                      correctly
                      {correctCount === total
                        ? " — every one of them."
                        : ` — ${total - correctCount} still to revisit.`}
                    </p>
                    {previouslyChosenCount > 0 && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Each question you answered correctly leaves your Mistake
                        Book automatically.
                      </p>
                    )}
                  </div>
                </Reveal>
              )}

              {/* Statistics grid */}
              <Reveal delay={0.08}>
                <div className="mt-10 grid grid-cols-2 gap-px border border-border/40 sm:grid-cols-4">
                  <div className="p-4">
                    <p className="font-serif text-2xl font-bold text-success tabular-nums">{correctCount}</p>
                    <p className="text-xs text-muted-foreground mt-1">Correct</p>
                  </div>
                  <div className="border-l border-border/40 p-4">
                    <p className="font-serif text-2xl font-bold text-emergency tabular-nums">{results.incorrect.length}</p>
                    <p className="text-xs text-muted-foreground mt-1">Incorrect</p>
                  </div>
                  <div className="border-l border-border/40 p-4">
                    <p className="font-serif text-2xl font-bold text-foreground tabular-nums">{results.topics.length}</p>
                    <p className="text-xs text-muted-foreground mt-1">Topics tested</p>
                  </div>
                  <div className="border-l border-border/40 p-4">
                    <p className="font-serif text-2xl font-bold text-foreground tabular-nums">{elapsedLabel}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {attempt.allottedMs !== null
                        ? `of ${formatClock(attempt.allottedMs)} allotted`
                        : "Time taken"}
                    </p>
                  </div>
                </div>
                {attempt.allottedMs !== null && (
                  <p className="mt-2 text-xs text-muted-foreground tabular-nums">
                    {(attempt.finishedAt ?? Date.now()) - attempt.startedAt <= attempt.allottedMs
                      ? `Finished with ${formatClock(
                          attempt.allottedMs - ((attempt.finishedAt ?? Date.now()) - attempt.startedAt)
                        )} remaining.`
                      : `Ran over the allotted time by ${formatClock(
                          ((attempt.finishedAt ?? Date.now()) - attempt.startedAt) - attempt.allottedMs
                        )}.`}
                  </p>
                )}
              </Reveal>

              {/* Per-section breakdown (X6) — the exam result is never
                  just a raw score; every section explains itself. */}
              {attempt.exam && (
                <Reveal delay={0.1}>
                  <div className="mt-10">
                    <p className="text-overline text-muted-foreground mb-4">
                      Per-section breakdown
                    </p>
                    <div className="overflow-hidden rounded-xl border border-border/60">
                      <table className="w-full border-collapse text-sm">
                        <caption className="sr-only">
                          Exam result broken down by medication class section.
                        </caption>
                        <thead>
                          <tr className="border-b border-border/60 bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                            <th scope="col" className="px-4 py-2.5 font-semibold">Section</th>
                            <th scope="col" className="px-4 py-2.5 font-semibold">Correct</th>
                            <th scope="col" className="px-4 py-2.5 font-semibold">Unanswered</th>
                            <th scope="col" className="px-4 py-2.5 font-semibold">Section score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {breakDownBySection(attempt.questions, attempt.answers).map((section) => {
                            const pct = section.total > 0
                              ? Math.round((section.correct / section.total) * 100)
                              : 0;
                            return (
                              <tr key={section.label} className="border-b border-border/30 last:border-0">
                                <th scope="row" className="px-4 py-2.5 text-left font-medium text-foreground">
                                  {section.label}
                                </th>
                                <td className="px-4 py-2.5 tabular-nums text-foreground/80">
                                  {section.correct} / {section.total}
                                </td>
                                <td className="px-4 py-2.5 tabular-nums text-muted-foreground">
                                  {section.unanswered > 0 ? section.unanswered : "—"}
                                </td>
                                <td className="px-4 py-2.5 tabular-nums text-foreground/80">
                                  {pct}%
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      Sections are the medication classes your selection drew
                      from. Review Incorrect below walks through every question
                      with its explanation.
                    </p>
                  </div>
                </Reveal>
              )}

              {/* Topics covered */}
              <Reveal delay={0.12}>
                <div className="mt-12">
                  <p className="text-overline text-muted-foreground mb-4">Topics covered</p>
                  <div className="flex flex-wrap gap-2">
                    {results.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Actions */}
              <Reveal delay={0.16}>
                <div className="mt-12 flex flex-wrap gap-3">
                  {results.incorrect.length > 0 && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setReviewAll(false);
                          setPhase("review");
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 kyp-focus-ring"
                      >
                        <Eye className="h-4 w-4" />
                        Review Incorrect · {results.incorrect.length}
                      </button>
                      <button
                        type="button"
                        onClick={retestIncorrect}
                        className="inline-flex items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand/60 kyp-focus-ring"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Retest these · {results.incorrect.length}
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setReviewAll(true);
                      setPhase("review");
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand kyp-focus-ring"
                  >
                    <ClipboardList className="h-4 w-4" />
                    Review all questions
                  </button>
                  <Link
                    href="/quiz/custom"
                    onClick={(e) => {
                      e.preventDefault();
                      setPhase("setup");
                      setAttempt(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand kyp-focus-ring"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Build another test
                  </Link>
                </div>
              </Reveal>
            </Container>
          </Section>
    );
  }

  /* ============================================================
     REVIEW PHASE
     ============================================================ */
  if (phase === "review" && attempt && results) {
    const shown = reviewAll ? results.answered : results.incorrect;
    const filterLabel = reviewAll
      ? `Show incorrect only · ${results.incorrect.length}`
      : `Show all ${results.answered.length}`;
    const retestOf = attempt.retestOf;

    return (
          <Section spacing="relaxed">
            <Container width="narrow">
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="text-overline text-brand mb-2">Review</p>
                    <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {reviewAll
                        ? `All questions · ${results.answered.length}`
                        : `Incorrect answers · ${results.incorrect.length}`}
                    </h1>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setReviewAll((v) => !v)}
                      className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline kyp-focus-ring"
                    >
                      {filterLabel}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPhase("results")}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-brand kyp-focus-ring"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                      Back to results
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* Question cards — the EXACT completed questions, never regenerated */}
              <div className="mt-10 space-y-8">
                {shown.map(({ question: rq, selected: rs, correct: rc }, i) => {
                  const selectedText = rs !== null ? rq.attemptOptions[rs] : null;
                  const correctText = rq.attemptOptions[rq.attemptCorrectIndex];
                  const previouslyChose = retestOf?.previousChosen[rq.identity];
                  return (
                    <Reveal key={rq.identity} delay={Math.min(i * 0.03, 0.2)}>
                      <article className="rounded-xl border border-border/60 bg-card/50 p-5 sm:p-6">
                        {/* Attribution — deep-links to the exact anchored
                            teaching section (N6) */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/70">
                          <span>From </span>
                          <Link
                            href={verifyDrugHref(rq.source.sectionHref)}
                            className="font-medium text-foreground hover:text-brand"
                          >
                            {rq.source.sourceName}
                          </Link>
                          <span>· {rq.source.sectionLabel}</span>
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                              rc
                                ? "border-success/40 bg-success-soft/40 text-success"
                                : "border-emergency/40 bg-emergency-soft/40 text-emergency"
                            )}
                          >
                            {rc ? "Correct" : "Incorrect"}
                          </span>
                        </div>

                        {/* Question */}
                        <h2 className="mt-4 font-serif text-lg font-semibold leading-snug text-foreground">
                          {rq.question}
                        </h2>

                        {/* Answers */}
                        <div className="mt-5 space-y-3">
                          <div
                            className={cn(
                              "rounded-lg border p-3.5 text-sm",
                              rc
                                ? "border-success/40 bg-success-soft/20"
                                : "border-emergency/40 bg-emergency-soft/20"
                            )}
                          >
                            <p className="text-overline text-muted-foreground mb-1">
                              Your answer:
                            </p>
                            <p className="text-foreground [overflow-wrap:anywhere]">
                              {selectedText ?? "Not answered"}
                            </p>
                            {!rc && previouslyChose !== undefined && (
                              <p className="mt-1.5 text-xs text-muted-foreground/70 [overflow-wrap:anywhere]">
                                Previously chose: {previouslyChose}
                              </p>
                            )}
                          </div>
                          {!rc && (
                            <div className="rounded-lg border border-success/40 bg-success-soft/20 p-3.5 text-sm">
                              <p className="text-overline text-muted-foreground mb-1">
                                Correct answer:
                              </p>
                              <p className="font-medium text-foreground [overflow-wrap:anywhere]">
                                {correctText}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Explanation */}
                        <div className="mt-4 rounded-lg border border-border/60 bg-muted/30 p-4">
                          <p className="text-overline text-muted-foreground mb-2">
                            Explanation
                          </p>
                          <p className="text-sm leading-relaxed text-foreground/90">
                            {rq.explanation}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              {/* Retest entry from the review screen (N2) */}
              {results.incorrect.length > 0 && (
                <Reveal delay={0.08}>
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/30 pt-6">
                    <p className="text-xs text-muted-foreground">
                      The same questions, re-presented in a fresh order.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        const previousChosen: Record<string, string> = {};
                        for (const { question: q, selected } of results.incorrect) {
                          if (selected !== null) previousChosen[q.identity] = q.attemptOptions[selected];
                        }
                        startRetest(
                          results.incorrect.map((a) => a.question.identity),
                          retestOf ? retestOf.label : "this test's incorrect answers",
                          previousChosen
                        );
                      }}
                      className="inline-flex items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:border-brand/60 kyp-focus-ring"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Retest me on these · {results.incorrect.length}
                    </button>
                  </div>
                </Reveal>
              )}

              <div className="mt-12">
                <button
                  type="button"
                  onClick={() => setPhase("results")}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand kyp-focus-ring"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to results
                </button>
              </div>
            </Container>
          </Section>
    );
  }

  return null;
}

/* ============================================================
   Reset confirmation dialog
   ============================================================ */

function ResetDialog({
  onCancel,
  onConfirm,
  triggerRef,
}: {
  onCancel: () => void;
  onConfirm: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    cancelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
        return;
      }
      // Keep keyboard focus inside the modal dialog (aria-modal="true").
      if (e.key === "Tab") {
        const focusable =
          dialogRef.current?.querySelectorAll<HTMLElement>("button") ?? [];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      // Return focus to the Reset trigger when the dialog closes.
      triggerRef.current?.focus();
    };
  }, [onCancel, triggerRef]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-dialog-title"
        aria-describedby="reset-dialog-desc"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-lg"
      >
        <h2
          id="reset-dialog-title"
          className="font-serif text-lg font-semibold text-foreground"
        >
          Reset this test?
        </h2>
        <p id="reset-dialog-desc" className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Your current answers and progress will be lost.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            ref={cancelRef}
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand/40 kyp-focus-ring"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-emergency px-4 py-2 text-sm font-semibold text-emergency-foreground transition-colors hover:bg-emergency/90 kyp-focus-ring"
          >
            Reset Test
          </button>
        </div>
      </div>
    </div>
  );
}
