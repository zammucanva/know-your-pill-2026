/**
 * Account deletion (DELETE /api/auth/account) and cross-origin guard.
 *
 * Runs against the standalone production build and the ISOLATED test
 * database. The production database is never touched.
 */

import { beforeAll, describe, expect, test } from "bun:test";
import {
  BASE_URL,
  authed,
  createTestUser,
  ensureServer,
  loginAndGetJar,
  testDb,
} from "./helpers/server";

const ACCOUNT_URL = `${BASE_URL}/api/auth/account`;
const SESSION_URL = `${BASE_URL}/api/auth/session`;

function del(body: unknown, headers: Record<string, string> = {}) {
  return fetch(ACCOUNT_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

beforeAll(async () => {
  await ensureServer();
});

describe("account deletion", () => {
  test("1. unauthenticated request is rejected with 401", async () => {
    const res = await del({ confirm: "DELETE", password: "x" });
    expect(res.status).toBe(401);
  });

  test("2. missing confirmation is rejected and nothing is deleted", async () => {
    const user = await createTestUser("del", 2);
    const res = await del({ password: user.password }, authed(user.jar));
    expect(res.status).toBe(400);
    expect(await testDb().user.findUnique({ where: { id: user.userId } })).not.toBeNull();
  });

  test("3. wrong password is rejected and nothing is deleted", async () => {
    const user = await createTestUser("del", 3);
    const res = await del({ confirm: "DELETE", password: "wrong-password-1" }, authed(user.jar));
    expect(res.status).toBe(401);
    expect(await testDb().user.findUnique({ where: { id: user.userId } })).not.toBeNull();
  });

  test("4. a cross-site Origin is blocked before any work", async () => {
    const user = await createTestUser("del", 4);
    const res = await del(
      { confirm: "DELETE", password: user.password },
      { ...authed(user.jar), Origin: "https://evil.example" }
    );
    expect(res.status).toBe(403);
    expect(await testDb().user.findUnique({ where: { id: user.userId } })).not.toBeNull();
  });

  test("5. correct password + confirmation deletes the user and all their data", async () => {
    const user = await createTestUser("del", 5);
    await testDb().bookmark.create({
      data: { userId: user.userId, type: "drug", slug: "sertraline", title: "Sertraline" },
    });
    const res = await del({ confirm: "DELETE", password: user.password }, authed(user.jar));
    expect(res.status).toBe(200);

    const db = testDb();
    expect(await db.user.findUnique({ where: { id: user.userId } })).toBeNull();
    expect(await db.session.count({ where: { userId: user.userId } })).toBe(0);
    expect(await db.bookmark.count({ where: { userId: user.userId } })).toBe(0);
  });

  test("6. the old session no longer authenticates and login fails", async () => {
    const user = await createTestUser("del", 6);
    const res = await del({ confirm: "DELETE", password: user.password }, authed(user.jar));
    expect(res.status).toBe(200);

    const session = await fetch(SESSION_URL, { headers: authed(user.jar) });
    expect(((await session.json()) as { user: unknown }).user).toBeNull();

    const login = await loginAndGetJar(user.email, user.password);
    expect(login.res.status).toBe(401);
  });
});
