"use client";

import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";

import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";

/**
 * MistakeBookEntry — one honest row inside the Study Mode Practice
 * section, rendered ONLY when at least one question to revisit exists
 * (real data only; no placeholder padding). Links to the Mistake Book.
 */
export function MistakeBookEntry() {
  const data = useLocalProgress();
  if (!data) return null;

  const count = Object.keys(data.mistakeBook).length;
  if (count === 0) return null;

  return (
    <RevealRow count={count} />
  );
}

function RevealRow({ count }: { count: number }) {
  return (
    <div className="flex items-start gap-6 border-b border-border/15 py-5 last:border-0">
      <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} aria-hidden />
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          Questions to revisit
        </h3>
        <p className="mt-1 max-w-3xl text-body-sm text-muted-foreground/80 leading-relaxed">
          {count} {count === 1 ? "question" : "questions"} you&apos;ve answered
          incorrectly across practice and custom tests, kept on this device.
          Retest them, revisit the section that teaches each one, or clear
          them once you&apos;re confident.
        </p>
      </div>
      <Link
        href="/study/mistakes"
        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-brand/40 bg-brand-soft/30 px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-brand/60"
      >
        Open Mistake Book
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
