/**
 * SIGNUP ABUSE PROTECTION REGRESSION (bcrypt resource throttling)
 *
 * The signup endpoint deliberately performs an expensive bcrypt hash
 * (cost 12) on EVERY well-formed request — known email or not — as its
 * timing-equalisation measure. That makes it a CPU-abuse target for
 * unauthenticated callers. The closure adds source-keyed throttling that
 * runs BEFORE the bcrypt work:
 *
 *   - per-source budget: 10 well-formed signup attempts / 15 min
 *   - bounded global backstop: 300 attempts / 15 min across all sources
 *   - time-bounded lockout with escalation, capped at 30 minutes
 *
 * Enumeration safety contract of the throttle itself:
 *   - the 429 response is byte-identical for registered and unregistered
 *     emails (the counters are keyed on the source, never the email)
 *   - the check runs before any user lookup and before any bcrypt work
 *   - a locked-out source cannot be distinguished-from/compensated-by
 *     rotating the submitted email
 */

import { describe, expect, test } from "bun:test";
import { createHash } from "crypto";
import {
  BASE_URL,
  createTestUser,
  ensureServer,
  testDb,
  uniqueEmail,
  uniqueSource,
} from "./helpers/server";

/** Matches the per-source budget in src/lib/rate-limit.ts. */
const PER_SOURCE_LIMIT = 10;

/**
 * sha256("signup") — the signup throttling namespace in
 * src/lib/rate-limit.ts (login identifiers are lowercased emails, which
 * always contain "@", so this can never collide with a login dimension).
 * Computed locally because the module is marked server-only and cannot be
 * imported into the bun test runtime.
 */
const SIGNUP_IDENTIFIER_HASH = createHash("sha256")
  .update("signup", "utf8")
  .digest("hex");

async function postSignup(
  body: Record<string, unknown>,
  source?: string
): Promise<Response> {
  return fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(source ? { "x-forwarded-for": source } : {}),
    },
    body: JSON.stringify(body),
  });
}

