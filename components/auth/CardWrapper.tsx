import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { Social } from "./social";

interface CardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerDescription: string;
  footerLInk: string;
  showSocial?: boolean
}

const CardWrapper = ({
  title,
  description,
  children,
  footerLInk,
  footerDescription,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col">
        {showSocial && (
        <Social/>
        )}
        <Button
          className=" w-full  flex items-center justify-center"
          variant={"link"}
        >
          <Link className="hover:to-blue-600" href={footerLInk}>
            {footerDescription}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
