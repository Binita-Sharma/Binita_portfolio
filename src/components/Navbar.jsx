import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-5 right-5 z-[1000]">
      <div className="max-w-[1200px] mx-auto bg-white border border-text-primary rounded-full px-8 py-3 flex justify-between items-center shadow-sm">
        <Link to="/" className="text-2xl font-bold tracking-tight interactive">BINITA</Link>
        
        <div className="hidden md:flex gap-10 font-medium">
          <Link to="/" className="hover:text-accent-red transition-colors interactive">Home</Link>
          <Link to="/work" className="hover:text-accent-red transition-colors interactive">Work</Link>
          <Link to="/about" className="hover:text-accent-red transition-colors interactive">About</Link>
          <Link to="/contact" className="hover:text-accent-red transition-colors interactive">Contact</Link>
        </div>

        <div className="flex gap-2">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
