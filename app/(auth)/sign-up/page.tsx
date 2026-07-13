"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

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
        formType="SIGN_IN"
        schema={SignUpSchema}
        defaultValues={defaultValues}
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};
export default SignUp;
