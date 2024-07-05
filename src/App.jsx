import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import GroupOfCompanies from './Components/GroupOfCompanies/GroupOfCompanies';
import MediaCenter from './Components/MediaCenter/MediaCenter';
import Careers from './Components/Careers/Careers';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-group" element={<AboutUs />} />
        <Route path="group-companies" element={<GroupOfCompanies />} />
        <Route path="careers" element={<Careers />} />
        <Route path="media-center" element={<MediaCenter />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
