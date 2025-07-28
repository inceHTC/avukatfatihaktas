import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#121212",
        color: "#aaa",
        padding: "1.5rem 0",
        marginTop: "auto",
      }}
    >
      <Container className="text-center">
        <p>© 2025 Avukat Fatih Aktaş. Tüm hakları saklıdır.</p>
        <p>
          İstiklal Kurtuluş Caddesi No:31 Kat:3 Daire: 5 17200 Biga / Çanakkale
        </p>
        <p>Telefon: +90 544 785 20 17 | E-posta: info@fatihaktaş.av.tr</p>
      </Container>
    </footer>
  );
}

export default Footer;
