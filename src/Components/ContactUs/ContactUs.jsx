import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Navbar from "../Navbar";
import Footer from "../Footer";
import BackgroundImage from "../../assets/69ef976c37520c78cc1a8ccc57885bdf.png";
const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-xl font-medium mb-4">CONTACT US</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4">CUSTOMER CARE</div>
                </div>
            </div>

            <div className="px-[3%]">
                <div className="py-5 flex items-center justify-end">
                    <div className="text-[#404040]">
                        <a href="">Home</a> / Contact us
                    </div>
                </div>

                <div className="text-center text-[#141414] pb-14">
                    <div className="mt-5 font-bold text-4xl">CONTACT US TODAY</div>
                    <p className="py-3 md:py-5">Your feedback is important to us. Please fill in the form below and we will try our best to get back to you as soon as we can.</p>

                    <div className="grid md:grid-cols-2 w-full md:w-3/4 mx-auto gap-5 md:my-10 my-5">
                        <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Full Name *" />
                        <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Telephone Number *" />
                        <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Email Address *" />
                        <input type="text" className="outline-none text-[#141414B2] border border-1 border-[#141414B2] rounded-full px-4 py-1" placeholder="Select Group *" />
                        <textarea className="text-[#141414B2] border border-1 border-[#141414B2] rounded-3xl px-4 py-1.5 md:col-span-2" rows={4} placeholder="Messege"></textarea>
                    </div>

                    <button className="bg-black hover:bg-white text-white hover:text-black transition-all border border-1 border-black rounded-full px-10 py-3">
                        Submit
                        <ArrowLongRightIcon className="ms-4 inline w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="bg-[#F7F7F7] border border-1 border-black h-[60vh]">
                <div className="md:grid md:place-content-center max-md:flex max-md:flex-col max-md:justify-center max-md:ms-[3%] md:w-1/2 h-full">
                    <div className="text-3xl mb-8 font-medium">HEADQUARTERS</div>
                    <p>723 Sheikh Zayed Road, P. O. Box 393316</p>
                    <p>Dubai, U.A.E.</p>
                    <p className="mt-5">customer-care@theelitecars.com</p>
                    <p className="mt-5">+971 4 321  2290</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
