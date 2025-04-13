import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <div className="hero-wrapper">
          <img
            src="hero-img-onama.png"
            alt="Hero Desktop"
            className="hero-image desktop-hero"
          />
          <img
            src="mobile-hero.png"
            alt="Hero Mobile"
            className="hero-image mobile-hero"
          />
          <div className="hero-text-overlay">
            <h1>Tvoj kul naslov</h1>
            <p>Podnaslov ili nešto kul</p>
          </div>
        </div>

        <div className="split-container-contact">
          <div className="left-contact">
            <img src="/lokacija.png" alt="Lokacija" className="lokacija" />
          </div>
          <div className="right-contact">
            <ContactForm />
          </div>
        </div>
        <Footer variant="black" />
      </div>
    </div>
  );
};

export default Contact;
