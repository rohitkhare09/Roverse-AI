import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const body = await req.json();

  const messages = body.messages.map((msg: any) => ({
    role: msg.role,
    content:
      msg.parts?.find((p: any) => p.type === "text")?.text ?? "",
  }));

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages,
  });

  return result.toUIMessageStreamResponse();
}