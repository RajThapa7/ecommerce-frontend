"use client";
import React, { useState } from "react";
import MyButton from "../Button/Button";

export default function QuantityInput() {
  const [number, setNumber] = useState(1);
  return (
    <div className="w-fit flex flex-row items-center gap-2">
      <p>Quantity</p>
      <div className="flex items-center border border-gray-200 rounded">
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
          disabled
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
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
