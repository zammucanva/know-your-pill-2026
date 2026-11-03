import { describe, expect, it, vi } from 'bun:test';
import type { ClockSnapshot } from '@/components/ecg-lab/engine/clock';
import { getMonitorScenario } from '@/components/ecg-lab/monitor/scenario';
import { buildScenarioTimeline } from '@/components/ecg-lab/monitor/timeline';
import { MonitorAudio, type AudioContextLike, type GainLike, type OscillatorLike } from '@/components/ecg-lab/audio/monitor-audio';
import { ALARM_REPEAT_MS, alarmBurst, BEAT_TONE_HZ, DRIFT_TOLERANCE_S, LOOKAHEAD_MS, MAX_LATENCY_COMPENSATION_S, spo2PitchHz, ToneScheduler, type PlannedTone, type SchedulerInput } from '@/components/ecg-lab/audio/scheduler';

const timeline = buildScenarioTimeline(getMonitorScenario('scenario.monitored-fast-heartbeat.01')!);
const beats = timeline.qrsTimesMs;

/**
 * Drives the scheduler like the monitor does: the simulated clock and the audio clock advance by
 * the same real time per frame. Cancelled tones (pause, seek) are removed if not yet played.
 */
function harness(options: { audioOffsetS?: number } = {}) {
  const scheduler = new ToneScheduler();
  let audioNowS = options.audioOffsetS ?? 12.5;
  let snapshot: ClockSnapshot = { elapsedMs: 0, isPlaying: false, isSuspended: false };
  let played: PlannedTone[] = [];
  const alarms: number[] = [];
  let alarm: SchedulerInput['alarm'] = null;
  let frequencyAt: SchedulerInput['frequencyAt'] = () => BEAT_TONE_HZ;
  const step = () => {
    const actions = scheduler.update({ snapshot, audioNowS, eventTimesMs: beats, frequencyAt, alarm });
    if (actions.cancelPending) played = played.filter(tone => tone.atAudioS <= audioNowS);
    played.push(...actions.tones);
    if (actions.alarm) alarms.push(actions.alarm.atAudioS);
  };
  return {
    play: () => { snapshot = { ...snapshot, isPlaying: true }; step(); },
    pause: () => { snapshot = { ...snapshot, isPlaying: false }; step(); },
    seek: (elapsedMs: number) => { snapshot = { ...snapshot, elapsedMs }; step(); },
    advance: (realMs: number, frames: number[] = [16]) => {
      let remaining = realMs;
      let index = 0;
      while (remaining > 0) {
        const delta = Math.min(remaining, frames[index++ % frames.length]);
        remaining -= delta;
        audioNowS += delta / 1000;
        if (snapshot.isPlaying) snapshot = { ...snapshot, elapsedMs: snapshot.elapsedMs + delta };
        step();
      }
    },
    setAlarm: (value: SchedulerInput['alarm']) => { alarm = value; },
    setFrequency: (value: SchedulerInput['frequencyAt']) => { frequencyAt = value; },
    played: () => played,
    alarms: () => alarms,
    audioNow: () => audioNowS,
  };
}

const beatsIn = (fromMs: number, toMs: number) => beats.filter(time => time > fromMs && time <= toMs);

