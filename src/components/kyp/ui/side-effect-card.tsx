"use client";

import { motion } from "framer-motion";
import { Activity, Pill } from "lucide-react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { SideEffect } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * SideEffectCard — entry in the Side Effect Library (Phase 8).
 * Shows the effect, the receptor & pathway it arises from, drugs that cause it,
 * and the management approach.
 */
interface SideEffectCardProps {
  sideEffect: SideEffect;
  index?: number;
  className?: string;
}

export function SideEffectCard({ sideEffect, index = 0, className }: SideEffectCardProps) {
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
          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-warning/20 bg-warning-soft/60 text-warning">
              <Activity className="h-5 w-5" strokeWidth={2} />
            </span>
            <Badge variant="warning" size="sm">{sideEffect.pathway}</Badge>
          </div>

          <h3 className="mt-4 text-h3 leading-tight">{sideEffect.name}</h3>
          <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
            {sideEffect.description}
          </p>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-overline text-muted-foreground">Receptor</p>
              <p className="mt-0.5 text-xs font-medium text-foreground">{sideEffect.receptor}</p>
            </div>

            <div>
              <p className="text-overline text-muted-foreground">Caused by</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {sideEffect.drugs.map((d) => (
                  <Badge key={d} variant="outline" size="sm">
                    <Pill className="h-2.5 w-2.5" />
                    {d}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border/70 bg-muted/40 p-3">
              <p className="text-overline text-muted-foreground">Management</p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/90">
                {sideEffect.management}
              </p>
            </div>
          </div>
        </CardBody>
      </CardPrimitive>
    </motion.div>
  );
}
