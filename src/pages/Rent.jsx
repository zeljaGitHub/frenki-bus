import React from "react";
import "./Rent.css";
import Footer from "../components/Footer";

const Rent = () => {
  return (
    <div className="container">
      <img src="pozadina.png" alt="pozadina" className="pozadina2" />
      <div className="white-top-cover"></div>
      <div className="container-2">
        <div className="hero-wrapper2">
          <img
            src="hero-iznajmljivanje.jpg"
            alt="Hero Desktop"
            className="hero-image desktop-hero hero-iznajmljivanje-img"
          />
          <img
            src="hero-iznajmljivanje-mobile.png"
            alt="Hero Mobile"
            className="hero-image mobile-hero"
          />
          <div className="hero-text-overlay-rent">
            <h1 className="Iznajmljivanje-Autobusa-h1">
              Iznajmljivanje <br /> Autobusa
            </h1>
            <h1 className="abuget">Modeli u</h1>
            <h1 className="abuget2">ponudi</h1>
            <p className="Osim-prevoza-putnika">
              Osim prevoza putnika iznajmljujemo <br /> svoja vozila drugim
              pravnim licima <br /> radi organizovanja <br /> turističkih
              obilazaka
            </p>
          </div>
        </div>
        <div className="rent-2-sekcija">
          <img src="lotsofbuses.png" alt="Autobusi" className="lotsofbuses" />
          <div class="text-overlay">
            <div className="rent-black">
              <h4>Iznajmljivanje Vozila</h4>
            </div>
            <p>
              Frenki line u svom voznom parku <br /> poseduje autobuse
              kapaciteta <br /> od 28 do 61 sedišta koja je moguće <br />{" "}
              iznajmiti za ekskurzije, izlete, obilaske <br /> grada, privatni
              prevoz i slično, na svim <br /> destinacijama u zemlji i
              inostranstvu.
            </p>
          </div>
        </div>
        <Footer variant="black" />
      </div>
    </div>
  );
};

export default Rent;
