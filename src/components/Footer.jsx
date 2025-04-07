// Footer.jsx
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-section">
          <h2 className="footer-title">Kontakt</h2>
          <p className="footer-text">
            Osnovna delatnost firme je prevoz putnika u domačem medjumesnom i
            medjunarodnom vanlinijskom saobračaju.
          </p>
          <p className="footer-text">
            Pored toga firmi je povereno obavljanje prevoza putnika u
            gradsko-prigradskom saobračaju na teritoriji grada Leskovoa.
          </p>
          <p className="footer-text">PIB: 101910220</p>
          <p className="footer-text">Matični broj: 06832270</p>
        </section>

        <div className="footer-divider"></div>

        <section className="footer-section">
          <h2 className="footer-title">Kontakt informacije</h2>
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

        <div className="footer-divider"></div>

        <section className="footer-section">
          <h2 className="footer-title">Radno vreme</h2>
          <p className="footer-text">Radnim danima: 08:00h - 15:00h</p>
          <p className="footer-text">Subotom: 08:00h - 14:00h</p>
          <p className="footer-text">Nedeljom ne radimo</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
