"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularSearches = ["Sertraline", "Fluoxetine", "Escitalopram", "Olanzapine"];

export function Hero() {
  const [query, setQuery] = React.useState("");

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl kyp-drift" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-neural/20 blur-3xl kyp-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emergency/10 blur-3xl kyp-drift"
        style={{ animationDelay: "-14s" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft/60 px-3 py-1 text-xs font-medium text-brand-ink">
              <Sparkles className="h-3 w-3" />
              Medication education made visual
            </span>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Know what your pill does <br className="hidden sm:block" />
              <span className="kyp-text-gradient">before fear fills the gap.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Visual medicine guides with mechanism animations, timelines, side-effect clarity, and
              safety direction — helping patients, caregivers, and MBBS students understand their
              pills with confidence.
            </p>

            {/* Search card */}
            <div className="kyp-hero-glow mt-8 rounded-2xl">
              <div className="kyp-glass rounded-2xl p-5 shadow-xl shadow-brand/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI-Powered Medicine Search
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Search a medication, then explore how it works in the brain, what to expect, and
                  how to stay safe.
                </p>
                <form
                  className="mt-4 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (query.trim()) {
                      window.location.href = '/drugs/sertraline';
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
                      className="h-11 rounded-xl border-border/70 bg-background/80 pl-9 pr-3 text-sm"
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
                <span
                  key={chip}
                  className="rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Brain graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <BrainGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrainGraphic() {
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
      <div className="absolute inset-12 rounded-full bg-card/80 backdrop-blur-xl border border-brand/20 shadow-2xl shadow-brand/20 flex items-center justify-center">
        <div className="text-center">
          <Brain className="mx-auto h-20 w-20 text-brand" strokeWidth={1.2} />
          <p className="mt-3 font-serif text-lg font-semibold">Neuroscience Visualised</p>
          <p className="mt-1 text-xs text-muted-foreground">Mechanism · Pathways · Receptors</p>
        </div>
      </div>

      {/* Floating nodes */}
      {[
        { top: "8%", left: "50%", label: "Serotonin", color: "bg-brand" },
        { top: "30%", left: "10%", label: "Dopamine", color: "bg-neural" },
        { top: "70%", left: "5%", label: "GABA", color: "bg-emergency" },
        { top: "85%", left: "45%", label: "Glutamate", color: "bg-amber-500" },
        { top: "70%", left: "85%", label: "Norepinephrine", color: "bg-cyan-500" },
        { top: "30%", left: "88%", label: "Acetylcholine", color: "bg-emerald-500" },
      ].map((node, i) => (
        <div
          key={node.label}
          className="absolute kyp-float"
          style={{
            top: node.top,
            left: node.left,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          <div className="flex items-center gap-1.5 rounded-full border border-border/80 bg-card/90 backdrop-blur px-2.5 py-1 shadow-sm">
            <span className={`h-1.5 w-1.5 rounded-full ${node.color}`} />
            <span className="text-[0.7rem] font-medium">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
