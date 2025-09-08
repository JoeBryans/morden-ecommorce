import React from "react";
import Image from "next/image";
import Link from "next/link";
import Qty from "../Cart/Qty";
import QuickView from "./QuickView";
const ProductCard = ({ items }) => {
  console.log("item", items);

  return (
    <>
      {" "}
      <div className=" w-40 h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
        <Image
          src={items.image[0].url}
          alt={items.name}
          width={150}
          height={100}
          className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
        />
      </div>
      <div className="mt-3 flex flex-col items-start gap-2 w-full">
        <p className="text-black opacity-80 text-lg  ">{items.category}</p>
        <Link
          href={`/products/${items.id}`}
          className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
        >
          {items.name}
        </Link>
      </div>
      <div className="flex gap-2 justify-start w-full  mt-2 ">
        <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${items.price}`}</p>
        <p className="text-black text-sm font-semibold">{items.price}</p>
      </div>
      <div className="hidden my-2 group-hover:block transition-all ease-out w-full">
        <Qty items={items} />
      </div>
      <div className="block lg:hidden my-2  transition-all ease-out w-full">
        <Qty items={items} />
      </div>
      <div className="hidden my-2 group-hover:block transition-all ease-out w-full absolute top-[25%]  translate-x-[25%] opacity-40 ">
        <QuickView productId={items.id} />
      </div>
    </>
  );
};

export default ProductCard;
