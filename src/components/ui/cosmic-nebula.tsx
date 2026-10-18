"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Cosmic nebula, KYP edition: "the pill and the questions".
 *
 * A decorative background made of one glossy red/white capsule (plus a few
 * smaller ones) surrounded by bold question marks at random sizes, tilts and
 * mirror flips, all floating over soft coloured blur blobs. It is live
 * markup, not an image: the capsule is inline SVG, the question marks are
 * text in the foreground colour (so they flip to light in dark mode), and
 * everything is blurred and faded so it stays behind the content. Shapes
 * drift on their own and follow the pointer. The arrangement is
 * re-randomised on every page load (client only, so no hydration mismatch).
 * Float/blob motion lives in globals.css and is disabled under
 * prefers-reduced-motion (pointer-follow is skipped too).
 */

interface Layer {
  kind: "capsule" | "tablet" | "question";
  /** Index into PALETTES (capsules and tablets). */
  palette?: number;
  /** Position, % of the container. */
  x: number;
  y: number;
  /** Width: px number for question marks, CSS length for capsules. */
  w: string;
  /** Question-mark font size, px. */
  fontSize?: number;
  rot: number;
  /** Mirror horizontally (turns "?" into "¿"-style glyphs). */
  flip?: boolean;
  opacity: number;
  /** Depth-of-field blur, px. */
  blur: number;
  duration: number;
  delay: number;
  dx: number;
  dy: number;
  /** How far this layer travels when the pointer sweeps across, px. */
  follow: number;
  desktopOnly: boolean;
}

/** Coloured-half palettes: highlight, base, shadow, bounce light. */
const PALETTES = [
  ["#ff5a5a", "#d81f26", "#930a0e", "#c8161c"], // red
  ["#6bb4ff", "#2a7be0", "#123f99", "#2f78d6"], // blue
  ["#72e6a6", "#22b070", "#0c6b40", "#27b878"], // green
  ["#ffd56e", "#f0a01a", "#a86400", "#e8a21f"], // amber
];

