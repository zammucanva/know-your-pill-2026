import { useEffect, useMemo, useRef, useState } from 'react';
import { EcgGridDefinitions } from './EcgGrid';
import { PREVIEW_CSS_PIXELS_PER_SVG_UNIT, SVG_UNITS_PER_MM, svgUnitsToTimeMs, timeMsToSvgUnits, traceViewHeightUnits, voltageMvToSvgUnits } from '../engine/calibration';
import { SimulationClock, type ClockSnapshot } from '../engine/clock';
import { locateMeasurementMarker, measurementTimeAtPreviewX, type MeasurementMarkerPosition } from '../engine/measurements';
import type { EcgAnnotation } from '../engine/annotations';
import { generateLeadSamples, generateLeadWindow, allLeads } from '../engine/signal';
import type { Gain, Lead, LeadSignals, MachineConfig, PaperSpeed, Sample } from '../engine/types';

type LiveEcgMonitorProps = {
  config: MachineConfig;
  view: 'single' | 'multi';
  onViewChange: (view: 'single' | 'multi') => void;
  onPlaybackReset: () => void;
  onPlaceMarker: (timeMs: number) => void;
  activeMarker: 'start' | 'end';
  maxAbsVoltageMv: number;
  markers?: [number, number];
  annotations: EcgAnnotation[];
  onClockSnapshot?: (snapshot: ClockSnapshot) => void;
  restoreRequest?: { id: number; elapsedMs: number };
};

const leads = allLeads();
const initialClock: ClockSnapshot = { elapsedMs: 0, isPlaying: false, isSuspended: false };

function browserScheduler() {
  return {
    request: (callback: (timestampMs: number) => void) => window.requestAnimationFrame(callback),
    cancel: (handle: number) => window.cancelAnimationFrame(handle),
  };
}

function useViewportWidth(element: HTMLElement | null): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!element) return;
    const update = () => {
      const nextWidth = element.clientWidth;
      setWidth(current => current === nextWidth ? current : nextWidth);
    };
    update();
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(update);
      observer.observe(element);
      return () => observer.disconnect();
    }
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [element]);

  return width;
}

