"use client";
import { IProductCard } from "@/types";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ProductCard from "../ProductCard/ProductCard";
import SmallProductCard from "../SmallProductCard/SmallProductCard";

interface IProductSliderProps {
  breakpoints: {
    [width: number]: SwiperOptions;
  };
  title: string;
  data: IProductCard[];
  cardType?: "small" | "default";
}

export default function ProductSlider({
  breakpoints,
  title,
  data,
  cardType = "default",
}: IProductSliderProps) {
  const swiperRef = useRef<Swiper>();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <CategoryTitle title={title} />
        <div className="absolute top-2 right-6 flex flex-row gap-2 items-center justify-center">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className={
              isStart ? "cursor-not-allowed text-gray-600" : "text-orange-500"
            }
          >
            <FaChevronLeft size={16} className="transition-smooth" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className={
              isEnd ? "cursor-not-allowed text-gray-600" : "text-orange-500"
            }
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* carousel  */}
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={30}
        onReachBeginning={() => setIsStart(true)}
        onReachEnd={() => setIsEnd(true)}
        onSlideChange={() => {
          if (isStart || isEnd) {
            setIsEnd(false);
            setIsStart(false);
          }
        }}
        grid={{
          fill: "row",
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Grid]}
        className="!w-full !h-full !pb-10 !pt-6 !px-[2px]"
      >
        {data.map(({ img, price, title, reducedPrice, tag }) => (
          <SwiperSlide
            key={title}
            className="!h-fit !opacity-100 !flex items-center justify-center"
          >
            {cardType === "default" ? (
              <ProductCard {...{ img, price, title, reducedPrice, tag }} />
            ) : (
              <SmallProductCard {...{ img, price, title, reducedPrice, tag }} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
