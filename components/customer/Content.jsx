"use client";
import React, { useState, useEffect } from "react";

const Content = () => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const getAddress = async () => {
      const res = await fetch("/api/address");
      const data = await res.json();
      setAddress(data);
    };
    getAddress();
  }, []);
  return (
    <div className="w-max">
      <div className="w-max grid grid-cols-2 gap-4">
        {address &&
          address.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-0.5 w-full border-b-2 py-2 shadow-sm"
            >
              <div className="px-8 flex flex-col gap-1">
                <span className=" capitalize">location: {item.address}</span>

                <span className=" capitalize">city:{item.city} </span>
                <span className=" capitalize">state: {item.state} </span>
                <span className=" capitalize">nation: {item.country}</span>
                <span className=" capitalize">zipCode: {item.zip}</span>
                <span className=" capitalize">phone: 08162373317</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
