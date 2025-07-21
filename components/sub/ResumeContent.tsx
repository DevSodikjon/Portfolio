"use client";

import React from 'react'
import { motion } from "framer-motion"

const ResumeContent = () => {
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]"
            >


            </motion.div>
        </div>
    )
}

export default ResumeContent
