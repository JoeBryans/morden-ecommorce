import React from "react";
import { Electronics } from "@/action/action";
import ProductCard from "@/components/pages/ProductCard";
import Container from "@/components/Container";
const page = async () => {
  const product = await Electronics();
  return (
    <div className="w-full relative">
      <Container>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {product &&
            product.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" group w-full  flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <ProductCard items={item} />
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default page;
