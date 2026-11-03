import { z } from 'zod';
import { sourceReferenceSchema } from './references';

export const contentIdSchema = z.string().trim().min(1).max(100).regex(/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/);
export const contentVersionSchema = z.string().regex(/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/);

const text = z.string().trim().min(1).max(20_000);
const shortText = z.string().trim().min(1).max(500);
const paperSpeedSchema = z.union([z.literal(12.5), z.literal(25), z.literal(50)]);
const gainSchema = z.union([z.literal(5), z.literal(10), z.literal(20)]);
const leadSchema = z.enum(['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6']);
const permissionSchema = z.enum(['permitted', 'not-permitted', 'unknown']);

export const publicationStatuses = [
  'draft',
  'awaiting-review',
  'reviewed-for-educational-use',
  'published',
  'retired',
] as const;

const reviewerSchema = z.strictObject({
  displayName: shortText,
  qualifications: shortText.optional(),
});

export const reviewScopeSchema = z.strictObject({
  /** Reviewer confirms every item in the stated review domain was considered. */
  completeRecord: z.boolean(),
  claimIds: z.array(contentIdSchema).max(200),
  referenceIds: z.array(contentIdSchema).max(100),
}).superRefine((scope, context) => {
  if (new Set(scope.claimIds).size !== scope.claimIds.length) {
    context.addIssue({ code: 'custom', path: ['claimIds'], message: 'Review claim IDs must be unique.' });
  }
  if (new Set(scope.referenceIds).size !== scope.referenceIds.length) {
    context.addIssue({ code: 'custom', path: ['referenceIds'], message: 'Review reference IDs must be unique.' });
  }
});

const reviewFields = {
  contentId: contentIdSchema,
  reviewType: z.enum(['educational-content', 'source-and-licensing', 'medical-content', 'publication-approval']),
  versionReviewed: contentVersionSchema,
  scope: reviewScopeSchema,
  notes: text.optional(),
  requiredFollowUp: z.array(shortText).max(50),
};

export const reviewRecordSchema = z.discriminatedUnion('status', [
  z.strictObject({
    ...reviewFields,
    status: z.literal('approved'),
    reviewer: reviewerSchema,
    reviewedAt: z.iso.date(),
  }),
  z.strictObject({
    ...reviewFields,
    status: z.enum(['pending', 'rejected', 'changes-requested']),
    reviewer: reviewerSchema.optional(),
    reviewedAt: z.iso.date().optional(),
  }),
]).superRefine((review, context) => {
  if (review.status === 'approved') {
    if (!review.scope.completeRecord) {
      context.addIssue({ code: 'custom', path: ['scope', 'completeRecord'], message: 'An approval must cover the complete declared review scope.' });
    }
    if (review.requiredFollowUp.length > 0) {
      context.addIssue({ code: 'custom', path: ['requiredFollowUp'], message: 'An approved review cannot have unresolved required follow-up.' });
    }
  }
});

const usageRightsSchema = z.strictObject({
  licenceName: shortText.optional(),
  reuse: permissionSchema,
  redistribution: permissionSchema,
  modification: permissionSchema,
  termsUrl: z.httpUrl().optional(),
});

export const waveformCalibrationSchema = z.strictObject({
  paperSpeedMmPerSecond: paperSpeedSchema,
  gainMmPerMv: gainSchema,
});

export const signalMetadataSchema = z.strictObject({
  sampleRateHz: z.number().finite().min(1).max(100_000),
  recordingDurationMs: z.number().finite().min(1).max(86_400_000),
  leadOrder: z.array(leadSchema).min(1).max(12),
  voltageUnit: z.enum(['mV', 'µV']),
  timestampUnit: z.literal('ms'),
  calibration: waveformCalibrationSchema,
  preprocessing: z.array(shortText).max(50),
  signalStatus: z.enum(['original', 'transformed']),
}).superRefine((metadata, context) => {
  if (new Set(metadata.leadOrder).size !== metadata.leadOrder.length) {
    context.addIssue({ code: 'custom', path: ['leadOrder'], message: 'Lead names must be unique and preserve their recording order.' });
  }
  if (metadata.signalStatus === 'transformed' && metadata.preprocessing.length === 0) {
    context.addIssue({ code: 'custom', path: ['preprocessing'], message: 'Transformed signals must describe their preprocessing steps.' });
  }
  if (metadata.signalStatus === 'original' && metadata.preprocessing.length > 0) {
    context.addIssue({ code: 'custom', path: ['signalStatus'], message: 'A signal with preprocessing steps must be marked transformed.' });
  }
});

