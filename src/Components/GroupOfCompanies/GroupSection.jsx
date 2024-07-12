import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import Marquee from 'react-fast-marquee';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import brandImg from './../../assets/brands/color/lambo.png';
import brandImg1 from './../../assets/brands/color/image 43.png';
import brandImg2 from './../../assets/brands/color/image 44.png';
import brandImg3 from './../../assets/brands/color/image 46.png';
import brandImg4 from './../../assets/brands/color/Rectangle 24.png';
import brandImg5 from './../../assets/brands/color/Rectangle 45.png';

gsap.registerPlugin(ScrollTrigger);

const GroupSection = ({ image, title, descriptions, url = false, hasBrands = false, direction = "right" }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const descriptionRef = useRef(null);
    const isMdOrLarger = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const imageEl = imageRef.current;
        const descriptionEl = descriptionRef.current;

        if (sectionEl && imageEl && descriptionEl) {
            const directionSettings = direction === "right"
                ? { imageX: -50, descX: 150 }
                : { imageX: 150, descX: -50 };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionEl,
                    start: 'top center',
                    toggleActions: 'play none none none',
                }
            });

            tl.fromTo(imageEl, { x: directionSettings.imageX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
                .fromTo(descriptionEl, { x: directionSettings.descX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

            return () => {
                tl.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [direction]);


    const clipPathStyle = isMdOrLarger
        ? direction === "right"
            ? "polygon(0 0, 80% 0, 100% 100%, 0% 100%)"
            : "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
        : undefined;

    return (
        <div className="overflow-hidden" ref={sectionRef}>
            <div className={`flex max-md:flex-col-reverse max-md:gap-3 sm:items-center max-md:my-5 ${direction === "right" ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="relative overflow-hidden z-10 md:w-[55.5%]">
                    <img src={image} ref={imageRef} alt="" className="w-full sm:h-[20rem] md:h-[26rem] object-cover"
                        style={{
                            clipPath: clipPathStyle,
                            WebkitClipPath: clipPathStyle
                        }} />
                </div>
                <div className="md:px-12 lg:px-20 xl:px-24 md:w-[44.5%]" ref={descriptionRef}>
                    <div className="text-md sm:text-base lg:text-4xl font-semibold mb-2 md:mb-4">{title}</div>
                    {descriptions.map((description, index) => (
                        <p key={index} className="mb-2 md:mb-4 text-[#282828] text-[1rem] md:text-[1.2rem]">
                            {description}
                        </p>
                    ))}

                    {url && (
                        <a
                            href={url}
                            className={`inline-block bg-white hover:bg-[#fb511e] text-black hover:text-white transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1 font-light mb-2 md:mb-8 ${!hasBrands ? 'mt-6' : ''}`}
                        >
                            Read More
                            <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                        </a>
                    )}

                    {hasBrands && (
                        <Marquee loop={0} className='gap-5 brands md:mt-10 mt-5 mb-5 md:mb-0'>
                            <a href="/automotive/lamborghini"><img src={brandImg} className="h-8 px-5" alt="Lamborghini" /></a>
                            <a href="/automotive/jetour"><img src={brandImg1} className="h-8 px-5" alt="Brand 1" /></a>
                            <a href="/automotive/ultimate_motors"><img src={brandImg2} className="h-8 px-5" alt="Brand 2" /></a>
                            <a href="/automotive/elite_motors"><img src={brandImg3} className="h-8 px-5" alt="Brand 3" /></a>
                            <a href="/automotive/the_elite_cars"><img src={brandImg4} className="h-8 px-5" alt="Brand 4" /></a>
                            <a href="/automotive/zenvo"><img src={brandImg5} className="h-8 px-5" alt="Brand 5" /></a>
                        </Marquee>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GroupSection;
