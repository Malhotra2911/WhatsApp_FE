import React, { useState } from "react";
import "./CSS/Broadcast.css";
import Sidebar from "./Sidebar";

function Broadcast() {
  const [allSelected, setAllSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [campaignName, setCampaignName] = useState("");

  const contacts = [
    { name: "Irshad", mobile: "+91 9131594790", status: "Inactive" },
    { name: "Dipak", mobile: "+91 6306909564", status: "Inactive" },
    { name: "Gaurav", mobile: "+91 9174799363", status: "Inactive" },
    { name: "User-XYZ", mobile: "+91 9131594790", status: "Inactive" },
  ];

  const phoneNumbers = contacts.map((contact) => contact.mobile); // Collect phone numbers for API

  const toggleSelectAll = () => {
    setAllSelected(!allSelected);
  };

  const handleBroadcastClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendNow = async () => {
    console.log(phoneNumbers);
    const WABA_ID = "102796426218101";
    const PHONE_NUMBER_ID = "102796426218101";
    const ACCESS_TOKEN =
      "EAAGzFARgdQ4BOwcnLEcTJZA7qw3y2CrmU7PElRLX034acsbIY2yOl0MB8tPqZAwZAYXTQu84IOjeCZBNZA8jvZCRAel8EuQ27EvvP40r85aBol6011roFehpeFOegBMOIZBbt3TGBSpt4ZCkWZAFrPTZBEWNZA8OWJJnZBYpaEmEfz2Bs3JIeBrTmDIfZA10tB9nnPv8GfPngy3n3MG5PFiK2kH9Xdm9ZC4Keu0iOnzAcZD";
    for (let phone of phoneNumbers) {
      const url = `https://graph.facebook.com/v20.0/${WABA_ID}/messages`;
      const payload = {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: {
          body: message,
        },
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Failed to send message", response.statusText);
      }
    }

    handleCloseModal();
    alert("Messages sent successfully");
  };

  return (
    <>
      <Sidebar />
      <div className="contacts">
        <div className="contacts-header">
          <div className="quick-guide">
            <p className="quick-guide-title">Quick Guide</p>
            <p>
              Import contact, create audience & launch campaign, all from one
              place.
            </p>
            <p className="quick-guide-import">
              Import up to 2 lakh contacts in one go
            </p>
            <button className="watch-tutorial">Watch Tutorial</button>
          </div>
          <div className="contacts-actions">
            <button className="broadcast-button" onClick={handleBroadcastClick}>
              BROADCAST
            </button>
            <button className="add-contact">+ Add Contact</button>
            <div className="import-dropdown">
              <button className="import-button">Import</button>
              <div className="import-options">
                <button>Import Contacts</button>
                <button>Import and Broadcast NEW</button>
              </div>
            </div>
            <button className="actions-button">Actions</button>
          </div>
        </div>
        <div className="contacts-search">
          <input type="text" placeholder="Search name or mobile number" />
          <button className="filter-button">Filter</button>
        </div>
        <div className="contacts-list">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Tags</th>
                <th>Source</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" checked={allSelected} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.mobile}</td>
                  <td></td>
                  <td></td>
                  <td>{contact.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="modall">
            <div className="modal-contentt">
              <span className="close-button" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>Create Campaign</h2>
              <div className="modall-body">
                <input
                  type="text"
                  placeholder="Enter your campaign name here"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                />
                <textarea
                  placeholder="Write your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="modall-footer">
                <button className="cancel-button" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button className="send-button" onClick={handleSendNow}>
                  Send Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Broadcast;
