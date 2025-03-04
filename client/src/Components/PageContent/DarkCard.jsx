import React, { useState } from 'react';
import { Card, Button, Badge, Modal, Table } from 'react-bootstrap';
import './DarkCard.css';
import Buy_now_btn from '../../images/Buy_now_btn_copy.png';
import New_buy_now from '../../images/New_buy_now.png';
import book_now from '../../images/book_now.png';

const DarkCard = ({ data }) => {
  const { ytLink, title, category, state, imagePath, description, buyNow, price, bookNow, newbuynow } = data;

  const [showBookModal, setShowBookModal] = useState(false);
    const [showNewBuyNowModal, setShowNewBuyNowModal] = useState(false);

  const handleModalClose = () => {
    setShowBookModal(false);
    setShowNewBuyNowModal(false);
  };

  const handleBookNow = () => {
    setShowBookModal(true);
  };

  const handleNewBuyNow = () => {
    setShowNewBuyNowModal(true);
  };

  const getStateBadge = (state) => {
    switch (state) {
      case 'Mod':
        return <Badge bg="success">Mod</Badge>;
      case 'Plugin':
        return <Badge bg="warning">Plugin</Badge>;
      case 'Datapack':
        return <Badge bg="info">Datapack</Badge>;
      case 'Package':
        return <Badge bg="success">Package</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="custom-bg text-white cardStyle">
        <a href={ytLink} target="_blank" rel="noopener noreferrer">
          <Card.Img className='CardImg' variant="top" src={imagePath} alt={`${title} image`} />
          {/* Positioning the badge on top-left */}
          <div className="badge-container">
            {getStateBadge(state)}
          </div>
        </a>
        <Card.Body>
          <Card.Title className="card-title">
            {title}
          </Card.Title>
          <Card.Text className='desc'>{description}</Card.Text>
          {price && <span className="tag">Price: {price} </span>}
          {buyNow && (
            <a href={buyNow} target="_blank" rel="noopener noreferrer">
              <img className="buybutton" src={Buy_now_btn} alt="" />
            </a>
          )}

          {bookNow && (
            <img className="buybutton" src={book_now} alt="buybutton" onClick={handleBookNow} />
           
          )}
          {newbuynow && (
            <img className="buybutton" src={New_buy_now} alt="buybutton" onClick={handleNewBuyNow} /> //new buy now
          )}
        </Card.Body>
      </Card>
 {/* <Button variant="warning" className='bookbutton' onClick={handleBookNow}>Book Now</Button> */}

      {/* Modal for Booking */}
      <Modal show={showBookModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Buy Mod</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Follow these steps to book this product:</p>
          <Table bordered>
            <tbody>
              <tr>
                <td>1)</td>
                <td>This mod needs customization according to your skin.</td>
              </tr>
              <tr>
                <td>2)</td>
                <td>
                  This mod is completed, you have to contact me here:
                  <ul>
                    <li>Email - <a href="mailto:contact@craftifyproductions.com">contact@craftifyproductions.com</a></li>
                    <li>Email - <a href="mailto:techthunderz443@gmail.com">techthunderz443@gmail.com</a></li>
                    <li>Discord - thunderzlucky</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>3)</td>
                <td>Here you have to send me your skin and the players who will be playing the mod.</td>
              </tr>
              <tr>
                <td>4)</td>
                <td>
                  I will send an invoice, and once you pay, you will receive the mod in 24-48 Hours.
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for New Buy Now */}
      <Modal show={showNewBuyNowModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Book Mod</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>These mods are <strong>under development</strong> and can be <strong>booked in advance</strong> for your region.</p>
          <p>📩 To book, contact me:</p>
          <ul>
            <li>Email – <a href="mailto:contact@craftifyproductions.com">contact@craftifyproductions.com</a></li>
            <li>Email – <a href="mailto:techthunderz443@gmail.com">techthunderz443@gmail.com</a></li>
            <li>💬 Discord – thunderzlucky</li>
          </ul>
          <p>Once the mod is complete, you’ll receive it within <strong>24-48 hours</strong> after payment.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DarkCard;
