// File: app/api/get-video-script/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // ✅ Ensure API key is loaded
    const genAI = new GoogleGenerativeAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });

    // ✅ Use Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    return NextResponse.json({ result: text });
  } catch (e) {
    console.error("🔥 Gemini API Error:", e);
    return NextResponse.json({ error: e?.message || "Unknown Error" }, { status: 500 });
  }
}
