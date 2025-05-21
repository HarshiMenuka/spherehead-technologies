"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  JSX,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  description: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = window.innerWidth < 640 ? container.offsetWidth : 300;
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardWidth = window.innerWidth < 640 ? container.offsetWidth : 300;
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-4 sm:py-5 md:py-6 lg:py-8 [scrollbar-width:none] snap-x snap-mandatory"
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 overflow-visible",
              "mx-auto max-w-7xl w-full px-4 sm:pl-4 sm:pr-0",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="flex-shrink-0 w-[80%] sm:w-auto rounded-3xl last:pr-0 sm:last:pr-[5%] md:last:pr-[33%] snap-center"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 -mt-2 sm:-mt-3 md:-mt-4">
          <div className="flex justify-center sm:justify-end gap-2 mr-0 sm:mr-8 md:mr-10 lg:mr-12">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  return (
    <div
      className="relative z-10 flex h-[420px] w-full flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 sm:h-60 sm:w-44 md:h-[28rem] md:w-72 dark:bg-neutral-900 mx-auto sm:mx-0"
    >
     <div className="pointer-events-none absolute inset-0 z-30">
  <div className="absolute inset-0 bg-gradient-to-b from-black/99 to-black/50" />
</div>

      <div className="relative z-40 flex h-full w-full flex-col justify-start px-4 pt-4 md:px-6 md:pt-14">
        <div className="w-full">
          <p className="text-left font-sans text-lg font-semibold [text-wrap:balance] text-white md:text-2xl mb-4 md:mb-6">
            {card.title}
          </p>
          <p className="text-sm text-gray-200 md:text-base text-left">
            {card.description}
          </p>
        </div>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 z-10 object-cover"
      />
    </div>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
  fill,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      fill={fill}
      sizes={sizes}
      quality={90}
      priority={false}
      alt={alt || "Background image"}
      {...rest}
    />
  );
};
