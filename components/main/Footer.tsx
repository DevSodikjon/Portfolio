import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { Socials } from "@/constants";

import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { div } from "motion/react-client";

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="sw-full h-full mt-16 bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
                <div className="w-full flex items-center  m-auto">
                    <div className="max-500:justify-center w-full flex flex-wrap md:flex-nowrap items-start justify-between gap-y-10 mb-[180px]">

                        {/* Logo */}
                        <div className="min-w-[200px] h-auto flex flex-col items-center z-[20]">
                            <Link href="/" className=" flex flex-row items-center h-auto w-auto">
                                <Image src="/logo.png" alt="logo" width={150} height={150} className="max-500:w-[100px] cursor-pointer" />
                                <span className="font-bold text-3xl hidden md:block text-gray-300">
                                    Sodikjon
                                </span>
                            </Link>
                        </div>

                        {/* About */}
                        <div className="max-500:text-xl min-w-[200px] h-auto flex flex-col items-center justify-start text-2xl z-[20]">
                            <Link href="/aboutMe" className="cursor-pointer my-[15px]">About</Link>
                            <Link href="/projects" className="cursor-pointer my-[15px]">Projects</Link>
                            <Link href="/Resume" className="cursor-pointer my-[15px]">Resume</Link>
                        </div>

                        {/* Social Media */}
                        <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[20]">
                            {Socials.map((social, index) => (
                                <Link href={social.link} target="_blank" className="my-[20px] flex items-center gap-2">
                                    <Image
                                        key={index}
                                        src={social.src}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                    />
                                    <p>{social.name}</p>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer