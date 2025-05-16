"use client";

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    {
        value: 7,
        suffix: "+",
        label: "Projects"
    },
    {
        value: 100,
        suffix: "%",
        label: "Client Satisfaction"
    },
    {
        value: 15,
        suffix: "+",
        label: "Countries With Active Client Base"
    },
    {
        value: 3,
        suffix: " Years+",
        label: "Industry Experience"
    }
];

interface CounterProps {
    value: number;
    suffix: string;
    duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        let startTime: number | null = null;
        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);
            
            if (progress < 1) {
                setCount(Math.min(Math.floor(value * progress), value));
                requestAnimationFrame(animateCount);
            } else {
                setCount(value);
            }
        };
        
        requestAnimationFrame(animateCount);
    }, [value, duration]);
    
    return <>{count}{suffix}</>;
};

export function AboutCount() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <div className="w-full text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 mb-[50px] mx-12 md:mx-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            ref={ref}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1E1E1E] p-3 md:p-5 rounded-lg text-left shadow-lg"
                        >
                            <div className="text-sm md:text-xl font-bold mb-1">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-gray-400 text-sm font-normal">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}