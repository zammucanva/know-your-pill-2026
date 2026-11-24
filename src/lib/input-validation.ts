/**
 * Shared, side-effect-free input validation for the auth routes.
 *
 * Everything here runs in linear time. The previous email check was a
 * single regex (`^[^\s@]+@[^\s@]+\.[^\s@]+$`) evaluated on unbounded input
 * BEFORE the length check; crafted input such as "a@" + "." x N + "@" makes it
 * backtrack quadratically (16,000 dots took about half a second, 100,000
 * dots would block the Node event loop for tens of seconds). The length bound
 * now comes first and the structure is checked with plain string operations.
 */

/** Longest address allowed by RFC 5321 (path limit). */
export const EMAIL_MAX_LENGTH = 254;
export const DISPLAY_NAME_MAX_LENGTH = 100;
/** Hard ceiling for any password-like field read from a request body. */
export const PASSWORD_INPUT_MAX_LENGTH = 1024;

// C0/C1 controls (includes NUL, which PostgreSQL text columns reject).
const CONTROL_CHARS = /[\u0000-\u001F\u007F-\u009F]/;
// Zero-width and bidirectional formatting characters used for spoofing.
const INVISIBLE_OR_BIDI = /[​-‏‪-‮⁦-⁩﻿]/;

const LOCAL_PART = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
const DOMAIN_LABEL = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;

export function hasControlChars(value: string): boolean {
  return CONTROL_CHARS.test(value);
}

/**
 * Plausible ASCII e-mail address. ASCII-only on purpose: accepting arbitrary
 * Unicode lets an attacker register "lookalike" addresses (Cyrillic "і" for
 * "i", fullwidth letters, combining accents) that read identically to a
 * victim's address.
 */
export function isValidEmailShape(email: string): boolean {
  if (email.length === 0 || email.length > EMAIL_MAX_LENGTH) return false;
  const at = email.indexOf("@");
  if (at < 1 || at !== email.lastIndexOf("@")) return false;
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (local.length > 64 || !LOCAL_PART.test(local)) return false;
  const labels = domain.split(".");
  if (labels.length < 2) return false;
  return labels.every((label) => DOMAIN_LABEL.test(label));
}

/** Display name: bounded, printable, no control or bidi/zero-width characters. */
export function isSafeDisplayName(name: string): boolean {
  if (name.trim().length === 0 || name.length > DISPLAY_NAME_MAX_LENGTH) return false;
  return !CONTROL_CHARS.test(name) && !INVISIBLE_OR_BIDI.test(name);
}
