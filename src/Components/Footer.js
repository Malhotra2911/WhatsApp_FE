import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} AiSensy. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
