"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Brain, ClipboardList, FlaskConical, GraduationCap, HeartPulse, Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModuleCard, ModuleHeader } from "./modules-hero";
import { typeHref, typeIcon, typeLabel, timeAgo, type ProgressEntry } from "@/lib/kyp/dashboard/dashboard-data";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import { continueHref, isPsychiatryCourseSlug } from "@/lib/kyp/study/course-catalog";
import { useDashboardSettings } from "@/lib/kyp/dashboard/settings-store";

/**
 * Learning modules: Continue Learning, Learning Progress, Daily Goal.
 *
 * Progress rows mix two REAL sources:
 *   - the server reading history (/api/progress): drug/substance/disease
 *     page visits
 *   - the local progress store (kyp:progress:v1): course sections,
 *     psychiatry lessons, and MCQ quiz attempts
 * A row with no data reads "Not started" with an Explore link. No
 * percentages are invented: the platform tracks none.
 */

/* ─── Continue Learning ─────────────────────────────────────────── */

export function ContinueLearningCard({ progress }: { progress: ProgressEntry[] }) {
  const localProgress = useLocalProgress();
  const [current, setCurrent] = React.useState<ProgressEntry | null>(null);

  React.useEffect(() => {
    if (progress.length === 0) {
      setCurrent(null);
      return;
    }
    const latest = [...progress].sort(
      (a, b) => new Date(b.lastVisitedAt).getTime() - new Date(a.lastVisitedAt).getTime()
    )[0];
    setCurrent(latest);
  }, [progress]);

  const course = current ? localProgress?.courses[current.slug] ?? null : null;
  const href = current ? (course ? continueHref(course) : typeHref(current.type, current.slug)) : "/medicine";
  const Icon = current ? typeIcon[current.type] ?? BookOpen : BookOpen;

  return (
    <ModuleCard>
      <ModuleHeader icon={ArrowRight} title="Continue Learning" />
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        {current ? (
          <>
            <Link href={href} className="group flex min-w-0 items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-serif text-lg font-semibold text-foreground group-hover:text-brand">
                  {current.title}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {typeLabel[current.type] ?? "Page"} · visited {timeAgo(current.lastVisitedAt)}
                  {current.visitCount > 1 ? ` · ${current.visitCount} visits` : ""}
                </span>
              </span>
            </Link>
            <Button asChild size="sm" className="shrink-0 rounded-full">
              <Link href={href}>
                Continue exploring
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </>
        ) : (
          <>
            <div className="flex min-w-0 items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-brand">
                <BookOpen className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-serif text-lg font-semibold text-foreground">Nothing in progress yet</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Start with the medication library. Your place is saved automatically.
                </p>
              </div>
            </div>
            <Button asChild size="sm" className="shrink-0 rounded-full">
              <Link href="/medicine">
                Explore the library
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </ModuleCard>
  );
}

/* ─── Daily goal (study reminders) ──────────────────────────────── */

export function DailyGoalCard() {
  const dailyGoal = useDashboardSettings((s) => s.dailyGoal);

  return (
    <ModuleCard className="dash-card-quiet">
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand-soft/50 text-brand">
            <Target className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-serif text-lg font-semibold text-foreground">
              Daily goal · {dailyGoal} min
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Reviews, a weak-area drill, and one course. Today&apos;s plan is ready when you are.
            </p>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="shrink-0 rounded-full">
          <Link href="/study">
            Open today&apos;s plan
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </ModuleCard>
  );
}

/* ─── Learning Progress ─────────────────────────────────────────── */

interface ProgressRowProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  status: React.ReactNode;
  exploreHref: string;
}

function ProgressRow({ icon: Icon, label, status, exploreHref }: ProgressRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 py-3">
      <span className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-muted-foreground">
          <Icon className="h-4 w-4" />
        </span>
        <span className="truncate text-sm font-medium text-foreground">{label}</span>
      </span>
      <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
        {status}
        <Link
          href={exploreHref}
          className="font-medium text-brand transition-colors hover:text-brand-ink"
        >
          Explore
          <ArrowRight className="ml-0.5 inline h-3 w-3" />
        </Link>
      </span>
    </div>
  );
}

function CountStatus({ n, singular }: { n: number; singular: string }) {
  if (n === 0) return <span>Not started</span>;
  return (
    <span>
      {n} {singular}
      {n === 1 ? "" : "s"} visited
    </span>
  );
}

export function LearningProgress({ progress }: { progress: ProgressEntry[] }) {
  const localProgress = useLocalProgress();

  const medications = progress.filter((p) => p.type === "drug").length;
  const substances = progress.filter((p) => p.type === "substance").length;
  const conditions = progress.filter((p) => p.type === "disease").length;

  const courses = localProgress ? Object.values(localProgress.courses) : [];
  const psychiatryCourses = courses.filter((c) => isPsychiatryCourseSlug(c.slug));
  const mcqAttempts = courses.reduce((sum, c) => sum + (c.quiz?.attempts ?? 0), 0);

  return (
    <ModuleCard>
      <ModuleHeader icon={GraduationCap} title="Learning Progress" />
      <div className="divide-y divide-border/40">
        <ProgressRow icon={BookOpen} label="Medications" exploreHref="/medicine"
          status={<CountStatus n={medications} singular="page" />} />
        <ProgressRow icon={Brain} label="Psychiatry" exploreHref="/psychiatry"
          status={<PsychStatus courses={psychiatryCourses} />} />
        <ProgressRow icon={FlaskConical} label="Substances" exploreHref="/#substances"
          status={<CountStatus n={substances} singular="page" />} />
        <ProgressRow icon={HeartPulse} label="Conditions" exploreHref="/diseases/major-depressive-disorder"
          status={<CountStatus n={conditions} singular="page" />} />
        <ProgressRow icon={ClipboardList} label="MCQ practice" exploreHref="/quiz"
          status={<McqStatus n={mcqAttempts} />} />
      </div>
    </ModuleCard>
  );
}

function PsychStatus({ courses }: { courses: { slug: string }[] }) {
  if (courses.length === 0) return <span>Not started</span>;
  return (
    <span>
      {courses.length} {courses.length === 1 ? "lesson" : "lessons"} in progress
    </span>
  );
}

function McqStatus({ n }: { n: number }) {
  if (n === 0) return <span>Not started</span>;
  return (
    <span>
      {n} answered
    </span>
  );
}
