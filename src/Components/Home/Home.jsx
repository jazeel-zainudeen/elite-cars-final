import React, { useEffect, useRef, useState } from "react";

import gsap from 'gsap';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Brands from "./Brands";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Img1 from "../../assets/Img1.png";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import CarouselSection from "./CarouselSection";
import CarouselSection2 from "./CarouselSection2";
import AboutImage from '../../assets/AboutImgMob.png';
import Img2 from "../../assets/29522fdb562ad5091f7ba8046a52297b.png";
import Img3 from "../../assets/61eb2205573fced65146611241f3b4c4.jpeg";
import Carousel3Img2 from "../../assets/220c8c6b943f41d253ab5e853e6103b7.png";
import Carousel3Img3 from "../../assets/897d556a59733e5e2482f1b030c8c4de.png";
import Carousel3Img1 from "../../assets/8feed4b5e6b4f73a93ac24feb4a0ddc6.png";
import Carousel3Img4 from "../../assets/ebaac82941ffdd8e43e3861aeb9a9ef3.png";

gsap.registerPlugin(ScrollTrigger);

const CarouselImage1 = [
  { src: Img3, name: 'LAMBORGHINI', description: 'Description for Lamborghini' },
  { src: Img2, name: 'ZENVO AUTOMOBILE', description: 'Description for Zenvo Automobile' },
  { src: Img3, name: 'JETOUR', description: 'Description for Jetour' },
  { src: Img2, name: 'THE ELITE CARS', description: 'Description for The Elite Cars' },
  { src: Img3, name: 'SUN CITY MOTORS', description: 'Description for Sun City Motors' },
];

const CarouselImage2 = [
  { src: Img2, name: 'AUTOMOTIVE', description: 'Ultimate Motors upholds its dedication to delivering unrivaled excellence in customer experience and top-tier automotive services.' },
  { src: Img3, name: 'INVESTMENT', description: 'Ultimate Motors upholds its dedication to delivering unrivaled excellence in customer experience and top-tier automotive services.' },
  { src: Img2, name: 'REAL ESTATE', description: 'Ultimate Motors upholds its dedication to delivering unrivaled excellence in customer experience and top-tier automotive services.' },
  { src: Img3, name: 'HEALTHCARE', description: 'Ultimate Motors upholds its dedication to delivering unrivaled excellence in customer experience and top-tier automotive services.' },
  { src: Img2, name: 'EDUCATION', description: 'Ultimate Motors upholds its dedication to delivering unrivaled excellence in customer experience and top-tier automotive services.' },
  { src: Img2, name: 'ECOMMERCE', description: 'Ultimate Motors upholds its dedication to delivering unrivaled excellence in customer experience and top-tier automotive services.' },
];

const CarouselImage3 = [
  { src: Carousel3Img1, title: 'LAMBORGHINI URUS SE DEBUTS IN GERMANY', description: 'LAMBORGHINI URUS SE DEBUTS IN GERMANY', created_at: 'May 20, 2024, Dubai, UAE' },
  { src: Carousel3Img2, title: 'The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA', created_at: 'February 22, 2024, Dubai, UAE' },
  { src: Carousel3Img3, title: 'The All-New Jetour T2 Debuts in the UAE', created_at: '27 January 2024, Dubai, UAE' },
  { src: Carousel3Img4, title: '2023 Jetour Dashing Makes Its Debut in UAE Through The Elite Cars', created_at: 'March 16, 2023, Dubai, UAE' },
]

