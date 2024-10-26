"use client";
import Image from "next/image";

export default function TextCard() {
  return (
    <div className="absolute w-[450px] h-[470px] bg-gradient-to-r from-blue-400 to-pink-400 rounded-lg p-8 flex items-center justify-center">
      <div className="absolute w-[450px] h-[470px] bg-white bg-opacity-30 backdrop-blur-sm rounded-lg">
        <Image
          src="/Text.png" // Replace with actual path
          alt="Controller"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
