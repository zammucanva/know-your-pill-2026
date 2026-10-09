/**
 * Browser-environment helpers for Google sign-in.
 *
 * Pure functions (no window access) so they can be unit tested:
 *
 *   isInAppBrowser     embedded webviews (Instagram, Facebook, TikTok, ...)
 *                      where Google refuses OAuth outright
 *                      ("disallowed_useragent"). No code change can make
 *                      sign-in work there; the user has to open the page in
 *                      Safari or Chrome.
 *   isMobileBrowser    phones and tablets, including iPadOS which reports
 *                      itself as a Mac. Popups are unreliable there (blocked
 *                      by default, lost when the OAuth tab switches apps),
 *                      so the redirect flow is used instead.
 *   parseHostList      the hosts that have the same-origin auth handler set
 *                      up (see next.config.ts rewrites and the setup notes).
 */

const IN_APP_PATTERNS: RegExp[] = [
  /FBAN|FBAV|FB_IAB|FBIOS/i, // Facebook, Messenger
  /Instagram/i,
  /Line\//i,
  /MicroMessenger/i, // WeChat
  /Snapchat/i,
  /TikTok|musical_ly|BytedanceWebview/i,
  /Twitter/i,
  /LinkedInApp/i,
  /Pinterest/i,
  /\bwv\b.*Version\/[\d.]+|; wv\)/i, // Android WebView
];

export function isInAppBrowser(userAgent: string): boolean {
  return IN_APP_PATTERNS.some((p) => p.test(userAgent));
}

export function isMobileBrowser(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0
): boolean {
  if (/iPhone|iPad|iPod|Android|Mobile/i.test(userAgent)) return true;
  // iPadOS 13+ presents as a desktop Mac; touch points give it away.
  return /Mac/i.test(platform || userAgent) && maxTouchPoints > 1;
}

/** "a.com, b.com" -> ["a.com", "b.com"]; blanks dropped, lower-cased. */
export function parseHostList(raw: string | undefined | null): string[] {
  return (raw ?? "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
}

export function isHostAllowed(host: string, allowed: string[]): boolean {
  return allowed.includes(host.toLowerCase());
}
