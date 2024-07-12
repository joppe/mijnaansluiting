import { z } from "zod";

const envSchema = z.object({
  CLIENT_ID: z.string(),
  CLIENT_SECRET: z.string(),
  TOKEN_URL: z.string(),
  API_URL: z.string(),
  DSP_CLIENT_ID: z.string(),
  DSP_CLIENT_SECRET: z.string(),
  PRIVATE_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
