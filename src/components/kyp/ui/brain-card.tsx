"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { CardPrimitive, CardBody } from "@/components/kyp/ui/card-primitive";
import { Badge } from "@/components/kyp/ui/badge";
import type { BrainRegion } from "@/lib/kyp/data";
import { cn } from "@/lib/utils";

/**
 * BrainCard — a brain region entry for the Brain Atlas (Phase 6).
 * Shows region name, key functions, related disorders, and affected drugs.
 */
interface BrainCardProps {
  region: BrainRegion;
  index?: number;
  className?: string;
}

export function BrainCard({ region, index = 0, className }: BrainCardProps) {
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
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neural/20 bg-neural-soft/60 text-neural">
              <Brain className="h-5 w-5" strokeWidth={2} />
            </span>
            <Badge variant="neural" size="sm">{region.neurotransmitter}</Badge>
          </div>

          <h3 className="mt-4 text-h3 leading-tight">{region.name}</h3>

          <div className="mt-4">
            <p className="text-overline text-muted-foreground">Functions</p>
            <ul className="mt-2 space-y-1">
              {region.functions.slice(0, 3).map((fn) => (
                <li key={fn} className="text-body-sm text-foreground/90">
                  • {fn}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-overline text-muted-foreground">Disorders</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {region.disorders.slice(0, 2).map((d) => (
                  <Badge key={d} variant="outline" size="sm">{d}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-overline text-muted-foreground">Drugs</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {region.affectedDrugs.slice(0, 2).map((d) => (
                  <Badge key={d} variant="brand" size="sm">{d}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </CardPrimitive>
    </motion.div>
  );
}
