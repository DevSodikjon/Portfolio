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
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="sm:flex-row lg:flex xl:flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] 
      max-425:px-10
      max-414:px-10
      max-400:px-10
      max-390:px-10
      max-375:px-10
      max-360:px-10
      max-350:px-10
      max-340:px-10 
      "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box  py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] 
          max-375:py-[6px] max-375:px-[4px]
          max-360:py-[6px]
          max-350:py-[4px]
          max-340:py-[6px]
          max-320:py-[6px]
          "
        >
          <SparklesIcon className="text-[#e0dbf1] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text md:text-[12px] text-[13px] 
              max-350:text-[10px]
              max-320:text-[10px]
          
          ">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="sm:flex-row text-3xl flex flex-col gap-6 mt-6 md:text-4xl xl:text-6xl font-bold text-white max-w-[600px] w-auto h-auto 
          max-350:text-1xl max-350:mt-1
          max-320:text-1xl max-320:mt-2 
          "
        >
          {/* <span>
            Delivering
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              seamless{" "}
            </span>
            project exprience
          </span> */}
          <span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Sodikjon Nurmirzaev{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="lg text-lg text-gray-400 my-5 max-w-[600px] 
          max-425:text-sm max-425:my-2
          max-414:text-sm max-414:my-2
          max-400:text-sm max-400:my-2
          max-375:text-sm max-375:my-2
          max-370:text-sm max-370:my-2
          max-360:text-sm max-360:my-2
          max-350:text-sm max-350:my-2
          max-340:text-sm max-340:my-2
          max-330:text-sm max-330:my-2
          max-320:text-sm max-320:my-2
          "
        >
          I’m a Full-Stack Software Engineer skilled in crafting dynamic and responsive web applications.
          Explore my projects and see how I bring ideas to life through clean code and thoughtful design.
        </motion.p>


        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]
          max-360:max-w-[150px] max-360:text-sm
          max-320:max-w-[150px] max-320:text-sm
          "
        >
          <Link href="/aboutMe">Learn more !</Link>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>

    </motion.div>
  );
};

export default HeroContent;
