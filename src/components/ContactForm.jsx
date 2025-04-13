import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Poruka uspešno poslata!");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Došlo je do greške: " + error.text);
          setSending(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h4>Sva polja su obavezna</h4>
      <input
        type="text"
        name="ime"
        placeholder="Ime i Prezime"
        required
        style={{ width: "min(100%, 700px)" }}
      />
      <input
        type="tel"
        name="telefon"
        placeholder="Kontakt Telefon"
        required
        style={{ width: "min(100%, 700px)" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        style={{ width: "min(100%, 700px)" }}
      />
      <textarea name="poruka" placeholder="Vaša poruka" rows="10" required />
      <button type="submit" disabled={sending}>
        {sending ? "Šalje se..." : "Pošalji"}
      </button>
    </form>
  );
};

export default ContactForm;
