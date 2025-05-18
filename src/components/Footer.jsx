import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo" data-aos="fade-right">
            <h3>Veeraboina Suresh</h3>
            <p>MERN Stack Developer</p>
          </div>

          <div className="footer-links">
            <div className="footer-nav" data-aos="fade-up">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-social" data-aos="fade-up">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://github.com/suresh1319" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/suresh-yadav1319/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/veeraboinasuresh" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="mailto:sureshyadav6114@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" data-aos="fade-up">
          <p>&copy; {currentYear} Veeraboina Suresh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
