import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import AnimatedText from "./components/AnimatedText";
import WhatWeDo from "./components/WhatWeDo";
import OurServices from "./components/OurServices";
import ServiceAccordion from "./components/ServiceAccordion";
import Talk from "./components/Talk";
import WhoWeAre from "./components/WhoWeAre";
import AdvanceAnimation from "./components/AdvanceAnimation";
import StudioSection from "./components/StudioSection";
import ParallaxPage from "./components/ParallaxPage";
import CommunityProjects from "./components/CommunityProjects";
import TalentPage from "./components/TalentPage";
import RolesOpen from "./components/RolesOpen";




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
      <Talk/>
      <WhoWeAre/>
      <AdvanceAnimation/>
      <StudioSection/>
      <ParallaxPage/>
      <CommunityProjects/>
      <TalentPage/>
      <RolesOpen/>
    </div>
  );
};

export default App;
