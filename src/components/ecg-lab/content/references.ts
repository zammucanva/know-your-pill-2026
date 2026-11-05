import { z } from 'zod';

const recordId = z.string().trim().min(1).max(100).regex(/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/);
const label = z.string().trim().min(1).max(1000);

export const sourceKinds = [
  'primary-guideline',
  'professional-society-statement',
  'review-article',
  'textbook',
  'peer-reviewed-study',
  'licensed-dataset',
  'educational-webpage',
  'other',
] as const;

export const claimLinkSchema = z.discriminatedUnion('kind', [
  z.strictObject({ kind: z.literal('objective'), objectiveId: recordId }),
  z.strictObject({ kind: z.literal('claim'), claimId: recordId }),
]);

const reusePermissionSchema = z.enum(['permitted', 'not-permitted', 'unknown']);

export const sourceReferenceSchema = z.strictObject({
  id: recordId,
  title: label,
  kind: z.enum(sourceKinds),
  authors: z.array(label).max(30).optional(),
  issuingOrganization: label.optional(),
  jurisdiction: label.optional(),
  publicationDate: z.iso.date().optional(),
  editionOrVersion: label.optional(),
  doi: z.string().trim().min(1).max(300).optional(),
  isbn: z.string().trim().min(10).max(24).regex(/^[0-9Xx -]+$/).optional(),
  url: z.httpUrl().optional(),
  accessedDate: z.iso.date().optional(),
  licence: z.strictObject({
    name: label.optional(),
    termsUrl: z.httpUrl().optional(),
    reuse: reusePermissionSchema,
    redistribution: reusePermissionSchema,
    modification: reusePermissionSchema,
  }).optional(),
  supports: z.array(claimLinkSchema).min(1).max(100),
  verificationStatus: z.enum(['unverified', 'source-verified', 'source-and-rights-verified']),
  metadataOmissions: z.array(z.strictObject({ field: label, reason: label })).max(30).optional(),
}).superRefine((reference, context) => {
  if (reference.kind === 'primary-guideline' && (!reference.issuingOrganization || !reference.jurisdiction)) {
    context.addIssue({ code: 'custom', path: ['jurisdiction'], message: 'A guideline reference must identify its issuing organization and jurisdiction so regional context is explicit.' });
  }
  if (reference.kind === 'licensed-dataset' && !reference.licence) {
    context.addIssue({ code: 'custom', path: ['licence'], message: 'A licensed dataset reference must record its licence status; unknown terms must remain explicitly unknown.' });
  }
  if (reference.kind === 'licensed-dataset' && reference.licence && !reference.licence.name &&
    !reference.metadataOmissions?.some(omission => omission.field === 'licence.name')) {
    context.addIssue({ code: 'custom', path: ['metadataOmissions'], message: 'If a dataset licence name is unavailable, record why it is absent; do not invent it.' });
  }
  if (reference.verificationStatus === 'source-and-rights-verified' && !reference.licence) {
    context.addIssue({ code: 'custom', path: ['licence'], message: 'Source-and-rights verification requires a recorded licence or rights statement.' });
  }
  if (reference.verificationStatus === 'source-and-rights-verified' && reference.licence &&
    Object.values(reference.licence).some(value => value === 'unknown' || value === 'not-permitted')) {
    context.addIssue({ code: 'custom', path: ['licence'], message: 'Source-and-rights-verified status cannot coexist with unknown or disallowed reuse rights.' });
  }
  if (reference.publicationDate && reference.accessedDate && reference.accessedDate < reference.publicationDate) {
    context.addIssue({ code: 'custom', path: ['accessedDate'], message: 'A reference cannot be accessed before its recorded publication date.' });
  }
});

export type ClaimLink = z.infer<typeof claimLinkSchema>;
export type SourceReference = z.infer<typeof sourceReferenceSchema>;

