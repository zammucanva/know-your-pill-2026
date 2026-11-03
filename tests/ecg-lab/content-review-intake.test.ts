import { describe, expect, it } from 'bun:test';
import { introductoryKnowledgeChecks, introductoryLessons, introductoryLearnDrafts } from '@/components/ecg-lab/content/learn/records';
import { publishedLearnLessons } from '@/components/ecg-lab/content/learn/registry';
import { recordReviewIntake } from '@/components/ecg-lab/content/review-intake';
import { contentRecordSchema } from '@/components/ecg-lab/content/schema';
import { loadContentRegistry } from '@/components/ecg-lab/content/registry';
import { getPublicationReadiness } from '@/components/ecg-lab/content/validation';
import type { ContentRecord, ContentReviewRecord } from '@/components/ecg-lab/content/types';

// Explicitly synthetic test values. These never enter the content registry and are not real reviews,
// reviewers, qualifications, or dates. They exercise validation shape only.
const testDate = '2026-10-19';
const testUpdatedAt = '2026-10-19T20:44:56Z';
const testOnlyReviewer = { displayName: 'TEST FIXTURE ONLY — NOT A REAL REVIEWER', qualifications: 'TEST DATA — NOT A CREDENTIAL' };

function approvedTestReview(record: ContentRecord, reviewType: ContentReviewRecord['reviewType'], overrides: Record<string, unknown> = {}) {
  const claims = record.claims ?? [];
  const needsSourceScope = reviewType === 'source-and-licensing' || reviewType === 'publication-approval';
  return {
    contentId: record.id,
    reviewType,
    status: 'approved',
    versionReviewed: record.version,
    scope: {
      completeRecord: true,
      claimIds: reviewType === 'source-and-licensing'
        ? claims.filter(claim => claim.basis === 'external-source').map(claim => claim.id)
        : claims.map(claim => claim.id),
      referenceIds: needsSourceScope ? record.sourceReferences.map(reference => reference.id) : [],
    },
    reviewer: reviewType === 'medical-content' ? testOnlyReviewer : { displayName: testOnlyReviewer.displayName },
    reviewedAt: testDate,
    requiredFollowUp: [],
    ...overrides,
  };
}

