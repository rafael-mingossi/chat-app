import { FC } from "react";
import Button from "@/components/ui/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>ffff</div>
      <Button variant={"ghost"}>Hello</Button>
    </div>
  );
};

export default page;
