"use client";
import { IProductCard } from "@/types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function ProductCard({
  img,
  price,
  title,
  reducedPrice,
  tag,
}: IProductCard) {
  const discountPercentage =
    reducedPrice && Math.round(((price - reducedPrice) * 100) / price);

  return (
    <Link
      href={"/login"}
      className="group relative block overflow-hidden transition-smooth outline-1 w-full max-w-sm outline-gray-300 hover:outline-gray-400 h-fit outline"
    >
      <MyTooltip content="Add to wishlist">
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
          onClick={(e) => e.preventDefault()}
        >
          <span className="sr-only">Wishlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>{" "}
        </button>
      </MyTooltip>

      <div className="w-full mx-auto relative h-56 aspect-video">
        <Image
          src={img}
          alt="profile"
          fill
          className="object-contain transition duration-500 group-hover:scale-105"
          sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
        />
      </div>

      <div className="relative border-t-2 border-t-gray-200 bg-white p-6 flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium w-fit">
            {tag}
          </span>

          <h3 className="mt-4 group-hover:decoration-blue-600 underline decoration-white transition-smooth text-lg text-blue-600 font-semibold">
            {title}
          </h3>

          {reducedPrice ? (
            <>
              <p className="mt-1.5 text-lg text-red-500 text-left ml-1.5">
                Rs.{reducedPrice}
              </p>
              <div className="flex flex-row justify-center items-center gap-2">
                <p className="text-sm text-gray-500 line-through">Rs.{price}</p>
                <p className="text-gray-900 text-sm">-{discountPercentage}%</p>
              </div>
            </>
          ) : (
            <p className="mt-1.5 text-lg text-gray-700 text-left ml-1.5">
              Rs.{price}
            </p>
          )}
        </div>
        <div className="bg-orange-400 rounded-full w-fit h-fit p-2 transition-smooth hover:bg-orange-600">
          <MyTooltip content="Add to cart">
            <ShoppingCartIcon
              width={20}
              color="white"
              onClick={(e) => e.preventDefault()}
            />
          </MyTooltip>
        </div>
      </div>
    </Link>
  );
}