describe('tone scheduler', () => {
  it('schedules every beat exactly once, at a fixed offset from simulated time, across the rhythm change', () => {
    const run = harness();
    run.play();
    run.advance(60_000, [16, 17, 33, 8, 16]);
    const played = run.played();
    expect(played.map(tone => tone.simTimeMs)).toEqual(beatsIn(0, 60_000 + LOOKAHEAD_MS).filter(time => time >= 0));
    const offsets = played.map(tone => tone.atAudioS - tone.simTimeMs / 1000);
    expect(Math.max(...offsets) - Math.min(...offsets)).toBeLessThan(1e-6);
  });

  it('never commits tones more than the lookahead ahead of simulated time', () => {
    const run = harness();
    run.play();
    run.advance(5_000);
    const last = run.played().at(-1)!;
    expect(last.simTimeMs).toBeLessThanOrEqual(5_000 + LOOKAHEAD_MS);
  });

  it('cancels pending tones on pause and resumes in sync without duplicates or gaps', () => {
    const run = harness();
    run.play();
    run.advance(10_000);
    run.pause();
    const pausedAt = 10_000;
    expect(run.played().every(tone => tone.simTimeMs <= pausedAt)).toBe(true);
    run.advance(3_000); // paused: simulated time does not move, nothing new is scheduled
    expect(run.played().every(tone => tone.simTimeMs <= pausedAt)).toBe(true);
    run.play();
    run.advance(10_000);
    const sims = run.played().map(tone => tone.simTimeMs);
    expect(sims).toEqual(beatsIn(0, 20_000 + LOOKAHEAD_MS).filter(time => time >= 0));
    const resumed = run.played().filter(tone => tone.simTimeMs > pausedAt);
    const offsets = resumed.map(tone => tone.atAudioS - tone.simTimeMs / 1000);
    expect(Math.max(...offsets) - Math.min(...offsets)).toBeLessThan(1e-6);
  });

  it('treats a reset or seek as a new position and drops what was committed for the old one', () => {
    const run = harness();
    run.play();
    run.advance(8_000);
    run.seek(0);
    run.advance(3_000);
    const afterReset = run.played().filter(tone => tone.atAudioS > run.audioNow() - 3.2);
    expect(afterReset.map(tone => tone.simTimeMs)).toEqual(beatsIn(0, 3_000 + LOOKAHEAD_MS).filter(time => time >= 0));
  });

  it('starts tones early by the reported output latency so they are heard on the beat', () => {
    const scheduler = new ToneScheduler();
    const latency = 0.08;
    const tones: PlannedTone[] = [];
    let audioNowS = 4;
    for (let now = 0; now <= 6_000; now += 16) {
      tones.push(...scheduler.update({ snapshot: { elapsedMs: now, isPlaying: true, isSuspended: false }, audioNowS, eventTimesMs: beats, frequencyAt: () => 880, alarm: null, outputLatencyS: latency }).tones);
      audioNowS += 0.016;
    }
    expect(tones.map(tone => tone.simTimeMs)).toEqual(beatsIn(0, 6_000 + LOOKAHEAD_MS + latency * 1000).filter(time => time >= 0));
    // Heard time = scheduled start + latency = the beat's simulated time on the shared mapping.
    tones.forEach(tone => expect(tone.atAudioS + latency - 4 - tone.simTimeMs / 1000).toBeCloseTo(0, 6));
    // A wildly large reported latency is capped rather than trusted.
    const cappedScheduler = new ToneScheduler();
    const input = (elapsedMs: number, audioNowS: number) => ({ snapshot: { elapsedMs, isPlaying: true, isSuspended: false }, audioNowS, eventTimesMs: [400], frequencyAt: () => 880, alarm: null, outputLatencyS: 5 });
    expect(cappedScheduler.update(input(0, 4)).tones).toEqual([]); // first update only establishes the clock mapping
    const capped = cappedScheduler.update(input(16, 4.016));
    expect(capped.tones[0].atAudioS).toBeCloseTo(4 + 0.4 - MAX_LATENCY_COMPENSATION_S, 6);
  });

  it('re-anchors when the clocks stop moving together, so tones never drift from the beats', () => {
    const scheduler = new ToneScheduler();
    let audioNowS = 10;
    let now = 0;
    let committed: PlannedTone[] = [];
    const step = () => {
      const actions = scheduler.update({ snapshot: { elapsedMs: now, isPlaying: true, isSuspended: false }, audioNowS, eventTimesMs: beats, frequencyAt: () => 880, alarm: null });
      if (actions.cancelPending) committed = committed.filter(tone => tone.atAudioS <= audioNowS);
      committed.push(...actions.tones);
    };
    for (; now < 5_000; now += 16) { step(); audioNowS += 0.016; }
    // A 250 ms frame stall: the simulation clock discards it, the audio clock does not.
    audioNowS += 0.25;
    step();
    expect(scheduler.reanchorCount()).toBe(1);
    for (let index = 0; index < 400; index += 1) { now += 16; audioNowS += 0.016; step(); }
    const after = committed.filter(tone => tone.simTimeMs > 5_200);
    const offsets = after.map(tone => tone.atAudioS - tone.simTimeMs / 1000);
    expect(Math.max(...offsets) - Math.min(...offsets)).toBeLessThan(1e-6);
    // The new mapping includes the stall: no committed tone keeps the stale mapping.
    expect(offsets[0]).toBeCloseTo(10 + 0.25, 6);
    expect(new Set(committed.map(tone => tone.simTimeMs)).size).toBe(committed.length);
    // Ordinary frame jitter well inside the tolerance never re-anchors.
    expect(DRIFT_TOLERANCE_S).toBeGreaterThan(0.016);
  });

  it('commits nothing on the first update after starting, so a frozen first frame cannot shift the mapping', () => {
    const scheduler = new ToneScheduler();
    const beat = (elapsedMs: number, audioNowS: number) => scheduler.update({ snapshot: { elapsedMs, isPlaying: true, isSuspended: false }, audioNowS, eventTimesMs: [100], frequencyAt: () => 880, alarm: null });
    expect(beat(0, 20).tones).toEqual([]); // play(): emitted before any animation frame
    const firstFrame = beat(0, 20.016); // the clock's first frame does not advance simulated time
    expect(firstFrame.tones).toEqual([{ kind: 'beat', simTimeMs: 100, atAudioS: 20.116, frequencyHz: 880 }]);
    expect(beat(16, 20.032).tones).toEqual([]);
  });

  it('stays silent for beats whose pitch source has no value', () => {
    const run = harness();
    run.setFrequency(() => null);
    run.play();
    run.advance(5_000);
    expect(run.played()).toEqual([]);
  });

  it('repeats an alarm burst at its interval, restarts it when the alarm changes, and stops it when cleared', () => {
    const run = harness();
    run.play();
    run.setAlarm({ id: 'hr-high', priority: 'medium' });
    run.advance(20_000);
    const medium = [...run.alarms()];
    expect(medium.length).toBe(Math.floor(20_000 / ALARM_REPEAT_MS.medium) + 1);
    medium.slice(1).forEach((time, index) => expect(time - medium[index]).toBeCloseTo(ALARM_REPEAT_MS.medium / 1000, 6));
    run.setAlarm(null);
    run.advance(20_000);
    expect(run.alarms().length).toBe(medium.length);
    run.setAlarm({ id: 'spo2-sensor-off', priority: 'low' });
    run.advance(16);
    expect(run.alarms().length).toBe(medium.length + 1);
  });

  it('maps a lower SpO2 to a lower pitch and gives each alarm priority a distinct burst', () => {
    expect(spo2PitchHz(100)).toBe(880);
    expect(spo2PitchHz(99)).toBeLessThan(spo2PitchHz(100));
    expect(spo2PitchHz(88)).toBeCloseTo(440, 6);
    expect(new Set(['high', 'medium', 'low'].map(priority => alarmBurst(priority as 'high').length)).size).toBe(3);
  });
});

