// Footer.jsx
import "./Footer.css";

const Footer = ({ variant }) => {
  return (
    <footer className={`footer footer-${variant}`}>
      <div className="footer-container">
        <section className="footer-section centriranje-na-sredinu">
          <h2 className="footer-title">
            {variant === "red" ? (
              <img src="logo-white.png" alt="logo" className="logo" />
            ) : (
              <img src="logo-red.png" alt="logo" className="logo" />
            )}
          </h2>
          <p className="footer-text">
            Osnovna delatnost firme je prevoz putnika <br /> u domačem
            medjumesnom i medjunarodnom <br /> vanlinijskom saobračaju.
          </p>
          {/* <p className="footer-text">
            Pored toga firmi je povereno obavljanje prevoza putnika <br /> u
            gradsko-prigradskom saobračaju <br /> na teritoriji grada Leskovca.
          </p> */}
          <p className="footer-text pib">PIB: 101910220</p>
          <p className="footer-text">Matični broj: 06832270</p>
        </section>

        <div className="footer-divider"></div>

        <section className="footer-section poravnanje-sa-desne spustanje-oba">
          <h2 className="footer-title footer-title2">Kontakt informacije</h2>
          <p className="footer-text">
            <strong>ELU centar:</strong> +381 16 260 013
          </p>
          <p className="footer-text">
            <strong>Dispečer:</strong> +381 16 280 140
          </p>
          <p className="footer-text">+381 16 280 155</p>
          <p className="footer-text">+381 69 8729855</p>
          <p className="footer-text">+381 69 8729859</p>
          <p className="footer-text">bane.frenki@gmail.com</p>
        </section>

        {/* <div className="footer-divider"></div> */}

        <section className="footer-section spustanje-oba">
          <h2 className="footer-title footer-title2">Radno vreme</h2>
          <p className="footer-text">Radnim danima: 08:00h - 15:00h</p>
          <p className="footer-text">Subotom: 08:00h - 14:00h</p>
          <p className="footer-text">Nedeljom ne radimo</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
