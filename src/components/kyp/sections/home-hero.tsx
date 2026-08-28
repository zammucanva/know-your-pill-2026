"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/kyp/ui/badge";
import { Reveal } from "@/components/kyp/ui/reveal";
import { useMagnetic } from "@/lib/hooks/use-magnetic";
import { cn } from "@/lib/utils";

const popularSearches = ["Sertraline", "Fluoxetine", "Escitalopram", "Olanzapine"];

export function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const magnetic = useMagnetic(0.25);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col justify-end pb-12 sm:pb-16">
      {/* Organic visual — full-bleed, positioned behind everything */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Primary organic shape — top-right, teal */}
        <div
          className="absolute -right-[10%] -top-[5%] h-[70vh] w-[70vh] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.11 195), transparent 70%)" }}
        />
        {/* Secondary shape — left-center, violet */}
        <div
          className="absolute -left-[15%] top-[30%] h-[50vh] w-[50vh] rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.16 280), transparent 70%)" }}
        />
        {/* Tertiary shape — bottom-right, warm */}
        <div
          className="absolute right-[20%] bottom-[5%] h-[35vh] w-[35vh] rounded-full opacity-[0.05] blur-[80px]"
          style={{ background: "radial-gradient(circle, oklch(0.6 0.22 25), transparent 70%)" }}
        />
      </div>

      {/* Content — asymmetric, bottom-aligned */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          {/* Left: headline + search */}
          <div>
            {/* Eyebrow */}
            <Reveal>
              <div className="flex items-center gap-2 text-overline text-brand-ink mb-6">
                <Sparkles className="h-3 w-3" />
                Medication education made visual
              </div>
            </Reveal>

            {/* Massive headline */}
            <Reveal delay={0.08}>
              <h1
                className="font-serif font-semibold tracking-[-0.035em] text-foreground leading-[0.98]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                Know what your pill does{" "}
                <span className="kyp-text-gradient">before fear fills the gap.</span>
              </h1>
            </Reveal>

            {/* Supporting copy */}
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base sm:text-body-lg text-muted-foreground leading-relaxed">
                Guides that walk you through how a medication works in the brain, what side effects to expect, when it starts working, and what to do in an emergency. Built for patients, caregivers, and medical students.
              </p>
            </Reveal>

            {/* Search */}
            <Reveal delay={0.24}>
              <div className="mt-8 max-w-lg">
                <div className="flex items-center gap-2 text-overline text-brand-ink">
                  <Sparkles className="h-3.5 w-3.5" />
                  Search a medication
                </div>
                <form
                  className="mt-3 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (query.trim()) {
                      const q = query.trim().toLowerCase();
                      const knownDrugs = ["sertraline", "zoloft", "fluoxetine", "escitalopram", "paroxetine", "citalopram", "fluvoxamine", "venlafaxine", "duloxetine", "bupropion", "mirtazapine", "amitriptyline", "clomipramine"];
                      if (knownDrugs.includes(q)) {
                        router.push(`/drugs/${q}`);
                      } else if (q === "alcohol" || q === "opioids" || q === "cannabis") {
                        router.push(`/substances/${q}`);
                      } else if (q === "depression" || q === "mdd" || q.includes("depressive")) {
                        router.push(`/diseases/major-depressive-disorder`);
                      } else {
                        window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                      }
                    }
                  }}
                >
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      type="search"
                      placeholder="Try sertraline, fluoxetine, escitalopram…"
                      className="h-12 rounded-xl border-border/50 bg-background/60 backdrop-blur-sm pl-9 pr-3 text-body-sm"
                    />
                  </div>
                  <div
                    ref={magnetic.ref as React.RefObject<HTMLDivElement>}
                    {...magnetic.handlers}
                    style={{
                      transform: `translate(${magnetic.offset.x}px, ${magnetic.offset.y}px)`,
                      transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <Button type="submit" size="lg" className="h-12 rounded-xl px-6 shadow-[var(--shadow-lift)]">
                      View
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </div>
                </form>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground">Popular:</span>
                  {popularSearches.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setQuery(s)}
                      className="rounded-full border border-border/40 bg-transparent px-3 py-1 text-xs font-medium text-foreground/60 transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Feature chips */}
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Mechanisms", "Clinical", "Side Effects", "Safety"].map((chip) => (
                  <Badge key={chip} variant="outline" size="md">{chip}</Badge>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: brain graphic — desktop only, positioned to break grid */}
          <Reveal delay={0.2} className="hidden lg:block">
            <BrainGraphic />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BrainGraphic() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  const nodes = [
    { top: "8%", left: "50%", label: "Serotonin", color: "bg-brand", target: "#library" },
    { top: "30%", left: "10%", label: "Dopamine", color: "bg-neural", target: "#library" },
    { top: "70%", left: "5%", label: "GABA", color: "bg-emergency", target: "#substances" },
    { top: "85%", left: "45%", label: "Glutamate", color: "bg-amber-500", target: "#substances" },
    { top: "70%", left: "85%", label: "Norepinephrine", color: "bg-cyan-500", target: "#library" },
    { top: "30%", left: "88%", label: "Acetylcholine", color: "bg-emerald-500", target: "#substances" },
  ];

  return (
    <div className="relative aspect-square w-full max-w-sm">
      {/* Outer glow — very subtle */}
      <div className="absolute inset-0 rounded-full opacity-[0.15] blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.55 0.11 195), transparent 60%)" }} />

      {/* Ring */}
      <div className="absolute inset-8 rounded-full border border-dashed border-brand/15" />

      {/* Inner circle */}
      <div className="absolute inset-16 rounded-full bg-card/30 backdrop-blur-2xl border border-brand/10 flex items-center justify-center">
        <div className="text-center">
          <Brain className="mx-auto h-16 w-16 text-brand/70" strokeWidth={1} />
          <p className="mt-2 font-serif text-sm text-muted-foreground">Neuroscience</p>
        </div>
      </div>

      {/* Neurotransmitter nodes */}
      {nodes.map((node, i) => (
        <div
          key={node.label}
          className="absolute kyp-float"
          style={{ top: node.top, left: node.left, animationDelay: `${i * 0.8}s` }}
        >
          <button
            type="button"
            onMouseEnter={() => setHovered(node.label)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => document.querySelector(node.target)?.scrollIntoView({ behavior: "smooth" })}
            className={cn(
              "flex items-center gap-1.5 rounded-full border bg-card/80 backdrop-blur px-2.5 py-1 shadow-[var(--shadow-soft)] transition-all duration-200",
              hovered === node.label ? "border-brand scale-110" : "border-border/40 hover:border-brand/30"
            )}
            aria-label={`Explore ${node.label} related content`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${node.color}`} />
            <span className="text-[0.7rem] font-medium">{node.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
