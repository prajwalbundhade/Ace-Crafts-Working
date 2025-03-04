import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const World = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=6aM15GH5zjM",
      img: "https://img.youtube.com/vi/6aM15GH5zjM/maxresdefault.jpg",
      title: "Minecraft But In a Cursed World",
    },
    {
      link: "https://youtu.be/MM9TOmOndWs?si=lljBTbjjzMaQl3jf",
      img: "https://img.youtube.com/vi/MM9TOmOndWs/maxresdefault.jpg",
      title: "Minecraft but I HAVE A CURSED MASK",
    },
    {
      link: "https://www.youtube.com/watch?v=NZt7smBjVU0",
      img: "https://img.youtube.com/vi/NZt7smBjVU0/maxresdefault.jpg",
      title: "100 Mystery Buttons",
    },
    {
      link: "https://www.youtube.com/watch?v=8nE6pInHuqQ",
      img: "https://img.youtube.com/vi/8nE6pInHuqQ/maxresdefault.jpg",
      title: "Minecraft but XP WORLD",
    },
    {
      link: "https://www.youtube.com/watch?v=aa83GpBbY-c",
      img: "https://img.youtube.com/vi/aa83GpBbY-c/maxresdefault.jpg",
      title: "Minecraft, But The World Is Lava!",
    },
    {
      link: "https://www.youtube.com/watch?v=R6XwtgBH-B0",
      img: "https://i.ytimg.com/vi/R6XwtgBH-B0/mqdefault.jpg",
      title: "Turning the World to TNT",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>World Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">Here You Will Get All The World Mods</p>
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

export default World;
