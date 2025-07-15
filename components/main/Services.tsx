"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Services = () => {
    return (
        <div className='mt-28 flex flex-row relative items-center justify-center w-full h-full'>
            <div className="w-full h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Services

                </motion.div>

                <div className="mt-10">
                    <div className="flex justify-evenly my-10">
                        <div className="service_type text-center rounded-lg group hover:cursor-pointer">
                            <Image src="/UI-UX_service.png" alt="frontend_logo" width={200} height={200} className="hover:w-[250] hover:h-[250] hover:cursor-pointer" />
                            <p className="text-white mt-6">Front end development</p>
                        </div>
                        <div className="service_type text-center">
                            <Image src="/bot_service.png" alt="frontend_logo" width={200} height={200} />
                            <p className="text-white mt-6">Telegram bot</p>
                        </div>
                        <div className="service_type text-center">
                            <Image src="/landingPage_sevice.png" alt="frontend_logo" width={200} height={200} />
                            <p className="text-white mt-6">Full stack development</p>
                        </div>
                        <div className="service_type text-center">
                            <Image src="/frontend_service.png" alt="frontend_logo" width={200} height={200} />
                            <p className="text-white mt-6">Full stack development</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
