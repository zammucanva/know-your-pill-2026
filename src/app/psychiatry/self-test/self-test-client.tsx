"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Brain, RotateCcw, Shuffle, Target } from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { cn } from "@/lib/utils";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import { recordPracticeAttempt } from "@/lib/kyp/progress/progress-store";

/**
 * /psychiatry/self-test — KYP Psychiatry Self-Test.
 *
 * Mixed MCQ practice across the psychiatry corpus, built on the
 * existing MicroQuiz presentation (same engine, onAnswered callback)
 * and the existing local progress store. No second MCQ engine:
 * questions come straight from the canonical notes, which remain the
 * single authority for their content.
 */

export interface SelfTestQuestion {
  id: string;
  noteSlug: string;
  noteTitle: string;
  groupLetter: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SelfTestGroup {
  letter: string;
  name: string;
  count: number;
}

export function SelfTestClient({
  questions,
  groups,
  noteCount,
}: {
  questions: SelfTestQuestion[];
  groups: SelfTestGroup[];
  noteCount: number;
}) {
  const [selectedGroup, setSelectedGroup] = React.useState<string>("all");
  const [runSize, setRunSize] = React.useState<number>(10);
  const [seed, setSeed] = React.useState<number>(1);
  const [run, setRun] = React.useState<SelfTestQuestion[] | null>(null);
  const [answers, setAnswers] = React.useState<Record<string, boolean>>({});

  const pool = React.useMemo(
    () =>
      selectedGroup === "all"
        ? questions
        : questions.filter((q) => q.groupLetter === selectedGroup),
    [questions, selectedGroup]
  );
  const available = pool.length;

  const start = React.useCallback(() => {
    const arr = [...pool];
    // Deterministic xorshift shuffle — stable within a seed, no Math.random
    // (identical SSR/CSR behaviour, reproducible runs).
    let s = (seed * 2654435761) >>> 0 || 1;
    const rand = () => {
      s ^= s << 13; s >>>= 0;
      s ^= s >>> 17; s >>>= 0;
      s ^= s << 5; s >>>= 0;
      return s / 0xffffffff;
    };
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setRun(arr.slice(0, Math.min(runSize, arr.length)));
    setAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pool, runSize, seed]);

  const onAnswer = React.useCallback(
    (id: string, correct: boolean) => {
      setAnswers((prev) => {
        if (id in prev) return prev;
        return { ...prev, [id]: correct };
      });
    },
    []
  );

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(Boolean).length;
  const finished = run !== null && run.length > 0 && answeredCount === run.length;

  // Record the aggregate attempt once per finished run (existing store).
  const recordedRun = React.useRef<string | null>(null);
  React.useEffect(() => {
    if (!finished || !run) return;
    const key = `${seed}:${run.map((q) => q.id).join(",")}`;
    if (recordedRun.current === key) return;
    recordedRun.current = key;
    recordPracticeAttempt(correctCount, run.length);
  }, [finished, run, seed, correctCount]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
      <section className="border-b border-border bg-gradient-to-b from-neural/[0.07] to-transparent">
        <Container>
          <div className="py-10 sm:py-14">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/psychiatry" className="inline-flex items-center gap-1.5 font-semibold text-neural hover:underline">
                <Brain className="h-3.5 w-3.5" aria-hidden /> KYP Psychiatry
              </Link>
              <span aria-hidden>/</span>
              <span aria-current="page">Self-Test</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Psychiatry Self-Test
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Mixed practice from all {noteCount} lessons — every question authored for its
              topic, with explanations. Finished runs feed your practice stats.
            </p>
          </div>
        </Container>
      </section>

      <Section spacing="tight">
        <Container>
          {!run ? (
            <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neural">
                <Target className="h-4 w-4" aria-hidden /> Set up your run
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <label htmlFor="domain-select" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Domain
                  </label>
                  <select
                    id="domain-select"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="all">All domains ({questions.length} questions)</option>
                    {groups.map((g) => (
                      <option key={g.letter} value={g.letter}>
                        {g.letter} — {g.name} ({g.count})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Questions</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {[5, 10, 20, 30].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRunSize(n)}
                        aria-pressed={runSize === n}
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                          runSize === n ? "bg-brand text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground" role="status">
                  {available} question{available === 1 ? "" : "s"} available in this selection.
                </p>
                <button
                  type="button"
                  onClick={start}
                  disabled={available === 0}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90 disabled:opacity-50"
                >
                  <Shuffle className="h-4 w-4" aria-hidden /> Start self-test
                </button>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-sm font-medium text-foreground">
                  {answeredCount}/{run.length} answered
                  {answeredCount > 0 && (
                    <span className="ml-2 text-xs text-muted-foreground">{correctCount} correct</span>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSeed((s) => s + 1);
                    setRun(null);
                    setAnswers({});
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden /> New run
                </button>
              </div>
              <div
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={answeredCount}
                aria-valuemin={0}
                aria-valuemax={run.length}
                aria-label="Run progress"
              >
                <div
                  className="h-full rounded-full bg-brand transition-all"
                  style={{ width: `${Math.round((answeredCount / Math.max(1, run.length)) * 100)}%` }}
                />
              </div>

              <div className="mt-6 space-y-6">
                {run.map((q, i) => (
                  <div key={q.id}>
                    <p className="mb-1.5 text-[11px] uppercase tracking-wide text-muted-foreground/70">
                      Question {i + 1} ·{" "}
                      <Link href={`/psychiatry/${q.noteSlug}`} className="font-medium text-neural hover:underline">
                        {q.noteTitle}
                      </Link>
                    </p>
                    <MicroQuiz
                      quiz={{
                        id: q.id,
                        question: q.question,
                        options: q.options,
                        correctIndex: q.correctIndex,
                        explanation: q.explanation,
                        afterSectionId: `selftest-${q.id}`,
                      }}
                      onAnswered={(correct) => onAnswer(q.id, correct)}
                    />
                  </div>
                ))}
              </div>

              {finished && (
                <div role="status" className="mt-8 rounded-xl border border-brand/30 bg-brand/[0.05] p-6 text-center">
                  <p className="text-3xl font-bold text-foreground">
                    {correctCount}/{run.length}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {correctCount === run.length
                      ? "Perfect run — exam-ready."
                      : correctCount / run.length >= 0.6
                        ? "Solid — revisit the misses and run again."
                        : "Early days — read the explanations, then retry."}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSeed((s) => s + 1);
                        start();
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden /> Run again
                    </button>
                    <Link
                      href="/psychiatry/library"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
                    >
                      Back to the Library <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>
      </main>

      <Footer />
    </div>
  );
}
