"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronDown,
  Clock,
  GraduationCap,
  Landmark,
  Lightbulb,
  ListChecks,
  Microscope,
  Stethoscope,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { NoteSection, PsychiatryMcq, PsychiatryNote } from "@/lib/oxford/types";
import {
  AUDIENCE_LENSES,
  buildLessonPhases,
  priorityMeta,
  type LearningPhase,
  type PhaseMeta,
} from "@/lib/oxford/learn";
import { MarkdownView } from "./markdown-view";
import { MicroQuiz } from "@/components/kyp/ui/micro-quiz";
import {
  recordCourseVisit,
  recordMicroQuizAnswer,
} from "@/lib/kyp/progress/progress-store";
import { useCourseProgress } from "@/lib/kyp/progress/use-local-progress";

/* ─── Phase visual language ─────────────────────────────────────────── */

const PHASE_STYLE: Record<
  LearningPhase,
  { icon: React.ElementType; accent: string; chip: string; iconColor: string }
> = {
  understand: { icon: BookOpen, accent: "border-brand/40", chip: "bg-brand/10 text-brand", iconColor: "text-brand" },
  learn: { icon: Microscope, accent: "border-brand/40", chip: "bg-brand/10 text-brand", iconColor: "text-brand" },
  india: { icon: Landmark, accent: "border-[var(--warning)]/50", chip: "bg-[var(--warning)]/10 text-[var(--warning)]", iconColor: "text-[var(--warning)]" },
  think: { icon: Stethoscope, accent: "border-emergency/40", chip: "bg-emergency/10 text-emergency", iconColor: "text-emergency" },
  remember: { icon: Lightbulb, accent: "border-neural/40", chip: "bg-neural/10 text-neural", iconColor: "text-neural" },
  practice: { icon: ListChecks, accent: "border-neural/40", chip: "bg-neural/10 text-neural", iconColor: "text-neural" },
  sources: { icon: ChevronDown, accent: "border-border", chip: "bg-muted text-muted-foreground", iconColor: "text-muted-foreground" },
};

/* ─── Lesson shell props (serialisable from the server page) ────────── */

export interface LessonShellProps {
  note: PsychiatryNote;
  /** Pre-computed on the server: the note's group name + letter. */
  groupName: string | null;
  groupLetter: string | null;
  /** Pre-computed on the server: related notes (slug/title/meta only). */
  related: Array<{
    slug: string;
    title: string;
    tagline: string | null;
    priorityLabel: string;
    readingMinutes: number;
    mcqCount: number;
  }>;
  selfTestHref: string;
}

