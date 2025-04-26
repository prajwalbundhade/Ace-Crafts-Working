import { useState } from "react";
import { Card, Button, Badge, Modal, Table, Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import "./DarkCard.css";
import Buy_now_btn from "../../images/Buy_now_btn_copy.png";
import New_buy_now from "../../images/New_buy_now.png";
import book_now from "../../images/book_now.png";
import nextIcon from "../../images/rightIcon.png";
import prevIcon from "../../images/prevIcon.png";
const DarkCard = ({ data }) => {
  const { title, state, mediaContent, description, buyNow, price, bookNow, newbuynow } = data;
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
      case "Mod":
        return <Badge bg="success">Mod</Badge>;
      case "Plugin":
        return <Badge bg="warning">Plugin</Badge>;
      case "Datapack":
        return <Badge bg="info">Datapack</Badge>;
      case "Package":
        return <Badge bg="success">Package</Badge>;
      default:
        return null;
    }
  };

  const getVideoLabel = (media) => {
    if (!media.ytLink) return null;
    if (media.isRealVideo) return "Real Video";
    if (media.isRefVideo) return "Ref. Video";
    return null;
  };

  return (
    <>
{/* new card starts here */}
<Card className="custom-bg text-white mb-3 cardStyle">
      <div className="image-carousel-container">
        {mediaContent && mediaContent.length > 1 ? (
          <Carousel
            indicators={false}
            controls={true}
            prevIcon={
              <img src={prevIcon} alt="Previous" className="custom-carousel-icon" />
            }
            nextIcon={
              <img src={nextIcon} alt="Next" className="custom-carousel-icon" />
            }
          >
            {mediaContent.map((media, index) => (
              <Carousel.Item key={index}>
                <div className="image-container">
                  {media.ytLink ? (
                    <a href={media.ytLink} target="_blank" rel="noopener noreferrer">
                      <Card.Img
                        className="CardImg"
                        variant="top"
                        src={media.imageUrl}
                        alt={`${title} image`}
                      />
                      {getVideoLabel(media) && (
                        <div className="video-label">{getVideoLabel(media)}</div>
                      )}
                    </a>
                  ) : (
                    <Card.Img
                      className="CardImg"
                      variant="top"
                      src={media.imageUrl}
                      alt={`${title} image`}
                    />
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : mediaContent && mediaContent.length === 1 ? (
          <div className="image-container">
            {mediaContent[0].ytLink ? (
              <a href={mediaContent[0].ytLink} target="_blank" rel="noopener noreferrer">
                <Card.Img
                  className="CardImg"
                  variant="top"
                  src={mediaContent[0].imageUrl}
                  alt={`${title} image`}
                />
                {getVideoLabel(mediaContent[0]) && (
                  <div className="video-label">{getVideoLabel(mediaContent[0])}</div>
                )}
              </a>
            ) : (
              <Card.Img
                className="CardImg"
                variant="top"
                src={mediaContent[0].imageUrl}
                alt={`${title} image`}
              />
            )}
          </div>
        ) : null}
      </div>
      <div className="badge-container">{getStateBadge(state)}</div>
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="desc">{description}</Card.Text>
        {price && <span className="tag">Price: {price} </span>}
          {buyNow && (
            <a href={buyNow} target="_blank" rel="noopener noreferrer">
              <img className="buybutton" src={Buy_now_btn} alt="buybutton" />
            </a>
          )}

          {bookNow && (
            <img
              className="buybutton"
              src={book_now}
              alt="buybutton"
              onClick={handleBookNow}
            />
          )}
          {newbuynow && (
            <img
              className="buybutton"
              src={New_buy_now}
              alt="buybutton"
              onClick={handleNewBuyNow}
            /> //new buy now
          )}
      </Card.Body>
    </Card>

      {/* Modal for Booking */}
      <Modal show={showBookModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Book Mod</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table bordered>
            <tbody>
              <tr>
                <td>1)</td>
                <td>
                  These mods are under development and can be booked in advance
                  for your region.
                </td>
              </tr>
              <tr>
                <td>2)</td>
                <td>
                  📩 To book, contact me:
                  <ul>
                    <li>
                      Email -{" "}
                      <a href="mailto:contact@teamacecrafts.com">
                        contact@teamacecrafts.com
                      </a>
                    </li>
                    <li>
                      Email -{" "}
                      <a href="mailto:teamacecrafts@gmail.com">
                        teamacecrafts@gmail.com
                      </a>
                    </li>
                    <li>💬 Discord – acecrafts</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>3)</td>
                <td>
                  Once the mod is complete, you’ll receive it within 24-48
                  hours after payment.
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
          <Modal.Title>How to Book This Mod</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> This mod requires customization based on your Minecraft skin.</p>
          <p> The mod is already completed. To proceed, contact me here:</p>
          <ul>
            <li>
              {" "}
              <b>Email </b> –{" "}
              <a href="mailto:contact@teamacecrafts.com">
                contact@teamacecrafts.com
              </a>
            </li>
            <li>
              {" "}
              <b>Email</b> –{" "}
              <a href="mailto:teamacecrafts@gmail.com">
                teamacecrafts@gmail.com
              </a>
            </li>
            <li>💬 Discord – acecrafts </li>
          </ul>
          <p>
            Send me your skin along with the list of players who will be using
            the mod.
          </p>
          <p>
            {" "}
            I will provide an invoice. Once payment is completed, you will
            receive the mod within <b>24-48 hours.</b>
          </p>
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

DarkCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    state: PropTypes.string,
    mediaContent: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        ytLink: PropTypes.string,
        isRealVideo: PropTypes.bool,
        isRefVideo: PropTypes.bool,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    buyNow: PropTypes.string,
    price: PropTypes.string,
    bookNow: PropTypes.bool,
    newbuynow: PropTypes.bool,
  }).isRequired,
};

export default DarkCard;
