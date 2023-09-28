import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html className={montserrat.className}>
      <body>
        <div className="">
          <SearchBar />
          <MyNavbar />
          <div className="max-w-7xl mx-auto">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
