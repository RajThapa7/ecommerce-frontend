"use client";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Collapse,
  Drawer,
  IconButton,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
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
        <Typography
          variant="h6"
          color="blue-gray"
          className="flex items-center text-sm"
        >
          {title}
        </Typography>
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
          <Typography as="div" variant="small" className="font-normal">
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
          </Typography>
        </MenuHandler>
        {/* menu items  */}
        <MenuList className="hidden rounded-xl lg:flex lg:flex-row justify-between px-14 py-10 items-start w-full">
          <div className="grid grid-cols-4 justify-between w-full gap-y-8 place-items-start justify-items-center">
            {renderItems}
          </div>
          <Image
            alt="logo"
            src="https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/v/i/vivobook_16x_1_.png"
            width={500}
            height={200}
          />
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 flex-1 mx-8 ">
//       <div className="flex flex-row flex-1 items-center">
//         <NavListMenu />
//       </div>
//     </List>
//   );
// }

export function MyNavbar() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar className="w-full px-4 py-2 max-w-[100%]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:flex flex-1 justify-start">
          {/* <NavList /> */}
          {navbarData.map((item) => (
            <NavListMenu
              title={item.title}
              key={item.id}
              navListMenuData={item.data}
            />
          ))}
        </div>
        {/* mobile menu  */}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Drawer open={open} onClose={closeDrawer} size={300}>
        <Sidebar />
      </Drawer>
    </Navbar>
  );
}
