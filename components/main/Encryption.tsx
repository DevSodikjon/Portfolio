// "use client";
// import React from "react";

// import { motion } from "framer-motion";
// import { slideInFromTop } from "@/utils/motion";
// import Image from "next/image";

// const Encryption = () => {
//   return (
//     <div className="container mx-auto flex flex-row relative items-center justify-center min-h-screen w-full h-full">
//       <div className="absolute w-auto h-auto top-0 z-[5]">
//         <motion.div
//           variants={slideInFromTop}
//           className="text-[40px] font-medium text-center text-gray-200"
//         >
//           Performance
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//             {" "}
//             &{" "}
//           </span>
//           Security
//         </motion.div>
//       </div>

//       <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
//         <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
//           <Image
//             src="/LockTop.png"
//             alt="Lock top"
//             width={50}
//             height={50}
//             className=" w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
//           />
//           <Image
//             src="/LockMain.png"
//             alt="Lock Main"
//             width={70}
//             height={70}
//             className=" z-10"
//           />
//         </div>

//         <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
//           <h1 className="Welcome-text text-[12px]">Encryption</h1>
//         </div>
//       </div>
//       <div className="absolute z-[20] bottom-[10px] px-[5px]">
//         <div className="font-orbitron text-[20px] font-medium text-center text-gray-300">
//           Secure your data with end-to-end encryption
//         </div>
//       </div>

//       <div className="w-full flex items-start justify-center absolute">
//         <video
//           loop
//           muted
//           autoPlay
//           playsInline
//           preload="false"
//           className="w-full h-auto"
//           src="/encryption.webm/"
//         />
//       </div>
//     </div>
//   );
// };

// export default Encryption;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full h-full overflow-hidden">
      {/* Title */}
      <div className="absolute top-4 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Lock icon and Encryption text */}
      <div className="flex flex-col items-center justify-center absolute z-[20] -translate-y-[20px] sm:-translate-y-[30px] md:-translate-y-[30px] max-1000:-translate-y-[5px] lg:-translate-y-[5px] xl:-translate-y-[5px]">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={40}
            height={40}
            className="
      w-[30px] 
      sm:w-[40px] 
      md:w-[50px] 
      lg:w-[60px] 
      xl:w-[70px] 
      translate-y-3
      sm:translate-y-4 
      md:translate-y-5 
      group-hover:translate-y-8 
      transition-all duration-200
    "
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={60}
            height={60}
            className="
      z-10 
      w-[40px] 
      sm:w-[60px] 
      md:w-[70px] 
      lg:w-[80px] 
      xl:w-[90px]
    "
          />
        </div>


        <div className="Welcome-box px-[10px] py-[3px] sm:px-[15px] sm:py-[4px] z-[20] my-[16px] sm:my-[20px] border border-[#7042f88b] opacity-[0.9] rounded-md">
          <h1 className="Welcome-text text-[10px] sm:text-[12px] text-white">Encryption</h1>
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-[10px] px-[5px] z-[20]">
        <div className="font-orbitron text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>


      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  )
}


export default Encryption;
