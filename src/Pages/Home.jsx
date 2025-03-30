import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CallToAction from "../Components/cta";
import Founder from "../Components/Founder";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CallToAction />
      <Founder />
    </div>
  );
};

export default Home;
