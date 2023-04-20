import React from "react";
import { BackIcon } from "../../assets/SVGComponents/backIcon";
import "./fullScreenModal.css";
function FullScreenModal({ customModalStyles, isOpen, onClose, children }) {
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
