import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  ListChecks,
  CheckCircle2,
  RefreshCw,
  LineChart,
  Scale,
  Grid3X3,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { ModuleCard } from "@/components/kyp/dashboard/modules-hero";
import { ContinueStudying } from "@/components/kyp/sections/study/continue-studying";
import { StudyNextPanel } from "@/components/kyp/sections/study/study-next-panel";
import { MistakeBookEntry } from "@/components/kyp/sections/study/mistake-book-entry";
import { PracticeStatsLine } from "@/components/kyp/sections/study/practice-stats-line";
import { TopicAccuracyChips } from "@/components/kyp/sections/study/topic-accuracy-chips";
import { RetentionDueEntry } from "@/components/kyp/sections/study/retention-due-entry";
import { ClassHoneycomb, type HoneycombClass } from "@/components/kyp/sections/study/class-honeycomb";
import { StudyProgressCard } from "@/components/kyp/sections/study/study-progress-card";
import { DailyPlan } from "@/components/kyp/sections/study/daily-plan";
import { drugs } from "@/lib/kyp/data";

/**
 * /study — Study Mode: the single unified learning hub.
 *
 * One learning system, two stages:
 *   LEARN — build knowledge: Continue Learning, medication courses,
 *           learning progress (real, from kyp:progress:v1)
 *   PRACTICE — test knowledge: Quick MCQs, Custom Test, Question Factory,
 *           practice history
 *
 * This page is a routing and orientation layer ONLY, laid out in the same
 * card language as the learning dashboard. It reuses:
 *   - the canonical drug registry (no second medication array)
 *   - the existing medication course pages at /drugs/[slug]
 *   - the existing practice engine at /quiz
 *   - the existing custom test at /quiz/custom
 *   - the existing progress plumbing (one store, separate namespaces)
 * It creates no duplicate quiz engine, progress engine, or data.
 *
 * Works entirely without search — every medication is reachable by
 * plain links.
 */

/** Class groups derived from the registry's natural order. */
const classGroups = Array.from(new Set(drugs.map((d) => d.drugClassLabel)));

export const metadata: Metadata = {
  title: "Study Mode · Know Your Pill",
  description:
    "One learning system: build knowledge with guided medication courses, then test it with MCQs and custom tests. Continue exactly where you left off.",
  keywords: [
    "study mode",
    "active learning",
    "medication courses",
    "pharmacology practice",
    "micro quizzes",
    "active recall",
    "Know Your Pill",
  ],
  openGraph: {
    title: "Study Mode · Know Your Pill",
    description:
      `Active learning for ${drugs.length} psychiatric medications: courses, checkpoints, and practice.`,
    type: "website",
    siteName: "Know Your Pill",
  },
};

const totalQuestions = drugs.reduce(
  (sum, d) => sum + (d.microQuizzes?.length || 0),
  0
);

const yieldLabel: Record<string, string> = {
  low: "low yield",
  medium: "medium yield",
  high: "high yield",
};

const honeycombClasses: HoneycombClass[] = classGroups.map((classLabel) => {
  const group = drugs.filter((d) => d.drugClassLabel === classLabel);
  return {
    label: classLabel,
    fullName: group[0]?.drugClassFullName ?? classLabel,
    courses: group.length,
    questions: group.reduce((n, d) => n + (d.microQuizzes?.length || 0), 0),
    drugs: group.map((d) => ({
      slug: d.slug,
      name: d.genericName,
      readTime: d.estimatedReadTime,
      questions: d.microQuizzes?.length || 0,
      yieldLabel: yieldLabel[d.yieldRating] ?? d.yieldRating,
      highYield: d.yieldRating === "high",
      objective: d.learningObjectives[0] ?? "",
    })),
  };
});

/** Server-safe module header (same markup as the dashboard's ModuleHeader). */
function CardHeader({
  icon: Icon,
  title,
  aside,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  aside?: string;
}) {
  return (
    <div className="flex min-h-14 items-center justify-between gap-3 border-b border-border/50 px-5 py-3.5">
      <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
        <Icon className="h-4 w-4 text-brand" />
        {title}
      </h2>
      {aside && <div className="text-xs text-muted-foreground">{aside}</div>}
    </div>
  );
}

function PracticeCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
  primary,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  href: string;
  cta: string;
  primary?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-border/50 bg-background/60 p-5">
      <Icon className="h-5 w-5 text-brand" />
      <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      {/* prefetch={false}: engine routes bundle the registry chunk */}
      <Link
        href={href}
        prefetch={false}
        className={
          primary
            ? "mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
            : "mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
        }
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

const loopSteps = [
  {
    icon: ArrowRight,
    title: "Choose a medication",
    body: `All ${drugs.length} medications are listed below, grouped by class. No search required: every course is one tap away. Each one lists its reading time and question count up front so you know what you are committing to.`,
  },
  {
    icon: CheckCircle2,
    title: "Work the course",
    body: "Each medication page is already a structured course: learning objectives up front, guided lessons, checkpoints after key sections, and an active-recall section at the end. Finish the course, not just the page.",
  },
  {
    icon: Zap,
    title: "Test yourself",
    body: `Questions appear inside the courses after each milestone, and every one of the ${totalQuestions} medication questions is also available in the Practice hub, with immediate feedback and explanations.`,
  },
  {
    icon: RefreshCw,
    title: "Review and continue",
    body: "Your visited courses are remembered. Study Mode shows exactly where you left off (completed sections, current lesson, and quiz bests) and takes you straight back into the course at the section you stopped reading.",
  },
  {
    icon: LineChart,
    title: "Track progress",
    body: "Course position, completed sections, and quiz best scores are saved on this device: progress survives closing the browser, with no account required. Sign-in sync can arrive later without changing how you study.",
  },
];

