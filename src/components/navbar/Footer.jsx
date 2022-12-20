import "./Footer.css";
import logo from "../navbar/img/logo.png";
import { Container, Form, Button, Nav, Navbar } from "react-bootstrap";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Navbar id="footer-container" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} width="70" alt="logo" />
          </Navbar.Brand>
          <Nav id="nav-align" className="me-auto my-2 my-lg-0">
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/multivideos">Videos</Nav.Link>
            <Nav.Link href="/music">Music</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Footer;
