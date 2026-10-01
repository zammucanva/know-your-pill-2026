/**
 * KYP Structured Data — the single canonical schema.org builder.
 *
 * Phase 7 architecture:
 *
 *   canonical Drug record (src/lib/kyp/data/drugs/*)
 *           ↓
 *   buildDrugStructuredData(drug)      ← this module, the ONLY builder
 *           ↓
 *   JSON-LD @graph object
 *           ↓
 *   serializeJsonLd()                  ← injection-safe serialization
 *           ↓
 *   <script type="application/ld+json"> (server-rendered by
 *   src/components/kyp/json-ld.tsx inside the drug page RSC tree)
 *
 * Design rules (Phase 7 brief):
 *   - Deterministic: the same drug record (and the same build-time site
 *     URL) always produces byte-identical JSON-LD. No dates, no
 *     randomness, no Map iteration order — plain objects built in a
 *     fixed literal order.
 *   - Source-grounded: every medical field is a verbatim string from
 *     the canonical drug record. Nothing is inferred, corrected, or
 *     filled from model knowledge. Ambiguity ⇒ omit the property.
 *   - Omission over fabrication: optional fields (boxed warnings,
 *     overdose guidance) are included only when the canonical record
 *     actually carries them; otherwise the property is absent — never
 *     "unknown", never "N/A".
 *   - No duplicate visible content: the JSON-LD describes the page; it
 *     never renders a second copy of anything the user can see.
 *
 * Schema types (verified against the live schema.org vocabulary, v29):
 *   - MedicalWebPage  — the educational page itself (WebPage +
 *     lastReviewed + about/mainEntity links). KYP is described as a
 *     publisher of educational pages, never as a medical provider and
 *     never as personalized medical advice.
 *   - Drug            — the medication the page teaches. Properties
 *     restricted to what canonical data supports: identity, class,
 *     mechanism of action, pregnancy/breastfeeding precautions, boxed
 *     warnings, overdose expectations, and a prescribing-info deep
 *     link to the on-page Prescriber's Guide section.
 *   - BreadcrumbList  — the real information architecture:
 *     Home → Medication Library (/drugs) → medication class
 *     (/drugs/class/{id}) → drug page. Every URL is a real, built
 *     route derived from the canonical registry.
 *
 * Deliberately omitted Drug properties (no canonical data → omit):
 *   activeIngredient, administrationRoute, dosageForm, availableStrength,
 *   prescriptionStatus, legalStatus, rxcui, manufacturer, offers, …
 *   `reviewers` (source bibliographies) are NOT emitted as
 *   MedicalWebPage.reviewedBy — they are reference lists, not persons.
 */

import type { Drug } from "../data/types";
import { drugClassIdFromLabel, getTaxonomyClass } from "../data/drug-taxonomy";
import { SITE_URL, SITE_AUTHOR_NAME, SITE_NAME, absoluteUrl } from "../site-url";

// ─── Types ─────────────────────────────────────────────────────────────────────

/** A single JSON-LD node. `@type`/`@id` are required by construction. */
export interface JsonLdNode {
  "@type"?: string;
  "@id"?: string;
  [key: string]: unknown;
}

/** The top-level JSON-LD document emitted on a drug page. */
export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
}

/** Reusable breadcrumb item shape (schema.org ListItem). */
export interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

// ─── URL helpers (per-drug derivatives) ───────────────────────────────────────

/** Canonical absolute URL of a drug page: {SITE_URL}/drugs/{slug}. */
export function drugPageUrl(drug: Drug): string {
  return absoluteUrl(`/drugs/${drug.slug}`);
}

/** Canonical absolute URL of the drug's class collection page. */
export function drugClassPageUrl(drug: Drug): string {
  return absoluteUrl(`/drugs/class/${drugClassIdFromLabel(drug.drugClassLabel)}`);
}

// ─── Node builders ─────────────────────────────────────────────────────────────

/** Breadcrumb: Home → Medication Library → class → this drug. Real routes only. */
function buildBreadcrumbList(drug: Drug, drugUrl: string, classUrl: string): JsonLdNode {
  const classId = drugClassIdFromLabel(drug.drugClassLabel);
  const classLabel =
    getTaxonomyClass(classId)?.label ?? drug.learningPath[2] ?? drug.drugClassLabel;

  const itemListElement: BreadcrumbItem[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Medication Library", item: absoluteUrl("/drugs") },
    { "@type": "ListItem", position: 3, name: classLabel, item: classUrl },
    { "@type": "ListItem", position: 4, name: drug.genericName, item: drugUrl },
  ];

  return {
    "@type": "BreadcrumbList",
    "@id": `${drugUrl}#breadcrumb`,
    itemListElement,
  };
}

