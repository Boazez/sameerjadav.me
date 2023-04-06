"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/contact": {
    name: "contact",
  },
};

export default function Header() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  return (
    <header className="flex items-center justify-between px-4 py-6 text-lg md:p-6 md:text-2xl">
      <Link href="/" className="pb-1 text-lg md:text-2xl">
        Sameer Jadav
      </Link>
      <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx("pb-1 capitalize transition-all", {
                "text-myGray hover:text-white": !isActive,
                "border-b": isActive,
              })}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
