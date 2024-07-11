import React, { useEffect } from "react";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from "../Navbar";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger);

const Automotive = ({ BackgroundImage, title, description = null }) => {

    useEffect(() => {
        gsap.timeline({ duration: 0.5, ease: 'power3.out' })
            .fromTo('.section-1 .text-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.section-1 .text-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
    });

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    {!description && (
                        <div className="text-lg md:text-xl font-medium mb-4 text-1 opacity-0">{description}</div>
                    )}
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2 opacity-0">{title}</div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Automotive;
