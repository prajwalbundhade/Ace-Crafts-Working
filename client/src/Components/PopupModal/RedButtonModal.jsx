import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RedButtonModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Custom Mods and Packages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        🎮 In addition to our high-quality pre-made modpacks, we specialize in crafting <strong> custom mods and packages </strong>tailored to your vision. 🛠
        <br />
        <br />
        🌟 We take inspiration from top creators like:
        <ul>
          <strong><li>Cadres</li></strong>
          <strong><li>Problems</li></strong>
          <strong><li>Athos</li></strong>
          <strong></strong><li>...and many more!</li>
        </ul>
        💡 Looking for a unique, high-quality mod? You’re in the right place! Our expert team is ready to <strong>bring your ideas to life </strong>with top-tier maps, models, textures, and gameplay mechanics—all at an affordable rate! 💰
        <br />
        <br />
        🚀 So, what are you waiting for?<strong> Place your order now </strong>and take your gaming experience to the next level! 🎮
      </Modal.Body>
      <Modal.Footer>
      <Link to="/contact">
          <Button style={{backgroundColor:"#1bc14f", border:'none'}}onClick={handleClose}>
            Order Now
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default RedButtonModal;