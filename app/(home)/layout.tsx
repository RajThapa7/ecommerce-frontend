"use client";
import { MyCarousel } from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import FeaturedSection from "@/features/FeaturedSection/FeaturedSection";
import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import "../globals.css";

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

          <MyCarousel />
          <div className="max-w-7xl mx-auto px-8 2xl:px-0">{children}</div>
          <FeaturedSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
