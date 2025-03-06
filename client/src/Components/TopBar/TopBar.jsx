import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pop_up_btn from '../../../src/images/pop_up_btn.png';
import yt_jobs from '../../images/yt_jobs.png';
import discord from '../../images/discord.png';
import twitter from '../../images/twitter.png';
import gmail from '../../images/gmail.png';
import ytjobs from '../../images/ytjobs.png';
import GTAV_logo from '../../images/GTAV_logo.webp';
import './TopBar.css';
import logo from '../../../src/images/Ace_craft_logo_copy.png';
import RedButtonModal from '../PopupModal/RedButtonModal';
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const TopBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const copyDiscordID = () => {
    const discordID = 'acecrafts';
    navigator.clipboard.writeText(discordID).then(() => {
      alert('Discord ID copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const openTwitter = () => {
    window.open('https://x.com/teamacecrafts', '_blank');
  };

  const openMail = () => {
    window.location.href = 'mailto:contact@teamacecrafts.com';
  };

  const openYtjobs = () => {
    window.open('https://ytjobs.co/@acecrafts', '_blank');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="topbar-container">
      {/* Logo section (left) */}
      <div className="topbar-logo">
        <img src={logo} className="logo" alt="Craftify Productions Logo" />
        <span className="logo-text">Ace Crafts</span>
      </div>

      {/* Menu toggle for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src="https://cdn-icons-png.flaticon.com/512/9710/9710841.png" alt="Menu" />
      </div>

      {/* Navigation menu (center) */}
      <div className={`topbar-nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-container">
          <ul className="nav-items">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terms" onClick={() => setMenuOpen(false)}>Terms and Conditions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link red-button" onClick={handleShow}>
                <img src={pop_up_btn} alt="Red Button" />
              </a>
            </li>
          </ul>
          {isMobile && (
            <div className={`social-icons ${menuOpen ? 'mobile-show' : ''}`}>
              <div className="social-icon" onClick={copyDiscordID}>
                <FaDiscord />
              </div>
              <div className="social-icon" onClick={openTwitter}>
                <BsTwitterX />
              </div>
              <div className="social-icon" onClick={openMail}>
                <IoMdMail />
              </div>
              <div className="social-icon" onClick={openYtjobs}>
                <img src={yt_jobs} alt="btn" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Game logos and social icons (right) */}
      <div className="topbar-right">
        {/* Social icons for mobile will be part of the dropdown menu */}
        <div className={`hide-on-mobile social-icons ${menuOpen ? 'mobile-show' : ''}`}>
          <div className="social-icon" onClick={copyDiscordID}>
            <FaDiscord />
          </div>
          <div className="social-icon" onClick={openTwitter}>
            <BsTwitterX />
          </div>
          <div className="social-icon" onClick={openMail}>
            <IoMdMail />
          </div>
          <div className="social-icon" onClick={openYtjobs}>
            <img src={yt_jobs} alt="btn" />
          </div>
        </div>
      </div>

      <RedButtonModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default TopBar;
