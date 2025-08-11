"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

interface TimelineEntry {
    title: string;
    img: string;
    content: React.ReactNode;
}

export const Timeline = ({ data = [] }: { data?: TimelineEntry[] }) => {

    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-18 px-4 md:px-8 lg:px-10 
            max-390:max-w-full max-390:px-2
            
            ">
                <h1 className="text-lg md:text-4xl mb-4 font-semibold text-black dark:text-white max-w-4xl 
                max-390:max-w-full
                ">
                    From Curiosity to Code <br /> My Ongoing Evolution
                </h1>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-base max-w-sm 
                max-768:text-sm
                max-800:text-sm
                ">
                    A quick overview of my skills, experience, and the journey that brought me here.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10 max-768:gap-0 
                        max-1100:gap-0
                        max-500:gap-0
                        "
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full max-1500:w-[30%]">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center
                             max-360:w-6 max-360:left-5
                             max-370:w-6 max-370:left-5
                             max-375:w-6 max-375:left-5
                             max-390:w-6 max-390:left-5
                             max-400:w-6 max-400:left-5
                             max-768:w-8 max-768:left-4
                             ">
                                <Image src={item.img} alt="edu_icon" width={100} height={100} />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 
                            max-360:text-sm
                            max-370:text-sm
                            max-375:text-sm
                            max-380:text-sm
                            max-390:text-sm
                            max-768:text-2xl
                            max-1100:text-2xl

                            ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full
                        max-360:pl-0
                        max-370:pl-0
                        max-380:pl-0
                        max-390:pl-0
                        max-500:pl-0
                        max-768:pl-0
                        max-1100:pl-0
                        ">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 max-360:text-lg">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};





