"use client";

import * as React from "react";
import { Search, ArrowRight, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroSection } from "@/components/kyp/ui/hero-section";
import { Badge } from "@/components/kyp/ui/badge";
import { cn } from "@/lib/utils";

const popularSearches = ["Sertraline", "Fluoxetine", "Escitalopram", "Olanzapine"];

export function HomeHero() {
  const [query, setQuery] = React.useState("");

  return (
    <HeroSection
      id="top"
      variant="split"
      eyebrow={
        <>
          <Sparkles className="h-3 w-3" />
          Medication education made visual
        </>
      }
      title={
        <>
          Know what your pill does <br className="hidden sm:block" />
          <span className="kyp-text-gradient">before fear fills the gap.</span>
        </>
      }
      lede="Guides that walk you through how a medication works in the brain, what side effects to expect, when it starts working, and what to do in an emergency. Built for patients, caregivers, and medical students."
      visual={<BrainGraphic />}
    >
      {/* AI search card */}
      <div className="kyp-hero-glow rounded-2xl">
        <div className="kyp-glass rounded-2xl p-5 shadow-[var(--shadow-glow)]">
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
                  window.location.href = `/drugs/${q}`;
                } else if (q === "alcohol" || q === "opioids" || q === "cannabis") {
                  window.location.href = `/substances/${q}`;
                } else if (q === "depression" || q === "mdd" || q.includes("depressive")) {
                  window.location.href = `/diseases/major-depressive-disorder`;
                } else {
                  // Trigger universal search via keyboard event
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
                className="h-11 rounded-xl border-border/70 bg-background/80 pl-9 pr-3 text-body-sm"
              />
            </div>
            <Button type="submit" size="lg" className="h-11 rounded-xl px-5">
              View
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
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
      </div>

      {/* Feature chips */}
      <div className="mt-8 flex flex-wrap gap-2">
        {["Mechanisms", "Clinical", "Side Effects", "Safety"].map((chip) => (
          <Badge key={chip} variant="outline" size="md">{chip}</Badge>
        ))}
      </div>
    </HeroSection>
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
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/30 via-neural/20 to-emergency/15 blur-2xl" />

      {/* Rotating ring */}
      <div
        className="absolute inset-6 rounded-full border border-dashed border-brand/30"
        style={{ animation: "kyp-spin 24s linear infinite" }}
      />

      {/* Inner card */}
      <div className="absolute inset-12 rounded-full bg-card/80 backdrop-blur-xl border border-brand/20 shadow-[var(--shadow-lift)] flex items-center justify-center">
        <div className="text-center">
          <Brain className="mx-auto h-20 w-20 text-brand" strokeWidth={1.2} />
          <p className="mt-3 text-h3">Neuroscience Visualised</p>
          <p className="mt-1 text-caption text-muted-foreground">Mechanism · Pathways · Receptors</p>
        </div>
      </div>

      {/* Floating neurotransmitter nodes — hoverable + clickable */}
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
