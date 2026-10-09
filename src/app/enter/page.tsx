"use client";

import * as React from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  motion,
} from "framer-motion";
import { Navbar } from "@/components/kyp/sections/navbar";
import { EnterHero } from "@/components/kyp/enter/enter-hero";
import { HomeContent } from "@/components/kyp/home-content";
import { FloatingSearch } from "@/components/kyp/ui/floating-search";

/**
 * /enter — post-signup welcome page with scroll-driven text-to-logo animation.
 *
 * Flow:
 *   /welcome (done step) → "Enter KYP" button → /enter → scroll animation → homepage content
 *
 * Structure:
 *   <Navbar intro>    — the canonical site navbar in intro mode: starts at opacity 0, fades in as the hero docks
 *   <EnterHero>       — 100vh spacer + fixed animation layer (KYP / MEDICINE text)
 *   <HomeContent>     — the existing homepage sections (hero, library, substances, etc.)
 *   <FloatingSearch>  — fades in with the header
 *
 * The header's interactive elements (links, search, login) are disabled until
 * the cross-fade completes (~65% scroll), so keyboard/screen-reader users
 * can't tab into invisible controls.
 *
 * Reduced-motion users see a static hero heading and an immediately-active header.
 */
export default function EnterPage() {
  const logoRef = React.useRef<HTMLElement>(null);
  const spacerRef = React.useRef<HTMLDivElement>(null);

  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [headerActive, setHeaderActive] = React.useState(false);

  // Detect reduced-motion preference on mount
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Track scroll progress of the 100vh spacer
  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  // The intro plays ONCE per page visit. While it is running, `scrollYProgress`
  // follows the scroll (so it can be scrubbed both ways). The moment it
  // reaches the end of the dock/cross-fade it LATCHES: progress is pinned
  // to 1, so scrolling up, down or back into the spacer can never replay
  // it, flicker the wordmark back, or reset the header's opacity.
  //
  // Every derived value reads this plain MotionValue, not the raw
  // scroll-linked one: derived opacities of the raw value get promoted by
  // framer-motion to browser scroll-timeline animations, which finish and
  // drop back to the base style once the spacer leaves the viewport.
  const INTRO_DONE_AT = 0.82; // layer fully faded, header fully visible
  const scrollYProgress = useMotionValue(0);
  const introDoneRef = React.useRef(false);
  const [introDone, setIntroDone] = React.useState(false);
  const [spacerCollapsed, setSpacerCollapsed] = React.useState(false);

  const applyProgress = React.useCallback(
    (v: number) => {
      if (introDoneRef.current) return;
      if (v >= INTRO_DONE_AT) {
        introDoneRef.current = true;
        scrollYProgress.set(1);
        setIntroDone(true);
        return;
      }
      scrollYProgress.set(v);
    },
    [scrollYProgress]
  );
  React.useEffect(() => {
    applyProgress(rawScrollProgress.get()); // also covers reload/restore past the intro
  }, [rawScrollProgress, applyProgress]);
  useMotionValueEvent(rawScrollProgress, "change", applyProgress);

  // After the intro, scrolling back up must land on the normal homepage
  // top, not on the empty intro spacer. When the user scrolls up to the
  // point where the homepage's own top meets the viewport top, drop the
  // spacer (the visible content does not move at that exact moment).
  React.useEffect(() => {
    if (!introDone || spacerCollapsed) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const spacerH = spacerRef.current?.offsetHeight ?? 0;
      if (y < lastY && y <= spacerH) setSpacerCollapsed(true);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [introDone, spacerCollapsed]);
  React.useLayoutEffect(() => {
    if (spacerCollapsed) window.scrollTo({ top: 0, behavior: "instant" });
  }, [spacerCollapsed]);

  const scrollHeaderOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.72],
    [0, 0, 1]
  );

  // In reduced-motion mode, header is immediately fully visible
  const staticOpacity = useMotionValue(1);
  const headerOpacity = reducedMotion ? staticOpacity : scrollHeaderOpacity;

  // Activate header interactivity after cross-fade is mostly done
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setHeaderActive(v >= 0.65);
  });

  // Reduced-motion: header is immediately active and visible
  React.useEffect(() => {
    if (reducedMotion) setHeaderActive(true);
  }, [reducedMotion]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar
        intro={{
          opacity: headerOpacity,
          active: reducedMotion || headerActive || introDone,
          logoRef,
        }}
      />

      <EnterHero
        scrollYProgress={scrollYProgress}
        spacerRef={spacerRef}
        headerLogoRef={logoRef}
        reducedMotion={reducedMotion}
        spacerCollapsed={spacerCollapsed}
      />

      {/* Homepage content — flows below the animation spacer */}
      <HomeContent />

      {/* Floating search — fades in with the header.
          Wrapped in a motion.div so its opacity matches the header.
          pointer-events disabled until header is active. */}
      <motion.div
        style={{
          opacity: reducedMotion ? 1 : headerOpacity,
          pointerEvents: (reducedMotion || headerActive || introDone) ? "auto" : "none",
        }}
      >
        <FloatingSearch variant="floating" />
      </motion.div>
    </div>
  );
}
