"use client";
import {
  BaggageClaim,
  CreditCard,
  HandCoinsIcon,
  LayoutDashboard,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../headers/Logo";
import * as FaIcons from "react-icons/fa";
import MobileSideBar from "@/components/dashboard/MobileSideBar";
const SideBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const items = [
    {
      title: "DashBoard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Product",
      url: "/dashboard/products",
      icon: BaggageClaim,
    },
    {
      title: "Order",
      url: "/dashboard/orders",
      icon: CreditCard,
    },
    {
      title: "Revenue",
      url: "/dashboard/revenue",
      icon: HandCoinsIcon,
    },
    // {
    //   title: "Inbox",
    //   url: "#",
    //   icon: Inbox,
    // },
    {
      title: "Customers",
      url: "customers",
      icon: User2,
    },
    // {
    //   title: "Calendar",
    //   url: "#",
    //   icon: Calendar,
    // },

    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      <div
        className={`${
          openNav ? "w-44 " : "w-20 "
        } hidden md:flex flex-col gap-4  h-full px-4 sticky top-0  shadow-lg border-r bg-white  pt-4  transition-all duration-300 ease-in-out`}
      >
        <div className="w-full flex justify-end my-3">
          <FaIcons.FaBars
            size={20}
            onClick={() => setOpenNav(!openNav)}
            className="cursor-pointer"
          />
        </div>
        <div className="group flex flex-col gap-4 w-[95%] ">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 w-full  ">
                <Link
                  href={item.url}
                  className="flex items-center gap-4 w-max p-2 rounded-lg h-full hover:bg-slate-200 "
                >
                  <item.icon className="group  text-slate-700 " size={20} />
                  <span className={`${openNav ? "block" : " hidden "} `}>
                    {item.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* small screen */}
      <div className="flex md:hidden    bg-white">
        <MobileSideBar item={items} />
      </div>
    </>
  );
};

export default SideBar;
