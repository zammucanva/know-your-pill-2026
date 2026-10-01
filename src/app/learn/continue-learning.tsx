"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/kyp/ui/section";
import { Container } from "@/components/kyp/ui/container";
import { Reveal } from "@/components/kyp/ui/reveal";

/**
 * ContinueLearningSection — surfaces real progress data if the user is
 * logged in. If not logged in, shows honest "Recommended starting
 * points" instead of fabricating progress numbers.
 *
 * Client Component (the only interactive part of /learn) — fetches
 * /api/progress on mount. Extracted from the page so the rest of /learn
 * stays a Server Component and the canonical registries are counted at
 * request/build time instead of shipping to the browser.
 */
export function ContinueLearningSection() {
  const [progress, setProgress] = React.useState<{ type: string; slug: string; title: string; lastVisitedAt: string }[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/progress?limit=5")
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.progress) setProgress(d.progress); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const hrefForType = (type: string, slug: string) => {
    if (type === "drug") return `/drugs/${slug}`;
    if (type === "substance") return `/substances/${slug}`;
    if (type === "disease") return `/diseases/${slug}`;
    return "/";
  };

  return (
    <Section spacing="relaxed" className="border-t border-border/30 bg-muted/10">
      <Container>
        <Reveal>
          <p className="text-overline text-muted-foreground mb-3">Section 04</p>
          <h2
            className="font-serif font-semibold tracking-[-0.02em] text-foreground mb-12"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {progress.length > 0 ? "Continue learning" : "Recommended starting points"}
          </h2>
        </Reveal>

        {loading ? (
          <p className="text-body-sm text-muted-foreground">Loading…</p>
        ) : progress.length > 0 ? (
          <div className="space-y-px">
            {progress.map((p, i) => (
              <Reveal key={p.slug + p.type} delay={i * 0.05}>
                <Link
                  href={hrefForType(p.type, p.slug)}
                  className="group flex items-center gap-6 py-4 border-b border-border/15 last:border-0 transition-all hover:pl-2"
                >
                  <span className="font-mono text-xs text-muted-foreground/30 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/50 mt-0.5">
                      {p.type} · {timeAgo(p.lastVisitedAt)}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Honest empty state — no fabricated progress */
          <div className="space-y-px">
            {[
              { label: "Sertraline", description: "The reference SSRI — start here for the full 6-lesson course.", href: "/drugs/sertraline", meta: "Medication" },
              { label: "Major Depressive Disorder", description: "Understand the clinical condition that SSRIs treat.", href: "/diseases/major-depressive-disorder", meta: "Disease" },
              { label: "Alcohol", description: "GABA, glutamate, and the neuroscience of withdrawal.", href: "/substances/alcohol", meta: "Substance" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-6 py-4 border-b border-border/15 last:border-0 transition-all hover:pl-2"
                >
                  <span className="font-mono text-xs text-muted-foreground/30 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted-foreground/50 mt-0.5">
                      {item.meta} · {item.description}
                    </p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/20 transition-all group-hover:text-brand group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

function timeAgo(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return date.toLocaleDateString();
}
