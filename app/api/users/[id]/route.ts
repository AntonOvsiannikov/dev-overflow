import dbConnect from "@/lib/mongoose";
import User from "@/database/user.model";
import { NextRequest, NextResponse } from "next/server";
import handleError from "@/lib/handlers/error";
import { NotFoundError } from "@/lib/http-errors";
import { UserSchema } from "@/lib/validations";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  if (!id) throw new NotFoundError("User not found");

  try {
    await dbConnect();

    const user = await User.findById(id);
    if (!user) throw new NotFoundError("User not found");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  if (!id) throw new NotFoundError("User not found");

  try {
    await dbConnect();
    const body = await request.json();
    const validatedData = UserSchema.partial().parse(body);

    const user = await User.findByIdAndUpdate(id, validatedData, { new: true });
    if (!user) throw new NotFoundError("User not found");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  const { id } = await params;
  if (!id) throw new NotFoundError("User not found");

  try {
    await dbConnect();
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new NotFoundError("User not found");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
