import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Cursor from './components/Cursor';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative selection:bg-accent-red selection:text-white min-h-screen">
        <Cursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
