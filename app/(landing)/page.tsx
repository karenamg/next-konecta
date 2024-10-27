import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1>LandingPage</h1>
      <Link href="/sign-up" className="text-blue-600 underline">
        Sign up
      </Link>
      <Link href="/sign-in" className="text-blue-600 underline">
        Sign in
      </Link>
    </div>
  );
}
