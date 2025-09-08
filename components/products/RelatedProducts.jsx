import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProducts = ({ product }) => {
  return (
    <div>
      <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={150}
          height={100}
          className="w-[80%] h-[80%]  object-contain rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cusor-pointer"
        />
      </div>

      <div className="mt-3 flex flex-col items-start gap-2 w-full">
        <p className="text-black opacity-80 text-lg  ">{product?.category}</p>
        <Link
          href={`/product/${product?.id}`}
          className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
        >
          {product?.title}
        </Link>
      </div>
      <div className="flex gap-2 justify-start w-full  mt-2 ">
        <p className="text-black opacity-60 line-through text-sm font-semibold">{`$${product?.price}`}</p>
        <p className="text-black text-sm font-semibold">{product?.price}</p>
      </div>
    </div>
  );
};

export default RelatedProducts;
