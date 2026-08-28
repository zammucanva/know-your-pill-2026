"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/kyp/ui/badge";
import { OrganicGradient } from "@/components/kyp/ui/organic-gradient";
import { Reveal } from "@/components/kyp/ui/reveal";
import { useMagnetic } from "@/lib/hooks/use-magnetic";
import { cn } from "@/lib/utils";

const popularSearches = ["Sertraline", "Fluoxetine", "Escitalopram", "Olanzapine"];

export function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const magnetic = useMagnetic(0.25);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Signature organic gradient — static, multi-color */}
      <OrganicGradient variant="hero" responsive />

      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-20" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-center">
          {/* Left: editorial typography + search */}
          <div>
            {/* Eyebrow */}
            <Reveal>
              <div className="flex items-center gap-2 text-overline text-brand-ink">
                <Sparkles className="h-3 w-3" />
                Medication education made visual
              </div>
            </Reveal>

            {/* Hero headline — dramatically larger */}
            <Reveal delay={0.08}>
              <h1
                className="mt-5 font-serif font-semibold tracking-tight text-foreground leading-[1.02]"
                style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)" }}
              >
                Know what your pill does{" "}
                <span className="kyp-text-gradient">before fear fills the gap.</span>
              </h1>
            </Reveal>

            {/* Lede */}
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-body-lg text-muted-foreground leading-relaxed">
                Guides that walk you through how a medication works in the brain, what side effects to expect, when it starts working, and what to do in an emergency. Built for patients, caregivers, and medical students.
              </p>
            </Reveal>

            {/* Search card */}
            <Reveal delay={0.24}>
              <div className="mt-8 max-w-lg">
                <div className="flex items-center gap-2 text-overline text-brand-ink">
                  <Sparkles className="h-3.5 w-3.5" />
                  Search a medication
                </div>
                <p className="mt-2 text-body-sm text-muted-foreground">
                  Type a drug name to see its mechanism, side effects, timeline, and safety guidance.
                </p>
                <form
                  className="mt-4 flex gap-2"
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
                      className="h-12 rounded-xl border-border/70 bg-background/80 pl-9 pr-3 text-body-sm"
                    />
                  </div>
                  {/* Magnetic CTA button */}
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
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-muted-foreground">Popular:</span>
                  {popularSearches.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setQuery(s)}
                      className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-brand/50 hover:bg-brand-soft/40"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Feature chips */}
            <Reveal delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Mechanisms", "Clinical", "Side Effects", "Safety"].map((chip) => (
                  <Badge key={chip} variant="outline" size="md">{chip}</Badge>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: brain graphic */}
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
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {/* Outer glow — organic, static */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/25 via-neural/15 to-emergency/10 blur-3xl" />

      {/* Decorative ring */}
      <div className="absolute inset-6 rounded-full border border-dashed border-brand/20" />

      {/* Inner circle */}
      <div className="absolute inset-12 rounded-full bg-card/60 backdrop-blur-2xl border border-brand/15 shadow-[var(--shadow-lift)] flex items-center justify-center">
        <div className="text-center">
          <Brain className="mx-auto h-20 w-20 text-brand" strokeWidth={1.2} />
          <p className="mt-3 font-serif text-h3">Neuroscience Visualised</p>
          <p className="mt-1 text-caption text-muted-foreground">Mechanism · Pathways · Receptors</p>
        </div>
      </div>

      {/* Neurotransmitter nodes — hoverable + clickable */}
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
            onClick={() => {
              document.querySelector(node.target)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={cn(
              "flex items-center gap-1.5 rounded-full border bg-card/90 backdrop-blur px-2.5 py-1 shadow-[var(--shadow-soft)] transition-all duration-200",
              hovered === node.label
                ? "border-brand scale-110 shadow-[var(--shadow-glow)] cursor-pointer"
                : "border-border/80 hover:border-brand/40"
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
