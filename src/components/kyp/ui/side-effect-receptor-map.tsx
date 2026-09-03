"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { DrugSideEffectEntry } from "@/lib/kyp/data";

/**
 * SideEffectReceptorMap — visual map linking side effects to their receptors.
 *
 * For each side effect, shows:
 *   - The side effect name
 *   - The receptor responsible (as a pulsing node)
 *   - Frequency + severity badges
 *
 * This makes the receptor-side effect relationship visual rather than
 * buried in text.
 *
 * Client Component — uses framer-motion for staggered entrance.
 */
interface SideEffectReceptorMapProps {
  sideEffects: DrugSideEffectEntry[];
  title?: string;
}

const severityColor = {
  mild: "bg-warning/20 text-warning border-warning/30",
  moderate: "bg-warning/30 text-warning border-warning/40",
  severe: "bg-emergency/20 text-emergency border-emergency/30",
  "life-threatening": "bg-emergency/30 text-emergency border-emergency/40",
};

const frequencyLabel = {
  "very-common": "Very common",
  "common": "Common",
  "uncommon": "Uncommon",
  "rare": "Rare",
  "unknown": "Unknown",
};

export function SideEffectReceptorMap({
  sideEffects,
  title = "Side effect → Receptor map",
}: SideEffectReceptorMapProps) {
  return (
    <div>
      <p className="text-overline text-muted-foreground mb-4">{title}</p>
      <div className="space-y-2">
        {sideEffects.map((se, i) => (
          <motion.div
            key={se.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.4) }}
            className="flex flex-wrap items-center gap-3 rounded-xl border border-border/70 bg-card p-3"
          >
            {/* Receptor node (left) */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-md bg-neural opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-neural" />
              </span>
              <span className="text-xs font-mono font-semibold text-neural">5-HT</span>
            </div>

            {/* Arrow */}
            <span className="text-muted-foreground text-sm">→</span>

            {/* Side effect name */}
            <span className="flex-1 text-body-sm font-medium text-foreground">{se.name}</span>

            {/* Badges */}
            <span
              className={cn(
                "rounded-md border px-2 py-0.5 text-[0.6rem] font-semibold uppercase",
                severityColor[se.severity]
              )}
            >
              {se.severity.replace("-", " ")}
            </span>
            <span className="rounded-md bg-muted px-2 py-0.5 text-[0.6rem] font-medium text-muted-foreground">
              {frequencyLabel[se.frequency]}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
