"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

const Dashboard = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white  rounded-xl">
      <Button onClick={onClick} type="submit">
        SignOut
      </Button>
    </div>
  );
};

export default Dashboard;
