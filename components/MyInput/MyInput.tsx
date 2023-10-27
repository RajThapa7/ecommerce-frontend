"use client";

import { Input } from "@material-tailwind/react";
import { color, size } from "@material-tailwind/react/types/components/input";
import { InputHTMLAttributes } from "react";

type InputType = {
  [key in keyof InputHTMLAttributes<HTMLInputElement>]: key extends "size"
    ? size
    : key extends "color"
    ? color
    : InputHTMLAttributes<HTMLInputElement>[key];
} & { className?: string };

export default function MyInput(props: InputType) {
  return (
    <Input crossOrigin={undefined} {...props} className={props.className} />
  );
}
