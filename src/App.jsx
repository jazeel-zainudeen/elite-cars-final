import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs';
import Careers from './Components/Careers/Careers';
import ContactUs from './Components/ContactUs/ContactUs';
import Automotive from './Components/Extras/Automotive';
import ExtrasGroupOfCompanies from './Components/Extras/GroupOfCompanies';
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
          <Route path="elite-automobiles"
            element={<ExtrasGroupOfCompanies
              title="Elite Automobiles"
              descriptions={[
                "Elite Group Holding is pleased to assist you with an attentive multi-channel service:",
                "You can ask your questions to the Elite Group Holding  Assistant who will guide you through the Elite Group Holding."
              ]}
              BackgroundImage={TheEliteCarsImage} />} />

          <Route path="elite-investment"
            element={<ExtrasGroupOfCompanies
              title="Elite Investment Company"
              descriptions={[
                "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
              ]}
              BackgroundImage={TheEliteCarsImage} />} />

          <Route path="elite-real-estate"
            element={<ExtrasGroupOfCompanies
              title="Elite Real Estate Company"
              descriptions={[
                "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                "You can ask your questions to the Elite Group Holding  Assistant who will guide you through the Elite Group Holding."
              ]}
              BackgroundImage={TheEliteCarsImage} />} />

          <Route path="elite-healthcare"
            element={<ExtrasGroupOfCompanies
              title="Elite Healthcare Company"
              descriptions={[
                "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
              ]}
              BackgroundImage={TheEliteCarsImage} />} />

          <Route path="elite-education"
            element={<ExtrasGroupOfCompanies
              title="Elite Education Company"
              descriptions={[
                "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                "You can ask your questions to the Elite Group Holding  Assistant who will guide you through the Elite Group Holding."
              ]}
              BackgroundImage={TheEliteCarsImage} />} />

          <Route path="elite-e-commerce"
            element={<ExtrasGroupOfCompanies
              title="Elite E-Commerce Company"
              descriptions={[
                "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
                "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
              ]}
              BackgroundImage={TheEliteCarsImage} />} />

        </Route>
        <Route path="careers" element={<Careers />} />
        <Route path="media-center" element={<MediaCenter />} />
        <Route path="contact-us" element={<ContactUs />} />

        <Route path='automotive'>
          <Route path="lamborghini" element={<Automotive title="Lamborghini" BackgroundImage={LamboImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="jetour" element={<Automotive title="Jetour" BackgroundImage={JetourImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="ultimate_motors" element={<Automotive title="Ultimate Motors" BackgroundImage={UltimateMotorsImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="elite_motors" element={<Automotive title="Elite Motors" BackgroundImage={EliteMotorsImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="the_elite_cars" element={<Automotive title="The Elite Cars" BackgroundImage={TheEliteCarsImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="zenvo" element={<Automotive title="Zenvo" BackgroundImage={ZenvoImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="lynk" element={<Automotive title="Lynk & Co" BackgroundImage={EliteMotorsImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
          <Route path="suncity" element={<Automotive title="Suncity Motors" BackgroundImage={JetourImage}
            descriptions={[
              "Elite Group Holding  is pleased to assist you with an attentive multi-channel service:",
              "You can ask your questions to the Elite Group Holding  Assistant, who will guide you through the Elite Group Holding."
            ]} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
