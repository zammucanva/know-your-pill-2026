"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Checkpoint — lesson transition marker.
 *
 * Shown after each lesson group. Displays a completion message and
 * a "Continue →" button that scrolls to the next lesson.
 *
 * Client Component — uses useState for animation.
 */
interface CheckpointProps {
  lessonNumber: number;
  lessonTitle: string;
  message: string;
  nextLessonTitle?: string;
}

export function Checkpoint({ lessonNumber, lessonTitle, message, nextLessonTitle }: CheckpointProps) {
  const [dismissed, setDismissed] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "my-8 flex items-center gap-4 rounded-lg px-5 py-4",
        dismissed ? "bg-muted/20" : "bg-brand-soft/20 border border-brand/20"
      )}
    >
      {/* Check icon */}
      <div className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
        dismissed ? "bg-muted" : "bg-brand text-primary-foreground"
      )}>
        <Check className="h-4 w-4" strokeWidth={3} />
      </div>

      {/* Message */}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          Lesson {lessonNumber} Complete
        </p>
        <p className="mt-0.5 text-sm text-foreground/90 leading-relaxed">{message}</p>
      </div>

      {/* Continue button */}
      {nextLessonTitle && !dismissed && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="shrink-0 inline-flex items-center gap-1 rounded-full border border-brand/30 bg-card px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-primary-foreground"
        >
          Continue to {nextLessonTitle}
          <ChevronRight className="h-3 w-3" />
        </button>
      )}
    </motion.div>
  );
}
