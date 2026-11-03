import { useEffect, useMemo, useRef, useState } from 'react';
import { timeMsToSvgUnits, voltageMvToSvgUnits } from '../engine/calibration';
import { generateRhythmLeadSamples } from '../engine/rhythm-signal';
import { ALARM_SILENCE_MS, alarmLabels, type AlarmId, type AlarmState } from './alarms';
import { eventsBetween, type ScenarioTimeline } from './timeline';
import type { ToneSource } from './useMonitorRuntime';
import { plethWindow, readingsAt, respirationWindow, type ChannelStatus, type MonitorReadings, type WaveSample } from './vitals';
import type { AudioStatus } from '../audio/monitor-audio';
import type { ClockSnapshot } from '../engine/clock';

/** Recorded strips are always this long, whatever the visible window. */
export const MONITOR_WINDOW_MS = 6_000;
/** Visible trace windows. Narrow screens default to the shorter one; the scale never changes. */
export const TRACE_WINDOWS_MS = [3_000, 6_000] as const;
export type TraceWindowMs = (typeof TRACE_WINDOWS_MS)[number];
export const NARROW_SCREEN_QUERY = '(max-width: 560px)';
const ECG_SPEED = 25;
const ECG_GAIN = 10;
const ECG_HEIGHT_UNITS = 2 * voltageMvToSvgUnits(1.3, ECG_GAIN);
const AUX_HEIGHT_UNITS = 70;

