import { drugs } from "./drugs/index";
import type { Drug } from "./types";

/**
 * Derived medication taxonomy — the Psychiatry browsing hierarchy.
 *
 * DERIVED, NEVER DUPLICATED: every value below is computed at module load
 * from the canonical drug registry (./drugs/index.ts). No second medication
 * array exists here — class entries hold references to registry entries, so
 * a registry change (new drug, new class, re-ordering) automatically
 * re-flows this taxonomy, the /drugs/ hierarchy section, the
 * /drugs/class/[classId] collection pages, the drug-page breadcrumbs, and
 * the search collection entries.
 *
 * Hierarchy, as expressed by each drug's canonical `learningPath`:
 *
 *   Psychiatry (category)            learningPath[0]
 *     → Antidepressants (family)     learningPath[1]
 *       → SSRIs / SNRIs / NDRIs / NaSSAs / TCAs (classes)   drugClassLabel
 *         → medication pages (/drugs/[slug])                learningPath[3]
 *
 * Only categories, families, and classes that actually contain registry
 * medications are emitted — no fabricated empty nodes can ever appear.
 *
 * NOTE: the URL class id is derived from `drugClassLabel` (NOT `drugClass`).
 * `drugClass` is the broad psychoactive class (bupropion is "stimulant",
 * mirtazapine is "depressant"), while `drugClassLabel` carries the
 * antidepressant mechanism class ("NDRI", "NaSSA") that this taxonomy
 * browses.
 */

/** Section anchor for the (single) Psychiatry category on /drugs/. */
export const DRUG_TAXONOMY_CATEGORY_HREF = "/drugs/#psychiatry";

/** Section anchor for the (single) Antidepressants family on /drugs/. */
export const DRUG_TAXONOMY_FAMILY_HREF = "/drugs/#antidepressants";

/** URL-safe collection id for a medication class, derived from its registry label. */
export function drugClassIdFromLabel(drugClassLabel: string): string {
  return drugClassLabel.toLowerCase();
}

export interface DrugTaxonomyClass {
  /** URL id — /drugs/class/{id} */
  id: string;
  /** Registry label, e.g. "NDRI". */
  classLabel: string;
  /** Plural display label from the canonical learningPath, e.g. "NDRIs". */
  label: string;
  /** Registry full name, e.g. "Norepinephrine-Dopamine Reuptake Inhibitor". */
  fullName: string;
  /** Pluralised full name, e.g. "Norepinephrine-Dopamine Reuptake Inhibitors". */
  fullNamePlural: string;
  /** Member medications — references into the canonical registry, registry order. */
  medications: Drug[];
}

export interface DrugTaxonomyFamily {
  /** Family display name, e.g. "Antidepressants" (learningPath[1]). */
  name: string;
  /** Member classes, registry order. */
  classes: DrugTaxonomyClass[];
}

export interface DrugTaxonomyCategory {
  /** Category display name, e.g. "Psychiatry" (learningPath[0]). */
  name: string;
  families: DrugTaxonomyFamily[];
}

/** Simple plural — every registry full name ends in a regular consonant. */
function pluralise(name: string): string {
  return name.endsWith("s") ? name : `${name}s`;
}

/**
 * All taxonomy classes in registry order (SSRIs, SNRIs, NDRIs, NaSSAs, TCAs),
 * derived by grouping the canonical registry on `drugClassLabel`.
 */
export const drugTaxonomyClasses: DrugTaxonomyClass[] = Object.values(
  drugs.reduce<Record<string, DrugTaxonomyClass>>((acc, drug) => {
    const id = drugClassIdFromLabel(drug.drugClassLabel);
    const existing = acc[id];
    if (existing) {
      existing.medications.push(drug);
    } else {
      acc[id] = {
        id,
        classLabel: drug.drugClassLabel,
        label: drug.learningPath[2] ?? `${drug.drugClassLabel}s`,
        fullName: drug.drugClassFullName,
        fullNamePlural: pluralise(drug.drugClassFullName),
        medications: [drug],
      };
    }
    return acc;
  }, {})
);

/** Full category → family → class taxonomy, derived from each drug's learningPath. */
export const drugTaxonomy: DrugTaxonomyCategory[] = (() => {
  const categories: DrugTaxonomyCategory[] = [];
  for (const drug of drugs) {
    const [categoryName, familyName] = drug.learningPath;
    if (!categoryName || !familyName) continue;

    let category = categories.find((c) => c.name === categoryName);
    if (!category) {
      category = { name: categoryName, families: [] };
      categories.push(category);
    }
    let family = category.families.find((f) => f.name === familyName);
    if (!family) {
      family = { name: familyName, classes: [] };
      category.families.push(family);
    }
    const classId = drugClassIdFromLabel(drug.drugClassLabel);
    if (!family.classes.some((c) => c.id === classId)) {
      const cls = drugTaxonomyClasses.find((c) => c.id === classId);
      if (cls) family.classes.push(cls);
    }
  }
  return categories;
})();

/** Total medications inside a family — derived, for display copy only. */
export function taxonomyFamilyMedicationCount(family: DrugTaxonomyFamily): number {
  return family.classes.reduce((n, c) => n + c.medications.length, 0);
}

/** Total medications inside a category — derived, for display copy only. */
export function taxonomyCategoryMedicationCount(category: DrugTaxonomyCategory): number {
  return category.families.reduce((n, f) => n + taxonomyFamilyMedicationCount(f), 0);
}

/** Locate the category + family that contain a given class id. */
export function getTaxonomyAncestry(
  classId: string
): { category: DrugTaxonomyCategory; family: DrugTaxonomyFamily } | undefined {
  for (const category of drugTaxonomy) {
    for (const family of category.families) {
      if (family.classes.some((c) => c.id === classId)) {
        return { category, family };
      }
    }
  }
  return undefined;
}

/** Lookup one taxonomy class by its URL id. */
export function getTaxonomyClass(classId: string): DrugTaxonomyClass | undefined {
  return drugTaxonomyClasses.find((c) => c.id === classId);
}

/** All class ids — used by generateStaticParams on /drugs/class/[classId]. */
export function getAllTaxonomyClassIds(): string[] {
  return drugTaxonomyClasses.map((c) => c.id);
}

/**
 * Breadcrumb hrefs for a medication's canonical learningPath.
 *
 * Maps every segment to the collection that browses it, so the drug-page
 * breadcrumb is fully navigable in both directions:
 *
 *   Psychiatry      → psychiatry section on the Medication Library
 *   Antidepressants → antidepressant family section on the Medication Library
 *   NDRIs           → /drugs/class/ndri collection page
 *   Bupropion       → undefined (the current page)
 *
 * All hrefs are plain internal paths — rendered through next/link, which
 * prepends the GitHub Pages basePath automatically.
 */
export function learningPathLinks(drug: Drug): Array<string | undefined> {
  const classId = drugClassIdFromLabel(drug.drugClassLabel);
  return drug.learningPath.map((_segment, i) => {
    if (i === drug.learningPath.length - 1) return undefined; // current page
    if (i === 0) return DRUG_TAXONOMY_CATEGORY_HREF;
    if (i === 1) return DRUG_TAXONOMY_FAMILY_HREF;
    if (i === 2) return `/drugs/class/${classId}`;
    return undefined;
  });
}
