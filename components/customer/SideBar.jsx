"use client";
import {
  BookCheck,
  ClockArrowDownIcon,
  CreditCard,
  Heart,
  Inbox,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import MobileSideBar from "../dashboard/MobileSideBar";
import { usePathname } from "next/navigation";
import { SignOut } from "../headers/SignOut";
const SideBar = () => {
  const items = [
    {
      pages: [
        {
          title: "My Profile",
          url: "/customer/account",
          icon: User2,
        },
        {
          title: "Inbox",
          url: "/customer/inbox",
          icon: Inbox,
        },
        {
          title: "Order",
          url: "/customer/orders",
          icon: CreditCard,
        },
        {
          title: "Pending Reviews",
          url: "/customer/pending-review",
          icon: BookCheck,
        },
        // {
        //   title: "Inbox",
        //   url: "#",
        //   icon: Inbox,
        // },
        {
          title: "Saved",
          url: "/customer/saved",
          icon: Heart,
        },
        {
          title: "Recent Views",
          url: "/customer/recent-views",
          icon: ClockArrowDownIcon,
        },
      ],
    },
    {
      setting: [
        {
          title: "Settings",
          urls: "/customer/settings",
          icons: Settings,
        },
      ],
    },
  ];
  console.log(items);
  const path = usePathname();
  return (
    <>
      <div
        className={`w-56  flex flex-col gap-4  h-max py-5  px-4 shadow-sm   `}
      >
        <div className=" flex flex-col gap-4 w-[95%] ">
          {items?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 w-full  ">
                <div className="  w-full py-4 ">
                  {item.pages?.map((page, index) => {
                    return (
                      <div key={index} className="w-full  ">
                        <Link
                          href={page.url}
                          className={`${
                            path === page.url
                              ? "bg-slate-300 p-2 flex items-center gap-4 w-full"
                              : "bg-white p-2 flex items-center gap-4 w-full"
                          } rounded-lg h-full hover:bg-slate-200`}
                        >
                          <page.icon
                            className="group  text-slate-700 "
                            size={20}
                          />
                          <span className={` block`}>{page.title}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full   ">
                  {item.setting?.map((page, index) => {
                    return (
                      <div key={index} className=" py-2 w-full">
                        {/* <span className="border-b-2 py-2 w-full">
                          {page.title}
                        </span> */}
                        <Link
                          href={page.urls}
                          className={`${
                            path === page.urls
                              ? "bg-slate-300 p-2 flex items-center gap-4 w-full"
                              : "bg-white p-2 flex items-center gap-4 w-full"
                          } rounded-lg h-full hover:bg-slate-200`}
                        >
                          <page.icons
                            className="group  text-slate-700 "
                            size={20}
                          />
                          <span className={` block`}>{page.title}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full  pt-4 ">
          <SignOut />
        </div>
      </div>
    </>
  );
};

export default SideBar;
