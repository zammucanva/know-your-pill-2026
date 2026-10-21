import { useId, useMemo } from 'react';
import { EcgGridDefinitions } from '../components/EcgGrid';
import { SVG_UNITS_PER_MM, timeMsToSvgUnits, traceViewHeightUnits, voltageMvToSvgUnits } from '../engine/calibration';
import { generateRhythmLeadSamples } from '../engine/rhythm-signal';
import type { Gain, Lead, PaperSpeed } from '../engine/types';
import { buildCase, type RhythmCase } from './cases';
import { STRIP_DURATION_MS } from './rhythms';

type RhythmStripProps = {
  definition: RhythmCase;
  lead?: Lead;
  paperSpeed?: PaperSpeed;
  gain?: Gain;
};

const TIME_BAR_UNITS = 5 * SVG_UNITS_PER_MM;

/**
 * A fixed six-second calibrated strip drawn from the case's own beat schedule with the shared
 * calibration functions. The accessible name describes the strip's settings but never its rhythm.
 */
export function RhythmStrip({ definition, lead = 'II', paperSpeed = 25, gain = 10 }: RhythmStripProps) {
  const gridId = useId().replace(/:/g, '');
  const { path, widthUnits, heightUnits, baseline } = useMemo(() => {
    const { schedule } = buildCase(definition);
    const samples = generateRhythmLeadSamples(schedule, lead, 0, STRIP_DURATION_MS);
    const maxAbs = Math.max(...samples.map(sample => Math.abs(sample.voltageMv)), 0);
    const width = timeMsToSvgUnits(STRIP_DURATION_MS, paperSpeed);
    const height = traceViewHeightUnits(maxAbs, gain);
    const zero = height / 2;
    const d = samples.map((sample, index) => `${index === 0 ? 'M' : 'L'} ${timeMsToSvgUnits(sample.timeMs, paperSpeed).toFixed(2)} ${(zero - voltageMvToSvgUnits(sample.voltageMv, gain)).toFixed(2)}`).join(' ');
    return { path: d, widthUnits: width, heightUnits: height, baseline: zero };
  }, [definition, lead, paperSpeed, gain]);

  const seconds = Array.from({ length: STRIP_DURATION_MS / 1000 + 1 }, (_, index) => index);
  const totalHeight = heightUnits + TIME_BAR_UNITS;
  return (
    <figure className="rhythm-strip">
      <svg viewBox={`0 0 ${widthUnits} ${totalHeight}`} role="img" aria-label={`Six-second synthetic ECG strip, lead ${lead}, ${paperSpeed} millimetres per second, ${gain} millimetres per millivolt. The rhythm is not named.`} preserveAspectRatio="xMidYMid meet">
        <EcgGridDefinitions id={gridId} />
        <rect width={widthUnits} height={heightUnits} fill="var(--surface-soft)" />
        <rect width={widthUnits} height={heightUnits} fill={`url(#major-${gridId})`} />
        <line x1="0" x2={widthUnits} y1={baseline} y2={baseline} stroke="var(--trace-axis)" strokeDasharray="3 4" strokeWidth="0.6" />
        <path d={path} fill="none" stroke="var(--trace)" strokeWidth="1.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <g aria-hidden="true">
          {seconds.map(second => {
            const x = Math.min(widthUnits - 0.5, timeMsToSvgUnits(second * 1000, paperSpeed));
            return (
              <g key={second}>
                <line x1={x} x2={x} y1={heightUnits} y2={heightUnits + 6} stroke="var(--trace-axis)" strokeWidth="1" />
                <text x={Math.min(widthUnits - 14, x + 3)} y={heightUnits + 15} fontSize="9" fill="var(--muted)">{second} s</text>
              </g>
            );
          })}
        </g>
      </svg>
      <figcaption>Lead {lead} · {paperSpeed} mm/s · {gain} mm/mV · 6 s · synthetic educational trace</figcaption>
    </figure>
  );
}
