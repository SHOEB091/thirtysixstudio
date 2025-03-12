import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import AnimatedText from "./components/AnimatedText";
import WhatWeDo from "./components/WhatWeDo";

const App = () => {
  return (
    <div>
      <AnimatedCursor /> 
      <Navbar />
      <Home />
      <AnimatedText />
      <WhatWeDo/>
    </div>
  );
};

export default App;
