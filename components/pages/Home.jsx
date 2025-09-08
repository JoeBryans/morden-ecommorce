"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Qty from "../Cart/Qty";
import { useSearchParams } from "next/navigation";
import QuickView from "./QuickView";
const Home = () => {
  const [product, setProduct] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    console.log("params", params);
    const category = params.get("category");
    const FetchData = async () => {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    FetchData();
  }, [searchParams]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await Allproduct();

  //       setProduct(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getData();
  // }, []);grid-col-2 sm:grid-cols-2 md:grid-cols-3 lg:

  return (
    <div className="w-full relative">
      <div className="w-max grid grid-cols-5 xl:grid-cols-4 gap-4 ">
        {product &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className=" group w-full  flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-40 h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={150}
                    height={100}
                    className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <p className="text-black opacity-80 text-lg  ">
                    {item.category}
                  </p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex gap-2 justify-start w-full  mt-2 ">
                  <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className="text-black text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
                <div className="hidden my-2 group-hover:block transition-all ease-out w-full">
                  <Qty items={item} />
                </div>
                <div className="hidden my-2 group-hover:block transition-all ease-out w-full absolute top-[25%]  translate-x-[25%] opacity-40 ">
                  <QuickView productId={item.id} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
