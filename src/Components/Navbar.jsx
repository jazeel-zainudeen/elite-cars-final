import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png'
import { Squash as Hamburger } from 'hamburger-react';
import SocialLinks from './SocialLinks';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

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
      <div className='fixed z-50 w-screen'>
        <div className="flex justify-between px-[2.5%] py-4 bg-[linear-gradient(rgba(15,15,15,0.7),rgba(0,0,0,0))]">
          <SocialLinks className='gap-2 hidden md:flex items-center' />
          <a href="/" className='mr-0 md:mr-8'><img src={Logo} /></a>
          <div className='flex items-center gap-8'>
            <a href='/contact-us' className='text-white text-lg hidden md:flex'>CONTACT</a>
            <Hamburger toggled={showMenu} toggle={setShowMenu} color="white" />
          </div>
        </div>
      </div>
      <div className={`menu w-screen md:h-screen h-full max-md:min-h-screen max-md:pt-[20vh] max-md:pb-6 max-md:overflow-scroll fixed z-40 backdrop-blur-lg backdrop-brightness-50 transition-all duration-1000 ease-in-out ${showMenu ? 'bottom-0' : 'bottom-full'}`}>
        <div onMouseLeave={() => handleHover(null)} className="flex md:justify-evenly max-md:flex-col max-md:gap-10 md:h-screen w-screen items-start md:items-center max-md:px-[3%] text-sm sm:text-lg md:text-3xl">
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

        <SocialLinks className='z-30 md:hidden flex items-center gap-3 px-[3%] mt-6' iconClassName='border rounded-full !w-9 !h-9' />
      </div>
    </>
  );
}

export default Navbar;
