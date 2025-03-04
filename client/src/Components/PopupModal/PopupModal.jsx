import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='primary'style={{color:'#1bc14f'}} >Welcome to Ace Crafts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <p><strong>Ace Crafts: Your Destination for High-Quality Modpacks!</strong></p>
    <ul>
        <li>We specialize in creating top-tier modpacks inspired by videos from Cadres, Problems, Athos, and many more. Please note that while we draw inspiration from these creators, we are not the original developers of the mods featured in their videos.</li>
        <li><strong>Why Choose Ace Crafts?</strong></li>
        <ul>
            <li> High-Quality Modpacks – Complete with premium maps, models, textures, and mods.</li>
            <li> Fair Pricing – Prices reflect the quality of our content; higher prices mean top-tier craftsmanship.</li>
            <li> Developer Support – Our dedicated developers are fairly compensated for every sale.</li>
        </ul>
        <li><strong>💳 Payment & Booking</strong></li>
        <ul>
            <li>We currently accept payments via PayPal. Need an alternative payment method? Contact us!</li>
            <li>💎 <strong>Contact Us</strong></li>
            <ul>
                <li>Email: <span  style={{color:'#1bc14f'}} >contact@teamacecrafts.com</span></li>
                <li>Discord: <span  style={{color:'#1bc14f'}}>acecrafts</span></li>
            </ul>
            <li>🛒 <strong>Buy Now</strong><br />Click "Buy Now" to be securely redirected to PayPal for payment. Upon completing your purchase, you’ll receive a Mega link to download your modpack instantly.</li>
            <li>📌 <strong>Custom Order</strong><br />Looking for a custom modpack? Contact us through email or Discord with your requirements, and we’ll create a tailored experience just for you.</li>
            <li>🐛 <strong>Bug or Issue?</strong><br />Encountered a problem with your modpack? Reach out to us, and we’ll resolve it promptly!</li>
            <li>📦 <strong>Bulk Orders & Discounts</strong><br />Buying multiple modpacks? Contact us for exclusive discounts and benefits!</li>
        </ul>
        <li>By using <span  style={{color:'#1bc14f'}}>teamacecrafts.com</span>, you agree to our Terms and Conditions as stated on our site.</li>
    </ul>
    <p>Regards,<br />The Ace Crafts Team 🚀</p>
</Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;