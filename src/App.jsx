import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import AnimatedText from "./components/AnimatedText";
import WhatWeDo from "./components/WhatWeDo";
import OurServices from "./components/OurServices";
import ServiceAccordion from "./components/ServiceAccordion";

import WhoWeAre from "./components/WhoWeAre";
import AdvanceAnimation from "./components/AdvanceAnimation";
import StudioSection from "./components/StudioSection";

import CommunityProjects from "./components/CommunityProjects";
import TalentPage from "./components/TalentPage";
import RolesOpen from "./components/RolesOpen";
import ClientsSection from "./components/ClientsSection";
import ContactForm from "./components/ContactForm";
import SpicyCTA from "./components/SpicyCta";
import Footer from "./components/Footer";
import HowWeGiveback from "./components/HowWeGiveback";




const App = () => {
  return (
    <div>
      <AnimatedCursor /> 
      <Navbar />
      <Home />
      <AnimatedText />
      <WhatWeDo/>
      <OurServices/>
      <ServiceAccordion/>

      <WhoWeAre/>
      <AdvanceAnimation/>
      <StudioSection/>
      <HowWeGiveback/>
      <CommunityProjects/>
      <TalentPage/>
      <RolesOpen/>
      <ClientsSection/>
      <ContactForm/>
      <SpicyCTA/>
      <Footer/>
    </div>
  );
};

export default App;
