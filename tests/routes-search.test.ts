/**
 * KYP Routes/Search Test Suite — 170 checks.
 *   1-164  every search index entry's href resolves to a working page
 *           (46 original entries + 7 taxonomy collection entries +
 *           111 KYP Psychiatry entries: hub + library + 109 notes)
 *   165    homepage anchor targets referenced by search entries exist
 *   166    /drugs taxonomy anchors (#psychiatry, #antidepressants) exist
 *   167    drug page content type is HTML
 *   168    legacy .html route permanently redirects (308)
 *   169    unknown API route returns 404
 *   170    drug slugs are case-sensitive (uppercase slug 404)
 *
 * Updated for the KYP Psychiatry curriculum: +111 search records
 * (109 note pages + hub + library), each resolving to a real page.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import { BASE_URL, ensureServer } from "./helpers/server";

beforeAll(async () => {
  await ensureServer();
});

async function loadSearchIndex() {
  const { searchIndex } = await import("../src/lib/kyp/data/search-index");
  return searchIndex as { id: string; title: string; href: string }[];
}

describe("routes/search — all search entries resolve (164)", () => {
  // One test per search index entry — generated dynamically so the suite
  // reports exactly 164 entry checks (46 base + 7 taxonomy collections +
  // 111 KYP Psychiatry records).
  for (let i = 0; i < 164; i++) {
    test(`search entry ${i + 1}/164 resolves: <dynamic>`, async () => {
      const searchIndex = await loadSearchIndex();
      const entry = searchIndex[i];
      expect(entry).toBeDefined();
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

describe("routes/search — route behavior (6)", () => {
  test("165. homepage anchor targets referenced by search entries exist", async () => {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();
    expect(html).toMatch(/id="library"/);
    expect(html).toMatch(/id="substances"/);
  });

  test("166. /drugs taxonomy anchors referenced by collection entries exist", async () => {
    const res = await fetch(`${BASE_URL}/drugs`);
    const html = await res.text();
    expect(html).toMatch(/id="psychiatry"/);
    expect(html).toMatch(/id="antidepressants"/);
  });

  test("167. drug pages serve HTML content type", async () => {
    const res = await fetch(`${BASE_URL}/drugs/sertraline`);
    expect(res.headers.get("content-type")).toContain("text/html");
  });

  test("168. legacy .html route permanently redirects", async () => {
    const res = await fetch(`${BASE_URL}/psychiatric.html`, {
      redirect: "manual",
    });
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toBeTruthy();
  });

  test("169. unknown API route returns 404", async () => {
    const res = await fetch(`${BASE_URL}/api/nonexistent-endpoint`);
    expect(res.status).toBe(404);
  });

  test("170. drug slugs are case-sensitive (uppercase slug 404)", async () => {
    const res = await fetch(`${BASE_URL}/drugs/SERTRALINE`);
    expect(res.status).toBe(404);
  });
});
