import "server-only";

import { createHash } from "crypto";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db";

/**
 * DB-backed login rate limiting / temporary lockout.
 *
 * Dimensions tracked per failed attempt (LoginAttempt rows):
 *   1. account-wide          (sha256(identifier), "*")
 *   2. account + source pair (sha256(identifier), sha256(source))
 *   3. source-wide           ("*", sha256(source))
 *
 * Properties:
 *   - configurable threshold + time window (RATE_LIMIT_CONFIG)
 *   - temporary lockout with bounded escalation (doubling, capped)
 *   - automatic expiry: windows reset and lockouts lapse with time;
 *     there is NO permanent lock
 *   - successful login resets the account's counters
 *   - enforcement happens BEFORE expensive bcrypt verification
 *   - the client cannot control or reset counters — the source is derived
 *     server-side from request headers, and the identifier is normalized
 *     server-side; neither is accepted from the request body
 *   - account+pair lockouts do not lock out every user globally: the
 *     source-wide threshold is deliberately higher so one attacker cannot
 *     trivially deny service to all users sharing a network address
 *   - no account enumeration: lockout responses are identical whether or
 *     not the identifier corresponds to a real account (all rate-limit
 *     checks run before the user lookup, and failures are recorded for
 *     unknown identifiers too)
 */

export const RATE_LIMIT_CONFIG = {
  /** failures per window before lockout (account + pair dimensions) */
  maxFailures: 5,
  /** failures per window before lockout (source dimension, higher by design) */
  sourceMaxFailures: 20,
  /** sliding-ish failure counting window */
  windowMs: 15 * 60 * 1000, // 15 minutes
  /** first lockout duration */
  baseLockoutMs: 5 * 60 * 1000, // 5 minutes
  /** escalation cap */
  maxLockoutMs: 30 * 60 * 1000, // 30 minutes
} as const;

/**
 * SIGNUP abuse throttling (Security Objective: bcrypt abuse protection).
 *
 * Signup runs an expensive bcrypt hash (cost 12) on EVERY well-formed
 * request — known email or not — as its timing-equalisation measure. That
 * makes the endpoint a CPU-abuse target: an unauthenticated caller can
 * make the server burn hash cycles at will. These counters throttle the
 * attempt itself (not failures), BEFORE the bcrypt work.
 *
 * Dimensions tracked per signup attempt (LoginAttempt rows, namespaced
 * so they never collide with login identifiers — login identifiers are
 * email addresses, which always contain "@"):
 *   1. per-source   (SIGNUP_IDENTIFIER_HASH, sha256(source)) — rotating
 *      the submitted email does NOT reset or grow the budget
 *   2. global       (SIGNUP_IDENTIFIER_HASH, "*") — bounded backstop so
 *      many forged forwarding-header "sources" cannot bypass entirely
 *
 * Enumeration safety: the counters are keyed on the SOURCE only — never
 * on the submitted email — and the check runs before any user lookup, so
 * throttling behaviour is identical for registered and unregistered
 * addresses. A 429 is never an account-existence signal.
 *
 * Unknown-source mode: when TRUSTED_PROXY_HEADERS is unset (direct
 * exposure), every caller shares the "unknown" source bucket. That is
 * the same accepted property as login throttling in direct-exposure
 * mode: abuse from one address can throttle the shared bucket, but the
 * lockout is time-bounded (max 30 minutes) and never permanent.
 */
export const SIGNUP_RATE_LIMIT_CONFIG = {
  /** well-formed signup attempts per source per window */
  maxAttemptsPerSource: 10,
  /** well-formed signup attempts across ALL sources per window (backstop) */
  maxAttemptsGlobal: 300,
  /** counting window */
  windowMs: 15 * 60 * 1000, // 15 minutes
  /** first lockout duration */
  baseLockoutMs: 10 * 60 * 1000, // 10 minutes
  /** escalation cap */
  maxLockoutMs: 30 * 60 * 1000, // 30 minutes
} as const;