describe('review intake and clinical release gate', () => {
  it('keeps all current lesson and linked question drafts out of the published Learn catalog', () => {
    expect(introductoryLessons).toHaveLength(3);
    expect(introductoryKnowledgeChecks).toHaveLength(3);
    expect(introductoryLessons.every(lesson => lesson.publicationStatus === 'draft' && lesson.reviewRecords.length === 0)).toBe(true);
    expect(introductoryKnowledgeChecks.every(question => question.publicationStatus === 'draft' && question.reviewRecords.length === 0)).toBe(true);
    expect(publishedLearnLessons).toEqual([]);
    expect(loadContentRegistry(introductoryLearnDrafts).published).toEqual([]);
  });

  it('reports unverified references and missing claim-to-source mappings as distinct blockers', () => {
    const lesson = introductoryLessons[0];
    const readiness = getPublicationReadiness({ ...lesson, publicationStatus: 'published' }, introductoryLearnDrafts);
    expect(readiness.checks.claimSourceMapping).toBe(false);
    expect(readiness.checks.sourceAndLicensing).toBe(false);
    expect(readiness.issues.some(issue => issue.message.includes('remain unverified'))).toBe(true);

    const missingMapping = {
      ...lesson,
      sourceReferences: lesson.sourceReferences.map(reference => ({
        ...reference,
        supports: reference.supports.filter(link => link.kind !== 'claim' || link.claimId !== 'ecg-surface-potential-over-time'),
      })),
    };
    const mappingReadiness = getPublicationReadiness(missingMapping, introductoryLearnDrafts);
    expect(mappingReadiness.issues.some(issue => issue.path === 'claims.ecg-surface-potential-over-time' && issue.message.includes('no claim-specific source mapping'))).toBe(true);
  });

  it('prevents a linked question from publishing while its parent lesson is draft or otherwise ineligible', () => {
    const question = introductoryKnowledgeChecks[0];
    const readiness = getPublicationReadiness({ ...question, publicationStatus: 'published' }, introductoryLearnDrafts);
    expect(readiness.checks.parentLesson).toBe(false);
    expect(readiness.issues.some(issue => issue.path === 'parentLessonId')).toBe(true);
  });

  it('prevents a lesson from publishing before every linked question and prerequisite is eligible', () => {
    const lesson = introductoryLessons[1];
    const readiness = getPublicationReadiness({ ...lesson, publicationStatus: 'published' }, introductoryLearnDrafts);
    expect(readiness.checks.lessonDependencies).toBe(false);
  });

  it('rejects stale review versions and medical approvals without supplied qualifications', () => {
    const lesson = introductoryLessons[0];
    const stale = approvedTestReview(lesson, 'educational-content', { versionReviewed: '0.2.0' });
    const staleResult = recordReviewIntake(stale, lesson, testUpdatedAt);
    expect(staleResult.success).toBe(false);
    expect(staleResult.success === false && staleResult.issues.some(issue => issue.message.includes('Review is stale'))).toBe(true);
    const oldVersionApproval = { ...lesson, reviewRecords: [stale] };
    expect(getPublicationReadiness(oldVersionApproval, introductoryLearnDrafts).checks.educationalReview).toBe(false);

    const question = introductoryKnowledgeChecks[0];
    const missingQualification = approvedTestReview(question, 'medical-content', {
      reviewer: { displayName: testOnlyReviewer.displayName },
    });
    const qualificationResult = recordReviewIntake(missingQualification, question, testUpdatedAt);
    expect(qualificationResult.success).toBe(false);
    expect(qualificationResult.success === false && qualificationResult.issues.some(issue => issue.path === 'reviewer.qualifications')).toBe(true);
  });

  it('requires source-and-licensing approval and scope before it can satisfy that gate', () => {
    const question = introductoryKnowledgeChecks[0];
    const incomplete = approvedTestReview(question, 'source-and-licensing', {
      scope: { completeRecord: true, claimIds: [], referenceIds: [] },
    });
    const intake = recordReviewIntake(incomplete, question, testUpdatedAt);
    expect(intake.success).toBe(false);

    const readiness = getPublicationReadiness({ ...question, publicationStatus: 'published' }, introductoryLearnDrafts);
    expect(readiness.checks.sourceAndLicensing).toBe(false);

    const verifiedMetadataWithoutReview = {
      ...question,
      sourceReferences: question.sourceReferences.map(reference => ({ ...reference, verificationStatus: 'source-verified' as const })),
    };
    expect(getPublicationReadiness(verifiedMetadataWithoutReview, introductoryLearnDrafts).checks.sourceAndLicensing).toBe(false);
  });

  it('does not treat syntactically complete test-only approval metadata as proof of source accuracy or medical truth', () => {
    const lesson = introductoryLessons[0];
    const testReviews = (['source-and-licensing', 'educational-content', 'medical-content', 'publication-approval'] as const)
      .map(reviewType => approvedTestReview(lesson, reviewType));
    const withTestOnlyApprovals = { ...lesson, reviewRecords: testReviews };
    expect(contentRecordSchema.safeParse(withTestOnlyApprovals).success).toBe(true);
    const readiness = getPublicationReadiness({ ...withTestOnlyApprovals, publicationStatus: 'published' }, introductoryLearnDrafts);
    expect(readiness.checks.educationalReview).toBe(true);
    expect(readiness.checks.medicalContentReview).toBe(true);
    expect(readiness.checks.publicationApproval).toBe(true);
    expect(readiness.checks.claimSourceMapping).toBe(false);
    expect(readiness.checks.sourceAndLicensing).toBe(false);
    expect(readiness.eligible).toBe(false);
  });

  it('refuses to apply approvals to a different content ID or an incomplete claim scope', () => {
    const lesson = introductoryLessons[0];
    const wrongContent = recordReviewIntake(
      approvedTestReview(lesson, 'educational-content', { contentId: 'learn.other-item' }),
      lesson,
      testUpdatedAt,
    );
    expect(wrongContent.success).toBe(false);

    const missingClaim = approvedTestReview(lesson, 'educational-content', {
      scope: { completeRecord: true, claimIds: [], referenceIds: [] },
    });
    expect(recordReviewIntake(missingClaim, lesson, testUpdatedAt).success).toBe(false);
  });

  it('keeps imported review records tied to their content and replaces, rather than contradicts, one review slot', () => {
    const lesson = introductoryLessons[0];
    const first = recordReviewIntake({
      contentId: lesson.id,
      reviewType: 'educational-content',
      status: 'pending',
      versionReviewed: lesson.version,
      scope: { completeRecord: false, claimIds: [], referenceIds: [] },
      requiredFollowUp: ['Complete claim review.'],
    }, lesson, testUpdatedAt);
    expect(first.success).toBe(true);
    if (!first.success) return;

    const approved = recordReviewIntake(approvedTestReview(lesson, 'educational-content'), first.record, testUpdatedAt);
    expect(approved.success).toBe(true);
    if (approved.success) {
      expect(approved.record.reviewRecords.filter(item => item.reviewType === 'educational-content')).toHaveLength(1);
    }
  });

  it('rejects contradictory approvals for the same review type and content version', () => {
    const lesson = introductoryLessons[0];
    const approved = approvedTestReview(lesson, 'educational-content');
    const rejected = {
      contentId: lesson.id,
      reviewType: 'educational-content',
      status: 'rejected',
      versionReviewed: lesson.version,
      scope: { completeRecord: true, claimIds: (lesson.claims ?? []).map(claim => claim.id), referenceIds: [] },
      reviewer: { displayName: testOnlyReviewer.displayName },
      reviewedAt: testDate,
      requiredFollowUp: ['Test-only conflicting outcome.'],
    };
    expect(contentRecordSchema.safeParse({ ...lesson, reviewRecords: [approved, rejected] }).success).toBe(false);
    expect(contentRecordSchema.safeParse({ ...lesson, reviewRecords: [approved, { ...approved, reviewer: { displayName: 'Duplicate test-only slot' } }] }).success).toBe(false);
  });
});

