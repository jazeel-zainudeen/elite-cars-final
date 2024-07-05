import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSection2 = ({ images }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            {!isMobile && (
                <div className="mb-10 md:block hidden">
                    <img src={images[0].src} className="w-full mb-5" alt="" />

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1.5">
                            <div className="text-[#404040] font-bold text-sm">{images[0].created_at}</div>
                            <div className="text-2xl font-bold">{images[0].title}</div>
                            <div className="text-[#404040] text-sm font-light">{images[0].description}</div>
                        </div>
                        <a href={images[0].url} className="text-[#141414] border border-[#141414] px-8 py-1 hover:bg-black hover:text-white rounded-full text-xs font-light">READ MORE</a>
                    </div>
                </div>
            )}

            <Carousel
                responsive={responsive}
                autoPlay
                infinite
                autoPlaySpeed={5000}
                transitionDuration={1000}
                arrows={false}
                showDots={false}
                containerClass="carousel-container"
                itemClass="px-3"
            >
                {images.slice(isMobile ? 0 : 1).map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image.src} className='h-48 w-full object-cover' alt="" />
                        <div className="flex flex-col justify-between items-start gap-1.5 md:gap-3 mt-6">
                            <div className="text-sm text-[#404040] font-bold">{image.created_at}</div>
                            <div className="text-md md:text-2xl font-bold uppercase line-clamp-2 hover:line-clamp-none md:leading-8 md:h-16 md:hover:h-auto transition-all">{image.title}</div>
                            <div className="text-sm font-light text-[#404040]">{image.description}</div>
                            <a href={image.url} className="text-[#141414] border border-[#141414] px-8 py-1 hover:bg-black hover:text-white rounded-full text-xs font-light">READ MORE</a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default CarouselSection2;