const syntheticEcgProvenance = z.strictObject({
  kind: z.literal('synthetic-ecg'),
  generatorId: shortText,
  signal: signalMetadataSchema,
  usageRights: usageRightsSchema,
  sourceUrl: z.httpUrl().optional(),
  datasetId: shortText.optional(),
});

const licensedEcgProvenance = z.strictObject({
  kind: z.literal('licensed-real-ecg'),
  sourceIdentifier: shortText,
  sourceUrl: z.httpUrl().optional(),
  datasetId: shortText.optional(),
  signal: signalMetadataSchema,
  usageRights: usageRightsSchema,
}).refine(item => Boolean(item.sourceUrl || item.datasetId), {
  path: ['sourceUrl'],
  message: 'A real ECG recording must identify its source URL or dataset ID.',
});

const authorizedPatientEcgProvenance = z.strictObject({
  kind: z.literal('authorized-deidentified-patient-ecg'),
  sourceIdentifier: shortText,
  sourceUrl: z.httpUrl().optional(),
  datasetId: shortText.optional(),
  authorizationReference: shortText,
  deidentificationMethod: shortText,
  signal: signalMetadataSchema,
  usageRights: usageRightsSchema,
}).refine(item => Boolean(item.sourceUrl || item.datasetId), {
  path: ['sourceUrl'],
  message: 'A patient-derived recording must identify its authorized source or dataset.',
});

export const provenanceSchema = z.discriminatedUnion('kind', [
  syntheticEcgProvenance,
  licensedEcgProvenance,
  authorizedPatientEcgProvenance,
  z.strictObject({
    kind: z.literal('synthetic-illustration'),
    generatorId: shortText,
    usageRights: usageRightsSchema,
    signalMetadataOmissionReason: shortText,
  }),
  z.strictObject({
    kind: z.literal('external-educational-illustration'),
    sourceIdentifier: shortText,
    sourceUrl: z.httpUrl().optional(),
    usageRights: usageRightsSchema,
    signal: signalMetadataSchema.optional(),
    signalMetadataOmissionReason: shortText.optional(),
  }).refine(item => Boolean(item.signal || item.signalMetadataOmissionReason), {
    path: ['signalMetadataOmissionReason'],
    message: 'If signal metadata is unavailable, explain why it is absent.',
  }),
  z.strictObject({
    kind: z.literal('text-only-explanation'),
    signalMetadataOmissionReason: shortText,
  }),
]);

const objectiveSchema = z.strictObject({ id: contentIdSchema, statement: shortText });
export const claimSchema = z.strictObject({
  id: contentIdSchema,
  statement: shortText,
  /** A reviewer-facing location, e.g. section, question choice, answer key, or explanation. */
  locations: z.array(shortText).min(1).max(30),
  basis: z.enum(['external-source', 'project-behavior']),
});
const lessonSectionSchema = z.strictObject({
  id: contentIdSchema,
  title: shortText,
  body: text,
  demonstrationId: contentIdSchema.optional(),
});
const lessonKeyTermSchema = z.strictObject({ term: shortText, definition: text });
const demonstrationBase = {
  id: contentIdSchema,
  title: shortText,
  description: shortText,
};
const annotationSchema = z.strictObject({
  label: shortText,
  startMs: z.number().finite().min(0).max(10_000),
  endMs: z.number().finite().min(0).max(10_000),
}).refine(annotation => annotation.startMs < annotation.endMs, {
  path: ['endMs'],
  message: 'An annotation must end after it starts.',
});

export const visualDemonstrationSchema = z.discriminatedUnion('kind', [
  z.strictObject({ ...demonstrationBase, kind: z.literal('calibration-explorer') }),
  z.strictObject({
    ...demonstrationBase,
    kind: z.literal('limb-lead-relationships'),
    leads: z.array(leadSchema).min(2).max(6),
  }),
  z.strictObject({
    ...demonstrationBase,
    kind: z.literal('waveform-components'),
    lead: leadSchema,
    annotations: z.array(annotationSchema).min(1).max(20),
  }),
  z.strictObject({
    ...demonstrationBase,
    kind: z.literal('rr-rate'),
    initialRrMs: z.number().finite().int().min(300).max(3000),
  }),
]);

