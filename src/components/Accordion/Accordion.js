import React, { useState } from "react";
import "./accordion.css";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="accordionItem">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div className="title">{title}</div>
        <div>{isActive ? "🔼" : "🔽"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
