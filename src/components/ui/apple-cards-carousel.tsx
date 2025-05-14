"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconDeviceMobile, IconCode, IconWorld, IconServer } from "@tabler/icons-react";

interface CarouselProps {
  items: JSX.Element[];
}

type Card = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

 return (
    <div className="relative w-full mt-12">
      <div
        className="flex w-full overflow-x-scroll scroll-smooth [scrollbar-width:none] py-10"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-6 px-4 mx-auto max-w-7xl">
          {items}
        </div>
      </div>
      <div className="absolute -bottom-8 right-40 flex justify-end gap-2">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] hover:bg-gray-600 disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] hover:bg-gray-600 disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export const Card = ({ card }: { card: Card }) => {
  return (
    <div className="flex-shrink-0 w-[280px] p-6 rounded-lg bg-[#1E1E1E] text-white">
      <div className="text-[#64B5F6] mb-4">
        {card.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {card.description}
      </p>
    </div>
  );
};