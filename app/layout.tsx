import React, { PropsWithChildren } from "react";
import "./globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
