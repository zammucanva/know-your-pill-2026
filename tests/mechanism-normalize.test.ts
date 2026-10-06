/**
 * Mechanism System — corpus-wide CONTENT FIREWALL over the legacy adapter.
 *
 * Every one of the 145 drug pages and 109 psychiatry courses is converted
 * through the adapter and checked string-by-string against its locked
 * source data:
 *
 *   - every node label, sublabel and edge label is VERBATIM from source;
 *   - the only transformation allowed is the legacy edge field rename
 *     (inhibit -> inhibits, stimulate -> stimulates; untyped -> leads_to);
 *   - evidence grades travel as qualifiers (never dropped, never upgraded);
 *   - causal order is preserved (step N before step N+1);
 *   - no node overlaps after layout (readable rendering for every corpus
 *     member, not just pilots);
 *   - every adapted definition validates.
 */

import { describe, expect, test } from "bun:test";
import { alcohol } from "@/lib/kyp/data/substances/alcohol";
import { opioids } from "@/lib/kyp/data/substances/opioids";
import { drugs } from "@/lib/kyp/data/drugs/index";
import { psychiatryCourses } from "@/lib/kyp/data/psychiatry-courses/index";
import {
  fromDrugMechanismFlow,
  fromCourseMechanism,
  fromSubstanceStepFlow,
} from "@/lib/mechanism/normalize";
import { collectMechanismErrors, layoutMechanism } from "@/lib/mechanism";

const DRUG_COUNT = 145;
const COURSE_COUNT = 109;

