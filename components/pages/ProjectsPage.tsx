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
            {/* <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-520px]  h-full w-full left-0 z-[1] object-cover "
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video> */}
            <motion.div
                initial="hidden"
                animate="visible"
                className=" px-20 mt-40 w-full z-[20]"
            >
                <div className="title">
                    <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white">
                        Projects
                    </h1>
                </div>

                <div className="rounded-xl w-full p-8 gap-12 flex justify-center flex-wrap ">
                    {Projects_data.map((project) => (

                        <div className="card_box w-[320px]">
                            <ProjectCard
                                src={project.image}
                                title={project.project_name}
                                description={project.description}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
}