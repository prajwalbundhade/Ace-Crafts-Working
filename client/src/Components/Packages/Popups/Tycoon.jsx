import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tycoon = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=sNMy3mU-LbA",
      img: "https://img.youtube.com/vi/sNMy3mU-LbA/maxresdefault.jpg",
      title: "Running a Million Blocks"
    },
    {
      link: "https://www.youtube.com/watch?v=xOVzN973z2U",
      img: "https://i.ytimg.com/vi/xOVzN973z2U/mqdefault.jpg",
      title: "Mine One Million Blocks"
    },
    {
      link: "https://www.youtube.com/watch?v=KwPPQrZVkGM",
      img: "https://i.ytimg.com/vi/KwPPQrZVkGM/mqdefault.jpg",
      title: "Million Diamonds"
    },
    {
      link: "https://www.youtube.com/watch?v=0b1M5ELbTIQ",
      img: "https://i.ytimg.com/vi/0b1M5ELbTIQ/mqdefault.jpg",
      title: "One Million Hearts"
    },
    {
      link: "https://www.youtube.com/watch?v=Bnau-Y-tcPQ",
      img: "https://img.youtube.com/vi/Bnau-Y-tcPQ/maxresdefault.jpg",
      title: "Minecraft But It's Shop Block"
    },
    {
      link: "https://www.youtube.com/watch?v=9TuD0LyT39k",
      img: "https://img.youtube.com/vi/9TuD0LyT39k/maxresdefault.jpg",
      title: "Minecraft But XP = Money"
    },
    {
      link: "https://youtu.be/QpQNmxtnfaE?feature=shared",
      img: "https://img.youtube.com/vi/QpQNmxtnfaE/maxresdefault.jpg",
      title: "Minecraft, Maar XP Is Geld!"
    },
    {
      link: "https://youtu.be/YPuOpO_YLMw?feature=shared",
      img: "https://img.youtube.com/vi/YPuOpO_YLMw/maxresdefault.jpg",
      title: "Minecraft, But Your Money = More Realistic"
    },
    {
      link: "https://www.youtube.com/watch?v=qtHR0vvo5Qw",
      img: "https://img.youtube.com/vi/qtHR0vvo5Qw/maxresdefault.jpg",
      title: "Minecraft But I Survive 1,000,000 Deaths"
    },
    {
      link: "https://youtu.be/Uiaga37zyx0?feature=shared",
      img: "https://img.youtube.com/vi/Uiaga37zyx0/maxresdefault.jpg",
      title: "Minecraft But I Survive 1 BILLION Deaths"
    },
    {
      link: "https://www.youtube.com/watch?v=vCFak8BFQO4&pp=ygUMbWlsbGlvbiBtYWNl",
      img: "https://img.youtube.com/vi/vCFak8BFQO4/maxresdefault.jpg",
      title: "Minecraft But I Can Buy Million $ Mace"
    },
    {
      link: "https://www.youtube.com/watch?v=UbbejP_iHkU",
      img: "https://img.youtube.com/vi/UbbejP_iHkU/maxresdefault.jpg",
      title: "Million Legos"
    },
    {
      link: "https://youtu.be/IXsTRzWKcvg?feature=shared",
      img: "https://img.youtube.com/vi/IXsTRzWKcvg/maxresdefault.jpg",
      title: "Minecraft But I EARN MONEY AS I GROW"
    },
    // Add more entries as needed
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Tycoon Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Tycoon Mods
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

export default Tycoon;
