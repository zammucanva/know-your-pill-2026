import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  CheckCircle2,
  RefreshCw,
  LineChart,
} from "lucide-react";

import { Navbar } from "@/components/kyp/sections/navbar";
import { Footer } from "@/components/kyp/sections/footer";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";
import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";
import { ContinueStudying } from "@/components/kyp/sections/study/continue-studying";
import { drugs } from "@/lib/kyp/data";

/**
 * /study — Study Mode.
 *
 * ACTIVE LEARNING, not browsing and not assessment-only:
 *   Study Mode → Study Medications → choose a medication → the
 *   existing medication course page (objectives, checkpoints,
 *   micro-quizzes, active recall) → Practice → Review → Progress.
 *
 * This page is a routing and orientation layer ONLY. It reuses:
 *   - the canonical drug registry (no second medication array)
 *   - the existing medication course pages at /drugs/[slug]
 *   - the existing practice engine at /quiz
 *   - the existing progress plumbing (/api/progress)
 * It creates no duplicate quiz engine, progress engine, or data.
 *
 * Works entirely without search — every medication is reachable by
 * plain links.
 */

export const metadata: Metadata = {
  title: "Study Mode · Know Your Pill",
  description:
    "Active learning for the 12 canonical psychiatric medications — choose a medication, work through its course, test yourself, and continue where you left off.",
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
      "Active learning for 12 psychiatric medications — courses, checkpoints, and practice.",
    type: "website",
    siteName: "Know Your Pill",
  },
};

/** Class groups derived from the registry's natural order. */
const classGroups = Array.from(new Set(drugs.map((d) => d.drugClassLabel)));

const totalQuestions = drugs.reduce(
  (sum, d) => sum + (d.microQuizzes?.length || 0),
  0
);

const yieldLabel: Record<string, string> = {
  low: "low yield",
  medium: "medium yield",
  high: "high yield",
};

/** Registry position (1-based) — used for the global 01–12 numbering.
 *  Groups and rows both follow registry order, so this matches the visual order. */
const drugNumber = (slug: string): number =>
  drugs.findIndex((d) => d.slug === slug) + 1;

