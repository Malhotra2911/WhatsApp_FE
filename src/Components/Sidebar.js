import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  FaTachometerAlt,
  FaComments,
  FaHistory,
  FaAddressBook,
  FaBullhorn,
  FaFacebook,
  FaProjectDiagram,
  FaCreditCard,
  FaCog,
  FaPuzzlePiece,
} from "react-icons/fa";
import "./CSS/Sidebar.css";
import logo from "../assets/ss.png"; // Assuming you have a logo image

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <Button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"}
      </Button>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        <LinkContainer to="/dashboard">
          <Nav.Link>
            <FaTachometerAlt className="icon" /> Dashboard
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/livechat">
          <Nav.Link>
            <FaComments className="icon" /> Live Chat
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Broadcast">
          <Nav.Link>
            <FaHistory className="icon" /> Broadcast
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Template">
          <Nav.Link>
            <FaAddressBook className="icon" /> Template
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/campaigns">
          <Nav.Link>
            <FaBullhorn className="icon" /> Campaigns
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/meta-ads">
          <Nav.Link>
            <FaFacebook className="icon" /> Meta Ads
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/flows">
          <Nav.Link>
            <FaProjectDiagram className="icon" /> Flows
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/wa-pay">
          <Nav.Link>
            <FaCreditCard className="icon" /> WA Pay
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/manage">
          <Nav.Link>
            <FaCog className="icon" /> Manage
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/integrations">
          <Nav.Link>
            <FaPuzzlePiece className="icon" /> Integrations
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default Sidebar;
