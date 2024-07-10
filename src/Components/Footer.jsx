import Logo from '../assets/Logo.png';
import React, { useState } from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {

  return (
    <div className='bg-[#141414] py-10'>
      <div className="px-[4%] mx-auto">
        <img src={Logo} className='w-44 mx-auto mb-5 md:mb-10' />

        <div className="grid md:grid-cols-3 gap-5 text-[#B3B3B3]">
          <div>
            <div className="text-2xl mb-2.5">ABOUT US</div>
            <p className='text-sm mb-2.5'>At Elite Group Holding, we are committed to enhance the quality of life within the communities we serve, continuously seek avenues for fostering growth and make a positive impact on the world and our community. </p>
            <p className='text-sm mb-2.5'>Headquartered in the United Arab Emirates, our expansive portfolio encompasses automotive, e-commerce, healthcare, real estate and contracting, and investments.</p>
            <p className='text-sm mb-2.5'>We pride ourselves on our unwavering dedication to excellence, integrity, and teamwork.</p>
          </div>

          <div className='flex gap-2 md:justify-around justify-between'>
            <div>
              <div className='text-base mb-4'>NAVIGATION</div>
              <div className="grid gap-2 text-xs">
                <a href="/" className='hover:text-white'>Home</a>
                <a href="/about-group" className='hover:text-white'>About Group</a>
                <a href="/group-companies" className='hover:text-white'>Group Companies</a>
                <a href="/careers" className='hover:text-white'>Careers</a>
                <a href="/media-center" className='hover:text-white'>Media Center</a>
                <a href="/contact-us" className='hover:text-white'>Contact Us</a>
              </div>
            </div>

            <div>
              <div className='text-base mb-4'>GROUP OF COMPANIES</div>
              <div className="grid gap-2 text-xs">
                <a href="/group-companies/elite-automobiles" className='hover:text-white'>Automotive</a>
                <a href="group-companies/elite-investment" className='hover:text-white'>Investments</a>
                <a href="group-companies/elite-real-estate" className='hover:text-white'>Real Estate</a>
                <a href="group-companies/elite-healthcare" className='hover:text-white'>Healthcare </a>
                <a href="group-companies/elite-education" className='hover:text-white'>Education</a>
                <a href="group-companies/elite-e-commerce" className='hover:text-white'>Ecommerce</a>
              </div>
            </div>
          </div>

          <div>
            <div className='text-base mb-4'>SUBSCRIBE</div>
            <p className='mb-4'>Subscribe to our Newsletter to be up to date with the latest automotive news and our amazing deals</p>
            <input type="text" className='md:h-10 h-9 text-sm mb-4 bg-[#808080] rounded-full outline-none py-1.5 px-5 w-full text-white placeholder:text-white' placeholder='Your Email Address' />
            <button className='md:h-10 h-9 mb-5 w-full bg-transparent hover:bg-white hover:text-black transition-all border border-1 border-[#808080] rounded-full py-1.5'>SUBMIT</button>

            <SocialLinks className='gap-0.5 hidden md:flex items-center' iconClassName='w-6 h-6' />
          </div>
        </div>

        <hr className='my-10 border-[#808080]' />

        <p className='mb-2 text-[#C3C3C3] text-sm'>Copyright © 2024 | ALL RIGHTS RESERVED | The Elite Cars LLC</p>
        <p className='text-[#818181] text-sm'><strong>Disclaimer:</strong> The Elite Cars is not endorsed by, directly affiliated with, maintained or sponsored by any car manufacturer.</p>

      </div>
    </div>
  );
}

export default Footer;
