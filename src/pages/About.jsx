import React from "react";
import "./About.css";
import FrenkiSection from "../components/FrenkiSection";
import Aboutlastsection from "../components/About-last-section";

const About = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <img
          src="./hero-img-bus.png"
          alt="hero"
          className="hero-image about-hero"
        />
        <FrenkiSection />
        <Aboutlastsection />
      </div>
    </div>
  );
};

export default About;
