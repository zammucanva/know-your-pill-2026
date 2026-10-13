import { drugs } from "@/lib/kyp/data";
import { getPatientGuide } from "@/lib/kyp/patient";
import { explainPatient } from "@/lib/kyp/modes/patient-explanation";
import { CLAIM_RECORDS, DISCOVERY_RECORDS, ONSET_SCAN, SOURCE_RECORDS } from "./index";
import { readability } from "./readability";

/**
 * India-first content dashboard, one row per medication. The columns are separate on purpose: they measure
 * different things and must never be added up into one percentage.
 *   - A medication can have a source and still lack an adequate explanation.
 *   - It can have an adequate draft and still need clinical review.
 *   - It can have a complete interface and incomplete medical content.
 */
export interface DashboardRow {
  slug: string;
  patientUi: "renders";
  /** Verified Indian sources retrieved for this medication. Always 0 today: see INDIAN_SOURCE_SEARCH. */
  indianSourcesVerified: number;
  indianSourceStatus: "unresolved";
  usLabelDiscovery: "candidates-found" | "none-found" | "error" | "not-run";
  usLabelCandidates: number;
  sourcesRetrieved: number;
  claimsWithSource: number;
  claimCategories: string;
  onsetClaimFromSource: boolean;
  /** Screening only: label sentences that may state onset, for a person to read. Not a claim. */
  onsetLabelCandidates: string;
  patientGuide: boolean;
  explanationLevel: string;
  medicineSpecificSentences: number;
  sharedOrTemplateSentences: number;
  withheldSharedClaims: number;
  missingElements: string;
  openReviewQuestions: number;
  readingGrade: number;
  avgWordsPerSentence: number;
  longSentences: number;
  clinicalReview: "not reviewed";
  nextAction: string;
}

export function dashboardRows(): DashboardRow[] {
  return drugs.map((d) => {
    const guide = getPatientGuide(d.slug);
    const e = explainPatient(d, guide);
    const disc = DISCOVERY_RECORDS.find((r) => r.slug === d.slug);
    const claims = CLAIM_RECORDS.filter((c) => c.slug === d.slug);
    const segs = [...e.plainWords, ...e.summary, ...e.reminders, ...e.sideEffects];
    const shown = segs.filter((s) => s.handling === "show");
    const withheld = segs.filter((s) => s.handling === "withhold");
    const text = [...shown.map((s) => s.text), ...claims.map((c) => c.patientWording)].join(" ");
    const r = readability(text);
    const missing: string[] = [];
    if (e.level === "template-only" || e.level === "missing") missing.push("medicine-specific plain explanation");
    if (!guide) {
      for (const [cat, label] of [["how-to-take", "how to take it"], ["urgent-help", "when to get help"], ["onset", "onset or timeline"], ["interactions", "other medicines"], ["side-effects", "side effects specific to the medicine"]] as const)
        if (!claims.some((c) => c.category === cat) && (cat !== "side-effects" || !e.sideEffects.some((s) => s.origin === "registry-specific" && s.handling === "show"))) missing.push(`${label} (no source-backed claim)`);
    }
    const sourced = SOURCE_RECORDS.filter((s) => s.slug === d.slug).length;
    let next: string;
    if (guide) next = "Clinical reviewer: review the Patient Guide";
    else if (claims.length) next = "Clinical reviewer: review the source-backed claims; content owner: add Indian product information";
    else if (disc?.status === "candidates-found") next = "Content owner: choose the applicable label and add source-backed claims";
    else next = "Content owner: no US label found; locate applicable product information (Indian or other) before any claim is made";
    return {
      slug: d.slug,
      patientUi: "renders" as const,
      indianSourcesVerified: 0,
      indianSourceStatus: "unresolved" as const,
      usLabelDiscovery: disc?.status ?? "not-run",
      usLabelCandidates: disc?.totalFound ?? 0,
      sourcesRetrieved: sourced,
      claimsWithSource: claims.length,
      claimCategories: Array.from(new Set(claims.map((c) => c.category))).sort().join("; "),
      onsetClaimFromSource: claims.some((c) => c.category === "onset"),
      onsetLabelCandidates: (() => {
        const o = ONSET_SCAN.find((x) => x.slug === d.slug);
        return !o ? "not-scanned" : o.status === "no-us-label-found" ? "no-us-label" : o.status === "error" ? "scan-error" : o.matches.length ? `${o.matches.length} candidate sentence(s) to read` : "none found by the screen";
      })(),
      patientGuide: !!guide,
      explanationLevel: e.level,
      medicineSpecificSentences: shown.filter((s) => s.origin === "registry-specific" || s.origin === "authored-guide").length,
      sharedOrTemplateSentences: shown.filter((s) => s.origin === "class-shared" || s.origin === "template").length,
      withheldSharedClaims: withheld.length,
      missingElements: missing.join("; "),
      openReviewQuestions: claims.reduce((n, c) => n + c.openQuestions.length, 0),
      readingGrade: r.grade,
      avgWordsPerSentence: r.avgWordsPerSentence,
      longSentences: r.longSentences,
      clinicalReview: "not reviewed" as const,
      nextAction: next,
    };
  });
}

export function dashboardSummary(rows: DashboardRow[]) {
  const count = (f: (r: DashboardRow) => boolean) => rows.filter(f).length;
  return {
    note: "Separate measures. Never add them into one percentage. Sources are not review; a draft is not approval; rendering is not content.",
    medications: rows.length,
    patientUiRenders: count((r) => r.patientUi === "renders"),
    indianSourcesVerified: count((r) => r.indianSourcesVerified > 0),
    indianSourcesUnresolved: count((r) => r.indianSourceStatus === "unresolved"),
    usLabelDiscovery: rows.reduce<Record<string, number>>((m, r) => ((m[r.usLabelDiscovery] = (m[r.usLabelDiscovery] ?? 0) + 1), m), {}),
    medicationsWithRetrievedSource: count((r) => r.sourcesRetrieved > 0),
    medicationsWithSourcedClaims: count((r) => r.claimsWithSource > 0),
    claimsWithTraceableSource: rows.reduce((n, r) => n + r.claimsWithSource, 0),
    medicationsWithSourcedOnsetClaim: count((r) => r.onsetClaimFromSource),
    onsetScan: {
      note: "Screening of US labels for sentences that may state onset. Candidates for a person to read in context; noisy; not claims.",
      scanned: ONSET_SCAN.filter((o) => o.status === "scanned").length,
      noUsLabel: ONSET_SCAN.filter((o) => o.status === "no-us-label-found").length,
      withCandidateSentences: ONSET_SCAN.filter((o) => o.matches.length > 0).length,
      withCandidateSentencesButNoSourcedClaim: ONSET_SCAN.filter((o) => o.matches.length > 0 && !CLAIM_RECORDS.some((c) => c.slug === o.slug && c.category === "onset")).length,
    },
    patientGuides: count((r) => r.patientGuide),
    explanationLevel: rows.reduce<Record<string, number>>((m, r) => ((m[r.explanationLevel] = (m[r.explanationLevel] ?? 0) + 1), m), {}),
    medicationsWithWithheldSharedClaims: count((r) => r.withheldSharedClaims > 0),
    medicationsWithMissingElements: count((r) => r.missingElements.length > 0),
    readability: {
      note: "Automated screening heuristic (Flesch-Kincaid grade, sentence length). Not a comprehension test.",
      medicationsAboveGrade10: count((r) => r.readingGrade > 10),
      medicationsWithLongSentences: count((r) => r.longSentences > 0),
    },
    clinicallyReviewed: 0,
  };
}
