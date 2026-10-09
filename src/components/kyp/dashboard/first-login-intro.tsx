"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { KYP_GREETINGS } from "@/components/kyp/ui/kyp-loader";
import { imgPath } from "@/lib/kyp/image-path";

/**
 * FirstLoginIntro: a short welcome shown ONCE per account on a device,
 * the first time that person reaches the dashboard after signing in.
 *
 * It cycles a greeting through several languages, settles on the Know
 * Your Pill mark and wordmark, then flies the mark into the header's
 * logo spot (the corner) while the overlay fades away.
 *
 * Rules:
 *   - Once only: a flag is stored on this device, keyed by a one-way
 *     hash of the email, so the address itself is never kept.
 *   - Skippable at any time (button or Escape).
 *   - Never shown with reduced motion, and never blocks the app if
 *     storage is unavailable.
 */

const GREETINGS = KYP_GREETINGS;

const STEP_MS = 380;
const STORAGE_PREFIX = "kyp:first-login-intro:v1:";

/** FNV-1a: a short, non-reversible key so the email is not stored. */
function keyFor(email: string): string {
  let h = 0x811c9dc5;
  const s = email.trim().toLowerCase();
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return STORAGE_PREFIX + h.toString(36);
}

function alreadySeen(key: string): boolean {
  try {
    return window.localStorage.getItem(key) !== null;
  } catch {
    return true; // no storage: never replay, never block
  }
}

function markSeen(key: string): void {
  try {
    window.localStorage.setItem(key, new Date().toISOString());
  } catch {
    // ignore
  }
}

type Phase = "greetings" | "brand" | "fly" | "done";

export function FirstLoginIntro({ email }: { email: string }) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = React.useState<Phase>("done");
  const [index, setIndex] = React.useState(0);
  const [fly, setFly] = React.useState<{ x: number; y: number; scale: number } | null>(null);
  const markRef = React.useRef<HTMLImageElement>(null);
  const skipRef = React.useRef<HTMLButtonElement>(null);

  // Decide once, after hydration.
  React.useEffect(() => {
    if (!email || reduced) return;
    const key = keyFor(email);
    if (alreadySeen(key)) return;
    markSeen(key);
    setIndex(0);
    setPhase("greetings");
  }, [email, reduced]);

  // Greetings tick.
  React.useEffect(() => {
    if (phase !== "greetings") return;
    const t = window.setTimeout(() => {
      if (index + 1 >= GREETINGS.length) setPhase("brand");
      else setIndex(index + 1);
    }, STEP_MS);
    return () => window.clearTimeout(t);
  }, [phase, index]);

  // Brand beat, then fly to the header logo.
  React.useEffect(() => {
    if (phase !== "brand") return;
    const t = window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>("[data-kyp-brand] img");
      const mark = markRef.current;
      if (target && mark) {
        const a = mark.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        setFly({
          x: b.left + b.width / 2 - (a.left + a.width / 2),
          y: b.top + b.height / 2 - (a.top + a.height / 2),
          scale: b.width / a.width,
        });
      }
      setPhase("fly");
    }, 900);
    return () => window.clearTimeout(t);
  }, [phase]);

  // Skip with Escape; focus the skip button so the keyboard can reach it.
  React.useEffect(() => {
    if (phase === "done") return;
    skipRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhase("done");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  if (phase === "done") return null;

  const flying = phase === "fly";

  return (
    <motion.div
      role="dialog"
      aria-label="Welcome to Know Your Pill"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: flying ? 0 : 1 }}
      transition={{ duration: flying ? 0.7 : 0, delay: flying ? 0.15 : 0 }}
      onAnimationComplete={() => {
        if (flying) setPhase("done");
      }}
    >
      <button
        ref={skipRef}
        type="button"
        onClick={() => setPhase("done")}
        className="absolute right-4 top-4 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground kyp-focus-ring"
      >
        Skip
      </button>

      <div className="relative flex h-40 w-full max-w-sm flex-col items-center justify-center">
        {phase === "greetings" && (
          <div className="relative flex h-full w-full items-center justify-center" aria-hidden>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                className="absolute flex flex-col items-center gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <span
                  lang={GREETINGS[index].lang}
                  dir={GREETINGS[index].dir}
                  className="flex items-center gap-2.5 font-serif text-4xl font-semibold tracking-tight text-foreground"
                >
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  {GREETINGS[index].text}
                </span>
                <span className="text-xs tracking-wide text-muted-foreground">
                  {GREETINGS[index].language}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {phase !== "greetings" && (
          <div className="flex flex-col items-center gap-4">
            <motion.img
              ref={markRef}
              src={imgPath("/logo-navy-512.png")}
              alt=""
              width={88}
              height={88}
              className="h-[88px] w-[88px] rounded-2xl"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                flying && fly
                  ? { opacity: 1, scale: fly.scale, x: fly.x, y: fly.y }
                  : { opacity: 1, scale: 1, x: 0, y: 0 }
              }
              transition={{ duration: flying ? 0.85 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", zIndex: 101 }}
            />
            <motion.p
              className="font-serif text-2xl font-semibold tracking-tight text-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: flying ? 0 : 1, y: 0 }}
              transition={{ duration: flying ? 0.3 : 0.5, delay: flying ? 0 : 0.2 }}
            >
              Know Your Pill
            </motion.p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
