"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSlider from "@/components/ProductSlider/ProductSlider";

export default function Page() {
  return (
    <div className="flex flex-col">
      <ProductSlider />
      <ProductCard />
    </div>
  );
}