const Home = () => {
  const [currentBackground, setCurrentBackground] = useState(Img1); // Initial background image
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const videoUrls = [
    'https://tec-prod-bucket.s3.me-south-1.amazonaws.com/epublic/2kGlRV2Dpux0RDnBHIZ6Bshag0Z06p3DXqs7WqjK.mp4',
    video3,
    video2,
    video3,
    video2,
    video3,
    video2    // Add more video URLs here...
  ];

  useEffect(() => {
    const mediaQuery = gsap.matchMedia();

    mediaQuery.add("(min-width: 768px)", () => {
    });

    gsap.timeline({ duration: 0.5, ease: 'power3.out' })
      .fromTo('.section-1 .text-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo('.section-1 .text-2', { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo('.section-1 .button-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top bottom',
      }
    })
      .fromTo('.section-2 .text-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.section-2 .text-2', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.section-2 .button-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

    gsap.fromTo('.section-2 .img-1', { opacity: 0 }, {
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top bottom',
      }, opacity: 1, duration: 0.75, ease: 'power3.out'
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-3-head',
        start: 'top center',
      }
    })
      .fromTo('.section-3-head', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
      .fromTo('.section-3-head+.carouselSection', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-4',
        start: 'top center',
      },
      delay: 0.25
    })
      .fromTo('.section-4 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.section-4 .text', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.section-4 .count', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-5',
        start: 'top center',
      },
      delay: 0.25
    })
      .fromTo('.section-5 .head-1', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.section-5 .carouselSection', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-6',
        start: 'top center',
      },
      delay: 0.25
    })
      .fromTo('.section-6 ', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })


  }, []);

  useEffect(() => {
    let animationFrameId;
    const updateProgress = () => {
      if (videoRef.current) {
        const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      animationFrameId = requestAnimationFrame(updateProgress);
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [currentVideo]);

  // const handleHover = (image) => {
  //   setCurrentBackground(image);
  // };

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videoUrls.length);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen section-1">
        <div className="relative bg-black h-[100vh] w-screen text-white font-barlow">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 top-0 w-screen h-full object-cover video-banner"
            onEnded={handleVideoEnd}
          >
            <source
              src={videoUrls[currentVideo]}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute w-full h-full bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8))]"></div>

          <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10">
            <div className="text-lg md:text-xl font-medium mb-4 text-1">WELCOME TO ELITE GROUP HOLDINGS</div>
            <div className="text-4xl lg:text-6xl font-bold mb-5 text-2">DRIVING EXCELLENCE<br />BUILDING FUTURES</div>
            <button className="hover:bg-white hover:text-black transition-all border border-1 border-white rounded-full px-10 py-3 button-1">
              Explore
              <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-[10%] w-screen grid grid-rows-1 grid-flow-col gap-[3%] px-[3%] overflow-x-auto whitespace-nowrap">
            {["Our Company", "Automotive", "Investments", "Real-Estate", "Healthcare", "Education", "Ecommerce"].map((item, index) => (
              <div key={index} onClick={() => handleVideoClick(index)} className={`cursor-pointer  ${currentVideo == index ? 'max-md:block' : 'max-md:hidden'}`}>
                <div className="pb-1 text-white">
                  <div className="text-xl mb-2">{item}</div>
                  <div className="flex items-center justify-between  w-full">
                    {/* Progress Bar */}
                    <div className="w-full bg-[#ffffff33] h-[2px]">
                      {currentVideo == index &&
                        <div className="bg-white h-[2px]" style={{ width: `${progress}%` }}></div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-[3%] section-2">
        <div className="my-10 sm:flex sm:flex-row-reverse sm:items-center">
          <div className="xl:px-24 sm:shrink-1 sm:w-1/2">
            <div className="text-xl sm:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-1">ABOUT US</div>
            <p className="mb-4 text-[#404040] text-xs md:text-base text-2">
              Elite Group Holding Ltd, is more than just a group holding company. We are visionaries, innovators and creators of tomorrow’s possibilities.
            </p>
            <p className="mb-4 text-[#404040] text-xs md:text-base text-2">
              We believe in the power of purpose-driven business. Our commitment revolves around enhancing the quality of life within the communities we serve and continuously seeking new avenues for fostering growth.
            </p>

            <button className="hidden md:block mt-8 bg-black hover:bg-white text-white hover:text-black transition-all border border-1 border-black rounded-full px-10 py-3 button-1">
              Read More
              <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
            </button>
          </div>
          <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-mt-10 sm:-ms-[3.5%] overflow-hidden img-1">
            <div className="hidden sm:block absolute bg-white w-1/4 h-[120%] rotate-12 -right-[11%]"></div>
            <img src={AboutImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-[3%] text-xl sm:text-4xl lg:text-6xl font-extrabold md:mb-8 mb-4 section-3-head md:mt-20">EXPLORE OUR SECTORS</div>
      <CarouselSection images={CarouselImage2} />

      <div className=" px-[3%] md:py-0 py-10 section-4 bg-[#F7F7F7] md:pb-12 pb-4">
        <div className="md:grid md:grid-cols-3 flex flex-col md:items-center gap-5 md:gap-[5%] md:p-[5%] mb-4">
          <div className="text-xl sm:text-4xl lg:text-5xl font-extrabold head-1">HIGHLIGHTS</div>
          <div className="flex items-start flex-col md:flex-row md:col-span-2 gap-5 md:gap-10">
            <p className="font-light md:text-base text-xs text md:w-1/2">We are pragmatic in our approach to design and handle each project in accordance with its particular set of requirements and imperatives. When working in conservation areas or on listed buildings we aim to respect and retain v best of the historic elements and to supplement these with contemporary interventions wherever appropriate.</p>
            <p className="font-light md:text-base text-xs text md:w-1/2">Energy efficiency and sustainability issues are given serious consideration at the outset of the design process, in particular on new-build projects. Properly considered they play an important part in adding present and future value.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 max-md:gap-5 mb-10 count">
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2 max-md:border md:border-l border-black relative md:after:w-[80%] md:after:h-0.5 md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-black md:after:absolute md:after:-bottom-2">
            <div className="text-xl sm:text-4xl lg:text-6xl font-light">
              <CountUp end={30} redraw={true} delay={1.5}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-black/40 text-xs">Years of experience</div>
          </div>
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2 max-md:border md:border-l border-black relative md:after:w-[80%] md:after:h-0.5 md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-black md:after:absolute md:after:-bottom-2">
            <div className="text-xl sm:text-4xl lg:text-6xl font-light">
              <CountUp end={5000} redraw={true} delay={1.5}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-black/40 text-xs">Employers</div>
          </div>
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2 max-md:border md:border-l border-black relative md:after:w-[80%] md:after:h-0.5 md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-black md:after:absolute md:after:-bottom-2">
            <div className="text-xl sm:text-4xl lg:text-6xl font-light">
              <CountUp end={40} redraw={true} delay={1.5}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-black/40 text-xs">Nationalities</div>
          </div>
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2 max-md:border md:border-l md:border-r border-black relative md:after:w-[80%] md:after:h-0.5 md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-black md:after:absolute md:after:-bottom-2">
            <div className="text-xl sm:text-4xl lg:text-6xl font-light">
              <CountUp end={20} redraw={true} delay={1.5}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-black/40 text-xs">Offices / Showrooms</div>
          </div>
        </div>
      </div>

      <div className="section-5 max-md:mt-8">
        <div className="px-[3%] text-xl sm:text-4xl lg:text-6xl font-extrabold md:mt-20 md:mb-16 mb-6 head-1">EXPLORE OUR PARTNERS</div>
        <CarouselSection images={CarouselImage1} />
      </div>

      <div className="px-[3%] md:px-[12%] mx-auto md:mt-24 my-10 section-6">
        <div className="text-xl sm:text-4xl lg:text-5xl font-extrabold mb-5">LAMBORGHINI WORLD</div>
        <CarouselSection2 images={CarouselImage3} />
      </div>

      <Brands />

      <Footer />
    </>
  );
};

export default Home;
