import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CSS/MainSection1.css';
import logo from '../assets/ss.png';

const MainSection1 = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} xs={12} className="mb-4">
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="font-weight-bold">Bulk SMS</Card.Title>
              <Card.Text>
                Reach your customers directly with our bulk SMS services. We create targeted SMS campaigns that communicate your message effectively and drive results.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="font-weight-bold">IVR/Toll Free</Card.Title>
              <Card.Text>
                A toll-free/IVR is a powerful tool to keep the records for tracking your customer usage of your provided services. Toll-free/IVR benefits you to build the trust relationship with your clients by keeping you connected with them 24*7.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xs={12} className="text-center mb-4">
          <img src={logo} alt="Service illustration" className="img-fluid" />
        </Col>
        <Col md={6} xs={12} className="mt-4 mb-4">
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="font-weight-bold">WhatsApp Business API</Card.Title>
              <Card.Text>
                Boost Your Business Communication with WhatsApp Business API Integration.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="font-weight-bold">Voice Broadcasting</Card.Title>
              <Card.Text>
                Experience seamless communication with Bulk Voice Call Service! Reach your audience effortlessly and amplify your message with just a few clicks. From announcements to promotions, our service ensures your voice is heard by hundreds or thousands of contacts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection1;