describe("signup abuse protection (pre-bcrypt throttling)", () => {
  test("1. repeated unknown-email signups from one source are throttled with 429 + Retry-After", async () => {
    await ensureServer();
    const source = uniqueSource();

    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      const res = await postSignup(
        {
          name: "Abuse Probe",
          email: uniqueEmail(`abuse1-${i}`),
          password: "abuse-password-123",
        },
        source
      );
      expect(res.status).toBe(200);
    }

    const blocked = await postSignup(
      {
        name: "Abuse Probe",
        email: uniqueEmail("abuse1-blocked"),
        password: "abuse-password-123",
      },
      source
    );
    expect(blocked.status).toBe(429);
    expect(Number(blocked.headers.get("retry-after"))).toBeGreaterThan(0);
  }, 30000);

  test("2. repeated known-email signups hit the SAME lockout point", async () => {
    await ensureServer();
    const user = await createTestUser("abuse2", 2);
    const source = uniqueSource();

    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      const res = await postSignup(
        {
          name: "Abuse Probe",
          email: user.email, // already-registered address
          password: "abuse-password-123",
        },
        source
      );
      expect(res.status).toBe(200);
    }

    const blocked = await postSignup(
      {
        name: "Abuse Probe",
        email: user.email,
        password: "abuse-password-123",
      },
      source
    );
    // The existing-email path consumes the same budget and locks at the
    // same attempt count — the throttle is not email-dependent.
    expect(blocked.status).toBe(429);
  }, 30000);

  test("3. the 429 response is identical for existing and unknown emails (throttle is not an enumeration oracle)", async () => {
    await ensureServer();
    const user = await createTestUser("abuse3", 3);
    const source = uniqueSource();

    // Exhaust the source budget (each attempt is a uniform 200).
    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      const res = await postSignup(
        {
          name: "Abuse Probe",
          email: uniqueEmail(`abuse3-${i}`),
          password: "abuse-password-123",
        },
        source
      );
      expect(res.status).toBe(200);
    }

    const known = await postSignup(
      { name: "A", email: user.email, password: "abuse-password-123" },
      source
    );
    const unknown = await postSignup(
      { name: "A", email: uniqueEmail("abuse3-unknown"), password: "abuse-password-123" },
      source
    );

    expect(known.status).toBe(429);
    expect(unknown.status).toBe(429);
    expect(await known.text()).toBe(await unknown.text());
    const knownBody = (await postSignup(
      { name: "A", email: user.email, password: "abuse-password-123" },
      source
    ).then((r) => r.json())) as { error: string };
    expect(knownBody.error).toContain("Too many");
    expect(knownBody.error.toLowerCase()).not.toContain("account");
    expect(knownBody.error.toLowerCase()).not.toContain("exists");
  }, 30000);

  test("4. lockout is enforced BEFORE bcrypt and user creation (no account row is written)", async () => {
    await ensureServer();
    const source = uniqueSource();

    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      const res = await postSignup(
        {
          name: "Abuse Probe",
          email: uniqueEmail(`abuse4-${i}`),
          password: "abuse-password-123",
        },
        source
      );
      expect(res.status).toBe(200);
    }

    // A well-formed signup for a brand-new email is refused AND performs
    // no user creation — proving the gate runs before the expensive work.
    const freshEmail = uniqueEmail("abuse4-never-created");
    const blocked = await postSignup(
      { name: "Never Created", email: freshEmail, password: "abuse-password-123" },
      source
    );
    expect(blocked.status).toBe(429);
    const created = await testDb().user.findUnique({ where: { email: freshEmail } });
    expect(created).toBeNull();
  }, 30000);

  test("5. a locked-out source does not lock out other sources", async () => {
    await ensureServer();
    const sourceA = uniqueSource();

    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      await postSignup(
        {
          name: "Abuse Probe",
          email: uniqueEmail(`abuse5a-${i}`),
          password: "abuse-password-123",
        },
        sourceA
      );
    }
    const blockedA = await postSignup(
      { name: "A", email: uniqueEmail("abuse5a-block"), password: "abuse-password-123" },
      sourceA
    );
    expect(blockedA.status).toBe(429);

    // A different source is unaffected by source A's lockout.
    const sourceB = uniqueSource();
    const resB = await postSignup(
      { name: "Other Client", email: uniqueEmail("abuse5b"), password: "abuse-password-123" },
      sourceB
    );
    expect(resB.status).toBe(200);
  }, 30000);

  test("6. requests with no forwarding header share the bounded 'unknown' source bucket (direct-exposure protection)", async () => {
    await ensureServer();

    // No x-forwarded-for at all — in trusted-proxy mode these all derive
    // the shared "unknown" source, exactly as they would in direct mode.
    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      const res = await postSignup({
        name: "Unknown Source",
        email: uniqueEmail(`abuse6-${i}`),
        password: "abuse-password-123",
      });
      expect(res.status).toBe(200);
    }

    const blocked = await postSignup({
      name: "Unknown Source",
      email: uniqueEmail("abuse6-blocked"),
      password: "abuse-password-123",
    });
    expect(blocked.status).toBe(429);

    // The shared "unknown" bucket being locked does NOT lock explicit
    // sources — the buckets are independent.
    const explicit = await postSignup(
      { name: "Explicit Source", email: uniqueEmail("abuse6-explicit"), password: "abuse-password-123" },
      uniqueSource()
    );
    expect(explicit.status).toBe(200);
  }, 30000);

  test("7. the bounded global backstop caps signup volume across all sources", async () => {
    await ensureServer();
    // The "any source" side of the counter is stored as the literal "*"
    // sentinel (same convention as the login rate limiter).
    const anySourceHash = "*";

    // One real attempt so the global row exists, then move the row to the
    // edge of the backstop threshold (299 of 300 within the window).
    const warmupSource = uniqueSource();
    const warmup = await postSignup(
      { name: "Global Probe", email: uniqueEmail("abuse7-warm"), password: "abuse-password-123" },
      warmupSource
    );
    expect(warmup.status).toBe(200);

    const updated = await testDb().loginAttempt.updateMany({
      where: { identifierHash: SIGNUP_IDENTIFIER_HASH, sourceHash: anySourceHash },
      data: { failureCount: 299, windowStart: new Date(), lockoutUntil: null, escalationLevel: 0 },
    });
    expect(updated.count).toBe(1);

    // This attempt crosses the global threshold and trips the backstop...
    const tripped = await postSignup(
      { name: "Global Probe", email: uniqueEmail("abuse7-trip"), password: "abuse-password-123" },
      uniqueSource()
    );
    expect(tripped.status).toBe(200);

    // ...so the NEXT attempt from yet another fresh source is 429.
    const blocked = await postSignup(
      { name: "Global Probe", email: uniqueEmail("abuse7-blocked"), password: "abuse-password-123" },
      uniqueSource()
    );
    expect(blocked.status).toBe(429);
    expect(Number(blocked.headers.get("retry-after"))).toBeGreaterThan(0);
    // The backstop lockout is bounded (max 30 minutes).
    expect(Number(blocked.headers.get("retry-after"))).toBeLessThanOrEqual(1800);

    // Restore state so later test files are not blocked by the deliberately
    // engaged global backstop (the row is recreated on demand by any later
    // signup attempt).
    await testDb().loginAttempt.deleteMany({
      where: { identifierHash: SIGNUP_IDENTIFIER_HASH, sourceHash: anySourceHash },
    });
  }, 30000);

  test("8. lockout is time-based and expires automatically", async () => {
    await ensureServer();
    const source = uniqueSource();

    for (let i = 0; i < PER_SOURCE_LIMIT; i++) {
      await postSignup(
        {
          name: "Abuse Probe",
          email: uniqueEmail(`abuse8-${i}`),
          password: "abuse-password-123",
        },
        source
      );
    }
    const blocked = await postSignup(
      { name: "A", email: uniqueEmail("abuse8-block"), password: "abuse-password-123" },
      source
    );
    expect(blocked.status).toBe(429);

    // Manually expiring the lockouts (per-source AND the global backstop,
    // which test 7 deliberately left engaged) proves the block is purely
    // time-based state.
    const sourceHash = createHash("sha256").update(source).digest("hex");
    await testDb().loginAttempt.updateMany({
      where: {
        identifierHash: SIGNUP_IDENTIFIER_HASH,
        OR: [{ sourceHash }, { sourceHash: "*" }],
      },
      data: { lockoutUntil: new Date(Date.now() - 1000) },
    });

    const after = await postSignup(
      { name: "A", email: uniqueEmail("abuse8-after"), password: "abuse-password-123" },
      source
    );
    expect(after.status).toBe(200);
  }, 30000);
});
