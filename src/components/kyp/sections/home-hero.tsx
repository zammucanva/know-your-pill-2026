"use client";

import * as React from "react";
import Image from "next/image";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroSection } from "@/components/kyp/ui/hero-section";
import { Badge } from "@/components/kyp/ui/badge";

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
      lede="Visual medicine guides with mechanism animations, timelines, side-effect clarity, and safety direction — helping patients, caregivers, and MBBS students understand their pills with confidence."
      visual={<BrainGraphic />}
    >
      {/* AI search card */}
      <div className="kyp-hero-glow rounded-2xl">
        <div className="kyp-glass rounded-2xl p-5 shadow-[var(--shadow-glow)]">
          <div className="flex items-center gap-2 text-overline text-brand-ink">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Medicine Search
          </div>
          <p className="mt-2 text-body-sm text-muted-foreground">
            Search a medication, then explore how it works in the brain, what to expect, and how to
            stay safe.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) {
                // Try the canonical drug page first; fall back to the legacy HTML
                // if no Next.js page exists for this query yet.
                const q = query.trim().toLowerCase();
                const knownDrugs = ["sertraline", "zoloft"];
                if (knownDrugs.includes(q)) {
                  window.location.href = `/drugs/sertraline`;
                } else {
                  window.location.href = `/medicine.html?med=${encodeURIComponent(query.trim())}`;
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
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src="/artwork/hero-brain.png"
          alt="Anatomical visualization of the brain with cerebral arteries, neural activity, and integrated medications — representing KYP's visual medicine approach"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay to blend with page */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30" />
      </div>
    </div>
  );
}
