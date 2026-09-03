"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { TimelineEvent } from "@/lib/kyp/data";

/**
 * Timeline — vertical timeline for clinical sequences.
 *
 * Used by: drug page "Timeline of Effects" section (Phase 4), withdrawal
 * timelines, recovery milestones.
 *
 * Each event has a phase (onset/peak/duration/recovery) which controls
 * the marker color.
 */
interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const phaseColor: Record<TimelineEvent["phase"], string> = {
  onset: "bg-warning",
  peak: "bg-brand",
  duration: "bg-neural",
  recovery: "bg-success",
};

const phaseLabel: Record<TimelineEvent["phase"], string> = {
  onset: "Onset",
  peak: "Peak",
  duration: "Duration",
  recovery: "Recovery",
};

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />

      <ol className="space-y-6">
        {events.map((event, i) => (
          <motion.li
            key={event.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.08, 0.4) }}
            className="relative pl-8"
          >
            {/* Marker */}
            <span
              className={cn(
                "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-background",
                phaseColor[event.phase]
              )}
            />

            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                {event.time}
              </span>
              <span
                className={cn(
                  "rounded-md px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-background",
                  phaseColor[event.phase]
                )}
              >
                {phaseLabel[event.phase]}
              </span>
            </div>

            <h4 className="mt-1 text-h4 text-foreground">{event.title}</h4>
            <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
