"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * HeroSection — parameterized hero with consistent spacing & layout.
 *
 * Used by: homepage (with custom children) and future landing pages.
 *
 * Variants:
 *   - default : standard hero with eyebrow / title / lede / children
 *   - split   : two-column with content + visual side
 *   - centered: single column, centered
 */
interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  variant?: "default" | "split" | "centered";
}

export function HeroSection({
  eyebrow,
  title,
  lede,
  children,
  visual,
  variant = "default",
  className,
  ...props
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28",
        className
      )}
      {...props}
    >
      {/* Ambient decoration */}
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-12",
            variant === "split" && "lg:grid-cols-[1.15fr_1fr]",
            variant === "centered" && "mx-auto max-w-3xl text-center"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn("relative", variant === "centered" && "mx-auto")}
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-md border border-brand/30 bg-brand-soft/60 px-3 py-1 text-xs font-medium text-brand-ink">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 text-display text-foreground">{title}</h1>
            {lede && (
              <p
                className={cn(
                  "mt-5 text-body-lg text-muted-foreground leading-relaxed",
                  variant === "centered" ? "mx-auto" : "max-w-xl"
                )}
              >
                {lede}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </motion.div>

          {visual && variant === "split" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
