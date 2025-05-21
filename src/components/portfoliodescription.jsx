"use client";
import React from "react";

export default function Discript({ title, description }) {
  return (
    <div className="text-white rounded-sm space-y-1">
      <h3 className="text-lg md:text-xl  text-white">
        {title}
      </h3>
      <p className="text-gray-300 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
