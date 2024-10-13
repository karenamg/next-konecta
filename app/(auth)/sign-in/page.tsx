import React from "react";

import { Metadata } from "next";
import LoginForm from "@/layouts/auth/login-form";

export const metadata: Metadata = {
  title: "Sign in to Konecta",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm />
    </div>
  );
}
