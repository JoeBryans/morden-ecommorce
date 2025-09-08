import React from "react";
import SideBar from "@/components/customer/SideBar";
import Container from "@/components/Container";

const layout = ({ children }) => {
  return (
    <div className=" w-full">
      <Container>
        <div className="w-full flex gap-18 justify-between ">
          <div className="flex-1">
            <SideBar />
          </div>

          <div className="flex-6">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default layout;
