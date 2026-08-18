import dbConnect from "@/lib/mongoose";
import Account from "@/database/account.model";
import { NextRequest, NextResponse } from "next/server";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import { AccountSchema } from "@/lib/validations";
import { z } from "zod";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Account not found");

  try {
    await dbConnect();

    const account = await Account.findById(id);
    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Account not found");

  try {
    await dbConnect();
    const body = await request.json();

    const validatedData = AccountSchema.partial().safeParse(body);
    if (!validatedData.success) {
      const error = z.flattenError(validatedData.error);
      throw new ValidationError(error.fieldErrors);
    }

    const account = await Account.findByIdAndUpdate(id, validatedData, { new: true });
    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  const { id } = await params;
  if (!id) throw new NotFoundError("Account not found");

  try {
    await dbConnect();
    const account = await Account.findByIdAndDelete(id);
    if (!account) throw new NotFoundError("Account not found");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
