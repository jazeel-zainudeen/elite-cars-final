import React, { useEffect } from "react";
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../Navbar";
import Footer from "../Footer";

import groupImg1 from './../../assets/group/1.png';
import groupImg2 from './../../assets/group/2.png';
import groupImg3 from './../../assets/group/3.png';
import groupImg4 from './../../assets/group/4.png';
import groupImg5 from './../../assets/group/5.png';
import groupImg6 from './../../assets/group/6.png';

import Image1 from "../../assets/a350f6cd3b16d8ad3bc39a824b1e7d82.png";
import BackgroundImage from "../../assets/57af26e48eb6728309d8a752a133493e.png";
import GroupSection from "./GroupSection";

gsap.registerPlugin(ScrollTrigger);

const GroupOfCompanies = () => {
    useEffect(() => {
        gsap.timeline({ duration: 0.5, ease: 'power3.out' })
            .fromTo('.section-1 .text-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.section-1 .text-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-2',
                start: 'top bottom',
            }
        })
            .fromTo('.section-2 .img-1', { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .text-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    });

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">ELITE GROUP HOLDING</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">OUR GROUP of COMPANIES</div>
                </div>
            </div>

            <div className="bg-[#F7F7F7] pb-5">
                <div className="px-[5%]">
                    <div className="md:py-5 flex items-center justify-end">
                        <div className="text-[#404040]">
                            <a href="">Home</a> / Our group
                        </div>
                    </div>

                    <div className="py-5 md:py-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center section-2">
                        <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-me-[3.5%] overflow-hidden">
                            <img src={Image1} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover img-1" />
                        </div>
                        <div className="xl:px-24 sm:shrink-1 sm:w-1/2">
                            <div className="text-lg md:text-4xl font-semibold mb-2 md:mb-4 head-1">ELITE GROUP HOLDING</div>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-1">
                                Elite Group Holding  is pleased to assist you with an attentive multi-channel service:
                            </p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-1">
                                You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding.
                            </p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-1">
                                If our Assistant is unable to find what you are looking for, please scroll down and get in touch with our dedicated Customer Contact Center via phone or contact form.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden max-md:px-[5%]">
                <GroupSection
                    url="http://www.google.com"
                    image={groupImg1}
                    title="ELITE AUTOMOBILES"
                    descriptions={[
                        "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                        "You can ask your questions to the Elite Group Holding  Assistant who will guide you through the Elite Group Holding."
                    ]}
                    hasBrands={true} />

                <GroupSection
                    url="http://www.google.com"
                    image={groupImg2}
                    title="ELITE INVESTMENT COMPANY"
                    descriptions={[
                        "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                        "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
                    ]}
                    direction="left" />

                <GroupSection
                    url="http://www.google.com"
                    image={groupImg3}
                    title="ELITE REAL ESTATE COMPANY"
                    descriptions={[
                        "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                        "You can ask your questions to the Elite Group Holding  Assistant who will guide you through the Elite Group Holding."
                    ]} />

                <GroupSection
                    url="http://www.google.com"
                    image={groupImg4}
                    title="ELITE HEALTHCARE COMPANY"
                    descriptions={[
                        "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                        "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
                    ]}
                    direction="left" />

                <GroupSection
                    url="http://www.google.com"
                    image={groupImg5}
                    title="ELITE EDUCATION COMPANY"
                    descriptions={[
                        "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                        "You can ask your questions to the Elite Group Holding  Assistant who will guide you through the Elite Group Holding."
                    ]} />

                <GroupSection
                    url="http://www.google.com"
                    image={groupImg6}
                    title="ELITE E COMMERCE COMPANY"
                    descriptions={[
                        "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                        "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
                    ]}
                    direction="left" />
            </div>

            <Footer />
        </>
    );
};

export default GroupOfCompanies;
