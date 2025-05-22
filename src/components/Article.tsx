"use client";

import { blogs } from "../data/blogs";
import Image from "next/image";

export default function Article() {
  return (
    <article className="text-white py-10 px-4 sm:px-8 bg-[#111111]">
      <hr />
      <div className="max-w-5xl mx-auto space-y-10 pt-10">
        <header>
          <h1 className="text-4xl font-bold mb-2">More articles you'll love</h1>
        </header>
        {blogs.slice(0, 3).map((blog) => {
          // Prefer additionalImages[0], fallback to image, fallback to placeholder
          const displayImage = blog.image || null;
          return (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row gap-6 items-start bg-[#111111] rounded-lg p-4"
            >
              {/* Image */}
              <div className="relative w-full md:w-[300px] h-[180px] rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                {displayImage ? (
                  <Image
                    src={displayImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              {/* Content at the end of the card */}
              <div className="flex-1 flex flex-col justify-end mt-20">
                <p className="text-sm text-gray-400 mb-1">{blog.published}</p>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <h5 className="text-sm font-semibold">{blog.excerpt}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
