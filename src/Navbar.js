import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-button" onClick={toggleMenu}>
        <span className="menu-icon">{isOpen ? '▲' : '☰'}</span> {/* Toggle between icons */}
        <span className="menu-text">MENU</span>
      </div>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li> {/* Link to About page */}
        <li><Link to="/universitylife">University Life</Link></li>
        <li><Link to="/scllife">School Life</Link></li>
        <li><Link to="/volun">Volunteering</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
