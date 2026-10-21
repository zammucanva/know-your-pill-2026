import { describe, expect, it } from 'bun:test';
import { appendEcgAnnotation } from '@/components/ecg-lab/engine/annotations';
import { appendManualMeasurementSet } from '@/components/ecg-lab/engine/measurement-sets';
import { generateLeadWindow } from '@/components/ecg-lab/engine/signal';
import { MAX_FRAME_DELTA_MS, MAX_SIMULATION_TIME_MS, SimulationClock, type AnimationFrame, type AnimationFrameScheduler } from '@/components/ecg-lab/engine/clock';

function manualScheduler() {
  let nextHandle = 0;
  const callbacks = new Map<number, AnimationFrame>();
  const cancelled: number[] = [];
  const scheduler: AnimationFrameScheduler = {
    request: callback => {
      const handle = ++nextHandle;
      callbacks.set(handle, callback);
      return handle;
    },
    cancel: handle => {
      cancelled.push(handle);
      callbacks.delete(handle);
    },
  };
  return {
    scheduler,
    callbacks,
    cancelled,
    frame(timestampMs: number) {
      const pending = [...callbacks.values()];
      callbacks.clear();
      pending.forEach(callback => callback(timestampMs));
    },
  };
}

describe('SimulationClock', () => {
  it('advances by monotonic elapsed time rather than counting frames', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(100);
    manual.frame(116.5);
    manual.frame(149);
    expect(clock.getSnapshot().elapsedMs).toBeCloseTo(49, 8);
    clock.dispose();
  });

  it('keeps a single scheduled loop when start is requested repeatedly', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    clock.play();
    clock.play();
    expect(manual.callbacks.size).toBe(1);
    manual.frame(0);
    expect(manual.callbacks.size).toBe(1);
    clock.dispose();
    expect(manual.callbacks.size).toBe(0);
  });

  it('freezes on pause and resumes continuously without catch-up', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(0);
    manual.frame(40);
    clock.pause();
    expect(clock.getSnapshot().elapsedMs).toBe(40);
    expect(manual.callbacks.size).toBe(0);
    clock.play();
    manual.frame(5000);
    expect(clock.getSnapshot().elapsedMs).toBe(40);
    manual.frame(5024);
    expect(clock.getSnapshot().elapsedMs).toBe(64);
    clock.dispose();
  });

  it('resets to deterministic time zero without changing the paused/playing state', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(0);
    manual.frame(40);
    clock.reset();
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 0, isPlaying: true });
    manual.frame(56);
    expect(clock.getSnapshot().elapsedMs).toBe(0);
    manual.frame(72);
    expect(clock.getSnapshot().elapsedMs).toBe(16);
    clock.pause();
    clock.reset();
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 0, isPlaying: false });
    clock.dispose();
  });

  it('seeks to a finite absolute timestamp without changing paused/running state', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);

    clock.seek(12_345.5);
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 12_345.5, isPlaying: false });
    clock.seek(12_345.5);
    expect(clock.getSnapshot().elapsedMs).toBe(12_345.5);
    clock.play();
    manual.frame(100);
    clock.seek(3_600_000);
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 3_600_000, isPlaying: true });
    manual.frame(10_000);
    expect(clock.getSnapshot().elapsedMs).toBe(3_600_000);
    manual.frame(10_016);
    expect(clock.getSnapshot().elapsedMs).toBe(3_600_016);
    clock.pause();
    clock.seek(0);
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 0, isPlaying: false });
    clock.dispose();
  });

  it('restores time and requested playback state while rejecting invalid times', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);

    clock.restore({ elapsedMs: 800.25, isPlaying: true });
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 800.25, isPlaying: true });
    expect(manual.callbacks.size).toBe(1);
    clock.restore({ elapsedMs: 40, isPlaying: false });
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 40, isPlaying: false });
    expect(manual.callbacks.size).toBe(0);
    for (const invalid of [-1, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, MAX_SIMULATION_TIME_MS + 1]) {
      expect(() => clock.seek(invalid)).toThrow(RangeError);
    }
    expect(() => clock.restore({ elapsedMs: 0, isPlaying: 'yes' as unknown as boolean })).toThrow(TypeError);
    clock.dispose();
  });

  it('suspends while hidden and resumes without adding hidden time', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(0);
    manual.frame(32);
    clock.suspend();
    expect(clock.getSnapshot()).toMatchObject({ elapsedMs: 32, isPlaying: true, isSuspended: true });
    expect(manual.callbacks.size).toBe(0);
    clock.resumeFromSuspension();
    manual.frame(50000);
    expect(clock.getSnapshot().elapsedMs).toBe(32);
    manual.frame(50016);
    expect(clock.getSnapshot().elapsedMs).toBe(48);
    clock.dispose();
  });

  it('discards excessive frame gaps and cancels work on disposal', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(0);
    manual.frame(MAX_FRAME_DELTA_MS + 1);
    expect(clock.getSnapshot().elapsedMs).toBe(0);
    manual.frame(MAX_FRAME_DELTA_MS + 17);
    expect(clock.getSnapshot().elapsedMs).toBe(16);
    clock.dispose();
    expect(manual.callbacks.size).toBe(0);
    expect(manual.cancelled.length).toBeGreaterThan(0);
    clock.play();
    expect(manual.callbacks.size).toBe(0);
  });
});

