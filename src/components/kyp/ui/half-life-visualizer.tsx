/**
 * Half-Life Visualizer — Stahl's classic "5 half-lives" teaching, drawn.
 *
 * Shown on every drug page (Prescriber's Guide, Zone 3b). Turns the
 * drug's stated half-life into the three moments that matter:
 *   - ≈ 95% of steady state (4.32 × t½)
 *   - full steady state (≈ 5 × t½)
 *   - washout after stopping (≈ 5 × t½) — the switching safety number
 *
 * Data rules (same as the whole product):
 *   - the verbatim half-life string from drug.mechanism is ALWAYS
 *     displayed, next to any derived numbers;
 *   - derived numbers are idealized single-compartment estimates for
 *     education — the caption says so;
 *   - when the string cannot be parsed confidently (irreversible MAOIs,
 *     prodrugs, active-metabolite-governed drugs), the widget degrades
 *     to the verbatim text + the generic 5-half-lives rule — no curve,
 *     no invented numbers.
 */

import { Info, Timer } from "lucide-react";

import {
  formatDuration,
  halfLifeFacts,
  parseHalfLife,
} from "@/lib/kyp/pharmacokinetics/half-life";
import { cn } from "@/lib/utils";

export interface HalfLifeVisualizerProps {
  /** Drug display name — used in labels only. */
  drugName: string;
  /** Verbatim half-life string from drug.mechanism.halfLife. */
  halfLifeText: string;
  className?: string;
}

/* ---------- SVG geometry ---------- */

const W = 560;
const H = 250;
const M_LEFT = 44;
const M_RIGHT = 16;
const M_TOP = 20;
const M_BOTTOM = 36;
const PLOT_W = W - M_LEFT - M_RIGHT;
const PLOT_H = H - M_TOP - M_BOTTOM;

/** t is in half-life multiples (0–10); frac 0–1 of steady state. */
const x = (t: number) => M_LEFT + (t / 10) * PLOT_W;
const y = (frac: number) => M_TOP + (1 - frac) * PLOT_H;

function path(points: [number, number][]): string {
  return points
    .map(([px, py], i) => `${i === 0 ? "M" : "L"}${px.toFixed(1)} ${py.toFixed(1)}`)
    .join(" ");
}

function buildCurves() {
  // Accumulation with repeated dosing: 1 - e^(-t/τ), t in τ units, 0–5.
  const accumulation: [number, number][] = [];
  const accumulationArea: [number, number][] = [];
  for (let i = 0; i <= 60; i++) {
    const t = (i / 60) * 5;
    accumulation.push([x(t), y(1 - Math.exp(-t))]);
    accumulationArea.push([x(t), y(1 - Math.exp(-t))]);
  }
  accumulationArea.push([x(5), y(0)], [x(0), y(0)]);

  // Washout after stopping at steady state: e^(-Δ/τ), Δ in τ units, 0–5.
  const washout: [number, number][] = [];
  for (let i = 0; i <= 60; i++) {
    const delta = (i / 60) * 5;
    washout.push([x(5 + delta), y(Math.exp(-delta))]);
  }

  return { accumulation, accumulationArea, washout };
}

/* ---------- Component ---------- */

