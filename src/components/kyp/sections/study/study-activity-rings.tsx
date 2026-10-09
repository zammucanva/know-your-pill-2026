"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useLocalProgress } from "@/lib/kyp/progress/use-local-progress";
import { getRetentionDueCount } from "@/lib/kyp/progress/progress-store";
import { studyCourseTotal } from "@/lib/kyp/study/course-catalog";

/**
 * StudyActivityRings: three concentric progress rings for Study Mode,
 * in the style of a fitness activity card, tuned to KYP's palette.
 *
 * Every number is real and comes from the local learning store:
 *   LEARN     sections read / sections in the courses you have started
 *   ACCURACY  correct answers / answers given
 *   REVIEWS   scheduled reviews on track / reviews scheduled
 * A ring with nothing behind it stays empty and reads "Not started":
 * no placeholder percentages.
 */

interface Ring {
  label: string;
  note: string;
  current: number;
  target: number;
  unit: string;
  size: number;
  /** Gradient start / end (matches the class-group colours). */
  from: string;
  to: string;
}

const STROKE = 14;

function RingArc({ ring, index, animate }: { ring: Ring; index: number; animate: boolean }) {
  const id = React.useId();
  const radius = (ring.size - STROKE) / 2;
  const circumference = radius * 2 * Math.PI;
  const value = ring.target > 0 ? Math.min(100, Math.round((ring.current / ring.target) * 100)) : 0;
  const offset = ((100 - value) / 100) * circumference;
  const label = `${ring.label}: ${value}%`;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={animate ? { opacity: 0, scale: 0.85 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <svg
        role="img"
        aria-label={label}
        className="-rotate-90"
        width={ring.size}
        height={ring.size}
        viewBox={`0 0 ${ring.size} ${ring.size}`}
      >
        <title>{label}</title>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={ring.from} />
            <stop offset="100%" stopColor={ring.to} />
          </linearGradient>
        </defs>
        <circle
          className="text-border/60"
          cx={ring.size / 2}
          cy={ring.size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
        />
        <motion.circle
          cx={ring.size / 2}
          cy={ring.size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={animate ? { strokeDashoffset: circumference } : false}
          animate={{ strokeDashoffset: value === 0 ? circumference : offset }}
          transition={{ duration: animate ? 1.4 : 0, delay: animate ? index * 0.15 : 0, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.12))" }}
        />
      </svg>
    </motion.div>
  );
}

export function StudyActivityRings({ className }: { className?: string }) {
  const data = useLocalProgress();
  const reduced = useReducedMotion();
  const [due, setDue] = React.useState(0);

  // Due reviews depend on the wall clock, so they are read after hydration.
  React.useEffect(() => {
    if (!data) return;
    setDue(getRetentionDueCount());
  }, [data]);

  const rings = React.useMemo<Ring[]>(() => {
    const courses = data ? Object.values(data.courses) : [];
    const read = courses.reduce((n, c) => n + c.completedSections.length, 0);
    const total = courses.reduce((n, c) => n + studyCourseTotal(c.slug), 0);

    const topics = data ? Object.values(data.answers) : [];
    const answered = topics.reduce((n, t) => n + t.answered, 0);
    const correct = topics.reduce((n, t) => n + t.correct, 0);

    const scheduled = data ? Object.keys(data.retention).length : 0;
    const onTrack = Math.max(0, scheduled - due);

    return [
      { label: "LEARN", note: "sections read", current: read, target: total, unit: "sections", size: 190, from: "#14b8a6", to: "#5eead4" },
      { label: "ACCURACY", note: "answers correct", current: correct, target: answered, unit: "correct", size: 148, from: "#8b5cf6", to: "#c4b5fd" },
      { label: "REVIEWS", note: "reviews on track", current: onTrack, target: scheduled, unit: "on track", size: 106, from: "#f59e0b", to: "#fcd34d" },
    ];
  }, [data, due]);

  if (!data) return null;

  const swatch = ["text-teal-600 dark:text-teal-300", "text-violet-600 dark:text-violet-300", "text-amber-600 dark:text-amber-300"];

  return (
    <div className={cn("flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10", className)}>
      <div className="relative h-[190px] w-[190px] shrink-0">
        {rings.map((ring, i) => (
          <RingArc key={ring.label} ring={ring} index={i} animate={!reduced} />
        ))}
      </div>
      <motion.dl
        className="grid w-full max-w-xs gap-4"
        initial={reduced ? false : { opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {rings.map((ring, i) => (
          <div key={ring.label}>
            <dt className="text-xs font-medium tracking-wide text-muted-foreground">{ring.label}</dt>
            <dd className={cn("font-serif text-2xl font-semibold", swatch[i])}>
              {ring.target > 0 ? (
                <>
                  {ring.current}/{ring.target}
                  <span className="ml-1.5 font-sans text-sm font-normal text-muted-foreground">{ring.unit}</span>
                </>
              ) : (
                <span className="font-sans text-sm font-normal text-muted-foreground">Not started yet</span>
              )}
            </dd>
          </div>
        ))}
      </motion.dl>
    </div>
  );
}
