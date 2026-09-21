[object Object]
/**
 * Invalidate a token after a delivery failure. The raw token is immediately
 * converted to its hash; the raw value is never stored or logged.
 */
export async function invalidatePasswordResetToken(raw: string): Promise<void> {
  await db.passwordResetToken.deleteMany({
    where: { tokenHash: hashResetToken(raw), usedAt: null },
  });
}
