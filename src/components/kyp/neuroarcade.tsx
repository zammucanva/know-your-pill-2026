"use client";

import { motion } from "framer-motion";
import { Gamepad2, Brain, Trophy, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Neural Tracker",
    description:
      "Trace a neurotransmitter from synthesis to receptor binding — against the clock.",
  },
  {
    icon: Trophy,
    title: "Streak Mode",
    description: "Chain correct answers across mechanism, side effect, and safety rounds.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Every answer comes with a one-line neuroscience explainer.",
  },
];

export function NeuroArcade() {
  return (
    <section id="neuroarcade" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neural/20 bg-gradient-to-br from-card via-card to-neural-soft/40 p-8 sm:p-12">
          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 kyp-grid-bg opacity-40" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-neural/20 blur-3xl kyp-drift" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-neural/30 bg-neural-soft/60 px-3 py-1 text-xs font-medium text-neural">
                <Gamepad2 className="h-3 w-3" />
                NeuroArcade
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Learn neuroscience by{" "}
                <span className="kyp-text-gradient">playing it.</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                A growing suite of mini-games that turn psychopharmacology into a hands-on
                experience — built for MBBS students preparing for exams and curious patients who
                want to actually remember what their medication does.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-xl">
                  Launch NeuroArcade
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl">
                  View Leaderboard
                </Button>
              </div>
            </div>

            {/* Right: feature list */}
            <div className="grid gap-3 sm:grid-cols-1">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/80 backdrop-blur p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neural-soft/60 text-neural">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-semibold">{f.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{f.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