/**
 * Identifier namespace for signup throttling rows. Login identifiers are
 * lowercased email addresses (they always contain "@"), so this literal
 * can never collide with a login dimension.
 */
const SIGNUP_IDENTIFIER = "signup";

export const SIGNUP_IDENTIFIER_HASH = hashDimension(SIGNUP_IDENTIFIER);

/** "*" sentinel used for the "any" side of each dimension. */
const ANY = "*";

const SOURCE_HEADER_CANDIDATES = [
  "x-forwarded-for",
  "x-real-ip",
  "cf-connecting-ip",
] as const;

/**
 * Derive the client source SERVER-SIDE from request headers.
 * Never trusted from a body field or query parameter.
 */
export function getClientSource(req: NextRequest | Request): string {
  if (process.env.TRUSTED_PROXY_HEADERS !== "1") return "unknown";
  for (const header of SOURCE_HEADER_CANDIDATES) {
    const value = req.headers.get(header);
    if (value) {
      const first = value.split(",")[0].trim();
      if (first) return first;
    }
  }
  return "unknown";
}

export function hashDimension(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

export interface RateLimitDecision {
  allowed: boolean;
  /** seconds until the active lockout expires (0 when allowed) */
  retryAfterSeconds: number;
}

// dimensions() returns the three counter rows for an (identifier, source)
// attempt — callers pass raw values, hashing happens here only.
function dimensions(identifier: string, source: string) {
  const identifierHash = hashDimension(identifier);
  const sourceHash = hashDimension(source);
  return [
    // account + source pair
    { identifierHash, sourceHash, maxFailures: RATE_LIMIT_CONFIG.maxFailures },
    // account-wide (any source)
    { identifierHash, sourceHash: ANY, maxFailures: RATE_LIMIT_CONFIG.maxFailures },
    // source-wide (any account) — higher threshold by design
    { identifierHash: ANY, sourceHash, maxFailures: RATE_LIMIT_CONFIG.sourceMaxFailures },
  ];
}

function lockoutDuration(level: number): number {
  const escalated = RATE_LIMIT_CONFIG.baseLockoutMs * Math.pow(2, level);
  return Math.min(escalated, RATE_LIMIT_CONFIG.maxLockoutMs);
}

/**
 * Check whether a login attempt is currently allowed. Runs BEFORE any
 * bcrypt work. Unknown and real identifiers follow the exact same path,
 * so this leaks nothing about account existence.
 */
export async function checkLoginAllowed(
  identifier: string,
  source: string
): Promise<RateLimitDecision> {
  const keys = dimensions(identifier, source);
  let blockedUntil: Date | null = null;

  for (const key of keys) {
    const row = await db.loginAttempt.findUnique({
      where: {
        identifierHash_sourceHash: {
          identifierHash: key.identifierHash,
          sourceHash: key.sourceHash,
        },
      },
    });
    if (!row) continue;
    if (row.lockoutUntil && row.lockoutUntil.getTime() > Date.now()) {
      if (!blockedUntil || row.lockoutUntil > blockedUntil) {
        blockedUntil = row.lockoutUntil;
      }
    }
  }

  if (blockedUntil) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((blockedUntil.getTime() - Date.now()) / 1000)
    );
    return { allowed: false, retryAfterSeconds };
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Record a failed login (unknown OR wrong password). Maintains the three
 * counter rows with window reset, threshold detection, and bounded
 * escalation. Safe to call for identifiers that do not correspond to real
 * accounts.
 */
export async function recordLoginFailure(
  identifier: string,
  source: string,
  options: { sourceOnly?: boolean } = {}
): Promise<void> {
  // When the attempt was already counted up front by claimLoginAttempt (the
  // account dimensions), only the source-wide spraying counter is added here.
  const all = dimensions(identifier, source);
  const keys = options.sourceOnly ? all.slice(2) : all;

  for (const key of keys) {
    // Atomic, race-safe counting (concurrent first failures cannot collide on
    // the unique row, and concurrent failures each count exactly once).
    const row = await bumpCounter(key.identifierHash, key.sourceHash, RATE_LIMIT_CONFIG.windowMs);
    if (row.failureCount >= key.maxFailures) {
      // Escalation only grows while the attacker keeps failing within/after
      // lockouts, and the duration is capped at maxLockoutMs.
      await tryTakeLockout(row, lockoutDuration(row.escalationLevel));
    }
  }
}

/**
 * Record a successful login — resets the ACCOUNT's counters (account-wide
 * and account+source rows). The source-wide row is intentionally NOT reset
 * by a single success so spraying cannot be reset by interleaved successes.
 */
export async function recordLoginSuccess(
  identifier: string,
  source: string
): Promise<void> {
  const identifierHash = hashDimension(identifier);
  const sourceHash = hashDimension(source);
  const resetKeys = [
    { identifierHash, sourceHash },
    { identifierHash, sourceHash: ANY },
  ];
  for (const key of resetKeys) {
    await db.loginAttempt.updateMany({
      where: {
        identifierHash: key.identifierHash,
        sourceHash: key.sourceHash,
      },
      data: {
        failureCount: 0,
        lockoutUntil: null,
        escalationLevel: 0,
        windowStart: new Date(),
      },
    });
  }
}

/** Test/ops helper — clear all rate-limit rows (never used by auth routes). */
export async function resetRateLimitState(): Promise<void> {
  await db.loginAttempt.deleteMany({});
}

// ─── Signup abuse throttling ────────────────────────────────────────────────

/** Prisma unique-constraint violation code (concurrent counter creation). */
function isUniqueConstraintViolationCode(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: unknown }).code === "P2002"
  );
}

