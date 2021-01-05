import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import { SliderData } from "./data/SliderData";
import SideBar from "./components/SideBar";
import InfoSection from "./components/InfoSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection />
    </>
  );
}

export default App;
