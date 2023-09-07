"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { carouselData } from "./carouselData";

export function MyCarousel() {
  return (
    <Carousel
      loop={true}
      autoplay
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-orange-500" : "w-4 bg-gray-500"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <ChevronLeftIcon width={20} />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <ChevronRightIcon width={20} />
        </IconButton>
      )}
    >
      {carouselData.map(({ description, id, price, title }) => (
        <div key={id} className="relative h-[450px] w-full">
          <img
            src="https://transvelo.github.io/electro-html/2.0/assets/img/1920X422/img2.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full flex flex-row justify-between">
            <div className="px-24 flex flex-col items-start justify-center w-1/2">
              <Typography
                variant="h1"
                className="text-orange-500 mb-4 text-lg uppercase"
              >
                {title}
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 opacity-80 text-gray-900 uppercase text-5xl font-semibold leading-snug"
              >
                {description}
              </Typography>
              <div className="mb-6">
                <p className="text-gray-600">From</p>
                <p className="flex flex-row items-start gap-1 font-semibold text-gray-800">
                  <span className="text-xl">Rs</span>
                  <span className="text-5xl">{price}</span>
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <Button
                  size="lg"
                  className="bg-cyan-400 transition-smooth hover:bg-cyan-500"
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <img
              src="https://transvelo.github.io/electro-html/2.0/assets/img/468X417/img1.png"
              alt="logo"
              className="h-full"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
