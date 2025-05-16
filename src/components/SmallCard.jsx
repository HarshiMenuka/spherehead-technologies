"use client";
import React from "react";

export default function SmallCard({ image}) {
  return (
    <div className="text-white rounded-sm p-5 space-y-4">
      <div className="h-60 md:h-80 lg:h-96 bg-gray-300 rounded-md overflow-hidden">
        <img
          src={image}
          alt="Small Visual"
          className="w-full h-full object-cover"
        />
      </div>
    
    </div>
  );
}
