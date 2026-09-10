"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/kyp/ui/container";
import { Section } from "@/components/kyp/ui/section";
import { Reveal } from "@/components/kyp/ui/reveal";

/**
 * ContinueStudying — surfaces REAL study progress only.
 *
 * Reads the existing progress API (the same plumbing the medication
 * pages already write to via PageTracker) and lists the most recent
 * medication pages the signed-in user has visited.
 *
 * Honesty rules:
 *   - No fabricated percentages or completion bars.
 *   - If the user has no progress (or is not signed in, or the API
 *     fails), the component renders NOTHING — it is simply omitted.
 */

interface ProgressEntry {
  type: string;
  slug: string;
  title: string;
  lastVisitedAt: string;
}

function timeAgo(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMin = Math.floor((now.getTime() - date.getTime()) / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return date.toLocaleDateString();
}

export function ContinueStudying() {
  const [progress, setProgress] = React.useState<ProgressEntry[]>([]);

  React.useEffect(() => {
    fetch("/api/progress?limit=5")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d?.progress) {
          // Study Mode continues medications only — the medication course journey.
          setProgress(
            (d.progress as ProgressEntry[]).filter((p) => p.type === "drug")
          );
        }
      })
      .catch(() => {});
  }, []);

  if (progress.length === 0) return null;

  return (
    <Section
      id="continue"
      spacing="relaxed"
      className="border-t border-border/30 bg-muted/10"
    >
      <Container>
        <Reveal>
          <p className="text-overline text-muted-foreground mb-3">
            Where you left off
          </p>
          <h2
            className="mb-12 font-serif font-semibold tracking-[-0.02em] text-foreground"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Continue studying
          </h2>
        </Reveal>

        <div className="space-y-px">
          {progress.map((p, i) => (
            <Reveal key={p.slug + p.type} delay={i * 0.05}>
              <Link
                href={`/drugs/${p.slug}`}
                className="group flex items-center gap-6 border-b border-border/15 py-4 transition-all last:border-0 hover:pl-2"
              >
                <span className="w-6 font-mono text-xs text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground/50">
                    studied {timeAgo(p.lastVisitedAt)}
                  </p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
