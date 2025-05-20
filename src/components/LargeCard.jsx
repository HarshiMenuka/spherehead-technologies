"use client";
import React from "react";

export default function LargeCard({ image, description }) {
  return (
    <div className="text-white rounded-[12px] sm:rounded-[24px] px-0 sm:px-5 space-y-4 w-full">
      <div className="w-full bg-gray-300 rounded-[12px] sm:rounded-[24px] overflow-hidden">
        <img
          src={image}
          alt="Large Visual"
          className="w-full object-contain"
        />
      </div>

      <p className="text-gray-300 text-sm md:text-base pt-4 px-4 sm:px-0">
        {description}
      </p>
    </div>
  );
}
