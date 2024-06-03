import React, { useState } from "react";
import "./CSS/Template.css";
import Sidebar from "./Sidebar";

const Template = () => {
  const [template, setTemplate] = useState({
    content:
      "Final Hours to Go! Offer Ends Soon!\n\n{1}% Discount on Any purchase | It's Time to Action 🛍️\n\nUse Discount Code 👉 {2} & Get {3}% Discount Expires Tonight!\n\n{4}\n\nHappy Shopping 😍😍",
    values: {
      val1: "20%",
      val2: "200OFF",
      val3: "20%",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplate((prevTemplate) => ({
      ...prevTemplate,
      [name]: value,
    }));
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setTemplate((prevTemplate) => ({
      ...prevTemplate,
      values: {
        ...prevTemplate.values,
        [name]: value,
      },
    }));
  };

  return (
    <>
      <Sidebar />
      <div className="template-form-container">
        <h2>Create New Template Message</h2>
        <textarea
          name="content"
          value={template.content}
          onChange={handleChange}
          placeholder="Write your template here..."
        />
        <div className="sample-values">
          <label>
            Value 1:
            <select
              name="val1"
              value={template.values.val1}
              onChange={handleValueChange}
            >
              <option value="10%">10%</option>
              <option value="20%">20%</option>
              <option value="30%">30%</option>
              <option value="50%">50%</option>
            </select>
          </label>
          <label>
            Value 2:
            <input
              type="text"
              name="val2"
              value={template.values.val2}
              onChange={handleValueChange}
              placeholder="e.g., 200OFF"
            />
          </label>
          <label>
            Value 3:
            <select
              name="val3"
              value={template.values.val3}
              onChange={handleValueChange}
            >
              <option value="10%">10%</option>
              <option value="20%">20%</option>
              <option value="30%">30%</option>
              <option value="50%">50%</option>
            </select>
          </label>
        </div>
        <div className="template-preview">
          <h3>Template Preview</h3>
          <div className="preview-box">
            {template.content
              .replace("{1}", template.values.val1)
              .replace("{2}", template.values.val2)
              .replace("{3}", template.values.val3)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
