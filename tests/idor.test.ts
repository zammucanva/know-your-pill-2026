/**
 * KYP IDOR / Authorization Test Suite — 10 checks.
 *
 * Two disposable test users (A and B) are created in the ISOLATED test
 * database. B owns bookmarks, progress, and search-history records.
 * A must never be able to read, modify, or delete B's records.
 *
 * All ownership is resolved server-side from the authenticated session —
 * never from client-supplied ids/emails/roles.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import {
  BASE_URL,
  authed,
  createTestUser,
  ensureServer,
} from "./helpers/server";

interface BookmarkRow {
  id: string;
  type: string;
  slug: string;
  title: string;
}

beforeAll(async () => {
  await ensureServer();
});

describe("IDOR / object-level authorization", () => {
  test("1. User A's bookmark list contains only A's bookmarks (not B's)", async () => {
    const a = await createTestUser("idora", 1);
    const b = await createTestUser("idorb", 1);

    // B creates a bookmark
    const bCreate = await fetch(`${BASE_URL}/api/bookmarks`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ type: "drug", slug: "sertraline", title: "Sertraline" }),
    });
    expect(bCreate.status).toBe(200);
    const bBookmark = (await bCreate.json()) as BookmarkRow;

    // A lists bookmarks — must NOT include B's
    const aList = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(a.jar) });
    expect(aList.status).toBe(200);
    const { bookmarks } = (await aList.json()) as { bookmarks: BookmarkRow[] };
    expect(bookmarks.some((bm) => bm.id === bBookmark.id)).toBe(false);
    expect(bookmarks.some((bm) => bm.slug === "sertraline")).toBe(false);
  });

  test("2. User A's progress list contains only A's progress (not B's)", async () => {
    const a = await createTestUser("idora", 2);
    const b = await createTestUser("idorb", 2);

    // B records progress
    const bPost = await fetch(`${BASE_URL}/api/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ type: "drug", slug: "fluoxetine", title: "Fluoxetine" }),
    });
    expect(bPost.status).toBe(200);

    // A lists progress — must NOT include B's entry
    const aList = await fetch(`${BASE_URL}/api/progress`, { headers: authed(a.jar) });
    expect(aList.status).toBe(200);
    const { progress } = (await aList.json()) as { progress: { slug: string }[] };
    expect(progress.some((p) => p.slug === "fluoxetine")).toBe(false);
  });

  test("3. User A's search history contains only A's queries (not B's)", async () => {
    const a = await createTestUser("idora", 3);
    const b = await createTestUser("idorb", 3);

    // B records a search
    const bPost = await fetch(`${BASE_URL}/api/search-history`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ query: "b-secret-query-paroxetine" }),
    });
    expect(bPost.status).toBe(200);

    // A lists search history — must NOT include B's query
    const aList = await fetch(`${BASE_URL}/api/search-history`, { headers: authed(a.jar) });
    expect(aList.status).toBe(200);
    const { history } = (await aList.json()) as { history: { query: string }[] };
    expect(history.some((h) => h.query.includes("b-secret-query"))).toBe(false);
  });

  test("4. User A cannot delete B's bookmark by id", async () => {
    const a = await createTestUser("idora", 4);
    const b = await createTestUser("idorb", 4);

    const bCreate = await fetch(`${BASE_URL}/api/bookmarks`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ type: "drug", slug: "bupropion", title: "Bupropion" }),
    });
    const bBookmark = (await bCreate.json()) as BookmarkRow;

    // A attempts to delete B's bookmark by id
    const aDelete = await fetch(`${BASE_URL}/api/bookmarks?id=${bBookmark.id}`, {
      method: "DELETE",
      headers: authed(a.jar),
    });
    expect(aDelete.status).toBe(200); // scoped deleteMany: 0 rows removed

    // B's bookmark is still present
    const bList = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(b.jar) });
    const { bookmarks } = (await bList.json()) as { bookmarks: BookmarkRow[] };
    expect(bookmarks.some((bm) => bm.id === bBookmark.id)).toBe(true);
  });

  test("5. User A cannot delete B's progress by id", async () => {
    const a = await createTestUser("idora", 5);
    const b = await createTestUser("idorb", 5);

    const bPost = await fetch(`${BASE_URL}/api/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ type: "drug", slug: "mirtazapine", title: "Mirtazapine" }),
    });
    const bProgress = (await bPost.json()) as { id: string };

    const aDelete = await fetch(`${BASE_URL}/api/progress?id=${bProgress.id}`, {
      method: "DELETE",
      headers: authed(a.jar),
    });
    expect(aDelete.status).toBe(200);

    const bList = await fetch(`${BASE_URL}/api/progress`, { headers: authed(b.jar) });
    const { progress } = (await bList.json()) as { progress: { slug: string }[] };
    expect(progress.some((p) => p.slug === "mirtazapine")).toBe(true);
  });

  test("6. User A clearing search history does not affect B's history", async () => {
    const a = await createTestUser("idora", 6);
    const b = await createTestUser("idorb", 6);

    await fetch(`${BASE_URL}/api/search-history`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ query: "b-persistent-query-clomipramine" }),
    });

    // A clears ALL search history (own scope only)
    const aClear = await fetch(`${BASE_URL}/api/search-history`, {
      method: "DELETE",
      headers: authed(a.jar),
    });
    expect(aClear.status).toBe(200);

    // B's history is intact
    const bList = await fetch(`${BASE_URL}/api/search-history`, { headers: authed(b.jar) });
    const { history } = (await bList.json()) as { history: { query: string }[] };
    expect(history.some((h) => h.query === "b-persistent-query-clomipramine")).toBe(true);
  });

  test("7. User A's bookmark upsert cannot overwrite B's bookmark (same type+slug)", async () => {
    const a = await createTestUser("idora", 7);
    const b = await createTestUser("idorb", 7);

    // B bookmarks venlafaxine
    await fetch(`${BASE_URL}/api/bookmarks`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(b.jar) },
      body: JSON.stringify({ type: "drug", slug: "venlafaxine", title: "B's Venlafaxine" }),
    });

    // A "upserts" the same type+slug — must create A's OWN row, not touch B's
    const aUpsert = await fetch(`${BASE_URL}/api/bookmarks`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(a.jar) },
      body: JSON.stringify({ type: "drug", slug: "venlafaxine", title: "A's Venlafaxine" }),
    });
    expect(aUpsert.status).toBe(200);

    const bList = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(b.jar) });
    const { bookmarks } = (await bList.json()) as { bookmarks: BookmarkRow[] };
    const bRow = bookmarks.find((bm) => bm.slug === "venlafaxine");
    // Server resolves the canonical title; client-supplied titles are not authoritative.
    expect(bRow?.title).toBe("Venlafaxine");
  });

  test("8. Bookmark writes are scoped to the session user (body-supplied userId ignored)", async () => {
    const a = await createTestUser("idora", 8);
    const b = await createTestUser("idorb", 8);

    // A posts a bookmark claiming B's userId in the body
    const res = await fetch(`${BASE_URL}/api/bookmarks`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(a.jar) },
      body: JSON.stringify({
        userId: b.userId, // attacker-controlled field — must be ignored
        type: "drug",
        slug: "duloxetine",
        title: "Duloxetine",
      }),
    });
    expect(res.status).toBe(200);

    // The bookmark belongs to A, not B
    const bList = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(b.jar) });
    const { bookmarks } = (await bList.json()) as { bookmarks: BookmarkRow[] };
    expect(bookmarks.some((bm) => bm.slug === "duloxetine")).toBe(false);
    const aList = await fetch(`${BASE_URL}/api/bookmarks`, { headers: authed(a.jar) });
    const aData = (await aList.json()) as { bookmarks: BookmarkRow[] };
    expect(aData.bookmarks.some((bm) => bm.slug === "duloxetine")).toBe(true);
  });

  test("9. Progress writes are scoped to the session user", async () => {
    const a = await createTestUser("idora", 9);
    const b = await createTestUser("idorb", 9);

    const res = await fetch(`${BASE_URL}/api/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authed(a.jar) },
      body: JSON.stringify({
        userId: b.userId, // ignored — scoped to the session user
        type: "drug",
        slug: "citalopram",
        title: "Citalopram",
      }),
    });
    expect(res.status).toBe(200);

    const bList = await fetch(`${BASE_URL}/api/progress`, { headers: authed(b.jar) });
    const { progress } = (await bList.json()) as { progress: { slug: string }[] };
    expect(progress.some((p) => p.slug === "citalopram")).toBe(false);
  });

  test("10. Unauthenticated access to account-scoped APIs is rejected (401)", async () => {
    const endpoints = [
      { path: "/api/bookmarks", method: "GET" },
      { path: "/api/progress", method: "GET" },
      { path: "/api/search-history", method: "GET" },
      { path: "/api/bookmarks", method: "POST" },
      { path: "/api/progress", method: "POST" },
      { path: "/api/bookmarks", method: "DELETE" },
      { path: "/api/role", method: "POST" },
    ];
    for (const endpoint of endpoints) {
      const url = endpoint.path === "/api/role" ? `${BASE_URL}/api/auth/role` : `${BASE_URL}${endpoint.path}`;
      const res = await fetch(url, {
        method: endpoint.method,
        headers: endpoint.method === "POST" ? { "Content-Type": "application/json" } : {},
        body: endpoint.method === "POST" ? JSON.stringify({}) : undefined,
      });
      expect(`${endpoint.method} ${endpoint.path}: ${res.status}`).toBe(
        `${endpoint.method} ${endpoint.path}: 401`
      );
    }
  });
});
