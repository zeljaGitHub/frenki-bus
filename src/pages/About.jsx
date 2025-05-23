import React from "react";
import "./About.css";
import FrenkiSection from "../components/FrenkiSection";
import Aboutlastsection from "../components/About-last-section";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="container">
      <img src="pozadina.png" alt="pozadina" className="pozadina3" />
      <div className="white-top-cover"></div>
      <div className="container-2">
        <div className="hero-wrapper2">
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
            {/* <h1 className="par-reci">Par redova</h1> */}
            <h1 className="about-o-nama">Naša Priča</h1>
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