export default function StudyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <FloatingSearch variant="floating" />

      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <Section spacing="relaxed">
          <Container>
            <Reveal>
              <p className="text-overline text-brand mb-6">Study Mode</p>
              <h1
                className="font-serif font-semibold tracking-[-0.03em] text-foreground leading-[0.95]"
                style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
              >
                Study Mode
              </h1>
              <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground leading-relaxed">
                This is active learning, not browsing. Choose a medication and
                work through it like a course — learning objectives, guided
                lessons, checkpoints, and active recall — then test yourself
                and pick up exactly where you left off next time.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#medications"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                >
                  Study Medications
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Practice MCQs
                  <Zap className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            {/* Real stats — one inline line, no cards */}
            <Reveal delay={0.2}>
              <p className="mt-12 text-sm text-muted-foreground">
                <span className="font-serif text-lg font-bold text-foreground">
                  {drugs.length}
                </span>{" "}
                medication courses ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">
                  {totalQuestions}
                </span>{" "}
                inline questions ·{" "}
                <span className="font-serif text-lg font-bold text-foreground">
                  {classGroups.length}
                </span>{" "}
                classes
              </p>
            </Reveal>
          </Container>
        </Section>

        {/* ===== HOW STUDY MODE WORKS ===== */}
        <Section spacing="relaxed" className="border-t border-border/30">
          <Container>
            <Reveal>
              <p className="text-overline text-muted-foreground mb-3">
                The study loop
              </p>
              <h2
                className="mb-14 font-serif font-semibold tracking-[-0.02em] text-foreground"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                How Study Mode works
              </h2>
            </Reveal>

            <div className="space-y-px">
              {[
                {
                  icon: ArrowRight,
                  title: "Choose a medication",
                  body: `All ${drugs.length} medications are listed below, grouped by class. No search required — every course is one tap away. Each one lists its reading time and question count up front so you know what you are committing to.`,
                },
                {
                  icon: CheckCircle2,
                  title: "Work the course",
                  body: "Each medication page is already a structured course: learning objectives up front, guided lessons, checkpoints after key sections, and an active-recall section at the end. Finish the course, not just the page.",
                },
                {
                  icon: Zap,
                  title: "Test yourself",
                  body: `Questions appear inside the courses after each milestone, and every one of the ${totalQuestions} medication questions is also available in the Practice hub — with immediate feedback and explanations.`,
                },
                {
                  icon: RefreshCw,
                  title: "Review and continue",
                  body: "Your visited courses are remembered. Study Mode shows exactly where you left off — completed sections, current lesson, and quiz bests — and takes you straight back into the course at the section you stopped reading.",
                },
                {
                  icon: LineChart,
                  title: "Track progress",
                  body: "Course position, completed sections, and quiz best scores are saved on this device — progress survives closing the browser, with no account required. Sign-in sync can arrive later without changing how you study.",
                },
              ].map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div className="group flex items-start gap-6 border-b border-border/15 py-5 last:border-0">
                    <span className="w-8 shrink-0 pt-1 font-mono text-xs text-muted-foreground/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <step.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      strokeWidth={1.75}
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 max-w-3xl text-body-sm text-muted-foreground/80 leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ===== STUDY MEDICATIONS ===== */}
        {classGroups.map((classLabel, gi) => {
          const group = drugs.filter((d) => d.drugClassLabel === classLabel);
          const fullName = group[0]?.drugClassFullName ?? classLabel;

          return (
            <Section
              key={classLabel}
              spacing="relaxed"
              className={
                gi === 0
                  ? "border-t border-border/30"
                  : "border-t border-border/30 bg-muted/10"
              }
            >
              <Container>
                <Reveal>
                  <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="text-overline text-muted-foreground mb-2">
                        {classLabel} · {group.length}{" "}
                        {group.length === 1 ? "course" : "courses"}
                      </p>
                      <h2
                        className="font-serif font-semibold tracking-[-0.02em] text-foreground"
                        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                      >
                        {fullName}
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <div className="space-y-px">
                  {group.map((drug) => {
                    const questionCount = drug.microQuizzes?.length || 0;
                    return (
                      <Reveal key={drug.slug}>
                        <Link
                          href={`/drugs/${drug.slug}`}
                          className="group flex items-start gap-6 border-b border-border/15 py-5 transition-all last:border-0 hover:pl-2 sm:items-center"
                        >
                          <span className="w-8 shrink-0 pt-1 font-mono text-xs text-muted-foreground/30 sm:pt-0">
                            {String(drugNumber(drug.slug)).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-serif text-lg font-semibold text-foreground">
                              {drug.genericName}
                            </h3>
                            <p className="mt-1 line-clamp-2 max-w-2xl text-body-sm text-muted-foreground/70 leading-relaxed">
                              {drug.learningObjectives[0]}
                            </p>
                          </div>
                          <div className="hidden shrink-0 flex-col items-end gap-1 text-xs text-muted-foreground/60 sm:flex">
                            <span>{drug.estimatedReadTime}</span>
                            <span>{questionCount} questions</span>
                            <span
                              className={
                                drug.yieldRating === "high"
                                  ? "font-medium text-brand/80"
                                  : undefined
                              }
                            >
                              {yieldLabel[drug.yieldRating] ?? drug.yieldRating}
                            </span>
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1 sm:mt-0" />
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              </Container>
            </Section>
          );
        })}

        {/* ===== CONTINUE STUDYING (real progress only — omitted if none) ===== */}
        <ContinueStudying />

        {/* ===== PRACTICE / PROGRESS CTA ===== */}
        <Section spacing="relaxed" className="border-t border-border/30">
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border/40 pb-10">
                <div className="max-w-xl">
                  <h2
                    className="font-serif font-semibold tracking-tight text-foreground"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    Finished a course? Close the loop.
                  </h2>
                  <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                    Test what you just learned in the Practice hub, then check
                    your dashboard to see every course you have studied.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/quiz"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand/90"
                  >
                    <Zap className="h-4 w-4" />
                    Practice MCQs
                  </Link>
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <LineChart className="h-4 w-4" />
                    My progress
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
