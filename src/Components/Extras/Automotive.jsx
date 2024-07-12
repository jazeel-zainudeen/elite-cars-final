import React, { useEffect } from "react";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from "../Navbar";
import Footer from "../Footer";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const Automotive = ({ BackgroundImage, title, descriptions = [] }) => {

    useEffect(() => {
        gsap.timeline({ duration: 0.5, ease: 'power3.out' })
            .fromTo('.section-1 .text-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.section-1 .text-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
    });

    return (
        <>
            <Navbar />
            <div className="md:h-screen h-[40vh] w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-full w-screen brightness-50" />

                {/* <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2 opacity-0">{title}</div>
                </div> */}
            </div>

            <div className="px-[5%] pb-10">
                <div className="md:py-5 py-2 flex items-center md:justify-end justify-center">
                    <div className="text-[#282828] md:text-end text-center text-sm">
                        <a href="/">Home</a> / <a href="/group-of-companies">Group of Companies</a> / {title}
                    </div>
                </div>

                <div className="section-spaced text-center">
                    <div className="text-2xl lg:text-6xl font-semibold mb-10 md:mt-6 mt-6 uppercase">{title}</div>
                    {descriptions.map((description, index) => (
                        <p key={index} className="mb-2 md:mb-3 text-[#282828] text-[1rem] lg:text-[1.2rem]">
                            {description}
                        </p>
                    ))}
                    <a href="/" className={`w-fit block mx-auto bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1 font-light mt-16`}>
                        Visit Website
                        <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Automotive;
