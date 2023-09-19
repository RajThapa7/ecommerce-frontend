import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductShortDescription from "@/components/ProductShortDescription";

export default function ProductPage() {
  return (
    <div className="px-6 relative">
      <div className="flex flex-col md:flex-row gap-y-10 gap-x-10 justify-center">
        <div
          id="portal"
          className="absolute left-[520px] top-0 z-10 bg-gray-100"
        ></div>
        <ImageSlider className="w-full md:w-[50%] lg:w-[40%]" />
        <ProductShortDescription className="w-full md:w-[50%] lg:w-[60%]" />
      </div>
      {/* <Review /> */}
      <MyTab />
      {/* <ReviewSection /> */}
      {/* <ProductDetail className="mt-12" /> */}
    </div>
  );
}
