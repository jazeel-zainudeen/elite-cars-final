import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';

const CarouselSection = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    descriptionRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener('mouseenter', () => {
          gsap.to(ref.querySelector('.description'), { height: 'auto', marginTop: '0.5rem', duration: 0.75, ease: 'power1.inOut' });
        });
        ref.addEventListener('mouseleave', () => {
          gsap.to(ref.querySelector('.description'), { height: 0, marginTop: 0, duration: 0.75, ease: 'power1.inOut' });
        });
      }
    });
  }, [images]);

  const customRenderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="md:hidden absolute bottom-[5%] left-[5%] transform py-0.5 border border-white text-white z-10"
      >
        <ArrowLongLeftIcon className="w-12 h-5" />
      </button>
    );

  const customRenderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="md:hidden absolute bottom-[5%] right-[5%] transform py-0.5 border border-white text-white z-10"
      >
        <ArrowLongRightIcon className="w-12 h-5" />
      </button>
    );

  return (
    <div className="w-screen md:h-[80vh] relative flex flex-col-reverse md:block carouselSection max-md:py-1">
      <div className="md:absolute w-screen h-[50vh] md:h-[80vh]0">
        <Carousel
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={customRenderArrowPrev}
          renderArrowNext={customRenderArrowNext}
          selectedItem={images.indexOf(currentImage)}
          onChange={(index) => setCurrentImage(images[index])}
          className="relative w-full h-full reactCarousel"
          autoPlay
          infiniteLoop
          interval={5000}
          transitionTime={1000}
          stopOnHover={false}
          emulateTouch
          swipeable
          dynamicHeight={false}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-[50vh] md:h-[80vh]">
              <img src={image.src} alt={image.name} className="object-cover brightness-[25%] w-full h-full" />

              <div className="md:hidden absolute left-0 w-full px-[10%] top-1/2 -translate-y-1/2 text-white text-left">
                <div className="text-lg mb-3">{image.name}</div>
                <div className="text-sm">{image.description}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="hidden md:grid-cols-6"></div>
      <div className="hidden md:grid-cols-5"></div>
      <div className={`flex justify-evenly gap-3 px-5 md:px-0 mb-5 md:mb-5 md:gap-0 flex-wrap md:grid md:grid-cols-${images.length} md:h-full`}>
        {images.map((image, index) => (
          <a
            href={image.url}
            key={index}
            className={`relative border md:rounded-none rounded-full px-5 md:px-0 py-1 md:py-0 flex-auto md:border-r border-black md:border-[#808080] group transition-all max-md:hover:bg-black`}
            onMouseEnter={() => setCurrentImage(image)}
            ref={(el) => (descriptionRefs.current[index] = el)}
          >
            <div className="md:absolute md:w-full bottom-0 transition-all duration-300 ease-in-out transform md:mb-6">
              <div className={`select-none text-center text-xs md:text-lg lg:text-2xl transition-all text-black md:text-white max-md:group-hover:text-white`}>
                {image.name}
              </div>
              <div className={`h-0 description max-md:hidden text-center md:text-lg text-xs md:px-3 text-black md:text-[#DFDCDC] overflow-hidden cursor-pointer`}>
                {image.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
