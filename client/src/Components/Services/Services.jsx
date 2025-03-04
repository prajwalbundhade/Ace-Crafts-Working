import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="services-card" style={{ backgroundColor: "#444" }}>
              <Card.Body>
                <Card.Title
                  className="services-title"
                  style={{ color: "#3da8f0" }}
                >
                  Craftify Productions Custom Services
                </Card.Title>
                <Card.Text className="services-text">
                  Unleash your creativity and take your Minecraft content to the
                  next level with Craftify Productions' custom services:
                </Card.Text>
                <Row>
                  <Col md={6}>
                    <ServiceItem
                      title="Script Writing"
                      description="Elevate your storytelling with custom scripts tailored for your Minecraft adventures. Engage your audience with fresh narratives and unique plot twists."
                    />
                    <ServiceItem
                      title="Custom Minecraft Mod & Plugin Development"
                      description="Transform your ideas into reality with bespoke Minecraft mods and plugins. From game-changing features to immersive experiences, we bring your vision to life."
                    />
                    <ServiceItem
                      title="Minecraft 3D Models"
                      description="Add depth and realism to your world with custom 3D models. From intricate structures to detailed characters, enhance your gameplay with stunning visuals."
                    />
                  </Col>
                  <Col md={6}>
                    <ServiceItem
                      title="Texture Packs"
                      description="Personalize your Minecraft experience with custom texture packs. Stand out from the crowd with unique textures and visual enhancements."
                    />
                    <ServiceItem
                      title="Replay Mod Shots for Intros"
                      description="Create captivating intros with Replay Mod shots. Capture the most memorable moments of your gameplay and leave a lasting impression on your viewers."
                    />
                    <ServiceItem
                      title="Video Editing"
                      description="Polish your Minecraft videos to perfection with professional video editing services. From cutting-edge effects to seamless transitions, make your content shine."
                    />
                    <ServiceItem
                      title="Custom Packages"
                      description="Bundle maps, mods, textures, and scripts into custom packages tailored to your preferences. Streamline your content creation process and unlock endless possibilities."
                    />
                  </Col>
                </Row>
                <div className="text-center">
                  <Link to="/contact">
                    <Button variant="primary">Order Now</Button>
                  </Link>
                </div>

                <div className="contact-info">
                  <p>
                    Ready to elevate your Minecraft experience? Contact us to
                    explore our custom services:
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:contact@craftifyproductions.com"
                      className="text-white"
                    >
                      contact@craftifyproductions.com
                    </a>{" "}
                    |{" "}
                    <a
                      href="mailto:techthunderz443@gmail.com"
                      className="text-white"
                    >
                      techthunderz443@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Discord:</strong>{" "}
                    <span className="text-white">thunderzlucky</span>
                  </p>
                  <p>Let's turn your Minecraft dreams into reality!</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Service Item Component
const ServiceItem = ({ title, description }) => {
  return (
    <Card className="service-item" style={{ backgroundColor: "#444" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Services;
