import React from "react";
import "./About.css";
import FrenkiSection from "../components/FrenkiSection";
import Aboutlastsection from "../components/About-last-section";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <div className="hero-wrapper">
          <img
            src="hero-img-bus.png"
            alt="Hero Desktop"
            className="hero-image desktop-hero"
          />
          <img
            src="hero-mobile-img-bus.png"
            alt="Hero Mobile"
            className="hero-image mobile-hero"
          />
          <div className="hero-text-overlay">
            <h1>Tvoj kul naslov</h1>
            <p>Podnaslov ili nešto kul</p>
          </div>
        </div>
        <FrenkiSection />
        <Aboutlastsection />
        <Footer variant="black" />
      </div>
    </div>
  );
};

export default About;
