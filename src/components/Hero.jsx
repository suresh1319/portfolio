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
      <div className="moving-particles">
        {Array.from({ length: 30 }, (_, i) => {
          const size = Math.random() * 4 + 3;
          const isSpecial = Math.random() > 0.7;
          return (
            <div key={i} className={`particle-dot ${isSpecial ? 'special' : ''}`} style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
              width: `${size}px`,
              height: `${size}px`
            }} />
          );
        })}
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text animate-fadeInLeft">
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
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Hire Me
            </a>
          </div>
          <div className="hero-image animate-fadeInRight">
            <div className="profile-image-container">
              <img src={profileImage} alt="Veeraboina Suresh" className="profile-image" />
            </div>
          </div>
        </div>
        <div className="social-icons animate-fadeInUp">
          <a href="https://github.com/suresh1319" target="_blank" data-aos="fade-up" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" data-aos="fade-up" className="social-icon"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/suresh-yadav1319/" data-aos="fade-up" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
