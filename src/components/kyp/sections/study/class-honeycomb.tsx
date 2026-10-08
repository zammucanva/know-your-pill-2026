"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ClassHoneycomb: the medication-class picker for Study Mode.
 *
 * A honeycomb of round bubbles, one per class. The bubbles near the
 * pointer grow and the rest shrink (a fisheye, like a watch home screen);
 * hovering or focusing a bubble names it, and choosing one opens its
 * medications in a panel. Every medication stays a plain link.
 *
 * Honest by construction: only real classes and counts are shown, the
 * colour comes from the class's own full name, and nothing here changes
 * the course data. Without pointer movement, with reduced motion, or on
 * touch screens the bubbles simply sit at rest and tapping selects.
 */

export interface HoneycombDrug {
  slug: string;
  name: string;
  readTime: string;
  questions: number;
  yieldLabel: string;
  highYield: boolean;
  objective: string;
}

export interface HoneycombClass {
  label: string;
  fullName: string;
  courses: number;
  questions: number;
  drugs: HoneycombDrug[];
}

type Family = "antidepressant" | "antipsychotic" | "mood" | "calming" | "stimulant" | "other";

const FAMILY_STYLE: Record<Family, string> = {
  antidepressant: "bg-teal-500/15 text-teal-700 ring-teal-500/40 dark:text-teal-300",
  antipsychotic: "bg-violet-500/15 text-violet-700 ring-violet-500/40 dark:text-violet-300",
  mood: "bg-amber-500/15 text-amber-700 ring-amber-500/40 dark:text-amber-300",
  calming: "bg-sky-500/15 text-sky-700 ring-sky-500/40 dark:text-sky-300",
  stimulant: "bg-orange-500/15 text-orange-700 ring-orange-500/40 dark:text-orange-300",
  other: "bg-slate-500/15 text-slate-700 ring-slate-500/40 dark:text-slate-300",
};

/** RGB triplets for each family's glow (matches the bubble tint). */
const FAMILY_GLOW: Record<Family, string> = {
  antidepressant: "20, 184, 166",
  antipsychotic: "139, 92, 246",
  mood: "245, 158, 11",
  calming: "14, 165, 233",
  stimulant: "249, 115, 22",
  other: "100, 116, 139",
};

const FAMILY_LABEL: Record<Family, string> = {
  antidepressant: "Antidepressants",
  antipsychotic: "Antipsychotics",
  mood: "Mood stabilisers and anticonvulsants",
  calming: "Anxiolytics, sedatives and sleep",
  stimulant: "Stimulants and ADHD",
  other: "Other agents",
};

function familyOf(c: HoneycombClass): Family {
  const t = `${c.label} ${c.fullName}`.toLowerCase();
  if (/antipsychotic|neuroleptic|dopamine (partial|antagonist)|d2/.test(t)) return "antipsychotic";
  if (/antidepress|ssri|snri|tricyclic|maoi|monoamine|serotonin|reuptake|nassa|sari|spari/.test(t))
    return "antidepressant";
  if (/mood|lithium|anticonvuls|valpro|carbamaz|lamotrig/.test(t)) return "mood";
  if (/benzodiaz|anxiol|sedativ|hypnotic|sleep|z-drug|orexin|melatonin|barbitur/.test(t)) return "calming";
  if (/stimulant|adhd|amphetamine|methylphen|atomoxetine|alpha-2/.test(t)) return "stimulant";
  return "other";
}

/** Short text for the bubble face; the full name appears on hover. */
function shortLabel(label: string): string {
  const clean = label.trim();
  if (clean.length <= 6) return clean;
  const words = clean.split(/[\s/-]+/).filter(Boolean);
  if (words.length > 1) return words.map((w) => w[0]).join("").slice(0, 4).toUpperCase();
  return clean.slice(0, 4);
}

/** Columns: seven on wide screens, four on phones so bubbles stay tappable. */
const WIDE_COLS = 7;
const PHONE_COLS = 4;
const PHONE_MAX_WIDTH = 520;

