"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Check, X, RotateCcw, Zap, BookOpen, HeartPulse,
} from "lucide-react";
import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { cn } from "@/lib/utils";
import { drugs, diseases } from "@/lib/kyp/data";
import type { MicroQuiz } from "@/lib/kyp/data";

/**
 * /quiz — aggregate MCQ practice page.
 *
 * Pulls every MicroQuiz from the drug + disease data (78 total) and
 * presents them in a clean practice interface. No invented questions —
 * every question here exists in the real data layer.
 *
 * Flow:
 *   1. User sees topic filter + "Start" CTA
 *   2. Questions are presented one at a time
 *   3. User selects an answer → immediate feedback + explanation
 *   4. At the end: score + "Topics to revisit" list
 *
 * Visual language: restrained, educational, no gamification.
 */

interface QuizQuestion extends MicroQuiz {
  sourceName: string;
  sourceType: "drug" | "disease";
  sourceSlug: string;
  sourceHref: string;
}

// Aggregate all MCQs from drugs + diseases
function buildAllQuestions(): QuizQuestion[] {
  const qs: QuizQuestion[] = [];
  for (const drug of drugs) {
    if (drug.microQuizzes) {
      for (const q of drug.microQuizzes) {
        qs.push({
          ...q,
          sourceName: drug.genericName,
          sourceType: "drug",
          sourceSlug: drug.slug,
          sourceHref: `/drugs/${drug.slug}`,
        });
      }
    }
  }
  for (const disease of diseases) {
    if (disease.microQuizzes) {
      for (const q of disease.microQuizzes) {
        qs.push({
          ...q,
          sourceName: disease.name,
          sourceType: "disease",
          sourceSlug: disease.slug,
          sourceHref: `/diseases/${disease.slug}`,
        });
      }
    }
  }
  return qs;
}

type Phase = "intro" | "practice" | "result";

