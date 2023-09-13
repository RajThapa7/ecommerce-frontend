import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className={montserrat.className}>
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
