import "server-only";

export class EmailDeliveryConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailDeliveryConfigurationError";
  }
}

export class EmailDeliveryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailDeliveryError";
  }
}

interface PasswordResetEmail {
  to: string;
  name?: string;
  token: string;
  expiresAt: Date;
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new EmailDeliveryConfigurationError(`${name} is not configured`);
  return value;
}

export async function sendPasswordResetEmail(input: PasswordResetEmail): Promise<void> {
  // Automated tests intentionally use the mock transport so secrets never leave the test process.
  if (process.env.EMAIL_PROVIDER === "mock" || process.env.NODE_ENV === "test") return;

  const apiKey = getRequiredEnv("RESEND_API_KEY");
  const from = getRequiredEnv("EMAIL_FROM");
  const baseUrl = getRequiredEnv("APP_BASE_URL").replace(/\/$/, "");
  const resetUrl = `${baseUrl}/reset?token=${encodeURIComponent(input.token)}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: "Reset your KYP password",
      text: [
        `Hi ${input.name ?? "there"},`,
        "",
        "We received a request to reset your KYP password.",
        "",
        `Reset your password: ${resetUrl}`,
        "",
        "This link expires in 30 minutes and can be used only once.",
        "If you did not request this, you can safely ignore this email.",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new EmailDeliveryError(`Password reset email provider returned HTTP ${response.status}`);
  }
}
