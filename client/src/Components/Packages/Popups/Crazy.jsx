import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Crazy = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=NZt7smBjVU0",
      img: "https://img.youtube.com/vi/NZt7smBjVU0/maxresdefault.jpg",
      title: "100 Mystery Buttons",
    },
    {
      link: "https://www.youtube.com/watch?v=IXsTRzWKcvg",
      img: "https://img.youtube.com/vi/IXsTRzWKcvg/maxresdefault.jpg",
      title: "Size = Money",
    },
    {
      link: "https://www.youtube.com/watch?v=I2CuDeIaltQ&t=33s",
      img: "https://img.youtube.com/vi/I2CuDeIaltQ/maxresdefault.jpg",
      title: "Minecraft but MY HEART = MY STRENGTH",
    },
    {
      link: "https://www.youtube.com/watch?v=qtHR0vvo5Qw",
      img: "https://img.youtube.com/vi/qtHR0vvo5Qw/maxresdefault.jpg",
      title: "Minecraft but I Survive 1,000,000 Deaths",
    },
    {
      link: "https://youtu.be/08XBLsK_Xlw?feature=shared",
      img: "https://img.youtube.com/vi/08XBLsK_Xlw/maxresdefault.jpg",
      title: "Minecraft, But You Can Upgrade Yourself",
    },
    {
      link: "https://youtu.be/GY4pwX-LpXM?feature=shared",
      img: "https://img.youtube.com/vi/GY4pwX-LpXM/maxresdefault.jpg",
      title: "Minecraft, But I Can Go Inside Any Block !!!!",
    },
    {
      link: "https://youtu.be/nL49Id9HBlU?feature=shared",
      img: "https://img.youtube.com/vi/nL49Id9HBlU/maxresdefault.jpg",
      title: "Surviving Minecraft With My (helpless) Clone",
    },
    {
      link: "https://youtu.be/0bEHjc4nSAY?feature=shared",
      img: "https://img.youtube.com/vi/0bEHjc4nSAY/maxresdefault.jpg",
      title: "Evolving as a Blob in Minecraft",
    },
    {
      link: "https://youtu.be/j5JRJHNhWqg?feature=shared",
      img: "https://img.youtube.com/vi/j5JRJHNhWqg/maxresdefault.jpg",
      title: "Minecraft, But I Become God",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Crazy Challenges Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">Here You Will Get All The Crazy Challenges Mods</p>
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

export default Crazy;
