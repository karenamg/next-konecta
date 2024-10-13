import React from "react";

import { Metadata } from "next";
import RegisterForm from "@/layouts/auth/register-form";

export const metadata: Metadata = {
  title: "Join Konecta",
};

export default function SignUpForm() {
  return (
    <div className="flex items-center justify-center h-screen">
      <RegisterForm />
    </div>
  );
}
