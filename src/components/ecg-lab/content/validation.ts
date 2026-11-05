import { contentRecordSchema } from './schema';
import type { ContentRecord, ContentReviewRecord } from './types';

export type ContentIssue = { path: string; message: string };
export type ContentValidationResult =
  | { success: true; data: ContentRecord; issues: [] }
  | { success: false; issues: ContentIssue[] };

export type PublicationReadiness = {
  eligible: boolean;
  checks: {
    technicalSchema: boolean;
    claimSourceMapping: boolean;
    sourceAndLicensing: boolean;
    educationalReview: boolean;
    medicalContentReview: boolean;
    publicationApproval: boolean;
    limitationsAndExplanation: boolean;
    parentLesson: boolean;
    lessonDependencies: boolean;
  };
  issues: ContentIssue[];
};

const parseStructure = (input: unknown) => contentRecordSchema.safeParse(input);

function reviewForCurrentVersion(record: ContentRecord, type: ContentReviewRecord['reviewType']): ContentReviewRecord | undefined {
  return record.reviewRecords.find(review =>
    review.contentId === record.id && review.reviewType === type && review.status === 'approved' && review.versionReviewed === record.version,
  );
}

function requiredScopeIds(record: ContentRecord, type: ContentReviewRecord['reviewType']) {
  const claimIds = (record.claims ?? []).map(claim => claim.id);
  const referenceIds = record.sourceReferences.map(reference => reference.id);
  if (type === 'source-and-licensing') {
    return {
      claimIds: (record.claims ?? []).filter(claim => claim.basis === 'external-source').map(claim => claim.id),
      referenceIds,
    };
  }
  return { claimIds, referenceIds: type === 'publication-approval' ? referenceIds : [] };
}

function reviewCoversScope(record: ContentRecord, review: ContentReviewRecord): boolean {
  const required = requiredScopeIds(record, review.reviewType);
  return review.contentId === record.id && review.versionReviewed === record.version &&
    review.scope.completeRecord &&
    required.claimIds.every(id => review.scope.claimIds.includes(id)) &&
    required.referenceIds.every(id => review.scope.referenceIds.includes(id));
}

function hasNamedDatedReview(record: ContentRecord, type: ContentReviewRecord['reviewType'], needsQualifications = false): boolean {
  const review = reviewForCurrentVersion(record, type);
  return Boolean(review && review.status === 'approved' && review.reviewer.displayName.trim() && review.reviewedAt &&
    review.requiredFollowUp.length === 0 && reviewCoversScope(record, review) &&
    (!needsQualifications || review.reviewer.qualifications?.trim()));
}

function provenanceRightsAreExplicitAndPermitted(record: ContentRecord): boolean {
  const provenance = record.provenance;
  if (provenance.kind === 'text-only-explanation') return true;
  const rights = provenance.usageRights;
  const canRedistribute = rights.reuse === 'permitted' && rights.redistribution === 'permitted';
  const isTransformed = 'signal' in provenance && provenance.signal?.signalStatus === 'transformed';
  const illustrationIsTransformed = provenance.kind === 'external-educational-illustration' &&
    provenance.signal?.signalStatus === 'transformed';
  return canRedistribute && (!(isTransformed || illustrationIsTransformed) || rights.modification === 'permitted');
}

function mappedAndVerifiedClaims(record: ContentRecord): { ready: boolean; issues: ContentIssue[] } {
  if (record.contentDomain !== 'clinical-education') return { ready: true, issues: [] };
  const claims = record.claims ?? [];
  const issues: ContentIssue[] = [];
  if (claims.length === 0) {
    issues.push({ path: 'claims', message: 'Clinical content needs an explicit claim inventory before publication review.' });
  }
  claims.forEach(claim => {
    if (claim.basis !== 'external-source') return;
    const supportingReferences = record.sourceReferences.filter(reference =>
      reference.supports.some(link => link.kind === 'claim' && link.claimId === claim.id),
    );
    if (supportingReferences.length === 0) {
      issues.push({ path: `claims.${claim.id}`, message: `Claim "${claim.id}" has no claim-specific source mapping.` });
      return;
    }
    if (!supportingReferences.some(reference => reference.verificationStatus !== 'unverified')) {
      issues.push({ path: `claims.${claim.id}`, message: `Claim "${claim.id}" is mapped only to references that remain unverified.` });
    }
  });
  return { ready: issues.length === 0, issues };
}

