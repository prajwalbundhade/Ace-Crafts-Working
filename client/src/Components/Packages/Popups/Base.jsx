import React from 'react';
import './Popup.css';
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Base = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=vz99ySeAQJI",
      img: "https://img.youtube.com/vi/vz99ySeAQJI/maxresdefault.jpg",
      title: "Minecraft but I built giant illegal base",
    },
    {
      link: "https://youtu.be/4wtikGfSJYs?si=U9cwjW1lvDGtpc8b",
      img: "https://img.youtube.com/vi/4wtikGfSJYs/maxresdefault.jpg",
      title: "1$ vs 100000$ Base in Minecraft",
    },
    {
      link: "https://www.youtube.com/watch?v=2dIA0baDukE&ab_channel=Mcflame",
      img: "https://i.ytimg.com/vi/2dIA0baDukE/mqdefault.jpg",
      title: "If You Choose The Wrong Cave = Die",
    },
    {
      link: "https://youtu.be/rZQQ85ksSms?feature=shared",
      img: "https://img.youtube.com/vi/rZQQ85ksSms/maxresdefault.jpg",
      title: "DONT ENTER THE WRONG MAZE IN MINECRAFT !",
    },
    {
      link: "https://youtu.be/KkJqmO8H51w?feature=shared",
      img: "https://img.youtube.com/vi/KkJqmO8H51w/maxresdefault.jpg",
      title: "IF YOU ENTER THE WRONG TUNNEL, YOU DIE IN MINECRAFT",
    },
    {
      link: "https://www.youtube.com/watch?v=CsUMIL1LTek&ab_channel=Flameplayz",
      img: "https://i.ytimg.com/vi/CsUMIL1LTek/mqdefault.jpg",
      title: "Minecraft But You Can Go Inside Any Mob",
    },
    {
      link: "https://youtu.be/T7srT-96Tdg?si=bK0xnpW5rDggnsfp",
      img: "https://img.youtube.com/vi/T7srT-96Tdg/maxresdefault.jpg",
      title: "Minecraft But You Can Raid My Scary Base",
    },
    {
      link: "https://www.youtube.com/watch?v=IC-iG3x_9Mo",
      img: "https://img.youtube.com/vi/IC-iG3x_9Mo/maxresdefault.jpg",
      title: "Girls vs Boys Illegal Base in Minecraft",
    },
    {
      link: "https://youtube.com/watch?v=xtfwxsN95OM",
      img: "https://img.youtube.com/vi/xtfwxsN95OM/maxresdefault.jpg",
      title: "IF YOU CHOOSE THE WRONG PORTAL, YOU DIE!",
    },
    {
      link: "https://youtu.be/owjt6ZhmDXQ?si=gHiq8hp58qePLRpv",
      img: "https://img.youtube.com/vi/owjt6ZhmDXQ/maxresdefault.jpg",
      title: "Do Not Choose The WRONG TOWER In Minecraft !!!",
    },
    {
      link: "https://youtu.be/GY4pwX-LpXM?si=lIHMDGOCSHgh6dHT",
      img: "https://img.youtube.com/vi/GY4pwX-LpXM/maxresdefault.jpg",
      title: "Minecraft, But I Can Go Inside Any Block !!!!",
    },
    {
      link: "https://youtu.be/g8Amp91qyEg?feature=shared",
      img: "https://img.youtube.com/vi/g8Amp91qyEg/maxresdefault.jpg",
      title: "Rs1 vs Rs1,000,000 Million WELL in Minecraft",
    },
    {
      link: "https://youtu.be/TphsdtkwOZM?feature=shared",
      img: "https://img.youtube.com/vi/TphsdtkwOZM/maxresdefault.jpg",
      title: "4 Ways To Steal Diamonds From Villagers In Minecraft",
    },
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Base Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">Here You Will Get All The Base Mods</p>
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

export default Base;
