import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import mainImage from '../assets/ss.png'; // Replace with your image path
import bulkSmsIcon from '../assets/ss.png'; // Replace with your icon path
import whatsappMessagingIcon from '../assets/ss.png'; // Replace with your icon path
import voiceBroadcastingIcon from '../assets/ss.png'; // Replace with your icon path
import ivrServiceIcon from '../assets/ss.png'; // Replace with your icon path
import whatsappApiIcon from '../assets/ss.png'; // Replace with your icon path
import tollFreeServiceIcon from '../assets/ss.png'; // Replace with your icon path

const MainSection = () => {
  const services = [
    {
      icon: bulkSmsIcon,
      title: "Bulk SMS",
      description: "Bulk SMS service lets you reach more people and tell them about your services. Bulk SMS gives you a one-click blast...",
    },
    {
      icon: whatsappMessagingIcon,
      title: "WhatsApp Messaging",
      description: "WhatsApp marketing is a type of messenger marketing, which implies promoting a brand through WhatsApp. This channel...",
    },
    {
      icon: voiceBroadcastingIcon,
      title: "Voice Broadcasting",
      description: "According to statistics, with the increasing use of smartphone devices, the voice call marketing is playing a crucial role in...",
    },
    {
      icon: ivrServiceIcon,
      title: "IVR Service",
      description: "Interactive voice response, or IVR, is an automated telephone system that combines pre-recorded messages or text-...",
    },
    {
      icon: whatsappApiIcon,
      title: "WhatsApp API",
      description: "Connect your device via a simple QR code and send messages to your target audience using the WhatsApp API.",
    },
    {
      icon: tollFreeServiceIcon,
      title: "Toll Free Service",
      description: "A toll-free number is a powerful tool to keep the records for tracking your customer usage of your provided services. Toll-free...",
    }
  ];

  return (
    <Container fluid className="p-5 text-center">
      <Row>
        <Col md={6} className="text-left">
          <h1>Your Complete WhatsApp Engagement Platform</h1>
          <p>Businesses drive 25-60% Revenues using AiSensy</p>
          <ul>
            <li>Broadcast Promotional Offers to Unlimited Users</li>
            <li>Sell your Products on WhatsApp using Catalogs</li>
            <li>Automate Messages via Integrations</li>
            <li>Enable Multi-Agent Live Chat for Customer Support</li>
            <li>Build Chatbots & Solve for 24 x 7 Support & Engagement</li>
          </ul>
          <p>Powered by Official WhatsApp Business API</p>
        </Col>
        <Col md={6}>
          <img src={mainImage} alt="AiSensy dashboard" className="img-fluid" />
        </Col>
      </Row>
      <Row className="mt-5">
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="mb-3">
                  <img src={service.icon} alt={`${service.title} icon`} height="40" />
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="outline-primary">Show More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainSection;
