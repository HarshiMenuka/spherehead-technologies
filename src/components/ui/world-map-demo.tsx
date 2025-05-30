"use client";
import { WorldMap } from "./world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-8 sm:py-16 md:py-24 lg:py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl dark:text-white text-black">
            Remote{" "}
            <span className="text-neutral-400">
              {"Connectivity".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
        </div>
        
        <div className="w-full overflow-hidden">
          <WorldMap
            dots={[
              {
                start: { lat:7.8731, lng: 80.7718 }, // Alaska (Fairbanks)
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
              },
              {
                start: { lat:7.8731, lng: 80.7718 },  // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat:7.8731, lng: 80.7718 },  // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat:7.8731, lng: 80.7718 },  // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat:7.8731, lng: 80.7718 },  // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat:7.8731, lng: 80.7718 },  // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
} 