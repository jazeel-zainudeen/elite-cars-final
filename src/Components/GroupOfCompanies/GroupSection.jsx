import React from 'react';

import Marquee from 'react-fast-marquee';

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import brandImg1 from './../../assets/brands/color/image 43.png';
import brandImg2 from './../../assets/brands/color/image 44.png';
import brandImg3 from './../../assets/brands/color/image 46.png';
import brandImg4 from './../../assets/brands/color/Rectangle 24.png';
import brandImg5 from './../../assets/brands/color/Rectangle 45.png';

const GroupSection = ({ image, title, descriptions, url = '#', hasBrands = false, direction = "right" }) => {
    return (
        <>
            <div className="overflow-hidden">
                <div className={`flex max-md:flex-col-reverse max-md:gap-3 sm:items-center max-md:my-10 ${direction == "right" ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="relative sm:w-1/2 overflow-hidden z-10">
                        {/* <div className="hidden sm:block absolute bg-white max-md:w-1/3 w-1/4 h-[120%] lg:-rotate-[20deg] md:-rotate-[15deg] -top-16 xl:-right-[14.35%] lg:-right-[11%] md:-right-[11%] sm:-right-[14%] "></div> */}
                        <img src={image} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover" />
                    </div>
                    <div className="md:px-12 lg:px-20 xl:px-24 sm:w-1/2">
                        <div className="text-md sm:text-base lg:text-4xl font-semibold mb-2 md:mb-4">{title}</div>
                        {descriptions.map((description, index) => (
                            <p key={index} className="mb-2 md:mb-4 text-[#404040] text-xs lg:text-sm">
                                {description}
                            </p>
                        ))}

                        <a href={url}
                            className={`inline-block bg-black hover:bg-[#fb511e] text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1 font-light mb-2 md:mb-8 ${!hasBrands ? 'mt-6' : ''}`}
                        >
                            Read More
                            <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                        </a>

                        {hasBrands && (
                            <Marquee loop={0} className='gap-5 overflow-x-visible brands'>
                                <img src={brandImg1} className="h-8 px-5" alt="" />
                                <img src={brandImg2} className="h-8 px-5" alt="" />
                                <img src={brandImg3} className="h-8 px-5" alt="" />
                                <img src={brandImg4} className="h-8 px-5" alt="" />
                                <img src={brandImg5} className="h-8 px-5" alt="" />
                            </Marquee>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupSection;
