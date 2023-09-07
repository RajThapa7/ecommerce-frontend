import { MyCarousel } from "@/components/Carousel/Carousel";
import { MyNavbar } from "@/components/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";

export default function Page() {
  return (
    <>
      <SearchBar />
      <MyNavbar />
      <MyCarousel />
    </>
  );
}
