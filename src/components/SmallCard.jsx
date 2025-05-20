"use client";
import React from "react";
import Image from "next/image";

export default function SmallCard({ image }) {
  return (
    <div className="text-white rounded-sm p-3 sm:p-4 md:p-5 space-y-4">
      <div className="w-full bg-gray-300 rounded-md overflow-hidden flex justify-center items-center">
        <Image
          src={image}
          alt="Small Visual"
          width={200}
          height={200}
          className="object-contain w-full h-full"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
