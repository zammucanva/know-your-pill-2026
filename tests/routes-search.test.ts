/**
 * KYP Routes/Search Test Suite — 59 checks.
 *   1-53  every search index entry's href resolves to a working page
 *          (46 original entries + 7 taxonomy collection entries:
 *          Psychiatry, Antidepressants, SSRIs, SNRIs, NDRIs, NaSSAs, TCAs)
 *   54    homepage anchor targets referenced by search entries exist
 *   55    /drugs taxonomy anchors (#psychiatry, #antidepressants) exist
 *   56    drug page content type is HTML
 *   57    legacy .html route permanently redirects (308)
 *   58    unknown API route returns 404
 *   59    drug slugs are case-sensitive (uppercase slug 404)
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

describe("routes/search — all search entries resolve (53)", () => {
  // One test per search index entry — generated dynamically so the suite
  // reports exactly 53 entry checks (46 base + 7 taxonomy collections).
  for (let i = 0; i < 53; i++) {
    test(`search entry ${i + 1}/53 resolves: <dynamic>`, async () => {
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
  test("54. homepage anchor targets referenced by search entries exist", async () => {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();
    expect(html).toMatch(/id="library"/);
    expect(html).toMatch(/id="substances"/);
  });

  test("55. /drugs taxonomy anchors referenced by collection entries exist", async () => {
    const res = await fetch(`${BASE_URL}/drugs`);
    const html = await res.text();
    expect(html).toMatch(/id="psychiatry"/);
    expect(html).toMatch(/id="antidepressants"/);
  });

  test("56. drug pages serve HTML content type", async () => {
    const res = await fetch(`${BASE_URL}/drugs/sertraline`);
    expect(res.headers.get("content-type")).toContain("text/html");
  });

  test("57. legacy .html route permanently redirects", async () => {
    const res = await fetch(`${BASE_URL}/psychiatric.html`, {
      redirect: "manual",
    });
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toBeTruthy();
  });

  test("58. unknown API route returns 404", async () => {
    const res = await fetch(`${BASE_URL}/api/nonexistent-endpoint`);
    expect(res.status).toBe(404);
  });

  test("59. drug slugs are case-sensitive (uppercase slug 404)", async () => {
    const res = await fetch(`${BASE_URL}/drugs/SERTRALINE`);
    expect(res.status).toBe(404);
  });
});
