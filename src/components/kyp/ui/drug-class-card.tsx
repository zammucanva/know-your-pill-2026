"use client";

import { motion } from "framer-motion";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import type { Category } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * DrugClassCard — a clinical category entry (Mood, Psychosis, Stability, Anxiety, Sleep).
 * Not to be confused with MedicationCard (which links to a class page) —
 * this is a higher-level clinical-area card on the homepage.
 */
interface DrugClassCardProps {
  category: Category;
  index?: number;
  href?: string;
  className?: string;
}

export function DrugClassCard({ category, index = 0, href = "#library", className }: DrugClassCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className={cn("h-full", className)}
    >
      <CardPrimitive href={href} variant="flat" interactive className="h-full">
        {/* Gradient backdrop */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
            category.accent
          )}
        />

        <CardBody className="relative">
          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-background/70 backdrop-blur text-brand-ink">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="font-mono text-xs font-semibold text-muted-foreground">
              {category.index}
            </span>
          </div>

          <h3 className="relative mt-4 text-h3 leading-tight">{category.title}</h3>
          <p className="relative mt-2 text-body-sm text-muted-foreground leading-relaxed">
            {category.description}
          </p>

          <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100">
            Explore
            <span aria-hidden>→</span>
          </span>
        </CardBody>
      </CardPrimitive>
    </motion.div>
  );
}
