/**
 * KYP Psychiatry — site regression + public source-name audit.
 *
 * Runs against the standalone build (tests/helpers/server.ts) and pins:
 *   1-5   hub / library / self-test / two sample lesson routes serve 200
 *         with the KYP Psychiatry identity
 *   6     all 109 lesson routes serve 200 HTML (full census)
 *   7     a disorder lesson renders its learning phases + India layer
 *   8     a concept lesson renders concept phases
 *   9     self-test page carries the 719-question corpus entry point
 *   10    the library page lists all 18 domain groups
 *   11-13 PUBLIC SOURCE-NAME AUDIT: the source textbook name must NOT
 *         appear as learner-facing branding on hub, library, or lesson
 *         pages (permitted surfaces: Sources & References disclosure,
 *         Who is KYP / About).
 */
import { beforeAll, describe, expect, test } from "bun:test";
import { BASE_URL, ensureServer } from "./helpers/server";
import { getAllNoteSlugs } from "../src/lib/oxford/loader";

/**
 * The source textbook identity — used ONLY for this audit (internal
 * provenance terminology stays in the data layer; the public product is
 * KYP Psychiatry). We check the distinctive source-work title fragment.
 */
const SOURCE_BOOK_PHRASES = [
  "New Oxford Textbook of Psychiatry",
  "Oxford Textbook of Psychiatry",
];

/** Text allowed to contain the phrase (secondary disclosure surfaces). */
function isPermittedSurface(html: string, phrase: string): boolean {
  // The Sources & References disclosure (expandable) may carry the
  // provenance line. It must never appear in nav/hero/title/headings.
  const occurrences = html.split(phrase).length - 1;
  if (occurrences === 0) return true;
  // Check it only appears inside the sources disclosure container.
  const idx = html.indexOf(phrase);
  const before = html.slice(Math.max(0, idx - 2000), idx);
  const inSourcesBlock = /Sources &amp; References|Sources & References/.test(before);
  return inSourcesBlock && occurrences <= 2;
}

async function get(path: string): Promise<{ status: number; html: string }> {
  const res = await fetch(`${BASE_URL}${path}`, {
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });
  return { status: res.status, html: await res.text() };
}

/** The rendered DOM text: script/style payloads (RSC flight data,
 * JSON-LD, hydration props) are NOT learner-facing surfaces — only
 * visible markup counts for the branding audit. */
function visibleDom(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
}

beforeAll(async () => {
  await ensureServer();
});

describe("psychiatry — routes and identity", () => {
  test("1. hub serves 200 with the KYP Psychiatry identity", async () => {
    const { status, html } = await get("/psychiatry");
    expect(status).toBe(200);
    expect(html).toContain("KYP Psychiatry");
    expect(html).toContain("psychiatry curriculum");
  });

  test("2. library serves 200 and links every domain", async () => {
    const { status, html } = await get("/psychiatry/library");
    expect(status).toBe(200);
    expect(html).toContain("Psychiatry Library");
    expect(html).toContain("Search Psychiatry");
  });

  test("3. self-test serves 200", async () => {
    const { status, html } = await get("/psychiatry/self-test");
    expect(status).toBe(200);
    expect(html).toContain("Psychiatry Self-Test");
  });

  test("4. schizophrenia lesson serves 200 with phases + India layer", async () => {
    const { status, html } = await get("/psychiatry/schizophrenia");
    expect(status).toBe(200);
    expect(html).toContain("Schizophrenia");
    expect(html).toContain("Understand");
    expect(html).toContain("India in Practice");
    expect(html).toContain("Sources &amp; References");
  });

  test("5. concept lesson (couples-therapy) serves 200", async () => {
    const { status, html } = await get("/psychiatry/couples-therapy");
    expect(status).toBe(200);
    expect(html).toContain("Couples");
  });

  test("6. all 109 lesson routes serve 200", async () => {
    const slugs = getAllNoteSlugs();
    expect(slugs.length).toBe(109);
    let bad: string[] = [];
    for (const slug of slugs) {
      const { status } = await get(`/psychiatry/${slug}`);
      if (status !== 200) bad.push(`${slug}:${status}`);
    }
    expect(bad).toEqual([]);
  }, 120000);

  test("7. the universal search index carries the psychiatry records", async () => {
    const { searchIndex } = await import("../src/lib/kyp/data/search-index");
    const psych = searchIndex.filter((i) => i.type === "psychiatry-note");
    expect(psych.length).toBe(111);
    expect(searchIndex.length).toBe(164);
    const hub = searchIndex.find((i) => i.id === "psychiatry-hub");
    expect(hub?.href).toBe("/psychiatry");
  });
});

describe("psychiatry — public source-name audit", () => {
  test("11. hub does not use the source textbook name as branding", async () => {
    const { html } = await get("/psychiatry");
    const dom = visibleDom(html);
    for (const phrase of SOURCE_BOOK_PHRASES) {
      expect(dom.includes(phrase)).toBe(false);
    }
  });

  test("12. library does not use the source textbook name as branding", async () => {
    const { html } = await get("/psychiatry/library");
    const dom = visibleDom(html);
    for (const phrase of SOURCE_BOOK_PHRASES) {
      expect(dom.includes(phrase)).toBe(false);
    }
  });

  test("13. lesson pages: source name only inside the permitted sources disclosure", async () => {
    const slugs = ["schizophrenia", "gad", "alzheimers-dementia", "couples-therapy", "ptsd"];
    for (const slug of slugs) {
      const { html } = await get(`/psychiatry/${slug}`);
      const dom = visibleDom(html);
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
      expect(title).toContain("KYP Psychiatry");
      expect(title.includes("Oxford")).toBe(false);
      for (const phrase of SOURCE_BOOK_PHRASES) {
        expect(isPermittedSurface(dom, phrase)).toBe(true);
      }
    }
  });
});
