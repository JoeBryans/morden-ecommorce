import { getServerSession } from "next-auth";
import Container from "@/components/Container";
import SignUp from "@/components/form/sign-up";
import React from "react";
import { authOptions } from "@/auth";

const page = () => {
  const user = getServerSession(authOptions);
  // function userLog(request) {
  //   if (user) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }
  // userLog();

  return (
    <Container>
      <div className=" flex items-center justify-center min-h-[100vh]">
        <SignUp />
      </div>
    </Container>
  );
};

export default page;
