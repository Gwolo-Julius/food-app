import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <>
      <Navbar />
    <div className="container main">
      <HeroSection/>
    </div>
    </>
  );
}

export default App;
