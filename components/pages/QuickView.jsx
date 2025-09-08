"use client";
import { useEffect, useState } from "react";
import { Singleproduct } from "../../request/request";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import parse from "html-react-parser";

const QuickView = ({ productId }) => {
  const id = productId;
  const [product, setProduct] = useState({});
  const handelClick = async () => {
    console.log("product", id);

    const data = await Singleproduct(id);
    setProduct(data);
  };

  // const product = await Singleproduct(productId);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <b
          onClick={handelClick}
          className="text-blue-600 p-2 rounded-lg border-2"
        >
          Quick View
        </b>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className="text-xl font-semibold">
          Product Quick preview
        </DialogTitle>
        {product ? (
          <div className="flex gap-5 items-start max-w-[80rem] w-[90%] h-[70vh] flex-wrap overflow-y-auto hide-scrollbar">
            {/* name */}
            <h4>{product?.name}</h4>
            {/* Image */}
            <div className="w-full h-52  ">
              {product?.image?.slice(0, 1)?.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item?.url}
                    alt={product?.name}
                    width={400}
                    height={400}
                    className="object-cover w-[100%] h-[100%] "
                  />
                );
              })}
            </div>
            {/* price */}
            <h4>{product?.price ? `$ ${product?.price}` : null}</h4>
            {/* Description */}

            <div className="flex flex-col gap-3 items-start px-3 py-1 w-full ">
              <div className="block">
                {product?.description ? parse(product?.description) : null}
              </div>
              <div className="block">
                {product?.overview ? parse(product?.overview) : null}
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};
export default QuickView;
