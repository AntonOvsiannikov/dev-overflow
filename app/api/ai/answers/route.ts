import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { AIAnswerSchema } from "@/lib/validations";
import handleError from "@/lib/handlers/error";
import { z } from "zod";
import { ValidationError } from "@/lib/http-errors";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { question, content } = await request.json();

  try {
    const validatedData = AIAnswerSchema.safeParse({ question, content });

    if (!validatedData.success) {
      const error = z.flattenError(validatedData.error);
      throw new ValidationError(error.fieldErrors);
    }

    const { text } = await generateText({
      model: openai("gpt-5.4-mini"),
      system:
        "You are a helpful assistant that provides informative responses in markdown format. Use appropriate markdown syntax for headings, lists, code blocks, and emphasis where necessary. For code blocks, use short-form smaller case language identifiers (e.g., 'js' for JavaScript, 'py' for Python, 'ts' for TypeScript, 'html' for HTML, 'css' for CSS, etc.).",
      prompt: `Generate a markdown-formatted response to the following question: ${question}. Based it on the following content: ${content}`,
    });

    return NextResponse.json({ success: true, data: text }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
