import { contentRecordSchema, reviewRecordSchema } from './schema';
import type { ContentRecord, ContentReviewRecord } from './types';
import type { ContentIssue } from './validation';

export type ReviewIntakeResult =
  | { success: true; record: ContentRecord; review: ContentReviewRecord }
  | { success: false; issues: ContentIssue[] };

/** Validates a reviewer-supplied record against one exact current content version and replaces its review slot. */
export function recordReviewIntake(input: unknown, contentInput: unknown, updatedAt: string): ReviewIntakeResult {
  const contentResult = contentRecordSchema.safeParse(contentInput);
  if (!contentResult.success) {
    return { success: false, issues: contentResult.error.issues.map(issue => ({ path: `content.${issue.path.join('.')}`, message: issue.message })) };
  }
  const reviewResult = reviewRecordSchema.safeParse(input);
  if (!reviewResult.success) {
    return { success: false, issues: reviewResult.error.issues.map(issue => ({ path: `review.${issue.path.join('.')}`, message: issue.message })) };
  }
  const content = contentResult.data;
  const review = reviewResult.data;
  const issues: ContentIssue[] = [];

  if (review.contentId !== content.id) {
    issues.push({ path: 'contentId', message: `Review contentId must match "${content.id}".` });
  }
  if (review.versionReviewed !== content.version) {
    issues.push({ path: 'versionReviewed', message: `Review is stale: it targets ${review.versionReviewed}, while the current content version is ${content.version}.` });
  }
  if (typeof updatedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}T/.test(updatedAt) ||
    !Number.isFinite(Date.parse(updatedAt)) || !/(Z|[+-]\d{2}:\d{2})$/.test(updatedAt)) {
    issues.push({ path: 'updatedAt', message: 'Recording a review requires the actual ISO 8601 timestamp of this content-record update.' });
  }
  if (review.reviewType === 'medical-content' && content.contentDomain !== 'clinical-education') {
    issues.push({ path: 'reviewType', message: 'Medical-content review is only applicable to clinical-education records.' });
  }
  if (review.status === 'approved' && review.reviewType === 'medical-content' && !review.reviewer.qualifications?.trim()) {
    issues.push({ path: 'reviewer.qualifications', message: 'Clinical medical-content approval requires the reviewer qualifications as actually supplied.' });
  }

  const claimIds = (content.claims ?? []).map(claim => claim.id);
  const referenceIds = content.sourceReferences.map(reference => reference.id);
  const unknownClaim = review.scope.claimIds.find(id => !claimIds.includes(id));
  const unknownReference = review.scope.referenceIds.find(id => !referenceIds.includes(id));
  if (unknownClaim) issues.push({ path: 'scope.claimIds', message: `Review scope contains unknown claim "${unknownClaim}".` });
  if (unknownReference) issues.push({ path: 'scope.referenceIds', message: `Review scope contains unknown source reference "${unknownReference}".` });

  const requiredClaims = review.reviewType === 'source-and-licensing'
    ? (content.claims ?? []).filter(claim => claim.basis === 'external-source').map(claim => claim.id)
    : claimIds;
  const requiredReferences = ['source-and-licensing', 'publication-approval'].includes(review.reviewType) ? referenceIds : [];
  if (review.status === 'approved') {
    const missingClaims = requiredClaims.filter(id => !review.scope.claimIds.includes(id));
    const missingReferences = requiredReferences.filter(id => !review.scope.referenceIds.includes(id));
    if (!review.scope.completeRecord) issues.push({ path: 'scope.completeRecord', message: 'Approval must attest to completion of the declared review scope.' });
    if (missingClaims.length) issues.push({ path: 'scope.claimIds', message: `Approval omits required claim(s): ${missingClaims.join(', ')}.` });
    if (missingReferences.length) issues.push({ path: 'scope.referenceIds', message: `Approval omits required source reference(s): ${missingReferences.join(', ')}.` });
  }

  const existingSlot = content.reviewRecords.find(existing =>
    existing.reviewType === review.reviewType && existing.versionReviewed === review.versionReviewed,
  );
  if (existingSlot && existingSlot.contentId !== content.id) {
    issues.push({ path: 'reviewRecords', message: 'Existing review slot is associated with a different content ID.' });
  }
  if (issues.length) return { success: false, issues };

  const reviewRecords = content.reviewRecords.filter(existing =>
    !(existing.reviewType === review.reviewType && existing.versionReviewed === review.versionReviewed),
  );
  const updated = contentRecordSchema.safeParse({
    ...content,
    updatedAt,
    reviewRecords: [...reviewRecords, review],
  });
  if (!updated.success) {
    return { success: false, issues: updated.error.issues.map(issue => ({ path: `content.${issue.path.join('.')}`, message: issue.message })) };
  }
  return { success: true, record: updated.data, review };
}

