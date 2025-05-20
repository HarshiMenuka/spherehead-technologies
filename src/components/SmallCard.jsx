"use client";
import React from "react";

export default function SmallCard({ image }) {
  return (
    <div className="text-white rounded-sm p-3 sm:p-4 md:p-5 space-y-4">
      <div className="w-full bg-gray-300 rounded-md overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt="Small Visual"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
