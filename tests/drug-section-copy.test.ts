/**
 * Drug-section copy derivation regression suite — the confirmed live-bug
 * contracts for the shared drug page sections.
 *
 *   Bug 1  no drug page's section copy names ANOTHER drug; the σ1 note
 *          renders only when the drug's own receptor profile documents
 *          σ1 activity; the dopamine-pathways empty state explains THIS
 *          drug from its own class and neurotransmitter data.
 *   Bug 2  a related medication whose page exists NEVER renders as
 *          "Page coming soon" — links resolve via the registry (slug
 *          OR name), the single source of truth.
 *   Bug 3  the "when NOT to use" alternative composes grammatically
 *          for every authored field shape — no ". instead." anywhere.
 *
 * Pure module tests — no server required.
 */

import { describe, expect, test } from "bun:test";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { brainRegionsIntro } from "@/components/kyp/sections/drug/drug-brain-regions";
import { sigma1ReceptorNote } from "@/components/kyp/sections/drug/drug-neurotransmitters";
import { pathwaysEmptyExplainer } from "@/components/kyp/sections/drug/drug-neural-pathways";
import {
  resolveRelatedDrugHref,
  composeWhenNotToUseAlternative,
} from "@/components/kyp/sections/drug/drug-related-drugs";
import { primaryUsesSummary } from "@/components/kyp/sections/drug/patient-quick-facts";

/** Word-boundary matcher — "Citalopram" must not match inside
 *  "Escitalopram". */
const mentions = (haystack: string, name: string): boolean =>
  new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(
    haystack
  );

const ALL_SLUGS = new Set(drugs.map((d) => d.slug));

describe("bug 1 — neuroscience mapping copy is this drug's own", () => {
  test("brain-regions intro: names this drug, never another", () => {
    for (const drug of drugs) {
      const intro = brainRegionsIntro(drug);
      expect(mentions(intro, drug.genericName)).toBe(true);
      for (const other of drugs) {
        if (other.slug === drug.slug) continue;
        expect(mentions(intro, other.genericName)).toBe(false);
      }
    }
  });

  test("brain-regions intro: the raphe/serotonin clause is data-gated", () => {
    const serotonergic = drugs.filter(
      (d) =>
        d.brainRegionIds.includes("raphe-nuclei") &&
        d.neurotransmitters.some((nt) => /serotonin/i.test(nt))
    );
    // 11 of 12 carry serotonin + raphe nuclei; bupropion does not.
    expect(serotonergic.length).toBe(11);
    for (const drug of serotonergic) {
      expect(brainRegionsIntro(drug)).toContain(
        "serotonin neurons project from the raphe nuclei"
      );
    }
    const bupropion = drugs.find((d) => d.slug === "bupropion")!;
    expect(brainRegionsIntro(bupropion)).not.toContain("raphe nuclei");
  });

  test("σ1 note: rendered only for drugs whose own receptor profile documents it", () => {
    const withSigma1 = drugs.filter((d) => sigma1ReceptorNote(d) !== undefined);
    expect(withSigma1.map((d) => d.slug).sort()).toEqual(
      ["fluvoxamine", "sertraline"]
    );
    // The note quotes the drug's own verbatim receptor entry.
    for (const drug of withSigma1) {
      const note = sigma1ReceptorNote(drug)!;
      expect(note).toContain(drug.genericName);
      const entry = drug.receptors.find((r) => /σ\s*1|sigma[-\s]?1/i.test(r))!;
      expect(note).toContain(entry);
    }
    // Citalopram's data carries no σ1 activity — no note, and never
    // another drug's explanation as a default.
    const citalopram = drugs.find((d) => d.slug === "citalopram")!;
    expect(sigma1ReceptorNote(citalopram)).toBeUndefined();
  });

  test("pathways empty state: explains this drug from its own class data", () => {
    for (const drug of drugs) {
      if (drug.pathwayIds.length > 0) continue; // renders the grid instead
      const { title, body } = pathwaysEmptyExplainer(drug);
      expect(title).toBe(
        `Why no dopamine pathways listed for ${drug.genericName}?`
      );
      expect(body).toContain(drug.drugClassFullName);
      expect(mentions(body, drug.genericName)).toBe(true);
      for (const other of drugs) {
        if (other.slug === drug.slug) continue;
        expect(mentions(body, other.genericName)).toBe(false);
      }
      // The four pathway names are educational reference, not claims.
      expect(body).toContain("mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular");
    }
    // Exactly one drug maps to the dopamine pathways (bupropion).
    expect(drugs.filter((d) => d.pathwayIds.length > 0).map((d) => d.slug)).toEqual([
      "bupropion",
    ]);
  });
});