export const lessonContentSchema = z.strictObject({
  sequence: z.number().int().min(1).max(10_000),
  prerequisiteIds: z.array(contentIdSchema).max(30),
  sections: z.array(lessonSectionSchema).min(1).max(50),
  keyTerms: z.array(lessonKeyTermSchema).max(50),
  keyTakeaways: z.array(shortText).min(1).max(30),
  visualDemonstrations: z.array(visualDemonstrationSchema).min(1).max(10),
  knowledgeCheckIds: z.array(contentIdSchema).min(1).max(20),
}).superRefine((lesson, context) => {
  const sectionIds = lesson.sections.map(section => section.id);
  if (new Set(sectionIds).size !== sectionIds.length) {
    context.addIssue({ code: 'custom', path: ['sections'], message: 'Lesson section IDs must be unique.' });
  }
  const demonstrationIds = lesson.visualDemonstrations.map(demonstration => demonstration.id);
  if (new Set(demonstrationIds).size !== demonstrationIds.length) {
    context.addIssue({ code: 'custom', path: ['visualDemonstrations'], message: 'Demonstration IDs must be unique within a lesson.' });
  }
  if (lesson.sections.some(section => section.demonstrationId && !demonstrationIds.includes(section.demonstrationId))) {
    context.addIssue({ code: 'custom', path: ['sections'], message: 'Every section demonstration link must resolve within this lesson.' });
  }
  if (new Set(lesson.prerequisiteIds).size !== lesson.prerequisiteIds.length) {
    context.addIssue({ code: 'custom', path: ['prerequisiteIds'], message: 'Prerequisite lesson IDs must be unique.' });
  }
  if (new Set(lesson.knowledgeCheckIds).size !== lesson.knowledgeCheckIds.length) {
    context.addIssue({ code: 'custom', path: ['knowledgeCheckIds'], message: 'Knowledge-check question IDs must be unique.' });
  }
});

const commonFields = {
  id: contentIdSchema,
  title: shortText,
  summary: shortText,
  learningObjectives: z.array(objectiveSchema).min(1).max(20),
  difficulty: z.enum(['introductory', 'intermediate', 'advanced']),
  tags: z.array(z.string().trim().min(1).max(50)).max(30),
  contentDomain: z.enum(['non-clinical-education', 'clinical-education']),
  publicationStatus: z.enum(publicationStatuses),
  provenance: provenanceSchema,
  sourceReferences: z.array(sourceReferenceSchema).max(100),
  /** Drafts may be incomplete; claim coverage is mandatory at clinical release. */
  claims: z.array(claimSchema).max(200).optional(),
  reviewRecords: z.array(reviewRecordSchema).max(100),
  createdAt: z.iso.datetime({ offset: true }),
  updatedAt: z.iso.datetime({ offset: true }),
  lastReviewedAt: z.iso.date().optional(),
  version: contentVersionSchema,
  knownLimitations: z.array(shortText).max(50),
  deprecation: z.strictObject({
    deprecatedAt: z.iso.date(),
    replacedBy: contentIdSchema.optional(),
    reason: shortText,
  }).optional(),
};

const commonContentSchema = {
  ...commonFields,
  type: z.literal('lesson'),
  lessonContent: lessonContentSchema,
};

const questionChoiceSchema = z.strictObject({ id: contentIdSchema, text: shortText });
const questionContentSchema = z.strictObject({
  ...commonFields,
  type: z.literal('question'),
  parentLessonId: contentIdSchema.optional(),
  questionType: z.enum(['single-best-answer', 'multiple-select']),
  prompt: text,
  choices: z.array(questionChoiceSchema).min(2).max(12),
  correctAnswerIds: z.array(contentIdSchema).min(1).max(12),
  explanation: text,
}).superRefine((question, context) => {
  if (question.contentDomain === 'clinical-education' && !question.parentLessonId) {
    context.addIssue({ code: 'custom', path: ['parentLessonId'], message: 'A clinical formative question must identify its parent lesson.' });
  }
  const choiceIds = question.choices.map(choice => choice.id);
  if (new Set(choiceIds).size !== choiceIds.length) {
    context.addIssue({ code: 'custom', path: ['choices'], message: 'Question choice IDs must be unique.' });
  }
  if (new Set(question.correctAnswerIds).size !== question.correctAnswerIds.length || question.correctAnswerIds.some(id => !choiceIds.includes(id))) {
    context.addIssue({ code: 'custom', path: ['correctAnswerIds'], message: 'Every answer key must be a unique ID belonging to a listed choice.' });
  }
  if (question.questionType === 'single-best-answer' && question.correctAnswerIds.length !== 1) {
    context.addIssue({ code: 'custom', path: ['correctAnswerIds'], message: 'A single-best-answer question must have exactly one correct answer.' });
  }
});

