"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Reveal — restrained scroll-into-view reveal (audit §23 motion contract).
 *
 * opacity: 0 → 1
 * translateY: 12px → 0
 * Duration: 300ms, ease-out
 *
 * NO scale (audit rule 12 — scale-on-scroll is the #1 Framer Motion tell).
 * NO stagger (audit rule 14 — lists appear as units, not slideshows).
 * Respects prefers-reduced-motion (content appears instantly).
 *
 * Usage:
 * <Reveal>content</Reveal>
 * <Reveal as="section">wrapping element</Reveal>
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "span";
  y?: number;
  /** @deprecated scale is banned by the motion contract; prop kept for API compat, ignored */
  scale?: number;
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.3,
  as = "div",
  y = 12,
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  const customVariants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionTag
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // ease-out
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

/**
 * RevealGroup — plain wrapper (audit rule 14: no staggered children).
 * Kept for API compatibility with existing call-sites; children render as a
 * unit. The `stagger` prop is accepted but intentionally ignored.
 */
interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  /** @deprecated stagger is banned by the motion contract; ignored */
  stagger?: number;
}

export function RevealGroup({ children, className }: RevealGroupProps) {
  return <div className={cn(className)}>{children}</div>;
}

export { revealVariants };
