"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OrganicGradient — KYP's signature visual element.
 *
 * A soft, blurred, organic gradient shape inspired by neurotransmitter colors.
 * Static by default (no animation). Can optionally respond to cursor position.
 *
 * Variants:
 *   hero      — strongest, largest, multi-color (teal + violet + warm)
 *   section   — subtle, single-direction, calmer
 *   neuro     — neural-inspired (teal + violet)
 *   emergency — grounded, muted (no animation ever)
 *
 * Usage:
 * <OrganicGradient variant="hero" className="absolute inset-0" />
 * <OrganicGradient variant="section" responsive />
 */
interface OrganicGradientProps {
  variant?: "hero" | "section" | "neuro" | "emergency";
  className?: string;
  /** Subtle cursor parallax (hero only, disabled on touch + reduced-motion) */
  responsive?: boolean;
}

const variantStyles: Record<string, string> = {
  hero: `
    bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.55_0.11_195/0.18),transparent_50%),
        radial-gradient(ellipse_at_70%_60%,oklch(0.62_0.16_280/0.12),transparent_50%),
        radial-gradient(ellipse_at_50%_90%,oklch(0.6_0.22_25/0.06),transparent_40%)]
  `,
  section: `
    bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.55_0.11_195/0.08),transparent_60%)]
  `,
  neuro: `
    bg-[radial-gradient(ellipse_at_40%_40%,oklch(0.55_0.11_195/0.10),transparent_50%),
        radial-gradient(ellipse_at_60%_60%,oklch(0.62_0.16_280/0.08),transparent_50%)]
  `,
  emergency: `
    bg-[radial-gradient(ellipse_at_50%_50%,oklch(0.6_0.22_25/0.04),transparent_60%)]
  `,
};

export function OrganicGradient({
  variant = "section",
  className,
  responsive = false,
}: OrganicGradientProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });
  const reduceMotion = React.useRef(false);

  React.useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  React.useEffect(() => {
    if (!responsive || reduceMotion.current) return;

    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [responsive]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        variantStyles[variant],
        className
      )}
      style={
        responsive && !reduceMotion.current
          ? { transform: `translate(${parallax.x}px, ${parallax.y}px)` }
          : undefined
      }
    />
  );
}
