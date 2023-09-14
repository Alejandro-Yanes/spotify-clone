import React from "react";
import { twMerge } from "tailwind-merge";

export type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

const Box: React.FunctionComponent<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};

export default Box;
