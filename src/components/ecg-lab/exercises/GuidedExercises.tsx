import { useEffect, useMemo, useRef, useState } from 'react';
import type { ManualMeasurementSet } from '../engine/measurement-sets';
import type { MachineConfig } from '../engine/types';
import { exerciseRegistry, type ExerciseDefinition } from './definitions';
import { evaluateExercise, type ExerciseEvaluation } from './evaluate';
import {
  entryFor,
  readExerciseProgress,
  recordCheckResult,
  recordReading,
  resetExercise,
  retryExercise,
  writeExerciseProgress,
  type ExerciseProgress,
} from './progress';
import type { ProgressStorage } from '../learn/progress';

type GuidedExercisesProps = {
  config: MachineConfig;
  measurement: ManualMeasurementSet | undefined;
  /** Injectable for tests; defaults to this browser's local storage. */
  storage?: ProgressStorage | null;
  /** Called once, the first time an exercise is passed, so progress systems can record it. */
  onCompleted?: (definition: ExerciseDefinition) => void;
  /** Lets a finished exercise lead on to the Rhythm Challenge. */
  onOpenChallenge?: () => void;
  /** Asks the panel to open and show one exercise (for example from the Home dashboard). Each new token is handled once. */
  request?: { id: string; token: number };
};

function localStorageOrNull(): ProgressStorage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

