"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardList,
  Eye,
  RotateCcw,
  X,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { drugTaxonomyClasses } from "@/lib/kyp/data/drug-taxonomy";
import { buildTest, getPoolStats, isShuffleSafe } from "@/lib/kyp/custom-test/engine";
import { deriveRequestedCount } from "@/lib/kyp/custom-test/count";
import type { TestQuestion } from "@/lib/kyp/custom-test/types";
import { recordCustomTestAttempt } from "@/lib/kyp/progress/progress-store";

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
 */

type Phase = "setup" | "test" | "results" | "review";

const COUNT_OPTIONS = [10, 20, 30, 50, 100];

interface AttemptState {
  questions: TestQuestion[];
  answers: (number | null)[];
  index: number;
  startedAt: number;
  capped: boolean;
  available: number;
}

export default function CustomTestPage() {
  /* ── Setup state ── */
  const [selected, setSelected] = React.useState<Set<string>>(new Set());
  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(drugTaxonomyClasses.map((c) => c.id).slice(0, 1))
  );
  const [count, setCount] = React.useState<number>(20);
  const [customCount, setCustomCount] = React.useState<string>("");
  const [cappedNotice, setCappedNotice] = React.useState<string | null>(null);

  /* ── Attempt state (React state ONLY — Reset clears exactly this) ── */
  const [phase, setPhase] = React.useState<Phase>("setup");
  const [attempt, setAttempt] = React.useState<AttemptState | null>(null);
  const [resetOpen, setResetOpen] = React.useState(false);
  const [reviewAll, setReviewAll] = React.useState(false);
  /** The Reset trigger — focus returns here when the dialog closes. */
  const resetTriggerRef = React.useRef<HTMLButtonElement>(null);

  const stats = React.useMemo(
    () => getPoolStats([...selected]),
    [selected]
  );

  const selectedCount = selected.size;
  // Clamped, crash-safe derivation — "0"/negative/unparseable input can
  // never reach buildTest (see lib/kyp/custom-test/count.ts).
  const requestedCount = deriveRequestedCount(customCount, count);

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

  /* ── Attempt lifecycle ── */
  const startTest = () => {
    if (selectedCount === 0) return;
    const wanted = Number.isFinite(requestedCount) ? requestedCount : 20;
    const built = buildTest([...selected], wanted, Date.now() % 2147483647);
    setAttempt({
      questions: built.questions,
      answers: built.questions.map(() => null),
      index: 0,
      startedAt: Date.now(),
      capped: built.capped,
      available: built.available,
    });
    setCappedNotice(
      built.capped
        ? `Only ${built.available} unique questions are available for this selection — the test was set to ${built.deliveredCount}.`
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

  const nextQuestion = () => {
    if (!attempt) return;
    if (attempt.index + 1 >= attempt.questions.length) {
      setPhase("results");
    } else {
      setAttempt({ ...attempt, index: attempt.index + 1 });
    }
  };

  const resetTest = () => {
    // Reset affects ONLY the current attempt: answers, position and score
    // are discarded. Course progress, Study Mode progress, practice-hub
    // history and even the Custom Test run history are never touched.
    setAttempt((prev) =>
      prev
        ? {
            ...prev,
            answers: prev.questions.map(() => null),
            index: 0,
            startedAt: Date.now(),
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

  // Record the completed run exactly once when entering the results phase.
  const recordedRef = React.useRef<string | null>(null);
  React.useEffect(() => {
    if (phase !== "results" || !results || !attempt) return;
    const key = `${attempt.startedAt}:${attempt.questions.length}`;
    if (recordedRef.current === key) return;
    recordedRef.current = key;
    recordCustomTestAttempt(results.correct.length, attempt.questions.length);
  }, [phase, results, attempt]);

  const elapsedLabel = React.useMemo(() => {
    if (!attempt) return "";
    const seconds = Math.max(
      0,
      Math.round((Date.now() - attempt.startedAt) / 1000)
    );
    if (seconds < 60) return `${seconds}s`;
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }, [attempt, phase]);

  /* ============================================================
     SETUP PHASE
     ============================================================ */
  if (phase === "setup") {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <FloatingSearch variant="floating" />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
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

              {/* Medication groups */}
              <Reveal delay={0.08}>
                <div className="mt-12">
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
                      : `${stats.total} unique questions available for this selection.`}
                  </p>
                </div>
              </Reveal>

              {/* Start */}
              <Reveal delay={0.2}>
                <div className="mt-12">
                  <button
                    type="button"
                    onClick={startTest}
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
                      )} questions
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
        </main>
        <Footer />
      </div>
    );
  }

  /* ============================================================
     TEST PHASE
     ============================================================ */
  if (phase === "test" && attempt) {
    const q = attempt.questions[attempt.index];
    const selectedAnswer = attempt.answers[attempt.index];
    const answered = selectedAnswer !== null;
    const isCorrect = answered && selectedAnswer === q.attemptCorrectIndex;
    const progressPct = Math.round(
      ((attempt.index + 1) / attempt.questions.length) * 100
    );

    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
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

              {/* ── THE progress row: label + bar + Reset on the RIGHT ── */}
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
              </div>

              {/* Question source attribution */}
              <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground/60">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                <span>From </span>
                <Link
                  href={q.source.sectionHref}
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

              {/* Options — same interaction model as /quiz */}
              <div className="mt-10 space-y-3">
                {q.attemptOptions.map((option, idx) => {
                  const isThisSelected = selectedAnswer === idx;
                  const isThisCorrect = idx === q.attemptCorrectIndex;
                  const showCorrect = answered && isThisCorrect;
                  const showWrong = answered && isThisSelected && !isThisCorrect;
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
                        answered && !showCorrect && !showWrong && "border-border opacity-50"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                          showCorrect && "border-success bg-success text-success-foreground",
                          showWrong && "border-emergency bg-emergency text-emergency-foreground",
                          !showCorrect && !showWrong && "border-border text-muted-foreground"
                        )}
                      >
                        {showCorrect ? (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : showWrong ? (
                          <X className="h-3.5 w-3.5" strokeWidth={3} />
                        ) : (
                          String.fromCharCode(65 + idx)
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-sm [overflow-wrap:anywhere]",
                          showCorrect ? "font-semibold text-foreground" : "text-foreground"
                        )}
                      >
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation + Next */}
              {answered && (
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
                      href={q.source.sectionHref}
                      className="text-sm text-muted-foreground hover:text-brand transition-colors"
                    >
                      Review the {q.source.sourceName} page →
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
        </main>
        <Footer />

        {/* ── Reset confirmation dialog ── */}
        {resetOpen && (
          <ResetDialog
            onCancel={() => setResetOpen(false)}
            onConfirm={resetTest}
            triggerRef={resetTriggerRef}
          />
        )}
      </div>
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

    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <p className="text-overline text-brand mb-6">Your result</p>
                <h1
                  className="font-serif font-semibold tracking-[-0.03em] text-foreground"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  {correctCount} / {total}
                </h1>
                <p className="mt-4 text-body-lg text-muted-foreground">
                  {percentage}% correct · {answeredCount} questions completed
                </p>
              </Reveal>

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
                    <p className="text-xs text-muted-foreground mt-1">Time taken</p>
                  </div>
                </div>
              </Reveal>

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
        </main>
        <Footer />
      </div>
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

    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
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
                  return (
                    <Reveal key={rq.identity} delay={Math.min(i * 0.03, 0.2)}>
                      <article className="rounded-xl border border-border/60 bg-card/50 p-5 sm:p-6">
                        {/* Attribution */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/70">
                          <span>From </span>
                          <Link
                            href={rq.source.sectionHref}
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
        </main>
        <Footer />
      </div>
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
