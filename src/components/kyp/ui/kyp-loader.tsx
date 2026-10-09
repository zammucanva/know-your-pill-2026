"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * KypLoader: the one loading indicator for blocking states in Know Your Pill.
 *
 * Rotating gradient rings (adapted from the Kokonut UI loader) drawn with
 * the site's own theme tokens, so light and dark mode follow the theme
 * with no separate colour set. A multilingual greeting cycles quietly
 * inside the rings; it is decorative, secondary, and hidden from
 * assistive technology. The title and subtitle are what announce the
 * real operation.
 *
 * Variants:
 *   page     blocking full-area load (dashboard, session, route)
 *   section  one large panel that cannot show its content yet
 *   compact  a small inline indicator beside local work
 *
 * It only changes how a load is presented. It never decides when a load
 * starts or ends, and it has no timers of its own except the optional
 * appearance delay and the greeting cycle.
 */

export interface KypGreeting {
  text: string;
  /** BCP 47 language tag, for correct pronunciation and font choice. */
  lang: string;
  dir: "ltr" | "rtl";
  language: string;
}

export const KYP_GREETINGS: KypGreeting[] = [
  { text: "Hello", lang: "en", dir: "ltr", language: "English" },
  { text: "नमस्ते", lang: "hi", dir: "ltr", language: "Hindi" },
  { text: "مرحبا", lang: "ar", dir: "rtl", language: "Arabic" },
  { text: "Bonjour", lang: "fr", dir: "ltr", language: "French" },
  { text: "こんにちは", lang: "ja", dir: "ltr", language: "Japanese" },
  { text: "Hola", lang: "es", dir: "ltr", language: "Spanish" },
  { text: "안녕하세요", lang: "ko", dir: "ltr", language: "Korean" },
  { text: "Hallo", lang: "de", dir: "ltr", language: "German" },
];

export type KypLoaderVariant = "page" | "section" | "compact";
export type KypLoaderSize = "sm" | "md" | "lg";

export interface KypLoaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** What is actually loading, e.g. "Preparing your dashboard…". */
  title?: string;
  subtitle?: string;
  size?: KypLoaderSize;
  variant?: KypLoaderVariant;
  /** Show the cycling multilingual greeting (ignored for compact). */
  greeting?: boolean;
  /** Wait this long before showing, so instant loads never flash. */
  delayMs?: number;
  /** Real progress, 0 to 100, when the operation reports it. Omit when it does not. */
  progress?: number | null;
}

const SIZE: Record<KypLoaderSize, { box: string; title: string; sub: string; greet: string }> = {
  sm: { box: "size-14", title: "text-sm font-medium", sub: "text-xs", greet: "text-[10px]" },
  md: { box: "size-28", title: "text-base font-medium", sub: "text-sm", greet: "text-sm" },
  lg: { box: "size-36", title: "text-lg font-semibold", sub: "text-sm", greet: "text-base" },
};

const GREETING_MS = 1700;

/** A ring is a conic gradient cut into a thin band by a radial mask. */
function Ring({
  from,
  inner,
  outer,
  spin,
  seconds,
  color,
  opacity,
  animate,
}: {
  from: number;
  inner: number;
  outer: number;
  spin: 1 | -1;
  seconds: number;
  color: string;
  opacity: number;
  animate: boolean;
}) {
  const mask = `radial-gradient(circle at 50% 50%, transparent ${inner}%, black ${inner + 2}%, black ${outer - 2}%, transparent ${outer}%)`;
  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 rounded-full"
      style={{
        background: `conic-gradient(from ${from}deg, transparent 0deg, ${color} 120deg, color-mix(in oklch, ${color} 40%, transparent) 240deg, transparent 360deg)`,
        mask,
        WebkitMask: mask,
        opacity,
      }}
      animate={animate ? { rotate: spin * 360 } : undefined}
      transition={{ duration: seconds, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
  );
}

function Greeting({ className, animate }: { className?: string; animate: boolean }) {
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    if (!animate) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % KYP_GREETINGS.length), GREETING_MS);
    return () => window.clearInterval(t);
  }, [animate]);

  const g = KYP_GREETINGS[i];
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={g.lang}
          lang={g.lang}
          dir={g.dir}
          className={cn("font-serif font-semibold tracking-tight text-foreground/80", className)}
          initial={animate ? { opacity: 0, y: 6 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {g.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function KypLoader({
  title = "Loading…",
  subtitle,
  size,
  variant = "section",
  greeting = true,
  delayMs = 0,
  progress = null,
  className,
  children,
  ...props
}: KypLoaderProps) {
  const reduced = useReducedMotion();
  const animate = !reduced;
  const [shown, setShown] = React.useState(delayMs <= 0);

  React.useEffect(() => {
    if (delayMs <= 0) return;
    const t = window.setTimeout(() => setShown(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  const resolved: KypLoaderSize = size ?? (variant === "compact" ? "sm" : variant === "page" ? "lg" : "md");
  const cfg = SIZE[resolved];

  // Same theme tokens in both modes: brand for the lead rings, foreground for the quiet ones.
  const brand = "var(--brand)";
  const quiet = "color-mix(in oklch, var(--foreground) 55%, transparent)";

  const rings = (
    <div className={cn("relative shrink-0", cfg.box)} aria-hidden>
      <Ring from={0} inner={35} outer={43} spin={1} seconds={3} color={brand} opacity={0.85} animate={animate} />
      <Ring from={0} inner={44} outer={52} spin={1} seconds={2.5} color={brand} opacity={0.6} animate={animate} />
      <Ring from={180} inner={53} outer={59} spin={-1} seconds={4} color={quiet} opacity={0.35} animate={animate} />
      <Ring from={270} inner={61} outer={65} spin={1} seconds={3.5} color={quiet} opacity={0.3} animate={animate} />
      {/* faint track so reduced-motion users still see a ring */}
      <div className="absolute inset-[30%] rounded-full border border-border/60" />
      {greeting && variant !== "compact" && <Greeting animate={animate} className={cfg.greet} />}
    </div>
  );

  if (variant === "compact") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn("inline-flex items-center gap-2.5", !shown && "invisible", className)}
        {...props}
      >
        {rings}
        <span className={cn("text-muted-foreground", cfg.sub)}>{title}</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "flex flex-col items-center justify-center gap-6 px-4 text-center",
        variant === "page" ? "min-h-[60vh] py-12" : "py-14",
        !shown && "invisible",
        className
      )}
      {...props}
    >
      <p aria-hidden className="text-overline text-muted-foreground/70">
        Know Your Pill · KYP 2026
      </p>
      {rings}
      <div className="max-w-xs space-y-1.5">
        <p className={cn("tracking-tight text-foreground", cfg.title)}>{title}</p>
        {subtitle && <p className={cn("leading-relaxed text-muted-foreground", cfg.sub)}>{subtitle}</p>}
      </div>
      {progress !== null && (
        <div className="flex flex-col items-center gap-1.5">
          <div
            role="progressbar"
            aria-label={title}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            className="h-1.5 w-48 overflow-hidden rounded-full bg-border/60"
          >
            <div
              className="h-full rounded-full bg-brand transition-[width] duration-300 motion-reduce:transition-none"
              style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
            />
          </div>
          <span aria-hidden className="text-xs tabular-nums text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
