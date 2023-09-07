import { MyCarousel } from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import { MyNavbar } from "@/components/Navbar";
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";

export default function Page() {
  return (
    <>
      <SearchBar />
      <MyNavbar />
      {/* <MyCarousel /> */}
      <div className="flex flex-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </>
  );
}