export default function StudyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            {/* ===== HEADER ===== */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <p className="text-overline text-brand mb-3">Study Mode</p>
                <h1
                  className="font-serif font-semibold tracking-tight text-foreground"
                  style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
                >
                  Study Mode
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Learn. Practice. Continue where you left off. Choose a
                  medication and work through it like a course, then test
                  yourself.
                </p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-1.5 text-xs text-muted-foreground">
                  <span className="font-serif text-base font-bold text-foreground">
                    {drugs.length}
                  </span>{" "}
                  medication courses ·{" "}
                  <span className="font-serif text-base font-bold text-foreground">
                    {totalQuestions}
                  </span>{" "}
                  inline questions ·{" "}
                  <span className="font-serif text-base font-bold text-foreground">
                    {classGroups.length}
                  </span>{" "}
                  classes
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* prefetch={false}: engine routes bundle the registry chunk */}
                <Link
                  href="/compare"
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Scale className="h-4 w-4" />
                  Compare medications
                </Link>
                <Link
                  href="/compare/classes"
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Grid3X3 className="h-4 w-4" />
                  Compare a class by concern
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <LineChart className="h-4 w-4" />
                  My progress
                </Link>
              </div>
            </div>

            {/* ===== TODAY: resume + plan =====
                DailyPlan stays first in the source; the grid places it
                beside the resume card. Both render nothing server-side. */}
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="order-2 empty:hidden lg:w-1/3">
                {/* Today's plan (X8) — fixed, explainable, dismissible */}
                <DailyPlan />
              </div>
              <div className="order-1 min-w-0 lg:flex-1">
                {/* Study Next — resume card, unfinished courses, mistakes,
                    reviews due, saved tests (NOW-N8) */}
                <StudyNextPanel />
              </div>
            </div>

            {/* ===== CONTINUE LEARNING (real progress only) ===== */}
            <ContinueStudying />

            {/* ===== PROGRESS (real rows only) ===== */}
            <StudyProgressCard>
              {/* Reviews due (NEXT-X1): renders only when something is due */}
              <RetentionDueEntry />
              {/* Mistake Book: real rows only */}
              <MistakeBookEntry />
              {/* Topic accuracy (NEXT-N9): real chips only */}
              <TopicAccuracyChips />
              {/* Real practice history */}
              <PracticeStatsLine />
            </StudyProgressCard>

            {/* ===== PRACTICE ===== */}
            <ModuleCard id="practice">
              <CardHeader
                icon={Zap}
                title="Practice"
                aside="Open from the start: no course required"
              />
              <div className="grid gap-4 p-5 md:grid-cols-3">
                <PracticeCard
                  icon={Zap}
                  title="Quick MCQs"
                  body={`Test yourself with existing question sets: every one of the ${totalQuestions} library questions with immediate feedback and a one-line explanation.`}
                  href="/quiz"
                  cta="Start Practice"
                  primary
                />
                <PracticeCard
                  icon={ListChecks}
                  title="Custom Test"
                  body="Build a test from the topics you choose: pick the medications, pick the length, then review what you got wrong."
                  href="/quiz/custom"
                  cta="Build your own test"
                />
                <PracticeCard
                  icon={Sparkles}
                  title="Question Factory"
                  body="Generate fresh questions from the reviewed library. Built by rules on your device, never repeated, and traceable to their source."
                  href="/quiz/factory"
                  cta="Generate questions"
                />
              </div>
            </ModuleCard>

            {/* ===== LEARN ===== */}
            <ModuleCard id="medications">
              <CardHeader
                icon={ClipboardList}
                title="Study Medications"
                aside={`${drugs.length} courses · ${classGroups.length} classes`}
              />
              <p className="px-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                Build your medical knowledge through guided medication
                courses: objectives, checkpoints, and active recall in every
                course. Open a class to see its medications.
              </p>
              {/* The interactive honeycomb (four columns on phones). Every
                  medication is also reachable through the plain list below. */}
              <div className="p-5">
                <ClassHoneycomb classes={honeycombClasses} />
              </div>
              <details className="group/all border-t border-border/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 text-sm font-medium text-foreground kyp-focus-ring">
                  <span>All classes as a list</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform group-open/all:rotate-90" />
                </summary>
              <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
                {classGroups.map((classLabel) => {
                  const group = drugs.filter((d) => d.drugClassLabel === classLabel);
                  const fullName = group[0]?.drugClassFullName ?? classLabel;
                  const questions = group.reduce(
                    (n, d) => n + (d.microQuizzes?.length || 0),
                    0
                  );
                  return (
                    <details
                      key={classLabel}
                      className="group rounded-lg border border-border/50 bg-background/60"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 kyp-focus-ring">
                        <span className="min-w-0">
                          <span className="text-overline text-brand">{classLabel}</span>
                          <span className="mt-1 block font-serif text-base font-semibold leading-snug text-foreground">
                            {fullName}
                          </span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            {group.length} {group.length === 1 ? "course" : "courses"} ·{" "}
                            {questions} questions
                          </span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform group-open:rotate-90" />
                      </summary>
                      <ul className="border-t border-border/40 px-2 py-2">
                        {group.map((drug) => (
                          <li key={drug.slug}>
                            <Link
                              href={`/drugs/${drug.slug}`}
                              className="flex items-center justify-between gap-3 rounded-md px-2.5 py-2 text-sm transition-colors hover:bg-brand-soft/30"
                            >
                              <span className="min-w-0">
                                <span className="block font-medium text-foreground">
                                  {drug.genericName}
                                </span>
                                <span className="block truncate text-xs text-muted-foreground/70">
                                  {drug.learningObjectives[0]}
                                </span>
                              </span>
                              <span className="shrink-0 text-right text-xs text-muted-foreground/70">
                                <span className="block">
                                  {drug.estimatedReadTime} · {drug.microQuizzes?.length || 0} q
                                </span>
                                <span
                                  className={
                                    drug.yieldRating === "high"
                                      ? "block font-medium text-brand/80"
                                      : "block"
                                  }
                                >
                                  {yieldLabel[drug.yieldRating] ?? drug.yieldRating}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
              </div>
              </details>
            </ModuleCard>

            {/* ===== HOW STUDY MODE WORKS ===== */}
            <ModuleCard>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 kyp-focus-ring">
                  <span className="font-serif text-lg font-semibold text-foreground">
                    How Study Mode works
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform group-open:rotate-90" />
                </summary>
                <ol className="space-y-px border-t border-border/50 px-5 py-3">
                  {loopSteps.map((step, i) => (
                    <li
                      key={step.title}
                      className="flex items-start gap-4 border-b border-border/15 py-4 last:border-0"
                    >
                      <span className="w-6 shrink-0 pt-0.5 font-mono text-xs text-muted-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <step.icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        strokeWidth={1.75}
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-base font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </details>
            </ModuleCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