describe("bug 2 — related medications never show a false 'Page coming soon'", () => {
  test("every entry whose name is a registry drug links to that drug's page", () => {
    const byName = new Map(drugs.map((d) => [d.genericName.toLowerCase(), d.slug]));
    for (const drug of drugs) {
      for (const rd of drug.relatedDrugs) {
        const href = resolveRelatedDrugHref(rd, ALL_SLUGS);
        const registrySlug = byName.get(rd.name.trim().toLowerCase());
        if (registrySlug) {
          // The page exists — it MUST link, never "coming soon".
          expect(href).toBe(`/drugs/${registrySlug}`);
        } else if (!rd.slug) {
          // Genuinely unbuilt family member — graceful degradation.
          expect(href).toBeUndefined();
        }
      }
    }
  });

  test("an explicit valid slug wins; a missing slug resolves via the name", () => {
    expect(
      resolveRelatedDrugHref({ name: "Citalopram" }, ALL_SLUGS)
    ).toBe("/drugs/citalopram");
    expect(
      resolveRelatedDrugHref({ name: "citalopram", slug: "citalopram" }, ALL_SLUGS)
    ).toBe("/drugs/citalopram");
    // Names are matched case-insensitively and trimmed.
    expect(
      resolveRelatedDrugHref({ name: "  Bupropion " }, ALL_SLUGS)
    ).toBe("/drugs/bupropion");
  });

  test("genuinely unbuilt medications stay graceful, never dead links", () => {
    for (const name of ["Trazodone", "Nortriptyline", "Imipramine", "Varenicline"]) {
      expect(resolveRelatedDrugHref({ name }, ALL_SLUGS)).toBeUndefined();
    }
  });

  test("the live bug's exact cases: 41 built-but-unlinked entries all resolve now", () => {
    let falseComingSoon = 0;
    const byName = new Map(drugs.map((d) => [d.genericName.toLowerCase(), d.slug]));
    for (const drug of drugs) {
      for (const rd of drug.relatedDrugs) {
        const registrySlug = byName.get(rd.name.trim().toLowerCase());
        if (registrySlug && !rd.slug) {
          // This was exactly the false "Page coming soon" population.
          expect(resolveRelatedDrugHref(rd, ALL_SLUGS)).toBe(
            `/drugs/${registrySlug}`
          );
          falseComingSoon++;
        }
      }
    }
    expect(falseComingSoon).toBe(41);
  });
});

describe("bug 3 — 'when NOT to use' composes grammatically", () => {
  test("short noun phrase keeps the classic frame", () => {
    expect(composeWhenNotToUseAlternative("Lamotrigine")).toEqual({
      lead: "Use ",
      text: "Lamotrigine",
      tail: " instead.",
    });
  });

  test("trailing punctuation is normalised — never '. instead.'", () => {
    const c = composeWhenNotToUseAlternative("Sertraline.");
    expect(c).toEqual({ lead: "Use ", text: "Sertraline", tail: " instead." });
  });

  test("a complete sentence is labelled, kept verbatim with one terminal period", () => {
    const c = composeWhenNotToUseAlternative(
      "Mood stabiliser first (lithium, valproate, lamotrigine). SSRI only if mood stabiliser alone is insufficient."
    );
    expect(c.lead).toBe("Instead: ");
    expect(c.text).toBe(
      "Mood stabiliser first (lithium, valproate, lamotrigine). SSRI only if mood stabiliser alone is insufficient."
    );
    expect(c.tail).toBe("");
  });

  test("an alternative that already contains 'instead' renders as-is", () => {
    const c = composeWhenNotToUseAlternative("Consider buspirone instead");
    expect(c).toEqual({
      lead: "",
      text: "Consider buspirone instead",
      tail: "",
    });
  });

  test("no composed line across the whole registry ever contains '. instead.'", () => {
    for (const drug of drugs) {
      for (const w of drug.whenNotToUse ?? []) {
        const c = composeWhenNotToUseAlternative(w.alternative);
        const line = `${c.lead}${c.text}${c.tail}`;
        expect(line).not.toContain(". instead.");
        expect(line).not.toContain(".instead");
        expect(line.trim().length).toBeGreaterThan(0);
        // The authored claim itself is preserved verbatim inside the line.
        expect(line).toContain(w.alternative.replace(/\s*([.!?]+)\s*$/, "").trim());
      }
    }
  });
});

describe("condition display — hero primary uses keep distinct indications distinct", () => {
  test("fluvoxamine's two OCD indications render with their qualifiers, not duplicated", () => {
    const fluvoxamine = drugs.find((d) => d.slug === "fluvoxamine")!;
    const summary = primaryUsesSummary(fluvoxamine);
    expect(summary).toContain("Obsessive-Compulsive Disorder (OCD) — adults");
    expect(summary).toContain("Obsessive-Compulsive Disorder (OCD) — paediatric");
    // The pre-fix rendering was "Obsessive-Compulsive Disorder, Obsessive-Compulsive Disorder".
    expect(summary).not.toBe("Obsessive-Compulsive Disorder, Obsessive-Compulsive Disorder");
  });

  test("every other drug keeps the short qualifier-free base names (no false qualifiers)", () => {
    for (const drug of drugs) {
      if (drug.slug === "fluvoxamine") continue;
      const summary = primaryUsesSummary(drug);
      const list = drug.indications
        .filter((i) => i.status === "fda-approved")
        .slice(0, 3);
      expect(summary).toBe(list.map((i) => i.name.split(" (")[0]).join(", "));
    }
  });
});
