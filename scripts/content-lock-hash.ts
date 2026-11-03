import { createHash } from "crypto";
import { readFileSync } from "fs";

/**
 * The content-lock hash. Line endings are not content: a Windows checkout may hold CRLF where the index holds LF,
 * so the LF form is hashed. Every other byte still counts: one changed character, space, or a lone CR changes the hash.
 */
export const lfSha256 = (text: string): string => createHash("sha256").update(text.replace(/\r\n/g, "\n")).digest("hex");
export const lfSha256File = (path: string): string => lfSha256(readFileSync(path, "utf8"));
