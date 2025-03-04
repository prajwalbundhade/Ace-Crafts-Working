import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Turnsto = ({ onClose }) => {
  const mods = [
    {
      link: "https://youtu.be/N3h7dntNoj8?si=XrPVuRsVx2w259AF",
      img: "https://i.ytimg.com/vi/N3h7dntNoj8/mqdefault.jpg",
      title: "Minecraft But Everything I Touch Turns Void",
    },
    {
      link: "https://youtu.be/ogbVf3ehq9Y?si=yx0nUU5-9CIp8eCy",
      img: "https://img.youtube.com/vi/ogbVf3ehq9Y/maxresdefault.jpg",
      title: "Minecraft But Anything I Touch Turns Into Super",
    },
    {
      link: "https://youtu.be/IARCsUvMrw4?si=p-yUt-1Q66uvonEs",
      img: "https://img.youtube.com/vi/IARCsUvMrw4/maxresdefault.jpg",
      title: "Minecraft But Everything I Touch Turns Futuristic",
    },
    {
      link: "https://youtu.be/OplauY74cME?si=8Vppnye_slc8-n7g",
      img: "https://i.ytimg.com/vi/OplauY74cME/mqdefault.jpg",
      title: "Hearts Touch",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Turns to Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">Here You Will Get All The Turns to Mods</p>
        <div className="row">
          {mods.map((mod, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-6" key={index}>
              <div className="card inner-popup-card">
                <a href={mod.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={mod.img}
                    className="card-img-top inner-popup-img"
                    alt={mod.title}
                  />
                </a>
                <h6>{mod.title}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <Link to="/contact">
            <Button variant="primary">
              Buy Now
            </Button>
          </Link>
        </div>
        <h6 className="Important Notes">Important Notes here:</h6>
        <ul className="popup-notes">
          <li>You Will Get Discount For Bulk Purchase</li>
          <li>Let Me Know If You Want to Add or Remove Any Mods</li>
          <li>You Can Test Some Mods If You Want</li>
        </ul>
        <Button className="close-btn" onClick={onClose} variant="secondary">Close</Button>
      </Modal.Body>
    </Modal>
  );
};

export default Turnsto;
