"use client";

import classNames from "@/utils/classNames";
import { Button } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/button";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface MyButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "gradient" | "text";
  className?: string;
  color?: color;
}

const MyButton = ({
  children,
  variant,
  className,
  color,
  ...props
}: MyButtonProps) => {
  return (
    <Button
      color={color}
      {...props}
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
