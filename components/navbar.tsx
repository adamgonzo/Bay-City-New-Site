"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../images/bayCityGeneral.jpg";

const navItems = {
  "/": {
    name: "Home",
    x: 3,
    y: 0,
    w: "64px",
  },
  "/pictures": {
    name: "Gallery",
    x: 65,
    y: 36,
    w: "85px",
  },
  "/contact": {
    name: "Contact",
    x: 143,
    y: 70,
    w: "80px",
  },
};

const Navbar = () => {
  type NavItemsKeys = keyof typeof navItems;
  let pathname: NavItemsKeys = "/";
  const pathnameFromUsePathname = usePathname();
  if (
    pathnameFromUsePathname &&
    Object.keys(navItems).includes(pathnameFromUsePathname)
  ) {
    pathname = pathnameFromUsePathname as NavItemsKeys;
  }

  return (
    <aside className="font-serif">
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 z-50 bg-gray-500 text-white">
        <div className="flex items-center space-x-2">
          <Image
            className="h-20 w-20 mix-blend-multiply"
            src={logo}
            alt="logo"
          />
          <div className="flex-row-reverse">
            <span className="text-xl font-bold flex">
              Bay City General Glass
            </span>
            <span className="text-sm font-medium flex text-center font-sans">
              CA LIC# C17813733
            </span>
          </div>
        </div>
        <div className="flex space-x-8 text-xl">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={
                path === pathname ? "font-bold" : "mx-4 hover:underline"
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
