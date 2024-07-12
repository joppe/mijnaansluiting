import { env } from "@/env";
import { Token } from "@/token/Token";
import { encode } from "@/token/encode";

export async function getToken() {
  const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } = env;
  const auth = encode(CLIENT_ID, CLIENT_SECRET);

  const response = await fetch(TOKEN_URL, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: "grant_type=client_credentials",
  });

  return (await response.json()) as Token;
}
