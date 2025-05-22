'use client';
import { blogs } from "@/data/blogs";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import '../page.css';

const HeroSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id'));
  const blog = blogs.find(p => p.id === id);

  useEffect(() => {
    if (!blog) {
      const timeout = setTimeout(() => {
        router.push('/');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [blog, router]);

  if (!blog) {
    return (
      <p className="min-h-screen flex justify-center items-center bg-[#111111] text-lg m-0 text-white">
        No blog found. Redirecting to homepage...
      </p>
    );
  }

  return (
    <div className="bg-[#111111] p-21 ">
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] text-white rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(17,17,17,0.8), rgba(17,17,17,0.0)), url('${blog.image}')`,
        }}
      >

        <div className="absolute bottom-10 left-24 max-w-4xl p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
          <div className="flex flex-col md:flex-row gap-x-10 text-sm">
            <p className="text-gray-300">{blog.published}</p>
            <p className="text-gray-300">{blog.category}</p>
            <p className="text-gray-300">{blog.readTime}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