function fakeContext(options: { state?: string; resumeFails?: boolean } = {}) {
  const started: { frequency: number; at: number }[] = [];
  const param = () => ({ value: 1, setValueAtTime: vi.fn(function (this: { value: number }, value: number) { this.value = value; }), linearRampToValueAtTime: vi.fn(), cancelScheduledValues: vi.fn() });
  const context = {
    currentTime: 3,
    state: options.state ?? 'suspended',
    destination: {},
    resume: vi.fn(async () => { if (options.resumeFails) throw new Error('blocked'); context.state = 'running'; }),
    close: vi.fn(async () => { context.state = 'closed'; }),
    createGain: vi.fn((): GainLike => ({ gain: param(), connect: vi.fn(), disconnect: vi.fn() })),
    createOscillator: vi.fn((): OscillatorLike => {
      const oscillator: OscillatorLike = {
        type: 'sine', frequency: param(), connect: vi.fn(), disconnect: vi.fn(), onended: null,
        start: vi.fn((at: number) => started.push({ frequency: (oscillator.frequency as unknown as { value: number }).value, at })),
        stop: vi.fn(),
      };
      return oscillator;
    }),
  };
  return { context: context as unknown as AudioContextLike & { state: string }, started, raw: context };
}

describe('monitor audio output', () => {
  const tone = (atAudioS: number): PlannedTone => ({ kind: 'beat', simTimeMs: 0, atAudioS, frequencyHz: 880 });

  it('creates no audio context until enabled, then plays only while running and unmuted', async () => {
    const { context, started, raw } = fakeContext();
    const factory = vi.fn(() => context);
    const audio = new MonitorAudio(factory);
    audio.playTones([tone(4)]);
    expect(factory).not.toHaveBeenCalled();
    expect(await audio.enable()).toBe('running');
    expect(raw.resume).toHaveBeenCalledTimes(1);
    audio.playTones([tone(4), tone(5)]);
    expect(started.map(item => item.at)).toEqual([4, 5]);
    expect(audio.pendingCount()).toBe(2);
    audio.setMuted(true);
    expect(audio.pendingCount()).toBe(0);
    audio.playTones([tone(6)]);
    expect(started.length).toBe(2);
  });

  it('reports unavailable and blocked audio without throwing', async () => {
    expect(await new MonitorAudio(() => null).enable()).toBe('unavailable');
    expect(await new MonitorAudio(() => fakeContext({ resumeFails: true }).context).enable()).toBe('blocked');
  });

  it('clamps volume, cancels pending tones and closes the context on dispose', async () => {
    const { context, raw } = fakeContext();
    const audio = new MonitorAudio(() => context);
    await audio.enable();
    audio.setVolume(4);
    expect(audio.getVolume()).toBe(1);
    audio.setVolume(Number.NaN);
    expect(audio.getVolume()).toBe(1);
    audio.playAlarm({ priority: 'medium', atAudioS: 4 });
    expect(audio.pendingCount()).toBe(alarmBurst('medium').length);
    await audio.dispose();
    expect(audio.pendingCount()).toBe(0);
    expect(raw.close).toHaveBeenCalledTimes(1);
    audio.playTones([tone(5)]);
    expect(audio.pendingCount()).toBe(0);
  });
});
