import { useCallback, useRef, useState } from 'react';
import type { ProgressStorage } from '../learn/progress';
import type { PatientCase } from '../patients/cases';
import type { AnswerEvaluation } from '../rhythm/cases';
import type { SessionState } from '../rhythm/session';
import {
  applyPatientCase,
  applySession,
  emptyAcademyProgress,
  readAcademyProgress,
  recordExerciseCompleted,
  writeAcademyProgress,
  type AcademyProgress,
  type ApplyResult,
} from './progress';

function localStorageOrNull(): ProgressStorage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

/**
 * The one Academy store for the whole app. The latest progress lives in a ref so two events in the
 * same tick (for example a double click) are applied in order and never overwrite each other.
 */
export function useAcademy(storage: ProgressStorage | null | undefined = undefined) {
  const storageRef = useRef<ProgressStorage | null>(storage === undefined ? localStorageOrNull() : storage);
  const initial = useRef(storageRef.current ? readAcademyProgress(storageRef.current) : { progress: emptyAcademyProgress(), notice: undefined as string | undefined });
  const progressRef = useRef<AcademyProgress>(initial.current.progress);
  const [progress, setProgress] = useState<AcademyProgress>(initial.current.progress);
  const [notice, setNotice] = useState<string | undefined>(initial.current.notice);

  const commit = useCallback((next: AcademyProgress) => {
    progressRef.current = next;
    setProgress(next);
    const handle = storageRef.current;
    if (!handle) { setNotice('Browser storage is unavailable, so Academy progress will not be kept.'); return; }
    setNotice(writeAcademyProgress(handle, next) ? undefined : 'Academy progress could not be saved in this browser.');
  }, []);

  const apply = useCallback((update: (current: AcademyProgress, now: string) => ApplyResult): ApplyResult => {
    const result = update(progressRef.current, new Date().toISOString());
    if (result.progress !== progressRef.current) commit(result.progress);
    return result;
  }, [commit]);

  const recordSession = useCallback((state: SessionState) => apply((current, now) => applySession(current, state, now)), [apply]);
  const recordPatientCase = useCallback((patient: PatientCase, evaluation: AnswerEvaluation) => apply((current, now) => applyPatientCase(current, patient, evaluation, now)), [apply]);
  const recordExercise = useCallback((id: string, version: string, title: string) => apply((current, now) => recordExerciseCompleted(current, id, version, title, now)), [apply]);
  const reset = useCallback(() => {
    commit(emptyAcademyProgress());
    const handle = storageRef.current;
    try { handle?.removeItem('ecg-lab-academy-v1'); } catch { /* storage may be read-only */ }
  }, [commit]);

  return { progress, notice, recordSession, recordPatientCase, recordExercise, reset };
}
