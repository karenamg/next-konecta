import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-y-2">
      Landing page
      <Link href="/sign-in" className="underline text-blue-700">
        Sign in
      </Link>
      <Link href="/sign-up" className="underline text-blue-700">
        Sign up
      </Link>
    </div>
  );
}
