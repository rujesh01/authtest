"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { Default_Redirect } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: Default_Redirect,
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <FaGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};