describe('SimulationClock seek contract with the deterministic model', () => {
  it('produces identical signal windows by playback, pause/resume, seek and restore', () => {
    const target = 2400;
    const viaSeek = new SimulationClock(manualScheduler().scheduler);
    viaSeek.seek(target);
    const manual = manualScheduler();
    const played = new SimulationClock(manual.scheduler);
    played.play();
    manual.frame(0);
    for (let t = 16; t <= target; t += 16) {
      manual.frame(t);
      if (t === 800) { played.pause(); played.play(); manual.frame(t); }
    }
    const restored = new SimulationClock(manualScheduler().scheduler);
    restored.restore({ elapsedMs: viaSeek.getSnapshot().elapsedMs, isPlaying: false });
    const windowAt = (clock: SimulationClock) => {
      const now = clock.getSnapshot().elapsedMs;
      return generateLeadWindow('afib', now - 1500, now, 11, 250);
    };
    expect(played.getSnapshot().elapsedMs).toBe(target);
    expect(windowAt(played)).toEqual(windowAt(viaSeek));
    expect(windowAt(restored)).toEqual(windowAt(viaSeek));
    [played, viaSeek, restored].forEach(clock => clock.dispose());
  });

  it('leaves learner annotations and measurements untouched by seeks and resets', () => {
    const annotations = appendEcgAnnotation([], { id: 'note', source: 'learner', kind: 'learner-note', label: 'Note', startMs: 100, endMs: 900 });
    const measurements = appendManualMeasurementSet([], { id: 'm1', name: 'RR', kind: 'RR', startMs: 0, endMs: 800 });
    const annotationCopy = structuredClone(annotations);
    const measurementCopy = structuredClone(measurements);
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(0);
    clock.seek(60_000);
    clock.restore({ elapsedMs: 5, isPlaying: false });
    clock.reset();
    expect(annotations).toEqual(annotationCopy);
    expect(measurements).toEqual(measurementCopy);
    clock.dispose();
  });

  it('rejects malformed values without mutating state, listeners or scheduled frames', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    clock.play();
    manual.frame(0);
    manual.frame(32);
    const events: number[] = [];
    clock.subscribe(snapshot => events.push(snapshot.elapsedMs));
    events.length = 0;
    for (const bad of [undefined, null, '5', {}, -0.001] as unknown[]) {
      expect(() => clock.seek(bad as number)).toThrow(RangeError);
    }
    expect(events).toEqual([]);
    expect(clock.getSnapshot().elapsedMs).toBe(32);
    expect(manual.callbacks.size).toBe(1);
    clock.seek(MAX_SIMULATION_TIME_MS);
    expect(clock.getSnapshot().elapsedMs).toBe(MAX_SIMULATION_TIME_MS);
    clock.dispose();
  });

  it('seeks immediately after reset and notifies subscribers once per change', () => {
    const manual = manualScheduler();
    const clock = new SimulationClock(manual.scheduler);
    const events: number[] = [];
    clock.subscribe(snapshot => events.push(snapshot.elapsedMs));
    clock.reset();
    clock.seek(1234);
    expect(events).toEqual([0, 0, 1234]);
    expect(manual.callbacks.size).toBe(0);
    clock.dispose();
  });
});
describe('SimulationClock seeking across the rolling window', () => {
  it('derives the window from the sought time and keeps overlapping samples identical', () => {
    const windowMs = 1500;
    const at = (nowMs: number) => generateLeadWindow('sinus', Math.max(0, nowMs - windowMs), nowMs, 7, 250);
    const clock = new SimulationClock(manualScheduler().scheduler);
    clock.seek(4000);
    const before = at(clock.getSnapshot().elapsedMs);
    clock.seek(4000 + windowMs / 2);
    const overlapping = at(clock.getSnapshot().elapsedMs);
    clock.seek(4000 + windowMs * 3);
    const disjoint = at(clock.getSnapshot().elapsedMs);
    expect(overlapping.II.filter(sample => sample.timeMs <= 4000)).toEqual(before.II.filter(sample => sample.timeMs >= 4000 + windowMs / 2 - windowMs));
    expect(overlapping.II.length).toBeGreaterThan(0);
    expect(disjoint.II[0].timeMs).toBeGreaterThan(before.II.at(-1)?.timeMs ?? 0);
    clock.dispose();
  });
});