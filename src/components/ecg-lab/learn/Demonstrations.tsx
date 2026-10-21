import { useId, useMemo, useState } from 'react';
import {
  calibrationPulseHeightUnits,
  calibrationPulseWidthUnits,
  PREVIEW_CSS_PIXELS_PER_SVG_UNIT,
  SVG_UNITS_PER_MM,
  svgUnitsToMm,
  timeMsToSvgUnits,
  timeToMm,
  traceViewHeightUnits,
  voltageMvToSvgUnits,
} from '../engine/calibration';
import { heartRateFromRrMs } from '../engine/calibration';
import { allLeads, generateLeadSignals } from '../engine/signal';
import type { Gain, Lead, PaperSpeed, Sample } from '../engine/types';
import type { VisualDemonstration } from '../content/types';

function patternId(prefix: string, suffix: string) {
  return `${prefix}-${suffix.replace(/[^a-z0-9_-]/gi, '-')}`;
}

function Grid({ id }: { id: string }) {
  return <defs>
    <pattern id={`minor-${id}`} width={SVG_UNITS_PER_MM} height={SVG_UNITS_PER_MM} patternUnits="userSpaceOnUse">
      <path d={`M ${SVG_UNITS_PER_MM} 0 L 0 0 0 ${SVG_UNITS_PER_MM}`} fill="none" stroke="var(--grid-minor)" strokeWidth="0.45" />
    </pattern>
    <pattern id={`major-${id}`} width={SVG_UNITS_PER_MM * 5} height={SVG_UNITS_PER_MM * 5} patternUnits="userSpaceOnUse">
      <rect width={SVG_UNITS_PER_MM * 5} height={SVG_UNITS_PER_MM * 5} fill={`url(#minor-${id})`} />
      <path d={`M ${SVG_UNITS_PER_MM * 5} 0 L 0 0 0 ${SVG_UNITS_PER_MM * 5}`} fill="none" stroke="var(--grid-major)" strokeWidth="0.8" />
    </pattern>
  </defs>;
}

function MiniStrip({
  samples,
  speed,
  gain,
  durationMs,
  label,
  annotations = [],
  showGrid = true,
}: {
  samples: Sample[];
  speed: PaperSpeed;
  gain: Gain;
  durationMs: number;
  label: string;
  annotations?: Array<{ label: string; startMs: number; endMs: number }>;
  showGrid?: boolean;
}) {
  const instanceId = useId().replace(/[^a-z0-9_-]/gi, '-');
  const id = patternId('learn-grid', instanceId);
  const width = timeMsToSvgUnits(durationMs, speed);
  const maxAbs = Math.max(0.2, ...samples.map(sample => Math.abs(sample.voltageMv)));
  const height = traceViewHeightUnits(maxAbs, gain, 5, 36);
  const baseline = height / 2;
  const path = samples.filter((_, index) => index % 2 === 0).map((sample, index) =>
    `${index ? 'L' : 'M'} ${timeMsToSvgUnits(sample.timeMs, speed).toFixed(2)} ${(baseline - voltageMvToSvgUnits(sample.voltageMv, gain)).toFixed(2)}`,
  ).join(' ');
  return <div className="learn-strip-scroll" role="region" aria-label={`${label}; synthetic educational waveform, ${speed} mm/s and ${gain} mm/mV`} tabIndex={0}>
    <svg
      className="learn-strip"
      width={width * PREVIEW_CSS_PIXELS_PER_SVG_UNIT}
      height={height * PREVIEW_CSS_PIXELS_PER_SVG_UNIT}
      viewBox={`0 0 ${width} ${height}`}
      data-logical-width-units={width}
      role="img"
      aria-label={`${label}. Synthetic educational template, not validated patient morphology.`}
    >
      <Grid id={id} />
      {showGrid && <rect width={width} height={height} fill={`url(#major-${id})`} />}
      <line x1="0" x2={width} y1={baseline} y2={baseline} stroke="var(--trace-axis)" strokeDasharray="3 4" />
      <path d={path} fill="none" stroke="var(--trace)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      {annotations.map((annotation, index) => {
        const x1 = timeMsToSvgUnits(annotation.startMs, speed);
        const x2 = timeMsToSvgUnits(annotation.endMs, speed);
        return <g key={`${annotation.label}-${index}`}>
          <line x1={x1} x2={x1} y1="0" y2={height} stroke="var(--marker)" strokeDasharray="4 4" />
          <line x1={x2} x2={x2} y1="0" y2={height} stroke="var(--marker)" strokeDasharray="4 4" />
          <text x={(x1 + x2) / 2} y="14" textAnchor="middle" fill="var(--primary-ink)" fontSize="10">{annotation.label}</text>
        </g>;
      })}
    </svg>
  </div>;
}

