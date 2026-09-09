import "server-only";

import { createHash, randomBytes } from "crypto";
import { db } from "@/lib/db";
import { hashDimension } from "@/lib/rate-limit";

/**
 * Single-use password reset tokens.
 *
 * Token design:
 *   raw token = base64url(32 random bytes)  — 256 bits of entropy
 *   storage   = sha256(raw token) hex       — raw tokens are NEVER persisted,
 *                                             logged, or returned by APIs
 *
 * Lifecycle:
 *   1. A reset request (API or operator script) mints a fresh random token.
 *      Minting a new token first invalidates every outstanding (unused) token
 *      for the account, so only the latest request can complete a reset.
 *   2. The raw token travels exactly once through the delivery channel
 *      (configured email provider, or a verified operator process while no
 *      email provider is configured).
 *   3. Consuming the token is a single conditional update (single-use is
 *      race-safe): the row flips usedAt only if it was previously unused and
 *      unexpired.
 *   4. Completing a reset revokes ALL of the user's server-side sessions.
 *
 * Tokens expire after 30 minutes. Unknown tokens fail closed with a generic
 * response — token guessing is throttled through the LoginAttempt source
 * dimension (see the reset route).
 */

export const PASSWORD_RESET_TTL_MS = 30 * 60 * 1000; // 30 minutes
const RESET_TOKEN_BYTES = 32; // 256-bit

export interface MintedResetToken {
  /** Raw token — returned exactly once to the minter, never stored raw */
  raw: string;
  expiresAt: Date;
}

export function mintResetToken(): string {
  return randomBytes(RESET_TOKEN_BYTES).toString("base64url");
}

export function hashResetToken(raw: string): string {
  return createHash("sha256").update(raw, "utf8").digest("hex");
}

/**
 * Mint a fresh reset token for a user. All previously outstanding (unused)
 * tokens for the account are invalidated first, so only the newest request
 * remains usable. The raw token is returned ONCE — the caller decides the
 * delivery channel; nothing here logs or persists it in raw form.
 */
export async function createPasswordResetToken(
  userId: string,
  source?: string
): Promise<MintedResetToken> {
  await db.passwordResetToken.deleteMany({
    where: { userId, usedAt: null },
  });
  const raw = mintResetToken();
  const expiresAt = new Date(Date.now() + PASSWORD_RESET_TTL_MS);
  await db.passwordResetToken.create({
    data: {
      tokenHash: hashResetToken(raw),
      userId,
      expiresAt,
      sourceHash: source ? hashDimension(source) : null,
    },
  });
  return { raw, expiresAt };
}

/**
 * Consume a reset token — single-use and race-safe.
 *
 * Returns the owning userId when the token was valid, unused, and unexpired;
 * returns null otherwise (unknown, already used, or expired — callers MUST
 * respond identically for all three cases).
 */
export async function consumePasswordResetToken(
  raw: string
): Promise<string | null> {
  const tokenHash = hashResetToken(raw);
  const now = new Date();
  // Atomic single-use: only succeeds if the row is still unused and unexpired.
  const consumed = await db.passwordResetToken.updateMany({
    where: {
      tokenHash,
      usedAt: null,
      expiresAt: { gt: now },
    },
    data: { usedAt: now },
  });
  if (consumed.count !== 1) return null;
  const row = await db.passwordResetToken.findUnique({
    where: { tokenHash },
    select: { userId: true },
  });
  return row?.userId ?? null;
}
