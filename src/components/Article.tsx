"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { blogs } from "../data/blogs";

export default function Article() {
  const router = useRouter();
  const params = useSearchParams();
  const id = Number(params.get("id"));
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    setTimeout(() => router.push("/"), 3000);
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        No article found. Redirecting…
      </div>
    );
  }

  const contentCount = blog.content.length;
  const images = blog.additionalImages?.slice(0, contentCount) || [];

  return (
    <article className="bg-black text-white py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          <p className="text-sm text-gray-400">
            {blog.category} • {blog.published} • {blog.readTime} read
          </p>
          <p className="text-md text-gray-300 mt-4">{blog.excerpt}</p>
        </header>

        {/* Image + Content Rows */}
        {blog.content.map((block, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Image */}
            <div className="relative w-full md:w-[400px] h-[180px] rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
              {images[idx] ? (
                <Image
                  src={images[idx]}
                  alt={`${blog.title} image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{block.heading}</h2>
              <p className="mt-2 text-gray-300">{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
