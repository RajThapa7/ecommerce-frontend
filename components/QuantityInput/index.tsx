"use client";
import { useState } from "react";
import MyButton from "../Button/Button";

export default function QuantityInput() {
  const [number, setNumber] = useState(1);
  return (
    <div className="flex w-fit flex-row items-center gap-2">
      {/* <p>Quantity</p> */}
      <div className="flex items-center rounded border border-gray-200">
        <MyButton
          onClick={() => setNumber((prev) => --prev)}
          disabled={number == 1}
          className="h-10 w-fit rounded-none rounded-l-lg"
        >
          -
        </MyButton>

        <input
          type="number"
          id="Quantity"
          value={number}
          // disabled
          onChange={(e) => setNumber(Number(e.target.value))}
          className="transition-smooth h-10 w-16 border-transparent text-center outline-none [-moz-appearance:_textfield] focus:ring-1 focus:ring-blue-400 sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
        />

        <MyButton
          className="h-10 w-fit rounded-none rounded-r-lg"
          onClick={() => setNumber((prev) => ++prev)}
        >
          +
        </MyButton>
      </div>
    </div>
  );
}
