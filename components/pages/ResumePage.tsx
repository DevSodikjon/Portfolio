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
                top-[-1390px] 

                max-800:top-[-1400px]
                max-768:top-[-1060px]
                max-700:top-[-1045px]
                max-640:top-[-1050px]
                max-600:top-[-1055px]
                max-540:top-[-1055px]
                max-500:top-[-1075px]
                max-480:top-[-1165px]
                max-460:top-[-1170px]
                max-425:top-[-1175px]
                max-414:top-[-1195px]
                max-400:top-[-1154px]
                max-390:top-[-1154px]
                max-380:top-[-1240px]
                max-375:top-[-1165px]
                max-370:top-[-1260px]
                max-360:top-[-1277px] min-360:top-[1207px]
                max-350:top-[-1270px]
                max-340:top-[-1275px]
                max-330:top-[-1325px]
                max-320:top-[-1300px]
                max-300:top-[-1295px]
                "
      // max-320:top-[-1290px]
      // max-1000:top-[-1340px] max-1000:object-contain
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <ResumeContent />
    </div>
  )
}