function CalibrationExplorer({ demonstration }: { demonstration: Extract<VisualDemonstration, { kind: 'calibration-explorer' }> }) {
  const [speed, setSpeed] = useState<PaperSpeed>(25);
  const [gain, setGain] = useState<Gain>(20);
  const [showGrid, setShowGrid] = useState(true);
  const [lead, setLead] = useState<Lead>('V3');
  const signals = useMemo(() => generateLeadSignals('sinus'), []);
  const samples = signals[lead];
  const id = `calibration-demo-${useId().replace(/[^a-z0-9_-]/gi, '-')}`;
  const pulseHeight = calibrationPulseHeightUnits(gain);
  const pulseWidth = calibrationPulseWidthUnits(speed, 200);
  const margin = 4 * SVG_UNITS_PER_MM;
  const pulseBaseline = pulseHeight + margin;
  const pulseViewWidth = pulseWidth + 3 * margin;
  const pulseViewHeight = pulseHeight + 2 * margin;
  const logicalPulseHeightMm = svgUnitsToMm(pulseHeight);
  const logicalPulseWidthMm = svgUnitsToMm(pulseWidth);

  return <section className="learn-demo" aria-labelledby={`${id}-title`}>
    <div className="learn-demo-heading"><h4 id={`${id}-title`}>{demonstration.title}</h4><p>{demonstration.description}</p></div>
    <div className="learn-demo-controls">
      <label>Demonstration speed
        <select value={speed} onChange={event => setSpeed(Number(event.target.value) as PaperSpeed)}>
          <option value="12.5">12.5 mm/s</option><option value="25">25 mm/s</option><option value="50">50 mm/s</option>
        </select>
      </label>
      <label>Demonstration gain
        <select value={gain} onChange={event => setGain(Number(event.target.value) as Gain)}>
          <option value="5">5 mm/mV</option><option value="10">10 mm/mV</option><option value="20">20 mm/mV</option>
        </select>
      </label>
      <label>Demonstration lead
        <select value={lead} onChange={event => setLead(event.target.value as Lead)}>
          {allLeads().map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
      <label className="learn-check-control"><input type="checkbox" checked={showGrid} onChange={event => setShowGrid(event.target.checked)} /> Show ECG grid</label>
    </div>
    <MiniStrip samples={samples} speed={speed} gain={gain} durationMs={10_000} label={`${lead} template with adjustable calibration`} showGrid={showGrid} />
    <div className="learn-calibration-readout" role="status" aria-live="polite">
      <span>10-second duration</span><strong>{timeToMm(10, speed)} logical mm</strong>
      <span>1 mV pulse height</span><strong>{logicalPulseHeightMm} logical mm</strong>
      <span>200 ms pulse width</span><strong>{logicalPulseWidthMm} logical mm</strong>
    </div>
    <svg
      className="learn-pulse"
      width={pulseViewWidth * PREVIEW_CSS_PIXELS_PER_SVG_UNIT}
      height={pulseViewHeight * PREVIEW_CSS_PIXELS_PER_SVG_UNIT}
      viewBox={`0 0 ${pulseViewWidth} ${pulseViewHeight}`}
      role="img"
      aria-label={`Calibration pulse: 1 millivolt is ${logicalPulseHeightMm} logical millimetres at ${gain} millimetres per millivolt; 200 milliseconds is ${logicalPulseWidthMm} logical millimetres at ${speed} millimetres per second.`}
    >
      <Grid id={`${id}-pulse`} />
      {showGrid && <rect width={pulseViewWidth} height={pulseViewHeight} fill={`url(#major-${id}-pulse)`} />}
      <path d={`M 0 ${pulseBaseline} H ${margin} V ${pulseBaseline - pulseHeight} H ${margin + pulseWidth} V ${pulseBaseline} H ${pulseViewWidth}`} fill="none" stroke="var(--primary)" strokeWidth="2" />
    </svg>
    <small className="learn-demo-note">Browser preview: {PREVIEW_CSS_PIXELS_PER_SVG_UNIT} CSS px per SVG unit. Logical millimetres are not guaranteed physical screen size.</small>
  </section>;
}

function LimbLeadExplorer({ demonstration }: { demonstration: Extract<VisualDemonstration, { kind: 'limb-lead-relationships' }> }) {
  const signals = useMemo(() => generateLeadSignals('sinus'), []);
  return <section className="learn-demo" aria-labelledby={`limb-${demonstration.id}`}>
    <div className="learn-demo-heading"><h4 id={`limb-${demonstration.id}`}>{demonstration.title}</h4><p>{demonstration.description}</p></div>
    <div className="learn-lead-stack">
      {demonstration.leads.map(lead => <div className="learn-lead-row" key={lead}>
        <strong>{lead}</strong>
        <MiniStrip samples={signals[lead]} speed={25} gain={10} durationMs={10_000} label={`Lead ${lead}`} />
      </div>)}
    </div>
    <small className="learn-demo-note">One shared deterministic synthetic recording, fixed 25 mm/s and 10 mm/mV. Educational template, not clinically validated.</small>
  </section>;
}

function WaveformComponents({ demonstration }: { demonstration: Extract<VisualDemonstration, { kind: 'waveform-components' }> }) {
  const signals = useMemo(() => generateLeadSignals('sinus'), []);
  return <section className="learn-demo" aria-labelledby={`waveform-${demonstration.id}`}>
    <div className="learn-demo-heading"><h4 id={`waveform-${demonstration.id}`}>{demonstration.title}</h4><p>{demonstration.description}</p></div>
    <MiniStrip
      samples={signals[demonstration.lead]}
      speed={25}
      gain={20}
      durationMs={10_000}
      label={`Lead ${demonstration.lead} with authored template annotations`}
      annotations={demonstration.annotations}
    />
    <small className="learn-demo-note">Annotation ranges are authored display regions only. No automated boundary detection is performed.</small>
  </section>;
}

function RrRateExplorer({ demonstration }: { demonstration: Extract<VisualDemonstration, { kind: 'rr-rate' }> }) {
  const [rrInput, setRrInput] = useState(String(demonstration.initialRrMs));
  const rrMs = Number(rrInput);
  const validRr = Number.isInteger(rrMs) && rrMs >= 300 && rrMs <= 3000;
  const rate = validRr ? heartRateFromRrMs(rrMs) : 0;
  return <section className="learn-demo" aria-labelledby={`rr-${demonstration.id}`}>
    <div className="learn-demo-heading"><h4 id={`rr-${demonstration.id}`}>{demonstration.title}</h4><p>{demonstration.description}</p></div>
    <label className="rr-control">RR interval in milliseconds
      <input type="number" min="300" max="3000" step="20" value={rrInput} onChange={event => setRrInput(event.target.value)} aria-invalid={!validRr} />
    </label>
    <p className="rr-result" role="status" aria-live="polite">{validRr
      ? <>Rate from this manual RR value: <strong>{rate.toFixed(1)} bpm</strong> <span>(60,000 ÷ {rrMs} ms)</span></>
      : 'Enter a whole RR interval from 300 to 3000 ms.'}</p>
  </section>;
}

export function Demonstration({ demonstration }: { demonstration: VisualDemonstration }) {
  switch (demonstration.kind) {
    case 'calibration-explorer': return <CalibrationExplorer demonstration={demonstration} />;
    case 'limb-lead-relationships': return <LimbLeadExplorer demonstration={demonstration} />;
    case 'waveform-components': return <WaveformComponents demonstration={demonstration} />;
    case 'rr-rate': return <RrRateExplorer demonstration={demonstration} />;
  }
}
