"use client";

import * as React from "react";
import { BookMarked, BookOpen, ClipboardList, Pill, UserRound } from "lucide-react";

import { cn } from "@/lib/utils";
import { learnerLabel, type ProgressEntry } from "@/lib/kyp/dashboard/dashboard-data";

/**
 * Module card primitives + the welcome hero and the stats row.
 *
 * Every number rendered here comes from a real source: the server
 * progress/bookmark rows, the generated platform stats, or the local
 * progress store. Missing data renders as "Not started"; nothing is
 * ever fabricated.
 */

export function ModuleCard({
  id, className, children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "dash-card scroll-mt-24 rounded-xl border border-border/60 bg-card/60 shadow-[var(--shadow-lift)]",
        className
      )}
    >
      {children}
    </section>
  );
}

export function ModuleHeader({
  icon: Icon, title, aside,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-14 items-center justify-between gap-3 border-b border-border/50 px-5 py-3.5">
      <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
        <Icon className="h-4 w-4 text-brand" />
        {title}
      </h2>
      {aside && <div className="flex items-center gap-2 text-xs text-muted-foreground">{aside}</div>}
    </div>
  );
}

/* ─── Welcome hero ─────────────────────────────────────────────── */

export function WelcomeHero({
  name, progress, learnerType, children,
}: {
  name: string | null;
  progress: ProgressEntry[];
  learnerType?: string | null;
  children?: React.ReactNode;
}) {
  const [now, setNow] = React.useState<number | null>(null);
  React.useEffect(() => setNow(Date.now()), []);

  const latest = progress.reduce<string | null>((acc, p) => {
    if (!acc || new Date(p.lastVisitedAt).getTime() > new Date(acc).getTime()) return p.lastVisitedAt;
    return acc;
  }, null);

  const lastStudied =
    latest !== null && now !== null
      ? timeAgoFrom(new Date(latest).getTime(), now)
      : null;
  const role = learnerLabel(learnerType);

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <p className="text-overline text-brand mb-3">Your Learning Dashboard</p>
        <h1
          className="font-serif font-semibold tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)" }}
        >
          Welcome back{name ? `, ${name.split(" ")[0]}` : ""}.
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Continue building your understanding of medicines, mechanisms and psychiatry.
        </p>
      </div>
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        {lastStudied && (
          <li className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-brand/70" />
            Last studied {lastStudied}
          </li>
        )}
        <li className="flex items-center gap-1.5">
          <ClipboardList className="h-3.5 w-3.5 text-brand/70" />
          {progress.length} {progress.length === 1 ? "page" : "pages"} explored
        </li>
        {role && (
          <li className="flex items-center gap-1.5">
            <UserRound className="h-3.5 w-3.5 text-brand/70" />
            {role}
          </li>
        )}
      </ul>
      {children}
    </div>
  );
}

function timeAgoFrom(then: number, now: number): string {
  const diffMin = Math.floor((now - then) / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return new Date(then).toLocaleDateString();
}

/* ─── Stats row ────────────────────────────────────────────────── */

export interface StatsRowProps {
  pagesExplored: number;
  medicationsStudied: number;
  medicationTotal: number;
  mcqsAnswered: number;
  bookmarks: number;
}

function StatCard({
  value, label, sub, icon: Icon,
}: {
  value: number | string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="dash-card group rounded-xl border border-border/60 bg-card/60 p-5 shadow-[var(--shadow-lift)] transition-colors hover:border-brand/30">
      <div className="flex items-start justify-between gap-2">
        <p className="font-serif text-3xl font-bold leading-none text-foreground">{value}</p>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-brand">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

export function StatsRow({
  pagesExplored, medicationsStudied, medicationTotal, mcqsAnswered, bookmarks,
}: StatsRowProps) {
  return (
    <div
      className="grid grid-cols-2 gap-[var(--dash-gap)] xl:grid-cols-4"
      aria-label="Your learning stats"
    >
      <StatCard value={pagesExplored} label="Pages explored" sub="across the library" icon={BookOpen} />
      <StatCard value={medicationsStudied} label="Medications studied" sub={`of ${medicationTotal} monographs`} icon={Pill} />
      <StatCard value={mcqsAnswered} label="MCQs answered" sub={mcqsAnswered > 0 ? "self-test questions" : "Not started"} icon={ClipboardList} />
      <StatCard value={bookmarks} label="Bookmarks" sub="saved knowledge" icon={BookMarked} />
    </div>
  );
}
