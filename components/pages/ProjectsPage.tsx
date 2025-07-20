"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import BgVideo from "../sub/BgVideo";
import ProjectCard from "../sub/ProjectCard";

import {
    Projects_data
} from "@/constants";


export default function ProjectPage() {
    return (

        <div className="relative flex flex-col h-full w-full">
            <BgVideo />
            <motion.div
                className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]"
            >
                <div className="h-full w-full flex flex-col gap-5 justify-center m-auto mb-20 text-start">
                    <div className=" min-h-auto mx-auto items-center justify-center p-6">
                        {/* Card container */}
                        <div className="rounded-xl max-w-6xl w-full p-8 gap-8 flex flex-wrap justify-around">
                            {Projects_data.map((project) => (

                                <div className="card_box w-[300px]">
                                    <ProjectCard
                                        src={project.image}
                                        title={project.project_name}
                                        description={project.description}
                                        link={project.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>


        </div>
    );
}