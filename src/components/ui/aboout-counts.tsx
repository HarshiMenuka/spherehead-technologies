"use client";

import React from 'react';

const stats = [
    {
        value: "7+",
        label: "Projects"
    },
    {
        value: "100%",
        label: "Client Satisfaction"
    },
    {
        value: "15+",
        label: "Countries With Active Client Base"
    },
    {
        value: "3 Years+",
        label: "Industry Experience"
    }
];

export function AboutCount() {
    return (
        <div className="w-full text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">


                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 mb-[50px] mx-12 md:mx-32">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#1E1E1E] p-3 md:p-5 rounded-lg text-left shadow-lg"
                        >
                            <div className="text-sm md:text-xl font-bold mb-1 ">{stat.value}</div>
                            <div className="text-gray-400 text-sm  font-normal">{stat.label}</div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
}