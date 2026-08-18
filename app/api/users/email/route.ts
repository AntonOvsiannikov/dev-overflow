import { NextRequest } from "next/server";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import User from "@/database/user.model";
import { NextResponse } from "next/server";
import handleError from "@/lib/handlers/error";
import { UserSchema } from "@/lib/validations";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  if (!email) throw new NotFoundError("Email not found");

  try {
    await dbConnect();
    const validatedData = UserSchema.partial().safeParse({ email });
    if (!validatedData.success) {
      const error = z.flattenError(validatedData.error);
      throw new ValidationError(error.fieldErrors);
    }

    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError("User not found");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
