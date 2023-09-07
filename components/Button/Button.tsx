"use client";

import classNames from "@/utils/classNames";
import { Button } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

interface MyButtonProps extends PropsWithChildren {
  variant?: "filled" | "outlined" | "gradient" | "text";
  className?: string;
}

const MyButton = ({ children, variant, className }: MyButtonProps) => {
  return (
    <Button
      variant={variant}
      className={classNames(
        className,
        "flex justify-center items-center px-4 py-1 gap-x-2"
      )}
    >
      {children}
    </Button>
  );
};

export default MyButton;
