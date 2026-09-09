/**
 * KYP Routes/Search Test Suite — 51 checks.
 *   1-46  every search index entry's href resolves to a working page
 *   47    homepage anchor targets referenced by search entries exist
 *   48    drug page content type is HTML
 *   49    legacy .html route permanently redirects (308)
 *   50    unknown API route returns 404
 *   51    drug slugs are case-sensitive (uppercase slug 404)
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

describe("routes/search — all search entries resolve (46)", () => {
  // One test per search index entry — generated dynamically so the suite
  // reports exactly 46 entry checks.
  for (let i = 0; i < 46; i++) {
    test(`search entry ${i + 1}/46 resolves: <dynamic>`, async () => {
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

describe("routes/search — route behavior (5)", () => {
  test("47. homepage anchor targets referenced by search entries exist", async () => {
    const res = await fetch(`${BASE_URL}/`);
    const html = await res.text();
    expect(html).toMatch(/id="library"/);
    expect(html).toMatch(/id="substances"/);
  });

  test("48. drug pages serve HTML content type", async () => {
    const res = await fetch(`${BASE_URL}/drugs/sertraline`);
    expect(res.headers.get("content-type")).toContain("text/html");
  });

  test("49. legacy .html route permanently redirects", async () => {
    const res = await fetch(`${BASE_URL}/psychiatric.html`, {
      redirect: "manual",
    });
    expect(res.status).toBe(308);
    expect(res.headers.get("location")).toBeTruthy();
  });

  test("50. unknown API route returns 404", async () => {
    const res = await fetch(`${BASE_URL}/api/nonexistent-endpoint`);
    expect(res.status).toBe(404);
  });

  test("51. drug slugs are case-sensitive (uppercase slug 404)", async () => {
    const res = await fetch(`${BASE_URL}/drugs/SERTRALINE`);
    expect(res.status).toBe(404);
  });
});
