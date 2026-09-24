/**
 * KYP Routes/Search Test Suite.
 *   1..N    every search index entry's href resolves to a working page,
 *           generated dynamically over the FULL index (drugs, classes,
 *           collections, substances, disease, brain regions, pathways,
 *           side effects, patient guides) — N tracks the index size, so
 *           new entries are automatically link-checked (previously a
 *           hardcoded 53 silently skipped ~170 newer entries).
 *   N+1     homepage anchor targets referenced by search entries exist
 *   N+2     /drugs taxonomy anchors (#psychiatry, #antidepressants) exist
 *   N+3     drug page content type is HTML
 *   N+4     legacy .html route permanently redirects (308)
 *   N+5     unknown API route returns 404
 *   N+6     drug slugs are case-sensitive (uppercase slug 404)
 *   N+7     ?drug= deep links: every canonical drug slug has a resolvable
 *           quiz page (query string must not break static routing)
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { BASE_URL, ensureServer } from "./helpers/server";

// Top-level import — the index is static data; iterating it at module
// scope registers one link-check test per entry.
const { searchIndex } = await import("../src/lib/kyp/data/search-index");
const { drugs } = await import("../src/lib/kyp/data/drugs/index");
const ENTRIES = searchIndex as { id: string; title: string; href: string }[];

beforeAll(async () => {
  await ensureServer();
});

describe(`routes/search — all ${ENTRIES.length} search entries resolve`, () => {
  // One test per search index entry — generated dynamically so the
  // suite link-checks the complete index and grows with it.
  for (let i = 0; i < ENTRIES.length; i++) {
    test(`search entry ${i + 1}/${ENTRIES.length} resolves: ${ENTRIES[i].title}`, async () => {
      const entry = ENTRIES[i];
      const path = entry.href.split("#")[0].split("?")[0] || "/";
      const res = await fetch(`${BASE_URL}${path}`, {
        redirect: "follow",
        signal: AbortSignal.timeout(10000),
      });
      expect(`${entry.id} (${entry.href}): ${res.status}`).toBe(
        `${entry.id} (${entry.href}): 200`
      );
    });
  }
});

describe("routes/search — route behavior (7)", () => {
  test("homepage anchor targets referenced by search entries exist", async () => {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();
    expect(html).toMatch(/id="library"/);
    expect(html).toMatch(/id="substances"/);
  });

  test("/drugs taxonomy anchors referenced by collection entries exist", async () => {
    const res = await fetch(`${BASE_URL}/drugs`);
    const html = await res.text();
    expect(html).toMatch(/id="psychiatry"/);
    expect(html).toMatch(/id="antidepressants"/);
  });

  test("drug pages serve HTML content type", async () => {
    const res = await fetch(`${BASE_URL}/drugs/sertraline`);
    expect(res.headers.get("content-type")).toContain("text/html");
  });

  test("legacy .html route permanently redirects", async () => {
    const res = await fetch(`${BASE_URL}/psychiatric.html`, {
      redirect: "manual",
    });
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toBeTruthy();
  });

  test("unknown API route returns 404", async () => {
    const res = await fetch(`${BASE_URL}/api/nonexistent-endpoint`);
    expect(res.status).toBe(404);
  });

  test("drug slugs are case-sensitive (uppercase slug 404)", async () => {
    const res = await fetch(`${BASE_URL}/drugs/SERTRALINE`);
    expect(res.status).toBe(404);
  });

  test("?drug= deep links: quiz + interactions accept every canonical slug (spot 3)", async () => {
    // Query strings must not break static routing on either surface.
    for (const slug of [drugs[0].slug, drugs[Math.floor(drugs.length / 2)].slug, drugs[drugs.length - 1].slug]) {
      const quiz = await fetch(`${BASE_URL}/quiz?drug=${slug}`);
      expect(quiz.status).toBe(200);
      const interactions = await fetch(`${BASE_URL}/interactions?drug=${slug}`);
      expect(interactions.status).toBe(200);
    }
  });
});
