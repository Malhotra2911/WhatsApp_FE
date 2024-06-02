// src/components/Dashboard.js

import React from 'react';
import { Container, Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './CSS/Dashboard.css'; // Custom CSS for styling

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={2} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col md={10} className="main-content">
          <Row className="mb-4">
            <Col>
              <h1>Hey Lucky, Welcome to AiSensy!</h1>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Start WhatsApp Engagement for your Business.</Card.Title>
                  <Card.Text>Your account is currently in test mode. You can try & experience a feature like Broadcasting.</Card.Text>
                  <Card.Text>Test Business number: +919810765443</Card.Text>
                  <Button variant="success" className="mr-2">Apply for WhatsApp Business API (FREE)</Button>
                  <Button variant="secondary">Schedule Live Demo</Button>
                </Card.Body>
              </Card>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Get your WhatsApp Business API Live and unlock 200 free WhatsApp Conversation Credits</Card.Title>
                  <Card.Text>Step 1: Get your API Live - PENDING</Card.Text>
                  <Card.Text>Step 2: Get FBM Verified - PENDING</Card.Text>
                  <Card.Text>Step 3: Recharge WCC - PENDING</Card.Text>
                  <Card.Text>Step 4: Spend 500 WCC - PENDING</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Account Status: Test Mode</Card.Title>
                  <Form>
                    <Form.Group controlId="contactName">
                      <Form.Label>Contact Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="whatsAppNumber">
                      <Form.Label>WhatsApp Number</Form.Label>
                      <InputGroup>
                        <InputGroup>
                          <InputGroup.Text>+91</InputGroup.Text>
                        </InputGroup>
                        <Form.Control type="text" placeholder="Mobile Number" />
                      </InputGroup>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mb-2">Submit</Button>
                    <Button variant="secondary" type="button" className="mb-2">Try Broadcasting</Button>
                    <Button variant="secondary" type="button">Try Live Chat</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
