import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div
      className="mt-5 text-light"
      style={{ minHeight: "100vh", backgroundColor: "#0f0f0f" }}
    >
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h5
              className="display-4 mb-4 get-in-touch"
              style={{ fontSize: "2.8rem", fontWeight: "600" }}
            >
              Get in Touch
            </h5>
            <p className="lead">
              Thank you for visiting Ace Crafts! Whether you have questions,
              feedback, or need assistance with our modpacks, we're here to
              help. If you're interested in collaborating with us or exploring
              our custom services, feel free to reach out.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Card
              className="text-light shadow-lg"
              style={{ backgroundColor: "#001306" }}
            >
              <Card.Header className="text-center">
                <h2>Contact Information</h2>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h5>Email</h5>
                  <p>
                    General Inquiries:{" "}
                    <a
                      href="mailto:contact@teamacecrafts.com"
                      className="text-info"
                    >
                      contact@teamacecrafts.com
                    </a>
                  </p>
                  <p>
                    Support:{" "}
                    <a
                      href="mailto:teamacecrafts@gmail.com"
                      className="text-info"
                    >
                      teamacecrafts@gmail.com
                    </a>
                    <br />
                  </p>
                </div>
                <div className="mt-4">
                  <h5>Discord</h5>
                  <p>
                    Connect with us on Discord -{" "}
                    <span className="text-info">acecrafts</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