/** Flat, face-on round tablet with a score line and gloss, 100x100 grid. */
function Tablet({ id, palette }: { id: string; palette: number }) {
  const [hi, base, shade] = PALETTES[palette % PALETTES.length];
  // Even palettes get a coloured tablet, odd ones a classic white one.
  const white = palette % 2 === 1 && palette > 1;
  return (
    <svg viewBox="0 0 100 100" className="block h-auto w-full overflow-visible" fill="none">
      <defs>
        <radialGradient id={`${id}-face`} cx="0.35" cy="0.3" r="0.9">
          {white ? (
            <>
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.6" stopColor="#efece0" />
              <stop offset="1" stopColor="#bdb9a9" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor={hi} />
              <stop offset="0.55" stopColor={base} />
              <stop offset="1" stopColor={shade} />
            </>
          )}
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill={`url(#${id}-face)`} />
      {/* Bevelled rim */}
      <circle cx="50" cy="50" r="39" stroke="#fff" strokeOpacity={0.35} strokeWidth={1.5} />
      {/* Score line */}
      <path d="M12 50H88" stroke={white ? "#8d8a7b" : shade} strokeOpacity={0.7} strokeWidth={3} strokeLinecap="round" />
      <path d="M12 53H88" stroke="#fff" strokeOpacity={0.5} strokeWidth={1.5} strokeLinecap="round" />
      {/* Gloss */}
      <path d="M22 34Q28 20 46 15" stroke="#fff" strokeOpacity={0.7} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
}

/** Glossy two-tone capsule on a 200x100 grid, coloured half on the left. */
function Capsule({ id, palette = 0 }: { id: string; palette?: number }) {
  const [hi, base, shade, bounce] = PALETTES[palette % PALETTES.length];
  return (
    <svg viewBox="0 0 200 100" className="block h-auto w-full overflow-visible" fill="none">
      <defs>
        <linearGradient id={`${id}-red`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={hi} />
          <stop offset="0.45" stopColor={base} />
          <stop offset="0.8" stopColor={shade} />
          <stop offset="1" stopColor={bounce} />
        </linearGradient>
        <linearGradient id={`${id}-white`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#efece0" />
          <stop offset="0.85" stopColor="#bdb9a9" />
          <stop offset="1" stopColor="#dcd9cb" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect width="200" height="100" rx="50" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="200" height="100" fill={`url(#${id}-white)`} />
        <path d="M0 0H96Q108 50 96 100H0Z" fill={`url(#${id}-red)`} />
        {/* Seam */}
        <path d="M96 0Q108 50 96 100" stroke="#fff" strokeOpacity={0.75} strokeWidth={2} />
        {/* Gloss on both halves */}
        <path d="M14 40Q18 20 46 14H84" stroke="#fff" strokeOpacity={0.42} strokeWidth={7} strokeLinecap="round" />
        <path d="M118 16H168" stroke="#fff" strokeOpacity={0.9} strokeWidth={8} strokeLinecap="round" />
        {/* Shade under the red half */}
        <path d="M20 84Q50 94 90 90" stroke={shade} strokeOpacity={0.45} strokeWidth={6} strokeLinecap="round" />
      </g>
    </svg>
  );
}

const COLS = 5;
const ROWS = 5;

/** The big hero capsule, a flat tablet and two satellites. Fixed spots. */
const HEROES: Omit<Layer, "delay">[] = [
  { kind: "capsule", palette: 0, x: 52, y: 22, w: "clamp(230px, 30vw, 440px)", rot: -38, opacity: 0.55, blur: 1.5, duration: 26, dx: 36, dy: -26, follow: 70, desktopOnly: false },
  { kind: "tablet", palette: 0, x: 36, y: 64, w: "clamp(110px, 13vw, 200px)", rot: 14, opacity: 0.5, blur: 2, duration: 23, dx: -26, dy: 28, follow: 90, desktopOnly: false },
  { kind: "capsule", palette: 0, x: 6, y: 64, w: "clamp(90px, 10vw, 150px)", rot: 28, opacity: 0.4, blur: 3.5, duration: 21, dx: -24, dy: 30, follow: 120, desktopOnly: true },
  { kind: "capsule", palette: 0, x: 84, y: 68, w: "clamp(70px, 8vw, 120px)", rot: -112, opacity: 0.4, blur: 3, duration: 24, dx: 22, dy: -30, follow: 130, desktopOnly: true },
];

/** Extra random pills (capsules and flat tablets) in assorted colours. */
const EXTRA_PILLS = 4;

/** Jittered grid of question marks: random, yet no big empty areas. */
function buildField(): Layer[] {
  const out: Layer[] = [];
  const rnd = Math.random;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const fontSize = Math.round(30 + Math.pow(rnd(), 1.6) * 130);
      out.push({
        kind: "question",
        x: ((c + 0.05 + rnd() * 0.9) / COLS) * 100,
        y: ((r + 0.05 + rnd() * 0.9) / ROWS) * 100,
        w: `${fontSize}px`,
        fontSize,
        rot: Math.round(rnd() * 360),
        flip: rnd() > 0.5,
        opacity: 0.06 + rnd() * 0.08,
        blur: 0.5 + rnd() * 2,
        duration: 16 + Math.round(rnd() * 16),
        delay: -Math.round(rnd() * 30),
        dx: Math.round((rnd() - 0.5) * 60),
        dy: Math.round((rnd() - 0.5) * 60),
        follow: 30 + Math.round((fontSize / 160) * 90),
        desktopOnly: (r + c) % 2 === 1,
      });
    }
  }

  for (const hero of HEROES) {
    out.push({ ...hero, delay: -Math.round(rnd() * 20) });
  }

  for (let i = 0; i < EXTRA_PILLS; i++) {
    const size = Math.round(56 + rnd() * 80);
    out.push({
      kind: rnd() > 0.45 ? "capsule" : "tablet",
      palette: Math.floor(rnd() * PALETTES.length),
      x: 3 + rnd() * 88,
      y: 3 + rnd() * 86,
      w: `${size}px`,
      rot: Math.round(rnd() * 360 - 180),
      opacity: 0.32 + rnd() * 0.16,
      blur: 2 + rnd() * 2.5,
      duration: 18 + Math.round(rnd() * 14),
      delay: -Math.round(rnd() * 30),
      dx: Math.round((rnd() - 0.5) * 70),
      dy: Math.round((rnd() - 0.5) * 70),
      follow: 80 + Math.round(rnd() * 60),
      desktopOnly: i % 2 === 1,
    });
  }
  return out;
}

interface MedicineNebulaProps {
  className?: string;
}

/**
 * Background layer only. Drop it inside any `relative overflow-hidden`
 * section (or make it `fixed`); it fills the parent, ignores pointer events
 * and is hidden from assistive tech.
 */
export function MedicineNebula({ className }: MedicineNebulaProps) {
  const [field, setField] = React.useState<Layer[]>([]);
  const nodes = React.useRef<(HTMLSpanElement | null)[]>([]);

  // Random layout is built after mount, so server and client markup match.
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setField(buildField());
  }, []);

  // Pointer-follow + scroll-reactive motion: every layer eases toward the
  // cursor (smaller ones travel further) and, as the page scrolls, sways and
  // spins on its own phase so the field feels connected to the scroll.
  // Writes transforms directly, no React re-renders.
  React.useEffect(() => {
    if (field.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hasHover = window.matchMedia("(hover: hover)").matches;

    const pos = field.map(() => ({ x: 0, y: 0 }));
    let tx = 0;
    let ty = 0;
    let targetScroll = window.scrollY;
    let scroll = targetScroll;
    let raf = 0;

    const tick = () => {
      let moving = false;
      scroll += (targetScroll - scroll) * 0.08;
      if (Math.abs(targetScroll - scroll) > 0.2) moving = true;

      field.forEach((m, i) => {
        const node = nodes.current[i];
        if (!node) return;
        const p = pos[i];
        const gx = tx * 2 * m.follow;
        const gy = ty * 2 * m.follow;
        p.x += (gx - p.x) * 0.07;
        p.y += (gy - p.y) * 0.07;
        if (Math.abs(gx - p.x) > 0.1 || Math.abs(gy - p.y) > 0.1) moving = true;

        // Scroll: bounded sway (never leaves the screen) plus a slow spin.
        const phase = i * 1.7;
        const freq = 0.0012 + (i % 5) * 0.0004;
        const amp = m.follow * 1.1;
        const sx = Math.cos(scroll * freq * 0.8 + phase) * amp * 0.6;
        const sy = Math.sin(scroll * freq + phase) * amp;
        const spin = scroll * (i % 2 ? 1 : -1) * (0.03 + (i % 4) * 0.01);

        node.style.transform = `translate3d(${(p.x + sx).toFixed(1)}px, ${(p.y + sy).toFixed(1)}px, 0) rotate(${(p.x * 0.1 + spin).toFixed(1)}deg)`;
      });
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      wake();
    };
    const onScroll = () => {
      targetScroll = window.scrollY;
      wake();
    };

    if (hasHover) window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [field]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* The nebula: soft coloured blur blobs */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      {field.map((m, i) => (
        <span
          key={i}
          className={cn("absolute block", m.desktopOnly && "hidden md:block")}
          style={{ left: `${m.x}%`, top: `${m.y}%`, width: m.w }}
        >
          {/* Pointer-follow layer */}
          <span
            ref={(el) => {
              nodes.current[i] = el;
            }}
            className="kyp-parallax block"
          >
            {/* Float layer */}
            <span
              className="kyp-float block"
              style={
                {
                  "--rot": `${m.rot}deg`,
                  "--dx": `${m.dx}px`,
                  "--dy": `${m.dy}px`,
                  animationDuration: `${m.duration}s`,
                  animationDelay: `${m.delay}s`,
                } as React.CSSProperties
              }
            >
              <span
                className="block"
                style={{
                  opacity: m.opacity,
                  filter:
                    m.kind === "question"
                      ? `blur(${m.blur}px)`
                      : `blur(${m.blur}px) drop-shadow(0 10px 12px rgb(40 20 40 / 0.22))`,
                }}
              >
                {m.kind === "capsule" ? (
                  <Capsule id={`kyp-cap-${i}`} palette={m.palette} />
                ) : m.kind === "tablet" ? (
                  <Tablet id={`kyp-tab-${i}`} palette={m.palette ?? 0} />
                ) : (
                  <span
                    className="block select-none text-center font-sans font-black leading-none text-foreground"
                    style={{
                      fontSize: m.fontSize,
                      transform: m.flip ? "scaleX(-1)" : undefined,
                    }}
                  >
                    ?
                  </span>
                )}
              </span>
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

/** Full-section version (matches the original `Component` export). */
export const Component = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="hero-section relative flex h-screen w-full items-center justify-center overflow-hidden bg-background">
      <MedicineNebula />
      <div className="relative z-10 max-w-2xl p-8 text-center">{children}</div>
    </main>
  );
};
