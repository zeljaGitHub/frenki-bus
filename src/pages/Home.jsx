import React from "react";
import "./Home.css";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="container">
      <div className="white-top-cover"></div>
      <div className="container-2">
        <img src="./hero-img-2.png" alt="hero" className="hero-image" />
        <div className="red-voznje">
          <div className="h1h3">
            <h1>Red vožnje</h1>
            <h3>Izaberi mesto polaska</h3>
          </div>
          <div className="buttons">
            <button>LESKOVAC</button>
            <button>NIŠ</button>
            <button>KRAGUJEVAC</button>
            <button>JAGODINA</button>
            <button>ĆUPRIJA</button>
          </div>
          <div className="buttons">
            <button>BEOGRAD</button>
            <button>SVILAINAC</button>
            <button>POŽAREVAC</button>
            <button>PARAĆIN</button>
          </div>
        </div>
        <div className="split-container">
          <div className="left">
            <div className="div-za-align">
              <h4>
                Prevoz putnika <br /> visokopodnim autobusima <br /> turističke
                klase
              </h4>
            </div>
            <div className="red-div">
              <p>
                Pozovite nas i rezervišite <br /> Vaše mesto još danas:
              </p>
              <p>+381 16 260 013</p>
              <p>+381 16 280 140</p>
              <p>+381 16 280 155</p>
              <p>+381 69 8729855</p>
              <p>+381 69 8729859</p>
            </div>
            <div className="black-div">Naš vozni park</div>
          </div>
          <div className="right">
            <img src="/bus-pocetna.png" alt="Autobus" />
          </div>
        </div>
        <div className="popusti">
          <div className="da-obojim-u-crno">
            <h2>Popusti za sve!</h2>
          </div>
          <div className="popusti-slike">
            <img src="/1od3dole.png" alt="skolarci" />
            <img src="/2od3dole.png" alt="penzioneri" />
            <img src="/3od3dole.png" alt="studenti" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
