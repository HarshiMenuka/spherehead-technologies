import React from "react";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    date: "Feb 5 2025",
    category: "Branding",
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "", // replace with actual image if needed
  },
  {
    date: "Feb 5 2025",
    category: "Branding",
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "",
  },
  {
    date: "Feb 5 2025",
    category: "Branding",
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "",
  },
];

export default function MoreArticles() {
  return (
    <section className="bg-black text-white py-10 px-4 sm:px-8">
      <h2 className="text-xl font-semibold mb-6">More articles you’ll love</h2>
      <div className="space-y-8">
        {articles.map((article, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-4">
            {/* Image Placeholder with icon */}
            <div className="relative w-full sm:w-[300px] h-[180px] bg-gray-300 rounded-lg overflow-hidden">
              <div className="absolute bottom-2 right-2 bg-black p-2 rounded-sm">
                <ArrowUpRight className="text-white" size={20} />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1">
              <p className="text-sm text-gray-400">
                {article.category} {article.date}
              </p>
              <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
              <p className="text-sm text-gray-300 mt-1">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
