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
    <header className="flex items-center justify-between p-4 text-lg font-light md:p-6 md:text-2xl">
      <Link href="/">
        <h1 className="pb-1">Sameer Jadav</h1>
      </Link>
      <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx("pb-1 capitalize transition-all", {
                "text-neutral-400 hover:text-neutral-100": !isActive,
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
