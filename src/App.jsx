import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";
import Chiefs from "./components/Chiefs";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <Chiefs/>
      </div>
        <Footer/>
    </>
  );
}

export default App;