/** The two counter rows a signup attempt maintains (source-keyed only). */
function signupDimensions(source: string) {
  const sourceHash = hashDimension(source);
  return [
    {
      identifierHash: SIGNUP_IDENTIFIER_HASH,
      sourceHash,
      maxAttempts: SIGNUP_RATE_LIMIT_CONFIG.maxAttemptsPerSource,
    },
    {
      identifierHash: SIGNUP_IDENTIFIER_HASH,
      sourceHash: ANY,
      maxAttempts: SIGNUP_RATE_LIMIT_CONFIG.maxAttemptsGlobal,
    },
  ];
}

function isSignupWindowStale(windowStart: Date): boolean {
  return Date.now() - windowStart.getTime() >= SIGNUP_RATE_LIMIT_CONFIG.windowMs;
}

function signupLockoutDuration(level: number): number {
  const escalated =
    SIGNUP_RATE_LIMIT_CONFIG.baseLockoutMs * Math.pow(2, level);
  return Math.min(escalated, SIGNUP_RATE_LIMIT_CONFIG.maxLockoutMs);
}

/**
 * Check whether a signup attempt from this source is currently allowed.
 * Runs BEFORE any bcrypt work and before any user lookup — identical for
 * registered and unregistered emails, so it leaks nothing.
 */
export async function checkSignupAllowed(
  source: string
): Promise<RateLimitDecision> {
  const keys = signupDimensions(source);
  let blockedUntil: Date | null = null;

  for (const key of keys) {
    const row = await db.loginAttempt.findUnique({
      where: {
        identifierHash_sourceHash: {
          identifierHash: key.identifierHash,
          sourceHash: key.sourceHash,
        },
      },
    });
    if (!row) continue;
    if (row.lockoutUntil && row.lockoutUntil.getTime() > Date.now()) {
      if (!blockedUntil || row.lockoutUntil > blockedUntil) {
        blockedUntil = row.lockoutUntil;
      }
    }
  }

  if (blockedUntil) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((blockedUntil.getTime() - Date.now()) / 1000)
    );
    return { allowed: false, retryAfterSeconds };
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