/**
 * The Drug entity — strictly canonical-data-derived.
 * Optional fields are spread in only when the record supports them.
 */
function buildDrugNode(drug: Drug, drugUrl: string, classUrl: string): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "Drug",
    "@id": `${drugUrl}#drug`,
    name: drug.genericName,
    nonProprietaryName: drug.genericName,
    alternateName: drug.brandNames,
    description: drug.tagline,
    url: drugUrl,
    identifier: {
      "@type": "PropertyValue",
      name: "KYP drug slug",
      value: drug.slug,
    },
    drugClass: {
      "@type": "DrugClass",
      "@id": `${classUrl}#class`,
      name: drug.drugClassFullName,
      url: classUrl,
    },
  };

  const mechanism = drug.mechanism?.summary?.trim();
  if (mechanism) node.mechanismOfAction = mechanism;

  const pregnancySummary = drug.pregnancy?.summary?.trim();
  if (pregnancySummary) node.pregnancyWarning = pregnancySummary;

  const lactation = drug.pregnancy?.lactation?.trim();
  if (lactation) node.breastfeedingWarning = lactation;

  const boxedWarnings = (drug.blackBoxWarnings ?? [])
    .map((w) => w.text.trim())
    .filter((text) => text.length > 0);
  if (boxedWarnings.length > 0) node.warning = boxedWarnings;

  const overdose = (drug.prescriberGuide?.overdose ?? [])
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  if (overdose.length > 0) node.overdosage = overdose.join(" ");

  // Prescriber's Guide section anchor — present on every drug page
  // (section id pinned in src/lib/kyp/drug-course-sections.ts).
  if (drug.prescriberGuide) node.prescribingInfo = `${drugUrl}#prescriber-guide`;

  return node;
}

/** The page itself: an educational MedicalWebPage about the Drug entity. */
function buildMedicalWebPageNode(drug: Drug, drugUrl: string, pageTitle: string): JsonLdNode {
  return {
    "@type": "MedicalWebPage",
    "@id": `${drugUrl}#webpage`,
    url: drugUrl,
    name: pageTitle,
    description: drug.tagline,
    inLanguage: "en",
    isAccessibleForFree: true,
    lastReviewed: drug.lastReviewed,
    about: { "@id": `${drugUrl}#drug` },
    mainEntity: { "@id": `${drugUrl}#drug` },
    breadcrumb: { "@id": `${drugUrl}#breadcrumb` },
    author: { "@type": "Person", name: SITE_AUTHOR_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
  };
}

// ─── The canonical builder ─────────────────────────────────────────────────────

/**
 * Build the complete JSON-LD document for a drug page. Pure and
 * deterministic: same drug record + same site URL ⇒ same output.
 *
 * @param drug    canonical Drug record (required — the page 404s without one)
 * @param pageTitle the page <title> (from generateMetadata) so the
 *                  structured-data name and the title tag never diverge
 */
export function buildDrugStructuredData(drug: Drug, pageTitle: string): JsonLdGraph {
  const drugUrl = drugPageUrl(drug);
  const classUrl = drugClassPageUrl(drug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildMedicalWebPageNode(drug, drugUrl, pageTitle),
      buildDrugNode(drug, drugUrl, classUrl),
      buildBreadcrumbList(drug, drugUrl, classUrl),
    ],
  };
}

// ─── Injection-safe serialization ──────────────────────────────────────────────

/**
 * Serialize a JSON-LD document for embedding inside
 * `<script type="application/ld+json">`.
 *
 * `JSON.stringify` alone is NOT script-safe: the canonical drug data
 * legitimately contains `<` (e.g. "<18 years" in summaries), and a
 * literal `</script>` inside any string would terminate the tag early
 * (HTML-breaking / structured-data-injection). `<` and `>` are
 * therefore emitted as their `\u003c` / `\u003e` JSON escapes — valid
 * JSON, invisible to parsers, impossible to close the tag with. The
 * Unicode line/paragraph separators (valid in JSON strings, invalid in
 * pre-ES2019 JavaScript string literals) are escaped defensively.
 *
 * Never hand-concatenate JSON-LD into markup — always go through this
 * serializer (used by src/components/kyp/json-ld.tsx).
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

// ─── Runtime validation (independent of TypeScript) ────────────────────────────

/**
 * Independently validate a drug's generated JSON-LD against its
 * canonical record. Returns a list of violations (empty ⇒ valid).
 * Used by the test suite; safe to call anywhere at runtime.
 */
