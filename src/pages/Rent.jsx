import React from "react";
import "./Rent.css";
import Footer from "../components/Footer";

const Rent = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <img src="./hero-rent.png" alt="hero" className="hero-image" />
        <div className="rent-2-sekcija">
          <img src="lotsofbuses.png" alt="Autobusi" />
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
      </div>
      <Footer variant="black" />
    </div>
  );
};

export default Rent;
