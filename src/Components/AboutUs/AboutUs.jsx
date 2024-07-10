import React, { useEffect } from "react";

import gsap from 'gsap';
import { SocialIcon } from "react-social-icons";

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from "../Navbar";
import Footer from "../Footer";
import Logo from '../../assets/Logo.png';
import Img1 from "../../assets/AboutImgMob.png";
import ImageRakanTurki from "../../assets/rakan-turki.png";
import Img2 from "../../assets/61eb2205573fced65146611241f3b4c4.jpeg";
import AwardImage from '../../assets/39ba59d0bbe862e6563ad730221e9051.png';
import BackgroundImage from "../../assets/69ef976c37520c78cc1a8ccc57885bdf.png";
import BackgroundImage2 from "../../assets/b1d4e88e46f820c7640c4d2b42e3a3aa.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
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
                start: 'top center',
            }
        })
            .fromTo('.section-3 .img-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-3 .text-1', { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-3 .text-2', { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-4',
                start: 'top center',
            }
        })
            .fromTo('.section-4 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-4 .img-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-4 .text-1', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-5',
                start: 'top center',
            }
        })
            .fromTo('.section-5 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-5 .carousel-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-6',
                start: 'top center',
            }
        })
            .fromTo('.section-6 .logo-1', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-6 .text-1', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-6 .text-2', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-7',
                start: 'top center',
            }
        })
            .fromTo('.section-7 .text-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-7 .text-2', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-7 .table-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
    }, []);

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-xl font-medium mb-4 uppercase text-1">Elite Group Holdings</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase text-2">ABOUT COMPANY</div>
                </div>
            </div>

            <div className="bg-[#F7F7F7]">
                <div className="px-[5%]">
                    <div className="py-5 flex items-center justify-end">
                        <div className="text-[#404040]">
                            <a href="">Home</a> / About us
                        </div>
                    </div>
                </div>

                <div className="px-[5%] section-2">
                    <div className="my-5 md:my-10 flex max-md:flex-col-reverse max-md:gap-3 sm:flex-row-reverse sm:items-center">
                        <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-me-[5.65%] overflow-hidden img-1">
                            <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 -top-10 xl:-left-[17%] lg:-left-[14%] md:-left-[12%] sm:-left-[14%] "></div>
                            <img src={Img1} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                        </div>
                        <div className="xl:px-24 sm:shrink-1 sm:w-1/2">
                            <div className="text-md sm:text-base lg:text-xl font-medium mb-2 md:mb-4 text-1">OUR HISTORY</div>
                            <p className="font-semibold mb-2 md:mb-4 text-[#404040] text-xl md:text-xl text-2">It all started with a dream</p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-3">
                                Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.
                            </p>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-3">
                                We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-[5%] sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-26 section-3">
                    <div className="my-5 md:my-10 sm:flex sm:flex-row-reverse sm:items-center">
                        <div className="xl:px-24 sm:shrink-1 sm:w-1/2 xl:pt-10">
                            <div className="text-md sm:text-base lg:text-xl font-medium mb-2 md:mb-4 text-1">VISION AND MISSION</div>
                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-2">
                                Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.
                            </p>

                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-2">
                                We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth
                            </p>

                            <p className="mb-2 md:mb-4 text-[#404040] text-xs md:text-sm text-2">
                                We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth
                            </p>
                        </div>
                        <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-ms-[5.65%] max-md:mt-3 overflow-hidden img-1">
                            <div className="hidden sm:block absolute bg-[#F7F7F7] w-1/4 h-[120%] rotate-12 xl:-right-[17%] lg:-right-[15%] sm:-right-[11%]"></div>
                            <img src={Img2} alt="" className="w-full h-[20rem] md:h-[26rem] object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-4">
                <div className="container mx-auto my-10 px-0 md:px-[5%]">
                    <div className="font-extrabold text-5xl uppercase sm:ps-0 ps-[3%] head-1">Meet the team</div>
                </div>

                <div className="py-5 bg-[#F7F7F7]">
                    <div className="md:grid grid-cols-2 gap-16 items-center md:px-0 px-[5%]">
                        <img src={ImageRakanTurki} alt="" className="h-full object-cover img-1" />

                        <div className="md:mt-0 mt-5 text-1">
                            <div className="text-2xl md:text-3xl mb-3">Rakan Turki</div>
                            <p className="md:mb-10 mb-5 font-bold">CEO</p>
                            <p className="text-xs md:text-lg mb-5">Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.</p>
                            <p className="text-xs md:text-lg mb-5">We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth</p>
                            <p className="text-xs md:text-lg">We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:py-24 py-16 px-[5%] section-5">
                <div className="font-medium text-xl mb-5 head-1">ORGANIZATION STRUCTURE</div>

                <div className="grid md:grid-cols-3 md:gap-10 carousel-1">
                    <div className="relative aspect-square">
                        <img src={ImageRakanTurki} className="h-full object-cover brightness-75 hover:grayscale hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square hidden md:block">
                        <img src={ImageRakanTurki} className="h-full object-cover brightness-75 hover:grayscale hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square hidden md:block">
                        <img src={ImageRakanTurki} className="h-full object-cover brightness-75 hover:grayscale hover:brightness-50 transition-all duration-300 ease-in-out cursor-pointer" />
                        <div className="absolute bottom-3 w-full px-5">
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div>Rakan Turki</div>
                                    <div>Chairman & Chief Executive Officer</div>
                                </div>
                                <SocialIcon network='linkedin' bgColor='white' fgColor='black' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-screen h-[75vh] section-6">
                <img src={BackgroundImage2} className="object-cover object-center w-full h-full brightness-50" />
                <div className="absolute top-1/2 left-0 px-[5%] -translate-y-1/2 z-10 text-white">
                    <img src={Logo} className="w-56 mb-5 logo-1" />
                    <div className="text-xl md:text-2xl font-medium mb-3 uppercase text-1">CORPORATE SOCIAL RESPONSIBILITY</div>
                    <div className="text-md md:text-lg font-medium md:w-1/2 text-[#B3B3B3] text-2">Enriching Communities program was launched in 2018, to affirm the Group’s commitment to CSR and helping local and international communities. CSR is embedded in the organization’s culture, as we continue to launch initiatives to support the UAE leadership’s vision and contribute to the economic development while improving the quality of life of our society, customers, partners, and employees.</div>
                </div>
            </div>

            <div className="py-24 container mx-auto px-[5%] section-7">
                <div className="text-2xl font-medium mb-3 text-1">Awards & Publications</div>
                <p className="text-2">AW Rostamani has a long, rich heritage started in 1954 and it has grown to become one of the largest, privately-owned family businesses in the Middle East.</p>

                <div className="grid md:grid-cols-3 mt-5 md:gap-10 table-1">
                    <div className="md:col-span-2">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b-2 border-[#B0B0B0] text-start p-2">Project</th>
                                    <th className="border-b-2 border-[#B0B0B0] text-start p-2">Context</th>
                                    <th className="border-b-2 border-[#B0B0B0] text-start p-2">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">Dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">Emirates Auction</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">Dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">Emirates Auction</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                                <tr className="text-[##717171] hover:bg-black hover:text-white transition-all duration-300">
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">Dubizzle Cars</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">The Best Car Dealer Awards</td>
                                    <td className="border-b-2 border-[#B0B0B0] px-2 py-3">2023</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="">
                        <img src={AwardImage} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutUs;
