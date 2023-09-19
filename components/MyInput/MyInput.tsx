"use client";

import { Input, InputStylesType } from "@material-tailwind/react";

export default function MyInput(props: InputStylesType) {
  return <Input crossOrigin={undefined} color="blue" {...props.defaultProps} />;
}
