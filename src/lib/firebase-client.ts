import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase is initialised on first use, never at import time: /welcome is
// prerendered at build time, and a build without the public Firebase
// variables (CI, Vercel Preview) must not crash on auth/invalid-api-key.
function getFirebaseApp() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) {
    throw new Error("Google sign-in is not configured: NEXT_PUBLIC_FIREBASE_API_KEY is missing");
  }
  return getApps().length === 0
    ? initializeApp({
        apiKey,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      })
    : getApps()[0];
}

export function getFirebaseAuth() {
  return getAuth(getFirebaseApp());
}

export function createGoogleProvider() {
  return new GoogleAuthProvider();
}
