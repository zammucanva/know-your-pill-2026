export type { ClaimLink, SourceReference } from './references';
export type { ClaimRecord, ContentRecord, LessonContent, ReviewScope, VisualDemonstration } from './schema';

import type { ContentRecord } from './schema';

export type ContentType = ContentRecord['type'];
export type PublicationStatus = ContentRecord['publicationStatus'];
export type ContentProvenance = ContentRecord['provenance'];
export type ContentReviewRecord = ContentRecord['reviewRecords'][number];
export type LessonRecord = Extract<ContentRecord, { type: 'lesson' }>;
export type KnowledgeCheckRecord = Extract<ContentRecord, { type: 'question' }>;
export type MedicationRecord = Extract<ContentRecord, { type: 'medication' }>;

