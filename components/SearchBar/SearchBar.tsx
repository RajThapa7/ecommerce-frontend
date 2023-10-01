"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Drawer, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "public/elogo.png";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BadgeIcon } from "../BadgeIcon";
import MyButton from "../Button/Button";
import { NotificationsMenu } from "../NotificationMenu/NotificationMenu";
import { Sidebar } from "../Sidebar/Sidebar";
import { MyTooltip } from "../Tooltip/Tooltip";

const data = {
  hello: "world",
  hello1: "world",
  hello2: "world",
  hello3: "world",
};

export const SearchTab = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <motion.div
      transition={{ ease: "linear" }}
      animate={isOpen ? { y: 0 } : { y: -200 }}
      className={`absolute left-0 right-0 z-50 w-full bg-gray-200 shadow-lg`}
    >
      <div className="relative flex flex-1 flex-col px-4 py-4 lg:hidden">
        <input
          type={"text"}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search karnali"
          className="w-full rounded-lg border-none px-8 py-2 text-gray-800 outline-none ring-1 ring-gray-300 focus:ring-orange-500"
        />
        <button className="transition-smooth absolute right-4 h-10 max-h-fit rounded-r-lg bg-orange-400 px-3 hover:bg-orange-500">
          <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
        </button>
        {searchTerm && (
          <div className="absolute left-3 top-[59px] w-[calc(100%-24px)] rounded-md bg-white px-4 py-4 shadow-xl">
            <table className="w-full border-collapse">
              <tbody className="">
                {Object.entries(data).map(([key, value]) => (
                  <tr
                    key={key}
                    className="cursor-pointer border-b-2 border-gray-300 text-sm text-gray-900 last:border-none hover:bg-gray-200"
                  >
                    <td className="w-full break-words px-5 pb-2 pt-3 font-semibold">
                      {key}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function SearchBar() {
  const [isSearchTabOpen, setIsSearchTabOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);
  return (
    <div>
      <div className="relative flex flex-row justify-between gap-x-12 overflow-x-hidden bg-cyan-500 px-2 py-4 md:px-6 lg:justify-around">
        {/* mobile menu  */}
        <div className="flex flex-row">
          <IconButton
            variant="text"
            color="white"
            className="lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className="relative hidden flex-1 flex-row lg:flex">
          <input
            type={"text"}
            placeholder="search karnali"
            className="w-full rounded-lg border-none px-8 outline-none ring-orange-500 focus:ring-2"
          />
          <button className="transition-smooth absolute right-0 h-full rounded-r-lg bg-orange-400 px-3 hover:bg-orange-500">
            <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
          </button>
        </div>

        {/* buttons  */}
        <div className="flex justify-end">
          {/* <ProfileMenu /> */}
          <MyButton
            onClick={() => setIsSearchTabOpen((prev) => !prev)}
            className="text-white lg:!hidden"
            variant="text"
          >
            <MyTooltip content="Search">
              {isSearchTabOpen ? (
                <RiCloseFill size={24} />
              ) : (
                <MagnifyingGlassIcon width={20} />
              )}
            </MyTooltip>
          </MyButton>

          <MyButton className="text-white" variant="text">
            <MyTooltip content="Profile">
              <UserIcon width={20} />
            </MyTooltip>
          </MyButton>

          <MyButton className="!hidden text-white lg:!flex" variant="text">
            <NotificationsMenu />
          </MyButton>

          <MyButton className="!hidden text-white lg:!flex" variant="text">
            <MyTooltip content="Wishlist">
              <HeartIcon width={20} />
            </MyTooltip>
          </MyButton>

          <MyButton className="group text-white" variant="text">
            <MyTooltip content="My Cart">
              <BadgeIcon />
            </MyTooltip>
          </MyButton>
        </div>

        <Drawer open={open} onClose={closeDrawer} overlay={false}>
          <Sidebar {...{ closeDrawer }} />
        </Drawer>
      </div>
      {/* search tab for smaller devices */}
      <SearchTab isOpen={isSearchTabOpen} />
    </div>
  );
}
