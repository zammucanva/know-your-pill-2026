import { alarmBurst, type PlannedAlarm, type PlannedTone } from './scheduler';

/**
 * Executes planned tones with Web Audio. One AudioContext per instance, created only when the
 * learner turns sound on (a click), with a master gain for mute and volume. Every node it starts is
 * tracked so pause, seek, reset and unmount stop pending sound. Failure to start audio never throws
 * into the app; it reports 'unavailable' or 'blocked' instead.
 */
export type AudioContextLike = {
  readonly currentTime: number;
  /** Reported by browsers that support it; used to start tones early by the output delay. */
  readonly outputLatency?: number;
  readonly baseLatency?: number;
  readonly state: string;
  readonly destination: unknown;
  resume(): Promise<void>;
  close(): Promise<void>;
  createOscillator(): OscillatorLike;
  createGain(): GainLike;
};
type ParamLike = { value: number; setValueAtTime(value: number, time: number): unknown; linearRampToValueAtTime(value: number, time: number): unknown; cancelScheduledValues(time: number): unknown };
export type GainLike = { gain: ParamLike; connect(target: unknown): unknown; disconnect(): void };
export type OscillatorLike = {
  type: string;
  frequency: ParamLike;
  connect(target: unknown): unknown;
  disconnect(): void;
  start(when: number): void;
  stop(when: number): void;
  onended: (() => void) | null;
};

export type AudioStatus = 'off' | 'running' | 'blocked' | 'unavailable';

export const DEFAULT_VOLUME = 0.35;
const BEAT_DURATION_S = 0.06;
const ATTACK_S = 0.005;
/** Alarm pulses are quieter than full scale and share the learner's master volume. */
const ALARM_LEVEL = 0.7;
const BEAT_LEVEL = 0.5;

export function browserAudioContext(): AudioContextLike | null {
  if (typeof window === 'undefined') return null;
  const Constructor = (window as unknown as { AudioContext?: new () => AudioContextLike; webkitAudioContext?: new () => AudioContextLike }).AudioContext
    ?? (window as unknown as { webkitAudioContext?: new () => AudioContextLike }).webkitAudioContext;
  if (!Constructor) return null;
  try { return new Constructor(); } catch { return null; }
}

type Voice = { oscillator: OscillatorLike; gain: GainLike; endS: number };

export class MonitorAudio {
  private context: AudioContextLike | null = null;
  private master: GainLike | null = null;
  private voices = new Set<Voice>();
  private muted = false;
  private volume = DEFAULT_VOLUME;
  private status: AudioStatus = 'off';
  private disposed = false;

  constructor(private readonly createContext: () => AudioContextLike | null = browserAudioContext) {}

  getStatus(): AudioStatus { return this.status; }
  isDisposed(): boolean { return this.disposed; }
  isMuted(): boolean { return this.muted; }
  getVolume(): number { return this.volume; }
  /** Output delay reported by the browser in seconds (0 when unknown). */
  outputLatency(): number {
    const context = this.context;
    if (!context) return 0;
    const value = context.outputLatency ?? context.baseLatency ?? 0;
    return Number.isFinite(value) && value > 0 ? value : 0;
  }

  /** Audio clock in seconds, or null when audio is not running. */
  now(): number | null { return this.status === 'running' && this.context ? this.context.currentTime : null; }

  /** Must be called from a user gesture (click or key press) because of browser autoplay rules. */
  async enable(): Promise<AudioStatus> {
    if (this.disposed) return this.status;
    try {
      if (!this.context) {
        this.context = this.createContext();
        if (!this.context) { this.status = 'unavailable'; return this.status; }
        this.master = this.context.createGain();
        this.master.gain.value = this.muted ? 0 : this.volume;
        this.master.connect(this.context.destination);
      }
      if (this.context.state !== 'running') await this.context.resume();
      this.status = this.context.state === 'running' ? 'running' : 'blocked';
    } catch {
      this.status = 'blocked';
    }
    return this.status;
  }

  /** Turns sound off: stops pending tones and suspends output without destroying the context. */
  disable(): void {
    this.cancelPending();
    this.status = this.context ? 'off' : this.status === 'unavailable' ? 'unavailable' : 'off';
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    this.applyMasterLevel();
    if (muted) this.cancelPending();
  }

  setVolume(volume: number): void {
    if (!Number.isFinite(volume)) return;
    this.volume = Math.max(0, Math.min(1, volume));
    this.applyMasterLevel();
  }

  playTones(tones: readonly PlannedTone[]): void {
    if (!this.canPlay()) return;
    for (const tone of tones) this.pulse(tone.atAudioS, BEAT_DURATION_S, tone.frequencyHz, BEAT_LEVEL, 'triangle');
  }

  playAlarm(alarm: PlannedAlarm): void {
    if (!this.canPlay()) return;
    for (const pulse of alarmBurst(alarm.priority)) this.pulse(alarm.atAudioS + pulse.offsetS, pulse.durationS, pulse.frequencyHz, ALARM_LEVEL, 'square');
  }

  /** Stops every tone that has not finished. Used for pause, seek, reset and mute. */
  cancelPending(): void {
    const now = this.context?.currentTime ?? 0;
    for (const voice of this.voices) {
      try {
        voice.gain.gain.cancelScheduledValues(now);
        voice.gain.gain.setValueAtTime(0, now);
        voice.oscillator.stop(now);
      } catch { /* already stopped */ }
      this.release(voice);
    }
    this.voices.clear();
  }

  /** Number of tones started and not yet finished; exposed for tests and diagnostics. */
  pendingCount(): number { return this.voices.size; }

  async dispose(): Promise<void> {
    if (this.disposed) return;
    this.cancelPending();
    this.disposed = true;
    const context = this.context;
    this.context = null;
    this.master?.disconnect();
    this.master = null;
    this.status = 'off';
    try { await context?.close(); } catch { /* closing a failed context is not an app error */ }
  }

  private canPlay(): boolean {
    return !this.disposed && !this.muted && this.status === 'running' && this.context !== null && this.master !== null;
  }

  private applyMasterLevel(): void {
    if (!this.master || !this.context) return;
    const level = this.muted ? 0 : this.volume;
    this.master.gain.cancelScheduledValues(this.context.currentTime);
    this.master.gain.setValueAtTime(level, this.context.currentTime);
  }

  private pulse(atS: number, durationS: number, frequencyHz: number, level: number, type: string): void {
    const context = this.context!;
    const start = Math.max(atS, context.currentTime);
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequencyHz, start);
    // Short ramps avoid clicks at the start and end of each tone.
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(level, start + ATTACK_S);
    gain.gain.setValueAtTime(level, start + durationS - ATTACK_S);
    gain.gain.linearRampToValueAtTime(0, start + durationS);
    oscillator.connect(gain);
    gain.connect(this.master);
    const voice: Voice = { oscillator, gain, endS: start + durationS };
    oscillator.onended = () => { this.release(voice); this.voices.delete(voice); };
    this.voices.add(voice);
    oscillator.start(start);
    oscillator.stop(start + durationS + 0.01);
  }

  private release(voice: Voice): void {
    voice.oscillator.onended = null;
    try { voice.oscillator.disconnect(); voice.gain.disconnect(); } catch { /* already disconnected */ }
  }
}
