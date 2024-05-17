import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[500px] my-6 shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row justify-between  items-center rounded-sm border p-3">
          <p className="text-xl font-extrabold ">Id</p>
          <p className="">{user?.id}</p>
        </div>
        <div className="flex flex-row justify-between  items-center rounded-sm border p-3">
          <p className="text-xl font-extrabold ">Email</p>
          <p className="">{user?.email}</p>
        </div>
        <div className="flex flex-row justify-between  items-center rounded-sm border p-3">
          <p className="text-xl font-extrabold ">Name</p>
          <p className="">{user?.name}</p>
        </div>
      </CardContent>
    </Card>
  );
};
