import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Song } from "../../../types";
import getSongsByUserId from "@/actions/getSongsByUserId";

export type LayoutProps = {
  children: React.ReactNode;
  songs: Song[];
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, songs }) => {
  return (
    <div className="flex h-full">
      <Sidebar songs={songs} />
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Layout;
