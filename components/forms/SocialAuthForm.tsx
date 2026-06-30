"use client";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Image from "next/image";
import ROUTES from "@/const/routes";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonClasses =
    "background-dark400_light900 rounded-2 body-medium text-dark-200_light900 min-h-12 flex-1 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    console.log("test");
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      console.error(error);
      toast.error("Sign-in failed", {
        description: error instanceof Error ? error.message : "An error occurred during sign in",
        position: "top-center",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasses} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        Log in with GitHub
      </Button>
      <Button className={buttonClasses} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        Log in with Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
