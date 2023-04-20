import React, { useState } from "react";
import { BackIcon } from "../../assets/SVGComponents/backIcon";
import { useNavigate } from "react-router-dom";
import "./fullScreenModal.css";
function FullScreenModal({ customModalStyles, isOpen, onClose, children }) {
  const navigate = useNavigate();

  return (
    <div className={`customModalStyles modal ${isOpen ? "open" : ""} `}>
      <div className="modal-content">
        <div className="close-btn" onClick={onClose}>
          <BackIcon className="backIcon backModalIcon" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default FullScreenModal;
