import { MyCarousel } from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "../globals.css";
import FeaturedSection from "@/features/FeaturedSection/FeaturedSection";

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

          <MyCarousel />
          <div className="max-w-7xl mx-auto px-8 2xl:px-0">{children}</div>
          <FeaturedSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
