"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { medicationClasses } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

export function MedicationLibrary() {
  return (
    <section id="library" className="relative py-20 sm:py-24">
      {/* Soft backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-soft/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Medication Library
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore Medications
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Browse medications by class and understand how different treatments affect the brain and
            body through simplified explanations and visual guidance.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {medicationClasses.map((med, i) => {
            const Icon = med.icon;
            return (
              <motion.a
                key={med.id}
                href={med.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300",
                  med.featured
                    ? "border-brand/30 shadow-lg shadow-brand/5 hover:shadow-xl hover:shadow-brand/10"
                    : "border-border/70 hover:border-brand/40 hover:shadow-md",
                  "hover:-translate-y-0.5"
                )}
              >
                {/* Decorative glow on featured cards */}
                {med.featured && (
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
                )}

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl border",
                        med.featured
                          ? "bg-brand text-primary-foreground border-brand"
                          : "bg-brand-soft/60 text-brand-ink border-brand/20"
                      )}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-muted-foreground">
                          {med.number}
                        </span>
                        {med.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft/60 px-2 py-0.5 text-[0.65rem] font-semibold text-brand-ink">
                            <Sparkles className="h-2.5 w-2.5" />
                            Featured
                          </span>
                        )}
                        {med.comingSoon && (
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-semibold text-muted-foreground">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-serif text-xl font-semibold leading-tight">
                        {med.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                  {med.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {med.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
