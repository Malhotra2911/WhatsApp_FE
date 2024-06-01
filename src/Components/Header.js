import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CSS/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home">
        <img src={logo} alt="AiSensy Logo" height="80px" className="align-middle" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#product">Product</Nav.Link>
          <Nav.Link href="#integrations">Integrations</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
          <Button variant="success" className="mr-2">Start 14-Day Free Trial</Button>
          <LinkContainer to="/login">
            <Button variant="outline-primary">Login</Button>
          </LinkContainer>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
