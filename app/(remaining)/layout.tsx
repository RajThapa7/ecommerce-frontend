import { PropsWithChildren } from "react";
import "../globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="mx-auto mt-12 max-w-7xl px-8">{children}</div>;
}
