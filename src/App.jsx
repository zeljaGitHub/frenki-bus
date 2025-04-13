import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rent from "./pages/Rent";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Širina ekrana:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Pozovi jednom i odmah
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Iznajmljivanje-Autobusa" element={<Rent />} />
        <Route path="/O-nama" element={<About />} />
        <Route path="/Kontakt" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