export function LessonShell({ note, groupName, groupLetter, related, selfTestHref }: LessonShellProps) {
  const phases = React.useMemo(() => buildLessonPhases(note), [note]);
  const prio = priorityMeta(note.frontmatter.priority);
  const course = `psychiatry/${note.frontmatter.slug}`;
  const courseProgress = useCourseProgress(course);
  const totalSections = note.sections.filter((s) => s.number !== 2).length;
  const completedCount = courseProgress?.completedSections?.length ?? 0;

  // Record the visit (existing single progress system, new course namespace).
  React.useEffect(() => {
    recordCourseVisit(course, note.frontmatter.title);
  }, [course, note.frontmatter.title]);

  const navItems = React.useMemo(
    () =>
      phases.phases.flatMap((p) =>
        p.sections.map((s) => ({
          id: `${p.meta.key}-${s.id}`,
          label: shortTitle(s.title),
          group: p.meta.label,
        }))
      ),
    [phases]
  );

  return (
    <div className="flex min-h-screen flex-col">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <header className="border-b border-border bg-gradient-to-b from-neural/5 to-transparent">
        <div className="mx-auto w-full max-w-4xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link
              href="/psychiatry"
              className="inline-flex items-center gap-1.5 rounded-full bg-neural/10 px-3 py-1 font-semibold text-neural transition-colors hover:bg-neural/20"
            >
              <Brain className="h-3.5 w-3.5" aria-hidden />
              KYP Psychiatry
            </Link>
            {groupName && (
              <span className="text-muted-foreground">
                <span className="mx-1" aria-hidden>·</span>
                {groupName}
                {groupLetter && <span className="ml-1 font-mono text-[11px] text-muted-foreground/70">({groupLetter})</span>}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {note.frontmatter.title}
          </h1>
          {note.tagline && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {note.tagline}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {note.readingMinutes} min read
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" aria-hidden />
              {note.kind === "disorder" ? "Disorder lesson" : "Concept note"}
            </span>
            <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold", prio === priorityMeta("P1") ? "bg-brand/10 text-brand" : prio === priorityMeta("P3") ? "bg-muted text-muted-foreground" : "bg-neural/10 text-neural")}>
              {prio.label}
            </span>
            {note.mcqs.length > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <ListChecks className="h-4 w-4" aria-hidden />
                {note.mcqs.length} MCQs
              </span>
            )}
          </div>

          {/* Progress + Continue */}
          {courseProgress && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="h-1.5 w-40 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={completedCount} aria-valuemin={0} aria-valuemax={totalSections} aria-label="Lesson progress">
                <div
                  className="h-full rounded-full bg-brand transition-all"
                  style={{ width: `${Math.min(100, Math.round((completedCount / Math.max(1, totalSections)) * 100))}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {completedCount}/{totalSections} sections read
              </span>
              {courseProgress.currentSectionId && (
                <Link
                  href={`#${courseProgress.currentSectionId}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                >
                  Continue <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              )}
            </div>
          )}
        </div>
      </header>

      {/* ─── BODY ─────────────────────────────────────────────────── */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Section navigator (desktop) */}
        <nav aria-label="Lesson sections" className="sticky top-24 hidden max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto pb-4 lg:block">
          {phases.phases.map((p) => (
            <div key={p.meta.key} className="pb-2">
              <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                {p.meta.label}
              </p>
              {p.sections.map((s) => (
                <a
                  key={`${p.meta.key}-${s.id}`}
                  href={`#${p.meta.key}-${s.id}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {shortTitle(s.title)}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <main className="min-w-0 space-y-12" id="lesson-top">
          {/* Learning objectives */}
          {phases.objectives && (
            <section aria-labelledby="objectives-heading" className="rounded-xl border border-brand/25 bg-brand/[0.04] p-5 sm:p-6">
              <h2 id="objectives-heading" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
                <ListChecks className="h-4 w-4" aria-hidden /> Learning objectives
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">After this lesson you should be able to:</p>
              <MarkdownView blocks={phases.objectives.blocks} className="mt-3" />
            </section>
          )}

          {/* Audience lenses — presentation-only entry points */}
          <section aria-label="Choose your learning lens" className="grid gap-3 sm:grid-cols-3">
            {AUDIENCE_LENSES.map((lens) => (
              <a
                key={lens.key}
                href={`#lens-${lens.key}`}
                className="group rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-brand/40"
              >
                <p className="text-sm font-semibold text-foreground group-hover:text-brand">{lens.label}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{lens.blurb}</p>
              </a>
            ))}
          </section>

          {/* Phase sections */}
          {phases.phases.map((p) => (
            <PhaseBlock key={p.meta.key} meta={p.meta} sections={p.sections} note={note} />
          ))}

          {/* Related lessons */}
          {related.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-lg font-semibold tracking-tight text-foreground">
                Continue the curriculum
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {groupName ? `More from ${groupName}` : "Related psychiatry lessons"}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/psychiatry/${r.slug}`}
                    className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand/40"
                  >
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand">{r.title}</p>
                    {r.tagline && <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{r.tagline}</p>}
                    <p className="mt-2 text-[11px] text-muted-foreground/70">
                      {r.priorityLabel} · {r.readingMinutes} min{r.mcqCount ? ` · ${r.mcqCount} MCQs` : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Audience lens anchor targets (deep-link support, no content duplication) */}
      <div className="sr-only" aria-hidden="true">
        <span id="lens-patient" />
        <span id="lens-student" />
        <span id="lens-clinician" />
      </div>

      {/* Mobile section navigator */}
      <MobilePhaseNav
        phases={phases.phases.map((p) => ({
          label: p.meta.label,
          href: `#phase-${p.meta.key}`,
        }))}
        selfTestHref={selfTestHref}
      />
    </div>
  );
}

/* ─── Phase block ───────────────────────────────────────────────────── */

function PhaseBlock({
  meta,
  sections,
  note,
}: {
  meta: PhaseMeta;
  sections: NoteSection[];
  note: PsychiatryNote;
}) {
  const style = PHASE_STYLE[meta.key];
  const Icon = style.icon;
  const isPractice = meta.key === "practice";
  const isSources = meta.key === "sources";

  if (isPractice) {
    return (
      <section aria-labelledby={`phase-${meta.key}`} id={`phase-${meta.key}`}>
        <PhaseHeader meta={meta} icon={<Icon className="h-4 w-4" aria-hidden />} />
        <div className="mt-5 space-y-6">
          {note.mcqs.map((mcq) => (
            <MicroQuiz
              key={mcq.id}
              quiz={{
                id: mcq.id,
                question: mcq.question,
                options: mcq.options,
                correctIndex: mcq.correctIndex,
                explanation: mcq.explanation,
                afterSectionId: `practice-${mcq.id}`,
              }}
              courseSlug={`psychiatry/${note.frontmatter.slug}`}
              courseQuizCount={note.mcqs.length}
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Want a mixed run across every lesson?{" "}
          <Link href="/psychiatry/self-test" className="font-medium text-brand hover:underline">
            Open the Psychiatry Self-Test
          </Link>
          .
        </p>
      </section>
    );
  }

  if (isSources) {
    return <SourcesSection meta={meta} sections={sections} note={note} />;
  }

  return (
    <section aria-labelledby={`phase-${meta.key}`} id={`phase-${meta.key}`}>
      <PhaseHeader meta={meta} icon={<Icon className="h-4 w-4" aria-hidden />} />
      <div className={cn("mt-5 space-y-8", meta.key === "india" && "rounded-xl border border-[var(--warning)]/30 bg-[var(--warning)]/[0.04] p-5 sm:p-6")}>
        {sections.map((s) => (
          <div key={`${meta.key}-${s.id}`} id={`${meta.key}-${s.id}`} className="scroll-mt-24">
            <h3 className="mb-3 text-base font-semibold tracking-tight text-foreground">
              {s.title}
            </h3>
            <MarkdownView blocks={s.blocks} />
          </div>
        ))}
      </div>
    </section>
  );
}

function PhaseHeader({ meta, icon }: { meta: PhaseMeta; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2.5">
        <span className={cn("inline-flex h-8 w-8 items-center justify-center rounded-lg", PHASE_STYLE[meta.key].chip)}>
          {icon}
        </span>
        <h2 id={`phase-${meta.key}`} className="text-lg font-bold uppercase tracking-wide text-foreground">
          {meta.label}
        </h2>
      </div>
      <p className="pl-[42px] text-xs text-muted-foreground">{meta.intent}</p>
    </div>
  );
}

/* ─── Sources & References (secondary, expandable, provenance-kept) ──── */

function SourcesSection({
  meta,
  sections,
  note,
}: {
  meta: PhaseMeta;
  sections: NoteSection[];
  note: PsychiatryNote;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <section aria-labelledby={`phase-${meta.key}`} id={`phase-${meta.key}`} className="rounded-xl border border-border bg-muted/30 p-5 sm:p-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="sources-content"
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="flex items-center gap-2.5">
          <BookOpen className="h-4 w-4 text-muted-foreground" aria-hidden />
          <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Sources &amp; References
          </span>
        </span>
        <ChevronDown
          className={cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <p className="mt-2 text-xs text-muted-foreground">
        Evidence sources for this lesson, plus editorial provenance. Reviewed{" "}
        {note.frontmatter.last_reviewed || "2026-09"}.
      </p>
      {open && (
        <div id="sources-content" className="mt-4 space-y-6">
          {sections.map((s) => (
            <div key={`${meta.key}-${s.id}`} id={`${meta.key}-${s.id}`} className="scroll-mt-24">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {s.title}
              </h3>
              <MarkdownView blocks={s.blocks} className="text-sm" />
            </div>
          ))}
          <p className="border-t border-border pt-3 text-[11px] leading-relaxed text-muted-foreground/80">
            Provenance: {note.frontmatter.source_map}. KYP presents these notes as original
            teaching material for learning purposes.
          </p>
        </div>
      )}
    </section>
  );
}

/* ─── Mobile phase nav ──────────────────────────────────────────────── */

function MobilePhaseNav({
  phases,
  selfTestHref,
}: {
  phases: Array<{ label: string; href: string }>;
  selfTestHref: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-phase-list"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground"
        >
          <ListChecks className="h-4 w-4" aria-hidden />
          Lesson sections
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden />
        </button>
        <Link
          href={selfTestHref}
          className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white"
        >
          Self-test
        </Link>
      </div>
      {open && (
        <nav id="mobile-phase-list" aria-label="Lesson sections" className="max-h-[40vh] overflow-y-auto border-t border-border px-3 py-2">
          {phases.map((p, i) => (
            <a
              key={p.href + i}
              href={p.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {p.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ─── Helpers ───────────────────────────────────────────────────────── */

function shortTitle(title: string): string {
  const t = title
    .replace(/\s*\(de-identified\)\s*/i, "")
    .replace(/^Active recall prompts$/i, "Active recall")
    .replace(/^FAQ: asked the way patients ask it$/i, "FAQ")
    .replace(/^What happens in the body\/brain.*$/i, "Body & brain")
    .replace(/^In one line \+ overview$/i, "Overview");
  return t.length > 34 ? t.slice(0, 32) + "…" : t;
}
