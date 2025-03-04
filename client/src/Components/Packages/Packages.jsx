import React, { useState } from 'react';
import './Packages.css';
import Oneblock from './Popups/Oneblock';
import Tycoon from './Popups/Tycoon';
import Roleplay from './Popups/Roleplay';
import Monster from './Popups/Monster';
import Turnsto from './Popups/Turnsto';
import World from './Popups/World'
import Crazy from './Popups/Crazy';
import Solo from './Popups/Solo';
import Base from './Popups/Base'

const Packages = () => {
  const [showPopup, setShowPopup] = useState(null);

  const handleCardClick = (popupNumber) => {
    setShowPopup(popupNumber);
  };

  const handleClose = () => {
    setShowPopup(null);
  };

  return (
    <div className="container packages-container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(1)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/oneblock-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Oneblock Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Oneblock Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(2)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/tycoon-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Tycoon Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Tycoon Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(3)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/roleplay-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Roleplay Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Roleplay Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(4)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/Monstermod-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Roleplay Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Monster & Scary Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(5)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/turnsto-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Roleplay Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Turns-To Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(6)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/world-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Roleplay Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">World Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(7)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/crazymod-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Roleplay Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Crazy Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(8)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/solo-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Solo Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Solo Mods</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card package-card" onClick={() => handleCardClick(9)}>
            <img 
              src="https://updates.craftifyproductions.com/wp-content/uploads/2024/08/basemod-scaled.jpg" 
              className="card-img-top package-img" 
              alt="Base Mods" 
            />
            <div className="card-body">
              <h5 className="package-title">Base Mods</h5>
            </div>
          </div>
        </div>
      </div>

      {showPopup === 1 && <Oneblock onClose={handleClose} />}
      {showPopup === 2 && <Tycoon onClose={handleClose} />}
      {showPopup === 3 && <Roleplay onClose={handleClose} />}
      {showPopup === 4 && <Monster onClose={handleClose} />}
      {showPopup === 5 && <Turnsto onClose={handleClose} />}
      {showPopup === 6 && <World onClose={handleClose} />}
      {showPopup === 7 && <Crazy onClose={handleClose} />}
      {showPopup === 8 && <Solo onClose={handleClose} />}
      {showPopup === 9 && <Base onClose={handleClose} />}
    </div>
  );
};

export default Packages;
