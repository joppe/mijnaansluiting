import { z } from "zod";

const envSchema = z.object({
  CLIENT_ID: z.string(),
  CLIENT_SECRET: z.string(),
  TOKEN_URL: z.string(),
  API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
