import React, { useState } from "react";
import "./PopupComponent.css";
import sale_poster from '../../images/cristmasproductions.jpg';
const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <img
              src={sale_poster}
              alt="Sale Poster"
              className="popup-image"
            
            />
            {/* <button
              className="gradient-button"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupComponent;
