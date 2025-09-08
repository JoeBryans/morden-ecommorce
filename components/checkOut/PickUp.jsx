import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";

const PickUp = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <h4 className="py-1 rounded-lg border-2 cursor-pointer text-blue-600  border-blue-600 hover:border-2 font-semibold  w-max px-2">
            Choose
          </h4>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose Your Preferable Location</DialogTitle>
          </DialogHeader>
          <div>
            <div className="flex justify-between py-2 w-full border-b-2 ">
              <div className="flex flex-col gap-0.5 w-full ">
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
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default PickUp;