export function formatSimTime(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

const statusText: Record<ChannelStatus, string> = {
  ok: '',
  poor: 'Poor signal',
  searching: 'Searching',
  off: 'Sensor off',
  'lead-off': 'Lead off',
  absent: 'Not monitored',
  pending: 'Not measured yet',
};

type TraceProps = {
  windowMs: TraceWindowMs;
  /** Draws one-second ticks along the bottom, counting back from the sweep head. */
  ticks?: boolean;
  title: string;
  source: string;
  className: string;
  path: string | null;
  heightUnits: number;
  unavailableText?: string;
};

function Trace({ windowMs, ticks = false, title, source, className, path, heightUnits, unavailableText }: TraceProps) {
  const widthUnits = timeMsToSvgUnits(windowMs, ECG_SPEED);
  const seconds = windowMs / 1000;
  const label = `last ${seconds} s`;
  return (
    <figure className={`bedside-trace ${className}`} data-window-ms={windowMs}>
      <figcaption><strong>{title}</strong> <span>{label} · {source}</span></figcaption>
      <svg viewBox={`0 0 ${widthUnits} ${heightUnits}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={`${title} trace, ${label}, ${source}${path ? '' : `, ${unavailableText ?? 'no signal'}`}`}>
        {ticks && (
          <g className="bedside-ticks" aria-hidden="true">
            {Array.from({ length: seconds + 1 }, (_, index) => {
              const x = widthUnits - timeMsToSvgUnits(index * 1000, ECG_SPEED);
              return <line key={index} x1={Math.max(0.5, x)} x2={Math.max(0.5, x)} y1={heightUnits - 6} y2={heightUnits} />;
            })}
          </g>
        )}
        {path ? <path d={path} fill="none" strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinejoin="round" /> : (
          <text x={widthUnits / 2} y={heightUnits / 2} textAnchor="middle" dominantBaseline="middle" className="bedside-trace-empty">{unavailableText ?? 'No signal'}</text>
        )}
      </svg>
    </figure>
  );
}

/** True while the viewport matches the narrow-screen query; follows resizes and rotation. */
function useNarrowScreen(): boolean {
  const query = typeof window !== 'undefined' && typeof window.matchMedia === 'function' ? window.matchMedia(NARROW_SCREEN_QUERY) : null;
  const [narrow, setNarrow] = useState(query?.matches ?? false);
  useEffect(() => {
    if (!query) return;
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [query?.media]);
  return narrow;
}

function auxPath(samples: (WaveSample | null)[], windowStartMs: number, heightUnits: number, scale: number, offset: number): string | null {
  const commands: string[] = [];
  let pen = false;
  for (const sample of samples) {
    if (!sample) { pen = false; continue; }
    const x = timeMsToSvgUnits(sample.timeMs - windowStartMs, ECG_SPEED);
    const y = heightUnits - offset - sample.value * scale;
    commands.push(`${pen ? 'L' : 'M'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    pen = true;
  }
  return commands.length > 1 ? commands.join(' ') : null;
}

type TileProps = {
  label: string;
  unit: string;
  source: string;
  value: string;
  status: ChannelStatus;
  className: string;
  alarmed: boolean;
  explanation: string;
  testId: string;
  /** Flashes a heart symbol in time with each beat the tone follows. */
  beat?: boolean;
  children?: React.ReactNode;
};

function Tile({ label, unit, source, value, status, className, alarmed, explanation, testId, beat, children }: TileProps) {
  return (
    <section className={`bedside-tile ${className}${alarmed ? ' alarmed' : ''}`} aria-label={`${label}: ${status === 'ok' ? `${value} ${unit}` : statusText[status]}${alarmed ? ', in alarm' : ''}`} data-testid={testId}>
      <header><span>{label}{beat !== undefined && <span className={beat ? 'bedside-beat on' : 'bedside-beat'} aria-hidden="true"> ♥</span>}</span><small>{unit}</small></header>
      <output className="bedside-value" aria-hidden="true">{status === 'ok' || status === 'poor' ? value : '---'}</output>
      {status !== 'ok' && <p className="bedside-status">{statusText[status]}</p>}
      {children}
      <details>
        <summary>About {label}</summary>
        <p><strong>Source:</strong> {source}.</p>
        <p>{explanation}</p>
      </details>
    </section>
  );
}

type BedsideMonitorProps = {
  timeline: ScenarioTimeline;
  snapshot: ClockSnapshot;
  alarms: AlarmState;
  reducedMotion: boolean;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onAcknowledge: () => void;
  onRecordStrip?: (endMs: number) => void;
  audio: {
    status: AudioStatus;
    muted: boolean;
    volume: number;
    toneSource: ToneSource;
    enable: () => Promise<AudioStatus>;
    disable: () => void;
    setMuted: (value: boolean) => void;
    setVolume: (value: number) => void;
    setToneSource: (value: ToneSource) => void;
    test: () => Promise<boolean>;
  };
};

const audioStatusText: Record<AudioStatus, string> = {
  off: 'Sound off',
  running: 'Sound on',
  blocked: 'The browser did not allow sound to start. Try the button again.',
  unavailable: 'Sound is not available in this browser. Every alarm is also shown on screen.',
};

/**
 * Simulated bedside monitor. Original layout informed by common monitoring conventions; it does
 * not reproduce any manufacturer's screen. Everything shown is generated teaching data.
 */
export function BedsideMonitor({ timeline, snapshot, alarms, reducedMotion, onPlay, onPause, onReset, onAcknowledge, onRecordStrip, audio }: BedsideMonitorProps) {
  const now = snapshot.elapsedMs;
  const [showPleth, setShowPleth] = useState(true);
  const [showResp, setShowResp] = useState(true);
  const [announcement, setAnnouncement] = useState('');
  const narrow = useNarrowScreen();
  const [chosenWindow, setChosenWindow] = useState<TraceWindowMs | null>(null);
  const windowMs: TraceWindowMs = chosenWindow ?? (narrow ? 3_000 : 6_000);
  const readings: MonitorReadings = readingsAt(timeline, now);
  const windowStart = now - windowMs;
  const ended = now >= timeline.scenario.durationMs;
  const limits = timeline.scenario.alarmLimits;

  const ecgPath = useMemo(() => {
    if (readings.heartRate.status === 'lead-off') return null;
    const samples = generateRhythmLeadSamples(timeline.schedule, 'II', windowStart, now);
    const baseline = ECG_HEIGHT_UNITS / 2;
    return samples.map((sample, index) => `${index === 0 ? 'M' : 'L'} ${timeMsToSvgUnits(sample.timeMs - windowStart, ECG_SPEED).toFixed(1)} ${(baseline - voltageMvToSvgUnits(sample.voltageMv, ECG_GAIN)).toFixed(1)}`).join(' ');
  }, [timeline, windowStart, now, readings.heartRate.status]);
  const plethPath = useMemo(() => showPleth ? auxPath(plethWindow(timeline, windowStart, now), windowStart, AUX_HEIGHT_UNITS, 52, 8) : null, [timeline, windowStart, now, showPleth]);
  const respPath = useMemo(() => showResp ? auxPath(respirationWindow(timeline, windowStart, now), windowStart, AUX_HEIGHT_UNITS, 26, AUX_HEIGHT_UNITS / 2) : null, [timeline, windowStart, now, showResp]);

  const alarmedIds = new Set(alarms.active.map(alarm => alarm.id));
  // The heart flashes for each beat the tone follows (ECG beats, or pleth pulses for the oximeter tone).
  const beatTimes = audio.toneSource === 'ecg' ? timeline.ecgDetectedQrsTimesMs : timeline.plethPulseTimesMs;
  const beatNow = snapshot.isPlaying && eventsBetween(beatTimes, now - 150, now).length > 0;
  const silenced = alarms.silencedUntilMs !== null && now < alarms.silencedUntilMs;

  // Announce alarm onsets once, not every frame.
  const announcedRef = useRef(0);
  useEffect(() => {
    const fresh = alarms.log.slice(announcedRef.current).filter(entry => entry.event === 'onset' || entry.event === 'cleared');
    announcedRef.current = alarms.log.length;
    if (fresh.length > 0) setAnnouncement(fresh.map(entry => `${entry.event === 'onset' ? 'Alarm' : 'Cleared'}: ${alarmLabels[entry.id]}`).join('. '));
  }, [alarms.log]);

  const fmt = (reading: { value: number | null }) => reading.value === null ? '---' : String(reading.value);

  return (
    <div
      className="bedside"
      data-simulation-time-ms={Math.round(now)}
      data-playing={snapshot.isPlaying}
      data-heart-rate={readings.heartRate.value ?? ''}
      data-alarm-ids={alarms.active.map(alarm => alarm.id).join(' ')}
      data-audio-status={audio.status}
      data-phase={readings.phaseId}
    >
      <div className="bedside-screen">
        <header className="bedside-head">
          <span className="bedside-bed">{timeline.scenario.bedLabel}</span>
          <span className="bedside-sim">SIMULATION · generated teaching data · not connected to a patient</span>
          <span className="bedside-clock" aria-label={`Simulated time ${formatSimTime(now)} of ${formatSimTime(timeline.scenario.durationMs)}`}>{formatSimTime(now)} / {formatSimTime(timeline.scenario.durationMs)}</span>
          {/* On the screen itself, so the sound control is the first thing found, on phones too. */}
          {audio.status === 'running'
            ? <button type="button" className="bedside-sound-toggle on" onClick={audio.disable}><span aria-hidden="true">🔊 </span>Turn sound off</button>
            : <button type="button" className="bedside-sound-toggle" onClick={() => { void audio.enable(); }}><span aria-hidden="true">🔇 </span>Turn on monitor sound</button>}
        </header>

        <div className={`bedside-alarm-bar${alarms.active.length ? ` active priority-${alarms.active[0].priority}` : ''}`} data-testid="alarm-bar">
          {alarms.active.length === 0 ? <span>No active alarms</span> : (
            <ul aria-label="Active alarms">
              {alarms.active.map(alarm => (
                <li key={alarm.id}><strong>{alarm.priority === 'medium' ? '!!' : alarm.priority === 'high' ? '!!!' : '!'}</strong> {alarm.message} <small>since {formatSimTime(alarm.onsetMs)}</small></li>
              ))}
            </ul>
          )}
          {alarms.active.length > 0 && (
            <button type="button" className="bedside-ack" onClick={onAcknowledge} disabled={silenced}>
              {silenced ? `Alarm sound silenced until ${formatSimTime(alarms.silencedUntilMs!)}` : `Silence alarm sound (${ALARM_SILENCE_MS / 1000} s)`}
            </button>
          )}
        </div>

        <div className="bedside-body">
          <div className="bedside-waves">
            <Trace windowMs={windowMs} ticks title="ECG II" source="25 mm/s · 10 mm/mV · synthetic · ticks 1 s" className="ecg" path={ecgPath} heightUnits={ECG_HEIGHT_UNITS} unavailableText="Lead off: no ECG signal" />
            {showPleth && <Trace windowMs={windowMs} title="Pleth" source="pulse oximeter · arbitrary units" className="pleth" path={plethPath} heightUnits={AUX_HEIGHT_UNITS} unavailableText={readings.spo2.status === 'absent' ? 'No pulse oximeter' : 'SpO₂ sensor off'} />}
            {showResp && <Trace windowMs={windowMs} title="Resp" source="simulated respiration · arbitrary units" className="resp" path={respPath} heightUnits={AUX_HEIGHT_UNITS} unavailableText="Respiration not monitored" />}
          </div>
          <div className="bedside-numerics">
            <Tile label="HR" unit="/min" source="ECG channel: average of the last R–R intervals" value={fmt(readings.heartRate)} status={readings.heartRate.status} className="ecg" alarmed={['hr-high', 'hr-low', 'hr-critical-high', 'hr-critical-low'].some(id => alarmedIds.has(id as AlarmId))} testId="tile-hr" beat={beatNow}
              explanation={`Counted from the simulated QRS complexes, so it follows the electrical rhythm. Simulation limits: ${limits.heartRate.low}–${limits.heartRate.high} per minute.`} />
            <Tile label="SpO₂" unit="%" source="pulse-oximetry channel" value={fmt(readings.spo2)} status={readings.spo2.status} className="pleth" alarmed={alarmedIds.has('spo2-low') || alarmedIds.has('spo2-critical-low')} testId="tile-spo2"
              explanation={`A separate simulated sensor with its own value and signal quality. The display changes gradually, one point at a time, after a change. Simulation low limit: ${limits.spo2.low}%.`}>
              <p className="bedside-sub">PR {fmt(readings.pulseRate)} /min <small>(from pleth pulses)</small></p>
            </Tile>
            <Tile label="NIBP" unit="mmHg" source="intermittent cuff measurement" value={readings.nibp.systolic === null ? '---' : `${readings.nibp.systolic}/${readings.nibp.diastolic}`} status={readings.nibp.status === 'ok' ? 'ok' : readings.nibp.status} className="nibp" alarmed={alarmedIds.has('sys-high') || alarmedIds.has('sys-low')} testId="tile-nibp"
              explanation={`Measured every ${timeline.scenario.nibpIntervalMs / 1000} s of simulated time in this exercise (compressed for teaching), so it can lag behind a change. Mean pressure is calculated from the two values, not measured. Simulation systolic limits: ${limits.systolic.low}–${limits.systolic.high} mmHg.`}>
              {readings.nibp.meanCalculated !== null && <p className="bedside-sub">MAP {readings.nibp.meanCalculated} <small>(calculated)</small></p>}
              {readings.nibp.measuredAtMs !== null && <p className="bedside-sub"><small>measured at {formatSimTime(readings.nibp.measuredAtMs)}</small></p>}
            </Tile>
            <Tile label="RR" unit="/min" source="simulated respiration channel" value={fmt(readings.respiratoryRate)} status={readings.respiratoryRate.status} className="resp" alarmed={alarmedIds.has('rr-high') || alarmedIds.has('rr-low')} testId="tile-rr"
              explanation={`A configured simulated value. Simulation limits: ${limits.respiratoryRate.low}–${limits.respiratoryRate.high} per minute.`} />
            <Tile label="Temp" unit="°C" source="simulated temperature probe" value={readings.temperatureC.value === null ? '---' : readings.temperatureC.value.toFixed(1)} status={readings.temperatureC.status} className="temp" alarmed={false} testId="tile-temp"
              explanation="A configured simulated value. No temperature alarm is set in this exercise." />
          </div>
        </div>
      </div>

      <div className="bedside-controls">
        <div className="bedside-group" role="group" aria-label="Scenario playback">
          {snapshot.isPlaying
            ? <button type="button" className="cta" onClick={onPause}>Pause</button>
            : <button type="button" className="cta" onClick={onPlay} disabled={ended}>{now === 0 ? 'Start scenario' : 'Resume'}</button>}
          <button type="button" className="cta secondary" onClick={onReset}>Reset scenario</button>
          {onRecordStrip && <button type="button" className="cta secondary" onClick={() => onRecordStrip(now)} disabled={now < MONITOR_WINDOW_MS}>Record 6-second strip</button>}
        </div>
        <div className="bedside-group bedside-window" role="group" aria-label="Visible trace window">
          <span>Show the last</span>
          {TRACE_WINDOWS_MS.map(option => (
            <button key={option} type="button" className="cta secondary" aria-pressed={windowMs === option} onClick={() => setChosenWindow(option)}>{option / 1000} s</button>
          ))}
          <small>Same 25 mm/s scale; only how much time is visible changes.</small>
        </div>
        <div className="bedside-group" role="group" aria-label="Waveforms shown">
          <label><input type="checkbox" checked={showPleth} onChange={event => setShowPleth(event.target.checked)} /> Pleth</label>
          <label><input type="checkbox" checked={showResp} onChange={event => setShowResp(event.target.checked)} /> Resp</label>
        </div>
        <div className="bedside-group bedside-sound" role="group" aria-label="Monitor sound">
          <button type="button" className="cta secondary" onClick={() => { void audio.test(); }}>Test sound</button>
          <label><input type="checkbox" checked={audio.muted} onChange={event => audio.setMuted(event.target.checked)} /> Mute</label>
          <label>Volume <input type="range" min="0" max="1" step="0.05" value={audio.volume} onChange={event => audio.setVolume(Number(event.target.value))} /></label>
          <label>Beat tone from
            <select value={audio.toneSource} onChange={event => audio.setToneSource(event.target.value as ToneSource)}>
              <option value="ecg">ECG (QRS beep)</option>
              <option value="pleth">Pulse oximeter (pitch follows SpO₂)</option>
            </select>
          </label>
          <p className="bedside-note" role="status">{audioStatusText[audio.status]}{audio.status === 'running' && audio.muted ? ' (muted)' : ''}{audio.status === 'running' && !audio.muted && !snapshot.isPlaying ? '. The heartbeat tone plays while the scenario is running.' : ''}</p>
        </div>
      </div>
      {reducedMotion && <p className="bedside-note">Reduced motion is on, so the traces update once per second instead of scrolling.</p>}
      <p className="bedside-note">Tones are synthesised by this simulator and follow the simulated beats. They are not recordings of any real monitor, and pitch conventions differ between devices.</p>
      <p className="visually-hidden" role="status" aria-live="polite">{announcement}</p>
    </div>
  );
}
