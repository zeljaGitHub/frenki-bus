import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rent from "./pages/Rent";
import Navbar from "./components/Navbar";

const App = () => {
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
