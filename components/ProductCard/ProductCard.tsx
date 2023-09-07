"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MyTooltip } from "../Tooltip/Tooltip";

export default function ProductCard() {
  const router = useRouter();
  const reducedPrice = 800;
  const price = 999;

  const discountPercentage = Math.round(((price - reducedPrice) * 100) / price);

  return (
    <Link
      href={"/login"}
      className="group relative block overflow-hidden transition-smooth ring-0 w-fit hover:ring-1 ring-gray-400"
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

      <img
        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6 flex flex-row justify-between">
        <div className="flex flex-col">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium w-fit">
            Limited Offer
          </span>

          <h3 className="mt-4 group-hover:decoration-blue-600 underline decoration-white transition-smooth text-lg text-blue-600 font-semibold">
            Robot Toy
          </h3>

          {reducedPrice ? (
            <>
              <p className="mt-1.5 text-lg text-red-500">Rs.{reducedPrice}</p>
              <div className="flex flex-row justify-center items-center gap-2">
                <p className="text-sm text-gray-500 line-through">Rs.{price}</p>
                <p className="text-gray-900 text-sm">-{discountPercentage}%</p>
              </div>
            </>
          ) : (
            <p className="mt-1.5 text-lg text-gray-700">Rs.{price}</p>
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
