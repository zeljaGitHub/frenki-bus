import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;
    const ime = form.ime.value;
    const telefon = form.telefon.value;
    const email = form.email.value;
    const poruka = form.poruka.value;

    const to = "zel87king2@gmail.com"; // ← OVDE upiši svoj email
    const subject = encodeURIComponent("Kontakt forma sa sajta");
    const body = encodeURIComponent(
      `Ime i Prezime: ${ime}\nTelefon: ${telefon}\nEmail: ${email}\n\nPoruka:\n${poruka}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <input type="text" name="ime" placeholder="Ime i Prezime" required />
      <input type="tel" name="telefon" placeholder="Kontakt Telefon" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="poruka" placeholder="Vaša poruka" rows="5" required />
      <button type="submit">Pošalji</button>
    </form>
  );
};

export default ContactForm;
