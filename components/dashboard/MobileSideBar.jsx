import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import {
  BaggageClaim,
  CreditCard,
  HandCoinsIcon,
  LayoutDashboard,
  Settings,
  User2,
} from "lucide-react";
const MobileSideBar = () => {
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
    <Sheet className="relative">
      <SheetTrigger asChild className=" absolute right-0">
        <FaIcons.FaBars size={20} className="cursor-pointer z-30" />
      </SheetTrigger>
      <SheetContent>
        <div className=" flex flex-col gap-4 text-black mt-10">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 w-full  ">
                <Link
                  href={item.url}
                  className="flex items-center gap-4 w-max py-2 px-4 rounded-lg h-full hover:bg-slate-200 mx-3"
                >
                  <item.icon className="group  text-slate-700 " size={20} />
                  <span className=" text-blue-600 ">{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
