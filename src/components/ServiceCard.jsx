"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  description,
  listItems,
  imagePosition = "right",
}) {
  // Determine image order based on position
  const imageOrder = imagePosition === "left" ? "md:order-1" : "md:order-2";
  const textOrder = imagePosition === "left" ? "md:order-2" : "md:order-1";

  return (
    <motion.div
      className="
        w-full max-w-6xl mx-auto
        bg-[#2E2E2E]
        flex flex-col md:flex-row
        items-start justify-between
        gap-8 md:gap-10
        py-10 md:py-12
        px-4 md:px-10
        border border-[#2c2c2c]
        rounded-xl
      "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image always on top in mobile, order based on position in md+ */}
      <div className={`w-full md:w-2/5 h-56 md:h-64 bg-gray-300 rounded-md ${imageOrder}`} />

      {/* Text block */}
      <div className={`w-full md:w-3/5 text-white ${textOrder}`}>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-4">
          {description}
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 sm:space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-sm sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
