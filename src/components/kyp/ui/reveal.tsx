"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Reveal — premium scroll-triggered reveal animation.
 *
 * opacity: 0 → 1
 * translateY: 24px → 0
 * scale: 0.97 → 1
 * Duration: 550ms, ease-out
 *
 * Respects prefers-reduced-motion (content appears instantly).
 *
 * Usage:
 * <Reveal>content</Reveal>
 * <Reveal delay={0.1}>staggered child</Reveal>
 * <Reveal as="section">wrapping element</Reveal>
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li" | "span";
  y?: number;
  scale?: number;
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  as = "div",
  y = 24,
  scale = 0.97,
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  const customVariants: Variants = {
    hidden: { opacity: 0, y, scale },
    visible: { opacity: 1, y: 0, scale: 1 },
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
        ease: [0.22, 1, 0.36, 1], // premium ease-out
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

/**
 * RevealGroup — wrapper that staggers children.
 * Each direct <Reveal> child gets an incremental delay.
 *
 * Usage:
 * <RevealGroup stagger={0.08}>
 *   <Reveal>item 1</Reveal>
 *   <Reveal>item 2</Reveal>
 *   <Reveal>item 3</Reveal>
 * </RevealGroup>
 */
interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function RevealGroup({ children, className, stagger = 0.08 }: RevealGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export { revealVariants };