export function validateDrugStructuredData(drug: Drug, graph: JsonLdGraph): string[] {
  const violations: string[] = [];
  const drugUrl = drugPageUrl(drug);
  const classUrl = drugClassPageUrl(drug);
  const push = (v: string) => violations.push(`[${drug.slug}] ${v}`);

  // ── Document shape ──
  if (graph["@context"] !== "https://schema.org") push("@context must be https://schema.org");
  if (!Array.isArray(graph["@graph"]) || graph["@graph"].length !== 3) {
    push("@graph must contain exactly 3 nodes (MedicalWebPage, Drug, BreadcrumbList)");
    return violations;
  }

  const [webpage, drugNode, breadcrumb] = graph["@graph"];
  if (webpage?.["@type"] !== "MedicalWebPage") push("node 1 @type must be MedicalWebPage");
  if (drugNode?.["@type"] !== "Drug") push("node 2 @type must be Drug");
  if (breadcrumb?.["@type"] !== "BreadcrumbList") push("node 3 @type must be BreadcrumbList");

  // ── No duplicate @ids ──
  const ids = graph["@graph"]
    .map((n) => n["@id"])
    .filter((id): id is string => typeof id === "string");
  if (new Set(ids).size !== ids.length) push("duplicate @id in @graph");

  // ── Drug identity (the wrong-drug pin) ──
  if (drugNode.name !== drug.genericName) push(`Drug.name must be "${drug.genericName}"`);
  if (drugNode.nonProprietaryName !== drug.genericName) push("Drug.nonProprietaryName must equal genericName");
  const alt = drugNode.alternateName;
  if (!Array.isArray(alt) || alt.length !== drug.brandNames.length ||
      drug.brandNames.some((b, i) => alt[i] !== b)) {
    push("Drug.alternateName must equal brandNames exactly");
  }
  const identifier = drugNode.identifier as { value?: unknown } | undefined;
  if (identifier?.value !== drug.slug) push("Drug.identifier.value must be the canonical slug");
  if (drugNode.url !== drugUrl) push(`Drug.url must be ${drugUrl}`);
  if (drugNode["@id"] !== `${drugUrl}#drug`) push("Drug.@id must be {drugUrl}#drug");

  // ── Source-grounded medical fields ──
  if (drugNode.mechanismOfAction !== drug.mechanism.summary) {
    push("Drug.mechanismOfAction must be the canonical mechanism.summary");
  }
  if (drugNode.pregnancyWarning !== drug.pregnancy.summary) {
    push("Drug.pregnancyWarning must be the canonical pregnancy.summary");
  }
  if (drugNode.breastfeedingWarning !== drug.pregnancy.lactation) {
    push("Drug.breastfeedingWarning must be the canonical pregnancy.lactation");
  }

  const boxedCount = (drug.blackBoxWarnings ?? []).length;
  const warnings = drugNode.warning;
  if (boxedCount > 0) {
    if (!Array.isArray(warnings) || warnings.length !== boxedCount ||
        drug.blackBoxWarnings.some((w, i) => warnings[i] !== w.text)) {
      push("Drug.warning must equal blackBoxWarnings texts exactly");
    }
  } else if (warnings !== undefined) {
    push("Drug.warning must be omitted when the record has no boxed warnings");
  }

  const overdoseLines = (drug.prescriberGuide?.overdose ?? []).filter((l) => l.trim().length > 0);
  if (overdoseLines.length > 0) {
    if (drugNode.overdosage !== overdoseLines.join(" ")) {
      push("Drug.overdosage must be the canonical overdose bullets joined");
    }
  } else if (drugNode.overdosage !== undefined) {
    push("Drug.overdosage must be omitted when the record has no overdose guidance");
  }

  if (drug.prescriberGuide && drugNode.prescribingInfo !== `${drugUrl}#prescriber-guide`) {
    push("Drug.prescribingInfo must deep-link the on-page prescriber-guide section");
  }

  // ── DrugClass ──
  const drugClass = drugNode.drugClass as { "@type"?: string; name?: string; url?: string } | undefined;
  if (drugClass?.["@type"] !== "DrugClass") push("Drug.drugClass must be a DrugClass node");
  if (drugClass?.name !== drug.drugClassFullName) {
    push("Drug.drugClass.name must be the canonical drugClassFullName");
  }
  if (drugClass?.url !== classUrl) push(`Drug.drugClass.url must be ${classUrl}`);

  // ── MedicalWebPage ──
  if (webpage.url !== drugUrl) push(`MedicalWebPage.url must be ${drugUrl}`);
  if (webpage.lastReviewed !== drug.lastReviewed) {
    push("MedicalWebPage.lastReviewed must be the canonical lastReviewed date");
  }
  if (webpage.description !== drug.tagline) {
    push("MedicalWebPage.description must equal the canonical tagline");
  }
  if (webpage.inLanguage !== "en") push("MedicalWebPage.inLanguage must be 'en'");
  if (webpage.about?.["@id"] !== `${drugUrl}#drug`) push("MedicalWebPage.about must reference the Drug node");
  if (webpage.mainEntity?.["@id"] !== `${drugUrl}#drug`) push("MedicalWebPage.mainEntity must reference the Drug node");
  if (webpage.breadcrumb?.["@id"] !== `${drugUrl}#breadcrumb`) {
    push("MedicalWebPage.breadcrumb must reference the BreadcrumbList node");
  }

  // ── Breadcrumb ──
  const items = breadcrumb.itemListElement as BreadcrumbItem[] | undefined;
  if (!Array.isArray(items) || items.length !== 4) {
    push("BreadcrumbList must have exactly 4 items (Home, Library, Class, Drug)");
  } else {
    const expected = [
      { position: 1, name: "Home", item: absoluteUrl("/") },
      { position: 2, name: "Medication Library", item: absoluteUrl("/drugs") },
      { position: 3, item: classUrl },
      { position: 4, name: drug.genericName, item: drugUrl },
    ];
    expected.forEach((exp, i) => {
      if (items[i]?.position !== exp.position) push(`breadcrumb item ${i + 1} position must be ${exp.position}`);
      if (exp.name !== undefined && items[i]?.name !== exp.name) {
        push(`breadcrumb item ${i + 1} name must be "${exp.name}"`);
      }
      if (items[i]?.item !== exp.item) push(`breadcrumb item ${i + 1} item must be ${exp.item}`);
    });
  }

  // ── Hygiene: no undefined / null / empty / placeholder garbage anywhere ──
  const garbage: string[] = [];
  const walk = (value: unknown, path: string) => {
    if (value === undefined || value === null) {
      garbage.push(`${path} is ${value === undefined ? "undefined" : "null"}`);
    } else if (value === "") {
      garbage.push(`${path} is an empty string`);
    } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      const s = String(value);
      if (s === "undefined" || s === "[object Object]" || s === "null" || s === "unknown" || s === "N/A") {
        garbage.push(`${path} is the placeholder "${s}"`);
      }
    } else if (Array.isArray(value)) {
      value.forEach((v, i) => walk(v, `${path}[${i}]`));
    } else if (typeof value === "object") {
      for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`);
    }
  };
  walk(graph, "$");
  for (const g of garbage.slice(0, 5)) push(`malformed value: ${g}`);

  // ── Every URL in the graph must be a canonical absolute URL ──
  const urls: string[] = [];
  const collectUrls = (value: unknown) => {
    if (typeof value === "string" && /^https?:\/\//.test(value)) urls.push(value);
    else if (Array.isArray(value)) value.forEach(collectUrls);
    else if (value && typeof value === "object") Object.values(value).forEach(collectUrls);
  };
  collectUrls(graph);
  for (const url of urls) {
    // The schema.org vocabulary origin (@context) is the one allowed
    // external URL; everything else must be a canonical site URL.
    if (url === "https://schema.org") continue;
    if (!url.startsWith(SITE_URL)) push(`non-canonical URL in graph: ${url}`);
    if (url.includes("localhost") || url.includes("127.0.0.1")) push(`localhost URL leaked: ${url}`);
  }

  return violations;
}
