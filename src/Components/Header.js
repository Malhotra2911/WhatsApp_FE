import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home">
        <img src="path-to-logo.png" alt="AiSensy Logo" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#integrations">Integrations</Nav.Link>
        </Nav>
        <Button variant="success" className="mr-2">Start 14-Day Free Trial</Button>
        <Button variant="outline-primary">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
