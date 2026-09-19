"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarClock,
  Check,
  Download,
  RotateCcw,
  X,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { buildRetest } from "@/lib/kyp/custom-test/engine";
import { verifyDrugHref } from "@/lib/kyp/drug-course-sections";
import {
  getRetentionDueQueue,
  getRetentionExport,
  recordAnswerEvents,
  recordRunSummary,
  recordMistakes,
  resolveMistakes,
  type AnswerEventInput,
  type MistakeRecordInput,
} from "@/lib/kyp/progress/progress-store";
import type { TestQuestion } from "@/lib/kyp/custom-test/types";
import { drugs, diseases } from "@/lib/kyp/data";

/**
 * /study/review — the Retention Engine's review session (NEXT-X1).
 *
 * The queue: every question the learner has previously missed comes
 * back on a fixed, explainable interval ladder (1 → 2 → 4 → 7 → 14 →
 * 30 days). Answer it correctly and the interval advances; miss it and
 * it resets to tomorrow. This page walks through what is due RIGHT NOW:
 *
 *   queue → session (one question at a time, immediate feedback,
 *           the teaching section deep-linked) → summary
 *
 * Reuse, not duplication: the questions themselves are regenerated
 * deterministically by the existing engine (buildRetest) from the
 * exact due identities — no new engine, no copied question data.
 * Reviews record into the same namespaces as other practice: answer
 * log (topic accuracy) + retention updates + the Mistake Book loop.
 *
 * Interval scheduling only, per the commissioning spec — no decay
 * modelling, no streaks UI, no notifications.
 */

type Phase = "queue" | "session" | "done";