const caseContentSchema = z.strictObject({
  ...commonFields,
  type: z.literal('case'),
  contentDomain: z.literal('clinical-education'),
  caseMaterial: z.strictObject({
    context: text,
    findings: z.array(shortText).min(1).max(100),
    prompt: text,
    answer: z.strictObject({ text: text, rationale: text }),
    explanation: text,
    waveformContentId: contentIdSchema.optional(),
  }),
});

const waveformContentSchema = z.strictObject({
  ...commonFields,
  type: z.literal('waveform'),
  contentDomain: z.enum(['non-clinical-education', 'clinical-education']),
}).refine(item => ['synthetic-ecg', 'licensed-real-ecg', 'authorized-deidentified-patient-ecg'].includes(item.provenance.kind), {
  path: ['provenance'],
  message: 'Waveform examples require an explicit ECG signal provenance and technical metadata record.',
});


export const medicationSectionKinds = ['mechanism', 'educational-use', 'pharmacology', 'ecg-effect', 'safety', 'interaction'] as const;
export const medicationGroups = ['beta-blocker', 'calcium-channel-blocker', 'cardiac-glycoside', 'antiarrhythmic', 'other'] as const;
/** Kinds whose statements must stand on their own evidence, never on a mechanism claim alone. */
const evidenceDependentSectionKinds: readonly (typeof medicationSectionKinds)[number][] = ['ecg-effect', 'safety', 'interaction'];

/**
 * Educational medication content must not read as prescribing: no quantities with units, and none of
 * the vocabulary of dosing or instructions to a patient. Applied to every learner-visible field.
 */
const DOSE_QUANTITY = /\b\d+(?:[.,]\d+)?\s*(?:mg|mcg|µg|ug|g|kg|ml|mL|l|units?|iu|mmol|meq)\b/i;
const PRESCRIBING_WORDS = /\b(?:dose|doses|dosing|dosage|prescrib\w*|regimen|titrat\w*|loading|twice daily|once daily|per day|every \d+ hours?|you should take|patients should take)\b/i;
export const looksLikeDosingOrPrescribing = (value: string) => DOSE_QUANTITY.test(value) || PRESCRIBING_WORDS.test(value);

const medicationSectionSchema = z.strictObject({
  id: contentIdSchema,
  kind: z.enum(medicationSectionKinds),
  title: shortText,
  body: text,
  claimIds: z.array(contentIdSchema).min(1).max(20),
});

const medicationPayloadSchema = z.strictObject({
  genericName: shortText,
  drugGroup: z.enum(medicationGroups),
  drugClass: shortText,
  searchTerms: z.array(shortText).max(10),
  sections: z.array(medicationSectionSchema).min(1).max(12),
  /** Other content (for example lessons) shown as related only while it is published and eligible. */
  relatedContentIds: z.array(contentIdSchema).max(10),
});

