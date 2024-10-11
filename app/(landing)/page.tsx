import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-y-2">
      Landing page
      <Link href="/login" className="underline text-blue-700">
        Sign in
      </Link>
      <Link href="/signup" className="underline text-blue-700">
        Sign up
      </Link>
    </div>
  );
}
