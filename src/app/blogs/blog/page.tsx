'use client';
import { blogs } from "@/data/blogs";
import { useSearchParams, useRouter} from "next/navigation";
import { useEffect } from "react";


const HeroSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = Number(searchParams.get('id'));
  const blog = blogs.find(p => p.id === id);

  useEffect(() => {
    if (!blog) {
      const timeout = setTimeout(() => {
        router.push('/'); // Redirect to homepage
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [blog, router]);

  if (!blog) {
    return <p className="h-screen flex justify-center items-center bg-[#161616] text-lg m-0" style={{ color: 'white' }}> No blog found. Redirecting to homepage...</p>;
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white mt-24 bg-[#111111]" // ← added mt-24
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600&sat=-100')`,
      }}
    >

      <div className="absolute bottom-20 left-24 max-w-4xl p-10 rounded-xl">
        {/* Hero Title */}
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

        {/* Info Points */}
        <div className="flex flex-col md:flex-row gap-x-10 text-sm">
          <p className="text-gray-300">Published Feb 10, 25</p>
          <p className="text-gray-300">Design</p>
          <p className="text-gray-300">Read Time 5 min</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
