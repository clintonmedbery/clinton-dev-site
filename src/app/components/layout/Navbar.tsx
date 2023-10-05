import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { defaultNavItems } from "./navItems";

type NavbarProps = {
  onMenuButtonClick(): void;
};

export const Navbar = (props: NavbarProps) => {
  const path = usePathname();
  const maybeNavItem = defaultNavItems.find(item => item.href === path);
  return (
    <nav
      className={classNames({
        "bg-ox-blue text-zinc-500 border-double border-b": true,
        "flex items-center": true,
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true
      })}
    >
      <div className="font-bold text-lg">{maybeNavItem?.heading ?? ""}</div>
      <div className="flex-grow" />
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
