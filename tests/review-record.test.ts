import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "fs";
import { CLAIM_RECORDS } from "@/lib/kyp/evidence";
import { IN_SHORT_PACKET, blankRecordTemplate, claimItemHash, packetDigest, reviewItemIds, reviewItems, reviewPacket } from "@/lib/kyp/evidence/review-packet";
import { packetStatus, staleDecisions, validateReviewRecord, type ReviewRecord } from "@/lib/kyp/evidence/review-record";
import { SOURCE_RECORDS } from "@/lib/kyp/evidence";

const NOW = new Date("2026-10-14");
const filled = (slug: string): ReviewRecord => ({
  packet: slug,
  scope: "Fixture scope: every item in the packet, checked against a synthetic reference",
  packetDigest: packetDigest(reviewItems(slug)),
  reviewer: { name: "Dr Test Fixture", qualification: "MD Psychiatry (fixture)", registrationBody: "Fixture council", registrationNumber: "FIX-0001", affiliation: "Fixture hospital", conflictsOfInterest: "none" },
  reviewedAt: "2026-10-13",
  decisions: reviewItems(slug).map(({ id, hash }) => ({ id, contentHash: hash, decision: "accept", notes: "Checked against the synthetic fixture reference" })),
});

describe("a review record is checked for completeness; an empty packet or template is never a review", () => {
  test("the blank template for every packet is invalid, and says why", () => {
    for (const slug of ["sertraline", "fluoxetine", "moclobemide", IN_SHORT_PACKET]) {
      const t = blankRecordTemplate(slug) as unknown as ReviewRecord;
      const problems = validateReviewRecord(t, reviewItems(slug), NOW).join(" | ");
      expect(problems).toMatch(/reviewer name is missing/);
      expect(problems).toMatch(/registration number is missing/);
      expect(problems).toMatch(/reviewedAt must be a real date/);
      expect(problems).toMatch(/must be one of accept, amend, reject, request-evidence/);
    }
  });
  test("a complete fixture record passes the check, and that is all it proves", () => {
    expect(validateReviewRecord(filled("sertraline"), reviewItems("sertraline"), NOW)).toEqual([]);
  });
  test("every identity field, a real date, and a decision per item are required", () => {
    const base = () => filled("moclobemide");
    for (const k of ["name", "qualification", "registrationBody", "registrationNumber", "affiliation", "conflictsOfInterest"] as const) {
      const r = base();
      r.reviewer[k] = "____";
      expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW).length).toBeGreaterThan(0);
    }
    const future = base();
    future.reviewedAt = "2027-01-01";
    expect(validateReviewRecord(future, reviewItems("moclobemide"), NOW).join()).toMatch(/future/);
    const short = base();
    short.decisions.pop();
    expect(validateReviewRecord(short, reviewItems("moclobemide"), NOW).join()).toMatch(/no decision/);
    const dup = base();
    dup.decisions.push({ ...dup.decisions[0] });
    expect(validateReviewRecord(dup, reviewItems("moclobemide"), NOW).join()).toMatch(/decided twice/);
    const alien = base();
    alien.decisions.push({ id: "not-a-claim", contentHash: "x", decision: "accept", notes: "n/a n/a n/a n/a" });
    expect(validateReviewRecord(alien, reviewItems("moclobemide"), NOW).join()).toMatch(/no such item/);
  });
  test("amend, reject and request-evidence need their words; software cannot be the reviewer", () => {
    const r = filled("moclobemide");
    r.decisions[0] = { id: r.decisions[0].id, decision: "amend", notes: "" };
    r.decisions[1] = { id: r.decisions[1].id, decision: "reject", notes: "" };
    r.decisions[2] = { id: r.decisions[2].id, decision: "request-evidence", notes: "Needs the Indian insert" };
    const p = validateReviewRecord(r, reviewItems("moclobemide"), NOW).join(" | ");
    expect(p).toMatch(/amend needs the amended wording/);
    expect(p).toContain(`decision for "${r.decisions[1].id}": every decision needs a recorded rationale`);
    expect(p).not.toContain(`decision for "${r.decisions[2].id}": every decision needs a recorded rationale`);
    const bot = filled("moclobemide");
    bot.reviewer.name = "Claude";
    expect(validateReviewRecord(bot, reviewItems("moclobemide"), NOW).join()).toMatch(/not software/);
  });
  test("packet items match the packet text, so a decision can be traced to what the reviewer saw", () => {
    const p = reviewPacket("sertraline");
    for (const id of reviewItemIds("sertraline")) expect(p).toContain(id.startsWith("guide:") ? `### ${id}` : `### ${id} [`);
  });
  test("no review record is stored, no statement is marked reviewed, and no template is saved as a record", () => {
    expect(CLAIM_RECORDS.every((c) => c.review === "not-reviewed")).toBe(true);
    const dir = "reports/medication-audit/review-packets";
    if (existsSync(dir)) for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) expect(f).toMatch(/\.record-template\.json$/);
    for (const f of readdirSync(dir).filter((x) => x.endsWith(".record-template.json"))) {
      const t = JSON.parse(readFileSync(`${dir}/${f}`, "utf8")) as ReviewRecord;
      expect(validateReviewRecord(t, reviewItems(t.packet), NOW).length).toBeGreaterThan(0);
    }
  });
});

