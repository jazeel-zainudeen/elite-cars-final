import React, { useEffect, useRef, useState } from "react";

import gsap from 'gsap';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from 'react-responsive';

import Brands from "./Brands";
import Footer from "../Footer";
import Navbar from "../Navbar";
import video1 from "../../assets/video1.mp4";
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
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CarouselImage1 = [
  { src: Img3, name: 'JETOUR', description: 'Jetour has exclusively partnered with The Elite Cars International to bring the Jetour brand to the UAE. This exclusive partnership brings decades of combined formidable experience in the automotive industry, committed to deliver exceptional vehicles at very competitive prices, and professional after sales service, ensuring complete peace of mind to our customers in the UAE', url: 'automotive/jetour' },
  { src: Img2, name: 'ZENVO AUTOMOBILE', description: 'Zenvo Automotive is a producer of limited-edition hypercars based in Præstø, Denmark. Founded in 2007, Zenvo was started with the aim of combining the latest technologies and innovation with an analogue feel, offering the driver a true connection and astonishing performance.', url: 'automotive/zenvo' },
  { src: Img3, name: 'LYNK & CO', description: 'LYNK & CO is well-known for its cutting-edge technology, Mega-City Contrast design philosophy, and commitment to redefining the automotive industry. It is a joint-venture brand co-founded by Geely and Volvo, positioning the global new premium market. By joining forces with this dynamic brand, we are poised to transform the driving experience for our customers and solidify our position as a leader in the market.', url: 'automotive/lynk' },
  { src: Img2, name: 'THE ELITE CARS', description: 'The Elite Cars, is a subsidiary of Elite Group Holding, automotive division, specializing in high-end to mid-luxury car brands.​With a commitment to quality, service, and customer satisfaction, The Elite Cars has been the undisputed leader in the UAE luxury automotive industry for decades.', url: 'automotive/the_elite_cars' },
];

const CarouselImage2 = [
  { src: Img2, name: 'AUTOMOTIVE', description: 'Our automotive division is a key player in the UAE\'s robust automotive market, offering a comprehensive range of services from vehicle sales and leasing to maintenance and after-sales support. We partner with leading global brands to bring the latest and most reliable vehicles to our customers.', url: 'group-companies/elite-automobiles' },
  { src: Img2, name: 'E-COMMERCE', description: 'We are at the forefront of the digital revolution, providing seamless online shopping experiences through our cutting-edge e-commerce platforms. Our goal is to make shopping convenient, efficient, and enjoyable, catering to the evolving needs of modern consumers. ', url: 'group-companies/e-commerce' },
  { src: Img3, name: 'HEALTHCARE', description: 'Elite Group Holding  is dedicated to enhancing the well-being of the community through state-of-the-art medical facilities, innovative health services, and patient-centric care. We strive to make high-quality healthcare accessible to all, backed by a team of experienced professionals.', url: 'group-companies/elite-healthcare' },
  { src: Img2, name: 'REAL ESTATE AND CONTRACTING', description: 'Our real estate and contracting division is synonymous with luxury, quality, and innovation. We develop, manage, and invest in a diverse portfolio of residential, commercial, and mixed-use properties, setting new benchmarks in the real estate industry. ', url: 'group-companies/elite-real-estate' },
  { src: Img3, name: 'INVESTMENT', description: 'Our investments arm is instrumental in the development and implementation of various projects and businesses that drive economic growth. We are involved in a wide range of projects, from construction to strategic investments, ensuring long-term value creation and sustainability.', url: 'group-companies/elite-investment' },
];

