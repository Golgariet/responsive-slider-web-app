import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./GlobalStyles";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
