import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import Marquee from 'react-fast-marquee';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BrandsBgImg from "../../assets/7b71111d8ef4403f34fb8f6fe5a89cf3.png";
import BrandImg6 from "../../assets/brands/1e24784b68eaa2a478d5c944b8f5882d.png";
import BrandImg4 from "../../assets/brands/29a432879ba73fd84135fb0a7d93690c.png";
import BrandImg2 from "../../assets/brands/49179c7f284e0f119a59c051a69f1229.png";
import BrandImg3 from "../../assets/brands/650ff9973056a7adf2acf9f2d43eedbe.png";
import BrandImg5 from "../../assets/brands/9d235cc5a615eab42850259a8a184972.png";
import BrandImg1 from "../../assets/brands/ce2c9ff1dc145e659a07a4d35dd0ae7c.png";

import 'react-multi-carousel/lib/styles.css';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-brand',
                start: 'top center',
            },
            delay: 0.25
        })
            .fromTo('.section-brand .head-1 ', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-brand .description-1 ', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
            .fromTo('.section-brand .brands ', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
        ;

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const images = [
        BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg6,
        BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg6,
        BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg6,
        BrandImg1, BrandImg2, BrandImg3, BrandImg4, BrandImg5, BrandImg6,
        BrandImg3, BrandImg4, BrandImg5, BrandImg6
    ];

    return (
        <div
            style={{ 'backgroundImage': `url(${BrandsBgImg})` }}
            className="md:h-screen w-screen bg-no-repeat bg-center bg-cover px-[5%] flex flex-col md:justify-center text-white overflow-hidden section-brand">
            <div className="flex items-start gap-5 flex-col md:w-2/3 md:pt-0 pt-16">
                <div className="font-bold md:text-5xl text-4xl head-1">OUR BRANDS</div>
                <p className="text-xs md:text-sm description-1">Our portfolio showcases a diverse range of projects in different scales and styles, reflecting our commitment to excellence and innovation in design. With a team of experienced architects, designers and engineers, ELITE GROUP provides end-to-end solutions that change people's life.</p>
                {isMobile ? (
                    <Marquee className='gap-5 pb-16 brands'>
                        {images.map((img, index) => (
                            <img key={index} src={img} className="h-8 px-5" alt="" />
                        ))}
                    </Marquee>
                ) : (
                    <div className="flex justify-between md:flex-wrap md:my-0 my-16 gap-10 max-md:overflow-hidden max-md:whitespace-nowrap max-md:animate-[marquee_8s_linear_infinite] brands">
                        {images.map((img, index) => (
                            <img key={index} src={img} className="h-6" alt="" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Brands;
