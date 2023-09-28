import ProductSlider from "@/components/ProductSlider/ProductSlider";
import Image from "next/image";

export default function FeaturedSection() {
  return (
    <div className=" bg-gray-200 px-8 flex flex-col justify-center py-20">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-1">
          <div className="relative w-full aspect-video ">
            <Image
              alt="featured-product-image"
              quality={100}
              src={
                "https://transvelo.github.io/electro-html/2.0/assets/img/665X616/img1.png"
              }
              fill
              className="object-contain"
              sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
            />
          </div>
        </div>
        <div className="w-full 2xl:w-1/2">
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}
