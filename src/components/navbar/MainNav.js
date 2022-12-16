import {Container, Form, Button, Nav, Navbar} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../navbar/img/logo.png'

function mainNav() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href ="/">
        <img src = {logo} width = "70" alt='logo' />
        </Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/multivideos">Videos</Nav.Link>
            <Nav.Link href="#action2">Music</Nav.Link>
            <Nav.Link href="#action2">Favorites</Nav.Link>
            
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default mainNav;