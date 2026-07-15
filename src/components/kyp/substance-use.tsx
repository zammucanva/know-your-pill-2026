"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { substances, type Substance } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All Substances" },
  { id: "Depressant", label: "Depressants" },
  { id: "Stimulant", label: "Stimulants" },
  { id: "Hallucinogen", label: "Hallucinogens" },
  { id: "Opioid", label: "Opioids" },
  { id: "Cannabinoid", label: "Cannabinoids" },
  { id: "Dissociative", label: "Dissociatives" },
];

export function SubstanceUse() {
  const [active, setActive] = React.useState("all");

  const filtered = React.useMemo(() => {
    if (active === "all") return substances;
    if (active === "Dissociative" || active === "Hallucinogen") {
      return substances.filter(
        (s) =>
          s.drugClass.toLowerCase().includes(active.toLowerCase()) ||
          s.id === "withdrawal" // always show the clinical pattern
      );
    }
    return substances.filter((s) =>
      s.drugClass.toLowerCase().includes(active.toLowerCase())
    );
  }, [active]);

  return (
    <section id="substances" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neural">
              Substance Use Education
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Psychoactive Substances, Visualised
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Twelve deep-dive modules covering how each substance alters brain chemistry — from
              receptor-level mechanisms to withdrawal, complications, and emergency warning signs.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto kyp-scroll pb-1 lg:pb-0">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  active === f.id
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border/80 bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((sub, i) => (
            <SubstanceCard key={sub.id} sub={sub} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-muted/30 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Clinical modules:</span>{" "}
            <a href="/acute-intoxication.html" className="text-brand underline-offset-4 hover:underline">
              Acute Intoxication
            </a>{" "}
            ·{" "}
            <a href="/withdrawal-state.html" className="text-brand underline-offset-4 hover:underline">
              Withdrawal State
            </a>{" "}
            — ICD-10 aligned neuroscience explainers
          </p>
        </div>
      </div>
    </section>
  );
}

function SubstanceCard({ sub, index }: { sub: Substance; index: number }) {
  const Icon = sub.icon;
  return (
    <motion.a
      href={sub.href}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/60",
            sub.accent
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-muted-foreground transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </div>

      <div className="mt-4">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {sub.drugClass}
        </span>
        <h3 className="mt-1 font-serif text-lg font-semibold leading-tight">{sub.name}</h3>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {sub.description}
      </p>

      <div className="mt-4 border-t border-border/60 pt-3">
        <p className="text-[0.7rem] uppercase tracking-wide text-muted-foreground">
          Neurotransmitter
        </p>
        <p className={cn("mt-0.5 text-xs font-medium", sub.accent)}>{sub.neurotransmitter}</p>
      </div>
    </motion.a>
  );
}
