"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FaUser } from "react-icons/fa";
import { LogoutButton } from "./logout-button";
import { IoExitOutline } from "react-icons/io5";



const UserButton = () => {
    const user = useCurrentUser()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white"/>
            </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton >
            <IoExitOutline className="h-5 w-4 mr-2" />
            Logout
        </LogoutButton>

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
