"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import OrderItems from "../Order/order";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CheckOutButton } from "../Cart/cartButton";

const OrderDetails = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const shippingAddress = useSelector((state) => state.cart.shippinInfo);
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);
  const totalquantity = cart.reduce((acc, item) => acc + item.qty, 0);

  const [pickUp, setPickUp] = useState("");

  const orderItem = [];
  for (let index = 0; index < cart.length; index++) {
    const { title, price, category, image, qty, id } = cart[index];
    orderItem.push({ title, price, category, image, qty, id });
  }
  const total = cart.reduce(
    (acc, item) => acc + item.qty * Math.floor(item.price),
    0
  );
  return (
    <div className="w-[350px] shadow-lg px-4 py-4 max-h-max rounded  ">
      <div className="w-full flex justify-between border-b-1 py-3">
        <h2 className="text-xl font-semibold uppercase">Order details</h2>
        <Button variant={"primary"} size={"sm"}>
          <Link href="/cart">Modify Cart</Link>
        </Button>
      </div>
      {/* items */}

      <div className="flex flex-col gap-4 w-full mt-10">
        {cart.map((item, index) => {
          return <OrderItems key={index} Items={item} />;
        })}
      </div>
      {/* <OrderItems Items={item} /> */}
      {/* total */}
      <div className="flex flex-col gap-1 mt-15">
        <div className="w-full flex items-center justify-between border-b-2 py-2">
          <span className="font-semibold ">Sub Total:</span>
          <span>${total}</span>
        </div>
        <div className="w-full flex items-center justify-between border-b-2 py-2">
          <span className="font-semibold ">Delivery Feel:</span>
          <span>${3000}</span>
        </div>

        <div className="w-full flex items-center justify-between border-b-2 py-2">
          <span className="font-bold ">Total: </span>
          <span>${total + 3000}</span>
        </div>
      </div>
      {/* Place Order Button */}
      <div className="w-full mt-8">
        <CheckOutButton
          items={orderItem}
          shipping={shippingAddress}
          totalquantity={totalquantity}
          paymentMethod={paymentMethod}
          total={total}
        />
      </div>
    </div>
  );
};

export default OrderDetails;
