import React, { useEffect } from "react";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImage from "../../assets/8f6e99f4550c5bdff67bc4b39eeb241b.png";
import Img from "../../assets/61eb2205573fced65146611241f3b4c4.jpeg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
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
            .fromTo('.section-2 .text-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .text-2', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .text-3', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-3',
                start: 'top bottom',
            }
        })
            .fromTo('.section-3 .text-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-3 .text-2', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-3 .button-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });


    }, []);

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">CAREERS</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">JOIN WITH US</div>
                </div>
            </div>

            <div className="bg-[#F7F7F7]">
                <div className="px-[5%]">
                    <div className="py-5 flex items-center justify-end">
                        <div className="text-[#404040]">
                            <a href="">Home</a> / Careers
                        </div>
                    </div>

                    <div className="py-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center section-2">
                        <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-me-[5.65%] overflow-hidden img-1">
                            <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 -top-10 xl:-left-[17%] lg:-left-[14%] md:-left-[12%] sm:-left-[14%] "></div>
                            <img src={Img} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                        </div>
                        <div className="xl:pe-10 sm:shrink-1 sm:w-1/2">
                            <div className="text-md sm:text-base lg:text-xl font-medium mb-2 md:mb-4 text-1">JOIN OUR TEAM</div>
                            <p className="font-semibold mb-2 md:mb-4 text-[#404040] text-xl md:text-xl text-2">Where Luxury Meets Opportunity</p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-3">
                                Welcome to the pinnacle of automotive excellence. At The Elite Cars, we're not just selling cars, we're delivering dreams. We are one of the leading luxury car dealerships based in The UAE, offering an unparalleled selection of the world's finest luxury automobiles.
                            </p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-3">
                                But our commitment to excellence extends beyond the showroom floor. We are also dedicated to fostering a world-class work environment for our team members. If you are passionate about the automotive industry, thrive in a fast-paced environment, and are dedicated to exceeding expectations, we invite you to explore career opportunities at The Elite cars
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[5%]">
                <div className="my-20 section-3">
                    <div className="text-3xl font-bold text-1">Why Choose The Elite Cars?</div>
                    <div className="px-5">
                        <ul className="list-disc mb-8 text-2">
                            <li className="mt-5"><strong>Work with the best</strong>: Immerse yourself in the world of luxury car brands</li>
                            <li className="mt-5"><strong>Make a difference</strong>: Contribute to the success of a company that is shaping the future of luxury automotive experiences in Dubai.</li>
                            <li className="mt-5"><strong>Growth and development</strong>: We offer extensive training programs and mentorship opportunities to help you reach your full potential.</li>
                            <li className="mt-5"><strong>Competitive benefits</strong>: Enjoy a comprehensive benefits package that includes competitive salary, healthcare, and paid time off.</li>
                            <li className="mt-5"><strong>Empower Your Career</strong>: Be a part of a team that is passionate about what they do and is committed to providing exceptional customer service.</li>
                        </ul>
                    </div>
                    <button className="hover:bg-white text-white hover:text-black bg-black transition-all border border-1 border-white hover:border-black rounded-full px-10 py-3 button-1">
                        Explore
                        <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Careers;