/**
 * Record a signup attempt that is about to consume the expensive resource
 * (bcrypt). Called immediately after checkSignupAllowed passes — BEFORE
 * the bcrypt work — so every costly attempt is counted exactly once, on
 * both the new-account and the existing-email (uniform response) paths.
 * Blocked (429) attempts are NOT recorded: they never reach the resource.
 *
 * Counting is identical for every email, so the counters themselves are
 * not an account-existence oracle.
 */
export async function recordSignupAttempt(
  source: string
): Promise<void> {
  const now = new Date();
  const keys = signupDimensions(source);

  for (const key of keys) {
    let existing = await db.loginAttempt.findUnique({
      where: {
        identifierHash_sourceHash: {
          identifierHash: key.identifierHash,
          sourceHash: key.sourceHash,
        },
      },
    });

    if (!existing) {
      try {
        await db.loginAttempt.create({
          data: {
            identifierHash: key.identifierHash,
            sourceHash: key.sourceHash,
            failureCount: 1,
            windowStart: now,
            lastFailureAt: now,
          },
        });
        continue;
      } catch (error) {
        // A concurrent attempt from the same source created the row first.
        // Fall through to the update path so THIS attempt is still counted
        // (and so a race never surfaces as a 500 to the user).
        if (!isUniqueConstraintViolationCode(error)) throw error;
        existing = await db.loginAttempt.findUnique({
          where: {
            identifierHash_sourceHash: {
              identifierHash: key.identifierHash,
              sourceHash: key.sourceHash,
            },
          },
        });
        if (!existing) continue; // row vanished (test reset) — nothing to do
      }
    }

    // Window expired? Start a fresh window at 1 attempt.
    if (isSignupWindowStale(existing.windowStart)) {
      await db.loginAttempt.update({
        where: { id: existing.id },
        data: {
          failureCount: 1,
          windowStart: now,
          lastFailureAt: now,
          escalationLevel:
            existing.lockoutUntil && existing.lockoutUntil > now
              ? existing.escalationLevel
              : Math.max(0, existing.escalationLevel - 1),
          lockoutUntil: null,
        },
      });
      continue;
    }

    // Atomic increment (see recordLoginFailure).
    const updated = await db.loginAttempt.update({
      where: { id: existing.id },
      data: { failureCount: { increment: 1 }, lastFailureAt: now },
      select: { failureCount: true, escalationLevel: true },
    });

    if (updated.failureCount >= key.maxAttempts) {
      const level = updated.escalationLevel;
      await db.loginAttempt.update({
        where: { id: existing.id },
        data: {
          lockoutUntil: new Date(now.getTime() + signupLockoutDuration(level)),
          escalationLevel: Math.min(level + 1, 10),
        },
      });
    }
  }
}

// ─── Atomic claim (closes the check-then-act race) ─────────────────────────

/**
 * checkLoginAllowed() followed by recordLoginFailure() is a time-of-check /
 * time-of-use gap: a burst of N parallel requests all pass the check before
 * any failure is recorded, so an attacker gets N guesses instead of 5.
 *
 * claimLoginAttempt() closes it. It counts the attempt BEFORE the password is
 * verified, with an atomic database increment, on the two ACCOUNT dimensions
 * (account+source and account-wide). Exactly one request can win the
 * conditional lockout update when the threshold is reached; every other
 * concurrent request loses it and is rejected. A successful login resets
 * these counters (recordLoginSuccess), so legitimate users never accumulate.
 * The source-wide spraying dimension still counts failures only, so a shared
 * address is not locked by many successful logins.
 *
 * Callers: claim -> verify -> on failure recordLoginFailure(..., {sourceOnly})
 *                          -> on success recordLoginSuccess.
 */

type CounterRow = { id: string; failureCount: number; escalationLevel: number };

