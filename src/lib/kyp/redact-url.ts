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

const URL_WITH_CREDENTIALS = /\b([a-z][a-z0-9+.-]*):\/\/[^\s/'"`:@]*:[^\s/'"`@]*@[^\s'"`<>]*/gi;
/** A database URL cut off before its '@' ("postgres://user:secret"): everything after the user name is treated as the password. */
const TRUNCATED_DB_CREDENTIALS = /\b(postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis|amqps?):\/\/[^\s/'"`:@]+:[^\s/'"`@]+(?=\s|$)/gi;
/** Same shape with no scheme ("//user:secret@host"), as found in truncated messages. */
const SCHEMELESS_CREDENTIALS = /(?<![:a-z0-9+.-])\/\/[^\s/'"`:@]*:[^\s/'"`@]+@[^\s'"`<>]*/gi;
const KEY_VALUE_SECRET = /\b((?:pass(?:word)?|pwd|secret|token|api[_-]?key|access[_-]?key|auth(?:orization)?)\s*[=:]\s*)("[^"]*"|'[^']*'|[^\s,;&]+)/gi;
const BEARER = /\b(Bearer\s+)[A-Za-z0-9._~+/=-]{8,}/gi;
const JWT = /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{6,}/g;

/**
 * For free text such as a thrown error's message: connection URLs that carry credentials, password/secret/token
 * assignments, bearer tokens and JWTs are replaced, so a message can be shown without the secret in it.
 */
export function redactSecretsInText(text: string): string {
  return String(text)
    .replace(URL_WITH_CREDENTIALS, (_m, scheme: string) => `${scheme}://<credentials hidden>`)
    .replace(TRUNCATED_DB_CREDENTIALS, (_m, scheme: string) => `${scheme}://<credentials hidden>`)
    .replace(SCHEMELESS_CREDENTIALS, "//<credentials hidden>")
    .replace(BEARER, (_m, b: string) => `${b}<hidden>`) // before the key=value rule, which would otherwise take the word "Bearer" as the value
    .replace(KEY_VALUE_SECRET, (_m, key: string, val: string) => (/^Bearer$/i.test(val) ? _m : `${key}<hidden>`))
    .replace(JWT, "<jwt hidden>");
}