export function GuidedExercises({ config, measurement, storage, onCompleted, onOpenChallenge, request }: GuidedExercisesProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const handledToken = useRef(0);
  const storageRef = useRef<ProgressStorage | null>(storage === undefined ? localStorageOrNull() : storage);
  const initial = useMemo(() => (storageRef.current ? readExerciseProgress(storageRef.current) : { progress: { version: 1 as const, exercises: {} } }), []);
  const [progress, setProgress] = useState<ExerciseProgress>(initial.progress);
  const [selectedId, setSelectedId] = useState<string>(exerciseRegistry[0].id);
  const [widthText, setWidthText] = useState('');
  const [widthText2, setWidthText2] = useState('');
  const [hintCount, setHintCount] = useState(0);
  const [status, setStatus] = useState(initial.notice ?? '');
  const [evaluation, setEvaluation] = useState<ExerciseEvaluation | null>(null);

  const definition: ExerciseDefinition = exerciseRegistry.find(item => item.id === selectedId) ?? exerciseRegistry[0];
  const entry = entryFor(progress, definition);
  const needsWidth = definition.kind === 'paper-speed-grid' || definition.kind === 'grid-calibration';
  const needsSecondLength = definition.kind === 'grid-calibration';
  const firstLabel = definition.kind === 'grid-calibration' ? 'Calibration pulse height (mm)' : 'Interval width on paper (mm)';
  const nextExercise = exerciseRegistry[exerciseRegistry.findIndex(item => item.id === definition.id) + 1];
  const stepIndex = Math.min(entry.readings.length, definition.steps.length - 1);

  const commit = (next: ExerciseProgress, message: string) => {
    setProgress(next);
    const storageHandle = storageRef.current;
    const saved = storageHandle ? writeExerciseProgress(storageHandle, next) : false;
    setStatus(saved ? message : `${message} Progress could not be saved in this browser.`);
  };

  const select = (id: string) => {
    setSelectedId(id);
    setEvaluation(null);
    setWidthText('');
    setWidthText2('');
    setHintCount(0);
    setStatus('');
  };

  // A request from elsewhere opens the panel on that exercise, once per token, and moves focus to it.
  useEffect(() => {
    if (!request || request.token === handledToken.current) return;
    handledToken.current = request.token;
    if (!exerciseRegistry.some(item => item.id === request.id)) return;
    select(request.id);
    if (detailsRef.current) detailsRef.current.open = true;
    detailsRef.current?.scrollIntoView?.({ block: 'start' });
    window.setTimeout(() => titleRef.current?.focus(), 0);
  }, [request]);

  const record = () => {
    if (!measurement) {
      setStatus('Select a measurement set before recording a reading.');
      return;
    }
    const answerMm = needsWidth && widthText.trim() !== '' ? Number(widthText) : undefined;
    if (needsWidth && (answerMm === undefined || !Number.isFinite(answerMm) || answerMm < 0)) {
      setStatus(needsSecondLength
        ? 'Enter the pulse height and width in millimetres (non-negative numbers) before recording.'
        : 'Enter the interval width in millimetres (a non-negative number) before recording.');
      return;
    }
    const answerMm2 = needsSecondLength && widthText2.trim() !== '' ? Number(widthText2) : undefined;
    if (needsSecondLength && (answerMm2 === undefined || !Number.isFinite(answerMm2) || answerMm2 < 0)) {
      setStatus('Enter both lengths in millimetres (non-negative numbers) before recording.');
      return;
    }
    try {
      const next = recordReading(progress, definition, {
        lead: config.lead,
        paperSpeed: config.paperSpeed,
        gain: config.gain,
        preset: config.preset,
        startMs: measurement.startMs,
        endMs: measurement.endMs,
        ...(answerMm === undefined ? {} : { answerMm }),
        ...(answerMm2 === undefined ? {} : { answerMm2 }),
      });
      setEvaluation(null);
      commit(next, `Reading ${Math.min(entry.readings.length + 1, definition.requiredReadings)} of ${definition.requiredReadings} recorded.`);
    } catch {
      setStatus('That reading is not valid and was not recorded.');
    }
  };

  const check = () => {
    const result = evaluateExercise(definition, entry.readings);
    setEvaluation(result);
    const firstPass = result.passed && !entry.passed;
    commit(recordCheckResult(progress, definition, result.passed), result.passed ? 'Passed. Every check below is met.' : 'Not yet. See the checks below, then retry.');
    if (firstPass) onCompleted?.(definition);
  };

  const retry = () => {
    setEvaluation(null);
    setWidthText('');
    setWidthText2('');
    commit(retryExercise(progress, definition), 'Readings cleared. Record new readings to try again.');
  };

  const reset = () => {
    setEvaluation(null);
    setWidthText('');
    setWidthText2('');
    setHintCount(0);
    commit(resetExercise(progress, definition), 'Exercise reset, including attempts and completion.');
  };

  return (
    <details className="guided-exercises" ref={detailsRef}>
      <summary>Guided exercises <small>draft · unreviewed · synthetic signal</small></summary>
      <p>Short practice tasks that use the markers and controls above. Checks compare your marker times with the simulator’s own event times; they are not clinical interpretation. These exercises are drafts and have not been reviewed.</p>
      <div className="exercise-picker" role="group" aria-label="Choose an exercise">
        {exerciseRegistry.map(item => {
          const itemEntry = entryFor(progress, item);
          return (
            <button type="button" key={item.id} className="measurement-set-select" aria-pressed={item.id === definition.id} onClick={() => select(item.id)}>
              {item.title}{itemEntry.passed ? ', completed' : ''}
            </button>
          );
        })}
      </div>

      <section className="exercise-detail" aria-labelledby="exercise-title">
        <h3 id="exercise-title" ref={titleRef} tabIndex={-1}>{definition.title}</h3>
        <p>{definition.objective}</p>
        <p className="exercise-progress">Step {stepIndex + 1} of {definition.steps.length} · Readings {entry.readings.length} of {definition.requiredReadings} · Attempts {entry.attempts}{entry.passed ? ' · Completed' : ''}</p>
        <ol className="exercise-steps" aria-label="Exercise steps">
          {definition.steps.map((step, index) => (
            <li key={step.id} aria-current={index === stepIndex ? 'step' : undefined}>{step.instruction}</li>
          ))}
        </ol>
        <p className="exercise-principle"><strong>Principle:</strong> {definition.principle}</p>
        <p className="exercise-current" aria-label="Current settings">
          Now: lead {config.lead} · {config.paperSpeed} mm/s · {config.gain} mm/mV · {config.preset} ·
          {measurement ? ` ${measurement.name}: Start ${measurement.startMs.toFixed(0)} ms, End ${measurement.endMs.toFixed(0)} ms` : ' no measurement selected'}
        </p>
        {needsWidth && (
          <label className="exercise-width">{firstLabel}
            <input type="number" min="0" step="0.5" value={widthText} onChange={event => setWidthText(event.target.value)} />
          </label>
        )}
        {needsSecondLength && (
          <label className="exercise-width">Calibration pulse width (mm)
            <input type="number" min="0" step="0.5" value={widthText2} onChange={event => setWidthText2(event.target.value)} />
          </label>
        )}
        <div className="exercise-actions">
          <button type="button" className="add-measurement" onClick={record}>Record reading</button>
          <button type="button" className="add-measurement" onClick={check} disabled={entry.readings.length === 0}>Check answer</button>
          <button type="button" className="measurement-set-select" onClick={retry}>Retry</button>
          <button type="button" className="delete-measurement" onClick={reset}>Reset exercise</button>
        </div>
        {definition.hints.length > 0 && (
          <div className="exercise-hints">
            <button type="button" className="measurement-set-select" disabled={hintCount >= definition.hints.length} onClick={() => setHintCount(count => Math.min(definition.hints.length, count + 1))}>
              Show hint ({hintCount}/{definition.hints.length})
            </button>
            {hintCount > 0 && <ol aria-label="Hints">{definition.hints.slice(0, hintCount).map(hint => <li key={hint}>{hint}</li>)}</ol>}
          </div>
        )}
        {entry.passed && (
          <div className="exercise-next" role="group" aria-label="Next steps">
            <p><strong>Completed.</strong> Choose what to do next.</p>
            <div className="exercise-actions">
              {nextExercise && <button type="button" className="add-measurement" onClick={() => select(nextExercise.id)}>Next exercise: {nextExercise.title}</button>}
              {onOpenChallenge && <button type="button" className="measurement-set-select" onClick={onOpenChallenge}>Practise rate estimation in the Rhythm Challenge</button>}
            </div>
          </div>
        )}
        {entry.readings.length > 0 && (
          <ol className="exercise-readings" aria-label="Recorded readings">
            {entry.readings.map((reading, index) => (
              <li key={index}>Reading {index + 1}: lead {reading.lead}, {reading.paperSpeed} mm/s, {reading.gain} mm/mV, Start {reading.startMs.toFixed(0)} ms, End {reading.endMs.toFixed(0)} ms{reading.answerMm === undefined ? '' : `, ${definition.kind === 'grid-calibration' ? 'height' : 'width'} ${reading.answerMm} mm`}{reading.answerMm2 === undefined ? '' : `, width ${reading.answerMm2} mm`}</li>
            ))}
          </ol>
        )}
        <p className="experiment-storage-status exercise-status" role="status" aria-live="polite">{status}</p>
        {evaluation && (
          <ul className="exercise-checks" aria-label="Check results">
            {evaluation.checks.map(item => (
              <li key={item.id}><strong>{item.passed ? 'Pass' : 'Not yet'}:</strong> {item.message}</li>
            ))}
          </ul>
        )}
      </section>
    </details>
  );
}
