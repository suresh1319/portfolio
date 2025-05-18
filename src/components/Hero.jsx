import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/images/photo.jpg';
import Typed from 'typed.js';

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'MERN STACK Developer',
        'Tech Enthusiast',
        'Aspiring AI Engineer'
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      // Fix the container width to prevent layout shifts
      onBegin: () => {
        const container = el.current.parentElement;
        if (container) {
          container.style.minWidth = '300px';
        }
      }
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right" data-aos-delay="100">
            <p className="intro-text">Hi I am</p>
            <h1 className="name">Veeraboina Suresh</h1>
            <div className="typing-wrapper">
              <div className="title-container">
                <h2 className="title-prefix">I'm a </h2>
                <h2 className="title">
                  <span ref={el}></span>
                </h2>
              </div>
            </div>
            <p className="description">
              Motivated Full-Stack Developer skilled in Node.js, Express.js, and MongoDB, with a strong focus on backend development
              and problem-solving. I have a solid foundation in data structures and algorithms, and a keen interest in data science and machine
              learning.
            </p>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-delay="100">
            <div className="profile-image-container">
              <img src={profileImage} alt="Veeraboina Suresh" className="profile-image" />
            </div>
          </div>
        </div>
        <div className="social-icons" data-aos="fade-up" data-aos-delay="200">
          <a href="https://github.com/suresh1319" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/suresh-yadav1319/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
