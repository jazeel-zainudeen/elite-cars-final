import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs';
import Careers from './Components/Careers/Careers';
import ContactUs from './Components/ContactUs/ContactUs';
import Automotive from './Components/Automotive/Automotive';
import MediaCenter from './Components/MediaCenter/MediaCenter';
import ZenvoImage from './assets/220c8c6b943f41d253ab5e853e6103b7.png';
import LamboImage from "./assets/8feed4b5e6b4f73a93ac24feb4a0ddc6.png";
import JetourImage from "./assets/ebaac82941ffdd8e43e3861aeb9a9ef3.png";
import GroupOfCompanies from './Components/GroupOfCompanies/GroupOfCompanies';
import EliteMotorsImage from './assets/61eb2205573fced65146611241f3b4c4.jpeg';
import TheEliteCarsImage from './assets/61eb2205573fced65146611241f3b4c4.jpeg';
import UltimateMotorsImage from './assets/61eb2205573fced65146611241f3b4c4.jpeg';

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-group" element={<AboutUs />} />

        <Route path="group-companies" element={<GroupOfCompanies />} />
        <Route path='group-companies'>
          <Route path="elite-automobiles" element={<Automotive title="Elite Automobiles" BackgroundImage={TheEliteCarsImage} />} />
          <Route path="elite-investment" element={<Automotive title="Elite Investment Company" BackgroundImage={TheEliteCarsImage} />} />
          <Route path="elite-real-estate" element={<Automotive title="Elite Real Estate Company" BackgroundImage={TheEliteCarsImage} />} />
          <Route path="elite-healthcare" element={<Automotive title="Elite Healthcare Company" BackgroundImage={TheEliteCarsImage} />} />
          <Route path="elite-education" element={<Automotive title="Elite Education Company" BackgroundImage={TheEliteCarsImage} />} />
          <Route path="elite-e-commerce" element={<Automotive title="Elite E-Commerce Company" BackgroundImage={TheEliteCarsImage} />} />
        </Route>
        <Route path="careers" element={<Careers />} />
        <Route path="media-center" element={<MediaCenter />} />
        <Route path="contact-us" element={<ContactUs />} />

        <Route path='automotive'>
          <Route path="lamborghini" element={<Automotive title="Lamborghini" BackgroundImage={LamboImage} />} />
          <Route path="jetour" element={<Automotive title="Jetour" BackgroundImage={JetourImage} />} />
          <Route path="ultimate_motors" element={<Automotive title="Ultimate Motors" BackgroundImage={UltimateMotorsImage} />} />
          <Route path="elite_motors" element={<Automotive title="Elite Motors" BackgroundImage={EliteMotorsImage} />} />
          <Route path="the_elite_cars" element={<Automotive title="The Elite Cars" BackgroundImage={TheEliteCarsImage} />} />
          <Route path="zenvo" element={<Automotive title="Zenvo" BackgroundImage={ZenvoImage} />} />
          <Route path="lynk" element={<Automotive title="Lynk & Co" BackgroundImage={EliteMotorsImage} />} />
          <Route path="suncity" element={<Automotive title="Suncity Motors" BackgroundImage={JetourImage} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
