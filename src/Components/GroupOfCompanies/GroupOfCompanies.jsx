import React from "react";

import Marquee from 'react-fast-marquee';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Navbar from "../Navbar";
import Footer from "../Footer";
import brandImg1 from './../../assets/brands/color/image 43.png';
import brandImg2 from './../../assets/brands/color/image 44.png';
import brandImg3 from './../../assets/brands/color/image 46.png';
import brandImg4 from './../../assets/brands/color/Rectangle 24.png';
import brandImg5 from './../../assets/brands/color/Rectangle 45.png';
import Image1 from "../../assets/a350f6cd3b16d8ad3bc39a824b1e7d82.png";
import BackgroundImage from "../../assets/57af26e48eb6728309d8a752a133493e.png";

const GroupOfCompanies = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-3xl font-semibold mb-4 uppercase">ELITE GROUP HOLDING</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase">OUR GROUP of COMPANIES</div>
                </div>
            </div>

            <div className="bg-[#F7F7F7] pb-5">
                <div className="px-[3%]">
                    <div className="md:py-5 flex items-center justify-end">
                        <div className="text-[#404040]">
                            <a href="">Home</a> / Our group
                        </div>
                    </div>

                    <div className="py-5 md:py-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center">
                        <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-me-[3.5%] overflow-hidden">
                            <img src={Image1} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                        </div>
                        <div className="xl:px-24 sm:shrink-1 sm:w-1/2">
                            <div className="text-lg md:text-4xl font-semibold mb-2 md:mb-4">ELITE GROUP HOLDING</div>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm">
                                Elite Group Holding  is pleased to assist you with an attentive multi-channel service:
                            </p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm">
                                You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding.
                            </p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm">
                                If our Assistant is unable to find what you are looking for, please scroll down and get in touch with our dedicated Customer Contact Center via phone or contact form.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden max-md:px-[3%]">
                <div className="flex max-md:flex-col-reverse max-md:gap-3 md:flex-row sm:items-center max-md:my-10">
                    <div className="relative sm:w-[56%] sm:grow sm:shrink-0 sm:-me-[3.5%] overflow-hidden z-10">
                        <div className="hidden sm:block absolute bg-white max-md:w-1/3 w-1/4 h-[120%] lg:-rotate-[20deg] md:-rotate-[15deg] -top-16 xl:-right-[14.35%] lg:-right-[11%] md:-right-[11%] sm:-right-[14%] "></div>
                        <img src={Image1} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                    </div>
                    <div className="md:px-12 lg:px-20 xl:px-24 sm:shrink-1 sm:w-1/2">
                        <div className="text-md sm:text-base lg:text-4xl font-semibold mb-2 md:mb-4">ELITE AUTOMOBILES</div>
                        <p className="mb-2 md:mb-4 text-[#404040] text-xs lg:text-sm">
                            Elite Group Holding  is pleased to assist you with an attentive multi-channel service:
                        </p>
                        <p className="mb-2 md:mb-4 text-[#404040] text-xs lg:text-sm">
                            You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding.
                        </p>
                        <button className="bg-black hover:bg-[#fb511e] text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1 font-light mb-2 md:mb-8">
                            Read More
                            <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                        </button>
                        <Marquee loop={0} className='gap-5 pb-16 overflow-x-visible brands'>
                            <img src={brandImg1} className="h-8 px-5" alt="" />
                            <img src={brandImg2} className="h-8 px-5" alt="" />
                            <img src={brandImg3} className="h-8 px-5" alt="" />
                            <img src={brandImg4} className="h-8 px-5" alt="" />
                            <img src={brandImg5} className="h-8 px-5" alt="" />
                        </Marquee>
                    </div>
                </div>

                <div className="flex max-md:flex-col-reverse max-md:gap-3 md:flex-row-reverse sm:items-center max-md:my-10">
                    <div className="relative sm:w-[56%] sm:grow sm:shrink-0 sm:-me-[3.5%] overflow-hidden">
                        <div className="hidden sm:block absolute bg-white max-md:w-1/3 w-1/4 h-[120%] rotate-[9deg] lg:rotate-[11deg] xl:rotate-[15deg] -top-10 xl:-left-[18%] lg:-left-[17%] md:-left-[18%] sm:-left-[14%] "></div>
                        <img src={Image1} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                    </div>
                    <div className="md:px-12 lg:px-20 xl:px-24 sm:shrink-1 sm:w-1/2">
                        <div className="text-md sm:text-base lg:text-4xl font-semibold mb-2 md:mb-4">JOIN OUR TEAM</div>
                        <p className="mb-2 md:mb-4 text-[#404040] text-xs lg:text-sm">
                            Welcome to the pinnacle of automotive excellence. At The Elite Cars, we're not just selling cars, we're delivering dreams. We are one of the leading luxury car dealerships based in The UAE, offering an unparalleled selection of the world's finest luxury automobiles.
                        </p>
                        <p className="mb-2 md:mb-4 text-[#404040] text-xs lg:text-sm">
                            But our commitment to excellence extends beyond the showroom floor. We are also dedicated to fostering a world-class work environment for our team members. If you are passionate about the automotive industry, thrive in a fast-paced environment, and are dedicated to exceeding expectations, we invite you to explore career opportunities at The Elite cars
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GroupOfCompanies;
