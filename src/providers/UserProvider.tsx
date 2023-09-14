"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import React from "react";

export type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider: React.FunctionComponent<UserProviderProps> = ({
  children,
}) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
