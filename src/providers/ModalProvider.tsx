"use client";

import React, { useEffect, useState } from "react";

import AuthModal from "@/components/modals/AuthModal";
import Modal from "@/components/Modal";

export type ModalProviderProps = {};

const ModalProvider: React.FunctionComponent<ModalProviderProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
