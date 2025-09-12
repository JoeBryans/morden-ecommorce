import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { Getproducts } from "@/action/action";
import Link from "next/link";
import Pagenation from "../_components/Pagenation";
import { Button } from "@/components/ui/button";
import NavBar from "../_components/NavBar";
const page = async ({ searchParams }) => {
  const param = await searchParams;
  const search = param?.search || "";
  const page = param?.page || "";
  const { totalItems, data } = await Getproducts(search, page);

  return (
    <div className="w-full  min-h-[100vh] ">
      <NavBar label="Create Product" href="/dashboard/products" />
      <div className="max-w-[70rem]  hide-scrollbar overflow-scroll w-[90%] flex flex-col mx-auto mt-24">
        <div className="card bg-base-100  max-w-full w-[90%] z-20 ">
          <div className="w-full">
            <table className="w-full text-left table">
              {/* head */}
              <thead className="w-full">
                <tr>
                  <th className="w-28">Image</th>
                  <th className="w-48 px-2">Name</th>
                  <th className="w-44 px-3">Brand</th>
                  <th className="w-44">Category</th>
                  <th className="w-28">Price</th>
                  <th className="w-28">Discount</th>
                  <th className="w-28">Instock</th>
                  <th className="w-44 ">Actions</th>
                </tr>
              </thead>
              <tbody className="relative ">
                {/* row 1 */}
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr key={index} className="h-20 py-2 gap-4  ">
                        <td>
                          <div className="flex items-start gap-3">
                            <div className="avatar">
                              <div className=" h-24 w-24">
                                <Image
                                  width={500}
                                  height={500}
                                  priority
                                  src={item?.image[0]?.url}
                                  alt={item?.name}
                                  className="w-[80%] h-20 object-contain"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </td>
                        <td className="line-clamp-2 ">
                          {item?.name}
                          <br />
                          {/* short description */}
                        </td>
                        <td className="px-3">{item?.brand}</td>
                        <td>
                          <span className="">{item?.category}</span>
                        </td>
                        <td>
                          <span className="">${item?.price}</span>
                        </td>
                        <td>
                          <span className="">${item?.discount}</span>
                        </td>
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox"
                              checked={item?.instock}
                              readOnly={true}
                            />
                          </label>
                        </th>
                        <td>
                          <div className="w-full  flex items-center  gap-4">
                            <Button variant={"primary"}>
                              <Link href={`/dashboard/products/${item?.id}`}>
                                edit
                              </Link>
                            </Button>
                            <Button variant={"destructive"}>
                              <Link href={`/dashboard/products/${item?.id}`}>
                                delete
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
