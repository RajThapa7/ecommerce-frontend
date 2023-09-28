"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Grid, Navigation, Pagination } from "swiper/modules";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import SmallProductCard from "../SmallProductCard/SmallProductCard";

export default function ProductSlider() {
  const swiperRef = useRef<Swiper>();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <CategoryTitle />
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
        // slidesPerView={"auto"}
        slidesPerView={1}
        breakpoints={{
          // 540: {
          //   slidesPerView: 2,
          //   grid: {
          //     fill: "row",
          //     rows: 2,
          //   },
          // },
          // 840: {
          //   slidesPerView: 3,
          //   grid: {
          //     fill: "row",
          //     rows: 2,
          //   },
          // },
          700: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
          1000: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
          1320: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
        }}
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
        {/* <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide> */}
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
        <SwiperSlide className="!h-fit !opacity-100 !flex items-center justify-center">
          <SmallProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
