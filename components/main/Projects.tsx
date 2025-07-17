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

  sortData.map((project1) => (
    console.log(project1.link)
  ))

  return (
    <div
      className="w-full text-center align-middle py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex md:flex-row gap-10 px-10">

        {sortData.map((project, index) => (
          <div className="card_box" key={index}>

            <ProjectCard
              src={project.image}
              title={project.project_name}
              description={project.description}
              link="https://deluxe-trifle-cd2462.netlify.app/"
            />
            {/* {project.link} */}

          </div>
        ))}

      </div>

      <div className="w-full h-auto mt-8">
        <Link href="/projects" className="cursor-pointer text-white">Learn More</Link >
      </div>
    </div>
  );
};

export default Projects;
