"use client";

import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Song } from "../../../types";
import getSongsByUserId from "@/actions/getSongsByUserId";
import { twMerge } from "tailwind-merge";
import usePlayer from "@/hooks/usePlayer";

export type LayoutProps = {
  children: React.ReactNode;
  songs: Song[];
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, songs }) => {
  const player = usePlayer();
  return (
    <div
      className={twMerge(
        `flex h-full`,
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <Sidebar songs={songs} />
      <main className="h-full flex-1 overflow-y-auto p-2">{children}</main>
    </div>
  );
};

export default Layout;
