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
      className={`z-50 left-0 w-full shadow-lg absolute right-0 bg-gray-200`}
    >
      <div className="px-4 py-4 lg:hidden flex flex-col flex-1 relative">
        <input
          type={"text"}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search karnali"
          className="w-full border-none rounded-lg ring-1 text-gray-800 ring-gray-300 focus:ring-orange-500 px-8 py-2 outline-none"
        />
        <button className="bg-orange-400 absolute right-4 max-h-fit h-10 rounded-r-lg px-3 transition-smooth hover:bg-orange-500">
          <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
        </button>
        {searchTerm && (
          <div className="bg-white shadow-xl px-4 py-4 rounded-md absolute w-[calc(100%-24px)] top-[59px] left-3">
            <table className="w-full border-collapse">
              <tbody className="">
                {Object.entries(data).map(([key, value]) => (
                  <tr
                    key={key}
                    className="border-b-2 border-gray-300 last:border-none hover:bg-gray-200 text-gray-900 text-sm cursor-pointer"
                  >
                    <td className="pb-2 pt-3 w-full px-5 break-words font-semibold">
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
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <div>
      <div className="relative py-4 bg-cyan-500 flex flex-row justify-between lg:justify-around px-2 gap-x-12 md:px-6 overflow-x-hidden">
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
        <div className="hidden lg:flex flex-row flex-1 relative">
          <input
            type={"text"}
            placeholder="search karnali"
            className="w-full border-none rounded-lg ring-orange-500 focus:ring-2 px-8 outline-none"
          />
          <button className="bg-orange-400 absolute right-0 h-full rounded-r-lg px-3 transition-smooth hover:bg-orange-500">
            <MagnifyingGlassIcon width={20} color="white" strokeWidth={20} />
          </button>
        </div>

        {/* buttons  */}
        <div className="justify-end flex">
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

          <MyButton className="text-white !hidden lg:!flex" variant="text">
            <NotificationsMenu />
          </MyButton>

          <MyButton className="text-white !hidden lg:!flex" variant="text">
            <MyTooltip content="Wishlist">
              <HeartIcon width={20} />
            </MyTooltip>
          </MyButton>

          <MyButton className="text-white group" variant="text">
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
