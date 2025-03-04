import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Oneblock = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=RO56GHReY40",
      img: "https://img.youtube.com/vi/RO56GHReY40/maxresdefault.jpg",
      title: "Minecraft But It is Space Block"
    },
    {
      link: "https://www.youtube.com/watch?v=doyaU64QI4M",
      img: "https://img.youtube.com/vi/doyaU64QI4M/maxresdefault.jpg",
      title: "Minecraft But It is Herobrine Block"
    },
    {
      link: "https://youtu.be/_QwRGGVTnlA?si=qRfGzf51jz-5Oi7G",
      img: "https://img.youtube.com/vi/_QwRGGVTnlA/maxresdefault.jpg",
      title: "Minecraft But its Diamond Block"
    },
    {
      link: "https://youtu.be/--gYtPKqbLg?si=lrrUBf8VspvMWdtD",
      img: "https://img.youtube.com/vi/--gYtPKqbLg/maxresdefault.jpg",
      title: "Minecraft But its Op Block"
    },
    {
      link: "https://youtu.be/ED9jTZnKRlo?si=5FwBkNTHhd4p3Jje",
      img: "https://img.youtube.com/vi/ED9jTZnKRlo/maxresdefault.jpg",
      title: "Minecraft But its Scary Block"
    },
    {
      link: "https://youtu.be/nLI4ZOfjIEY?feature=shared",
      img: "https://img.youtube.com/vi/nLI4ZOfjIEY/maxresdefault.jpg",
      title: "Minecraft But Its One Elemental Block"
    },
    {
      link: "https://youtu.be/wgERtuUkhHA?si=UhYLd0WM-eIguVNo",
      img: "https://i.ytimg.com/vi/wgERtuUkhHA/mqdefault.jpg",
      title: "Minecraft But It’s 1 On Super Block"
    },
    {
      link: "https://youtu.be/gZcYePmCTWk?si=MFfeZAHC22vjeIuv",
      img: "https://img.youtube.com/vi/gZcYePmCTWk/maxresdefault.jpg",
      title: "Minecraft But There Is One Hacker Block"
    },
    // Add more entries as needed
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Oneblock Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Oneblock Mods
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
          <li>Let Me Know If you Want to add or remove any mods</li>
          <li>You can Test Some Mods If You Want</li>
        </ul>
        <Button className="close-btn" onClick={onClose} variant="secondary">Close</Button>
      </Modal.Body>
    </Modal>
  );
};

export default Oneblock;
