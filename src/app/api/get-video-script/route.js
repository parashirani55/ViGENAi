import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("Prompt received:", prompt);

    // Ensure your API key is set
    if (!process.env.Key_api) {
      return NextResponse.json(
        { error: "Missing OpenRouter API key" },
        { status: 500 }
      );
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.Key_api}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // You can change to gpt-4, claude, etc.
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("OpenRouter error:", err);
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const data = await res.json();
    const responseText = data.choices?.[0]?.message?.content || "";

    // Try to parse as JSON
    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      parsed = { raw: responseText };
    }

    return NextResponse.json({ result: parsed });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Server error", message: error.message },
      { status: 500 }
    );
  }
}
