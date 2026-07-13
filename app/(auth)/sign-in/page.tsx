"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import React from "react";

const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={defaultValues}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};
export default SignIn;
