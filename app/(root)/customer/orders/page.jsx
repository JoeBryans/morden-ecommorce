import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../auth";
import { getUserOrders } from "../../../action/action";
import Image from "next/image";

const page = async () => {
  const { user } = await getServerSession(authOptions);
  const userId = user?.id;
  const orders = await getUserOrders(userId);
  console.log(orders);

  return (
    <div>
      <h1>Orders</h1>
      <div className="">
        {orders?.map((item, index) => {
          return (
            <div key={index} className=" h-max border-2  py-2 px-4  ">
              <h2>OredeId : {item.id}</h2>
              <div className="w-full h-max border-2 border-slate-300 py-2 px-4 rounded-lg grid grid-cols-3 gap-4 ">
                {item.orderItem?.map((item, index) => {
                  return (
                    <div key={index} className="w-full ">
                      {/* <div>
                        <Image
                          src={item?.image[0]?.url || ""}
                          alt="product"
                          height={100}
                          width={100}
                        />
                      </div> */}
                      <p>{item.qty}</p>
                      <p>{item.total_price}</p>
                    </div>
                  );
                })}
              </div>
              <p>{item.total_qty}</p>
              <p>{item.total_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
