import type { SearchableItem } from "./data/types";

/**
 * KYP Universal Search — the canonical, PURE search engine.
 *
 * Shared by the search modal (production UI) and the test suite. It takes
 * the index as a parameter and imports NOTHING from the data layer, so it
 * can never drag the 145-monograph registry into a client bundle — the
 * modal passes the generated self-contained artifact
 * (`@/lib/kyp/data/search-index-generated`), tests pass fixtures or the
 * real generated index.
 *
 * ── Pipeline ────────────────────────────────────────────────────────────
 *
 *   QUERY → normalizeQuery (NFKC · lowercase · trim · collapse whitespace)
 *         → tokenizeQuery
 *         → match the ENTIRE index (single global pool — no per-category
 *           pre-limits; grouping is presentation-only)
 *         → score every candidate (rankResult, tier model below)
 *         → sort by relevance (tier, then title, then id — deterministic)
 *         → apply the DISPLAY POLICY (SEARCH_DISPLAY_CAP)
 *
 * ── Ranking model (single token; lower tier = stronger) ──────────────────
 *
 *   1  title equals query
 *   2  title starts with query            (title prefix)
 *   3  a title WORD starts with query     (token prefix — word boundary)
 *   4  title contains query               (substring)
 *   5  a keyword equals query
 *   6  a keyword starts with query        (alias prefix)
 *   7  a keyword contains query           (alias substring)
 *   8  description contains query         (metadata/content)
 *
 * Multi-word queries ("major depression") keep AND semantics: every
 * whitespace-separated token must match the item somewhere, otherwise the
 * item is excluded. The rank is the sum of the tokens' best tiers, so
 * results matching more tokens in stronger fields sort first. Long queries
 * therefore narrow naturally (relevance progressively dominates) while
 * short queries get broad global discovery — no special-casing by query
 * length anywhere.
 *
 * ── Display policy (DOCUMENTED) ──────────────────────────────────────────
 *
 * `searchUniversal` returns ALL matching items up to `cap`
 * (default SEARCH_DISPLAY_CAP = 50, the historical maximum of the old
 * engine) plus the TOTAL match count so the UI can state exactly what was
 * truncated. The cap is applied to the globally ranked list — never per
 * category — so no group membership can hide a legitimate result.
 */

/** Documented display policy: maximum results rendered from the ranked pool. */
export const SEARCH_DISPLAY_CAP = 50;

export interface SearchOptions {
  limit?: number;
}

export interface SearchResult {
  items: SearchableItem[];
  /** Total matches in the index, BEFORE the display cap. */
  total: number;
}

/** Normalize a raw query: NFKC → lowercase → trim → collapse whitespace. */
export function normalizeQuery(query: string): string {
  return query.normalize("NFKC").toLowerCase().trim().replace(/\s+/g, " ");
}

/** Whitespace tokens of a normalized query, empty tokens removed. */
export function tokenizeQuery(query: string): string[] {
  const normalized = normalizeQuery(query);
  return normalized === "" ? [] : normalized.split(" ");
}

/**
 * Split a lowercased title into word tokens at any non-alphanumeric
 * boundary (spaces, hyphens, slashes, parentheses, ampersands, em-dashes…).
 * "Suicide & Deliberate Self-Harm" → ["suicide","deliberate","self","harm"].
 */
function titleTokens(lowerTitle: string): string[] {
  return lowerTitle.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
}

/** Best rank tier for ONE query token against an item. Lower = better. 0 = no match. */
export function rankToken(item: SearchableItem, token: string): number {
  const title = item.title.toLowerCase();
  if (title === token) return 1;
  if (title.startsWith(token)) return 2;
  if (titleTokens(title).some((word) => word.startsWith(token))) return 3;
  if (title.includes(token)) return 4;
  const keywords = item.keywords.map((k) => k.toLowerCase());
  if (keywords.some((k) => k === token)) return 5;
  if (keywords.some((k) => k.startsWith(token))) return 6;
  if (keywords.some((k) => k.includes(token))) return 7;
  if (item.description.toLowerCase().includes(token)) return 8;
  return 0;
}

/**
 * Rank a search result. Lower = better. 0 = no match.
 *
 * Multi-word queries use AND semantics: one unmatched token excludes the
 * item. The rank is the sum of the tokens' best tiers.
 */
export function rankResult(item: SearchableItem, q: string): number {
  const tokens = tokenizeQuery(q);
  if (tokens.length === 0) return 0;
  if (tokens.length === 1) return rankToken(item, tokens[0]);

  let total = 0;
  for (const token of tokens) {
    const tier = rankToken(item, token);
    if (tier === 0) return 0; // AND semantics — one unmatched token excludes the item
    total += tier;
  }
  return total;
}

/**
 * Global universal search: match the ENTIRE index, score all candidates,
 * sort by relevance, then apply the display cap. Grouping happens later,
 * at render time, and is presentation-only.
 */
export function searchUniversal(
  index: SearchableItem[],
  query: string,
  options: SearchOptions = {}
): SearchResult {
  const cap = Math.min(Math.max(options.limit ?? SEARCH_DISPLAY_CAP, 1), 50);
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) {
    const items = index.slice(0, cap);
    return { items, total: items.length };
  }

  const ranked = index
    .map((item) => ({ item, rank: rankResult(item, query) }))
    .filter((r) => r.rank > 0)
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        a.item.title.localeCompare(b.item.title) ||
        (a.item.id < b.item.id ? -1 : a.item.id > b.item.id ? 1 : 0)
    );

  return { items: ranked.slice(0, cap).map((r) => r.item), total: ranked.length };
}
