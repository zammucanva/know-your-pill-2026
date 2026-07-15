"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

export function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Browse by category
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore Brain Pathways & Treatments
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Each category maps a clinical area to its underlying neurotransmitter system — pick a
            pathway to start learning.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.id}
                href="#library"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300",
                  "hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-0.5"
                )}
              >
                {/* Gradient backdrop */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
                    cat.accent
                  )}
                />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/70 backdrop-blur border border-border/70 text-brand-ink">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    {cat.index}
                  </span>
                </div>

                <h3 className="relative mt-4 font-serif text-lg font-semibold leading-tight">
                  {cat.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>

                <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  Explore
                  <span aria-hidden>→</span>
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