describe("a decision cannot be moved to other text, another medicine, another source or a later edit", () => {
  test("a record whose decisions come from another medicine's packet is rejected", () => {
    const wrong = filled("sertraline");
    wrong.decisions = filled("fluoxetine").decisions;
    const p = validateReviewRecord(wrong, reviewItems("sertraline"), NOW).join(" | ");
    expect(p).toMatch(/no such item in this packet/);
    expect(p).toMatch(/no decision/);
  });
  test("the same item id with different text, source or applicability no longer matches (hash mismatch)", () => {
    const r = filled("moclobemide");
    r.decisions[0] = { ...r.decisions[0], contentHash: "00000000000000" };
    expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW).join()).toMatch(/hash mismatch/);
    const missing = filled("moclobemide");
    delete missing.decisions[0].contentHash;
    expect(validateReviewRecord(missing, reviewItems("moclobemide"), NOW).join()).toMatch(/hash mismatch/);
  });
  test("item hashes differ between items, and between the same wording in two medicines", () => {
    const hashes = reviewItems("moclobemide").map((i) => i.hash);
    expect(new Set(hashes).size).toBe(hashes.length);
    const a = reviewItems("sertraline").map((i) => i.hash);
    const b = reviewItems("fluoxetine").map((i) => i.hash);
    expect(a.filter((h) => b.includes(h))).toEqual([]);
  });
  test("in-app fact approval is bound to one medicine, one path and the exact value reviewed (no wildcard)", async () => {
    const { REVIEW_RECORDS, collectFacts, buildModeLenses } = await import("@/lib/kyp/modes");
    const { contentHash } = await import("@/lib/kyp/content-hash");
    const { drugs } = await import("@/lib/kyp/data");
    const { getPatientGuide } = await import("@/lib/kyp/patient");
    const { stahlMcqs } = await import("@/lib/kyp/stahl-mcqs");
    const get = (slug: string) => {
      const drug = drugs.find((d) => d.slug === slug)!;
      const patientGuide = getPatientGuide(slug);
      const mcqs = stahlMcqs.filter((q) => q.drugSlug === slug);
      return collectFacts(buildModeLenses({ drug, patientGuide, mcqs }), { drug, patientGuide, mcqIds: mcqs.map((q) => q.id) }).used;
    };
    const target = get("sertraline").find((f) => f.value && f.path.startsWith("patientGuide"))!;
    const add = (rec: object) => (REVIEW_RECORDS as unknown as object[]).push(rec);
    const base = { reviewer: "Fixture", qualification: "fixture", date: "2026-10-14", sources: [] as string[] };
    try {
      add({ ...base, slug: "sertraline", path: "*", valueHash: contentHash(target.value!) });
      expect(get("sertraline").some((f) => f.review === "approved")).toBe(false); // no wildcard
      add({ ...base, slug: "sertraline", path: target.path, valueHash: "00000000000000" });
      expect(get("sertraline").find((f) => f.path === target.path)!.review).not.toBe("approved"); // value changed since review
      add({ ...base, slug: "fluoxetine", path: target.path, valueHash: contentHash(target.value!) });
      expect(get("sertraline").find((f) => f.path === target.path)!.review).not.toBe("approved"); // another medicine's record
      add({ ...base, slug: "sertraline", path: target.path, valueHash: contentHash(target.value!) });
      expect(get("sertraline").find((f) => f.path === target.path)!.review).toBe("approved"); // the exact fact, exact value
      expect(get("sertraline").filter((f) => f.review === "approved")).toHaveLength(1); // and nothing else
    } finally {
      (REVIEW_RECORDS as unknown as object[]).length = 0;
    }
    expect(REVIEW_RECORDS).toHaveLength(0);
  });
});

