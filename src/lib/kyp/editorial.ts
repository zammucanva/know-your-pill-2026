import { SITE_AUTHOR_NAME } from "@/lib/kyp/site-url";

/**
 * Editorial credits shown on drug pages.
 *
 * AUTHOR is the site author already declared in the page metadata and
 * copyright notice.
 *
 * CLINICAL_REVIEWER must stay `null` until a real, named clinician has
 * actually reviewed the content and agreed to be credited. While it is
 * `null`, pages say "Not yet clinically reviewed" (matching the FAQ:
 * "No formal peer-review process exists yet"). Never put a placeholder
 * or an invented name here.
 *
 * To credit a reviewer later, set it once, for example:
 *   { name: "Dr Jane Doe", credentials: "MD Psychiatry", reviewedOn: "2026-11" }
 * and every drug page picks it up.
 */
export const CONTENT_AUTHOR = SITE_AUTHOR_NAME;

export interface ClinicalReviewer {
  name: string;
  credentials: string;
  /** Month the review was done, YYYY-MM. */
  reviewedOn: string;
}

export const CLINICAL_REVIEWER: ClinicalReviewer | null = null;

/** One short, honest sentence describing the review status. */
export function reviewStatusText(): string {
  return CLINICAL_REVIEWER
    ? `Clinically reviewed by ${CLINICAL_REVIEWER.name}, ${CLINICAL_REVIEWER.credentials}`
    : "Not yet clinically reviewed";
}
