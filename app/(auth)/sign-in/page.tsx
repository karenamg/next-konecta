import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign in to Konecta",
};

function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
  );
}

export default SignInPage;
