"use client";

import React, { useMemo } from "react";

import { BiSearch } from "react-icons/bi";
import Box from "../../Box";
import { HiHome } from "react-icons/hi";
import Library from "../../Library";
import SidebarItem from "./SidebarItem";
import { Song } from "../../../../types";
import { usePathname } from "next/navigation";

export type SidebarProps = {
  songs: Song[];
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({ songs }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );

  return (
    <aside className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] py-2 pl-2">
      <Box className="flex flex-col gap-y-4 px-5 py-4">
        {routes.map((route) => (
          <SidebarItem key={route.label} {...route} />
        ))}
      </Box>
      <Box className="overflow-y-auto h-full">
        <Library songs={songs} />
      </Box>
    </aside>
  );
};

export default Sidebar;
