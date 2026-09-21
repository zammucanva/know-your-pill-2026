import type { SearchableItem } from "./data/types";
import { searchIndex } from "./data/search-index";

function rankResult(item: SearchableItem, q: string): number {
  const title = item.title.toLowerCase();
  const keywords = item.keywords.map((k) => k.toLowerCase());
  if (title === q) return 1;
  if (title.startsWith(q)) return 2;
  if (title.includes(q)) return 3;
  if (keywords.some((k) => k === q)) return 4;
  if (keywords.some((k) => k.startsWith(q))) return 5;
  if (keywords.some((k) => k.includes(q))) return 6;
  if (item.description.toLowerCase().includes(q)) return 7;
  return 0;
}

export interface SearchOptions {
  limit?: number;
}

export function searchKyp(query: string, options: SearchOptions = {}): SearchableItem[] {
  const limit = Math.min(Math.max(options.limit ?? 12, 1), 50);
  const q = query.trim().toLowerCase();
  if (!q) return searchIndex.slice(0, limit);
  return searchIndex
    .map((item) => ({ item, rank: rankResult(item, q) }))
    .filter((result) => result.rank > 0)
    .sort((a, b) => a.rank - b.rank || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((result) => result.item);
}

export { searchIndex };
