import { describe, expect, it, vi } from 'bun:test';
import { contentRecordSchema } from '@/components/ecg-lab/content/schema';
import { getPublishedLessons, loadContentRegistry } from '@/components/ecg-lab/content/registry';
import { draftClinicalCaseShell, draftWaveformFixture, invalidContentFixture, starterContentFixtures, validEducationalFixture, validKnowledgeCheckFixture } from './fixtures/content';
import { getPublicationReadiness, transitionPublicationStatus, validateContentRecord } from '@/components/ecg-lab/content/validation';
import type { ContentRecord } from '@/components/ecg-lab/content/types';
import { introductoryKnowledgeChecks, introductoryLessons } from '@/components/ecg-lab/content/learn/records';
import { publishedLearnLessons } from '@/components/ecg-lab/content/learn/registry';

describe('educational content schema and governance', () => {
  it('keeps the revised simulator-scale lesson and check at v0.4.0 unpublished pending real review', () => {
    const lesson = introductoryLessons.find(item => item.id === 'learn.paper-speed-and-gain');
    const question = introductoryKnowledgeChecks.find(item => item.id === 'learn.check.paper-speed-and-gain');
    expect(lesson).toMatchObject({ version: '0.4.0', publicationStatus: 'draft', reviewRecords: [], sourceReferences: [] });
    expect(lesson && 'lastReviewedAt' in lesson).toBe(false);
    expect(lesson?.claims?.every(claim => claim.basis === 'project-behavior')).toBe(true);
    expect(question).toMatchObject({ version: '0.4.0', publicationStatus: 'draft', reviewRecords: [], sourceReferences: [], parentLessonId: lesson?.id });
    expect(question && 'lastReviewedAt' in question).toBe(false);
    expect(question?.claims?.every(claim => claim.basis === 'project-behavior')).toBe(true);
    expect(publishedLearnLessons).toEqual([]);
  });

  it('accepts the clearly labelled non-clinical lesson, waveform metadata and unpublished case shell', () => {
    for (const fixture of starterContentFixtures) {
      expect(contentRecordSchema.safeParse(fixture).success).toBe(true);
    }
    expect(draftClinicalCaseShell.publicationStatus).toBe('draft');
    expect(draftClinicalCaseShell.reviewRecords).toEqual([]);
    expect(draftWaveformFixture.provenance.kind).toBe('synthetic-ecg');
    expect(draftWaveformFixture.knownLimitations[0]).toContain('not clinically validated');
  });

  it('validates structured lesson requirements and linked question records', () => {
    const loaded = loadContentRegistry(starterContentFixtures);
    expect(loaded.records).toHaveLength(4);
    expect(loaded.published).toEqual([]);
    expect(getPublishedLessons(loaded)).toEqual([]);

    const missingDemonstration: unknown = {
      ...validEducationalFixture,
      lessonContent: {
        ...validEducationalFixture.lessonContent,
        sections: [{ ...validEducationalFixture.lessonContent.sections[0], demonstrationId: 'missing.demo' }],
      },
    };
    expect(contentRecordSchema.safeParse(missingDemonstration).success).toBe(false);

    const unresolvedQuestion = {
      ...validEducationalFixture,
      lessonContent: { ...validEducationalFixture.lessonContent, knowledgeCheckIds: ['missing.question'] },
    };
    const registry = loadContentRegistry([unresolvedQuestion, ...starterContentFixtures.slice(1)]);
    expect(registry.published).toEqual([]);
    expect(registry.rejected.some(item => item.id === validEducationalFixture.id)).toBe(true);
    expect(registry.issues.some(issue => issue.message.includes('not a question record'))).toBe(true);
  });

  it('rejects missing IDs, unknown content kinds, and malformed provenance', () => {
    expect(validateContentRecord(invalidContentFixture).success).toBe(false);
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, type: 'article' }).success).toBe(false);
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, provenance: { kind: 'patient-data' } }).success).toBe(false);
  });

  it('requires actual reviewer identity and a date for an approved review', () => {
    const withUnsubstantiatedApproval: unknown = {
      ...validEducationalFixture,
      reviewRecords: [{ contentId: validEducationalFixture.id, reviewType: 'medical-content', status: 'approved', versionReviewed: '0.1.0', scope: { completeRecord: true, claimIds: [], referenceIds: [] }, requiredFollowUp: [] }],
    };
    expect(validateContentRecord(withUnsubstantiatedApproval).success).toBe(false);
  });

  it('accepts timezone-qualified ISO timestamps and rejects invalid or contradictory dates', () => {
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, createdAt: '19/10/2026' }).success).toBe(false);
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, updatedAt: '2026-10-18T12:00:00Z' }).success).toBe(false);
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, lastReviewedAt: '2026-10-20' }).success).toBe(false);
  });

  it('validates source reference URLs, provenance-supported units, and reasonable waveform bounds', () => {
    const reference = {
      id: 'ref.interface-guide',
      title: 'Example reference record for schema testing',
      kind: 'textbook',
      supports: [{ kind: 'objective', objectiveId: 'coordinate-units' }],
      verificationStatus: 'unverified',
      url: 'not a URL',
    };
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, sourceReferences: [reference] }).success).toBe(false);
    expect(contentRecordSchema.safeParse({
      ...validEducationalFixture,
      sourceReferences: [{ ...reference, kind: 'primary-guideline', url: undefined }],
    }).success).toBe(false);
    expect(contentRecordSchema.safeParse({
      ...validEducationalFixture,
      sourceReferences: [{ ...reference, kind: 'licensed-dataset', url: undefined }],
    }).success).toBe(false);
    expect(contentRecordSchema.safeParse({
      ...validEducationalFixture,
      sourceReferences: [{
        ...reference,
        url: undefined,
        verificationStatus: 'source-and-rights-verified',
        licence: { reuse: 'unknown', redistribution: 'unknown', modification: 'unknown' },
      }],
    }).success).toBe(false);
    const unsupportedObjective = {
      ...reference,
      url: undefined,
      supports: [{ kind: 'objective', objectiveId: 'missing-objective' }],
    };
    expect(contentRecordSchema.safeParse({ ...validEducationalFixture, sourceReferences: [unsupportedObjective] }).success).toBe(false);

    const waveform = draftWaveformFixture;
    const invalidUnit = { ...waveform, provenance: { ...waveform.provenance, signal: { ...waveform.provenance.signal, voltageUnit: 'volts' } } };
    expect(contentRecordSchema.safeParse(invalidUnit).success).toBe(false);
    const invalidCalibration = { ...waveform, provenance: { ...waveform.provenance, signal: { ...waveform.provenance.signal, calibration: { paperSpeedMmPerSecond: 25, gainMmPerMv: 17 } } } };
    expect(contentRecordSchema.safeParse(invalidCalibration).success).toBe(false);
    const invalidRate = { ...waveform, provenance: { ...waveform.provenance, signal: { ...waveform.provenance.signal, sampleRateHz: 0 } } };
    expect(contentRecordSchema.safeParse(invalidRate).success).toBe(false);
  });

  it('requires a waveform technical record and preprocessing disclosure when transformed', () => {
    const waveform = draftWaveformFixture;
    const { calibration: _calibration, ...withoutCalibration } = waveform.provenance.signal;
    const missingCalibration: unknown = {
      ...waveform,
      provenance: { ...waveform.provenance, signal: withoutCalibration },
    };
    expect(validateContentRecord(missingCalibration).success).toBe(false);
    const transformedWithoutSteps: unknown = {
      ...waveform,
      provenance: { ...waveform.provenance, signal: { ...waveform.provenance.signal, signalStatus: 'transformed' } },
    };
    expect(validateContentRecord(transformedWithoutSteps).success).toBe(false);
  });

  it('rejects question answer keys that do not reference unique listed choices', () => {
    const { lessonContent: _lessonContent, ...common } = validEducationalFixture;
    const malformedQuestion: unknown = {
      ...common,
      type: 'question',
      questionType: 'single-best-answer',
      prompt: 'Schema fixture prompt; not a clinical question.',
      choices: [{ id: 'answer-a', text: 'Option A' }, { id: 'answer-b', text: 'Option B' }],
      correctAnswerIds: ['not-a-choice'],
      explanation: 'Fixture explanation only.',
    };
    expect(validateContentRecord(malformedQuestion).success).toBe(false);
  });

  it('blocks clinical publication until source, medical and publication reviews are independently documented', () => {
    const attemptedPublication: ContentRecord = { ...draftClinicalCaseShell, publicationStatus: 'published' };
    const readiness = getPublicationReadiness(attemptedPublication);
    expect(readiness.eligible).toBe(false);
    expect(readiness.checks.technicalSchema).toBe(true);
    expect(readiness.checks.sourceAndLicensing).toBe(false);
    expect(readiness.checks.medicalContentReview).toBe(false);
    expect(readiness.checks.publicationApproval).toBe(false);
    expect(validateContentRecord(attemptedPublication).success).toBe(false);
    const nonClinicalPublication: ContentRecord = { ...validEducationalFixture, publicationStatus: 'published' };
    expect(getPublicationReadiness(nonClinicalPublication).checks.technicalSchema).toBe(true);
    expect(getPublicationReadiness(nonClinicalPublication).checks.educationalReview).toBe(false);
    expect(getPublicationReadiness(nonClinicalPublication).checks.publicationApproval).toBe(false);
    expect(validateContentRecord(nonClinicalPublication).success).toBe(false);
    expect(transitionPublicationStatus(validEducationalFixture, 'published', '2026-10-19T13:00:00Z').success).toBe(false);
  });

  it('enforces workflow transitions and a pending review record before entering review', () => {
    const pending: ContentRecord = {
      ...validEducationalFixture,
      publicationStatus: 'awaiting-review',
      reviewRecords: [{ contentId: validEducationalFixture.id, reviewType: 'educational-content', status: 'pending', versionReviewed: '0.1.0', scope: { completeRecord: false, claimIds: [], referenceIds: [] }, requiredFollowUp: [] }],
    };
    expect(validateContentRecord(pending, [validKnowledgeCheckFixture]).success).toBe(true);
    const draftWithPendingRecord: ContentRecord = { ...validEducationalFixture, reviewRecords: pending.reviewRecords };
    const transition = transitionPublicationStatus(draftWithPendingRecord, 'awaiting-review', '2026-10-19T13:00:00Z', [validKnowledgeCheckFixture]);
    expect(transition.success).toBe(true);
    expect(transition.success && transition.record.publicationStatus).toBe('awaiting-review');
    expect(transitionPublicationStatus(pending, 'draft', '2026-10-19T13:00:00Z', [validKnowledgeCheckFixture]).success).toBe(true);
    expect(transitionPublicationStatus(pending, 'retired', '2026-10-19T13:00:00Z', [validKnowledgeCheckFixture]).success).toBe(false);
  });

  it('withholds invalid, duplicate and unresolved cross-linked content while returning developer issues', () => {
    const logger = vi.fn();
    const wrongContainer = loadContentRegistry(null, logger);
    expect(wrongContainer.published).toEqual([]);
    expect(wrongContainer.rejected[0].issues[0].message).toContain('must be an array');
    const duplicate = loadContentRegistry([validEducationalFixture, validEducationalFixture], logger);
    expect(duplicate.records).toEqual([]);
    expect(duplicate.published).toEqual([]);
    expect(duplicate.rejected).toHaveLength(2);
    expect(logger).toHaveBeenCalled();

    const unresolvedCase: ContentRecord = {
      ...draftClinicalCaseShell,
      id: 'fixture.unresolved-waveform-case',
      caseMaterial: { ...draftClinicalCaseShell.caseMaterial, waveformContentId: 'missing.waveform' },
    };
    const registry = loadContentRegistry([...starterContentFixtures, invalidContentFixture, unresolvedCase]);
    expect(registry.records).toHaveLength(4);
    expect(registry.published).toEqual([]);
    expect(registry.rejected).toHaveLength(2);
    expect(registry.issues.some(issue => issue.message.includes('Referenced waveform'))).toBe(true);
  });
});
