import "server-only";

type SafeContext = Record<string, string | number | boolean | undefined>;

function write(level: "info" | "warn" | "error", event: string, context?: SafeContext) {
  const payload = JSON.stringify({ event, ...(context ?? {}) });
  if (level === "error") console.error(payload);
  else if (level === "warn") console.warn(payload);
  else console.info(payload);
}

export const logger = {
  info(event: string, context?: SafeContext) {
    write("info", event, context);
  },
  warn(event: string, context?: SafeContext) {
    write("warn", event, context);
  },
  error(event: string, error?: unknown, context?: SafeContext) {
    const errorName =
      error && typeof error === "object" && "name" in error && typeof error.name === "string"
        ? error.name
        : "UnknownError";
    write("error", event, { errorName, ...context });
  },
};
