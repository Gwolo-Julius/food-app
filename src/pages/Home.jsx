import React from 'react'
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import Chiefs from "../components/Chiefs";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <Chiefs />
    </div>
  );
}

export default Home
