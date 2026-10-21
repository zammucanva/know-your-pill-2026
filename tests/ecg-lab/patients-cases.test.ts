import { describe, expect, it } from 'bun:test';
import { generateRhythmLeadSamples } from '@/components/ecg-lab/engine/rhythm-signal';
import { buildCase, expectedRate, getRhythmCase } from '@/components/ecg-lab/rhythm/cases';
import { STRIP_DURATION_MS } from '@/components/ecg-lab/rhythm/rhythms';
import { patientCaseSchema, patientCases, resolvePatientCase, type PatientCase } from '@/components/ecg-lab/patients/cases';

const first = patientCases[0];

describe('fictional patient case library', () => {
  it('has validated, frozen, draft and unreviewed cases with no escalation text', () => {
    expect(patientCases.length).toBeGreaterThanOrEqual(6);
    expect(Object.isFrozen(patientCases)).toBe(true);
    expect(new Set(patientCases.map(item => item.id)).size).toBe(patientCases.length);
    expect(patientCases.every(item => item.publicationStatus === 'draft' && item.reviewStatus === 'unreviewed' && item.escalation === null)).toBe(true);
    expect(patientCases.every(item => patientCaseSchema.safeParse(item).success)).toBe(true);
  });

  it('refuses unreviewed escalation text, publication, stored heart rate, unknown fields and malformed records', () => {
    const bad: Record<string, unknown>[] = [
      { ...first, escalation: 'Call for help immediately' },
      { ...first, publicationStatus: 'published' },
      { ...first, reviewStatus: 'reviewed' },
      { ...first, observations: [...first.observations, { label: 'Heart rate', value: '72 per minute' }] },
      { ...first, observations: [{ label: 'Pulse', value: '72' }, first.observations[0]] },
      { ...first, extra: true },
      { ...first, ageRange: 'about forty' },
      { ...first, symptoms: [] },
      { ...first, id: 'Patient 1' },
      { ...first, rhythmCaseId: 'nsr' },
      { ...first, learningObjectives: [] },
      { ...first, caveats: [] },
      { ...first, observations: [first.observations[0]] },
    ];
    for (const candidate of bad) expect(patientCaseSchema.safeParse(candidate).success, JSON.stringify(candidate).slice(0, 60)).toBe(false);
  });

  it('points every case at a real rhythm case, so the ECG is the same waveform definition used by the Rhythm Challenge', () => {
    for (const patient of patientCases) {
      const resolved = resolvePatientCase(patient.id);
      expect(resolved.ok, patient.id).toBe(true);
      if (!resolved.ok) continue;
      expect(resolved.rhythm).toBe(getRhythmCase(patient.rhythmCaseId)!);
      const viaPatient = buildCase(resolved.rhythm);
      const viaChallenge = buildCase(getRhythmCase(patient.rhythmCaseId)!);
      expect(viaPatient).toBe(viaChallenge);
      expect(generateRhythmLeadSamples(viaPatient.schedule, 'II', 0, STRIP_DURATION_MS)).toEqual(generateRhythmLeadSamples(viaChallenge.schedule, 'II', 0, STRIP_DURATION_MS));
    }
  });

  it('can always show a measured heart rate in the debrief, taken from the strip rather than stored', () => {
    for (const patient of patientCases) {
      const rhythm = getRhythmCase(patient.rhythmCaseId)!;
      const rate = expectedRate(rhythm);
      expect(rate.applicable, patient.id).toBe(true);
      expect(patient.observations.map(item => item.label).join(' ')).not.toMatch(/heart|pulse/i);
      expect(Object.keys(patient).some(key => /heartRate|pulse/i.test(key))).toBe(false);
    }
  });

  it('does not give the answer away in the text shown before the learner answers', () => {
    for (const patient of patientCases) {
      const { category } = buildCase(getRhythmCase(patient.rhythmCaseId)!);
      const visibleBeforeAnswer = [patient.title, patient.presentation, ...patient.symptoms, ...patient.history, ...patient.observations.map(item => `${item.label} ${item.value}`)].join(' ').toLowerCase();
      expect(visibleBeforeAnswer, patient.id).not.toContain(category.label.toLowerCase());
      for (const word of ['fibrillation', 'tachycardia', 'bradycardia', 'av block', 'ventricular', 'flutter', 'arrhythmia']) {
        expect(visibleBeforeAnswer, `${patient.id} mentions ${word}`).not.toContain(word);
      }
    }
  });

  it('marks every case as fictional and its observations as simulated through its text, not real data', () => {
    for (const patient of patientCases) {
      expect([patient.presentation, ...patient.history].join(' ')).toMatch(/fictional/i);
    }
  });
});

describe('resolving cases safely', () => {
  it('fails with a reason for an unknown case, an invalid record or a missing ECG', () => {
    expect(resolvePatientCase('patient.nope.01')).toEqual({ ok: false, reason: 'This case is not available.' });
    const invalid = { ...first, publicationStatus: 'published' } as unknown as PatientCase;
    expect(resolvePatientCase(first.id, [invalid])).toEqual({ ok: false, reason: 'This case is not valid and cannot be shown.' });
    const dangling: PatientCase = { ...first, rhythmCaseId: 'rhythm.nsr.99' };
    expect(resolvePatientCase(first.id, [dangling])).toEqual({ ok: false, reason: 'The ECG for this case is not available.' });
    expect(resolvePatientCase(first.id, []).ok).toBe(false);
  });
});
