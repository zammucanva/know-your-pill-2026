import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MonitorAudio, type AudioStatus } from '../audio/monitor-audio';
import { readAudioPreferences, writeAudioPreferences, type AudioPreferences } from '../audio/preferences';
import { browserStorageOrNull } from './run-storage';
import { BEAT_TONE_HZ, spo2PitchHz, ToneScheduler } from '../audio/scheduler';
import { SimulationClock, type AnimationFrameScheduler, type ClockSnapshot } from '../engine/clock';
import { acknowledgeAlarms, alarmStateAt, audibleAlarm, evaluateAlarmConditions, initialAlarmState, updateAlarms, type AlarmState } from './alarms';
import type { MonitorScenario } from './scenario';
import { buildScenarioTimeline, type ScenarioTimeline, type TakenAction } from './timeline';
import { displayedSpo2, readingsAt } from './vitals';

export type ToneSource = 'ecg' | 'pleth';

export type MonitorRuntimeOptions = {
  /** Injectable for tests; defaults to requestAnimationFrame. */
  scheduler?: AnimationFrameScheduler;
  /** Injectable for tests; defaults to a browser AudioContext created on demand. */
  audio?: MonitorAudio;
};

const initialSnapshot: ClockSnapshot = { elapsedMs: 0, isPlaying: false, isSuspended: false };

