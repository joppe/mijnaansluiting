import { validate } from "@/auth/validate";
import { generate } from "@/token/generate";
import { getToken } from "@/token/getToken";
import { add } from "@/token/tokens";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const data = await getToken();

  return Response.json({ data });
}

export async function POST(request: Request) {
  if (
    request.headers.get("Content-Type") !== "application/x-www-form-urlencoded"
  ) {
    return Response.json({ error: "Invalid content type" }, { status: 400 });
  }

  const formData = await request.formData();
  const grandType = formData.get("grant_type");

  if (grandType !== "client_credentials") {
    return Response.json({ error: "Invalid grant type" }, { status: 400 });
  }

  if (!validate(request.headers.get("Authorization") ?? "")) {
    return Response.json({ error: "Invalid authorization" }, { status: 400 });
  }

  const token = generate("DSP");

  add(token);

  return Response.json({ ...token });
}
