import React from 'react';
import SectionHeader from './sectionheader';
import { blogs } from '@/data/blogs';
import Link from 'next/link';

const ProfileCard = () => {
  const blog = blogs[6];
  return (
    <div className="flex max-w-6xl mx-auto p-10 gap-10 mt-14">
      {/* Image Column */}
      <div className="w-1/2">
        <Link
          key={blog.id}
          href={{ pathname: '/blogs/blog', query: { id: blog.id } }}
          className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <img
            src={blog.image}
            alt="Profile"
             className="w-full h-full rounded-2xl object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Details Column */}
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl semi-font-bold text-white mb-4">{blog.title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">{blog.excerpt}</p>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-4">
          {blog.content.map((item, index) => (
            <li key={index}>
              {item.heading}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const BlogPosts = () => {
  const BLOG_POSTS = blogs.slice(0, 6);
  return (
    <div className="py-20 pt-30">
      <SectionHeader
        overline=""
        title={<span className="text-[3rem] font-normal ">Latest Insights & News</span>}
        description="Stay updated with our latest thoughts on technology, design, and development."
      />
      <ProfileCard />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="bg-[#2E2E2E] rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Link
                  key={post.id}
                  href={{ pathname: '/blogs/blog', query: { id: post.id } }}
                  className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />

                </Link>
              </div>
              <div className="p-5 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.published}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default BlogPosts; 