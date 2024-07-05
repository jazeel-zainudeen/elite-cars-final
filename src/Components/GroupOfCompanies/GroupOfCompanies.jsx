import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import BackgroundImage from "../../assets/57af26e48eb6728309d8a752a133493e.png";

const GroupOfCompanies = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen w-screen relative">
                <img src={BackgroundImage} alt="" className="object-cover object-center h-screen w-screen brightness-50" />

                <div className="absolute top-1/2 left-[3%] -translate-y-1/2 z-10 text-white">
                    <div className="text-lg md:text-3xl font-semibold mb-4 uppercase">ELITE GROUP HOLDING</div>
                    <div className="text-4xl md:text-6xl font-extrabold mb-4 uppercase">OUR GROUP of COMPANIES</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GroupOfCompanies;
