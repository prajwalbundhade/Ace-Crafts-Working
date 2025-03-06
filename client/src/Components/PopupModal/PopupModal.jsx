import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center" style={{ color: '#1bc14f', fontWeight: 'bold' }}>
          Welcome to Ace Crafts
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <p><strong>Ace Crafts: Your Destination for High-Quality Modpacks!</strong></p>

          <p>We create premium modpacks inspired by content creators like Cadres, Problems, Athos, and many others. Although we take inspiration, we are not the original developers of the mods featured in their videos.</p>

          <h6 style={{ color: '#333', marginBottom: '10px' , fontWeight:'bold'}}>Why Choose Ace Crafts?</h6>
          <ul style={{ paddingLeft: '20px' }}>
            <li>High-Quality Modpacks – Top-tier maps, models, textures, and mods.</li>
            <li>Fair Pricing – Competitive rates for high-quality craftsmanship.</li>
            <li>Developer Support – Our developers are fairly compensated for their work.</li>
          </ul>

          <h6 style={{ color: '#333', marginBottom: '10px' , fontWeight:'bold'}}>💳 Payment & Orders</h6>
          <ul style={{ paddingLeft: '20px' }}>
            <li>We accept PayPal. For other payment options, contact us.</li>
            <li>Instant Mega link download upon purchase.</li>
            <li><strong>Bulk discounts available!</strong> Contact us for offers.</li>
          </ul>

          <h6 style={{ color: '#333', marginBottom: '10px', fontWeight:'bold' }}>📌 Custom Orders & Support</h6>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Need a custom modpack? Get in touch with us.</li>
            <li>Found a bug? We'll help you resolve it quickly!</li>
          </ul>

          <h6 style={{ color: '#333', marginBottom: '10px', fontWeight:'bold' }}>Contact Us:</h6>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Email: <span style={{ color: '#1bc14f' }}>contact@teamacecrafts.com</span></li>
            <li>Discord: <span style={{ color: '#1bc14f' }}>acecrafts</span></li>
          </ul>

          <p>
            By using <span style={{ color: '#1bc14f' }}>teamacecrafts.com</span>, you agree to our Terms and Conditions.
          </p>

          <p>– The Ace Crafts Team 🚀</p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose} style={{ width: '100%' }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
