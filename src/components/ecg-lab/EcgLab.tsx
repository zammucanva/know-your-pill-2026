'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { calibrationPulseHeightUnits, calibrationPulseWidthUnits, PREVIEW_CSS_PIXELS_PER_SVG_UNIT, SVG_UNITS_PER_MM } from './engine/calibration';
import { type MeasurementKind } from './engine/measurements';
import {
  appendManualMeasurementSet,
  removeManualMeasurementSet,
  summarizeManualMeasurementSet,
  updateManualMeasurementSet,
  type ManualMeasurementSet,
} from './engine/measurement-sets';
import {
  appendEcgAnnotation,
  removeEcgAnnotation,
  updateLearnerAnnotation,
  type EcgAnnotation,
  type LearnerAnnotation,
  type LearnerAnnotationUpdate,
} from './engine/annotations';
import { type ClockSnapshot } from './engine/clock';
import { createExperimentState, parseExperimentState, type ExperimentState } from './engine/experiment-state';
import {
  createLocalExperimentStorage,
  deleteExperiment,
  readSavedExperiments,
  saveExperiment,
  uniqueExperimentName,
  type ExperimentStorage,
} from './engine/experiment-storage';
import { allLeads, generateLeadSignals } from './engine/signal';
import type { Gain, Lead, MachineConfig, PaperSpeed, RhythmPreset } from './engine/types';
import { EcgGridDefinitions } from './components/EcgGrid';
import { LiveEcgMonitor } from './components/LiveEcgMonitor';
import { LearnMode } from './learn/LearnMode';
import { GuidedExercises } from './exercises/GuidedExercises';
import { AcademyDashboard } from './academy/AcademyDashboard';
import { useAcademy } from './academy/useAcademy';
import { RhythmChallenge } from './rhythm/RhythmChallenge';
import { VirtualPatient } from './patients/VirtualPatient';
import { MedicationCenter } from './medication/MedicationCenter';
import { HomeDashboard } from './home/HomeDashboard';
import { buildHomeSummary } from './home/summary';
import { emptyExerciseProgress, readExerciseProgress, type ExerciseProgress } from './exercises/progress';
import { isPreviewRequested, medicationRegistry, visibleMedications } from './medication/registry';
import { publishedLearnLessons } from './content/learn/registry';
import './ecg-lab.css';

const leads = allLeads();
const presets: [RhythmPreset, string][] = [['sinus', 'Normal sinus'], ['brady', 'Sinus bradycardia'], ['tachy', 'Sinus tachycardia'], ['afib', 'Atrial fibrillation · simplified']];
const measurementDefaults: Record<MeasurementKind, [number, number]> = { RR: [0, 800], PR: [120, 280], QRS: [280, 360], QT: [280, 580] };
const CALIBRATION_PULSE_DURATION_MS = 200;
const CALIBRATION_PULSE_MARGIN_MM = 4;

function createMeasurementSet(id: string, kind: MeasurementKind, name: string): ManualMeasurementSet {
  const [startMs, endMs] = measurementDefaults[kind];
  return { id, name, kind, startMs, endMs };
}

function nextNumberAfter(ids: string[], prefix: string): number {
  return Math.max(0, ...ids.map(id => Number(id.slice(prefix.length))).filter(Number.isInteger)) + 1;
}

function CalibrationPulse({ speed, gain }: { speed: PaperSpeed; gain: Gain }) {
  const marginUnits = CALIBRATION_PULSE_MARGIN_MM * SVG_UNITS_PER_MM;
  const pulseWidthUnits = calibrationPulseWidthUnits(speed, CALIBRATION_PULSE_DURATION_MS);
  const pulseHeightUnits = calibrationPulseHeightUnits(gain);
  const width = pulseWidthUnits + marginUnits * 3;
  const height = pulseHeightUnits + marginUnits * 2;
  const baseline = height - marginUnits;
  const pulseStart = marginUnits;
  const pulseEnd = pulseStart + pulseWidthUnits;
  const pulseTop = baseline - pulseHeightUnits;

  return <svg className="calibration-pulse" width={width * PREVIEW_CSS_PIXELS_PER_SVG_UNIT} height={height * PREVIEW_CSS_PIXELS_PER_SVG_UNIT} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`One millivolt, ${CALIBRATION_PULSE_DURATION_MS} millisecond calibration pulse at ${gain} millimetres per millivolt and ${speed} millimetres per second`}>
    <EcgGridDefinitions id="calibration" />
    <rect width={width} height={height} fill="var(--surface-soft)" />
    <rect width={width} height={height} fill="url(#major-calibration)" />
    <path d={`M 0 ${baseline} H ${pulseStart} V ${pulseTop} H ${pulseEnd} V ${baseline} H ${width}`} fill="none" stroke="var(--primary)" strokeWidth="2" />
  </svg>;
}

