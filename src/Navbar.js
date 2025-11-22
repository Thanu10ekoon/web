import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={`nav-shell ${isSolid ? 'nav-shell--solid' : ''}`}>
      <div className="nav-inner app-max-width">
        <Link to="/home" className="nav-logo" aria-label="Navigate home">
          <span>Thanujaya</span>
          <small>Engineer · Storyteller</small>
        </Link>

        <nav className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} aria-label="Primary navigation">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