function pathForSamples(samples: Sample[], elapsedMs: number, speed: PaperSpeed, gain: Gain, widthUnits: number, heightUnits: number, preset: MachineConfig['preset']): string {
  const baseline = heightUnits / 2;
  const rrMs = preset === 'brady' ? 1200 : preset === 'tachy' ? 600 : 800;
  const rPeakIndex = Math.round(rrMs * 0.3 * 250 / 1000);
  const previewPixelsPerSample = speed * SVG_UNITS_PER_MM / 250 * PREVIEW_CSS_PIXELS_PER_SVG_UNIT;
  const decimation = Math.max(1, Math.ceil(1 / (previewPixelsPerSample * 2)));
  const displayPhase = ((rPeakIndex % decimation) + decimation) % decimation;
  const commands: string[] = [];
  let commandIndex = 0;
  samples.forEach((sample, index) => {
    const absoluteSampleIndex = Math.round(sample.timeMs * 250 / 1000);
    const phase = ((absoluteSampleIndex % decimation) + decimation) % decimation;
    if (phase !== displayPhase && index !== samples.length - 1) return;
    const x = widthUnits + timeMsToSvgUnits(sample.timeMs - elapsedMs, speed);
    const y = baseline - voltageMvToSvgUnits(sample.voltageMv, gain);
    commands.push(`${commandIndex++ === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
  });
  return commands.join(' ');
}

function MeasurementMarker({ marker, name, selected, labelLane, showLabel, labelMinX, widthUnits, heightUnits }: {
  marker: MeasurementMarkerPosition;
  name: 'start' | 'end';
  selected: boolean;
  labelLane: number;
  showLabel: boolean;
  labelMinX: number;
  widthUnits: number;
  heightUnits: number;
}) {
  if (marker.visibility !== 'visible') return null;
  const labelText = selected ? `${name === 'start' ? 'Start' : 'End'} · active` : name === 'start' ? 'Start' : 'End';
  const labelWidth = Math.min(widthUnits, selected ? 68 : 38);
  const labelX = Math.min(widthUnits - labelWidth, Math.max(labelMinX, marker.xUnits - labelWidth / 2));
  const labelY = 4 + labelLane * 18;
  return <g
    className={`measurement-marker${selected ? ' is-selected' : ''}`}
    data-testid={`measurement-marker-${name}`}
    data-marker-position={marker.visibility}
    data-time-ms={marker.timeMs.toFixed(3)}
    data-x-units={marker.xUnits.toFixed(3)}
    data-selected={selected}
    aria-hidden="true"
  >
    <line x1={marker.xUnits} x2={marker.xUnits} y1="40" y2={heightUnits} stroke="var(--marker)" strokeWidth={selected ? 3 : 2} strokeDasharray={selected ? undefined : '5 4'} vectorEffect="non-scaling-stroke" />
    {showLabel && <>
      <rect x={labelX} y={labelY} width={labelWidth} height="16" rx="2" className="measurement-marker-label" />
      <text x={labelX + labelWidth / 2} y={labelY + 11.5} textAnchor="middle" className="measurement-marker-text">{labelText}</text>
    </>}
  </g>;
}

function markerDescription(position: MeasurementMarkerPosition): string {
  if (position.visibility === 'before') return 'before visible window';
  if (position.visibility === 'after') return 'ahead of sweep';
  return 'in view';
}

function AnnotationRegion({ annotation, start, end, widthUnits }: {
  annotation: EcgAnnotation;
  start: MeasurementMarkerPosition;
  end: MeasurementMarkerPosition;
  widthUnits: number;
}) {
  if (end.xUnits < 0 || start.xUnits > widthUnits) return null;
  const x = Math.max(0, start.xUnits);
  const endX = Math.min(widthUnits, end.xUnits);
  const width = Math.max(1, endX - x);
  const label = annotation.source === 'authored' ? `Teaching region: ${annotation.label}` : `Learner note: ${annotation.label}`;
  return <g className={`timeline-annotation timeline-annotation-${annotation.source}`} data-annotation-id={annotation.id} data-annotation-source={annotation.source} aria-hidden="true">
    <rect x={x} y="1" width={width} height="27" />
    {width >= 38 && <text x={x + 4} y="18" textLength={Math.max(0, width - 8)} lengthAdjust="spacingAndGlyphs"><title>{label}</title>{annotation.label}</text>}
  </g>;
}

function LiveTrace({ lead, samples, config, elapsedMs, widthUnits, heightUnits, showLabel, showMarkers, showMarkerLabels, markers, annotations, activeMarker, onPlaceMarker }: {
  lead: Lead;
  samples: Sample[];
  config: MachineConfig;
  elapsedMs: number;
  widthUnits: number;
  heightUnits: number;
  showLabel: boolean;
  showMarkers: boolean;
  showMarkerLabels: boolean;
  markers?: [number, number];
  annotations: EcgAnnotation[];
  activeMarker: 'start' | 'end';
  onPlaceMarker: (timeMs: number) => void;
}) {
  const baseline = heightUnits / 2;
  const patternId = `live-${lead.replace(/[^a-z0-9]/gi, '-')}`;
  const currentPaperPositionUnits = timeMsToSvgUnits(elapsedMs, config.paperSpeed);
  const gridOffsetUnits = widthUnits - currentPaperPositionUnits;
  const markerPositions = markers?.map(timeMs => locateMeasurementMarker(timeMs, elapsedMs, widthUnits, config.paperSpeed)) ?? [];
  const annotationPositions = annotations.map(annotation => ({
    annotation,
    start: locateMeasurementMarker(annotation.startMs, elapsedMs, widthUnits, config.paperSpeed),
    end: locateMeasurementMarker(annotation.endMs, elapsedMs, widthUnits, config.paperSpeed),
  }));
  const visibleStartMs = elapsedMs - svgUnitsToTimeMs(widthUnits, config.paperSpeed);
  const waveformLabel = `${lead} synthetic educational ECG waveform, moving paper sweep, ${config.paperSpeed} mm/s, ${config.gain} mm/mV, ECG grid ${config.showGrid ? 'visible' : 'hidden'}`;

  return <div className={`live-trace-row${showLabel ? ' has-lead-label' : ''}`} data-lead={lead} data-sample-count={samples.length}>
    {showLabel && <strong className="live-lead-label">{lead}</strong>}
    <svg
      className="live-trace-svg"
      width="100%"
      height={heightUnits * PREVIEW_CSS_PIXELS_PER_SVG_UNIT}
      viewBox={`0 0 ${widthUnits} ${heightUnits}`}
      role="img"
      aria-label={waveformLabel}
      data-simulation-time-ms={elapsedMs.toFixed(3)}
      data-paper-position-units={currentPaperPositionUnits.toFixed(3)}
      data-visible-start-ms={visibleStartMs.toFixed(3)}
      data-sample-count={samples.length}
      onPointerDown={event => {
        const rect = event.currentTarget.getBoundingClientRect();
        const timeMs = measurementTimeAtPreviewX(event.clientX - rect.left, rect.width, elapsedMs, widthUnits, config.paperSpeed);
        if (timeMs !== null) onPlaceMarker(timeMs);
      }}
    >
      <EcgGridDefinitions id={patternId} paperOffsetUnits={gridOffsetUnits} />
      {config.showGrid && <rect width={widthUnits} height={heightUnits} fill={`url(#major-${patternId})`} />}
      {annotationPositions.map(({ annotation, start, end }) => <AnnotationRegion key={annotation.id} annotation={annotation} start={start} end={end} widthUnits={widthUnits} />)}
      <line x1="0" x2={widthUnits} y1={baseline} y2={baseline} stroke="var(--trace-axis)" strokeDasharray="3 4" />
      <path className="live-waveform-path" d={pathForSamples(samples, elapsedMs, config.paperSpeed, config.gain, widthUnits, heightUnits, config.preset)} fill="none" stroke="var(--trace)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
      {showMarkers && markerPositions.map((position, index) => <MeasurementMarker key={index} marker={position} name={index === 0 ? 'start' : 'end'} selected={activeMarker === (index === 0 ? 'start' : 'end')} labelLane={index} showLabel={showMarkerLabels} labelMinX={showLabel ? 44 : 0} widthUnits={widthUnits} heightUnits={heightUnits} />)}
    </svg>
  </div>;
}

export function LiveEcgMonitor({ config, view, onViewChange, onPlaybackReset, onPlaceMarker, activeMarker, maxAbsVoltageMv, markers, annotations, onClockSnapshot, restoreRequest }: LiveEcgMonitorProps) {
  const [clockSnapshot, setClockSnapshot] = useState(initialClock);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [viewportElement, setViewportElement] = useState<HTMLDivElement | null>(null);
  const clockRef = useRef<SimulationClock | null>(null);
  const viewRef = useRef(view);
  const onClockSnapshotRef = useRef(onClockSnapshot);
  viewRef.current = view;
  onClockSnapshotRef.current = onClockSnapshot;
  const viewportWidthPx = useViewportWidth(viewportElement);
  const widthUnits = Math.max(1, viewportWidthPx / PREVIEW_CSS_PIXELS_PER_SVG_UNIT);
  const heightUnits = traceViewHeightUnits(maxAbsVoltageMv, config.gain);
  const visibleDurationMs = svgUnitsToTimeMs(widthUnits, config.paperSpeed);
  const markerPositions = markers?.map(timeMs => locateMeasurementMarker(timeMs, clockSnapshot.elapsedMs, widthUnits, config.paperSpeed)) ?? [];
  const singleSamples = useMemo(
    () => generateLeadSamples(config.preset, config.lead, clockSnapshot.elapsedMs - visibleDurationMs, clockSnapshot.elapsedMs),
    [config.preset, config.lead, clockSnapshot.elapsedMs, visibleDurationMs],
  );
  const multiSamples = useMemo(
    () => view === 'multi' ? generateLeadWindow(config.preset, clockSnapshot.elapsedMs - visibleDurationMs, clockSnapshot.elapsedMs) : null,
    [view, config.preset, clockSnapshot.elapsedMs, visibleDurationMs],
  );

  useEffect(() => {
    const clock = new SimulationClock(browserScheduler());
    clockRef.current = clock;
    let lastRenderedElapsedMs = Number.NEGATIVE_INFINITY;
    const unsubscribe = clock.subscribe(snapshot => {
      const minimumIntervalMs = viewRef.current === 'multi' ? 1000 / 30 : 0;
      const shouldRender = !snapshot.isPlaying || snapshot.isSuspended || snapshot.elapsedMs === 0 || snapshot.elapsedMs - lastRenderedElapsedMs >= minimumIntervalMs;
      if (shouldRender) {
        lastRenderedElapsedMs = snapshot.elapsedMs;
        setClockSnapshot(snapshot);
      }
      onClockSnapshotRef.current?.(snapshot);
    });
    const motionPreference = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    const updateMotionPreference = () => {
      const prefersReduced = motionPreference?.matches ?? false;
      setReducedMotion(prefersReduced);
      if (prefersReduced) clock.pause();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') clock.suspend();
      else clock.resumeFromSuspension();
    };

    updateMotionPreference();
    if (!motionPreference?.matches) clock.play();
    motionPreference?.addEventListener('change', updateMotionPreference);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      motionPreference?.removeEventListener('change', updateMotionPreference);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      unsubscribe();
      clock.dispose();
      if (clockRef.current === clock) clockRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!restoreRequest || !clockRef.current) return;
    // Restores deliberately pause, even if the saved experiment was running.
    clockRef.current.restore({ elapsedMs: restoreRequest.elapsedMs, isPlaying: false });
  }, [restoreRequest?.id]);

  const reset = () => {
    clockRef.current?.reset();
    onPlaybackReset();
  };
  const heading = view === 'single' ? `${config.lead} rhythm strip` : '12-lead overview';
  const label = view === 'single'
    ? `ECG waveform viewport for ${config.lead}, ${config.paperSpeed} mm/s, ${config.gain} mm/mV`
    : `12-lead ECG waveform viewport, shared time, ${config.paperSpeed} mm/s, ${config.gain} mm/mV`;

  return <>
    <div className="monitor-head">
      <div>
        <span className="live">MOVING PAPER STRIP · SYNTHETIC</span>
        <h3>{heading}</h3>
      </div>
      <div className="monitor-actions">
        <div className="playback-controls" role="group" aria-label="ECG playback controls">
          <button type="button" onClick={() => clockRef.current?.play()} disabled={clockSnapshot.isPlaying}>Start / resume</button>
          <button type="button" onClick={() => clockRef.current?.pause()} disabled={!clockSnapshot.isPlaying}>Pause</button>
          <button type="button" onClick={reset}>Reset playback</button>
          <span className="playback-state" aria-live="off">{clockSnapshot.isPlaying ? 'Running' : reducedMotion ? 'Paused · reduced motion' : 'Paused'}</span>
        </div>
        <div className="view-toggle" role="group" aria-label="Waveform layout">
          <button type="button" aria-pressed={view === 'single'} className={view === 'single' ? 'active' : ''} onClick={() => onViewChange('single')}>Single lead</button>
          <button type="button" aria-pressed={view === 'multi'} className={view === 'multi' ? 'active' : ''} onClick={() => onViewChange('multi')}>12 leads</button>
        </div>
      </div>
    </div>

    <div
      ref={setViewportElement}
      className={view === 'single' ? 'trace-wrap live-viewport' : 'multi-trace live-viewport'}
      role="region"
      aria-label={label}
      tabIndex={0}
      data-playing={clockSnapshot.isPlaying}
      data-suspended={clockSnapshot.isSuspended}
      data-simulation-time-ms={clockSnapshot.elapsedMs.toFixed(3)}
      data-paper-position-units={timeMsToSvgUnits(clockSnapshot.elapsedMs, config.paperSpeed).toFixed(3)}
      data-speed-mm-s={config.paperSpeed}
      data-gain-mm-mv={config.gain}
      data-marker-start-ms={markers?.[0].toFixed(3)}
      data-marker-end-ms={markers?.[1].toFixed(3)}
      data-marker-start-state={markerPositions[0]?.visibility ?? 'none'}
      data-marker-end-state={markerPositions[1]?.visibility ?? 'none'}
      data-annotation-count={annotations.length}
    >
      {view === 'single'
        ? <LiveTrace lead={config.lead} samples={singleSamples} config={config} elapsedMs={clockSnapshot.elapsedMs} widthUnits={widthUnits} heightUnits={heightUnits} showLabel={false} showMarkers showMarkerLabels markers={markers} annotations={annotations} activeMarker={activeMarker} onPlaceMarker={onPlaceMarker} />
        : leads.map((lead, index) => <LiveTrace key={lead} lead={lead} samples={multiSamples?.[lead] ?? []} config={config} elapsedMs={clockSnapshot.elapsedMs} widthUnits={widthUnits} heightUnits={heightUnits} showLabel showMarkers showMarkerLabels={index === 0} markers={markers} annotations={index === 0 ? annotations : []} activeMarker={activeMarker} onPlaceMarker={onPlaceMarker} />)}
      <div className="trace-meta"><span>{config.paperSpeed} mm/s · {config.gain} mm/mV</span><span>Shared recording clock · {view === 'single' ? config.lead : '12 leads aligned'}</span></div>
    </div>
    <div className="measurement-window-status" data-testid="measurement-window-status" aria-live="off">
      {markers && markerPositions.length === 2 ? <>
        <span>Start point {markers[0].toFixed(0)} ms: {markerDescription(markerPositions[0])}</span>
        <span>End point {markers[1].toFixed(0)} ms: {markerDescription(markerPositions[1])}</span>
      </> : <span>No active measurement. Add a measurement set to place markers.</span>}
    </div>
  </>;
}
