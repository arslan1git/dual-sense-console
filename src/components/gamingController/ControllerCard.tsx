"use client";
import Image from "next/image";
import { useState } from "react";
import data from "../data/cardDeatials.json";

export default function ControllerCard() {
  const [selectedColor, setSelectedColor] = useState("pink");

  const colors = [
    { name: "Pink", value: "pink" },
    { name: "Blue", value: "black" },
    { name: "White", value: "White" },
    { name: "Orange", value: "orange" },
  ];

  return (
    <div className="w-[500px] h-[420px] flex items-center bg-blue-400 bg-opacity-30 shadow-lg rounded-lg backdrop-blur-sm">
      {/* Details Section */}
      <div className="relative w-full pl-36 pr-4 text-center md:text-left">
        <h1 className="text-5xl font-bold">{data.heading}</h1>
        <p className="mb-8 ">{data.product_name}</p>
        <p className="text-xl font-bold mb-4">{data.price}</p>

        {/* Color Options */}
        <div className="flex items-center font-medium gap-3 justify-center md:justify-start mb-4">
          Colors :{" "}
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`w-5 h-5 rounded-full mx-1 border-2 ${
                selectedColor === color.value
                  ? "border-pink-200"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color.value }}
            ></button>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs  text-white mb-5">{data.description}</p>

        {/* Buttons */}
        <div className="flex items-center justify-center md:justify-start">
          <button className="bg-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 mr-4">
            Add to Cart
          </button>
          <button className="bg-blue-400 text-white font-bold border border-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
