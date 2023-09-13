import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="max-w-7xl mx-auto">{children}</div>;
}
