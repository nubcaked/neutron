import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import NeutronLogo from '../images/nu4-removebg-preview.png';

function NeutronNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/">
            <Image src={NeutronLogo} width='250'/>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={1} href="#services">Our Service</Nav.Link>
            <Nav.Link eventKey={2} href="#deets">Our Credentials</Nav.Link>
            <Nav.Link eventKey={3} href="#deets">Join us!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default NeutronNavbar;
