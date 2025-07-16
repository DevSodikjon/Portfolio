'use client';
import React from "react";
import ProjectCard from "../sub/ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Projects = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 py-20">
        My Projects
      </h1>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper w-full max-w-6xl px-4 "
      >

        <SwiperSlide className="swiper w-[200px] h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[200px] rounded-lg overflow-hidden">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

      </Swiper>


    </div>
  );
};

export default Projects;