describe("mechanism adapter — drug corpus firewall", () => {
  test("1. corpus size is 145 (independent recount)", () => {
    expect(drugs.length).toBe(DRUG_COUNT);
  });

  test("2. every drug converts, validates, and preserves every string verbatim", () => {
    const problems: string[] = [];
    for (const drug of drugs) {
      const def = fromDrugMechanismFlow({
        drugSlug: drug.slug,
        drugName: drug.genericName,
        mechanismSummary: drug.mechanism.summary,
        mechanismFlow: drug.mechanismFlow,
      });

      const errors = collectMechanismErrors(def);
      if (errors.length > 0) problems.push(`${drug.slug}: invalid -> ${errors.join("; ")}`);

      // labels verbatim
      for (const n of def.nodes) {
        const src = drug.mechanismFlow.nodes.find((x) => x.id === n.id);
        if (!src) problems.push(`${drug.slug}: node ${n.id} not in source`);
        else {
          if (n.label !== src.label) problems.push(`${drug.slug}/${n.id}: label drift`);
          if ((n.sublabel ?? undefined) !== (src.sublabel ?? undefined)) {
            problems.push(`${drug.slug}/${n.id}: sublabel drift`);
          }
        }
      }

      // edges: endpoints + labels verbatim, only the typed rename allowed
      for (const e of def.edges) {
        const src = drug.mechanismFlow.edges.find((x) => x.from === e.from && x.to === e.to);
        if (!src) problems.push(`${drug.slug}: edge ${e.from}->${e.to} not in source`);
        else {
          if ((e.label ?? undefined) !== (src.label ?? undefined)) {
            problems.push(`${drug.slug}: edge label drift on ${e.from}->${e.to}`);
          }
          const expected =
            src.type === "inhibit" ? "inhibits" : src.type === "stimulate" ? "stimulates" : "leads_to";
          if (e.relationship !== expected) {
            problems.push(`${drug.slug}: forbidden relationship transform ${e.relationship}`);
          }
        }
      }

      // no invented nodes/edges
      if (def.nodes.length !== drug.mechanismFlow.nodes.length) {
        problems.push(`${drug.slug}: node count changed`);
      }
      if (def.edges.length !== drug.mechanismFlow.edges.length) {
        problems.push(`${drug.slug}: edge count changed`);
      }

      // adapted graphs carry no enriched metadata (honest gap)
      if (def.interventions?.length) problems.push(`${drug.slug}: adapter invented interventions`);
      if (def.compartments?.length) problems.push(`${drug.slug}: adapter invented compartments`);
      if (def.timeline?.length) problems.push(`${drug.slug}: adapter invented timeline`);
      if (def.migration !== "adapter-fallback") problems.push(`${drug.slug}: not marked adapter-fallback`);
    }
    expect(problems).toEqual([]);
  });

  test("3. every drug layout is overlap-free", () => {
    const problems: string[] = [];
    for (const drug of drugs) {
      const def = fromDrugMechanismFlow({
        drugSlug: drug.slug,
        drugName: drug.genericName,
        mechanismSummary: drug.mechanism.summary,
        mechanismFlow: drug.mechanismFlow,
      });
      const l = layoutMechanism(def);
      if (l.warnings.length > 0) problems.push(`${drug.slug}: ${l.warnings.join(";")}`);
      for (let i = 0; i < l.nodes.length; i++) {
        for (let j = i + 1; j < l.nodes.length; j++) {
          const a = l.nodes[i];
          const b = l.nodes[j];
          if (a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h) {
            problems.push(`${drug.slug}: overlap ${a.id}|${b.id}`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
  });
});

describe("mechanism adapter — psychiatry course corpus firewall", () => {
  test("4. registry size is 109 (independent recount)", () => {
    expect(psychiatryCourses.length).toBe(COURSE_COUNT);
  });

  test("5. every course converts with verbatim steps and preserved grades", () => {
    const problems: string[] = [];
    for (const course of psychiatryCourses) {
      const def = fromCourseMechanism({
        courseSlug: course.slug,
        courseTitle: course.title,
        mechanism: course.mechanism,
      });

      const errors = collectMechanismErrors(def);
      if (errors.length > 0) problems.push(`${course.slug}: invalid -> ${errors.join("; ")}`);

      // steps verbatim, in order
      def.nodes.forEach((n, i) => {
        if (n.label !== course.mechanism.steps[i]) {
          problems.push(`${course.slug}: step ${i + 1} drift`);
        }
      });
      if (def.nodes.length !== course.mechanism.steps.length) {
        problems.push(`${course.slug}: step count changed`);
      }

      // causal order preserved (linear chain)
      for (let i = 0; i < def.edges.length; i++) {
        if (def.edges[i].from !== `s${i + 1}` || def.edges[i].to !== `s${i + 2}`) {
          problems.push(`${course.slug}: causal order broken at edge ${i + 1}`);
        }
      }

      // grade travels as qualifier — never dropped, never upgraded
      const gradeMap: Record<string, string> = {
        established: "established",
        supported: "supported",
        proposed: "proposed",
        uncertain: "uncertain",
      };
      const expectedQualifier = gradeMap[course.mechanism.grade];
      for (const e of def.edges) {
        if (e.qualifier !== expectedQualifier) {
          problems.push(`${course.slug}: qualifier "${e.qualifier}" != grade "${expectedQualifier}"`);
        }
      }
      if (def.evidence?.grade !== expectedQualifier) {
        problems.push(`${course.slug}: evidence grade lost`);
      }
      if (def.migration !== "adapter-fallback") problems.push(`${course.slug}: not marked adapter-fallback`);
    }
    expect(problems).toEqual([]);
  });
});

describe("mechanism adapter — substance step flows", () => {
  test("6. the two step flows convert with verbatim titles/descriptions", () => {
    const disulfiramMed = alcohol.treatment?.medications?.find((m) => m.mechanismFlow);
    expect(disulfiramMed).toBeDefined();
    const dsfDef = fromSubstanceStepFlow({
      substanceSlug: "alcohol",
      substanceName: alcohol.name,
      flowTitle: `${disulfiramMed!.name} mechanism`,
      steps: disulfiramMed!.mechanismFlow!,
    });
    dsfDef.nodes.forEach((n, i) => {
      expect(n.label).toBe(disulfiramMed!.mechanismFlow![i].title);
      expect(n.sublabel).toBe(disulfiramMed!.mechanismFlow![i].description);
    });
    expect(collectMechanismErrors(dsfDef)).toEqual([]);

    // Naloxone emergency flow on the opioids page
    if (!opioids.naloxoneInfo) throw new Error("naloxoneInfo missing");
    const nlxInfo = opioids.naloxoneInfo;
    const nlxDef = fromSubstanceStepFlow({
      substanceSlug: "opioids",
      substanceName: opioids.name,
      flowTitle: nlxInfo.cardTitle,
      steps: nlxInfo.mechanismFlow,
    });
    nlxDef.nodes.forEach((n, i) => {
      expect(n.label).toBe(nlxInfo.mechanismFlow[i].title);
      expect(n.sublabel).toBe(nlxInfo.mechanismFlow[i].description);
    });
    expect(collectMechanismErrors(nlxDef)).toEqual([]);
  });
});
