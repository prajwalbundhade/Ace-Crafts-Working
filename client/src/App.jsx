import React, { useState, useEffect } from 'react';
import TopBar from './Components/TopBar/TopBar';
import PageContent from './Components/PageContent/PageContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import './App.css';
import TermsAndCondition from './Components/TermsAndCondition/TermsAndCondition';
import ContactPage from './Components/Contact/Contact';
import PopupModal from './Components/PopupModal/PopupModal';
import Footer from './Components/Footer/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
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
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <PopupModal show={showModal} handleClose={handleClose} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
