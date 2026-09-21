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

/** "*" sentinel used for the "any" side of each dimension. */
const ANY = "*";

const SOURCE_HEADER_CANDIDATES = [
  "x-forwarded-for",
  "x-real-ip",
  "cf-connecting-ip",
] as const;

/**
 * Forwarding headers are trusted only when the deployment explicitly opts in.
 * A direct/public deployment must leave TRUSTED_PROXY_HEADERS disabled because
 * clients can otherwise spoof these headers and evade source throttling.
 */
export function getClientSource(req: NextRequest | Request): string {
  if (process.env.TRUSTED_PROXY_HEADERS !== "1") return "unknown";
  for (const header of SOURCE_HEADER_CANDIDATES) {
    const value = req.headers.get(header);
    if (!value) continue;
    const first = value.split(",")[0].trim();
    if (first) return first;
  }
  return "unknown";
}
