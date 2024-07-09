import React, { useEffect } from "react";

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImage from "../../assets/8feed4b5e6b4f73a93ac24feb4a0ddc6.png";

import Img1 from "../../assets/220c8c6b943f41d253ab5e853e6103b7.png";
import Img2 from "../../assets/897d556a59733e5e2482f1b030c8c4de.png";
import Img3 from "../../assets/ebaac82941ffdd8e43e3861aeb9a9ef3.png";
import GalleryImg1 from "../../assets/gallery/1.png";
import GalleryImg2 from "../../assets/gallery/2.png";
import GalleryImg3 from "../../assets/gallery/3.png";
import GalleryImg4 from "../../assets/gallery/4.png";
import GalleryImg5 from "../../assets/gallery/5.png";
import GalleryImg6 from "../../assets/gallery/6.png";
import GalleryImg7 from "../../assets/gallery/7.png";
import GalleryImg8 from "../../assets/gallery/8.png";
import GalleryImg9 from "../../assets/gallery/9.png";
import GalleryImg10 from "../../assets/gallery/10.png";
import GalleryImg11 from "../../assets/gallery/11.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const MediaCenter = () => {
    useEffect(() => {
        gsap.timeline({ duration: 0.5, ease: 'power3.out' })
            .fromTo('.section-1 .text-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.section-1 .text-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.section-1 .text-3', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-2',
                start: 'top bottom',
            }
        })
            .fromTo('.section-2 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-2 .images-1', { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-3',
                start: 'top bottom',
            }
        })
            .fromTo('.section-3 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-3 .section-3-1', { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-4',
                start: 'top bottom',
            }
        })
            .fromTo('.section-4 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-4 .images-1', { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-5',
                start: 'top bottom',
            }
        })
            .fromTo('.section-5 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-5 .images-1', { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

    });

    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative section-1">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />


                <div className="absolute bottom-24 left-[3%] flex flex-col gap-1.5">
                    <div className="text-[#919191] font-bold text-sm text-1">May 20, 2024, Dubai, UAE</div>
                    <div className="text-[#FFFFFF] text-3xl font-bold text-2">LAMBORGHINI URUS SE DEBUTS IN GERMANY</div>
                    <div className="text-[#919191] text-sm font-light underline text-3">Read More</div>
                </div>
            </div>


            <div className="px-[5%]">
                <div className="py-5 flex items-center justify-end">
                    <div className="text-[#404040]">
                        <a href="">Home</a> / News
                    </div>
                </div>

                <div className="section-2">
                    <div className="font-medium text-xl mb-5 head-1">MEDIA CENTER</div>
                    <div className="grid md:grid-cols-3 gap-3 md:gap-8 images-1">
                        <div className="relative">
                            <div className="absolute left-0 text-center w-full bottom-5 text-4xl font-medium text-white z-10">Press Releases</div>
                            <img src={Img1} alt="" className="brightness-50" />
                        </div>
                        <div className="relative">
                            <div className="absolute left-0 text-center w-full bottom-5 text-4xl font-medium text-white z-10">Photo Gallery</div>
                            <img src={Img2} alt="" className="brightness-50" />
                        </div>
                        <div className="relative">
                            <div className="absolute left-0 text-center w-full bottom-5 text-4xl font-medium text-white z-10">Video Gallery</div>
                            <img src={Img3} alt="" className="brightness-50" />
                        </div>
                    </div>
                </div>

                <hr className="border-black my-12 md:my-20" />

                <div className="section-3 mb-10">
                    <div className="font-medium text-xl mb-5 head-1">MEDIA CENTER</div>

                    <div className="flex flex-col gap-10 section-3-1">
                        <div className="flex items-start max-md:flex-col gap-10">
                            <img src={Img1} alt="" className="md:w-1/2" />
                            <div className="md:w-1/2">
                                <div className="font-normal text-[#404040] mb-4 md:mb-6">February 22, 2024, Dubai, UAE</div>
                                <div className="font-bold text-2xl md:text-4xl mb-5 uppercase">The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA</div>
                                <div className="text-lg mb-5">The Elite Cars, the leading luxury automotive dealership in the United Arab Emirates, through their exclusive partnership with Zenvo Automotive, the renowned Danish supercar  </div>

                                <button className="hover:bg-white text-white hover:text-black bg-black transition-all border border-1 border-white hover:border-black rounded-full px-10 py-3 button-1">
                                    Read More
                                    <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start max-md:flex-col gap-10">
                            <img src={Img2} alt="" className="md:w-1/2" />
                            <div className="md:w-1/2">
                                <div className="font-normal text-[#404040] mb-4 md:mb-6">February 22, 2024, Dubai, UAE</div>
                                <div className="font-bold text-2xl md:text-4xl mb-5 uppercase">The All-New Jetour T2 Debuts in the UAE</div>
                                <div className="text-lg mb-5">The Elite Cars, the leading luxury automotive dealership in the United Arab Emirates, through their exclusive partnership with Zenvo Automotive, the renowned Danish supercar</div>

                                <button className="hover:bg-white text-white hover:text-black bg-black transition-all border border-1 border-white hover:border-black rounded-full px-10 py-3 button-1">
                                    Read More
                                    <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start max-md:flex-col gap-10">
                            <img src={Img1} alt="" className="md:w-1/2" />
                            <div className="md:w-1/2">
                                <div className="font-normal text-[#404040] mb-4 md:mb-6">February 22, 2024, Dubai, UAE</div>
                                <div className="font-bold text-2xl md:text-4xl mb-5 uppercase">2023 Jetour Dashing Makes Its Debut in UAE Through The Elite Cars</div>
                                <div className="text-lg mb-5">The Elite Cars, the leading luxury automotive dealership in the United Arab Emirates, through their exclusive partnership with Zenvo Automotive, the renowned Danish supercar  </div>

                                <button className="hover:bg-white text-white hover:text-black bg-black transition-all border border-1 border-white hover:border-black rounded-full px-10 py-3 button-1">
                                    Read More
                                    <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#1E1E1E1A] px-[5%] md:py-20 py-10 section-4">
                <div className="font-medium text-xl md:pb-10 pb-5 head-1">Photo Gallery</div>
                <div className="grid grid-cols-5 images-1">
                    <img src={GalleryImg1} className="col-span-5 w-full max-h-[80vh] object-cover" alt="" />
                    <img src={GalleryImg2} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg3} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg4} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg5} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg6} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg7} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg8} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg9} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg10} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg11} className="w-full h-full object-cover" alt="" />
                </div>
            </div>

            <div className="px-[5%] md:py-20 py-10 section-5">
                <div className="font-medium text-xl md:pb-10 pb-5 head-1">Video Gallery</div>
                <div className="grid grid-cols-5 images-1">
                    <img src={GalleryImg1} className="col-span-5 w-full max-h-[80vh] object-cover" alt="" />
                    <img src={GalleryImg2} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg3} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg4} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg5} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg6} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg7} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg8} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg9} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg10} className="w-full h-full object-cover" alt="" />
                    <img src={GalleryImg11} className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MediaCenter;
