import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <img src="./hero-img-onama.png" alt="hero" className="hero-image" />
        <div className="split-container-contact">
          <div className="left-contact">
            <img src="/lokacija.png" alt="Lokacija" />
          </div>
          <div className="right-contact">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