describe("integrity of review records against stale, transferred and self-made decisions", () => {
  test("any change to wording, passage, source, formulation or limits changes the item hash (stale and cross-formulation decisions)", () => {
    const c = CLAIM_RECORDS.find((x) => x.slug === "moclobemide")!;
    const base = claimItemHash(c);
    expect(claimItemHash({ ...c })).toBe(base);
    expect(claimItemHash({ ...c, patientWording: c.patientWording + " " })).not.toBe(base);
    expect(claimItemHash({ ...c, passage: c.passage + "." })).not.toBe(base);
    expect(claimItemHash({ ...c, sourceId: c.sourceId + "x" })).not.toBe(base);
    expect(claimItemHash({ ...c, applicability: [...c.applicability, "a different formulation"] })).not.toBe(base);
    expect(claimItemHash({ ...c, limitations: [] })).not.toBe(base);
    expect(claimItemHash({ ...c, slug: "other-medicine" })).not.toBe(base);
    expect(claimItemHash({ ...c, category: "side-effects" })).not.toBe(base);
  });
  test("the app and its tooling cannot name themselves as reviewer", () => {
    for (const who of ["KYP", "Know Your Pill engineering", "automated review script", "Generated by template", "Claude", "System"]) {
      const r = filled("moclobemide");
      r.reviewer.name = who;
      expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW).join()).toMatch(/not software, this app or its tooling/);
    }
  });
  test("a blank or template record never validates, whatever the packet", () => {
    for (const slug of ["sertraline", "fluoxetine", IN_SHORT_PACKET]) {
      expect(validateReviewRecord(blankRecordTemplate(slug) as unknown as ReviewRecord, reviewItems(slug), NOW).length).toBeGreaterThan(5);
    }
  });
  test("a decision list with every item accepted but no identity fails, and identity without decisions fails", () => {
    const noId = filled("moclobemide");
    noId.reviewer = { name: "", qualification: "", registrationBody: "", registrationNumber: "", affiliation: "", conflictsOfInterest: "" };
    expect(validateReviewRecord(noId, reviewItems("moclobemide"), NOW).length).toBeGreaterThanOrEqual(6);
    const noDec = filled("moclobemide");
    noDec.decisions = [];
    expect(validateReviewRecord(noDec, reviewItems("moclobemide"), NOW).join()).toMatch(/no decision/);
  });
});

describe("unresolved items and source changes", () => {
  test("an item can be left unresolved, but only with a note saying what evidence is missing", () => {
    const r = filled("moclobemide");
    r.decisions[0] = { ...r.decisions[0], decision: "unresolved", notes: "" };
    expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW).join()).toMatch(/every decision needs a recorded rationale/);
    r.decisions[0] = { ...r.decisions[0], decision: "unresolved", notes: "No Indian product information available to compare with" };
    expect(validateReviewRecord(r, reviewItems("moclobemide"), NOW)).toEqual([]);
  });
  test("a change to the source record (date, form, title, jurisdiction) makes the decision stale even when the wording is unchanged", () => {
    const c = CLAIM_RECORDS.find((x) => x.slug === "moclobemide")!;
    const s = SOURCE_RECORDS.find((x) => x.id === c.sourceId)!;
    const base = claimItemHash(c, s);
    expect(claimItemHash(c, { ...s })).toBe(base);
    expect(claimItemHash(c, { ...s, publishedDate: "1999-01-01" })).not.toBe(base);
    expect(claimItemHash(c, { ...s, formulation: "a different formulation" })).not.toBe(base);
    expect(claimItemHash(c, { ...s, jurisdiction: s.jurisdiction === "IN" ? "US" : "IN" })).not.toBe(base);
    expect(claimItemHash(c, { ...s, title: s.title + " (revised)" })).not.toBe(base);
    expect(claimItemHash(c)).not.toBe(base);
  });
});

