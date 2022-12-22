import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./navbar.css";

import logo from "../navbar/img/logo.png";

function mainNav() {
function removeAllLocal() {
  localStorage.clear();
}

  return (
    <>
      <Navbar id="main-nav" bg="light" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" onClick={() => removeAllLocal()}>
            <img src={logo} width="70" alt="logo" />
          </Navbar.Brand>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Navbar.Toggle aria-controls="navbarScroll" bg="light" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              id="nav-align"
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <h4>
                <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
              </h4>
              <h4>
                <Nav.Link as={Link} to="/multivideos">Videos</Nav.Link>
              </h4>
              <h4>
                <Nav.Link as={Link} to="/musicSelection">Music</Nav.Link>
              </h4>
              {/* <Nav.Link href="#action2">Favorites</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default mainNav;
