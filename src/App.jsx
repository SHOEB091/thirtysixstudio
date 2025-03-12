import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import AnimatedText from "./components/AnimatedText";
import WhatWeDo from "./components/WhatWeDo";
import OurServices from "./components/OurServices";
const App = () => {
  return (
    <div>
      <AnimatedCursor /> 
      <Navbar />
      <Home />
      <AnimatedText />
      <WhatWeDo/>
      <OurServices/>
    </div>
  );
};

export default App;
