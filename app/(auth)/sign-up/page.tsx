"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import { signUpWithCredentials } from "@/lib/actions/auth.action";

const defaultValues = {
  email: "",
  password: "",
  name: "",
  username: "",
};

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={defaultValues}
        onSubmit={signUpWithCredentials}
      />
    </div>
  );
};
export default SignUp;
