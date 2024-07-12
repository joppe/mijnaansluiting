import { env } from "@/env";
import { encode } from "@/token/encode";

const VALID_TOKEN = encode(env.DSP_CLIENT_ID, env.DSP_CLIENT_SECRET);

export function validate(header: string): boolean {
  const [_, token] = header.split(" ");

  if (token === VALID_TOKEN) {
    return true;
  }

  return false;
}