function coreReadiness(record: ContentRecord) {
  const clinical = record.contentDomain === 'clinical-education';
  const claimMapping = mappedAndVerifiedClaims(record);
  const referencesVerified = record.sourceReferences.every(reference => reference.verificationStatus !== 'unverified');
  const sourceReviewComplete = !clinical || hasNamedDatedReview(record, 'source-and-licensing');
  const sourceAndLicensing = provenanceRightsAreExplicitAndPermitted(record) && referencesVerified &&
    (!clinical || (record.sourceReferences.length > 0 && sourceReviewComplete));
  const educationalReview = hasNamedDatedReview(record, 'educational-content');
  const medicalContentReview = !clinical || hasNamedDatedReview(record, 'medical-content', true);
  const publicationApproval = hasNamedDatedReview(record, 'publication-approval');
  const limitationsAndExplanation = !clinical || (
    record.knownLimitations.length > 0 &&
    (record.type !== 'case' || Boolean(record.caseMaterial.explanation.trim()))
  );
  return { clinical, claimMapping, sourceAndLicensing, educationalReview, medicalContentReview, publicationApproval, limitationsAndExplanation };
}

function getPublicationReadinessInternal(input: unknown, relatedRecords: ContentRecord[], ancestry: Set<string>): PublicationReadiness {
  const parsed = parseStructure(input);
  const emptyChecks: PublicationReadiness['checks'] = {
    technicalSchema: false,
    claimSourceMapping: false,
    sourceAndLicensing: false,
    educationalReview: false,
    medicalContentReview: false,
    publicationApproval: false,
    limitationsAndExplanation: false,
    parentLesson: false,
    lessonDependencies: false,
  };
  if (!parsed.success) {
    return {
      eligible: false,
      checks: emptyChecks,
      issues: parsed.error.issues.map(issue => ({ path: issue.path.join('.'), message: issue.message })),
    };
  }

  const record = parsed.data;
  const core = coreReadiness(record);
  let lessonDependencies = true;
  let parentLesson = true;

  if (record.type === 'lesson') {
    const dependencyIds = [...record.lessonContent.prerequisiteIds, ...record.lessonContent.knowledgeCheckIds];
    for (const dependencyId of dependencyIds) {
      const dependency = relatedRecords.find(item => item.id === dependencyId);
      if (!dependency || dependency.publicationStatus !== 'published' || ancestry.has(dependency.id)) {
        lessonDependencies = false;
        continue;
      }
      const expectedType = record.lessonContent.prerequisiteIds.includes(dependencyId) ? 'lesson' : 'question';
      if (dependency.type !== expectedType) {
        lessonDependencies = false;
        continue;
      }
      const nextAncestry = new Set(ancestry);
      nextAncestry.add(record.id);
      if (!getPublicationReadinessInternal(dependency, relatedRecords, nextAncestry).eligible) lessonDependencies = false;
    }
  }

  if (record.type === 'question' && core.clinical) {
    const parent = relatedRecords.find(item => item.id === record.parentLessonId);
    const relationValid = Boolean(parent && parent.type === 'lesson' && parent.lessonContent.knowledgeCheckIds.includes(record.id));
    if (!parent || parent.type !== 'lesson' || !relationValid ||
      !['reviewed-for-educational-use', 'published'].includes(parent.publicationStatus)) {
      parentLesson = false;
    } else {
      const parentCore = coreReadiness(parent);
      parentLesson = parentCore.claimMapping.ready && parentCore.sourceAndLicensing && parentCore.educationalReview &&
        parentCore.medicalContentReview && parentCore.publicationApproval && parentCore.limitationsAndExplanation;
      for (const prerequisiteId of parent.lessonContent.prerequisiteIds) {
        const prerequisite = relatedRecords.find(item => item.id === prerequisiteId);
        const nextAncestry = new Set(ancestry);
        nextAncestry.add(record.id);
        if (!prerequisite || prerequisite.type !== 'lesson' || prerequisite.publicationStatus !== 'published' ||
          nextAncestry.has(prerequisite.id) || !getPublicationReadinessInternal(prerequisite, relatedRecords, nextAncestry).eligible) {
          parentLesson = false;
        }
      }
    }
  }

  let waveformLinkIsReady = true;
  if (record.type === 'case' && record.caseMaterial.waveformContentId) {
    const waveform = relatedRecords.find(item => item.id === record.caseMaterial.waveformContentId);
    waveformLinkIsReady = Boolean(waveform && waveform.type === 'waveform' && waveform.publicationStatus === 'published' &&
      getPublicationReadinessInternal(waveform, relatedRecords, new Set([...ancestry, record.id])).eligible);
  }

  const checks: PublicationReadiness['checks'] = {
    technicalSchema: true,
    claimSourceMapping: core.claimMapping.ready,
    sourceAndLicensing: core.sourceAndLicensing && waveformLinkIsReady,
    educationalReview: core.educationalReview,
    medicalContentReview: core.medicalContentReview,
    publicationApproval: core.publicationApproval,
    limitationsAndExplanation: core.limitationsAndExplanation,
    parentLesson,
    lessonDependencies,
  };
  const issues: ContentIssue[] = [];
  const descriptions: Record<keyof PublicationReadiness['checks'], string> = {
    technicalSchema: 'Content must pass runtime schema validation.',
    claimSourceMapping: 'Every externally sourced clinical claim must map to a source-verified reference; project-behavior claims must be identified separately.',
    sourceAndLicensing: 'Provenance rights and applicable source/licensing checks must be explicit, verified, permitted, and approved.',
    educationalReview: 'An identified reviewer must approve the current content version and required review scope for educational use.',
    medicalContentReview: 'Clinical education requires an identified, qualified reviewer for the current version and full claim scope.',
    publicationApproval: 'An identified reviewer must separately approve publication of the current version and review scope.',
    limitationsAndExplanation: 'Clinical content requires a clear explanation and stated limitations.',
    parentLesson: 'A clinical formative question requires an eligible parent lesson with its own current-version source, education, medical, and publication approvals.',
    lessonDependencies: 'Every prerequisite lesson and knowledge-check question must resolve to eligible published content; lesson dependency cycles are not allowed.',
  };
  for (const [check, passed] of Object.entries(checks) as [keyof PublicationReadiness['checks'], boolean][]) {
    if (!passed) issues.push({ path: check, message: descriptions[check] });
  }
  issues.push(...core.claimMapping.issues);
  if (!parentLesson && record.type === 'question' && record.parentLessonId) {
    issues.push({ path: 'parentLessonId', message: `Parent lesson "${record.parentLessonId}" is missing, not linked to this question, or has unmet release requirements.` });
  }
  return { eligible: issues.length === 0, checks, issues };
}

