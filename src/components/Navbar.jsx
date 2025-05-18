import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-text">Suresh <span className="logo-x">V</span></span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
