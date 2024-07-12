import { Token } from "@/token/Token";

const tokens: Token[] = [];

export function add(token: Token) {
  tokens.push(token);
}

export function exists(token: string): boolean {
  return tokens.some((t) => t.access_token === token);
}
