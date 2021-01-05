import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import { SliderData } from "./data/SliderData";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <SideBar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
