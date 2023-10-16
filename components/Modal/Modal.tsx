"use client";
import { Dialog } from "@material-tailwind/react";
import React, { Dispatch, ReactNode } from "react";

export function Modal({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        {children}
      </Dialog>
    </>
  );
}
