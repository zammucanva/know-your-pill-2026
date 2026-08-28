"use client";

import { motion } from "framer-motion";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Category } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

// Neurotransmitter color mapping — keyed to the clinical category's primary system
const categoryAccent: Record<string, { border: string; bg: string; icon: string }> = {
  mood: { border: "border-l-brand", bg: "bg-brand-soft/30", icon: "text-brand" },
  psychosis: { border: "border-l-purple-500", bg: "bg-purple-500/10", icon: "text-purple-500" },
  stability: { border: "border-l-amber-500", bg: "bg-amber-500/10", icon: "text-amber-500" },
  anxiety: { border: "border-l-emerald-500", bg: "bg-emerald-500/10", icon: "text-emerald-500" },
  sleep: { border: "border-l-blue-500", bg: "bg-blue-500/10", icon: "text-blue-500" },
};

const defaultAccent = { border: "border-l-brand", bg: "bg-brand-soft/30", icon: "text-brand" };

interface DrugClassCardProps {
  category: Category;
  index?: number;
  href?: string;
  className?: string;
}

export function DrugClassCard({ category, index = 0, href = "#library", className }: DrugClassCardProps) {
  const Icon = category.icon;
  const accent = categoryAccent[category.id] ?? defaultAccent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className={cn("h-full", className)}
    >
      <CardPrimitive href={href} variant="flat" interactive className={cn("h-full border-l-4", accent.border)}>
        {/* Subtle tinted backdrop */}
        <div className={cn("pointer-events-none absolute inset-0 opacity-50", accent.bg)} />

        <CardBody className="relative">
          <div className="flex items-start justify-between">
            <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/70 backdrop-blur", accent.icon)}>
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="font-mono text-xs font-semibold text-muted-foreground">
              {category.index}
            </span>
          </div>

          <h3 className="relative mt-4 font-serif text-h3 leading-tight">{category.title}</h3>
          <p className="relative mt-2 text-body-sm text-muted-foreground leading-relaxed">
            {category.description}
          </p>

          {/* Hover preview: show drug names from category if available */}
          {category.chips && category.chips.length > 0 && (
            <div className="relative mt-3 flex flex-wrap gap-1.5 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20">
              {category.chips.slice(0, 3).map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border/50 bg-background/60 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          <span className="relative mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Explore
            <span aria-hidden>→</span>
          </span>
        </CardBody>
      </CardPrimitive>
    </motion.div>
  );
}
