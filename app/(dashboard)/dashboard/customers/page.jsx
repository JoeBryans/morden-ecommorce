import Image from "next/image";
import React from "react";
import { GetUsers } from "@/action/action";
import Pagenation from "../_components/Pagenation";
import Link from "next/link";
import NavBar from "../_components/NavBar";

const page = async ({ searchParams }) => {
  const param = await searchParams;
  const search = param?.search || "";
  const page = param?.page || "";
  const { totalUsers, data } = await GetUsers(search, page);

  console.log(data);
  return (
    <div className="w-full ">
      <NavBar />
      <div className="max-w-[70rem]  w-[90%] flex flex-col mx-auto mt-24">
        <div className="card bg-base-100  max-w-full w-[90%] z-20 ">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left table">
              {/* head */}
              <thead className="w-full">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>Category</th>
                  <th>verification</th>
                  <th>id</th>
                  {/* <th>Instock</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="relative ">
                {/* row 1 */}
                {data.map((item, index) => {
                  return (
                    <tr key={index} className="h-20 py-2 gap-4  ">
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              {item?.image ? (
                                <Image
                                  width={500}
                                  height={500}
                                  priority
                                  src={item?.image}
                                  alt={item?.name}
                                />
                              ) : (
                                <Image
                                  width={500}
                                  height={500}
                                  priority
                                  src="/2460470.png"
                                  alt={"photo"}
                                />
                              )}
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </td>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>
                        <span className="">{item?.phone}</span>
                      </td>
                      <td>
                        <span className="">verified</span>
                      </td>
                      <td>
                        <span className="">{item?.updatedAt}</span>
                      </td>
                      <td>
                        <span className="">$ 3,600,000</span>
                      </td>
                      {/* <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th> */}
                      <td>
                        <div className="flex flex-col gap-2">
                          <button className="text-white rounded-lg bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2 font-semibold transition:all w-full">
                            <Link href={`/dashboard/customers/${item?.id}`}>
                              edit
                            </Link>
                          </button>
                          <button className="text-white rounded-lg bg-rose-500 hover:bg-white hover:text-rose-500 hover:border-rose-500 hover:border-2 font-semibold transition:all w-full">
                            <Link href={`/dashboard/customers/${item?.id}`}>
                              delete
                            </Link>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagenation totalItems={totalUsers} />
        </div>
      </div>
    </div>
  );
};

export default page;
