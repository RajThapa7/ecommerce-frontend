import Image from "next/image";
import React from "react";
import logo from "public/elogo.png";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";
import MyButton from "../Button/Button";
import { BadgeIcon } from "../BadgeIcon";
import { NotificationsMenu } from "../NotificationMenu/NotificationMenu";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

export default function SearchBar() {
  return (
    <div className=" py-4 bg-cyan-500 flex flex-row justify-around gap-x-12 px-6">
      <Image src={logo} alt="logo" width={100} />
      <div className="flex flex-row flex-1 relative">
        <input
          type={"text"}
          placeholder="search karnali"
          className="w-full border-none rounded-lg ring-orange-500 focus:ring-2 px-8 outline-none"
        />
        <button className="bg-orange-400 absolute right-0 h-full rounded-r-lg px-3 transition-smooth hover:bg-orange-500">
          <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
        </button>
      </div>
      <div className="justify-end flex gap-x-5 ">
        {/* <ProfileMenu /> */}
        <MyButton className="text-white" variant="text">
          <UserIcon width={20} />
          sign in
        </MyButton>
        <MyButton className="p-0" variant="text">
          <NotificationsMenu />
        </MyButton>
        <MyButton variant="text" className="text-white">
          <HeartIcon width={20} />
          wish list
        </MyButton>
        <BadgeIcon />
      </div>
    </div>
  );
}
