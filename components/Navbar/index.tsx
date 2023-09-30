"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Navbar,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navbarData } from "./navbarData";

interface INavListMenuProps {
  title: string;
  navListMenuData: {
    id: number;
    title: string;
    items: {
      id: number;
      title: string;
      link: string;
    }[];
  }[];
}

function NavListMenu({ title, navListMenuData }: INavListMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuData.map(({ title, items }, key) => (
    <div className="flex items-center gap-3 rounded-lg" key={key}>
      <div>
        <p className="flex items-center text-md font-bold text-gray-800">
          {title}
        </p>
        <div className="flex flex-col gap-4 mt-5">
          {items.map(({ id, title, link }) => (
            <Link
              href={link}
              key={id}
              className="hover:decoration-gray-600 underline decoration-white transition-smooth"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <p>
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </p>
        </MenuHandler>
        {/* menu items  */}
        <MenuList className="hidden rounded-xl lg:flex lg:flex-row justify-between px-14 py-10 items-start w-full">
          <div className="grid grid-cols-3 xl:grid-cols-4 justify-between w-1/2 gap-y-8 place-items-start justify-items-center">
            {renderItems}
          </div>
          <div className="relative aspect-video h-full w-1/2">
            <Image
              alt="logo"
              src="https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/v/i/vivobook_16x_1_.png"
              fill
              quality={100}
              className="object-contain "
              sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
            />
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

export function MyNavbar() {
  return (
    <Navbar className="w-full px-4 py-2 max-w-[100%] !rounded-none hidden lg:flex">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:flex flex-1 justify-start">
          {navbarData.map((item) => (
            <NavListMenu
              title={item.title}
              key={item.id}
              navListMenuData={item.data}
            />
          ))}
        </div>
      </div>
    </Navbar>
  );
}
