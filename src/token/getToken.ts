import { env } from "@/env";
import { Token } from "./Token";

export async function getToken() {
  const { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } = env;
  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

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