const medicationContentSchema = z.strictObject({
  ...commonFields,
  type: z.literal('medication'),
  contentDomain: z.literal('clinical-education'),
  claims: z.array(claimSchema).min(1).max(200),
  medication: medicationPayloadSchema,
}).superRefine((record, context) => {
  const { sections } = record.medication;
  const claimsById = new Map(record.claims.map(claim => [claim.id, claim]));
  const sectionIds = sections.map(section => section.id);
  if (new Set(sectionIds).size !== sectionIds.length) {
    context.addIssue({ code: 'custom', path: ['medication', 'sections'], message: 'Medication section IDs must be unique.' });
  }
  const cited = new Set<string>();
  sections.forEach((section, index) => {
    if (new Set(section.claimIds).size !== section.claimIds.length) {
      context.addIssue({ code: 'custom', path: ['medication', 'sections', index, 'claimIds'], message: 'A section may cite each claim only once.' });
    }
    section.claimIds.forEach(id => {
      cited.add(id);
      if (!claimsById.has(id)) {
        context.addIssue({ code: 'custom', path: ['medication', 'sections', index, 'claimIds'], message: `Section cites unknown claim "${id}".` });
      }
    });
  });
  record.claims.forEach((claim, index) => {
    if (claim.basis !== 'external-source') {
      context.addIssue({ code: 'custom', path: ['claims', index, 'basis'], message: 'Every medication claim must be externally sourced; project behavior is not evidence about a medicine.' });
    }
    if (!cited.has(claim.id)) {
      context.addIssue({ code: 'custom', path: ['claims', index], message: `Claim "${claim.id}" is not cited by any section, so the claim inventory would not match what learners read.` });
    }
  });
  const mechanismClaims = new Set(sections.filter(section => section.kind === 'mechanism').flatMap(section => section.claimIds));
  sections.forEach((section, index) => {
    if (evidenceDependentSectionKinds.includes(section.kind) && section.claimIds.every(id => mechanismClaims.has(id))) {
      context.addIssue({
        code: 'custom',
        path: ['medication', 'sections', index, 'claimIds'],
        message: `A ${section.kind} section needs a claim of its own; it cannot rest on mechanism claims alone.`,
      });
    }
  });
  const related = record.medication.relatedContentIds;
  if (new Set(related).size !== related.length || related.includes(record.id)) {
    context.addIssue({ code: 'custom', path: ['medication', 'relatedContentIds'], message: 'Related content IDs must be unique and must not include the record itself.' });
  }
  const learnerVisible: [string, string][] = [
    ['title', record.title],
    ['summary', record.summary],
    ...record.learningObjectives.map((objective, index): [string, string] => [`learningObjectives.${index}`, objective.statement]),
    ...record.claims.map((claim, index): [string, string] => [`claims.${index}.statement`, claim.statement]),
    ...sections.flatMap((section, index): [string, string][] => [[`medication.sections.${index}.title`, section.title], [`medication.sections.${index}.body`, section.body]]),
    ['medication.genericName', record.medication.genericName],
    ['medication.drugClass', record.medication.drugClass],
    ...record.medication.searchTerms.map((term, index): [string, string] => [`medication.searchTerms.${index}`, term]),
  ];
  learnerVisible.forEach(([path, value]) => {
    if (looksLikeDosingOrPrescribing(value)) {
      context.addIssue({ code: 'custom', path: path.split('.').map(part => (/^\d+$/.test(part) ? Number(part) : part)), message: 'Educational medication content must not contain doses, quantities with units or prescribing language.' });
    }
  });
});

const lessonRecordSchema = z.strictObject(commonContentSchema);

