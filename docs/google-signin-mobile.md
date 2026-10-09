# Google sign-in on phones and tablets

## What changed

- Phones and tablets (including iPadOS) use the full-page **redirect** flow
  (`signInWithRedirect`). Popups are blocked or lost on mobile browsers.
  Desktop keeps the popup and falls back to the redirect if the popup is blocked.
- The redirect result is read on return to `/welcome` (`getRedirectResult`) and
  exchanged for a KYP session exactly like the popup result.
- Safari, Firefox and recent Chrome partition third-party storage, so a redirect
  whose auth handler lives on `<project>.firebaseapp.com` cannot hand its result
  back. The handler is therefore **served from the site's own host**:
  `next.config.ts` rewrites `/__/auth/*` and `/__/firebase/init.json` to the
  Firebase auth domain, and `firebase-client.ts` points `authDomain` at the page
  host for the hosts listed in `NEXT_PUBLIC_FIREBASE_SAME_ORIGIN_HOSTS`
  (default `know-your-pill-2026.vercel.app`).
- In-app browsers (Instagram, Facebook, TikTok, WeChat, Android WebView, ...) are
  detected. Google refuses OAuth there ("disallowed_useragent"), so the page asks
  the person to open it in Safari or Chrome.

## One-time setup (must be done in the consoles, not in code)

For every host in `NEXT_PUBLIC_FIREBASE_SAME_ORIGIN_HOSTS` (production host, and
any custom domain you add to the list):

1. **Firebase console** > Authentication > Settings > **Authorized domains**:
   add the host (for example `know-your-pill-2026.vercel.app`).
2. **Google Cloud console** > APIs & Services > Credentials > the
   *Web client (auto created by Google Service)* OAuth client >
   **Authorized redirect URIs**: add `https://<host>/__/auth/handler`.

Until both are done, mobile Google sign-in on that host shows
`redirect_uri_mismatch` or "not enabled for this web address".

Vercel preview URLs change on every deployment and are not in the list, so
mobile Google sign-in is only expected to work on listed hosts.
