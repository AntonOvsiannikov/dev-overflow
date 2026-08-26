"use server";

import { flattenError, ZodError, type ZodType } from "zod";
import { UnauthorizedError, ValidationError } from "@/lib/http-errors";
import { Session } from "next-auth";
import { auth } from "@/auth";
import dbConnect from "../mongoose";

type ActionOptions<T> = {
  params?: T;
  schema?: ZodType<T>;
  authorize?: boolean;
};

async function action<T>({ params, schema, authorize = true }: ActionOptions<T>) {
  if (schema && params) {
    try {
      schema.parse(params);
    } catch (error) {
      if (error instanceof ZodError) {
        const flattenedError = flattenError(error);
        return new ValidationError(flattenedError.fieldErrors);
      }
      return new Error("Schema validation failed");
    }
  }

  let session: Session | null = null;

  if (authorize) {
    session = await auth();

    if (!session) {
      return new UnauthorizedError("Unauthorized");
    }
  }

  await dbConnect();

  return { params, session };
}

export default action;
