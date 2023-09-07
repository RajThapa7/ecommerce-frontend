"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export function BadgeIcon() {
  return (
    <button className="relative group">
      <ShoppingCartIcon
        width={25}
        height={30}
        color="white"
        className="transition-smooth group-hover:text-orange-400"
      />
      <div className="absolute bg-orange-500 -top-0 -right-3 px-2 py-1 rounded-full">
        <p className="text-xs font-semibold text-white">1</p>
      </div>
    </button>
  );
}
