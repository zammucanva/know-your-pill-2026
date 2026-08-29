"use client";

import * as React from "react";
import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * EnterHero — scroll-driven text-to-logo docking animation.
 *
 * The hero renders "KYP" (oversized Playfair) and "MEDICINE" (mono, tracked)
 * centered in the viewport. As the user scrolls, the text travels toward
 * the header logo position (top-left), shrinks, and cross-fades into the
 * actual navbar logo.
 *
 * Technical approach:
 * - `scrollYProgress` (created by the parent /enter page) tracks the scroll
 *   progress of a 100vh spacer element.
 * - `useTransform` maps scroll progress (0 → 1) to scale, x, y, and opacity
 *   values for the hero text.
 * - Position measurement via `getBoundingClientRect()` on mount and resize
 *   ensures the travel path is accurate to real screen positions across
 *   all breakpoints (not hardcoded pixel values).
 * - All animations use `transform` (scale, translate) and `opacity` only —
 *   no layout-triggering properties, keeping it smooth on mobile.
 * - `prefers-reduced-motion: reduce` disables the scroll-linked transform
 *   entirely; the hero text renders as a static heading.
 *
 * The header logo target is passed via `headerLogoRef` so the travel path
 * is measured against the real navbar logo position.
 */

interface EnterHeroProps {
  /** Scroll-linked progress (0 → 1) from the parent's useScroll. */
  scrollYProgress: MotionValue<number>;
  /** Ref for the 100vh spacer — owned by parent so both hero + header can read it. */
  spacerRef: React.RefObject<HTMLDivElement | null>;
  /** Ref to the header logo element (the dock target). */
  headerLogoRef: React.RefObject<HTMLElement | null>;
  /** Whether reduced-motion is active (disables transforms). */
  reducedMotion: boolean;
}

export function EnterHero({
  scrollYProgress,
  spacerRef,
  headerLogoRef,
  reducedMotion,
}: EnterHeroProps) {
  const heroTextRef = React.useRef<HTMLDivElement>(null);
  const [travel, setTravel] = React.useState({ x: 0, y: 0, scale: 0.15 });

  // Measure the travel path from hero text center to logo center
  React.useLayoutEffect(() => {
    if (reducedMotion) return;

    const measure = () => {
      const heroEl = heroTextRef.current;
      const logoEl = headerLogoRef.current;
      if (!heroEl || !logoEl) return;

      const heroRect = heroEl.getBoundingClientRect();
      const logoRect = logoEl.getBoundingClientRect();

      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + heroRect.height / 2;
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;

      setTravel({
        x: logoCenterX - heroCenterX,
        y: logoCenterY - heroCenterY,
        scale: Math.max(0.08, logoRect.width / heroRect.width),
      });
    };

    // Measure after layout settles (logo may still be mounting)
    const raf = requestAnimationFrame(measure);
    // Re-measure on resize and after fonts load
    window.addEventListener("resize", measure);
    if (document.fonts) {
      document.fonts.ready.then(measure);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion, headerLogoRef]);

  // Animation curves — mapped to scroll progress 0 → 1
  //
  // 0.00 → 0.65: text travels from center to logo position, shrinks
  // 0.50 → 0.72: cross-fade (hero text opacity 1 → 0, header opacity 0 → 1)
  // 0.72 → 1.00: hero text is gone; header is fully active; spacer ends
  //
  // The last ~28% of scroll is a calm "breath" — the header is visible,
  // the hero text is gone, and the spacer is about to end so the homepage
  // content can flow in naturally.

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, travel.scale]
  );
  const textX = useTransform(scrollYProgress, [0, 0.65], [0, travel.x]);
  const textY = useTransform(scrollYProgress, [0, 0.65], [0, travel.y]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.72],
    [1, 1, 0]
  );
  const layerOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 0.82],
    [1, 1, 0]
  );

  // Scroll-hint chevron — fades out after the first 15% of scroll
  const hintOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0]
  );

  // ---- Reduced-motion fallback ----
  // Skip the scroll-linked animation. Show hero text as a static heading
  // and the header is immediately active (handled by parent).
  if (reducedMotion) {
    return (
      <section
        id="enter-top"
        className="relative flex min-h-screen flex-col items-center justify-center px-4"
      >
        <div className="text-center">
          <h1
            className="font-serif font-semibold leading-none text-foreground"
            style={{ fontSize: "clamp(4rem, 18vw, 12rem)" }}
          >
            KYP
          </h1>
          <p
            className="mt-4 font-mono uppercase tracking-[0.3em] text-muted-foreground"
            style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)" }}
          >
            Medicine
          </p>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </section>
    );
  }

  // ---- Active animation ----
  return (
    <>
      {/* Fixed animation layer — covers viewport, holds the hero text.
          pointer-events-none so it never blocks the scroll or the content
          beneath. z-40 so it sits below the navbar (z-50). */}
      <motion.div
        className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
        style={{ opacity: layerOpacity }}
        aria-hidden
      >
        {/* Hero text — the only element on screen at scroll = 0.
            transform-origin is center so scale shrinks toward the middle,
            then x/y translate it toward the logo position. */}
        <motion.div
          ref={heroTextRef}
          style={{
            scale: textScale,
            x: textX,
            y: textY,
            opacity: textOpacity,
            transformOrigin: "center center",
          }}
          className="text-center will-change-transform"
        >
          <h1
            className="font-serif font-semibold leading-none text-foreground"
            style={{ fontSize: "clamp(5rem, 22vw, 16rem)" }}
          >
            KYP
          </h1>
          <p
            className="mt-4 font-mono uppercase tracking-[0.3em] text-muted-foreground"
            style={{ fontSize: "clamp(0.9rem, 2.8vw, 1.75rem)" }}
          >
            Medicine
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll hint — visible at the top, fades out on first scroll */}
      <motion.div
        className="fixed bottom-8 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 pointer-events-none"
        style={{ opacity: hintOpacity }}
        aria-hidden
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* 100vh spacer — creates the scroll distance for the animation.
          The homepage content follows this in normal flow, so after
          scrolling 100vh the animation is done and the homepage enters. */}
      <div ref={spacerRef} id="enter-top" className="h-screen" />
    </>
  );
}
