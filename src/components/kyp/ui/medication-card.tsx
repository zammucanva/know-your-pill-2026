"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { MedicationClass } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * MedicationCard — entry point to a medication class (psychiatric, pain, antibiotics, substance use).
 * Featured cards get a glow + "Featured" badge. Coming soon cards get a muted badge.
 */
interface MedicationCardProps {
  med: MedicationClass;
  index?: number;
  className?: string;
}

export function MedicationCard({ med, index = 0, className }: MedicationCardProps) {
  const Icon = med.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
      className={cn("h-full", className)}
    >
      <CardPrimitive
        href={med.href}
        variant={med.featured ? "featured" : "flat"}
        interactive
        className="h-full"
      >
        <CardBody className="relative">
          <div className="flex items-start justify-between gap-4">
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
                    <Badge variant="brand" size="sm">
                      <Sparkles className="h-2.5 w-2.5" />
                      Featured
                    </Badge>
                  )}
                  {med.comingSoon && (
                    <Badge variant="default" size="sm">Coming Soon</Badge>
                  )}
                </div>
                <h3 className="mt-1 font-sans text-h3 leading-tight">{med.title}</h3>
              </div>
            </div>
          </div>

          <p className="relative mt-4 text-body text-muted-foreground leading-relaxed">
            {med.description}
          </p>

          <div className="relative mt-5 flex flex-wrap gap-1.5">
            {med.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-border/70 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/80"
              >
                {chip}
              </span>
            ))}
          </div>
        </CardBody>
      </CardPrimitive>
    </motion.div>
  );
}
