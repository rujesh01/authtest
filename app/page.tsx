import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="absolute flex  justify-center inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to the Auth System
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Please sign in to access exclusive features and manage your account.
          Enjoy a seamless and secure experience with our authentication system.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          <Link href="/login">
            Sign In
          </Link>
        </Button>
      </div>
</div>
  );
}
