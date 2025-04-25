import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import Video from "../components/Video";
import PopustiSection from "../components/PopustiCarousel";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container">
      <img src="pozadina.png" alt="pozadina" className="pozadina" />
      <div className="white-top-cover"></div>
      <div className="container-2">
        {/* <img src="./hero-img-2.png" alt="hero" className="hero-image" /> */}
        <Video />
        <div className="red-voznje">
          <div className="h1h3">
            <h1>Red vožnje</h1>
            <h3>Izaberi mesto polaska</h3>
          </div>
          <div className="buttons buttons-gornji">
            <button onClick={() => window.open("/leskovac.jpg", "_blank")}>
              LESKOVAC
            </button>
            <button onClick={() => window.open("/nis.jpg", "_blank")}>
              NIŠ
            </button>
            <button onClick={() => window.open("/kragujevac.jpg", "_blank")}>
              KRAGUJEVAC
            </button>
            <button onClick={() => window.open("/jagodina.jpg", "_blank")}>
              JAGODINA
            </button>
            <button onClick={() => window.open("/cuprija.jpg", "_blank")}>
              ĆUPRIJA
            </button>
          </div>
          <div className="buttons">
            <button onClick={() => window.open("/beograd.jpg", "_blank")}>
              BEOGRAD
            </button>
            <button onClick={() => window.open("/svilajnac.jpg", "_blank")}>
              SVILAJNAC
            </button>
            <button onClick={() => window.open("/pozarevac.jpg", "_blank")}>
              POŽAREVAC
            </button>
            <button onClick={() => window.open("/paracin.jpg", "_blank")}>
              PARAĆIN
            </button>
          </div>
        </div>
        <div className="split-container">
          <div className="left">
            <div className="div-za-align">
              <h6>
                Prevoz putnika <br /> visokopodnim autobusima <br /> turističke
                klase
              </h6>
            </div>
            <div className="red-div">
              <p className="pozovite-line">
                Pozovite nas i rezervišite <br /> Vaše mesto još danas:
              </p>
              <p>+381 16 260 013</p>
              <p>+381 16 280 140</p>
              <p>+381 16 280 155</p>
              <p>+381 69 8729855</p>
              <p>+381 69 8729859</p>
            </div>

            <Link to="/Iznajmljivanje-Autobusa" className="black-div">
              Iznajmi Autobus
            </Link>
          </div>
          <div className="right">
            <img src="/bus-pocetna.png" alt="Autobus" />
          </div>
        </div>
        <PopustiSection />
        <Footer variant="black" />
      </div>
    </div>
  );
};

export default MainPage;