export default function QuizPage() {
  const allQuestions = React.useMemo(() => buildAllQuestions(), []);
  const [phase, setPhase] = React.useState<Phase>("intro");
  const [filter, setFilter] = React.useState<"all" | "drug" | "disease">("all");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [answered, setAnswered] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<{ correct: boolean; question: QuizQuestion }[]>([]);

  const filteredQuestions = React.useMemo(() => {
    if (filter === "all") return allQuestions;
    return allQuestions.filter(q => q.sourceType === filter);
  }, [allQuestions, filter]);

  const currentQuestion = filteredQuestions[currentIndex];

  const startQuiz = () => {
    setPhase("practice");
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setResults([]);
  };

  const selectAnswer = (idx: number) => {
    if (answered) return;
    setSelectedAnswer(idx);
    setAnswered(true);
    if (currentQuestion) {
      setResults(prev => [...prev, {
        correct: idx === currentQuestion.correctIndex,
        question: currentQuestion,
      }]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= filteredQuestions.length) {
      setPhase("result");
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  const restart = () => {
    setPhase("intro");
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setResults([]);
  };

  // ===== INTRO PHASE =====
  if (phase === "intro") {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <FloatingSearch variant="floating" />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <p className="text-overline text-brand mb-6">Practice</p>
                <h1
                  className="font-sans font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  Test your understanding
                </h1>
                <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                  {allQuestions.length} multiple-choice questions drawn from across the KYP medication and disease library. Each question comes with a one-line explanation.
                </p>
              </Reveal>

              {/* Real stats */}
              <Reveal delay={0.1}>
                <div className="mt-10 grid grid-cols-2 gap-px border border-border/40 sm:grid-cols-3">
                  <div className="p-4">
                    <p className="font-sans text-2xl font-bold text-foreground">{allQuestions.length}</p>
                    <p className="text-xs text-muted-foreground mt-1">Total questions</p>
                  </div>
                  <div className="p-4 border-l border-border/40">
                    <p className="font-sans text-2xl font-bold text-foreground">
                      {allQuestions.filter(q => q.sourceType === "drug").length}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">From medications</p>
                  </div>
                  <div className="p-4 border-l border-border/40 sm:col-span-1 col-span-2">
                    <p className="font-sans text-2xl font-bold text-foreground">
                      {allQuestions.filter(q => q.sourceType === "disease").length}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">From diseases</p>
                  </div>
                </div>
              </Reveal>

              {/* Topic filter */}
              <Reveal delay={0.16}>
                <div className="mt-10">
                  <p className="text-overline text-muted-foreground mb-4">Choose what to practice</p>
                  <div className="flex flex-wrap gap-2">
                    {([
                      { id: "all", label: "All topics", count: allQuestions.length },
                      { id: "drug", label: "Medications", count: allQuestions.filter(q => q.sourceType === "drug").length },
                      { id: "disease", label: "Diseases", count: allQuestions.filter(q => q.sourceType === "disease").length },
                    ] as const).map(f => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFilter(f.id)}
                        className={cn(
                          "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                          filter === f.id
                            ? "border-brand bg-brand-soft/40 text-brand"
                            : "border-border text-muted-foreground hover:border-brand/30 hover:text-foreground"
                        )}
                      >
                        {f.label}
                        <span className="ml-2 text-xs opacity-60">{f.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Start CTA */}
              <Reveal delay={0.22}>
                <div className="mt-12">
                  <button
                    type="button"
                    onClick={startQuiz}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                  >
                    <Zap className="h-5 w-5" />
                    Start Practice
                    <span className="ml-2 text-sm font-normal opacity-80">
                      · {filteredQuestions.length} questions
                    </span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <p className="mt-8 text-xs text-muted-foreground/60 max-w-md">
                  Questions are drawn from the inline quizzes embedded in KYP medication and disease pages. No sign-up required — your answers are not stored.
                </p>
              </Reveal>
            </Container>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  // ===== RESULT PHASE =====
  if (phase === "result") {
    const correctCount = results.filter(r => r.correct).length;
    const incorrect = results.filter(r => !r.correct);
    const percentage = Math.round((correctCount / results.length) * 100);

    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Section spacing="relaxed">
            <Container>
              <Reveal>
                <p className="text-overline text-brand mb-6">Your result</p>
                <h1
                  className="font-sans font-semibold tracking-[-0.03em] text-foreground"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
                >
                  {correctCount} / {results.length}
                </h1>
                <p className="mt-4 text-body-lg text-muted-foreground">
                  {percentage}% correct · {results.length} questions completed
                </p>
              </Reveal>

              {/* Topics to revisit */}
              {incorrect.length > 0 && (
                <Reveal delay={0.1}>
                  <div className="mt-16">
                    <p className="text-overline text-muted-foreground mb-6">Topics to revisit</p>
                    <div className="space-y-px">
                      {incorrect.map((r, i) => {
                        const Icon = r.question.sourceType === "drug" ? BookOpen : HeartPulse;
                        return (
                          <Link
                            key={i}
                            href={r.question.sourceHref}
                            className="group flex items-center gap-4 py-4 border-b border-border/15 last:border-0 transition-all hover:pl-2"
                          >
                            <Icon className="h-4 w-4 shrink-0 text-muted-foreground/40" strokeWidth={1.5} />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {r.question.question}
                              </p>
                              <p className="text-xs text-muted-foreground/50 mt-0.5">
                                From {r.question.sourceName} · {r.question.sourceType}
                              </p>
                            </div>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Actions */}
              <Reveal delay={0.16}>
                <div className="mt-12 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Practice Again
                  </button>
                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Learn
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

  // ===== PRACTICE PHASE =====
  if (!currentQuestion) return null;

  const isCorrect = answered && selectedAnswer === currentQuestion.correctIndex;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Section spacing="relaxed">
          <Container width="narrow">
            {/* Progress bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <p className="text-overline text-muted-foreground">
                  Question {currentIndex + 1} of {filteredQuestions.length}
                </p>
                <p className="text-xs text-muted-foreground/50">
                  {results.filter(r => r.correct).length} correct so far
                </p>
              </div>
              <div className="h-1 w-full rounded-md bg-muted">
                <div
                  className="h-full rounded-md bg-brand transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question source */}
            <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground/60">
              {currentQuestion.sourceType === "drug" ? (
                <BookOpen className="h-3.5 w-3.5" />
              ) : (
                <HeartPulse className="h-3.5 w-3.5" />
              )}
              <span>From </span>
              <Link
                href={currentQuestion.sourceHref}
                className="font-medium text-foreground hover:text-brand"
              >
                {currentQuestion.sourceName}
              </Link>
              <span>· {currentQuestion.sourceType}</span>
            </div>

            {/* Question */}
            <h1
              className="font-sans font-semibold tracking-tight text-foreground leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              {currentQuestion.question}
            </h1>

            {/* Options */}
            <div className="mt-10 space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isThisSelected = selectedAnswer === idx;
                const isThisCorrect = idx === currentQuestion.correctIndex;
                const showCorrect = answered && isThisCorrect;
                const showWrong = answered && isThisSelected && !isThisCorrect;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => selectAnswer(idx)}
                    disabled={answered}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all",
                      !answered && "hover:border-brand/40 hover:bg-accent/30",
                      showCorrect && "border-success bg-success-soft/30",
                      showWrong && "border-emergency bg-emergency-soft/30",
                      answered && !showCorrect && !showWrong && "border-border opacity-50",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                        showCorrect && "border-success bg-success text-success-foreground",
                        showWrong && "border-emergency bg-emergency text-emergency-foreground",
                        !showCorrect && !showWrong && "border-border text-muted-foreground",
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
                    <span className={cn(
                      "text-sm",
                      showCorrect ? "font-semibold text-foreground" : "text-foreground"
                    )}>
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
                    {currentQuestion.explanation}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <Link
                    href={currentQuestion.sourceHref}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    Read the full {currentQuestion.sourceName} page →
                  </Link>
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                  >
                    {currentIndex + 1 >= filteredQuestions.length ? "See Results" : "Next Question"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            )}

            {/* Quit */}
            <div className="mt-16 border-t border-border/30 pt-6">
              <button
                type="button"
                onClick={restart}
                className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                ← Exit practice
              </button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
