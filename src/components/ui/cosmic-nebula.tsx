"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Cosmic nebula, KYP edition: "the pill and the questions".
 *
 * A decorative background made of one glossy red/white capsule (plus
 * smaller pills) surrounded by bold question marks at random sizes, tilts
 * and mirror flips, floating over soft coloured gradient blobs. It is live
 * markup, not an image, and is built to hold 60fps:
 *
 *  - one DOM element = one compositor layer per shape, moved with
 *    transform / translate / rotate only (no layout, no paint);
 *  - blur and shadow are baked into each SVG (rasterised once) instead of
 *    CSS filters that would be re-run on the GPU every frame;
 *  - the pointer/scroll loop only runs while something is moving, caches
 *    the viewport size, and skips writes whose value did not change.
 *
 * The CSS `float` animation drives `transform`; the JS loop drives the
 * separate `translate` and `rotate` properties, so both compose on one
 * element. Everything stops under prefers-reduced-motion. The arrangement
 * is re-randomised on every page load (client only, so no hydration
 * mismatch).
 */

interface Layer {
  kind: "capsule" | "tablet" | "question";
  /** Index into PALETTES (capsules and tablets). */
  palette?: number;
  /** Position, % of the container. */
  x: number;
  y: number;
  /** Width: px number for question marks, CSS length for pills. */
  w: string;
  rot: number;
  /** Mirror horizontally (turns "?" into a "¿"-style glyph). */
  flip?: boolean;
  opacity: number;
  /** Blur as a fraction of the shape's own size (scales with it). */
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

/** Blur + soft drop shadow, baked into the shape's own raster. */
function PillFilter({ id, sd, dy }: { id: string; sd: number; dy: number }) {
  return (
    <filter id={id} x="-20%" y="-25%" width="140%" height="160%" colorInterpolationFilters="sRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation={sd} result="b" />
      <feGaussianBlur in="SourceAlpha" stdDeviation={sd * 3 + 2} result="s" />
      <feOffset in="s" dy={dy} result="so" />
      <feColorMatrix
        in="so"
        values="0 0 0 0 0.16  0 0 0 0 0.08  0 0 0 0 0.16  0 0 0 0.22 0"
        result="sc"
      />
      <feMerge>
        <feMergeNode in="sc" />
        <feMergeNode in="b" />
      </feMerge>
    </filter>
  );
}

/** Flat, face-on round tablet with a score line and gloss, 100x100 grid. */
function Tablet({ id, palette, blur, opacity }: { id: string; palette: number; blur: number; opacity: number }) {
  const [hi, base, shade] = PALETTES[palette % PALETTES.length];
  // Palette 3 gets a classic white tablet; the rest are coloured.
  const white = palette === 3;
  return (
    <svg
      viewBox="0 0 100 100"
      className="block h-auto w-full overflow-visible"
      fill="none"
      style={{ opacity }}
    >
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
        <PillFilter id={`${id}-f`} sd={blur * 100} dy={7} />
      </defs>
      <g filter={`url(#${id}-f)`}>
        <circle cx="50" cy="50" r="46" fill={`url(#${id}-face)`} />
        {/* Bevelled rim */}
        <circle cx="50" cy="50" r="39" stroke="#fff" strokeOpacity={0.35} strokeWidth={1.5} />
        {/* Score line */}
        <path d="M12 50H88" stroke={white ? "#8d8a7b" : shade} strokeOpacity={0.7} strokeWidth={3} strokeLinecap="round" />
        <path d="M12 53H88" stroke="#fff" strokeOpacity={0.5} strokeWidth={1.5} strokeLinecap="round" />
        {/* Gloss */}
        <path d="M22 34Q28 20 46 15" stroke="#fff" strokeOpacity={0.7} strokeWidth={6} strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Glossy two-tone capsule on a 200x100 grid, coloured half on the left. */
function Capsule({ id, palette, blur, opacity }: { id: string; palette: number; blur: number; opacity: number }) {
  const [hi, base, shade, bounce] = PALETTES[palette % PALETTES.length];
  return (
    <svg
      viewBox="0 0 200 100"
      className="block h-auto w-full overflow-visible"
      fill="none"
      style={{ opacity }}
    >
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
        <PillFilter id={`${id}-f`} sd={blur * 200} dy={9} />
      </defs>
      <g filter={`url(#${id}-f)`}>
        <g clipPath={`url(#${id}-clip)`}>
          <rect width="200" height="100" fill={`url(#${id}-white)`} />
          <path d="M0 0H96Q108 50 96 100H0Z" fill={`url(#${id}-red)`} />
          {/* Seam */}
          <path d="M96 0Q108 50 96 100" stroke="#fff" strokeOpacity={0.75} strokeWidth={2} />
          {/* Gloss on both halves */}
          <path d="M14 40Q18 20 46 14H84" stroke="#fff" strokeOpacity={0.42} strokeWidth={7} strokeLinecap="round" />
          <path d="M118 16H168" stroke="#fff" strokeOpacity={0.9} strokeWidth={8} strokeLinecap="round" />
          {/* Shade under the coloured half */}
          <path d="M20 84Q50 94 90 90" stroke={shade} strokeOpacity={0.45} strokeWidth={6} strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

/** Bold question mark as SVG text so its blur is baked in too. */
function Question({ id, flip, blur, opacity }: { id: string; flip?: boolean; blur: number; opacity: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="block h-auto w-full select-none overflow-visible text-foreground"
      style={{ opacity }}
    >
      <defs>
        <filter id={`${id}-f`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={blur * 100} />
        </filter>
      </defs>
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fontSize="118"
        fontWeight="900"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="currentColor"
        filter={`url(#${id}-f)`}
        transform={flip ? "translate(100 0) scale(-1 1)" : undefined}
      >
        ?
      </text>
    </svg>
  );
}

const COLS = 5;
const ROWS = 5;

/** The big hero capsule, a flat tablet and two satellites. Fixed spots. */
const HEROES: Omit<Layer, "delay">[] = [
  { kind: "capsule", palette: 0, x: 52, y: 22, w: "clamp(230px, 30vw, 440px)", rot: -38, opacity: 0.55, blur: 0.006, duration: 26, dx: 36, dy: -26, follow: 70, desktopOnly: false },
  { kind: "tablet", palette: 0, x: 36, y: 64, w: "clamp(110px, 13vw, 200px)", rot: 14, opacity: 0.5, blur: 0.012, duration: 23, dx: -26, dy: 28, follow: 90, desktopOnly: false },
  { kind: "capsule", palette: 0, x: 6, y: 64, w: "clamp(90px, 10vw, 150px)", rot: 28, opacity: 0.4, blur: 0.03, duration: 21, dx: -24, dy: 30, follow: 120, desktopOnly: true },
  { kind: "capsule", palette: 0, x: 84, y: 68, w: "clamp(70px, 8vw, 120px)", rot: -112, opacity: 0.4, blur: 0.03, duration: 24, dx: 22, dy: -30, follow: 130, desktopOnly: true },
];

/** Extra random pills (capsules and flat tablets) in assorted colours. */
const EXTRA_PILLS = 4;

/** Jittered grid of question marks: random, yet no big empty areas. */
function buildField(): Layer[] {
  const out: Layer[] = [];
  const rnd = Math.random;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const size = Math.round(30 + Math.pow(rnd(), 1.6) * 130);
      out.push({
        kind: "question",
        x: ((c + 0.05 + rnd() * 0.9) / COLS) * 100,
        y: ((r + 0.05 + rnd() * 0.9) / ROWS) * 100,
        w: `${size}px`,
        rot: Math.round(rnd() * 360),
        flip: rnd() > 0.5,
        opacity: 0.06 + rnd() * 0.08,
        blur: 0.008 + rnd() * 0.02,
        duration: 16 + Math.round(rnd() * 16),
        delay: -Math.round(rnd() * 30),
        dx: Math.round((rnd() - 0.5) * 60),
        dy: Math.round((rnd() - 0.5) * 60),
        follow: 30 + Math.round((size / 160) * 90),
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
      blur: 0.025 + rnd() * 0.03,
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

  // Pointer-follow + scroll-reactive motion. Every layer eases toward the
  // cursor (smaller ones travel further) and, as the page scrolls, sways
  // and spins on its own phase. Writes `translate` / `rotate` directly (no
  // React re-renders), only while something is still moving.
  React.useEffect(() => {
    if (field.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const wide = window.matchMedia("(min-width: 768px)");

    // Per-layer constants and state, computed once.
    const n = field.length;
    const px = new Float32Array(n);
    const py = new Float32Array(n);
    const phase = Float32Array.from(field, (_, i) => i * 1.7);
    const freq = Float32Array.from(field, (_, i) => 0.0012 + (i % 5) * 0.0004);
    const amp = Float32Array.from(field, (m) => m.follow * 1.1);
    const spinK = Float32Array.from(field, (_, i) => (i % 2 ? 1 : -1) * (0.03 + (i % 4) * 0.01));
    const lastT: string[] = new Array(n).fill("");
    const lastR: string[] = new Array(n).fill("");

    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let tx = 0;
    let ty = 0;
    let targetScroll = window.scrollY;
    let scroll = targetScroll;
    let raf = 0;

    const tick = () => {
      let moving = false;
      scroll += (targetScroll - scroll) * 0.08;
      if (Math.abs(targetScroll - scroll) > 0.2) moving = true;

      for (let i = 0; i < n; i++) {
        const m = field[i];
        // Hidden (desktop-only on a narrow screen) layers cost nothing.
        if (m.desktopOnly && !wide.matches) continue;
        const node = nodes.current[i];
        if (!node) continue;

        const gx = tx * 2 * m.follow;
        const gy = ty * 2 * m.follow;
        px[i] += (gx - px[i]) * 0.07;
        py[i] += (gy - py[i]) * 0.07;
        if (Math.abs(gx - px[i]) > 0.1 || Math.abs(gy - py[i]) > 0.1) moving = true;

        // Scroll: bounded sway (never leaves the screen) plus a slow spin.
        const sx = Math.cos(scroll * freq[i] * 0.8 + phase[i]) * amp[i] * 0.6;
        const sy = Math.sin(scroll * freq[i] + phase[i]) * amp[i];

        const t = `${(px[i] + sx).toFixed(1)}px ${(py[i] + sy).toFixed(1)}px`;
        const r = `${(px[i] * 0.1 + scroll * spinK[i]).toFixed(1)}deg`;
        if (t !== lastT[i]) {
          node.style.translate = t;
          lastT[i] = t;
        }
        if (r !== lastR[i]) {
          node.style.rotate = r;
          lastR[i] = r;
        }
      }
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / vw - 0.5;
      ty = e.clientY / vh - 0.5;
      wake();
    };
    const onScroll = () => {
      targetScroll = window.scrollY;
      wake();
    };
    const onResize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
    };

    if (hasHover) window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [field]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ contain: "layout paint style" }}
    >
      {/* The nebula: soft coloured gradient blobs */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      {field.map((m, i) => {
        const id = `kyp-n${i}`;
        return (
          <span
            key={i}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            className={cn("kyp-item absolute", m.desktopOnly ? "hidden md:block" : "block")}
            style={
              {
                left: `${m.x}%`,
                top: `${m.y}%`,
                width: m.w,
                "--rot": `${m.rot}deg`,
                "--dx": `${m.dx}px`,
                "--dy": `${m.dy}px`,
                animationDuration: `${m.duration}s`,
                animationDelay: `${m.delay}s`,
              } as React.CSSProperties
            }
          >
            {m.kind === "capsule" ? (
              <Capsule id={id} palette={m.palette ?? 0} blur={m.blur} opacity={m.opacity} />
            ) : m.kind === "tablet" ? (
              <Tablet id={id} palette={m.palette ?? 0} blur={m.blur} opacity={m.opacity} />
            ) : (
              <Question id={id} flip={m.flip} blur={m.blur} opacity={m.opacity} />
            )}
          </span>
        );
      })}
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
