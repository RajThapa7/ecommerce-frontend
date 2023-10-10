import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className={montserrat.variable}>
      <body>
        <div className="">
          <SearchBar />
          <MyNavbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
