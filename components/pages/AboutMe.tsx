import AboutMeContent from "../sub/AboutMeContent";

export default function AboutPage() {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute h-full w-full left-0 z-[1] 
        top-[-390px]
        max-900:top-[-590px]
        max-800:top-[-590px]
        max-768:top-[-600px]
        max-700:top-[-600px]
        max-640:top-[-600px]
        max-600:top-[-615px]
        max-540:top-[-650px]
        max-500:top-[-680px]
        max-425:top-[-700px]
        max-400:top-[-715px]
        max-375:top-[-770px]
        max-320:top-[-750px]
        "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <AboutMeContent />
    </div>
  );
}

