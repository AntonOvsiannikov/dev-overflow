"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth.action";

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
        onSubmit={signInWithCredentials}
      />
    </div>
  );
};
export default SignIn;
