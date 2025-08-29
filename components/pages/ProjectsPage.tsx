"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import BgVideo from "../sub/BgVideo";
import ProjectCard from "../sub/ProjectCard";

import {
    Projects_data
} from "@/constants";


export default function ProjectPage() {
    return (
        <div className="relative flex flex-col h-full w-full" id="home">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute h-full w-full left-0 z-[1]
                top-[-515px] 
                max-1500:top-[-510px]
                max-1400:top-[-510px]
                max-1300:top-[-510px]
                max-1200:top-[-510px]
                max-1100:top-[-730px]
                max-1000:top-[-730px] max-1000:object-contain
                max-900:top-[-730px]
                max-800:top-[-730px]
                max-768:top-[-730px] 
                max-700:top-[-1380px]
                max-640:top-[-1380px]
                max-600:top-[-1380px]
                max-540:top-[-1380px] 
                max-500:top-[-1380px]
                max-480:top-[-1380px]                      
                max-425:top-[-1380px]                     
                max-400:top-[-1380px]                      
                max-320:top-[-1380px] 
                "
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>


            <motion.div
                initial="hidden"
                animate="visible"
                className=" px-20 mt-40 w-full z-[20]"
            >
                <div className="title">
                    <h1 className="text-[40px] font-bold text-transparent bg-clip-text text-white max-700:text-center">
                        Projects
                    </h1>
                </div>

                <div className="rounded-xl w-full py-12 flex justify-between flex-wrap max-700:justify-center">
                    {Projects_data.map((project, index) => (
                        <Link href={project.link} target="_blank">
                            <div className="card_box w-[320px] my-4 max-800:w-[280px]" key={project.id}>
                                <ProjectCard
                                    src={project.image}
                                    title={project.project_name}
                                    description={project.description}
                                    link={project.link}
                                />
                            </div>
                        </Link>
                    ))}
                </div>

            </motion.div >
        </div >
    );
}