import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/images/photo.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 ref={titleRef} className={`section-title scroll-animate ${titleVisible ? 'visible' : ''}`}>About Me</h2>
        <div className="about-content">
          <div ref={imageRef} className={`about-image scroll-animate-left ${imageVisible ? 'visible' : ''}`}>
            <img src={profileImage} alt="Veeraboina Suresh" className="profile-img" />
          </div>
          <div ref={textRef} className={`about-text scroll-animate-right ${textVisible ? 'visible' : ''}`}>
            <h3>Hello, I'm Veeraboina Suresh</h3>
            <p>
              Motivated Full-Stack Developer skilled in Node.js, Express.js, and MongoDB, with a strong focus on backend development
              and problem-solving. I have a solid foundation in data structures and algorithms, and a keen interest in data science and machine
              learning.
            </p>
            <p>
              I'm a quick learner with a passion for building efficient, scalable web applications. My experience includes frontend development
              as an intern at CODTECH IT SOLUTIONS, where I developed and optimized web applications using HTML, CSS, and JavaScript.
            </p>
            <div className="about-details animate-fadeInUp">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Veeraboina Suresh</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">sureshyadav6114@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">+91 7013779299</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Bayyaram, Mahabubabad, Telangana, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Open to Remote/Onsite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
