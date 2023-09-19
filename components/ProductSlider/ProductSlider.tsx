// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Grid, Navigation, Pagination } from "swiper/modules";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductSlider() {
  const swiperRef = useRef<Swiper>();
  return (
    <div className="">
      <div className="relative">
        <CategoryTitle />
        <div className="absolute top-2 right-6 flex flex-row gap-2 items-center justify-center">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <FaChevronLeft
              size={16}
              className="hover:text-gray-800 text-gray-600 transition-smooth"
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hover:text-gray-600 text-gray-600 transition-smooth"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* carousel  */}
      <Swiper
        ref={swiperRef}
        slidesPerView={"auto"}
        spaceBetween={30}
        // loop={true}
        grid={{
          fill: "row",
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination, Navigation, Grid]}
        className="!w-full !h-full !pb-10 !pt-6 !px-6"
      >
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="!w-fit !h-fit !opacity-100 !flex items-center justify-center">
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
