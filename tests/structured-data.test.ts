/**
 * Phase 7 — Structured Data (schema.org JSON-LD) Test Suite.
 *
 * Pins the canonical structured-data builder, the safe serializer, the
 * sitemap, and the metadata integration, plus the Phase 3/4/5/6
 * regression anchors the SEO layer must not disturb.
 *
 * Coverage map (per the Phase 7 brief):
 *   1  every one of the 145 drugs produces a schema.org @graph
 *   2  document shape: @context, exactly 3 typed nodes, no duplicate @ids
 *   3  drug identity: name / nonProprietaryName / alternateName /
 *      identifier / url / @id all belong to THE asked drug
 *   4  no cross-contamination: drug A's graph never carries drug B's
 *      identity (spot-verified across all 145 via independent
 *      recomputation; serialized graphs are pairwise distinct)
 *   5  source-grounding: mechanismOfAction / pregnancyWarning /
 *      breastfeedingWarning are verbatim canonical strings
 *   6  optional-data strategy: boxed warnings + overdose guidance
 *      present iff the canonical record carries them (never "unknown")
 *   7  prescribingInfo deep-links the on-page #prescriber-guide section
 *   8  drugClass node: DrugClass type, canonical full name, real class
 *      collection URL that exists in the taxonomy registry
 *   9  MedicalWebPage: url / lastReviewed / description / inLanguage /
 *      about / mainEntity / breadcrumb linkage
 *  10  breadcrumbs: 4 items, positions 1..4, real routes only, final
 *      item is this drug's page
 *  11  every URL in every graph is canonical + absolute (no localhost,
 *      no stray origins) — and all internal targets are real registry
 *      routes
 *  12  determinism: building twice yields byte-identical JSON for all
 *      145 drugs; URLs are stable functions of the slug
 *  13  hygiene: no undefined / null / empty strings / placeholders
 *      anywhere in any graph (deep walk)
 *  14  serialization security: output parses as JSON, contains no raw
 *      "<" / ">" (so "</script>" cannot break out), round-trips equal
 *  15  resilience: a synthetic drug with optional fields stripped
 *      still builds valid structured data (omission, not crash)
 *  16  route integration (source-level, Phase-6 convention): the drug
 *      page imports the builder + renders exactly one <JsonLd>, emits
 *      canonical + OG url via the shared URL helper; no other surface
 *      hand-writes application/ld+json
 *  17  metadata consistency: root layout pins metadataBase; robots.txt
 *      keeps its policy and points at the canonical sitemap
 *  18  sitemap: covers exactly the real route inventory (home,
 *      library, 40 class pages, 145 drug pages, 3 substances, 1
 *      disease, 12 app pages), absolute + unique + no localhost
 *  19  Phase 3 regression: 145 records, unique slugs + names, 32
 *      DrugClassId classes in use, all 145 carry PrescriberGuide
 *  20  Phase 4 regression: interactions + half-life data intact
 *  21  Phase 5 regression: 40 taxonomy class collections intact
 *  22  Phase 6 regression: 180 Stahl MCQs, 145/145 drug coverage
 *  23  content lock (byte-level): the canonical data directory is
 *      covered by scripts/content-lock.ts — pinned counts here guard
 *      against drift between lock runs
 */

import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

import { drugs, getDrugBySlug, getAllDrugSlugs } from "@/lib/kyp/data/drugs/index";
import { drugTaxonomyClasses, getAllTaxonomyClassIds, drugClassIdFromLabel } from "@/lib/kyp/data/drug-taxonomy";
import { diseases } from "@/lib/kyp/data/diseases";
import { substancePages } from "@/lib/kyp/data/substances";
import { stahlMcqs } from "@/lib/kyp/stahl-mcqs";
import sitemapFn from "@/app/sitemap";
import {
  buildDrugStructuredData,
  validateDrugStructuredData,
  serializeJsonLd,
  drugPageUrl,
  drugClassPageUrl,
} from "@/lib/kyp/structured-data";
import { SITE_URL, absoluteUrl } from "@/lib/kyp/site-url";

