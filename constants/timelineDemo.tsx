import React from "react";
import { Timeline } from "@/components/sub/Timeline";
import { FaYoutube } from "react-icons/fa";


import Image from "next/image";

export function TimelineDemo() {
    const data = [
        {
            title: "2025",
            img: "/eduIcon.png",
            content: (
                <div>
                    <div className="title flex gap-8">
                        <h2 className="text-white text-4xl font-bold">Bachelor in Computer Science and Engineering</h2>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="">
                            <p className="text-white text-lg" >
                                Sejong University, <br />Seoul South Korea
                            </ p >
                        </div>
                        <div>
                            <p className="text-white text-lg" >
                                2025 March - 2029 March (Expected)
                            </ p >

                        </div>
                    </div>

                    <div className="content">
                        <p className="mt-8 text-lg font-medium text-white" >
                            I am currently pursuing a Bachelor's degree in Computer Science at Sejong University.
                            Although I have only recently started my studies, I have already gained a basic understanding of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Python</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">C</span> programming, and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Korean language</span> through university courses.
                            I am continuously working on improving my skills and expanding my knowledge in these areas.
                        </ p >

                    </div>

                </div>
            ),
        },
        {
            title: "2023 - 2024",
            img: "/work.png",
            content: (
                <div>
                    <div className="title flex gap-8">
                        <h2 className="text-white text-4xl font-bold">Frontend Engineering</h2>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="">
                            <p className="text-white text-lg" >
                                MaxDora LLC, <br />Tashkent, Uzbekistan
                            </ p >
                        </div>
                        <div>
                            <p className="text-white text-lg" >
                                2023 October - 2024 December
                            </ p >

                        </div>
                    </div>

                    <div className="img_container mt-8">

                        <div className="grid grid-cols-2 gap-5 mt-6" >
                            <img
                                src="/impex.png"
                                alt="hero template"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <div className="about flex flex-col gap-4">
                                <p className="text-base text-white" >
                                    I contributed to created new user interfaces for the insurance agency’s website utilizing Laravel.
                                </ p >
                                <p className="text-base text-white" >
                                    Took full experience of utilizing additional technologies namely SCSS, JavaScript, REST API, and SPA.
                                </ p >
                                <p className="text-base text-white" >
                                    Contributed significantly to improve the proficiency in Laravel while working on this project.
                                </ p >
                                <p className="text-base text-white" >
                                    Csesigned the website to ensure compatibility with mobile, tablet, and desktop formats.
                                </ p >
                            </div>

                            <div className="about mt-10 flex flex-col gap-4">
                                <p className="text-base text-white" >
                                    I halped to built a clean and modern website developed for a delivery service platform.
                                </ p >
                                <p className="text-base text-white" >
                                    Built with Laravel and React to ensure performance and scalability.
                                </ p >
                                <p className="text-base text-white" >
                                    Fully responsive and user-friendly design for all devices.
                                </ p >
                            </div>
                            <img
                                src="/dora.png"
                                alt="hero template"
                                width={500}
                                height={500}
                                className="mt-10 h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022 - 2023",
            img: "/eduIcon.png",
            content: (
                <div>
                    <div className="title flex gap-8">
                        <h2 className="text-white text-4xl font-bold">Full-Stack Web Programming</h2>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="">
                            <p className="text-white text-lg" >
                                Najot Ta'lim LLC, <br />Tashkent, Uzbekistan
                            </ p >
                        </div>
                        <div>
                            <p className="text-white text-lg" >
                                2022 September - 2023 September
                            </ p >

                        </div>
                    </div>

                    <div className="content">
                        <p className="mt-8 text-lg font-medium text-white" >
                            I enrolled in the Web Programming course at Najot Ta'lim LLC in September 2022 and successfully completed it in September 2023.
                            During this period, I gained hands-on experience in both frontend and backend development.
                        </ p >
                        <p className="mt-4 text-lg font-medium text-white" >

                            Frontend Technologies:
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                HTML, CSS, SCSS, Tailwind, Bootstrap, React, JavaScript, TypeScript, OOP, API integration, Redux, Figma.
                            </span>
                        </ p >
                        <p className="mt-4 text-lg font-medium text-white" >

                            Backend Technologies:
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Node.js, GraphQL, jQuery, PostgreSQL, Postman, Telegram Bot, Firebase.
                            </span>

                        </ p >
                        <p className="mt-4 text-lg font-medium text-white" >
                            Throughout the course, I worked on multiple projects that helped me apply these technologies in practical scenarios and strengthen my development skills.
                        </ p >

                    </div>
                </div >
            ),
        },
    ];



    return (
        <div className="relative w-full overflow-clip" >
            <Timeline data={data} />
        </div>
    );
}
