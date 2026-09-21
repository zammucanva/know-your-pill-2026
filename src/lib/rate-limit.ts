import "server-only";

import { createHash } from "crypto";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db";

export const RATE_LIMIT_CONFIG = {
  maxFailures: 5,
  sourceMaxFailures: 20,
  windowMs: 15 * 60 * 1000,
  baseLockoutMs: 5 * 60 * 1000,
  maxLockoutMs: 30 * 60 * 1000,
} as const;

const ANY = "*";
const SOURCE_HEADER_CANDIDATES = ["x-forwarded-for", "x-real-ip", "cf-connecting-ip"] as const;

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

export function hashDimension(value: string): string {
  return createHash("sha256").update(value, "utf8").digest("hex");
}

export interface RateLimitDecision {
  allowed: boolean;
  retryAfterSeconds: number;
}

function dimensions(identifier: string, source: string) {
  const identifierHash = hashDimension(identifier);
  const sourceHash = hashDimension(source);
  return [
    { identifierHash, sourceHash, maxFailures: RATE_LIMIT_CONFIG.maxFailures },
    { identifierHash, sourceHash: ANY, maxFailures: RATE_LIMIT_CONFIG.maxFailures },
    { identifierHash: ANY, sourceHash, maxFailures: RATE_LIMIT_CONFIG.sourceMaxFailures },
  ];
}

function isWindowStale(windowStart: Date): boolean {
  return Date.now() - windowStart.getTime() >= RATE_LIMIT_CONFIG.windowMs;
}

function lockoutDuration(level: number): number {
  return Math.min(
    RATE_LIMIT_CONFIG.baseLockoutMs * Math.pow(2, level),
    RATE_LIMIT_CONFIG.maxLockoutMs
  );
}

export async function checkLoginAllowed(identifier: string, source: string): Promise<RateLimitDecision> {
  let blockedUntil: Date | null = null;
  for (const key of dimensions(identifier, source)) {
    const row = await db.loginAttempt.findUnique({
      where: { identifierHash_sourceHash: { identifierHash: key.identifierHash, sourceHash: key.sourceHash } },
    });
    if (row?.lockoutUntil && row.lockoutUntil.getTime() > Date.now()) {
      if (!blockedUntil || row.lockoutUntil > blockedUntil) blockedUntil = row.lockoutUntil;
    }
  }
  if (!blockedUntil) return { allowed: true, retryAfterSeconds: 0 };
  return {
    allowed: false,
    retryAfterSeconds: Math.max(1, Math.ceil((blockedUntil.getTime() - Date.now()) / 1000)),
  };
}

export async function recordLoginFailure(identifier: string, source: string): Promise<void> {
  const now = new Date();
  for (const key of dimensions(identifier, source)) {
    const existing = await db.loginAttempt.findUnique({
      where: { identifierHash_sourceHash: { identifierHash: key.identifierHash, sourceHash: key.sourceHash } },
    });

    if (!existing) {
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
    }

    if (isWindowStale(existing.windowStart)) {
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

    const failureCount = existing.failureCount + 1;
    const data: { failureCount: number; lastFailureAt: Date; lockoutUntil?: Date; escalationLevel?: number } = {
      failureCount,
      lastFailureAt: now,
    };

    if (failureCount >= key.maxFailures) {
      data.lockoutUntil = new Date(now.getTime() + lockoutDuration(existing.escalationLevel));
      data.escalationLevel = Math.min(existing.escalationLevel + 1, 10);
    }

    await db.loginAttempt.update({ where: { id: existing.id }, data });
  }
}

export async function recordLoginSuccess(identifier: string, source: string): Promise<void> {
  const identifierHash = hashDimension(identifier);
  for (const sourceHash of [hashDimension(source), ANY]) {
    await db.loginAttempt.updateMany({
      where: { identifierHash, sourceHash },
      data: { failureCount: 0, lockoutUntil: null, escalationLevel: 0, windowStart: new Date() },
    });
  }
}

export async function resetRateLimitState(): Promise<void> {
  await db.loginAttempt.deleteMany({});
}
