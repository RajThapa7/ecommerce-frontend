"use client";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import ProductShortDescription from "@/components/ProductShortDescription";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-row gap-16">
      <div
        id="portal"
        className="absolute left-[400px] top-0 z-10 bg-gray-100"
      ></div>
      {/* <SearchBar />
      <MyNavbar />
      <MyCarousel />
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
      <Footer /> */}
      {/* <ImageSlider className="" />
      <div className="flex flex-grow basis-96">hello world friends ...</div> */}
      <ImageSlider className="flex-1/3" />
      <ProductShortDescription className="flex-2/3 w-full" />
    </div>
  );
}
