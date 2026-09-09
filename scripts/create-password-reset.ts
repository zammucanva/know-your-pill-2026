/**
 * Operator script: create a single-use password reset token for an account.
 *
 * Usage:
 *   bun scripts/create-password-reset.ts <email> [origin]
 *
 *   <email>  — the account email (case-insensitive)
 *   [origin] — optional base URL of the deployed app for the printed link,
 *              e.g. https://kyp.example.com (default: http://localhost:3000)
 *
 * Environment:
 *   DATABASE_URL — SQLite file URL of the target database.
 *                  Defaults to the repository's db/custom.db.
 *
 * SECURITY NOTES:
 *   - This is the VERIFIED OPERATOR PROCESS for password reset delivery while
 *     no email provider is configured. The operator is responsible for
 *     verifying the requester's identity out-of-band BEFORE running this
 *     script, and for delivering the printed token/link through a trusted
 *     channel.
 *   - The raw token exists ONLY in this script's stdout (the delivery
 *     artifact). It is never written to any log file, database, or report.
 *   - Creating a new token invalidates all previous outstanding tokens for
 *     the account.
 *   - The token is single-use and expires after 30 minutes.
 *   - Completing the reset (at /reset) revokes ALL of the account's sessions.
 *
 * This script never resets passwords itself and never prints any stored
 * credential material (hashes, emails of other users, etc.).
 */

import { randomBytes, createHash } from "crypto";
import { resolve } from "path";
import { PrismaClient } from "@prisma/client";

const RESET_TTL_MINUTES = 30;

const repoRoot = resolve(import.meta.dir, "..");
const DEFAULT_DB_URL = `file:${repoRoot}/db/custom.db`;

const emailArg = process.argv[2];
if (!emailArg) {
  console.error("Usage: bun scripts/create-password-reset.ts <email> [origin]");
  process.exit(1);
}
const origin = process.argv[3] || process.env.KYP_ORIGIN || "http://localhost:3000";

const normalizedEmail = emailArg.toLowerCase().trim();
const dbUrl = process.env.DATABASE_URL || DEFAULT_DB_URL;

const prisma = new PrismaClient({ datasources: { db: { url: dbUrl } } });

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: { id: true, name: true, createdAt: true },
  });
  if (!user) {
    console.error(
      `No account exists for that email in ${dbUrl}. Nothing was changed.`
    );
    process.exitCode = 1;
    return;
  }

  // Invalidate all previous outstanding tokens, then mint a fresh one.
  await prisma.passwordResetToken.deleteMany({
    where: { userId: user.id, usedAt: null },
  });
  const raw = randomBytes(32).toString("base64url");
  const tokenHash = createHash("sha256").update(raw, "utf8").digest("hex");
  const expiresAt = new Date(Date.now() + RESET_TTL_MINUTES * 60 * 1000);
  await prisma.passwordResetToken.create({
    data: { tokenHash, userId: user.id, expiresAt },
  });

  console.log("Password reset token created.");
  console.log(`  Account:     ${normalizedEmail} (member since ${user.createdAt.toISOString().slice(0, 10)})`);
  console.log(`  Expires:     ${expiresAt.toISOString()} (${RESET_TTL_MINUTES} minutes)`);
  console.log(`  Single-use:  yes — all previous outstanding tokens for this account were invalidated`);
  console.log("");
  console.log("Deliver this link to the VERIFIED account owner through a trusted channel:");
  console.log(`  ${origin.replace(/\/$/, "")}/reset?token=${raw}`);
  console.log("");
  console.log("Completing the reset revokes all of the account's sessions.");
}

main()
  .catch((error) => {
    console.error("Failed:", (error as Error)?.name ?? "UnknownError");
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
