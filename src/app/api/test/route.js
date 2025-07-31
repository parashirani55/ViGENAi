// app/api/test/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    gemini: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "❌ Not Found",
  });
}
