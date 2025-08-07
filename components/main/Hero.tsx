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
  max-1300:top-[-290px]
  max-1200:top-[-260px]
  max-1100:top-[-240px]
  max-1000:top-[-495px] max-1000:object-contain
  max-900:top-[-495px]
  max-800:top-[-485px]
  max-768:top-[-470px] 
  max-700:top-[-450px]
  max-640:top-[-420px]
  max-600:top-[-405px]
  max-540:top-[-385px] 
  max-500:top-[-380px]
  max-480:top-[-375px]                      
  max-425:top-[-330px]                     
  max-414:top-[-330px]                      
  max-400:top-[-320px]                      
  max-390:top-[-375px]                                            
  max-375:top-[-370px]                                            
  max-370:top-[-370px]                                            
  max-360:top-[-375px]                                            
  max-350:top-[-310px]                                            
  max-340:top-[-305px]                      
  max-320:top-[-295px]                      
  "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
