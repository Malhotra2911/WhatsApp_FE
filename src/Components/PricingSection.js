import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PricingSection.css'; // Assuming you have a CSS file for custom styles

const pricingPlans = [
  {
    price: '₹2065',
    title: 'WhatsApp SMS',
    quantity: '10,000',
    pricePerSms: '17.5 Paisa',
    creditCount: '1000 Character',
    sendMediaFile: true,
    sendingTiming: '10am to 6am',
    virtualNumber: true,
    apiAvailable: true,
    gst: '18%',
  },
  {
    price: '₹7080',
    title: 'WhatsApp SMS',
    quantity: '50,000',
    pricePerSms: '12 Paisa',
    creditCount: '1000 Character',
    sendMediaFile: true,
    sendingTiming: '10am to 6am',
    virtualNumber: true,
    apiAvailable: true,
    gst: '18%',
  },
  {
    price: '₹11800',
    title: 'WhatsApp SMS',
    quantity: '1,00,000',
    pricePerSms: '10 Paisa',
    creditCount: '1000 Character',
    sendMediaFile: true,
    sendingTiming: '10am to 6am',
    virtualNumber: true,
    apiAvailable: true,
    gst: '18%',
  },
];

const PricingSection = () => {
  return (
    <Container className="pricing-section">
      <Row>
        {pricingPlans.map((plan, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <h3>{plan.price}</h3>
                <h5>{plan.title}</h5>
                <hr />
                <p><strong>Quantity - {plan.quantity}</strong></p>
                <p>Par SMS Price - {plan.pricePerSms}</p>
                <p>1 Credit Count - {plan.creditCount}</p>
                {plan.sendMediaFile && <p>Send Media File</p>}
                <p>Sending Timing - {plan.sendingTiming}</p>
                {plan.virtualNumber && <p>WhatsApp Sending (Virtual Number)</p>}
                {plan.apiAvailable && <p>Http WhatsApp API Available</p>}
                <p>Including GST {plan.gst}</p>
                <Button variant="outline-primary">Purchase Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricingSection;