const REPO_ROOT = join(import.meta.dir, "..");
const DRUG_PAGE_SOURCE = join(REPO_ROOT, "src/app/drugs/[slug]/page.tsx");
const LAYOUT_SOURCE = join(REPO_ROOT, "src/app/layout.tsx");
const ROBOTS_SOURCE = join(REPO_ROOT, "public/robots.txt");
const SITEMAP_SOURCE = join(REPO_ROOT, "src/app/sitemap.tsx");

/** The page title exactly as generateMetadata constructs it. */
function pageTitle(drug: (typeof drugs)[number]): string {
  return `${drug.genericName} (${drug.drugClassLabel}) · Know Your Pill`;
}

describe("structured-data — 1..2. every drug builds a well-formed graph", () => {
  test("all 145 registry drugs produce a 3-node schema.org @graph", () => {
    expect(drugs.length).toBe(145);
    for (const drug of drugs) {
      const graph = buildDrugStructuredData(drug, pageTitle(drug));
      expect(graph["@context"]).toBe("https://schema.org");
      expect(graph["@graph"].length).toBe(3);
      const types = graph["@graph"].map((n) => n["@type"]);
      expect(types).toEqual(["MedicalWebPage", "Drug", "BreadcrumbList"]);
      const ids = graph["@graph"].map((n) => n["@id"]);
      expect(new Set(ids).size).toBe(3);
    }
  });

  test("the independent validator passes for all 145 drugs", () => {
    const allViolations: string[] = [];
    for (const drug of drugs) {
      allViolations.push(
        ...validateDrugStructuredData(drug, buildDrugStructuredData(drug, pageTitle(drug)))
      );
    }
    expect(allViolations).toEqual([]);
  });
});

describe("structured-data — 3..5. drug identity + source-grounding", () => {
  const sertraline = getDrugBySlug("sertraline")!;

  test("identity fields belong to the asked drug (sertraline)", () => {
    const graph = buildDrugStructuredData(sertraline, pageTitle(sertraline));
    const drugNode = graph["@graph"][1];
    const url = drugPageUrl(sertraline);

    expect(drugNode.name).toBe("Sertraline");
    expect(drugNode.nonProprietaryName).toBe("Sertraline");
    expect(drugNode.alternateName).toEqual(sertraline.brandNames);
    expect((drugNode.identifier as { value: string }).value).toBe("sertraline");
    expect(drugNode.url).toBe(url);
    expect(drugNode["@id"]).toBe(`${url}#drug`);
    expect(drugNode.mechanismOfAction).toBe(sertraline.mechanism.summary);
  });

  test("pregnancy / breastfeeding / mechanism are verbatim canonical strings", () => {
    for (const drug of drugs) {
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      expect(drugNode.pregnancyWarning).toBe(drug.pregnancy.summary);
      expect(drugNode.breastfeedingWarning).toBe(drug.pregnancy.lactation);
      expect(drugNode.mechanismOfAction).toBe(drug.mechanism.summary);
    }
  });

  test("no drug's graph carries another drug's identity (all 145, recomputed)", () => {
    const slugs = new Set(getAllDrugSlugs());
    for (const drug of drugs) {
      const url = drugPageUrl(drug);
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      // Identity must round-trip to this drug's own slug via URL + identifier
      expect(url.endsWith(`/drugs/${drug.slug}`)).toBe(true);
      expect((drugNode.identifier as { value: string }).value).toBe(drug.slug);
      // The generic name must not equal any OTHER drug's generic name
      const others = drugs.filter((d) => d.genericName !== drug.genericName);
      expect(others.some((d) => d.genericName === drugNode.name)).toBe(false);
      // The URL must not be any other drug's page
      expect(others.some((d) => drugNode.url === drugPageUrl(d))).toBe(false);
      void slugs;
    }
  });

  test("serialized graphs are pairwise distinct across all 145 drugs", () => {
    const seen = new Map<string, string>();
    for (const drug of drugs) {
      const json = serializeJsonLd(buildDrugStructuredData(drug, pageTitle(drug)));
      const owner = seen.get(json);
      expect(owner).toBeUndefined(); // no two drugs share a graph
      seen.set(json, drug.slug);
    }
    expect(seen.size).toBe(145);
  });
});