function browserScheduler(): AnimationFrameScheduler {
  return {
    request: callback => window.requestAnimationFrame(callback),
    cancel: handle => window.cancelAnimationFrame(handle),
  };
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * One scenario runtime: a single simulation clock drives the waveforms, the readings, the alarm
 * state machine and the audio scheduler. Nothing keeps its own time. The scenario never starts by
 * itself and sound is off until the learner turns it on.
 */
export function useMonitorRuntime(scenario: MonitorScenario, options: MonitorRuntimeOptions = {}) {
  const [taken, setTaken] = useState<TakenAction[]>([]);
  const timeline: ScenarioTimeline = useMemo(() => buildScenarioTimeline(scenario, taken), [scenario, taken]);
  // Frame callbacks read the current timeline from this ref, so a learner action rebuilds the
  // timeline without restarting the clock, the alarm state or the audio scheduling.
  const timelineRef = useRef(timeline);
  timelineRef.current = timeline;
  const takenRef = useRef<TakenAction[]>([]);
  const [snapshot, setSnapshot] = useState<ClockSnapshot>(initialSnapshot);
  const [alarms, setAlarms] = useState<AlarmState>(initialAlarmState);
  const [audioStatus, setAudioStatus] = useState<AudioStatus>('off');
  // Sound settings remembered in this browser (sound itself always starts off).
  const [initialPreferences] = useState<AudioPreferences>(() => readAudioPreferences(browserStorageOrNull()));
  const [muted, setMutedState] = useState(initialPreferences.muted);
  const [volume, setVolumeState] = useState(initialPreferences.volume);
  const [toneSource, setToneSourceState] = useState<ToneSource>(initialPreferences.toneSource);
  const preferencesRef = useRef<AudioPreferences>(initialPreferences);
  const [reducedMotion] = useState(prefersReducedMotion);

  const clockRef = useRef<SimulationClock | null>(null);
  const alarmsRef = useRef<AlarmState>(initialAlarmState());
  const audioRef = useRef<MonitorAudio>(options.audio ?? new MonitorAudio());
  const toneSchedulerRef = useRef(new ToneScheduler());
  const toneSourceRef = useRef<ToneSource>(initialPreferences.toneSource);
  const lastAlarmStepRef = useRef<number | null>(null);
  /** Last simulated time the clock reported; still readable after the clock is disposed on unmount. */
  const lastElapsedRef = useRef(0);

  // The audio output lives as long as the component, not as long as one clock. StrictMode's
  // development remount disposes it once, so a disposed instance is replaced on mount.
  useEffect(() => {
    if (audioRef.current.isDisposed()) {
      audioRef.current = new MonitorAudio();
      setAudioStatus('off');
    }
    const audio = audioRef.current;
    // A new audio object starts with defaults; give it the learner's current settings.
    audio.setVolume(preferencesRef.current.volume);
    audio.setMuted(preferencesRef.current.muted);
    // The browser can suspend or interrupt sound at any time; reflect it and drop stale scheduling.
    const unsubscribe = audio.onStateChange(() => {
      toneSchedulerRef.current.reset();
      setAudioStatus(audio.getStatus());
    });
    return () => { unsubscribe(); void audio.dispose(); };
  }, []);

  useEffect(() => {
    const clock = new SimulationClock(options.scheduler ?? browserScheduler());
    clockRef.current = clock;
    const tones = toneSchedulerRef.current;
    const renderIntervalMs = reducedMotion ? 1000 : 1000 / 30;
    let lastRendered = Number.NEGATIVE_INFINITY;

    const unsubscribe = clock.subscribe(state => {
      lastElapsedRef.current = state.elapsedMs;
      const timeline = timelineRef.current;
      if (state.elapsedMs >= timeline.scenario.durationMs && state.isPlaying) {
        clock.pause();
        clock.seek(timeline.scenario.durationMs);
        return;
      }
      // Alarm conditions are evaluated on the same simulated time the screen shows.
      const now = state.elapsedMs;
      if (lastAlarmStepRef.current === null || now !== lastAlarmStepRef.current) {
        if (lastAlarmStepRef.current !== null && now < lastAlarmStepRef.current) alarmsRef.current = initialAlarmState();
        alarmsRef.current = updateAlarms(alarmsRef.current, evaluateAlarmConditions(readingsAt(timeline, now), timeline.scenario.alarmLimits, timeline.scenario.criticalLimits), now);
        lastAlarmStepRef.current = now;
      }

      const audio = audioRef.current;
      const audioNow = audio.now();
      if (audioNow !== null) {
        const source = toneSourceRef.current;
        const actions = tones.update({
          snapshot: state,
          audioNowS: audioNow,
          eventTimesMs: source === 'ecg' ? timeline.ecgDetectedQrsTimesMs : timeline.plethPulseTimesMs,
          frequencyAt: source === 'ecg'
            ? () => BEAT_TONE_HZ
            : time => { const spo2 = displayedSpo2(timeline.phases, time); return spo2 === null ? null : spo2PitchHz(spo2); },
          alarm: audibleAlarm(alarmsRef.current, now),
          outputLatencyS: audio.outputLatency(),
          endMs: timeline.scenario.durationMs,
        });
        if (actions.cancelPending) audio.cancelPending();
        else if (actions.cancelAlarm) audio.cancelPending('alarm');
        audio.playTones(actions.tones);
        if (actions.alarm) audio.playAlarm(actions.alarm);
      }

      const due = !state.isPlaying || state.isSuspended || now - lastRendered >= renderIntervalMs || now < lastRendered;
      if (due) {
        lastRendered = now;
        setSnapshot(state);
        setAlarms(alarmsRef.current);
      }
    });

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') clock.suspend();
      else {
        clock.resumeFromSuspension();
        // Some browsers suspend audio in a background tab; try to resume it (a click may still be needed).
        void audioRef.current.resumeIfInterrupted().then(status => setAudioStatus(status));
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      unsubscribe();
      clock.dispose();
      if (clockRef.current === clock) clockRef.current = null;
      audioRef.current.cancelPending();
      tones.reset();
    };
  }, [scenario, options.scheduler, reducedMotion]);

  const play = useCallback(() => {
    const clock = clockRef.current;
    if (!clock) return;
    if (clock.getSnapshot().elapsedMs >= timelineRef.current.scenario.durationMs) return;
    clock.play();
  }, []);
  const pause = useCallback(() => clockRef.current?.pause(), []);
  const reset = useCallback(() => {
    const clock = clockRef.current;
    if (!clock) return;
    clock.pause();
    alarmsRef.current = initialAlarmState();
    lastAlarmStepRef.current = null;
    toneSchedulerRef.current.reset();
    audioRef.current.cancelPending();
    takenRef.current = [];
    timelineRef.current = buildScenarioTimeline(scenario);
    setTaken([]);
    clock.seek(0);
  }, [scenario]);

  /**
   * Restores a saved run, paused: the actions are re-applied, alarm state is recomputed from the
   * timeline up to the saved time (acknowledgements are not stored), and the clock seeks there.
   */
  const restore = useCallback((run: { elapsedMs: number; taken: TakenAction[] }) => {
    const clock = clockRef.current;
    if (!clock) return false;
    const restored = buildScenarioTimeline(scenario, run.taken);
    clock.pause();
    toneSchedulerRef.current.reset();
    audioRef.current.cancelPending();
    takenRef.current = [...run.taken];
    timelineRef.current = restored;
    setTaken([...run.taken]);
    alarmsRef.current = alarmStateAt(restored, run.elapsedMs);
    lastAlarmStepRef.current = run.elapsedMs;
    clock.seek(run.elapsedMs);
    setAlarms(alarmsRef.current);
    return true;
  }, [scenario]);

  /** Records a bedside action at the current simulated time. Each action can be taken once per run. */
  const takeAction = useCallback((actionId: string): boolean => {
    const clock = clockRef.current;
    if (!clock || takenRef.current.some(item => item.actionId === actionId)) return false;
    const next = [...takenRef.current, { actionId, atMs: clock.getSnapshot().elapsedMs }];
    timelineRef.current = buildScenarioTimeline(scenario, next);
    takenRef.current = next;
    setTaken(next);
    return true;
  }, [scenario]);

  const acknowledge = useCallback(() => {
    const clock = clockRef.current;
    if (!clock) return;
    alarmsRef.current = acknowledgeAlarms(alarmsRef.current, clock.getSnapshot().elapsedMs);
    setAlarms(alarmsRef.current);
    // Silencing stops alarm sound only; the heartbeat tone carries on.
    audioRef.current.cancelPending('alarm');
  }, []);

  const enableAudio = useCallback(async () => {
    toneSchedulerRef.current.reset();
    const status = await audioRef.current.enable();
    setAudioStatus(status);
    return status;
  }, []);
  /** Plays one beep now, turning sound on first if needed (must run from a click or key press). */
  const testSound = useCallback(async () => {
    let status = audioRef.current.getStatus();
    if (status !== 'running') {
      toneSchedulerRef.current.reset();
      status = await audioRef.current.enable();
      setAudioStatus(status);
    }
    return status === 'running' && audioRef.current.testBeep();
  }, []);
  const disableAudio = useCallback(() => {
    audioRef.current.disable();
    toneSchedulerRef.current.reset();
    setAudioStatus(audioRef.current.getStatus());
  }, []);
  const remember = useCallback((change: Partial<AudioPreferences>) => {
    preferencesRef.current = { ...preferencesRef.current, ...change };
    writeAudioPreferences(browserStorageOrNull(), preferencesRef.current);
  }, []);
  const setMuted = useCallback((value: boolean) => { audioRef.current.setMuted(value); setMutedState(value); remember({ muted: value }); }, [remember]);
  const setVolume = useCallback((value: number) => {
    audioRef.current.setVolume(value);
    const applied = audioRef.current.getVolume();
    setVolumeState(applied);
    remember({ volume: applied });
  }, [remember]);
  const setToneSource = useCallback((value: ToneSource) => {
    toneSourceRef.current = value;
    remember({ toneSource: value });
    toneSchedulerRef.current.reset();
    audioRef.current.cancelPending();
    setToneSourceState(value);
  }, [remember]);

  return {
    timeline, snapshot, alarms, reducedMotion, taken,
    play, pause, reset, acknowledge, takeAction, restore,
    /**
     * Current simulated time from the clock (not the throttled render state). During unmount the
     * clock may already be disposed, so the last reported time is returned instead.
     */
    currentTimeMs: () => clockRef.current?.getSnapshot().elapsedMs ?? lastElapsedRef.current,
    /** Actions taken so far, updated synchronously (render state can lag behind during a remount). */
    currentTaken: () => takenRef.current,
    audio: { status: audioStatus, muted, volume, toneSource, enable: enableAudio, disable: disableAudio, setMuted, setVolume, setToneSource, test: testSound },
  };
}
