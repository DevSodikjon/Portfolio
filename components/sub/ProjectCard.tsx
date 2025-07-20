import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-white bg-opacity-5 backdrop-blur-md">
      <div className="rounded shadow-md overflow-hidden group">
        <div className="overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="relative p-4">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="my-3 text-sm text-gray-300">{description}</p>
            <Link href={link ?? "#"} target="_blank" rel="noopener noreferrer" className="underline cursor-pointer text-white" >{title}</Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProjectCard;