/**
 * ECG Lab inside the KYP shell. The page supplies the navbar, heading and footer; the lab's own
 * progress, saved experiments and challenge history stay in this browser's local storage.
 */
export default function EcgLab() {
  // The lab follows the site theme (next-themes) instead of keeping its own toggle.
  const { resolvedTheme } = useTheme();
  const theme: 'light' | 'dark' = resolvedTheme === 'dark' ? 'dark' : 'light';
  const [config, setConfig] = useState<MachineConfig>({ lead: 'V3', paperSpeed: 25, gain: 20, showGrid: true, preset: 'sinus' });
  const [view, setView] = useState<'single' | 'multi'>('single');
  const [activeSection, setActiveSection] = useState<'home' | 'simulator' | 'challenge' | 'patients' | 'medication' | 'academy' | 'learn'>('simulator');
  // Home reads stored exercise progress when it is shown; the exercise panel writes it as the learner works.
  const [exerciseProgress, setExerciseProgress] = useState<ExerciseProgress>(emptyExerciseProgress);
  const [exerciseRequest, setExerciseRequest] = useState<{ id: string; token: number }>();
  const [reviewRequest, setReviewRequest] = useState(0);
  const [experimentPanelRequest, setExperimentPanelRequest] = useState(0);
  const experimentPanelRef = useRef<HTMLDetailsElement>(null);
  // Drafts are visible only through the documented authoring flag, and the screen labels them everywhere.
  const medicationPreview = useMemo(() => isPreviewRequested(window.location.search), []);
  const medications = useMemo(() => visibleMedications(medicationRegistry, medicationPreview), [medicationPreview]);
  const relatedLessons = useMemo(() => publishedLearnLessons.map(lesson => ({ id: lesson.id, title: lesson.title })), []);
  const academy = useAcademy();
  useEffect(() => {
    if (activeSection !== 'home') return;
    try {
      setExerciseProgress(readExerciseProgress(window.localStorage).progress);
    } catch {
      setExerciseProgress(emptyExerciseProgress());
    }
  }, [activeSection]);
  // Resuming from Home: once the simulator is showing, open the saved-experiments panel (once per request)
  // and move focus to the restore confirmation so keyboard and screen-reader users land on it.
  const handledPanelRequest = useRef(0);
  useEffect(() => {
    if (experimentPanelRequest === 0 || experimentPanelRequest === handledPanelRequest.current || activeSection !== 'simulator') return;
    handledPanelRequest.current = experimentPanelRequest;
    if (experimentPanelRef.current) {
      experimentPanelRef.current.open = true;
      experimentPanelRef.current.scrollIntoView?.({ block: 'start' });
    }
    window.setTimeout(() => experimentPanelRef.current?.querySelector<HTMLButtonElement>('.experiment-confirmation button')?.focus(), 0);
  }, [experimentPanelRequest, activeSection]);
  const missedCaseIds = useMemo(
    () => Object.entries(academy.progress.cases).filter(([, stats]) => stats.missedBefore && !stats.everCorrect).map(([id]) => id),
    [academy.progress.cases],
  );
  const [measurementSets, setMeasurementSets] = useState<ManualMeasurementSet[]>(() => [
    createMeasurementSet('measurement-1', 'RR', 'R–R interval'),
  ]);
  const [selectedMeasurementId, setSelectedMeasurementId] = useState<string | null>('measurement-1');
  const [activeMarker, setActiveMarker] = useState<'start' | 'end'>('start');
  const [annotations, setAnnotations] = useState<EcgAnnotation[]>([]);
  const [selectedAnnotationId, setSelectedAnnotationId] = useState<string | null>(null);
  const nextMeasurementId = useRef(2);
  const nextAnnotationId = useRef(1);
  const nextSnapshotId = useRef(1);
  const clockSnapshotRef = useRef<ClockSnapshot>({ elapsedMs: 0, isPlaying: false, isSuspended: false });
  const experimentStorageRef = useRef<ExperimentStorage | null>(createLocalExperimentStorage());
  const [savedExperiments, setSavedExperiments] = useState<ExperimentState[]>(() => {
    const storage = experimentStorageRef.current;
    return storage ? readSavedExperiments(storage).snapshots : [];
  });
  const [snapshotName, setSnapshotName] = useState('My ECG experiment');
  const [storageStatus, setStorageStatus] = useState('');
  const [pendingRestore, setPendingRestore] = useState<ExperimentState | null>(null);
  const [pendingDelete, setPendingDelete] = useState<ExperimentState | null>(null);
  const [restoreRequest, setRestoreRequest] = useState<{ id: number; elapsedMs: number } | undefined>();
  const homeSummary = useMemo(
    () => buildHomeSummary({ academy: academy.progress, exerciseProgress, savedExperiments }),
    [academy.progress, exerciseProgress, savedExperiments],
  );
  const patch = (next: Partial<MachineConfig>) => setConfig(current => ({ ...current, ...next }));
  const signals = useMemo(() => generateLeadSignals(config.preset), [config.preset]);
  const maxAbsVoltageMv = useMemo(() => Math.max(...Object.values(signals).flatMap(leadSamples => leadSamples.map(sample => Math.abs(sample.voltageMv))), 0), [signals]);
  const selectedMeasurement = measurementSets.find(set => set.id === selectedMeasurementId);
  const selectedAnnotation = annotations.find(annotation => annotation.id === selectedAnnotationId);
  const selectedLearnerAnnotation = selectedAnnotation?.source === 'learner' ? selectedAnnotation : undefined;
  const measurement = selectedMeasurement ? summarizeManualMeasurementSet(selectedMeasurement) : null;
  const markers = selectedMeasurement ? [selectedMeasurement.startMs, selectedMeasurement.endMs] as [number, number] : undefined;
  const updateSelectedMeasurement = (update: Partial<Pick<ManualMeasurementSet, 'name' | 'kind' | 'startMs' | 'endMs'>>) => {
    if (!selectedMeasurementId) return;
    setMeasurementSets(current => updateManualMeasurementSet(current, selectedMeasurementId, update));
  };
  const resetSelectedMeasurement = () => {
    if (!selectedMeasurement) return;
    const [startMs, endMs] = measurementDefaults[selectedMeasurement.kind];
    updateSelectedMeasurement({ startMs, endMs });
    setActiveMarker('start');
  };
  const setKindAndDefaults = (next: MeasurementKind) => {
    const [startMs, endMs] = measurementDefaults[next];
    updateSelectedMeasurement({ kind: next, startMs, endMs });
    setActiveMarker('start');
  };
  const placeActiveMarker = (timeMs: number) => {
    if (!selectedMeasurement) return;
    updateSelectedMeasurement(activeMarker === 'start' ? { startMs: timeMs } : { endMs: timeMs });
  };
  const addMeasurementSet = () => {
    const number = nextMeasurementId.current++;
    const next = createMeasurementSet(`measurement-${number}`, 'RR', `Measurement ${number}`);
    setMeasurementSets(current => appendManualMeasurementSet(current, next));
    setSelectedMeasurementId(next.id);
    setActiveMarker('start');
  };
  const deleteMeasurementSet = (id: string) => {
    if (id === selectedMeasurementId) {
      const index = measurementSets.findIndex(set => set.id === id);
      const fallback = measurementSets[index + 1] ?? measurementSets[index - 1];
      setSelectedMeasurementId(fallback?.id ?? null);
      setActiveMarker('start');
    }
    setMeasurementSets(current => removeManualMeasurementSet(current, id));
  };
  const addAnnotation = () => {
    const [startMs, endMs] = selectedMeasurement ? [selectedMeasurement.startMs, selectedMeasurement.endMs] : [0, 800];
    const number = nextAnnotationId.current++;
    const next: LearnerAnnotation = {
      id: `annotation-${number}`,
      source: 'learner',
      kind: 'learner-note',
      label: `Annotation ${number}`,
      startMs,
      endMs,
    };
    setAnnotations(current => appendEcgAnnotation(current, next));
    setSelectedAnnotationId(next.id);
  };
  const updateSelectedAnnotation = (update: LearnerAnnotationUpdate) => {
    if (!selectedLearnerAnnotation) return;
    const proposed = { ...selectedLearnerAnnotation, ...update };
    if (proposed.startMs < 0 || proposed.endMs < proposed.startMs) return;
    setAnnotations(current => updateLearnerAnnotation(current, selectedLearnerAnnotation.id, update));
  };
  const deleteAnnotation = (id: string) => {
    if (id === selectedAnnotationId) {
      const index = annotations.findIndex(annotation => annotation.id === id);
      const fallback = annotations[index + 1] ?? annotations[index - 1];
      setSelectedAnnotationId(fallback?.source === 'learner' ? fallback.id : null);
    }
    setAnnotations(current => removeEcgAnnotation(current, id));
  };
  const saveCurrentExperiment = () => {
    const storage = experimentStorageRef.current;
    if (!storage) {
      setStorageStatus('Browser storage is unavailable. Your current experiment was not saved.');
      return;
    }
    try {
      const name = uniqueExperimentName(savedExperiments, snapshotName);
      const snapshot = createExperimentState({
        snapshotId: `experiment-${Date.now().toString(36)}-${nextSnapshotId.current++}`,
        name,
        theme,
        machine: config,
        view,
        playback: { elapsedMs: clockSnapshotRef.current.elapsedMs, wasPlaying: clockSnapshotRef.current.isPlaying },
        measurements: measurementSets,
        selectedMeasurementId,
        // Authored teaching regions are never persisted by learner snapshots.
        annotations: annotations.filter((annotation): annotation is LearnerAnnotation => annotation.source === 'learner'),
        selectedAnnotationId: selectedLearnerAnnotation?.id ?? null,
        authoredRegionReferences: [],
      });
      const result = saveExperiment(storage, snapshot);
      if (!result.success) {
        setStorageStatus(result.message ?? 'The experiment was not saved.');
        return;
      }
      setSavedExperiments(result.snapshots);
      setSnapshotName(name);
      setStorageStatus(`Saved “${name}” locally in this browser.`);
    } catch {
      setStorageStatus('The current experiment could not be prepared for saving. Nothing was changed.');
    }
  };
  const restoreExperiment = () => {
    if (!pendingRestore) return;
    // Re-read the stored record so restoration never trusts the in-memory list or tampered/stale storage.
    const storage = experimentStorageRef.current;
    const stored = storage ? readSavedExperiments(storage) : null;
    const snapshot = stored?.success ? parseExperimentState(stored.snapshots.find(item => item.snapshotId === pendingRestore.snapshotId)) : null;
    if (!snapshot) {
      if (stored?.success) setSavedExperiments(stored.snapshots);
      setStorageStatus('That saved experiment is missing or invalid and was not restored. Your current work is unchanged.');
      setPendingRestore(null);
      return;
    }
    // Every field was validated before React state is replaced; playback is intentionally restored paused.
    setConfig(snapshot.machine);
    setView(snapshot.view);
    setMeasurementSets(snapshot.measurements);
    setSelectedMeasurementId(snapshot.selectedMeasurementId);
    setAnnotations(current => [...current.filter(annotation => annotation.source === 'authored'), ...snapshot.annotations]);
    setSelectedAnnotationId(snapshot.selectedAnnotationId);
    setActiveMarker('start');
    nextMeasurementId.current = nextNumberAfter(snapshot.measurements.map(set => set.id), 'measurement-');
    nextAnnotationId.current = nextNumberAfter(snapshot.annotations.map(annotation => annotation.id), 'annotation-');
    setRestoreRequest(current => ({ id: (current?.id ?? 0) + 1, elapsedMs: snapshot.playback.elapsedMs }));
    setStorageStatus(`Restored “${snapshot.name}” at ${snapshot.playback.elapsedMs.toFixed(0)} ms. Playback is paused.`);
    setPendingRestore(null);
  };
  const removeSavedExperiment = () => {
    if (!pendingDelete) return;
    const storage = experimentStorageRef.current;
    if (!storage) {
      setStorageStatus('Browser storage is unavailable. The saved experiment was not deleted.');
      setPendingDelete(null);
      return;
    }
    const result = deleteExperiment(storage, pendingDelete.snapshotId);
    if (result.success) {
      setSavedExperiments(result.snapshots);
      setStorageStatus(`Deleted “${pendingDelete.name}” from this browser.`);
    } else {
      setStorageStatus(result.message ?? 'The saved experiment was not deleted.');
    }
    setPendingDelete(null);
  };
  const rate = config.preset === 'brady' ? 50 : config.preset === 'tachy' ? 100 : 75;
  return (
    <div className="ecg-lab">
      <div className="ecg-status"><div className="status"><span className="dot" />SIMULATION ONLY <small>synthetic signal</small></div></div>

      <nav className="module-nav" aria-label="Main sections">
        <button type="button" aria-current={activeSection === 'home' ? 'page' : undefined} onClick={() => setActiveSection('home')}>Home</button>
        <button type="button" aria-current={activeSection === 'simulator' ? 'page' : undefined} onClick={() => setActiveSection('simulator')}>ECG simulator</button>
        <button type="button" aria-current={activeSection === 'challenge' ? 'page' : undefined} onClick={() => setActiveSection('challenge')}>Rhythm Challenge</button>
        <button type="button" aria-current={activeSection === 'patients' ? 'page' : undefined} onClick={() => setActiveSection('patients')}>Virtual Patients</button>
        <button type="button" aria-current={activeSection === 'medication' ? 'page' : undefined} onClick={() => setActiveSection('medication')}>Medication Center</button>
        <button type="button" aria-current={activeSection === 'academy' ? 'page' : undefined} onClick={() => setActiveSection('academy')}>Academy</button>
        <button type="button" aria-current={activeSection === 'learn' ? 'page' : undefined} onClick={() => setActiveSection('learn')}>Lessons</button>
      </nav>

      {activeSection === 'home' ? <HomeDashboard
        summary={homeSummary}
        onStartExercise={id => { setExerciseRequest(current => ({ id, token: (current?.token ?? 0) + 1 })); setActiveSection('simulator'); }}
        onResumeExperiment={id => {
          const snapshot = savedExperiments.find(item => item.snapshotId === id);
          if (!snapshot) return;
          setPendingRestore(snapshot);
          setExperimentPanelRequest(current => current + 1);
          setActiveSection('simulator');
        }}
        onBeginChallenge={() => setActiveSection('challenge')}
        onReviewMissed={() => { setReviewRequest(current => current + 1); setActiveSection('challenge'); }}
        onOpenPatients={() => setActiveSection('patients')}
        onOpenAcademy={() => setActiveSection('academy')}
        onOpenSimulator={() => setActiveSection('simulator')}
      /> : activeSection === 'simulator' ? <>
      <section className="intro">
        <div>
          <p className="eyebrow">CALIBRATED EXPLORATION</p>
          <h2>Read the trace,<br /><span>understand the heart.</span></h2>
          <p className="lede">A controlled environment for learning ECG fundamentals. One shared timeline drives every lead and every measurement.</p>
        </div>
        <div className="calibration-card">
          <span>CALIBRATION PULSE</span>
          <strong>1 mV</strong>
          <CalibrationPulse speed={config.paperSpeed} gain={config.gain} />
          <small>{config.gain} mm/mV · {CALIBRATION_PULSE_DURATION_MS} ms</small>
        </div>
      </section>

      <section className="lab-grid">
        <aside className="controls">
          <div className="section-label">01 / SIGNAL</div>
          <label>Rhythm preset
            <select value={config.preset} onChange={event => patch({ preset: event.target.value as RhythmPreset })}>
              {presets.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select>
          </label>
          <fieldset className="lead-field">
            <legend>Displayed lead</legend>
            <div className="lead-grid">
              {leads.map(lead => (
                <button aria-pressed={config.lead === lead} className={config.lead === lead ? 'active' : ''} onClick={() => patch({ lead })} key={lead}>
                  {lead}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="section-label spacing">02 / MACHINE</div>
          <label>Paper speed
            <select value={config.paperSpeed} onChange={event => patch({ paperSpeed: Number(event.target.value) as PaperSpeed })}>
              <option value="12.5">12.5 mm/s</option><option value="25">25 mm/s</option><option value="50">50 mm/s</option>
            </select>
          </label>
          <label>Gain
            <select value={config.gain} onChange={event => patch({ gain: Number(event.target.value) as Gain })}>
              <option value="5">5 mm/mV</option><option value="10">10 mm/mV</option><option value="20">20 mm/mV</option>
            </select>
          </label>
          <button className="toggle" aria-pressed={config.showGrid} onClick={() => patch({ showGrid: !config.showGrid })}>
            <span className={config.showGrid ? 'switch on' : 'switch'} />ECG paper grid <small>{config.showGrid ? 'ON' : 'OFF'}</small>
          </button>
        </aside>

        <section className="monitor">
          <LiveEcgMonitor
            config={config}
            view={view}
            onViewChange={setView}
            onPlaybackReset={resetSelectedMeasurement}
            onPlaceMarker={placeActiveMarker}
            activeMarker={activeMarker}
            maxAbsVoltageMv={maxAbsVoltageMv}
            markers={markers}
            annotations={annotations}
            onClockSnapshot={snapshot => { clockSnapshotRef.current = snapshot; }}
            restoreRequest={restoreRequest}
          />

          <div className="measure-panel">
            <div className="measurement-workspace-heading">
              <div>
                <h4 className="section-label" id="measurement-sets-heading">03 / MANUAL CALIPERS</h4>
                <p className="measurement-guidance" id="measurement-guidance">Choose a named measurement, then choose Start or End and click the visible waveform to place that point. The millisecond fields are the keyboard alternative. Points are manually selected, not automatically detected ECG boundaries or diagnoses. Reset playback restores the selected measurement’s example points.</p>
              </div>
              <button type="button" className="add-measurement" onClick={addMeasurementSet}>Add measurement set</button>
            </div>
            <section className="measurement-set-list" aria-labelledby="measurement-sets-heading">
              <ol>
                {measurementSets.map(set => {
                  const summary = summarizeManualMeasurementSet(set);
                  const selected = set.id === selectedMeasurementId;
                  return <li key={set.id} className={selected ? 'is-selected' : ''}>
                    <button type="button" className="measurement-set-select" aria-pressed={selected} onClick={() => { setSelectedMeasurementId(set.id); setActiveMarker('start'); }}>
                      <span>{set.name || 'Untitled measurement'}</span>
                      <small>{set.kind} · {summary.durationMs.toFixed(0)} ms{summary.heartRateBpm ? ` · ${summary.heartRateBpm.toFixed(0)} bpm` : ''}</small>
                    </button>
                    <button type="button" className="delete-measurement" aria-label={`Delete ${set.name || 'unnamed measurement'}`} onClick={() => deleteMeasurementSet(set.id)}>Delete</button>
                  </li>;
                })}
              </ol>
              {measurementSets.length === 0 && <p className="measurement-empty">No measurement set is selected. Add one to place manual markers.</p>}
            </section>
            <div className="measure-controls">
              <fieldset className="measurement-point-choice" aria-describedby="measurement-guidance">
                <legend>Point to place on waveform</legend>
                <label><input type="radio" name="active-measurement-point" value="start" disabled={!selectedMeasurement} checked={activeMarker === 'start'} onChange={() => setActiveMarker('start')} />Start</label>
                <label><input type="radio" name="active-measurement-point" value="end" disabled={!selectedMeasurement} checked={activeMarker === 'end'} onChange={() => setActiveMarker('end')} />End</label>
              </fieldset>
              <label>Set name
                <input type="text" value={selectedMeasurement?.name ?? ''} disabled={!selectedMeasurement} aria-describedby="measurement-guidance" onChange={event => updateSelectedMeasurement({ name: event.target.value })} />
              </label>
              <label>Measurement
                <select value={selectedMeasurement?.kind ?? 'RR'} disabled={!selectedMeasurement} onChange={event => setKindAndDefaults(event.target.value as MeasurementKind)}>
                  <option value="RR">R–R interval</option><option value="PR">PR interval</option><option value="QRS">QRS duration</option><option value="QT">QT interval</option>
                </select>
              </label>
              <label>Start point (ms)
                <input type="number" min="0" step="4" value={selectedMeasurement?.startMs ?? ''} disabled={!selectedMeasurement} aria-describedby="measurement-guidance" onFocus={() => setActiveMarker('start')} onChange={event => updateSelectedMeasurement({ startMs: Number(event.target.value) })} />
              </label>
              <label>End point (ms)
                <input type="number" min="0" step="4" value={selectedMeasurement?.endMs ?? ''} disabled={!selectedMeasurement} aria-describedby="measurement-guidance" onFocus={() => setActiveMarker('end')} onChange={event => updateSelectedMeasurement({ endMs: Number(event.target.value) })} />
              </label>
              <button className="reset" disabled={!selectedMeasurement} onClick={resetSelectedMeasurement}>Reset points</button>
            </div>
            <div className="measurement-result" role="status" aria-live="polite">
              {measurement ? <>
                <strong>{measurement.durationMs.toFixed(0)} <small>ms</small></strong>
                {measurement.heartRateBpm && <strong>{measurement.heartRateBpm.toFixed(0)} <small>bpm</small></strong>}
              </> : <strong>No active measurement</strong>}
            </div>
            <p className="measurement-result-note">Duration is calculated from the selected set’s two stored timestamps and is unchanged by paper speed, gain, lead, or viewport position.</p>
            <details className="annotation-workspace">
              <summary>Optional timeline annotations <small>private learner notes</small></summary>
              <p>Annotations are anchored to absolute simulation timestamps and do not alter the waveform or measurement results. They are not automated boundary detection or clinical interpretation. Authored teaching regions use a separate versioned content record and are not included in this session.</p>
              <div className="annotation-workspace-head">
                <span>{annotations.length} {annotations.length === 1 ? 'annotation' : 'annotations'}</span>
                <button type="button" className="add-measurement" onClick={addAnnotation}>Add annotation</button>
              </div>
              <ol className="annotation-list" aria-label="Timeline annotations">
                {annotations.map(annotation => {
                  const selected = annotation.id === selectedAnnotationId;
                  return <li key={annotation.id} className={selected ? 'is-selected' : ''}>
                    <button type="button" className="annotation-select" aria-pressed={selected} onClick={() => annotation.source === 'learner' && setSelectedAnnotationId(annotation.id)}>
                      <span>{annotation.label}</span>
                      <small>{annotation.source === 'learner' ? 'Learner note' : 'Authored region'} · {annotation.startMs.toFixed(0)}–{annotation.endMs.toFixed(0)} ms</small>
                    </button>
                    {annotation.source === 'learner' && <button type="button" className="delete-measurement" aria-label={`Delete ${annotation.label || 'unnamed annotation'}`} onClick={() => deleteAnnotation(annotation.id)}>Delete</button>}
                  </li>;
                })}
              </ol>
              {annotations.length === 0 && <p className="annotation-empty">No annotations yet. Add a private learner note from the active measurement range.</p>}
              <div className="annotation-controls">
                <label>Annotation label
                  <input type="text" value={selectedLearnerAnnotation?.label ?? ''} disabled={!selectedLearnerAnnotation} onChange={event => updateSelectedAnnotation({ label: event.target.value || 'Untitled annotation' })} />
                </label>
                <label>Annotation start (ms)
                  <input type="number" min="0" max={selectedLearnerAnnotation?.endMs} step="4" value={selectedLearnerAnnotation?.startMs ?? ''} disabled={!selectedLearnerAnnotation} onChange={event => updateSelectedAnnotation({ startMs: Number(event.target.value) })} />
                </label>
                <label>Annotation end (ms)
                  <input type="number" min={selectedLearnerAnnotation?.startMs ?? 0} step="4" value={selectedLearnerAnnotation?.endMs ?? ''} disabled={!selectedLearnerAnnotation} onChange={event => updateSelectedAnnotation({ endMs: Number(event.target.value) })} />
                </label>
              </div>
            </details>
            <details className="experiment-workspace" ref={experimentPanelRef}>
              <summary>Saved experiments <small>local to this browser</small></summary>
              <p>Save machine settings, the paused/running time position, named measurements and private learner notes. Restoring always pauses playback and replaces the current local workspace only after the selected snapshot validates.</p>
              <div className="experiment-save-controls">
                <label>Experiment name
                  <input type="text" maxLength={80} value={snapshotName} onChange={event => setSnapshotName(event.target.value)} />
                </label>
                <button type="button" className="add-measurement" onClick={saveCurrentExperiment}>Save experiment</button>
              </div>
              <p className="experiment-storage-status" role="status" aria-live="polite">{storageStatus}</p>
              {savedExperiments.length === 0
                ? <p className="annotation-empty">No saved experiments in this browser.</p>
                : <ol className="saved-experiment-list" aria-label="Saved experiments">
                    {savedExperiments.map(snapshot => <li key={snapshot.snapshotId}>
                      <div><strong>{snapshot.name}</strong><small>{snapshot.machine.lead} · {snapshot.machine.paperSpeed} mm/s · {snapshot.machine.gain} mm/mV · {snapshot.playback.elapsedMs.toFixed(0)} ms</small></div>
                      <div className="saved-experiment-actions">
                        <button type="button" className="measurement-set-select" onClick={() => setPendingRestore(snapshot)}>Restore</button>
                        <button type="button" className="delete-measurement" onClick={() => setPendingDelete(snapshot)}>Delete</button>
                      </div>
                    </li>)}
                  </ol>}
              {pendingRestore && <div className="experiment-confirmation" role="group" aria-label="Restore saved experiment confirmation">
                <p>Restore “{pendingRestore.name}”? Current unsaved measurements and learner notes will be replaced. Playback will remain paused.</p>
                <button type="button" className="add-measurement" onClick={restoreExperiment}>Restore now</button>
                <button type="button" className="delete-measurement" onClick={() => setPendingRestore(null)}>Cancel restore</button>
              </div>}
              {pendingDelete && <div className="experiment-confirmation" role="group" aria-label="Delete saved experiment confirmation">
                <p>Delete “{pendingDelete.name}” from this browser? This cannot be undone.</p>
                <button type="button" className="delete-measurement" onClick={removeSavedExperiment}>Delete now</button>
                <button type="button" className="measurement-set-select" onClick={() => setPendingDelete(null)}>Cancel delete</button>
              </div>}
            </details>
            <GuidedExercises config={config} measurement={selectedMeasurement} onCompleted={definition => academy.recordExercise(definition.id, definition.version, definition.title)} onOpenChallenge={() => setActiveSection('challenge')} request={exerciseRequest} />
          </div>

          <div className="measure-row">
            <div><span>RATE</span><strong>{rate} <small>bpm</small></strong></div>
            <div><span>CALIBRATION</span><strong>1 mV <small>/ {config.gain} mm</small></strong></div>
            <div className="hint">Synthetic educational signal.<br />Not for clinical diagnosis or patient care.</div>
          </div>
        </section>
      </section>
      </> : activeSection === 'academy' ? <AcademyDashboard
        progress={academy.progress}
        notice={academy.notice}
        onReset={academy.reset}
        onOpenChallenge={() => setActiveSection('challenge')}
        onOpenSimulator={() => setActiveSection('simulator')}
      /> : activeSection === 'learn' ? <LearnMode /> : null}
      {/* Kept mounted while hidden so an in-progress session survives navigation; a timed session pauses itself. */}
      <div hidden={activeSection !== 'challenge'}>
        <RhythmChallenge
          active={activeSection === 'challenge'}
          missedCaseIds={missedCaseIds}
          onSessionEnded={academy.recordSession}
          onOpenAcademy={() => setActiveSection('academy')}
          timedBestScore={academy.progress.bests.timedScore}
          reviewRequest={reviewRequest}
        />
      </div>
      <div hidden={activeSection !== 'patients'}>
        <VirtualPatient
          completed={academy.progress.patients}
          onCompleted={academy.recordPatientCase}
          onOpenAcademy={() => setActiveSection('academy')}
          onOpenChallenge={() => setActiveSection('challenge')}
        />
      </div>
      <div hidden={activeSection !== 'medication'}>
        <MedicationCenter records={medications} preview={medicationPreview} publishedLessons={relatedLessons} onOpenLearn={() => setActiveSection('learn')} />
      </div>

      <p className="ecg-footnote">Educational simulation only. Synthetic signals, not for clinical diagnosis or patient care.</p>
    </div>
  );
}
