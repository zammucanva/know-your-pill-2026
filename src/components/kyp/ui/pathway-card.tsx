"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { Pathway } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * PathwayCard — a neural pathway entry for the Pathways module (Phase 7).
 * Shows origin → termination, neurotransmitter, function, related drugs.
 */
interface PathwayCardProps {
  pathway: Pathway;
  index?: number;
  className?: string;
}

export function PathwayCard({ pathway, index = 0, className }: PathwayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className={cn("h-full", className)}
    >
      <CardPrimitive variant="flat" interactive={false} className="h-full">
        <CardBody>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-h3 leading-tight">{pathway.name}</h3>
            <Badge variant="brand" size="sm" className="shrink-0">
              {pathway.neurotransmitter}
            </Badge>
          </div>

          {/* Origin → Termination flow */}
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 p-3">
            <div className="min-w-0 flex-1">
              <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Origin</p>
              <p className="truncate text-xs font-medium">{pathway.origin}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-brand" />
            <div className="min-w-0 flex-1">
              <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Termination</p>
              <p className="truncate text-xs font-medium">{pathway.termination}</p>
            </div>
          </div>

          <p className="mt-4 text-body-sm text-muted-foreground leading-relaxed">
            {pathway.function}
          </p>

          <div className="mt-4">
            <p className="text-overline text-muted-foreground">Related drugs</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {pathway.relatedDrugs.map((d) => (
                <Badge key={d} variant="outline" size="sm">{d}</Badge>
              ))}
            </div>
          </div>

          <p className="mt-4 rounded-lg bg-muted/40 p-3 text-xs italic leading-relaxed text-muted-foreground">
            {pathway.clinicalRelevance}
          </p>
        </CardBody>
      </CardPrimitive>
    </motion.div>
  );
}
