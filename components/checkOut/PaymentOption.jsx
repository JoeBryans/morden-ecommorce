"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import {
  addPaymentMethod,
  removePaymentMethod,
} from "../../hooks/store/cartSlice";

const PaymentOption = () => {
  const [checked, setChecked] = useState(null);
  const dispatch = useDispatch();
  const PaymentMethods = [
    {
      id: 1,
      text: "instant payment security with your card payment",
      slug: "Card",
      method: "card",
    },
    {
      id: 2,
      text: "instant payment security with your opay wallet",
      slug: "Opay",
      method: "opay",
    },
    {
      id: 3,
      text: "instant payment security with your card payment",
      slug: "Pay on Delivery",
      method: "pay on delivery",
    },
  ];
  const handleChange = (paymentMethod, index) => {
    if (checked === index) {
      setChecked(null);
      dispatch(removePaymentMethod(null));
    } else {
      const { method } = paymentMethod;

      setChecked(index);
      dispatch(addPaymentMethod(method));
      console.log("paymentMethod", method);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center shadow-lg mb-8">
      <div className="flex w-full items-center gap-3 px-3 py-1 border-b-2">
        <Input
          type={"checkbox"}
          className={"w-4 h-4 rounded-full"}
          checked={checked !== null}
          readOnly={true}
        />
        <h2 className="uppercase"> payment Option</h2>
      </div>
      {/*OPTIONS  */}
      <div className="flex flex-col w-full gap-3 px-3 py-1 border-b-2">
        {PaymentMethods.map((payment, i) => (
          <div key={i} className="mb-3 border-b-2 py-2">
            <div className="flex items-center gap-3 ">
              <Input
                type={"checkbox"}
                className={"w-4 h-4 rounded-full"}
                checked={checked === i}
                onChange={() => handleChange(payment, i)}
                // readOnly={true}
              />
              <span className="">{payment.slug}</span>
            </div>
            <div className="w-full px-6">
              <span>{payment.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOption;