export const contentRecordSchema = z.discriminatedUnion('type', [
  lessonRecordSchema,
  questionContentSchema,
  caseContentSchema,
  waveformContentSchema,
  medicationContentSchema,
]).superRefine((record, context) => {
  const created = Date.parse(record.createdAt);
  const updated = Date.parse(record.updatedAt);
  if (updated < created) {
    context.addIssue({ code: 'custom', path: ['updatedAt'], message: 'updatedAt must not be earlier than createdAt.' });
  }
  if (record.lastReviewedAt && Date.parse(`${record.lastReviewedAt}T00:00:00Z`) > updated) {
    context.addIssue({ code: 'custom', path: ['lastReviewedAt'], message: 'lastReviewedAt must not be later than updatedAt.' });
  }
  record.reviewRecords.forEach((review, reviewIndex) => {
    if (review.contentId !== record.id) {
      context.addIssue({ code: 'custom', path: ['reviewRecords', reviewIndex, 'contentId'], message: 'A review record must identify the exact content record it reviews.' });
    }
    if (review.reviewedAt && Date.parse(`${review.reviewedAt}T00:00:00Z`) > updated) {
      context.addIssue({ code: 'custom', path: ['reviewRecords', reviewIndex, 'reviewedAt'], message: 'A review date must not be later than updatedAt.' });
    }
  });
  if (record.deprecation && Date.parse(`${record.deprecation.deprecatedAt}T00:00:00Z`) > updated) {
    context.addIssue({ code: 'custom', path: ['deprecation', 'deprecatedAt'], message: 'A deprecation date must not be later than updatedAt.' });
  }

  const objectiveIds = new Set(record.learningObjectives.map(objective => objective.id));
  if (objectiveIds.size !== record.learningObjectives.length) {
    context.addIssue({ code: 'custom', path: ['learningObjectives'], message: 'Learning objective IDs must be unique within a record.' });
  }
  if (new Set(record.tags).size !== record.tags.length) {
    context.addIssue({ code: 'custom', path: ['tags'], message: 'Tags must be unique within a record.' });
  }
  const referenceIds = record.sourceReferences.map(reference => reference.id);
  if (new Set(referenceIds).size !== referenceIds.length) {
    context.addIssue({ code: 'custom', path: ['sourceReferences'], message: 'Source reference IDs must be unique within a record.' });
  }
  record.sourceReferences.forEach((reference, referenceIndex) => {
    reference.supports.forEach((link, linkIndex) => {
      if (link.kind === 'objective' && !objectiveIds.has(link.objectiveId)) {
        context.addIssue({
          code: 'custom',
          path: ['sourceReferences', referenceIndex, 'supports', linkIndex],
          message: `Source support points to unknown learning objective "${link.objectiveId}".`,
        });
      }
      if (link.kind === 'claim' && !(record.claims ?? []).some(claim => claim.id === link.claimId)) {
        context.addIssue({
          code: 'custom',
          path: ['sourceReferences', referenceIndex, 'supports', linkIndex],
          message: `Source support points to unknown claim "${link.claimId}".`,
        });
      }
    });
  });
  const claimIds = (record.claims ?? []).map(claim => claim.id);
  if (new Set(claimIds).size !== claimIds.length) {
    context.addIssue({ code: 'custom', path: ['claims'], message: 'Claim IDs must be unique within a record.' });
  }
  record.reviewRecords.forEach((review, reviewIndex) => {
    const unknownClaim = review.scope.claimIds.find(id => !claimIds.includes(id));
    const unknownReference = review.scope.referenceIds.find(id => !referenceIds.includes(id));
    if (unknownClaim) {
      context.addIssue({ code: 'custom', path: ['reviewRecords', reviewIndex, 'scope', 'claimIds'], message: `Review scope points to unknown claim "${unknownClaim}".` });
    }
    if (unknownReference) {
      context.addIssue({ code: 'custom', path: ['reviewRecords', reviewIndex, 'scope', 'referenceIds'], message: `Review scope points to unknown source reference "${unknownReference}".` });
    }
  });
  const reviewSlots = new Map<string, z.infer<typeof reviewRecordSchema>[]>();
  record.reviewRecords.forEach(review => {
    const slot = `${review.reviewType}:${review.versionReviewed}`;
    reviewSlots.set(slot, [...(reviewSlots.get(slot) ?? []), review]);
  });
  reviewSlots.forEach((reviews, slot) => {
    const statuses = reviews.map(review => review.status);
    if (reviews.length > 1 || statuses.filter(status => status === 'approved').length > 1 ||
      (statuses.includes('approved') && statuses.some(status => status === 'rejected' || status === 'changes-requested'))) {
      context.addIssue({ code: 'custom', path: ['reviewRecords'], message: `More than one or conflicting review outcome exists for ${slot}; replace the slot with the current outcome or review a new content version.` });
    }
  });
  if (record.publicationStatus === 'reviewed-for-educational-use' && !record.reviewRecords.some(review =>
    review.reviewType === 'educational-content' && review.status === 'approved' && review.versionReviewed === record.version,
  )) {
    context.addIssue({ code: 'custom', path: ['reviewRecords'], message: 'The reviewed-for-educational-use state requires an approved educational-content review for the current version.' });
  }
  if (record.publicationStatus === 'awaiting-review' && !record.reviewRecords.some(review =>
    review.reviewType === 'educational-content' && review.status === 'pending' && review.versionReviewed === record.version,
  )) {
    context.addIssue({ code: 'custom', path: ['reviewRecords'], message: 'The awaiting-review state requires a pending educational-content review for the current version.' });
  }
  if (record.contentDomain === 'clinical-education' && record.knownLimitations.length === 0) {
    context.addIssue({ code: 'custom', path: ['knownLimitations'], message: 'Clinical education content must state known limitations before it can proceed through review.' });
  }
});

export type ContentRecord = z.infer<typeof contentRecordSchema>;
export type LessonContent = z.infer<typeof lessonContentSchema>;
export type VisualDemonstration = z.infer<typeof visualDemonstrationSchema>;
export type ClaimRecord = z.infer<typeof claimSchema>;
export type ReviewScope = z.infer<typeof reviewScopeSchema>;

