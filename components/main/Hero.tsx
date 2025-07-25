import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0  w-full h-full object-cover z-[1] rotate-180
          top-[-340px] 
  max-1500:top-[-330px]
  max-1400:top-[-320px]
  max-1300:top-[-280px]
  max-1200:top-[-260px]
  max-1100:top-[-230px]
  max-1000:top-[-510px] max-1000:object-contain
  max-900:top-[-510px]
  max-800:top-[-505px]
  max-768:top-[-100px] max-768:bg-green-500
  max-700:top-[-465px]
  max-640:top-[120px] max-640:bg-green-500
  max-600:top-[-120px]
  max-500:top-[-90px]
  max-400:top-[-60px]                      
  "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
