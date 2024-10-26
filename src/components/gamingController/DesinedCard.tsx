"use client";
import React from "react";
import TextCard from "./TextCard";
import ControllerCard from "./ControllerCard";

function DesinedCard() {
  return (
    <div className="relative bg-[url('/Bground.jpg')] bg-cover bg-center h-screen rounded-lg shadow-lg p-16 flex justify-center items-center w-full">
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full flex items-center ml-36">
          <TextCard />
        </div>
        <div className="absolute w-1/2 flex ml-96">
          <ControllerCard />
        </div>
        <div className="absolute items-center mr-96 ">
          <img
            src="/Controller.png"
            alt="DualSense Controller"
            className="max-w-sm hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default DesinedCard;
