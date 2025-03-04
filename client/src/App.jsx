import React, { useState, useEffect } from 'react';
import TopBar from './Components/TopBar/TopBar';
import PageContent from './Components/PageContent/PageContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
// import Services from './Components/Services/Services';
// import Packages from './Components/Packages/Packages';
import './App.css';
import TermsAndCondition from './Components/TermsAndCondition/TermsAndCondition';
import { cardsData } from './Data/CardData';
import ContactPage from './Components/Contact/Contact';
import PopupModal from './Components/PopupModal/PopupModal';
import Footer from './Components/Footer/Footer';
// import PopupComponent from "./Components/PopupComponent/PopupComponent";



function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // modal 
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShowModal(true);
      localStorage.setItem('hasSeenModal', 'true');
    }
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <Router>
      <div className='app'>
        <TopBar />
        {/* <PopupComponent /> */}
        <Routes>
          <Route path="/" element={<PageContent cardsData={cardsData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/packages" element={<Packages />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <PopupModal show={showModal} handleClose={handleClose} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
