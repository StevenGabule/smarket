import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Smarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Cart</Nav.Link>
              <Nav.Link href="#link">Wishlist</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">
                Register
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
