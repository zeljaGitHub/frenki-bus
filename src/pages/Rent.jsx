import React from "react";
import "./Rent.css";
import Footer from "../components/Footer";

const Rent = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <div className="hero-wrapper">
          <img
            src="hero-iznajmljivanje.png"
            alt="Hero Desktop"
            className="hero-image desktop-hero hero-iznajmljivanje-img"
          />
          <img
            src="hero-iznajmljivanje-mobile.png"
            alt="Hero Mobile"
            className="hero-image mobile-hero"
          />
          <div className="hero-text-overlay">
            <h1>Tvoj kul naslov</h1>
            <p>Podnaslov ili nešto kul</p>
          </div>
        </div>
        <div className="rent-2-sekcija">
          <img src="lotsofbuses.png" alt="Autobusi" className="lotsofbuses" />
          <div class="text-overlay">
            <div className="rent-black">
              <h4>Iznajmljivanje Vozila</h4>
            </div>
            <p>
              Frenki line u svom voznom parku poseduje autobuse <br />{" "}
              kapaciteta od 28 do 61 sedišta koja je moguće iznajmiti <br /> za
              ekskurzije, izlete, obilaske grada, privatni prevoz i slično,{" "}
              <br /> na svim destinacijama u zemlji i inostranstvu.
            </p>
          </div>
        </div>
        <Footer variant="black" />
      </div>
    </div>
  );
};

export default Rent;
