"use client";

import UserButton from "@/components/auth/user-button";
import { ModeToggle } from "@/components/model";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-7 m-4 rounded-xl w-[600px] shadow-sm ">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/dashboard" ? "default" : "outline"}
        >
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href={"/server"}>server</Link>
        </Button>
        {/* <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href={"/client"}>client</Link>
        </Button> */}
        <ModeToggle/>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href={"/admin"}>admin</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
