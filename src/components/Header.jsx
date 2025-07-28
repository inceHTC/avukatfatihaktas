import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logoBan2.png";

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="custom-navbar py-2"
    >
      <Container>
    <Navbar.Brand
  as={Link}
  to="/"
  className="d-flex align-items-center navbar-brand-custom"
   style={{ gap: "20px" }}  // flex container için boşluk
>
  <img
    src={logo}
    alt="Logo"
    className="navbar-logo"
    style={{
      height: "50px",
      borderRadius: "50%",
      objectFit: "cover",
       marginLeft: "8px",
   
    }}
  />
  <span className="brand-name" style={{ fontSize: "1.2rem" }}>
    Avukat Fatih Aktaş
  </span>
</Navbar.Brand>


        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">
              Ana Sayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/hakkinda">
              Hakkında
            </Nav.Link>
            <Nav.Link as={Link} to="/hizmetler">
              Hizmetler
            </Nav.Link>
            <Nav.Link as={Link} to="/iletisim">
              İletişim
            </Nav.Link>
            <Nav.Link as={Link} to="/makaleler">
              Makaleler
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