export function HalfLifeVisualizer({
  drugName,
  halfLifeText,
  className,
}: HalfLifeVisualizerProps) {
  const parsed = parseHalfLife(halfLifeText);
  const facts = parsed ? halfLifeFacts(parsed) : null;
  const curves = parsed ? buildCurves() : null;

  return (
    <div
      className={cn(
        "rounded-xl border border-border/60 bg-background p-5",
        className
      )}
      data-testid="half-life-visualizer"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-overline text-muted-foreground">
          <Timer className="h-3.5 w-3.5 text-brand" aria-hidden />
          Half-life timeline — the 5 half-lives rule
        </p>
        <span className="text-[0.7rem] font-medium text-muted-foreground/70">
          {drugName}
        </span>
      </div>

      {/* Verbatim first — always */}
      <p className="text-xs leading-relaxed text-foreground/85">
        <span className="font-semibold">Stated half-life: </span>
        {halfLifeText || "Not stated in this profile."}
      </p>

      {parsed && facts && curves ? (
        <>
          {/* The curve */}
          <figure className="mt-4">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full"
              role="img"
              aria-label={`${drugName}: plasma level climbs to about 95 percent of steady state over roughly ${formatDuration(facts.ninetyFivePercentHours)} of consistent dosing, and falls to near zero over about ${formatDuration(facts.washoutHours)} after stopping.`}
            >
              {/* grid + axes */}
              {[0, 0.25, 0.5, 0.75, 1].map((f) => (
                <g key={f}>
                  <line
                    x1={M_LEFT}
                    x2={W - M_RIGHT}
                    y1={y(f)}
                    y2={y(f)}
                    className="stroke-border/50"
                    strokeWidth="1"
                  />
                  <text
                    x={M_LEFT - 8}
                    y={y(f) + 3.5}
                    textAnchor="end"
                    fontSize="10"
                    className="fill-current text-muted-foreground/80"
                  >
                    {Math.round(f * 100)}%
                  </text>
                </g>
              ))}

              {/* 95% reference line */}
              <line
                x1={M_LEFT}
                x2={W - M_RIGHT}
                y1={y(0.95)}
                y2={y(0.95)}
                className="stroke-brand/50"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x={W - M_RIGHT}
                y={y(0.95) - 5}
                textAnchor="end"
                fontSize="10"
                className="fill-current text-brand"
              >
                ≈ 95% of steady state
              </text>

              {/* stop marker */}
              <line
                x1={x(5)}
                x2={x(5)}
                y1={M_TOP}
                y2={M_TOP + PLOT_H}
                className="stroke-muted-foreground/50"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <text
                x={x(5) + 4}
                y={M_TOP + 12}
                fontSize="10"
                className="fill-current text-muted-foreground"
              >
                stopping
              </text>

              {/* accumulation area + line */}
              <path
                d={path(curves.accumulationArea)}
                className="fill-brand/10"
              />
              <path
                d={path(curves.accumulation)}
                fill="none"
                className="stroke-brand"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* washout line */}
              <path
                d={path(curves.washout)}
                fill="none"
                className="stroke-warning"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
              />

              {/* steady-state + cleared dots */}
              <circle cx={x(5)} cy={y(1 - Math.exp(-5))} r="4" className="fill-brand" />
              <circle
                cx={x(10)}
                cy={y(Math.exp(-5))}
                r="4"
                className="fill-warning"
              />

              {/* x axis labels — half-life multiples */}
              {Array.from({ length: 11 }, (_, i) => i).map((t) => (
                <text
                  key={t}
                  x={x(t)}
                  y={M_TOP + PLOT_H + 16}
                  textAnchor="middle"
                  fontSize="10"
                  className="fill-current text-muted-foreground/80"
                >
                  {t === 0 ? "0" : `${t}×`}
                </text>
              ))}
              <text
                x={M_LEFT + PLOT_W / 2}
                y={H - 4}
                textAnchor="middle"
                fontSize="10"
                className="fill-current text-muted-foreground/70"
              >
                time in half-life multiples — 1× ≈ {formatDuration(parsed.representativeHours)}
              </text>
            </svg>
            <figcaption className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[0.7rem] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-0.5 w-4 rounded bg-brand" aria-hidden />
                climbing toward steady state (consistent daily dosing)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-0.5 w-4 rounded bg-warning" aria-hidden />
                falling after stopping
              </span>
            </figcaption>
          </figure>

          {/* The three moments */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-brand/30 bg-brand-soft/20 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-brand">
                ≈ 95% of steady state
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {formatDuration(facts.ninetyFivePercentHours)}
              </p>
              <p className="mt-0.5 text-[0.7rem] leading-snug text-muted-foreground">
                of consistent dosing (≈ 4.3 × half-life)
              </p>
            </div>
            <div className="rounded-lg border border-brand/30 bg-brand-soft/20 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-brand">
                Full steady state
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {formatDuration(facts.steadyStateHours)}
              </p>
              <p className="mt-0.5 text-[0.7rem] leading-snug text-muted-foreground">
                (≈ 5 × half-life) — where dose changes fully show
              </p>
            </div>
            <div className="rounded-lg border border-warning/30 bg-warning/5 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-warning">
                Washout after stopping
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {formatDuration(facts.washoutHours)}
              </p>
              <p className="mt-0.5 text-[0.7rem] leading-snug text-muted-foreground">
                to ≈ 97% cleared — the switching-safety number
              </p>
            </div>
          </div>

          <p className="mt-3 flex items-start gap-2 text-[0.7rem] leading-relaxed text-muted-foreground/70">
            <Info className="mt-0.5 h-3 w-3 shrink-0" aria-hidden />
            Idealized single-compartment estimate derived from the stated
            half-life (shown verbatim above). Real kinetics vary with age,
            liver and kidney function, and interactions — levels fall roughly
            50% every half-life, which is why missed doses and taper timing
            hang on this number.
          </p>
        </>
      ) : (
        /* Honest degradation — verbatim + the generic rule, no invented numbers */
        <div className="mt-3 rounded-lg border border-border/50 bg-muted/20 p-3">
          <p className="text-xs leading-relaxed text-foreground/85">
            This profile&apos;s half-life is not a single clean number (it may
            depend on active metabolites, irreversible binding or a
            combination of ingredients), so no timeline is drawn. The
            universal rule still applies: any medication reaches ≈ 97% of
            its steady state after about <span className="font-semibold">5
            half-lives</span> of consistent dosing, and is ≈ 97% cleared
            about 5 half-lives after the last dose — use the stated
            half-life above and this profile&apos;s own stopping guidance,
            not a generic curve.
          </p>
        </div>
      )}
    </div>
  );
}
