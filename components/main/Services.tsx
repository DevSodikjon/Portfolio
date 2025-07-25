"use client";
import React from "react";

import { motion } from "framer-motion";
import {
    slideInFromTop,
    slideInFromLeft,
    slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";

const Services = () => {
    return (
        <motion.div variants={slideInFromTop}>
            <div className="container mx-auto">
                <div className='mt-28 flex relative items-center justify-center w-full h-full z-[20]'>
                    <div className="w-full h-auto top-0 z-[5]">
                        <motion.div
                            className="text-[40px] font-semibold text-center text-gray-200"
                        >
                            Services

                        </motion.div>

                        <div className="mt-10">
                            <div className="max-500:flex-col max-600:flex-col items-center sm:flex-wrap md:flex-wrap lg:flex-wrap justify-around xl:flex-wrap flex flex-wrap my-10">

                                <div className="service_type w-[250px] mt-6">
                                    <div className="overflow-hidden group">
                                        <Image src="/UI-UX_service.png" alt="frontend_logo" width={180} height={180} className="sm:w-36 md:w-40 lg:w-44 ml-2 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <h2 className="sm:text-lg md:text-lg lg:text-lg text-white bold text-xl mt-6">Front end development</h2>
                                    <p className="sm:text-sm md:text-base lg:text-lg text-xl text-slate-300 mt-4">
                                        Creating responsive, modern, and user-friendly interfaces with React, Tailwind CSS, and TypeScript.
                                    </p>
                                </div>

                                <div className="service_type w-[250px] mt-6">
                                    <div className="overflow-hidden group">
                                        <Image src="/bot_service.png" alt="frontend_logo" width={180} height={180} className="sm:w-36 md:w-40 lg:w-44 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <h2 className="sm:text-lg md:text-lg lg:text-lg text-white bold text-xl mt-6">Telegram bot</h2>
                                    <p className="sm:text-sm md:text-base lg:text-lg text-xl text-slate-300 mt-4">
                                        Developing intelligent and fast Telegram bots for automation, task management, and business workflows using Node.js.
                                    </p>
                                </div>

                                <div className="service_type w-[250px] mt-6">
                                    <div className="overflow-hidden group">
                                        <Image src="/landingPage_sevice.png" alt="frontend_logo" width={180} height={180} className="sm:w-36 md:w-40 lg:w-44 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <h2 className="sm:text-lg md:text-lg lg:text-lg text-white bold text-xl mt-6">Landing page</h2>
                                    <p className="text-slate-300 mt-4">
                                        Designing clean, high-converting landing pages to showcase products, services, or personal brands with performance in mind.
                                    </p>
                                </div>

                                <div className="service_type w-[250px] mt-6">
                                    <div className="overflow-hidden group">
                                        <Image src="/frontend_service.png" alt="frontend_logo" width={180} height={180} className="sm:w-36 md:w-40 lg:w-44 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <h2 className="sm:text-lg md:text-lg lg:text-lg text-white bold text-xl mt-6">Full stack development</h2>
                                    <p className="sm:text-sm md:text-base lg:text-lg text-xl text-slate-300 mt-4">
                                        Building complete web applications with seamless frontend and backend integration using React, Node.js, and MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Services