async function bumpCounter(
  identifierHash: string,
  sourceHash: string,
  windowMs: number
): Promise<CounterRow> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const now = new Date();
    const row = await db.loginAttempt.findUnique({
      where: { identifierHash_sourceHash: { identifierHash, sourceHash } },
    });
    if (!row) {
      try {
        return await db.loginAttempt.create({
          data: { identifierHash, sourceHash, failureCount: 1, windowStart: now, lastFailureAt: now },
          select: { id: true, failureCount: true, escalationLevel: true },
        });
      } catch (error) {
        if (!isUniqueConstraintViolationCode(error)) throw error;
        continue; // a concurrent request created the row first: retry as an update
      }
    }
    if (now.getTime() - row.windowStart.getTime() >= windowMs) {
      const escalationLevel =
        row.lockoutUntil && row.lockoutUntil > now
          ? row.escalationLevel
          : Math.max(0, row.escalationLevel - 1);
      // Conditional on the old windowStart so only one racer resets the window.
      const reset = await db.loginAttempt.updateMany({
        where: { id: row.id, windowStart: row.windowStart },
        data: { failureCount: 1, windowStart: now, lastFailureAt: now, escalationLevel, lockoutUntil: null },
      });
      if (reset.count === 1) return { id: row.id, failureCount: 1, escalationLevel };
      continue;
    }
    return db.loginAttempt.update({
      where: { id: row.id },
      data: { failureCount: { increment: 1 }, lastFailureAt: now },
      select: { id: true, failureCount: true, escalationLevel: true },
    });
  }
  throw new Error("rate limit counter contention");
}

/**
 * Take the lockout if it is not already active. Returns true for exactly one
 * of any number of concurrent callers (the conditional update matches once).
 */
async function tryTakeLockout(
  row: CounterRow,
  durationMs: number
): Promise<boolean> {
  const now = new Date();
  const result = await db.loginAttempt.updateMany({
    where: { id: row.id, OR: [{ lockoutUntil: null }, { lockoutUntil: { lte: now } }] },
    data: {
      lockoutUntil: new Date(now.getTime() + durationMs),
      escalationLevel: Math.min(row.escalationLevel + 1, 10),
    },
  });
  return result.count === 1;
}

/**
 * Count one login attempt atomically and decide whether it may proceed.
 * Attempts 1..(max-1) proceed; the attempt that reaches the threshold proceeds
 * only if it wins the lockout (so exactly `max` attempts per window, however
 * many requests arrive in parallel); everything after is rejected.
 */
export async function claimLoginAttempt(
  identifier: string,
  source: string
): Promise<RateLimitDecision> {
  const blocked = await checkLoginAllowed(identifier, source);
  if (!blocked.allowed) return blocked;

  const identifierHash = hashDimension(identifier);
  const accountKeys = [hashDimension(source), ANY];
  let rejected = false;
  for (const sourceHash of accountKeys) {
    const row = await bumpCounter(identifierHash, sourceHash, RATE_LIMIT_CONFIG.windowMs);
    if (row.failureCount >= RATE_LIMIT_CONFIG.maxFailures) {
      const won = await tryTakeLockout(row, lockoutDuration(row.escalationLevel));
      if (!won) rejected = true;
    }
  }
  if (rejected) {
    const after = await checkLoginAllowed(identifier, source);
    return after.allowed ? { allowed: false, retryAfterSeconds: 1 } : after;
  }
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Atomic equivalent of checkSignupAllowed() + recordSignupAttempt(). */
export async function claimSignupAttempt(
  source: string
): Promise<RateLimitDecision> {
  const blocked = await checkSignupAllowed(source);
  if (!blocked.allowed) return blocked;

  let rejected = false;
  for (const key of signupDimensions(source)) {
    const row = await bumpCounter(key.identifierHash, key.sourceHash, SIGNUP_RATE_LIMIT_CONFIG.windowMs);
    if (row.failureCount >= key.maxAttempts) {
      const won = await tryTakeLockout(row, signupLockoutDuration(row.escalationLevel));
      if (!won) rejected = true;
    }
  }
  if (rejected) {
    const after = await checkSignupAllowed(source);
    return after.allowed ? { allowed: false, retryAfterSeconds: 1 } : after;
  }
  return { allowed: true, retryAfterSeconds: 0 };
}
