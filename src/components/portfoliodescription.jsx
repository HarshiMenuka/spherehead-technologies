"use client";
import React from "react";

export default function Discript({ description }) {
  return (
    <div className="text-white rounded-sm  space-y-4">
      <p className="text-gray-300 text-sm md:text-base ">
        {description}
      </p>
    </div>
  );
}
