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

const Footer = () => {
    return (
        <div className="w-full h-full mt-8 bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
            <div className="w-full flex flex-col items-center  m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mb-[180px]">

                    {/* Logo */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center z-[20]">
                        <Link href="/" className="flex flex-row items-center h-auto w-auto">
                            <Image src="/logo.png" alt="logo" width={150} height={150} className="cursor-pointer" />
                            <span className="font-bold text-3xl hidden md:block text-gray-300">
                                Sodikjon
                            </span>
                        </Link>
                    </div>

                    {/* About */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start text-2xl z-[20]">
                        <Link href="/aboutMe" className="cursor-pointer my-[15px]">About</Link>
                        <Link href="/projects" className="cursor-pointer my-[15px]">Projects</Link>
                        <Link href="/Resume" className="cursor-pointer my-[15px]">Resume</Link>
                    </div>

                    {/* Social Media */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[20]">
                        {Socials.map((social) => (
                            <Link href={social.link} target="_blank" className="my-[20px] flex items-center gap-2">
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    key={social.name}
                                    width={24}
                                    height={24}
                                />
                                <p>{social.name}</p>
                            </Link>
                        ))}
                    </div>

                </div>

                {/* <div className="mb-[20px] text-[15px] text-center">
                    &copy; WebChain Dev 2023 Inc. All rights reserved
                </div> */}
            </div>
        </div>
    )
}

export default Footer