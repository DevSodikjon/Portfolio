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

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const AboutMeContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <div className=" min-h-auto mx-auto items-center justify-center p-6">
                    {/* Card container */}
                    <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl shadow-lg max-w-6xl w-full p-8 gap-8">
                        {/* Left side: text + button */}
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        I'm <span className="text-purple-400 font-semibold">Sodikjon Nurmirzaev</span>, or just <span className="text-purple-400 font-semibold">Sodikjon</span>.
                                        Currently, I'm a student at <span className="text-blue-300 font-medium">Sejong University</span> in South Korea, majoring in Computer Science.
                                    </p>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        I'm a passionate web developer who loves building fast, modern, and user-friendly web applications.
                                        I specialize in technologies like React, JavaScript, TypeScript, and Node.js.
                                    </p>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        I enjoy solving real-world problems, writing clean and maintainable code, and continuously expanding my skill set.
                                    </p>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        Feel free to reach out to me at <a href="mailto:mr.sodiqjon.uz@gmail.com" className="text-purple-400 ">mr.sodiqjon.uz@gmail.com</a>.
                                    </p>

                                </div>

                                {/* Resume download button */}
                                <a
                                    href="/Sodikjon_Nurmirzaev.pdf"  // <-- Resume file joylashgan manzil
                                    download
                                    className="inline-block bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg w-max"
                                >
                                    Download Resume
                                </a>
                            </div>

                            {/* Right side: profile image */}
                            <div className="flex-1 flex justify-center items-center">
                                <div className="w-full h-[500px] rounded-sm overflow-hidden shadow-lg">
                                    <Image
                                        src="/profil_4.jpg" // O‘z rasmi manzilingni yoz
                                        alt="Sodiqjon Nurmirzaev"
                                        width={556}
                                        height={556}
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="mt-10">
                        <h1 className="text-white text-3xl mb-6 leading-relaxed">
                            You can also reach me on the web
                        </h1>
                        <div className="flex justify-around space-x-8 my-10">
                            <a
                                href="https://github.com/DevSodikjon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white text-3xl transition"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sodikjon-nurmirzaev-46602a267/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white text-3xl transition"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.facebook.com/DevSodikjon2003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white text-3xl transition"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.instagram.com/sodikjon_nurmirzaev/?__pwa=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white text-3xl transition"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default AboutMeContent
