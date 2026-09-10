"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/kyp/ui/reveal";
import { drugs, substancePages, diseases } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * Search plumbing is derived from the canonical registries so the homepage can
 * never drift from the shipped content (SEC/data-integrity follow-up).
 * `zoloft` is preserved as a legacy brand alias mapped to its canonical slug.
 */
const drugSlugs = drugs.map((d) => d.slug);
const substanceSlugs = substancePages.map((s) => s.slug);
const diseaseSlugs = diseases.map((d) => d.slug);
const brandAliases: Record<string, string> = { zoloft: "sertraline" };

const popularSearches = drugs.slice(0, 4).map((d) => d.genericName);

/** Hero overline — duplicated into data-text for the CSS-only shine overlay. */
const HERO_OVERLINE = "Medication education made visual";

export function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const resolveSlug = (q: string): string | undefined =>
    drugSlugs.includes(q) ? q : brandAliases[q];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden flex flex-col justify-center py-24 sm:py-28"
    >
      {/* Organic shapes — two overlapping synaptic forms, not three generic blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Primary: teal, upper right — the dominant neurotransmitter color */}
        <div
          className="absolute right-[0%] top-[5%] h-[55vh] w-[55vh] rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.11 195), transparent 65%)" }}
        />
        {/* Secondary: warm violet, lower left — overlapping, suggesting synaptic crosstalk */}
        <div
          className="absolute left-[5%] bottom-[15%] h-[40vh] w-[40vh] rounded-full opacity-[0.06] blur-[90px]"
          style={{ background: "radial-gradient(circle, oklch(0.58 0.15 290), transparent 65%)" }}
        />
      </div>

      {/* Content — editorial grid: text column + neuroscience motif column */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-overline text-brand-ink mb-5">
                <Sparkles className="h-3 w-3" />
                <span className="kyp-shine" data-text={HERO_OVERLINE}>
                  {HERO_OVERLINE}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                className="font-serif font-semibold tracking-[-0.04em] text-foreground leading-[1.02]"
                style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)" }}
              >
                Know what your pill does
                <span className="kyp-text-gradient block">before fear fills the gap.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Guides that walk you through how a medication works in the brain, what side effects to expect, when it starts working, and what to do in an emergency. Built for patients, caregivers, and medical students.
              </p>
            </Reveal>

            {/* Search — underline style, not a box; reads as one interaction */}
            <Reveal delay={0.24}>
              <div className="mt-8 sm:mt-10 max-w-lg">
                <form
                  role="search"
                  aria-label="Search medications"
                  className="flex items-center gap-3 border-b border-border/60 pb-2 transition-colors duration-200 focus-within:border-brand/70"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (query.trim()) {
                      const q = query.trim().toLowerCase();
                      const drugSlug = resolveSlug(q);
                      if (drugSlug) router.push(`/drugs/${drugSlug}`);
                      else if (substanceSlugs.includes(q)) router.push(`/substances/${q}`);
                      else if (q === "depression" || q === "mdd" || q.includes("depressive"))
                        router.push(`/diseases/${diseaseSlugs[0]}`);
                      else
                        window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                    }
                  }}
                >
                  <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="search"
                    placeholder="Search a medication — sertraline, fluoxetine…"
                    className="min-w-0 flex-1 bg-transparent text-body-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
                    aria-label="Search medications"
                  />
                  <Button type="submit" size="sm" className="shrink-0 rounded-lg px-4">
                    Search
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </form>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-xs text-muted-foreground/50">Popular:</span>
                  {popularSearches.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setQuery(s)}
                      className="kyp-focus-ring rounded-sm px-1 py-0.5 text-xs text-foreground/50 underline-offset-4 hover:text-brand hover:underline transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted-foreground/50">
                {["Mechanisms", "Clinical", "Side Effects", "Safety"].map((chip, i) => (
                  <span key={chip} className="flex items-center gap-4">
                    {chip}
                    {i < 3 && <span className="text-muted-foreground/20">/</span>}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Neuroscience motif — inside the grid, vertically aligned with the copy */}
          <div className="hidden lg:flex items-center justify-center pointer-events-none py-8">
            <NeuroNodes />
          </div>
        </div>
      </div>
    </section>
  );
}

function NeuroNodes() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  const nodes = [
    { x: 0, y: 0, label: "Serotonin", color: "oklch(0.55 0.11 195)", target: "#library" },
    { x: -80, y: -60, label: "Dopamine", color: "oklch(0.62 0.16 280)", target: "#library" },
    { x: 60, y: -100, label: "GABA", color: "oklch(0.6 0.22 25)", target: "#substances" },
    { x: 100, y: 40, label: "Glutamate", color: "oklch(0.7 0.18 60)", target: "#substances" },
    { x: -40, y: 80, label: "Norepinephrine", color: "oklch(0.62 0.13 220)", target: "#library" },
    { x: -120, y: 20, label: "Acetylcholine", color: "oklch(0.62 0.13 155)", target: "#substances" },
  ];

  return (
    <div className="relative h-[300px] w-[300px]">
      {/* Connecting lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="-150 -150 300 300" aria-hidden>
        {nodes.map((node) => (
          <line
            key={node.label}
            x1="0"
            y1="0"
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth="0.75"
            className={cn(
              "transition-opacity duration-300",
              hovered === null || hovered === node.label ? "opacity-35" : "opacity-10"
            )}
          />
        ))}
      </svg>

      {/* Center anchor — a small labeled nucleus, not just a dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-1">
          <div className="h-3.5 w-3.5 rounded-full bg-brand/50 ring-4 ring-brand/15" />
          <span className="text-[0.55rem] uppercase tracking-wider text-muted-foreground/50">Synapse</span>
        </div>
      </div>

      {/* Nodes */}
      {nodes.map((node) => (
        <button
          key={node.label}
          type="button"
          onMouseEnter={() => setHovered(node.label)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => document.querySelector(node.target)?.scrollIntoView({ behavior: "smooth" })}
          className={cn(
            "kyp-focus-ring pointer-events-auto absolute flex items-center gap-1.5 rounded-full bg-card/80 backdrop-blur px-2 py-0.5 transition-all duration-200",
            hovered === node.label ? "scale-110 shadow-[var(--shadow-soft)]" : "scale-100"
          )}
          style={{
            left: `calc(50% + ${node.x}px)`,
            top: `calc(50% + ${node.y}px)`,
            transform: "translate(-50%, -50%)",
          }}
          aria-label={`Explore ${node.label} related content`}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: node.color }} />
          <span className={cn(
            "text-[0.7rem] font-medium transition-colors",
            hovered === node.label ? "text-foreground" : "text-foreground/70"
          )}>
            {node.label}
          </span>
        </button>
      ))}
    </div>
  );
}
