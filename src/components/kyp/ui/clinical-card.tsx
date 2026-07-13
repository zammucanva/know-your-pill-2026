"use client";

import { motion } from "framer-motion";
import { CardPrimitive, CardBody, CardFooter } from "@/components/kyp/ui/card-primitive";
import { drugClasses } from "@/lib/kyp/data";
import type { Substance } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * ClinicalCard — a substance-specific clinical module card.
 * Uses the substance's drug class accent color for the icon and neurotransmitter label.
 *
 * Used by: SubstanceUse section grid.
 */
interface ClinicalCardProps {
  substance: Substance;
  index?: number;
  className?: string;
}

export function ClinicalCard({ substance, index = 0, className }: ClinicalCardProps) {
  const drugClass = drugClasses[substance.drugClass];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className={cn("h-full", className)}
    >
      <CardPrimitive href={substance.href} variant="flat" interactive className="h-full">
        <CardBody className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/60",
                drugClass.accentClass
              )}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-current" />
            </span>
          </div>

          <div className="mt-4">
            <p className="text-overline text-muted-foreground">{drugClass.name}</p>
            <h3 className="mt-1 text-h3 leading-tight">{substance.name}</h3>
          </div>

          <p className="mt-2 flex-1 text-body-sm text-muted-foreground leading-relaxed line-clamp-3">
            {substance.description}
          </p>
        </CardBody>

        <CardFooter className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">
              Neurotransmitter
            </p>
            <p className={cn("mt-0.5 truncate text-xs font-medium", drugClass.accentClass)}>
              {substance.neurotransmitter}
            </p>
          </div>
        </CardFooter>
      </CardPrimitive>
    </motion.div>
  );
}
