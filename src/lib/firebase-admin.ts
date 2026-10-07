import "server-only";

/**
 * Verifies a Firebase ID token using Google's Identity Toolkit REST API.
 * This is equivalent to firebase-admin's verifyIdToken() but requires no
 * private service account key — it makes a round-trip to Google's servers.
 *
 * Falls back to the Firebase Admin SDK if FIREBASE_ADMIN_PRIVATE_KEY is set.
 */
export async function verifyFirebaseToken(idToken: string): Promise<{
  uid: string;
  email: string | undefined;
  name: string | undefined;
  email_verified: boolean;
}> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey) throw new Error("NEXT_PUBLIC_FIREBASE_API_KEY is not configured");

  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      `Firebase token verification failed: ${(err as { error?: { message?: string } }).error?.message ?? res.status}`
    );
  }

  const data = (await res.json()) as {
    users?: Array<{
      localId: string;
      email?: string;
      displayName?: string;
      emailVerified?: boolean;
    }>;
  };

  const user = data.users?.[0];
  if (!user) throw new Error("Firebase token verification returned no user");

  return {
    uid: user.localId,
    email: user.email,
    name: user.displayName,
    email_verified: user.emailVerified ?? false,
  };
}
