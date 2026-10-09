import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { isHostAllowed, parseHostList } from "@/lib/kyp/google-auth-env";

// Firebase is initialised on first use, never at import time: /welcome is
// prerendered at build time, and a build without the public Firebase
// variables (CI, Vercel Preview) must not crash on auth/invalid-api-key.

/** Hosts whose /__/auth/* is proxied to Firebase (next.config.ts rewrites). */
const SAME_ORIGIN_HOSTS = parseHostList(
  process.env.NEXT_PUBLIC_FIREBASE_SAME_ORIGIN_HOSTS ?? "know-your-pill-2026.vercel.app"
);

const SAME_ORIGIN_APP_NAME = "kyp-same-origin-auth";

function firebaseConfig(authDomain: string | undefined) {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) {
    throw new Error("Google sign-in is not configured: NEXT_PUBLIC_FIREBASE_API_KEY is missing");
  }
  return {
    apiKey,
    authDomain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

function getFirebaseApp(): FirebaseApp {
  return getApps().length === 0
    ? initializeApp(firebaseConfig(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN))
    : getApps()[0];
}

/**
 * True when this page's own host has the same-origin auth handler set up.
 *
 * Safari (iOS and macOS), Firefox and recent Chrome partition third-party
 * storage, so a redirect sign-in whose auth handler lives on
 * <project>.firebaseapp.com cannot hand its result back to the app. When
 * the handler is served from the app's own host (proxied through
 * next.config.ts) the storage is first-party and the result survives.
 */
export function canUseSameOriginAuth(): boolean {
  if (typeof window === "undefined") return false;
  return isHostAllowed(window.location.host, SAME_ORIGIN_HOSTS);
}

/**
 * `sameOrigin` selects the auth instance whose authDomain is this page's
 * own host. Only pass it when canUseSameOriginAuth() is true.
 */
export function getFirebaseAuth(opts: { sameOrigin?: boolean } = {}) {
  if (opts.sameOrigin && typeof window !== "undefined") {
    const existing = getApps().find((a) => a.name === SAME_ORIGIN_APP_NAME);
    const app =
      existing ??
      initializeApp(firebaseConfig(window.location.host), SAME_ORIGIN_APP_NAME);
    return getAuth(app);
  }
  // Make sure the default app exists before getApp() is relied on elsewhere.
  getFirebaseApp();
  return getAuth(getApp());
}

export function createGoogleProvider() {
  const provider = new GoogleAuthProvider();
  // Always show the account chooser: on phones the last Google account is
  // often the wrong one, and silent re-use made failures look random.
  provider.setCustomParameters({ prompt: "select_account" });
  return provider;
}
