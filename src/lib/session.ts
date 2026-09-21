import "server-only";

import { createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { getSessionSecret } from "@/lib/session-secret";

/**
 * Server-side session management.
 *
 * Token design:
 *   cookie value = base64url(32 random bytes) + "." + base64url(HMAC-SHA256(secret, raw))
 *
 *   - 256 bits of cryptographic randomness per session (fixation resistance:
 *     every login mints a brand-new token; nothing client-supplied is reused)
 *   - the HMAC wrapper lets the server reject tampered/forged tokens before
 *     touching the database (signature check is timing-safe)
 *   - the database stores ONLY sha256(full signed token) — raw tokens are
 *     never persisted, so a DB leak cannot be replayed as valid cookies
 *   - the cookie carries no PII, no user id, no role, no authorization data
 *
 * Validation chain (per request):
 *   parse -> format check -> HMAC check (timing-safe) -> hash lookup ->
 *   revocation check -> expiry check -> resolve user server-side.
 */

export const SESSION_COOKIE_NAME = "kyp-session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

const RAW_TOKEN_BYTES = 32; // 256-bit
const RAW_TOKEN_B64URL_LENGTH = 43; // ceil(32 * 4 / 3) without padding
const HMAC_B64URL_LENGTH = 43;

export interface ResolvedSession {
  sessionId: string;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
    learnerType: string;\n    role: string;
    emailVerified: boolean;
  };
}

export interface IssuedSession {
  token: string;
  expiresAt: Date;
}

// ─── Token primitives ───────────────────────────────────────────────────────

function b64url(buf: Buffer): string {
  return buf.toString("base64url");
}

export function mintSessionToken(): { raw: string; signed: string } {
  const raw = b64url(randomBytes(RAW_TOKEN_BYTES));
  const sig = b64url(createHmac("sha256", getSessionSecret()).update(raw).digest());
  return { raw, signed: `${raw}.${sig}` };
}

export function hashToken(signed: string): string {
  return createHash("sha256").update(signed, "utf8").digest("hex");
}

/** Structural check — exactly two base64url segments of the expected length. */
export function isPlausibleTokenShape(signed: string): boolean {
  const parts = signed.split(".");
  if (parts.length !== 2) return false;
  const [raw, sig] = parts;
  if (raw.length !== RAW_TOKEN_B64URL_LENGTH || sig.length !== HMAC_B64URL_LENGTH) return false;
  if (!/^[A-Za-z0-9_-]+$/.test(raw) || !/^[A-Za-z0-9_-]+$/.test(sig)) return false;
  return true;
}

/** Timing-safe HMAC verification of a signed token. */
export function verifyTokenSignature(signed: string): boolean {
  if (!isPlausibleTokenShape(signed)) return false;
  const [raw, sig] = signed.split(".");
  const expected = b64url(
    createHmac("sha256", getSessionSecret()).update(raw).digest()
  );
  const a = Buffer.from(sig, "utf8");
  const b = Buffer.from(expected, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

// ─── Database-backed session lifecycle ─────────────────────────────────────

/** LOGIN: mint a fresh random session for the user and persist its hash. */
export async function createSessionForUser(userId: string): Promise<IssuedSession> {
  const { signed } = mintSessionToken();
  const expiresAt = new Date(Date.now() + SESSION_TTL_SECONDS * 1000);
  await db.session.create({
    data: {
      tokenHash: hashToken(signed),
      userId,
      expiresAt,
    },
  });
  return { token: signed, expiresAt };
}

/**
 * REQUEST: resolve the current session from the cookie, enforcing
 * signature, existence, revocation, and expiry. Returns null for any
 * failure (never throws for invalid sessions — callers treat them as
 * "not authenticated").
 */
export async function resolveSessionFromCookie(): Promise<ResolvedSession | null> {
  const jar = await cookies();
  const cookie = jar.get(SESSION_COOKIE_NAME);
  if (!cookie?.value) return null;
  return resolveSessionToken(cookie.value);
}

/** Same resolution chain for an explicit token (used by tests). */
export async function resolveSessionToken(signed: string): Promise<ResolvedSession | null> {
  try {
    if (!verifyTokenSignature(signed)) return null;
    const session = await db.session.findUnique({
      where: { tokenHash: hashToken(signed) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            learnerType: true,\n            role: true,
            emailVerified: true,
          },
        },
      },
    });
    if (!session) return null;
    if (session.revokedAt !== null) return null;
    if (session.expiresAt.getTime() <= Date.now()) return null;
    // Touch lastUsedAt (best-effort, throttled to once per minute).
    const stale = !session.lastUsedAt || Date.now() - session.lastUsedAt.getTime() > 60_000;
    if (stale) {
      await db.session
        .update({ where: { id: session.id }, data: { lastUsedAt: new Date() } })
        .catch(() => undefined);
    }
    return {
      sessionId: session.id,
      userId: session.userId,
      user: session.user,
    };
  } catch {
    return null;
  }
}

/** LOGOUT: revoke the session server-side FIRST, then clear the cookie. */
export async function revokeSessionFromCookie(): Promise<boolean> {
  const jar = await cookies();
  const cookie = jar.get(SESSION_COOKIE_NAME);
  if (!cookie?.value) return false;
  try {
    if (!verifyTokenSignature(cookie.value)) return false;
    const result = await db.session.updateMany({
      where: { tokenHash: hashToken(cookie.value), revokedAt: null },
      data: { revokedAt: new Date() },
    });
    return result.count > 0;
  } catch {
    return false;
  }
}

/** Revoke every active session for a user (e.g. security response). */
export async function revokeAllSessionsForUser(userId: string): Promise<number> {
  const result = await db.session.updateMany({
    where: { userId, revokedAt: null },
    data: { revokedAt: new Date() },
  });
  return result.count;
}

// ─── Cookie handling ────────────────────────────────────────────────────────

export function sessionCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    // Host-only cookie: deliberately no `domain` attribute.
    expires: expiresAt,
    maxAge: SESSION_TTL_SECONDS,
  };
}

export async function setSessionCookie(token: string, expiresAt: Date): Promise<void> {
  const jar = await cookies();
  jar.set(SESSION_COOKIE_NAME, token, sessionCookieOptions(expiresAt));
}

export async function clearSessionCookie(): Promise<void> {
  const jar = await cookies();
  jar.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
