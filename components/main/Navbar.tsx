'use client'
import { Contact, Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="hidden md:flex font-bold text-xl  md:text-2xl text-gray-300">
            Sodikjon
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex w-full max-w-[50%] items-center h-full md:mr-10 max-w-[30%]">
          <div className="w-full flex justify-between items-center gap-6 px-6 py-2 border border-[#7042f861] bg-[#0300145e] rounded-full text-gray-200 text-sm md:text-base">
            <Link href="/" className="cursor-pointer">Home</Link>
            <Link href="/aboutMe" className="cursor-pointer">About</Link>
            <Link href="/projects" className="cursor-pointer">Projects</Link>
            <Link href="/resume" className="cursor-pointer">Resume</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex flex-row gap-4">
          {Contact.map((social) => (
            <Link href={social.link} target="_blank" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-300 text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden w-full absolute top-[75px] left-0 shadow-[#2A0E61]/50 bg-[#030014b8] backdrop-blur-md z-40 transition-all duration-[500ms] ease-in-out transform">
          <div className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-200 text-base">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/aboutMe" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
            <div className="flex gap-4 mt-4">
              {Socials.map((social) => (
                <Link href={social.link} target="_blank" key={social.name}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
