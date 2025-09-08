import Container from "@/components/Container";
import SignIn from "@/components/form/sign-in";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className=" flex items-center justify-center h-screen">
        <SignIn />
      </div>
    </Container>
  );
};

export default page;
