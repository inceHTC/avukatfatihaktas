import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
<motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ minHeight: "80vh", padding: "3rem 0", backgroundColor: "#1e1e1e", color: "#e0e0e0" }}
    >
      <Container style={{ maxWidth: "900px" }}>
        <h2 className="mb-4 text-center" style={{ fontWeight: "700" }}>
          İletişim
        </h2>
        <hr />

        {submitted && <Alert variant="success">Mesajınız gönderildi. Teşekkürler!</Alert>}

        <Form onSubmit={handleSubmit}>
          <h2>Bize Ulaşın</h2>
          <br />
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Adınız</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınızı yazınız"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-posta</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta adresinizi yazınız"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Mesajınız</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajınızı yazınız"
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">
            Gönder
          </Button>
        </Form>

        {/* Adres ve Yol Tarifi */}
        <section
          style={{
            marginTop: "3rem",  // Burada boşluk eklendi
            marginBottom: "2rem",
            backgroundColor: "#2a2a2a",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            color: "#f0f0f0",
          }}
        >
          <h3 style={{ color: "#bfa243" }}>Adres:</h3>
          <hr />
          <p>
            İstiklal Kurtuluş Caddesi No:31 Kat:3 Daire: 5
            <br />
            17200 Biga / Çanakkale
          </p>

          <h3 style={{ color: "#bfa243" }}>Telefon:</h3>
          <hr />
          <p>
            <a href="tel:+905447852017" style={{ color: "#f0f0f0", textDecoration: "none" }}>
              0544 785 20 17
            </a>
          </p>

          <h3 style={{ color: "#bfa243" }}>Yol Tarifi:</h3>
          <hr />
          <p>
            Minibüs veya otobüs ile Biga merkezine ulaşabilirsiniz. Araç ile gelirken İstiklal Kurtuluş Caddesi üzerinde yer almaktadır. Park alanı yakın çevrede bulunmaktadır.
          </p>
        </section>

        {/* Google Maps */}
        <section
          style={{
            marginBottom: "3rem",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <iframe
            title="Google Maps Biga"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5784895472676!2d27.01689541503359!3d40.28093197936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8a48151b7b6b3%3A0x215d1f84270287ca!2s%C4%B0stiklal%20Kurtulu%C5%9F%20Cd.%2C%20Biga%2F%C3%87anakkale!5e0!3m2!1str!2str!4v1689999999999!5m2!1str!2str"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </Container>
    </motion.div>
  );
}

export default Contact;
