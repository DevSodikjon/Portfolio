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

            <div className='mt-28 flex flex-row relative items-center justify-center w-full h-full z-[20]'>
                <div className="w-full h-auto top-0 z-[5]">
                    <motion.div
                        className="text-[40px] font-semibold text-center text-gray-200"
                    >
                        Services

                    </motion.div>

                    <div className="mt-10">
                        <div className="flex justify-evenly my-10">
                            <motion.div variants={slideInFromLeft(0.5)} className="Welcome-">
                                <div className="service_type w-[250px] rounded-lg">
                                    <div className="overflow-hidden group">
                                        <Image src="/UI-UX_service.png" alt="frontend_logo" width={180} height={180} className="ml-2 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <h2 className="text-white bold text-xl mt-6">Front end development</h2>
                                    <p className="text-slate-300 mt-4">
                                        Creating responsive, modern, and user-friendly interfaces with React, Tailwind CSS, and TypeScript.
                                    </p>
                                </div>
                            </motion.div>
                            <div className="service_type w-[250px] overflow-hidden">
                                <div className="overflow-hidden group">
                                    <Image src="/bot_service.png" alt="frontend_logo" width={180} height={180} className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                </div>
                                <h2 className="text-white bold text-xl mt-6">Telegram bot</h2>
                                <p className="text-slate-300 mt-4">
                                    Developing intelligent and fast Telegram bots for automation, task management, and business workflows using Node.js.
                                </p>
                            </div>
                            <div className="service_type w-[250px]">
                                <div className="overflow-hidden group">
                                    <Image src="/landingPage_sevice.png" alt="frontend_logo" width={180} height={180} className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                </div>
                                <h2 className="text-white bold text-xl mt-6">Landing page</h2>
                                <p className="text-slate-300 mt-4">
                                    Designing clean, high-converting landing pages to showcase products, services, or personal brands with performance in mind.
                                </p>
                            </div>
                            <div className="service_type w-[250px]">
                                <div className="overflow-hidden group">
                                    <Image src="/frontend_service.png" alt="frontend_logo" width={180} height={180} className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                </div>
                                <h2 className="text-white bold text-xl mt-6">Full stack development</h2>
                                <p className="text-slate-300 mt-4">
                                    Building complete web applications with seamless frontend and backend integration using React, Node.js, and MongoDB.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Services