export function getPublicationReadiness(input: unknown, relatedRecords: ContentRecord[] = []): PublicationReadiness {
  return getPublicationReadinessInternal(input, relatedRecords, new Set());
}

export function validateContentRecord(input: unknown, relatedRecords: ContentRecord[] = []): ContentValidationResult {
  const parsed = parseStructure(input);
  if (!parsed.success) {
    return { success: false, issues: parsed.error.issues.map(issue => ({ path: issue.path.join('.'), message: issue.message })) };
  }
  if (parsed.data.type === 'lesson') {
    const linkIssues: ContentIssue[] = [];
    parsed.data.lessonContent.prerequisiteIds.forEach(id => {
      const linked = relatedRecords.find(record => record.id === id);
      if (!linked || linked.type !== 'lesson') {
        linkIssues.push({ path: 'lessonContent.prerequisiteIds', message: `Prerequisite "${id}" is missing or is not a lesson record.` });
      }
    });
    parsed.data.lessonContent.knowledgeCheckIds.forEach(id => {
      const linked = relatedRecords.find(record => record.id === id);
      if (!linked || linked.type !== 'question') {
        linkIssues.push({ path: 'lessonContent.knowledgeCheckIds', message: `Knowledge check "${id}" is missing or is not a question record.` });
      } else if (parsed.data.contentDomain === 'clinical-education' && linked.parentLessonId !== parsed.data.id) {
        linkIssues.push({ path: 'lessonContent.knowledgeCheckIds', message: `Knowledge check "${id}" does not identify this lesson as its parent.` });
      }
    });
    if (linkIssues.length) return { success: false, issues: linkIssues };
  }
  if (parsed.data.type === 'question') {
    const question = parsed.data;
    if (question.parentLessonId) {
      const parent = relatedRecords.find(record => record.id === question.parentLessonId);
      if (!parent || parent.type !== 'lesson' || !parent.lessonContent.knowledgeCheckIds.includes(question.id)) {
        return { success: false, issues: [{ path: 'parentLessonId', message: `Parent lesson "${question.parentLessonId}" is missing or does not link back to this question.` }] };
      }
    }
  }
  if (parsed.data.publicationStatus === 'published') {
    const readiness = getPublicationReadiness(parsed.data, relatedRecords);
    if (!readiness.eligible) {
      return { success: false, issues: readiness.issues.map(issue => ({ path: `publicationStatus.${issue.path}`, message: issue.message })) };
    }
  }
  return { success: true, data: parsed.data, issues: [] };
}

