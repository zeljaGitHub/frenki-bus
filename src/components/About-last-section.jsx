import React from "react";
import "./About-last-section.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Leva strana - slike */}
      <div className="images">
        <img src="/bus-dole.png" alt="Autobus Frenki" className="main-image" />
        <img
          src="bus-dole-2.png"
          alt="Autobusi u garaži"
          className="small-image"
        />
      </div>

      {/* Desna strana - tekst */}
      <div className="text-content">
        <div className="red-banner">
          <h4 className="red-banner-naslov">
            Osim prevoza putnika iznajmljujemo svoja vozila drugim pravnim
            licima radi organizovanja turističkih obilazaka
          </h4>
        </div>

        <p>
          Imamo dugogodišnju i izuzetno uspešnu saradnju sa domaćim turističkim
          agencijama, posebno sa turističkim agencijama „Bavka-turs“, iz Gornjeg
          Bunibroda i „Vučić-travel“, iz Leskovca. Prevoz putnika se vrši
          modernim dvospratnim i visokopodnim autobusima turističke klase marke
          SETRA i NEOPLAN, sa kompletnom dodatnom opremom (klima, audio i video
          tehnika, kafe-bar, toalet…).
        </p>

        <p>
          Firma „Frenki-komerc„ u svom kolektivu ima 50 upošljenika prosečne
          starosti 36 godina. Iskustvo, stručnost i profesionalni odnos prema
          obavezama i poslovnim partnerima su garancija da će Vam sa nama
          putovanje biti bezbedno i zanimljivo, a nama će biti posebno drago da
          nam ukažete na eventualne nedostatke koje budete primetili tokom
          putovanja.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
