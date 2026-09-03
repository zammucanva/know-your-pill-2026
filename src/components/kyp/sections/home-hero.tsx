"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/kyp/ui/reveal";

const popularSearches = ["Sertraline", "Fluoxetine", "Escitalopram", "Olanzapine"];

export function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col justify-end pb-16 sm:pb-20">
      {/* No decorative orbs — the hero's job is orientation (audit §19). */}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-overline text-brand-ink mb-6">
            <Sparkles className="h-3 w-3" />
            Medication education made visual
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            className="font-serif font-semibold tracking-[-0.04em] text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
          >
            Know what your pill does{" "}
            <span className="text-brand">before fear fills the gap.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Guides that walk you through how a medication works in the brain, what side effects to expect, when it starts working, and what to do in an emergency. Built for patients, caregivers, and medical students.
          </p>
        </Reveal>

        {/* Search — underline style, not a box */}
        <Reveal delay={0.24}>
          <div className="mt-10 max-w-lg">
            <form
              className="flex items-center gap-3 border-b border-border/40 pb-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (query.trim()) {
                  const q = query.trim().toLowerCase();
                  const knownDrugs = ["sertraline", "zoloft", "fluoxetine", "escitalopram", "paroxetine", "citalopram", "fluvoxamine", "venlafaxine", "duloxetine", "bupropion", "mirtazapine", "amitriptyline", "clomipramine"];
                  if (knownDrugs.includes(q)) router.push(`/drugs/${q}`);
                  else if (q === "alcohol" || q === "opioids" || q === "cannabis") router.push(`/substances/${q}`);
                  else if (q === "depression" || q === "mdd" || q.includes("depressive")) router.push(`/diseases/major-depressive-disorder`);
                  else window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                }
              }}
            >
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search a medication — sertraline, fluoxetine…"
                className="flex-1 bg-transparent text-body-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
                aria-label="Search medications"
              />
              <Button type="submit" size="sm" className="rounded-lg px-4">
                View
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
                  className="text-xs text-foreground/50 underline-offset-4 hover:text-brand hover:underline transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted-foreground/50">
            {["Mechanisms", "Clinical", "Side Effects", "Safety"].map((chip, i) => (
              <span key={chip} className="flex items-center gap-4">
                {chip}
                {i < 3 && <span className="text-muted-foreground/20">/</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
