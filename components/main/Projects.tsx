'use client';
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { Projects_data } from "@/constants";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Projects = () => {
  const sortData = Projects_data.slice(0, 3);


  return (
    <motion.div variants={slideInFromTop}>
      <div
        className="w-full relative align-middle py-20 z-[20]"
      >
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white py-20">
          My Projects
        </h1>

        <div className="w-full h-full justify-around flex md:flex-row">

          {sortData.map((project, index) => (
            <div className="w-[300px]" key={index}>

              <ProjectCard
                src={project.image}
                title={project.project_name}
                description={project.description}
                link={project.link ? project.link : "Link mavjud emas"}
              />

            </div>
          ))}

        </div>

        <div className="w-full text-center h-auto mt-14">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-3 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <Link href="/projects" className="cursor-pointer text-white">View More</Link >
          </motion.a>
        </div>
      </div>
    </motion.div>

  );
};

export default Projects;
