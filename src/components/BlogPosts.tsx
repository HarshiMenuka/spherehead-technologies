import React from 'react';
import SectionHeader from './sectionheader';

const BLOG_POSTS = [
  {
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the future of web development.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    category: "Technology"
  },
  {
    title: "Building Scalable Applications",
    excerpt: "Learn best practices for building applications that can grow with your business.",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Development"
  },
  {
    title: "UI/UX Design Principles",
    excerpt: "Essential design principles for creating user-friendly interfaces.",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&auto=format&fit=crop&q=60",
    category: "Design"
  }
];

const BlogPosts = () => {
  return (
    <div className="py-20">
      <SectionHeader
        overline="Blog"
        title="Latest Insights & News"
        description="Stay updated with our latest thoughts on technology, design, and development."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="bg-[#2E2E2E] rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts; 