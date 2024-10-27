import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create account in Konecta",
};

function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RegisterForm />
    </div>
  );
}

export default SignUpPage;