const allowedTransitions: Record<ContentRecord['publicationStatus'], readonly ContentRecord['publicationStatus'][]> = {
  draft: ['awaiting-review'],
  'awaiting-review': ['draft', 'reviewed-for-educational-use'],
  'reviewed-for-educational-use': ['awaiting-review', 'published', 'retired'],
  published: ['retired'],
  retired: [],
};

export type TransitionResult =
  | { success: true; record: ContentRecord }
  | { success: false; issues: ContentIssue[] };

export function transitionPublicationStatus(
  input: unknown,
  nextStatus: ContentRecord['publicationStatus'],
  at: string,
  relatedRecords: ContentRecord[] = [],
): TransitionResult {
  const validated = validateContentRecord(input, relatedRecords);
  if (!validated.success) return validated;
  if (typeof at !== 'string' || !/^\d{4}-\d{2}-\d{2}T/.test(at)) {
    return { success: false, issues: [{ path: 'updatedAt', message: 'Transition time must be an ISO 8601 timestamp with an explicit timezone.' }] };
  }
  const timestamp = new Date(at);
  if (!Number.isFinite(timestamp.getTime()) || !/(Z|[+-]\d{2}:\d{2})$/.test(at)) {
    return { success: false, issues: [{ path: 'updatedAt', message: 'Transition time must be a valid ISO 8601 timestamp with an explicit timezone.' }] };
  }
  if (!allowedTransitions[validated.data.publicationStatus].includes(nextStatus)) {
    return { success: false, issues: [{ path: 'publicationStatus', message: `Transition from ${validated.data.publicationStatus} to ${nextStatus} is not allowed.` }] };
  }
  const candidate = { ...validated.data, publicationStatus: nextStatus, updatedAt: timestamp.toISOString() };
  const result = validateContentRecord(candidate, relatedRecords);
  if (!result.success) return result;
  if (nextStatus === 'published' && !getPublicationReadiness(candidate, relatedRecords).eligible) {
    return { success: false, issues: getPublicationReadiness(candidate, relatedRecords).issues };
  }
  return { success: true, record: result.data };
}

