import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const ip = searchParams.get("ip");

  if (!ip) {
    return NextResponse.json({ error: "Missing IP Param" }, { status: 400 });
  }

  const apiKey = process.env.IP2PROXY_API_KEY;
  const apiUrl = process.env.IP2PROXY_URL;

  if (!apiKey) {
    return Response.json({ error: "API Key is missing" }, { status: 500 });
  }

  try {
    const res = await fetch(`${apiUrl}${apiKey}&ip=${ip}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch IP info" },
      { status: 500 }
    );
  }
}
