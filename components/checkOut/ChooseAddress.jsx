"use client";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import Shipping from "../form/shipping";
import ShippingAddress from "./ShippingAddress";
import { useSelector } from "react-redux";

const ChooseAddress = () => {
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const [delivaryDropDown, setDelivaryDropDown] = useState(false);
  const [delivary, setDelivary] = useState(null);
  useEffect(() => {
    setDelivary(shippingAddress);
  }, [delivary]);

  //   console.log("shippingAddress", shippingAddress);

  return (
    <div className="flex flex-col gap-4 w-full items-center  border-b-1 pb-2">
      <div className="flex w-full items-center justify-between px-3 py-1 ">
        <div className="flex items-center gap-3">
          <Input
            type={"checkbox"}
            className={"w-4 h-4 rounded-full"}
            checked={delivary ? true : false}
            readOnly={true}
          />
          <h2>CHOOSE DELIVERY ADDRESS</h2>
          <ChevronDown
            onClick={() => setDelivaryDropDown(!delivaryDropDown)}
            className="cursor-pointer"
          />
        </div>
        <Shipping />
      </div>
      {delivaryDropDown ? (
        <div
          className={`${
            delivary ? " justify-between " : "justify-end"
          } flex w-full px-5`}
        >
          <div
            className={`${
              delivary ? "flex flex-col gap-0.5 w-full " : "hidden"
            }`}
          >
            <h3 className=" capitalize ">{delivary?.users?.name}</h3>
            <span className=" lowercase ">{delivary?.users?.email}</span>
            <div className="flex  gap-0.5 w-full ">
              <span className=" lowercase">{delivary?.address}, </span>
              <span className=" lowercase">{delivary?.city} ,</span>
              <span className=" lowercase">{delivary?.state} ,</span>
              <span className=" lowercase">{delivary?.country}</span>
            </div>
            <span className=" capitalize">{delivary?.users?.phone}</span>
          </div>
          <div className="">
            <ShippingAddress delivary={delivary} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChooseAddress;
