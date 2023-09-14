import React from "react";
import Sidebar from "./sidebar/Sidebar";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Layout;