export default function ReviewPage() {
  const [phase, setPhase] = React.useState<Phase>("queue");
  /** The regenerated questions for this session. */
  const [questions, setQuestions] = React.useState<TestQuestion[] | null>(null);
  const [dropped, setDropped] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  /** Per-question results, in ask order. */
  const [results, setResults] = React.useState<Array<{ correct: boolean; identity: string }>>([]);

  /* ── The live due count for the queue screen (computed after
        hydration — pre-hydration the page renders its shell only). ── */
  const [dueCount, setDueCount] = React.useState<number | null>(null);
  React.useEffect(() => {
    setDueCount(getRetentionDueQueue().length);
  }, []);

  const startSession = () => {
    const due = getRetentionDueQueue(Date.now(), 20);
    if (due.length === 0) return;
    const built = buildRetest(
      due.map((d) => d.identity),
      Date.now() % 2147483647
    );
    setQuestions(built.questions);
    setDropped(due.length - built.questions.length);
    setIndex(0);
    setSelected(null);
    setResults([]);
    setPhase("session");
  };

  const q = questions?.[index] ?? null;
  const answered = selected !== null;
  const isCorrect = q !== null && selected === q.attemptCorrectIndex;

  const select = (idx: number) => {
    if (answered || !q) return;
    setSelected(idx);
    setResults((prev) => [
      ...prev,
      { correct: idx === q.attemptCorrectIndex, identity: q.identity },
    ]);
  };

  const next = () => {
    if (!questions) return;
    if (index + 1 >= questions.length) {
      finishSession();
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  /** Record the completed session exactly once, then show the summary. */
  const recordedRef = React.useRef(false);
  const finishSession = () => {
    setPhase("done");
    if (recordedRef.current || !questions) return;
    recordedRef.current = true;

    const byIdentity = new Map(results.map((r) => [r.identity, r.correct]));
    const correctCount = results.filter((r) => r.correct).length;

    // Answer log + retention updates + run summary — the same
    // namespaces every other practice surface writes to.
    const events: AnswerEventInput[] = questions.map((question) => ({
      identity: question.identity,
      topicSlug: question.source.sourceSlug,
      topicName: question.source.sourceName,
      topicClass: question.source.sourceClass,
      correct: byIdentity.get(question.identity) ?? false,
    }));
    recordAnswerEvents(events);
    recordRunSummary({
      surface: "review",
      mode: "review",
      correct: correctCount,
      total: questions.length,
      durationMs: null,
    });

    // The Mistake Book loop (N1): still-wrong questions stay to
    // revisit; correct answers resolve their entries.
    const misses: MistakeRecordInput[] = questions
      .filter((question) => (byIdentity.get(question.identity) ?? false) === false)
      .map((question) => ({
        identity: question.identity,
        question: question.question,
        options: question.options,
        correctIndex: question.correctIndex,
        explanation: question.explanation,
        source: {
          sourceName: question.source.sourceName,
          sourceSlug: question.source.sourceSlug,
          sourceType: question.source.sectionHref.startsWith("/diseases/")
            ? ("disease" as const)
            : ("drug" as const),
          sourceClass: question.source.sourceClass,
          sectionLabel: question.source.sectionLabel,
          sectionHref: verifyDrugHref(question.source.sectionHref),
        },
        templateId: question.templateId,
        chosenOption: "—",
      }));
    recordMistakes(misses);
    resolveMistakes(
      questions
        .filter((question) => byIdentity.get(question.identity) === true)
        .map((question) => question.identity)
    );
  };

  /** Export the retention schedule as JSON (local-first, no backend). */
  const exportSchedule = () => {
    try {
      const blob = new Blob([JSON.stringify(getRetentionExport(), null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "kyp-retention-export.json";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      // Export is best-effort — the schedule itself is untouched.
    }
  };

  /* ============================================================
     QUEUE PHASE
     ============================================================ */
  if (phase === "queue") {
    const due = dueCount ?? 0;
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <FloatingSearch variant="floating" />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Link href="/study" className="hover:text-brand">Study Mode</Link>
                  <span aria-hidden>›</span>
                  <span className="font-medium text-foreground">Reviews</span>
                </nav>
                <h1
                  className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  Spaced review
                </h1>
                <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                  Questions you&apos;ve missed before come back at growing
                  intervals — 1, 2, 4, 7, 14, then 30 days. Get one right and
                  its next appearance moves further out; miss it and it
                  returns tomorrow. Everything stays on this device.
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                {dueCount === null ? (
                  <div className="mt-10 h-24 rounded-xl border border-border/40" aria-hidden />
                ) : due === 0 ? (
                  <div className="mt-10 max-w-xl rounded-xl border border-border/60 bg-card/50 p-5">
                    <p className="text-overline text-muted-foreground mb-2">
                      Nothing due right now
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      You&apos;re all caught up. Miss a question in practice and
                      it will be scheduled here automatically — or revisit
                      your Mistake Book to retest anything sooner.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href="/study/mistakes"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        Mistake Book
                      </Link>
                      <Link
                        href="/quiz"
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                      >
                        Keep practicing
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="mt-10 max-w-xl rounded-xl border border-brand/40 bg-brand-soft/20 p-5">
                    <p className="flex items-center gap-2 text-overline text-brand mb-2">
                      <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                      Due now
                    </p>
                    <p className="font-serif text-3xl font-semibold text-foreground tabular-nums">
                      {due} {due === 1 ? "question" : "questions"}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      A short session — answered with feedback, straight from
                      the questions you missed before.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={startSession}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 kyp-focus-ring"
                      >
                        Start reviewing
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={exportSchedule}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand kyp-focus-ring"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden />
                        Export review data
                      </button>
                    </div>
                  </div>
                )}
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-8 max-w-2xl text-xs text-muted-foreground/60 leading-relaxed">
                  The review schedule is a plain local record — question
                  identity, current interval, next due date — with a clean
                  export shape (kyp:retention:v1) for a future sync. No
                  account, no tracking, no notifications.
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
     SESSION PHASE
     ============================================================ */
  if (phase === "session" && q) {
    const progressPct = Math.round(((index + 1) / questions!.length) * 100);
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container width="narrow">
              {dropped > 0 && (
                <div role="status" className="mb-6 rounded-lg border border-warning/40 bg-warning-soft/30 p-3 text-xs text-foreground/80">
                  {dropped} scheduled {dropped === 1 ? "question was" : "questions were"} no longer
                  available (content changed) and {dropped === 1 ? "was" : "were"} skipped.
                </div>
              )}

              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <p className="shrink-0 text-overline text-muted-foreground whitespace-nowrap">
                    Review {index + 1} / {questions!.length}
                  </p>
                  <div
                    role="progressbar"
                    aria-label="Review progress"
                    aria-valuemin={0}
                    aria-valuemax={questions!.length}
                    aria-valuenow={index + 1}
                    className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted"
                  >
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              </div>

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

              <h1
                className="font-serif font-semibold tracking-tight text-foreground leading-tight"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                {q.question}
              </h1>

              <div className="mt-10 space-y-3">
                {q.attemptOptions.map((option, idx) => {
                  const isThisSelected = selected === idx;
                  const isThisCorrect = idx === q.attemptCorrectIndex;
                  const showCorrect = answered && isThisCorrect;
                  const showWrong = answered && isThisSelected && !isThisCorrect;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => select(idx)}
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

              {answered && (
                <Reveal>
                  <div className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-5">
                    <p className="text-overline text-muted-foreground mb-2">
                      {isCorrect ? "Correct — interval extended" : "Not quite — back tomorrow"}
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
                      onClick={next}
                      className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90 kyp-focus-ring"
                    >
                      {index + 1 >= questions!.length ? "Finish review" : "Next"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </Reveal>
              )}

              <div className="mt-16 border-t border-border/30 pt-6">
                <Link
                  href="/study/review"
                  className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setPhase("queue");
                    setQuestions(null);
                  }}
                >
                  ← Exit to the queue
                </Link>
              </div>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  /* ============================================================
     DONE PHASE
     ============================================================ */
  if (phase === "done" && questions) {
    const correct = results.filter((r) => r.correct).length;
    const toSeeAgain = questions.length - correct;
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <p className="text-overline text-brand mb-6">Review complete</p>
                <h1
                  className="font-serif font-semibold tracking-[-0.03em] text-foreground"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  {correct} of {questions.length} kept
                </h1>
                <p className="mt-4 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                  {correct === questions.length
                    ? "Every reviewed question moves further out on its interval — well retained."
                    : `${correct} ${correct === 1 ? "question" : "questions"} now on longer intervals. ${toSeeAgain} ${toSeeAgain === 1 ? "comes" : "come"} back tomorrow.`}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/study"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Study Mode
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      recordedRef.current = false;
                      setPhase("queue");
                      setQuestions(null);
                      setDueCount(getRetentionDueQueue().length);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Back to the queue
                  </button>
                </div>
              </Reveal>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  return null;
}
