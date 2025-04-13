import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src="./left-ear.png" alt="" className="left-ear" />
      <img src="./right-ear.png" alt="" className="right-ear" />
      <img src="./frenki.png" alt="frenki" className="frenki" />
      {/* Desktop links */}
      <ul className="nav-left">
        <li>
          <Link to="/" onClick={closeMenu}>
            Početna
          </Link>
        </li>
        <li>
          <Link to="/Iznajmljivanje-Autobusa" onClick={closeMenu}>
            Iznajmljivanje Autobusa
          </Link>
        </li>
      </ul>

      <ul className="nav-right">
        <li>
          <Link to="/O-nama" onClick={closeMenu}>
            O nama
          </Link>
        </li>
        <li>
          <Link to="/Kontakt" onClick={closeMenu}>
            Kontakt
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <img src="/logo-white.png" alt="logo" className="mobile-logo" />

      {/* Mobile menu */}
      <ul className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Početna
          </Link>
        </li>
        <li>
          <Link to="/Iznajmljivanje-Autobusa" onClick={closeMenu}>
            Iznajmljivanje Autobusa
          </Link>
        </li>
        <li>
          <Link to="/O-nama" onClick={closeMenu}>
            O nama
          </Link>
        </li>
        <li>
          <Link to="/Kontakt" onClick={closeMenu}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
