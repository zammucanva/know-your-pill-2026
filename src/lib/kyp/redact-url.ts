/**
 * Text that is safe to print about a database connection: protocol, host, port and database name only. The user name,
 * password, query string and anything unparseable are never echoed.
 */
export function redactDatabaseUrl(url: string | undefined | null): string {
  if (!url) return "<no database URL set>";
  if (/^file:/i.test(url)) return url.replace(/\?.*$/, "");
  try {
    const u = new URL(url);
    const db = decodeURIComponent(u.pathname.replace(/^\//, ""));
    return `${u.protocol}//${u.hostname}${u.port ? ":" + u.port : ""}/${db} (credentials hidden)`;
  } catch {
    return "<unparseable database URL, hidden>";
  }
}