export function ClassHoneycomb({ classes }: { classes: HoneycombClass[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [pointer, setPointer] = React.useState<{ x: number; y: number } | null>(null);
  // The lens eases toward the pointer so the motion feels fluid, not jumpy.
  const [lensPos, setLensPos] = React.useState<{ x: number; y: number } | null>(null);
  const [focusIdx, setFocusIdx] = React.useState<number | null>(null);
  const [hover, setHover] = React.useState<number | null>(null);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", onChange);
    };
  }, []);

  React.useEffect(() => {
    if (reduced) {
      setLensPos(pointer);
      return;
    }
    let raf = 0;
    const tick = () => {
      let again = false;
      setLensPos((cur) => {
        if (!pointer) return null;
        if (!cur) return pointer;
        const dx = pointer.x - cur.x;
        const dy = pointer.y - cur.y;
        if (Math.hypot(dx, dy) < 0.5) return pointer;
        again = true;
        return { x: cur.x + dx * 0.22, y: cur.y + dy * 0.22 };
      });
      if (again || pointer) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pointer, reduced]);

  const compact = width > 0 && width < PHONE_MAX_WIDTH;
  const COLS = compact ? PHONE_COLS : WIDE_COLS;
  const step = width > 0 ? width / (COLS + 0.5) : 0;
  const rowH = step * 0.866;
  const rows = Math.ceil(classes.length / COLS);
  const height = rows * rowH + step * 0.6;

  const positions = React.useMemo(
    () =>
      classes.map((_, i) => {
        const r = Math.floor(i / COLS);
        const c = i % COLS;
        return {
          x: (c + 0.75 + (r % 2 ? 0.5 : 0)) * step - step * 0.25,
          y: r * rowH + step * 0.55,
        };
      }),
    [classes, step, rowH, COLS]
  );

  // Where the "lens" sits: the pointer, else the focused bubble, else the middle.
  const lens =
    lensPos ??
    (focusIdx !== null && positions[focusIdx]
      ? positions[focusIdx]
      : { x: width / 2, y: height / 2 });
  const radius = step * 2.4;

  const scaleFor = (i: number): number => {
    // No fisheye on phones: every bubble keeps a comfortable tap size.
    if (reduced || compact || step === 0) return 1;
    const dx = positions[i].x - lens.x;
    const dy = positions[i].y - lens.y;
    const d = Math.hypot(dx, dy);
    return 0.5 + 0.7 * Math.exp(-((d / radius) ** 2));
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const next = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setPointer(next);
    // First contact snaps the lens to the pointer; later moves are eased.
    setLensPos((cur) => cur ?? next);
  };

  const shown = hover ?? focusIdx ?? selected;
  const caption = shown !== null ? classes[shown] : null;
  const chosen = selected !== null ? classes[selected] : null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)]">
      <div>
        <div
          ref={ref}
          onPointerMove={onMove}
          onPointerLeave={() => {
            // Reset at once: lens back to rest, no hover, no lingering focus.
            setPointer(null);
            setLensPos(null);
            setHover(null);
            setFocusIdx(null);
          }}
          style={{ height }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/60"
          role="group"
          aria-label="Medication classes"
        >
          {pointer && !reduced && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(circle ${step * 2.6}px at ${lens.x}px ${lens.y}px, color-mix(in oklch, var(--brand) 8%, transparent), transparent 70%)`,
              }}
            />
          )}
          {step > 0 &&
            classes.map((c, i) => {
              const s = scaleFor(i);
              const size = step * 0.86;
              const fam = familyOf(c);
              const active = selected === i;
              const near = reduced ? 0 : Math.max(0, Math.min(1, (s - 0.5) / 0.7));
              const hot = hover === i || focusIdx === i;
              const glow = FAMILY_GLOW[fam];
              const boost = hot ? 1 : near * near;
              const shadow =
                boost > 0.15 || active
                  ? `0 0 ${6 + 10 * boost}px ${boost * 1.5}px rgba(${glow}, ${0.05 + 0.2 * boost})`
                  : "none";
              return (
                <button
                  key={c.label}
                  type="button"
                  aria-pressed={active}
                  aria-label={`${c.fullName}: ${c.courses} ${c.courses === 1 ? "course" : "courses"}, ${c.questions} questions`}
                  onClick={() => setSelected(active ? null : i)}
                  onPointerEnter={(e) => e.pointerType !== "touch" && setHover(i)}
                  onFocus={(e) => {
                    // Only keyboard focus moves the lens; a mouse click
                    // leaves focus on the button and must not pin it.
                    if (e.currentTarget.matches(":focus-visible")) setFocusIdx(i);
                  }}
                  onBlur={() => setFocusIdx((f) => (f === i ? null : f))}
                  style={{
                    width: size,
                    height: size,
                    left: positions[i].x,
                    top: positions[i].y,
                    transform: `translate(-50%, -50%) scale(${s})`,
                    zIndex: Math.round(s * 100) + (hot ? 50 : 0),
                    boxShadow: shadow,
                  }}
                  className={cn(
                    "absolute flex items-center justify-center rounded-full text-center font-semibold leading-none ring-1 kyp-focus-ring",
                    "transition-[transform,box-shadow] duration-100 ease-out motion-reduce:transition-none active:brightness-95",
                    FAMILY_STYLE[fam],
                    active && "ring-2 ring-offset-2 ring-offset-background shadow-lg"
                  )}
                >
                  <span style={{ fontSize: Math.max(9, size * 0.2) }}>{shortLabel(c.label)}</span>
                </button>
              );
            })}
        </div>

        <p
          className="mt-3 min-h-10 text-sm text-muted-foreground"
          aria-live="polite"
        >
          {caption ? (
            <>
              <span className="font-serif font-semibold text-foreground">{caption.fullName}</span>
              <span className="ml-2 text-xs">
                {caption.courses} {caption.courses === 1 ? "course" : "courses"} ·{" "}
                {caption.questions} questions
              </span>
            </>
          ) : (
            "Move over the bubbles to explore. Choose one to see its medications."
          )}
        </p>

        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {(Object.keys(FAMILY_LABEL) as Family[]).map((f) => (
            <li key={f} className="inline-flex items-center gap-1.5">
              <span className={cn("h-2.5 w-2.5 rounded-full ring-1", FAMILY_STYLE[f])} aria-hidden />
              {FAMILY_LABEL[f]}
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0">
        {chosen ? (
          <div className="rounded-2xl border border-border/50 bg-background/60">
            <div className="flex items-start justify-between gap-3 border-b border-border/40 p-4">
              <div className="min-w-0">
                <p className="text-overline text-brand">{chosen.label}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold leading-snug text-foreground">
                  {chosen.fullName}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {chosen.courses} {chosen.courses === 1 ? "course" : "courses"} ·{" "}
                  {chosen.questions} questions
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close class"
                className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground kyp-focus-ring"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <ul className="p-2">
              {chosen.drugs.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/drugs/${d.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-brand-soft/30"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium text-foreground">{d.name}</span>
                      <span className="block truncate text-xs text-muted-foreground/70">
                        {d.objective}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-3 text-right text-xs text-muted-foreground/70">
                      <span>
                        <span className="block">
                          {d.readTime} · {d.questions} q
                        </span>
                        <span className={cn("block", d.highYield && "font-medium text-brand/80")}>
                          {d.yieldLabel}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-brand" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex h-full min-h-40 items-center rounded-2xl border border-dashed border-border/60 p-6 text-sm leading-relaxed text-muted-foreground">
            Pick a class to see its medications, reading times and question counts. Every medication
            course is one tap away.
          </div>
        )}
      </div>
    </div>
  );
}
