import React from "react";
import "./FrenkiSection.css";

const FrenkiSection = () => {
  return (
    <section className="frenki-section">
      <div className="frenki-container">
        {/* Text */}
        <div className="frenki-text">
          <p className="p-one">
            Firma <strong>„Frenki-komerc„</strong> osnovana je aprila 1993.
            godine u Zagužanu, <br /> nadomak Leskovca. Osnivači firme su braća
            Zoran i Branislav Ilić. <br /> Osnovna delatnost firme je prevoz
            putnika u domaćem međumesnom i međunarodnom vanlinijskom saobraćaju.
            Pored toga firmi je povereno obavljanje prevoza putnika u
            gradsko-prigradskom saobraćaju na teritoriji grada Leskovca.
          </p>

          <p className="p-two">
            U domaćem međumesnom saobraćaju svakodnevno obavljamo polaske <br />{" "}
            na sledećim relacijama:
            <ul>
              <li>Vlasotince–Kragujevac–Vlasotince</li>
              <li>Vlasotince–Požarevac–Vlasotince</li>
              <li>Leskovac–Vranje–Leskovac</li>
              <li>Vranje–Kragujevac–Vranje</li>
            </ul>
          </p>

          <p className="p-three">
            Raspolažemo garažom i parking-prostorom površine 90 ari, <br /> a u
            slučaju eventualnih kvarova koristimo sopstveni servis.
            Predstavništvo firme nalazi se u Leskovcu, u ul. Bulevar
            oslobodjenja br. 147 (ELU-centar).
          </p>
        </div>

        {/* Images */}
        <div className="frenki-images">
          <img src="/kosa-1.png" alt="Enterijer autobusa" className="img-one" />
          <img
            src="/kosa-2.png"
            alt="Autobus ispred garaže"
            className="img-two"
          />
          <img src="/kosa-3.png" alt="Autobusi pozadi" className="img-three" />
        </div>
        <div className="image-container-zamena">
          <img src="zamena1.png" alt="Autobus" />
          <img src="zamena2.png" alt="Autobus" />
          <img src="zamena3.png" alt="Autobus" />
        </div>
      </div>
    </section>
  );
};

export default FrenkiSection;
