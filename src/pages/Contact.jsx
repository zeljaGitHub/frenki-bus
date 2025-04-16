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
            <h1 className="contact-text-overlay-h1">
              Kontaktirajte <span>Nas</span>
            </h1>
            <div className="overlay-contact-p">
              <p>bane.frenki@gmail.com</p>
              <p>www.frenkicommerce.rs</p>
              <br />
              <p>+381 16 260 013</p>
              <p>+381 16 280 140</p>
              <p>+381 16 280 155</p>
              <br />
              <p>PIB: 101910220</p>
              <p>Matični broj: 06832270</p>
            </div>
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