describe("structured-data — 6..8. optional data, prescribing info, drug class", () => {
  test("boxed warnings included iff the canonical record has them", () => {
    const withWarnings = drugs.filter((d) => d.blackBoxWarnings.length > 0);
    const withoutWarnings = drugs.filter((d) => d.blackBoxWarnings.length === 0);
    expect(withWarnings.length + withoutWarnings.length).toBe(145);

    for (const drug of withWarnings) {
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      expect(drugNode.warning).toEqual(drug.blackBoxWarnings.map((w) => w.text));
    }
    for (const drug of withoutWarnings) {
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      expect(drugNode.warning).toBeUndefined(); // omitted, never "unknown"
    }
  });

  test("overdose guidance included iff the PrescriberGuide carries it", () => {
    for (const drug of drugs) {
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      const lines = (drug.prescriberGuide?.overdose ?? []).filter((l) => l.trim().length > 0);
      if (lines.length > 0) {
        expect(drugNode.overdosage).toBe(lines.join(" "));
      } else {
        expect(drugNode.overdosage).toBeUndefined();
      }
    }
  });

  test("prescribingInfo deep-links the #prescriber-guide section for all 145", () => {
    for (const drug of drugs) {
      expect(drug.prescriberGuide).toBeDefined();
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      expect(drugNode.prescribingInfo).toBe(`${drugPageUrl(drug)}#prescriber-guide`);
    }
  });

  test("drugClass is a DrugClass node pointing at the real class collection", () => {
    const classIds = new Set(getAllTaxonomyClassIds());
    for (const drug of drugs) {
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      const cls = drugNode.drugClass as { "@type": string; name: string; url: string };
      expect(cls["@type"]).toBe("DrugClass");
      expect(cls.name).toBe(drug.drugClassFullName);
      const classId = drugClassIdFromLabel(drug.drugClassLabel);
      expect(cls.url).toBe(absoluteUrl(`/drugs/class/${classId}`));
      // the class route is a real built collection page
      expect(classIds.has(classId)).toBe(true);
    }
  });
});

describe("structured-data — 9..10. MedicalWebPage + breadcrumbs", () => {
  test("MedicalWebPage describes the educational page", () => {
    for (const drug of drugs) {
      const graph = buildDrugStructuredData(drug, pageTitle(drug));
      const webpage = graph["@graph"][0];
      const url = drugPageUrl(drug);
      expect(webpage.url).toBe(url);
      expect(webpage["@id"]).toBe(`${url}#webpage`);
      expect(webpage.name).toBe(pageTitle(drug));
      expect(webpage.description).toBe(drug.tagline);
      expect(webpage.lastReviewed).toBe(drug.lastReviewed);
      expect(webpage.inLanguage).toBe("en");
      expect(webpage.isAccessibleForFree).toBe(true);
      expect((webpage.about as { "@id": string })["@id"]).toBe(`${url}#drug`);
      expect((webpage.mainEntity as { "@id": string })["@id"]).toBe(`${url}#drug`);
      expect((webpage.breadcrumb as { "@id": string })["@id"]).toBe(`${url}#breadcrumb`);
      // publisher is the site organization — KYP is never described as
      // a medical provider and the page never claims to be personalized
      // medical advice
      const publisher = webpage.publisher as { "@type": string; name: string };
      expect(publisher["@type"]).toBe("Organization");
      expect(publisher.name).toBe("Know Your Pill");
    }
  });

  test("breadcrumbs follow Home → Library → Class → Drug over real routes", () => {
    for (const drug of drugs) {
      const breadcrumb = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][2];
      const items = breadcrumb.itemListElement as Array<{
        "@type": string; position: number; name: string; item: string;
      }>;
      expect(items.length).toBe(4);
      expect(items.map((i) => i.position)).toEqual([1, 2, 3, 4]);
      expect(items.every((i) => i["@type"] === "ListItem")).toBe(true);
      expect(items[0].name).toBe("Home");
      expect(items[0].item).toBe(absoluteUrl("/"));
      expect(items[1].name).toBe("Medication Library");
      expect(items[1].item).toBe(absoluteUrl("/drugs"));
      // class item URL is the drug's real collection page
      expect(items[2].item).toBe(drugClassPageUrl(drug));
      expect(items[2].item).toContain(`/drugs/class/${drugClassIdFromLabel(drug.drugClassLabel)}`);
      // final item is this drug
      expect(items[3].name).toBe(drug.genericName);
      expect(items[3].item).toBe(drugPageUrl(drug));
    }
  });
});

