import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Monster = ({ onClose }) => {
  const mods = [
    {
      link: "https://youtu.be/QWoEcIrbUWs?si=pgV-_YStKJ9joNBs",
      img: "https://img.youtube.com/vi/QWoEcIrbUWs/maxresdefault.jpg",
      title: "Minecraft But I Can Turn Into Monster",
    },
    {
      link: "https://www.youtube.com/watch?v=49H6dAi-2Jo",
      img: "https://img.youtube.com/vi/49H6dAi-2Jo/maxresdefault.jpg",
      title: "Turning Into Snake",
    },
    {
      link: "https://youtu.be/9K6xkDjpqVE?feature=shared",
      img: "https://img.youtube.com/vi/9K6xkDjpqVE/maxresdefault.jpg",
      title: "Minecraft, But You Turn Into a Zombie...",
    },
    {
      link: "https://www.youtube.com/watch?v=XH3278Ywzrk",
      img: "https://img.youtube.com/vi/XH3278Ywzrk/maxresdefault.jpg",
      title: "Minecraft But MOBS Have Secret Rooms",
    },
    {
      link: "https://youtu.be/jm3-826jRs4?si=U829QKR2ib0RcIfG",
      img: "https://img.youtube.com/vi/jm3-826jRs4/maxresdefault.jpg",
      title: "Minecraft But I Can Turn Into Dragon",
    },
    {
      link: "https://www.youtube.com/watch?v=doyaU64QI4M",
      img: "https://img.youtube.com/vi/doyaU64QI4M/maxresdefault.jpg",
      title: "Minecraft But It's Scary Block",
    },
    {
      link: "https://youtu.be/2vY8l8kLpfY?feature=shared",
      img: "https://img.youtube.com/vi/2vY8l8kLpfY/maxresdefault.jpg",
      title: "Minecraft, But You Turn Into a WORM!",
    },
    {
      link: "https://youtu.be/lv1i8fWwDVY?feature=shared",
      img: "https://img.youtube.com/vi/lv1i8fWwDVY/maxresdefault.jpg",
      title: "Minecraft, But I Become the Wither Storm",
    },
    {
      link: "https://youtu.be/xZkzT2uSHgw?feature=shared",
      img: "https://img.youtube.com/vi/xZkzT2uSHgw/maxresdefault.jpg",
      title: "Minecraft But You Turn Into a SPIDER!",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Scary Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Scary Mods
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

export default Monster;
