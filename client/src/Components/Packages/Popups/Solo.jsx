import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Solo = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=Ob_WPfjPlR8&start=918",
      img: "https://i.ytimg.com/vi/Ob_WPfjPlR8/mqdefault.jpg",
      title: "Testing Minecraft Mobs IQ To See How Smart They Are",
    },
    {
      link: "https://www.youtube.com/watch?v=6aM15GH5zjM",
      img: "https://img.youtube.com/vi/6aM15GH5zjM/maxresdefault.jpg",
      title: "Minecraft But In a Cursed World",
    },
    {
      link: "https://youtu.be/uD_gD7_7tiA?si=S9v1Vpqop_4m-_xv",
      img: "https://i.ytimg.com/vi/uD_gD7_7tiA/mqdefault.jpg",
      title: "Minecraft But You Can Choose Everything",
    },
    {
      link: "https://youtu.be/HS5nnF6cp5k?si=0TGGYS94FesZAO-b",
      img: "https://img.youtube.com/vi/HS5nnF6cp5k/maxresdefault.jpg",
      title: "Minecraft But There are Elemental Swords Mod",
    },
    {
      link: "https://www.youtube.com/watch?v=tU5Y5ML0hT8",
      img: "https://i.ytimg.com/vi/tU5Y5ML0hT8/mqdefault.jpg",
      title: "Minecraft But If Every Mob Was A Chest",
    },
    {
      link: "https://www.youtube.com/watch?v=vS3ssl4d0KY",
      img: "https://i.ytimg.com/vi/vS3ssl4d0KY/mqdefault.jpg",
      title: "Paintings Are Portals",
    },
    {
      link: "https://youtu.be/tHImxKExYDk?si=pS83QGoKXEEQ0-2U",
      img: "https://i.ytimg.com/vi/tHImxKExYDk/mqdefault.jpg",
      title: "Minecraft But My Heart = World Size",
    },
    {
      link: "https://youtu.be/bpIIAFEuYkI?feature=shared",
      img: "https://img.youtube.com/vi/bpIIAFEuYkI/maxresdefault.jpg",
      title: "Minecraft, But You Can Access All The New Mobs!",
    },
    {
      link: "https://youtu.be/UdCHFGeJU1g?feature=shared",
      img: "https://img.youtube.com/vi/UdCHFGeJU1g/maxresdefault.jpg",
      title: "Minecraft But I Buy It For 1 Million Dollars",
    },
    {
      link: "https://youtu.be/5o_9k5V60gE?feature=shared",
      img: "https://img.youtube.com/vi/5o_9k5V60gE/maxresdefault.jpg",
      title: "Minecraft But I Control a Super Powerful Robot",
    },
    {
      link: "https://youtu.be/NZvz8YOtq7o?feature=shared",
      img: "https://img.youtube.com/vi/NZvz8YOtq7o/maxresdefault.jpg",
      title: "Minecraft But I'M TOO LARGE",
    },
    {
      link: "https://youtu.be/bVsCXvJ6mQY?feature=shared",
      img: "https://img.youtube.com/vi/bVsCXvJ6mQY/maxresdefault.jpg",
      title: "Minecraft But I HAVE 1 PIXEL HEART!",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Best Solo Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Best Solo Mods
        </p>
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

export default Solo;
