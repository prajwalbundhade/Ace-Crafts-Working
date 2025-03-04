import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Roleplay = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=Bnau-Y-tcPQ",
      img: "https://img.youtube.com/vi/OwO5fvFlKt8/maxresdefault.jpg",
      title: "Minecraft But From Nerd To Popular",
    },
    {
      link: "https://www.youtube.com/watch?v=k3A9hYyCKn8",
      img: "https://img.youtube.com/vi/k3A9hYyCKn8/maxresdefault.jpg",
      title: "Minecraft But I Can Open a Restaurant",
    },
    {
      link: "https://www.youtube.com/watch?v=k9i8cw--u2w",
      img: "https://i.ytimg.com/vi/k9i8cw--u2w/mqdefault.jpg",
      title: "Peasant to King",
    },
    {
      link: "https://www.youtube.com/watch?v=v7IF1dvGz2Q",
      img: "https://i.ytimg.com/vi/v7IF1dvGz2Q/mqdefault.jpg",
      title: "Minecraft Surgery",
    },
    {
      link: "https://www.youtube.com/watch?v=OdRzffsn9Kc",
      img: "https://i.ytimg.com/vi/OdRzffsn9Kc/mqdefault.jpg",
      title: "Come Back to Life",
    },
    {
      link: "https://youtu.be/s2iKbLZmrb0?si=M-iBzrjwnMmYmSQP",
      img: "https://img.youtube.com/vi/s2iKbLZmrb0/maxresdefault.jpg",
      title: "Minecraft, But War to Peace",
    },
    {
      link: "https://youtu.be/SxfL3Chk-Nw?si=_i1O-r1pmRPOO_AL",
      img: "https://img.youtube.com/vi/SxfL3Chk-Nw/maxresdefault.jpg",
      title: "Minecraft But You Can Open School",
    },
    {
      link: "https://youtu.be/L4otnDMJjaA?si=lZy74jI4OgkY1zfm",
      img: "https://img.youtube.com/vi/L4otnDMJjaA/maxresdefault.jpg",
      title: "Minecraft But From Pirate To Captain",
    },
    {
      link: "https://www.youtube.com/watch?v=aRiYSoht_D4",
      img: "https://img.youtube.com/vi/aRiYSoht_D4/maxresdefault.jpg",
      title: "Minecraft But You Grow Young To Old",
    },
    {
      link: "https://youtu.be/l6eWqlBHAIU?si=HM8LD3F9lirXVk0Y",
      img: "https://img.youtube.com/vi/l6eWqlBHAIU/maxresdefault.jpg",
      title: "Minecraft But It’s Elemental Power",
    },
    {
      link: "https://www.youtube.com/watch?v=rwBXRLq2D-E",
      img: "https://img.youtube.com/vi/rwBXRLq2D-E/maxresdefault.jpg",
      title: "Minecraft But Mobs EAT You...",
    },
    {
      link: "https://www.youtube.com/watch?v=T2y0Mv4gmx8",
      img: "https://img.youtube.com/vi/T2y0Mv4gmx8/maxresdefault.jpg",
      title: "Minecraft But You Can Cut ANYTHING...",
    },
    {
      link: "https://youtu.be/wN4QKPWAxyo?feature=shared",
      img: "https://img.youtube.com/vi/wN4QKPWAxyo/maxresdefault.jpg",
      title: "I Opened a Mob Zoo in Minecraft",
    },
    {
      link: "https://youtu.be/KzDFc7M4pvk?feature=shared",
      img: "https://img.youtube.com/vi/KzDFc7M4pvk/maxresdefault.jpg",
      title: "I Open a $1,000,000 Business in Minecraft....",
    },
    {
      link: "https://youtu.be/BlxtACuphlQ?feature=shared",
      img: "https://img.youtube.com/vi/BlxtACuphlQ/maxresdefault.jpg",
      title: "I OPENED A HOTEL IN MINECRAFT.....",
    },
    {
      link: "https://youtu.be/XJFsl72uUHM?feature=shared",
      img: "https://img.youtube.com/vi/XJFsl72uUHM/maxresdefault.jpg",
      title: "Minecraft But I Open an Airport!",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Roleplay Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Roleplay Mods
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

export default Roleplay;
