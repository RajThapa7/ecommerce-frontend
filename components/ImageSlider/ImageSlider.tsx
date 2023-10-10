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

const images = [
  {
    id: 0,
    alt: "image",
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 1,
    alt: "image",
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    id: 2,
    alt: "image",
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
];

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
        {images.map(({ alt, id, img }) => (
          <SwiperSlide key={id}>
            <div className="relative w-full pt-[100%] lg:hidden">
              <Image
                src={img}
                alt="profile"
                objectFit="fill"
                fill
                className="left-0 top-0 w-full object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="hidden w-full lg:flex">
              <ReactImageMagnify
                {...{
                  enlargedImagePortalId: "portal",
                  smallImage: {
                    alt: alt,
                    isFluidWidth: true,
                    src: img,
                    sizes:
                      "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                  },
                  largeImage: {
                    src: img,
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
        ))}
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
        {images.map(({ alt, id, img }) => (
          <SwiperSlide key={id}>
            <div className="relative w-[70px] pt-[100%]">
              <Image
                src={img}
                alt="profile"
                objectFit="fill"
                fill
                className="left-0 top-0 w-full object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
