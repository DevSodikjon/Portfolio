import React from 'react'
import ResumeContent from '../sub/ResumeContent'

export default function ResumePage() {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute h-full w-full left-0 z-[1]
                top-[-1340px] 
                max-1500:top-[-1340px]
                max-1400:top-[-1340px]
                max-1300:top-[-1340px]
                max-1200:top-[-1340px]
                max-1100:top-[-1340px]
                max-1000:top-[-1340px] max-1000:object-contain
                max-900:top-[-1340px]
                max-800:top-[-1340px]
                max-768:top-[-1340px] 
                max-700:top-[-1340px]
                max-640:top-[-1340px]
                max-600:top-[-1340px]
                max-540:top-[-1340px] 
                max-500:top-[-1340px]
                max-480:top-[-1340px]                      
                max-425:top-[-1340px]                     
                max-400:top-[-1340px]                      
                max-320:top-[-1340px] 
                "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <ResumeContent />
    </div>
  )
}

