import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleSmoothScroll(e, 'home')}>
          <span className="logo-text">Suresh <span className="logo-x">V</span></span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'about')}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'skills')}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'education')}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'projects')}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={(e) => handleSmoothScroll(e, 'contact')}>
              Contact
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