describe("structured-data — 11..13. URLs, determinism, hygiene", () => {
  test("every URL in every graph is canonical + absolute — no localhost", () => {
    for (const drug of drugs) {
      const json = serializeJsonLd(buildDrugStructuredData(drug, pageTitle(drug)));
      const urls = json.match(/https?:\/\/[^"\\]+/g) ?? [];
      for (const url of urls) {
        if (url === "https://schema.org") continue; // the vocabulary origin
        expect(url.startsWith(SITE_URL)).toBe(true);
        expect(url.includes("localhost")).toBe(false);
        expect(url.includes("127.0.0.1")).toBe(false);
      }
      expect(urls.length).toBeGreaterThan(0);
    }
  });

  test("all internal graph URLs resolve to real registry routes", () => {
    const slugs = new Set(getAllDrugSlugs());
    const classIds = new Set(getAllTaxonomyClassIds());
    for (const drug of drugs) {
      const breadcrumb = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][2];
      for (const item of breadcrumb.itemListElement as Array<{ item: string }>) {
        const path = item.item.slice(SITE_URL.length);
        if (path === "/" || path === "/drugs") continue;
        const classMatch = path.match(/^\/drugs\/class\/([a-z0-9-]+)$/);
        const drugMatch = path.match(/^\/drugs\/([a-z0-9-]+)$/);
        if (classMatch) expect(classIds.has(classMatch[1])).toBe(true);
        else if (drugMatch) expect(slugs.has(drugMatch[1])).toBe(true);
        else throw new Error(`breadcrumb URL is not a known route: ${path}`);
      }
    }
  });

  test("building twice is byte-identical for all 145 drugs (determinism)", () => {
    for (const drug of drugs) {
      const a = serializeJsonLd(buildDrugStructuredData(drug, pageTitle(drug)));
      const b = serializeJsonLd(buildDrugStructuredData(drug, pageTitle(drug)));
      expect(a).toBe(b);
    }
  });

  test("canonical URLs are stable functions of the slug", () => {
    for (const drug of drugs) {
      expect(drugPageUrl(drug)).toBe(`${SITE_URL}/drugs/${drug.slug}`);
    }
  });

  test("no undefined / null / empty strings / placeholders anywhere (deep walk)", () => {
    const walk = (value: unknown, path: string, problems: string[]) => {
      if (value === undefined || value === null || value === "") {
        problems.push(path);
      } else if (typeof value === "string") {
        if (["undefined", "null", "[object Object]", "unknown", "N/A"].includes(value)) {
          problems.push(path);
        }
      } else if (Array.isArray(value)) {
        value.forEach((v, i) => walk(v, `${path}[${i}]`, problems));
      } else if (typeof value === "object") {
        for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`, problems);
      }
    };
    for (const drug of drugs) {
      const problems: string[] = [];
      walk(buildDrugStructuredData(drug, pageTitle(drug)), "$", problems);
      expect(problems).toEqual([]);
    }
  });
});

describe("structured-data — 14. serialization security", () => {
  test("output parses as valid JSON and round-trips deep-equal", () => {
    for (const drug of drugs) {
      const graph = buildDrugStructuredData(drug, pageTitle(drug));
      const json = serializeJsonLd(graph);
      expect(JSON.parse(json)).toEqual(graph);
    }
  });

  test("no raw < or > in serialized output — </script> cannot break out", () => {
    for (const drug of drugs) {
      const json = serializeJsonLd(buildDrugStructuredData(drug, pageTitle(drug)));
      expect(json.includes("<")).toBe(false);
      expect(json.includes(">")).toBe(false);
      expect(json.toLowerCase().includes("</script")).toBe(false);
    }
  });

  test("a hostile string cannot terminate the script tag", () => {
    const hostile = {
      "@context": "https://schema.org",
      name: "</script><script>alert(1)</script>",
    };
    const json = serializeJsonLd(hostile);
    expect(json.includes("</script>")).toBe(false);
    expect(json.includes("<")).toBe(false);
    expect(JSON.parse(json).name).toBe("</script><script>alert(1)</script>");
  });

  test("real canonical text with angle brackets survives escaping (regression)", () => {
    // escitalopram / venlafaxine / clomipramine summaries contain "<"
    // characters in the canonical record
    const withAngle = drugs.filter((d) => /[<>]/.test(d.tagline + d.summary));
    expect(withAngle.length).toBeGreaterThan(0);
    for (const drug of withAngle) {
      const drugNode = buildDrugStructuredData(drug, pageTitle(drug))["@graph"][1];
      const json = serializeJsonLd(drugNode);
      expect(json.includes("<")).toBe(false);
      expect(json.includes(">")).toBe(false);
      expect((JSON.parse(json) as { description: string }).description).toBe(drug.tagline);
    }
  });
});

describe("structured-data — 15. resilience to missing optional data", () => {
  test("a stripped synthetic drug builds valid data with omissions, not crashes", () => {
    const base = getDrugBySlug("sertraline")!;
    const stripped = {
      ...base,
      slug: "synthetic-strip-test",
      genericName: "Synthetic Strip Test",
      brandNames: ["Strip Brand"],
      blackBoxWarnings: [],
      prescriberGuide: undefined,
    };
    const graph = buildDrugStructuredData(stripped, pageTitle(stripped));
    const drugNode = graph["@graph"][1];
    expect(drugNode.warning).toBeUndefined();
    expect(drugNode.overdosage).toBeUndefined();
    expect(drugNode.prescribingInfo).toBeUndefined();
    expect(drugNode.name).toBe("Synthetic Strip Test");
    expect(drugNode.alternateName).toEqual(["Strip Brand"]);
    // required identity + grounded fields still present
    expect(drugNode.url).toBe(`${SITE_URL}/drugs/synthetic-strip-test`);
    expect(drugNode.mechanismOfAction).toBe(base.mechanism.summary);
    // breadcrumb final item follows the synthetic slug
    const items = graph["@graph"][2].itemListElement as Array<{ item: string }>;
    expect(items[3].item).toBe(`${SITE_URL}/drugs/synthetic-strip-test`);
  });

  test("empty-string optional fields are omitted rather than emitted", () => {
    const base = getDrugBySlug("sertraline")!;
    const quiet = { ...base, slug: "synthetic-quiet-test", pregnancy: { ...base.pregnancy, summary: "", lactation: "" } };
    const drugNode = buildDrugStructuredData(quiet, pageTitle(quiet))["@graph"][1];
    expect(drugNode.pregnancyWarning).toBeUndefined();
    expect(drugNode.breastfeedingWarning).toBeUndefined();
  });
});

describe("structured-data — 16. route integration (source-level)", () => {
  test("the drug page imports the builder and renders exactly one <JsonLd>", () => {
    const source = readFileSync(DRUG_PAGE_SOURCE, "utf8");
    expect(source).toContain('from "@/lib/kyp/structured-data"');
    expect(source).toContain("<JsonLd data={structuredData} />");
    expect(source.split("<JsonLd").length - 1).toBe(1);
    // canonical + OG url derive from the shared helper (single URL truth)
    expect(source).toContain("const url = drugPageUrl(drug);");
    expect(source).toContain("alternates: { canonical: url }");
    expect(source).toContain("openGraph:");
    expect(source).toContain("url },");
  });

  test("no other surface hand-writes application/ld+json (single canonical path)", () => {
    // Only src/app and src/components can render markup — the data
    // layer and hooks never emit script tags.
    const roots = [join(REPO_ROOT, "src/app"), join(REPO_ROOT, "src/components")];
    const walk = (dir: string): string[] =>
      readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
        entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
      );
    const offenders: string[] = [];
    for (const root of roots) {
      for (const file of walk(root)) {
        if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;
        if (file.endsWith("json-ld.tsx")) continue; // the canonical component
        const source = readFileSync(file, "utf8");
        if (source.includes("application/ld+json")) offenders.push(file);
      }
    }
    expect(offenders).toEqual([]);
  }, 30000);

  test("the JsonLd component serializes through the safe serializer", () => {
    const component = readFileSync(join(REPO_ROOT, "src/components/kyp/json-ld.tsx"), "utf8");
    expect(component).toContain("serializeJsonLd");
    expect(component).toContain('type="application/ld+json"');
    // must be a server component — no "use client" directive line
    const directiveLines = component.split("\n").map((l) => l.trim()).filter((l) => l === '"use client"' || l === "'use client'");
    expect(directiveLines.length).toBe(0);
  });
});

describe("structured-data — 17. metadata consistency", () => {
  test("root layout pins metadataBase to the canonical site URL", () => {
    const source = readFileSync(LAYOUT_SOURCE, "utf8");
    expect(source).toContain("metadataBase: new URL(getSiteUrl())");
  });

  test("site-url module never emits localhost and trims trailing slashes", () => {
    expect(SITE_URL.startsWith("http")).toBe(true);
    expect(SITE_URL.endsWith("/")).toBe(false);
    expect(SITE_URL.includes("localhost")).toBe(false);
    expect(absoluteUrl("/drugs/sertraline")).toBe(`${SITE_URL}/drugs/sertraline`);
    expect(absoluteUrl("/")).toBe(`${SITE_URL}/`);
    // pass-through behaviour for absolute / fragment inputs
    expect(absoluteUrl("https://example.com/x")).toBe("https://example.com/x");
    expect(absoluteUrl(`${SITE_URL}/drugs/sertraline#prescriber-guide`)).toBe(
      `${SITE_URL}/drugs/sertraline#prescriber-guide`
    );
  });

  test("export mode (NEXT_PUBLIC_TRAILING_SLASH=1) aligns JSON-LD URLs with the canonical form", () => {
    // The GitHub Pages export builds with trailingSlash: true, and Next
    // normalizes canonical/OG URLs to the trailing-slash form. In that
    // mode absoluteUrl must emit the same form for every URL it mints.
    const before = process.env.NEXT_PUBLIC_TRAILING_SLASH;
    try {
      process.env.NEXT_PUBLIC_TRAILING_SLASH = "1";
      expect(absoluteUrl("/drugs")).toBe(`${SITE_URL}/drugs/`);
      expect(absoluteUrl("/drugs/sertraline")).toBe(`${SITE_URL}/drugs/sertraline/`);
      expect(absoluteUrl("/drugs/class/ssri")).toBe(`${SITE_URL}/drugs/class/ssri/`);
      expect(absoluteUrl("/")).toBe(`${SITE_URL}/`);
      // hash-bearing inputs pass through untouched (slash added by the
      // path portion before the fragment when built by callers)
      expect(absoluteUrl(`${SITE_URL}/drugs/sertraline/#prescriber-guide`)).toBe(
        `${SITE_URL}/drugs/sertraline/#prescriber-guide`
      );
      // the full drug graph stays internally consistent in export mode
      const drug = getDrugBySlug("sertraline")!;
      const graph = buildDrugStructuredData(drug, "Sertraline (SSRI) · Know Your Pill");
      const drugNode = graph["@graph"][1];
      expect(drugNode.url).toBe(`${SITE_URL}/drugs/sertraline/`);
      expect(drugNode.prescribingInfo).toBe(`${SITE_URL}/drugs/sertraline/#prescriber-guide`);
      const items = graph["@graph"][2].itemListElement as Array<{ item: string }>;
      expect(items[3].item).toBe(`${SITE_URL}/drugs/sertraline/`);
    } finally {
      if (before === undefined) delete process.env.NEXT_PUBLIC_TRAILING_SLASH;
      else process.env.NEXT_PUBLIC_TRAILING_SLASH = before;
    }
  });

  test("robots.txt keeps its crawl policy and references the canonical sitemap", () => {
    const robots = readFileSync(ROBOTS_SOURCE, "utf8");
    // policy preserved (search + social allowed, AI training disallowed)
    expect(robots).toContain("User-agent: Googlebot");
    expect(robots).toContain("User-agent: Bingbot");
    expect(robots).toContain("User-agent: GPTBot");
    expect(robots).toContain("Disallow: /");
    // sitemap directive points at the canonical deployment
    expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });
});

describe("structured-data — 18. sitemap covers exactly the real route inventory", () => {
  const sitemap = sitemapFn();

  test("covers home, library, every class, every drug, substances, disease, app pages", () => {
    const urls = sitemap.map((e) => e.url);
    expect(urls).toContain(absoluteUrl("/"));
    expect(urls).toContain(absoluteUrl("/drugs"));
    for (const classId of getAllTaxonomyClassIds()) {
      expect(urls).toContain(absoluteUrl(`/drugs/class/${classId}`));
    }
    for (const slug of getAllDrugSlugs()) {
      expect(urls).toContain(absoluteUrl(`/drugs/${slug}`));
    }
    for (const substance of substancePages) {
      expect(urls).toContain(absoluteUrl(`/substances/${substance.slug}`));
    }
    for (const disease of diseases) {
      expect(urls).toContain(absoluteUrl(`/diseases/${disease.slug}`));
    }
    for (const route of ["/learn", "/medicine", "/study", "/study/mistakes", "/study/review",
      "/study/analytics", "/quiz", "/quiz/custom", "/compare", "/compare/classes",
      "/interactions", "/legal/terms"]) {
      expect(urls).toContain(absoluteUrl(route));
    }
  });

  test("has the expected total count with no duplicates and no stray routes", () => {
    const urls = sitemap.map((e) => e.url);
    const expectedCount =
      2 + getAllTaxonomyClassIds().length + getAllDrugSlugs().length +
      substancePages.length + diseases.length + 12;
    expect(urls.length).toBe(expectedCount);
    expect(new Set(urls).size).toBe(urls.length); // unique — no duplicate URLs

    // every URL is absolute + canonical + a REAL route shape
    const slugs = new Set(getAllDrugSlugs());
    const classIds = new Set(getAllTaxonomyClassIds());
    const staticRoutes = new Set(["/", "/drugs", "/learn", "/medicine", "/study",
      "/study/mistakes", "/study/review", "/study/analytics", "/quiz", "/quiz/custom",
      "/compare", "/compare/classes", "/interactions", "/legal/terms"]);
    for (const url of urls) {
      expect(url.startsWith(SITE_URL)).toBe(true);
      expect(url.includes("localhost")).toBe(false);
      const path = url.slice(SITE_URL.length) || "/";
      if (staticRoutes.has(path)) continue;
      const m = path.match(/^\/drugs\/class\/([a-z0-9-]+)$/) ?? path.match(/^\/drugs\/([a-z0-9-]+)$/) ??
        path.match(/^\/substances\/([a-z0-9-]+)$/) ?? path.match(/^\/diseases\/([a-z0-9-]+)$/);
      expect(m).toBeDefined();
      const param = m![1];
      expect(
        classIds.has(param) || slugs.has(param) ||
        substancePages.some((s) => s.slug === param) || diseases.some((d) => d.slug === param)
      ).toBe(true);
    }
  });

  test("drug entries carry the canonical review date; class entries the latest member date", () => {
    for (const entry of sitemap) {
      const path = (entry.url.slice(SITE_URL.length) || "/");
      const drugMatch = path.match(/^\/drugs\/([a-z0-9-]+)$/);
      if (drugMatch) {
        const drug = getDrugBySlug(drugMatch[1]);
        expect(drug).toBeDefined();
        expect(entry.lastModified).toBe(drug!.lastReviewed);
      }
      const classMatch = path.match(/^\/drugs\/class\/([a-z0-9-]+)$/);
      if (classMatch) {
        const cls = drugTaxonomyClasses.find((c) => c.id === classMatch[1])!;
        const latest = cls.medications.map((d) => d.lastReviewed).sort().at(-1);
        expect(entry.lastModified).toBe(latest);
      }
    }
    // determinism: lastModified values only come from canonical data
    const dates = sitemap.map((e) => e.lastModified).filter(Boolean);
    expect(new Set(dates).size).toBeLessThanOrEqual(3); // 2026-07-13 / 2026-09-21 / 2026-10-01 (1st-ed. completion pass)
  });

  test("sitemap module is sitemap.tsx so the GitHub Pages export includes it", () => {
    // pageExtensions: ["tsx","jsx"] in export mode excludes .ts routes —
    // sitemap.ts (the convention) would silently vanish from the
    // deployed site. This pin prevents an innocent-looking rename.
    expect(existsSync(SITEMAP_SOURCE)).toBe(true);
    expect(existsSync(join(REPO_ROOT, "src/app/sitemap.ts"))).toBe(false);
    const source = readFileSync(SITEMAP_SOURCE, "utf8");
    expect(source).toContain("absoluteUrl");
    expect(source).not.toContain("localhost");
    expect(source).not.toContain("new Date()"); // deterministic build output
  });

  test("sitemap exports dynamic = 'force-static' for the static export build", () => {
    // output:export requires route handlers to be explicitly static; the
    // metadata-route loader re-exports this config onto /sitemap.xml.
    // Removing it breaks the GitHub Pages build with "Failed to collect
    // page data for /sitemap.xml".
    const source = readFileSync(SITEMAP_SOURCE, "utf8");
    expect(source).toContain('export const dynamic = "force-static"');
  });
});

describe("structured-data — 19..22. Phase 3/4/5/6 regression anchors", () => {
  test("Phase 3: 145 unique medications across 32 DrugClassId classes, all with PrescriberGuide", () => {
    expect(drugs.length).toBe(145);
    expect(new Set(drugs.map((d) => d.slug)).size).toBe(145);
    expect(new Set(drugs.map((d) => d.genericName)).size).toBe(145);
    expect(new Set(drugs.map((d) => d.drugClass)).size).toBe(32);
    expect(drugs.every((d) => d.prescriberGuide)).toBe(true);
  });

  test("Phase 4: interactions + half-life data intact on all records", () => {
    expect(drugs.every((d) => Array.isArray(d.interactions))).toBe(true);
    expect(drugs.filter((d) => d.interactions.length > 0).length).toBeGreaterThan(100);
    expect(drugs.every((d) => d.mechanism.halfLife.length > 0)).toBe(true);
  });

  test("Phase 5: the 40 taxonomy class collections are intact", () => {
    expect(drugTaxonomyClasses.length).toBe(40);
    expect(getAllTaxonomyClassIds().length).toBe(40);
    expect(drugTaxonomyClasses.reduce((n, c) => n + c.medications.length, 0)).toBe(145);
  });

  test("Phase 6: 180 Stahl MCQs over all 145 medications", () => {
    expect(stahlMcqs.length).toBe(180);
    const covered = new Set(stahlMcqs.map((q) => q.drugSlug));
    expect(covered.size).toBe(145);
  });

  test("Phase 6 (UI rule): structured data never touches quiz surfaces", () => {
    // The Phase 7 work must not reintroduce the Phase 6 cleanup problem:
    // structured data renders on drug pages ONLY — quiz surfaces stay
    // clean of both JSON-LD and source/topic metadata re-exposure.
    const quizSource = readFileSync(join(REPO_ROOT, "src/app/quiz/page.tsx"), "utf8");
    expect(quizSource.includes("JsonLd")).toBe(false);
    expect(quizSource.includes("application/ld+json")).toBe(false);
    const customSource = readFileSync(join(REPO_ROOT, "src/app/quiz/custom/page.tsx"), "utf8");
    expect(customSource.includes("JsonLd")).toBe(false);
    const mistakesSource = readFileSync(join(REPO_ROOT, "src/app/study/mistakes/page.tsx"), "utf8");
    expect(mistakesSource.includes("JsonLd")).toBe(false);
    const studySource = readFileSync(join(REPO_ROOT, "src/app/study/page.tsx"), "utf8");
    expect(studySource.includes("JsonLd")).toBe(false);
  });
});

describe("structured-data — 23. content-lock coordination", () => {
  test("the structured-data builder lives outside the locked data directory", () => {
    // src/lib/kyp/data/** is byte-locked by scripts/content-lock.ts.
    // The builder must import from it — never add a second copy of
    // medical content inside it.
    const lockedDir = join(REPO_ROOT, "src/lib/kyp/data");
    const structuredDir = join(REPO_ROOT, "src/lib/kyp/structured-data");
    expect(existsSync(join(structuredDir, "index.ts"))).toBe(true);
    const walk = (dir: string): string[] =>
      readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
        entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
      );
    for (const file of walk(structuredDir)) {
      expect(file.startsWith(lockedDir)).toBe(false);
    }
    const builder = readFileSync(join(structuredDir, "index.ts"), "utf8");
    expect(builder.includes('from "../data/types"')).toBe(true); // imports, not copies
  });
});