const CarouselImage3 = [
  { src: Carousel3Img1, title: 'LAMBORGHINI URUS SE DEBUTS IN GERMANY', description: 'LAMBORGHINI URUS SE DEBUTS IN GERMANY', created_at: 'May 20, 2024, Dubai, UAE', url: '/automotive/lamborghini' },
  { src: Carousel3Img2, title: 'The Elite Cars Presents Zenvo Aurora - Agil & Tur in the MENA', created_at: 'February 22, 2024, Dubai, UAE', url: '/automotive/the_elite_cars' },
  { src: Carousel3Img3, title: 'The All-New Jetour T2 Debuts in the UAE', created_at: '27 January 2024, Dubai, UAE', url: '/automotive/jetour' },
  { src: Carousel3Img4, title: '2023 Jetour Dashing Makes Its Debut in UAE Through The Elite Cars', created_at: 'March 16, 2023, Dubai, UAE', url: '/automotive/jetour' },
]

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const videoUrls = [
    video1,
    video3,
    video2,
    video3,
    video2,
    video3,
    video2    // Add more video URLs here...
  ];
  const isMdOrLarger = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
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

  const clipPathStyle = isMdOrLarger
    ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
    : undefined;

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen section-1 relative z-10">
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

          <div className="absolute w-full h-full bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9))]"></div>

          <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-10">
            <div className="text-lg md:text-xl font-medium md:mb-4 text-1">WELCOME TO ELITE GROUP HOLDINGS</div>
            <div className="text-4xl lg:text-6xl font-bold max-md:leading-[50px] md:mb-5 mb-10 text-2">DRIVING <span className="text-[#fb511e]">EXCELLENCE</span><br />BUILDING <span className="text-[#fb511e]">FUTURES</span></div>
            <button className="hover:bg-[#fb511e] transition-all border border-1 border-white hover:border-[#fb511e] rounded-full px-10 py-1 md:py-3 button-1">
              Explore
              <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-[10%] w-screen flex flex-wrap gap-[3%] px-[5%] overflow-x-auto whitespace-nowrap">
            {["Our Company", "Automotive", "Investments", "Real-Estate", "Healthcare", "Education", "Ecommerce"].map((item, index) => (
              <div key={index} onClick={() => handleVideoClick(index)} className={`cursor-pointer lg:flex-1 ${currentVideo == index ? 'max-md:block' : 'max-md:hidden'}`}>
                <div className="pb-1">
                  <div className="text-xl mb-2 text-[#d7dcd7]">{item}</div>
                  <div className="flex items-center justify-between  w-full">
                    {/* Progress Bar */}
                    <div className="w-full bg-[#ffffff33] h-[2px]">
                      {currentVideo == index &&
                        <div className="bg-[#d7dcd7] h-[2px]" style={{ width: `${progress}%` }}></div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="px-[5%] section-2  py-4">
        <div className="my-10 sm:flex sm:flex-row-reverse sm:items-center">
          <div className=" sm:shrink-1 sm:w-1/2">
            <div className="md:text-md text-[2rem]  lg:text-[2.5rem] font-semibold  text-[#282828]  mb-4 md:mb-8 text-1">ABOUT US</div>
            <p className="mb-2 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2 py-4">
              At Elite Group Holding, we are committed to enhance the QUALITY OF LIFE within the communities we serve, continuously seek avenues for fostering growth and make a positive impact on the world and our community.
            </p>
            <p className="mb-2 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2">
              Headquartered in the United Arab Emirates, our expansive portfolio encompasses automotive, e-commerce, healthcare, real estate and contracting, and investments.
            </p>
            <p className="mb-2 text-[#808080] text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 md:text-base  text-2">
              We pride ourselves on our unwavering dedication to excellence, integrity, and teamwork.
            </p>
            <Link to="/about-group" >

              <button href="/about-group" className="hidden   md:block mt-9 bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-3 button-1">
                Read More
                <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
              </button>
            </Link>
          </div>
          <div className="relative sm:w-1/2 sm:grow sm:shrink-0 sm:-mt-[6%] sm:-ms-[5.75%] overflow-hidden img-1  py-4">
            <div className="hidden sm:block absolute bg-white w-1/4 h-[120%] rotate-12 -right-[11%]"></div>
            <img src={AboutImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div> */}


      <div className="section-2 max-md:py-4">
        <div className="max-md:my-10 md:flex md:flex-row-reverse">
          <div className=" md:shrink-1 md:w-1/2 px-[5%] md:py-10">
            <div className="md:text-md text-[2rem]  lg:text-[2.5rem] font-semibold  text-[#282828]  mb-4 md:mb-8 text-1">ABOUT US</div>
            <p className="mb-2 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2 py-4">
              At Elite Group Holding, we are committed to enhance the QUALITY OF LIFE within the communities we serve, continuously seek avenues for fostering growth and make a positive impact on the world and our community.
            </p>
            <p className="mb-2 text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2">
              Headquartered in the United Arab Emirates, our expansive portfolio encompasses automotive, e-commerce, healthcare, real estate and contracting, and investments.
            </p>
            <p className="mb-2 text-[#808080] text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 md:text-base  text-2">
              We pride ourselves on our unwavering dedication to excellence, integrity, and teamwork.
            </p>
            <Link to="/about-group" >
              <button href="/about-group" className="block md:mt-9 max-md:mt-3 max-md:mb-5 bg-white hover:bg-[#fb511e] text-black hover:text-white  transition-all border border-1 border-black hover:border-[#fb511e] rounded-full px-10 py-1 md:py-3 button-1">
                Read More
                <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
              </button>
            </Link>
          </div>
          <div className="relative md:w-1/2 md:grow md:shrink-0 overflow-hidden img-1 max-md:px-[5%]">
            <img src={AboutImage} alt="" className="w-full h-full object-cover" style={{
              clipPath: clipPathStyle,
              WebkitClipPath: clipPathStyle
            }} />
          </div>
        </div>
      </div>

      <div className="px-[5%] md:text-md text-[2rem]  lg:text-[2.5rem]   text-[#282828] font-semibold md:mb-8 mb-4 section-3-head md:mt-20 py-4">EXPLORE OUR SECTORS</div>
      <CarouselSection images={CarouselImage2} />

      <div className=" px-[5%] md:py-0  section-4 bg-[#F7F7F7] md:pb-12  py-16">
        <div className="md:grid md:grid-cols-4 flex flex-col md:items-center gap-5 md:gap-[5%] md:py-[5%] mb-4 ">
          <div className="md:text-md text-[2rem]  lg:text-[2.5rem]   text-[#282828] font-semibold head-1  py-4">HIGHLIGHTS</div>
          <div className="flex items-start flex-col md:flex-row md:col-span-3 gap-5 md:gap-3 ">
            <p className="text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2 md:w-1/2 line-clamp-5 hover:line-clamp-none">Trust and integrity are our core currencies, it is a foundation on how we build trust with our stakeholders and our partners.</p>
            <p className="text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2 md:w-1/2 line-clamp-5 hover:line-clamp-none">We hold ourselves to the highest ethical standards, ensuring transparency, honesty and accountability in everything we do.</p>
            <p className="text-[#808080] text-base md:text-base lg:text-[1.25rem] lg:leading-[1.75rem]	 text-2 md:w-1/2 line-clamp-5 hover:line-clamp-none">We believe in creating lasting value for our stakeholders. Our diversified portfolio, strategic vision, and operational excellence drive our success and ensure we remain a trusted partner in every sector we operate.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 max-md:gap-5 mb-10 count">
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2  md:border-l-2 border-[#808080] relative md:after:w-[80%] md:after:h-[1.6px] md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-[#808080] md:after:absolute md:after:-bottom-2">
            <div className="text-5xl sm:text-7xl lg:text-6xl md:text-4xl font-bold">
              <CountUp end={30} redraw={true} delay={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-[#282828] text-xs md:text-sm">Years of experience</div>
          </div>
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2  md:border-l-2 border-[#808080] relative md:after:w-[80%] md:after:h-[1.6px] md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-[#808080] md:after:absolute md:after:-bottom-2">
            <div className="text-5xl sm:text-7xl lg:text-6xl md:text-4xl font-bold">
              <CountUp end={5000} redraw={true} delay={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-[#282828] text-xs md:text-sm">Employers</div>
          </div>
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2 max-md:border-y md:border-l-2 border-[#808080] relative md:after:w-[80%] md:after:h-[1.6px] md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-[#808080] md:after:absolute md:after:-bottom-2">
            <div className="text-5xl sm:text-7xl lg:text-6xl md:text-4xl font-bold">
              <CountUp end={40} redraw={true} delay={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-[#282828] text-xs md:text-sm">Nationalities</div>
          </div>
          <div className="grid md:place-content-end place-content-center max-md:aspect-square md:text-right text-center gap-1 sm:gap-2 pt-2 md:pt-10 pb-5 md:px-10 px-2 max-md:border-y md:border-l-2 md:border-r-2 border-[#808080] relative md:after:w-[80%] md:after:h-[1.6px] md:after:left-1/2 md:after:-translate-x-1/2 md:after:bg-[#808080] md:after:absolute md:after:-bottom-2">
            <div className="text-5xl sm:text-7xl lg:text-6xl md:text-4xl font-bold">
              <CountUp end={20} redraw={true} delay={1}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+</div>
            <div className="max-md:text-[#282828] text-xs md:text-sm">Offices / Showrooms</div>
          </div>
        </div>
      </div>

      <div className="section-5 max-md:mt-8">
        <div className="px-[5%] text-xl sm:text-4xl   lg:text-[2.5rem] font-semibold md:mt-20 md:mb-8 mb-4 head-1 py-4">EXPLORE OUR PARTNERS</div>
        <CarouselSection images={CarouselImage1} />
      </div>

      <div className="px-[5%] mx-auto md:mt-24 section-6">
        <div className="text-xl sm:text-4xl lg:text-[2.5rem] font-semibold text-[#282828] py-8  px-3">NEWS</div>
        <CarouselSection2 images={CarouselImage3} />
      </div>

      <Brands />

      <Footer />
    </>
  );
};

export default Home;
