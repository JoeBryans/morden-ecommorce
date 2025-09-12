import React from "react";
import { getOrder } from "@/action/action";
import NavBar from "../../../(root)/dashboard/NavBar";
import Link from "next/link";
import Pagenation from "../_components/Pagenation";
import { Button } from "@/components/ui/button";
const page = async ({ searchParams }) => {
  const param = await searchParams;
  const search = param?.search || "";
  const page = param?.page || "";
  const { totalItems, data } = await getOrder(search, page);
  // const data = await getOrder();
  // console.log(data);

  // const orders = data
  return (
    <div className="w-full mt-5">
      <NavBar seachBar={true} />
      <div className="max-w-[75rem]  w-[90%] flex flex-col mx-auto mt-8">
        <div className=" bg-base-100 mx-auto w-full z-20  ">
          <div className="w-full px-4 border-2 py-4 overflow-x-auto hide-scrollbar rounded-lg">
            <table className="w-max  text-left table gap-2 ">
              {/* head */}
              <thead className=" w-full">
                <tr>
                  <th className=" w-72">User Name</th>
                  <th className=" w-72">Email</th>
                  <th className=" w-72">OrderId</th>
                  <th className=" w-36">Price</th>
                  <th className=" w-36">Payment</th>
                  <th className=" w-36">Delivary Status</th>
                  <th className=" w-36">No. of items</th>
                  {/* <th> Action</th> */}
                  <th className=" w-36"></th>
                </tr>
              </thead>
              <tbody className="relative ">
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="h-20 place-items-center py-2 text-left "
                      >
                        <td className="max-w-28 ">
                          <span className="line-clamp-1  ">
                            {item.users.name}
                          </span>
                        </td>
                        <td className="max-w-28 ">
                          <span className="line-clamp-1  ">
                            {item.users.email}
                          </span>
                          {/* short description */}
                        </td>
                        <td className="max-w-28 ">
                          <span className="line-clamp-1  ">{item.id}</span>
                          {/* short description */}
                        </td>

                        <td>
                          <span>{item.total_price}</span>
                        </td>

                        <td>
                          <span className="">{item.paymentStatus}</span>
                        </td>
                        <td>
                          <span className="">{item.deliveryStatus}</span>
                        </td>
                        <td>
                          <span className=" text-center">{item.total_qty}</span>
                        </td>
                        {/* <td>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </td> */}
                        <td>
                          <div className="flex items-center gap-2 ">
                            <Button variant={"primary"}>
                              <Link href={`/dashboard/orders/${item?.id}`}>
                                edit
                              </Link>
                            </Button>
                            <Button variant={"outline"}>
                              <Link href={`/dashboard/orders/${item?.id}`}>
                                View
                              </Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagenation totalItems={totalItems} />
        </div>
      </div>
    </div>
  );
};

export default page;
