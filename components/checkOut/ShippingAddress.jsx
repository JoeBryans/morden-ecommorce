"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addShippinAddress } from "../../hooks/store/cartSlice";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ShippingAddress = ({ delivary }) => {
  const router = useRouter();
  const [address, setAddress] = useState([]);
  const [checked, setChecked] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAddress = async () => {
      const res = await fetch("/api/address");
      const data = await res.json();
      setAddress(data);
    };
    getAddress();
  }, []);
  const handleChance = (e, item, index) => {
    //

    if (checked === index) {
      setChecked(null);
    } else {
      setChecked(index);
      dispatch(addShippinAddress(item));
    }
  };
  const handleClose = () => {
    router.push("/check-out");
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <h4
            className={`${
              delivary
                ? "py-1 rounded-lg border-2 cursor-pointer  border-gray-300 hover:border-2 font-semibold  w-max px-2"
                : "hidden"
            }`}
          >
            Change
          </h4>
          <h4
            className={`${
              !delivary
                ? "py-1 rounded-lg border-2 cursor-pointer  border-gray-300 hover:border-2 font-semibold  w-max px-2"
                : "hidden"
            }`}
          >
            Choose
          </h4>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose Your Preferable Location</DialogTitle>
          </DialogHeader>
          <div>
            <div className="flex flex-col gap-4 py-2 w-full  max-h-[50vh] overflow-y-scroll">
              {/* <div className="flex flex-col gap-0.5 w-full ">
                <div className="flex items-center gap-3">
                  <Input
                    type={"checkbox"}
                    className={"w-4 h-4 rounded-full"}
                    checked={true}
                  />
                  <h3 className=" capitalize">Ogwezi joshua</h3>
                </div>
                <div className="px-8 flex flex-col gap-1">
                  <span className=" capitalize">Address</span>
                  <span className=" capitalize">08162373317</span>
                </div>
              </div> */}
              {address &&
                address.map((item, i) => (
                  <div className="flex flex-col gap-0.5 w-full border-b-2 py-2">
                    <div className="flex items-center gap-3">
                      <Input
                        type={"checkbox"}
                        name="shipping"
                        className={"w-4 h-4 rounded-full"}
                        checked={checked === i}
                        onChange={(e) => handleChance(e, item, i)}
                      />
                      <span className=" capitalize">
                        location: {item.address}
                      </span>
                    </div>
                    <div className="px-8 flex flex-col gap-1">
                      <span className=" capitalize">city:{item.city} </span>
                      <span className=" capitalize">state: {item.state} </span>
                      <span className=" capitalize">
                        nation: {item.country}
                      </span>
                      <span className=" capitalize">zipCode: {item.zip}</span>
                      <span className=" capitalize">phone: 08162373317</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                variant="primary"
                className={"w-max px-5"}
                onclick={handleClose}
              >
                Ok
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ShippingAddress;
