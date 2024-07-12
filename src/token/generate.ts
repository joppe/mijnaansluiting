import { env } from "@/env";
import jwt from "jsonwebtoken";
import { Token } from "./Token";

const ONE_HOUR = 60 * 60;

export function generate(name: string): Token {
  const token = jwt.sign({ name }, env.PRIVATE_KEY, {
    expiresIn: ONE_HOUR,
  });

  return {
    access_token: token,
    token_type: "Bearer",
    expires_in: ONE_HOUR,
  };
}
