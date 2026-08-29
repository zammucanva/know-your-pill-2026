"use client";

import * as React from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  motion,
} from "framer-motion";
import { EnterNavbar } from "@/components/kyp/enter/enter-navbar";
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
 *   <EnterNavbar>     — fixed header, starts at opacity 0, fades in as hero docks
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
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  // Header fades in during the cross-fade window (0.50 → 0.72)
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
    if (v >= 0.65 && !headerActive) setHeaderActive(true);
  });

  // Reduced-motion: header is immediately active and visible
  React.useEffect(() => {
    if (reducedMotion) setHeaderActive(true);
  }, [reducedMotion]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <EnterNavbar
        headerOpacity={headerOpacity}
        active={reducedMotion || headerActive}
        logoRef={logoRef}
      />

      <EnterHero
        scrollYProgress={scrollYProgress}
        spacerRef={spacerRef}
        headerLogoRef={logoRef}
        reducedMotion={reducedMotion}
      />

      {/* Homepage content — flows below the animation spacer */}
      <HomeContent />

      {/* Floating search — fades in with the header.
          Wrapped in a motion.div so its opacity matches the header.
          pointer-events disabled until header is active. */}
      <motion.div
        style={{
          opacity: reducedMotion ? 1 : headerOpacity,
          pointerEvents: (reducedMotion || headerActive) ? "auto" : "none",
        }}
      >
        <FloatingSearch variant="floating" />
      </motion.div>
    </div>
  );
}
