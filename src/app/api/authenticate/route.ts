import { getToken } from "@/token/getToken";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  const data = await getToken();

  return Response.json({ data });
}
