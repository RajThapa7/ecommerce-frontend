"use client";
import Footer from "@/components/Footer/Footer";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* <SearchBar />
      <MyNavbar />
      <MyCarousel /> */}
      <ProductSlider />
      {/* <div className="flex flex-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}
      <Footer />
    </div>
  );
}
