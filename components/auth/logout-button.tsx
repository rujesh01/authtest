"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <div onClick={onClick} className="cursor-pointer flex flex-row gap-5 items-center justify-center">
      {children}
    </div>
  );
};