describe("the viva findings are reviewable in the same record format", () => {
  test("the viva packet lists exactly the registry entries the lens cannot show, verbatim, with blank decisions", async () => {
    const { VIVA_PACKET, vivaFindings } = await import("@/lib/kyp/evidence/review-packet");
    const f = vivaFindings();
    expect(f.map((x) => x.id).sort()).toEqual(["clomipramine#viva[4]", "tacrine#viva[2]"]);
    const p = reviewPacket(VIVA_PACKET);
    expect(p).toContain("Status: NOT REVIEWED");
    expect(p).toContain("protected medication data and are not changed");
    for (const x of f) {
      expect(p).toContain(`### ${x.id}`);
      expect(p).toContain(`Registry text (verbatim): ${x.text}`);
    }
    expect(p.match(/Decision \(accept/g)?.length).toBe(f.length);
    const blank = blankRecordTemplate(VIVA_PACKET) as unknown as ReviewRecord;
    expect(validateReviewRecord(blank, reviewItems(VIVA_PACKET), NOW).length).toBeGreaterThan(5);
    const done = filled(VIVA_PACKET);
    done.decisions = done.decisions.map((d, i) => ({ ...d, decision: i === 0 ? "amend" : "unresolved", amendedWording: "close the bracket", notes: "pending evidence from the reviewer" }));
    expect(validateReviewRecord(done, reviewItems(VIVA_PACKET), NOW)).toEqual([]);
  });
});

describe("a decision on an 'In short' sentence goes stale when the source wordings it stands for change", () => {
  test("hash depends on the sentence, its patterns and the set of source wordings", async () => {
    const { inShortItemHash, inShortUses } = await import("@/lib/kyp/evidence/review-packet");
    const { PLAIN_SENTENCES } = await import("@/lib/kyp/evidence/plain-summaries");
    const b = PLAIN_SENTENCES[0];
    const base = inShortItemHash(b, ["wording A", "wording B"]);
    expect(inShortItemHash(b, ["wording B", "wording A"])).toBe(base); // order does not matter
    expect(inShortItemHash(b, ["wording A"])).not.toBe(base);
    expect(inShortItemHash(b, ["wording A", "wording B", "wording C"])).not.toBe(base);
    expect(inShortItemHash({ ...b, text: b.text + " " }, ["wording A", "wording B"])).not.toBe(base);
    expect(inShortUses().size).toBeGreaterThan(10);
  });
});

describe("scope, rationale, packet digest and packet status", () => {
  test("a record without scope, with a stale packet digest, or with a decision lacking a rationale is refused", () => {
    const items = reviewItems("moclobemide");
    const noScope = filled("moclobemide");
    noScope.scope = "";
    expect(validateReviewRecord(noScope, items, NOW).join()).toMatch(/scope is missing/);
    const oldDigest = filled("moclobemide");
    oldDigest.packetDigest = "0".repeat(14);
    expect(validateReviewRecord(oldDigest, items, NOW).join()).toMatch(/packet has changed since this record's template was made/);
    const noWhy = filled("moclobemide");
    noWhy.decisions[0] = { ...noWhy.decisions[0], notes: "" };
    expect(validateReviewRecord(noWhy, items, NOW).join()).toMatch(/every decision needs a recorded rationale/);
    const acceptNoWhy = filled("moclobemide");
    acceptNoWhy.decisions[1] = { ...acceptNoWhy.decisions[1], decision: "accept", notes: "ok" };
    expect(validateReviewRecord(acceptNoWhy, items, NOW).join()).toMatch(/for accept: what it was checked against/);
  });
  test("the packet digest changes when any item changes, is added or is removed", () => {
    const items = reviewItems("moclobemide");
    const base = packetDigest(items);
    expect(packetDigest(items)).toBe(base);
    expect(packetDigest([{ ...items[0], hash: "0".repeat(14) }, ...items.slice(1)])).not.toBe(base);
    expect(packetDigest(items.slice(1))).not.toBe(base);
    expect(packetDigest([...items, { id: "x", hash: "y" }])).not.toBe(base);
  });
  test("status: pending with no record, incomplete when identity is missing, stale after a change, record-complete only when everything holds", () => {
    const items = reviewItems("moclobemide");
    expect(packetStatus(null, items, NOW).status).toBe("pending");
    const noId = filled("moclobemide");
    noId.reviewer.name = "";
    expect(packetStatus(noId, items, NOW).status).toBe("incomplete");
    const changed = items.map((i, n) => (n === 0 ? { ...i, hash: "1".repeat(14) } : i));
    const stale = packetStatus(filled("moclobemide"), changed, NOW);
    expect(stale.status).toBe("stale");
    expect(staleDecisions(filled("moclobemide"), changed)).toEqual([items[0].id]);
    expect(packetStatus(filled("moclobemide"), items, NOW).status).toBe("record-complete");
  });
  test("every saved template is pending: it fails validation and carries the current packet digest", () => {
    for (const slug of ["sertraline", "fluoxetine", IN_SHORT_PACKET, "viva-findings"]) {
      const t = JSON.parse(readFileSync(`reports/medication-audit/review-packets/${slug}.record-template.json`, "utf8")) as ReviewRecord;
      expect(t.packetDigest).toBe(packetDigest(reviewItems(slug)));
      expect(packetStatus(t, reviewItems(slug), NOW).status).not.toBe("record-complete");
    }
  });
});
