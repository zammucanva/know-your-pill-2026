/**
 * Test suite for the new backend features: progress, bookmarks, search history.
 * Run: bun scripts/test-backend-extensions.ts
 */
const BASE = "http://localhost:3000";

async function signupTestUser() {
  const email = `backend-test-${Date.now()}@test.com`;
  const r = await fetch(`${BASE}/api/auth/signup`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Backend Test", email, password: "test123" }),
  });
  const data = await r.json();
  const cookie = r.headers.get("set-cookie")?.split(";")[0] || "";
  return { data, cookie };
}

async function test(label: string, fn: () => Promise<void>) {
  try { await fn(); console.log(`  ✓ ${label}`); }
  catch (e: any) { console.log(`  ✗ ${label} — ${e.message}`); }
}

async function expectStatus(res: Response, expected: number, label: string) {
  if (res.status !== expected) {
    const body = await res.text();
    throw new Error(`${label}: expected ${expected}, got ${res.status} — ${body}`);
  }
}

async function main() {
  const { cookie } = await signupTestUser();
  const headers = { "Content-Type": "application/json", Cookie: cookie };

  console.log("\n=== PROGRESS API ===");

  await test("rejects GET without session", async () => {
    const r = await fetch(`${BASE}/api/progress`);
    await expectStatus(r, 401, "no session");
  });

  await test("rejects POST without session", async () => {
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    await expectStatus(r, 401, "no session");
  });

  await test("records a drug visit (POST)", async () => {
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    await expectStatus(r, 200, "post progress");
    const d = await r.json();
    if (d.slug !== "sertraline") throw new Error("wrong slug");
    if (d.visitCount !== 1) throw new Error("visitCount should be 1");
  });

  await test("records a substance visit", async () => {
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "substance", slug: "alcohol", title: "Alcohol" }),
    });
    await expectStatus(r, 200, "post substance progress");
  });

  await test("records a disease visit", async () => {
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "disease", slug: "major-depressive-disorder", title: "Major Depressive Disorder" }),
    });
    await expectStatus(r, 200, "post disease progress");
  });

  await test("increments visitCount on revisit", async () => {
    // Visit sertraline again
    await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    const d = await r.json();
    if (d.visitCount !== 3) throw new Error(`expected visitCount=3, got ${d.visitCount}`);
  });

  await test("GET returns all progress entries", async () => {
    const r = await fetch(`${BASE}/api/progress`, { headers: { Cookie: cookie } });
    const d = await r.json();
    if (d.progress.length < 3) throw new Error(`expected >=3 entries, got ${d.progress.length}`);
  });

  await test("GET with type filter", async () => {
    const r = await fetch(`${BASE}/api/progress?type=drug`, { headers: { Cookie: cookie } });
    const d = await r.json();
    if (d.progress.length !== 1) throw new Error(`expected 1 drug, got ${d.progress.length}`);
    if (d.progress[0].type !== "drug") throw new Error("wrong type");
  });

  await test("rejects invalid type", async () => {
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "invalid", slug: "x", title: "X" }),
    });
    await expectStatus(r, 400, "invalid type");
  });

  await test("rejects missing fields", async () => {
    const r = await fetch(`${BASE}/api/progress`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "drug" }),
    });
    await expectStatus(r, 400, "missing fields");
  });

  await test("deletes a single progress entry by type+slug", async () => {
    const r = await fetch(`${BASE}/api/progress?type=substance&slug=alcohol`, {
      method: "DELETE", headers: { Cookie: cookie },
    });
    await expectStatus(r, 200, "delete");
    // Verify it's gone
    const check = await fetch(`${BASE}/api/progress?type=substance`, { headers: { Cookie: cookie } });
    const d = await check.json();
    if (d.progress.length !== 0) throw new Error("substance progress not deleted");
  });

  console.log("\n=== BOOKMARKS API ===");

  await test("rejects GET without session", async () => {
    const r = await fetch(`${BASE}/api/bookmarks`);
    await expectStatus(r, 401, "no session");
  });

  await test("adds a bookmark (POST)", async () => {
    const r = await fetch(`${BASE}/api/bookmarks`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    await expectStatus(r, 200, "add bookmark");
  });

  await test("check endpoint returns bookmarked=true", async () => {
    const r = await fetch(`${BASE}/api/bookmarks/check?type=drug&slug=sertraline`, {
      headers: { Cookie: cookie },
    });
    const d = await r.json();
    if (!d.bookmarked) throw new Error("should be bookmarked");
  });

  await test("check endpoint returns bookmarked=false for non-bookmarked", async () => {
    const r = await fetch(`${BASE}/api/bookmarks/check?type=drug&slug=fluoxetine`, {
      headers: { Cookie: cookie },
    });
    const d = await r.json();
    if (d.bookmarked) throw new Error("should not be bookmarked");
  });

  await test("adding same bookmark twice is idempotent", async () => {
    await fetch(`${BASE}/api/bookmarks`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    const r = await fetch(`${BASE}/api/bookmarks`, { headers: { Cookie: cookie } });
    const d = await r.json();
    if (d.bookmarks.filter((b: any) => b.slug === "sertraline").length !== 1) {
      throw new Error("duplicate bookmark created");
    }
  });

  await test("adds multiple bookmarks", async () => {
    await fetch(`${BASE}/api/bookmarks`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "substance", slug: "alcohol", title: "Alcohol" }),
    });
    await fetch(`${BASE}/api/bookmarks`, {
      method: "POST", headers,
      body: JSON.stringify({ type: "disease", slug: "major-depressive-disorder", title: "MDD" }),
    });
    const r = await fetch(`${BASE}/api/bookmarks`, { headers: { Cookie: cookie } });
    const d = await r.json();
    if (d.bookmarks.length < 3) throw new Error(`expected >=3 bookmarks, got ${d.bookmarks.length}`);
  });

  await test("removes a bookmark by type+slug", async () => {
    const r = await fetch(`${BASE}/api/bookmarks?type=drug&slug=sertraline`, {
      method: "DELETE", headers: { Cookie: cookie },
    });
    await expectStatus(r, 200, "delete");
    const check = await fetch(`${BASE}/api/bookmarks/check?type=drug&slug=sertraline`, {
      headers: { Cookie: cookie },
    });
    const d = await check.json();
    if (d.bookmarked) throw new Error("bookmark not removed");
  });

  console.log("\n=== SEARCH HISTORY API ===");

  await test("rejects GET without session", async () => {
    const r = await fetch(`${BASE}/api/search-history`);
    await expectStatus(r, 401, "no session");
  });

  await test("records a search query", async () => {
    const r = await fetch(`${BASE}/api/search-history`, {
      method: "POST", headers,
      body: JSON.stringify({ query: "sertraline" }),
    });
    await expectStatus(r, 200, "record search");
    const d = await r.json();
    if (d.query !== "sertraline") throw new Error("wrong query");
  });

  await test("records search with result click", async () => {
    const r = await fetch(`${BASE}/api/search-history`, {
      method: "POST", headers,
      body: JSON.stringify({
        query: "ssri",
        resultType: "drug",
        resultSlug: "fluoxetine",
        resultTitle: "Fluoxetine",
      }),
    });
    await expectStatus(r, 200, "record search with result");
  });

  await test("GET returns recent searches", async () => {
    const r = await fetch(`${BASE}/api/search-history`, { headers: { Cookie: cookie } });
    const d = await r.json();
    if (d.history.length < 2) throw new Error(`expected >=2 entries, got ${d.history.length}`);
  });

  await test("duplicate consecutive queries don't create duplicate rows", async () => {
    await fetch(`${BASE}/api/search-history`, {
      method: "POST", headers,
      body: JSON.stringify({ query: "alcohol" }),
    });
    await fetch(`${BASE}/api/search-history`, {
      method: "POST", headers,
      body: JSON.stringify({ query: "alcohol" }),
    });
    const r = await fetch(`${BASE}/api/search-history`, { headers: { Cookie: cookie } });
    const d = await r.json();
    const alcoholEntries = d.history.filter((h: any) => h.query === "alcohol");
    if (alcoholEntries.length !== 1) {
      throw new Error(`expected 1 alcohol entry, got ${alcoholEntries.length}`);
    }
  });

  await test("rejects empty query", async () => {
    const r = await fetch(`${BASE}/api/search-history`, {
      method: "POST", headers,
      body: JSON.stringify({ query: "" }),
    });
    await expectStatus(r, 400, "empty query");
  });

  await test("clears search history", async () => {
    const r = await fetch(`${BASE}/api/search-history`, {
      method: "DELETE", headers: { Cookie: cookie },
    });
    await expectStatus(r, 200, "clear");
    const check = await fetch(`${BASE}/api/search-history`, { headers: { Cookie: cookie } });
    const d = await check.json();
    if (d.history.length !== 0) throw new Error("history not cleared");
  });

  console.log("\n=== ALL BACKEND EXTENSION TESTS COMPLETE ===\n");
}

main().catch(e => { console.error(e); process.exit(1); });
