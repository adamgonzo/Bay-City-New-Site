"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
    x: 3,
    y: 0,
    w: "64px",
  },
  "/pictures": {
    name: "Pictures",
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

export default function Navbar() {
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
      <nav className="fixed top-0 left-0 right-0 flex justify-center space-x-8 p-4 text-lg fixed z-50 bg-gray-800 text-white">
        {/* Nav links */}
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className={path === pathname ? "font-bold" : "mx-4 hover:underline"}
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
