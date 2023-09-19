"use client";
import classNames from "@/utils/classNames";
import Image from "next/image";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSlider({ className }: { className?: string }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={classNames(className, "h-fit")}>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="w-full">
            <ReactImageMagnify
              {...{
                enlargedImagePortalId: "portal",
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: "https://swiperjs.com/demos/images/nature-1.jpg",
                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                },
                largeImage: {
                  src: "https://swiperjs.com/demos/images/nature-1.jpg",
                  width: 1500,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "150%",
                },
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: "https://swiperjs.com/demos/images/nature-1.jpg",
                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                },
                largeImage: {
                  src: "https://swiperjs.com/demos/images/nature-1.jpg",
                  width: 1500,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "100%",
                },
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: "https://swiperjs.com/demos/images/nature-1.jpg",
                  sizes:
                    "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                },
                largeImage: {
                  src: "https://swiperjs.com/demos/images/nature-1.jpg",
                  width: 1500,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "100%",
                },
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !w-full"
      >
        <SwiperSlide>
          <div className="w-[70px] relative pt-[100%]">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="profile"
              objectFit="fill"
              fill
              className="w-full top-0 left-0 object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[70px] relative pt-[100%]">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="profile"
              objectFit="fill"
              fill
              className="w-full top-0 left-0 object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[70px] relative pt-[100%]">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="profile"
              objectFit="fill"
              fill
              className="w-full top-0 left-0 object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[70px] relative pt-[100%]">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="profile"
              objectFit="fill"
              fill
              className="w-full top-0 left-0 object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[70px] relative pt-[100%]">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="profile"
              objectFit="fill"
              fill
              className="w-full top-0 left-0 object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[70px] relative pt-[100%]">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="profile"
              objectFit="fill"
              fill
              className="w-full top-0 left-0 object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
