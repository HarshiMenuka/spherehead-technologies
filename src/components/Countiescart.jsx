import React from "react";
import "tailwindcss";

 const Countiescart = () => {
    return(
        <section className="bg-black  text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-blue-400 text-sm uppercase tracking-wide mb-2">
          Counties
        </p>
        <h2 className="text-4xl font-bold mb-4">Our Global Reach</h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-8">
  <div className="p-4 rounded-lg shadow bg-[#2E2E2E] w-full sm:w-40 md:w-55">
    <p className="text-xl font-bold">7+</p>
    <p className="text-gray-400 text-sm mt-2">Years of Experience</p>
  </div>
  <div className="p-4 rounded-lg shadow bg-[#2E2E2E] w-full sm:w-40 md:w-55">
    <p className="text-xl font-bold">100%</p>
    <p className="text-gray-400 text-sm mt-2">Project Completion Rate</p>
  </div>
  <div className="p-4 rounded-lg shadow bg-[#2E2E2E] w-full sm:w-40 md:w-55">
    <p className="text-xl font-bold">15+</p>
    <p className="text-gray-400 text-sm mt-2">Countries With Active Client Base</p>
  </div>
  <div className="p-4 rounded-lg shadow bg-[#2E2E2E] w-full sm:w-40 md:w-55">
    <p className="text-xl font-bold">200+</p>
    <p className="text-gray-400 text-sm mt-2">Customer Rating</p>
  </div>
</div>


      </div>
    </section>

    );
 };

 export default Countiescart;