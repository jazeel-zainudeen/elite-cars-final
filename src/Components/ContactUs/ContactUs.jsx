import React, { useEffect } from "react";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImage from "../../assets/69ef976c37520c78cc1a8ccc57885bdf.png";
import MapImage from "../../assets/63356c7ed2f0181ed4f903b431928665.png";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {

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
            .fromTo('.section-2 .text-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .text-2', { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .section-2-1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-3',
                start: 'top bottom',
            }
        })
            .fromTo('.section-3 .section-3-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-3 .section-3-2', { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

    });

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-xl font-medium mb-4 text-1">CONTACT US</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 text-2">CUSTOMER CARE</div>
                </div>
            </div>

            <div className="px-[5%]">
                <div className="py-5 flex items-center justify-end">
                    <div className="text-[#404040]">
                        <a href="">Home</a> / Contact us
                    </div>
                </div>

                <div className="text-center text-[#141414] pb-14 section-2">
                    <div className="mt-5 font-bold text-4xl text-1">CONTACT US TODAY</div>
                    <p className="py-3 md:py-5 text-2">Your feedback is important to us. Please fill in the form below and we will try our best to get back to you as soon as we can.</p>

                    <div className="section-2-1">
                        <div className="grid md:grid-cols-2 w-full md:w-3/4 mx-auto gap-5 md:my-10 my-5">
                            <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Full Name *" />
                            <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Telephone Number *" />
                            <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Email Address *" />
                            <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Select Group *" />
                            <textarea className="text-[#141414B2] border border-1 border-[#141414B2] rounded-3xl px-4 py-1.5 md:col-span-2" rows={4} placeholder="Messege"></textarea>
                        </div>

                        <button className="bg-black hover:bg-white text-white hover:text-black transition-all border border-1 border-black rounded-full px-10 py-3">
                            Submit
                            <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex bg-[#F7F7F7] border border-1 border-black h-[60vh] section-3">
                <div className="md:grid md:place-content-center max-md:flex max-md:flex-col max-md:justify-center max-md:ms-[3%] md:w-1/2 h-full section-3-1">
                    <div className="text-3xl mb-8 font-medium">HEADQUARTERS</div>
                    <p>723 Sheikh Zayed Road, P. O. Box 393316</p>
                    <p>Dubai, U.A.E.</p>
                    <p className="mt-5">customer-care@theelitecars.com</p>
                    <p className="mt-5">+971 4 321  2290</p>
                </div>
                <div className="relative sm:w-[56%] sm:grow sm:shrink-0 sm:-me-[3.5%] overflow-hidden section-3-2">
                    <div class="border-r border-black hidden sm:block absolute bg-[#F7F7F7] max-md:w-1/3 w-1/4 h-[120%] rotate-[9deg] lg:rotate-[11deg] xl:rotate-[15deg] -top-10 xl:-left-[18%] lg:-left-[17%] md:-left-[18%] sm:-left-[14%] "></div>
                    <img src={MapImage} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
