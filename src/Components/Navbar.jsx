import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png'
import { Squash as Hamburger } from 'hamburger-react';
import SocialLinks from './SocialLinks';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('automotive');

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showMenu]);

  const handleHover = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="absolute top-0 md:left-1/2 left-[5%] md:-translate-x-1/2 z-[60] py-[5%] md:py-4">
        <a href="/" className=''><img src={Logo} className='w-28 md:w-32' /></a>
      </div>
      <div className='fixed z-50 w-screen'>
        <div className="flex justify-between px-[4.5%] md:px-[2.5%] py-[5%] md:py-4 bg-[linear-gradient(rgba(15,15,15,0.9),rgba(0,0,0,0))]">
          <SocialLinks className='gap-0.5 hidden md:flex items-center' iconClassName='!w-11 !h-11 socialIconCustomColor' />
          <div className='flex md:items-center gap-8 max-md:justify-end max-md:w-full'>
            <a href='/contact-us' className='text-[#d7dcd7] hover:text-[#fb511e] text-lg hidden md:flex'>CONTACT</a>

            <div className="hamburger-wrapper">
              <Hamburger toggled={showMenu} toggle={setShowMenu} color="#d7dcd7" />
            </div>
          </div>
        </div>
      </div>
      <div className={`menu w-screen md:h-auto md:min-h-[80vh] h-full max-md:pt-[15vh] max-md:pb-6 max-md:overflow-scroll fixed z-40 backdrop-blur-lg backdrop-brightness-50 transition-all duration-1000 ease-in-out ${showMenu ? 'opacity-full top-0' : 'opacity-0 -top-full'}`}>
        <div className="flex md:justify-evenly max-md:flex-col max-md:gap-10 w-screen items-start md:items-center max-md:px-[5%] md:py-[6%] text-sm sm:text-lg md:text-3xl">
          <div>
            <div className="flex flex-col items-start h-full gap-3 md:gap-7">
              <div className="text-[#989898] font-light whitespace-nowrap">NAVIGATION</div>
              <a href='/'
                className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>HOME</a>
              <a href='/about-group'
                className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>ABOUT GROUP</a>
              <a href='/group-companies'
                className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>GROUP COMPANIES</a>
              <a href='/careers'
                className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>CAREERS</a>
              <a href='/media-center'
                className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>MEDIA CENTER</a>
              <a href='/contact-us'
                className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>CONTACT US</a>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start h-full gap-3 md:gap-7">
              <div className="text-[#989898] font-light whitespace-nowrap">SECTORS</div>
              <a onMouseEnter={() => handleHover('automotive')} className={`${activeSection === 'automotive' ? 'text-white after:opacity-100 after:w-full' : 'text-[#989898]'} cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}>AUTOMOTIVE</a>
              <a onMouseEnter={() => handleHover('investments')} className={`${activeSection === 'investments' ? 'text-white after:opacity-100 after:w-full' : 'text-[#989898]'} cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}>INVESTMENTS</a>
              <a onMouseEnter={() => handleHover('real_estate')} className={`${activeSection === 'real_estate' ? 'text-white after:opacity-100 after:w-full' : 'text-[#989898]'} cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}>REAL ESTATE</a>
              <a onMouseEnter={() => handleHover('healthcare')} className={`${activeSection === 'healthcare' ? 'text-white after:opacity-100 after:w-full' : 'text-[#989898]'} cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}>HEALTHCARE</a>
              <a onMouseEnter={() => handleHover('education')} className={`${activeSection === 'education' ? 'text-white after:opacity-100 after:w-full' : 'text-[#989898]'} cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}>EDUCATION</a>
              <a onMouseEnter={() => handleHover('ecommerce')} className={`${activeSection === 'ecommerce' ? 'text-white after:opacity-100 after:w-full' : 'text-[#989898]'} cursor-pointer font-semibold whitespace-nowrap transition-all navbar-underline-animation`}>ECOMMERCE</a>
            </div>
          </div>
          <div className={`relative ${activeSection === 'automotive' ? '' : 'max-md:hidden'}`}>
            <div className={`flex flex-col items-start transition-all duration-1000 h-full gap-3 md:gap-7 ${activeSection === 'automotive' ? 'opacity-100' : 'opacity-0 hover:active:transition-all'}`}>
              <div className="text-[#989898] font-light whitespace-nowrap hidden md:block">&nbsp;</div>
              <a href='' className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>ELITE CARS</a>
              <a href='' className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>ZENVO</a>
              <a href='' className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>SUNCITY MOTORS</a>
              <a href='' className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>JETOUR</a>
              <a href='' className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>ULTIMATE MOTORS</a>
              <a href='' className='text-white font-semibold whitespace-nowrap navbar-underline-animation'>ELITE MOTOR SERVICES</a>
            </div>
          </div>
        </div>

        <SocialLinks className='z-30 md:hidden flex items-center gap-3 px-[5%] mt-6' iconClassName='border rounded-full !w-9 !h-9' />
      </div>
    </>
  );
}

export default Navbar;
